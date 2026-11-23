// Saltgate: boot, the frame loop, tools and input.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { og } from '@opengamehq/sdk';
import manifest from '../opengame.json';
import { generate, W, SN, SX, SZ, wx, wz, ci, cj, PAN_FLOOR, BUND } from './world.js';
import { hashSeed } from './noise.js';
import { Renderer } from './render.js';
import { buildVillage, buildReeds, makeBoat, heightAt, MAT, GATE_MARK_Y } from './props.js';
import { Game, COST } from './game.js';
import { UNLOCKS } from './works.js';
import { SEASON_END } from './economy.js';
import { CameraRig } from './camera.js';
import { Hud } from './hud.js';
import { Hints } from './hints.js';
import { BrineMotes } from './effects.js';
import { LookFX } from './fx.js';
import { Sound } from './audio.js';
import * as tide from './tide.js';
import { storage, snapshot, serialise, parse, restore, digest } from './save.js';
import { registerOffline } from './offline.js';
import './saltgate-ui.css';
import { loadSettings, QUALITY } from './settings.js';
import { createMenus } from './menus.js';

const params = new URLSearchParams(location.search);
const seed = hashSeed(params.get('seed') || 'saltgate-1');
const canvas = document.getElementById('c');

const world = generate(seed);
const view = new Renderer(canvas, world);
const reeds = buildReeds(world, view.scene);
const village = buildVillage(world, view.scene);
const game = new Game(world, { renderer: view, reeds, scene: view.scene });
if (params.has('judge')) game.frozen = true;
const rig = new CameraRig(view.camera, world, canvas);
const sound = new Sound();
const hints = new Hints(game);
const motes = new BrineMotes(view.scene);
const fx = new LookFX(view.scene, canvas);
let traderLast = 0, traderMoving = false, visualTime = 0, boatsPlaced = false;

// open on the starting works, the pan in the foreground and the creek behind
{
  const p = game.pans[0];
  const cx = wx(p.i0 + p.w / 2) - 4, cz = wz(p.j0 + p.d / 2);
  rig.set(cx, cz, 0.85, 0.6, 46);
}

// -------------------------------------------------------------- boats
const moored = makeBoat(MAT.sail);
moored.scale.setScalar(0.7);
const quayP = village.quay.position;
moored.position.set(quayP.x - 1.6, 0, quayP.z + 2.5);
moored.rotation.y = village.quay.rotation.y + Math.PI / 2;
view.scene.add(moored);
const trader = makeBoat(MAT.sailOchre);
view.scene.add(trader);
const mouth = world.main[0];
const boatRoute = [[mouth[0] + 12, 145], ...world.main.filter((_, n) => n % 6 === 0 && n < world.main.length - 6), world.main[world.main.length - 6]];
function placeBoats(dt) {
  // the moored boat floats on the simulated water, or sits on the mud at low tide
  const i = ci(moored.position.x) - SX, j = cj(moored.position.z) - SZ;
  let y = heightAt(world, moored.position.x, moored.position.z) + 0.1, aground = true;
  if (i >= 0 && j >= 0 && i < SN && j < SN) {
    const k = j * SN + i;
    if (game.sim.d[k] > 0.35) { y = game.sim.b[k] + game.sim.d[k] - 0.05; aground = false; }
  }
  const now = visualTime, ease = boatsPlaced ? 1 - Math.exp(-dt * 5) : 1;
  moored.position.y += (y - moored.position.y) * ease;
  moored.rotation.z += ((aground ? 0.12 : Math.sin(now * 1.3) * 0.03) - moored.rotation.z) * ease;
  moored.userData.sail.scale.y = 0.16;
  // the trader runs in from the offing toward the creek mouth on the flood
  const k = game.economy.progress;
  // Follow the carved creek all the way to the quay, in either direction.
  const route = boatRoute;
  const at = k * (route.length - 1), n = Math.min(route.length - 2, Math.floor(at)), f = at - n;
  const [x0, z0] = route[n], [x1, z1] = route[n + 1];
  const tx = x0 + (x1 - x0) * f, tz = z0 + (z1 - z0) * f;
  const ti = ci(tx) - SX, tj = cj(tz) - SZ;
  let surface = tide.level(game.t);
  if (ti >= 0 && tj >= 0 && ti < SN && tj < SN) surface = game.sim.surfaceAt(ti, tj);
  trader.position.set(tx, surface - 0.05 + Math.sin(now * 1.1) * 0.04, tz);
  const heading = Math.atan2(-(z1 - z0), x1 - x0) + (game.economy.state === 'leaving' ? Math.PI : 0);
  const turn = Math.atan2(Math.sin(heading - trader.rotation.y), Math.cos(heading - trader.rotation.y));
  trader.rotation.y += turn * ease;
  const furled = game.economy.state === 'docked' || game.economy.state === 'sheltering';
  const sail = trader.userData.sail;
  sail.scale.y += ((furled ? 0.18 : 1) - sail.scale.y) * ease;
  sail.scale.x = 1 + Math.sin(now * 2.1) * 0.04 * sail.scale.y;
  sail.rotation.y = Math.sin(now * 1.7) * 0.035 * sail.scale.y;
  traderMoving = Math.abs(k - traderLast) > 1e-6 && game.economy.state !== 'sheltering'; traderLast = k;
  trader.rotation.z = Math.sin(now * 0.9) * 0.05;
  boatsPlaced = true;
}

// ------------------------------------------------------------ the HUD
let tool = 'hand';
function setTool(t) {
  if (UNLOCKS.some(u => u.id === t) && !game.works.unlocked(t)) { hud.message('This work opens later in the season.'); return; }
  tool = t;
  hud.setTool(t);
  rig.leftPans = t === 'hand';
  canvas.classList.toggle('tool', t !== 'hand');
  ghostClear();
  panDrag = null;
  sound.tick();
}
function setSpeed(s) {
  if (game.ended) return;
  if (s === 0) game.paused = !game.paused;
  else { game.speed = s; game.paused = false; }
  hud.setSpeed(game.speed, game.paused);
  sound.tick();
}
const hud = new Hud(game, setTool, setSpeed);

// ------------------------------------------------- settings and menus
const settings = loadSettings();
function applySettings(s) {
  sound.setVolumes({ master: s.master, music: s.music, effects: s.effects });
  const q = QUALITY[s.quality];
  view.setQuality(q);
  fx.spray.max = q.spray; fx.rain.max = q.rain; fx.gulls.mesh.count = q.gulls;
}
applySettings(settings);
// the title, a recorded save or ?nosave / ?judge / ?notitle decide who gets a title screen (tools skip it)
const skipTitle = params.has('nosave') || params.has('judge') || params.has('notitle') || params.get('new') === '1';
const dayText = () => `Day ${Math.min(tide.SEASON_DAYS + 1, tide.dayNumber(game.t))} · ${tide.clockText(game.t)}`;
const menus = createMenus({
  settings, applySettings, canvas, hud, game, clockText: dayText,
  onModal: (open) => rig.lock(open),
  onNewSeason: () => saver.newSeason(),
});
if (!skipTitle) game.held = true; // the world runs and is drawn behind the title; the clock waits for a choice
let lookFlash = null;   // the work a Find button just showed: ringed for a few seconds
function focusThing(thing) {
  lookFlash = { thing, until: performance.now() + 6000 };
  const c = game.centerOf(thing);
  rig.set(c.x, c.z, rig.cur.yaw, 0.65, 42, false);
  setTool('hand');
}
document.getElementById('look-at').addEventListener('click', e => {
  const b = e.target.closest('[data-look]');
  if (!b) return;
  const target = b.dataset.look;
  if (target === 'pan') focusThing(game.pans[0]);
  if (target === 'fish') focusThing(game.weirs[0]);
  if (target === 'oysters') focusThing(game.oysters[0]);
  if (target === 'quay') rig.set(quayP.x, quayP.z, rig.cur.yaw, 0.65, 42, false);
});
document.getElementById('hire').addEventListener('click', () => {
  sound.start();
  if (game.people.hire()) { sound.chime(2); hud.message(game.people.hireProblem() ? `A hand is hired, but ${game.people.hireProblem()}.` : 'A hand walks from the village. Keep a dry route to the works.', 5500); }
  else hud.message(`Hiring costs 24 shillings. Homes currently support ${game.works.maxHands()} hands.`);
});
document.getElementById('hands').addEventListener('change', e => {
  const hand = game.people.hands[+e.target.dataset.hand];
  const job = game.people.jobs()[+e.target.value];
  if (hand && job) game.people.assign(hand, job.thing);
});
document.getElementById('hands').addEventListener('click', e => {
  const b = e.target.closest('[data-fix]');
  const hand = b && game.people.hands[+b.dataset.fix];
  if (!hand) return;
  const c = game.centerOf(hand.job);
  rig.set(c.x, c.z, rig.cur.yaw, 0.65, 42, false);
  setTool('causeway');
  hud.message(`Causeway tool on. Drag a raised dry route from the village (or a stilt house) to ${game.people.jobs().find(j => j.thing === hand.job)?.label || 'the work'}; ${hand.name} then walks it.`, 6000);
});
document.getElementById('repair').addEventListener('click', () => setTool('repair'));
document.getElementById('protect-all').addEventListener('click', () => {
  const n = game.works.protectAffordable();
  hud.message(n ? `Storm banks raised on ${n} work${n > 1 ? 's' : ''} (${n * 65} sh).` : `Not enough shillings: each storm bank costs 65 and you have ${Math.floor(game.store.coin)}.`, 3200);
});
document.getElementById('quay-btn').addEventListener('click', () => {
  sound.start();
  const e = game.economy, n = e.nextQuay();
  if (e.extendQuay()) { sound.chime(2); hud.message(`Quay berth built: the trader now carries ${e.cap()} cargo per visit.`, 5000); }
  else hud.message(!n ? 'The quay is as large as the creek allows.' : !e.quayOpen() ? `The next berth opens on day ${n.day}.` : `A berth costs ${n.cost} shillings; you have ${Math.floor(game.store.coin)}.`);
});

