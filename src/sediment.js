// Sediment is bed material, not a production debuff: it raises the actual
// water-grid floor. Still water deposits more than a well-flushed channel.
import * as THREE from 'three';
import { W, SN, SX, SZ, wx, wz } from './world.js';
import { START_T, DAY } from './tide.js';
import { MAT } from './props.js';

export class Sediment {
  constructor(game) {
    this.game = game;
    this.depth = game.world.silt = new Float32Array(W * W);
    this.clock = 0; this.job = null; this.completed = 0; this.removed = 0;
    this.dirty = false;
    // A hired dredging punt with a moving scoop and a load of dark mud.
    this.mesh = new THREE.Group();
    const hull = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.35, 1.1), MAT.tar);
    const mud = new THREE.Mesh(new THREE.ConeGeometry(0.55, 0.45, 5), MAT.thatch);
    mud.position.set(-0.55, 0.3, 0);
    this.arm = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.4, 0.12), MAT.timberLight);
    this.arm.position.set(0.7, 1.1, 0);
    this.mesh.add(hull, mud, this.arm); this.mesh.visible = false;
    game.view.scene.add(this.mesh);
  }

  panDepth(p) {
    let sum = 0;
    for (const s of p.cells) sum += this.depth[(SZ + Math.floor(s / SN)) * W + SX + s % SN];
    return sum / p.cells.length;
  }

  target(i, j) {
    const g = this.game;
    const pan = g.pans.find(p => i >= p.i0 - 1 && i <= p.i0 + p.w && j >= p.j0 - 1 && j <= p.j0 + p.d);
    const cells = [];
    if (pan) cells.push(...pan.cells);
    else for (let y = j - 2; y <= j + 2; y++) for (let x = i - 2; x <= i + 2; x++) {
      if (x <= SX || y <= SZ || x >= SX + SN - 1 || y >= SZ + SN - 1) continue;
      if ([1, 2].includes(g.world.kind[y * W + x])) cells.push((y - SZ) * SN + x - SX);
    }
    const amount = cells.reduce((n, s) => n + this.depth[(SZ + Math.floor(s / SN)) * W + SX + s % SN], 0);
    const wet = cells.length ? cells.reduce((n, s) => n + g.sim.d[s], 0) / cells.length : 0;
    return { cells, pan, amount, wet, cost: pan ? 14 : 8, duration: pan ? 12 : 8, i, j };
  }

  start(i, j) {
    const g = this.game, job = this.target(i, j);
    if (g.ended || this.job || job.amount < 0.05 || job.wet > 0.25 || !g.spend(job.cost, 'Dredging')) return false;
    job.left = job.duration;
    job.cellSet = new Set(job.cells);
    job.loads = job.cells.map(s => this.depth[(SZ + Math.floor(s / SN)) * W + SX + s % SN]);
    if (job.pan) {
      job.pan.maintaining = true;
      // Isolate the pan while the crew works; only the normal gate action changes it.
      for (const gate of g.gates) if (gate.open && gate.i >= job.pan.i0 - 1 && gate.i <= job.pan.i0 + job.pan.w && gate.j >= job.pan.j0 - 1 && gate.j <= job.pan.j0 + job.pan.d) g.toggleGate(gate);
    }
    this.job = job; this.mesh.visible = true;
    g.emit('dredgeStart', { job });
    return true;
  }

  update(dt) {
    const g = this.game, { h, kind } = g.world;
    if (this.job) {
      const job = this.job;
      job.wet = job.cells.reduce((n, s) => n + g.sim.d[s], 0) / job.cells.length;
      const k = job.j * W + job.i, s = (job.j - SZ) * SN + job.i - SX;
      this.mesh.position.set(wx(job.i), h[k] + (g.sim.d[s] || 0) + 0.25, wz(job.j));
      this.arm.rotation.z = Math.sin(g.t * 3) * (job.wet <= 0.25 ? 0.5 : 0.04);
      if (job.wet <= 0.25) {
        const work = Math.min(dt, job.left);
        job.cells.forEach((s, n) => {
          const k = (SZ + Math.floor(s / SN)) * W + SX + s % SN;
          const take = Math.min(this.depth[k], job.loads[n] * work / job.duration);
          this.depth[k] -= take; h[k] -= take; g.sim.b[s] = h[k]; this.removed += take;
        });
        job.left -= work; this.dirty = true;
        if (job.left < 1e-6) {
          if (job.pan) job.pan.maintaining = false;
          this.completed++; this.job = null; this.mesh.visible = false;
          g.emit('dredgeDone');
        }
      }
    }
    this.clock += dt;
    if (this.clock < 2) return;
    const elapsed = this.clock; this.clock = 0;
    // Leave the opening and missed-first-tide recovery exactly as taught.
    if (g.t - START_T >= DAY * 2) {
      for (let j = SZ + 1; j < SZ + SN - 1; j++) for (let i = SX + 1; i < SX + SN - 1; i++) {
        const k = j * W + i, s = (j - SZ) * SN + i - SX, kd = kind[k];
        if ((kd !== 1 && kd !== 2 && kd !== 4) || g.sim.d[s] < 0.025) continue;
        if (this.job?.cellSet.has(s)) continue;
        const pan = g.pans[g.sim.pan[s]];
        if (pan?.maintaining) continue;
        const flow = Math.hypot(g.sim.vx[s], g.sim.vz[s]);
        const deposit = Math.min(0.55 - this.depth[k], elapsed * (kd === 4 ? 0.0018 : 0.0009) / (1 + flow * 3));
        if (deposit <= 0) continue;
        this.depth[k] += deposit; h[k] += deposit; g.sim.b[s] = h[k]; this.dirty = true;
      }
    }
    if (this.dirty) {
      g.view.renderer.recomputeTerrain(SX, SZ, SX + SN - 1, SZ + SN - 1);
      g.view.renderer.heightTex.needsUpdate = true;
      this.dirty = false;
    }
  }
}
