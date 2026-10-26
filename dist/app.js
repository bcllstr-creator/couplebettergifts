import {budgets,interests,styles,platforms,shortlist,purchase,merchantName} from './quiz-engine.js?v=21';
const root=document.querySelector('#quiz');
const welcome=document.querySelector('#welcome-dialog');
const initial=()=>({budget:'',interests:[],platform:'unknown',style:'any',customization:'either',recipient:'any'});
const state={ready:false,step:0,answers:initial(),expanded:false,completed:false,excluded:[]};
const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const stages=()=>['budget','interests',...(state.answers.interests.includes('games')?['platform']:[]),'style','details'];
const names={budget:'Budget',interests:'Interests',platform:'Gaming system',style:'Gift type',details:'Final details'};
const labels={any:'Someone else / prefer not to say',partner:'Adult partner',friend:'Adult friend',family:'Adult family member',teen:'Teen (13–17)'};
function choice(value,title,subtitle='',selected=false){return `<button class="choice${selected?' selected':''}" data-answer="${escape(value)}" aria-pressed="${selected}"><span><strong>${title}</strong>${subtitle?`<small>${subtitle}</small>`:''}</span><span class="choice-mark" aria-hidden="true">${selected?'✓':'+'}</span></button>`;}
function question(){
 const a=state.answers;
 switch(stages()[state.step]){
 case 'budget':return `<h2 tabindex="-1">What’s your budget?</h2><div class="choices two-columns">${Object.entries(budgets).map(([id,title])=>choice(id,title,'',a.budget===id)).join('')}</div><p class="question-note">Leave a little room for shipping and tax.</p>`;
 case 'interests':return `<h2 tabindex="-1">What do they enjoy?</h2><p class="question-note">Pick up to two.</p><div class="choices interest-choices">${Object.entries(interests).map(([id,title])=>choice(id,title,'',a.interests.includes(id))).join('')}</div><button class="text-button unsure-choice" data-answer="unsure" aria-pressed="${a.interests.includes('unsure')}">${a.interests.includes('unsure')?'Selected: I’m not sure':'I’m not sure'}</button><div class="quiz-next"><span id="interest-count" role="status">${a.interests.includes('unsure')?'We’ll show a mix.':a.interests.length===2?'Two selected. Remove one to change.':`${a.interests.length} of 2 selected`}</span><button class="primary" data-next ${a.interests.length?'':'disabled'}>Continue</button></div>`;
 case 'platform':return `<h2 tabindex="-1">What do they play on?</h2><p class="question-note">This helps us avoid accessories for the wrong system.</p><div class="choices two-columns">${Object.entries(platforms).map(([id,title])=>choice(id,title,'',a.platform===id)).join('')}</div>`;
 case 'style':return `<h2 tabindex="-1">What kind of gift feels right?</h2><div class="choices two-columns">${Object.entries(styles).map(([id,title])=>choice(id,title,{practical:'Useful in their daily routine',personal:'A keepsake or a personal touch',fun:'A game, project, or activity',any:'A few different directions'}[id],a.style===id)).join('')}</div>`;
 case 'details':return `<h2 tabindex="-1">A couple of final details.</h2><label class="field-label" for="recipient">Who is it for?</label><select id="recipient" class="recipient-select">${Object.entries(labels).map(([id,label])=>`<option value="${id}" ${a.recipient===id?'selected':''}>${label}</option>`).join('')}</select><fieldset class="customization"><legend>Would you like to personalize it?</legend><div class="choices preference-choices">${[['ready','Keep it ready-made'],['custom','Open to names or photos'],['either','Either works']].map(([id,title])=>`<button class="choice${a.customization===id?' selected':''}" data-custom="${id}" aria-pressed="${a.customization===id}"><strong>${title}</strong></button>`).join('')}</div></fieldset><button class="primary finish-quiz" data-finish>See my gifts</button>`;
 }
}
function start(){if(welcome?.open)welcome.close();if(state.ready)return;state.ready=true;window.giftAnalytics?.track('quiz_start');render();}
export function answer(value){
 if(!state.ready)throw new Error('Choose Start quiz first.');
 const stage=stages()[state.step],a=state.answers;
 if(stage==='interests'){
  if(value==='unsure')a.interests=a.interests.includes('unsure')?[]:['unsure'];
  else{if(!interests[value])throw new Error('Choose an available interest.');a.interests=a.interests.filter(id=>id!=='unsure');if(a.interests.includes(value))a.interests=a.interests.filter(id=>id!==value);else if(a.interests.length<2)a.interests.push(value);}
  if(!a.interests.includes('games'))a.platform='unknown';state.excluded=[];render(false);return;
 }
 const options=stage==='budget'?budgets:stage==='platform'?platforms:stage==='style'?styles:null;
 if(!options||!Object.hasOwn(options,value))throw new Error('Choose an available answer.');
 a[stage]=value;state.step++;state.excluded=[];render();
}
function next(){if(stages()[state.step]==='interests'&&state.answers.interests.length){state.step++;render();}}
function back(){if(state.step>0)state.step--;state.expanded=false;render();}
function restart(){Object.assign(state,{ready:false,step:0,answers:initial(),expanded:false,completed:false,excluded:[]});render();}
function complete(){state.answers.recipient=document.querySelector('#recipient').value;if(!state.completed){state.completed=true;window.giftAnalytics?.track('quiz_complete');}state.step=stages().length;state.expanded=false;render();}
function giftCard(g,index){
 const link=purchase(g),store=merchantName(link.merchant),direct=link.type==='product';
 const matching=g.interests.filter(c=>state.answers.interests.includes(c));
 const category=interests[matching[0]||g.category]||'Gift idea';
 const cta=link.merchant==='lovebook'&&g.personalized?'Customize at LoveBook':direct?`View at ${store}`:'Browse options at Amazon';
 return `<article class="gift-card" data-gift-id="${g.id}" data-merchant="${link.merchant}"><div class="gift-card-top"><span class="card-category"><span class="gift-card-number" aria-hidden="true">${String(index+1).padStart(2,'0')}</span><span class="category-label">${escape(category)}</span></span><button class="dismiss-gift" data-dismiss="${g.id}" aria-label="Skip ${escape(g.listingName||g.name)}">Skip</button></div><div class="gift-meta"><span>${escape(store)}</span><span>${budgets[g.budget]}</span></div><h3><a href="${escape(link.url)}" data-shop-link data-link-type="${link.type}" target="_blank" rel="noopener noreferrer${link.affiliate?' sponsored':''}">${escape(g.listingName||g.name)}</a></h3><p>${escape(g.description)}</p>${g.note||g.personalized?`<div class="product-note">${escape(g.note||(g.personalized?'Personalized to order':''))}</div>`:''}<details><summary>Before you order</summary><p>${escape(g.check)}</p></details><div class="gift-shop"><a class="shop-link${link.merchant==='amazon'&&direct?' amazon-product-link':''}" href="${escape(link.url)}" data-shop-link data-link-type="${link.type}" target="_blank" rel="noopener noreferrer${link.affiliate?' sponsored':''}">${link.merchant==='amazon'&&direct?'<img src="assets/available-at-amazon.png" alt="Available at Amazon" width="170"><span class="sr-only">'+cta+'</span>':cta}<span class="sr-only"> (opens in a new tab)</span></a><span class="link-label">${link.affiliate?'Affiliate link':direct?'Retailer link':'Amazon search'}</span></div></article>`;
}
function results(){
 const matches=shortlist(state.answers,{excluded:state.excluded});
 const shown=state.expanded?matches.slice(0,9):matches.slice(0,3),a=state.answers;
 return `<div class="results-heading"><h2 tabindex="-1">Gift suggestions</h2><div class="answer-summary"><button data-edit="budget">${budgets[a.budget]}</button><button data-edit="interests">${a.interests.includes('unsure')?'A mix of interests':a.interests.map(id=>interests[id]).join(' + ')}</button></div></div>${shown.length?`<div class="gift-grid">${shown.map(giftCard).join('')}</div><p class="results-note">Check the store for today’s price, delivery, and returns. Budget ranges are a guide.</p>`:`<div class="empty-results"><h3>Let’s try a different direction.</h3><p>Change an interest, allow personalization, or raise the budget to see more options.</p><button class="secondary" data-edit="interests">Change interests</button>${state.excluded.length?'<button class="text-button" data-undo>Bring back skipped gifts</button>':''}</div>`}${matches.length>3?`<button class="secondary more" data-more>${state.expanded?'Show the first three':'Show more ideas'}</button>`:''}<div class="result-actions"><button class="text-button" data-back>Change answers</button>${state.excluded.length?'<button class="text-button" data-undo>Undo skipped gifts</button>':''}<button class="text-button" data-restart>Start over</button></div>`;
}
function render(focus=true){
 const steps=stages(),done=state.ready&&state.step===steps.length;
 document.body.classList.toggle('showing-results',done);
 document.querySelector('#step-label').textContent=!state.ready?'GIFT QUIZ':done?'YOUR RESULTS':names[steps[state.step]];
 document.querySelector('#step-count').textContent=!state.ready?'':done?'':`${state.step+1} / ${steps.length}`;
 document.querySelector('#progress-fill').style.width=!state.ready?'0%':done?'100%':`${(state.step+1)/steps.length*100}%`;
 document.querySelector('#back').hidden=!state.ready||state.step===0;
 root.innerHTML=!state.ready?`<div class="quiz-start"><h2 tabindex="-1">What would they love?</h2><ol class="start-steps"><li>Set your budget.</li><li>Pick up to two things they enjoy.</li><li>Get a short list with what to check before you buy.</li></ol><button class="primary" data-start>Start quiz</button></div>`:done?results():question();
 document.querySelector('.quiz-panel').classList.toggle('start-panel',!state.ready);
 document.querySelector('.quiz-panel').classList.toggle('results-panel',done);
 if(focus){root.querySelector('h2')?.focus({preventScroll:true});document.querySelector('.quiz-panel').scrollIntoView({behavior:'instant',block:'start'});root.classList.remove('quiz-enter');void root.offsetWidth;root.classList.add('quiz-enter');}
}
root.addEventListener('change',event=>{if(event.target.id==='recipient')state.answers.recipient=event.target.value;});
root.addEventListener('click',event=>{
 const el=event.target.closest('[data-start],[data-answer],[data-next],[data-custom],[data-finish],[data-restart],[data-back],[data-more],[data-edit],[data-dismiss],[data-undo]');if(!el)return;
 if(el.hasAttribute('data-start'))start();
 else if(el.hasAttribute('data-answer')){const value=el.dataset.answer;answer(value);if(stages()[state.step]==='interests')root.querySelector(`[data-answer="${value}"]`)?.focus({preventScroll:true});}
 else if(el.hasAttribute('data-next'))next();
 else if(el.hasAttribute('data-custom')){state.answers.recipient=document.querySelector('#recipient').value;state.answers.customization=el.dataset.custom;render(false);root.querySelector(`[data-custom="${el.dataset.custom}"]`)?.focus({preventScroll:true});}
 else if(el.hasAttribute('data-finish'))complete();
 else if(el.hasAttribute('data-restart'))restart();
 else if(el.hasAttribute('data-back'))back();
 else if(el.hasAttribute('data-more')){state.expanded=!state.expanded;render();}
 else if(el.hasAttribute('data-edit')){state.step=stages().indexOf(el.dataset.edit);state.expanded=false;render();}
 else if(el.hasAttribute('data-dismiss')){state.excluded.push(el.dataset.dismiss);render();}
 else{state.excluded=[];render();}
});
document.querySelector('#back').addEventListener('click',back);
document.querySelector('#home').addEventListener('click',event=>{event.preventDefault();restart();});render(false);
if(document.modelContext?.registerTool){try{Promise.resolve(document.modelContext.registerTool({name:'answer_gift_quiz',description:'After Start quiz, choose a visible data-answer value. Interests allow two selections; Continue advances. Use the final details form to show gifts.',inputSchema:{type:'object',properties:{answer:{type:'string'}},required:['answer'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute:input=>{answer(input.answer);return {step:stages()[state.step]||'results'};}})).catch(()=>{});}catch{}}
