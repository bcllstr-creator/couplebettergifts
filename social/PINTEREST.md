# Pinterest pins

Pinterest works like a search engine: people type "gifts for gamers" or "gifts under $25" and save what they find. Pins keep getting found for months, which is why it suits a site with no followers yet. Every pin here leads with the phrase people search, links to the matching guide, and carries a tracked link.

## Files

- Pins: `social/images/p-*.png` (1000 x 1500), built by `social/build-pins.mjs` from the guides and catalog.
- To rebuild after editing a pin: `node social/build-pins.mjs`, then render each `social/html/p-*.html` with headless Edge at 1000 x 1500 (`--screenshot`, `--window-size=1000,1500`, `--virtual-time-budget=5000`).
- Budget labels ("Up to $25") are the catalog's planning tiers, not live prices.

## Boards

Topic boards help Pinterest understand what each pin is about. Keep "Gift Ideas" and add these:

- Gifts for Gamers
- Gifts for Book Lovers
- D&D Gifts
- Gifts Under $25
- Holiday Gift Ideas
- Gifts for Your Partner

## Posting

One pin a day works better than all nine at once: Pinterest favors accounts that post steadily. Holiday shopping searches are rising now, so the holiday and budget pins go first.

| Day | Pin | Board |
|---|---|---|
| 1 | p-holiday-budget | Holiday Gift Ideas |
| 2 | p-under-25 | Gifts Under $25 |
| 3 | p-gamer-budget | Gifts for Gamers |
| 4 | p-partner | Gifts for Your Partner |
| 5 | p-reader-gifts | Gifts for Book Lovers |
| 6 | p-last-minute | Holiday Gift Ideas |
| 7 | p-dnd-gifts | D&D Gifts |
| 8 | p-has-everything | Gift Ideas |
| 9 | p-personalized | Gift Ideas |

## Pin text

Each link is `https://couplebettergifts.com/<guide>?utm_source=pinterest&utm_medium=organic_social&utm_campaign=gift_quiz&utm_content=<pin id>`.

**p-holiday-budget** → `holiday-gift-planning.html`
- Title: How to Plan Holiday Gifts on a Budget
- Description: Set one total for the season, including wrapping and shipping, then give each person a share of it. Keep every gift idea in one list and write an order-by date next to each one so nothing ships late. Holiday gift planning, Christmas gift budget, gift list.

**p-under-25** → `gifts-under-25.html`
- Title: Good Gifts Under $25
- Description: A small budget goes further on things they use up, like favorite coffee or tea, and small upgrades to things they use every day, like a better pen or cozy socks. Set the limit for the total, including shipping and a card. Cheap gift ideas, gifts under 25 dollars.

**p-gamer-budget** → `gaming-gifts.html`
- Title: Gifts for a Gamer at Every Budget
- Description: Controller thumb grips, a gaming controller, a headset, or a mechanical keyboard. Before you order, check whether they play on PC, PlayStation, Xbox, or Switch, because accessories don't work with every system. Gamer gift ideas, gifts for gamers.

**p-partner** → `partner-gifts.html`
- Title: How to Pick a Gift for Your Partner
- Description: Make three lists: things they use every day, things you have done together, and things they have mentioned wanting to try. A good gift usually sits where two of them overlap. Anniversary gift ideas, gifts for boyfriend, gifts for girlfriend.

**p-reader-gifts** → `reading-gifts.html`
- Title: Gift Ideas for a Book Lover
- Description: A rechargeable reading light, a reading journal, a bookmark set, or a collectible hardcover of a book they love. Check whether they read paperback, hardcover, or e-book, and whether they already own it. Gifts for readers, book lover gifts.

**p-last-minute** → `last-minute-gifts.html`
- Title: Last-Minute Gift Ideas That Still Feel Thoughtful
- Description: Decide how the gift will reach them first. With a few hours left, try a local bookshop, bakery, or florist. With a day, use same-day pickup. Any time: tickets, a class, an e-book, or a plan you make together. Last minute gifts.

**p-dnd-gifts** → `tabletop-gifts.html`
- Title: D&D Gifts for a Player or Game Master
- Description: A polyhedral dice set, a dice bag, a folding dice tray, or metal dice. Metal dice need a lined tray, and every set should have readable numbers. Dungeons and Dragons gifts, DnD gift ideas, tabletop gamer gifts.

**p-has-everything** → `has-everything-gifts.html`
- Title: Gifts for Someone Who Has Everything
- Description: Skip anything that just adds to their shelves. Give an experience with a date on the calendar, something they will use up, an upgrade to what they use most, or something only you can give. Gift ideas for the person who has everything.

**p-personalized** → `personalized-gifts.html`
- Title: Ordering a Personalized Gift? Check These First
- Description: Engraving has character limits and small fonts are hard to read. Low-resolution photos print blurry. Custom books take longer to make and typos are easy to miss. Most custom orders can't be returned, so check before you pay. Personalized gift ideas.

## Measuring

