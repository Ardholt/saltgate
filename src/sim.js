// CPU shallow water on the simulated square: the virtual-pipe model.
// Each cell keeps a bed height b and a water depth d; four outflow pipes per cell
// carry water downhill in water-surface height. The sea edge is held at the tide.
import { SN, SX, SZ, W } from './world.js';

const G = 420;       // pipe gain (gravity x pipe area / length), tuned for speed of fill
const DAMP = 0.995;  // per-step damping of pipe flow, kills slosh
export const SIM_DT = 1 / 30;
export const SUBSTEPS = 4;

export class WaterSim {
  constructor(world) {
    const n = SN * SN;
    this.world = world;
    this.b = new Float32Array(n);
    this.d = new Float32Array(n);
    this.fL = new Float32Array(n); this.fR = new Float32Array(n);
    this.fT = new Float32Array(n); this.fB = new Float32Array(n);
    this.vx = new Float32Array(n); this.vz = new Float32Array(n);
    this.wet = new Float32Array(n);
    this.block = new Uint8Array(n);   // 1 = a shut gate: no flow in or out
    this.edge = new Uint8Array(n);    // 1 = open boundary held at the tide
    this.pan = new Int16Array(n).fill(-1);
    this.weir = new Int16Array(n).fill(-1);
    this.syncBed();
    for (let j = 0; j < SN; j++) for (let i = 0; i < SN; i++) {
      if (i === 0 || j === 0 || i === SN - 1 || j === SN - 1) this.edge[j * SN + i] = 1;
    }
  }

  syncBed() {
    const h = this.world.h;
    for (let j = 0; j < SN; j++) for (let i = 0; i < SN; i++) this.b[j * SN + i] = h[(SZ + j) * W + SX + i];
  }

  // Fill every cell that the sea reaches at this level.
  floodFrom(level) {
    const { b, d, edge } = this;
    const seen = new Uint8Array(SN * SN);
    const stack = [];
    for (let k = 0; k < SN * SN; k++) if (edge[k] && b[k] < level) { stack.push(k); seen[k] = 1; }
    while (stack.length) {
      const k = stack.pop();
      d[k] = level - b[k];
      const i = k % SN, j = (k / SN) | 0;
      const nb = [i > 0 ? k - 1 : -1, i < SN - 1 ? k + 1 : -1, j > 0 ? k - SN : -1, j < SN - 1 ? k + SN : -1];
      for (const q of nb) if (q >= 0 && !seen[q] && !this.block[q] && b[q] < level) { seen[q] = 1; stack.push(q); }
    }
    for (let k = 0; k < SN * SN; k++) this.wet[k] = d[k] > 0.01 ? 1 : 0;
  }

  step(dt, tide) {
    const { b, d, fL, fR, fT, fB, block, edge } = this;
    const N = SN;
    for (let k = 0; k < N * N; k++) if (edge[k]) d[k] = Math.max(0, tide - b[k]);
    // 1. pipes
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        const k = j * N + i;
        if (block[k]) { fL[k] = fR[k] = fT[k] = fB[k] = 0; continue; }
        if (d[k] <= 0) { fL[k] = fR[k] = fT[k] = fB[k] = 0; continue; } // a dry cell sends nothing
        const hk = b[k] + d[k];
        let l = 0, r = 0, t = 0, bt = 0;
        if (i > 0 && !block[k - 1]) l = Math.max(0, fL[k] * DAMP + dt * G * (hk - b[k - 1] - d[k - 1]));
        if (i < N - 1 && !block[k + 1]) r = Math.max(0, fR[k] * DAMP + dt * G * (hk - b[k + 1] - d[k + 1]));
        if (j > 0 && !block[k - N]) t = Math.max(0, fT[k] * DAMP + dt * G * (hk - b[k - N] - d[k - N]));
        if (j < N - 1 && !block[k + N]) bt = Math.max(0, fB[k] * DAMP + dt * G * (hk - b[k + N] - d[k + N]));
        const sum = (l + r + t + bt) * dt;
        if (sum > d[k] && sum > 0) {
          const s = d[k] / sum;
          l *= s; r *= s; t *= s; bt *= s;
        }
        fL[k] = l; fR[k] = r; fT[k] = t; fB[k] = bt;
      }
    }
    // 2. depths and velocities
    const { vx, vz } = this;
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        const k = j * N + i;
        const inL = i > 0 ? fR[k - 1] : 0, inR = i < N - 1 ? fL[k + 1] : 0;
        const inT = j > 0 ? fB[k - N] : 0, inB = j < N - 1 ? fT[k + N] : 0;
        const dv = dt * (inL + inR + inT + inB - fL[k] - fR[k] - fT[k] - fB[k]);
        const d0 = d[k];
        let d1 = d0 + dv;
        if (d1 < 0) d1 = 0;
        d[k] = d1;
        const dm = Math.max(0.05, (d0 + d1) * 0.5);
        vx[k] = (inL - fL[k] + fR[k] - inR) * 0.5 / dm;
        vz[k] = (inT - fT[k] + fB[k] - inB) * 0.5 / dm;
      }
    }
  }

  // wetness: 1 when under water, drying slowly in the sun
  dry(dt, sun) {
    const { d, wet } = this;
    const rate = 0.018 + 0.05 * Math.max(0, sun);
    for (let k = 0; k < SN * SN; k++) {
      if (d[k] > 0.015) wet[k] = 1;
      else if (wet[k] > 0) wet[k] = Math.max(0, wet[k] - rate * dt);
    }
  }

  surfaceAt(i, j) {
    const k = j * SN + i;
    return this.b[k] + this.d[k];
  }
}
