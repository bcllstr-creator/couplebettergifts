# Couple Better Gifts — handoff for another AI

Use the existing project folder: `C:\Users\bclls\Downloads\Web Bussiness\gift-finder`.
Live site: https://couplebettergifts.com/

**Update, October 26, 2026:** analytics is now on by default (Consent Mode v2, opt-out via Tracking choices), the homepage popup no longer opens on arrival, six guides were added (ten total), and a Contact page uses couplebettergifts@gmail.com. Hosting moved from ChatGPT Sites to GitHub Pages (push to main to publish). Where this file says otherwise, AGENTS.md is current.

This is an independent BYU–Idaho student business: a free gift quiz with shopping links and four buying guides. Recommendations come from an edited catalog; there is no runtime AI recommendation service, visitor account system, or checkout.

## Files to edit

The site is plain HTML, CSS, and browser JavaScript. There is no bundler, npm install, or application server required.

- `dist/catalog.js`: gift records, retailer definitions, Amazon tag, and `retailerLinks` overrides for future approved affiliate URLs. It includes Amazon listings/searches and researched products from Bookshop.org, LoveBook, Personalization Mall, Miniature Market, and Lovepop. Ordinary retailer links earn no commission until an approved tracking link is supplied. Preserve network URLs verbatim; add the Amazon tag only to Amazon URLs.
- `dist/quiz-engine.js`: available budgets/interests/styles, purchase-link handling, eligibility filters, and shortlist scoring. Budget, platform compatibility, personalization, recipient restrictions, and minimum age affect results. Diversity logic reduces repeated product types.
- `dist/app.js`: quiz screens and result cards. Visitors click **Start quiz**, choose a budget, select up to two interests, answer a conditional gaming-system question, select a gift type, and enter final recipient/personalization preferences. Results support changing answers, skipping a gift, undoing skips, and showing more choices.
- `dist/ui.js`: opens the homepage introduction dialog independently of the quiz. **LET’S GO!** dismisses instructions and moves focus to Start quiz.
- `dist/analytics.js`: optional Google Analytics, consent controls, and allowed conversion events. Confirm its event names when changing retailer-click tracking.
- `dist/style.css`: responsive styling, popup, selection states, and short quiz transitions. Respect reduced-motion settings.
- `guides.mjs`: the four guide bodies.
- `build-content.mjs`: shared page layout and generated homepage, guide pages, About, Privacy, 404, robots.txt, and sitemap.xml. Edit this source rather than only changing generated HTML.
- `dist/ads-content.js` and `dist/ads.txt`: existing AdSense configuration.

After changing page layout or guide content, run from the project folder:

```powershell
node build-content.mjs
```

The deployment serves `dist` directly. Keep asset cache-version references consistent after script or stylesheet edits.

For local preview:

```powershell
node preview.cjs
```

Open http://127.0.0.1:5173/ and verify desktop/mobile layouts, keyboard use, popup dismissal, consent choice/reopening, quiz branches, result links, and back/restart. Localhost intentionally does not send Analytics.

## Preserve these decisions

- Square, readable design; no emojis. Write short, direct copy. Remove filler and artificial “this, not that” contrasts. Do not advertise a total gift count or expose the full catalog before the quiz.
- Keep the opening instructions and **Start quiz** screen. Analytics needs an explicit choice. Buttons read **Allow** and **No thanks**. After a choice, the tracking section fades slightly and repeat clicks are disabled; header/footer **Tracking choices** allows changing it. Do not add tracking on/off messages or make Start quiz imply analytics consent.
- Answers stay in page memory. Do not transmit individual answers as analytics fields. Keep Privacy accurate when features change.
- Ads belong only on the four complete guides: `gifts.html`, `gaming-gifts.html`, `reading-gifts.html`, and `tabletop-gifts.html`. No AdSense loader/ad units on the quiz, results, popup, About, Privacy, or error page. Retain labeled placements. Google approval/ad fill is account-side.
- Keep the required Amazon disclosure and distinguish affiliate links, ordinary retailer links, and searches. Do not invent affiliate approval, ratings, product tests, prices, stock, or merchant relationships.
- Use original or explicitly licensed images. Public merchant photos are not automatically reusable. Amazon product API access is not available; do not scrape its listings or embed Amazon in an iframe. LoveBook supplies approved promotional materials after affiliate acceptance.

## Existing hosting

This is an existing **Sites** project. Preserve `.openai/hosting.json`:

```json
{
  "project_id": "appgprj_6ab3e33db31081919e273fb94bdc79de",
  "static": { "directory": "dist" }
}
```

Do not create a replacement Site or change the domain/DNS. Publishing requires the same Sites hosting tools, account access, and current plugin workflow. Read that workflow, sync the existing source before editing, then save/publish the reviewed build to this project. Never place hosting write credentials in code or archives. If you lack those tools or access, return the source changes and verification notes for the current owner/agent to publish; do not claim the live site changed.

## Sending source to an AI on another computer

Provide a ZIP containing `dist/`, `build-content.mjs`, `guides.mjs`, `preview.cjs`, `tests/`, `.openai/hosting.json`, `README.md`, `AGENTS.md`, and the affiliate/research notes. Include this handoff. Preserve relative paths. Export the final current files after the active overhaul is finished.

Exclude `.git`, credentials, tokens, `.env` files, cookies/browser profiles, account exports, runtime/process files, temporary archives, local server output, and source-sync helpers. The hosting manifest contains project configuration, not account authorization. Public publisher/measurement IDs and affiliate tracking IDs are safe configuration; passwords and private API keys are not.

When returning edits, include changed source files, any regenerated output, a short change list, what was verified, and account-side tasks still needed. Keep backups of the current source before applying someone else's changes.

## Verification and continuing work

Run `node --test tests/quiz.test.mjs`. Current conversion events are `quiz_start`, `quiz_complete`, and `retailer_click`; retailer clicks include merchant, gift ID, affiliate flag, and product/search type. The new event replaces the previous Amazon-only click event. See AFFILIATE_SETUP.md for enrollment steps and PRODUCT_RESEARCH_BOOKS.md / PRODUCT_RESEARCH_GIFTS.md for product sources.

Use a retained terminal/TTY for the preview server on this Windows host. A source archive named `CoupleBetterGifts-source.zip` is supplied alongside the project. It includes the tests and current research notes; no hosting credentials are included. Another AI can edit these files and return a replacement archive or a patch. Review/test its changes before publishing.

Suggested first message to another AI:

> Continue my Couple Better Gifts website. Read HANDOFF.md and README.md first. Make the changes I request in the existing project, keep the current domain and hosting project, and test the quiz and mobile layout. Publish only if you have authorized access to the existing Sites project; otherwise return the edited source files and tell me what still needs publishing.

Using another chat on the same ChatGPT account does not create a separate included-usage allowance. A different AI service may use its own billing and still needs these source files. Do not share account passwords or temporary hosting tokens.
