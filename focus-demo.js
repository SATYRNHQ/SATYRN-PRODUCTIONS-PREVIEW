/* Preview-only examples. Activated exclusively with ?demo=1. */
(()=>{if(!new URLSearchParams(location.search).has('demo'))return;
const K='satyrn-focus-v1',T='satyrn-tasks',now=Date.now(),day=86400000,min=60000;
const current=(()=>{try{return JSON.parse(localStorage.getItem(K)||'{}')}catch{return {}}})();
if(!(current.sessions||[]).length){
const zone=Intl.DateTimeFormat().resolvedOptions().timeZone||'local';
const mk=(id,ago,name,goal,category,priority,status,mins,notes,distractions=[])=>{
const start=now-ago*day-90*min,end=start+mins*min,d=new Date(start),date=[d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-'),tm=x=>new Date(x).toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'});
const s={id,createdAt:start-5*min,lastActiveAt:end,updatedAt:end,status,phase:'focus',phaseDurationMs:90*min,originalFocusMs:90*min,breakDurationMs:15*min,remainingMs:status==='PREPARED'?90*min:status==='PAUSED'?38*min:0,deadline:null,phaseStartedAt:null,phaseStartTimezone:zone,phaseStartLocalDate:date,name,goal,category,priority,preset:'deep',linkedTask:null,linkedTaskSnapshot:null,notes,distractions:distractions.map((text,i)=>({id:id+'d'+i,at:start+(i+1)*12*min,localDate:date,localTime:tm(start+(i+1)*12*min),timezone:zone,text})),focusSegments:status==='COMPLETED'?[{id:id+'seg',start,end,durationMs:mins*min,localDate:date,timezone:zone,localStart:tm(start),localEnd:tm(end)}]:[],breakSegments:[],timeline:[],subtasks:[],distractionFree:false};
const ev=(type,label,at)=>s.timeline.push({id:id+type,type,label,at,zone,localDate:date,localTime:tm(at)});
ev('created','Session vorbereitet',start-5*min);if(status!=='PREPARED')ev('focus-start','Fokusphase gestartet',start);
if(status==='COMPLETED'){ev('focus-end','Fokusphase abgeschlossen',end);ev('completed','Session erfolgreich abgeschlossen',end+2*min);s.completedAt=end+2*min;s.completedLocalDate=date}
if(status==='INTERRUPTED'){ev('interrupt','Session unterbrochen',end);s.lastInterruptedAt=end;s.lastActiveLocalDate=date}
if(status==='PAUSED'){ev('pause','Session pausiert',end);s.lastActiveLocalDate=date}
return s};
const sessions=[
mk('demo-prepared',0,'Gunna Type Beat · Melodie & Arrangement','Eine melodische, luftige Hook fertigstellen','music','important','PREPARED',0,'Hook-Motiv steht. Heute Arrangement und Übergänge ausarbeiten.'),
mk('demo-paused',0,'Vocal Mix · SATYRN Demo','Lead-Vocal sauber balancieren und Effekte abstimmen','mixing','urgent','PAUSED',52,'Lead ist grob bearbeitet. Als Nächstes De-Esser feinjustieren und Delay automatisieren.',['Plugin-Auswahl kurz prüfen','Referenztrack vergleichen']),
mk('demo-done-1',1,'Beat Production · Tropical Bounce','Drums, 808 und Melodie finalisieren','music','important','COMPLETED',78,'Bounce und Low-End geprüft.'),
mk('demo-done-2',2,'Content Editing · Shortform','Einen Beatmaking-Clip schneiden und exportieren','content','provisional','COMPLETED',46,'Hook, Untertitel und Sound angepasst.'),
mk('demo-interrupted',3,'Business · Beat Store Setup','Produktseiten und Lizenztexte vorbereiten','business','important','INTERRUPTED',31,'Nach Recherche unterbrochen.'),
mk('demo-done-3',5,'Learning · Mixing Practice','Referenzanalyse und EQ-Übung','learning','indefinite','COMPLETED',64,'Frequenzbereiche verglichen und Mix-Notizen ergänzt.')];
localStorage.setItem(K,JSON.stringify({version:1,sessions,activeId:'demo-prepared',queue:[],queueManual:false}));
}
try{const tasks=JSON.parse(localStorage.getItem(T)||'[]');if(!tasks.length)localStorage.setItem(T,JSON.stringify([
{id:910001,title:'Hook-Melodie für den neuen Beat finalisieren',priority:'urgent',done:false,category:'Music Production',estimatedMinutes:35},
{id:910002,title:'808 und Kick aufeinander abstimmen',priority:'important',done:false,category:'Mixing & Mastering',estimatedMinutes:25},
{id:910003,title:'Beatmaking-Short schneiden',priority:'important',done:false,category:'Content Creation',estimatedMinutes:45},
{id:910004,title:'Beat Store Produktbeschreibung schreiben',priority:'normal',done:false,category:'Business',estimatedMinutes:20},
{id:910005,title:'Referenztrack für den nächsten Mix analysieren',priority:'normal',done:false,category:'Learning',estimatedMinutes:30}]))}catch{}
window.addEventListener('load',()=>{const page=document.getElementById('page-focus');if(!page||page.querySelector('.fm-demo-banner'))return;const b=document.createElement('div');b.className='fm-demo-banner';b.innerHTML='<span>PREVIEW MODE</span><strong>Beispieldaten · nur in dieser Vorschau</strong><small>Die offizielle SATYRN HQ-Version wird ohne diese Demo-Sessions ausgeliefert.</small>';page.insertBefore(b,page.firstChild)});
})();