// ----------------------------------------------------- ghost overlay
const ghostGeo = new THREE.PlaneGeometry(0.94, 0.94).rotateX(-Math.PI / 2);
const ghost = new THREE.InstancedMesh(ghostGeo, new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.55, depthWrite: false }), 400);
ghost.count = 0; ghost.renderOrder = 5; ghost.frustumCulled = false;
view.scene.add(ghost);
const OK = new THREE.Color('#f3e7c4'), BAD = new THREE.Color('#b8432e'), BRASS = new THREE.Color('#c99a52');
const m4 = new THREE.Matrix4();
function ghostClear() { ghost.count = 0; }
function ghostCell(i, j, col) {
  if (ghost.count >= 400) return;
  const y = Math.max(world.h[j * W + i], tide.level(game.t) * 0) + 0.12;
  let yy = world.h[j * W + i];
  if (i >= SX && j >= SZ && i < SX + SN && j < SZ + SN) yy += game.sim.d[(j - SZ) * SN + i - SX];
  m4.makeTranslation(wx(i), Math.max(y, yy + 0.06), wz(j));
  ghost.setMatrixAt(ghost.count, m4); ghost.setColorAt(ghost.count, col); ghost.count++;
  ghost.instanceMatrix.needsUpdate = true; ghost.instanceColor.needsUpdate = true;
}

// the bank cells where a pan's sluice may go: pulsed while the pan asks for one and while the sluice tool is held
const sluiceMarks = new THREE.InstancedMesh(ghostGeo, new THREE.MeshBasicMaterial({ color: '#ff8a00', transparent: true, opacity: 0.8, depthWrite: false, depthTest: false }), 400);
sluiceMarks.count = 0; sluiceMarks.renderOrder = 7; sluiceMarks.frustumCulled = false;
view.scene.add(sluiceMarks);
const hasGate = (p) => game.gates.some(a => a.i >= p.i0 - 1 && a.i <= p.i0 + p.w && a.j >= p.j0 - 1 && a.j <= p.j0 + p.d);
// legal = the same sluice check the click runs (cost ignored), on a side cell of the bank ring (the game counts a gate anywhere in the ring box).
// A cell with a creek or channel just outside is preferred, because that is where water can come from; with none, every legal bank cell shows.
function sluiceCells(p) {
  const legal = [];
  for (let j = p.j0 - 1; j <= p.j0 + p.d; j++) for (let i = p.i0 - 1; i <= p.i0 + p.w; i++) {
    const cx = i === p.i0 - 1 || i === p.i0 + p.w, cz = j === p.j0 - 1 || j === p.j0 + p.d;
    if (!(cx || cz) || (cx && cz) || placeProblem('gate', i, j, null, true)) continue;
    const ox = cx ? (i < p.i0 ? -1 : 1) : 0, oz = cz ? (j < p.j0 ? -1 : 1) : 0;
    const out = world.kind[(j + oz) * W + i + ox];
    legal.push({ i, j, wet: out === 1 || out === 2 });
  }
  return legal.some(c => c.wet) ? legal.filter(c => c.wet) : legal;
}
function updateSluiceMarks(h, now) {
  const pans = new Set();
  if (!game.ended && !game.held) {
    if (h?.needsGate && h.thing?.kind === 'pan') pans.add(h.thing);
    if (tool === 'gate') for (const p of game.pans) if (!hasGate(p)) pans.add(p);
  }
  let n = 0;
  for (const p of pans) for (const c of sluiceCells(p)) {
    if (n >= 400) break;
    m4.makeTranslation(wx(c.i), world.h[c.j * W + c.i] + 0.25, wz(c.j));
    sluiceMarks.setMatrixAt(n++, m4);
  }
  sluiceMarks.count = n; sluiceMarks.instanceMatrix.needsUpdate = true;
  sluiceMarks.material.opacity = 0.7 + 0.3 * Math.sin(now / 200);
}

