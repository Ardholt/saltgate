import test from 'node:test';
import assert from 'node:assert/strict';
import { Game } from '../src/game.js';
import { generate, W, SN, SX, SZ } from '../src/world.js';
import { hashSeed } from '../src/noise.js';
import * as tide from '../src/tide.js';
import { snapshot, serialise, parse, restore, digest, SAVE_VERSION } from '../src/save.js';

const SEED = hashSeed('saltgate-1');
const make = () => new Game(generate(SEED), { renderer: { recomputeTerrain() {}, heightTex: {} }, scene: { add() {} } });
const hints = () => ({ done: new Set(['built']), rakes: 2, goalLeft: 0, askedShut: new Set(), prevVolumes: new Map() });
const find = (g, type) => {
  for (let j = SZ + 5; j < SZ + SN - 6; j++) for (let i = SX + 5; i < SX + SN - 6; i++) if (g.works.siteOK(type, i, j)) return [i, j];
  throw new Error(`no ${type} site`);
};
const run = (g, sec) => { for (let n = 0; n < sec * 30; n++) { g.acc += 1 / 30; g.tick(0); } g.events.length = 0; };

// a played season: dug channel, new pan and gate, weir, oysters, hands, house, mill, pump, bracing, a causeway
function played() {
  const g = make(); g.store.coin = 2000;
  run(g, 20);
  for (let i = g.world.village ? 0 : 0; i < 0; i++);
  g.dig(SX + 20, SZ + 60); g.dig(SX + 21, SZ + 60);
  const pn = (() => { for (let j = SZ + 10; j < SZ + SN - 12; j++) for (let i = SX + 10; i < SX + SN - 12; i++) if (g.panSiteOK(i, j, 5, 4)) return [i, j]; })();
  g.addPan(pn[0], pn[1], 5, 4); g.addGate(pn[0] + 2, pn[1] - 1, true);
  g.pans[0].crust = 1.3; g.pans[0].D = 0.4;
  g.t = tide.START_T + tide.DAY * 10 + 5;
  g.works.build('house', ...find(g, 'house')); g.works.build('mill', ...find(g, 'mill'));
  g.works.installPump(g.pans[0]); g.works.protect(g.pans[0]); g.works.protect(g.works.mills[0]);
  g.people.hire(); g.people.hire(); g.people.hands[1].job = g.pans[1];
  g.toggleGate(g.gates[0]);
  g.weirs[0].catch = 4.5; g.weirs[0].told = true;
  g.economy.pressure.salt = 7; g.economy.selling.fish = false;
  run(g, 100);
  return g;
}

// name the first fields that differ, so a failure says what was not saved
const differ = (a, b, ha, hb) => {
  const x = snapshot(a, ha, SEED), y = snapshot(b, hb, SEED);
  return Object.keys(x).filter(k => k !== 'savedAt' && JSON.stringify(x[k]) !== JSON.stringify(y[k]));
};
const same = (a, b, ha, hb, msg) => assert.deepEqual(differ(a, b, ha, hb), [], msg || "restored state differs");
const roundTrip = (g, h) => {
  const text = serialise(snapshot(g, h, SEED));
  const fresh = make(); const h2 = hints();
  const parsed = parse(text, SEED, fresh);
  assert.ok(parsed.ok, parsed.why);
  restore(fresh, h2, parsed.snap);
  return { fresh, h2, text };
};

test('a played season restores to the identical state and then evolves identically', () => {
  const g = played(), h = hints();
  assert.ok(g.pans.length === 2 && g.works.pumps.length === 1 && g.works.houses.length === 1 && g.people.hands.length === 2);
  const { fresh, h2, text } = roundTrip(g, h);
  same(fresh, g, h2, h);
  assert.ok(text.length < 2_500_000, `save is ${text.length} chars`);
  for (let n = 0; n < 6; n++) {
    run(g, 40); run(fresh, 40);
    same(fresh, g, h2, h, `diverged after ${(n + 1) * 40}s`);
  }
});

test('a save taken mid-storm restores and finishes the season the same way', () => {
  const g = played(), h = hints();
  g.t = tide.SURGE_START + 10; run(g, 20);
  const { fresh, h2 } = roundTrip(g, h);
  same(fresh, g, h2, h);
  run(g, 160); run(fresh, 160);
  same(fresh, g, h2, h);
});

test('corrupt, wrong-version, wrong-coast and truncated saves are rejected without throwing', () => {
  const g = played(); const text = serialise(snapshot(g, hints(), SEED));
  const fresh = make();
  const bad = [
    ['', 'empty'], ['{', 'unreadable'], ['null', 'not an object'], ['[]', 'not an object'], ['42', 'not an object'],
    [text.slice(0, text.length >> 1), 'unreadable'],
    [text.replace(`"v":${SAVE_VERSION}`, '"v":99'), 'version'],
    [JSON.stringify({ ...JSON.parse(text), seed: SEED + 1 }), 'other coast'],
    [JSON.stringify({ ...JSON.parse(text), t: 'x' }), 'time'],
    [JSON.stringify({ ...JSON.parse(text), t: 1e9 }), 'time'],
    [JSON.stringify({ ...JSON.parse(text), sim: { ...JSON.parse(text).sim, d: 'AAAA' } }), 'unreadable'],
    [JSON.stringify({ ...JSON.parse(text), pans: [] }), 'missing works'],
    [JSON.stringify({ ...JSON.parse(text), h: [999999999, 1] }), null],
  ];
  for (const [t, why] of bad) {
    const r = parse(t, SEED, fresh);
    if (why) assert.deepEqual([r.ok, r.why], [false, why], t.slice(0, 40));
  }
});
