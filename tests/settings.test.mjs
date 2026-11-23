import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sanitize, DEFAULTS, QUALITY, settingsStorage, loadSettings, SETTINGS_KEY } from '../src/settings.js';

test('sanitize: junk becomes defaults, values are clamped and rounded', () => {
  assert.deepEqual(sanitize(null), DEFAULTS);
  assert.deepEqual(sanitize('x'), DEFAULTS);
  assert.deepEqual(sanitize({ master: 'loud', music: NaN, effects: Infinity, quality: 'ultra' }), DEFAULTS);
  assert.deepEqual(sanitize({ master: 150, music: -5, effects: 33.6, quality: 'low' }), { master: 100, music: 0, effects: 34, quality: 'low' });
});

test('quality levels order from cheap to rich', () => {
  const [l, m, h] = ['low', 'medium', 'high'].map(k => QUALITY[k]);
  for (const k of ['pixel', 'shadow', 'spray', 'rain', 'gulls']) { assert.ok(l[k] < m[k] && m[k] < h[k], k); }
});

test('storage: own key, never throws', () => {
  const store = new Map();
  globalThis.localStorage = { getItem: k => store.get(k) ?? null, setItem: (k, v) => store.set(k, v), removeItem: k => store.delete(k) };
  assert.deepEqual(loadSettings(), DEFAULTS);
  assert.equal(settingsStorage.write({ ...DEFAULTS, master: 10 }), true);
  assert.equal(loadSettings().master, 10);
  assert.ok(store.has(SETTINGS_KEY) && SETTINGS_KEY !== 'saltgate.save');
  store.set(SETTINGS_KEY, '{not json'); assert.deepEqual(loadSettings(), DEFAULTS);
  globalThis.localStorage = { getItem() { throw new Error('blocked'); }, setItem() { throw new Error('blocked'); } };
  assert.deepEqual(loadSettings(), DEFAULTS);
  assert.equal(settingsStorage.write(DEFAULTS), false);
});
