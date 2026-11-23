// The look pass's moving things, each one bounded and one draw call:
// spray and wake particles, storm rain, gulls, and the storm/night grade.
// Everything reads the sim: spray only where water actually runs fast, gulls
// only on mud the ebb has just uncovered.
import * as THREE from 'three';
import { SN, SX, SZ, wx, wz } from './world.js';
import * as tide from './tide.js';

const rand = Math.random;

// ------------------------------------------------------------ particles
export class Spray {
  constructor(scene, max = 700) {
    this.max = max; this.n = 0;
    this.pos = new Float32Array(max * 3);
    this.vel = new Float32Array(max * 3);
    this.life = new Float32Array(max); this.age = new Float32Array(max);
    this.size = new Float32Array(max); this.grav = new Float32Array(max);
    this.alpha = new Float32Array(max);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(this.alpha, 1));
    this.geo = geo;
    this.uniforms = { uColor: { value: new THREE.Color('#f4efe4') }, uScale: { value: 600 } };
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, uniforms: this.uniforms,
      vertexShader: /* glsl */`
        attribute float aSize; attribute float aAlpha; varying float vA;
        uniform float uScale;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp(aSize * uScale / -mv.z, 1.0, 48.0);
          vA = aAlpha;
        }`,
      fragmentShader: /* glsl */`
        uniform vec3 uColor; varying float vA;
        void main() {
          vec2 q = gl_PointCoord * 2.0 - 1.0;
          float r = dot(q, q);
          if (r > 1.0) discard;
          gl_FragColor = vec4(uColor, vA * (1.0 - r));
          #include <colorspace_fragment>
        }`,
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 4;
    scene.add(this.points);
  }
  emit(x, y, z, vx, vy, vz, life, size, grav = 6) {
    if (this.n >= this.max) return;
    const k = this.n++;
    this.pos[k * 3] = x; this.pos[k * 3 + 1] = y; this.pos[k * 3 + 2] = z;
    this.vel[k * 3] = vx; this.vel[k * 3 + 1] = vy; this.vel[k * 3 + 2] = vz;
    this.life[k] = life; this.age[k] = 0; this.size[k] = size; this.grav[k] = grav;
  }
  update(dt, wind) {
    let k = 0;
    while (k < this.n) {
      this.age[k] += dt;
      if (this.age[k] >= this.life[k]) {
        // swap-remove keeps the live particles packed for one draw range
        const last = --this.n;
        for (const a of [this.pos, this.vel]) { a[k * 3] = a[last * 3]; a[k * 3 + 1] = a[last * 3 + 1]; a[k * 3 + 2] = a[last * 3 + 2]; }
        this.life[k] = this.life[last]; this.age[k] = this.age[last]; this.size[k] = this.size[last]; this.grav[k] = this.grav[last];
        continue;
      }
      const drag = this.grav[k] > 0 ? 0.6 : 1.6;
      this.vel[k * 3] += (wind.x - this.vel[k * 3]) * Math.min(1, drag * dt) * (this.grav[k] > 0 ? 1 : 0.2);
      this.vel[k * 3 + 2] += (wind.z - this.vel[k * 3 + 2]) * Math.min(1, drag * dt) * (this.grav[k] > 0 ? 1 : 0.2);
      this.vel[k * 3 + 1] -= this.grav[k] * dt;
      if (this.grav[k] <= 0) this.vel[k * 3 + 1] *= 1 - Math.min(1, 3 * dt);
      this.pos[k * 3] += this.vel[k * 3] * dt; this.pos[k * 3 + 1] += this.vel[k * 3 + 1] * dt; this.pos[k * 3 + 2] += this.vel[k * 3 + 2] * dt;
      const f = this.age[k] / this.life[k];
      this.alpha[k] = Math.min(1, f * 6) * (1 - f) * 0.75;
      k++;
    }
    this.geo.setDrawRange(0, this.n);
    for (const n of ['position', 'aSize', 'aAlpha']) this.geo.attributes[n].needsUpdate = true;
  }
}

