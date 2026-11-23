// Registers the offline app-shell worker. Never throws and never blocks the game: any failure leaves ordinary online loading.
export function registerOffline() {
  try {
    if (!import.meta.env.PROD) return;
    if (!('serviceWorker' in navigator) || !window.isSecureContext) return;
    if (new URLSearchParams(location.search).has('nosw')) return;
    const go = () => { try { navigator.serviceWorker.register(new URL('sw.js', document.baseURI).href).catch(() => {}); } catch (e) { /* ignore */ } };
    if (document.readyState === 'complete') setTimeout(go, 1500); else addEventListener('load', () => setTimeout(go, 1500), { once: true });
  } catch (e) { /* ignore */ }
}
