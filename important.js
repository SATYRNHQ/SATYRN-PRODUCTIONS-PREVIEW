/* SATYRN Important — local-first entries, filters and editor. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const KEY='satyrn-important-v1';
  const categories=[
    {id:'company',name:'Unternehmensinformationen',color:'steel',icon:'▦'},
    {id:'partners',name:'Geschäftspartner & Kooperationen',color:'gold',icon:'◇'},
    {id:'moves',name:'Strategic Moves',color:'violet',icon:'⚑'},
    {id:'blueprints',name:'Future Blueprints',color:'teal',icon:'⌖'},
    {id:'other',name:'Sonstiges',color:'silver',icon:'▱'}
  ];
  const priorities=[
    {id:'urgent',name:'Dringend',color:'red',rank:0},
    {id:'important',name:'Wichtig',color:'orange',rank:1},
    {id:'provisional',name:'Vorläufig',color:'blue',rank:2},
    {id:'indefinite',name:'Unbefristet',color:'green',rank:3}
  ];
  const examples=[
    {id:'ex-brand',title:'SATYRN Brand Identity',category:'company',priority:'important',date:shift(10),description:'Die visuelle Identität von SATYRN soll die Verbindung aus luxuriöser Ästhetik, musikalischer Eigenständigkeit und langfristigem Anspruch transportieren. Gold, Grün und Schwarz bilden die Kernpalette. Die Gestaltung soll hochwertig und wiedererkennbar bleiben, ohne überladen zu wirken.',modified:shift(-2),links:[{id:'project-brand',area:'Projects',name:'Brand Identity'}],example:true},
    {id:'ex-artist',title:'Potenzielle Artist-Kooperation',category:'partners',priority:'urgent',date:shift(3),description:'Mögliche Zusammenarbeit mit einem passenden Artist prüfen. Im Mittelpunkt stehen musikalische Chemie, ein klarer gemeinsamer Mehrwert und realistische Erwartungen. Erst nach persönlichem Austausch und einer konkreten Idee wird eine Kooperation weiterverfolgt.',links:[{id:'project-collab',area:'Projects',name:'Artist Collaboration'},{id:'business-artist',area:'Network',name:'Artist Network',page:'network'}],example:true},
    {id:'ex-focus',title:'Fokus auf Producer-Dienstleistungen',category:'moves',priority:'provisional',date:shift(-5),description:'SATYRN baut zunächst verlässliche Einnahmen und eine Kundenbasis über Producer-Dienstleistungen auf. Beat-Verkäufe, individuelle Produktionen und Editing-Angebote bilden die erste operative Grundlage. Content und Artist-Marke unterstützen den Aufbau, sollen den Kern aber nicht verwässern.',links:[{id:'project-services',area:'Projects',name:'Producer Services'},{id:'project-content',area:'Projects',name:'Content Strategy'}],example:true},
    {id:'ex-studio',title:'Eigenes SATYRN Studio',category:'blueprints',priority:'indefinite',date:shift(-30),description:'Langfristiges Ziel ist ein professionelles SATYRN Studio mit hochwertiger Produktions- und Recording-Umgebung. Der Aufbau erfolgt schrittweise, sobald Cashflow, Platzbedarf und laufende Kosten sinnvoll zusammenpassen.',modified:shift(-7),links:[{id:'business-studio',area:'Network',name:'Studio Concept',page:'network'}],example:true},
    {id:'ex-note',title:'Interne Unternehmensnotiz',category:'other',priority:'indefinite',date:'',description:'Wichtige interne Informationen werden möglichst direkt, verständlich und an einer zentralen Stelle dokumentiert. Bei Entscheidungen sollen Zuständigkeit, Hintergrund und nächster sinnvoller Bezug erkennbar bleiben.',links:[],example:true}
  ];
  function shift(days){const d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()+days);return iso(d)}
  function iso(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
  function uid(){return crypto.randomUUID?crypto.randomUUID():String(Date.now())+Math.random().toString(16).slice(2)}
  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
  function read(){try{const raw=JSON.parse(localStorage.getItem(KEY)||'null');if(raw&&!Array.isArray(raw)&&Array.isArray(raw.entries))return raw;if(Array.isArray(raw))return {entries:raw,examplesRestored:false};return null}catch{return null}}
  const saved=read();
  let entries=saved?saved.entries:examples.map(x=>({...x}));
  // Examples are preview-only: never mix them with real user records.
  if(saved){const hasRealEntries=entries.some(x=>!x.example);if(hasRealEntries)entries=entries.filter(x=>!x.example);else if(!saved.examplesRestored){const present=new Set(entries.map(x=>x.id));entries=[...examples.filter(x=>!present.has(x.id)).map(x=>({...x})),...entries];}}
  let categoryOn=new Set(categories.map(x=>x.id)),priorityOn=new Set(priorities.map(x=>x.id));
  let expanded=new Set(),newItems=new Set(entries.filter(x=>!x.example&&x.isNew).map(x=>x.id));
  let editingId=null,linkSelections=[],initialSnapshot='',pendingClose=false,menuFor=null,freshId=null;
  const root=$('importantApp');
  if(!root)return;
  const store=(nextEntries=entries)=>{try{localStorage.setItem(KEY,JSON.stringify({version:3,examplesRestored:true,entries:nextEntries}));return true}catch{toast('Speichern im Browser nicht möglich. Bitte Speicherplatz prüfen.');return false}};
  function toast(msg){const t=$('toast');if(t){t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600)}}
  const cat=id=>categories.find(x=>x.id===id)||categories[4],pri=id=>priorities.find(x=>x.id===id)||priorities[3];
  const fmt=d=>{if(!d)return '';const [y,m,day]=d.split('-');return day+'.'+m+'.'+y};
  const daysFrom=d=>{if(!d)return null;const a=new Date(d+'T12:00:00'),b=new Date();b.setHours(12,0,0,0);return Math.round((a-b)/86400000)};
  const relative=d=>{const n=daysFrom(d);if(n===null)return '';if(n===0)return 'Heute';return n>0?'In '+n+' '+(n===1?'Tag':'Tagen'):'Vor '+Math.abs(n)+' '+(n===-1?'Tag':'Tagen')};
  function sorted(list){
    return list.slice().sort((a,b)=>{
      const p=pri(a.priority).rank-pri(b.priority).rank;if(p)return p;if(a.id===freshId&&a.date)return -1;if(b.id===freshId&&b.date)return 1;
      if(!a.date&&!b.date)return 0;if(!a.date)return 1;if(!b.date)return -1;
      const da=daysFrom(a.date),db=daysFrom(b.date);
      const af=da>=0,bf=db>=0;
      if(af!==bf)return af?-1:1;
      return af?a.date.localeCompare(b.date):a.date.localeCompare(b.date);
    });
  }
  function matching(){
    const q=$('importantSearch').value.trim().toLocaleLowerCase('de');
    return sorted(entries.filter(e=>categoryOn.has(e.category)&&priorityOn.has(e.priority)&&(!q||[e.title,e.description,...(e.links||[]).map(x=>x.name)].join(' ').toLocaleLowerCase('de').includes(q))));
  }
  function renderFilters(){
    $('importantCategoryFilters').innerHTML=categories.map(c=>'<label class="imp-check imp-cat-'+c.color+'"><input type="checkbox" data-cat="'+c.id+'" '+(categoryOn.has(c.id)?'checked':'')+'><span class="imp-check-box"></span><span>'+c.name+'</span></label>').join('');
    $('importantPriorityFilters').innerHTML=priorities.map(p=>'<label class="imp-check imp-pri-'+p.color+'"><input type="checkbox" data-pri="'+p.id+'" '+(priorityOn.has(p.id)?'checked':'')+'><span class="imp-check-box"></span><span>'+p.name+'</span></label>').join('');
  }
  function card(e){
    const c=cat(e.category),p=pri(e.priority),open=expanded.has(e.id),links=e.links||[],isNew=newItems.has(e.id);
    const preview=(e.description||'').length>230&&!open?(e.description.slice(0,230).trimEnd()+'…'):e.description||'';
    return '<article class="important-card imp-pri-border-'+p.color+(open?' is-expanded':'')+(isNew?' is-new':'')+(e.example?' is-example':'')+(e.done&&e.isTask?' is-done':'')+'" data-card="'+esc(e.id)+'" tabindex="0" aria-expanded="'+open+'">'+
      '<div class="imp-card-main"><div class="imp-card-title-row"><h3>'+(p.id==='urgent'?'<span class="imp-warning" aria-label="Dringend">!</span>':'')+esc(e.title)+'</h3><span class="imp-category-badge imp-cat-'+c.color+'"><i>'+c.icon+'</i>'+esc(c.name)+'</span></div>'+
      '<span class="imp-priority-badge imp-pri-'+p.color+'">'+esc(p.name)+'</span>'+
      (e.isTask?'<span class="imp-focus-task-badge">FOCUS TASK</span>':'')+
      (e.description?'<p class="imp-description">'+esc(preview)+'</p>':'')+
      (e.date?'<div class="imp-date-line"><span>▦ '+fmt(e.date)+'</span><b>'+relative(e.date)+'</b></div>':'')+
      (links.length?'<div class="imp-link-row">'+links.slice(0,open?links.length:3).map(l=>'<button class="imp-link-chip" type="button" data-page="'+esc(l.page||(l.area==='Projects'?'projects':'network'))+'" data-link="'+esc(l.id)+'" data-link-area="'+esc(l.area)+'" data-link-kind="'+esc(l.kind||'entry')+'" title="Verknüpfung: '+esc(l.area)+'">'+(l.area==='Projects'?'◇':'◎')+' '+esc(l.name)+'</button>').join('')+(links.length>3&&!open?'<button class="imp-more-links" type="button" data-more-links>+'+(links.length-3)+' weitere</button>':'')+'</div>':'')+
      (e.modified?'<div class="imp-modified">Zuletzt geändert: '+fmt(e.modified)+'</div>':'')+
      (e.done&&e.isTask?'<div class="imp-task-done-note">Als Fokusaufgabe erledigt</div>':'')+
      (e.description&&e.description.length>230?'<button class="imp-description-toggle" type="button" data-description-toggle>'+(open?'Weniger anzeigen':'Mehr anzeigen')+'</button>':'')+
      '</div><div class="imp-card-actions">'+(e.example?'<span class="imp-example-tag">BEISPIEL</span>':'')+(isNew?'<span class="imp-new-tag">Neu</span>':'')+'<button class="imp-menu-button" type="button" aria-label="Eintragsaktionen" data-menu="'+esc(e.id)+'">⋮</button></div>'+
      (menuFor===e.id?'<div class="imp-card-menu"><button type="button" data-edit="'+esc(e.id)+'">Bearbeiten</button><button type="button" class="danger" data-delete="'+esc(e.id)+'">Löschen</button></div>':'')+
      '</article>';
  }
  function render(){
    const list=matching();$('importantCount').textContent=list.length+' Einträge gefunden';
    $('importantCards').innerHTML=list.length?list.map(card).join(''):'';
    $('importantCards').hidden=list.length===0;
    $('importantNoResults').hidden=entries.length===0||list.length>0;
    $('importantWelcome').hidden=entries.length>0;
    freshId=null;
  }
  function setAll(type,on){
    const set=type==='cat'?categoryOn:priorityOn,all=type==='cat'?categories:priorities;
    set.clear();if(on)all.forEach(x=>set.add(x.id));renderFilters();render();
  }
  function updateCategorySelectColor(){
    const select=$('importantCategory');
    if(!select)return;
    select.classList.remove('imp-category-company','imp-category-partners','imp-category-moves','imp-category-blueprints','imp-category-other');
    if(select.value)select.classList.add('imp-category-'+select.value);
  }
  function setModal(open){
    $('importantModalBackdrop').hidden=!open;
    $('importantModal').hidden=!open;
    document.body.classList.toggle('important-modal-open',open);
    if(open)setTimeout(()=>$('importantTitle').focus(),50);
  }
  function snapshot(){return JSON.stringify({title:$('importantTitle').value,category:$('importantCategory').value,description:$('importantDescription').value,date:$('importantDate').value,priority:document.querySelector('input[name="importantPriority"]:checked')?.value,isTask:$('importantFocusTask').checked,links:linkSelections})}
  function changed(){return snapshot()!==initialSnapshot}
  function requestClose(){
    if(changed()){$('importantDiscardPrompt').hidden=false;return}
    closeModal();
  }
  function closeModal(){$('importantDiscardPrompt').hidden=true;setModal(false);editingId=null}
  function openModal(id=null){
    editingId=id;const e=id?entries.find(x=>x.id===id):null;
    $('importantForm').reset();$('importantModalHeading').textContent=e?'Eintrag bearbeiten':'Neuen Eintrag erstellen';
    $('importantTitle').value=e?.title||'';$('importantCategory').value=e?.category||'';updateCategorySelectColor();
    $('importantDescription').value=e?.description||'';$('importantDate').value=e?.date||'';$('importantFocusTask').checked=!!e?.isTask;
    document.querySelectorAll('input[name="importantPriority"]').forEach(x=>x.checked=x.value===(e?.priority||''));
    linkSelections=(e?.links||[]).map(x=>({...x}));renderSelectedLinks();
    $('importantLinkSearch').value='';$('importantLinkResults').hidden=true;$('importantLinkClose').hidden=true;$('importantDiscardPrompt').hidden=true;
    setModal(true);initialSnapshot=snapshot();
  }
  function renderSelectedLinks(){
    $('importantSelectedLinks').innerHTML=linkSelections.map(l=>'<span class="imp-selected-link">'+esc(l.area)+' · '+esc(l.name)+'<button type="button" data-unlink="'+esc(l.id)+'" data-unlink-area="'+esc(l.area)+'" aria-label="Verknüpfung entfernen">×</button></span>').join('');
  }
  const getAvailableLinks=()=>{
    const readArray=key=>{try{const value=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(value)?value:[]}catch{return[]}};
    const areas=[{id:'__area_projects__',area:'Projects',page:'projects',name:'Projects overview',kind:'area'},{id:'__area_network__',area:'Network',page:'network',name:'Network overview',kind:'area'}];
    const tasks=readArray('satyrn-tasks').map(x=>({id:String(x.id),area:'Projects',page:'projects',name:x.title,kind:'entry'})).filter(x=>x.id&&x.name);
    const contacts=readArray('satyrn-contacts-v1').map(x=>({id:String(x.id),area:'Network',page:'network',name:x.f0||x.name||'Unbenannter Kontakt',kind:'entry'})).filter(x=>x.id&&x.name);
    return [...areas,...tasks,...contacts];
  };
  function renderLinkResults(){
    const q=$('importantLinkSearch').value.trim().toLocaleLowerCase('de').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    const list=getAvailableLinks().filter(l=>!linkSelections.some(s=>s.area===l.area&&String(s.id)===String(l.id))&&(!q||(l.name+' '+l.area).toLocaleLowerCase('de').normalize('NFD').replace(/[\u0300-\u036f]/g,'').includes(q)));
    $('importantLinkResults').innerHTML=list.length?list.map(l=>'<button type="button" data-add-link="'+esc(l.id)+'" data-link-area="'+esc(l.area)+'"><span>'+esc(l.area)+'</span><b>'+esc(l.name)+'</b></button>').join(''):'<p>Keine passenden echten HQ-Einträge gefunden. Lege zuerst einen Eintrag in Projects oder Network an.</p>';
    $('importantLinkResults').hidden=false;$('importantLinkClose').hidden=false;
  }
  function save(){
    const title=$('importantTitle').value.trim(),category=$('importantCategory').value,priority=document.querySelector('input[name="importantPriority"]:checked')?.value;
    if(!title||!category||!priority){toast('Bitte Titel, Kategorie und Priorität ausfüllen.');return}
    const now=iso(new Date()),description=$('importantDescription').value.trim(),date=$('importantDate').value,isTask=$('importantFocusTask').checked;
    const wasEditing=!!editingId;let nextEntries=entries.slice(),savedId=null,convertedExample=false;
    const valid=getAvailableLinks(),links=linkSelections.filter(l=>valid.some(v=>v.area===l.area&&String(v.id)===String(l.id))).map(x=>({...x}));
    if(editingId){
      const old=entries.find(x=>x.id===editingId);if(!old)return;
      convertedExample=!!old.example;savedId=old.id;
      const updated={...old,title,category,priority,description,date,links,isTask,done:isTask?!!old.done:false,modified:convertedExample?undefined:now,example:false,isNew:convertedExample?true:!!old.isNew,created:old.created||now};
      nextEntries=nextEntries.map(x=>x.id===editingId?updated:x);
      if(convertedExample)nextEntries=nextEntries.filter(x=>!x.example);
    }else{
      const item={id:uid(),title,category,priority,description,date,links,isTask,done:false,created:now,isNew:true};
      savedId=item.id;nextEntries=nextEntries.filter(x=>!x.example);nextEntries.unshift(item);
    }
    if(!store(nextEntries))return;
    entries=nextEntries;
    if(convertedExample)newItems.add(savedId);else if(wasEditing)newItems.delete(savedId);else newItems.add(savedId);
    if(savedId)freshId=savedId;
    if(!wasEditing||convertedExample){categoryOn.add(category);priorityOn.add(priority);}
    closeModal();menuFor=null;renderFilters();render();toast(wasEditing?'Eintrag aktualisiert.':'Important-Eintrag gespeichert.');
  }
  function deleteEntry(id){
    $('importantDeleteTarget').value=id;$('importantDeletePrompt').hidden=false;
  }
  function confirmDelete(){
    const id=$('importantDeleteTarget').value,cardEl=document.querySelector('[data-card="'+CSS.escape(id)+'"]');
    $('importantDeletePrompt').hidden=true;
    const commit=()=>{const nextEntries=entries.filter(x=>x.id!==id);if(!store(nextEntries)){cardEl?.classList.remove('is-removing');return;}entries=nextEntries;expanded.delete(id);newItems.delete(id);menuFor=null;render();};
    if(cardEl){cardEl.classList.add('is-removing');setTimeout(commit,180)}else commit();
  }
  function toggleCard(id){
    const e=entries.find(x=>x.id===id);if(!e)return;
    if(newItems.has(id)){expanded.add(id);const nextEntries=entries.map(x=>x.id===id?{...x,isNew:false}:x);if(store(nextEntries)){entries=nextEntries;newItems.delete(id);}}
    else if(expanded.has(id))expanded.delete(id);else expanded.add(id);
    render();
  }
  const removeTarget=(area,id)=>{
    const nextEntries=entries.map(e=>({...e,links:(e.links||[]).filter(l=>!(l.area===area&&String(l.id)===String(id)))}));
    if(nextEntries.every((e,i)=>(e.links||[]).length===(entries[i].links||[]).length))return;
    if(store(nextEntries)){entries=nextEntries;render();}
  };
  window.SATYRNImportantLinks={removeTarget};
  root.addEventListener('click',event=>{
    const t=event.target;
    const action=t.closest('button');
    if(action){
      if(action.dataset.impCreate!==undefined){openModal();return}
      if(action.dataset.menu){menuFor=menuFor===action.dataset.menu?null:action.dataset.menu;render();return}
      if(action.dataset.edit){const id=action.dataset.edit;menuFor=null;openModal(id);return}
      if(action.dataset.delete){deleteEntry(action.dataset.delete);return}
      if(action.dataset.descriptionToggle||action.dataset.moreLinks){const id=action.closest('[data-card]')?.dataset.card;if(id)toggleCard(id);return}
      if(action.dataset.link){const area=action.dataset.linkArea||'Projects',id=action.dataset.link;if(action.dataset.linkKind==='area'||action.closest('.is-example'))return;setTimeout(()=>{const selector=area==='Projects'?'[data-project-task="'+CSS.escape(id)+'"]':'[data-hq-record="'+CSS.escape(id)+'"]';const target=document.querySelector(selector);if(target){target.scrollIntoView({behavior:'smooth',block:'center'});target.classList.add('is-link-highlight');setTimeout(()=>target.classList.remove('is-link-highlight'),1800)}else toast('Das verknüpfte Ziel ist nicht mehr vorhanden.')},180);return}
      if(action.dataset.cat){const id=action.dataset.cat;categoryOn.has(id)?categoryOn.delete(id):categoryOn.add(id);renderFilters();render();return}
      if(action.dataset.pri){const id=action.dataset.pri;priorityOn.has(id)?priorityOn.delete(id):priorityOn.add(id);renderFilters();render();return}
      if(action.dataset.filterAll){setAll(action.dataset.filterAll,true);return}
      if(action.dataset.filterNone){setAll(action.dataset.filterNone,false);return}
      if(action.dataset.reset){$('importantSearch').value='';setAll('cat',true);setAll('pri',true);return}
      if(action.dataset.addLink){const l=getAvailableLinks().find(x=>String(x.id)===String(action.dataset.addLink)&&x.area===action.dataset.linkArea);if(l)linkSelections.push({...l});renderSelectedLinks();renderLinkResults();return}
      if(action.dataset.unlink){linkSelections=linkSelections.filter(x=>!(String(x.id)===String(action.dataset.unlink)&&(!action.dataset.unlinkArea||x.area===action.dataset.unlinkArea)));renderSelectedLinks();renderLinkResults();return}
      if(action.dataset.modalClose!==undefined){requestClose();return}
    }
    const cardEl=t.closest('[data-card]');
    if(cardEl&&!t.closest('.imp-card-menu,.imp-card-actions,.imp-link-row,.imp-description-toggle'))toggleCard(cardEl.dataset.card);
    else if(menuFor&&!t.closest('.imp-card-menu,.imp-card-actions')){menuFor=null;render()}
  });
  root.addEventListener('keydown',event=>{
    const cardEl=event.target.closest('[data-card]');
    if(cardEl&&(event.key==='Enter'||event.key===' ')&&event.target===cardEl){event.preventDefault();toggleCard(cardEl.dataset.card)}
  });
  root.addEventListener('change',event=>{const el=event.target;if(el.id==='importantCategory'){updateCategorySelectColor();return}if(el.matches('[data-cat]')){const id=el.dataset.cat;categoryOn.has(id)?categoryOn.delete(id):categoryOn.add(id);render()}else if(el.matches('[data-pri]')){const id=el.dataset.pri;priorityOn.has(id)?priorityOn.delete(id):priorityOn.add(id);render()}});
  $('importantSearch').addEventListener('input',render);
  $('importantSearchClear').addEventListener('click',()=>{$('importantSearch').value='';render();$('importantSearch').focus()});
  $('importantLinkSearch').addEventListener('input',renderLinkResults);
  $('importantLinkSearch').addEventListener('focus',renderLinkResults);
  $('importantLinkClose').addEventListener('click',()=>{$('importantLinkResults').hidden=true;$('importantLinkClose').hidden=true;$('importantLinkSearch').blur()});
  $('importantLinkSearch').addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();$('importantLinkResults').hidden=true;$('importantLinkClose').hidden=true;$('importantLinkSearch').blur()}});
  document.addEventListener('click',event=>{if(!event.target.closest('.imp-link-picker')){$('importantLinkResults').hidden=true;$('importantLinkClose').hidden=true}});
  $('importantForm').addEventListener('submit',event=>{event.preventDefault();save()});
  $('importantCancel').addEventListener('click',requestClose);
  // Discard confirmation uses direct handlers so its buttons never depend on
  // the archive's delegated card-action handler.
  $('importantDiscardPrompt').querySelector('[data-cancel-discard]').addEventListener('click',event=>{
    event.preventDefault();
    event.stopPropagation();
    $('importantDiscardPrompt').hidden=true;
    $('importantModal').hidden=false;
    const active=$('importantTitle');
    if(active)active.focus();
  });
  $('importantDiscardPrompt').querySelector('[data-confirm-discard]').addEventListener('click',event=>{
    event.preventDefault();
    event.stopPropagation();
    closeModal();
  });
  // Delete confirmation also uses direct handlers, independent of delegated clicks.
  $('importantDeletePrompt').querySelector('[data-cancel-delete]').addEventListener('click',event=>{
    event.preventDefault();
    event.stopPropagation();
    $('importantDeletePrompt').hidden=true;
  });
  $('importantDeletePrompt').querySelector('[data-confirm-delete]').addEventListener('click',event=>{
    event.preventDefault();
    event.stopPropagation();
    confirmDelete();
  });
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!$('importantModal').hidden){if(!$('importantDiscardPrompt').hidden){$('importantDiscardPrompt').hidden=true;return}requestClose()}});
  $('importantModalBackdrop').addEventListener('click',()=>{});
  renderFilters();render();
  window.addEventListener('storage',event=>{if(event.key!=='satyrn-tasks'&&event.key!=='satyrn-contacts-v1')return;const valid=new Set(getAvailableLinks().map(x=>x.area+':'+x.id));const next=entries.map(e=>e.example?e:{...e,links:(e.links||[]).filter(l=>valid.has(l.area+':'+l.id))});if(next.some((e,i)=>(e.links||[]).length!==(entries[i].links||[]).length)&&store(next)){entries=next;render();}});
  // When navigating away, cards collapse. On return, all start collapsed.
  document.addEventListener('click',event=>{
    const nav=event.target.closest('[data-page]');
    if(nav&&nav.dataset.page!=='important'&&nav.closest('.main-area,.hq-side-nav,.hq-top-nav')){expanded.clear();render()}
    if(nav&&nav.dataset.page==='important'){const latest=read();if(latest){let incoming=latest.entries||[];if(incoming.some(x=>!x.example))incoming=incoming.filter(x=>!x.example);else if(!latest.examplesRestored){const present=new Set(incoming.map(x=>x.id));incoming=[...examples.filter(x=>!present.has(x.id)).map(x=>({...x})),...incoming];}entries=incoming;newItems=new Set(entries.filter(x=>!x.example&&x.isNew).map(x=>x.id));}const search=$('importantSearch');if(search)search.value='';setAll('cat',true);setAll('pri',true);expanded.clear();render()}
  });
})();