// ----------------------------------------------------------------- rain
export class Rain {
  constructor(scene, max = 1600) {
    this.max = max;
    this.drops = new Float32Array(max * 3);
    for (let n = 0; n < max; n++) { this.drops[n * 3] = (rand() - 0.5) * 90; this.drops[n * 3 + 1] = rand() * 34; this.drops[n * 3 + 2] = (rand() - 0.5) * 90; }
    this.pos = new Float32Array(max * 6);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.geo = geo;
    this.mat = new THREE.LineBasicMaterial({ color: '#c9d3d6', transparent: true, opacity: 0.32, depthWrite: false, fog: true });
    this.lines = new THREE.LineSegments(geo, this.mat);
    this.lines.frustumCulled = false; this.lines.renderOrder = 7;
    this.lines.visible = false;
    scene.add(this.lines);
  }
  update(dt, storm, centre, wind, flash) {
    const count = Math.floor(this.max * Math.min(1, storm * 1.25 - 0.1));
    this.lines.visible = count > 0;
    if (!this.lines.visible) return;
    const fall = 26, len = 0.07;
    for (let n = 0; n < count; n++) {
      const d = this.drops;
      d[n * 3] += wind.x * dt; d[n * 3 + 1] -= fall * dt; d[n * 3 + 2] += wind.z * dt;
      if (d[n * 3 + 1] < 0) { d[n * 3 + 1] += 34; d[n * 3] = (rand() - 0.5) * 90; d[n * 3 + 2] = (rand() - 0.5) * 90; }
      const x = centre.x + d[n * 3], y = centre.y - 4 + d[n * 3 + 1], z = centre.z + d[n * 3 + 2];
      const p = this.pos;
      p[n * 6] = x; p[n * 6 + 1] = y; p[n * 6 + 2] = z;
      p[n * 6 + 3] = x - wind.x * len; p[n * 6 + 4] = y + fall * len; p[n * 6 + 5] = z - wind.z * len;
    }
    this.geo.setDrawRange(0, count * 2);
    this.geo.attributes.position.needsUpdate = true;
    this.mat.opacity = 0.22 + 0.18 * storm + 0.4 * flash;
  }
}

// ---------------------------------------------------------------- gulls
function gullGeometry() {
  // body along +z, wings out along x; aWing is 0 on the body and 1 at the tips
  const P = [], C = [], A = [];
  const white = [0.93, 0.92, 0.88], grey = [0.62, 0.64, 0.66], black = [0.12, 0.12, 0.13], beak = [0.85, 0.62, 0.2];
  const tri = (a, b, c, ca, cb, cc, wa, wb, wc) => { P.push(...a, ...b, ...c); C.push(...ca, ...cb, ...cc); A.push(wa, wb, wc); };
  const quad = (a, b, c, d, ca, cb, cc, cd, wa, wb, wc, wd) => { tri(a, b, c, ca, cb, cc, wa, wb, wc); tri(a, c, d, ca, cc, cd, wa, wc, wd); };
  // body: a little diamond prism
  const n = [0, 0, 0.32], t = [0, 0.02, -0.3], u = [0, 0.09, 0], dn = [0, -0.07, 0], l = [-0.08, 0, 0], r = [0.08, 0, 0];
  for (const [a, b] of [[u, r], [r, dn], [dn, l], [l, u]]) { tri(n, a, b, white, white, white, 0, 0, 0); tri(t, b, a, white, grey, grey, 0, 0, 0); }
  tri([0, 0.01, 0.42], [0.02, 0, 0.3], [-0.02, 0, 0.3], beak, beak, beak, 0, 0, 0);
  for (const s of [-1, 1]) {
    // inner and outer wing panels, grey above with black tips
    const r0 = [0.06 * s, 0.03, 0.1], r1 = [0.06 * s, 0.03, -0.1], m0 = [0.36 * s, 0.04, 0.06], m1 = [0.36 * s, 0.04, -0.14], tip = [0.7 * s, 0.03, -0.16];
    quad(r0, m0, m1, r1, grey, grey, grey, grey, 0.05, 0.5, 0.5, 0.05);
    tri(m0, tip, m1, grey, black, black, 0.5, 1, 0.5);
    quad(r1, m1, m0, r0, white, white, white, white, 0.05, 0.5, 0.5, 0.05);
    tri(m1, tip, m0, white, black, white, 0.5, 1, 0.5);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(C, 3));
  g.setAttribute('aWing', new THREE.Float32BufferAttribute(A, 1));
  g.computeVertexNormals();
  return g;
}

