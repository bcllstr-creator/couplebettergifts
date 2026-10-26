# Project editing notes

Read HANDOFF.md and README.md before changing this existing site. Page HTML is generated from build-content.mjs and guides.mjs. Browser JS/CSS and the catalog live in dist. Run node build-content.mjs and node --test tests/quiz.test.mjs; preview with node preview.cjs in a retained terminal session.

Preserve the square design, plain copy, no emojis, Start quiz with its three inline steps, and changeable privacy choices. Keep quiz answers out of analytics. Ads are restricted to the buying guides in guides.mjs. No public gift-count promotion or full catalog.

Owner decision, October 26, 2026: Google Analytics loads on every production page with Consent Mode v2 (granted by default; denied by default in the EEA, UK, and Switzerland). "Tracking choices" lets visitors opt out. Do not return to opt-in-only analytics or an auto-opening homepage popup: both hid ad visitors from Analytics and Google Ads. The "How it works" dialog opens only from its header button.

Hosting moved to GitHub Pages on October 26, 2026 (repository bcllstr-creator/couplebettergifts). Pushing to main runs .github/workflows/pages.yml, which runs the tests and publishes dist. The custom domain is set in the repository's Pages settings. The old ChatGPT Sites project (.openai/hosting.json) is no longer used. Never claim a change is live until the Pages deployment succeeds. Do not invent affiliate tracking URLs, approvals, live prices, ratings, tests, or rights to merchant photographs. Ordinary retailer links remain labeled as such until actual approved tracking links are supplied.

Copy rule from the owner: do not add “Free to use,” “No account,” reassurance slogans, or redundant labels. Each sentence should help someone choose a gift, use the quiz, or understand a required disclosure.
