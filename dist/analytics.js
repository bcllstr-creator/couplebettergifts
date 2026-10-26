(() => {
  const measurementId = 'G-T1Y7QQEW1P';
  const choiceKey = 'cbg-analytics-choice-v1';
  const production = ['couplebettergifts.com', 'www.couplebettergifts.com', 'goodguess.benjamincallister224.chatgpt.site'].includes(location.hostname);
  const disableKey = `ga-disable-${measurementId}`;
  // Regions where storage consent must be asked first. Google's AdSense consent message covers ads there;
  // analytics sends cookieless pings until consent is given.
  const askFirstRegions = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IS', 'IE', 'IT', 'LV', 'LI', 'LT', 'LU', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB', 'CH'];
  let choice = null;
  try {
    const saved = JSON.parse(localStorage.getItem(choiceKey));
    if (saved?.expires > Date.now() && ['accepted', 'declined'].includes(saved.choice)) choice = saved.choice;
  } catch {}

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  const denied = {analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'};
  const granted = {analytics_storage: 'granted', ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'denied'};
  window.gtag('consent', 'default', {...denied, region: askFirstRegions});
  window.gtag('consent', 'default', granted);
  window.gtag('set', 'ads_data_redaction', true);

  function applyChoice() {
    window[disableKey] = !production || choice === 'declined';
    if (choice) window.gtag('consent', 'update', choice === 'accepted' ? granted : denied);
  }
  applyChoice();

  // Load the tag on every production page so ad visitors are counted without an extra click.
  if (production && choice !== 'declined') {
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
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
      if (name !== '_ga' && !name.startsWith('_ga_') && name !== '_gcl_au') continue;
      const expired = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
      document.cookie = expired;
      for (const domain of [location.hostname, 'couplebettergifts.com', '.couplebettergifts.com']) {
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
    updateChoice();
  }

  window.giftAnalytics = {
    track(name, details = {}) {
      if (choice === 'declined' || !production || !['quiz_start', 'quiz_complete', 'retailer_click'].includes(name)) return false;
      const params = {};
      if (name === 'retailer_click') {
        if (typeof details.gift_id === 'string') params.gift_id = details.gift_id;
        if (['product', 'search'].includes(details.link_type)) params.link_type = details.link_type;
        if (['amazon', 'bookshop', 'lovebook', 'personalizationmall', 'miniaturemarket', 'lovepop'].includes(details.merchant)) params.merchant = details.merchant;
        params.affiliate = details.affiliate === true;
        params.transport_type = 'beacon';
      }
      window.gtag('event', name, params);
      return true;
    }
  };

  const banner = document.querySelector('#analytics-notice');
  if (!banner) return;
  // The choice panel opens only from "Tracking choices"; it never blocks the page on arrival.
  banner.hidden = true;
  let returnFocus = null;
  function updateChoice() {
    const current = choice === 'declined' ? 'declined' : 'accepted';
    document.querySelectorAll('[data-analytics-choice]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.analyticsChoice === current));
    });
  }
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-analytics-choice]');
    if (!button) return;
    saveChoice(button.dataset.analyticsChoice);
    if (returnFocus) returnFocus.focus({preventScroll: true});
  });
  document.querySelectorAll('[data-analytics-settings]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', () => {
      returnFocus = button;
      banner.hidden = false;
      updateChoice();
      banner.querySelector('button').focus();
    });
  });
  document.addEventListener('click', event => {
    const link = event.target.closest('a[data-shop-link]');
    if (!link) return;
    window.giftAnalytics.track('retailer_click', {
      gift_id: link.closest('[data-gift-id]')?.dataset.giftId,
      merchant: link.closest('[data-merchant]')?.dataset.merchant,
      affiliate: link.relList.contains('sponsored'),
      link_type: link.dataset.linkType
    });
  });
  updateChoice();
})();