const ring = new THREE.Mesh(new THREE.RingGeometry(1.0, 1.18, 40).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#e9c98a', transparent: true, opacity: 0.9, depthWrite: false }));
ring.renderOrder = 6; ring.visible = false;
view.scene.add(ring);
const beacon = ring.clone(); beacon.material = ring.material.clone(); beacon.material.color.set('#fff3d6');
view.scene.add(beacon);
// pans get a frame along the top of their bank instead of a ring
const frames = new Map();
function frameFor(pan, mat) {
  const key = pan.id + ':' + mat.uuid;
  if (!frames.has(key)) {
    const w = pan.w + 1, d = pan.d + 1, t = 0.28;
    const g = mergeGeometries([
      new THREE.BoxGeometry(w + t, 0.08, t).translate(0, 0, -d / 2), new THREE.BoxGeometry(w + t, 0.08, t).translate(0, 0, d / 2),
      new THREE.BoxGeometry(t, 0.08, d - t).translate(-w / 2, 0, 0), new THREE.BoxGeometry(t, 0.08, d - t).translate(w / 2, 0, 0),
    ]);
    const m = new THREE.Mesh(g, mat);
    m.position.set(wx(pan.i0) + (pan.w - 1) / 2, BUND + 0.06, wz(pan.j0) + (pan.d - 1) / 2);
    m.renderOrder = 6; m.visible = false;
    view.scene.add(m);
    frames.set(key, m);
  }
  frames.get(key).position.y = (pan.braced ? 3.05 : BUND) + 0.06;
  return frames.get(key);
}
function hideFrames(mat) { for (const [k, m] of frames) if (k.endsWith(mat.uuid)) m.visible = false; }

// ------------------------------------------------------------- input
let hover = null, mouse = { x: -1, y: -1, in: false }, panDrag = null, digging = false, lastDig = null;
canvas.addEventListener('pointermove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.in = true; if (digging) digAt(e); });
canvas.addEventListener('pointerleave', () => { mouse.in = false; });
canvas.addEventListener('pointerdown', (e) => {
  sound.start();
  canvas.focus();
  if (e.button !== 0 || e.shiftKey) return;
  if (tool === 'dig' || tool === 'causeway') { digging = true; lastDig = null; digAt(e); }
  if (tool === 'pan') {
    const p = rig.pick(e.clientX, e.clientY);
    if (p) panDrag = { i: ci(p.x), j: cj(p.z), i1: ci(p.x), j1: cj(p.z) };
  }
});
window.addEventListener('pointerup', () => { digging = false; });

function digAt(e) {
  if (game.ended) return;
  const p = rig.pick(e.clientX, e.clientY);
  if (!p) return;
  const i = ci(p.x), j = cj(p.z);
  // walk from the last dug cell so a fast drag leaves no gaps
  const cells = [];
  if (lastDig) {
    let a = lastDig.i, b = lastDig.j;
    while (a !== i || b !== j) {
      if (Math.abs(i - a) >= Math.abs(j - b)) a += Math.sign(i - a); else b += Math.sign(j - b);
      cells.push([a, b]);
    }
  } else cells.push([i, j]);
  lastDig = { i, j };
  for (const [a, b] of cells) {
    if (tool === 'causeway') { if (game.causeway(a, b)) sound.dig(); continue; }
    if (game.store.coin < COST.dig) { hud.message('Out of shillings. Rake salt or collect fish; the trader buys at high water.'); return; }
    if (game.dig(a, b)) { game.spend(COST.dig, 'Channel digging'); sound.dig(); hints.onEvent({ type: 'built' }); }
  }
}

function weirAngleAt(i, j) {
  let best = 0, bw = 1e9;
  for (let a = 0; a < 8; a++) {
    const ang = (a / 8) * Math.PI;
    const dx = Math.cos(ang), dz = Math.sin(ang);
    let wdt = 0;
    for (const sgn of [1, -1]) for (let s = 1; s < 10; s++) {
      const k = Math.round(j + dz * s * sgn) * W + Math.round(i + dx * s * sgn);
      if (world.h[k] > 0.7) break;
      wdt++;
    }
    if (wdt < bw) { bw = wdt; best = ang; }
  }
  return { ang: best, half: Math.min(6, bw / 2 + 1.6) };
}

// Gates are tall and thin, so they are picked on screen (the wheel and frame included),
// not by the ground point under the cursor.
function gatePillRect(g) {
  const q = toScreen(new THREE.Vector3(g.mesh.position.x, g.mesh.position.y + GATE_MARK_Y, g.mesh.position.z));
  return q.behind ? null : { left: q.x - 56, right: q.x + 56, top: q.y - 24, bottom: q.y + 24 };
}
function gateAtScreen(sx, sy) {
  // the pill is the gate's own button; outside its box and the thin frame, a click goes to the pan beneath
  for (const g of game.gates) { const r = gatePillRect(g); if (r && sx >= r.left && sx <= r.right && sy >= r.top && sy <= r.bottom) return g; }
  let best = null, bd = 1e9;
  for (const g of game.gates) {
    const top = toScreen(game.centerOf(g));
    const base = toScreen(new THREE.Vector3(wx(g.i), world.h[g.j * W + g.i] + 0.4, wz(g.j)));
    if (top.behind) continue;
    const span = Math.max(1, Math.hypot(top.x - base.x, top.y - base.y));
    const u = THREE.MathUtils.clamp(((sx - base.x) * (top.x - base.x) + (sy - base.y) * (top.y - base.y)) / (span * span), 0, 1.15);
    const d = Math.hypot(sx - (base.x + (top.x - base.x) * u), sy - (base.y + (top.y - base.y) * u));
    const reach = Math.max(16, Math.min(24, span * 0.3));
    if (d < reach && d < bd) { bd = d; best = g; }
  }
  return best;
}
function raisedAtScreen(sx, sy, things) {
  // Tall structures project beyond their ground footprint. A pump's flywheel
  // must be picked before the pan beneath it, or its click rakes the pan.
  for (const th of things) {
    const c = game.centerOf(th), top = toScreen(c);
    const base = toScreen(new THREE.Vector3(c.x, heightAt(world, c.x, c.z) + 0.1, c.z));
    if (top.behind) continue;
    const dx = top.x - base.x, dy = top.y - base.y, length = dx * dx + dy * dy;
    const u = THREE.MathUtils.clamp(((sx - base.x) * dx + (sy - base.y) * dy) / Math.max(1, length), 0, 1);
    if (Math.hypot(sx - base.x - u * dx, sy - base.y - u * dy) < 22) return th;
  }
  return null;
}
// Oyster beds and fish baskets are low and small on screen: they are picked by the picture itself.
// An oyster bed counts as hit anywhere over its footprint on screen, a weir anywhere near its stakes or basket,
// and the hit area never shrinks below a finger-sized disc whatever the zoom.
const HIT_MIN = 34, HIT_TIGHT = 16;
function lowThingAtScreen(sx, sy, reachMin) {
  let best = null, bd = 1e9;
  const test = (th, d, reach) => { if (d < reach && d < bd) { bd = d; best = th; } };
  for (const o of game.oysters) {
    const c = new THREE.Vector3(wx(o.i), heightAt(world, wx(o.i), wz(o.j)) + 0.3, wz(o.j));
    const a = toScreen(c); if (a.behind) continue;
    const e = toScreen(c.clone().add(new THREE.Vector3(2.4, 0, 0))), f = toScreen(c.clone().add(new THREE.Vector3(0, 0, 2.4)));
    const rpx = Math.max(Math.hypot(e.x - a.x, e.y - a.y), Math.hypot(f.x - a.x, f.y - a.y));
    const t = toScreen(game.centerOf(o));
    test(o, Math.min(Math.hypot(sx - a.x, sy - a.y), Math.hypot(sx - t.x, sy - t.y)), Math.max(reachMin, rpx * (reachMin > HIT_TIGHT ? 1.1 : 0.7)));
  }
  for (const w of game.weirs) {
    const pts = [...w.mesh.userData.pts.map(([x, y, z]) => new THREE.Vector3(x, y, z)), game.centerOf(w)];
    for (const v of pts) { const q = toScreen(v); if (!q.behind) test(w, Math.hypot(sx - q.x, sy - q.y), reachMin); }
  }
  return best;
}
function thingUnder(sx, sy, p) {
  const high = gateAtScreen(sx, sy) || raisedAtScreen(sx, sy, [...game.works.pumps, ...game.works.mills, ...game.works.houses]);
  if (high) return high;
  const tight = lowThingAtScreen(sx, sy, HIT_TIGHT);
  if (tight) return tight;
  const ground = p ? game.thingAt(p.x, p.z) : null;
  if (ground) return ground;
  return lowThingAtScreen(sx, sy, HIT_MIN);
}

// what was under the finger when it went down: a Find glide may move the picture before the button comes up
let downPick = null;
canvas.addEventListener('pointerdown', (e) => {
  if (e.button !== 0) return;
  const p = rig.pick(e.clientX, e.clientY);
  downPick = { thing: thingUnder(e.clientX, e.clientY, p), glide: rig.gliding() };
}, true);
rig.onClick = (e, moved) => {
  if (game.ended || (moved && tool === 'hand')) return;
  let p = rig.pick(e.clientX, e.clientY);
  if (downPick && (downPick.glide || rig.gliding()) && !moved) {
    // a click made while the camera glides acts on what the player saw when pressing; else the glide lands and the click is read on the settled view
    if (tool === 'hand' && downPick.thing) { downPick.glide = false; if (game.hintHold) release(); act(downPick.thing, e.clientX, e.clientY); return; }
    rig.settle(); p = rig.pick(e.clientX, e.clientY);
  }
  if (game.hintHold && !moved) {
    // with the hand tool only the highlighted thing (or a key, or any button) runs the clock again; a click on bare ground or another work does not
    if (tool === 'hand' && (!hintThing || thingUnder(e.clientX, e.clientY, p) !== hintThing)) { hud.message('The clock is still stopped. Click the highlighted thing, or press any key, to run it.', 2600); return; }
    release();
  }
  if (tool === 'pan' && panDrag) {
    const r = panRect();
    panDrag = null; ghostClear();
    if (!r) return;
    const why = placeProblem('pan', 0, 0, r);
    if (why) { hud.message(why + '.'); return; }
    game.spend(COST.pan, 'Salt pan');
    game.addPan(r.i0, r.j0, r.w, r.d);
    sound.dig(); sound.thump(sound.ctx ? sound.ctx.currentTime : 0, 0.3);
    hints.onEvent({ type: 'built' });
    hud.message('Pan built. Give it a sluice in its bank to let the tide in (3).', 3500);
    return;
  }
  if (tool === 'hand') {
    const th = thingUnder(e.clientX, e.clientY, p);
    if (th) act(th, e.clientX, e.clientY);
    return;
  }
  if (tool === 'repair') {
    const th = thingUnder(e.clientX, e.clientY, p);
    const target = th?.kind === 'pump' ? th.pan : th;
    if (game.storm.repair(target)) { sound.dig(); hud.message('Repairs underway · 10 seconds.'); }
    else hud.message(game.storm.active ? 'Wait for the surge to pass before repairing.' : game.storm.repairJob ? 'The repair crew is busy.'
      : !target ? 'No work under the cursor. Click the damaged work itself.' : !target.damage ? `${target.name} is not damaged.`
      : game.store.coin < 24 ? `Repairs cost 24 shillings; you have ${Math.floor(game.store.coin)}.` : 'Click damaged works to repair them for 24 shillings.');
    return;
  }
  if (tool === 'pump' || tool === 'bank') {
    const th = thingUnder(e.clientX, e.clientY, p);
    const target = th?.kind === 'pump' ? th.pan : th;
    const why = tool === 'bank' ? game.works.protectProblem(target) : null;
    const ok = tool === 'pump' ? game.works.installPump(target) : !why && game.works.protect(target);
    if (ok) {
      sound.dig();
      const plan = game.works.stormPlan();
      hud.message(tool === 'pump' ? 'Pump installed. Mill power lifts brine with the sluice shut.'
        : `Storm banks built: ${plan.braced}/${plan.total} works protected. ${!game.storm.passed && target.kind === 'pan' && game.panOpen(target) ? 'Its sluice is open: shut it before the surge.' : plan.text}`, 6000);
    } else hud.message(tool === 'pump' ? `Not built, nothing charged: ${target?.kind !== 'pan' ? 'click a salt pan to give it a pump' : target.pump ? 'this pan already has a pump' : !game.works.mills.length ? 'a pump needs a tide mill first (T)' : game.store.coin < 90 ? `a pump costs 90 shillings and you have ${Math.floor(game.store.coin)}` : 'it cannot go there'}.` : why || 'Storm banks could not be built there.', 5000);
    return;
  }
  if (!p) return;
  const i = ci(p.x), j = cj(p.z), k = j * W + i;
  if (tool === 'house' || tool === 'mill') {
    const u = UNLOCKS.find(u => u.id === tool), why = game.works.siteProblem(tool, i, j);
    if (!why && game.store.coin < u.cost) hud.message(`Not built, nothing charged: a ${u.name.toLowerCase()} costs ${u.cost} shillings and you have ${Math.floor(game.store.coin)}.`, 4500);
    else if (!why && game.works.build(tool, i, j)) { sound.dig(); hud.message(tool === 'house' ? `Stilt house built (${u.cost} sh charged). Two more hands can join the village.` : `Tide mill built (${u.cost} sh charged). The wheel turns while the creek runs; power is stored for pumps.`, 5000); }
    else hud.message(`Not built, nothing charged: ${why || 'it cannot go there'}.`, 5000);
  } else if (tool === 'dredge') {
    const job = game.sediment.target(i, j);
    if (game.sediment.start(i, j)) { sound.dig(); hud.message('Dredging started. The crew waits when the flood is too deep.'); }
    else hud.message(game.sediment.job ? 'One dredging crew at a time.' : job.amount < 0.05 ? 'This bed is still clear of silt.' : job.wet > 0.25 ? 'Wait for shallow water before dredging.' : `Dredging costs ${job.cost} shillings.`);
  } else if (tool === 'gate') {
    const why = placeProblem('gate', i, j);
    if (why) { hud.message(why + '.'); return; }
    game.spend(COST.gate, 'Sluice gate');
    game.addGate(i, j, true);
    sound.creak(false);
    hints.onEvent({ type: 'built' });
  } else if (tool === 'oyster') {
    const why = placeProblem('oyster', i, j);
    if (why) { hud.message(why + '.'); return; }
    if (!game.spend(COST.oyster, 'Oyster bed')) return;
    game.addOysters(i, j); sound.dig(); hints.onEvent({ type: 'built' });
  } else if (tool === 'weir') {
    const why = placeProblem('weir', i, j);
    if (why) { hud.message(why + '.'); return; }
    const { ang, half } = weirAngleAt(i, j);
    game.spend(COST.weir, 'Fish weir');
    game.addWeir(p.x, p.z, ang, false);
    game.weirs[game.weirs.length - 1].mesh.userData.half = half;
    sound.dig();
    hints.onEvent({ type: 'built' });
  }
};

function act(th, sx, sy) {
  if (th.kind === 'pump') {
    th.enabled = !th.enabled; sound.tick(); hud.message(th.enabled ? 'Pump working when power and water are available.' : 'Pump stopped. Power is saved.');
  } else if (th.kind === 'mill') {
    hud.message(`Wheel ${th.output.toFixed(1)} power/s · ${Math.floor(game.works.energy)} stored. Pumps use this power.`);
  } else if (th.kind === 'house') {
    hud.message('Stilt home: dry local footing, room for two hands, and shelter for 30 cargo.');
  } else if (th.kind === 'gate') {
    game.toggleGate(th);
    sound.creak(!th.open);
  } else if (th.kind === 'pan') {
    const n = game.rake(th);
    if (n > 0) { sound.chime(4); hud.gain(sx, sy - 20, `+${n} salt`); }
    else hud.message(th.V > 0.5 ? 'Still brine. Let the sun work it, gate shut.' : 'Nothing to rake yet.');
  } else if (th.kind === 'oyster') {
    const n = game.gather(th);
    if (n) { sound.chime(3); hud.gain(sx, sy - 20, `+${n} oysters`); }
    else hud.message(th.exposed ? 'The bed is growing. Oysters feed under the flood.' : 'Wait for low water to rake this bed.');
  } else if (th.kind === 'weir') {
    const n = game.collect(th);
    if (n > 0) { sound.chime(2); hud.gain(sx, sy - 20, `+${n} fish`); }
    else hud.message('The basket is empty. Weirs catch on the ebb.');
  }
}

function panRect() {
  if (!panDrag) return null;
  let { i, j, i1, j1 } = panDrag;
  if (Math.abs(i1 - i) < 2 && Math.abs(j1 - j) < 2) { i -= 3; j -= 2; i1 = i + 6; j1 = j + 4; }
  const i0 = Math.min(i, i1), j0 = Math.min(j, j1);
  const w = Math.min(12, Math.max(3, Math.abs(i1 - i) + 1)), d = Math.min(10, Math.max(3, Math.abs(j1 - j) + 1));
  return { i0, j0, w, d };
}

window.addEventListener('keydown', (e) => {
  if (menus.handleKey(e)) return;
  if (e.target?.closest?.('input, select, textarea') || (e.code === 'Space' && e.target?.closest?.('button'))) return;
  if (e.repeat) return;
  const t = { Digit1: 'hand', Digit2: 'dig', Digit3: 'gate', Digit4: 'pan', Digit5: 'weir', Digit6: 'oyster', Digit7: 'causeway', Digit8: 'dredge', KeyH: 'house', KeyT: 'mill', KeyP: 'pump', KeyB: 'bank', KeyR: 'repair' }[e.code];
  if (t) setTool(t);
  if (e.code === 'Escape') { if (tool !== 'hand') setTool('hand'); else menus.openPause(); }
  if (e.code === 'Space') { e.preventDefault(); setSpeed(0); }
  if (e.code === 'Period') setSpeed(game.speed === 1 ? 3 : 8);
  if (e.code === 'Comma') setSpeed(game.speed === 8 ? 3 : 1);
  if (e.code === 'KeyM') toggleSound();
});
const soundBtn = document.getElementById('sound');
function toggleSound() { sound.start(); sound.setMuted(!sound.muted); soundBtn.textContent = sound.muted ? 'Sound off' : 'Sound on'; }
soundBtn.addEventListener('click', toggleSound);

// ---------------------------------------------------------- hovering
const proj = new THREE.Vector3();
function toScreen(v) {
  proj.copy(v).project(view.camera);
  return { x: (proj.x * 0.5 + 0.5) * window.innerWidth, y: (-proj.y * 0.5 + 0.5) * window.innerHeight, behind: proj.z > 1 };
}

// Why a pan holds no water, and the cure in the same breath.
function dryWhy(th, siltCm) {
  const lv = tide.level(game.t), floor = game.panFloor(th);
  const gate = game.gates.find(a => a.i >= th.i0 - 1 && a.i <= th.i0 + th.w && a.j >= th.j0 - 1 && a.j <= th.j0 + th.d);
  const cure = 'Dredge at low water: 14 sh (press 8)';
  if (!gate) return ['Dry: no sluice in its bank. Press 3 and click a bank cell; a channel (2) must reach a creek.'];
  if (siltCm > 16) return [`Dry: ${siltCm} cm of silt lifts the floor to +${floor.toFixed(2)} m, above the tide.`, cure];
  if (!gate.open) return ['Dry: its sluice is shut. Click the gate to open it on the flood.'];
  if (lv <= floor) return [`Dry: the tide (${lv >= 0 ? '+' : '−'}${Math.abs(lv).toFixed(2)} m) is below the floor (+${floor.toFixed(2)} m). Wait for high water.`, ...(siltCm > 8 ? [cure] : [])];
  return ['Dry: the gate is open but no water reaches it. Dig a channel (2) from a creek to the gate.'];
}
function millLine() {
  const r = game.works.rates();
  return r ? `Makes about ${r.gen.toFixed(0)} power per tide-day (measured over ${r.days.toFixed(1)} days); a pump spends about 0.65 power per second it lifts.` : 'Makes power while the creek runs (mid-tide); a pump spends about 0.65 per second it lifts.';
}
function pumpLine() {
  const r = game.works.rates();
  return r ? `Spends about ${r.used.toFixed(0)} power and lifts ${r.lifted.toFixed(1)} m³ per tide-day (all pumps).` : 'Lifts brine into a shut pan through neaps. No daily figure yet.';
}
function describe(th) {
  if (th.damage) return [[`${th.name} damaged by the surge`, th.kind === 'pan' ? 'A breached bank leaks brine. Salt dries slowly.' : 'Production stopped until repaired.'], 'Repair (R) · 24 shillings · 10 seconds after the surge'];
  if (th.kind === 'mill') return [[`${th.output.toFixed(1)} power/s now · ${Math.floor(game.works.energy)} / ${game.works.mills.length * 120} stored`, millLine(), th.braced ? 'Braced for the surge' : 'Unbraced · storm banks (B) protect the wheel'], th.output > 0.05 ? 'Charging: the creek is running' : 'Resting: slack water. It charges when the creek runs, mid-tide.'];
  if (th.kind === 'house') return [['Raised deck +3.05 m · homes for two hands', '30 stored cargo sheltered from the surge'], 'Hire hands in the village ledger'];
  if (th.kind === 'pump') return [[th.enabled ? (th.active ? 'Working on stored mill power' : 'Waiting for power or water') : 'Switched off', pumpLine(), 'Active only with its sluice shut, mill power stored and the pan below 25 cm; also drains storm water.'], 'Click to switch on / off'];
  if (th.kind === 'gate') {
    return [th.open ? 'Open: the tide runs in and out.' : 'Shut: water stays where it is.', th.open ? 'Click to shut it' : 'Click to open it'];
  }
  if (th.kind === 'pan') {
    const lines = [];
    const depth = th.V / th.cells.length;
    const siltCm = Math.round(game.sediment.panDepth(th) * 100), dry = depth <= 0.01;
    if (!dry) lines.push(`Brine ${depth.toFixed(2)} m deep, ${(th.conc || 1).toFixed(1)}× sea salt`);
    else lines.push(...dryWhy(th, siltCm));
    if (th.crust > 0.05) lines.push(`Salt crust: ${Math.round(th.crust * 4)} salt`);
    lines.push(`Floor +${game.panFloor(th).toFixed(2)} m · silt ${(game.sediment.panDepth(th) * 100).toFixed(0)} cm`);
    lines.push(th.braced ? 'Storm banks +3.05 m · shut the sluice before the surge' : 'Banks +1.48 m · storm protection opens on day 10');
    if (th.maintaining) lines.push(`Dredging · ${Math.ceil(game.sediment.job.left)}s of shallow water left`);
    const silted = siltCm > 16 && depth < 0.05 && th.crust < 0.2;
    if (siltCm > 10 && !silted && !th.maintaining) lines.push('Silt is building: Dredge (8) at low water · 14 sh');
    return [lines, th.crust > 0.1 ? 'Click to rake the salt' : silted ? 'Press 8, click the pan: Dredge at low water · 14 sh' : game.panOpen(th) ? 'Its sluice is open' : 'Its sluice is shut'];
  }
  if (th.kind === 'oyster') {
    return [[`${Math.floor(th.stock)} oysters · ${th.exposed ? 'bed exposed' : 'under water'}`, 'Feeds on the flood; rake when the mud is exposed.'], th.exposed && th.stock >= 1 ? 'Click to rake oysters' : 'Wait for low water'];
  }
  if (th.kind === 'weir') {
    return [[`${Math.floor(th.catch)} fish in the basket`, 'Catches fish on the ebb'], th.catch >= 1 ? 'Click to empty the basket' : ''];
  }
  return [[], ''];
}

function markerSurface(c) {
  const i = ci(c.x) - SX, j = cj(c.z) - SZ;
  if (i >= 0 && j >= 0 && i < SN && j < SN) {
    const k = j * SN + i;
    return game.sim.b[k] + game.sim.d[k] + 0.12;
  }
  return Math.max(heightAt(world, c.x, c.z), tide.level(game.t)) + 0.12;
}
// the words for why `tool` cannot be placed at cell (i, j): taken from the same checks the click runs; null if it can be
function placeProblem(tool, i, j, r, ignoreCoin = false) {
  const k = j * W + i, kd = world.kind[k], coin = (c) => !ignoreCoin && game.store.coin < c ? `Needs ${c} sh` : null;
  if (tool === 'pan') return game.panProblem(r.i0, r.j0, r.w, r.d) || coin(COST.pan);
  if (tool === 'oyster') return game.oysterProblem(i, j) || coin(COST.oyster);
  if (tool === 'weir') {
    if (kd !== 1) return 'Not on a creek: weirs go across a creek';
    if (world.h[k] > 0.6) return 'Too high and dry: the ebb does not run here';
    if (game.works.occupied(i, j)) return 'Too close to a house or mill';
    return coin(COST.weir);
  }
  if (tool === 'gate') {
    if (!(i > SX && j > SZ && i < SX + SN - 1 && j < SZ + SN - 1)) return 'Too near the edge of the marsh';
    if (!(kd === 1 || kd === 2 || kd === 3)) return 'Not on a channel, creek or pan bank';
    if (game.works.occupied(i, j)) return 'Too close to a house or mill';
    if (game.sediment.job?.cells.includes((j - SZ) * SN + i - SX)) return 'The dredging crew is working here';
    if (game.gates.some((g) => Math.abs(g.i - i) + Math.abs(g.j - j) < 2)) return 'Too close to another sluice';
    return coin(COST.gate);
  }
  return null;
}
function updateHover() {
  hover = null;
  ghostClearIfIdle();
  hideFrames(ring.material);
  if (!mouse.in || rig.drag?.moved) { hud.hideTip(); ring.visible = false; canvas.classList.remove('over'); return; }
  const p = rig.pick(mouse.x, mouse.y);
  if (tool === 'hand') {
    const th = thingUnder(mouse.x, mouse.y, p);
    hover = th;
    canvas.classList.toggle('over', !!th);
    if (th) {
      const c = game.centerOf(th);
      ring.visible = th.kind !== 'pan';
      if (th.kind === 'pan') frameFor(th, ring.material).visible = true;
      const r = th.kind === 'weir' ? 3.2 : 1.6;
      ring.scale.setScalar(r);
      ring.position.set(c.x, th.kind === 'pan' ? BUND + 0.08 : Math.max(c.y - 3.2, markerSurface(c)), c.z);
      const [lines, action] = describe(th);
      hud.showTip(mouse.x, mouse.y, th.name, Array.isArray(lines) ? lines : [lines], action);
    } else { ring.visible = false; hud.hideTip(); }
    return;
  }
  ring.visible = false;
  if (!p) { hud.hideTip(); return; }
  const i = ci(p.x), j = cj(p.z), k = j * W + i;
  ghostClear();
  if (tool === 'house' || tool === 'mill') {
    const u = UNLOCKS.find(u => u.id === tool), site = game.works.siteProblem(tool, i, j), ok = !site && game.store.coin >= u.cost;
    for (let y = j - 1; y <= j + (tool === 'house' ? 4 : 1); y++) for (let x = i - 1; x <= i + 1; x++) ghostCell(x, y, ok ? OK : BAD);
    hud.showTip(mouse.x, mouse.y, u.name, [u.detail, ...(tool === 'mill' ? [millLine()] : [])], site ? site + '.' : game.store.coin < u.cost ? `Needs ${u.cost} sh (you have ${Math.floor(game.store.coin)})` : `${u.cost} shillings · click to build`, !ok);
  } else if (tool === 'repair') {
    ghostCell(i, j, BRASS); hud.showTip(mouse.x, mouse.y, 'Storm repairs', ['Click a damaged pan, mill, weir or oyster bed after the surge.'], '24 shillings · 10 seconds · one crew');
  } else if (tool === 'pump' || tool === 'bank') {
    const u = UNLOCKS.find(u => u.id === tool);
    ghostCell(i, j, BRASS); hud.showTip(mouse.x, mouse.y, u.name, [u.detail], `${u.cost} shillings · click a work`);
  } else if (tool === 'dredge') {
    const job = game.sediment.target(i, j);
    const ok = !game.sediment.job && job.amount >= 0.05 && job.wet <= 0.25 && game.store.coin >= job.cost;
    for (const s of job.cells) ghostCell(SX + s % SN, SZ + Math.floor(s / SN), ok ? OK : BAD);
    hud.showTip(mouse.x, mouse.y, job.pan ? 'Dredge this pan' : 'Dredge channel', [`${job.amount.toFixed(1)} m³ silt · ${job.wet.toFixed(2)} m water`, 'The crew works below 0.25 m depth.'], `${job.cost} shillings · ${job.duration} seconds · click to start`);
  } else if (tool === 'causeway') {
    const ok = game.causewaySiteOK(i, j) && game.store.coin >= COST.causeway;
    ghostCell(i, j, ok ? OK : BAD);
    hud.showTip(mouse.x, mouse.y, 'Raised causeway', ['Drag a dry route from the village to the works. Takes the same land as pans and blocks water.'], `${COST.causeway} shillings a cell · +1.65 m`);
  } else if (tool === 'dig') {
    ghostCell(i, j, game.store.coin >= COST.dig ? OK : BAD);
    hud.showTip(mouse.x, mouse.y, 'Dig a channel', ['Drag from a creek to lead the tide where you want it.'], `${COST.dig} shilling a cell`);
  } else if (tool === 'gate') {
    const why = placeProblem('gate', i, j);
    ghostCell(i, j, why ? BAD : OK);
    hud.showTip(mouse.x, mouse.y, 'Sluice gate', ['Across a channel or a pan bank. Open lets the tide through; shut holds water in.'], why || `${COST.gate} shillings`, !!why);
  } else if (tool === 'pan') {
    if (panDrag) { panDrag.i1 = i; panDrag.j1 = j; }
    const r = panRect() || { i0: i - 3, j0: j - 2, w: 7, d: 5 };
    const why = placeProblem('pan', i, j, r), ok = !why;
    for (let jj = r.j0 - 1; jj <= r.j0 + r.d; jj++) for (let ii = r.i0 - 1; ii <= r.i0 + r.w; ii++) {
      const edge = ii === r.i0 - 1 || jj === r.j0 - 1 || ii === r.i0 + r.w || jj === r.j0 + r.d;
      ghostCell(ii, jj, !ok ? BAD : edge ? BRASS : OK);
    }
    hud.showTip(mouse.x, mouse.y, `Salt pan ${r.w}×${r.d}`, ['Drag to size it. A clay bank holds the brine. It also needs a sluice in its bank AND a dug channel (2) from a creek to fill it.'], why || `${COST.pan} shillings`, !!why);
  } else if (tool === 'oyster') {
    const why = placeProblem('oyster', i, j);
    ghostCell(i, j, why ? BAD : OK);
    // when this cell fails, point at the nearest cell that would work
    let near = null;
    if (game.oysterProblem(i, j)) {
      for (let r = 1; r <= 40 && !near; r++) {
        let best = Infinity;
        for (let dj = -r; dj <= r; dj++) for (let di = -r; di <= r; di++) {
          if (Math.max(Math.abs(di), Math.abs(dj)) !== r || game.oysterProblem(i + di, j + dj)) continue;
          const d = Math.hypot(di, dj); if (d < best) { best = d; near = { i: i + di, j: j + dj }; }
        }
      }
    }
    if (near) ghostCell(near.i, near.j, BRASS);
    const dirText = near ? ` Nearest valid mud (gold cell): ${Math.round(Math.hypot(near.i - i, near.j - j))} cells ${near.j < j ? 'north' : near.j > j ? 'south' : ''}${near.i > i ? 'east' : near.i < i ? 'west' : ''}.` : (why ? ' No valid mud within 40 cells.' : '');
    hud.showTip(mouse.x, mouse.y, 'Oyster bed', ['On a low mud bank (between -0.8 m and +0.35 m), 4 cells from other beds. Oysters grow under water and are raked at low tide.'], why ? why + '.' + dirText : `${COST.oyster} shillings`, !!why);
  } else if (tool === 'weir') {
    const why = placeProblem('weir', i, j);
    ghostCell(i, j, why ? BAD : OK);
    hud.showTip(mouse.x, mouse.y, 'Fish weir', ['Across a creek. Fish are caught as the ebb runs out.'], why || `${COST.weir} shillings`, !!why);
  }
}
function ghostClearIfIdle() { if (tool === 'hand') ghostClear(); }

// ------------------------------------------------------------ resize
function resize() {
  view.resize(window.innerWidth, window.innerHeight);
  hud.fitChart();
  // A stored pointer position belongs to the old viewport. Wait for a fresh move.
  mouse.in = false;
  updateHover();
  document.getElementById('tool-help').hidden = true;
}
window.addEventListener('resize', resize);
resize();

// ------------------------------------------------------- save and resume
// A season is kept in localStorage. If it cannot be read, written or trusted, the player just
// gets a new season and a short notice: storage never stands between them and the game.
const saver = (() => {
  const SAVE_EVERY = 8000, MIN_PLAYED = 10;   // real ms between saves; sim seconds before a season is worth keeping
  const useSave = !params.has('nosave');
  let enabled = false, last = performance.now(), warned = false, cleared = false;
  const notice = (text) => hud.message(text, 6000);
  const write = () => {
    if (!enabled || game.held) return false;
    if (game.ended) { if (!cleared) { cleared = true; storage.clear(); } return false; }
    if (game.t - tide.START_T < MIN_PLAYED) return false;
    last = performance.now();
    let ok = false;
    try { ok = storage.write(serialise(snapshot(game, hints, seed))); } catch { ok = false; }
    if (!ok && !warned) { warned = true; notice('This browser will not keep your season: saving is blocked or full.'); }
    return ok;
  };
  const begin = () => { enabled = useSave; game.held = false; last = performance.now(); sound.start(); /* the title click is the first gesture */ };
  // fall back to a fresh season: drop the bad save and reload without reading storage
  const startOver = () => {
    storage.clear();
    const url = new URL(location.href); url.searchParams.set('fresh', '1');
    location.replace(url);
  };
  // The title is the one place a season is chosen: Continue (if a valid save exists) or New season.
  let pendingNotice = null;   // a quiet line to show once the player is in the season
  const started = () => { if (pendingNotice) { const t = pendingNotice; pendingNotice = null; setTimeout(() => notice(t), 400); } };
  const choose = (snap) => {
    menus.handlers = {
      summary: () => `${dayText()} · ${Math.round(game.store.coin)} shillings`,
      continue: () => {
        try { restore(game, hints, snap); } catch (e) { console.warn('save could not be restored', e); startOver(); return; }
        hud.setSpeed(game.speed, game.paused); begin(); hud.update();
        notice(game.paused ? "Season resumed, paused." : `Season resumed at ${game.speed}× speed.`);
      },
      new: () => { if (snap) storage.clear(); begin(); started(); },
      mainMenu: () => saver.toTitle(),
    };
    const day = snap ? Math.min(tide.SEASON_DAYS + 1, tide.dayNumber(snap.t)) : 0;
    menus.showTitle(snap ? `Day ${day} · ${tide.clockText(snap.t)} · ${Math.round(snap.store.coin)} shillings` : null);
  };
  if (skipTitle) { menus.enter(); begin(); }
  else if (useSave) {
    const fromFallback = params.get('fresh') === '1';
    if (fromFallback) {
      params.delete('fresh');
      const url = new URL(location.href); url.searchParams.delete('fresh'); history.replaceState(null, '', url);
      pendingNotice = 'The saved season could not be read, so this is a new one.';
      choose(null);
    } else {
      const { text, blocked } = storage.read();
      if (blocked) { pendingNotice = 'This browser blocks saving; the season will not be kept.'; choose(null); }
      else if (text) {
        const parsed = parse(text, seed, game);
        if (parsed.ok) choose(parsed.snap);
        else { storage.clear(); pendingNotice = 'The saved season could not be read, so this is a new one.'; choose(null); }
      } else choose(null);
    }
  }
  if (params.get('new') === '1') { params.delete('new'); const url = new URL(location.href); url.searchParams.delete('new'); history.replaceState(null, '', url); }
  window.addEventListener('pagehide', write);
  document.addEventListener('visibilitychange', () => {
    const hidden = document.visibilityState === 'hidden';
    sound.setTabHidden(hidden);              // mute while the tab is hidden
    if (hidden) { menus.openPause(); write(); }   // and hold the clock: the pause card is waiting on return
  });
  // Pause menu > New season: drop the save, stop autosaving (pagehide would write it back), reload straight into a new season
  const newSeason = () => { enabled = false; storage.clear(); const url = new URL(location.href); url.searchParams.set('new', '1'); url.searchParams.delete('fresh'); location.replace(url); };
  // Pause menu > Main menu: keep the season, then reload to the title, where Continue offers it
  const toTitle = () => { write(); enabled = false; location.reload(); };
  return { frame(now) { if (now - last >= SAVE_EVERY) write(); }, save: write, newSeason, toTitle };
})();

// ------------------------------------------------------- the frame loop
let last = performance.now(), frame = 0, readySent = false, firstFrame = false;
const ogReady = Promise.race([
  og.init({ manifest }).then(() => {
    og.onPause((p) => { game.hostPaused = p; });
    og.audio.onHostMute((m) => sound.setHostMuted(m));
  }).catch(() => {}),
  new Promise((r) => setTimeout(r, 3000)),
]);

// First-day guidance. (1) While the player is learning (the first two days), the clock is held when a hint
// for a step they have not seen appears until they click or press a key. The trader panel appears at the first landing.
// (2) A cue while the trader sails in. (3) A nudge when nothing has been produced for a whole tide.
const noHold = params.has('nohold');
const HOLD_DAYS = 2;
const held = { seen: new Set() };
const release = () => { if (game.hintHold) { game.hintHold = false; hud.note('hold-note', null); hud.message('Clock running.', 1400); last = performance.now(); } };
// A press on the map does not release the hold (the camera may drag); a click on a thing or any other control does.
window.addEventListener('pointerdown', (e) => { if (e.target !== canvas) release(); }, true);
// Any key but a bare modifier carries on. A number or tool key also does its job; Space only carries on
// (it does not also pause), because the card is already a pause of sorts.
window.addEventListener('keydown', (e) => {
  if (['Shift', 'Control', 'Alt', 'Meta'].includes(e.key)) return;
  if (game.hintHold && e.code === 'Space' && !game.paused) { e.preventDefault(); e.stopImmediatePropagation(); }
  release();
}, true);
const HOLD_TEXT = 'TIME IS STOPPED while you read. Press any key, or click the highlighted thing, and the clock runs again (a number key also picks its tool).';
const HOLD_PAUSED = 'TIME IS STOPPED: the game is paused. Press Space to run the clock.';
const hold = (key, text) => {
  if (noHold || game.held || game.ended || game.hintHold || menus.modal() || held.seen.has(key)) return;
  if (game.t - tide.START_T >= HOLD_DAYS * tide.DAY) return;
  held.seen.add(key); game.hintHold = true; hud.note('hold-note', text);
};
let hintThing = null;
let netDay = { n: null }, prodAt = game.t, prevStock = 0, wasHeld = true, seasonWarned = false;
function guide(h) {
  if (h?.act) { hintThing = h.thing || null; hold('hint:' + h.text.replace(/\d\d:\d\d/g, 'HH:MM'), HOLD_TEXT); }
  if (game.hintHold) hud.note('hold-note', game.paused ? HOLD_PAUSED : HOLD_TEXT);
  document.body.classList.toggle('clock-stopped', !!game.hintHold);
  document.getElementById('msg').style.top = (document.getElementById('notes').getBoundingClientRect().bottom + 8) + 'px';
  const e = game.economy;
  const nextHigh = e.state === 'leaving' ? tide.nextTurn(e.high + 2, 'high') : e.high;
  const secs = Math.max(0, Math.ceil(nextHigh - 1.5 - game.t));
  hud.note('trader-cue', game.ended || game.held || game.hintHold || !hud.traderSeen ? null
    : e.state === 'arriving' ? `Trader arriving at the quay${game.stats.raked ? ' · selling marked cargo' : ''}`
    : e.state === 'away' && secs > 0 && secs <= 12 && !game.storm?.active ? `Trader lands at high water, in ${secs}s` : null);
  // idle nudge: no goods gained and no brine trapped in a closed pan for a whole tide
  const stock = game.store.salt + game.store.fish + game.store.oysters;
  const trapped = game.pans.some(p => p.V / p.cells.length > 0.03 && !game.panOpen(p) || p.crust > 0.05);
  if (stock > prevStock || trapped || game.held || wasHeld) prodAt = game.t; // the title/Continue restore jumps the clock
  wasHeld = game.held;
  prevStock = stock;
  let nudge = null;
  if (!game.ended && !game.held && !game.storm?.active && game.t - prodAt > tide.TIDE) {
    nudge = game.storm?.preparing ? null : game.pans.length && game.pans.every(p => game.panOpen(p)) ? 'Every gate is open, so nothing is being made. Shut one at high water to trap brine.'
      : 'Nothing has been made for a whole tide. Open a pan gate on the flood, then shut it at high water.';
  }
  hud.note('nudge', game.hintHold || menus.modal() ? null : nudge);
  // the end of the season is announced before its last tide-day
  const left = SEASON_END - game.t;
  if (!seasonWarned && left <= 2 * tide.DAY && left > 0 && !game.held) {
    seasonWarned = true;
    hud.message(`Two tide-days left. The account is drawn at Day ${tide.SEASON_DAYS + 1} · 14:00: sell your stock at the last landing (the trader will not return after it), repair damage, spend your purse.`, 9000);
  }
  // when a day's net (trade earned minus everything spent) falls below the day before, say why, from the books' own numbers
  const dn = tide.dayNumber(game.t), ee = game.economy;
  if (netDay.n === null || dn < netDay.n || dn > netDay.n + 1) netDay = { n: dn, earned: ee.earned, spent: ee.spent, wages: ee.wages, prev: null, text: '' };
  else if (dn === netDay.n + 1) {
    const cur = { earned: ee.earned - netDay.earned, wages: ee.wages - netDay.wages, other: (ee.spent - netDay.spent) - (ee.wages - netDay.wages) };
    cur.net = cur.earned - cur.wages - cur.other;
    let text = '';
    const p = netDay.prev;
    if (p && cur.net < p.net - 1) {
      const causes = [[p.earned - cur.earned, `sales fell ${Math.round(p.earned - cur.earned)} sh (cargo prices are lower or less was sold)`], [cur.wages - p.wages, `wages rose ${Math.round(cur.wages - p.wages)} sh`], [cur.other - p.other, `building, dredging and repairs cost ${Math.round(cur.other - p.other)} sh more`]].sort((a, b) => b[0] - a[0]);
      if (causes[0][0] > 1) text = `Day ${dn - 1} net ${Math.round(cur.net)} sh, down from ${Math.round(p.net)}: ${causes[0][1]}.`;
    }
    netDay = { n: dn, earned: ee.earned, spent: ee.spent, wages: ee.wages, prev: cur, text };
  }
  hud.note('net-note', game.ended || game.held || game.hintHold || menus.modal() ? null : netDay.text || null);
  hud.note('season-note', game.ended || game.held || game.hintHold || menus.modal() || left > tide.DAY ? null : 'Last tide-day: the season account is drawn at 14:00.');
}

function loop() {
  const now = performance.now();
  const rawDt = Math.min(1, (now - last) / 1000);
  const dt = Math.min(0.1, rawDt);
  last = now;
  game.tick(rawDt);
  saver.frame(now);
  const motionDt = game.paused || game.hostPaused || game.hintHold || game.ended ? 0 : dt * Math.min(3, game.speed);
  visualTime += motionDt;
  for (const e of game.events) {
    hints.onEvent(e);
    if (e.type === 'saltReady') sound.chime(2);
    if (e.type === 'trade') { sound.chime(3); hud.message(`Trader paid ${e.amount.toFixed(1)} shillings. Receipt in the ledger.`, 3500); }
    if (e.type === 'traderArrived' && game.stats.raked) hud.message('The trader is at the quay. Selling marked cargo.', 2500);
    if (e.type === 'unlock') { sound.chime(3); hud.message(`Day ${e.unlock.day}: ${e.unlock.name} now available (${e.unlock.key}).`, 6000); }
    if (e.type === 'stormWarning') { sound.chime(2); hud.message('Equinox forecast: a +2.9 m surge on day 13. Raise banks and shelter cargo.', 7000); }
    if (e.type === 'stormStart') { sound.creak(false); hud.message('The surge is here. Keep sluices shut. The trader is sheltering.', 7000); }
    if (e.type === 'stormDamage') { sound.creak(true); hud.message(`${e.thing.name} damaged! Repair (R) after the surge.`, 5000); }
    if (e.type === 'stormPassed') { sound.chime(3); hud.message('The surge has passed. Repair damaged works and trade the last tides.', 6000); }
    if (e.type === 'dredgeDone') { sound.chime(2); hud.message('Dredging finished. The bed is clear again.'); }
    if (e.type === 'repairDone') { sound.chime(2); hud.message(`${e.thing.name} repaired. Production can resume.`); }
  }
  game.events.length = 0;
  rig.update(dt);
  // __lookShift is a capture-tool hook that previews the light/weather of another hour; play never sets it
  const { night } = view.updateLight(game.t + (window.__lookShift || 0), rig.target, visualTime);
  view.uniforms.uTide.value = tide.level(game.t);
  view.shadeTerrain(game.sim, tide.level(game.t), (s) => game.saltAt(s), frame % 12 === 0);
  view.updateWater(game.sim, (s) => game.brineAt(s));
  if (reeds.mat.userData.shader) reeds.mat.userData.shader.uniforms.uTime.value = visualTime % 400;
  MAT.window.emissiveIntensity = night * 1.6 + 0.1 * (1 - night) * 0;
  MAT.hull.emissiveIntensity = MAT.sail.emissiveIntensity = MAT.sailOchre.emissiveIntensity = night * 0.32;
  placeBoats(motionDt);
  motes.update(game);
  fx.update(dt, game, view, rig.target, { trader, moving: traderMoving });
  if (frame % 2 === 0) updateHover();

  // the hint, pinned to its thing
  let h = hints.current(game.held || menus.modal() ? 0 : rawDt);
  // a "collect the basket" hint is only true while there are fish in it, whatever else the hint state says
  if (h?.act && h.thing?.kind === 'weir' && h.thing.catch < 1) h = null;
  guide(h);
  updateSluiceMarks(h, now);
  if (h) {
    if (h.thing) {
      const c = game.centerOf(h.thing);
      let s = toScreen(c), below = false;
      if (h.thing.kind === 'pan') {
        // a pan's bubble hangs under its near bank, so it never covers the pan's own gate
        const p = h.thing, x0 = wx(p.i0 - 1), x1 = wx(p.i0 + p.w), z0 = wz(p.j0 - 1), z1 = wz(p.j0 + p.d);
        let best = null;
        for (const [x, z] of [[x0, z0], [x1, z0], [x0, z1], [x1, z1]]) {
          const q = toScreen(new THREE.Vector3(x, p.braced ? 3.05 : BUND, z));
          if (!best || q.y > best.y) best = q;
        }
        s = { ...s, y: best.y };
        below = true;
      }
      const tray = document.getElementById('tools').getBoundingClientRect();
      const panels = ['card', 'trade-card', 'stores', 'works-card'].map(id => document.getElementById(id).getBoundingClientRect());
      const onMap = !s.behind && s.x > 24 && s.x < innerWidth - 24 && s.y > 50 && s.y < tray.top - 30
        && !panels.some(r => s.x >= r.left && s.x <= r.right && s.y >= r.top && s.y <= r.bottom);
      // a calm pan/gate line about a work that is not on screen is not shown over some other scene (the weir, the quay)
      if (!onMap && !h.act && !h.urgent && (h.thing.kind === 'pan' || h.thing.kind === 'gate')) hud.hideHint();
      else if (!onMap) hud.showHint(h.text, h.sub, innerWidth / 2, tray.top - 20, true);
      else if (hover === h.thing) hud.hideHint(); // its tooltip already says the same and more
      else {
        hud.showHint(h.text, h.sub, s.x, s.y, false, below);
        const pills = [];
        for (const gt of game.gates) { const r = gatePillRect(gt); if (r) pills.push(r); }
        { const mq = document.getElementById('msg'); if (mq.classList.contains('show')) { const r = mq.getBoundingClientRect(); pills.push({ left: r.left, right: r.right, top: r.top, bottom: r.bottom }); } }
        hud.avoidRects(pills, below);
      }
      hideFrames(beacon.material);
      beacon.visible = onMap && h.thing.kind !== 'pan';
      if (h.thing.kind === 'pan') frameFor(h.thing, beacon.material).visible = onMap;
      const pulse = 1 + 0.18 * Math.sin(now / 220);
      const r = h.thing.kind === 'weir' ? 3.2 : h.thing.kind === 'oyster' ? 2.4 : 1.7;
      beacon.scale.setScalar(r * pulse);
      beacon.position.set(c.x, h.thing.kind === 'pan' ? BUND + 0.1 : Math.max(c.y - 3.3, markerSurface(c)), c.z);
      beacon.material.opacity = 0.5 + 0.4 * Math.sin(now / 220);
    } else {
      const tools = document.getElementById('tools').getBoundingClientRect();
      hud.showHint(h.text, h.sub, window.innerWidth / 2, tools.top - 16, true);
      beacon.visible = false; hideFrames(beacon.material);
    }
  } else { hud.hideHint(); beacon.visible = false; hideFrames(beacon.material); }
  if (lookFlash && now > lookFlash.until) lookFlash = null;
  if (lookFlash && !game.ended) {
    const th = lookFlash.thing, c = game.centerOf(th), pulse = 1 + 0.2 * Math.sin(now / 200);
    hideFrames(beacon.material);
    beacon.visible = th.kind !== 'pan';
    if (th.kind === 'pan') frameFor(th, beacon.material).visible = true;
    beacon.scale.setScalar((th.kind === 'weir' ? 3.6 : 2.6) * pulse);
    beacon.position.set(c.x, th.kind === 'pan' ? BUND + 0.1 : Math.max(c.y - 3.3, markerSurface(c)), c.z);
    beacon.material.opacity = 0.85;
  }

  if (frame % 3 === 0) hud.update();
  sound.update(tide.level(game.t), tide.rate(game.t), THREE.MathUtils.clamp((rig.cur.z + 20) / 100, 0, 1), rig.cur.dist / 120, game.pans.some(p => p.V > 0.5 && !game.panOpen(p)) && !game.paused && !game.ended);
  view.render();
  frame++;
  if (!firstFrame) {
    firstFrame = true;
    ogReady.then(() => { if (!readySent) { readySent = true; try { og.ready(); window.__sgReady = performance.now(); } catch (e) { /* outside OpenGame */ } } });
  }
}
view.r.setAnimationLoop(loop);

// a debug handle for automated capture (not used by the game itself)
window.__sg = {
  game, rig, hints, hud, tide, setTool, setSpeed, act, view, sound, menus, settings,
  fxCount: () => ({ ...fx.count(), evaporation: motes.geo.drawRange.count, limits: { spray: fx.spray.max, rain: fx.rain.max, gulls: fx.gulls.count, evaporation: motes.positions.length / 3 } }),
  refresh: () => hud.update(),
  saveNow: () => saver.save(), digest: () => digest(game, hints, seed),
  advance(sec) { const st = 1 / 30, was = game.paused, fz = game.frozen, hh = game.hintHold; game.paused = false; game.frozen = false; game.hintHold = false; for (let n = Math.round(sec / st); n > 0; n--) { game.acc += st; game.tick(0); } game.hintHold = hh; game.paused = was; game.frozen = fz; },
  freeze(f) { game.frozen = f; },
  to(t) { if (t > game.t) this.advance(t - game.t); },
  toScreen: (x, y, z) => toScreen(new THREE.Vector3(x, y, z)),
  centerOf: (th) => toScreen(game.centerOf(th)),
  thingUnder: (x, y) => thingUnder(x, y, rig.pick(x, y)),
  cell: (x, y) => { const p = rig.pick(x, y); return p ? { i: ci(p.x), j: cj(p.z) } : null; },
  cellScreen: (i, j) => toScreen(new THREE.Vector3(wx(i), world.h[j * W + i], wz(j))),
  sluiceMarkCount: () => sluiceMarks.count,
  placeProblem,
};
registerOffline();
