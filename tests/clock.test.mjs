import test from 'node:test';
import assert from 'node:assert/strict';
import * as tide from '../src/tide.js';

test('the displayed day rolls over at midnight on the clock, and the season opens on Day 1 at 14:00', () => {
  assert.equal(tide.dayNumber(tide.START_T), 1);
  assert.equal(tide.clockText(tide.START_T), '14:00');
  const midnight = tide.hourToT(tide.START_DAY + 1, 0);
  assert.equal(tide.dayNumber(midnight - 0.05), 1);
  assert.equal(tide.dayNumber(midnight), 2);
  assert.equal(tide.clockText(midnight), '00:00');
  // the day number only ever changes when the clock wraps past midnight
  let prev = tide.dayNumber(tide.START_T), prevHour = tide.hourOf(tide.START_T);
  for (let t = tide.START_T; t < tide.START_T + 15 * tide.DAY; t += 0.5) {
    const d = tide.dayNumber(t), h = tide.hourOf(t);
    if (d !== prev) { assert.equal(d, prev + 1); assert.ok(h < prevHour, 'day changed without the clock wrapping'); }
    prev = d; prevHour = h;
  }
});

test('works unlock when the HUD day reaches their label (Phase 10: label and gate agree)', () => {
  const unlock = (day) => { let t = tide.START_T; while (tide.dayNumber(t) < day) t += 0.25; return t; };
  for (const day of [3, 5, 8, 10]) {
    const t = unlock(day);
    assert.equal(tide.dayNumber(t), day);
    assert.equal(tide.clockText(t).slice(0, 2), '00');
    assert.equal(tide.dayNumber(t - 0.3), day - 1);
  }
});
