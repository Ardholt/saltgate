// The water machine: gates, pans and weirs on top of the water grid,
// the brine-to-salt chemistry, building tools and the first-minute hints.
import * as THREE from 'three';
import { W, H, SN, SX, SZ, wx, wz, ci, cj, PAN_FLOOR, BUND } from './world.js';
import { WaterSim, SIM_DT, SUBSTEPS } from './sim.js';
import * as tide from './tide.js';
import { People } from './people.js';
import { Sediment } from './sediment.js';
import { Works } from './works.js';
import { Storm } from './storm.js';
import { Economy, SEASON_END, SEASON_TARGET, MASTER_TARGET } from './economy.js';
import { makeGate, setGateMark, makeWeir, makeOysterBed, heightAt } from './props.js';
import { clamp, smoothstep } from './noise.js';

const inSim = (i, j) => i >= SX && i < SX + SN && j >= SZ && j < SZ + SN;
const sIdx = (i, j) => (j - SZ) * SN + (i - SX);

export const COST = { dig: 1, gate: 12, pan: 30, weir: 15, oyster: 18, causeway: 2 };
const SAT = 0.45;          // dissolved salt per unit of brine volume at which salt crystallises
const SEA_SALT = 0.18;     // salt per unit volume of fresh sea water (the gauge reads this as 1x)
export const WEIR_BASKET = 24;    // a basket holds this many fish; the rest of the ebb's catch is lost
const WEIR_CROWD = 0.8;    // each later weir shares the creek: it catches 1/(1+0.8n) as much
const EVAP = 0.0145;       // pan water lost per second in full sun

export class Game {
  constructor(world, view) {
    this.world = world;
    this.view = view;            // { renderer, reeds, scene }
    this.sim = new WaterSim(world);
    this.t = tide.START_T;
    this.speed = 1; this.paused = false; this.hostPaused = false; this.hintHold = false;
    this.store = { salt: 0, fish: 0, oysters: 0, coin: 60 };
    this.stats = { raked: 0, fished: 0, oysters: 0, dissolved: 0 };
    this.ended = false;
    this.economy = new Economy(this);
    this.gates = []; this.pans = []; this.weirs = []; this.oysters = [];
    this.events = [];            // { type, ... } consumed by the HUD
    this.acc = 0;
    this.sunElev = 0.5;
    this.people = new People(this);

    // the starting works from the generator
    const { gate, pan, weir } = world;
    this.addPan(pan.i0, pan.j0, pan.w, pan.d, true);
    this.addGate(gate.i, gate.j, true, true);
    if (weir) this.addWeir(weir.x, weir.z, weir.ang, true);
    // A starter bed on a real intertidal bank, near the starting works.
    let bed = null, best = Infinity;
    for (let j = SZ + 3; j < SZ + SN - 3; j++) for (let i = SX + 3; i < SX + SN - 3; i++) {
      if (!this.oysterSiteOK(i, j)) continue;
      const d = Math.hypot(i - (gate.i - 10), j - (gate.j + 10));
      if (d < best) { best = d; bed = { i, j }; }
    }
    if (bed) this.addOysters(bed.i, bed.j, true);
    this.sim.floodFrom(tide.level(this.t));
    for (const p of this.pans) this.panVolume(p), (p.D = p.V * SEA_SALT);
    this.sediment = new Sediment(this);
    this.works = new Works(this);
    this.storm = new Storm(this);
    // What a fresh season starts from: a saved season is stored as the difference from this.
    this.base = { h: world.h.slice(), kind: world.kind.slice() };
    this.start = { gates: this.gates.length, pans: this.pans.length, weirs: this.weirs.length, oysters: this.oysters.length };
  }

  emit(type, data = {}) { this.events.push({ type, ...data }); }

  spend(amount, label) { return this.economy.spend(amount, label); }

