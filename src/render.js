// Scene, light, sky, terrain and water. The look is the sim made visible:
// the shoreline, wet sand, foam and salt all read straight from the water grid.
import * as THREE from 'three';
import { W, H, SN, SX, SZ, wx, wz, PAN_FLOOR } from './world.js';
import { P, SKY } from './palette.js';
import { smoothstep, clamp, lerp } from './noise.js';
import { sunState, moonPhase, weather, DAY, HW_HOUR } from './tide.js';

const tmpA = new THREE.Color();

export class Renderer {
  constructor(canvas, world) {
    this.world = world;
    const r = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFShadowMap;
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.0;
    this.r = r;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(42, 1, 0.5, 2400);
    this.scene.fog = new THREE.Fog(0xe0c8a0, 120, 520);

    this.sun = new THREE.DirectionalLight(0xffffff, 2.5);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const sc = this.sun.shadow.camera;
    sc.left = -70; sc.right = 70; sc.top = 70; sc.bottom = -70; sc.near = 1; sc.far = 400;
    this.sun.shadow.bias = -0.0006;
    this.sun.shadow.normalBias = 0.04;
    this.scene.add(this.sun, this.sun.target);
    this.hemi = new THREE.HemisphereLight(0xbfd4e6, 0x6b5a40, 0.9);
    this.scene.add(this.hemi);
    this.moonLight = new THREE.DirectionalLight(0x9fb4e0, 0.0);
    this.scene.add(this.moonLight, this.moonLight.target);

    this.uniforms = {
      uTime: { value: 0 },
      uSunDir: { value: new THREE.Vector3(0, 1, 0) },
      uSunColor: { value: new THREE.Color(1, 1, 1) },
      uZenith: { value: new THREE.Color() },
      uHorizon: { value: new THREE.Color() },
      uMoonDir: { value: new THREE.Vector3(0, 1, 0) },
      uMoonPhase: { value: 0 },
      uNight: { value: 0 },
      uFogColor: { value: this.scene.fog.color },
      uFogNear: { value: 120 },
      uFogFar: { value: 520 },
      uTide: { value: 0 },
      uStorm: { value: 0 },
      uFlash: { value: 0 },
    };

    this.buildSky();
    this.buildTerrain();
    this.buildWater();
    this.buildSea();
  }

