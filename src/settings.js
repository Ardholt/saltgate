// Player settings: volume buses and graphics quality. Kept under their own localStorage key,
// never the season save's. Unreadable, hand-edited or blocked storage falls back to the defaults.
export const SETTINGS_KEY = 'saltgate.settings';
export const DEFAULTS = { master: 80, music: 65, effects: 85, quality: 'high' };

// What each quality level really changes (see Renderer.setQuality and applyQuality in main.js):
// render resolution cap, shadow map size (0 = the sun casts no shadows), and the particle caps.
export const QUALITY = {
  low:    { pixel: 1,    shadow: 0,    spray: 250, rain: 500,  gulls: 6 },
  medium: { pixel: 1.25, shadow: 1024, spray: 450, rain: 1000, gulls: 12 },
  high:   { pixel: 1.5,  shadow: 2048, spray: 700, rain: 1600, gulls: 18 },
};

const vol = (v, d) => (typeof v === 'number' && Number.isFinite(v) ? Math.max(0, Math.min(100, Math.round(v))) : d);

// Any input becomes a valid settings object; unknown or bad fields take their default.
export function sanitize(o) {
  const s = o && typeof o === 'object' ? o : {};
  return {
    master: vol(s.master, DEFAULTS.master),
    music: vol(s.music, DEFAULTS.music),
    effects: vol(s.effects, DEFAULTS.effects),
    quality: Object.prototype.hasOwnProperty.call(QUALITY, s.quality) ? s.quality : DEFAULTS.quality,
  };
}

export const settingsStorage = {
  read() { try { const t = localStorage.getItem(SETTINGS_KEY); return t ? JSON.parse(t) : null; } catch { return null; } },
  write(s) { try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); return true; } catch { return false; } },
};

export const loadSettings = () => sanitize(settingsStorage.read());
