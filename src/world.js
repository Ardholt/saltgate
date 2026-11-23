// The seeded marsh: a heightfield with a sea to the south, a creek network,
// a village on the high ground and the starting works (channel, sluice, pan, weir).
import { makeNoise2, mulberry32, smoothstep, clamp, lerp } from './noise.js';

export const W = 256, H = 256;          // whole terrain, 1 world unit per cell
export const SN = 128;                  // the simulated square
export const SX = 64, SZ = 96;          // its corner in terrain cells
export const PAN_FLOOR = 0.42;
export const BUND = 1.48;

// cell (i,j) sits at world (i - W/2, j - H/2)
export const wx = (i) => i - W / 2;
export const wz = (j) => j - H / 2;
export const ci = (x) => Math.round(x + W / 2);
export const cj = (z) => Math.round(z + H / 2);

export function generate(seed) {
  const rnd = mulberry32(seed);
  const n1 = makeNoise2(seed ^ 0x9e37);
  const n2 = makeNoise2(seed ^ 0x51ed);
  const n3 = makeNoise2(seed ^ 0x2c1b);
  const h = new Float32Array(W * H);
  const kind = new Uint8Array(W * H); // 0 natural, 1 creek, 2 dug, 3 bund, 4 pan floor, 5 village, 6 causeway

  // coastline: the marsh edge wanders around j = 186
  const coastJ = (i) => 186 + n1.fbm(i * 0.018, 3.3, 3) * 16;

  for (let j = 0; j < H; j++) {
    for (let i = 0; i < W; i++) {
      const x = wx(i), z = wz(j);
      const cj0 = coastJ(i);
      // marsh platform, slightly domed and lumpy
      let platform = 1.12 + n1.fbm(i * 0.035, j * 0.035, 4) * 0.32 + n3(i * 0.15, j * 0.15) * 0.04;
      // seaward: mudflats sloping into the sea
      const d = j - cj0; // >0 seaward
      const flat = lerp(0.35, -1.9, smoothstep(-2, 26, d)) + n2.fbm(i * 0.05, j * 0.05, 3) * 0.25;
      let v = d < -6 ? platform : lerp(platform, flat, smoothstep(-6, 3, d));
      v = Math.min(v, lerp(v, -3.6, smoothstep(30, 60, d)));
      // landward rise: low hills behind the marsh to the north and at the flanks
      const north = smoothstep(70, 10, j);
      const flank = Math.max(smoothstep(52, 6, i), smoothstep(204, 250, i)) * smoothstep(196, 150, j);
      const hill = 1.3 + n2.fbm(i * 0.02, j * 0.02, 4) * 1.6 + 2.6 * Math.max(north, flank) ** 1.4;
      v = lerp(v, Math.max(v, hill), Math.max(north, flank));
      h[j * W + i] = v;
    }
  }

  // --- creeks -------------------------------------------------------------
  const creeks = [];
  const carve = (pts, bedAt, widthAt, k) => {
    // stamp a smooth trough along a polyline
    for (let p = 0; p < pts.length; p++) {
      const [px, pz] = pts[p];
      const t = p / (pts.length - 1);
      const bed = bedAt(t), r = widthAt(t);
      const R = Math.ceil(r + 2);
      const i0 = ci(px), j0 = cj(pz);
      for (let dj = -R; dj <= R; dj++) {
        for (let di = -R; di <= R; di++) {
          const i = i0 + di, j = j0 + dj;
          if (i < 0 || j < 0 || i >= W || j >= H) continue;
          const dd = Math.hypot(wx(i) - px, wz(j) - pz);
          if (dd > r + 1.6) continue;
          const id = j * W + i;
          const s = dd <= r ? (dd / r) ** 2 * 0.35 : 0.35 + 0.65 * smoothstep(r, r + 1.6, dd);
          const target = lerp(bed, h[id], s);
          if (target < h[id]) { h[id] = target; if (dd < r) kind[id] = k; }
        }
      }
    }
  };
  const walk = (x, z, dirX, dirZ, len, wiggle, seedOff) => {
    const pts = [];
    let ang = Math.atan2(dirZ, dirX);
    const base = ang;
    for (let s = 0; s < len; s += 0.5) {
      pts.push([x, z]);
      ang = base + n3(s * 0.045 + seedOff, seedOff) * wiggle;
      x += Math.cos(ang) * 0.5; z += Math.sin(ang) * 0.5;
    }
    return pts;
  };

  // main creek: from the sea north to the village quay
  const mouthX = -4 + (rnd() - 0.5) * 8;
  const main = walk(mouthX, 104, 0, -1, 128, 0.9, 11.3);
  carve(main, (t) => lerp(-2.0, -0.35, t ** 0.8), (t) => lerp(4.2, 1.6, t), 1);
  creeks.push(main);
  // side creeks branch off the main one
  const nb = 6;
  for (let b = 0; b < nb; b++) {
    const at = Math.floor(lerp(0.12, 0.8, (b + rnd() * 0.6) / nb) * main.length);
    const [bx, bz] = main[at];
    const side = b % 2 === 0 ? 1 : -1;
    const len = 24 + rnd() * 30;
    const pts = walk(bx, bz, side, -0.35 - rnd() * 0.5, len, 1.1, 37.1 + b * 13.7);
    const bed0 = lerp(-1.6, -0.35, at / main.length);
    carve(pts, (t) => lerp(bed0 + 0.2, 0.75, t), (t) => lerp(2.0, 0.7, t), 1);
    creeks.push(pts);
  }

  // --- village on the rise at the creek head -------------------------------
  const head = main[main.length - 1];
  const village = { x: head[0] + 9, z: head[1] - 6 };
  for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
    const d = Math.hypot(wx(i) - village.x, wz(j) - village.z);
    const id = j * W + i;
    const lift = smoothstep(17, 9, d);
    if (lift > 0) {
      h[id] = lerp(h[id], Math.max(h[id], 2.25 + n1(i * 0.2, j * 0.2) * 0.12), lift);
      if (lift > 0.5) kind[id] = 5;
    }
  }

  // --- the starting works --------------------------------------------------
  // find the main-creek point nearest z = 26 and dig east from it
  let k0 = 0, best = 1e9;
  for (let k = 0; k < main.length; k++) {
    const dz = Math.abs(main[k][1] - 24);
    if (dz < best) { best = dz; k0 = k; }
  }
  const [jx, jz] = main[k0];
  const cz = cj(jz);
  const chStart = ci(jx) + 2, chLen = 15;
  const panW = 9, panD = 7; // cells, inside the bund
  const gateI = chStart + chLen, gateJ = cz;
  const pan = { i0: gateI + 1, j0: cz - 3, w: panW, d: panD };
  const set = (i, j, v, k) => { const id = j * W + i; h[id] = v; kind[id] = k; };
  // clear a flat pad for the pan, its bund and a margin
  for (let j = pan.j0 - 3; j < pan.j0 + pan.d + 3; j++) for (let i = pan.i0 - 2; i < pan.i0 + pan.w + 3; i++) {
    const id = j * W + i;
    h[id] = Math.max(0.9, Math.min(h[id], 1.08));
  }
  // channel
  for (let i = ci(jx); i < gateI; i++) {
    const t = (i - ci(jx)) / (gateI - ci(jx));
    for (let dj = -1; dj <= 1; dj++) {
      const id = (cz + dj) * W + i;
      const bed = dj === 0 ? lerp(-0.7, -0.3, t) : lerp(0.2, 0.55, t);
      if (bed < h[id]) { h[id] = bed; kind[id] = 2; }
    }
  }
  // bund ring and pan floor
  for (let j = pan.j0 - 1; j <= pan.j0 + pan.d; j++) for (let i = pan.i0 - 1; i <= pan.i0 + pan.w; i++) {
    const inside = i >= pan.i0 && i < pan.i0 + pan.w && j >= pan.j0 && j < pan.j0 + pan.d;
    set(i, j, inside ? PAN_FLOOR : BUND, inside ? 4 : 3);
  }
  // the gate cell sits in the bund and takes the channel's sill
  set(gateI, gateJ, -0.3, 2);
  const gate = { i: gateI, j: gateJ, dir: 'x' };

  // a fish weir across the biggest western side creek, near its mouth
  let weir = null;
  for (let c = 1; c < creeks.length && !weir; c++) {
    const pts = creeks[c];
    if (pts[3][0] > pts[0][0]) continue; // want a westward branch
    const [wxp, wzp] = pts[Math.floor(pts.length * 0.22)];
    const [ax, az] = pts[Math.floor(pts.length * 0.22) + 2];
    weir = { x: wxp, z: wzp, ang: Math.atan2(az - wzp, ax - wxp) + Math.PI / 2 };
  }

  return { seed, h, kind, creeks, main, village, gate, pan, weir, coastJ, noise: n1, rnd };
}