export class Gulls {
  constructor(scene, count = 18) {
    this.count = count;
    const geo = gullGeometry();
    this.anim = new THREE.InstancedBufferAttribute(new Float32Array(count * 3), 3); // phase, flap amount, fold
    geo.setAttribute('aBird', this.anim);
    const mat = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide });
    this.uTime = { value: 0 };
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.uTime = this.uTime;
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nattribute float aWing; attribute vec3 aBird; uniform float uTime;')
        .replace('#include <begin_vertex>', `#include <begin_vertex>
          float wingSide = sign(position.x);
          transformed.x = mix(transformed.x, transformed.x * 0.22, aBird.z * step(0.01, aWing));
          transformed.z -= aBird.z * aWing * 0.12;
          transformed.y += sin(aBird.x) * aBird.y * aWing * 0.42 * (1.0 - aBird.z) + aBird.z * aWing * 0.06;`);
    };
    this.mesh = new THREE.InstancedMesh(geo, mat, count);
    this.mesh.castShadow = true;
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);
    this.birds = [];
    for (let n = 0; n < count; n++) {
      this.birds.push({
        state: 'fly', x: rand() * 60 - 30, y: 10 + rand() * 6, z: rand() * 60 - 10, yaw: rand() * 6.28,
        ang: rand() * 6.28, rad: 14 + rand() * 22, h: 8 + rand() * 9, spin: (0.16 + rand() * 0.12) * (rand() < 0.5 ? -1 : 1),
        phase: rand() * 6.28, rate: 5.5 + rand() * 2, fold: 0, tx: 0, tz: 0, ty: 0, wait: rand() * 8, peck: 0,
      });
    }
    this.targets = []; this.scanAt = 0; this.time = 0;
    this.home = new THREE.Vector3(wx(SX + SN / 2), 0, wz(SZ + SN / 2));
    this.m = new THREE.Matrix4(); this.q = new THREE.Quaternion(); this.e = new THREE.Euler(0, 0, 0, 'YXZ');
    this.v = new THREE.Vector3(); this.s = new THREE.Vector3(1, 1, 1);
  }
  scan(game) {
    // fresh mud: wet within the last tide, drained now, not inside a pan
    const { sim } = game, out = [];
    for (let n = 0; n < 500 && out.length < 40; n++) {
      const s = (rand() * SN * SN) | 0;
      if (sim.pan[s] >= 0 || sim.d[s] > 0.004 || sim.wet[s] < 0.2) continue;
      const i = s % SN, j = (s / SN) | 0;
      out.push([wx(SX + i), sim.b[s], wz(SZ + j), s]);
    }
    this.targets = out;
  }
  update(dt, game, storm, night) {
    const now = this.time += dt;
    this.uTime.value = now % 400;
    if (now > this.scanAt) { this.scanAt = now + 2; this.scan(game); }
    const ebb = tide.rate(game.t) < 0;
    const A = this.anim.array;
    this.birds.forEach((b, n) => {
      b.wait -= dt;
      if (b.state === 'fly') {
        // loose wheeling circles over the marsh; a gale blows them inland
        const away = storm > 0.35;
        b.ang += b.spin * dt * (away ? 2.5 : 1);
        const R = away ? 150 + b.rad : b.rad, H = away ? b.h + 18 : b.h + Math.sin(now * 0.3 + n) * 2;
        const gx = this.home.x + Math.cos(b.ang) * R - (away ? 60 : 0), gz = this.home.z + Math.sin(b.ang) * R - (away ? 120 : 0);
        this.steer(b, gx, H, gz, dt, away ? 14 : 7);
        b.fold = Math.max(0, b.fold - dt * 3);
        if (b.wait < 0 && !away && this.targets.length && (ebb || night > 0.6)) {
          const t = this.targets[(rand() * this.targets.length) | 0];
          b.state = 'land'; b.tx = t[0] + rand() - 0.5; b.ty = t[1]; b.tz = t[2] + rand() - 0.5; b.cell = t[3];
        } else if (b.wait < 0) b.wait = 3 + rand() * 6;
      } else if (b.state === 'land') {
        // The tide may reach a chosen mud patch while the bird is descending.
        if (game.sim.d[b.cell] > 0.03 || storm > 0.25) {
          b.state = 'fly'; b.wait = 4; b.ang = Math.atan2(b.z - this.home.z, b.x - this.home.x);
          return;
        }
        const d = this.steer(b, b.tx, b.ty + 0.12, b.tz, dt, 6);
        if (d < 0.6) { b.state = 'stand'; b.wait = 8 + rand() * 25; b.y = b.ty + 0.12; }
      } else {
        b.fold = Math.min(1, b.fold + dt * 4);
        b.peck = Math.max(0, Math.sin(now * 2.3 + n * 1.7)) ** 8;
        const flooded = game.sim.d[b.cell] > 0.03 || storm > 0.25;
        if (flooded || (b.wait < 0 && night < 0.6)) { b.state = 'fly'; b.wait = 4 + rand() * 10; b.h = 7 + rand() * 9; b.ang = Math.atan2(b.z - this.home.z, b.x - this.home.x); }
      }
      b.phase += dt * b.rate * (b.state === 'stand' ? 0 : (b.vy > 0.4 || b.state === 'land' ? 1.6 : 1));
      // glide in bursts: flap for a while, then hold the wings out
      const flap = b.state === 'stand' ? 0 : (Math.sin(now * 0.7 + n * 2.1) > 0.1 || b.state === 'land' || storm > 0.35 ? 1 : 0.12);
      A[n * 3] = b.phase; A[n * 3 + 1] = flap; A[n * 3 + 2] = b.fold;
      this.e.set(b.state === 'stand' ? -0.15 - b.peck * 0.5 : -(b.vy || 0) * 0.08, b.yaw, b.state === 'stand' ? 0 : -(b.turn || 0) * 0.9);
      this.q.setFromEuler(this.e);
      this.v.set(b.x, b.y, b.z);
      this.s.setScalar(b.state === 'stand' ? 0.8 : 1);
      this.m.compose(this.v, this.q, this.s);
      this.mesh.setMatrixAt(n, this.m);
    });
    this.mesh.instanceMatrix.needsUpdate = true;
    this.anim.needsUpdate = true;
  }
  steer(b, gx, gy, gz, dt, speed) {
    const dx = gx - b.x, dy = gy - b.y, dz = gz - b.z, d = Math.hypot(dx, dy, dz);
    const want = Math.atan2(dx, dz);
    let dyaw = want - b.yaw; dyaw = Math.atan2(Math.sin(dyaw), Math.cos(dyaw));
    const turn = Math.max(-2.2, Math.min(2.2, dyaw * 2.5)) * dt;
    b.turn = turn / Math.max(dt, 1e-3) / 2.2;
    b.yaw += turn;
    const sp = Math.min(speed, d * 1.5 + 0.5);
    b.x += Math.sin(b.yaw) * sp * dt; b.z += Math.cos(b.yaw) * sp * dt;
    b.vy = Math.max(-3, Math.min(3, dy * 1.2));
    b.y += b.vy * dt;
    return d;
  }
}

