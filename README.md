# Couple Better Gifts

Live: https://couplebettergifts.com/ . Read HANDOFF.md to continue this project in another AI or editor.

## Edit and verify

Plain HTML/CSS/browser JavaScript. No npm installation or bundler. The host serves `dist/`.

- `build-content.mjs` generates HTML, sitemap, and robots.txt. `guides.mjs` contains the four article bodies.
- `dist/catalog.js` contains gift records, verified Amazon ASINs, and `retailerLinks` for approved tracking URLs.
- `dist/quiz-engine.js` filters by budget, interest, recipient, platform, and personalization; ranking favors interest/style and product variety. Commission rates do not influence ranking.
- `dist/app.js` renders the start screen, quiz, and shortlist. `dist/ui.js` opens the welcome dialog on every homepage load.
- `dist/style.css` supplies square responsive layouts, visible focus states, and reduced-motion support.
- `dist/analytics.js` manages optional GA4 and consent. `dist/ads-content.js` requests article ads.

Run `node build-content.mjs` after editing page/guide sources. Run `node --test tests/quiz.test.mjs` for meaningful matching/link checks. Use a static HTTP server serving `dist` for browser QA. Keep a retained terminal session (TTY on this Windows host); otherwise a background server can appear to listen without responding. A typical command is `node preview.cjs`. Set the PORT environment variable to use another port.

The quiz asks budget, up to two interests, gaming platform when relevant, gift style, and recipient/personalization details. It displays three suggestions, with a larger nine-item shortlist available. Skip/undo, editing answers, and restart keep the process manageable. No public full catalog or total-count promotion. Answers stay in page memory.

## Retailers and affiliate setup

The catalog keeps the original Amazon ideas and adds 21 researched products across Bookshop.org, LoveBook, Personalization Mall, Miniature Market, and Lovepop. See AFFILIATE_SETUP.md for official program terms and enrollment routes; PRODUCT_RESEARCH_BOOKS.md and PRODUCT_RESEARCH_GIFTS.md record the product sources and budget reasoning, checked October 19, 2026.

Amazon tag: `bestguess0f-20`. Five exact ASIN links retain the official unmodified Available at Amazon badge at 170 CSS pixels with clear space. Other Amazon ideas open labeled searches. Badge source/rules: https://affiliate-program.amazon.com/help/operating/amazonmarks/ . Amazon currently requires the account's product API eligibility before accessing official product data; the owner has no API access. No product photos, live prices, ratings, or reviews have been copied from retailer pages.

New merchants currently have ordinary product URLs and earn no commission for the owner. After approval, add actual network tracking URLs to `retailerLinks`. Preserve them verbatim. Do not append the Amazon tag to another merchant. Example structure:

```js
export const retailerLinks={
  'bookshop-tress':{merchant:'bookshop',url:'OWNER_SUPPLIED_APPROVED_HTTPS_URL',affiliate:true}
};
```

Replace the placeholder with a real approved URL before using it. Keep secrets outside this static site. Use merchant-approved creatives or original/authorized product photography. Do not fabricate product photos or hands-on testing. Budget tiers are planning bands, based on conservative listed prices, and require review as prices change.

## Privacy, measurement, and advertising

GA4: `G-T1Y7QQEW1P`. No tag loads until Allow, and localhost never sends analytics. Choice expires after six months. Welcome controls read Allow / No thanks, then fade slightly and disable after choosing. Tracking choices in the header/footer reopens them. No on/off status messages. Quiz answers are excluded from event fields.

Events: `quiz_start`, `quiz_complete` once per run, and `retailer_click`. Clicks include `gift_id`, `merchant`, `affiliate` (boolean), and `link_type` (product/search). **retailer_click replaces amazon_click in this overhaul** and covers all stores. Old event history remains in GA; mark retailer_click as a key event if desired. A click measures outbound interest, not a confirmed sale. Property reports and affiliate sales need account-side checks; access was not available to verify report delivery.

AdSense publisher: `ca-pub-4573556097135456`, unit `7973839221`. Only the four complete editorial guides load the Google advertising script and one labeled bottom banner. Quiz/results/help/About/Privacy/404 carry verification metadata only. Keep Auto ads off to preserve that scope. Owner reports configuring a Google consent message; it manages advertising choices separately. Approval and ad fill are account-side. See ADSENSE_POLICY_REVIEW.md for the original review and remaining owner tasks. No public support email is configured.

Existing photo: Katya Azimova / Unsplash, credited in the source. Public merchant photos are not automatically licensed. No accounts, checkout, or email capture are implemented.
