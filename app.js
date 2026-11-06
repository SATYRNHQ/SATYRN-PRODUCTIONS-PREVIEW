// SATYRN background rotation: change images only on the 20-second interval.
const backgroundFiles = [
  'Luxuriöses Musikstudio im Sonnenuntergang.webp',
  'Luxuriöses SATYRN Musikstudio bei Nacht(1).webp',
  'Luxuriöses SATYRN Musikstudio bei Nacht.webp',
  'Luxuriöses SATYRN-Anwesen bei Nacht_2.webp',
  'Luxusvilla mit SATYRN Studio.webp',
  'Nächtliche Luxus-Session im Musikstudio.webp'
];
const backgroundSlides = [...document.querySelectorAll('.background-slide')];
let activeBackground = 0;
let backgroundTimer;
let lastBackground = -1;
let backgroundChangeToken=0;
function changeBackground(){
  if(!backgroundSlides.length || !backgroundFiles.length)return;
  let next = Math.floor(Math.random()*backgroundFiles.length);
  if(backgroundFiles.length>1 && next===lastBackground) next=(next+1+Math.floor(Math.random()*(backgroundFiles.length-1)))%backgroundFiles.length;
  lastBackground=next;
  const target=1-activeBackground;
  const file=backgroundFiles[next].split('/').map(encodeURIComponent).join('/');
  const imageUrl='./assets/backgrounds/'+file;
  const token=++backgroundChangeToken;
  // Load the next photograph completely before fading it in. This prevents
  // the browser from revealing a blank/newly-loading layer mid-transition.
  const preload=new Image();
  const reveal=()=>{
    if(token!==backgroundChangeToken)return;
    backgroundSlides[target].style.backgroundImage='url("'+imageUrl+'")';
    requestAnimationFrame(()=>{
      if(token!==backgroundChangeToken)return;
      backgroundSlides[target].classList.add('active');
      backgroundSlides[activeBackground].classList.remove('active');
      activeBackground=target;
    });
  };
  preload.onload=reveal;
  preload.onerror=reveal;
  preload.src=imageUrl;
}
changeBackground();
backgroundTimer=window.setInterval(changeBackground,20000);

const pages = [...document.querySelectorAll('.page')];
const navItems = [...document.querySelectorAll('[data-page]')];
const crumb = document.getElementById('crumb');
const sidebars = [...document.querySelectorAll('.hq-side-nav')];
const headbar = document.querySelector('.hq-top-nav');
function showPage(name){
  changeBackground();
  pages.forEach(p=>p.classList.toggle('active-page',p.id===`page-${name}`));
  document.querySelectorAll('.nav-item[data-page]').forEach(n=>n.classList.toggle('active',n.dataset.page===name));
  const active=document.querySelector(`.nav-item[data-page="${name}"]`);
  const label=active?.querySelector('.nav-label')?.textContent || active?.textContent.trim();
  crumb.textContent=label||({home:'Home',settings:'Settings'}[name]||name.replaceAll('-',' '));
  sidebars.forEach(nav=>{
    nav.classList.remove('open','expanded');
    nav.classList.add('nav-dismissed');
  });
  headbar?.classList.add('nav-dismissed');
  if(document.activeElement?.closest('.hq-side-nav'))document.activeElement.blur();
  window.scrollTo({top:0,behavior:'smooth'});
}
navItems.forEach(item=>item.addEventListener('click',()=>showPage(item.dataset.page)));
headbar?.addEventListener('pointerenter',()=>headbar.classList.remove('nav-dismissed'));
headbar?.addEventListener('pointerleave',()=>headbar.classList.add('nav-dismissed'));
headbar?.addEventListener('focusin',()=>headbar.classList.remove('nav-dismissed'));
headbar?.addEventListener('focusout',event=>{if(!headbar.contains(event.relatedTarget))headbar.classList.add('nav-dismissed')});

