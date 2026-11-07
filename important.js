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
    {id:'ex-artist',title:'Potenzielle Artist-Kooperation',category:'partners',priority:'urgent',date:shift(3),description:'Mögliche Zusammenarbeit mit einem passenden Artist prüfen. Im Mittelpunkt stehen musikalische Chemie, ein klarer gemeinsamer Mehrwert und realistische Erwartungen. Erst nach persönlichem Austausch und einer konkreten Idee wird eine Kooperation weiterverfolgt.',links:[{id:'project-collab',area:'Projects',name:'Artist Collaboration'},{id:'business-artist',area:'Business',name:'Artist Network'}],example:true},
    {id:'ex-focus',title:'Fokus auf Producer-Dienstleistungen',category:'moves',priority:'provisional',date:shift(-5),description:'SATYRN baut zunächst verlässliche Einnahmen und eine Kundenbasis über Producer-Dienstleistungen auf. Beat-Verkäufe, individuelle Produktionen und Editing-Angebote bilden die erste operative Grundlage. Content und Artist-Marke unterstützen den Aufbau, sollen den Kern aber nicht verwässern.',links:[{id:'project-services',area:'Projects',name:'Producer Services'},{id:'project-content',area:'Projects',name:'Content Strategy'}],example:true},
    {id:'ex-studio',title:'Eigenes SATYRN Studio',category:'blueprints',priority:'indefinite',date:shift(-30),description:'Langfristiges Ziel ist ein professionelles SATYRN Studio mit hochwertiger Produktions- und Recording-Umgebung. Der Aufbau erfolgt schrittweise, sobald Cashflow, Platzbedarf und laufende Kosten sinnvoll zusammenpassen.',modified:shift(-7),links:[{id:'business-studio',area:'Business',name:'Studio Concept'}],example:true},
    {id:'ex-note',title:'Interne Unternehmensnotiz',category:'other',priority:'indefinite',date:'',description:'Wichtige interne Informationen werden möglichst direkt, verständlich und an einer zentralen Stelle dokumentiert. Bei Entscheidungen sollen Zuständigkeit, Hintergrund und nächster sinnvoller Bezug erkennbar bleiben.',links:[],example:true}
  ];
  function shift(days){const d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()+days);return iso(d)}
  function iso(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
  function uid(){return crypto.randomUUID?crypto.randomUUID():String(Date.now())+Math.random().toString(16).slice(2)}
  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
  function read(){try{const raw=JSON.parse(localStorage.getItem(KEY)||'null');if(raw&&!Array.isArray(raw)&&Array.isArray(raw.entries))return raw;if(Array.isArray(raw))return {entries:raw,examplesRestored:false};return null}catch{return null}}
  const saved=read();
  let entries=saved?saved.entries:examples.map(x=>({...x}));
  // Restore the original demo cards once for existing users without touching personal entries.
  if(saved&&!saved.examplesRestored){const present=new Set(entries.map(x=>x.id));entries=[...examples.filter(x=>!present.has(x.id)).map(x=>({...x})),...entries];}
  let categoryOn=new Set(categories.map(x=>x.id)),priorityOn=new Set(priorities.map(x=>x.id));
  let expanded=new Set(),newItems=new Set(entries.filter(x=>!x.example&&x.isNew).map(x=>x.id));
  let editingId=null,linkSelections=[],initialSnapshot='',pendingClose=false,menuFor=null,freshId=null;
  const root=$('importantApp');
  if(!root)return;
  const store=()=>{try{localStorage.setItem(KEY,JSON.stringify({version:2,examplesRestored:true,entries}));return true}catch{toast('Speichern im Browser nicht möglich. Bitte Speicherplatz prüfen.');return false}};
  function toast(msg){const t=$('toast');if(t){t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600)}}
  const cat=id=>categories.find(x=>x.id===id)||categories[4],pri=id=>priorities.find(x=>x.id===id)||priorities[3];
  const fmt=d=>{if(!d)return '';const [y,m,day]=d.split('-');return day+'.'+m+'.'+y};
  const daysFrom=d=>{if(!d)return null;const a=new Date(d+'T12:00:00'),b=new Date();b.setHours(12,0,0,0);return Math.round((a-b)/86400000)};
  const relative=d=>{const n=daysFrom(d);if(n===null)return '';if(n===0)return 'Heute';return n>0?'In '+n+' '+(n===1?'Tag':'Tagen'):'Vor '+Math.abs(n)+' '+(n===-1?'Tag':'Tagen')};
  function sorted(list){
    return list.slice().sort((a,b)=>{
      const p=pri(a.priority).rank-pri(b.priority).rank;if(p)return p;if(a.id===freshId)return -1;if(b.id===freshId)return 1;
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
    return '<article class="important-card imp-pri-border-'+p.color+(open?' is-expanded':'')+(isNew?' is-new':'')+'" data-card="'+esc(e.id)+'" tabindex="0" aria-expanded="'+open+'">'+
      '<div class="imp-card-main"><div class="imp-card-title-row"><h3>'+(p.id==='urgent'?'<span class="imp-warning" aria-label="Dringend">!</span>':'')+esc(e.title)+'</h3><span class="imp-category-badge imp-cat-'+c.color+'"><i>'+c.icon+'</i>'+esc(c.name)+'</span></div>'+
      '<span class="imp-priority-badge imp-pri-'+p.color+'">'+esc(p.name)+'</span>'+
      (e.description?'<p class="imp-description">'+esc(preview)+'</p>':'')+
      (e.date?'<div class="imp-date-line"><span>▦ '+fmt(e.date)+'</span><b>'+relative(e.date)+'</b></div>':'')+
      (links.length?'<div class="imp-link-row">'+links.slice(0,open?links.length:3).map(l=>'<button class="imp-link-chip" type="button" data-page="'+(l.area==='Projects'?'projects':'network')+'" data-link="'+esc(l.id)+'" title="Verknüpfung: '+esc(l.area)+'">'+(l.area==='Projects'?'◇':'◎')+' '+esc(l.name)+'</button>').join('')+(links.length>3&&!open?'<button class="imp-more-links" type="button" data-more-links>+'+(links.length-3)+' weitere</button>':'')+'</div>':'')+
      (e.modified?'<div class="imp-modified">Zuletzt geändert: '+fmt(e.modified)+'</div>':'')+
      (e.description&&e.description.length>230?'<button class="imp-description-toggle" type="button" data-description-toggle>'+(open?'Weniger anzeigen':'Mehr anzeigen')+'</button>':'')+
      '</div><div class="imp-card-actions"><button class="imp-menu-button" type="button" aria-label="Eintragsaktionen" data-menu="'+esc(e.id)+'">⋮</button>'+(isNew?'<span class="imp-new-tag">Neu</span>':'')+'</div>'+
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
  function snapshot(){return JSON.stringify({title:$('importantTitle').value,category:$('importantCategory').value,description:$('importantDescription').value,date:$('importantDate').value,priority:document.querySelector('input[name="importantPriority"]:checked')?.value,links:linkSelections})}
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
    $('importantDescription').value=e?.description||'';$('importantDate').value=e?.date||'';
    document.querySelectorAll('input[name="importantPriority"]').forEach(x=>x.checked=x.value===(e?.priority||''));
    linkSelections=(e?.links||[]).map(x=>({...x}));renderSelectedLinks();
    $('importantLinkSearch').value='';$('importantLinkResults').hidden=true;$('importantDiscardPrompt').hidden=true;
    setModal(true);initialSnapshot=snapshot();
  }
  function renderSelectedLinks(){
    $('importantSelectedLinks').innerHTML=linkSelections.map(l=>'<span class="imp-selected-link">'+esc(l.area)+' · '+esc(l.name)+'<button type="button" data-unlink="'+esc(l.id)+'" aria-label="Verknüpfung entfernen">×</button></span>').join('');
  }
  const availableLinks=[
    {id:'project-brand',area:'Projects',name:'Brand Identity',example:true},{id:'project-collab',area:'Projects',name:'Artist Collaboration',example:true},{id:'project-services',area:'Projects',name:'Producer Services',example:true},{id:'project-content',area:'Projects',name:'Content Strategy',example:true},{id:'business-artist',area:'Business',name:'Artist Network',example:true},{id:'business-studio',area:'Business',name:'Studio Concept',example:true}
  ];
  function renderLinkResults(){
    const q=$('importantLinkSearch').value.trim().toLowerCase();
    const list=availableLinks.filter(l=>!linkSelections.some(s=>s.id===l.id)&&(!q||(l.name+' '+l.area).toLowerCase().includes(q)));
    $('importantLinkResults').innerHTML=list.length?list.map(l=>'<button type="button" data-add-link="'+l.id+'"><span>'+l.area+'</span><b>'+l.name+'</b><small>BEISPIELZIEL</small></button>').join(''):'<p>Keine passenden HQ-Einträge gefunden.</p>';
    $('importantLinkResults').hidden=false;
  }
  function save(){
    const title=$('importantTitle').value.trim(),category=$('importantCategory').value,priority=document.querySelector('input[name="importantPriority"]:checked')?.value;
    if(!title||!category||!priority){toast('Bitte Titel, Kategorie und Priorität ausfüllen.');return}
    const now=iso(new Date()),description=$('importantDescription').value.trim(),date=$('importantDate').value;
    const wasEditing=!!editingId;
    if(editingId){
      const old=entries.find(x=>x.id===editingId);if(!old)return;
      Object.assign(old,{title,category,priority,description,date,links:linkSelections.map(x=>({...x})),modified:now});
      newItems.delete(old.id);old.isNew=false;
    }else{
      const item={id:uid(),title,category,priority,description,date,links:linkSelections.map(x=>({...x})),created:now,isNew:true};
      entries.unshift(item);newItems.add(item.id);freshId=item.id;
      categoryOn.add(category);priorityOn.add(priority);
    }
    if(!store())return;
    closeModal();menuFor=null;renderFilters();render();toast(wasEditing?'Eintrag aktualisiert.':'Important-Eintrag gespeichert.');
  }
  function deleteEntry(id){
    $('importantDeleteTarget').value=id;$('importantDeletePrompt').hidden=false;
  }
  function confirmDelete(){
    const id=$('importantDeleteTarget').value;
    const cardEl=document.querySelector('[data-card="'+CSS.escape(id)+'"]');
    $('importantDeletePrompt').hidden=true;
    if(cardEl){cardEl.classList.add('is-removing');setTimeout(()=>{entries=entries.filter(x=>x.id!==id);expanded.delete(id);newItems.delete(id);store();render()},180)}
    else{entries=entries.filter(x=>x.id!==id);store();render()}
    menuFor=null;
  }
  function toggleCard(id){
    const e=entries.find(x=>x.id===id);if(!e)return;
    if(newItems.has(id)){newItems.delete(id);e.isNew=false;expanded.add(id);store()}
    else if(expanded.has(id))expanded.delete(id);else expanded.add(id);
    render();
  }
  root.addEventListener('click',event=>{
    const t=event.target;
    const action=t.closest('button');
    if(action){
      if(action.dataset.impCreate!==undefined){openModal();return}
      if(action.dataset.menu){menuFor=menuFor===action.dataset.menu?null:action.dataset.menu;render();return}
      if(action.dataset.edit){const id=action.dataset.edit;menuFor=null;openModal(id);return}
      if(action.dataset.delete){deleteEntry(action.dataset.delete);return}
      if(action.dataset.descriptionToggle||action.dataset.moreLinks){const id=action.closest('[data-card]')?.dataset.card;if(id)toggleCard(id);return}
      if(action.dataset.link){toast('Verknüpfung: '+(action.textContent.trim())+' · Zielbereich wird im HQ verknüpft, sobald der Bereich aktiv ist.');return}
      if(action.dataset.cat){const id=action.dataset.cat;categoryOn.has(id)?categoryOn.delete(id):categoryOn.add(id);renderFilters();render();return}
      if(action.dataset.pri){const id=action.dataset.pri;priorityOn.has(id)?priorityOn.delete(id):priorityOn.add(id);renderFilters();render();return}
      if(action.dataset.filterAll){setAll(action.dataset.filterAll,true);return}
      if(action.dataset.filterNone){setAll(action.dataset.filterNone,false);return}
      if(action.dataset.reset){$('importantSearch').value='';setAll('cat',true);setAll('pri',true);return}
      if(action.dataset.addLink){const l=availableLinks.find(x=>x.id===action.dataset.addLink);if(l)linkSelections.push({...l});renderSelectedLinks();renderLinkResults();return}
      if(action.dataset.unlink){linkSelections=linkSelections.filter(x=>x.id!==action.dataset.unlink);renderSelectedLinks();renderLinkResults();return}
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
  // When navigating away, cards collapse. On return, all start collapsed.
  document.addEventListener('click',event=>{
    const nav=event.target.closest('[data-page]');
    if(nav&&nav.dataset.page!=='important'&&nav.closest('.main-area,.hq-side-nav,.hq-top-nav')){expanded.clear();render()}
    if(nav&&nav.dataset.page==='important'){const search=$('importantSearch');if(search)search.value='';setAll('cat',true);setAll('pri',true);expanded.clear();render()}
  });
})();