  finishSeason() {
    if (this.ended) return;
    this.ended = true; this.acc = 0;
    const e = this.economy;
    const storm = this.storm.account();
    this.result = {
      success: e.earned >= SEASON_TARGET && storm.score >= 70, tradeSuccess: e.earned >= SEASON_TARGET, master: e.earned >= MASTER_TARGET, earned: e.earned, spent: e.spent,
      salt: this.stats.raked, fish: this.stats.fished, oysters: this.stats.oysters,
      losses: Math.round(this.stats.dissolved * 4), coin: this.store.coin,
      workerHarvest: this.people.work, wetSeconds: Math.round(this.people.wetSeconds),
      sold: { ...e.sold }, revenue: { ...e.revenue }, stock: { ...this.store }, visits: e.visits,
      storm, dredges: this.sediment.completed, siltRemoved: +this.sediment.removed.toFixed(1),
      power: +this.works.generated.toFixed(1), lifted: +this.works.lifted.toFixed(1),
    };
    this.result.score = Math.max(0, Math.round(e.earned + this.stats.raked * 2 + this.stats.fished * 3 + this.stats.oysters * 4 - this.result.losses + storm.score * 10));
    this.emit('seasonEnd', { result: this.result });
  }

  // ------------------------------------------------------------ building
  addGate(i, j, open = true, free = false) {
    const { h } = this.world;
    const k = j * W + i;
    // water runs along the axis whose two neighbours are lower; the gate takes the lower sill
    const flowX = (h[k - 1] + h[k + 1]) < (h[k - W] + h[k + W]);
    const sill = flowX ? Math.min(h[k - 1], h[k + 1]) : Math.min(h[k - W], h[k + W]);
    h[k] = Math.min(h[k], Math.max(sill, -0.6));
    if (this.sediment) this.sediment.depth[k] = 0;
    this.world.kind[k] = 2;
    const mesh = makeGate(flowX);
    mesh.position.set(wx(i), h[k] + 0.1, wz(j));
    this.view.scene.add(mesh);
    const g = { kind: 'gate', i, j, open, anim: open ? 1 : 0, mesh, name: 'Sluice gate' };
    this.gates.push(g);
    setGateMark(mesh, open);
    this.afterEdit(i - 1, j - 1, i + 1, j + 1);
    this.applyGate(g);
    return g;
  }

  applyGate(g) {
    if (inSim(g.i, g.j)) this.sim.block[sIdx(g.i, g.j)] = g.open ? 0 : 1;
  }

  toggleGate(g) {
    if (this.ended) return;
    if (!g.open && this.pans.some(p => p.maintaining && g.i >= p.i0 - 1 && g.i <= p.i0 + p.w && g.j >= p.j0 - 1 && g.j <= p.j0 + p.d)) return;
    g.open = !g.open;
    setGateMark(g.mesh, g.open);
    this.applyGate(g);
    this.emit('gate', { gate: g });
  }

  addPan(i0, j0, w, d, free = false) {
    const { h, kind } = this.world;
    const cells = [];
    for (let j = j0 - 1; j <= j0 + d; j++) for (let i = i0 - 1; i <= i0 + w; i++) {
      const inside = i >= i0 && i < i0 + w && j >= j0 && j < j0 + d;
      const k = j * W + i;
      if (kind[k] === 2 && !inside) continue; // keep a gate or channel cut through the bund
      h[k] = inside ? PAN_FLOOR : Math.max(BUND, h[k]);
      if (this.sediment) this.sediment.depth[k] = 0;
      kind[k] = inside ? 4 : 3;
      if (inside) cells.push(sIdx(i, j));
    }
    const pan = { kind: 'pan', id: this.pans.length, i0, j0, w, d, cells, V: 0, D: 0, crust: 0, name: 'Salt pan', ready: false };
    for (const s of cells) this.sim.pan[s] = pan.id;
    this.pans.push(pan);
    this.afterEdit(i0 - 2, j0 - 2, i0 + w + 2, j0 + d + 2);
    return pan;
  }

  addWeir(x, z, ang, free = false) {
    const mesh = makeWeir(this.world, x, z, ang);
    this.view.scene.add(mesh);
    const cells = new Set();
    for (const [px, , pz] of mesh.userData.pts) {
      const i = ci(px), j = cj(pz);
      if (inSim(i, j)) cells.add(sIdx(i, j));
    }
    const weir = { kind: 'weir', x, z, ang, mesh, cells: [...cells], catch: 0, name: 'Fish weir' };
    this.weirs.push(weir);
    return weir;
  }

