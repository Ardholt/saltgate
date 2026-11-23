// A forecast event in the same water simulation, followed by a repair window.
import * as tide from './tide.js';
import { W, SN, SX, SZ, ci, cj, BUND } from './world.js';

export const REPAIR_COST = 24;
export const REPAIR_TIME = 10;
const si = (i, j) => (j - SZ) * SN + i - SX;

export class Storm {
  constructor(game) {
    this.game = game; this.warned = false; this.started = false; this.passed = false;
    this.damageCount = 0; this.repaired = 0; this.cargoLost = 0; this.cargoBefore = 0;
    this.repairJob = null; this.peakLevel = 0; this.assetsAtStart = []; this.losses = { salt: 0, fish: 0, oysters: 0 };
  }

  get active() { return this.game.t >= tide.SURGE_START && this.game.t < tide.SURGE_END; }
  get preparing() { return this.game.t >= tide.SURGE_START - tide.TIDE && this.game.t < tide.SURGE_END; }
  assets() { const g = this.game; return [...g.pans, ...g.weirs, ...g.oysters, ...g.works.mills]; }

  repair(thing) {
    const g = this.game;
    if (!thing?.damage || this.repairJob || this.active || !this.assets().includes(thing) || !g.spend(REPAIR_COST, 'Storm repairs')) return false;
    this.repairJob = { thing, left: REPAIR_TIME };
    g.emit('repairStart', { thing }); return true;
  }

  damage(thing) {
    const g = this.game;
    if (thing.damage) return;
    thing.damage = 1; this.damageCount++;
    if (thing.kind === 'pan') {
      const lost = thing.crust + thing.D * 0.6;
      g.stats.dissolved += lost; thing.crust = 0; thing.D *= 0.4; thing.ready = false;
      const i = thing.i0 + thing.w, j = thing.j0 + Math.floor(thing.d / 2);
      thing.breach = { i, j };
      g.world.h[j * W + i] = 0.7;
      g.afterEdit(i - 1, j - 1, i + 1, j + 1);
    } else if (thing.kind === 'weir') thing.catch *= 0.25;
    else if (thing.kind === 'oyster') thing.stock *= 0.25;
    if (thing.mesh) thing.mesh.rotation.z = 0.16;
    g.emit('stormDamage', { thing });
  }

  update(dt) {
    const g = this.game;
    if (!this.warned && g.t >= tide.SURGE_WARNING) { this.warned = true; g.emit('stormWarning'); }
    if (!this.started && g.t >= tide.SURGE_START) {
      this.started = true; this.assetsAtStart = this.assets(); this.wetAtStart = g.people.wetSeconds;
      g.emit('stormStart');
    }
    if (this.active) {
      this.peakLevel = Math.max(this.peakLevel, tide.level(g.t));
      for (const thing of this.assets()) {
        if (thing.damage) continue;
        let surface;
        if (thing.kind === 'pan') surface = thing.cells.reduce((a, s) => a + g.sim.b[s] + g.sim.d[s], 0) / thing.cells.length;
        else {
          const s = si(thing.i ?? ci(thing.x), thing.j ?? cj(thing.z));
          surface = g.sim.b[s] + g.sim.d[s];
        }
        // Bracing secures vulnerable equipment. A pan still floods through an open sluice.
        const threshold = thing.braced && thing.kind !== 'pan' ? 3.15 : 1.95;
        thing.exposure = surface > threshold ? (thing.exposure || 0) + dt : Math.max(0, (thing.exposure || 0) - dt);
        if (thing.exposure >= 3) this.damage(thing);
      }
      if (!this.cargoChecked && g.t >= tide.SURGE_PEAK) {
        this.cargoChecked = true;
        let shelter = g.works.houses.length * 30;
        for (const good of ['salt', 'fish', 'oysters']) {
          const n = g.store[good]; this.cargoBefore += n;
          const safe = Math.min(shelter, n); shelter -= safe;
          const lost = Math.floor((n - safe) * 0.45);
          g.store[good] -= lost; this.losses[good] = lost; this.cargoLost += lost;
        }
        if (this.cargoLost) g.emit('cargoLost', { amount: this.cargoLost });
      }
    }
    if (this.started && !this.passed && g.t >= tide.SURGE_END) {
      this.passed = true; this.wetDuring = g.people.wetSeconds - this.wetAtStart;
      g.emit('stormPassed');
    }
    if (this.repairJob) {
      this.repairJob.left -= dt;
      if (this.repairJob.left <= 0) {
        const thing = this.repairJob.thing; thing.damage = 0; thing.exposure = 0;
        if (thing.breach) {
          const { i, j } = thing.breach;
          g.world.h[j * W + i] = thing.braced ? 3.05 : BUND;
          g.afterEdit(i - 1, j - 1, i + 1, j + 1); thing.breach = null;
        }
        if (thing.mesh) thing.mesh.rotation.z = 0;
        this.repaired++; this.repairJob = null; g.emit('repairDone', { thing });
      }
    }
  }

  account() {
    const total = this.assetsAtStart.length;
    const damagePenalty = 65 * this.damageCount / Math.max(1, total);
    const cargoPenalty = 25 * this.cargoLost / Math.max(1, this.cargoBefore);
    const recovery = 10 * this.repaired / Math.max(1, this.damageCount);
    const score = this.passed ? Math.round(Math.max(0, Math.min(100, 100 - damagePenalty - cargoPenalty + recovery))) : 0;
    return { score, grade: score >= 90 ? 'Stormkeeper' : score >= 70 ? 'Weathered well' : score >= 40 ? 'Battered, still trading' : 'Caught unprepared',
      total, damaged: this.damageCount, repaired: this.repaired, unrepaired: this.assets().filter(a => a.damage).length,
      cargoLost: this.cargoLost, losses: { ...this.losses }, peak: +this.peakLevel.toFixed(2), wetSeconds: Math.round(this.wetDuring || 0) };
  }
}
