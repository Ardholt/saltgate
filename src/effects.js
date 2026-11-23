import * as THREE from 'three';
import { wx, wz, PAN_FLOOR } from './world.js';

// A few drifting motes show the sun working even before the first salt crust.
// One bounded buffer and draw call, shared by all pans.
export class BrineMotes {
  constructor(scene) {
    this.positions = new Float32Array(384 * 3);
    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.points = new THREE.Points(this.geo, new THREE.PointsMaterial({ color: '#ece5c3', size: 0.11, transparent: true, opacity: 0.42, depthWrite: false }));
    this.points.frustumCulled = false;
    scene.add(this.points);
  }
  update(game) {
    let count = 0;
    for (const pan of game.pans) {
      if (pan.V < 0.5 || game.panOpen(pan) || game.sunElev < 0.03) continue;
      for (let n = 0; n < 20 && count < 384; n++, count++) {
        const f = ((game.t * 0.2 + n * 0.618) % 1 + 1) % 1;
        const x = wx(pan.i0) + ((n * 0.7549) % 1) * (pan.w - 1);
        const z = wz(pan.j0) + ((n * 0.5698) % 1) * (pan.d - 1);
        this.positions[count * 3] = x + Math.sin(f * 3 + n) * 0.16;
        this.positions[count * 3 + 1] = game.panFloor(pan) + pan.V / pan.cells.length + f * 0.6;
        this.positions[count * 3 + 2] = z + f * 0.3;
      }
    }
    this.geo.setDrawRange(0, count);
    this.geo.attributes.position.needsUpdate = true;
  }
}
