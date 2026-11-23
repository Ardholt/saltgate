// The HUD is one instrument: a paper tide card with a moon dial, the stores and the tool tray.
import * as tide from './tide.js';
import { PAN_FLOOR, BUND } from './world.js';
import { GOODS, BASE_PRICE, SEASON_TARGET, MASTER_TARGET, SEASON_END } from './economy.js';
import { COST } from './game.js';
import { UNLOCKS } from './works.js';

const $ = (id) => document.getElementById(id);
const TOOL_HELP = {
  dredge: 'Clear silt from a pan (14 shillings, 12 seconds) or a 5×5 channel patch (8 shillings, 8 seconds). One crew; works in shallow water and waits out the flood.',
  hand: 'Click gates to open or shut them. Click pans, weirs and exposed oyster beds to gather the harvest.',
  dig: 'Drag from a creek to carry the tide to your pans. Costs 1 shilling per cell.',
  gate: 'Set a sluice in a channel or pan bank. Open to fill; shut near high water to trap brine. Costs 12 shillings.',
  pan: 'Drag on clear marsh to size a salt pan. Add a sluice and a channel from a creek. Costs 30 shillings.',
  weir: 'Build across a creek. The ebb fills its fish basket. Click to collect. Costs 15 shillings.',
  oyster: 'Plant on a low mud bank. Grows under the flood; rake when exposed. Costs 18 shillings.',
  causeway: 'Drag a raised route from the village to the works. Stays dry through spring tides, but blocks water and takes pan space. Costs 2 shillings per cell.',
};

const ICON = {
  dredge: '<path d="M3 24 H28 L24 29 H7 Z" fill="#4a3b2c"/><path d="M14 23 V5 L26 15 L23 22" stroke="#7d5f33" stroke-width="3" fill="none"/><path d="M20 20 L27 21 L24 25 Z" fill="#8a8c8a"/>',
  causeway: '<path d="M3 25 L11 10 L21 10 L29 25 Z" fill="#c4ad84" stroke="#2d2a24" stroke-width="1.6"/><path d="M10 21 H23 M12 17 H21 M14 13 H19" stroke="#7d6449"/>',
  oyster: '<path d="M8 26 C-2 10 13 1 22 7 C35 17 21 30 8 26 Z" fill="#b5b1a3" stroke="#2d2a24" stroke-width="1.6"/><path d="M11 23 Q8 10 21 11 M14 24 Q13 15 23 15" fill="none" stroke="#6c7775"/>',
  hand: '<path d="M11 28 C7 22 6 18 8 16 C9.5 15 11 16 12 18 L12 7 C12 5 15 5 15 7 L15 15 L15 5 C15 3 18 3 18 5 L18 15 L18 6 C18 4 21 4 21 6 L21 16 L21 9 C21 7 24 7 24 9 L24 20 C24 25 21 28 17 28 Z" fill="#f2e6cc" stroke="#2d2a24" stroke-width="1.5" stroke-linejoin="round"/>',
  dig: '<path d="M7 25 L19 13" stroke="#5a4630" stroke-width="2.6" stroke-linecap="round"/><path d="M17 8 L24 15 L21 18 C18 21 13 19 13 15 Z" fill="#8a8c8a" stroke="#2d2a24" stroke-width="1.5" stroke-linejoin="round"/><path d="M3 28 C9 25 14 29 21 26 C25 24.5 28 26 30 27" stroke="#3f6168" stroke-width="1.8" fill="none"/>',
  gate: '<rect x="6" y="5" width="3.2" height="23" fill="#4a3b2c" stroke="#2d2a24"/><rect x="22.8" y="5" width="3.2" height="23" fill="#4a3b2c" stroke="#2d2a24"/><rect x="9.2" y="10" width="13.6" height="10" fill="#9b7d58" stroke="#2d2a24" stroke-width="1.3"/><path d="M4 5 H28" stroke="#2d2a24" stroke-width="2.4"/><path d="M9 25 C12 23 20 27 23 25" stroke="#3f6168" stroke-width="1.8" fill="none"/>',
  pan: '<rect x="4" y="9" width="24" height="15" rx="1.5" fill="#a48764" stroke="#2d2a24" stroke-width="1.5"/><rect x="7.5" y="12" width="17" height="9" fill="#f3efe4" stroke="#8a7a62"/><path d="M10 17 l2 -2 l2 2 M17 15 l2 -2 l2 2" stroke="#c9bfae" fill="none"/>',
  weir: '<path d="M4 12 L16 20 L28 12" stroke="#b0975f" stroke-width="4" fill="none" stroke-linejoin="round"/><g stroke="#4a3b2c" stroke-width="1.8"><path d="M4 8 V16"/><path d="M10 12 V20"/><path d="M16 16 V24"/><path d="M22 12 V20"/><path d="M28 8 V16"/></g><path d="M3 27 C9 24 23 30 29 26" stroke="#3f6168" stroke-width="1.8" fill="none"/>',
};

