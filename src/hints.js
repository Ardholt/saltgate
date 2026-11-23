// Contextual hints: one short line at a time, pinned to the thing it is about.
// They follow the state of the first pan and the tide, not a timer, so the
// player is never left without a next step while they are learning the loop.
// Nothing has to be dismissed.
import * as tide from './tide.js';
import { SEASON_TARGET } from './economy.js';
import { PAN_FLOOR } from './world.js';
import { WEIR_BASKET } from './game.js';

const LEARNED = 3;        // rakes before introducing the workers’ dry-footing reminder
const SHUT_LEAD = 5;      // game seconds before high water at which "shut now" shows

export class Hints {
  constructor(game) {
    this.game = game;
    this.since = 0;
    this.extra = null;     // a one-off hint from an event: { text, sub, thing, until }
    this.done = new Set();
    this.rakes = 0;
    this.goalLeft = 0;     // seconds the second-goal hint still shows after the first rake
    this.prevVolumes = new Map();
    this.askedShut = new Set();
  }

  onEvent(e) {
    const g = this.game;
    if (e.type === 'rake') {
      this.rakes++;
      if (this.rakes === 1) this.goalLeft = 10;
    }
    if (e.type === 'fishReady' && !this.done.has('fish') && this.rakes > 0) {
      this.done.add('fish');
      this.extra = { text: 'The weir caught fish on the ebb.', sub: 'Click the weir to empty its basket', thing: e.weir, act: true, until: g.t + 14 };
    }
    if (e.type === 'fish' && this.extra?.thing === e.weir) this.extra = null;
    if (e.type === 'melt' && !this.done.has('melt')) {
      this.done.add('melt');
      this.extra = { text: 'Flood water is dissolving the salt!', sub: 'Rake a pan before you open its gate', thing: e.pan, until: g.t + 8 };
    }
    if (e.type === 'built') this.done.add('built');
  }

  // what the first pan needs right now: { text, sub, thing, act } (act: the player should do something)
  loop(pan = this.game.pans[0]) {
    const g = this.game;
    const gate = g.gates.find(a => a.i >= pan.i0 - 1 && a.i <= pan.i0 + pan.w && a.j >= pan.j0 - 1 && a.j <= pan.j0 + pan.d);
    const lv = tide.level(g.t), rising = tide.rate(g.t) > 0;
    const hw = tide.nextTurn(g.t, 'high');
    const hwText = tide.clockText(hw);
    const depth = pan.V / pan.cells.length;
    const day = g.sunElev > 0.04;
    const floor = g.panFloor(pan);
    if (pan.damage) return { text: 'The storm breached this pan. Repair its bank.', sub: g.storm.active ? 'Wait for the surge to pass; then Repair (R)' : 'Repair (R) · 24 shillings · 10 seconds', thing: pan, urgent: true };
    if (g.storm.preparing && gate?.open) return { text: 'The surge is coming. Shut this sluice.', sub: 'Storm banks hold only with the gate shut', thing: gate, act: true };
    if (g.storm.preparing) return { text: 'Keep the sluice shut through the surge.', sub: pan.braced ? 'Storm banks ready · watch the water rise' : 'Raise storm banks (B) before the water reaches them', thing: pan, urgent: true };
    if (pan.maintaining) return { text: 'The dredging crew is clearing the pan.', sub: 'The sluice stays shut until the crew finishes', thing: pan };
    if (g.sediment.panDepth(pan) > 0.16 && depth < 0.05 && pan.crust < 0.2) return { text: 'Silt is lifting this pan above the tide.', sub: 'Dredge (8) · 14 shillings · 12 seconds at low water', thing: pan, urgent: true };

    if (pan.crust >= 0.2 && depth <= 0.03 && !g.panOpen(pan)) return { text: 'Rake the last salt before the next flood.', sub: `${Math.round(pan.crust * 4)} salt ready`, thing: pan, act: true };
    if (pan.ready) return { text: 'Salt! Click the pan to rake it in.', sub: `${Math.round(pan.crust * 4)} salt ready`, thing: pan, act: true };
    if (gate?.open && pan.pump?.enabled && g.works.energy > 1 && depth < 0.03) return { text: 'Shut the sluice so the pump can lift brine.', sub: 'The tide mill powers this pan even through neaps', thing: gate, act: true };

    if (!gate) return { text: 'This pan needs a sluice in its bank.', sub: 'Press 3, then click a pulsing bank cell · dig a channel to a creek (2)', thing: pan, act: true, needsGate: true };
    if (!gate.open || depth <= 0.05) this.askedShut.delete(pan.id);
    if (!gate.open) {
      if (depth > 0.03) {
        const conc = pan.conc || 1;
        const sub = pan.crust > 0.05 ? 'Crystals are gathering on the clay…' : `Brine ${conc.toFixed(1)}× · the falling water leaves salt behind`;
        return day
          ? { text: 'The gate holds. Watch the brine thicken and crystals gather.', sub, thing: pan }
          : { text: 'Slow work after dark: the brine waits for the sun.', sub, thing: pan };
      }
      if (pan.crust > 0.6) return { text: 'The last brine is drying to salt.', sub: 'Salt is crystallising…', thing: pan };
      if (pan.pump?.enabled && g.works.energy > 1) return { text: 'Mill power lifts the next brine into this pan.', sub: 'Keep the sluice shut · pump waits for water in its channel', thing: pan };
      return { text: 'The pan is empty. Open the gate to let the next flood in.', sub: `Click the gate · high water ${hwText}`, thing: gate, act: true };
    }

    // gate open
    if (pan.crust > 0.2 && lv > floor) return { text: 'The flood will dissolve that salt!', sub: 'Shut the gate, then rake the pan', thing: gate, act: true };
    // the pan lags the creek: it is full when its water stands near the tide's level
    const filling = pan.V > (this.prevVolumes.get(pan.id) || 0) + 1e-4;
    const full = depth > 0.05 && depth >= 0.75 * (lv - floor);
    if (depth > 0.05 && !rising && !filling) return { text: 'The tide has turned. Shut the gate now, before the pan drains!', sub: 'Click the gate', thing: gate, act: true };
    // once "shut" has been asked it stays asked until the gate moves, so the line never flickers
    if (depth > 0.05 && (this.askedShut.has(pan.id) || (full && (!rising || hw - g.t < SHUT_LEAD)))) {
      this.askedShut.add(pan.id);
      // before the crest, say when it is (the same HH:MM the tide graph shows); at the crest, say now
      if (rising && hw - g.t > 1.9) return { text: `Shut the gate by high water at ${hwText}.`, sub: 'Click the gate · it is marked on the tide graph', thing: gate, act: true };
      return { text: 'High water. Shut the gate to trap the brine.', sub: 'Click the gate', thing: gate, act: true };
    }
    if ((rising || filling) && lv > floor) return { text: 'The flood is filling the pan. Shut the gate at high water.', sub: rising ? `High water ${hwText}` : 'Nearly full…', thing: pan };
    return { text: 'The tide is too low to reach the pan floor.', sub: `Next high water ${hwText}. Try 8× to get there`, thing: pan };
  }

