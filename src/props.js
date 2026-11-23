// Everything in the world is built in code from a few shapes and the one palette.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { P } from './palette.js';
import { W, H, wx, wz, ci, cj } from './world.js';
import { mulberry32, smoothstep } from './noise.js';

const std = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.9, metalness: 0, flatShading: true, ...extra });
export const MAT = {
  timber: std(P.timber),
  timberLight: std(P.timberLight),
  tar: std(P.tar),
  limewash: std(P.limewash),
  ochre: std(P.ochre),
  thatch: std(P.thatch),
  // hulls and sails carry a faint self-light at night (set in main.js) so a boat never becomes a black cut-out
  hull: std('#5b4733', { emissive: '#5b4733' }),
  sail: std(P.sail, { side: THREE.DoubleSide, emissive: P.sail }),
  sailOchre: std(P.sailOchre, { side: THREE.DoubleSide, emissive: P.sailOchre }),
  iron: std(P.iron, { roughness: 0.6 }),
  window: new THREE.MeshStandardMaterial({ color: '#2a2622', emissive: '#ffb45a', emissiveIntensity: 0, roughness: 0.5 }),
  salt: std(P.salt, { roughness: 0.6 }),
  fish: new THREE.MeshStandardMaterial({ color: '#b9c3c4', roughness: 0.3, metalness: 0.4, flatShading: true }),
};

export function heightAt(world, x, z) {
  const fi = x + W / 2, fj = z + H / 2;
  const i = Math.max(0, Math.min(W - 2, Math.floor(fi))), j = Math.max(0, Math.min(H - 2, Math.floor(fj)));
  const u = Math.min(1, Math.max(0, fi - i)), v = Math.min(1, Math.max(0, fj - j));
  const h = world.h;
  const a = h[j * W + i], b = h[j * W + i + 1], c = h[(j + 1) * W + i], d = h[(j + 1) * W + i + 1];
  return a * (1 - u) * (1 - v) + b * u * (1 - v) + c * (1 - u) * v + d * u * v;
}

const box = (w, h, d, x = 0, y = 0, z = 0) => new THREE.BoxGeometry(w, h, d).translate(x, y, z);
const cyl = (r0, r1, h, seg, x = 0, y = 0, z = 0) => new THREE.CylinderGeometry(r0, r1, h, seg).translate(x, y, z);

function roofGeo(w, d, rise) {
  // a gable prism along x
  const s = new THREE.Shape();
  s.moveTo(-d / 2 - 0.15, 0); s.lineTo(0, rise); s.lineTo(d / 2 + 0.15, 0); s.lineTo(-d / 2 - 0.15, 0);
  const g = new THREE.ExtrudeGeometry(s, { depth: w + 0.3, bevelEnabled: false });
  g.translate(0, 0, -(w + 0.3) / 2).rotateY(Math.PI / 2);
  return g;
}

