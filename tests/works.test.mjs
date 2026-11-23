import test from 'node:test';
import assert from 'node:assert/strict';
import { Game } from '../src/game.js';
import { generate, W, SN, SX, SZ } from '../src/world.js';
import { hashSeed } from '../src/noise.js';
import * as tide from '../src/tide.js';
const make = () => new Game(generate(hashSeed('saltgate-1')), { renderer: { recomputeTerrain() {}, heightTex: {} }, scene: { add() {} } });
const find = (g, type) => {
  for (let j = SZ + 5; j < SZ + SN - 6; j++) for (let i = SX + 5; i < SX + SN - 6; i++) if (g.works.siteOK(type, i, j)) return [i, j];
  throw new Error(`no ${type} site`);
};

test('season locks are enforced by actions and all four works unlock on their tide-day', () => {
  const g = make(); g.store.coin = 1000;
  const site = find(g, 'house');
  assert.equal(g.works.build('house', ...site), null);
  assert.equal(g.store.coin, 1000);
  g.t = tide.START_T + tide.DAY * 2;
  const h = g.works.build('house', ...site);
  assert.ok(h); assert.equal(g.works.maxHands(), 6);
  assert.equal(g.works.unlocked('mill'), false);
  const k = h.j * W + h.i, s = (h.j - SZ) * SN + h.i - SX;
  g.sim.d[s] = 2.7 - g.sim.b[s];
  assert.ok(g.people.dry(h.i, h.j), 'stilts keep the deck dry above flooded marsh');
  assert.equal(g.world.kind[k], 7); assert.equal(g.dig(h.i, h.j), false);
  g.t = tide.START_T + tide.DAY * 4;
  const mill = g.works.build('mill', ...find(g, 'mill')); assert.ok(mill);
  g.t = tide.START_T + tide.DAY * 7;
  assert.equal(g.works.installPump(g.pans[0]), true);
  assert.equal(g.works.installPump(g.pans[0]), false);
  assert.equal(g.works.protect(g.pans[0]), false);
  g.t = tide.START_T + tide.DAY * 9;
  assert.equal(g.works.protect(g.pans[0]), true);
  const p = g.pans[0]; assert.equal(g.world.h[(p.j0 - 1) * W + p.i0], Math.fround(3.05));
});

test('current charges a mill; pumps need power and transfer existing water into a shut pan', () => {
  const g = make(); g.store.coin = 1000; g.t += tide.DAY * 7;
  const m = g.works.build('mill', ...find(g, 'mill'));
  const s = (m.j - SZ) * SN + m.i - SX;
  g.sim.d[s] = 1; g.sim.vx[s] = 0; g.sim.vz[s] = 0;
  g.works.update(1); assert.equal(g.works.energy, 0, 'slack water makes no power');
  g.sim.vx[s] = 2; g.works.update(10); assert.ok(g.works.energy > 10);
  g.sim.vx[s] = 0;
  const p = g.pans[0]; g.works.installPump(p);
  g.toggleGate(g.gates[0]);
  for (const a of p.cells) g.sim.d[a] = 0;
  g.panVolume(p); p.D = p.crust = 0;
  const gate = g.gates[0], source = (gate.j - SZ) * SN + gate.i - 1 - SX;
  g.sim.d[source] = 1;
  const before = g.sim.d.reduce((a, b) => a + b, 0), power = g.works.energy;
  g.works.update(0.1);
  assert.ok(p.V > 0); assert.ok(p.D > 0); assert.ok(g.works.energy < power);
  assert.ok(Math.abs(g.sim.d.reduce((a, b) => a + b, 0) - before) < 0.00001, 'pump conserves water');
  const volume = p.V; g.works.energy = 0; g.works.update(0.1);
  assert.equal(p.V, volume, 'empty battery stops the pump');
  g.works.energy = 10; g.toggleGate(gate); g.works.update(0.1);
  assert.equal(p.V, volume, 'open sluice stops the pump');
});