export const TOOLS = [
  { id: 'hand', key: '1', name: 'Work', cost: 'click works' },
  { id: 'dig', key: '2', name: 'Channel', cost: `${COST.dig} / cell` },
  { id: 'gate', key: '3', name: 'Sluice', cost: `${COST.gate}` },
  { id: 'pan', key: '4', name: 'Salt pan', cost: `${COST.pan}` },
  { id: 'weir', key: '5', name: 'Fish weir', cost: `${COST.weir}` },
  { id: 'oyster', key: '6', name: 'Oyster bed', cost: `${COST.oyster}` },
  { id: 'causeway', key: '7', name: 'Causeway', cost: `${COST.causeway} / cell` },
  { id: 'dredge', key: '8', name: 'Dredge', cost: '8 / 14' },
];

export class Hud {
  constructor(game, onTool, onSpeed) {
    this.game = game;
    this.chart = $('chart'); this.cx = this.chart.getContext('2d');
    this.moon = $('moon'); this.mx = this.moon.getContext('2d');
    this.lastStore = { salt: -1, fish: -1, coin: -1 };
    this.highlightLevel = null;
    const tray = $('tools');
    tray.innerHTML = TOOLS.map((t) => `<button class="tool${t.id === 'hand' ? ' on' : ''}" data-tool="${t.id}" aria-label="${t.name}, shortcut ${t.key}" aria-describedby="tool-help">
      <svg viewBox="0 0 32 32">${ICON[t.id]}</svg><span class="nm">${t.name}<span class="key">${t.key}</span></span><span class="cs">${t.cost}</span></button>`).join('');
    tray.addEventListener('click', (e) => {
      const b = e.target.closest('[data-tool]');
      if (b) onTool(b.dataset.tool);
    });
    const showToolHelp = (e) => {
      const b = e.target.closest('[data-tool]');
      if (!b) return;
      const t = TOOLS.find(t => t.id === b.dataset.tool);
      const help = $('tool-help');
      help.innerHTML = `<b>${t.name} · ${t.key}</b><span>${TOOL_HELP[t.id]}</span>`;
      help.hidden = false;
      const r = b.getBoundingClientRect(), w = help.offsetWidth;
      help.style.left = Math.max(8, Math.min(innerWidth - w - 8, r.x + r.width / 2 - w / 2)) + 'px';
      help.style.bottom = (innerHeight - r.top + 14) + 'px';
    };
    tray.addEventListener('pointerover', showToolHelp);
    tray.addEventListener('focusin', showToolHelp);
    tray.addEventListener('pointerleave', () => { $('tool-help').hidden = true; });
    tray.addEventListener('focusout', () => { $('tool-help').hidden = true; });
    tray.addEventListener('click', () => { $('tool-help').hidden = true; });
    $('speed').addEventListener('click', (e) => {
      const b = e.target.closest('[data-speed]');
      if (b) onSpeed(+b.dataset.speed);
    });
    this.tip = $('tip'); this.hint = $('hint');
    $('market').innerHTML = GOODS.map((good) => `<tr><td>${good}<small id="rec-${good}"></small></td><td id="price-${good}"></td><td><button class="btn" data-cargo="${good}" aria-pressed="true">Selling: ON</button></td></tr>`).join('');
    $('market').addEventListener('click', (e) => {
      const b = e.target.closest('[data-cargo]');
      if (b) {
        const good = b.dataset.cargo;
        game.economy.toggle(good); this.updateEconomy();
        const on = game.economy.selling[good];
        this.message(on ? `Selling ${good} at the next landing: ON.` : `Selling ${good} at the next landing: OFF. It stays in store until you switch it back ON.`, 3200);
      }
    });
    $('play-again').addEventListener('click', () => location.reload());
    $('goal-progress').max = SEASON_TARGET;
    $('trade-fold').addEventListener('click', () => { const f = $('trade-card').classList.toggle('folded'); $('trade-fold').textContent = f ? 'Open' : 'Fold'; $('trade-fold').setAttribute('aria-expanded', String(!f)); });
    $('works-tools').innerHTML = UNLOCKS.map(u => `<button class="btn" data-work="${u.id}" title="${u.detail}"><b>${u.name} <span class="key">${u.key}</span></b><span>${u.cost} sh · day ${u.day}</span></button>`).join('');
    $('works-tools').addEventListener('click', e => { const b = e.target.closest('[data-work]'); if (b) onTool(b.dataset.work); });
    this.fitChart();
    this.chartResize = new ResizeObserver(() => { this.fitChart(); this.drawChart(); });
    this.chartResize.observe(this.chart);
  }

  fitChart() {
    const r = this.chart.getBoundingClientRect();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const width = Math.max(1, Math.round(r.width * dpr));
    const height = Math.max(1, Math.round(r.height * dpr));
    if (this.chart.width !== width) this.chart.width = width;
    if (this.chart.height !== height) this.chart.height = height;
    this.dpr = dpr;
  }