// ----------------------------------------------------------------- houses
export function buildVillage(world, scene) {
  const rnd = mulberry32(world.seed ^ 0x77);
  const group = new THREE.Group();
  const placed = [];
  const { village } = world;
  const houses = [];
  for (let tries = 0; tries < 200 && placed.length < 10; tries++) {
    const a = rnd() * Math.PI * 2, r = 3 + rnd() * 9;
    const x = village.x + Math.cos(a) * r, z = village.z + Math.sin(a) * r * 0.8;
    if (placed.some((p) => Math.hypot(p.x - x, p.z - z) < 4.6)) continue;
    const y = heightAt(world, x, z);
    if (y < 1.7) continue;
    placed.push({ x, z });
    const type = placed.length % 3;
    const w = 3 + rnd() * 1.6, d = 2.2 + rnd() * 0.6, hh = 1.6 + rnd() * 0.5;
    const g = new THREE.Group();
    const wallMat = type === 1 ? MAT.tar : MAT.limewash;
    const roofMat = type === 0 ? MAT.thatch : MAT.ochre;
    const walls = new THREE.Mesh(box(w, hh, d, 0, hh / 2, 0), wallMat);
    const roof = new THREE.Mesh(roofGeo(w, d, 1.2 + rnd() * 0.4).translate(0, hh, 0), roofMat);
    const plinth = new THREE.Mesh(box(w + 0.2, 0.5, d + 0.2, 0, -0.15, 0), MAT.timber);
    const win = new THREE.Mesh(mergeGeometries([
      box(0.45, 0.45, 0.06, -w * 0.25, hh * 0.55, d / 2 + 0.01),
      box(0.45, 0.45, 0.06, w * 0.22, hh * 0.55, d / 2 + 0.01),
      box(0.45, 0.45, 0.06, 0, hh * 0.55, -d / 2 - 0.01),
    ]), MAT.window);
    const door = new THREE.Mesh(box(0.6, 1.0, 0.08, w * 0.02, 0.5, d / 2 + 0.02), MAT.timber);
    g.add(walls, roof, plinth, win, door);
    if (type !== 1) g.add(new THREE.Mesh(box(0.4, 1.0, 0.4, w * 0.35, hh + 0.9, 0), MAT.limewash));
    g.position.set(x, y, z);
    // face the creek head, roughly
    g.rotation.y = Math.atan2(world.main[world.main.length - 1][0] - x, world.main[world.main.length - 1][1] - z) + (rnd() - 0.5) * 0.5;
    g.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } });
    group.add(g);
    houses.push(g);
  }

  // the quay at the creek head: a deck on posts
  const head = world.main[world.main.length - 6];
  const prev = world.main[world.main.length - 14];
  const ang = Math.atan2(head[0] - prev[0], head[1] - prev[1]);
  const quay = new THREE.Group();
  const deckGeo = [];
  for (let s = 0; s < 6; s++) deckGeo.push(box(0.5, 0.12, 2.6, 0, 0, s * 0.55));
  const deck = new THREE.Mesh(mergeGeometries(deckGeo).rotateY(Math.PI / 2), MAT.timberLight);
  quay.add(deck);
  for (let s = 0; s < 4; s++) for (const sx of [-1.2, 1.2]) {
    const pst = new THREE.Mesh(cyl(0.12, 0.14, 3.2, 6), MAT.timber);
    pst.position.set(s * 0.9, -1.4, sx);
    quay.add(pst);
  }
  quay.position.set(head[0] + 1.5, 1.9, head[1]);
  quay.rotation.y = ang;
  quay.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } });
  group.add(quay);
  scene.add(group);
  return { group, houses, quay };
}

// ------------------------------------------------------------------ boats
export function makeBoat(sailMat = MAT.sail) {
  const g = new THREE.Group();
  // hull: a lofted shape from a few sections
  const L = 5.2, B = 1.6, D = 0.9;
  const shape = new THREE.Shape();
  shape.moveTo(-L / 2, 0);
  shape.quadraticCurveTo(-L / 2 + 0.6, B / 2, 0, B / 2);
  shape.quadraticCurveTo(L / 2 - 0.4, B / 2, L / 2, 0);
  shape.quadraticCurveTo(L / 2 - 0.4, -B / 2, 0, -B / 2);
  shape.quadraticCurveTo(-L / 2 + 0.6, -B / 2, -L / 2, 0);
  const hullG = new THREE.ExtrudeGeometry(shape, { depth: D, bevelEnabled: true, bevelThickness: 0.25, bevelSize: 0.18, bevelSegments: 2, steps: 1, curveSegments: 10 });
  hullG.rotateX(Math.PI / 2).translate(0, 0.35, 0);
  const pos = hullG.attributes.position;
  for (let v = 0; v < pos.count; v++) {
    const y = pos.getY(v);
    if (y < 0) { pos.setX(v, pos.getX(v) * 0.85); pos.setZ(v, pos.getZ(v) * 0.55); }
  }
  hullG.computeVertexNormals();
  const hull = new THREE.Mesh(hullG, MAT.hull);
  const strake = new THREE.Mesh(box(L * 0.82, 0.12, B * 0.98, 0, 0.36, 0), MAT.ochre);
  const mast = new THREE.Mesh(cyl(0.06, 0.08, 5.2, 6, 0.5, 2.9, 0), MAT.timber);
  const sailShape = new THREE.Shape();
  sailShape.moveTo(0, 0); sailShape.lineTo(2.6, 0.2); sailShape.lineTo(2.1, 3.6); sailShape.lineTo(0, 4.3); sailShape.lineTo(0, 0);
  const sail = new THREE.Mesh(new THREE.ShapeGeometry(sailShape).translate(-2.4, 0, 0).rotateY(Math.PI), sailMat);
  // Furl around the boom, rather than scaling the boom down into the hull.
  sail.position.set(0.5, 0.9, 0);
  g.add(hull, strake, mast, sail);
  g.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } });
  g.userData.sail = sail;
  return g;
}