// ------------------------------------------------------ the whole layer
export class LookFX {
  constructor(scene, canvas) {
    this.spray = new Spray(scene);
    this.rain = new Rain(scene);
    this.gulls = new Gulls(scene);
    this.wind = new THREE.Vector3();
    this.acc = 0;
    // storm and night vignette over the canvas, beneath the HUD
    const v = document.createElement('div');
    v.id = 'grade';
    v.style.cssText = 'position:fixed;inset:0;pointer-events:none;opacity:0;background:radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0) 45%, rgba(14,22,26,0.62) 100%);';
    canvas.after(v);
    this.vignette = v; this.canvas = canvas; this.filter = '';
  }
  count() { return { spray: this.spray.n, rain: this.rain.lines.visible ? this.rain.geo.drawRange.count / 2 : 0, gulls: this.gulls.count, groundedGulls: this.gulls.birds.filter(b => b.state === 'stand').length }; }
  update(dt, game, view, centre, extra = {}) {
    const storm = view.uniforms.uStorm.value, night = view.uniforms.uNight.value, flash = view.uniforms.uFlash.value;
    const sunUp = Math.max(0, view.uniforms.uSunDir.value.y);
    const now = view.uniforms.uTime.value;
    this.wind.set(-3 - 9 * storm + Math.sin(now * 0.4) * 2 * storm, 0, -1.5 - 5 * storm);
    const light = (0.4 + 0.6 * Math.min(1, sunUp * 3)) * (1 - 0.35 * storm) * (1 - 0.55 * night) + 0.12 + flash * 0.6;
    this.spray.uniforms.uColor.value.setRGB(0.96 * light, 0.94 * light, 0.9 * light);
    this.spray.uniforms.uScale.value = view.r.domElement.height * 0.55;
    const paused = game.paused || game.ended || game.hostPaused; // a held test clock still animates
    const sdt = paused ? 0 : dt * Math.min(3, game.speed || 1);
    // emitters run at a fixed 20 Hz so frame rate does not change the amount of spray
    this.acc += sdt;
    const { sim } = game;
    while (this.acc > 0.05) {
      this.acc -= 0.05;
      for (const g of game.gates) {
        if (!g.open) continue;
        const s = (g.j - SZ) * SN + g.i - SX, sp = Math.hypot(sim.vx[s], sim.vz[s]);
        if (sim.d[s] < 0.05 || sp < 0.45) continue;
        for (let e = 0; e < Math.min(4, sp * 2); e++) this.spray.emit(wx(g.i) + rand() - 0.5, sim.b[s] + sim.d[s] + 0.05, wz(g.j) + rand() - 0.5, sim.vx[s] * 0.8 + (rand() - 0.5), 1.2 + rand() * 1.4, sim.vz[s] * 0.8 + (rand() - 0.5), 0.5 + rand() * 0.4, 0.09 + rand() * 0.06);
      }
      for (const w of game.weirs) {
        for (let c = 0; c < w.cells.length; c += 2) {
          const s = w.cells[c], sp = Math.hypot(sim.vx[s], sim.vz[s]);
          if (sim.d[s] < 0.08 || sp < 0.4 || rand() > sp * 0.5) continue;
          this.spray.emit(wx(SX + s % SN) + rand() - 0.5, sim.b[s] + sim.d[s] + 0.03, wz(SZ + ((s / SN) | 0)) + rand() - 0.5, sim.vx[s] * 0.5, 0.8 + rand(), sim.vz[s] * 0.5, 0.45 + rand() * 0.3, 0.08 + rand() * 0.05);
        }
      }
      for (const m of game.works?.mills || []) {
        if (!(m.output > 0.25)) continue;
        const p = m.mesh.position;
        for (let e = 0; e < m.output * 2; e++) this.spray.emit(p.x + (rand() - 0.5) * 1.6, p.y + 0.3 + rand() * 0.8, p.z + (rand() - 0.5) * 1.6, (rand() - 0.5) * 1.5, 1 + rand() * 1.5, (rand() - 0.5) * 1.5, 0.6, 0.08);
      }
      const boat = extra.trader;
      if (boat && extra.moving) {
        // a wake: floating foam left behind at the stern, spreading slowly
        const a = boat.rotation.y, bx = boat.position.x - Math.cos(a) * 1.6, bz = boat.position.z + Math.sin(a) * 1.6;
        for (let e = 0; e < 3; e++) { const side = (rand() - 0.5) * 2; this.spray.emit(bx + side * 0.3, boat.position.y + 0.08, bz, Math.sin(a) * side * 0.6, 0, Math.cos(a) * side * 0.6, 2.4 + rand(), 0.16, 0); }
      }
      if (storm > 0.3) {
        // spindrift torn off the water around the view
        for (let e = 0; e < storm * 10; e++) {
          const x = centre.x + (rand() - 0.5) * 70, z = centre.z + (rand() - 0.5) * 70;
          const i = Math.round(x + 128) - SX, j = Math.round(z + 128) - SZ;
          let y = tide.level(game.t);
          if (i >= 0 && j >= 0 && i < SN && j < SN) { const s = j * SN + i; if (sim.d[s] < 0.3) continue; y = sim.b[s] + sim.d[s]; }
          this.spray.emit(x, y + 0.1, z, this.wind.x, 1.5 + rand() * 2, this.wind.z, 0.9 + rand() * 0.5, 0.12 + rand() * 0.08, 2.5);
        }
      }
    }
    this.spray.update(sdt, this.wind);
    this.rain.update(sdt, storm, centre, this.wind, flash);
    this.gulls.update(sdt, game, storm, night);
    // the grade: colder, flatter and closer in the gale; a soft vignette at night
    const vo = Math.min(0.8, storm * 0.6 + night * 0.3);
    this.vignette.style.opacity = vo.toFixed(2);
    const q = Math.round(storm * 20) / 20;
    const f = q > 0 ? `saturate(${(1 - 0.32 * q).toFixed(2)}) contrast(${(1 + 0.08 * q).toFixed(2)}) brightness(${(1 + flash * 0.25).toFixed(2)})` : '';
    if (f !== this.filter) { this.filter = f; this.canvas.style.filter = f; }
  }
}
