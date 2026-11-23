// Save and resume. A season is stored as the difference from a fresh one:
// the water grid and terrain edits as exact bytes, every work and worker as plain fields.
// Storage may be missing, full or hand-edited, so nothing here is allowed to throw into play.
import { W, SN } from './world.js';
import * as tide from './tide.js';
import { setGateMark } from "./props.js";

export const SAVE_KEY = 'saltgate.save';
export const SAVE_VERSION = 1;

// ------------------------------------------------------------ storage
export const storage = {
  read() { try { return { text: localStorage.getItem(SAVE_KEY), blocked: false }; } catch { return { text: null, blocked: true }; } },
  write(text) { try { localStorage.setItem(SAVE_KEY, text); return true; } catch { return false; } },
  clear() { try { localStorage.removeItem(SAVE_KEY); return true; } catch { return false; } },
};

// ------------------------------------------------------------ encoding
const toB64 = (arr) => {
  const bytes = new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
  let s = '';
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  return btoa(s);
};
const fromB64 = (text, Type, length) => {
  if (typeof text !== 'string') throw new Error('bad array');
  const s = atob(text);
  if (s.length !== length * Type.BYTES_PER_ELEMENT) throw new Error('bad array length');
  const bytes = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) bytes[i] = s.charCodeAt(i);
  return new Type(bytes.buffer);
};
const sparseDiff = (cur, base) => { const out = []; for (let k = 0; k < cur.length; k++) if (!base || cur[k] !== base[k]) out.push(k, cur[k]); return out; };
const sparseApply = (target, base, list) => {
  if (base) target.set(base); else target.fill(0);
  if (!Array.isArray(list) || list.length % 2) throw new Error('bad sparse list');
  for (let n = 0; n < list.length; n += 2) {
    const k = list[n], v = list[n + 1];
    if (!Number.isInteger(k) || k < 0 || k >= target.length || typeof v !== 'number' || !Number.isFinite(v)) throw new Error('bad sparse entry');
    target[k] = v;
  }
};

const SIM_FIELDS = ['d', 'fL', 'fR', 'fT', 'fB', 'vx', 'vz', 'wet'];
const SKIP = new Set(['mesh', 'cells', 'pan', 'pump', 'job', 'cellSet', 'loads', 'ledger', 'name', 'kind', 'anim']);
// the plain numbers, flags and small {i,j} points of a work
const plain = (obj) => {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (SKIP.has(k)) continue;
    if (typeof v === 'number' || typeof v === 'boolean' || typeof v === 'string' || v === null) out[k] = Number.isFinite(v) || typeof v !== 'number' ? v : null;
    else if (v && typeof v === 'object' && !Array.isArray(v) && Object.values(v).every(x => typeof x === 'number') && 'i' in v) out[k] = { ...v };
  }
  return out;
};
const lists = (g) => ({ pan: g.pans, weir: g.weirs, oyster: g.oysters, mill: g.works.mills });
const ref = (g, thing) => thing ? { k: thing.kind, n: lists(g)[thing.kind].indexOf(thing) } : null;
const deref = (g, r) => {
  if (!r) return null;
  const t = lists(g)[r.k]?.[r.n];
  if (!t) throw new Error('bad reference');
  return t;
};

