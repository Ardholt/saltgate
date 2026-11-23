import test from 'node:test';
import assert from 'node:assert/strict';
import { Game } from '../src/game.js';
import { generate, W, SN, SX, SZ } from '../src/world.js';
import { hashSeed } from '../src/noise.js';
import * as tide from '../src/tide.js';
const make = () => new Game(generate(hashSeed('saltgate-1')), { renderer: { recomputeTerrain() {}, heightTex: {} }, scene: { add() {} } });
const global = s => (SZ + Math.floor(s / SN)) * W + SX + s % SN;

test('wet beds accumulate real sediment; fast flow slows it; the opening is unchanged', () => {
  const g = make(), [a, b] = g.pans[0].cells, old = g.sim.b[a];
  g.sim.d[a] = g.sim.d[b] = 0.2;
  g.sediment.update(2);
  assert.equal(g.sim.b[a], old);
  g.t += tide.DAY * 2;
  g.sim.vx[b] = 4;
  g.sediment.update(20);
  assert.ok(g.sim.b[a] > old);
  assert.equal(g.sim.b[a], g.world.h[global(a)]);
  assert.ok(g.sediment.depth[global(a)] > g.sediment.depth[global(b)] * 5);
  assert.equal(g.sim.d[a], Math.fround(0.2), 'bed change does not create water');
});

test('dredging charges once, waits for shallow water and finishes without mining original ground', () => {
  const g = make(), p = g.pans[0], old = p.cells.map(s => g.sim.b[s]);
  for (const s of p.cells) { const k = global(s); g.sediment.depth[k] = 0.2; g.world.h[k] += 0.2; g.sim.d[s] = 0.1; }
  g.sim.syncBed();
  assert.equal(g.sediment.start(p.i0, p.j0), true);
  assert.equal(g.store.coin, 46); assert.equal(g.gates[0].open, false);
  assert.equal(g.sediment.start(p.i0, p.j0), false);
  g.toggleGate(g.gates[0]); assert.equal(g.gates[0].open, false, 'gate stays isolated while crew works');
  p.cells.forEach(s => { g.sim.d[s] = 0.4; });
  g.sediment.update(10); assert.equal(g.sediment.job.left, 12);
  p.cells.forEach(s => { g.sim.d[s] = 0; });
  for (let n = 0; n < 120; n++) g.sediment.update(0.1);
  assert.equal(g.sediment.job, null); assert.equal(p.maintaining, false);
  assert.equal(g.sediment.completed, 1); assert.equal(g.economy.spent, 14);
  p.cells.forEach((s, n) => assert.ok(Math.abs(g.sim.b[s] - old[n]) < 0.00001));
  assert.equal(g.sediment.start(p.i0, p.j0), false);
});
