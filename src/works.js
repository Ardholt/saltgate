import { W, SN, SX, SZ, wx, wz, ci, cj } from './world.js';
import * as tide from './tide.js';
import { makeMill, makeStiltHouse, makePump, makeBraces, makeBankSteps } from './works-props.js';

export const UNLOCKS = [
  { id: 'house', day: 3, cost: 80, name: 'Stilt house', key: 'H', detail: 'A raised local home for two more hands; keeps 30 stored cargo above the surge.' },
  { id: 'mill', day: 5, cost: 140, name: 'Tide mill', key: 'T', detail: 'Build in a flowing creek. The wheel banks 120 power for pumps; slack water makes none.' },
  { id: 'pump', day: 8, cost: 90, name: 'Brine pump', key: 'P', detail: 'Click a pan to install. Uses mill power to lift brine through neaps and drain storm water.' },
  { id: 'bank', day: 10, cost: 65, name: 'Storm banks', key: 'B', detail: 'Click a pan for +3.05 m banks, or a mill, weir or oyster bed for storm bracing. Shut sluices before the surge.' },
];
const si = (i, j) => (j - SZ) * SN + i - SX;
const inside = (i, j) => i > SX + 3 && j > SZ + 3 && i < SX + SN - 5 && j < SZ + SN - 5;

export class Works {
  constructor(game) {
    this.game = game; this.mills = []; this.houses = []; this.pumps = [];
    this.energy = 0; this.generated = 0; this.used = 0; this.lifted = 0; this.rateFrom = null;
    this.seen = new Set();
    this.deck = new Float32Array(W * W);
  }

  // the day on the HUD clock, so a work's "opens day N" label and its gate agree
  day() { return Math.min(14, Math.max(1, tide.dayNumber(this.game.t))); }
  unlocked(id) { return this.day() >= UNLOCKS.find(u => u.id === id)?.day; }
  // What the mills make and the pumps spend per tide-day, measured since the first mill ran; null while there is too little to say.
  rates() {
    const f = this.rateFrom, days = f ? (this.game.t - f.t) / tide.DAY : 0;
    if (!f || days < 0.25) return null;
    return { gen: (this.generated - f.gen) / days, used: (this.used - f.used) / days, lifted: (this.lifted - f.lifted) / days, days };
  }
  maxHands() { return Math.min(8, 4 + this.houses.length * 2); }
  occupied(i, j, radius = 2.5) {
    return [...this.mills, ...this.houses].some(b => Math.hypot(b.i - i, b.j - j) < radius + 2);
  }
  siteOK(type, i, j) { return !this.siteProblem(type, i, j); }
  // why a mill or house cannot go at (i, j), in words; null when it can
  siteProblem(type, i, j) {
    const g = this.game, { kind, h } = g.world, what = type === 'mill' ? 'tide mill' : 'stilt house';
    if (!inside(i, j)) return `Too near the edge of the marsh for a ${what}`;
    if (this.occupied(i, j)) return `Too close to another house or mill (keep about 4.5 cells apart)`;
    if (g.gates.some(b => Math.hypot(b.i - i, b.j - j) < 4)) return 'Too close to a sluice gate (4 cells)';
    if (g.oysters.some(b => Math.hypot(b.i - i, b.j - j) < 5)) return 'Too close to an oyster bed (5 cells)';
    if (g.weirs.some(b => Math.hypot(ci(b.x) - i, cj(b.z) - j) < 6)) return 'Too close to a fish weir (6 cells)';
    if (type === 'mill') {
      if (![1, 2].includes(kind[j * W + i])) return 'A tide mill goes in a creek or channel, where the tide flows';
      if (h[j * W + i] > 0.3) return 'Too high: the creek bed here is above the flow';
      for (let y = j - 2; y <= j + 2; y++) for (let x = i - 2; x <= i + 2; x++) if (kind[y * W + x] >= 3) return 'Needs 2 clear cells around it: a pan, gate or bed is in the way';
      return null;
    }
    if (type === 'house') {
      for (let y = j - 1; y <= j + 4; y++) for (let x = i - 1; x <= i + 1; x++) {
        const k = y * W + x;
        if (kind[k] !== 0 || h[k] < 0.65 || h[k] > 2.2) return 'A stilt house needs a 3 x 6 patch of dry marsh, not water or built ground';
      }
      return null;
    }
    return 'Not a buildable work';
  }

  build(type, i, j) {
    const g = this.game, u = UNLOCKS.find(u => u.id === type);
    if (!u || !this.unlocked(type) || !this.siteOK(type, i, j) || !g.spend(u.cost, u.name)) return null;
    const mesh = type === 'mill' ? makeMill() : makeStiltHouse(g.world.h[j * W + i]);
    const b = { kind: type, name: u.name, i, j, mesh, braced: false, damage: 0, output: 0 };
    mesh.position.set(wx(i), type === 'mill' ? 0 : g.world.h[j * W + i], wz(j));
    g.view.scene.add(mesh);
    if (type === 'mill') this.mills.push(b);
    else {
      this.houses.push(b);
      for (let y = j - 1; y <= j + 4; y++) for (let x = i - 1; x <= i + 1; x++) {
        const k = y * W + x;
        if (y <= j + 1) this.deck[k] = 3.05;
        else this.deck[k] = Math.max(g.world.h[k], 3.05 - (y - j - 1) * 0.6);
        g.world.kind[k] = 7;
      }
    }
    g.emit('built', { thing: b });
    return b;
  }

