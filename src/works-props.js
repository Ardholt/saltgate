// Late-season works use the same timber, limewash, iron and ochre as the village.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { MAT } from './props.js';

const box = (parent, material, w, h, d, x, y, z) => {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  m.position.set(x, y, z); m.castShadow = m.receiveShadow = true; parent.add(m); return m;
};

// Each fixed assembly shares a draw per material. Moving assemblies (the mill
// wheel) keep their own group and pivot, with their pieces batched inside it.
function batchFixed(group) {
  const batches = new Map();
  for (const mesh of [...group.children]) {
    if (!mesh.isMesh) continue;
    const key = `${mesh.material.uuid}:${mesh.castShadow}:${mesh.receiveShadow}`;
    if (!batches.has(key)) batches.set(key, { material: mesh.material, cast: mesh.castShadow, receive: mesh.receiveShadow, geometries: [] });
    mesh.updateMatrix();
    batches.get(key).geometries.push(mesh.geometry.clone().applyMatrix4(mesh.matrix));
    group.remove(mesh);
    mesh.geometry.dispose();
  }
  for (const { material, cast, receive, geometries } of batches.values()) {
    const mesh = new THREE.Mesh(mergeGeometries(geometries), material);
    mesh.castShadow = cast; mesh.receiveShadow = receive;
    group.add(mesh);
    for (const geo of geometries) geo.dispose();
  }
  return group;
}

export function makeMill() {
  const g = new THREE.Group();
  for (const x of [-1.3, 1.3]) for (const z of [-1, 1]) box(g, MAT.timber, 0.25, 4.4, 0.25, x, 0.5, z);
  box(g, MAT.timberLight, 3.2, 0.25, 2.7, 0, 2.5, 0);
  box(g, MAT.limewash, 2.4, 2.0, 2.2, 0, 3.6, 0);
  const roof = new THREE.Mesh(new THREE.ConeGeometry(2.3, 1.4, 4), MAT.ochre);
  roof.rotation.y = Math.PI / 4; roof.position.y = 5.2; roof.scale.z = 0.85; g.add(roof);
  box(g, MAT.tar, 0.65, 1.35, 0.08, 0, 3.3, 1.15);
  const wheel = new THREE.Group(); wheel.position.set(2.0, 0.7, 0);
  for (const x of [-0.55, 0.55]) {
    const rim = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.10, 5, 20), MAT.timber);
    rim.rotation.y = Math.PI / 2; rim.position.x = x; wheel.add(rim);
  }
  for (let n = 0; n < 10; n++) {
    const a = n * Math.PI / 5;
    const spoke = box(wheel, MAT.timberLight, 0.14, 2.95, 0.13, 0, 0, 0); spoke.rotation.x = a;
    const paddle = box(wheel, MAT.timber, 1.25, 0.4, 0.15, 0, Math.cos(a) * 1.45, Math.sin(a) * 1.45); paddle.rotation.x = a;
  }
  batchFixed(wheel);
  g.add(wheel); g.userData.wheel = wheel;
  return batchFixed(g);
}

export function makeStiltHouse(ground) {
  const g = new THREE.Group(), deck = 3.05 - ground;
  for (const x of [-1.2, 1.2]) for (const z of [-1.1, 1.1]) box(g, MAT.timber, 0.22, deck + 0.6, 0.22, x, deck / 2 - 0.3, z);
  box(g, MAT.timberLight, 3, 0.22, 2.8, 0, deck, 0);
  box(g, MAT.limewash, 2.55, 1.8, 2.25, 0, deck + 1, 0);
  const roof = new THREE.Mesh(new THREE.ConeGeometry(2.2, 1.3, 4), MAT.thatch);
  roof.rotation.y = Math.PI / 4; roof.position.y = deck + 2.55; g.add(roof);
  box(g, MAT.tar, 0.6, 1.35, 0.06, 0, deck + 0.8, 1.16);
  for (const x of [-0.8, 0.8]) box(g, MAT.window, 0.4, 0.45, 0.08, x, deck + 1.1, 1.16);
  for (let n = 1; n <= 5; n++) box(g, MAT.timberLight, 1, 0.16, 0.58, 0, deck * (1 - n / 6), 1.5 + n * 0.45);
  return batchFixed(g);
}

export function makePump() {
  const g = new THREE.Group();
  box(g, MAT.timber, 1.7, 0.3, 1.2, 0, 0, 0);
  box(g, MAT.limewash, 0.8, 0.85, 0.8, 0, 0.5, 0);
  box(g, MAT.iron, 0.16, 1.5, 0.16, 0.5, 0.5, 0);
  const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.48, 0.07, 5, 12), MAT.iron);
  wheel.position.set(0, 1.1, 0.45); g.add(wheel);
  g.userData.wheel = wheel;
  return g;
}

export function makeBraces() {
  const g = new THREE.Group();
  for (const x of [-1.7, 1.7]) {
    const b = box(g, MAT.timberLight, 0.18, 2.3, 0.18, x, 0.6, 0); b.rotation.z = Math.sign(x) * 0.45;
  }
  return batchFixed(g);
}

export function makeBankSteps(heights, floors) {
  const g = new THREE.Group();
  heights.forEach((y, n) => {
    box(g, MAT.timberLight, 1.0, 0.16, 1.05, 0, y - 0.08, -n - 1);
    for (const x of [-0.4, 0.4]) {
      const h = Math.max(0.1, y - floors[n]);
      box(g, MAT.timber, 0.12, h, 0.12, x, y - h / 2, -n - 1);
    }
  });
  return batchFixed(g);
}
