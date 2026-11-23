// Hired hands walk the marsh. A job only runs while its bank can be reached dry.
import { PAN_FLOOR, W, SN, SX, SZ, wx, wz, ci, cj } from './world.js';
import * as tide from './tide.js';
import { makeVillager } from './props.js';

export const HIRE_COST = 24;
export const MAX_HANDS = 4;
export const FOOT_DEPTH = 0.12;
const index = (i, j) => (j - SZ) * SN + i - SX;
const cell = (k) => [SX + k % SN, SZ + Math.floor(k / SN)];

export class People {
  constructor(game) {
    this.game = game;
    this.hands = [];
    this.wetSeconds = 0;
    this.work = 0;
  }

  jobs() {
    const g = this.game;
    return [...g.pans, ...g.weirs, ...g.oysters].map((thing) => ({
      thing, label: thing.kind === 'pan' ? `Pan ${g.pans.indexOf(thing) + 1}` : thing.kind === 'weir' ? `Weir ${g.weirs.indexOf(thing) + 1}` : `Oysters ${g.oysters.indexOf(thing) + 1}`,
    }));
  }

  hire() {
    const g = this.game;
    if (this.hands.length >= (g.works?.maxHands() || MAX_HANDS) || !g.spend(HIRE_COST, 'Hired hand')) return false;
    // a new hand takes the first work nobody tends: pans, then oyster beds (the dearest cargo), then weirs
    const free = this.jobs().filter(j => !this.hands.some(h => h.job === j.thing)), rank = { pan: 0, oyster: 1, weir: 2 };
    const job = free.sort((a, b) => rank[a.thing.kind] - rank[b.thing.kind])[0] || this.jobs()[0];
    const home = g.works?.houses.at(-1);
    const i = home?.i ?? ci(g.world.village.x), j = home?.j ?? cj(g.world.village.z);
    const mesh = makeVillager(this.hands.length);
    const hand = { name: ['Ada', 'Kit', 'Rowan', 'Wren', 'Bryn', 'Moss', 'Nell', 'Ash'][this.hands.length], x: wx(i), z: wz(j), job: job.thing, mesh, path: null, at: 0, retry: 0, nextWork: 0, owed: 0, status: 'Looking for dry footing' };
    this.hands.push(hand); g.view.scene.add(mesh);
    mesh.position.set(hand.x, this.height(i, j), hand.z);
    g.emit('hired', { hand });
    return true;
  }

  // A saved hand, put back where it stood (no cost, no event).
  restoreHand(d, job) {
    const g = this.game;
    if (!job) return null;
    const mesh = makeVillager(this.hands.length);
    const hand = { name: d.name, x: d.x, z: d.z, job, mesh, path: d.path, at: d.at, retry: d.retry, nextWork: d.nextWork, status: d.status, connected: d.connected, checkHome: d.checkHome };
    this.hands.push(hand); g.view.scene.add(mesh);
    mesh.position.set(hand.x, this.height(ci(hand.x), cj(hand.z)), hand.z);
    return hand;
  }

  // Where hands start from: the village and every stilt house.
  homes() {
    const g = this.game;
    return [g.world.village, ...(g.works?.houses || []).map(h => ({ x: wx(h.i), z: wz(h.j) }))];
  }

  // Words for why a new hand could not reach any work from home on dry ground right now, or null (cached for a second).
  hireProblem() {
    const g = this.game;
    if (this._hp && g.t - this._hp.t < 1.5 && this._hp.n === this.jobs().length) return this._hp.v;
    const jobs = this.jobs(); let v = null;
    if (jobs.length) {
      const blocked = jobs.filter(j => !this.homes().some(h => this.route({ x: h.x, z: h.z, job: j.thing })));
      if (blocked.length === jobs.length) v = `needs a causeway: hands cannot reach ${blocked.slice(0, 3).map(j => j.label).join(', ')}${blocked.length > 3 ? ' and more' : ''} on dry ground (Causeway, key 7)`;
    }
    this._hp = { t: g.t, n: jobs.length, v };
    return v;
  }

  // The works a hand cannot reach from home right now (labels), for the hands list.
  assign(hand, job) {
    if (this.game.ended || !this.jobs().some(j => j.thing === job)) return;
    hand.job = job; hand.path = null; hand.retry = 0; hand.checkHome = 0;
  }

  dry(i, j) {
    if (i < SX || j < SZ || i >= SX + SN || j >= SZ + SN) return false;
    const k = j * W + i;
    return this.game.world.kind[k] !== 4 && this.game.sim.b[index(i, j)] + this.game.sim.d[index(i, j)] - this.height(i, j) <= FOOT_DEPTH;
  }

  height(i, j) { const k = j * W + i, deck = this.game.works?.deck[k]; return deck ? Math.max(this.game.world.h[k], deck) : this.game.world.h[k]; }

  destinations(job) {
    const cells = [];
    if (job.kind === 'pan') {
      for (let i = job.i0 - 1; i <= job.i0 + job.w; i++) cells.push([i, job.j0 - 1], [i, job.j0 + job.d]);
      for (let j = job.j0; j < job.j0 + job.d; j++) cells.push([job.i0 - 1, j], [job.i0 + job.w, j]);
    } else {
      const x = job.kind === 'weir' ? ci(job.x) : job.i, z = job.kind === 'weir' ? cj(job.z) : job.j;
      for (let dj = -3; dj <= 3; dj++) for (let di = -3; di <= 3; di++) if (Math.hypot(di, dj) <= 3) cells.push([x + di, z + dj]);
    }
    return new Set(cells.filter(([i, j]) => this.dry(i, j)).map(([i, j]) => index(i, j)));
  }

