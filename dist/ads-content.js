// Only complete static buying guides include this module and Google's loader.
// One request per banner, when its content is reached and the document is visible.
const unit=document.querySelector('#bottom-ad ins.adsbygoogle');
let reached=false;
function requestAd(){
  if(!unit||!reached||document.visibilityState!=='visible'||unit.dataset.requested||unit.dataset.adsbygoogleStatus)return;
  unit.dataset.requested='true';
  try{(window.adsbygoogle=window.adsbygoogle||[]).push({});}catch{/* Reading remains available if the ad is blocked. */}
}
if(unit){
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      if(entries.some(entry=>entry.isIntersecting)){reached=true;observer.disconnect();requestAd();}
    },{rootMargin:'150px'});
    observer.observe(unit);
  }else{reached=true;requestAd();}
  document.addEventListener('visibilitychange',requestAd);
}
