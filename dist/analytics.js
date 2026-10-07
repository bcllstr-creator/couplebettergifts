(() => {
  const measurementId = 'G-T1Y7QQEW1P';
  const choiceKey = 'cbg-analytics-choice-v1';
  const production = ['couplebettergifts.com', 'www.couplebettergifts.com', 'goodguess.benjamincallister224.chatgpt.site'].includes(location.hostname);
  const disableKey = `ga-disable-${measurementId}`;
  let choice = null;
  let configured = false;
  try {
    const saved = JSON.parse(localStorage.getItem(choiceKey));
    if (saved?.expires > Date.now() && ['accepted', 'declined'].includes(saved.choice)) choice = saved.choice;
  } catch {}

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  // AdSense's consent message manages advertising choices separately.
  window.gtag('consent', 'default', {analytics_storage: 'denied'});
  window[disableKey] = true;

  function applyChoice() {
    const allowed = choice === 'accepted' && production;
    window[disableKey] = !allowed;
    window.gtag('consent', 'update', {analytics_storage: allowed ? 'granted' : 'denied'});
    if (!allowed || configured) return;
    configured = true;
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      cookie_domain: location.hostname,
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.append(script);
  }

  function clearAnalyticsCookies() {
    for (const cookie of document.cookie.split(';')) {
      const name = cookie.trim().split('=')[0];
      if (name !== '_ga' && !name.startsWith('_ga_')) continue;
      const expired = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
      document.cookie = expired;
      for (const domain of [location.hostname, 'couplebettergifts.com']) {
        document.cookie = `${expired}; domain=${domain}`;
      }
    }
  }

  function saveChoice(value) {
    choice = value;
    try {
      localStorage.setItem(choiceKey, JSON.stringify({choice, expires: Date.now() + 180 * 24 * 60 * 60 * 1000}));
    } catch {}
    applyChoice();
    if (choice === 'declined') clearAnalyticsCookies();
    banner.hidden = true;
    choiceLocked = true;
    updateChoice();
  }

  window.giftAnalytics = {
    track(name, details = {}) {
      if (choice !== 'accepted' || !production || !['quiz_start', 'quiz_complete', 'amazon_click'].includes(name)) return false;
      const params = {};
      if (name === 'amazon_click') {
        if (typeof details.gift_id === 'string') params.gift_id = details.gift_id;
        if (['product', 'search'].includes(details.link_type)) params.link_type = details.link_type;
      }
      window.gtag('event', name, params);
      return true;
    }
  };

  const banner = document.querySelector('#analytics-notice');
  if (!banner) return;
  banner.hidden = choice !== null;
  let returnFocus = null;
  let choiceLocked = choice !== null;
  function updateChoice() {
    document.querySelectorAll('[data-analytics-choice]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.analyticsChoice === choice));
      button.disabled = choiceLocked;
    });
    document.querySelectorAll('.welcome-tracking').forEach(section => {
      section.classList.toggle('choice-complete', choiceLocked);
    });
  }
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-analytics-choice]');
    if (!button || button.disabled) return;
    saveChoice(button.dataset.analyticsChoice);
    if (document.querySelector('#welcome-dialog')?.open) document.querySelector('#welcome-start')?.focus();
    else if (returnFocus) returnFocus.focus({preventScroll: true});
  });
  document.querySelectorAll('[data-analytics-settings]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', () => {
      returnFocus = button;
      banner.hidden = false;
      choiceLocked = false;
      updateChoice();
      banner.querySelector('button').focus();
    });
  });
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link) return;
    const url = new URL(link.href);
    if (url.hostname !== 'www.amazon.com' && url.hostname !== 'amazon.com') return;
    window.giftAnalytics.track('amazon_click', {
      gift_id: link.closest('[data-gift-id]')?.dataset.giftId,
      link_type: url.pathname.startsWith('/dp/') ? 'product' : 'search'
    });
  });
  updateChoice();
  applyChoice();
})();
