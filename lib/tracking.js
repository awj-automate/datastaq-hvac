/*
  Lightweight conversion-tracking helper. Fires an event to Meta Pixel
  (fbq) and GA4 (gtag) when either is loaded — see components/Analytics.jsx.
  Safe to call from any client event handler; no-ops on the server or
  when the pixels are not configured.
*/

export function track(event, params = {}) {
  if (typeof window === 'undefined') return;
  try {
    if (typeof window.fbq === 'function') window.fbq('track', event, params);
  } catch (_) {
    /* pixel not loaded — ignore */
  }
  try {
    if (typeof window.gtag === 'function') window.gtag('event', event, params);
  } catch (_) {
    /* gtag not loaded — ignore */
  }
}
