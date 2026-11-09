# Paid ads on Facebook and Instagram

## The videos

Built by `social/video/ads.mjs` and rendered by `social/video/render.mjs` (run `npm install`, then `node ads.mjs && node render.mjs` from `social/video`). Output goes to `social/video/out/`. All are silent, because most feed video plays muted; Meta's ad tools can add licensed music if you want it.

| Ad | Length | What it shows |
|---|---|---|
| `quiz-demo` | 14 s | "Stuck on a gift?", then the quiz itself: budget, two interests, and a real short list from the catalog with its buying checks |
| `controller-check` | 11.5 s | The gaming tip: PC, PlayStation, Xbox, or Switch, so check what they play on first |
| `start-with-them` | 10.5 s | Fast photo cuts (gaming, books, D&D, coffee), then the three quiz steps |

Each comes in two sizes: `-reels` (1080 x 1920, for Reels and Stories; text stays out of the top and bottom areas Meta covers) and `-feed` (1080 x 1350, for the Facebook and Instagram feeds). Upload both sizes to the same ad, and Meta shows the right one per placement.

## Campaign setup

- **Objective:** Traffic, optimized for landing page views. (Sales or leads objectives need a Meta Pixel on the site. The site does not have one, and adding it would change the privacy page and the consent setup.)
- **Special ad category:** none.
- **Budget:** decide before launch. $3 to $5 a day is enough for Meta to learn which video works; run at least 7 days before judging.
- **Audience:** United States, ages 18 to 34, all genders. Use Advantage+ audience with suggestions: gift giving, video games, books, Dungeons & Dragons, coffee.
- **Placements:** Advantage+ placements (Facebook and Instagram feeds, Reels, Stories).
- **Ads:** one ad per video, all in the same ad set, so Meta shifts spend toward the one that gets cheaper clicks.
- **Call to action button:** Learn more.
- **Website URL:** `https://couplebettergifts.com/`
- **URL parameters** (paste into the ad's URL parameters field; Meta fills in the braces):
  `utm_source={{site_source_name}}&utm_medium=paid_social&utm_campaign=gift_quiz_meta&utm_content={{ad.name}}`

## Ad text

**quiz-demo**
- Primary text: Set a budget, pick up to two things they enjoy, and get a short list of specific gifts, each with the detail to check before you buy.
- Headline: Take the gift quiz

**controller-check**
- Primary text: Controllers and headsets don't work with every system. Find out whether they play on PC, PlayStation, Xbox, or Switch before you order. The gift quiz asks for you.
- Headline: Check their system first

**start-with-them**
- Primary text: Not sure what to get them? Start with what they like. The gift quiz turns a budget and two interests into a short list of gifts.
- Headline: Find a gift they'll actually use

## What you have to do

1. Add a payment method in Meta Ads Manager (Billing). I cannot enter card details.
2. Confirm the daily budget.

## Measuring it

In GA4, Traffic acquisition with "Session source / medium" shows these visits as fb / paid_social and ig / paid_social, because Meta's `site_source_name` fills in fb, ig, msg (Messenger), or an (Audience Network). Organic posts stay separate as facebook / organic_social and instagram / organic_social. Compare cost per landing page view in Ads Manager with Google Ads' cost per click, and check whether paid social visitors start the quiz. Log weekly in the Paid Weekly Log tab of the class spreadsheet.
