// December 2026 Pinterest pins (1000 x 1500). Each pin has its own format so the board reads
// like a curated collection, not one template. Every gift named is a real catalog item and
// every tip comes from the catalog's buying checks or the guides; budgets are planning tiers.
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

const site = 'couplebettergifts.com';
const ink = '#182a3d', blue = '#234ee8', paper = '#f4f1ec', red = '#a8231d', green = '#2c4a3b';

// Each layout returns [css, html]. Shared: Newsreader serif, Plex Mono labels, square corners.
const layouts = {
  // Magazine cover: full-bleed photo, headline over a dark fade, one line of picks.
  cover: p => [`
    .bg{position:absolute;inset:0;background:url(${photo(p.photo)}) ${p.focus || 'center'}/cover}
    .fade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,16,24,0) 35%,rgba(10,16,24,.82) 78%)}
    .txt{position:absolute;left:70px;right:70px;bottom:90px;color:#fff}
    .kick{font-family:"Plex Mono";font-size:24px;letter-spacing:.16em;text-transform:uppercase;color:#f2d9a6}
    h1{font-size:118px;line-height:.92;letter-spacing:-.035em;margin:18px 0 30px}
    .picks{font-size:36px;line-height:1.3;font-style:italic;color:#eef0f2}
    .url{margin-top:34px;font-family:"Plex Mono";font-size:20px;letter-spacing:.1em;color:#c9ced4}`,
    `<div class="bg"></div><div class="fade"></div><div class="txt"><div class="kick">${p.kicker}</div><h1>${p.title}</h1><p class="picks">${p.picks}</p><div class="url">${site}</div></div>`],

  // Type-only poster on a solid color: big numbered list, no photo.
  poster: p => [`
    body{background:${p.color}}
    .wrap{position:absolute;inset:80px 76px;color:#fff;display:flex;flex-direction:column}
    .kick{font-family:"Plex Mono";font-size:24px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.7)}
    h1{font-size:156px;line-height:.9;letter-spacing:-.04em;margin:30px 0 0}
    h1 em{font-style:italic;font-weight:500}
    ol{list-style:none;margin-top:auto;counter-reset:n;border-top:3px solid #fff}
    li{counter-increment:n;display:grid;grid-template-columns:90px 1fr;align-items:baseline;padding:34px 0;border-bottom:1px solid rgba(255,255,255,.35);font-size:56px;letter-spacing:-.015em}
    li::before{content:counter(n,decimal-leading-zero);font-family:"Plex Mono";font-size:24px;color:rgba(255,255,255,.7)}
    li small{display:block;font-size:30px;font-style:italic;color:rgba(255,255,255,.75);margin-top:6px;letter-spacing:0}
    .url{margin-top:34px;font-family:"Plex Mono";font-size:20px;letter-spacing:.1em;color:rgba(255,255,255,.7)}`,
    `<div class="wrap"><div class="kick">${p.kicker}</div><h1>${p.title}</h1><ol>${p.items.map(([a, b]) => `<li><span>${a}${b ? `<small>${b}</small>` : ''}</span></li>`).join('')}</ol><div class="url">${site}</div></div>`],

  // Split: tall photo on the left, text column on the right.
  split: p => [`
    body{background:${paper}}
    .ph{position:absolute;left:0;top:0;bottom:0;width:470px;background:url(${photo(p.photo)}) ${p.focus || 'center'}/cover}
    .col{position:absolute;left:530px;right:60px;top:90px;bottom:80px;display:flex;flex-direction:column;color:${ink}}
    .kick{font-family:"Plex Mono";font-size:21px;letter-spacing:.14em;text-transform:uppercase;color:${blue}}
    h1{font-size:88px;line-height:.96;letter-spacing:-.03em;margin:22px 0 46px}
    .it{padding:34px 0;border-top:1px solid ${ink}}
    .it b{display:block;font-size:44px;font-weight:600;letter-spacing:-.01em;line-height:1.1}
    .it span{display:block;margin-top:10px;font-size:28px;font-style:italic;color:#4a5866;line-height:1.3}
    .url{margin-top:auto;font-family:"Plex Mono";font-size:19px;letter-spacing:.1em;color:#4a5866}`,
    `<div class="ph"></div><div class="col"><div class="kick">${p.kicker}</div><h1>${p.title}</h1>${p.items.map(([a, b]) => `<div class="it"><b>${a}</b><span>${b}</span></div>`).join('')}<div class="url">${site}</div></div>`],

  // One tip, said big: photo band on top, a single sentence underneath.
  tip: p => [`
    body{background:#fff}
    .ph{position:absolute;left:0;right:0;top:0;height:640px;background:url(${photo(p.photo)}) ${p.focus || 'center'}/cover}
    .txt{position:absolute;left:76px;right:76px;top:720px;bottom:80px;display:flex;flex-direction:column;color:${ink}}
    .kick{font-family:"Plex Mono";font-size:22px;letter-spacing:.14em;text-transform:uppercase;color:${blue}}
    h1{font-size:64px;line-height:1.02;letter-spacing:-.025em;font-weight:500;margin-top:22px;color:#4a5866}
    .big{font-size:112px;line-height:.94;letter-spacing:-.04em;font-weight:700;margin-top:22px}
    .note{margin-top:auto;font-size:30px;font-style:italic;color:#4a5866;line-height:1.35;border-top:1px solid ${ink};padding-top:24px}
    .url{margin-top:18px;font-family:"Plex Mono";font-size:19px;letter-spacing:.1em;color:#4a5866}`,
    `<div class="ph"></div><div class="txt"><div class="kick">${p.kicker}</div><h1>${p.lead}</h1><div class="big">${p.title}</div><p class="note">${p.note}</p><div class="url">${site}</div></div>`],

  // Polaroid: square-cornered white-framed print on a colored ground, caption underneath.
  polaroid: p => [`
    body{background:${p.color}}
    .print{position:absolute;left:110px;right:110px;top:110px;background:#fbfaf7;padding:30px 30px 0;transform:rotate(-2deg)}
    .ph{height:700px;background:url(${photo(p.photo)}) ${p.focus || 'center'}/cover}
    .cap{padding:30px 6px 36px;font-size:52px;font-style:italic;line-height:1.05;letter-spacing:-.02em;color:${ink}}
    .list{position:absolute;left:110px;right:110px;bottom:90px;color:#fff}
    .list p{font-size:44px;line-height:1.42}
    .list p span{font-family:"Plex Mono";font-size:20px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.65);display:inline-block;width:200px}
    .url{margin-top:26px;font-family:"Plex Mono";font-size:19px;letter-spacing:.1em;color:rgba(255,255,255,.65)}`,
    `<div class="print"><div class="ph"></div><div class="cap">${p.title}</div></div><div class="list">${p.items.map(([a, b]) => `<p><span>${a}</span>${b}</p>`).join('')}<div class="url">${site}</div></div>`],

  // Recipe card: an index card with ingredients and method, on a photo.
  recipe: p => [`
    .bg{position:absolute;inset:0;background:url(${photo(p.photo)}) ${p.focus || 'center'}/cover}
    .card{position:absolute;left:70px;right:70px;top:430px;bottom:70px;background:#fffdf8;padding:54px 60px;color:${ink};
      background-image:repeating-linear-gradient(180deg,transparent 0 61px,#d9e3ef 61px 62px);background-position:0 168px}
        .kick{font-family:"Plex Mono";font-size:22px;letter-spacing:.14em;text-transform:uppercase;color:#c95a4e}
    h1{font-size:72px;line-height:1;letter-spacing:-.03em;margin:12px -60px 0;padding:0 60px 22px;border-bottom:3px solid #c95a4e;background:#fffdf8}
    h2{font-family:"Plex Mono";font-weight:500;font-size:22px;letter-spacing:.12em;text-transform:uppercase;margin:46px 0 4px;color:${blue}}
    .ing p,.meth p{font-size:38px;line-height:62px}
    .meth p{font-style:italic;font-size:34px}
    .url{position:absolute;right:60px;bottom:36px;font-family:"Plex Mono";font-size:18px;letter-spacing:.1em;color:#7b8794}`,
    `<div class="bg"></div><div class="card"><div class="kick">${p.kicker}</div><h1>${p.title}</h1><h2>Ingredients</h2><div class="ing">${p.items.map(i => `<p>${i}</p>`).join('')}</div><h2>Method</h2><div class="meth">${p.method.map(m => `<p>${m}</p>`).join('')}</div><div class="url">${site}</div></div>`],

  // Calendar: December grid with order-by days marked.
  calendar: p => {
    const first = new Date(2026, 11, 1).getDay(); // Dec 1, 2026 weekday
    const cells = Array.from({length: first}, () => '<i></i>').concat(Array.from({length: 31}, (_, i) => {
      const d = i + 1, m = p.marks[d];
      return `<i class="${m ? 'm ' + m[0] : ''}${d === 25 ? ' x' : ''}">${d}</i>`;
    })).join('');
    return [`
    body{background:${paper}}
    .wrap{position:absolute;inset:80px 70px;color:${ink};display:flex;flex-direction:column}
    .kick{font-family:"Plex Mono";font-size:22px;letter-spacing:.14em;text-transform:uppercase;color:${red}}
    h1{font-size:92px;line-height:.94;letter-spacing:-.035em;margin:18px 0 40px}
    .dow,.grid{display:grid;grid-template-columns:repeat(7,1fr)}
    .dow b{font-family:"Plex Mono";font-weight:500;font-size:20px;letter-spacing:.1em;padding:0 0 12px 10px;color:#6b7785}
    .grid{border-top:2px solid ${ink};border-left:1px solid #c9ccd1}
    .grid i{font-style:normal;height:118px;border-right:1px solid #c9ccd1;border-bottom:1px solid #c9ccd1;padding:8px 10px;font-size:26px}
    .grid i.m{color:#fff;font-weight:700}.grid i.a{background:${red}}.grid i.b{background:${blue}}.grid i.c{background:${ink}}
    .grid i.x{outline:3px solid ${red};outline-offset:-3px;font-weight:700}
    .key{margin-top:40px}
    .key p{display:grid;grid-template-columns:40px 150px 1fr;align-items:center;font-size:38px;padding:16px 0;border-bottom:1px dotted ${ink}}
    .key p i{width:26px;height:26px}.key p span{font-family:"Plex Mono";font-size:22px;letter-spacing:.06em}
    .url{margin-top:auto;font-family:"Plex Mono";font-size:19px;letter-spacing:.1em;color:#6b7785}`,
    `<div class="wrap"><div class="kick">${p.kicker}</div><h1>${p.title}</h1><div class="dow">${'SMTWTFS'.split('').map(d => `<b>${d}</b>`).join('')}</div><div class="grid">${cells}</div><div class="key">${p.key.map(([c, day, text]) => `<p><i style="background:${{a: red, b: blue, c: ink}[c]}"></i><span>${day}</span>${text}</p>`).join('')}</div><div class="url">${site}</div></div>`];
  },

  // Record sleeve: dark, photo as the "cover", picks as a track list on sides A and B.
  sleeve: p => [`
    body{background:#111417}
    .ph{position:absolute;left:70px;right:70px;top:70px;height:760px;background:url(${photo(p.photo)}) ${p.focus || 'center'}/cover}
    .t{position:absolute;left:70px;right:70px;top:880px;bottom:70px;color:#eef0f2;display:flex;flex-direction:column}
    h1{font-size:76px;line-height:.98;letter-spacing:-.03em}
    .sides{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:40px;border-top:1px solid #4a525b;padding-top:26px}
    .sides h3{font-family:"Plex Mono";font-weight:500;font-size:22px;letter-spacing:.14em;color:#e8b04a;margin-bottom:14px}
    .sides p{font-size:31px;line-height:1.3;margin-bottom:14px}
    .sides p span{display:block;font-family:"Plex Mono";font-size:18px;letter-spacing:.08em;color:#8e979f}
    .url{margin-top:auto;font-family:"Plex Mono";font-size:19px;letter-spacing:.1em;color:#8e979f}`,
    `<div class="ph"></div><div class="t"><h1>${p.title}</h1><div class="sides">${p.sides.map(([h, tracks]) => `<div><h3>${h}</h3>${tracks.map(([a, b]) => `<p>${a}<span>${b}</span></p>`).join('')}</div>`).join('')}</div><div class="url">${site}</div></div>`],

  // Board: full-bleed photo with a white score sheet set into the lower half.
  board: p => [`
    .bg{position:absolute;inset:0;background:url(${photo(p.photo)}) ${p.focus || 'center'}/cover}
    .sheet{position:absolute;left:60px;right:60px;bottom:60px;background:#fff;color:${ink};padding:48px 52px 40px}
    .kick{font-family:"Plex Mono";font-size:22px;letter-spacing:.14em;text-transform:uppercase;color:${green}}
    h1{font-size:96px;line-height:.92;letter-spacing:-.035em;margin:14px 0 34px}
    h1 em{font-style:italic;font-weight:500}
    .g{display:grid;grid-template-columns:1fr 1fr;border-top:2px solid ${ink}}
    .g div{padding:24px 24px 24px 0;border-bottom:1px dotted ${ink}}
    .g div:nth-child(odd){border-right:1px dotted ${ink}}
    .g div:nth-child(even){padding-left:28px}
    .g b{display:block;font-size:40px;letter-spacing:-.01em}
    .g span{display:block;font-size:26px;font-style:italic;font-weight:500;color:#4a5866;margin-top:6px}
    .url{margin-top:24px;font-family:"Plex Mono";font-size:19px;letter-spacing:.1em;color:#6b7785}`,
    `<div class="bg"></div><div class="sheet"><div class="kick">${p.kicker}</div><h1>${p.title}</h1><div class="g">${p.items.map(([a, b]) => `<div><b>${a}</b><span>${b}</span></div>`).join('')}</div><div class="url">${site}</div></div>`],

  // Inset: photo set into a paper page with a wide margin, editorial caption beside it.
  inset: p => [`
    body{background:${paper}}
    .ph{position:absolute;left:70px;right:70px;top:70px;height:820px;background:url(${photo(p.photo)}) ${p.focus || 'center'}/cover}
    .t{position:absolute;left:70px;right:70px;top:930px;bottom:70px;color:${ink};display:grid;grid-template-columns:1.05fr 1fr;gap:44px}
    h1{font-size:86px;line-height:.96;letter-spacing:-.03em;font-style:italic;font-weight:500}
    .r p{font-size:36px;line-height:1.2;padding:16px 0;border-bottom:1px dotted ${ink}}
    .r p:first-child{border-top:2px solid ${ink}}
    .r p span{display:block;font-family:"Plex Mono";font-size:18px;letter-spacing:.08em;color:${blue};text-transform:uppercase}
    .url{position:absolute;left:0;bottom:0;font-family:"Plex Mono";font-size:19px;letter-spacing:.1em;color:#6b7785}`,
    `<div class="ph"></div><div class="t"><div><h1>${p.title}</h1></div><div class="r">${p.items.map(([a, b]) => `<p><span>${a}</span>${b}</p>`).join('')}</div><div class="url">${site}</div></div>`]
};