  oysterSiteOK(i, j) { return !this.oysterProblem(i, j); }
  // why a bed cannot go at (i, j): the words for the first failing check, or null
  oysterProblem(i, j) {
    if (!inSim(i, j) || i <= SX + 2 || j <= SZ + 2 || i >= SX + SN - 3 || j >= SZ + SN - 3) return 'Too near the edge of the marsh';
    const k = j * W + i, h = this.world.h[k], kind = this.world.kind[k];
    if (kind >= 3) return 'Cell taken';
    if (kind === 2) return 'Not on the bank: that is a channel';
    if (h <= -0.8) return 'Too deep: always under water';
    if (h >= 0.35) return 'Too high: the flood barely reaches it';
    if (this.works?.occupied(i, j)) return 'Too close to a house or mill';
    if (this.oysters.some(o => Math.hypot(o.i - i, o.j - j) < 4)) return 'Too close to another bed (4 cells apart)';
    return null;
  }

  addOysters(i, j, free = false) {
    const mesh = makeOysterBed(this.world, wx(i), wz(j));
    this.view.scene.add(mesh);
    const bed = { kind: 'oyster', i, j, mesh, stock: free ? 6 : 0, name: 'Oyster bed', exposed: false };
    this.oysters.push(bed);
    return bed;
  }

  updateOysters(dt) {
    for (const o of this.oysters) {
      const depth = this.sim.d[sIdx(o.i, o.j)];
      o.exposed = depth < 0.12;
      if (depth > 0.2 && !o.damage) o.stock = Math.min(12, o.stock + dt * 0.07);
    }
  }

  gather(o) {
    if (this.ended || this.sim.d[sIdx(o.i, o.j)] >= 0.12) return 0;
    const n = Math.floor(o.stock);
    if (!n) return 0;
    o.stock -= n; this.store.oysters += n; this.stats.oysters += n;
    this.emit('oysters', { bed: o, amount: n });
    return n;
  }

  causewaySiteOK(i, j) {
    if (!inSim(i, j) || i <= SX || j <= SZ || i >= SX + SN - 1 || j >= SZ + SN - 1) return false;
    const k = j * W + i;
    return this.world.kind[k] < 3 && this.world.h[k] < 1.65
      && !this.works?.occupied(i, j)
      && !this.gates.some(g => Math.abs(g.i - i) + Math.abs(g.j - j) < 2)
      && !this.oysters.some(o => Math.hypot(o.i - i, o.j - j) < 3);
  }

  causeway(i, j) {
    if (!this.causewaySiteOK(i, j) || !this.spend(COST.causeway, 'Causeway')) return false;
    const k = j * W + i, s = sIdx(i, j), surface = this.sim.b[s] + this.sim.d[s];
    this.world.h[k] = 1.65; this.world.kind[k] = 6;
    this.sim.d[s] = Math.max(0, surface - 1.65);
    this.afterEdit(i - 1, j - 1, i + 1, j + 1);
    return true;
  }