// ------------------------------------------------------------ snapshot
export function snapshot(game, hints, seed) {
  const g = game, { sim, world, economy: e, storm, sediment, works } = g;
  const snap = {
    v: SAVE_VERSION, seed, savedAt: Date.now(),
    t: g.t, speed: g.speed, acc: g.acc,
    store: { ...g.store }, stats: { ...g.stats },
    sim: Object.fromEntries(SIM_FIELDS.map(f => [f, toB64(sim[f])])),
    h: sparseDiff(world.h, g.base.h), kind: sparseDiff(world.kind, g.base.kind),
    silt: sparseDiff(sediment.depth), deck: sparseDiff(works.deck),
    gates: g.gates.map(a => ({ i: a.i, j: a.j, open: a.open })),
    pans: g.pans.map(p => ({ i0: p.i0, j0: p.j0, w: p.w, d: p.d, ...plain(p) })),
    weirs: g.weirs.map(w => ({ x: w.x, z: w.z, ang: w.ang, ...plain(w) })),
    oysters: g.oysters.map(o => ({ i: o.i, j: o.j, ...plain(o) })),
    mills: works.mills.map(plain), houses: works.houses.map(plain),
    pumps: works.pumps.map(p => ({ pan: g.pans.indexOf(p.pan), enabled: p.enabled, active: p.active, filling: !!p.filling })),
    works: { energy: works.energy, generated: works.generated, used: works.used, lifted: works.lifted, seen: [...works.seen] },
    hands: g.people.hands.map(h => ({
      name: h.name, x: h.x, z: h.z, job: ref(g, h.job), path: h.path, at: h.at, retry: h.retry, nextWork: h.nextWork,
      status: h.status, connected: !!h.connected, checkHome: h.checkHome || 0,
    })),
    people: { work: g.people.work, wetSeconds: g.people.wetSeconds },
    economy: {
      pressure: { ...e.pressure }, selling: { ...e.selling }, sold: { ...e.sold }, earned: e.earned, spent: e.spent, visits: e.visits,
      ledger: e.ledger.map(r => ({ ...r })), high: e.high, state: e.state, progress: e.progress, capacity: e.capacity, quay: e.quay, wages: e.wages,
      lastSale: Number.isFinite(e.lastSale) ? e.lastSale : null, lastVisitHigh: e.lastVisitHigh ?? null,
    },
    storm: {
      ...plain(storm), losses: { ...storm.losses },
      assetsAtStart: storm.assetsAtStart.map(a => ref(g, a)),
      repairJob: storm.repairJob ? { thing: ref(g, storm.repairJob.thing), left: storm.repairJob.left } : null,
    },
    sediment: {
      clock: sediment.clock, completed: sediment.completed, removed: sediment.removed, dirty: sediment.dirty,
      job: sediment.job ? { ...plain(sediment.job), cells: [...sediment.job.cells], loads: [...sediment.job.loads], pan: sediment.job.pan ? g.pans.indexOf(sediment.job.pan) : -1 } : null,
    },
    hints: hints ? { done: [...hints.done], rakes: hints.rakes, goalLeft: hints.goalLeft, askedShut: [...hints.askedShut], prevVolumes: [...hints.prevVolumes] } : null,
  };
  return snap;
}

export const serialise = (snap) => JSON.stringify(snap);

// A stable fingerprint of everything a save holds (the save time itself excluded).
export function digest(game, hints, seed) {
  const s = snapshot(game, hints, seed); s.savedAt = 0;
  const text = JSON.stringify(s);
  let h1 = 0x811c9dc5, h2 = 0x1b873593;
  for (let i = 0; i < text.length; i++) { const c = text.charCodeAt(i); h1 = Math.imul(h1 ^ c, 16777619) >>> 0; h2 = Math.imul(h2 + c, 2246822519) >>> 0; }
  return `${h1.toString(16).padStart(8, '0')}${h2.toString(16).padStart(8, '0')}:${text.length}`;
}

// ------------------------------------------------------------ validation
const isNum = (v) => typeof v === 'number' && Number.isFinite(v);
const isObj = (v) => v && typeof v === 'object' && !Array.isArray(v);
const inGrid = (i, j) => Number.isInteger(i) && Number.isInteger(j) && i > 2 && j > 2 && i < W - 3 && j < W - 3;