  installPump(pan) {
    const g = this.game;
    if (!this.unlocked('pump') || pan?.kind !== 'pan' || pan.pump || !this.mills.length || !g.spend(90, 'Brine pump')) return false;
    const mesh = makePump();
    mesh.position.set(wx(pan.i0 + pan.w), 1.6, wz(pan.j0 + pan.d / 2));
    g.view.scene.add(mesh);
    const pump = { kind: 'pump', name: 'Brine pump', pan, mesh, enabled: true, active: false };
    pan.pump = pump; this.pumps.push(pump); g.emit('built', { thing: pump }); return true;
  }

  // Rebuild a saved mill, house or pump (mesh and lists only; terrain comes from the save).
  restoreBuilding(type, i, j) {
    const g = this.game, u = UNLOCKS.find(u => u.id === type);
    const mesh = type === 'mill' ? makeMill() : makeStiltHouse(g.world.h[j * W + i]);
    const b = { kind: type, name: u.name, i, j, mesh, braced: false, damage: 0, output: 0 };
    mesh.position.set(wx(i), type === 'mill' ? 0 : g.world.h[j * W + i], wz(j));
    g.view.scene.add(mesh);
    (type === 'mill' ? this.mills : this.houses).push(b);
    return b;
  }

  restorePump(pan) {
    const mesh = makePump();
    mesh.position.set(wx(pan.i0 + pan.w), 1.6, wz(pan.j0 + pan.d / 2));
    this.game.view.scene.add(mesh);
    const pump = { kind: 'pump', name: 'Brine pump', pan, mesh, enabled: true, active: false };
    pan.pump = pump; this.pumps.push(pump);
    return pump;
  }

  label(thing) {
    const g = this.game;
    return thing.kind === 'pan' ? `Pan ${g.pans.indexOf(thing) + 1}` : thing.kind === 'weir' ? `Weir ${g.weirs.indexOf(thing) + 1}`
      : thing.kind === 'oyster' ? `Oysters ${g.oysters.indexOf(thing) + 1}` : thing.name;
  }

  // Why storm banks cannot go on this work right now, in words; null when they can.
  protectProblem(thing) {
    const g = this.game, u = UNLOCKS.find(u => u.id === 'bank');
    if (g.ended) return 'The season has ended.';
    if (!this.unlocked('bank')) return `Storm banks open on day ${u.day}; it is day ${this.day()}.`;
    if (!thing || !['pan', 'mill', 'weir', 'oyster'].includes(thing.kind)) return 'Nothing to protect under the cursor. Click a pan, tide mill, fish weir or oyster bed.';
    if (thing.braced) return `${this.label(thing)} already has storm banks.`;
    if (g.store.coin < u.cost) return `Storm banks cost ${u.cost} shillings; you have ${Math.floor(g.store.coin)}.`;
    return null;
  }

  // Works protected N/M, and the one next step before the surge.
  stormPlan() {
    const g = this.game, u = UNLOCKS.find(u => u.id === 'bank'), assets = g.storm.assets();
    const braced = assets.filter(a => a.braced).length, total = assets.length;
    let text;
    if (g.storm.passed) text = g.storm.damageCount ? 'The surge has passed. Repair damaged works (R).' : 'The surge has passed. Trade the last tides.';
    else if (!this.unlocked('bank')) text = `Storm banks open on day ${u.day} (${u.cost} sh each): keep a purse.`;
    else {
      const open = assets.find(a => !a.braced);
      const gate = g.pans.find(p => p.braced && g.panOpen(p));
      if (open) text = g.store.coin < u.cost ? `Need ${Math.ceil(u.cost - g.store.coin)} more shillings for banks on ${this.label(open)}.` : `Next: press B, then click ${this.label(open)} (${u.cost} sh).`;
      else if (gate) text = `${this.label(gate)} has banks but its sluice is open: shut it before the surge.`;
      else text = 'Every work is protected. Keep the sluices shut through the surge.';
    }
    return { braced, total, text };
  }

  // Cost to protect every unprotected work, and how many the purse covers now (every bank costs the same).
  protectAllInfo() {
    const g = this.game, u = UNLOCKS.find(u => u.id === 'bank'), open = g.storm.assets().filter(a => !a.braced);
    const n = open.length, afford = Math.min(n, Math.floor(g.store.coin / u.cost));
    return { n, cost: u.cost, all: n * u.cost, afford, live: this.unlocked('bank') && !g.storm.passed && !g.ended };
  }

