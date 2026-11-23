import test from 'node:test';
import assert from 'node:assert/strict';
import { Game } from '../src/game.js';
import { Hints } from '../src/hints.js';
import { generate, W, SN, SX, SZ } from '../src/world.js';
import { hashSeed } from '../src/noise.js';
import * as tide from '../src/tide.js';
const make = () => new Game(generate(hashSeed('saltgate-1')), { renderer: { recomputeTerrain() {}, heightTex: {} }, scene: { add() {} } });

test('the opening gives one short concrete gate instruction', () => {
  const g = make(), hints = new Hints(g), h = hints.current(0.8);
  assert.equal(h.thing, g.gates[0]); assert.equal(h.act, true);
  assert.match(h.text, /Shut the gate/);
  assert.ok(h.text.split(/\s+/).length <= 12);
});

test('the last small crust is raked before the hint asks to refill', () => {
  const g = make(), hints = new Hints(g), p = g.pans[0];
  g.toggleGate(g.gates[0]); p.V = 0; p.crust = 0.6; p.ready = false;
  const h = hints.loop();
  assert.equal(h.thing, p); assert.equal(h.act, true); assert.match(h.text, /Rake/);
  assert.equal(g.rake(p), 2);
  const next = hints.loop();
  assert.equal(next.thing, g.gates[0]); assert.match(next.text, /Open the gate/);
});

test('a ready second pan takes priority over the first pan and transient hints', () => {
  const g = make(), hints = new Hints(g);
  const p = g.addPan(SX + 5, SZ + 5, 3, 3);
  p.crust = 2; p.ready = true;
  hints.goalLeft = 10;
  const h = hints.current(0.8);
  assert.equal(h.thing, p); assert.equal(h.act, true);
});

test('learning three rakes never removes the next-tide guidance', () => {
  const g = make(), hints = new Hints(g);
  hints.rakes = 3; g.t = tide.nextTurn(g.t, 'low');
  g.pans[0].V = 0; g.pans[0].crust = 0;
  const h = hints.current(0.8);
  assert.ok(h?.text); assert.match(h.sub, /Next high water/);
  g.finishSeason(); assert.equal(hints.current(1), null);
});

test('a fish notification cannot hide a time-critical gate closure', () => {
  const g = make(), hints = new Hints(g);
  hints.rakes = 1; g.weirs[0].catch = 4;
  hints.onEvent({ type: 'fishReady', weir: g.weirs[0] });
  const h = hints.current(0.8);
  assert.equal(h.thing, g.gates[0]); assert.match(h.text, /Shut the gate/);
});

test('maintenance and storm guidance survives the learned-worker hint', () => {
  const g = make(), hints = new Hints(g), p = g.pans[0];
  g.people.hire(); hints.rakes = 5; p.V = 0; p.crust = 0;
  for (const s of p.cells) g.sediment.depth[(SZ + Math.floor(s / SN)) * W + SX + s % SN] = 0.2;
  assert.match(hints.current(0.8).sub, /Dredge/);
  g.t = tide.SURGE_START; g.toggleGate(g.gates[0]); p.braced = true;
  assert.match(hints.current(1).text, /Keep the sluice shut/);
  p.damage = 1; g.t = tide.SURGE_END;
  assert.match(hints.current(1).sub, /Repair/);
});

test('a powered dry pan asks for its sluice to shut so its pump can lift brine', () => {
  const g = make(), hints = new Hints(g), p = g.pans[0];
  p.pump = { enabled: true }; p.V = 0; g.works.energy = 20;
  const h = hints.loop();
  assert.equal(h.thing, g.gates[0]); assert.equal(h.act, true); assert.match(h.text, /pump can lift/);
});
