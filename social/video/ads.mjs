// Builds the motion ads as HTML pages. Each page exposes window.seek(t), which sets every
// element for time t in seconds, so render.mjs can capture exact frames at 30 fps.
// Run: node ads.mjs && node render.mjs   (from social/video)
import {writeFileSync, mkdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(here, '../../dist');
const out = path.join(here, 'html');
mkdirSync(out, {recursive: true});
const file = p => encodeURI('file:///' + path.join(dist, p).replace(/\\/g, '/'));

// Reels/Stories keep text out of the top 14% and bottom 20%, where Meta draws its own UI.
export const sizes = [
  {name: 'reels', w: 1080, h: 1920, pad: '290px 84px 430px'},
  {name: 'feed', w: 1080, h: 1350, pad: '96px 84px 96px'}
];

const opt = (label, at, sel) => `<div class="opt" data-in="${at}"><div class="optin"${sel ? ` data-sel="${sel}"` : ''}><b>${label}</b><i></i></div></div>`;
const photo = (img, scene, extra = '') => `<div class="photo" style="background-image:url(${file('assets/' + img)})" data-kb="${scene}"${extra}></div>`;
const endCard = (start, kicker, title) => `
<section class="scene paper" data-scene="${start},99"><div class="pad end">
  <div class="endphoto">${photo('guide-partner.jpg', `${start},${start + 4}`)}</div>
  <div class="kick" data-in="${start + 0.1}">${kicker}</div>
  <h1 class="endtitle" data-in="${start + 0.2}">${title}</h1>
  <div class="cta" data-in="${start + 0.5}" data-fx="pop">Take the gift quiz</div>
  <div class="url" data-in="${start + 0.7}">couplebettergifts.com</div>
</div></section>`;

export const ads = [
  {
    id: 'quiz-demo',
    duration: 14,
    body: `
<section class="scene blue" data-scene="0,1.6"><div class="pad center">
  <div class="kick light" data-in="0">Couple Better Gifts</div>
  <h1 class="huge"><span data-in="0.05" data-fx="slam">Stuck</span> <span data-in="0.3" data-fx="slam">on a</span> <span data-in="0.55" data-fx="slam">gift?</span></h1>
</div></section>
<section class="scene paper" data-scene="1.6,4.6"><div class="pad center">
  <div class="kick" data-in="1.6">Gift quiz / Budget</div>
  <h2 data-in="1.7">What’s your budget?</h2>
  <div class="grid">${opt('Up to $25', 1.9)}${opt('Up to $50', 1.98, 3.1)}${opt('Up to $100', 2.06)}${opt('Up to $200', 2.14)}</div>
  <p class="note" data-in="2.4">Leave a little room for shipping and tax.</p>
</div></section>
<section class="scene paper" data-scene="4.6,7.8"><div class="pad center">
  <div class="kick" data-in="4.6">Gift quiz / Interests</div>
  <h2 data-in="4.7">What do they enjoy?</h2>
  <div class="grid">${opt('Gaming', 4.85)}${opt('Books & fantasy', 4.9, 5.7)}${opt('D&D', 4.95)}${opt('Hiking & camping', 5.0)}${opt('Cooking & baking', 5.05)}${opt('Coffee & tea', 5.1, 6.4)}${opt('Music', 5.15)}${opt('Art & crafts', 5.2)}</div>
  <p class="note" data-in="5.4">Pick up to two.</p>
</div></section>
<section class="scene navy" data-scene="7.8,11"><div class="pad center">
  <div class="kick light" data-in="7.8">Your short list</div>
  <h2 class="white" data-in="7.9">Up to $50, for a reader who drinks coffee.</h2>
  <div class="rows">
    <div class="row" data-in="8.3" data-fx="left"><b>Rechargeable reading light</b><span>Check brightness, weight, and how the light attaches.</span></div>
    <div class="row" data-in="8.75" data-fx="left"><b>Milk frother</b><span>Check whether it heats milk or only froths.</span></div>
    <div class="row" data-in="9.2" data-fx="left"><b>Collectible hardcover novel</b><span>Confirm the title, edition, and whether they already own it.</span></div>
  </div>
</div></section>
${endCard(11, 'Gift quiz and buying guides', 'Find a gift they’ll actually use.')}`
  },
  {
    id: 'controller-check',
    duration: 11.5,
    body: `
<section class="scene" data-scene="0,1.5">${photo('guide-gaming.jpg', '0,1.5')}<div class="pad bottom">
  <h1 class="box" data-in="0.1" data-fx="pop">Buying a controller?</h1>
</div></section>
<section class="scene blue" data-scene="1.5,3.9"><div class="pad center">
  <div class="kick light" data-in="1.5">Do they play on</div>
  <div class="cycle"><h1 class="huge" data-scene="1.5,2.05" data-in="1.5" data-fx="slam">PC,</h1><h1 class="huge" data-scene="2.05,2.6" data-in="2.05" data-fx="slam">PlayStation,</h1><h1 class="huge" data-scene="2.6,3.15" data-in="2.6" data-fx="slam">Xbox,</h1><h1 class="huge" data-scene="3.15,3.9" data-in="3.15" data-fx="slam">or Switch?</h1></div>
</div></section>
<section class="scene paper" data-scene="3.9,6.7"><div class="pad center">
  <h2 data-in="3.95">Each one can need different accessories.</h2>
  <h1 class="big"><span class="mark" data-in="4.9" data-fx="wipe">Check what they play on first.</span></h1>
</div></section>
<section class="scene navy" data-scene="6.7,8.7"><div class="pad center">
  <h2 class="white" data-in="6.75">Can’t ask without spoiling it?</h2>
  <h1 class="big white" data-in="7.3" data-fx="pop">Look at the console under the TV.</h1>
</div></section>
${endCard(8.7, 'Gift quiz and buying guides', 'The gift quiz asks what they play on.')}`
  },
  {
    id: 'start-with-them',
    duration: 10.5,
    body: `
<section class="scene paper" data-scene="0,1.4"><div class="pad center">
  <h1 class="huge navy-text"><span data-in="0.05" data-fx="slam">Start</span> <span data-in="0.3" data-fx="slam">with what</span> <span data-in="0.55" data-fx="slam">they like.</span></h1>
</div></section>
${[['guide-gaming.jpg', 'Gaming.'], ['guide-reading.jpg', 'Books.'], ['guide-tabletop.jpg', 'D&D.'], ['guide-under25.jpg', 'Coffee.']].map(([img, word], i) => {
  const a = +(1.4 + i * 0.6).toFixed(2), b = +(a + 0.6).toFixed(2);
  return `<section class="scene" data-scene="${a},${b}">${photo(img, `${a},${b}`)}<div class="pad bottom"><h1 class="box huge" data-in="${a}" data-fx="pop">${word}</h1></div></section>`;
}).join('')}
<section class="scene blue" data-scene="3.8,7.4"><div class="pad center">
  <div class="steps">
    <div class="step" data-in="3.85" data-fx="left"><i>01</i><b>Set a budget.</b></div>
    <div class="step" data-in="4.6" data-fx="left"><i>02</i><b>Pick up to two things they enjoy.</b></div>
    <div class="step" data-in="5.35" data-fx="left"><i>03</i><b>Get a short list of gifts, with what to check before you buy.</b></div>
  </div>
</div></section>
${endCard(7.4, 'Gift quiz and buying guides', 'Find a gift they’ll actually use.')}`
  }
];

const runtime = `
const T=s=>s.split(',').map(Number);
const seg=(t,a,d)=>Math.min(1,Math.max(0,(t-a)/d));
const out3=p=>1-Math.pow(1-p,3);
const back=p=>{const c=1.9;return 1+(c+1)*Math.pow(p-1,3)+c*Math.pow(p-1,2);};
window.seek=t=>{
  for(const el of document.querySelectorAll('[data-scene]')){const[a,b]=T(el.dataset.scene);el.style.visibility=t>=a&&t<b?'visible':'hidden';}
  for(const el of document.querySelectorAll('[data-in]')){
    const a=+el.dataset.in,fx=el.dataset.fx||'up';
    const p=seg(t,a,fx==='slam'?0.22:fx==='wipe'?0.5:0.4),e=out3(p);
    let tr='none',op=1,clip='none';
    if(fx==='up'){tr='translateY('+(1-e)*70+'px)';op=e;}
    else if(fx==='left'){tr='translateX('+(1-e)*-140+'px)';op=e;}
    else if(fx==='pop'){tr='scale('+(0.55+0.45*back(p))+')';op=Math.min(1,p*3);}
    else if(fx==='slam'){tr='translateY('+(1-e)*-24+'px) scale('+(1+(1-e)*0.35)+')';op=Math.min(1,p*4);}
    else if(fx==='wipe'){clip='inset(0 '+(1-e)*100+'% 0 0)';}
    el.style.transform=tr;el.style.opacity=op;el.style.clipPath=clip;
  }
  for(const el of document.querySelectorAll('[data-sel]')){
    const s=+el.dataset.sel,on=t>=s,k=seg(t,s,0.3);
    el.classList.toggle('on',on);
    el.style.transform=on&&k<1?'scale('+(1+0.07*Math.sin(k*Math.PI))+')':'none';
  }
  for(const el of document.querySelectorAll('[data-kb]')){const[a,b]=T(el.dataset.kb);el.style.transform='scale('+(1.03+0.12*seg(t,a,b-a))+')';}
  return true;
};`;

const css = size => `
@font-face{font-family:"Newsreader";src:url(${file('fonts/newsreader.woff2')}) format("woff2");font-weight:200 800}
@font-face{font-family:"Plex Mono";src:url(${file('fonts/plexmono-500.woff2')}) format("woff2");font-weight:500}
*{box-sizing:border-box;margin:0}
html,body{width:${size.w}px;height:${size.h}px;overflow:hidden;background:#fff}
body{font-family:"Newsreader",Georgia,serif;color:#182a3d;-webkit-font-smoothing:antialiased}
.scene{position:absolute;inset:0;overflow:hidden;visibility:hidden}
.paper{background:#fff}.blue{background:#234ee8;color:#fff}.navy{background:#182a3d;color:#fff}
.pad{position:absolute;inset:0;padding:${size.pad};display:flex;flex-direction:column}
.center{justify-content:center}.bottom{justify-content:flex-end}
.photo{position:absolute;inset:0;background:center/cover no-repeat}
.kick{font-family:"Plex Mono",monospace;font-size:30px;letter-spacing:.14em;text-transform:uppercase;color:#234ee8;margin-bottom:28px}
.kick.light{color:#c9d5ff}
h1,h2{font-weight:700;letter-spacing:-.03em}
.huge{font-size:${size.name === 'reels' ? 172 : 150}px;line-height:.95}
.huge span{display:inline-block;transform-origin:left bottom}
.cycle{position:relative;height:170px}
.cycle h1{position:absolute;left:0;top:0;font-size:150px;white-space:nowrap;transform-origin:left center}
.big{font-size:112px;line-height:1;margin-top:40px}
h2{font-size:84px;line-height:1.02}
.white{color:#fff}.navy-text{color:#182a3d}
.box{align-self:flex-start;background:#182a3d;color:#fff;padding:22px 34px 30px;font-size:108px;line-height:1;transform-origin:left bottom}
.box.huge{font-size:150px}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:48px}
.optin{display:flex;justify-content:space-between;align-items:center;border:2px solid #182a3d;padding:26px 28px;font-size:40px;background:#fff;color:#182a3d}
.optin b{font-weight:600;letter-spacing:-.01em}
.optin i{font-family:"Plex Mono",monospace;font-style:normal;font-size:36px;color:#234ee8}
.optin i::before{content:"+"}
.optin.on{background:#234ee8;border-color:#234ee8;color:#fff}
.optin.on i{color:#fff}.optin.on i::before{content:"\\2713"}
.note{font-family:"Plex Mono",monospace;font-size:28px;letter-spacing:.04em;margin-top:34px;color:#4a5866}
.rows{margin-top:46px;border-top:2px solid #fff}
.row{padding:30px 0;border-bottom:2px dotted #8fa0b3;display:flex;flex-direction:column;gap:12px}
.row b{font-size:58px;letter-spacing:-.02em;line-height:1.05}
.row span{font-family:"Plex Mono",monospace;font-size:28px;line-height:1.4;color:#c9d5ff}
.mark{background:#234ee8;color:#fff;padding:0 14px;box-decoration-break:clone;-webkit-box-decoration-break:clone;line-height:1.18}
.steps{display:flex;flex-direction:column;gap:46px}
.step{display:grid;grid-template-columns:110px 1fr;align-items:baseline;border-top:2px solid rgba(255,255,255,.55);padding-top:26px}
.step i{font-family:"Plex Mono",monospace;font-style:normal;font-size:34px;color:#c9d5ff}
.step b{font-size:76px;line-height:1.02;letter-spacing:-.03em}
.end{justify-content:flex-end}
.endphoto{position:relative;overflow:hidden;flex:1;min-height:0;margin-bottom:44px}
.endtitle{font-size:104px;line-height:.98}
.cta{align-self:flex-start;margin-top:40px;background:#234ee8;color:#fff;font-family:"Plex Mono",monospace;font-size:36px;letter-spacing:.08em;text-transform:uppercase;padding:28px 40px;transform-origin:left center}
.url{font-family:"Plex Mono",monospace;font-size:30px;letter-spacing:.08em;text-transform:uppercase;margin-top:30px;border-top:1px dotted #182a3d;padding-top:20px}
`;

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  for (const ad of ads) for (const size of sizes) {
    writeFileSync(path.join(out, `${ad.id}-${size.name}.html`),
      `<!doctype html><html><head><meta charset="utf-8"><style>${css(size)}</style></head><body>${ad.body}<script>${runtime}seek(0);</script></body></html>`);
  }
  console.log(`Wrote ${ads.length * sizes.length} ad pages to ${out}`);
}
