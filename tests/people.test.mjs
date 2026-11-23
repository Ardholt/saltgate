import test from 'node:test';
import assert from 'node:assert/strict';
import { Game } from '../src/game.js';
import { generate, SX, SZ, SN, ci, cj } from '../src/world.js';
import { hashSeed } from '../src/noise.js';
const make = () => new Game(generate(hashSeed('saltgate-1')), { renderer: { recomputeTerrain() {}, heightTex: {} }, scene: { add() {} } });

test('a worker needs a connected dry route; flooding blocks it and a causeway restores it', () => {
  const g = make();
  assert.equal(g.people.hire(), true);
  const h = g.people.hands[0];
  assert.equal(g.store.coin, 36);
  g.sim.d.fill(0);
  const route = g.people.route(h);
  assert.ok(route?.length > 0);
  g.sim.d.fill(1);
  const home = (cj(h.z) - SZ) * SN + ci(h.x) - SX;
  g.sim.d[home] = 0;
  assert.equal(g.people.route(h), null);
  // The original walk tells us which cells a raised route must connect.
  g.store.coin = 10000;
  let raised = 0;
  for (const [i, j] of route) {
    if (g.causewaySiteOK(i, j)) { assert.equal(g.causeway(i, j), true); raised++; }
    // At a high tide below the raised deck and pan banks, those cells are dry.
    g.sim.d[(j - SZ) * SN + i - SX] = 0;
  }
  assert.ok(raised > 0);
  assert.ok(g.people.route(h));
});

test('hands harvest a ready pan only with dry footing and finish small crusts', () => {
  const g = make(); g.people.hire();
  const h = g.people.hands[0], p = g.pans[0];
  g.sim.d.fill(0);
  const route = g.people.route(h), [i, j] = route.at(-1);
  h.x = i - 128; h.z = j - 128; h.path = []; h.at = 0;
  p.crust = 2; p.ready = true;
  g.people.update(1 / 30);
  assert.equal(g.store.salt, 8);
  assert.equal(g.people.work, 8);
  p.crust = 0.6; p.ready = false; p.V = 0; g.t += 2;
  g.people.update(1 / 30);
  assert.equal(g.store.salt, 10, 'last small crust does not deadlock the worker');
  p.crust = 2; p.ready = true;
  g.sim.d.fill(1); g.t += 3;
  g.people.update(1 / 30);
  assert.equal(g.store.salt, 10);
  assert.ok(g.people.wetSeconds > 0);
});

test('hiring respects the purse and pan construction cannot replace a causeway', () => {
  const g = make();
  assert.equal(g.people.hire(), true); assert.equal(g.people.hire(), true);
  assert.equal(g.people.hire(), false);
  g.store.coin = 100;
  let site;
  for (let j = SZ + 20; j < SZ + SN - 20 && !site; j++) for (let i = SX + 10; i < SX + SN - 10; i++) {
    if (g.panSiteOK(i, j, 3, 3) && g.causewaySiteOK(i + 1, j + 1)) { site = [i, j]; break; }
  }
  assert.ok(site);
  const [i, j] = site;
  g.causeway(i + 1, j + 1);
  assert.equal(g.panSiteOK(i, j, 3, 3), false);
  assert.equal(g.dig(i + 1, j + 1), false);
});
