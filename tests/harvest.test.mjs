import test from 'node:test';
import assert from 'node:assert/strict';
import { Game } from '../src/game.js';
import { generate, SX, SZ, SN } from '../src/world.js';
import { hashSeed } from '../src/noise.js';
import { SEASON_END, SEASON_TARGET } from '../src/economy.js';
import * as tide from '../src/tide.js';

const make = () => new Game(generate(hashSeed('saltgate-1')), { renderer: { recomputeTerrain() {}, heightTex: {} }, scene: { add() {} } });

test('oysters feed while flooded and can only be gathered on exposed mud', () => {
  const g = make(), o = g.oysters[0];
  assert.ok(o, 'seed has a starter bed');
  const k = (o.j - SZ) * SN + o.i - SX;
  g.sim.d[k] = 0.5;
  const stock = o.stock;
  g.updateOysters(10);
  assert.ok(o.stock > stock);
  assert.equal(g.gather(o), 0);
  g.sim.d[k] = 0;
  g.updateOysters(1);
  const n = g.gather(o);
  assert.ok(n >= 6);
  assert.equal(g.store.oysters, n);
  assert.equal(g.stats.oysters, n);
  assert.equal(g.gather(o), 0);
  assert.equal(g.dig(o.i, o.j), false, 'cannot dig through a bed');
});

test('season finishes once, freezes simulation and preserves its score snapshot', () => {
  const g = make();
  g.t = SEASON_END - 1 / 30;
  g.storm.passed = true;
  g.economy.earned = SEASON_TARGET + 20; g.stats.raked = 14; g.stats.fished = 3; g.stats.oysters = 5;
  g.tick(1 / 30);
  assert.equal(g.t, SEASON_END);
  assert.equal(g.ended, true);
  assert.equal(g.result.success, true);
  assert.equal(g.result.score, SEASON_TARGET + 77 + 1000);
  const snapshot = JSON.stringify(g.result);
  g.tick(1); g.toggleGate(g.gates[0]); g.finishSeason();
  assert.equal(g.t, SEASON_END);
  assert.equal(JSON.stringify(g.result), snapshot);
  assert.equal(g.events.filter(e => e.type === 'seasonEnd').length, 1);
});

test('spring tide reaches higher ground than neap and the clock stays finite', () => {
  assert.equal(tide.moonPhase(7 * tide.DAY), Math.PI, 'spring tide coincides with a full moon');
  assert.ok(tide.amplitude(7 * tide.DAY) > tide.amplitude(0) + 0.6);
  assert.ok(tide.level(tide.nextTurn(7 * tide.DAY, 'high')) > 1.3);
  assert.ok(tide.level(tide.nextTurn(14 * tide.DAY, 'high')) < 0.7);
});