// Parse stored text. Returns { ok: true, snap } or { ok: false, why }. Never throws.
export function parse(text, seed, game) {
  try {
    if (typeof text !== 'string' || !text) return { ok: false, why: 'empty' };
    const s = JSON.parse(text);
    if (!isObj(s)) return { ok: false, why: 'not an object' };
    if (s.v !== SAVE_VERSION) return { ok: false, why: 'version' };
    if (s.seed !== seed) return { ok: false, why: 'other coast' };
    if (![s.t, s.speed, s.acc].every(isNum) || s.t < tide.START_T - 1e-6 || s.t > tide.START_T + tide.SEASON_DAYS * tide.DAY) return { ok: false, why: 'time' };
    if (!isObj(s.store) || !isObj(s.stats) || !isObj(s.economy) || !isObj(s.storm) || !isObj(s.sediment) || !isObj(s.works) || !isObj(s.people) || !isObj(s.sim)) return { ok: false, why: 'shape' };
    for (const k of ['salt', 'fish', 'oysters', 'coin']) if (!isNum(s.store[k])) return { ok: false, why: 'store' };
    for (const f of SIM_FIELDS) fromB64(s.sim[f], Float32Array, SN * SN);
    for (const k of ['gates', 'pans', 'weirs', 'oysters', 'mills', 'houses', 'pumps', 'hands']) if (!Array.isArray(s[k])) return { ok: false, why: k };
    if (s.gates.length < game.start.gates || s.pans.length < game.start.pans || s.weirs.length < game.start.weirs || s.oysters.length < game.start.oysters) return { ok: false, why: 'missing works' };
    if (s.gates.length > 60 || s.pans.length > 60 || s.weirs.length > 60 || s.oysters.length > 60 || s.mills.length > 20 || s.houses.length > 20 || s.hands.length > 8) return { ok: false, why: 'size' };
    for (const a of s.gates) if (!inGrid(a.i, a.j) || typeof a.open !== 'boolean') return { ok: false, why: 'gate' };
    for (const p of s.pans) if (!inGrid(p.i0, p.j0) || !(p.w > 0 && p.w < 40 && p.d > 0 && p.d < 40) || !inGrid(p.i0 + p.w, p.j0 + p.d)) return { ok: false, why: 'pan' };
    for (const w of s.weirs) if (![w.x, w.z, w.ang].every(isNum)) return { ok: false, why: 'weir' };
    for (const o of s.oysters) if (!inGrid(o.i, o.j)) return { ok: false, why: 'oysters' };
    for (const b of [...s.mills, ...s.houses]) if (!inGrid(b.i, b.j)) return { ok: false, why: 'building' };
    for (const p of s.pumps) if (!Number.isInteger(p.pan) || p.pan < 0 || p.pan >= s.pans.length) return { ok: false, why: 'pump' };
    for (const h of s.hands) if (![h.x, h.z].every(isNum) || !isObj(h.job) || !['pan', 'weir', 'oyster'].includes(h.job.k)) return { ok: false, why: 'hand' };
    for (const key of ['h', 'kind', 'silt', 'deck']) { if (!Array.isArray(s[key]) || s[key].length % 2) return { ok: false, why: key }; }
    return { ok: true, snap: s };
  } catch (e) { return { ok: false, why: 'unreadable' }; }
}

// ------------------------------------------------------------- restore
const assign = (target, src, skip = []) => {
  for (const [k, v] of Object.entries(src)) if (!skip.includes(k) && !SKIP.has(k)) target[k] = v;
};

