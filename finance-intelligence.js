/* SATYRN Finance Intelligence — transparent local analytics for preview. */
(()=>{'use strict';
 const $=id=>document.getElementById(id), money=v=>new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(Number(v)||0);
 const read=(k,f)=>{try{return JSON.parse(localStorage.getItem(k)||'null')??f}catch{return f}};
 const dateNow=new Date(), today=new Date(dateNow.getTime()-dateNow.getTimezoneOffset()*60000).toISOString().slice(0,10);
 const monthKey=d=>String(d||'').slice(0,7), entries=()=>read('satyrn-finance-v1',{entries:[]}).entries||[];
 const paid=e=>Math.min(Number(e.amount)||0,Number(e.paidAmount)||0), open=e=>Math.max(0,(Number(e.amount)||0)-paid(e));
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const addMonths=(d,n)=>new Date(d.getFullYear(),d.getMonth()+n,1);
 const monthLabel=d=>d.toLocaleDateString('de-DE',{month:'long',year:'numeric'});
 const monthStart=d=>new Date(d.getFullYear(),d.getMonth(),1);
 const fmtDate=d=>d.toLocaleDateString('de-DE');
 function render(){
  const all=entries(), thisMonth=all.filter(e=>monthKey(e.date)===monthKey(today));
  const monthTotals=[];
  for(let n=5;n>=0;n--){const d=addMonths(dateNow,-n),key=monthKey(d.toISOString().slice(0,10));monthTotals.push({key,label:d.toLocaleDateString('de-DE',{month:'short'}),revenue:all.filter(e=>monthKey(e.date)===key).reduce((s,e)=>s+(Number(e.amount)||0),0),received:all.filter(e=>monthKey(e.date)===key).reduce((s,e)=>s+paid(e),0)})}
  const completed=monthTotals.slice(0,5).filter(x=>x.revenue>0), last3=monthTotals.slice(-3).filter(x=>x.revenue>0);
  const avg=last3.length?last3.reduce((s,x)=>s+x.revenue,0)/last3.length:0;
  const forecast=$('fiForecast'); if(forecast){
   const cautious=avg*.75, realistic=avg, stretch=avg*1.25;
   forecast.innerHTML='<div class="fi-scenarios">'+[['Vorsichtig',cautious],['Realistisch',realistic],['Ambitioniert',stretch]].map(([l,v])=>'<div><small>'+l+'</small><b>'+money(v)+'</b></div>').join('')+'</div><p class="fi-note">Rechenmodell: Durchschnitt der letzten bis zu 3 Monate mit erfassten Umsätzen, multipliziert mit 75 % / 100 % / 125 %. '+(last3.length?last3.length+' Datenmonate verwendet.':'Noch keine Umsatzhistorie – Prognose startet erst nach Einträgen.')+' Keine Garantie; Saisonalität und Kapazität werden nicht automatisch erkannt.</p>';
  }
  const trend=$('fiTrend');if(trend){
   const prior=monthTotals[monthTotals.length-2],current=monthTotals[monthTotals.length-1];
   const delta=prior&&prior.revenue>0?(current.revenue-prior.revenue)/prior.revenue*100:null;
   trend.innerHTML='<div class="fi-trend-line"><span>'+esc(current.label)+' Umsatz</span><b>'+money(current.revenue)+'</b></div><div class="fi-trend-line"><span>Vormonat</span><b>'+money(prior?.revenue||0)+'</b></div><p class="fi-note">'+(delta===null?'Vergleich noch nicht aussagekräftig (Vormonat ohne erfassten Umsatz).':(delta>=0?'+' : '')+delta.toFixed(1).replace('.',',')+' % gegenüber Vormonat. Einmalaufträge und unvollständige Monate können den Vergleich verzerren.')+'</p>';
  }
  const due=$('fiCalendar');if(due){
   const upcoming=all.filter(e=>e.dueDate&&open(e)>0).sort((a,b)=>a.dueDate.localeCompare(b.dueDate));
   due.innerHTML=upcoming.length?upcoming.map(e=>{const late=e.dueDate<today;return '<div class="fi-calendar-row"><div><b>'+esc(e.title)+'</b><small>'+esc(e.customer||'Kein Kunde')+' · fällig '+esc(e.dueDate)+(late?' · ÜBERFÄLLIG':'')+'</small></div><strong>'+money(open(e))+'</strong></div>'}).join(''):'<p class="finance-empty">Keine offenen Forderungen mit Fälligkeitsdatum erfasst.</p>';
  }
  const safety=$('fiSafety');if(safety){
   const liq=read('satyrn-liquidity-v1',{cash:0,costs:0}),cash=Number(liq.cash)||0,cost=Number(liq.costs)||0,runway=cost>0?cash/cost:null;
   const overdue=all.filter(e=>e.dueDate&&e.dueDate<today&&open(e)>0).reduce((s,e)=>s+open(e),0);
   const status=runway===null?'DATEN FEHLEN':runway<1?'KRITISCH':runway<3?'ACHTUNG':'STABIL';
   safety.innerHTML='<div class="fi-safety-status">'+status+'</div><div class="fi-trend-line"><span>Manuelle Kostenreichweite</span><b>'+(runway===null?'—':runway.toFixed(1).replace('.',',')+' Monate')+'</b></div><div class="fi-trend-line"><span>Überfällige offene Beträge</span><b>'+money(overdue)+'</b></div><p class="fi-note">Nur manuell eingetragene Betriebsmittel und monatliche Kosten. Keine Kontoprüfung; Steuerrücklagen, private Mittel und unbestätigte Forderungen sind nicht eingerechnet. Status ist ein einfacher Hinweis, keine Finanzberatung.</p>';
  }
  const alerts=$('fiAlerts');if(alerts){
   const overdue=all.filter(e=>e.dueDate&&e.dueDate<today&&open(e)>0);
   alerts.innerHTML=overdue.length?overdue.map(e=>'<div class="fi-calendar-row"><div><b>'+esc(e.customer||'Kunde')+' · '+esc(e.title)+'</b><small>Überfällig seit '+esc(e.dueDate)+' · offen '+money(open(e))+'</small></div><button type="button" data-fi-remind="'+esc(e.id)+'">Erinnerungsentwurf</button></div>').join(''):'<p class="finance-empty">Keine überfälligen Einträge erkannt.</p>';
  }
  const split=$('fiSplit');if(split){
   const groups=new Map();all.forEach(e=>groups.set(e.category||'Nicht zugeordnet',(groups.get(e.category||'Nicht zugeordnet')||0)+(Number(e.amount)||0)));
   const total=[...groups.values()].reduce((s,v)=>s+v,0);
   split.innerHTML=total?[...groups.entries()].sort((a,b)=>b[1]-a[1]).map(([name,val])=>'<div class="fi-trend-line"><span>'+esc(name)+'</span><b>'+money(val)+' · '+(val/total*100).toFixed(1).replace('.',',')+' %</b></div>').join(''):'<p class="finance-empty">Noch keine kategorisierten Einnahmen.</p>';
  }
 }
 document.addEventListener('submit',e=>{if(['financeEntryForm','liquidityForm','expenseForm','taxReserveForm'].includes(e.target.id))setTimeout(render,0)},true);
 document.addEventListener('click',e=>{
  const b=e.target.closest('[data-fi-remind]');if(!b)return;
  const item=entries().find(x=>x.id===b.dataset.fiRemind);if(!item)return;
  const msg='Betreff: Zahlungserinnerung – '+(item.title||'Auftrag')+'\n\nGuten Tag '+(item.customer||'')+',\n\nlaut unseren Unterlagen ist die Rechnung zu „'+item.title+'“ vom '+(item.date||'')+' noch mit '+money(open(item))+' offen. Das angegebene Fälligkeitsdatum war der '+item.dueDate+'. Könnten Sie bitte prüfen, ob die Zahlung bereits veranlasst wurde? Falls sich die Zahlung überschnitten hat, betrachten Sie diese Nachricht bitte als gegenstandslos.\n\nVielen Dank und freundliche Grüße\nSATYRN PRODUCTIONS';
  const win=window.open('','_blank','width=720,height=620');if(!win){alert('Popup blockiert. Bitte Popups erlauben, um den Entwurf anzuzeigen.');return}
  win.document.write('<!doctype html><meta charset="utf-8"><title>Zahlungserinnerung – Entwurf</title><body style="font:14px Arial;white-space:pre-wrap;padding:32px;color:#222"><h2>Nur Entwurf – wird nicht versendet</h2>'+esc(msg)+'</body>');
 });
 render();
})();
