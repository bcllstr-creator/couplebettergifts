// December 2026 Pinterest pins (1000 x 1500). Every gift row is a real catalog item; the
// left label is who it suits or the catalog's planning budget tier, never a live price.
// New photos live in social/photos (credits in social/photos/CREDITS.md); older ones in dist/assets.
// Run: node social/build-pins-december.mjs, then render social/html/d-*.html with headless Edge.
import {writeFileSync, mkdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(here, '../dist');
const out = path.join(here, 'html');
mkdirSync(out, {recursive: true});
const url = p => encodeURI('file:///' + p.replace(/\\/g, '/'));
const asset = p => url(path.join(dist, p));
const photo = p => p.startsWith('assets/') ? asset(p) : url(path.join(here, 'photos', p));

const QUIZ = {path: '', cta: 'Take the 5-question gift quiz'};
const guide = p => ({path: p, cta: 'Read the full guide'});

export const decPins = [
  {id: 'd-stocking-stuffers', date: '11/25/2026', board: 'Gifts Under $25', link: guide('gifts-under-25.html'), photo: 'stocking.jpg', focus: 'center 30%',
    kicker: 'Under $25', title: 'Stocking stuffers they will actually use',
    rows: [['Gamer', 'Controller thumb grips'], ['Reader', 'Fantasy bookmark set'], ['D&D player', 'Drawstring dice bag'], ['Tea drinker', 'Loose-leaf tea infuser'], ['Artist', 'Brush pen lettering set']],
    desc: 'Small gifts that match what they already do: thumb grips for a gamer, a bookmark set for a reader, a dice bag for a D&D player, a tea infuser, or brush pens for someone who letters. Stocking stuffer ideas under $25.'},
  {id: 'd-secret-santa', date: '11/27/2026', board: 'Gifts Under $25', link: guide('gifts-under-25.html'), photo: 'giftboxes.jpg', focus: 'center',
    kicker: 'Secret Santa', title: 'Secret Santa gifts under $25',
    rows: [['Coffee drinker', 'Ceramic mug'], ['Always cold', 'Soft lounge socks'], ['Game night', 'Codenames'], ['Desk job', 'Foldable phone stand']],
    desc: 'Gift exchange ideas that work even when you barely know them: a good mug, cozy socks, a party game, or a phone stand for their desk. Keep the limit for the total, including a card. Secret Santa gift ideas, white elephant under $25.'},
  {id: 'd-coffee-tea', date: '11/29/2026', board: 'Gift Ideas', link: QUIZ, photo: 'coffee.jpg', focus: 'center 40%',
    kicker: 'For a coffee or tea lover', title: 'Gifts for someone who lives on coffee or tea',
    rows: [['Up to $25', 'Loose-leaf tea infuser'], ['Up to $25', 'Coffee tasting notebook'], ['Up to $25', 'Ceramic mug'], ['Up to $50', 'Milk frother']],
    desc: 'A tea infuser, a coffee tasting notebook, a mug they will reach for, or a milk frother. Check whether a frother heats milk or only froths. Gifts for coffee lovers, tea lover gift ideas.'},
  {id: 'd-gamer-christmas', date: '12/01/2026', board: 'Gifts for Gamers', link: guide('gaming-gifts.html'), photo: 'assets/guide-gaming.jpg', focus: 'center',
    kicker: 'For a gamer', title: 'Christmas gifts for a gamer',
    rows: [['Up to $25', 'Video gamer pop-up card'], ['Up to $25', 'Gaming desk mat'], ['Up to $50', 'Gaming controller'], ['Up to $100', 'Gaming headset']],
    desc: 'A pop-up card, a desk mat, a controller, or a headset. Before you order gear, find out whether they play on PC, PlayStation, Xbox, or Switch. Christmas gifts for gamers, gamer boyfriend gifts.'},
  {id: 'd-hiker-camper', date: '12/03/2026', board: 'Gift Ideas', link: QUIZ, photo: 'camping.jpg', focus: 'center 60%',
    kicker: 'For a hiker or camper', title: 'Gifts for someone who loves the outdoors',
    rows: [['Up to $25', 'Camping utensil set'], ['Up to $25', 'Hiking sit pad'], ['Up to $25', 'Trail journal'], ['Up to $50', 'Rechargeable headlamp']],
    desc: 'A utensil set for trail meals, a sit pad, a trail journal, or a rechargeable headlamp. Check runtime and weather resistance on a headlamp. Gifts for hikers, camping gift ideas.'},
  {id: 'd-cozy', date: '12/05/2026', board: 'Gifts for Your Partner', link: QUIZ, photo: 'cozy.jpg', focus: 'center',
    kicker: 'Cozy gifts', title: 'Cozy gifts for a night in',
    rows: [['Up to $25', 'Soft lounge socks'], ['Up to $25', 'Photo frame with a shared memory'], ['Up to $25', 'Fill-in appreciation book'], ['Up to $50', 'Soft throw blanket']],
    desc: 'Socks, a framed photo you both love, a fill-in book with things you appreciate about them, or a soft throw blanket. Cozy gift ideas for a partner, best friend, or mom.'},
  {id: 'd-baker', date: '12/07/2026', board: 'Gift Ideas', link: QUIZ, photo: 'baking.jpg', focus: 'center 40%',
    kicker: 'For a baker', title: 'Gifts for someone who loves to bake',
    rows: [['Up to $25', 'Silicone baking spatula set'], ['Up to $25', 'Cookie cutter collection'], ['Up to $25', 'Recipe notebook'], ['Up to $50', 'Digital kitchen scale']],
    desc: 'Spatulas, cookie cutters, a recipe notebook for family recipes, or a kitchen scale for consistent baking. Check heat ratings and dishwasher instructions. Gifts for bakers, baking gift ideas.'},
  {id: 'd-order-by', date: '12/09/2026', board: 'Holiday Gift Ideas', link: guide('holiday-gift-planning.html'), photo: 'assets/guide-holiday.jpg', focus: 'center',
    kicker: 'Holiday planning', title: 'When to order each holiday gift',
    rows: [['2 weeks before', 'Partner, and anything personalized'], ['10 days before', 'Parents and siblings'], ['1 week before', 'Coworker and gift exchanges'], ['Any time', 'Tickets, classes, e-books']],
    desc: 'Order the gifts that matter most, and anything custom, first. Check each store\'s holiday shipping cutoff, and keep digital gifts for the last few days. Holiday shopping timeline, Christmas gift planning.'},
  {id: 'd-music', date: '12/11/2026', board: 'Gift Ideas', link: QUIZ, photo: 'music.jpg', focus: 'center',
    kicker: 'For a music lover', title: 'Gifts for a music lover',
    rows: [['Up to $25', 'Guitar pick variety pack'], ['Up to $25', 'Record display stand'], ['Up to $50', 'Clip-on instrument tuner'], ['Up to $100', 'Portable Bluetooth speaker']],
    desc: 'Guitar picks, a stand that shows off a favorite album, a clip-on tuner, or a portable speaker. Confirm the tuner supports their instrument. Gifts for musicians, vinyl lover gifts.'},
  {id: 'd-artist', date: '12/13/2026', board: 'Gift Ideas', link: QUIZ, photo: 'art.jpg', focus: 'center',
    kicker: 'For an artist', title: 'Gifts for someone who loves to paint or draw',
    rows: [['Up to $25', 'Mixed-media sketchbook'], ['Up to $25', 'Brush pen lettering set'], ['Up to $25', 'Embroidery starter kit'], ['Up to $50', 'Watercolor travel set']],
    desc: 'A sketchbook, brush pens, an embroidery kit, or a travel watercolor set. Match paper weight to the medium they use. Gifts for artists, creative gift ideas.'},
  {id: 'd-game-night', date: '12/15/2026', board: 'D&D Gifts', link: QUIZ, photo: 'gamenight.jpg', focus: 'center',
    kicker: 'Game night', title: 'Gift ideas for game night',
    rows: [['Up to $25', 'Codenames'], ['Up to $25', 'Polyhedral dice set'], ['Up to $50', 'Azul Duel, for two players'], ['Up to $50', 'Folding dice tray']],
    desc: 'A party game, a fresh dice set, a two-player game for a couple, or a dice tray. Check player counts before you buy. Board game gifts, game night gift ideas.'},
  {id: 'd-last-minute', date: '12/17/2026', board: 'Holiday Gift Ideas', link: guide('last-minute-gifts.html'), photo: 'assets/guide-lastminute.jpg', focus: 'center',
    kicker: 'Last minute', title: 'Last-minute Christmas gifts with no shipping',
    rows: [['Hours left', 'Local bookshop, bakery, or florist'], ['One day', 'Same-day pickup nearby'], ['Any time', 'Tickets, a class, or an e-book'], ['Any time', 'A plan you make, with a date']],
    desc: 'Out of shipping time? Pick how the gift gets there first: a local shop, same-day pickup, or a digital gift. Print a digital gift and put it in a card. Last minute Christmas gifts.'}
];

export const decLink = pin => `https://couplebettergifts.com/${pin.link.path}?utm_source=pinterest&utm_medium=organic_social&utm_campaign=gift_quiz&utm_content=${pin.id}`;

const html = pin => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:"Newsreader";src:url(${asset('fonts/newsreader.woff2')}) format("woff2");font-weight:200 800}
@font-face{font-family:"Plex Mono";src:url(${asset('fonts/plexmono-500.woff2')}) format("woff2");font-weight:500}
*{box-sizing:border-box;margin:0}
html,body{width:1000px;height:1500px;overflow:hidden;background:#f4f1ec}
.pin{position:relative;width:1000px;height:1500px;font-family:"Newsreader",Georgia,serif;color:#182a3d}
.photo{position:absolute;inset:0 0 auto 0;height:${pin.rows.length > 4 ? 600 : 680}px;background:url(${photo(pin.photo)}) ${pin.focus}/cover}
.brand{position:absolute;left:48px;top:44px;background:#fff;padding:14px 22px 12px;font-weight:800;font-size:30px;letter-spacing:-.03em}
.card{position:absolute;left:48px;right:48px;top:${pin.rows.length > 4 ? 500 : 580}px;bottom:48px;background:#fff;padding:46px 52px 0;display:flex;flex-direction:column}
.kicker{font-family:"Plex Mono",monospace;font-size:22px;letter-spacing:.14em;text-transform:uppercase;color:#234ee8}
h1{font-weight:700;font-size:${pin.title.length > 34 ? 66 : 74}px;line-height:1;letter-spacing:-.03em;margin-top:14px}
ul{list-style:none;margin-top:28px;border-top:2px solid #182a3d;flex:1;display:flex;flex-direction:column}
li{flex:1;display:grid;grid-template-columns:200px 1fr;align-items:center;gap:16px;border-bottom:1px dotted #182a3d;max-height:110px}
li span{font-family:"Plex Mono",monospace;font-size:20px;letter-spacing:.06em;text-transform:uppercase;color:#234ee8;line-height:1.3}
li b{font-weight:600;font-size:38px;line-height:1.1;letter-spacing:-.015em}
.foot{display:flex;justify-content:space-between;align-items:center;margin:0 -52px;padding:24px 52px;background:#182a3d;color:#fff;font-family:"Plex Mono",monospace;font-size:21px;letter-spacing:.06em;text-transform:uppercase}
.foot em{font-style:normal;color:#bacbff}
</style></head><body><div class="pin">
<div class="photo"><div class="brand">Couple Better Gifts</div></div>
<div class="card"><div class="kicker">${pin.kicker}</div><h1>${pin.title}</h1>
<ul>${pin.rows.map(([label, text]) => `<li><span>${label}</span><b>${text}</b></li>`).join('')}</ul>
<div class="foot"><span>${pin.link.cta}</span><em>couplebettergifts.com</em></div></div>
</div></body></html>`;

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  for (const pin of decPins) writeFileSync(path.join(out, `${pin.id}.html`), html(pin));
  console.log(`Wrote ${decPins.length} December pins to ${out}`);
}