// Mirrored sidebar expansion with one shared grace period.
let sidebarCollapseTimer;
sidebars.forEach(nav=>{
  nav.addEventListener('pointerenter',()=>{
    clearTimeout(sidebarCollapseTimer);
    if(!nav.classList.contains('nav-dismissed'))nav.classList.add('expanded');
  });
  nav.addEventListener('pointerleave',()=>{
    nav.classList.remove('nav-dismissed');
    clearTimeout(sidebarCollapseTimer);
    sidebarCollapseTimer=window.setTimeout(()=>nav.classList.remove('expanded'),600);
  });
  nav.addEventListener('focusin',()=>{clearTimeout(sidebarCollapseTimer);if(!nav.classList.contains('nav-dismissed'))nav.classList.add('expanded')});
  nav.addEventListener('focusout',event=>{
    if(!nav.contains(event.relatedTarget)){
      clearTimeout(sidebarCollapseTimer);
      sidebarCollapseTimer=window.setTimeout(()=>nav.classList.remove('expanded'),600);
    }
  });
});

const mobileMenu=document.getElementById('mobileMenu');
if(mobileMenu)mobileMenu.addEventListener('click',()=>{
  sidebars.forEach(nav=>nav.classList.toggle('open'));
});

const panel=document.getElementById('aresPanel');
function openAres(){panel.classList.add('open');panel.setAttribute('aria-hidden','false');setTimeout(()=>document.getElementById('aresInput').focus(),180)}
function closeAres(){panel.classList.remove('open');panel.setAttribute('aria-hidden','true')}
['openAres','heroAres','aresCardButton'].forEach(id=>{const element=document.getElementById(id);if(element)element.addEventListener('click',openAres)});

document.getElementById('closeAres').addEventListener('click',closeAres);

// The entire compact dock opens ARES; the inline message field opens the
// full conversation and forwards the typed message.
const aresDock=document.getElementById('aresDock');
aresDock.addEventListener('click',event=>{
  if(event.target.closest('form,button'))return;
  openAres();
});
aresDock.addEventListener('keydown',event=>{
  if((event.key==='Enter'||event.key===' ') && event.target===aresDock){
    event.preventDefault();openAres();
  }
});
document.getElementById('aresDockForm').addEventListener('click',event=>{event.stopPropagation();openAres()});
document.getElementById('aresDockForm').addEventListener('submit',event=>{
  event.preventDefault();event.stopPropagation();
  const input=document.getElementById('aresDockInput');
  const message=input.value.trim();if(!message){openAres();return}
  openAres();sendMessage(message);input.value='';
});

// Future monitoring/assistant events can call notifyAres(message). The
// compact alert is clickable and opens the conversation with that message.
const aresNotice=document.getElementById('aresNotice');
let aresNoticeTimer;
function notifyAres(message){
  if(!message)return;
  aresNotice.textContent='ARES  ·  '+message;
  aresNotice.classList.add('show');
  clearTimeout(aresNoticeTimer);
  aresNoticeTimer=setTimeout(()=>aresNotice.classList.remove('show'),12000);
}
aresNotice.addEventListener('click',()=>{
  const message=aresNotice.textContent.replace(/^ARES\\s*·\\s*/,'');
  openAres();
  const reply=document.createElement('div');reply.className='chat-bubble ares';reply.textContent=message;
  chatLog.appendChild(reply);chatLog.scrollTop=chatLog.scrollHeight;
  aresNotice.classList.remove('show');
});

document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openAres()}if(e.key==='Escape')closeAres()});

const toast=document.getElementById('toast');let toastTimer;
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2600)}
document.querySelectorAll('[data-toast]').forEach(button=>button.addEventListener('click',()=>showToast(button.dataset.toast)));
document.getElementById('notifyButton').addEventListener('click',()=>{showPage('settings');showToast('Benachrichtigungen kannst du hier steuern.')});

const notifyToggle=document.getElementById('notifyToggle');
notifyToggle.addEventListener('change',async()=>{
  if(!notifyToggle.checked){localStorage.setItem('satyrn-notifications','off');showToast('ARES-Benachrichtigungen pausiert.');return}
  if(!('Notification' in window)){notifyToggle.checked=false;showToast('Dieser Browser unterstützt keine Web-Benachrichtigungen.');return}
  const permission=Notification.permission==='granted'?'granted':await Notification.requestPermission();
  if(permission==='granted'){localStorage.setItem('satyrn-notifications','on');showToast('Benachrichtigungen sind freigegeben. ARES kann sie später nutzen.')}
  else{notifyToggle.checked=false;localStorage.setItem('satyrn-notifications','off');showToast('Keine Berechtigung erteilt. Du kannst es später erneut versuchen.')}
});
notifyToggle.checked=localStorage.getItem('satyrn-notifications')==='on';
const motionToggle=document.getElementById('motionToggle');
motionToggle.addEventListener('change',()=>{document.body.classList.toggle('reduced-motion',motionToggle.checked);localStorage.setItem('satyrn-reduced-motion',motionToggle.checked?'on':'off')});
motionToggle.checked=localStorage.getItem('satyrn-reduced-motion')==='on';
document.body.classList.toggle('reduced-motion',motionToggle.checked);