  dig(i, j) {
    const { h, kind } = this.world;
    const k = j * W + i;
    if (this.oysters.some(o => Math.hypot(o.i - i, o.j - j) < 2.5)) return false;
    if (!inSim(i, j) || kind[k] >= 4 || this.works?.occupied(i, j)) return false;
    if (this.gates.some((g) => g.i === i && g.j === j)) return false;
    if ((this.sediment?.depth[k] || 0) > 0.01 || this.sediment?.job?.cells.includes(sIdx(i, j))) return false;
    const bed = -0.25;
    if (h[k] <= bed + 0.05) return false;
    h[k] = bed; kind[k] = 2;
    // soften the banks a little
    for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const q = (j + dj) * W + i + di;
      if (kind[q] === 0 && h[q] > 0.9) h[q] = h[q] * 0.75 + 0.9 * 0.25;
    }
    this.afterEdit(i - 1, j - 1, i + 1, j + 1);
    return true;
  }

  afterEdit(i0, j0, i1, j1) {
    this.sim.syncBed();
    this.view.renderer.recomputeTerrain(i0 - 1, j0 - 1, i1 + 1, j1 + 1);
    const cells = [];
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) if (this.world.kind[j * W + i] !== 0) cells.push(j * W + i);
    this.view.reeds?.clear(cells);
    this.view.renderer.heightTex.needsUpdate = true;
  }

  // Can a pan go here? Interior w x d plus a bund ring, on dry marsh, not on works.
  panSiteOK(i0, j0, w, d) { return !this.panProblem(i0, j0, w, d); }
  // why a pan cannot go here: the words for the first failing check, or null
  panProblem(i0, j0, w, d) {
    const { kind, h } = this.world;
    for (let j = j0 - 1; j <= j0 + d; j++) for (let i = i0 - 1; i <= i0 + w; i++) {
      if (!inSim(i, j) || i <= SX || j <= SZ || i >= SX + SN - 1 || j >= SZ + SN - 1) return 'Too near the edge of the marsh';
      const k = j * W + i;
      if (this.oysters.some(o => Math.hypot(o.i - i, o.j - j) < 2.5)) return 'Too close to an oyster bed';
      if (kind[k] >= 3) return 'Cell taken: a pan, bank, house or causeway is in the way';
      if (this.works?.occupied(i, j)) return 'Too close to a house or mill';
      if (this.sediment?.job?.cells.includes(sIdx(i, j))) return 'The dredging crew is working here';
      if (kind[k] === 1 && h[k] < 0.3) return 'A creek is in the way';
    }
    return null;
  }

  // ---------------------------------------------------------------- pans
  panVolume(p) {
    let V = 0;
    for (const s of p.cells) V += this.sim.d[s];
    p.V = V;
    return V;
  }

  panOpen(p) {
    // open if any open gate touches the pan's bund
    return !!p.breach || this.gates.some((g) => g.open && g.i >= p.i0 - 1 && g.i <= p.i0 + p.w && g.j >= p.j0 - 1 && g.j <= p.j0 + p.d);
  }

  panFloor(p) { return PAN_FLOOR + (this.sediment?.panDepth(p) || 0); }

  updatePans(dt) {
    const sun = Math.max(0, this.sunElev);
    for (const p of this.pans) {
      const V0 = p.V;
      const open = this.panOpen(p);
      // evaporation: the sun works only on still pan water
      const e = EVAP * (0.3 + 0.7 * smoothstep(0.0, 0.3, sun)) * dt * (p.damage ? 0.35 : 1);
      for (const s of p.cells) if (this.sim.d[s] > 0) this.sim.d[s] = Math.max(0, this.sim.d[s] - e);
      const V = this.panVolume(p);
      if (open) {
        // exchange with the sea: new water brings sea salt, leaving water takes brine with it
        if (V > V0) p.D += (V - V0) * SEA_SALT;
        else if (V0 > 0) p.D *= V / V0;
        // fresh flood water dissolves crust
        if (p.crust > 0 && V > 0.5) {
          const melt = Math.min(p.crust, p.crust * 0.6 * dt);
          p.crust -= melt; p.D += melt;
          this.stats.dissolved += melt;
          if (!p.warnedMelt && p.crust > 0.1) { p.warnedMelt = true; this.emit('melt', { pan: p }); }
        }
      }
      // crystallise what the brine cannot hold
      const cap = V * SAT;
      if (p.D > cap) { p.crust += p.D - cap; p.D = cap; }
      p.conc = V > 0.01 ? p.D / V / SEA_SALT : 0;
      const wasReady = p.ready;
      // salt is raked from the last of the brine, as in real salterns
      p.ready = p.crust > 1.0;
      if (p.ready && !wasReady) this.emit('saltReady', { pan: p });
    }
  }

  rake(p) {
    if (this.ended || p.crust < 0.2) return 0;
    const got = Math.round(p.crust * 4);
    p.crust = 0; p.warnedMelt = false; p.ready = false;
    this.store.salt += got;
    this.stats.raked += got;
    this.emit('rake', { pan: p, amount: got });
    return got;
  }

  // per sim-cell crust whiteness for the terrain shader
  saltAt(s) {
    const id = this.sim.pan[s];
    if (id < 0) return 0;
    const p = this.pans[id];
    return clamp(p.crust / (p.cells.length * 0.045), 0, 1);
  }

  brineAt(s) {
    const id = this.sim.pan[s];
    if (id < 0) return -1;
    const p = this.pans[id];
    return clamp(((p.conc || 1) - 1) / 1.6, 0, 1);
  }

  // --------------------------------------------------------------- weirs
  updateWeirs(dt) {
    const ebb = tide.rate(this.t) < 0;
    for (const w of this.weirs) {
      let flow = 0;
      for (const s of w.cells) flow += Math.hypot(this.sim.vx[s], this.sim.vz[s]) * Math.min(1, this.sim.d[s]);
      if (ebb && !w.damage) w.catch = Math.min(WEIR_BASKET, w.catch + flow * dt * 0.02 / (1 + WEIR_CROWD * this.weirs.indexOf(w)));
      const shown = Math.min(1, w.catch / 12);
      w.mesh.userData.fish.visible = w.catch >= 1;
      w.mesh.userData.fish.scale.set(0.4 + shown * 0.6, 0.01 + shown * 0.9, 0.4 + shown * 0.6);
      if (w.catch >= 3 && !w.told) { w.told = true; this.emit('fishReady', { weir: w }); }
    }
  }

  collect(w) {
    if (this.ended) return 0;
    const n = Math.floor(w.catch);
    if (n < 1) return 0;
    w.catch -= n; w.told = false;
    w.mesh.userData.fish.visible = false;
    this.store.fish += n;
    this.stats.fished += n;
    this.emit('fish', { weir: w, amount: n });
    return n;
  }

  // ---------------------------------------------------------------- tick
  // Fixed-step sim, decoupled from frame rate. Returns sim seconds advanced.
  tick(realDt) {
    if (this.paused || this.hostPaused || this.hintHold || this.frozen || this.held || this.ended) return 0;
    // the sim keeps real time down to one frame a second; past its budget it drops time rather than stall
    this.acc += Math.min(realDt, 1.0) * this.speed;
    let ran = 0;
    let budget = 60;
    while (this.acc >= SIM_DT && budget-- > 0) {
      const lvl = tide.level(this.t);
      for (let s = 0; s < SUBSTEPS; s++) this.sim.step(SIM_DT / SUBSTEPS, lvl);
      this.t += SIM_DT;
      this.sunElev = tide.sunState(this.t).elev;
      this.updatePans(SIM_DT);
      this.updateWeirs(SIM_DT);
      this.updateOysters(SIM_DT);
      this.sediment.update(SIM_DT);
      this.works.update(SIM_DT);
      this.storm.update(SIM_DT);
      this.sim.dry(SIM_DT, this.sunElev);
      this.people.update(SIM_DT);
      this.economy.update(SIM_DT);
      this.acc -= SIM_DT;
      ran += SIM_DT;
      if (this.t >= SEASON_END - 1e-6) { this.t = SEASON_END; this.finishSeason(); break; }
    }
    if (budget <= 0) this.acc = 0;
    for (const g of this.gates) {
      const goal = g.open ? 1 : 0;
      g.anim += clamp(goal - g.anim, -realDt * 1.6, realDt * 1.6);
      g.mesh.userData.door.position.y = -0.05 + g.anim * 1.55;
      g.mesh.userData.wheel.rotation.x = g.anim * 6;
      setGateMark(g.mesh, g.open);
    }
    return ran;
  }

  // what is under a world point: a structure or plain ground
  thingAt(x, z) {
    const i = ci(x), j = cj(z);
    for (const b of [...this.works.mills, ...this.works.houses]) if (Math.hypot(b.i - i, b.j - j) < 3) return b;
    for (const pump of this.works.pumps) if (Math.hypot(pump.mesh.position.x - x, pump.mesh.position.z - z) < 1.2) return pump;
    for (const g of this.gates) if (Math.abs(g.i - i) <= 1 && Math.abs(g.j - j) <= 1) return g;
    for (const w of this.weirs) {
      for (const [px, , pz] of w.mesh.userData.pts) if (Math.hypot(px - x, pz - z) < 1.1) return w;
    }
    for (const o of this.oysters) if (Math.hypot(o.i - i, o.j - j) < 2.4) return o;
    for (const p of this.pans) if (i >= p.i0 - 1 && i <= p.i0 + p.w && j >= p.j0 - 1 && j <= p.j0 + p.d) return p;
    return null;
  }

  centerOf(thing) {
    if (thing.kind === 'pump') return thing.mesh.position.clone().add(new THREE.Vector3(0, 1, 0));
    if (thing.kind === 'mill' || thing.kind === 'house') return thing.mesh.position.clone().add(new THREE.Vector3(0, 4, 0));
    if (thing.kind === 'gate') return new THREE.Vector3(wx(thing.i), this.world.h[thing.j * W + thing.i] + 3.6, wz(thing.j));
    if (thing.kind === 'pan') return new THREE.Vector3(wx(thing.i0 + thing.w / 2 - 0.5), PAN_FLOOR + 0.6, wz(thing.j0 + thing.d / 2 - 0.5));
    if (thing.kind === 'oyster') return new THREE.Vector3(wx(thing.i), this.world.h[thing.j * W + thing.i] + 1.4, wz(thing.j));
    if (thing.kind === 'weir') return thing.mesh.position.clone().add(thing.mesh.userData.fish.position);
    return new THREE.Vector3();
  }
}