  // One click: bank as many unprotected works as the purse covers (pans first, they earn).
  protectAffordable() {
    const g = this.game, order = { pan: 0, mill: 1, weir: 2, oyster: 3 };
    const open = g.storm.assets().filter(a => !a.braced).sort((a, b) => (order[a.kind] ?? 9) - (order[b.kind] ?? 9));
    let done = 0;
    for (const a of open) { if (this.protect(a)) done++; else break; }
    return done;
  }

  protect(thing) {
    const g = this.game;
    if (this.protectProblem(thing) || !g.spend(65, 'Storm protection')) return false;
    this.brace(thing);
    g.emit('protected', { thing }); return true;
  }

  // The built form of storm protection, with no cost; a saved season replays it.
  brace(thing) {
    const g = this.game;
    thing.braced = true;
    if (thing.kind === 'pan') {
      for (let j = thing.j0 - 1; j <= thing.j0 + thing.d; j++) for (let i = thing.i0 - 1; i <= thing.i0 + thing.w; i++) {
        if (i !== thing.i0 - 1 && i !== thing.i0 + thing.w && j !== thing.j0 - 1 && j !== thing.j0 + thing.d) continue;
        if (g.gates.some(a => a.i === i && a.j === j)) continue;
        g.world.h[j * W + i] = 3.05;
      }
      g.afterEdit(thing.i0 - 2, thing.j0 - 2, thing.i0 + thing.w + 2, thing.j0 + thing.d + 2);
      if (thing.pump) thing.pump.mesh.position.y = 3.17;
      // Banks have timber steps: raised walking access does not hold back water.
      const heights = [], floors = [];
      for (let n = 1; n <= 3; n++) {
        const k = (thing.j0 - 1 - n) * W + thing.i0 + Math.floor(thing.w / 2);
        this.deck[k] = Math.max(g.world.h[k], 3.05 - n * 0.6);
        heights.push(this.deck[k]); floors.push(g.world.h[k]);
      }
      const steps = makeBankSteps(heights, floors);
      steps.position.set(wx(thing.i0 + Math.floor(thing.w / 2)), 0, wz(thing.j0 - 1));
      g.view.scene.add(steps);
    } else thing.mesh.add(makeBraces());
  }

  update(dt) {
    const g = this.game;
    for (const u of UNLOCKS) if (this.unlocked(u.id) && !this.seen.has(u.id)) { this.seen.add(u.id); g.emit('unlock', { unlock: u }); }
    if (this.mills.length && !this.rateFrom) this.rateFrom = { t: g.t, gen: this.generated, used: this.used, lifted: this.lifted };
    for (const m of this.mills) {
      const s = si(m.i, m.j);
      const flow = Math.hypot(g.sim.vx[s], g.sim.vz[s]) * Math.min(1, g.sim.d[s]);
      m.output = m.damage ? 0 : Math.min(2.5, flow * 0.65);
      const charge = Math.min(Math.max(0, this.mills.length * 120 - this.energy), m.output * dt);
      this.energy += charge; this.generated += charge;
      m.mesh.userData.wheel.rotation.x += m.output * dt * (tide.rate(g.t) >= 0 ? 1 : -1);
    }
    for (const pump of this.pumps) {
      pump.active = false;
      const p = pump.pan;
      if (!pump.enabled || p.maintaining || this.energy < dt * 0.65 || g.panOpen(p)) continue;
      const depth = p.V / p.cells.length;
      if (depth < 0.03 && p.crust < 0.2) pump.filling = true;
      if (depth >= 0.25 || p.crust >= 0.2) pump.filling = false;
      let amount = 0;
      if (g.storm?.active && depth > 0.12) {
        const before = p.V;
        for (const s of p.cells) { const take = Math.min(g.sim.d[s], dt * 0.03); g.sim.d[s] -= take; amount += take; }
        p.D *= Math.max(0, 1 - amount / Math.max(0.01, before));
        g.panVolume(p);
      } else if (pump.filling && !g.storm?.preparing && !g.storm?.active && depth < 0.25 && p.crust < 0.2 && !p.damage) {
        const gate = g.gates.find(a => a.i >= p.i0 - 1 && a.i <= p.i0 + p.w && a.j >= p.j0 - 1 && a.j <= p.j0 + p.d);
        if (!gate) continue;
        const source = [[gate.i - 1, gate.j], [gate.i + 1, gate.j], [gate.i, gate.j - 1], [gate.i, gate.j + 1]]
          .filter(([i, j]) => i < p.i0 - 1 || i > p.i0 + p.w || j < p.j0 - 1 || j > p.j0 + p.d)
          .map(([i, j]) => si(i, j)).find(s => g.sim.d[s] > 0.08);
        if (source === undefined) continue;
        amount = Math.min(g.sim.d[source] - 0.05, dt * 0.75, (0.25 - depth) * p.cells.length);
        g.sim.d[source] -= amount;
        for (const s of p.cells) g.sim.d[s] += amount / p.cells.length;
        p.D += amount * 0.18; g.panVolume(p); this.lifted += amount;
      }
      if (amount > 0) {
        this.energy -= dt * 0.65; this.used += dt * 0.65; pump.active = true;
        pump.mesh.userData.wheel.rotation.z += dt * 3;
      }
    }
  }
}