const QUIZ = '', guide = p => p;
export const decPins = [
  {id: 'd-stocking-stuffers', date: '11/25/2026', board: 'Gifts Under $25', link: guide('gifts-under-25.html'), layout: 'cover', photo: 'stocking.jpg', focus: 'center 20%',
    kicker: 'Under $25', title: 'Stocking stuffers they will use',
    picks: 'Thumb grips for the gamer. A bookmark set for the reader. A dice bag for the D&D player. A tea infuser. Brush pens.',
    desc: 'Small gifts that match what they already do: thumb grips for a gamer, a bookmark set for a reader, a dice bag for a D&D player, a tea infuser, or brush pens for someone who letters. Stocking stuffer ideas under $25.'},
  {id: 'd-secret-santa', date: '11/27/2026', board: 'Gifts Under $25', link: guide('gifts-under-25.html'), layout: 'poster', color: red,
    kicker: 'Secret Santa', title: '$25 limit. <em>You barely know them.</em>',
    items: [['A good ceramic mug', 'Pick a size and handle they would like'], ['Soft lounge socks', 'Check the size range'], ['Codenames', 'A party game for the next get-together'], ['A foldable phone stand', 'Check it fits a phone in a case']],
    desc: 'Gift exchange ideas that work even when you barely know them: a good mug, cozy socks, a party game, or a phone stand for their desk. Keep the limit for the total, including a card. Secret Santa gift ideas, white elephant under $25.'},
  {id: 'd-coffee-tea', date: '11/29/2026', board: 'Gift Ideas', link: QUIZ, layout: 'split', photo: 'coffee.jpg', focus: '55% center',
    kicker: 'For a coffee or tea lover', title: 'For the one who lives on coffee',
    items: [['Coffee tasting notebook', 'For remembering beans and brewing experiments'], ['Loose-leaf tea infuser', 'Check it fits the mug they use'], ['A ceramic mug', 'Choose a handle and size they like'], ['Milk frother', 'Check whether it heats milk or only froths']],
    desc: 'A coffee tasting notebook, a tea infuser, a mug they will reach for, or a milk frother. Check whether a frother heats milk or only froths. Gifts for coffee lovers, tea lover gift ideas.'},
  {id: 'd-gamer-christmas', date: '12/01/2026', board: 'Gifts for Gamers', link: guide('gaming-gifts.html'), layout: 'tip', photo: 'assets/guide-gaming.jpg', focus: 'center 40%',
    kicker: 'Buying for a gamer', lead: 'Before you buy a controller or headset:', title: 'Check the console under the TV.',
    note: 'PC, PlayStation, Xbox, and Switch can each need different accessories. Thumb grips and a desk mat are safer if you cannot check.',
    desc: 'Before you buy a gamer a controller or headset, find out whether they play on PC, PlayStation, Xbox, or Switch. Thumb grips or a desk mat are safer picks if you cannot check. Christmas gifts for gamers.'},
  {id: 'd-hiker-camper', date: '12/03/2026', board: 'Gift Ideas', link: QUIZ, layout: 'polaroid', photo: 'camping.jpg', focus: 'center 60%', color: green,
    title: 'For the one who would rather be outside.',
    items: [['Up to $25', 'Camping utensil set'], ['Up to $25', 'Hiking sit pad'], ['Up to $25', 'Trail journal'], ['Up to $50', 'Rechargeable headlamp']],
    desc: 'A utensil set for trail meals, a sit pad, a trail journal, or a rechargeable headlamp. Check runtime and weather resistance on a headlamp. Gifts for hikers, camping gift ideas.'},
  {id: 'd-cozy', date: '12/05/2026', board: 'Gifts for Your Partner', link: QUIZ, layout: 'inset', photo: 'cozy.jpg',
    title: 'A night in, wrapped up.',
    items: [['Up to $25', 'Soft lounge socks'], ['Up to $25', 'A framed photo you both love'], ['Up to $25', 'Fill-in appreciation book'], ['Up to $50', 'Soft throw blanket']],
    desc: 'Socks, a framed photo you both love, a fill-in book with things you appreciate about them, or a soft throw blanket. Cozy gift ideas for a partner, best friend, or mom.'},
  {id: 'd-baker', date: '12/07/2026', board: 'Gift Ideas', link: QUIZ, layout: 'recipe', photo: 'baking.jpg', focus: 'center 30%',
    kicker: 'Gift recipe', title: 'For someone who loves to bake',
    items: ['1 silicone spatula set', '1 cookie cutter collection', '1 recipe notebook', '1 digital kitchen scale, optional'],
    method: ['Check the spatulas’ heat rating.', 'Pick cutter shapes they would use.', 'Check the scale’s units and capacity.'],
    desc: 'Spatulas, cookie cutters, a recipe notebook for family recipes, or a kitchen scale. Check heat ratings on spatulas and units on a scale. Gifts for bakers, baking gift ideas.'},
  {id: 'd-order-by', date: '12/09/2026', board: 'Holiday Gift Ideas', link: guide('holiday-gift-planning.html'), layout: 'calendar',
    kicker: 'Holiday planning', title: 'When to order each gift',
    marks: {11: ['a'], 15: ['b'], 18: ['c']},
    key: [['a', 'DEC 11', 'Partner, and anything custom'], ['b', 'DEC 15', 'Parents and siblings'], ['c', 'DEC 18', 'Coworkers and exchanges']],
    desc: 'Order your partner’s gift and anything personalized two weeks before Christmas, family gifts ten days before, and gift exchange gifts a week before. Check each store’s shipping cutoff. Christmas shopping timeline.'},
  {id: 'd-music', date: '12/11/2026', board: 'Gift Ideas', link: QUIZ, layout: 'sleeve', photo: 'music.jpg',
    title: 'Gifts for a music lover',
    sides: [['SIDE A · UP TO $25', [['Guitar pick variety pack', 'Confirm they play with a pick'], ['Record display stand', 'Check it holds sleeves safely']]], ['SIDE B · UP TO $100', [['Clip-on tuner', 'Check it supports their instrument'], ['Bluetooth speaker', 'Check battery life']]]],
    desc: 'Guitar picks, a stand that shows off a favorite album, a clip-on tuner, or a portable speaker. Confirm the tuner supports their instrument. Gifts for musicians, vinyl lover gifts.'},
  {id: 'd-artist', date: '12/13/2026', board: 'Gift Ideas', link: QUIZ, layout: 'cover', photo: 'art.jpg', focus: 'center',
    kicker: 'For an artist', title: 'For the one who paints on weekends',
    picks: 'A mixed-media sketchbook. Brush pens. An embroidery starter kit. A watercolor travel set.',
    desc: 'A sketchbook, brush pens, an embroidery kit, or a travel watercolor set. Match paper weight to the medium they use. Gifts for artists, creative gift ideas.'},
  {id: 'd-game-night', date: '12/15/2026', board: 'D&D Gifts', link: QUIZ, layout: 'board', photo: 'gamenight.jpg', focus: 'center 30%',
    kicker: 'Game night', title: 'Four picks for <em>game night.</em>',
    items: [['Codenames', 'A party game for a group'], ['Azul Duel', 'A two-player game for a couple'], ['Polyhedral dice set', 'For their next D&D session'], ['Folding dice tray', 'Keeps rolls on the table']],
    desc: 'A party game, a two-player game, a fresh dice set, or a dice tray. Board game gifts, game night gift ideas.'},
  {id: 'd-last-minute', date: '12/17/2026', board: 'Holiday Gift Ideas', link: guide('last-minute-gifts.html'), layout: 'poster', color: ink,
    kicker: 'Last minute', title: 'No time to ship it? <em>Still covered.</em>',
    items: [['A local bookshop or bakery', 'Call ahead to check stock'], ['Same-day pickup', 'Order online, pick up nearby'], ['Tickets, a class, an e-book', 'Print it and put it in a card'], ['A plan you make together', 'Put a real date on it']],
    desc: 'Out of shipping time? Pick how the gift gets there first: a local shop, same-day pickup, or a digital gift. Print a digital gift and put it in a card. Last minute Christmas gifts.'}
];

export const decLink = pin => `https://${site}/${pin.link}?utm_source=pinterest&utm_medium=organic_social&utm_campaign=gift_quiz&utm_content=${pin.id}`;

const page = pin => {
  const [css, body] = layouts[pin.layout](pin);
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:"Newsreader";src:url(${asset('fonts/newsreader.woff2')}) format("woff2");font-weight:200 800;font-style:normal}
@font-face{font-family:"Newsreader";src:url(${url(path.join(here, 'fonts', 'newsreader-italic.woff2'))}) format("woff2");font-weight:200 800;font-style:italic}
@font-face{font-family:"Plex Mono";src:url(${asset('fonts/plexmono-500.woff2')}) format("woff2");font-weight:500}
*{box-sizing:border-box;margin:0}
html,body{width:1000px;height:1500px;overflow:hidden;background:#fff}
body{position:relative;font-family:"Newsreader",Georgia,serif;font-weight:700}
.kick,.url,h2,h3,li::before{font-weight:500}
${css}</style></head><body>${body}</body></html>`;
};

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  for (const pin of decPins) writeFileSync(path.join(out, `${pin.id}.html`), page(pin));
  console.log(`Wrote ${decPins.length} December pins to ${out}`);
}