  route(hand) {
    const goals = this.destinations(hand.job);
    if (!goals.size) return null;
    const start = index(ci(hand.x), cj(hand.z));
    const from = new Int32Array(SN * SN).fill(-1), queue = new Int32Array(SN * SN);
    from[start] = start; queue[0] = start;
    let read = 0, write = 1, found = -1;
    while (read < write) {
      const k = queue[read++];
      if (goals.has(k)) { found = k; break; }
      const [i, j] = cell(k);
      for (const [a, b] of [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]]) {
        if (!this.dry(a, b)) continue;
        const next = index(a, b);
        if (from[next] !== -1) continue;
        // Tall banks need steps; a causeway meets the marsh with a low ramp.
        if (Math.abs(this.height(a, b) - this.height(i, j)) > 0.85) continue;
        from[next] = k; queue[write++] = next;
      }
    }
    if (found < 0) return null;
    const path = [];
    for (let k = found; k !== start; k = from[k]) path.push(cell(k));
    return path.reverse();
  }

  tend(hand) {
    const g = this.game, job = hand.job;
    if (job.maintaining) { hand.status = 'Dredging crew at work'; return; }
    if (job.damage) { hand.status = 'Storm damage · repair (R)'; return; }
    if (job.kind === 'pan') {
      if (job.ready || (job.V / job.cells.length <= 0.03 && job.crust >= 0.2)) { this.work += g.rake(job); return; }
      const gate = g.gates.find(a => a.i >= job.i0 - 1 && a.i <= job.i0 + job.w && a.j >= job.j0 - 1 && a.j <= job.j0 + job.d);
      if (!gate) { hand.status = 'Pan needs a sluice'; return; }
      if (g.storm?.preparing) {
        if (gate.open) g.toggleGate(gate);
        hand.status = 'Storm watch · holding the sluice shut'; return;
      }
      const depth = job.V / job.cells.length, lv = tide.level(g.t), rising = tide.rate(g.t) > 0;
      if (!gate.open && depth < 0.03 && job.crust < 0.2 && !(job.pump?.enabled && g.works.energy > 1)) g.toggleGate(gate);
      else if (gate.open && depth > 0.05 && (!rising || (depth >= (lv - g.panFloor(job)) * 0.75 && tide.nextTurn(g.t, 'high') - g.t < 5))) g.toggleGate(gate);
      hand.status = job.ready ? 'Raking salt' : gate.open ? 'Watching the flood' : 'Tending brine';
    } else if (job.kind === 'weir') {
      this.work += g.collect(job); hand.status = 'Emptying the fish basket';
    } else {
      this.work += g.gather(job); hand.status = job.exposed ? 'Raking oysters' : 'Waiting for exposed mud';
    }
  }

  update(dt) {
    const g = this.game;
    for (const hand of this.hands) {
      if (hand.owed > 0) { hand.status = 'Unpaid · waiting for wages'; continue; }
      const dryHere = this.dry(ci(hand.x), cj(hand.z));
      if (!dryHere) this.wetSeconds += dt;
      if (!hand.path && g.t >= hand.retry) {
        hand.path = this.route(hand); hand.at = 0; hand.retry = g.t + 2;
      }
      if (!hand.path) { hand.status = dryHere ? 'No dry route · build a causeway' : 'Cut off · waiting for the ebb'; continue; }
      if (hand.at < hand.path.length) {
        const [i, j] = hand.path[hand.at];
        if (!this.dry(i, j)) { hand.path = null; hand.retry = 0; hand.checkHome = 0; continue; }
        const dx = wx(i) - hand.x, dz = wz(j) - hand.z, distance = Math.hypot(dx, dz), step = Math.min(distance, dt * 3.2);
        if (distance > 0) { hand.x += dx / distance * step; hand.z += dz / distance * step; hand.mesh.rotation.y = Math.atan2(dx, dz); }
        if (distance <= step + 0.001) hand.at++;
        hand.status = 'Walking to work';
        hand.mesh.position.set(hand.x, this.height(ci(hand.x), cj(hand.z)) + Math.abs(Math.sin(g.t * 8)) * 0.06, hand.z);
        hand.mesh.userData.arms.rotation.x = Math.sin(g.t * 8) * 0.35;
      } else if (dryHere) {
        if (g.t >= (hand.checkHome || 0)) {
          const homes = this.homes();
          hand.connected = homes.some(home => this.route({ ...hand, ...home }) !== null);
          hand.checkHome = g.t + 2;
        }
        if (!hand.connected) { hand.status = 'Cut off from village · causeway needed'; continue; }
        hand.mesh.userData.arms.rotation.x = Math.sin(g.t * 3) * 0.25;
        if (g.t >= hand.nextWork) { this.tend(hand); hand.nextWork = g.t + 1; }
      } else {
        hand.status = 'Cut off · waiting for the ebb'; hand.path = null;
      }
    }
  }
}
