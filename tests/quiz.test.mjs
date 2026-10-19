import test from 'node:test';
import assert from 'node:assert/strict';
import {gifts,retailerLinks} from '../dist/catalog.js?v=21';
import {shortlist,purchase,interests,platforms} from '../dist/quiz-engine.js';
const answers={budget:'2',interests:['books'],style:'any',customization:'either',recipient:'any',platform:'unknown'};
test('all budget and interest routes return eligible gifts',()=>{
 for(const budget of ['1','2','3','4'])for(const interest of [...Object.keys(interests),'unsure'])for(const customization of ['ready','custom','either']){
 const a={...answers,budget,interests:[interest],customization};const result=shortlist(a);
 assert.ok(result.length,JSON.stringify(a));assert.ok(result.every(g=>g.budget<=Number(budget)));
 if(customization==='ready')assert.ok(result.every(g=>!g.personalized));
 }
});
test('recipient restrictions and unknown hardware are respected',()=>{
 for(const recipient of ['any','friend','family','teen'])assert.ok(shortlist({...answers,budget:'4',interests:['cozy'],recipient}).every(g=>!g.audiences?.includes('partner')));
 for(const platform of Object.keys(platforms)){
 const result=shortlist({...answers,budget:'4',interests:['games'],platform});assert.ok(result.every(g=>!g.platforms||g.platforms.includes(platform)));
 }
 assert.ok(!shortlist({...answers,budget:'4',interests:['games']}).some(g=>['games-4','games-5','games-6'].includes(g.id)));
});
test('top three represent both interests and vary product types',()=>{
 for(const pair of [['books','games'],['music','cooking'],['tabletop','art']]){
 const result=shortlist({...answers,interests:pair}).slice(0,3);
 for(const interest of pair)assert.ok(result.some(g=>g.interests.includes(interest)),pair.join(','));
 assert.ok(new Set(result.map(g=>g.kind)).size>=2);
 }
});
test('ranking does not reward spending more or affiliate commission',()=>{
 const base=gifts.find(g=>g.id==='books-3');const cheap={...base,id:'cheap',budget:1};const dear={...base,id:'dear',budget:4};
 assert.equal(shortlist({...answers,budget:'4'},{catalog:[cheap,dear]})[0].id,'cheap');
 assert.equal(shortlist({...answers,budget:'4'},{catalog:[dear,cheap]})[0].id,'dear');
});
test('retailer links are valid and Amazon tag stays on Amazon',()=>{
 assert.equal(new Set(gifts.map(g=>g.id)).size,gifts.length);
 for(const gift of gifts){const link=purchase(gift),url=new URL(link.url);assert.equal(url.protocol,'https:');
 if(gift.merchant==='amazon')assert.equal(url.searchParams.get('tag'),'bestguess0f-20');else{assert.equal(link.url,gift.url);assert.equal(link.affiliate,false);assert.equal(url.searchParams.has('tag'),false);}
 }
 const book=gifts.find(g=>g.id==='bookshop-tress');const network='https://example.com/track?x=abc%2F12&destination=book';retailerLinks[book.id]={url:network,merchant:'bookshop',affiliate:true};assert.equal(purchase(book).url,network);delete retailerLinks[book.id];
});
test('skipped gifts stay excluded without changing budget',()=>{
 const first=shortlist(answers)[0];const next=shortlist(answers,{excluded:[first.id]});assert.ok(next.length);assert.ok(!next.some(g=>g.id===first.id));assert.ok(next.every(g=>g.budget<=2));
});
