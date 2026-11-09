/* SATYRN Finance Center — extended local tools. */
(() => {
  'use strict';
  const $=id=>document.getElementById(id);
  const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key)||'null')??fallback}catch{return fallback}};
  const write=(key,value)=>{try{localStorage.setItem(key,JSON.stringify(value));return true}catch{if(window.showToast)showToast('Browser-Speicher nicht verfügbar.');return false}};
  const uid=()=>crypto.randomUUID?crypto.randomUUID():String(Date.now())+Math.random();
  const today=()=>{const d=new Date();return new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,10)};
  const money=v=>new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(Number(v)||0);
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const toast=m=>{if(window.showToast)showToast(m)};
  let invoices=read('satyrn-invoices-v1',[]),expenses=read('satyrn-expenses-v1',[]);
  let tax=read('satyrn-tax-plan-v1',{rate:0,basis:'received'}),liquidity=read('satyrn-liquidity-v1',{cash:0,costs:0});
  const entries=()=>read('satyrn-finance-v1',{entries:[]}).entries||[];
  const received=e=>Math.min(Number(e.amount)||0,Number(e.paidAmount)||0);
  function renderInvoices(){
    const target=$('invoiceList');if(!target)return;
    target.innerHTML=invoices.length?invoices.map(x=>'<div class="finance-tool-row"><div><b>'+esc(x.number)+' · '+esc(x.customer)+'</b><small>'+esc(x.service)+' · '+esc(money(x.amount))+' · fällig '+esc(x.due)+' · '+(x.paid?'Bezahlt':'Entwurf / offen')+'</small></div><div class="finance-tool-actions"><button type="button" data-invoice-print="'+esc(x.id)+'">PDF / Drucken</button>'+(x.paid?'':'<button type="button" data-invoice-paid="'+esc(x.id)+'">Als bezahlt markieren</button>')+'<button type="button" data-invoice-delete="'+esc(x.id)+'">Löschen</button></div></div>').join(''):'<p class="finance-empty">Noch keine Rechnungsentwürfe.</p>';
  }
  function renderExpenses(){
    const target=$('expenseList');if(!target)return;
    const total=expenses.reduce((n,x)=>n+x.amount,0);
    $('expenseTotal').textContent=money(total);
    target.innerHTML=expenses.length?expenses.slice().sort((a,b)=>b.date.localeCompare(a.date)).map(x=>'<div class="finance-tool-row"><div><b>'+esc(x.title)+'</b><small>'+esc(x.category)+' · '+esc(x.date)+' · '+(x.recurring?'monatlich':'einmalig')+'</small></div><div class="finance-tool-actions"><b>'+esc(money(x.amount))+'</b><button type="button" data-expense-delete="'+esc(x.id)+'">Löschen</button></div></div>').join(''):'<p class="finance-empty">Noch keine Ausgaben erfasst.</p>';
  }
  function renderTax(){
    const data=read('satyrn-finance-v1',{entries:[]});
    const month=today().slice(0,7);
    const list=(data.entries||[]).filter(e=>(e.date||'').slice(0,7)===month);
    const basis=tax.basis==='revenue'?list.reduce((n,e)=>n+(Number(e.amount)||0),0):list.reduce((n,e)=>n+received(e),0);
    $('taxReserveEstimate').textContent=tax.rate>0?money(basis*tax.rate/100):'—';
    $('taxReserveRate').value=tax.rate||'';
    $('taxReserveBasis').value=tax.basis||'received';
  }
  function renderLiquidity(){
    $('liquidityCash').value=liquidity.cash||'';
    $('liquidityCosts').value=liquidity.costs||'';
    $('liquidityRunway').textContent=liquidity.costs>0?(liquidity.cash/liquidity.costs).toLocaleString('de-DE',{maximumFractionDigits:1})+' Monate':'—';
  }
  const invoiceForm=$('invoiceForm');
  if(invoiceForm){$('invoiceDate').value=today();invoiceForm.addEventListener('submit',e=>{
    e.preventDefault();invoices.unshift({id:uid(),number:$('invoiceNumber').value.trim(),customer:$('invoiceCustomer').value.trim(),service:$('invoiceService').value.trim(),amount:Number($('invoiceAmount').value),date:$('invoiceDate').value,due:$('invoiceDue').value,paid:false});
    write('satyrn-invoices-v1',invoices);invoiceForm.reset();$('invoiceDate').value=today();renderInvoices();toast('Rechnungsentwurf gespeichert.');});}
  const expenseForm=$('expenseForm');
  if(expenseForm){$('expenseDate').value=today();expenseForm.addEventListener('submit',e=>{
    e.preventDefault();expenses.unshift({id:uid(),title:$('expenseTitle').value.trim(),category:$('expenseCategory').value,amount:Number($('expenseAmount').value),date:$('expenseDate').value,recurring:$('expenseRecurring').value==='yes'});
    write('satyrn-expenses-v1',expenses);expenseForm.reset();$('expenseDate').value=today();renderExpenses();toast('Ausgabe gespeichert.');});}
  $('taxReserveForm')?.addEventListener('submit',e=>{e.preventDefault();tax={rate:Math.max(0,Math.min(100,Number($('taxReserveRate').value)||0)),basis:$('taxReserveBasis').value};write('satyrn-tax-plan-v1',tax);renderTax();toast('Planungsreserve aktualisiert.');});
  $('liquidityForm')?.addEventListener('submit',e=>{e.preventDefault();liquidity={cash:Math.max(0,Number($('liquidityCash').value)||0),costs:Math.max(0,Number($('liquidityCosts').value)||0)};write('satyrn-liquidity-v1',liquidity);renderLiquidity();toast('Liquiditätswerte gespeichert.');});
  document.addEventListener('click',e=>{
    const print=e.target.closest('[data-invoice-print]');if(print){
      const x=invoices.find(i=>i.id===print.dataset.invoicePrint);if(!x)return;
      const win=window.open('','_blank','width=900,height=700');if(!win){toast('Popup blockiert. Bitte Popups für diese Seite erlauben.');return;}
      win.document.write('<!doctype html><html lang="de"><meta charset="utf-8"><title>Rechnung '+esc(x.number)+'</title><style>body{font:15px Arial;color:#222;margin:48px}h1{font-size:28px}table{width:100%;border-collapse:collapse;margin-top:35px}td{padding:14px;border-bottom:1px solid #ddd}.total{text-align:right;font-size:20px;font-weight:bold;margin-top:25px}.muted{color:#666}</style><h1>SATYRN PRODUCTIONS</h1><p class="muted">Rechnungsentwurf · Bitte vor Verwendung rechtlich und steuerlich prüfen</p><h2>Rechnung '+esc(x.number)+'</h2><p>Rechnung an: '+esc(x.customer)+'</p><p>Rechnungsdatum: '+esc(x.date)+' · Fällig: '+esc(x.due)+'</p><table><tr><td>Leistung</td><td>'+esc(x.service)+'</td></tr><tr><td>Betrag</td><td>'+esc(money(x.amount))+'</td></tr></table><p class="total">Gesamt: '+esc(money(x.amount))+'</p><p class="muted">Dies ist ein technischer Entwurf. Pflichtangaben, Steuersatz, Umsatzsteuer und rechtliche Anforderungen wurden nicht geprüft.</p><script>window.onload=()=>window.print()<\/script></html>');
      win.document.close();win.focus();win.print();return;
    }
    const paid=e.target.closest('[data-invoice-paid]');if(paid){const x=invoices.find(i=>i.id===paid.dataset.invoicePaid);if(x&&confirm('Zahlungseingang manuell bestätigen?')){x.paid=true;write('satyrn-invoices-v1',invoices);renderInvoices();}return;}
    const del=e.target.closest('[data-invoice-delete]');if(del&&confirm('Rechnungsentwurf löschen?')){invoices=invoices.filter(i=>i.id!==del.dataset.invoiceDelete);write('satyrn-invoices-v1',invoices);renderInvoices();return;}
    const ex=e.target.closest('[data-expense-delete]');if(ex&&confirm('Ausgabe löschen?')){expenses=expenses.filter(i=>i.id!==ex.dataset.expenseDelete);write('satyrn-expenses-v1',expenses);renderExpenses();}
  });
  renderInvoices();renderExpenses();renderTax();renderLiquidity();
})();