# Couple Better Gifts

An independent student gift finder. The live quiz matches a fixed collection of concepts; it does not generate new recommendations at runtime. Recipient age, interest, gift style, and estimated budget determine matches. There is no published full catalog or total gift-count promotion.

## Content and editing

- `dist/catalog.js`: fixed quiz gift data and five previously identity-checked Amazon listings. Planning budget tiers are not live seller prices. Keep `bestguess0f-20` as the supplied affiliate tracking ID.
- `guides.mjs`: four distinct buying guides. Technical examples cite primary sources. These are buying notes, not personally tested product reviews.
- `build-content.mjs`: generates the homepage, guides, About, Privacy, explicit 404, robots.txt, and sitemap.xml. Run `node build-content.mjs` after changing guides or layout.
- `dist/app.js`: local questionnaire. `dist/ui.js` opens the dismissible instructions on every homepage visit, independently of the gift catalog. After dismissal, Start quiz reveals the budget question; restarting returns to that start screen. Answers live only in page memory. Quiz-start and quiz-completion events are sent to GA4 only when analytics is allowed.
- `dist/style.css`: square responsive design, keyboard focus styling, and readable article layout.

## Amazon product cards

The five selected listings display their exact product name, direct ASIN link, and the official “Available at Amazon” badge. Other ideas remain labeled Amazon searches. The badge is the unmodified horizontal squid-ink PNG from Amazon's US English asset package, displayed at 170 CSS pixels wide with clear space. Source and usage rules: https://affiliate-program.amazon.com/help/operating/amazonmarks/ . It is a merchant badge, not a product photograph.

The account owner confirmed no Creators API access on October 5, 2026. Product photos and live product data are not connected. Amazon's current documentation lists final program acceptance, API registration/credentials, and 10 qualifying sales in the preceding 30 days for product API access: https://affiliate-program.amazon.com/creatorsapi/docs/en-us/introduction and https://affiliate-program.amazon.com/creatorsapi/docs/en-us/onboarding/register-for-creators-api . Keep credentials on a server when this is implemented. Do not copy retail-page images, synthesize product photos, invent ratings, or put an Amazon page in an iframe. Owner-supplied original or authorized product photos are an alternative for selected products.

Run `python -m http.server 5173 --bind 127.0.0.1 --directory dist` from this directory for local preview.

## Advertising after the policy review

Only the four complete buying guides include Google’s loader and one labeled bottom banner (`7973839221`). `ads-content.js` requests it once near the viewport while the document is visible. The quiz (including results and help), About, Privacy, and error page have no Google ad loader or ad units. They use the verification meta tag instead. `ads.txt` authorizes the supplied publisher ID.

Owner reports configuring an AdSense consent message. Confirm it is published for the real domain and applicable regions. Turn off Auto ads in AdSense to preserve the manual article-only layout. Google approval and ad fill are separate from successful code installation.

See `ADSENSE_POLICY_REVIEW.md` for the reviewed policies, evidence, implemented remedies, and account-side tasks. No universal compliance or approval guarantee is claimed. No public contact address is configured yet.

Photo: Katya Azimova / Unsplash, existing licensed gift image. Do not copy Amazon photos, merchant descriptions, ratings, or reviews without the required rights or official mechanisms. Do not invent licensing, personal testing, seller prices, inventory, author credentials, or reviews.

## Visitor analytics

GA4 property `G-T1Y7QQEW1P` is installed through `dist/analytics.js` on all pages. Tracking options appear inside the welcome popup and in a banner rendered in the HTML. The header and footer always include a Tracking choices button. A saved choice hides the banner but stays visible in the popup. The selected Allow button is blue; selected No thanks is gray. After either choice, the popup’s tracking section fades slightly and both choice buttons become inactive. Tracking choices in the header or footer explicitly reopens the controls for a change. There are no on/off status messages. The same selection is exposed through aria-pressed and restored on later visits. Google Analytics stays off until the visitor allows tracking. The choice expires after six months and can be changed through Tracking choices in the header or footer. Localhost previews never load or send Analytics. The custom events are `quiz_start`, `quiz_complete`, and `amazon_click`; Start quiz counts a start; completion is counted once per quiz run. Only Amazon-click events include a gift ID and product/search link type. Quiz answer values are excluded. AdSense consent remains separate.

Open Google Analytics → Reports → Realtime to check new activity after publishing. Standard reports can take 24–48 hours to process. Mark `quiz_complete` and `amazon_click` as key events in Admin → Events if you want them counted as conversions. There is no historical visitor data from before this tag was installed. Installation and event behavior were tested locally; access to this Analytics property was not available to confirm report delivery.
