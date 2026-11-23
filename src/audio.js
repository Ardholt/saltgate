// Small synthesized sound: surf that breathes with the tide, a gate's creak and thud,
// the bright scrape of raked salt. No files; it starts on the first click.
export class Sound {
  constructor() {
    this.ctx = null; this.muted = false; this.hostMuted = false; this.tabHidden = false;
    // slider values 0-100; at the defaults (80 / 65 / 85) the mix is exactly what it was before the settings panel
    this.vol = { master: 80, music: 65, effects: 85 };
  }
  level() { return this.muted || this.hostMuted || this.tabHidden ? 0 : this.vol.master / 100; }
  setVolumes(v) { this.vol = { ...this.vol, ...v }; this.applyLevels(); }
  applyLevels(now) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime, k = now ? 0.001 : 0.05;
    this.amb.gain.setTargetAtTime(this.vol.music / 65, t, k);
    this.fx.gain.setTargetAtTime(this.vol.effects / 85, t, k);
    this.master.gain.setTargetAtTime(this.level(), t, k);
  }

  start() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    this.ctx = ctx;
    this.master = ctx.createGain();
    this.master.gain.value = this.level();
    this.master.connect(ctx.destination);
    // two buses under the master: the sea/wind/brine ambience, and the effects (gate, chimes, digging, ticks)
    this.amb = ctx.createGain(); this.amb.connect(this.master);
    this.fx = ctx.createGain(); this.fx.connect(this.master);
    this.applyLevels(true);
    // brown noise for surf
    const len = ctx.sampleRate * 4;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const ch = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; ch[i] = last * 3.5; }
    this.noise = buf;
    const src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
    this.surfFilter = ctx.createBiquadFilter(); this.surfFilter.type = 'lowpass'; this.surfFilter.frequency.value = 600;
    this.surfGain = ctx.createGain(); this.surfGain.gain.value = 0.0;
    src.connect(this.surfFilter).connect(this.surfGain).connect(this.amb);
    src.start();
    // wind in the reeds
    const src2 = ctx.createBufferSource(); src2.buffer = buf; src2.loop = true; src2.playbackRate.value = 1.7;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1800; bp.Q.value = 0.6;
    this.windGain = ctx.createGain(); this.windGain.gain.value = 0.05;
    src2.connect(bp).connect(this.windGain).connect(this.amb);
    src2.start();
    // Quiet, filtered grains under the evaporation, giving the wait a texture.
    const grains = ctx.createBufferSource(); grains.buffer = buf; grains.loop = true; grains.playbackRate.value = 0.7;
    const filter = ctx.createBiquadFilter(); filter.type = 'highpass'; filter.frequency.value = 2800;
    this.brineGain = ctx.createGain(); this.brineGain.gain.value = 0;
    grains.connect(filter).connect(this.brineGain).connect(this.amb); grains.start();
  }

  setMuted(m) { this.muted = m; this.apply(); }
  setHostMuted(m) { this.hostMuted = m; this.apply(); }
  setTabHidden(h) { this.tabHidden = h; this.apply(); }
  apply() { if (this.master) this.master.gain.setTargetAtTime(this.level(), this.ctx.currentTime, 0.05); }

  // level: tide height, nearSea: 0..1 how much sea is in view
  update(level, rate, nearSea, zoom, brining = false) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const swell = 0.5 + 0.5 * Math.sin(t * 0.9) * Math.sin(t * 0.37 + 1);
    const g = (0.1 + 0.22 * Math.max(0, (level + 1.4) / 3)) * (0.5 + 0.5 * nearSea) * (0.7 + 0.3 * swell) * (1.2 - zoom * 0.5);
    this.surfGain.gain.setTargetAtTime(g, t, 0.3);
    this.brineGain.gain.setTargetAtTime(brining ? 0.045 + swell * 0.025 : 0, t, 0.5);
    this.surfFilter.frequency.setTargetAtTime(380 + 500 * swell + Math.abs(rate) * 4000, t, 0.3);
  }

  creak(closing) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'sawtooth';
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 8; f.frequency.value = 420;
    const g = ctx.createGain(); g.gain.value = 0;
    o.frequency.setValueAtTime(closing ? 95 : 70, t);
    o.frequency.linearRampToValueAtTime(closing ? 70 : 105, t + 0.9);
    g.gain.linearRampToValueAtTime(0.08, t + 0.08);
    for (let i = 0; i < 6; i++) g.gain.setValueAtTime(i % 2 ? 0.03 : 0.08, t + 0.1 + i * 0.13);
    g.gain.linearRampToValueAtTime(0, t + 1.0);
    o.connect(f).connect(g).connect(this.fx);
    o.start(t); o.stop(t + 1.05);
    // the thud of the door landing
    this.thump(t + (closing ? 0.95 : 0.2), closing ? 0.5 : 0.2);
  }

  thump(at, vol) {
    const ctx = this.ctx;
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(110, at); o.frequency.exponentialRampToValueAtTime(45, at + 0.25);
    const g = ctx.createGain(); g.gain.setValueAtTime(0, at); g.gain.linearRampToValueAtTime(vol, at + 0.01); g.gain.exponentialRampToValueAtTime(0.001, at + 0.35);
    o.connect(g).connect(this.fx); o.start(at); o.stop(at + 0.4);
  }

  chime(n = 3) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const notes = [659.3, 784, 987.8, 1174.7, 1318.5];
    for (let i = 0; i < n; i++) {
      const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = notes[i % notes.length];
      const g = ctx.createGain(); const at = t + i * 0.07;
      g.gain.setValueAtTime(0, at); g.gain.linearRampToValueAtTime(0.09, at + 0.008); g.gain.exponentialRampToValueAtTime(0.001, at + 0.7);
      o.connect(g).connect(this.fx); o.start(at); o.stop(at + 0.75);
    }
    // the scrape of the rake
    const src = ctx.createBufferSource(); src.buffer = this.noise;
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 2500;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0, t); g.gain.linearRampToValueAtTime(0.25, t + 0.05); g.gain.exponentialRampToValueAtTime(0.001, t + 0.45);
    src.connect(hp).connect(g).connect(this.fx); src.start(t, Math.random() * 2, 0.5);
  }

  tick() {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = 1400;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.02, t); g.gain.exponentialRampToValueAtTime(0.0005, t + 0.05);
    o.connect(g).connect(this.fx); o.start(t); o.stop(t + 0.06);
  }

  dig() {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const src = ctx.createBufferSource(); src.buffer = this.noise;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.35, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
    src.connect(lp).connect(g).connect(this.fx); src.start(t, Math.random() * 3, 0.2);
  }
}