// ------------------------------------------------------------------ reeds
export function buildReeds(world, scene, count = 9000) {
  const rnd = mulberry32(world.seed ^ 0x3f1);
  const blades = [];
  for (let b = 0; b < 5; b++) {
    const a = (b / 5) * Math.PI * 2 + rnd();
    const h = 0.55 + rnd() * 0.5;
    const g = new THREE.BufferGeometry();
    const lx = Math.cos(a) * 0.13, lz = Math.sin(a) * 0.13;
    const tx = Math.cos(a) * 0.22, tz = Math.sin(a) * 0.22;
    g.setAttribute('position', new THREE.Float32BufferAttribute([
      -lz, 0, lx, lz, 0, -lx, tx, h, tz,
    ], 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute([0, 1, 0, 0, 1, 0, 0, 1, 0], 3));
    blades.push(g);
  }
  const geo = mergeGeometries(blades);
  const mat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 1, side: THREE.DoubleSide });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = { value: 0 };
    mat.userData.shader = sh;
    // blades are lit like the ground they grow from, from either side
    sh.fragmentShader = sh.fragmentShader.replace('#include <normal_fragment_begin>',
      'float faceDirection = 1.0; vec3 normal = normalize(vNormal); vec3 nonPerturbedNormal = normal;');
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vec4 ip = instanceMatrix * vec4(0.0,0.0,0.0,1.0);
        float sway = sin(uTime * 1.7 + ip.x * 0.35 + ip.z * 0.21) * 0.5 + sin(uTime * 3.1 + ip.x * 1.3) * 0.2;
        transformed.x += sway * 0.12 * position.y;
        transformed.z += sway * 0.05 * position.y;`);
  };
  const mesh = new THREE.InstancedMesh(geo, mat, count);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  const col = new THREE.Color();
  const cellOf = new Int32Array(count);
  let n = 0;
  for (let tries = 0; tries < count * 6 && n < count; tries++) {
    const x = (rnd() - 0.5) * (W - 8), z = (rnd() - 0.5) * (H - 8);
    const i = ci(x), j = cj(z);
    const k = j * W + i;
    if (world.kind[k] !== 0) continue;
    const y = heightAt(world, x, z);
    const dens = world.noise(i * 0.07 + 9, j * 0.07) * 0.5 + 0.5;
    if (y < 0.85 || y > 2.6 || rnd() > dens * 1.3 - 0.2) continue;
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rnd() * 6.28);
    const sc = 0.7 + rnd() * 0.9 * smoothstep(0.85, 1.4, y);
    s.set(sc, sc * (0.8 + rnd() * 0.6), sc);
    p.set(x, y - 0.03, z);
    m4.compose(p, q, s);
    mesh.setMatrixAt(n, m4);
    col.copy(P.marshLow).lerp(P.marshGold, rnd() * 0.8).multiplyScalar(0.85 + rnd() * 0.3);
    if (rnd() < 0.06) col.copy(P.lavender);
    mesh.setColorAt(n, col);
    cellOf[n] = k;
    n++;
  }
  mesh.count = n;
  mesh.receiveShadow = true;
  scene.add(mesh);
  // hide the reeds on cells that get dug or built
  const clear = (cells) => {
    const set = new Set(cells);
    const zero = new THREE.Matrix4().makeScale(0, 0, 0);
    for (let a = 0; a < n; a++) if (set.has(cellOf[a])) mesh.setMatrixAt(a, zero);
    mesh.instanceMatrix.needsUpdate = true;
  };
  return { mesh, mat, clear };
}

// ---------------------------------------------------------- sluice gate
// open/shut mark: a small pill that keeps its screen size, so it reads at any zoom. Colour and word both carry the state.
export const GATE_MARK_Y = 4.4; // above the wheel, clear of the pan beside the gate
const gateMarkTex = {};
function gateMarkMap(open) {
  const key = open ? 'open' : 'shut';
  if (gateMarkTex[key] || typeof document === 'undefined') return gateMarkTex[key] || null;
  const c = document.createElement('canvas'); c.width = 128; c.height = 52;
  const x = c.getContext('2d');
  x.fillStyle = open ? '#2c8a4b' : '#b3321f';
  x.strokeStyle = '#fff6df'; x.lineWidth = 5;
  x.beginPath(); x.roundRect(4, 4, 120, 44, 20); x.fill(); x.stroke();
  x.fillStyle = '#fff6df'; x.font = '700 28px sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText(open ? 'OPEN' : 'SHUT', 64, 28);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return (gateMarkTex[key] = t);
}
export function setGateMark(mesh, open) {
  const s = mesh.userData.mark;
  if (!s || s.userData.open === open) return;
  s.userData.open = open; s.material.map = gateMarkMap(open); s.material.needsUpdate = true;
}

export function makeGate(alongX) {
  const g = new THREE.Group();
  const posts = new THREE.Mesh(mergeGeometries([
    box(0.32, 3.2, 0.32, 0, 1.2, -0.95), box(0.32, 3.2, 0.32, 0, 1.2, 0.95),
    box(0.4, 0.3, 2.5, 0, 2.75, 0),
    box(0.9, 0.18, 2.6, 0, 1.75, 0), // walkway plank
  ]), MAT.limewash);
  const door = new THREE.Mesh(mergeGeometries([
    box(0.16, 1.6, 1.62, 0, 0, 0),
    box(0.2, 0.12, 1.66, 0, 0.55, 0), box(0.2, 0.12, 1.66, 0, -0.55, 0),
  ]), MAT.timberLight);
  const rod = new THREE.Mesh(cyl(0.05, 0.05, 2.0, 6, 0, 1.6, 0), MAT.iron);
  const wheel = new THREE.Mesh(mergeGeometries([
    new THREE.TorusGeometry(0.42, 0.06, 6, 14).toNonIndexed(),
    box(0.78, 0.055, 0.055, 0, 0, 0).toNonIndexed(),
    box(0.055, 0.78, 0.055, 0, 0, 0).toNonIndexed(),
  ]), MAT.thatch);
  wheel.position.set(0, 3.3, 0);
  wheel.rotation.y = Math.PI / 2;
  const doorRig = new THREE.Group();
  doorRig.add(door, rod);
  g.add(posts, doorRig, wheel);
  if (typeof document !== 'undefined') {
    const mark = new THREE.Sprite(new THREE.SpriteMaterial({ map: gateMarkMap(true), sizeAttenuation: false, depthTest: false, transparent: true }));
    mark.scale.set(0.04 * 128 / 52, 0.04, 1); mark.position.set(0, GATE_MARK_Y, 0); mark.renderOrder = 8;
    mark.userData.open = true; g.add(mark); g.userData.mark = mark;
  }
  if (!alongX) g.rotation.y = Math.PI / 2;
  g.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } });
  g.userData.door = doorRig;
  g.userData.wheel = wheel;
  return g;
}

// ------------------------------------------------------------- fish weir
export function makeWeir(world, x, z, ang, halfLen = 4.2) {
  const g = new THREE.Group();
  const stakes = [], panels = [];
  const dx = Math.cos(ang), dz = Math.sin(ang);
  const pts = [];
  for (let s = -halfLen; s <= halfLen + 0.01; s += 0.42) {
    // a shallow V pointing down-current, the way weirs funnel fish
    const back = (halfLen - Math.abs(s)) * 0.35;
    const px = x + dx * s - dz * back, pz = z + dz * s + dx * back;
    const y = heightAt(world, px, pz);
    pts.push([px, y, pz]);
    stakes.push(cyl(0.05, 0.07, 2.2, 5, px - x, y + 0.7, pz - z));
  }
  for (let a = 0; a < pts.length - 1; a++) {
    const [x0, y0, z0] = pts[a], [x1, y1, z1] = pts[a + 1];
    const len = Math.hypot(x1 - x0, z1 - z0);
    const p = box(len, 0.9, 0.06, 0, 0, 0);
    p.rotateY(-Math.atan2(z1 - z0, x1 - x0));
    p.translate((x0 + x1) / 2 - x, Math.min(y0, y1) + 0.55, (z0 + z1) / 2 - z);
    panels.push(p);
  }
  // A retrieval basket on a little stilted shelf marks the working point even
  // when the net is under normal high water. The surge can still overtop it.
  const tip = pts[Math.floor(pts.length / 2)];
  const bx = tip[0] - x - dz * 0.6, bz = tip[2] - z + dx * 0.6;
  const basketY = Math.max(1.85, tip[1] + 0.25), deckY = basketY - 0.3;
  const shelf = box(1.5, 0.12, 1.05);
  shelf.rotateY(-ang).translate(bx, deckY, bz);
  stakes.push(shelf);
  for (const side of [-0.58, 0.58]) {
    const px = bx + dx * side, pz = bz + dz * side;
    const bed = heightAt(world, x + px, z + pz) - 0.25;
    const top = basketY + 0.7;
    stakes.push(cyl(0.1, 0.13, top - bed, 5, px, (top + bed) / 2, pz));
    panels.push(cyl(0.12, 0.12, 0.35, 5, px, top - 0.1, pz));
  }
  g.add(new THREE.Mesh(mergeGeometries(stakes), MAT.timber));
  g.add(new THREE.Mesh(mergeGeometries(panels), MAT.thatch));
  g.position.set(x, 0, z);
  g.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } });
  // the catch: a basket that fills with silver
  const basket = new THREE.Mesh(cyl(0.6, 0.46, 0.6, 10), MAT.thatch);
  basket.position.set(bx, basketY, bz);
  basket.castShadow = true;
  const fish = new THREE.Mesh(new THREE.SphereGeometry(0.36, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2), MAT.fish);
  fish.position.copy(basket.position).add(new THREE.Vector3(0, 0.3, 0));
  fish.scale.set(1, 0.01, 1);
  fish.visible = false;
  g.add(basket, fish);
  g.userData.fish = fish;
  g.userData.pts = pts;
  return g;
}

// Oyster shells and bleached stakes mark a bed even when the tide covers it.
export function makeOysterBed(world, x, z) {
  const group = new THREE.Group(), shells = [];
  for (let n = 0; n < 26; n++) {
    const a = n * 2.4, r = 0.35 + (n % 7) * 0.23;
    const dx = Math.cos(a) * r, dz = Math.sin(a) * r;
    const shell = new THREE.SphereGeometry(0.23, 6, 3).scale(1, 0.24, 0.7);
    shell.rotateY(a).translate(dx, heightAt(world, x + dx, z + dz) + 0.06, dz);
    shells.push(shell);
  }
  group.add(new THREE.Mesh(mergeGeometries(shells), MAT.limewash));
  for (const dx of [-1.8, 1.8]) {
    const y = heightAt(world, x + dx, z);
    group.add(new THREE.Mesh(cyl(0.06, 0.08, 1.8, 5, dx, y + 0.7, 0), MAT.timberLight));
  }
  group.position.set(x, 0, z);
  group.traverse(m => { if (m.isMesh) m.castShadow = true; });
  return group;
}

export function makeVillager(n) {
  const g = new THREE.Group();
  const coat = [MAT.ochre, MAT.tar, MAT.sail, MAT.timberLight][n % 4];
  const body = new THREE.Mesh(cyl(0.2, 0.3, 0.85, 6, 0, 0.8, 0), coat);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.21, 8, 5).translate(0, 1.44, 0), MAT.limewash);
  const hat = new THREE.Mesh(cyl(0.26, 0.32, 0.12, 8, 0, 1.62, 0), MAT.thatch);
  const legs = new THREE.Mesh(mergeGeometries([box(0.15, 0.45, 0.2, -0.13, 0.22, 0), box(0.15, 0.45, 0.2, 0.13, 0.22, 0)]), MAT.tar);
  const arms = new THREE.Mesh(mergeGeometries([box(0.13, 0.65, 0.15, -0.3, -0.2, 0), box(0.13, 0.65, 0.15, 0.3, -0.2, 0)]), coat);
  arms.position.y = 1.1;
  g.add(body, head, hat, legs, arms); g.userData.arms = arms;
  g.traverse(m => { if (m.isMesh) m.castShadow = true; });
  return g;
}
