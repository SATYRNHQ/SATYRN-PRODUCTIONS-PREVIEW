/* SATYRN HQ — discreet global focus reminders.
   5 / 15 / 30 minutes of inactivity, then hourly. Dismissal advances to the
   next scheduled checkpoint; no unconfirmed custom snooze interval is assumed. */
(()=>{'use strict';
const KEY='satyrn-focus-reminders-v1',ENABLED='satyrn-focus-reminders-enabled';
const $=id=>document.getElementById(id),now=()=>Date.now();
const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch{return null}};
const enabled=()=>{try{return localStorage.getItem(ENABLED)!=='off'}catch{return true}};
let state=read()||{idleSince:now(),lastShownStage:-1},lastLocalActivity=0;
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(state))}catch{}};
const idleStage=ms=>{if(ms<5*60000)return -1;if(ms<15*60000)return 0;if(ms<30*60000)return 1;if(ms<90*60000)return 2;return 3+Math.floor((ms-90*60000)/(60*60000))};
const runningFocus=()=>{try{const s=JSON.parse(localStorage.getItem('satyrn-focus-v1')||'{}');return (s.sessions||[]).some(x=>x.status==='RUNNING')}catch{return false}};
const ensureBanner=()=>{let el=$('satyrnFocusReminder');if(el)return el;el=document.createElement('aside');el.id='satyrnFocusReminder';el.className='satyrn-focus-reminder';el.setAttribute('role','status');el.setAttribute('aria-live','polite');el.innerHTML='<div class="sfr-copy"><span class="sfr-kicker">SATYRN HQ · FOCUS REMINDER</span><strong> Zeit für einen klaren nächsten Schritt.</strong><p>Du bist schon eine Weile inaktiv. Möchtest du eine fokussierte Session starten?</p></div><div class="sfr-actions"><button type="button" id="sfrNow">Jetzt fokussieren</button><button type="button" id="sfrLater">Später erinnern</button></div>';document.body.appendChild(el);
$('sfrNow').addEventListener('click',()=>{state={idleSince:now(),lastShownStage:-1,visible:false};save();hide();const nav=document.querySelector('.hq-time-nav [data-page="focus"]');if(nav)nav.click();else if(typeof window.showPage==='function')window.showPage('focus');});
$('sfrLater').addEventListener('click',()=>{state.visible=false;save();hide();});
return el};
const hide=()=>{const el=$('satyrnFocusReminder');if(el)el.classList.remove('is-visible')};
const render=()=>{const el=ensureBanner();if(!enabled()||document.hidden||runningFocus()){hide();return}const stage=idleStage(now()-(Number(state.idleSince)||now()));if(stage<0){hide();return}if(stage>Number(state.lastShownStage??-1)){state.lastShownStage=stage;state.visible=true;save()}if(state.visible&&stage===Number(state.lastShownStage)){el.classList.add('is-visible')}else hide()};
const activity=e=>{if(e?.target?.closest?.('#satyrnFocusReminder'))return;const t=now();if(t-lastLocalActivity<10000)return;lastLocalActivity=t;state={idleSince:t,lastShownStage:-1,visible:false};save();hide()};
['pointerdown','keydown','touchstart','scroll','input'].forEach(type=>document.addEventListener(type,activity,{passive:true}));
window.addEventListener('storage',e=>{if(e.key===KEY){state=read()||state;render()}if(e.key===ENABLED||e.key==='satyrn-focus-v1')render()});
document.addEventListener('visibilitychange',render);
const toggle=$('focusReminderToggle');if(toggle){toggle.checked=enabled();toggle.addEventListener('change',()=>{try{localStorage.setItem(ENABLED,toggle.checked?'on':'off')}catch{}if(!toggle.checked)hide();else render()})}
if(!state.idleSince){state.idleSince=now();state.lastShownStage=-1;save()}
render();window.setInterval(render,5000);
})();