The account was converted to a free business account on November 9, 2026 (type: Publisher or media), which turned on scheduling and Pinterest Analytics (impressions, saves, and outbound clicks per pin). All nine pins above are scheduled for 12:00 PM daily, November 10 to 18. Site visits show in GA4 as pinterest / organic_social, with the pin id in utm_content.

## December 2026 set

Built by `social/build-pins-december.mjs` (images `social/images/d-*.png`). New photos are in `social/photos` with credits in `social/photos/CREDITS.md`. Pins that link to the homepage end with "Take the 5-question gift quiz"; pins with a matching guide link to it. One pin every two days at 12:00 PM.

| Date | Pin | Board | Link |
|---|---|---|---|
| 11/25/2026 | Stocking stuffers they will actually use | Gifts Under $25 | /gifts-under-25.html |
| 11/27/2026 | Secret Santa gifts under $25 | Gifts Under $25 | /gifts-under-25.html |
| 11/29/2026 | Gifts for someone who lives on coffee or tea | Gift Ideas | / |
| 12/01/2026 | Christmas gifts for a gamer | Gifts for Gamers | /gaming-gifts.html |
| 12/03/2026 | Gifts for someone who loves the outdoors | Gift Ideas | / |
| 12/05/2026 | Cozy gifts for a night in | Gifts for Your Partner | / |
| 12/07/2026 | Gifts for someone who loves to bake | Gift Ideas | / |
| 12/09/2026 | When to order each holiday gift | Holiday Gift Ideas | /holiday-gift-planning.html |
| 12/11/2026 | Gifts for a music lover | Gift Ideas | / |
| 12/13/2026 | Gifts for someone who loves to paint or draw | Gift Ideas | / |
| 12/15/2026 | Gift ideas for game night | D&D Gifts | / |
| 12/17/2026 | Last-minute Christmas gifts with no shipping | Holiday Gift Ideas | /last-minute-gifts.html |

### Pin text

Each link: `https://couplebettergifts.com/<page>?utm_source=pinterest&utm_medium=organic_social&utm_campaign=gift_quiz&utm_content=<pin id>`.

**d-stocking-stuffers**
- Title: Stocking stuffers they will actually use
- Description: Small gifts that match what they already do: thumb grips for a gamer, a bookmark set for a reader, a dice bag for a D&D player, a tea infuser, or brush pens for someone who letters. Stocking stuffer ideas under $25.

**d-secret-santa**
- Title: Secret Santa gifts under $25
- Description: Gift exchange ideas that work even when you barely know them: a good mug, cozy socks, a party game, or a phone stand for their desk. Keep the limit for the total, including a card. Secret Santa gift ideas, white elephant under $25.

**d-coffee-tea**
- Title: Gifts for someone who lives on coffee or tea
- Description: A tea infuser, a coffee tasting notebook, a mug they will reach for, or a milk frother. Check whether a frother heats milk or only froths. Gifts for coffee lovers, tea lover gift ideas.

**d-gamer-christmas**
- Title: Christmas gifts for a gamer
- Description: A pop-up card, a desk mat, a controller, or a headset. Before you order gear, find out whether they play on PC, PlayStation, Xbox, or Switch. Christmas gifts for gamers, gamer boyfriend gifts.

**d-hiker-camper**
- Title: Gifts for someone who loves the outdoors
- Description: A utensil set for trail meals, a sit pad, a trail journal, or a rechargeable headlamp. Check runtime and weather resistance on a headlamp. Gifts for hikers, camping gift ideas.

**d-cozy**
- Title: Cozy gifts for a night in
- Description: Socks, a framed photo you both love, a fill-in book with things you appreciate about them, or a soft throw blanket. Cozy gift ideas for a partner, best friend, or mom.

**d-baker**
- Title: Gifts for someone who loves to bake
- Description: Spatulas, cookie cutters, a recipe notebook for family recipes, or a kitchen scale for consistent baking. Check heat ratings and dishwasher instructions. Gifts for bakers, baking gift ideas.

**d-order-by**
- Title: When to order each holiday gift
- Description: Order the gifts that matter most, and anything custom, first. Check each store's holiday shipping cutoff, and keep digital gifts for the last few days. Holiday shopping timeline, Christmas gift planning.

**d-music**
- Title: Gifts for a music lover
- Description: Guitar picks, a stand that shows off a favorite album, a clip-on tuner, or a portable speaker. Confirm the tuner supports their instrument. Gifts for musicians, vinyl lover gifts.

**d-artist**
- Title: Gifts for someone who loves to paint or draw
- Description: A sketchbook, brush pens, an embroidery kit, or a travel watercolor set. Match paper weight to the medium they use. Gifts for artists, creative gift ideas.

**d-game-night**
- Title: Gift ideas for game night
- Description: A party game, a fresh dice set, a two-player game for a couple, or a dice tray. Check player counts before you buy. Board game gifts, game night gift ideas.

**d-last-minute**
- Title: Last-minute Christmas gifts with no shipping
- Description: Out of shipping time? Pick how the gift gets there first: a local shop, same-day pickup, or a digital gift. Print a digital gift and put it in a card. Last minute Christmas gifts.