const chatLog=document.getElementById('chatLog');
function sendMessage(message){
  const clean=message.trim();if(!clean)return;
  const user=document.createElement('div');user.className='chat-bubble user';user.textContent=clean;chatLog.appendChild(user);
  const reply=document.createElement('div');reply.className='chat-bubble ares';reply.textContent=typeof window.satyrnAresReply==='function'?window.satyrnAresReply(clean):'Ich bin die lokale ARES-Vorschau. Die echte KI-Anbindung folgt später.';chatLog.appendChild(reply);
  chatLog.scrollIntoView({behavior:'smooth',block:'nearest'});
}
document.getElementById('aresForm').addEventListener('submit',e=>{e.preventDefault();const input=document.getElementById('aresInput');sendMessage(input.value);input.value=''});
document.querySelectorAll('[data-prompt]').forEach(button=>button.addEventListener('click',()=>sendMessage(button.dataset.prompt)));

// Drag the ARES window by its header; keep it within the viewport.
const dragHandle=document.getElementById('aresDrag');
let drag=null;
dragHandle.addEventListener('pointerdown',e=>{if(e.target.closest('button'))return;const r=panel.getBoundingClientRect();drag={x:e.clientX-r.left,y:e.clientY-r.top};dragHandle.setPointerCapture(e.pointerId)});
dragHandle.addEventListener('pointermove',e=>{if(!drag)return;panel.style.right='auto';panel.style.bottom='auto';panel.style.left=Math.max(8,Math.min(innerWidth-panel.offsetWidth-8,e.clientX-drag.x))+'px';panel.style.top=Math.max(8,Math.min(innerHeight-panel.offsetHeight-8,e.clientY-drag.y))+'px'});
dragHandle.addEventListener('pointerup',()=>drag=null);
dragHandle.addEventListener('pointercancel',()=>drag=null);


// Local-first priority board
const taskForm=document.getElementById('taskForm');
const taskList=document.getElementById('taskList');
const taskInput=document.getElementById('taskInput');
const taskPriority=document.getElementById('taskPriority');
let tasks=[];
try{tasks=JSON.parse(localStorage.getItem('satyrn-tasks')||'[]')}catch{tasks=[]}
function saveTasks(){localStorage.setItem('satyrn-tasks',JSON.stringify(tasks))}
function renderTasks(){
  if(!taskList)return;
  taskList.replaceChildren();
  if(!tasks.length){const empty=document.createElement('div');empty.className='task-empty';empty.textContent='Noch keine Aufgaben. Lege deinen ersten Schritt fest.';taskList.appendChild(empty);return}
  tasks.forEach(task=>{
    const row=document.createElement('div');row.className='task-item'+(task.done?' done':'');
    const check=document.createElement('input');check.type='checkbox';check.checked=task.done;check.setAttribute('aria-label','Aufgabe erledigt');check.addEventListener('change',()=>{task.done=check.checked;saveTasks();renderTasks()});
    const label=document.createElement('span');label.className='task-item-text';label.textContent=task.title;
    const priority=document.createElement('span');priority.className='task-priority '+task.priority;priority.textContent=task.priority==='urgent'?'Critical':task.priority==='high'?'High':'Normal';
    const remove=document.createElement('button');remove.className='task-delete';remove.type='button';remove.textContent='×';remove.setAttribute('aria-label','Aufgabe löschen');remove.addEventListener('click',()=>{tasks=tasks.filter(item=>item.id!==task.id);saveTasks();renderTasks()});
    row.append(check,label,priority,remove);taskList.appendChild(row);
  });
}
if(taskForm){taskForm.addEventListener('submit',event=>{event.preventDefault();const title=taskInput.value.trim();if(!title)return;tasks.unshift({id:Date.now(),title,priority:taskPriority.value,done:false});saveTasks();renderTasks();taskInput.value='';taskInput.focus()});renderTasks()}


