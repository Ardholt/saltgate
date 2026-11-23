// Shillings and a trader that follows the same moon clock as the water.
import * as tide from './tide.js';
import { clamp } from './noise.js';

export const GOODS = ['salt', 'fish', 'oysters'];
export const BASE_PRICE = { salt: 3, fish: 3, oysters: 4 };
export const SEASON_TARGET = 1300;
// A second, harder tier shown beside the goal so the last days of a strong season still pull.
export const MASTER_TARGET = 1700;
// Fish flood the quay faster than salt does: a heavy catch cheapens the next unit sooner.
export const PRICE_SLOPE = { salt: 65, fish: 36, oysters: 65 };
export const WAGE = 6;            // paid to each hired hand at every landing
export const BASE_CAPACITY = 48;
// Late-game spending: each berth lets the trader carry 24 more cargo per visit.
export const QUAY_STEPS = [{ day: 5, cost: 110 }, { day: 8, cost: 190 }, { day: 11, cost: 300 }];
export const QUAY_ROOM = 24;
export const SEASON_END = tide.START_T + tide.SEASON_DAYS * tide.DAY;
const money = (n) => Math.round(n * 10) / 10;

export class Economy {
  constructor(game) {
    this.game = game;
    this.pressure = { salt: 0, fish: 0, oysters: 0 };
    this.selling = { salt: true, fish: true, oysters: true };
    this.sold = { salt: 0, fish: 0, oysters: 0 };
    this.revenue = { salt: 0, fish: 0, oysters: 0 };
    this.earned = 0; this.spent = 0; this.visits = 0;
    this.ledger = [];
    this.high = tide.nextTurn(game.t - 10, 'high');
    this.state = 'away'; this.progress = 0; this.quay = 0; this.wages = 0; this.capacity = BASE_CAPACITY;
    this.lastSale = -Infinity;
    this.record('Founding purse', 60);
  }

  record(label, amount) {
    this.ledger.unshift({ t: this.game.t, label, amount: money(amount) });
    this.ledger.length = Math.min(12, this.ledger.length);
  }

  price(good, pressure = this.pressure[good]) {
    return money(BASE_PRICE[good] * clamp(1.15 - pressure / PRICE_SLOPE[good], 0.4, 1.15));
  }

  // Tide-days until a good's price is back to its base price if nothing more is sold (pressure falls by 1/e each tide-day).
  recoverDays(good) {
    const need = 0.15 * PRICE_SLOPE[good], p = this.pressure[good];
    return p <= need ? 0 : Math.log(p / need);
  }

  spend(amount, label) {
    if (this.game.ended || this.game.store.coin < amount) return false;
    this.game.store.coin = money(this.game.store.coin - amount);
    this.spent = money(this.spent + amount);
    // A dragged channel is one readable expense, not dozens of receipts.
    const last = this.ledger[0];
    if (last?.label === label && last.amount < 0 && this.game.t - last.t < 2) last.amount = money(last.amount - amount);
    else this.record(label, -amount);
    return true;
  }

  cap() { return BASE_CAPACITY + QUAY_ROOM * this.quay; }
  nextQuay() { return QUAY_STEPS[this.quay] || null; }
  quayOpen() { const n = this.nextQuay(); return !!n && tide.dayNumber(this.game.t) >= n.day; }
  extendQuay() {
    const n = this.nextQuay();
    if (!n || !this.quayOpen() || !this.spend(n.cost, 'Quay berth')) return false;
    this.quay++; this.capacity += QUAY_ROOM;
    this.game.emit('quayExtended', { quay: this.quay });
    return true;
  }

  // Each landing every hired hand is owed a wage; one the purse cannot cover stops work until it is paid.
  owe() { for (const h of this.game.people?.hands || []) h.owed = (h.owed || 0) + 1; }
  settle() {
    for (const h of this.game.people?.hands || []) {
      while (h.owed > 0 && this.spend(WAGE, "Hands' wages")) { h.owed--; this.wages += WAGE; }
    }
  }

  toggle(good) {
    if (!GOODS.includes(good) || this.game.ended) return;
    this.selling[good] = !this.selling[good];
  }

  update(dt) {
    const g = this.game;
    for (const good of GOODS) this.pressure[good] *= Math.exp(-dt / (tide.TIDE * 2));
    while (g.t > this.high + 12) this.high = tide.nextTurn(this.high + 2, 'high');
    if (g.storm?.active) { this.state = 'sheltering'; this.progress = 0; return; }
    const offset = g.t - this.high;
    this.state = offset < -10 ? 'away' : offset < -1.5 ? 'arriving' : offset < 3 && tide.level(g.t) > 0.5 ? 'docked' : offset < 12 ? 'leaving' : 'away';
    this.progress = this.state === 'arriving' ? clamp((offset + 10) / 8.5, 0, 1)
      : this.state === 'docked' ? 1 : this.state === 'leaving' ? clamp(1 - (offset - 3) / 9, 0, 1) : 0;
    if (this.state === 'docked' && this.lastVisitHigh !== this.high) {
      this.lastVisitHigh = this.high;
      this.visits++; this.capacity = this.cap();
      this.owe(); this.settle();
      g.emit('traderArrived');
    }
    if (this.state === 'docked' && g.t - this.lastSale >= 0.75) {
      this.lastSale = g.t;
      this.trade();
    }
  }

  // The hold fills highest price per unit first (ties keep list order), so a full hold never sells fish while oysters stay ashore.
  fillOrder() {
    return GOODS.filter(g => this.selling[g]).map((g, k) => ({ g, k, p: this.price(g) })).sort((a, b) => b.p - a.p || a.k - b.k).map(x => x.g);
  }

  // What the next landing takes, at today's prices: { room, takes: {good: n}, left: {good: n}, total }
  plan() {
    const room = this.state === 'docked' ? this.capacity : this.cap();
    let free = room; const takes = { salt: 0, fish: 0, oysters: 0 }, left = { salt: 0, fish: 0, oysters: 0 };
    for (const good of this.fillOrder()) {
      const have = Math.floor(this.game.store[good]);
      takes[good] = Math.min(have, free); free -= takes[good]; left[good] = have - takes[good];
    }
    return { room, takes, left, total: GOODS.reduce((s, g) => s + takes[g], 0) };
  }

  trade() {
    const g = this.game;
    if (g.ended || this.state !== 'docked' || tide.level(g.t) <= 0.5) return 0;
    let total = 0;
    for (const good of this.fillOrder()) {
      const n = Math.min(Math.floor(g.store[good]), this.capacity);
      if (!n) continue;
      let value = 0;
      // Each unit affects the next price: splitting a cargo never earns more.
      for (let k = 0; k < n; k++) { value += this.price(good); this.pressure[good]++; }
      value = money(value);
      g.store[good] -= n; this.capacity -= n; this.sold[good] += n; this.revenue[good] = money(this.revenue[good] + value);
      total += value;
      this.record(`${n} ${good} sold`, value);
    }
    total = money(total);
    if (total) {
      g.store.coin = money(g.store.coin + total);
      this.earned = money(this.earned + total);
      g.emit('trade', { amount: total });
      this.settle();
    }
    return total;
  }
}