  // returns { text, sub, thing | null, free }
  current(dt) {
    const g = this.game;
    this.since += dt;
    if (g.ended || this.since < 0.8) return null;
    const ready = g.pans.find(p => p.ready);
    if (ready) return this.loop(ready);
    const loops = g.pans.filter(p => !g.people.hands.some(h => h.job === p)).map(p => this.loop(p));
    const h = loops.find(h => h.act) || loops[0] || this.loop();
    for (const p of g.pans) this.prevVolumes.set(p.id, p.V);
    // A closing gate has a tide window; a fish basket can wait.
    if (h.act && h.thing.kind === 'gate' && h.thing.open) return h;
    if (h.urgent) return h;
    if (this.extra) {
      // the melt warning is only true while the pan still holds salt; the fish line only while the basket has fish
      if (g.t < this.extra.until && !(this.extra.thing.kind === 'weir' && this.extra.thing.catch < 3) && !(this.extra.thing.kind === 'pan' && this.extra.thing.crust < 0.05)) return this.extra;
      this.extra = null;
    }
    // the second, bigger goal: shown once the first salt is in, while the tide does the work
    if (this.goalLeft > 0 && !this.game.pans[0].ready && !this.done.has('built')) {
      this.goalLeft -= dt;
      return { text: `The trader buys at high water. Earn ${SEASON_TARGET} shillings this season.`, sub: 'Sell or Hold in the ledger · more pans, more trade', thing: null, free: true };
    }
    if (!h.act && this.rakes > 0) {
      const o = g.oysters.find(o => o.exposed && o.stock >= 2 && !g.people.hands.some(h => h.job === o));
      if (o) return { text: 'The mud is exposed. Rake oysters before the flood.', sub: `${Math.floor(o.stock)} oysters ready · Oysters button finds the bed`, thing: o, act: true };
      const w = g.weirs.find(w => w.catch >= 3 && !g.people.hands.some(h => h.job === w));
      if (w) {
        const full = w.catch >= WEIR_BASKET - 0.5;
        return { text: full ? `The fish basket is full at ${WEIR_BASKET}. Click to collect; more fish are lost.` : 'The ebb filled the fish basket. Click to collect.', sub: `${Math.floor(w.catch)} fish${full ? ' (full)' : ''} · Weir button finds the basket`, thing: w, act: true };
      }
    }
    if (this.rakes >= LEARNED && !h.act && g.people.hands.length) return { text: 'Your hands work the tide. Keep their paths dry.', sub: 'Spring tides cover low marsh · Causeway (7) raises a route', thing: null, free: true };
    return h;
  }
}