// SATYRN Finance Center — local-first intermediate implementation.
(()=>{
  const STORE='satyrn-finance-v1';
  const $=id=>document.getElementById(id);
  const form=$('financeEntryForm');
  if(!form)return;
  const today=new Date();
  const isoDate=d=>{const x=new Date(d.getTime()-d.getTimezoneOffset()*60000);return x.toISOString().slice(0,10)};
  const money=value=>new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(Number(value)||0);
  const monthKey=date=>String(date||'').slice(0,7);
  const safeNumber=value=>Number.isFinite(Number(value))?Math.max(0,Number(value)):0;
  const defaults={goals:{minimum:0,solid:0,dream:0},entries:[]};
  let data;
  try{data=JSON.parse(localStorage.getItem(STORE)||'null')}catch{data=null}
  if(!data||typeof data!=='object')data={goals:{...defaults.goals},entries:[]};
  if(!Array.isArray(data.entries))data.entries=[];
  if(!data.goals||typeof data.goals!=='object')data.goals={...defaults.goals};
  data.goals={minimum:safeNumber(data.goals.minimum),solid:safeNumber(data.goals.solid),dream:safeNumber(data.goals.dream)};
  const persist=()=>{try{localStorage.setItem(STORE,JSON.stringify(data));return true}catch{showToast('Speicher voll oder nicht verfügbar. Bitte CSV exportieren.');return false}};
  const period=$('financePeriod');
  const currentMonth=monthKey(isoDate(today));
  $('financeDate').value=isoDate(today);
  $('financePaidAmount').disabled=true;
  $('financeStatus').addEventListener('change',()=>{
    const partial=$('financeStatus').value==='partial';
    $('financePaidAmount').disabled=!partial;
    if(!partial)$('financePaidAmount').value='';
  });
  const entriesForPeriod=()=>{
    const mode=period.value;
    return data.entries.filter(entry=>{
      const date=new Date((entry.date||isoDate(today))+'T12:00:00');
      if(mode==='all')return true;
      if(mode==='month')return monthKey(entry.date)===currentMonth;
      if(mode==='quarter')return date.getFullYear()===today.getFullYear()&&Math.floor(date.getMonth()/3)===Math.floor(today.getMonth()/3);
      return date.getFullYear()===today.getFullYear();
    });
  };
  const sum=(list,fn)=>list.reduce((total,item)=>total+fn(item),0);
  const received=entry=>Math.min(entry.amount,safeNumber(entry.paidAmount));
  const open=entry=>Math.max(0,entry.amount-received(entry));
  const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  function render(){
    const list=entriesForPeriod();
    const revenue=sum(list,e=>e.amount);
    const paid=sum(list,received);
    const outstanding=sum(list,open);
    const customers=new Set(list.map(e=>e.customer.trim()).filter(Boolean));
    $('financeRevenue').textContent=money(revenue);
    $('financeReceived').textContent=money(paid);
    $('financeOpen').textContent=money(outstanding);
    $('financeOrders').textContent=String(list.length);
    $('financeCustomers').textContent=customers.size+' Kunden erfasst';
    $('financeAverageOrder').textContent=list.length?money(revenue/list.length):'—';
    $('financeAverageCustomer').textContent=customers.size?money(revenue/customers.size):'—';
    const timed=list.filter(e=>safeNumber(e.hours)>0);
    const timedHours=sum(timed,e=>safeNumber(e.hours));
    $('financePerHour').textContent=timedHours?money(sum(timed,e=>e.amount)/timedHours):'—';
    const marginEntries=timed.filter(e=>e.cost!==null&&e.cost!==undefined);
    const marginHours=sum(marginEntries,e=>safeNumber(e.hours));
    $('financeMarginPerHour').textContent=marginHours?money(sum(marginEntries,e=>e.amount-safeNumber(e.cost))/marginHours):'—';
    $('financePerHourHint').textContent=timed.length+' Aufträge mit erfasster Arbeitszeit';
    $('financeOpenHint').textContent=list.filter(e=>open(e)>0).length+' offene oder teilbezahlte Aufträge';
    $('financeRevenueHint').textContent=period.options[period.selectedIndex].text+' · Umsatz unabhängig vom Zahlungseingang';
    renderGoals();
    renderChart();
    renderCategories(list);
    renderCustomers(list);
    renderEntries(list);
  }
  function renderGoals(){
    const monthly=data.entries.filter(e=>monthKey(e.date)===currentMonth);
    const total=sum(monthly,e=>e.amount);
    const goals=data.goals;
    const pct=value=>goals[value]>0?Math.min(100,total/goals[value]*100):0;
    for(const [key,label,bar] of [['minimum','goalMinimumLabel','goalMinimumBar'],['solid','goalSolidLabel','goalSolidBar'],['dream','goalDreamLabel','goalDreamBar']]){
      $(label).textContent=money(goals[key]);
      $(bar).style.width=pct(key)+'%';
    }
    if(!goals.minimum)$('goalGap').textContent='Lege zuerst deine drei Monatsziele fest';
    else if(total>=goals.minimum)$('goalGap').textContent='Mindestziel erreicht · '+money(total-goals.minimum)+' darüber';
    else $('goalGap').textContent='Noch '+money(Math.max(0,goals.minimum-total))+' bis zum Mindestziel';
    $('goalPercent').textContent=goals.minimum?(Math.round(total/goals.minimum*100)+' % vom Mindestziel'):'Noch keine Zielwerte';
  }
  function renderChart(){
    const months=[];
    for(let i=5;i>=0;i--){const d=new Date(today.getFullYear(),today.getMonth()-i,1);months.push({key:monthKey(isoDate(d)),label:d.toLocaleDateString('de-DE',{month:'short'}),value:0})}
    data.entries.forEach(e=>{const m=months.find(item=>item.key===monthKey(e.date));if(m)m.value+=e.amount});
    const max=Math.max(1,...months.map(m=>m.value));
    $('financeChart').innerHTML=months.map(m=>'<div class="finance-chart-column"><div class="finance-chart-value">'+(m.value?esc(money(m.value)):'')+'</div><div class="finance-chart-track"><i style="height:'+Math.max(m.value?5:0,m.value/max*100)+'%"></i></div><span>'+esc(m.label)+'</span></div>').join('');
    $('financeChartTotal').textContent=money(sum(months,m=>m.value));
  }
  function renderCategories(list){
    const names=['Beats','Custom Beats','Mixing & Mastering','Artist Production','Content','Other'];
    const total=sum(list,e=>e.amount);
    const groups=names.map(name=>({name,value:sum(list.filter(e=>e.category===name),e=>e.amount)})).filter(g=>g.value>0).sort((a,b)=>b.value-a.value);
    $('financeCategories').innerHTML=groups.length?groups.map(g=>'<div class="finance-category-row"><div><span>'+esc(g.name)+'</span><b>'+esc(money(g.value))+'</b></div><div class="finance-category-track"><i style="width:'+(total?g.value/total*100:0)+'%"></i></div><small>'+(total?Math.round(g.value/total*100):0)+' % vom Umsatz</small></div>').join(''):'<p class="finance-empty">Noch keine Einnahmen erfasst.</p>';
  }
  function renderCustomers(list){
    const map=new Map();
    list.forEach(e=>{const name=e.customer.trim();if(!name)return;const item=map.get(name)||{name,orders:0,revenue:0,received:0,open:0};item.orders++;item.revenue+=e.amount;item.received+=received(e);item.open+=open(e);map.set(name,item)});
    const customers=[...map.values()].sort((a,b)=>b.revenue-a.revenue);
    $('financeCustomerCount').textContent=customers.length+' KUNDEN';
    $('financeCustomerList').innerHTML=customers.length?customers.slice(0,6).map(c=>'<div class="finance-customer-row"><div><b>'+esc(c.name)+'</b><small>'+c.orders+' Auftrag/Aufträge · bezahlt '+esc(money(c.received))+'</small></div><strong>'+esc(money(c.revenue))+'</strong></div>').join(''):'<p class="finance-empty">Kunden erscheinen hier nach der ersten Einnahmeerfassung.</p>';
  }
  function renderEntries(list){
    const sorted=[...list].sort((a,b)=>(b.date||'').localeCompare(a.date||''));
    $('financeEntries').innerHTML=sorted.length?sorted.map(e=>{
      const status=open(e)<=0?'Bezahlt':received(e)>0?'Teilbezahlt':'Offen';
      const statusClass=open(e)<=0?'paid':received(e)>0?'partial':'open';
      return '<tr><td><b>'+esc(e.title)+'</b>'+(e.dueDate?'<small>Fällig: '+esc(e.dueDate)+'</small>':'')+'</td><td>'+esc(e.customer||'—')+'</td><td>'+esc(e.category)+'</td><td>'+esc(e.date)+'</td><td>'+esc(money(e.amount))+'</td><td><span class="finance-status '+statusClass+'">'+status+'</span></td><td><button type="button" class="finance-delete" data-delete="'+esc(e.id)+'" aria-label="Eintrag löschen">×</button></td></tr>';
    }).join(''):'<tr><td colspan="7" class="finance-empty">Noch keine Einnahmen erfasst.</td></tr>';
    $('financeEntries').querySelectorAll('[data-delete]').forEach(button=>button.addEventListener('click',()=>{
      if(!confirm('Diesen Einnahmeeintrag wirklich löschen?'))return;
      data.entries=data.entries.filter(e=>e.id!==button.dataset.delete);persist();render();
    }));
  }
  form.addEventListener('submit',event=>{
    event.preventDefault();
    const amount=safeNumber($('financeAmount').value);
    const status=$('financeStatus').value;
    const paidAmount=status==='paid'?amount:status==='partial'?Math.min(amount,safeNumber($('financePaidAmount').value)):0;
    if(!amount||!$('financeTitle').value.trim()){showToast('Bitte Bezeichnung und gültigen Betrag eintragen.');return}
    if(status==='partial'&&paidAmount<=0){showToast('Bitte den bereits bezahlten Betrag eintragen.');return}
    data.entries.unshift({
      id:(crypto.randomUUID?crypto.randomUUID():String(Date.now())+Math.random()),
      title:$('financeTitle').value.trim(),customer:$('financeCustomer').value.trim(),
      category:$('financeCategory').value,amount,paidAmount,
      date:$('financeDate').value||isoDate(today),dueDate:$('financeDueDate').value,
      hours:$('financeHours').value===''?null:safeNumber($('financeHours').value),cost:$('financeCost').value===''?null:safeNumber($('financeCost').value)
    });
    persist();form.reset();$('financeDate').value=isoDate(today);$('financePaidAmount').disabled=true;render();showToast('Einnahme lokal gespeichert.');
  });
  period.addEventListener('change',render);
  $('editFinanceGoals').addEventListener('click',()=>{
    const current=data.goals;
    const minimum=prompt('Monatliches Mindestziel in Euro:',String(current.minimum));if(minimum===null)return;
    const solid=prompt('Monatliches solides Ziel in Euro:',String(current.solid));if(solid===null)return;
    const dream=prompt('Monatliches Traumziel in Euro:',String(current.dream));if(dream===null)return;
    const values=[minimum,solid,dream].map(v=>Number(String(v).replace(',','.')));
    if(values.some(v=>!Number.isFinite(v)||v<0)){showToast('Bitte gültige positive Zielwerte eintragen.');return}
    if(!(values[0]<=values[1]&&values[1]<=values[2])){showToast('Die Reihenfolge muss Mindestziel ≤ solides Ziel ≤ Traumziel sein.');return}
    data.goals={minimum:values[0],solid:values[1],dream:values[2]};persist();render();
  });
  $('exportFinanceCsv').addEventListener('click',()=>{
    const rows=[['Bezeichnung','Kunde','Kategorie','Datum','Betrag EUR','Bezahlt EUR','Offen EUR','Fällig am','Arbeitsstunden','Direkte Kosten EUR']];
    data.entries.forEach(e=>rows.push([e.title,e.customer,e.category,e.date,e.amount,received(e),open(e),e.dueDate,e.hours,e.cost]));
    const csv='\uFEFF'+rows.map(row=>row.map(value=>'"'+String(value??'').replace(/"/g,'""')+'"').join(';')).join('\r\n');
    const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
    const link=document.createElement('a');link.href=url;link.download='satyrn-finance-export.csv';link.click();URL.revokeObjectURL(url);
  });
  render();
})();

// Installable app shell; offline caching is enabled on HTTPS hosting.
if('serviceWorker' in navigator && location.protocol.startsWith('http')){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}))}
