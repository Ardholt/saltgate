// The player's camera: orbit around a point on the marsh.
// Right-drag orbits, middle-drag or left-drag on open ground pans, the wheel zooms,
// WASD/arrows pan and Q/E rotate. Everything eases; nothing jumps.
import * as THREE from 'three';
import { clamp, lerp } from './noise.js';
import { heightAt } from './props.js';

export const ZOOM_MIN = 14, ZOOM_MAX = 120, ZOOM_STEP_LOG = 0.18; // one wheel notch = x1.2 in or out, in every scene

export class CameraRig {
  constructor(camera, world, dom) {
    this.cam = camera; this.world = world; this.dom = dom;
    this.target = new THREE.Vector3(0, 0, 0);
    this.goal = { x: 0, z: 0, yaw: 0.6, pitch: 0.62, dist: 52 };
    this.cur = { ...this.goal };
    this.keys = new Set();
    this.bounds = { x0: -60, x1: 60, z0: -40, z1: 90 };
    this.drag = null;
    this.onClick = null; // set by the game: (event, wasDrag) => bool consumed
    this.leftPans = true;
    this.bind();
  }

  set(x, z, yaw, pitch, dist, instant = true) {
    Object.assign(this.goal, { x, z, yaw, pitch, dist: clamp(dist, ZOOM_MIN, ZOOM_MAX) });
    if (instant) Object.assign(this.cur, this.goal);
    else { this.glide = true; this.glideAt = performance.now(); }
  }

  // wheel zoom: one fixed step per notch, same limits in every scene and from every preset
  zoomBy(sign) { this.goal.dist = clamp(this.goal.dist * Math.exp(sign * ZOOM_STEP_LOG), ZOOM_MIN, ZOOM_MAX); }

  // a Find/jump glide still running: the picture is moving under the cursor
  gliding() { const g = this.goal, c = this.cur; return Math.abs(g.x - c.x) + Math.abs(g.z - c.z) + Math.abs(g.dist - c.dist) > 0.05; }
  // land the glide now (a click arrived mid-move), then redraw the camera
  settle() { Object.assign(this.cur, this.goal); this.glide = false; this.follow(0); this.cam.updateMatrixWorld(true); }

