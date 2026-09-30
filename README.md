# Couple Better Gifts

A static gift finder with 72 fixed editorial ideas. The live quiz uses local matching rules, never an AI model. It starts with budget and recipient, asks about age and interests, and returns three ranked ideas with more available when the budget permits.

## Edit recommendations

Edit `dist/catalog.js`. Each row contains: name, planning budget tier, gift style, description, buying check, and search terms. Tiers 1–4 mean planning maxima of $25, $50, $100, and $200. These are editorial estimates for product types, not verified prices. The catalog currently covers ages 13+; `minAge` is an eligibility field for later additions.

The `listings` map at the end of `dist/catalog.js` holds five checked Amazon product listings. Add reviewed listings there; other gifts use clearly labeled searches. Set `config.affiliateTag` to your own approved Associates tracking ID to tag both direct and search links and activate the disclosure. See `AMAZON_SETUP.md` for the application checklist.

Review real listings, prices, availability, compatibility, image permissions, and Amazon's current rules before a commercial launch. The Stormlight Archive character model is an unverified concept, not a promise that a licensed item is available on Amazon. Photos and reviews from Amazon are not copied here.

## Run locally

From this directory: `python -m http.server 5173 --bind 127.0.0.1 --directory dist`, then visit `http://127.0.0.1:5173`.

## Files

- `dist/index.html`: page structure and metadata
- `dist/style.css`: responsive presentation
- `dist/app.js`: questionnaire and matching
- `dist/catalog.js`: editable fixed recommendation data
- `dist/assets/gift.jpg`: Unsplash photo by Katya Azimova
- `.openai/hosting.json`: existing Site identity and static configuration

Quiz answers are held only in page memory. There is no analytics service, account system, email collection, or runtime AI dependency. Amazon tracking ID bestguess0f-20 is configured on both direct and search links, with the affiliate disclosure enabled. The owner manages account eligibility, website registration, tax, and payment setup in Associates Central. Earned revenue and traffic measurement are next-stage launch work.

Photo source: https://unsplash.com/photos/a-wooden-table-topped-with-a-wrapped-present-jorPYgT6V10 (Unsplash License).

Catalog inspiration checked against original retailer pages: Barnes & Noble's book-lover gifts, REI's gifts under $25, and LEGO's Botanical collection. These support product categories, not verification of all 72 Amazon listings or price bands.

Two responsive AdSense placements use `data-ad-slot="7973839221"` in `dist/index.html`. Each placement requests one ad after the welcome dialog is dismissed. The sidebar uses auto sizing, and the bottom placement above the footer uses the supported horizontal format. The square responsive layout places them below the quiz on mobile. The supplied AdSense loader and display unit are installed.

Run `node build-content.mjs` after editing the catalog to regenerate the gift buying tips, About, and Privacy pages. `MONETIZATION_SETUP.md` contains current AdSense, domain, and Amazon image/API setup instructions. No product-image API is configured.

AdSense verification script for ca-pub-4573556097135456 is included in each page head. The privacy notice describes Google advertising cookies and choices. Ad rendering depends on Google approval, demand, and browser settings; configure the applicable consent message in AdSense Privacy & messaging.

A compact welcome dialog over a translucent backdrop explains the six-question quiz on each page load. Visitors choose LET’S GO! to enter; keyboard focus stays inside the dialog until they do. On screens up to 900px wide, ad spaces follow the quiz, with 44px minimum primary tap targets and a single-column phone layout.

`dist/ads.txt` authorizes the supplied Google publisher ID. The supplied display unit ID is 7973839221; blank or blocked ads do not prevent the quiz from working.

The visitor-facing site does not advertise the collection size or provide a browse-all catalog. `gifts.html` offers general buying tips; recommendations are shown after the quiz.