  // ---------------------------------------------------------------- sky
  buildSky() {
    const geo = new THREE.SphereGeometry(1800, 48, 24);
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: this.uniforms,
      vertexShader: /* glsl */`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_Position = p.xyww;
        }`,
      fragmentShader: /* glsl */`
        uniform vec3 uZenith, uHorizon, uSunColor, uSunDir, uMoonDir;
        uniform float uMoonPhase, uNight, uTime, uStorm, uFlash;
        varying vec3 vDir;
        float vn3(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
          float a=fract(sin(dot(i,vec2(127.1,311.7)))*43758.5453), b=fract(sin(dot(i+vec2(1,0),vec2(127.1,311.7)))*43758.5453);
          float c=fract(sin(dot(i+vec2(0,1),vec2(127.1,311.7)))*43758.5453), e=fract(sin(dot(i+vec2(1,1),vec2(127.1,311.7)))*43758.5453);
          return mix(mix(a,b,f.x), mix(c,e,f.x), f.y); }
        float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
        void main() {
          vec3 d = normalize(vDir);
          float h = max(d.y, 0.0);
          vec3 col = mix(uHorizon, uZenith, pow(h, 0.55));
          // below the horizon: the sea haze
          col = mix(col, uHorizon * 0.92, smoothstep(0.0, -0.08, d.y));
          float sd = max(dot(d, uSunDir), 0.0);
          col += uSunColor * (pow(sd, 6.0) * 0.18 + pow(sd, 90.0) * 0.5) * (1.0 - uNight);
          col += uSunColor * smoothstep(0.9995, 0.99975, sd) * 3.0 * (1.0 - uNight);
          // stars
          vec3 sp = floor(d * 260.0);
          float st = step(0.9975, hash(sp)) * smoothstep(0.05, 0.3, d.y);
          col += vec3(st) * uNight * 0.9;
          // the moon, with its phase: it is the tide's clock
          float md = dot(d, uMoonDir);
          if (md > 0.9993) {
            vec3 up = abs(uMoonDir.y) > 0.99 ? vec3(1,0,0) : vec3(0,1,0);
            vec3 mx = normalize(cross(up, uMoonDir));
            vec3 my = cross(uMoonDir, mx);
            vec3 rel = d - uMoonDir;
            vec2 uv = vec2(dot(rel, mx), dot(rel, my)) / 0.0374;
            float r2 = dot(uv, uv);
            if (r2 < 1.0) {
              vec3 n = vec3(uv, sqrt(1.0 - r2));
              vec3 L = vec3(sin(uMoonPhase), 0.0, -cos(uMoonPhase));
              float lit = smoothstep(-0.05, 0.1, dot(n, L));
              vec3 moonCol = vec3(0.95, 0.93, 0.85) * (0.12 + 0.88 * lit);
              col = mix(col, moonCol * mix(0.9, 1.4, uNight), smoothstep(1.0, 0.85, r2));
            }
          }
          col += uMoonDir.y > 0.0 ? vec3(0.6,0.7,0.9) * pow(max(md, 0.0), 300.0) * 0.25 * uNight : vec3(0.0);
          // fair-weather cloud streaks always; a low racing deck as the gale sets in
          vec2 cp = d.xz / max(d.y + 0.12, 0.05);
          float cl = vn3(cp * 1.3 + vec2(uTime * 0.01, 0.0)) * 0.6 + vn3(cp * 3.7 - vec2(uTime * 0.02, uTime * 0.005)) * 0.4;
          float fair = smoothstep(0.62, 0.9, cl) * smoothstep(0.0, 0.25, d.y) * 0.35;
          float deck = smoothstep(0.25 - uStorm * 0.3, 0.75, vn3(cp * 2.2 + vec2(uTime * 0.09, uTime * 0.03)) * 0.55 + cl * 0.45);
          vec3 cloudLit = mix(uHorizon, vec3(1.0), 0.35) * (1.0 - uNight * 0.75);
          col = mix(col, cloudLit, fair * (1.0 - uStorm));
          col = mix(col, uZenith * 0.72 + uHorizon * 0.12, deck * uStorm * smoothstep(-0.05, 0.12, d.y));
          col += vec3(0.75, 0.8, 0.95) * uFlash * (0.4 + 0.6 * deck);
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    });
    this.sky = new THREE.Mesh(geo, mat);
    this.sky.frustumCulled = false;
    this.sky.renderOrder = -10;
    this.scene.add(this.sky);
  }

  // ------------------------------------------------------------ terrain
  buildTerrain() {
    const { h } = this.world;
    const n = W * H;
    const pos = new Float32Array(n * 3);
    for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
      const k = j * W + i;
      pos[k * 3] = wx(i); pos[k * 3 + 1] = h[k]; pos[k * 3 + 2] = wz(j);
    }
    const idx = new Uint32Array((W - 1) * (H - 1) * 6);
    let p = 0;
    for (let j = 0; j < H - 1; j++) for (let i = 0; i < W - 1; i++) {
      const a = j * W + i, b = a + 1, c = a + W, d = c + 1;
      // alternate the diagonal so channels do not look stair-stepped one way
      if ((i + j) & 1) { idx[p++] = a; idx[p++] = c; idx[p++] = b; idx[p++] = b; idx[p++] = c; idx[p++] = d; }
      else { idx[p++] = a; idx[p++] = c; idx[p++] = d; idx[p++] = a; idx[p++] = d; idx[p++] = b; }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    geo.setAttribute('aWet', new THREE.BufferAttribute(new Float32Array(n), 1));
    geo.setIndex(new THREE.BufferAttribute(idx, 1));
    this.tGeo = geo;
    this.baseCol = new Float32Array(n * 3);
    this.recomputeTerrain(0, 0, W - 1, H - 1);

    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0 });
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.uTime = this.uniforms.uTime;
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nattribute float aWet;\nvarying float vWet;\nvarying vec3 vWPos;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWet = aWet;\nvWPos = (modelMatrix * vec4(position,1.0)).xyz;');
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', `#include <common>
          varying float vWet; varying vec3 vWPos; uniform float uTime;
          float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
          float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
            return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }`)
        .replace('#include <color_fragment>', `#include <color_fragment>
          float g = vn(vWPos.xz * 2.3) * 0.6 + vn(vWPos.xz * 7.1) * 0.4;
          float rip = sin(vWPos.x * 3.1 + vn(vWPos.xz * 0.6) * 6.0) * 0.5 + 0.5;
          diffuseColor.rgb *= 0.86 + 0.24 * g + 0.05 * rip * vWet;
          // close up, grass breaks into brush strokes and mud into speckle; far off both fade out
          float grassy = smoothstep(0.0, 0.03, diffuseColor.g - max(diffuseColor.r * 0.82, diffuseColor.b * 1.4)) * (1.0 - vWet);
          vec2 q = mat2(0.8, -0.6, 0.6, 0.8) * vWPos.xz;
          float stroke = vn(q * vec2(7.0, 1.9)) * 0.6 + vn(q * vec2(15.0, 3.5)) * 0.4;
          float fine = 1.0 - smoothstep(0.15, 0.6, fwidth(q.x * 7.0));
          diffuseColor.rgb *= 1.0 + fine * (grassy * (stroke - 0.5) * 0.42 + (1.0 - grassy) * (vn(vWPos.xz * 11.0) - 0.5) * 0.14);
          diffuseColor.rgb += fine * grassy * smoothstep(0.78, 0.95, stroke) * vec3(0.05, 0.045, 0.01);`)
        .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
          // salt crust glints: it is the brightest thing on the marsh
          float lum = dot(diffuseColor.rgb, vec3(0.333));
          float saltK = smoothstep(0.6, 0.8, lum);
          float glint = step(0.985, h21(floor(vWPos.xz * 7.0) + floor(uTime * 2.5)));
          totalEmissiveRadiance += diffuseColor.rgb * saltK * (0.18 + 1.6 * glint);`)
        .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
          roughnessFactor = mix(0.97, 0.82, smoothstep(0.35, 1.0, vWet));`);
    };
    this.terrain = new THREE.Mesh(geo, mat);
    this.terrain.receiveShadow = true;
    this.scene.add(this.terrain);
  }

  baseColorAt(i, j, out) {
    const { h, kind, noise } = this.world;
    const k = j * W + i;
    const y = h[k], kd = kind[k];
    const nz = noise(i * 0.11, j * 0.11) * 0.5 + 0.5;
    const nz2 = noise(i * 0.31 + 50, j * 0.31) * 0.5 + 0.5;
    if (kd === 3) { out.copy(P.clay).multiplyScalar(0.92 + nz2 * 0.12); return; }
    if (kd === 4) { out.copy(P.panFloor); return; }
    if (kd === 6) { out.copy(P.sand).lerp(P.bankDug, nz * 0.25); return; }
    if (kd === 5) { out.copy(P.village).lerp(P.marshHigh, nz * 0.35); return; }
    if (kd === 2) { out.copy(P.bankDug); return; }
    // natural ground by height
    if (y < 0.55) {
      out.copy(P.mudDeep).lerp(P.mud, smoothstep(-2.2, 0.3, y));
      const coast = this.world.coastJ(i);
      out.lerp(P.sand, smoothstep(coast + 2, coast + 12, j) * smoothstep(-1.6, 0.0, y) * 0.8);
    } else if (y < 1.0) {
      out.copy(P.mud).lerp(P.marshLow, smoothstep(0.55, 1.0, y) * (0.6 + nz * 0.4));
    } else if (y < 2.0) {
      const big = noise(i * 0.028 + 20, j * 0.028 - 7) * 0.5 + 0.5;
      out.copy(P.marshLow).lerp(P.marshHigh, smoothstep(1.0, 1.5, y + nz * 0.3));
      out.lerp(P.marshGold, nz2 * 0.25 + smoothstep(0.55, 0.85, big) * 0.45);
      out.lerp(P.gorse, smoothstep(0.4, 0.15, big) * 0.45);
      if (nz2 > 0.78 && y < 1.45) out.lerp(P.lavender, (nz2 - 0.78) * 2.2);
    } else {
      out.copy(P.marshHigh).lerp(P.hill, smoothstep(2.0, 3.0, y));
      if (nz > 0.66) out.lerp(P.gorse, smoothstep(0.66, 0.85, nz) * 0.8);
    }
  }

  recomputeTerrain(i0, j0, i1, j1) {
    const { h } = this.world;
    const pos = this.tGeo.attributes.position.array;
    const nor = this.tGeo.attributes.normal.array;
    i0 = Math.max(0, i0); j0 = Math.max(0, j0); i1 = Math.min(W - 1, i1); j1 = Math.min(H - 1, j1);
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const k = j * W + i;
      pos[k * 3 + 1] = h[k];
      const hl = h[j * W + Math.max(0, i - 1)], hr = h[j * W + Math.min(W - 1, i + 1)];
      const hu = h[Math.max(0, j - 1) * W + i], hd = h[Math.min(H - 1, j + 1) * W + i];
      let nx = hl - hr, ny = 2, nz = hu - hd;
      const l = Math.hypot(nx, ny, nz);
      nor[k * 3] = nx / l; nor[k * 3 + 1] = ny / l; nor[k * 3 + 2] = nz / l;
      this.baseColorAt(i, j, tmpA);
      this.baseCol[k * 3] = tmpA.r; this.baseCol[k * 3 + 1] = tmpA.g; this.baseCol[k * 3 + 2] = tmpA.b;
    }
    this.tGeo.attributes.position.needsUpdate = true;
    this.tGeo.attributes.normal.needsUpdate = true;
    this.tGeo.computeBoundingSphere();
  }

  // Per frame: wet darkening and salt crust. Inside the sim it reads the grid;
  // outside it reads the tide directly.
  shadeTerrain(sim, tide, saltAt, full) {
    const col = this.tGeo.attributes.color.array;
    const wetA = this.tGeo.attributes.aWet.array;
    const { h } = this.world;
    const base = this.baseCol;
    const darken = (k, w) => {
      const f = 1 - 0.42 * w;
      col[k * 3] = base[k * 3] * f; col[k * 3 + 1] = base[k * 3 + 1] * f; col[k * 3 + 2] = base[k * 3 + 2] * (f + 0.03 * w);
      wetA[k] = w;
    };
    if (full) {
      for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
        if (i >= SX && i < SX + SN && j >= SZ && j < SZ + SN) continue;
        const k = j * W + i;
        darken(k, smoothstep(tide + 0.25, tide - 0.02, h[k]));
      }
    }
    for (let j = 0; j < SN; j++) for (let i = 0; i < SN; i++) {
      const s = j * SN + i;
      const k = (SZ + j) * W + SX + i;
      darken(k, sim.wet[s]);
      const mud = Math.min(0.8, (this.world.silt?.[k] || 0) * 1.8);
      if (mud > 0) {
        col[k * 3] = lerp(col[k * 3], P.mud.r, mud);
        col[k * 3 + 1] = lerp(col[k * 3 + 1], P.mud.g, mud);
        col[k * 3 + 2] = lerp(col[k * 3 + 2], P.mud.b, mud);
      }
      const salt = saltAt(s);
      if (salt > 0) {
        const patch = this.world.noise((SX + i) * 0.45, (SZ + j) * 0.45) * 0.5 + 0.5;
        const a = clamp(salt * 1.5 - patch * 0.25, 0, 1) * (1 - 0.6 * smoothstep(0.02, 0.12, sim.d[s]));
        col[k * 3] = lerp(col[k * 3], P.salt.r, a);
        col[k * 3 + 1] = lerp(col[k * 3 + 1], P.salt.g, a);
        col[k * 3 + 2] = lerp(col[k * 3 + 2], P.salt.b, a);
        wetA[k] = Math.max(wetA[k], a * 0.7);
      }
    }
    this.tGeo.attributes.color.needsUpdate = true;
    this.tGeo.attributes.aWet.needsUpdate = true;
  }

  // -------------------------------------------------------------- water
  waterShader(isSea) {
    return new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: { ...this.uniforms, uHeight: { value: null } },
      vertexShader: /* glsl */`
        ${isSea ? '' : 'attribute float aDepth; attribute vec2 aFlow; attribute float aBrine;'}
        varying float vDepth; varying vec2 vFlow; varying float vBrine; varying vec3 vWPos;
        ${isSea ? 'uniform sampler2D uHeight; uniform float uTide;' : ''}
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          ${isSea ? `
            wp.y = uTide;
            vec2 uv = (wp.xz + vec2(${W / 2}.0, ${H / 2}.0) + 0.5) / vec2(${W}.0, ${H}.0);
            float bed = (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) ? -5.0 : texture2D(uHeight, uv).r;
            vDepth = uTide - bed; vFlow = vec2(0.0); vBrine = -1.0;` : `
            vDepth = aDepth; vFlow = aFlow; vBrine = aBrine;`}
          vWPos = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }`,
      fragmentShader: /* glsl */`
        uniform vec3 uSunDir, uSunColor, uZenith, uHorizon, uFogColor;
        uniform float uTime, uNight, uFogNear, uFogFar, uStorm, uFlash;
        ${isSea ? 'uniform sampler2D uHeight; uniform float uTide;' : ''}
        varying float vDepth; varying vec2 vFlow; varying float vBrine; varying vec3 vWPos;
        float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
        float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
          return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
        float waves(vec2 p) {
          vec2 fl = clamp(vFlow, -2.0, 2.0) * 0.6;
          float ph = fract(uTime * 0.1);
          p += vec2(uTime * 1.6, uTime * 0.7) * uStorm;
          return vn(p * 0.9 + vec2(uTime * 0.21, uTime * 0.13) - fl * ph * 6.0) * 0.5
               + vn(p * 2.3 - vec2(uTime * 0.17, -uTime * 0.29)) * 0.3
               + vn(p * 5.7 + vec2(uTime * 0.4, uTime * 0.05)) * 0.2;
        }
        void main() {
          ${isSea ? `
          vec2 uvh = (vWPos.xz + vec2(${W / 2}.0, ${H / 2}.0) + 0.5) / vec2(${W}.0, ${H}.0);
          float depth = vDepth;
          if (uvh.x >= 0.0 && uvh.x <= 1.0 && uvh.y >= 0.0 && uvh.y <= 1.0) depth = uTide - texture2D(uHeight, uvh).r;
          vec2 rel = vWPos.xz - vec2(${wx(SX)}.0, ${wz(SZ)}.0);
          if (rel.x > 0.5 && rel.y > 0.5 && rel.x < ${SN - 1.5} && rel.y < ${SN - 1.5}) discard;
          if (depth <= 0.0) discard;` : `
          float depth = vDepth;
          if (depth <= 0.002) discard;`}
          vec2 p = vWPos.xz;
          float e = 0.15;
          float w0 = waves(p);
          float panWater = smoothstep(-0.2, 0.0, vBrine);
          float amp = (0.32 + 0.9 * uStorm * (1.0 - panWater)) * smoothstep(0.0, 0.5, depth) + 0.05;
          vec3 n = normalize(vec3((waves(p - vec2(e, 0.0)) - waves(p + vec2(e, 0.0))) * amp, 1.0,
                                  (waves(p - vec2(0.0, e)) - waves(p + vec2(0.0, e))) * amp));
          vec3 V = normalize(cameraPosition - vWPos);
          float fres = pow(1.0 - max(dot(n, V), 0.0), 4.0);
          float dd = smoothstep(0.0, 2.2, depth);
          vec3 shallow = vec3(${P.waterShallow.r.toFixed(4)}, ${P.waterShallow.g.toFixed(4)}, ${P.waterShallow.b.toFixed(4)});
          vec3 deep = vec3(${P.waterDeep.r.toFixed(4)}, ${P.waterDeep.g.toFixed(4)}, ${P.waterDeep.b.toFixed(4)});
          vec3 brine = vec3(${P.brine.r.toFixed(4)}, ${P.brine.g.toFixed(4)}, ${P.brine.b.toFixed(4)});
          vec3 col = mix(shallow, deep, dd);
          // Still brine is translucent green, becoming rose as it concentrates.
          col = mix(col, shallow * 0.55 + deep * 0.45, panWater * 0.8);
          col = mix(col, brine, clamp(vBrine, 0.0, 1.0) * 0.5);
          col *= 1.0 + panWater * (w0 - 0.5) * 0.22;
          float light = 0.35 + 0.65 * max(uSunDir.y, 0.0) + 0.22 * uNight;
          vec3 lit = mix(vec3(0.38, 0.45, 0.62), uSunColor * 0.55 + 0.45, smoothstep(-0.05, 0.15, uSunDir.y)) * light + 0.08 + 0.05 * uNight;
          col *= lit;
          vec3 sky = mix(uHorizon, uZenith, 0.35);
          col = mix(col, sky, fres * 0.75);
          vec3 R = reflect(-V, n);
          float spec = pow(max(dot(R, uSunDir), 0.0), 180.0) * 3.0 + pow(max(dot(R, uSunDir), 0.0), 18.0) * 0.18;
          col += uSunColor * spec * mix(1.0, 0.25, panWater) * (1.0 - uNight) * (1.0 - 0.85 * uStorm) * step(0.0, uSunDir.y);
          // foam on the shallow edge and where the water runs fast
          float speed = length(vFlow);
          // a lace of foam only on the moving edge; a thin film just reads as wet
          float edge = smoothstep(0.004, 0.02, depth) * (1.0 - smoothstep(0.05, 0.16, depth));
          float lace = smoothstep(0.3, 0.7, vn(p * 4.0 + uTime * 0.3) * 0.65 + vn(p * 11.0 - uTime * 0.2) * 0.35);
          // a second, broken line further out that breathes in and out with the wavelets
          float swash = 0.5 + 0.5 * sin(depth * 38.0 - uTime * 1.7 + vn(p * 0.7) * 6.0);
          float outer = smoothstep(0.08, 0.14, depth) * (1.0 - smoothstep(0.2, 0.32, depth)) * smoothstep(0.7, 0.95, swash) * lace;
          // fast water churns white: over a weir, through an open sluice, past a mill wheel
          vec2 drift = vFlow * fract(uTime * 0.25) * 4.0;
          float churn = vn(p * 3.0 - drift) * 0.6 + vn(p * 7.5 - drift * 1.7 + uTime * 0.5) * 0.4;
          float streak = smoothstep(0.64, 0.90, churn) * smoothstep(0.8, 2.0, speed) * 0.5;
          float caps = smoothstep(0.7, 0.86, vn(p * vec2(0.3, 0.9) + vec2(uTime * 0.8, uTime * 0.35)) * 0.5 + vn(p * vec2(1.2, 3.0) + vec2(uTime * 1.3, 0.0)) * 0.2 + w0 * 0.3) * smoothstep(0.4, 1.5, depth) * uStorm * 0.75;
          ${isSea ? `
          float surf = smoothstep(0.75, 0.97, 0.5 + 0.5 * sin(depth * 5.0 + uTime * 1.25 + vn(p * 0.15) * 5.0)) * (1.0 - smoothstep(0.25, 1.6 + uStorm * 2.0, depth));
          outer = max(outer, surf * lace * (0.14 + 0.45 * uStorm)); // flooded marsh stays water, not white patches` : ''}
          float foam = clamp(edge * lace * ${isSea ? '0.4' : '0.95'} + outer * 0.55 + streak * 0.6 + caps * 0.8, 0.0, 1.0);
          vec3 foamCol = vec3(0.95, 0.93, 0.88) * min(vec3(1.0), lit * 1.25);
          col = mix(col, foamCol, foam * 0.85 * (1.0 - panWater));
          float alpha = mix(0.5, 0.93, smoothstep(0.0, 1.2, depth));
          alpha = max(alpha, foam * 0.7) * smoothstep(0.0, 0.05, depth);
          alpha = mix(alpha, 1.0, fres * 0.4);
          alpha = mix(alpha, max(alpha, 0.82) * smoothstep(0.0, 0.03, depth), panWater);
          col += vec3(0.6, 0.65, 0.8) * uFlash * 0.35;
          float fd = length(cameraPosition - vWPos);
          col = mix(col, uFogColor, smoothstep(uFogNear, uFogFar, fd));
          gl_FragColor = vec4(col, alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    });
  }

  buildWater() {
    const n = SN * SN;
    const pos = new Float32Array(n * 3);
    for (let j = 0; j < SN; j++) for (let i = 0; i < SN; i++) {
      const k = j * SN + i;
      pos[k * 3] = wx(SX + i); pos[k * 3 + 2] = wz(SZ + j);
    }
    const idx = new Uint32Array((SN - 1) * (SN - 1) * 6);
    let p = 0;
    for (let j = 0; j < SN - 1; j++) for (let i = 0; i < SN - 1; i++) {
      const a = j * SN + i, b = a + 1, c = a + SN, d = c + 1;
      if ((SX + i + SZ + j) & 1) { idx[p++] = a; idx[p++] = c; idx[p++] = b; idx[p++] = b; idx[p++] = c; idx[p++] = d; }
      else { idx[p++] = a; idx[p++] = c; idx[p++] = d; idx[p++] = a; idx[p++] = d; idx[p++] = b; }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('aDepth', new THREE.BufferAttribute(new Float32Array(n), 1));
    geo.setAttribute('aFlow', new THREE.BufferAttribute(new Float32Array(n * 2), 2));
    geo.setAttribute('aBrine', new THREE.BufferAttribute(new Float32Array(n), 1));
    geo.setIndex(new THREE.BufferAttribute(idx, 1));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(wx(SX + SN / 2), 0, wz(SZ + SN / 2)), SN);
    this.wGeo = geo;
    this.water = new THREE.Mesh(geo, this.waterShader(false));
    this.water.renderOrder = 2;
    this.water.frustumCulled = false;
    this.scene.add(this.water);
  }

  updateWater(sim, brineAt) {
    const pos = this.wGeo.attributes.position.array;
    const dep = this.wGeo.attributes.aDepth.array;
    const flo = this.wGeo.attributes.aFlow.array;
    const bri = this.wGeo.attributes.aBrine.array;
    const { b, d, vx, vz } = sim;
    for (let j = 0; j < SN; j++) for (let i = 0; i < SN; i++) {
      const k = j * SN + i;
      let y;
      if (d[k] > 0.004) { y = b[k] + d[k]; dep[k] = d[k]; }
      else {
        // a dry vertex borrows the level of its wettest neighbour so the
        // shoreline is cut cleanly by the bank instead of sloping into it
        let m = -1e9;
        if (i > 0 && d[k - 1] > 0.004) m = Math.max(m, b[k - 1] + d[k - 1]);
        if (i < SN - 1 && d[k + 1] > 0.004) m = Math.max(m, b[k + 1] + d[k + 1]);
        if (j > 0 && d[k - SN] > 0.004) m = Math.max(m, b[k - SN] + d[k - SN]);
        if (j < SN - 1 && d[k + SN] > 0.004) m = Math.max(m, b[k + SN] + d[k + SN]);
        y = m > -1e8 ? Math.min(m, b[k] + 0.02) : b[k] - 0.4;
        dep[k] = m > -1e8 ? Math.max(0, m - b[k]) * 0.5 : 0;
      }
      pos[k * 3 + 1] = y;
      flo[k * 2] = vx[k]; flo[k * 2 + 1] = vz[k];
      bri[k] = brineAt(k);
    }
    this.wGeo.attributes.position.needsUpdate = true;
    this.wGeo.attributes.aDepth.needsUpdate = true;
    this.wGeo.attributes.aFlow.needsUpdate = true;
    this.wGeo.attributes.aBrine.needsUpdate = true;
  }

  buildSea() {
    const tex = new THREE.DataTexture(this.world.h, W, H, THREE.RedFormat, THREE.FloatType);
    tex.magFilter = THREE.LinearFilter; tex.minFilter = THREE.LinearFilter;
    tex.needsUpdate = true;
    this.heightTex = tex;
    const geo = new THREE.PlaneGeometry(3600, 3600, 1, 1).rotateX(-Math.PI / 2);
    const mat = this.waterShader(true);
    mat.uniforms.uHeight.value = tex;
    mat.uniforms.uTide = this.uniforms.uTide;
    this.sea = new THREE.Mesh(geo, mat);
    this.sea.renderOrder = 1;
    this.sea.frustumCulled = false;
    this.scene.add(this.sea);
  }

  // ------------------------------------------------------------- light
  updateLight(t, focus, motionTime = t) {
    const s = sunState(t);
    const u = this.uniforms;
    u.uTime.value = motionTime % 400;
    const elev = s.dayFrac >= 0 && s.dayFrac <= 1 ? s.elev : -Math.min(0.35, Math.min(Math.abs(s.dayFrac), Math.abs(s.dayFrac - 1)) * 1.4);
    const az = s.az + Math.PI * 0.62;
    const dir = new THREE.Vector3(Math.cos(elev) * Math.sin(az), Math.sin(elev), Math.cos(elev) * Math.cos(az)).normalize();
    // keep a little light above the horizon so night stays legible
    u.uSunDir.value.copy(dir);
    let a = 0;
    while (a < SKY.length - 2 && elev > SKY[a + 1][0]) a++;
    const k0 = SKY[a], k1 = SKY[a + 1];
    const f = clamp((elev - k0[0]) / (k1[0] - k0[0]), 0, 1);
    u.uZenith.value.set(k0[1]).lerp(tmpA.set(k1[1]), f);
    u.uHorizon.value.set(k0[2]).lerp(tmpA.set(k1[2]), f);
    u.uSunColor.value.set(k0[3]).lerp(tmpA.set(k1[3]), f);
    // the storm grade: slate cloud, green-grey haze, a cold flat light
    const storm = weather(t);
    u.uStorm.value = storm;
    const dark = 1 - 0.62 * smoothstep(0.12, -0.18, elev); // a storm night stays a night
    u.uZenith.value.lerp(tmpA.set('#2c3a44').multiplyScalar(dark), storm * 0.9);
    u.uHorizon.value.lerp(tmpA.set('#6f7d78').multiplyScalar(dark), storm * 0.85);
    u.uSunColor.value.lerp(tmpA.set('#b9c9cc'), storm * 0.75);
    // lightning in the heart of the gale: brief double flashes, a few seconds apart
    const now = motionTime;
    const slot = Math.floor(now / 3.7), ph = now - slot * 3.7, rnd = Math.abs(Math.sin(slot * 91.7) * 4375.85) % 1;
    const flash = storm > 0.7 && rnd < 0.45 ? Math.max(0, 1 - ph / 0.12) + Math.max(0, 1 - Math.abs(ph - 0.25) / 0.1) * 0.7 : 0;
    u.uFlash.value = flash * (storm - 0.7) / 0.3;
    const sunI = lerp(k0[4], k1[4], f);
    const amb = lerp(k0[5], k1[5], f);
    // Keep moon fill through twilight, when the low sun cannot light the banks.
    const night = smoothstep(0.12, -0.18, elev);
    u.uNight.value = night;
    this.scene.fog.color.copy(u.uHorizon.value).lerp(u.uZenith.value, 0.15 + storm * 0.2);
    this.scene.fog.near = lerp(120, 30, storm); this.scene.fog.far = lerp(520, 230, storm);
    u.uFogNear.value = this.scene.fog.near; u.uFogFar.value = this.scene.fog.far;
    this.r.setClearColor(this.scene.fog.color);

    this.sun.color.copy(u.uSunColor.value);
    this.sun.intensity = sunI * (1 - storm * 0.78);
    this.sun.position.set(focus.x + dir.x * 160, Math.max(dir.y, 0.05) * 160, focus.z + dir.z * 160);
    this.sun.target.position.set(focus.x, 0, focus.z);
    this.sun.visible = sunI > 0.01;
    // Cool sky fill keeps timber controls readable between sunset and moonrise.
    const cloudFill = storm * smoothstep(0.2, -0.08, elev);
    this.hemi.color.copy(u.uZenith.value).lerp(tmpA.set('#ffffff'), 0.35 + 0.25 * night + 0.15 * cloudFill);
    this.hemi.groundColor.set('#5f523e').multiplyScalar(0.6 + 0.4 * (1 - night));
    this.hemi.intensity = (amb * 1.05 + night * 0.75) * (1 - storm * 0.12) + storm * night * 0.15 + cloudFill * 0.45 + u.uFlash.value * 1.6;

    // the moon: high water when it is overhead or underfoot
    const mh = (2 * Math.PI * (t / DAY - HW_HOUR / 24));
    const mElev = Math.cos(mh) * 0.95;
    const mAz = Math.PI * 0.62 + Math.sin(mh) * 1.4;
    u.uMoonDir.value.set(Math.cos(mElev) * Math.sin(mAz), Math.sin(mElev), Math.cos(mElev) * Math.cos(mAz)).normalize();
    u.uMoonPhase.value = moonPhase(t);
    const moonUp = smoothstep(-0.05, 0.2, u.uMoonDir.value.y);
    const fullness = 0.5 - 0.5 * Math.cos(moonPhase(t));
    // a night is always legible: some sky light even with the moon down, more under a full moon
    this.moonLight.intensity = night * (0.45 + moonUp * (0.4 + 0.6 * fullness)) + cloudFill * 0.4;
    const md = u.uMoonDir.value;
    this.moonLight.position.set(focus.x + md.x * 150, Math.max(md.y, 0.1 + cloudFill * 0.35) * 150, focus.z + md.z * 150);
    this.moonLight.target.position.set(focus.x, 0, focus.z);
    this.r.toneMappingExposure = 1.0 + night * 0.5;
    return { elev, night };
  }

  resize(w, h) {
    this.lastSize = [w, h];
    this.r.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  // q: one entry of QUALITY (settings.js). Resolution cap and the sun's shadow map; particle caps are set by main.js.
  setQuality(q) {
    this.pixelCap = q.pixel;
    this.r.setPixelRatio(Math.min(window.devicePixelRatio || 1, q.pixel));
    this.sun.castShadow = q.shadow > 0;
    if (q.shadow > 0 && this.sun.shadow.mapSize.x !== q.shadow) {
      this.sun.shadow.mapSize.set(q.shadow, q.shadow);
      if (this.sun.shadow.map) { this.sun.shadow.map.dispose(); this.sun.shadow.map = null; }
    }
    if (this.lastSize) this.resize(this.lastSize[0], this.lastSize[1]);
  }

  render() { this.r.render(this.scene, this.camera); }
}
