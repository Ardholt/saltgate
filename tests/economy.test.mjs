import test from 'node:test';
import assert from 'node:assert/strict';
import { Economy } from '../src/economy.js';
import * as tide from '../src/tide.js';

function setup() {
  const g = { t: tide.START_T, store: { salt: 0, fish: 0, oysters: 0, coin: 60 }, emit() {} };
  g.economy = new Economy(g);
  return g;
}
function dock(g) { g.t = g.economy.high; g.economy.update(0); }

test('cargo waits for high water; all three goods earn money only once', () => {
  const g = setup(), e = g.economy;
  g.store.salt = 10; g.store.fish = 4; g.store.oysters = 2;
  assert.equal(e.trade(), 0);
  assert.equal(g.store.coin, 60);
  dock(g);
  assert.deepEqual(e.sold, { salt: 10, fish: 4, oysters: 2 });
  assert.equal(g.store.coin, Math.round((60 + e.earned) * 10) / 10);
  const coins = g.store.coin;
  e.trade();
  assert.equal(g.store.coin, coins);
  assert.equal(e.visits, 1);
});

test('hold preserves cargo, demand recovers, and a visit has finite room', () => {
  const g = setup(), e = g.economy;
  g.store.salt = 60; e.toggle('salt'); dock(g);
  assert.equal(g.store.salt, 60);
  e.toggle('salt'); const price = e.price('salt'); e.trade();
  assert.equal(g.store.salt, 12);
  assert.equal(e.capacity, 0);
  assert.ok(e.price('salt') < price);
  const low = e.price('salt');
  e.toggle('salt');
  g.t += tide.TIDE; e.update(tide.TIDE);
  assert.ok(e.price('salt') > low);
  assert.equal(e.capacity, 48);
  assert.equal(g.store.salt, 12);
});

test('the ledger balances spending and rejects unaffordable purchases', () => {
  const g = setup(), e = g.economy;
  assert.equal(e.spend(12, 'Sluice'), true);
  assert.equal(e.spend(60, 'Too much'), false);
  assert.equal(g.store.coin, 48);
  g.store.salt = 4; dock(g);
  assert.equal(g.store.coin, Math.round((60 + e.earned - e.spent) * 10) / 10);
  assert.equal(e.ledger.filter(r => r.label === 'Sluice').length, 1);
});

test('splitting cargo does not defeat supply pricing; ended seasons cannot trade', () => {
  const a = setup(), b = setup(); dock(a); dock(b);
  a.store.salt = 20; a.economy.trade();
  b.store.salt = 10; b.economy.trade(); b.store.salt = 10; b.economy.trade();
  assert.equal(a.economy.earned, b.economy.earned);
  b.ended = true; b.store.fish = 5;
  assert.equal(b.economy.trade(), 0);
  assert.equal(b.economy.spend(1, 'After season'), false);
});