  bind() {
    const el = this.dom;
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    el.addEventListener('pointerdown', (e) => {
      el.setPointerCapture(e.pointerId);
      this.drag = { b: e.button, x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, moved: false, shift: e.shiftKey };
    });
    el.addEventListener('pointermove', (e) => {
      const d = this.drag;
      if (!d) return;
      const dx = e.clientX - d.x, dy = e.clientY - d.y;
      d.x = e.clientX; d.y = e.clientY;
      if (Math.hypot(e.clientX - d.sx, e.clientY - d.sy) > 5) d.moved = true;
      if (!d.moved) return;
      if (d.b === 2 || (d.b === 0 && d.shift)) {
        this.goal.yaw -= dx * 0.006;
        this.goal.pitch = clamp(this.goal.pitch + dy * 0.004, 0.28, 1.35);
      } else if (d.b === 1 || (d.b === 0 && this.leftPans)) {
        this.panScreen(dx, dy);
      }
    });
    el.addEventListener('pointerup', (e) => {
      const d = this.drag;
      this.drag = null;
      if (d && d.b === 0 && this.onClick) this.onClick(e, d.moved);
    });
    el.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (!e.deltaY) return;
      // one notch is one fixed step in every scene, whatever the device reports for deltaY
      this.zoomBy(Math.sign(e.deltaY));
    }, { passive: false });
    // keys move by how long they were held, not by how many frames were drawn,
    // so a slow machine still gets the whole of a short press
    this.held = new Map(); // code -> last time applied (ms)
    window.addEventListener('keydown', (e) => {
      if (this.locked || e.target?.closest?.('input, select, textarea')) return;
      if (!this.held.has(e.code)) this.held.set(e.code, performance.now());
      this.keys.add(e.code);
    });
    window.addEventListener('keyup', (e) => {
      const t0 = this.held.get(e.code);
      if (t0 !== undefined) this.applyKeys(new Set([e.code]), (performance.now() - t0) / 1000);
      this.held.delete(e.code);
      this.keys.delete(e.code);
    });
    window.addEventListener('blur', () => { this.keys.clear(); this.held.clear(); });
  }

  panScreen(dx, dy) {
    const s = this.cur.dist * 0.0021;
    const cy = Math.cos(this.cur.yaw), sy = Math.sin(this.cur.yaw);
    this.goal.x -= (dx * cy + dy * sy / Math.max(0.5, Math.sin(this.cur.pitch))) * s;
    this.goal.z -= (-dx * sy + dy * cy / Math.max(0.5, Math.sin(this.cur.pitch))) * s;
  }

  // a menu is open: ignore the keyboard and let go of anything held
  lock(on) { this.locked = on; if (on) { this.keys.clear(); this.held.clear(); } }

  update(dt) {
    const now = performance.now();
    for (const [code, t0] of this.held) {
      this.applyKeys(new Set([code]), Math.min(0.5, (now - t0) / 1000));
      this.held.set(code, now);
    }
    this.follow(dt);
  }

  applyKeys(k, dt) {
    const g = this.goal;
    const sp = this.cur.dist * 0.9 * dt;
    let fx = 0, fz = 0;
    if (k.has('KeyW') || k.has('ArrowUp')) fz -= 1;
    if (k.has('KeyS') || k.has('ArrowDown')) fz += 1;
    if (k.has('KeyA') || k.has('ArrowLeft')) fx -= 1;
    if (k.has('KeyD') || k.has('ArrowRight')) fx += 1;
    if (fx || fz) {
      const cy = Math.cos(this.cur.yaw), sy = Math.sin(this.cur.yaw);
      g.x += (fx * cy + fz * sy) * sp;
      g.z += (-fx * sy + fz * cy) * sp;
    }
    if (k.has('KeyQ')) g.yaw += dt * 1.6;
    if (k.has('KeyE')) g.yaw -= dt * 1.6;
    if (k.has('KeyR')) g.pitch = clamp(g.pitch + dt * 0.8, 0.28, 1.35);
    if (k.has('KeyF')) g.pitch = clamp(g.pitch - dt * 0.8, 0.28, 1.35);
    if (k.has('Equal') || k.has('NumpadAdd')) g.dist = clamp(g.dist * (1 - dt), ZOOM_MIN, ZOOM_MAX);
    if (k.has('Minus') || k.has('NumpadSubtract')) g.dist = clamp(g.dist * (1 + dt), ZOOM_MIN, ZOOM_MAX);
  }

  follow(dt) {
    const g = this.goal;
    g.x = clamp(g.x, this.bounds.x0, this.bounds.x1);
    g.z = clamp(g.z, this.bounds.z0, this.bounds.z1);

    if (this.glide && (!this.gliding() || performance.now() - this.glideAt > 700)) { if (this.gliding()) Object.assign(this.cur, this.goal); this.glide = false; } // a Find lands within 0.7 s whatever the frame rate
    const a = 1 - Math.exp(-dt * (this.glide ? 20 : 9));
    const c = this.cur;
    c.x = lerp(c.x, g.x, a); c.z = lerp(c.z, g.z, a);
    c.yaw = lerp(c.yaw, g.yaw, a); c.pitch = lerp(c.pitch, g.pitch, a); c.dist = lerp(c.dist, g.dist, a);

    const ty = Math.max(0.4, heightAt(this.world, c.x, c.z));
    this.target.set(c.x, ty, c.z);
    const cp = Math.cos(c.pitch);
    const px = c.x + Math.sin(c.yaw) * cp * c.dist;
    const pz = c.z + Math.cos(c.yaw) * cp * c.dist;
    let py = ty + Math.sin(c.pitch) * c.dist;
    py = Math.max(py, heightAt(this.world, px, pz) + 2.5);
    this.cam.position.set(px, py, pz);
    this.cam.lookAt(this.target);
  }

  // ray from the screen to the heightfield
  pick(clientX, clientY) {
    const rect = this.dom.getBoundingClientRect();
    const ndc = new THREE.Vector2(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
    const ray = new THREE.Raycaster();
    ray.setFromCamera(ndc, this.cam);
    const o = ray.ray.origin, d = ray.ray.direction;
    let t = 0, prev = o.y - heightAt(this.world, o.x, o.z);
    for (let s = 0; s < 600; s++) {
      t += Math.max(0.15, t * 0.01);
      const x = o.x + d.x * t, y = o.y + d.y * t, z = o.z + d.z * t;
      const gap = y - heightAt(this.world, x, z);
      if (gap < 0) {
        const tt = t - (gap / (gap - prev)) * Math.max(0.15, t * 0.01);
        return new THREE.Vector3(o.x + d.x * tt, o.y + d.y * tt, o.z + d.z * tt);
      }
      prev = gap;
    }
    return null;
  }
}
