// The moon clock. Game time t is in seconds of play at 1x.
// One tide-day (a lunar day) lasts DAY seconds and holds two tides.
// Springs come at full and new moon, neaps at the quarters.

export const DAY = 90;               // seconds per tide-day at 1x
export const TIDE = DAY / 2;         // semi-diurnal period
export const SEASON_DAYS = 14;
export const MSL = 0;                // mean sea level, world units
export const HW_HOUR = 15;           // afternoon high water (and 03:00)
export const START_DAY = 2;          // the season opens two days after neaps
export const START_HOUR = 14.0;      // ...an hour before high water, on the last of the flood

export const hourToT = (day, hour) => (day + hour / 24) * DAY;
export const START_T = hourToT(START_DAY, START_HOUR);
export const SURGE_PEAK = START_T + 12.5 * DAY + 3;
export const SURGE_START = SURGE_PEAK - 48;
export const SURGE_END = SURGE_PEAK + 48;
export const SURGE_WARNING = START_T + 9 * DAY;
const T_HW = (HW_HOUR / 24) * DAY;

export function surge(t) {
  if (t <= SURGE_START || t >= SURGE_END) return 0;
  return Math.cos((t - SURGE_PEAK) / 48 * Math.PI / 2) ** 2;
}

// Range grows from neap (day 0) to spring (day 7) and back.
export function amplitude(t) {
  const day = t / DAY;
  const natural = 0.95 - 0.36 * Math.cos((2 * Math.PI * day) / SEASON_DAYS);
  // The equinox storm arrives on an exceptional spring tide.
  return natural + (1.32 - natural) * surge(t);
}

export function level(t) {
  const ph = (2 * Math.PI * (t - T_HW)) / TIDE;
  // a slight asymmetry: the flood is quicker than the ebb, as in real estuaries
  return MSL + amplitude(t) * (Math.cos(ph) + 0.08 * Math.cos(2 * ph - 0.6)) + surge(t) * 1.45;
}

export function rate(t) {
  return (level(t + 0.25) - level(t - 0.25)) * 2; // units per second
}

// Next turning point after t. kind: 'high' | 'low'.
export function nextTurn(t, kind) {
  const step = 0.25;
  let prev = rate(t);
  for (let s = t + step; s < t + TIDE * 1.2; s += step) {
    const r = rate(s);
    if (kind === 'high' && prev > 0 && r <= 0) return s;
    if (kind === 'low' && prev < 0 && r >= 0) return s;
    prev = r;
  }
  return t + TIDE;
}

export const dayOf = (t) => Math.floor(t / DAY);
// The day a player sees: it rolls over at midnight on the clock (the season opens at 14:00 on day 1),
// so the day number and the clock agree. Works unlock on the same boundaries as before (day N, 14:00).
export const dayNumber = (t) => Math.floor(t / DAY + 1e-9) - START_DAY + 1;
export const hourOf = (t) => (((t / DAY) % 1) + 1) % 1 * 24;

export function clockText(t) {
  const h = hourOf(t);
  const hh = Math.floor(h), mm = Math.floor((h - hh) * 60);
  return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
}

// Moon phase angle: 0 new, PI full. Day 0 is first-quarter neap; day 7 is full-moon spring.
export function moonPhase(t) {
  return Math.PI / 2 + (Math.PI * t) / (DAY * SEASON_DAYS);
}

export function springNeapWord(t) {
  if (surge(t) > 0.01) return 'Equinox storm surge';
  const a = amplitude(t);
  if (a > 1.18) return 'Spring tides';
  if (a < 0.72) return 'Neap tides';
  return (Math.sin((2 * Math.PI * (t / DAY)) / SEASON_DAYS) > 0) ? 'Range growing' : 'Range shrinking';
}

// Sun: summer marsh, long days. Sunrise 03:30, sunset 21:30.
export function sunState(t) {
  const h = hourOf(t);
  const dayFrac = (h - 3.5) / 18; // 0 at sunrise, 1 at sunset
  const elev = Math.sin(Math.PI * dayFrac) * 0.62; // radians: a low summer-evening sun all day, peak ~35 deg
  const az = Math.PI * (dayFrac - 0.5) * 1.6;
  return { h, dayFrac, elev, az };
}

// Weather for the picture only (the sim reads surge()): cloud gathers from the
// forecast, the gale sets in before the water rises and clears after it falls.
const ramp = (t, a, b) => Math.min(1, Math.max(0, (t - a) / (b - a)));
export function weather(t) {
  const gather = 0.3 * ramp(t, SURGE_WARNING + 20, SURGE_START - 30) ** 2;
  const gale = ramp(t, SURGE_START - 30, SURGE_START + 8) * (1 - ramp(t, SURGE_END - 10, SURGE_END + 22));
  const w = Math.max(gather * (1 - ramp(t, SURGE_END, SURGE_END + 22)), gale);
  return w * w * (3 - 2 * w);
}