  setTool(id) {
    for (const b of document.querySelectorAll('.tool')) b.classList.toggle('on', b.dataset.tool === id);
    for (const b of document.querySelectorAll('[data-work]')) b.classList.toggle('on', b.dataset.work === id);
    const u = UNLOCKS.find(u => u.id === id);
    $('repair').classList.toggle('on', id === 'repair');
    $('work-help').textContent = u ? u.detail : id === 'repair' ? 'Click damaged works after the surge. Repairs cost 24 shillings and take 10 seconds.' : '';
  }

  setSpeed(speed, paused) {
    for (const b of document.querySelectorAll('[data-speed]')) {
      const s = +b.dataset.speed;
      b.classList.toggle('on', paused ? s === 0 : s === speed);
    }
    $('paused').classList.toggle('show', paused);
  }

  update() {
    const g = this.game, t = g.t;
    $('clock').textContent = `Day ${Math.min(tide.SEASON_DAYS + 1, tide.dayNumber(t))} · ${tide.clockText(t)}`;
    $('spring').textContent = tide.springNeapWord(t);
    const lv = tide.level(t), rt = tide.rate(t);
    $('level').textContent = `${lv >= 0 ? '+' : '−'}${Math.abs(lv).toFixed(2)} m`;
    $('trend').textContent = Math.abs(rt) < 0.004 ? 'slack water' : rt > 0 ? 'flood, rising' : 'ebb, falling';
    const nh = tide.nextTurn(t, 'high'), nl = tide.nextTurn(t, 'low');
    const first = nh < nl ? `High ${tide.clockText(nh)}` : `Low ${tide.clockText(nl)}`;
    $('nexts').textContent = first;
    for (const k of ['salt', 'fish', 'oysters', 'coin']) {
      const v = k === 'coin' ? Math.round(g.store[k] * 10) / 10 : Math.floor(g.store[k]);
      if (v !== this.lastStore[k]) {
        const el = $('st-' + k);
        el.querySelector('b').textContent = k === 'coin' ? v.toFixed(1) : v;
        if (this.lastStore[k] >= 0 && v > this.lastStore[k]) { el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); }
        this.lastStore[k] = v;
      }
    }
    this.updateEconomy();
    this.drawChart();
    this.drawMoon();
  }

  updateEconomy() {
    const g = this.game, e = g.economy;
    const nextHigh = e.state === 'leaving' ? tide.nextTurn(e.high + 2, 'high') : e.high;
    const left = Math.max(0, nextHigh - 1.5 - g.t);
    $('boat-status').textContent = ({ away: 'Waiting offshore', arriving: 'Sailing up the creek', docked: `At the quay · room for ${e.capacity} cargo`, leaving: 'Out on the ebb', sheltering: 'Sheltering from the surge' })[e.state];
    $('boat-next').textContent = e.state === 'sheltering' ? 'Trade resumes after the storm. Stilt homes shelter stored cargo.' : e.state === 'docked' ? `Trading until the ebb. Holds ${e.cap()} cargo per visit.` : (nextHigh - 1.5 >= SEASON_END ? `No more landings: the season account is drawn at Day ${tide.SEASON_DAYS + 1} · 14:00, before the trader returns.` : `Next landing ${tide.clockText(nextHigh - 1.5)} · ${Math.ceil(left)}s at 1×`);
    if (!this.traderSeen && (e.state === 'docked' || e.visits > 0)) {
      this.traderSeen = true; $('trade-card').hidden = false;
      if (e.visits <= 1 && g.t - tide.START_T < tide.DAY) this.message('The trader has landed. The trade panel is at right: marked cargo sells at every high water.', 6000);
    }
    const qn = e.nextQuay(), qb = $('quay-btn');
    qb.hidden = !qn;
    if (qn) { qb.textContent = e.quayOpen() ? `Add a quay berth · +24 cargo per visit · ${qn.cost} sh` : `Quay berth: opens day ${qn.day} · ${qn.cost} sh`; qb.disabled = g.ended || !e.quayOpen(); }
    for (const good of GOODS) {
      $('price-' + good).textContent = e.price(good).toFixed(1);
      const rd = e.recoverDays(good), held = Math.floor(g.store[good]);
      $('rec-' + good).textContent = rd === 0 ? `at its usual price (${BASE_PRICE[good].toFixed(1)})` : `price recovers to ${BASE_PRICE[good].toFixed(1)} in about ${rd < 1 ? 'a day' : rd < 1.5 ? '1 day' : Math.round(rd) + ' days'} if you hold it${held ? ` · ${held} in store` : ''}`;
      const b = document.querySelector(`[data-cargo="${good}"]`);
      b.textContent = e.selling[good] ? 'Selling: ON' : 'Selling: OFF';
      b.title = `${good}: ${e.selling[good] ? 'will be sold at the next landing. Click to keep it in store instead.' : 'kept in store, not sold. Click to sell it at the next landing.'}`;
      b.setAttribute('aria-label', `Selling ${good} at next landing: ${e.selling[good] ? 'ON' : 'OFF'}`);
      b.classList.toggle('holding', !e.selling[good]);
      b.setAttribute('aria-pressed', String(e.selling[good]));
    }
    $('ledger-summary').textContent = `Ledger · +${e.earned.toFixed(1)} earned / −${e.spent.toFixed(1)} spent`;
    const rows = e.ledger.map((r) => `<div class="receipt"><span>${tide.clockText(r.t)} · ${r.label}</span><b>${r.amount >= 0 ? '+' : '−'}${Math.abs(r.amount).toFixed(1)}</b></div>`).join('');
    if (this.receipts !== rows) { $('ledger').innerHTML = rows; this.receipts = rows; }
    $('goal-title').textContent = `Goal: ${SEASON_TARGET} shillings by Day ${tide.SEASON_DAYS + 1} · 14:00`;
    $('goal-progress').max = SEASON_TARGET;
    $('goal-text').textContent = `${e.earned.toFixed(1)} / ${SEASON_TARGET} shillings earned from trade`;
    $('goal-progress').value = e.earned;
    $('goal-master').textContent = e.earned >= MASTER_TARGET ? `Master trader: ${MASTER_TARGET} reached` : `Master trader: ${MASTER_TARGET}${e.earned >= SEASON_TARGET ? ` · ${Math.ceil(MASTER_TARGET - e.earned)} to go` : ' (second goal)'}`;
    const pl = e.plan(), pg = GOODS.filter(x => e.selling[x]), lost = GOODS.filter(x => e.selling[x] && pl.left[x] > 0);
    const worth = lost.reduce((s, x) => s + pl.left[x] * e.price(x), 0);
    $('cargo-plan').textContent = `Next landing takes ${pl.total} of ${pg.reduce((s, x) => s + Math.floor(g.store[x]), 0)} (room ${pl.room}, highest price first): ${GOODS.map(x => `${x} ${pl.takes[x]}`).join(', ')}.${lost.length ? ` Left over: ${lost.map(x => `${pl.left[x]} ${x}`).join(', ')} (about ${Math.round(worth)} sh). Hold is full: add a quay berth or turn a cheap cargo OFF.` : ''}`;
    $('cargo-plan').classList.toggle('warn', lost.length > 0);
    $('goal-time').textContent = e.earned >= SEASON_TARGET ? (g.storm.passed ? `Surge ${g.storm.account().score}/100 · repair damage before season end` : 'Trade goal met. Weather the surge with at least 70/100.') : `${Math.ceil(Math.max(0, SEASON_END - g.t) / tide.DAY)} tide-days left${g.storm.passed ? '' : g.storm.active ? ' · the surge is here' : ' · prepare for the surge on day 13'}`;
    $('hand-summary').textContent = `Village hands · ${g.people.hands.length} / ${g.works.maxHands()}`;
    const hp = g.people.hireProblem(), full = g.people.hands.length >= g.works.maxHands();
    $('hire').disabled = g.ended || full || g.store.coin < 24;
    $('hire').title = full ? `Homes support ${g.works.maxHands()} hands: a stilt house adds two.` : g.store.coin < 24 ? 'Hiring costs 24 shillings.' : hp ? `Hire anyway: ${hp}. Wages run at 6 sh per landing.` : 'Hire a hand: 24 sh, then 6 sh per landing.';
    $('hire').classList.toggle('warn', !!hp);
    $('hire-note').textContent = hp ? `Needs a causeway: hands cannot reach ${hp.slice(hp.indexOf('reach ') + 6).replace(/ on dry ground.*/, '')}.` : '';
    const idle = g.oysters.filter(o => o.stock >= 2 && !g.people.hands.some(h => h.job === o));
    $('hand-note').textContent = idle.length ? `${idle.map(o => `Oysters ${g.oysters.indexOf(o) + 1}: ${Math.floor(o.stock)} ready, no hand`).join(' · ')}. A hand does one work only: set a hand's work to the bed, or rake it yourself at low water.` : (g.oysters.length && g.people.hands.length ? 'Each hand tends one work. Oyster beds are raked only by a hand set to that bed.' : '');
    const jobs = g.people.jobs(), version = `${jobs.length}:${g.people.hands.length}`;
    if (this.handsVersion !== version) {
      $('hands').innerHTML = g.people.hands.map((h, n) => `<div class="hand-row"><label>${h.name} <select data-hand="${n}" aria-label="${h.name}'s work">${jobs.map((j, k) => `<option value="${k}" ${j.thing === h.job ? 'selected' : ''}>${j.label}</option>`).join('')}</select></label><span id="hand-${n}"></span><button class="btn fix" data-fix="${n}" hidden>Build a causeway to ${h.job === undefined ? 'it' : jobs.find(j => j.thing === h.job)?.label || 'its work'}</button></div>`).join('');
      this.handsVersion = version;
    }
    g.people.hands.forEach((h, n) => { $('hand-' + n).textContent = h.status; const f = document.querySelector(`[data-fix="${n}"]`); if (f) { f.hidden = !/Cut off|No dry route|causeway/.test(h.status); const ft = `Fix: build a causeway to ${jobs.find(j => j.thing === h.job)?.label || 'its work'}`; if (f.textContent !== ft) f.textContent = ft; } });
    $('works-card').hidden = g.works.day() < 3;
    for (const u of UNLOCKS) {
      const b = document.querySelector(`[data-work="${u.id}"]`);
      b.disabled = g.ended || !g.works.unlocked(u.id);
      b.lastElementChild.textContent = g.works.unlocked(u.id) ? `${u.cost} sh` : `Opens day ${u.day}`;
    }
    const next = UNLOCKS.find(u => !g.works.unlocked(u.id));
    $('works-next').textContent = next ? `Next: ${next.name.toLowerCase()} on day ${next.day}` : (({ braced, total, text }) => `${braced} / ${total} works protected · ${text}`)(g.works.stormPlan());
    const wr = g.works.rates(), working = g.works.pumps.filter(p => p.active).length;
    $('power').textContent = g.works.mills.length ? `Mill power ${Math.floor(g.works.energy)} / ${g.works.mills.length * 120} · ${g.works.mills.some(m => m.output > 0.05) ? 'wheel turning' : 'wheel resting (slack water)'} · ${working} of ${g.works.pumps.length} pumps working${wr ? ` · per tide-day: +${wr.gen.toFixed(0)} power, pumps use ${wr.used.toFixed(0)}, lift ${wr.lifted.toFixed(1)} m³` : ''}` : 'Build with the tide. Prepare for the equinox.';
    const silted = !g.sediment.job && g.pans.some(p => !p.maintaining && g.sediment.panDepth(p) > 0.16 && p.V / p.cells.length < 0.05);
    document.querySelector('.tool[data-tool="dredge"]')?.classList.toggle('attn', silted && !g.ended && !document.querySelector('.tool[data-tool="dredge"]').classList.contains('on'));
    const job = g.sediment.job;
    $('dredge-status').textContent = job ? `Dredging · ${Math.ceil(job.left)}s left${job.wet > 0.25 ? ' · waiting for the ebb' : ''}` : `Silt in first pan: ${(g.sediment.panDepth(g.pans[0]) * 100).toFixed(0)} cm · Dredge (8)`;
    const storm = g.storm;
    $('storm-note').hidden = !storm.warned;
    $('storm-title').textContent = storm.passed ? `Surge passed · ${storm.account().grade}` : storm.active ? 'Storm surge · hold your sluices shut' : `Surge on day 13 · ${Math.ceil(tide.SURGE_START - g.t)}s to landfall`;
    $('storm-detail').textContent = storm.passed ? `${storm.damageCount} damaged works · ${storm.cargoLost} cargo lost · Repair (R)` : (({ braced, total, text }) => `Forecast crest +2.9 m. ${braced} / ${total} works protected. ${text}`)(g.works.stormPlan());
    const pa = g.works.protectAllInfo();
    $('storm-cost').textContent = pa.live && pa.n ? `Protect all ${pa.n}: ${pa.all} sh (you have ${Math.floor(g.store.coin)}).${pa.afford < pa.n ? ` Cheapest ${pa.afford || 0}: ${pa.afford * pa.cost} sh now.` : ''}` : '';
    $('protect-all').hidden = !(pa.live && pa.n);
    $('protect-all').disabled = pa.afford < 1;
    const paText = pa.afford ? `Protect ${pa.afford} work${pa.afford > 1 ? 's' : ''} now · ${pa.afford * pa.cost} sh` : `Need ${pa.cost} sh for one bank`;
    if ($('protect-all').textContent !== paText) $('protect-all').textContent = paText;
    $('repair').disabled = g.ended || !storm.passed;
    $('repair-status').textContent = storm.repairJob ? `Repairing ${storm.repairJob.thing.name.toLowerCase()} · ${Math.ceil(storm.repairJob.left)}s` : storm.passed ? `${storm.account().unrepaired} works need repair` : '';
    const top = $('card').getBoundingClientRect().bottom + 10;
    $('works-card').style.top = `${top}px`;
    $('works-card').style.maxHeight = `${Math.max(80, $('tools').getBoundingClientRect().top - top - 14)}px`;
    if (g.ended && !this.endShown) this.showEnd();
  }

  showEnd() {
    this.endShown = true;
    const r = this.game.result;
    $('end-title').textContent = r.success ? 'A living, through the storm.' : 'Every tide teaches.';
    const goalPart = r.tradeSuccess ? `Goal met: ${r.earned.toFixed(1)} of ${SEASON_TARGET} shillings traded.` : `Goal missed by ${Math.max(1, Math.round(SEASON_TARGET - r.earned))} shillings.`;
    const masterPart = r.master ? `Master trader: ${MASTER_TARGET} reached.` : r.tradeSuccess ? `Master trader (${MASTER_TARGET}): missed by ${Math.max(1, Math.round(MASTER_TARGET - r.earned))}.` : '';
    $('end-verdict').textContent = [goalPart, masterPart, `${r.storm.grade}: ${r.storm.score}/100 through the surge${r.storm.score >= 70 ? '' : ' (70 needed)'}.`].filter(Boolean).join(' ');
    $('end-sub').textContent = `${r.earned.toFixed(1)} / ${SEASON_TARGET} shillings traded. ${r.success ? 'Your water machine held.' : 'The account shows what your next season can protect.'}`;
    const rows = [
      ['Salt raked · score at list value 2 each', `${r.salt} × 2 = ${r.salt * 2} points (not money)`], ['Fish landed · score at list value 3 each', `${r.fish} × 3 = ${r.fish * 3} points (not money)`],
      ['Oysters gathered · score at list value 4 each', `${r.oysters} × 4 = ${r.oysters * 4} points (not money)`],
      ['Salt sold at the quay (prices actually paid)', `${r.sold.salt} for ${r.revenue.salt.toFixed(1)} sh · ${r.sold.salt ? (r.revenue.salt / r.sold.salt).toFixed(1) : '0.0'} each`],
      ['Fish sold at the quay (prices actually paid)', `${r.sold.fish} for ${r.revenue.fish.toFixed(1)} sh · ${r.sold.fish ? (r.revenue.fish / r.sold.fish).toFixed(1) : '0.0'} each`],
      ['Oysters sold at the quay (prices actually paid)', `${r.sold.oysters} for ${r.revenue.oysters.toFixed(1)} sh · ${r.sold.oysters ? (r.revenue.oysters / r.sold.oysters).toFixed(1) : '0.0'} each`],
      ['Trade income (the three sales above added up)', `+${r.earned.toFixed(1)}`],
      ['Salt dissolved by floods', `−${r.losses}`], ['Stormkeeping bonus', `${r.storm.score} × 10 = ${r.storm.score * 10}`], ['Season score = trade income + list-value points − dissolved salt + stormkeeping', `${r.earned.toFixed(1)} + ${r.salt * 2 + r.fish * 3 + r.oysters * 4} − ${r.losses} + ${r.storm.score * 10} = ${r.score}`],
      ['Surge damage / exposed works', `${r.storm.damaged} / ${r.storm.total}`], ['Works repaired / still damaged', `${r.storm.repaired} / ${r.storm.unrepaired}`],
      ['Cargo swept away', `${r.storm.cargoLost} · salt ${r.storm.losses.salt}, fish ${r.storm.losses.fish}, oysters ${r.storm.losses.oysters}`],
      ['Highest storm water', `+${r.storm.peak.toFixed(2)} m`], ['Dredging completed', `${r.dredges} jobs · ${r.siltRemoved} m³`],
      ['Mill power / brine lifted', `${r.power} power · ${r.lifted} m³`],
      ['Harvest gathered by hands', r.workerHarvest], ['Wet footing', `${r.wetSeconds} worker-seconds`],
      ['Building & hiring costs', `${r.spent.toFixed(1)} sh`], ['Closing purse', `${r.coin.toFixed(1)} sh`],
      ['Cargo sold', `${r.sold.salt} salt · ${r.sold.fish} fish · ${r.sold.oysters} oysters`],
      ['Unsold stores', `${r.stock.salt} salt · ${r.stock.fish} fish · ${r.stock.oysters} oysters`],
    ];
    $('score-lines').innerHTML = rows.map(([label, value]) => `<div class="receipt"><span>${label}</span><b>${value}</b></div>`).join('');
    $('end-card').hidden = false;
    $('paused').classList.remove('show');
    this.hideHint(); this.hideTip();
    $('play-again').focus();
  }

  drawChart() {
    const c = this.cx, Wc = this.chart.width, Hc = this.chart.height, d = this.dpr;
    const t = this.game.t;
    const span = tide.DAY * 0.75, t0 = t - tide.DAY * 0.12, t1 = t0 + span;
    const y0 = -1.6, y1 = t1 >= tide.SURGE_START && t0 <= tide.SURGE_END ? 3.5 : 2.0;
    const X = (tt) => ((tt - t0) / span) * Wc;
    const Y = (v) => Hc - ((v - y0) / (y1 - y0)) * Hc;
    c.clearRect(0, 0, Wc, Hc);
    // paper with faint hour lines
    c.fillStyle = '#f7efdc'; c.fillRect(0, 0, Wc, Hc);
    c.strokeStyle = '#d9c9a6'; c.lineWidth = 1;
    const hourT = tide.DAY / 24;
    for (let tt = Math.ceil(t0 / hourT) * hourT; tt < t1; tt += hourT) {
      const h = Math.round(tide.hourOf(tt));
      c.globalAlpha = h % 6 === 0 ? 0.9 : 0.35;
      c.beginPath(); c.moveTo(X(tt), 0); c.lineTo(X(tt), Hc); c.stroke();
      if (h % 6 === 0) {
        c.fillStyle = '#8a7c62'; c.font = `${13 * d}px 'Alegreya Sans', sans-serif`;
        const label = `${String(h % 24).padStart(2, '0')}:00`;
        c.fillText(label, Math.max(3 * d, Math.min(Wc - c.measureText(label).width - 3 * d, X(tt) + 3 * d)), Hc - 4 * d);
      }
    }
    c.globalAlpha = 1;
    // night shading
    c.fillStyle = 'rgba(48,58,90,0.10)';
    for (let tt = t0; tt < t1; tt += hourT / 4) {
      const s = tide.sunState(tt);
      if (s.dayFrac < 0 || s.dayFrac > 1) c.fillRect(X(tt), 0, X(tt + hourT / 4) - X(tt) + 1, Hc);
    }
    // reference levels: pan floor and bund top
    const ref = (v, label, col) => {
      c.setLineDash([4 * d, 4 * d]); c.strokeStyle = col; c.lineWidth = 1.2 * d;
      c.beginPath(); c.moveTo(0, Y(v)); c.lineTo(Wc, Y(v)); c.stroke(); c.setLineDash([]);
      c.fillStyle = col; c.font = `${13 * d}px 'Alegreya Sans', sans-serif`;
      c.fillText(label, Wc - c.measureText(label).width - 4 * d, Math.max(14 * d, Y(v) - 3 * d));
    };
    ref(this.game.panFloor(this.game.pans[0]), 'pan floor', '#9a7a52');
    ref(BUND, 'bank top', '#9a4b31');
    if (y1 > 2) ref(3.05, 'storm banks', '#47736c');
    // the tide curve with a wash under it
    c.beginPath();
    for (let x = 0; x <= Wc; x += 2 * d) {
      const v = tide.level(t0 + (x / Wc) * span);
      x === 0 ? c.moveTo(x, Y(v)) : c.lineTo(x, Y(v));
    }
    c.lineTo(Wc, Hc); c.lineTo(0, Hc); c.closePath();
    c.fillStyle = 'rgba(63,97,104,0.16)'; c.fill();
    c.beginPath();
    for (let x = 0; x <= Wc; x += 2 * d) {
      const v = tide.level(t0 + (x / Wc) * span);
      x === 0 ? c.moveTo(x, Y(v)) : c.lineTo(x, Y(v));
    }
    c.strokeStyle = '#2f4b52'; c.lineWidth = 2 * d; c.stroke();
    // turning points
    c.font = `700 ${13 * d}px 'Alegreya Sans', sans-serif`;
    let tt = t0;
    for (let n = 0; n < 4; n++) {
      const hi = tide.nextTurn(tt, 'high'), lo = tide.nextTurn(tt, 'low');
      for (const [when, word] of [[hi, 'HW'], [lo, 'LW']]) {
        if (when < t1 && when > t0) {
          const v = tide.level(when);
          c.fillStyle = '#2f4b52';
          c.beginPath(); c.arc(X(when), Y(v), 2.6 * d, 0, 7); c.fill();
          const label = `${word} ${tide.clockText(when)}`, width = c.measureText(label).width;
          const labelY = word === 'HW' ? Y(v) + (Y(v) < 24 * d ? 18 : -7) * d : Y(v) + (Y(v) > Hc - 34 * d ? -8 : 16) * d;
          c.fillText(label, Math.max(3 * d, Math.min(Wc - width - 3 * d, X(when) - width / 2)), Math.max(14 * d, Math.min(Hc - 18 * d, labelY)));
        }
      }
      tt = Math.min(hi, lo) + 1;
    }
    // now
    const nx = X(t), nv = tide.level(t);
    c.strokeStyle = '#a8834e'; c.lineWidth = 2 * d;
    c.beginPath(); c.moveTo(nx, 0); c.lineTo(nx, Hc); c.stroke();
    c.fillStyle = '#a8834e'; c.beginPath(); c.arc(nx, Y(nv), 4.5 * d, 0, 7); c.fill();
    c.strokeStyle = '#2d2a24'; c.lineWidth = 1.2 * d; c.stroke();
    c.fillStyle = '#7d5f33'; c.font = `700 ${13 * d}px 'Alegreya Sans', sans-serif`;
    c.fillText('now', nx + 5 * d, 14 * d);
  }

  drawMoon() {
    const c = this.mx, s = this.moon.width, r = s * 0.4, cx = s / 2, cy = s / 2;
    const ph = tide.moonPhase(this.game.t) % (Math.PI * 2);
    c.clearRect(0, 0, s, s);
    c.fillStyle = '#2b3349'; c.beginPath(); c.arc(cx, cy, r + 3, 0, 7); c.fill();
    c.fillStyle = '#3e4766'; c.beginPath(); c.arc(cx, cy, r, 0, 7); c.fill();
    // lit part: half disc plus an ellipse of the terminator
    const k = Math.cos(ph); // 1 new .. -1 full
    const waxing = ph < Math.PI;
    c.fillStyle = '#f1ead6';
    c.beginPath();
    c.arc(cx, cy, r, -Math.PI / 2, Math.PI / 2, !waxing);
    c.ellipse(cx, cy, Math.abs(k) * r, r, 0, Math.PI / 2, -Math.PI / 2, waxing ? k > 0 : k < 0);
    c.fill();
    c.strokeStyle = '#a8834e'; c.lineWidth = 2; c.beginPath(); c.arc(cx, cy, r + 3, 0, 7); c.stroke();
  }

  showTip(x, y, name, lines, action, bad = false) {
    const tip = this.tip;
    tip.hidden = false;
    tip.classList.toggle('bad', !!bad);
    tip.querySelector('.n').textContent = name;
    tip.querySelector('.l').innerHTML = lines.join('<br>');
    tip.querySelector('.a').textContent = action || '';
    tip.classList.add('show');
    const w = tip.offsetWidth, h = tip.offsetHeight;
    tip.style.left = Math.max(8, Math.min(window.innerWidth - w - 8, x + 18)) + 'px';
    // the tooltip never sits on the toolbar: above it unless the pointer itself is on the toolbar
    const trayTop = $('tools').getBoundingClientRect().top;
    const maxTop = y < trayTop ? trayTop - h - 8 : window.innerHeight - h - 8;
    tip.style.top = Math.max(8, Math.min(maxTop, y + 18)) + 'px';
    this.separateHint();
  }

  // a hint card yields to the tooltip when they would overlap (they say the same thing about the same place)
  separateHint() {
    const a = this.hint.getBoundingClientRect(), b = this.tip.getBoundingClientRect();
    this.hintCovered = this.hint.classList.contains('show') && this.tip.classList.contains('show')
      && a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
    this.hint.style.visibility = this.hintCovered ? 'hidden' : '';
  }
  hideTip() { this.tip.classList.remove('show'); this.tip.hidden = true; this.hint.style.visibility = ''; }

  showHint(text, sub, sx, sy, free, below = false) {
    const h = this.hint;
    if (h.dataset.text !== text + sub) {
      h.querySelector('.t').textContent = text;
      h.querySelector('.s').textContent = sub || '';
      h.dataset.text = text + sub;
    }
    h.classList.toggle('free', !!free);
    h.classList.toggle('below', !free && below);
    const w = h.offsetWidth, hh = h.offsetHeight;
    const x = Math.max(w / 2 + 8, Math.min(window.innerWidth - w / 2 - 8, sx));
    h.style.left = x + 'px';
    if (!free && below) {
      const floor = document.getElementById('tools').getBoundingClientRect().top - hh - 30;
      h.style.top = Math.max(8, Math.min(floor, sy)) + 'px';
    } else h.style.top = Math.max(hh + (free ? 8 : 26), sy) + 'px';
    h.classList.add('show');
    if (this.tip.classList.contains('show')) this.separateHint(); else h.style.visibility = '';
  }
  hideHint() { this.hint.classList.remove('show'); }
  // keep the hint bubble off the gate OPEN/SHUT pills: slide it away from the bubble's anchor until it clears
  avoidRects(rects, below) {
    const h = this.hint;
    for (let n = 0; n < 4; n++) {
      const r = h.getBoundingClientRect();
      const hit = rects.find(p => r.left < p.right && r.right > p.left && r.top < p.bottom && r.bottom > p.top);
      if (!hit) return;
      h.style.top = (parseFloat(h.style.top) + (below ? hit.bottom + 6 - r.top : -(r.bottom - hit.top + 6))) + 'px';
    }
  }

  // one-line notes stacked under the top edge: the clock hold, the trader cue, the idle nudge
  note(id, text) {
    const el = $(id);
    if (text) { if (el.textContent !== text) el.textContent = text; el.classList.add('show'); } else el.classList.remove('show');
  }

  gain(sx, sy, text) {
    const el = document.createElement('div');
    el.className = 'gain'; el.textContent = text;
    el.style.left = sx + 'px'; el.style.top = sy + 'px';
    $('hud').appendChild(el);
    setTimeout(() => el.remove(), 1700);
  }

  message(text, ms = 2200) {
    const m = $('msg');
    m.textContent = text; m.classList.add('show');
    clearTimeout(this._mt);
    this._mt = setTimeout(() => m.classList.remove('show'), ms);
  }
}
