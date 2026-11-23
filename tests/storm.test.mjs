import test from 'node:test';
import assert from 'node:assert/strict';
import { Game } from '../src/game.js';
import { generate, W } from '../src/world.js';
import { hashSeed } from '../src/noise.js';
import * as tide from '../src/tide.js';
const make = () => new Game(generate(hashSeed('saltgate-1')), { renderer: { recomputeTerrain() {}, heightTex: {} }, scene: { add() {} } });

test('surge forecast precedes the exam; its crest overtops ordinary banks and stays below storm banks', () => {
  assert.ok(tide.SURGE_START - tide.SURGE_WARNING > tide.DAY * 2);
  let high = 0;
  for (let t = tide.SURGE_START; t <= tide.SURGE_END; t += 0.1) high = Math.max(high, tide.level(t));
  assert.ok(high > 2.8 && high < 3.05);
  assert.equal(tide.surge(tide.START_T + 60), 0);
  assert.equal(tide.surge(tide.SURGE_END), 0);
});

test('the surge damages flooded works, respects dry protected pans, and stops trade', () => {
  const g = make(); g.t = tide.SURGE_WARNING; g.store.coin = 1000;
  g.storm.update(0); assert.equal(g.storm.warned, true);
  const p = g.pans[0]; g.works.protect(p); g.works.protect(g.oysters[0]);
  g.toggleGate(g.gates[0]);
  g.t = tide.SURGE_PEAK;
  for (let s = 0; s < g.sim.d.length; s++) g.sim.d[s] = Math.max(0, 2.9 - g.sim.b[s]);
  for (const s of p.cells) g.sim.d[s] = 0.1;
  g.storm.update(4);
  assert.equal(p.damage, undefined, 'dry pan behind banks survives');
  assert.equal(g.oysters[0].damage, undefined, 'braced oyster racks survive');
  assert.equal(g.weirs[0].damage, 1, 'unbraced weir suffers');
  g.economy.update(1); assert.equal(g.economy.state, 'sheltering');
  // Protection is not an invulnerability flag: water admitted through an open gate still damages a pan.
  for (const s of p.cells) g.sim.d[s] = 2.9 - g.sim.b[s];
  g.storm.update(4); assert.equal(p.damage, 1);
  assert.equal(g.world.h[p.breach.j * W + p.breach.i], Math.fround(0.7));
  assert.equal(g.storm.repair(p), false, 'repairs wait for the surge to pass');
  g.t = tide.SURGE_END + 1; g.storm.update(1);
  assert.equal(g.storm.repair(p), true); assert.equal(g.storm.repair(g.weirs[0]), false);
  const spent = g.economy.spent; g.storm.update(10);
  assert.equal(p.damage, 0); assert.equal(p.breach, null); assert.equal(g.storm.repaired, 1);
  assert.equal(g.economy.spent, spent, 'repair is charged once');
  assert.ok(g.storm.account().score < 100);
});

test('stilt shelter protects a finite cargo capacity; losses and end account are immutable', () => {
  const g = make(); g.store.salt = 40; g.store.fish = 20; g.store.oysters = 10;
  g.works.houses.push({ i: 0, j: 0 }); // One 30-cargo shelter; terrain is irrelevant to the warehouse account.
  g.t = tide.SURGE_PEAK; g.storm.update(0);
  assert.deepEqual(g.storm.losses, { salt: 4, fish: 9, oysters: 4 });
  assert.equal(g.storm.cargoLost, 17);
  g.storm.update(0); assert.equal(g.storm.cargoLost, 17, 'one crest cannot charge losses twice');
  g.t = tide.SURGE_END; g.storm.update(0); g.finishSeason();
  const account = JSON.stringify(g.result);
  g.storm.losses.salt = 999; g.store.salt = 999;
  assert.equal(JSON.stringify(g.result), account);
});
