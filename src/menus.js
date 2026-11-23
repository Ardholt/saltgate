// Title screen, settings panel, pause and new-season confirmation.
// This file only owns the DOM and focus; what the choices do is passed in by main.js.
import { settingsStorage } from './settings.js';

const $ = (id) => document.getElementById(id);
const FOCUSABLE = 'button:not([disabled]), input:not([disabled]), [href], select, [tabindex]:not([tabindex="-1"])';

export function createMenus({ settings, applySettings, canvas, hud, game, clockText, onNewSeason, onModal }) {
  const title = $('sg-title-screen'), veil = $('sg-title-veil');
  const overlays = { settings: $('sg-settings-overlay'), pause: $('sg-pause-overlay'), confirm: $('sg-pause-confirm-overlay') };
  const hudEl = $('hud');
  let onTitle = true, settingsFrom = 'title', current = null, returnFocus = null, cb = {};

  const modal = () => onTitle || Object.values(overlays).some((o) => !o.hidden);
  // the live HUD sits under overlays and is not reachable while one is open
  function sync() {
    const overlayOpen = Object.values(overlays).some((o) => !o.hidden);
    hudEl.inert = onTitle || overlayOpen;
    if (overlayOpen) hudEl.setAttribute('aria-hidden', 'true'); else hudEl.removeAttribute('aria-hidden');
    title.inert = overlays.settings && !overlays.settings.hidden;
    onModal(modal());
  }
  function show(name, focusId) {
    for (const [k, o] of Object.entries(overlays)) o.hidden = k !== name;
    current = name;
    sync();
    const el = overlays[name];
    ($(focusId) || el.querySelector(FOCUSABLE))?.focus();
  }
  function hideOverlays() { for (const o of Object.values(overlays)) o.hidden = true; current = null; sync(); }

  // ----------------------------------------------------------- title
  function showTitle(saveSummary) {
    onTitle = true;
    const has = !!saveSummary;
    $('sg-btn-continue').hidden = !has;
    if (has) $('sg-save-summary').textContent = saveSummary;
    $('sg-btn-new').className = 'sg-btn ' + (has ? 'sg-btn--title-secondary' : 'sg-btn--title-primary');
    title.hidden = veil.hidden = false; hudEl.hidden = true;
    sync();
    (has ? $('sg-btn-continue') : $('sg-btn-new')).focus();
  }
  function leaveTitle() {
    onTitle = false;
    title.hidden = veil.hidden = true; hudEl.hidden = false;
    sync();
    canvas.focus();
  }
  $('sg-btn-continue').addEventListener('click', () => { leaveTitle(); cb.continue?.(); });
  $('sg-btn-new').addEventListener('click', () => { leaveTitle(); cb.new?.(); });
  $('sg-btn-settings').addEventListener('click', () => { settingsFrom = 'title'; returnFocus = $('sg-btn-settings'); show('settings', 'sg-vol-master'); });

  // -------------------------------------------------------- settings
  const sliders = { master: $('sg-vol-master'), music: $('sg-vol-music'), effects: $('sg-vol-effects') };
  const paint = (k) => { const s = sliders[k]; s.style.setProperty('--sg-fill', s.value + '%'); $('sg-vol-' + k + '-out').textContent = s.value + '%'; };
  const persist = () => { if (!settingsStorage.write(settings)) $('sg-settings-note').textContent = 'This browser will not keep settings; they last until you close the tab.'; };
  for (const [k, s] of Object.entries(sliders)) {
    s.value = settings[k]; paint(k);
    s.addEventListener('input', () => { settings[k] = +s.value; paint(k); applySettings(settings); persist(); });
    s.addEventListener('keydown', (e) => {
      if (e.key !== 'PageUp' && e.key !== 'PageDown') return;
      e.preventDefault();
      s.value = Math.max(0, Math.min(100, +s.value + (e.key === 'PageUp' ? 10 : -10)));
      s.dispatchEvent(new Event('input'));
    });
  }
  for (const r of document.querySelectorAll('input[name="quality"]')) {
    r.checked = r.value === settings.quality;
    r.addEventListener('change', () => { if (!r.checked) return; settings.quality = r.value; applySettings(settings); persist(); });
  }
  const noteEl = document.querySelector('#sg-settings-overlay .sg-panel-footer .sg-help-note');
  if (noteEl) noteEl.id = 'sg-settings-note';
  function closeSettings() {
    hideOverlays();
    if (settingsFrom === 'pause') show('pause', 'sg-pause-settings');
    else { sync(); (returnFocus || $('sg-btn-settings'))?.focus(); }
  }
  $('sg-settings-back').addEventListener('click', closeSettings);
  $('sg-settings-close').addEventListener('click', closeSettings);

  // ----------------------------------------------------------- pause
  const playing = () => !onTitle && !game.held && !game.ended && !modal();
  function openPause() {
    if (!playing()) return false;
    game.paused = true; hud.setSpeed(game.speed, true);
    $('sg-pause-eyebrow').textContent = 'Saltgate · ' + clockText();
    show('pause', 'sg-pause-resume');
    return true;
  }
  function resume() {
    hideOverlays();
    game.paused = false; hud.setSpeed(game.speed, false);
    canvas.focus();
  }
  $('sg-pause-resume').addEventListener('click', resume);
  $('sg-pause-menu').addEventListener('click', () => cb.mainMenu?.());
  $('sg-pause-settings').addEventListener('click', () => { settingsFrom = 'pause'; show('settings', 'sg-vol-master'); });
  $('sg-pause-new').addEventListener('click', () => { $('sg-confirm-season').textContent = cb.summary?.() || clockText(); show('confirm', 'sg-confirm-cancel'); });
  $('sg-confirm-cancel').addEventListener('click', () => show('pause', 'sg-pause-new'));
  $('sg-confirm-ok').addEventListener('click', () => { hideOverlays(); onNewSeason(); });
  const menuBtn = $('menu-btn');
  menuBtn.addEventListener('click', () => { openPause(); });

  // ------------------------------------------------------------ keys
  // Called first by main.js's key handler. While any menu is open it takes every key (so no gameplay
  // shortcut fires); Esc steps back, Tab stays inside the open dialog. Returns true when the key is spoken for.
  function handleKey(e) {
    if (!modal()) return false;
    if (e.code === 'Escape' && !e.repeat) {
      if (current === 'settings') closeSettings();
      else if (current === 'confirm') show('pause', 'sg-pause-new');
      else if (current === 'pause') resume();
      e.preventDefault();
    } else if (e.code === 'Tab') {
      const box = current ? overlays[current] : title;
      const items = [...box.querySelectorAll(FOCUSABLE)].filter((el) => !el.hidden && el.offsetParent !== null);
      if (items.length) {
        const i = items.indexOf(document.activeElement);
        const next = e.shiftKey ? (i <= 0 ? items.length - 1 : i - 1) : (i === items.length - 1 ? 0 : i + 1);
        items[next].focus(); e.preventDefault();
      }
    }
    return true;
  }

  return {
    modal, handleKey, enter: leaveTitle, openPause, resume, showTitle, playing,
    set handlers(h) { cb = h; },
    // a quiet way to know where the player is, for the capture tools
    state: () => ({ onTitle, overlay: current }),
  };
}