// Put a parsed save into a freshly built Game. Throws if anything is unusable;
// the caller then discards this page's state and starts a new season.
export function restore(game, hints, s) {
  const g = game, { world, sim } = g;
  const applyTerrain = () => {
    sparseApply(world.h, g.base.h, s.h);
    sparseApply(world.kind, g.base.kind, s.kind);
    sparseApply(g.sediment.depth, null, s.silt);
    sparseApply(g.works.deck, null, s.deck);
  };
  applyTerrain();                     // works are built on the saved ground
  for (let n = g.start.gates; n < s.gates.length; n++) g.addGate(s.gates[n].i, s.gates[n].j, s.gates[n].open, true);
  for (let n = g.start.pans; n < s.pans.length; n++) g.addPan(s.pans[n].i0, s.pans[n].j0, s.pans[n].w, s.pans[n].d, true);
  for (let n = g.start.weirs; n < s.weirs.length; n++) g.addWeir(s.weirs[n].x, s.weirs[n].z, s.weirs[n].ang, true);
  for (let n = g.start.oysters; n < s.oysters.length; n++) g.addOysters(s.oysters[n].i, s.oysters[n].j, true);
  for (const m of s.mills) g.works.restoreBuilding('mill', m.i, m.j);
  for (const m of s.houses) g.works.restoreBuilding('house', m.i, m.j);
  for (const p of s.pumps) g.works.restorePump(g.pans[p.pan]);

  s.gates.forEach((d, n) => { g.gates[n].open = d.open; });
  s.pans.forEach((d, n) => assign(g.pans[n], d, ['i0', 'j0', 'w', 'd']));
  s.weirs.forEach((d, n) => assign(g.weirs[n], d, ['x', 'z', 'ang']));
  s.oysters.forEach((d, n) => assign(g.oysters[n], d, ['i', 'j']));
  s.mills.forEach((d, n) => assign(g.works.mills[n], d));
  s.houses.forEach((d, n) => assign(g.works.houses[n], d));
  s.pumps.forEach((d, n) => { const p = g.works.pumps[n]; p.enabled = d.enabled; p.active = d.active; p.filling = d.filling; });
  // storm bracing and damage leave their shapes in the meshes
  for (const b of [...g.pans, ...g.weirs, ...g.oysters, ...g.works.mills]) {
    if (b.braced) { b.braced = false; g.works.brace(b); }
    if (b.damage && b.mesh) b.mesh.rotation.z = 0.16;
  }
  applyTerrain();                     // exact ground again, after the works' own edits

  // water
  sim.syncBed();
  for (const f of SIM_FIELDS) sim[f].set(fromB64(s.sim[f], Float32Array, SN * SN));
  sim.block.fill(0);
  for (const a of g.gates) g.applyGate(a);
  sim.pan.fill(-1);
  for (const p of g.pans) for (const c of p.cells) sim.pan[c] = p.id;
  g.gates.forEach(a => { a.anim = a.open ? 1 : 0; setGateMark(a.mesh, a.open); });

  // the clock, stores and season books
  g.t = s.t; g.speed = s.speed; g.acc = s.acc; g.paused = false; g.ended = false;
  g.sunElev = tide.sunState(g.t).elev;
  g.store = { ...s.store }; g.stats = { ...g.stats, ...s.stats };
  const e = g.economy, se = s.economy;
  Object.assign(e, { pressure: { ...se.pressure }, selling: { ...se.selling }, sold: { ...se.sold }, earned: se.earned, spent: se.spent, visits: se.visits,
    ledger: se.ledger.map(r => ({ ...r })), high: se.high, state: se.state, progress: se.progress, capacity: se.capacity, quay: se.quay | 0, wages: se.wages || 0,
    lastSale: se.lastSale === null ? -Infinity : se.lastSale });
  if (se.lastVisitHigh === null) delete e.lastVisitHigh; else e.lastVisitHigh = se.lastVisitHigh;
  Object.assign(g.works, { energy: s.works.energy, generated: s.works.generated, used: s.works.used, lifted: s.works.lifted, seen: new Set(s.works.seen) });
  const st = g.storm, ss = s.storm;
  assign(st, ss, ['losses', 'assetsAtStart', 'repairJob']);
  st.losses = { ...ss.losses };
  st.assetsAtStart = ss.assetsAtStart.map(r => deref(g, r));
  st.repairJob = ss.repairJob ? { thing: deref(g, ss.repairJob.thing), left: ss.repairJob.left } : null;
  const sd = g.sediment, sj = s.sediment;
  Object.assign(sd, { clock: sj.clock, completed: sj.completed, removed: sj.removed, dirty: sj.dirty });
  sd.job = null; sd.mesh.visible = false;
  if (sj.job) {
    const job = { ...sj.job, pan: sj.job.pan >= 0 ? g.pans[sj.job.pan] : undefined };
    job.cellSet = new Set(job.cells);
    sd.job = job; sd.mesh.visible = true;
  }

  // workers
  g.people.work = s.people.work; g.people.wetSeconds = s.people.wetSeconds;
  for (const hd of s.hands) {
    const hand = g.people.restoreHand(hd, deref(g, hd.job));
    if (!hand) throw new Error('hand');
  }

  // the picture: terrain, reeds, weir baskets
  g.view.renderer.recomputeTerrain(0, 0, W - 1, W - 1);
  const cells = [];
  for (let k = 0; k < world.kind.length; k++) if (world.kind[k] !== 0) cells.push(k);
  g.view.reeds?.clear(cells);
  g.view.renderer.heightTex.needsUpdate = true;
  g.updateWeirs(0);
  for (const a of g.gates) { a.mesh.position.y = world.h[a.j * W + a.i] + 0.1; a.mesh.userData.door.position.y = -0.05 + a.anim * 1.55; a.mesh.userData.wheel.rotation.x = a.anim * 6; }

  if (hints && s.hints) {
    hints.done = new Set(s.hints.done); hints.rakes = s.hints.rakes; hints.goalLeft = s.hints.goalLeft;
    hints.askedShut = new Set(s.hints.askedShut); hints.prevVolumes = new Map(s.hints.prevVolumes);
  }
}
