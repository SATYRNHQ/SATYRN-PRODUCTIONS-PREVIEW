/* SATYRN HQ modules — local-first functional intermediate build. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const read = (key, fallback=[]) => { try { const value=JSON.parse(localStorage.getItem(key)||'null'); return value ?? fallback; } catch { return fallback; } };
  const write = (key, value) => { try { localStorage.setItem(key,JSON.stringify(value)); return true; } catch { if(window.showToast) showToast('Browser-Speicher ist voll. Bitte Daten exportieren oder Speicher freigeben.'); return false; } };
  const uid = () => (crypto.randomUUID ? crypto.randomUUID() : String(Date.now())+Math.random().toString(16).slice(2));
  const esc = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const today = () => { const d=new Date(); return new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,10); };
  const money = value => new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(Number(value)||0);
  const bindForm = (id, handler) => { const el=$(id); if(el) el.addEventListener('submit',e=>{e.preventDefault();handler(e);}); };
  const toast = message => { if(window.showToast) window.showToast(message); };
  const store = {
    ideas: read('satyrn-studio-ideas-v1'), sessions: read('satyrn-studio-sessions-v1'),
    beats: read('satyrn-beats-v1'), content: read('satyrn-content-v1'),
    songs: read('satyrn-lyrics-v1'), upgrades: read('satyrn-upgrades-v1'),
    academy: read('satyrn-academy-v1',[])
  };
  function persist(name){ write('satyrn-'+name+'-v1',store[name]); }
  function row(title, meta, detail, action, id) {
    return '<article class="module-row"><div class="module-row-copy"><b>'+esc(title)+'</b><small>'+esc(meta||'')+'</small>'+(detail?'<p>'+esc(detail)+'</p>':'')+'</div><button class="module-delete" type="button" data-remove="'+esc(id)+'" data-kind="'+esc(action)+'" aria-label="Eintrag löschen">×</button></article>';
  }
  function renderIdeas(){
    const target=$('studioIdeaList'); if(!target)return;
    target.innerHTML=store.ideas.length?store.ideas.map(x=>row(x.title,x.type+' · '+x.date,x.note,'idea',x.id)).join(''):'<p class="module-empty">Noch keine Ideen gespeichert.</p>';
  }
  function renderSessions(){
    const target=$('studioSessionList'); if(!target)return;
    target.innerHTML=store.sessions.length?store.sessions.slice().sort((a,b)=>b.date.localeCompare(a.date)).slice(0,8).map(x=>row(x.title,x.date+' · '+x.minutes+' Min.',x.result,'session',x.id)).join(''):'<p class="module-empty">Noch keine Sessions protokolliert.</p>';
  }
  bindForm('studioIdeaForm',()=>{
    store.ideas.unshift({id:uid(),title:$('studioIdeaTitle').value.trim(),type:$('studioIdeaType').value,note:$('studioIdeaNote').value.trim(),date:today()});
    persist('ideas');$('studioIdeaForm').reset();renderIdeas();toast('Idee lokal gespeichert.');
  });
  bindForm('studioSessionForm',()=>{
    store.sessions.unshift({id:uid(),title:$('studioSessionTitle').value.trim(),date:$('studioSessionDate').value||today(),minutes:Number($('studioSessionMinutes').value),result:$('studioSessionResult').value.trim()});
    persist('sessions');$('studioSessionForm').reset();$('studioSessionDate').value=today();renderSessions();toast('Session protokolliert.');
  });
  if($('studioSessionDate')) $('studioSessionDate').value=today();
  const academySteps=[
    ['Wochen 1–4','Musiktheorie & Melodien','Skalen, Akkorde, Progressions, Melodie-Hooks'],
    ['Wochen 5–8','Sound Design','Synthese, Presets, Layering, Sound-Auswahl'],
    ['Wochen 9–12','Mixing','Gain Staging, EQ, Kompression, Raum und Balance'],
    ['Wochen 13–16','Drums & Arrangement','Bounce, 808, Drums, Struktur und Energie'],
    ['Wochen 17–20','Songwriting & Artist-Produktion','Vocal-Aufnahme, Flow, Vocal-Mix und Songstruktur'],
    ['Wochen 21–24','Advanced Mixing & Genre-Erweiterung','Finalisierung, Mastering-Grundlagen und neue Genres']
  ];
  function renderAcademy(){
    const target=$('academyGrid');if(!target)return;
    target.innerHTML=academySteps.map((s,i)=>'<label class="academy-step"><input type="checkbox" data-academy="'+i+'" '+(store.academy.includes(i)?'checked':'')+'><span><small>'+s[0]+'</small><b>'+s[1]+'</b><em>'+s[2]+'</em></span></label>').join('');
    target.querySelectorAll('[data-academy]').forEach(el=>el.addEventListener('change',()=>{const i=Number(el.dataset.academy);store.academy=el.checked?[...new Set([...store.academy,i])]:store.academy.filter(x=>x!==i);persist('academy');}));
  }
  bindForm('beatForm',()=>{
    const beat={id:uid(),title:$('beatTitle').value.trim(),genre:$('beatGenre').value.trim(),bpm:Number($('beatBpm').value)||null,key:$('beatKey').value.trim(),status:$('beatStatus').value,price:Number($('beatPrice').value)||null,created:today()};
    store.beats.unshift(beat);persist('beats');$('beatForm').reset();renderBeats();toast('Beat zur Library hinzugefügt.');
  });
  function renderBeats(){
    const target=$('beatList');if(!target)return;
    const q=($('beatSearch').value||'').toLowerCase(),f=$('beatFilter').value;
    const list=store.beats.filter(b=>(f==='all'||b.status===f)&&[b.title,b.genre,b.key].join(' ').toLowerCase().includes(q));
    const labels={idea:'Idee',wip:'In Arbeit',ready:'Fertig',listed:'Online',sold:'Verkauft'};
    target.innerHTML=list.length?list.map(b=>row(b.title,[b.genre||'Genre offen',b.bpm?b.bpm+' BPM':'BPM offen',b.key||'Tonart offen',labels[b.status],b.price!==null?money(b.price):'Preis offen'].join(' · '),'', 'beat',b.id)).join(''):'<p class="module-empty">Keine passenden Beats. Lege oben deinen ersten Eintrag an.</p>';
  }
  ['beatSearch','beatFilter'].forEach(id=>{if($(id))$(id).addEventListener('input',renderBeats);});
  bindForm('contentForm',()=>{
    store.content.unshift({id:uid(),title:$('contentTitle').value.trim(),platform:$('contentPlatform').value,format:$('contentFormat').value,date:$('contentDate').value,status:$('contentStatus').value,note:$('contentNote').value.trim()});
    persist('content');$('contentForm').reset();$('contentDate').value=today();renderContent();toast('Content-Eintrag gespeichert.');
  });
  function renderContent(){
    const target=$('contentList');if(!target)return;
    const p=$('contentPlatformFilter').value,s=$('contentStatusFilter').value;
    const list=store.content.filter(x=>(p==='all'||x.platform===p)&&(s==='all'||x.status===s)).sort((a,b)=>a.date.localeCompare(b.date));
    const labels={idea:'Idee',production:'In Produktion',ready:'Bereit',published:'Veröffentlicht'};
    target.innerHTML=list.length?list.map(x=>row(x.title,[x.platform,x.format,x.date,labels[x.status]].join(' · '),x.note,'content',x.id)).join(''):'<p class="module-empty">Noch keine Content-Beiträge geplant.</p>';
  }
  ['contentPlatformFilter','contentStatusFilter'].forEach(id=>{if($(id))$(id).addEventListener('change',renderContent);});
  if($('contentDate'))$('contentDate').value=today();
  let activeSongId=null;
  bindForm('lyricsMetaForm',()=>{
    const song={id:uid(),title:$('lyricsTitle').value.trim(),bpm:Number($('lyricsBpm').value)||null,key:$('lyricsKey').value.trim(),sections:{Intro:'',Hook:'', 'Verse 1':'','Verse 2':'',Bridge:'',Outro:''},updated:today()};
    store.songs.unshift(song);persist('lyrics');$('lyricsMetaForm').reset();renderSongs();selectSong(song.id);toast('Songprojekt angelegt.');
  });
  function renderSongs(){
    const target=$('lyricsSongList');if(!target)return;
    target.innerHTML=store.songs.length?store.songs.map(s=>'<button type="button" class="song-select '+(s.id===activeSongId?'active':'')+'" data-song="'+esc(s.id)+'"><b>'+esc(s.title)+'</b><small>'+(s.bpm?s.bpm+' BPM':'BPM offen')+' · '+esc(s.key||'Tonart offen')+'</small></button>').join(''):'<p class="module-empty">Noch keine Songs angelegt.</p>';
    target.querySelectorAll('[data-song]').forEach(el=>el.addEventListener('click',()=>selectSong(el.dataset.song)));
  }
  function selectSong(id){
    activeSongId=id;const song=store.songs.find(s=>s.id===id);if(!song)return;
    $('lyricsEditorTitle').textContent=song.title;
    const editor=$('lyricsEditor');
    editor.innerHTML=Object.keys(song.sections).map(section=>'<label class="lyrics-section"><span>'+esc(section)+'</span><textarea rows="'+(section.includes('Verse')?7:4)+'" data-section="'+esc(section)+'" maxlength="12000" placeholder="Schreibe deine eigenen Zeilen …">'+esc(song.sections[section])+'</textarea></label>').join('')+'<div class="lyrics-editor-actions"><button type="button" class="primary-button" id="saveLyrics">Texte speichern</button><span>Deine Originalfassung bleibt erhalten, bis du sie selbst bearbeitest.</span></div>';
    editor.querySelectorAll('[data-section]').forEach(el=>el.addEventListener('input',()=>{song.sections[el.dataset.section]=el.value;song.updated=today();persist('lyrics');}));
    $('saveLyrics').addEventListener('click',()=>{persist('lyrics');toast('Lyrics gespeichert.');});
    renderSongs();
  }
  bindForm('upgradeForm',()=>{
    store.upgrades.unshift({id:uid(),title:$('upgradeTitle').value.trim(),category:$('upgradeCategory').value,cost:Number($('upgradeCost').value)||0,monthly:Number($('upgradeMonthly').value)||0,benefit:$('upgradeBenefit').value.trim(),free:$('upgradeFree').value.trim()});
    persist('upgrades');$('upgradeForm').reset();renderUpgrades();toast('Upgrade-Kandidat gespeichert.');
  });
  function renderUpgrades(){
    const target=$('upgradeList');if(!target)return;
    target.innerHTML=store.upgrades.length?store.upgrades.map(x=>row(x.title,[x.category,money(x.cost)+' einmalig',money(x.monthly)+'/Monat'].join(' · '),[x.benefit?'Nutzen: '+x.benefit:'',x.free?'Kostenlose Alternative: '+x.free:''].filter(Boolean).join(' | '),'upgrade',x.id)).join(''):'<p class="module-empty">Noch keine Upgrade-Kandidaten gespeichert.</p>';
  }
  document.addEventListener('click',event=>{
    const button=event.target.closest('[data-remove]');if(!button)return;
    const kind=button.dataset.kind,id=button.dataset.remove;
    const map={idea:'ideas',session:'sessions',beat:'beats',content:'content',upgrade:'upgrades'};
    const key=map[kind];if(!key||!confirm('Diesen Eintrag wirklich löschen?'))return;
    store[key]=store[key].filter(x=>x.id!==id);persist(key);
    ({idea:renderIdeas,session:renderSessions,beat:renderBeats,content:renderContent,upgrade:renderUpgrades}[kind])();
  });
  renderIdeas();renderSessions();renderAcademy();renderBeats();renderContent();renderSongs();renderUpgrades();

  /* ARES context-aware local helper: transparent rules, no external AI claim. */
  window.satyrnAresReply=localAresReply;
  window.SATYRN_LOCAL_CONTEXT={getSummary:()=>({tasks:read('satyrn-tasks',[]),beats:store.beats,content:store.content,songs:store.songs,ideas:store.ideas,sessions:store.sessions,upgrades:store.upgrades})};
})();