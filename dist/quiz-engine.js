import {gifts,merchants,config,retailerLinks} from './catalog.js?v=21';

export const budgets={1:'Up to $25',2:'Up to $50',3:'Up to $100',4:'Up to $200'};
export const interests={games:'Gaming',books:'Books & fantasy',tabletop:'D&D & roleplaying',boardgames:'Board games & puzzles',outdoors:'Hiking & camping',hunting:'Fishing & hunting',art:'Art & crafts',music:'Music',cooking:'Cooking & baking',drinks:'Coffee & tea',fitness:'Fitness',tech:'Useful tech',cozy:'Cozy & personal'};
export const styles={practical:'Something useful',personal:'Something personal',fun:'Something to do',any:'Show me a mix'};
export const platforms={pc:'Windows PC',playstation:'PlayStation',xbox:'Xbox',switch:'Nintendo Switch',mobile:'Android phone / tablet',other:'iPhone / iPad / another system',unknown:'I’m not sure'};

export function purchase(gift){
  const override=retailerLinks[gift.id];
  if(override?.url){
    if(!/^https:\/\//.test(override.url))throw new Error('Retailer links must use HTTPS.');
    return {url:override.url,merchant:override.merchant||gift.merchant,affiliate:override.affiliate===true,type:'product'};
  }
  if(gift.merchant!=='amazon')return {url:gift.url,merchant:gift.merchant,affiliate:false,type:'product'};
  const url=new URL(gift.url||'https://www.amazon.com/s');
  if(!gift.url)url.searchParams.set('k',gift.query);
  url.searchParams.set('tag',config.affiliateTag);
  return {url:url.href,merchant:'amazon',affiliate:true,type:gift.url?'product':'search'};
}

export function shortlist(answers,{catalog=gifts,excluded=[]}={}){
  const selected=answers.interests||[];
  const broad=selected.includes('unsure');
  const age=['partner','friend','family'].includes(answers.recipient)?18:13;
  const candidates=catalog.filter(g=>{
    if(excluded.includes(g.id)||g.budget>Number(answers.budget)||g.minAge>age)return false;
    if(!broad&&!g.interests.some(c=>selected.includes(c)))return false;
    if(g.personalized&&answers.customization==='ready')return false;
    if(g.audiences&&!g.audiences.includes(answers.recipient))return false;
    if(g.platforms&&!g.platforms.includes(answers.platform))return false;
    return true;
  }).map((gift,index)=>({gift,index,score:10+(broad?0:Math.max(0,gift.interests.filter(c=>selected.includes(c)).length-1)*5)+(gift.style===answers.style?5:0)+(gift.url?2:0)+(gift.personalized&&answers.customization==='custom'?3:0)+(gift.audiences?.includes(answers.recipient)?1:0)}));
  const result=[],kinds=new Map(),represented=new Set();
  while(candidates.length){
    const adjusted=item=>item.score-(kinds.get(item.gift.kind)||0)*7+(!broad&&item.gift.interests.some(c=>selected.includes(c)&&!represented.has(c))?5:0);
    candidates.sort((a,b)=>adjusted(b)-adjusted(a)||a.index-b.index);
    const {gift}=candidates.shift();result.push(gift);
    kinds.set(gift.kind,(kinds.get(gift.kind)||0)+1);
    gift.interests.forEach(c=>{if(selected.includes(c))represented.add(c);});
  }
  return result;
}
export function merchantName(id){return merchants[id]?.name||'the store';}
