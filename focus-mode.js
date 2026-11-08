/* SATYRN HQ — Focus Mode
 * Local-first focus sessions, durable timeline, queue, statistics and history.
 * Cloud synchronization is intentionally reported as unavailable until a backend is configured.
 */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const STORE = 'satyrn-focus-v1';
  const TASKS = 'satyrn-tasks';
  const IMPORTANT = 'satyrn-important-v1';
  const OPEN = new Set(['PREPARED','RUNNING','PAUSED','INTERRUPTED','EXPIRED']);
  const CATEGORIES = [
    {id:'music',name:'Music Production',color:'#78c9c1'},
    {id:'mixing',name:'Mixing & Mastering',color:'#8db5d0'},
    {id:'content',name:'Content Creation',color:'#b69ae2'},
    {id:'business',name:'Business',color:'#d4b46e'},
    {id:'learning',name:'Learning',color:'#8fc58d'},
    {id:'organisation',name:'Organisation',color:'#c1c6c4'}
  ];
  const IMPORTANT_CATEGORIES={company:{name:'Unternehmensinformationen',color:'#8db5d0'},partners:{name:'Geschäftspartner & Kooperationen',color:'#d4b46e'},moves:{name:'Strategic Moves',color:'#b69ae2'},blueprints:{name:'Future Blueprints',color:'#78c9c1'},other:{name:'Sonstiges',color:'#c1c6c4'}};
  const PRIORITIES = [
    {id:'urgent',name:'Dringend',rank:0,color:'#ed7772'},
    {id:'important',name:'Wichtig',rank:1,color:'#e7a45d'},
    {id:'provisional',name:'Vorläufig',rank:2,color:'#83aee7'},
    {id:'indefinite',name:'Unbefristet',rank:3,color:'#8fc58d'}
  ];
  const PRESETS = [
    {id:'pomodoro',name:'Pomodoro',focus:25,break:5},
    {id:'extended',name:'Extended',focus:50,break:10},
    {id:'deep',name:'Deep Work',focus:90,break:15},
    {id:'long',name:'Long Session',focus:120,break:20},
    {id:'marathon',name:'Marathon',focus:180,break:30},
    {id:'custom',name:'Custom',focus:45,break:10}
  ];
  const uid = () => (crypto.randomUUID ? crypto.randomUUID() : 'fm-' + Date.now() + '-' + Math.random().toString(16).slice(2));
  const esc = v => String(v == null ? '' : v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const localISO = d => { const x = new Date(d.getTime() - d.getTimezoneOffset()*60000); return x.toISOString().slice(0,10); };
  const dateKey = ts => localISO(new Date(ts));
  const zone = () => { try { return Intl.DateTimeFormat().resolvedOptions().timeZone || 'local'; } catch { return 'local'; } };
  const dateLabel = value => value ? new Date(value+'T12:00:00').toLocaleDateString('de-DE',{day:'2-digit',month:'short',year:'numeric'}) : '—';
  const timeLabel = value => value ? new Date(value).toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'}) : '—';
  const duration = ms => { const m=Math.max(0,Math.floor((Number(ms)||0)/60000)); const h=Math.floor(m/60),r=m%60; return h ? h+'h '+String(r).padStart(2,'0')+'min' : r+'min'; };
  const clock = ms => { const s=Math.max(0,Math.ceil((Number(ms)||0)/1000)); return String(Math.floor(s/3600)).padStart(2,'0')+':'+String(Math.floor(s%3600/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0'); };
  const moneyless = n => Math.max(0,Math.round(Number(n)||0));
  const read = (key,fallback) => { try { const v=JSON.parse(localStorage.getItem(key)||'null'); return v==null?fallback:v; } catch { return fallback; } };
  let storageState='UNSAVED', storageMessage='Lokal gespeichert · zentrale Synchronisierung ist noch nicht eingerichtet';
  let state = read(STORE,{version:1,sessions:[],queue:[],queueManual:false});
  if(!state || typeof state!=='object') state={version:1,sessions:[],queue:[],queueManual:false};
  if(!Array.isArray(state.sessions))state.sessions=[];
  if(!Array.isArray(state.queue))state.queue=[];
  let activeId=state.activeId||null, tickHandle=null, countdownHandle=null, countdownValue=0, countdownTarget=null, editingPreparedId=null, historySearchTimer=null, historyPage=1, pageSize=20, historyQuery='', historyFilters={range:'all',from:'',to:'',categories:[],statuses:[],priorities:[]}, historyOpen=false, historyDetailId=null, historyDraftId=null, taskDragId=null, savingTimer=null, lastRenderedSecond=-1;
  let audioContext=null,lastClockWall=Date.now(),lastClockMono=performance.now(),lastPersistWall=Date.now();
  const focusPage=$('page-focus');
  if(!focusPage)return;
  const toast=msg=>{if(window.showToast)window.showToast(msg);else{const t=$('toast');if(t){t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2400)}}};
  const persist=(immediate=false)=>{
    storageState='SAVING'; renderStorage();
    try {
      localStorage.setItem(STORE,JSON.stringify(state));
      storageState='UNSAVED';storageMessage='Lokal im Browser gespeichert · zentrale Synchronisierung ist noch nicht eingerichtet';
      renderStorage();
      return true;
    } catch(err) {
      storageState='SAVE ERROR';storageMessage='Lokales Speichern fehlgeschlagen. Browser-Speicher prüfen.';
      renderStorage();toast('Focus Mode konnte Änderungen nicht lokal speichern. Bitte Speicherplatz und Browserberechtigungen prüfen.');
      return false;
    }
  };
  const saveSoon=()=>{storageState='UNSAVED';storageMessage='Änderungen warten auf lokales Speichern';renderStorage();clearTimeout(savingTimer);savingTimer=setTimeout(()=>persist(),220);};
  const current=()=>state.sessions.find(s=>s.id===activeId)||null;
  const cat=id=>CATEGORIES.find(x=>x.id===id)||CATEGORIES[0];
  const pri=id=>PRIORITIES.find(x=>x.id===id)||PRIORITIES[2];
  const getImportant=()=>{const raw=read(IMPORTANT,{entries:[]});return Array.isArray(raw)?raw:(raw.entries||[]);};
  const getLegacyTasks=()=>{const t=read(TASKS,[]);return Array.isArray(t)?t:[];};
  const totalFocus=s=>moneyless((s.focusSegments||[]).reduce((n,x)=>n+(Number(x.durationMs)||0),0));
  const openSessions=()=>state.sessions.filter(s=>OPEN.has(s.status)&&!s.discarded);
  const sortedOpen=()=>openSessions().slice().sort((a,b)=>{
    const order={RUNNING:0,PAUSED:1,INTERRUPTED:2,EXPIRED:3,PREPARED:4};
    const d=(order[a.status]??9)-(order[b.status]??9);if(d)return d;
    if(a.status==='PREPARED')return (b.createdAt||0)-(a.createdAt||0);
    return (b.lastActiveAt||0)-(a.lastActiveAt||0);
  });
  const selectedOrFirst=()=>current()||sortedOpen()[0]||null;
  const categoryCount=(id,except)=>openSessions().filter(s=>s.category===id&&s.id!==except).length;
  const categoryOptions=selected=>CATEGORIES.map(c=>'<option value="'+c.id+'" '+(selected===c.id?'selected':'')+'>'+esc(c.name)+'</option>').join('');
  const priorityOptions=selected=>PRIORITIES.map(p=>'<option value="'+p.id+'" '+(selected===p.id?'selected':'')+'>'+esc(p.name)+'</option>').join('');
  const presetOptions=selected=>PRESETS.map(p=>'<option value="'+p.id+'" '+(selected===p.id?'selected':'')+'>'+esc(p.name)+' · '+p.focus+' / '+p.break+' min</option>').join('');
  const focusElapsed=(s,now)=>totalFocus(s)+(s.status==='RUNNING'&&s.phase==='focus'&&s.phaseStartedAt?Math.max(0,now-s.phaseStartedAt):0);
  const remain=(s,now)=>s.status==='RUNNING'&&s.deadline?Math.max(0,s.deadline-now):Math.max(0,s.remainingMs||0);
  const dateInZone=(ts,tz)=>{const parts=new Intl.DateTimeFormat('en-US',{timeZone:tz,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date(ts));const p=Object.fromEntries(parts.map(x=>[x.type,x.value]));return p.year+'-'+p.month+'-'+p.day;};
  const timeInZone=(ts,tz)=>new Intl.DateTimeFormat('de-DE',{timeZone:tz,hour:'2-digit',minute:'2-digit'}).format(new Date(ts));
  const splitRangeByDate=(start,end,tz)=>{const out=[];let cursor=start;while(cursor<end){const day=dateInZone(cursor,tz);if(dateInZone(Math.max(cursor,end-1),tz)===day){out.push({start:cursor,end,localDate:day});break;}let low=cursor,high=end;while(high-low>1000){const mid=Math.floor((low+high)/2);if(dateInZone(mid,tz)===day)low=mid;else high=mid;}const boundary=high<=cursor?Math.min(end,cursor+1000):high;out.push({start:cursor,end:boundary,localDate:day});cursor=boundary;}return out;};
  const event=(s,type,label,at=Date.now(),extra={})=>{s.timeline=s.timeline||[];const tz=zone();s.timeline.push({id:uid(),type,label,at,zone:tz,localDate:dateInZone(at,tz),localTime:timeInZone(at,tz),...extra});};
  const addFocusSegment=(s,start,end)=>{
    if(!start||!end||end<=start)return;
    s.focusSegments=s.focusSegments||[];const tz=s.phaseStartTimezone||zone();
    const segments=splitRangeByDate(start,end,tz).map(piece=>({id:uid(),...piece,durationMs:piece.end-piece.start,timezone:tz,localStart:timeInZone(piece.start,tz),localEnd:timeInZone(piece.end,tz)}));
    s.focusSegments.push(...segments);return segments;
  };
  const addBreakSegment=(s,start,end)=>{
    if(!start||!end||end<=start)return;
    s.breakSegments=s.breakSegments||[];const tz=s.phaseStartTimezone||zone();
    const segments=splitRangeByDate(start,end,tz).map(piece=>({id:uid(),...piece,durationMs:piece.end-piece.start,timezone:tz,localStart:timeInZone(piece.start,tz),localEnd:timeInZone(piece.end,tz)}));
    s.breakSegments.push(...segments);return segments;
  };
  const appendCurrentFocus=(s,now)=>{
    if(s.phase==='focus'&&s.status==='RUNNING'&&s.phaseStartedAt){addFocusSegment(s,s.phaseStartedAt,Math.min(now,s.deadline||now));}
    s.phaseStartedAt=null;
  };
  const tone=()=>{
    try{
      const C=window.AudioContext||window.webkitAudioContext;if(!C)return;
      audioContext=audioContext||new C();if(audioContext.state==='suspended')audioContext.resume();
      [0,0.24].forEach((delay,i)=>{const osc=audioContext.createOscillator(),gain=audioContext.createGain();osc.type='sine';osc.frequency.value=i?880:660;gain.gain.setValueAtTime(.0001,audioContext.currentTime+delay);gain.gain.exponentialRampToValueAtTime(.055,audioContext.currentTime+delay+.025);gain.gain.exponentialRampToValueAtTime(.0001,audioContext.currentTime+delay+.16);osc.connect(gain);gain.connect(audioContext.destination);osc.start(audioContext.currentTime+delay);osc.stop(audioContext.currentTime+delay+.18)});
    }catch{}
  };
  const notify=(title,body)=>{
    if(document.hidden&&'Notification'in window&&Notification.permission==='granted'){try{new Notification(title,{body,tag:'satyrn-focus-'+(current()?.id||'timer')})}catch{}}
  };
  const focusEnd=(s,now)=>{
    appendCurrentFocus(s,now);
    event(s,'focus-end','Fokusphase abgeschlossen',now);
    if(s.breakDurationMs>0){
      s.phase='break';s.status='RUNNING';s.phaseDurationMs=s.breakDurationMs;s.remainingMs=s.breakDurationMs;s.phaseStartedAt=now;s.phaseStartTimezone=zone();s.phaseStartLocalDate=dateInZone(now,s.phaseStartTimezone);s.deadline=now+s.breakDurationMs;
      event(s,'break-start','Pause gestartet',now);tone();notify('SATYRN Focus · Pause','Deine Fokusphase ist abgeschlossen. Zeit für eine Pause.');
    }else{
      s.phase='focus';s.status='EXPIRED';s.remainingMs=0;s.deadline=null;s.phaseStartedAt=null;setDistractionFree(false);
      event(s,'expired','Fokuszeit abgelaufen · nächste Fokusphase manuell starten',now);notify('SATYRN Focus · Fokusphase beendet','Starte die nächste Fokusphase, wenn du bereit bist.');
    }
    s.lastActiveAt=now;
  };
  const breakEnd=(s,now)=>{
    if(s.phaseStartedAt)addBreakSegment(s,s.phaseStartedAt,Math.min(now,s.deadline||now));
    s.status='EXPIRED';s.remainingMs=0;s.deadline=null;s.phaseStartedAt=null;setDistractionFree(false);
    event(s,'break-end','Pause beendet · nächste Fokusphase manuell starten',now);tone();notify('SATYRN Focus · Pause beendet','Du kannst die nächste Fokusphase manuell starten.');s.lastActiveAt=now;
  };
  const reconcile=(s,now=Date.now())=>{
    if(!s||s.status!=='RUNNING'||!s.deadline)return;
    while(s.status==='RUNNING'&&s.deadline&&now>=s.deadline){const boundary=s.deadline;if(s.phase==='focus')focusEnd(s,boundary);else breakEnd(s,boundary);}
    if(s.status==='RUNNING'&&s.deadline)s.remainingMs=Math.max(0,s.deadline-now);
  };
  const stopTick=()=>{if(tickHandle){clearInterval(tickHandle);tickHandle=null;}};
  const detectSystemSleep=s=>{
    const now=Date.now(),mono=performance.now(),wallGap=now-lastClockWall,monoGap=mono-lastClockMono;
    const slept=wallGap-monoGap>5000;
    lastClockWall=now;lastClockMono=mono;
    if(slept&&s?.status==='RUNNING'){
      const cutoff=Math.max(lastClockWall-wallGap,s.phaseStartedAt||0);
      if(s.phase==='focus')appendCurrentFocus(s,cutoff);else if(s.phase==='break'&&s.phaseStartedAt)addBreakSegment(s,s.phaseStartedAt,cutoff);
      s.remainingMs=Math.min(s.phaseDurationMs||s.originalFocusMs,Math.max(0,(s.deadline||cutoff)-cutoff));
      s.deadline=null;s.phaseStartedAt=null;s.status='PAUSED';s.lastActiveAt=cutoff;
      event(s,'system-sleep','System-Ruhezustand erkannt · Session automatisch pausiert',cutoff);
      setDistractionFree(false);stopTick();persist();renderAll();return true;
    }
    return false;
  };
  const ensureTick=()=>{stopTick();if(current()?.status==='RUNNING'){lastClockWall=Date.now();lastClockMono=performance.now();lastPersistWall=Date.now();tickHandle=setInterval(()=>{const s=current();if(!s)return;if(detectSystemSleep(s))return;reconcile(s);const now=Date.now(),sec=Math.ceil(remain(s,now)/1000);if(sec!==lastRenderedSecond){lastRenderedSecond=sec;renderCurrent();}if(now-lastPersistWall>=2000){lastPersistWall=now;persist();}if(s.status!=='RUNNING'){stopTick();persist();renderAll();}},250);}};
  const pauseSession=(s,kind='pause',now=Date.now())=>{
    if(!s||s.status!=='RUNNING')return;
    reconcile(s,now);
    if(s.status!=='RUNNING')return;
    if(s.phase==='focus')appendCurrentFocus(s,now);else if(s.phase==='break'&&s.phaseStartedAt)addBreakSegment(s,s.phaseStartedAt,Math.min(now,s.deadline||now));
    s.remainingMs=Math.max(0,s.deadline-now);s.deadline=null;s.phaseStartedAt=null;s.status=kind==='interrupt'?'INTERRUPTED':'PAUSED';s.lastActiveAt=now;s.lastActiveLocalDate=dateInZone(now,zone());if(kind==='interrupt')s.lastInterruptedAt=now;
    event(s,kind,kind==='interrupt'?'Session unterbrochen':'Session pausiert',now);
    persist();
  };
  const resumeSession=(s)=>{
    if(!s||!['PAUSED','INTERRUPTED'].includes(s.status))return;
    const wasInterrupted=s.status==='INTERRUPTED',now=Date.now(),interruptionMs=wasInterrupted&&s.lastInterruptedAt?Math.max(0,now-s.lastInterruptedAt):0;s.status='RUNNING';s.phaseStartedAt=now;s.phaseStartTimezone=zone();s.phaseStartLocalDate=dateInZone(now,s.phaseStartTimezone);s.deadline=now+Math.max(0,s.remainingMs||0);s.lastActiveAt=now;lastClockWall=now;lastClockMono=performance.now();
    event(s,'resume',wasInterrupted?'Session fortgesetzt · Unterbrechung '+duration(interruptionMs):'Session fortgesetzt',now,wasInterrupted?{interruptionDurationMs:interruptionMs,interruptedAt:s.lastInterruptedAt}:{});s.lastInterruptedAt=null;persist();setDistractionFree(true);ensureTick();renderAll();
  };
  const createSession=(config,status='PREPARED')=>{
    const now=Date.now(),focusMs=config.focusMs,breakMs=config.breakMs;
    const linked=config.linkedTask||null;
    const s={
      id:uid(),createdAt:now,lastActiveAt:now,updatedAt:now,status,phase:'focus',phaseDurationMs:focusMs,originalFocusMs:focusMs,breakDurationMs:breakMs,remainingMs:focusMs,deadline:null,phaseStartedAt:null,phaseStartTimezone:null,phaseStartLocalDate:null,
      name:config.name||config.goal||'Focus Session',goal:config.goal||config.name||'Fokusziel festlegen',category:config.category||'music',priority:config.priority||'important',preset:config.preset||'custom',
      linkedTask:linked,linkedTaskSnapshot:linked?{id:linked.id,title:linked.title,source:linked.source||'queue',category:linked.category||'',priority:linked.priority||''}:null,
      notes:'',distractions:[],focusSegments:[],timeline:[],subtasks:[],distractionFree:false
    };
    event(s,'created',status==='PREPARED'?'Session vorbereitet':'Session erstellt',now);state.sessions.unshift(s);activeId=s.id;state.activeId=s.id;persist();return s;
  };
  const startCountdown=s=>{
    if(!s||s.status!=='PREPARED'&&s.status!=='EXPIRED')return;
    try{const Audio=window.AudioContext||window.webkitAudioContext;if(Audio){audioContext=audioContext||new Audio();if(audioContext.state==='suspended')audioContext.resume();}}catch{}
    editingPreparedId=null;$('fmSetupSubmit').textContent='Session vorbereiten ＋';
    if(countdownHandle){clearInterval(countdownHandle);countdownHandle=null;}
    countdownTarget=s.id;countdownValue=3;renderCurrent();
    countdownHandle=setInterval(()=>{
      countdownValue--;
      if(countdownValue>0){renderCurrent();return;}
      clearInterval(countdownHandle);countdownHandle=null;countdownTarget=null;
      const live=state.sessions.find(x=>x.id===s.id);if(!live)return;
      const now=Date.now();live.status='RUNNING';live.phase='focus';live.phaseDurationMs=live.originalFocusMs;live.remainingMs=live.originalFocusMs;live.phaseStartedAt=now;live.phaseStartTimezone=zone();live.phaseStartLocalDate=dateInZone(now,live.phaseStartTimezone);live.deadline=now+live.originalFocusMs;live.lastActiveAt=now;
      event(live,'focus-start','Fokusphase gestartet',now);persist();lastClockWall=now;lastClockMono=performance.now();setDistractionFree(true);ensureTick();renderAll();
    },1000);
  };
  const setDistractionFree=on=>{
    const s=current();if(s)s.distractionFree=!!on;
    focusPage.classList.toggle('focus-distraction-free',!!on);
    const toggle=$('fmDistractionToggle');if(toggle){toggle.setAttribute('aria-pressed',String(!!on));toggle.textContent=on?'Distraction-Free aktiv':'Distraction-Free-Modus';}
    const queue=$('fmQueuePanel'),stats=$('fmStatsPanel'),recent=$('fmRecentHistory')?.closest('.fm-recent-history');if(queue)queue.hidden=!!on;if(stats)stats.hidden=!!on;if(recent)recent.hidden=!!on;
  };
  const renderStorage=()=>{
    const el=$('fmStorageState');if(!el)return;
    el.dataset.state=storageState.toLowerCase().replace(' ','-');
    el.textContent=storageState;
    el.title=storageMessage;
    const note=$('fmStorageNote');if(note)note.textContent=storageMessage;
  };
  const statusText=s=>({RUNNING:s.phase==='break'?'BREAK':'FOCUS',PAUSED:'PAUSED',INTERRUPTED:'INTERRUPTED',COMPLETED:'COMPLETED',EXPIRED:'EXPIRED',PREPARED:'PREPARED'}[s.status]||'NO SESSION');
  const statusClass=s=>s.status==='RUNNING'?'is-'+s.phase:s.status.toLowerCase();
  const sessionHint=s=>{
    if(!s)return 'Bereite eine Session vor oder wähle eine offene Session.';
    if(s.status==='PREPARED')return 'Bereit. Starte die Session bewusst über den Countdown.';
    if(s.status==='PAUSED')return 'Manuell pausiert. Mit Resume wird derselbe Zeitabschnitt fortgesetzt.';
    if(s.status==='INTERRUPTED')return 'Unterbrochen und gespeichert. Du kannst später fortsetzen.';
    if(s.status==='EXPIRED')return s.phase==='break'?'Pause beendet. Starte die nächste Fokusphase manuell.':'Fokuszeit beendet. Starte die nächste Fokusphase manuell.';
    if(s.status==='COMPLETED')return 'Diese Session wurde erfolgreich abgeschlossen.';
    return s.phase==='break'?'Erholungsphase läuft.':'Konzentriere dich auf dein aktuelles Fokusziel.';
  };
  const renderOpenSessions=()=>{
    const target=$('fmOpenSessions');if(!target)return;
    const list=sortedOpen();
    $('fmOpenCount').textContent=list.length+' offen · max. 2 je Kategorie';
    target.innerHTML=list.length?list.map(s=>{
      const active=s.id===activeId;
      return '<button type="button" class="fm-open-row '+(active?'is-selected':'')+'" data-fm-select="'+esc(s.id)+'"><span class="fm-open-dot '+statusClass(s)+'"></span><span class="fm-open-copy"><b>'+esc(s.name)+'</b><small>'+esc(s.goal)+' · '+esc(statusText(s))+'</small></span><span class="fm-open-time">'+(s.status==='RUNNING'?clock(remain(s,Date.now())):s.status==='PREPARED'?'READY':duration(totalFocus(s)))+'</span></button>';
    }).join(''):'<p class="fm-empty">Noch keine offenen Sessions. Bereite unten deine erste Session vor.</p>';
  };
  const renderCurrent=()=>{
    const s=current(),now=Date.now();
    const status=$('fmTimerStatus'),time=$('fmTimerTime'),elapsed=$('fmElapsed'),goal=$('fmCurrentGoal'),name=$('fmCurrentName'),ring=$('fmTimerRing'),hint=$('fmSessionHint'),actions=$('fmTimerActions'),start=$('fmStartPrepared');
    if(!s){
      $('fmNotes').disabled=true;$('fmDistractionInput').disabled=true;$('fmDistractionAdd').disabled=true;
      status.textContent='READY';status.dataset.state='ready';time.textContent='00:00:00';elapsed.textContent='0min Fokuszeit';goal.value='Noch kein Fokusziel ausgewählt';goal.disabled=true;name.textContent='Keine aktive Session';$('fmCurrentCategory').value='music';$('fmCurrentPriority').value='important';$('fmCurrentCategory').disabled=true;$('fmCurrentPriority').disabled=true;$('fmCurrentLink').textContent='Eigenes Fokusziel';$('fmNextBreak').textContent='Der Countdown startet erst nach deiner ausdrücklichen Freigabe.';$('fmNotes').value='';$('fmDistractionCount').textContent='0 Einträge';$('fmDistractionToggle').disabled=true;ring.style.setProperty('--fm-progress',0);hint.textContent=sessionHint(null);
      actions.innerHTML='';start.hidden=true;
    }else{
      $('fmNotes').disabled=false;$('fmDistractionInput').disabled=false;$('fmDistractionAdd').disabled=false;
      reconcile(s,now);
      const st=statusText(s);status.textContent=countdownTarget===s.id?String(countdownValue):st;status.dataset.state=countdownTarget===s.id?'countdown':statusClass(s);
      const left=countdownTarget===s.id?countdownValue*1000:remain(s,now);
      time.textContent=countdownTarget===s.id?'00:00:0'+countdownValue:clock(left);
      elapsed.textContent=duration(focusElapsed(s,now))+' Fokuszeit';
      if(document.activeElement!==goal)goal.value=s.goal;goal.disabled=!['RUNNING','PAUSED'].includes(s.status);name.textContent=s.name;$('fmCurrentCategory').value=s.category;$('fmCurrentPriority').value=s.priority;$('fmCurrentCategory').disabled=!['RUNNING','PAUSED'].includes(s.status);$('fmCurrentPriority').disabled=!['RUNNING','PAUSED'].includes(s.status);$('fmDistractionToggle').disabled=s.status==='COMPLETED';
      const progress=s.phase==='break'?1-(left/Math.max(1,s.breakDurationMs)):1-(left/Math.max(1,s.phaseDurationMs||s.originalFocusMs));
      ring.style.setProperty('--fm-progress',Math.max(0,Math.min(1,progress)));
      hint.textContent=sessionHint(s);
      const buttons=[];
      if(s.status==='RUNNING')buttons.push('<button class="fm-button fm-primary" data-fm-action="pause">Pause</button>');
      if(s.status==='PAUSED')buttons.push('<button class="fm-button fm-primary" data-fm-action="resume">Resume</button>');
      if(s.status==='INTERRUPTED')buttons.push('<button class="fm-button fm-primary" data-fm-action="resume">Resume</button>');
      if(s.status==='PREPARED'||s.status==='EXPIRED')start.hidden=false;else start.hidden=true;start.disabled=countdownTarget===s.id;
      if(['RUNNING','PAUSED'].includes(s.status)&&s.phase==='break')buttons.push('<button class="fm-button" data-fm-action="skip">Skip Break</button>');
      if(s.status==='RUNNING'&&s.phase==='focus'||s.status==='PAUSED'&&s.phase==='focus')buttons.push('<button class="fm-button fm-subtle" data-fm-action="reset">Reset</button>');
      if(['RUNNING','PAUSED'].includes(s.status)&&s.phase==='focus')buttons.push('<button class="fm-button fm-subtle" data-fm-action="complete">Complete Session</button>');
      if(['RUNNING','PAUSED'].includes(s.status))buttons.push('<button class="fm-button fm-danger-ghost" data-fm-action="interrupt">Interrupt</button>');
      if(s.status==='INTERRUPTED')buttons.push('<button class="fm-button fm-danger-ghost" data-fm-action="discard">Verwerfen</button>');
      actions.innerHTML=buttons.join('');
      if(s.status==='RUNNING'&&s.phase==='focus'&&s.breakDurationMs>0)$('fmNextBreak').textContent='Danach '+duration(s.breakDurationMs)+' Pause';
      else if(s.status==='RUNNING'&&s.phase==='break')$('fmNextBreak').textContent='Erholung · danach manuell weiter';
      else $('fmNextBreak').textContent=s.status==='PREPARED'?'Countdown startet erst nach Session starten':'Tatsächliche Fokuszeit: '+duration(totalFocus(s));
      const catLabel=$('fmCurrentCategory');catLabel.style.setProperty('--fm-cat',cat(s.category).color);
      const priLabel=$('fmCurrentPriority');priLabel.style.setProperty('--fm-pri',pri(s.priority).color);
      const note=$('fmNotes');if(note&&document.activeElement!==note)note.value=s.notes||'';
      const linked=s.linkedTaskSnapshot;const stillExists=linked&&(linked.source==='task'?getLegacyTasks().some(x=>String(x.id)===String(linked.id)):getImportant().some(x=>String(x.id)===String(linked.id)));$('fmCurrentLink').textContent=linked?(stillExists?'Verknüpft: '+linked.title:'Nicht mehr verfügbar · Snapshot: '+linked.title):'Eigenes Fokusziel';
      $('fmDistractionCount').textContent=(s.distractions||[]).length+' Einträge';
    }
    renderDistractions();
    renderOpenSessions();
    if(start)start.textContent=countdownTarget===s?.id?'Countdown läuft…':s?.status==='EXPIRED'?'Nächste Fokusphase starten':'Session starten';
  };
  const renderDistractions=()=>{
    const s=current(),target=$('fmDistractionList');if(!target)return;
    const list=s?.distractions||[];
    target.innerHTML=list.length?list.slice().sort((a,b)=>b.at-a.at).map(d=>'<div class="fm-distraction-row"><span><small>'+dateLabel(d.localDate||dateKey(d.at))+' · '+(d.localTime||timeLabel(d.at))+'</small><b>'+esc(d.text||'Ablenkung notiert')+'</b></span><span><button type="button" data-fm-edit-distraction="'+esc(d.id)+'">Bearbeiten</button><button type="button" data-fm-delete-distraction="'+esc(d.id)+'">×</button></span></div>').join(''):'<p class="fm-empty">Noch keine Ablenkungen festgehalten.</p>';$('fmDistractionCount').textContent=list.length+' Einträge';
  };
  const renderQueue=()=>{
    const target=$('fmQueueList');if(!target)return;
    const allLegacy=getLegacyTasks();const tasks=allLegacy.filter(t=>!t.done).map(t=>({id:String(t.id),title:t.title,priority:t.priority==='urgent'?'urgent':t.priority==='high'?'important':'provisional',source:'task',done:false,createdAt:Number(t.createdAt||t.id)||0,focusTimeMs:t.focusTimeMs||0,focusSessions:t.focusSessions||0,focusHistory:t.focusHistory||[],category:t.category||'',estimatedMinutes:t.estimatedMinutes||t.durationMinutes||0}));
    const allImportant=getImportant();const important=allImportant.filter(t=>!t.done&&!t.example).map(t=>({id:String(t.id),title:t.title,priority:t.priority||'provisional',source:'important',category:t.category,done:false,createdAt:new Date(t.created||Date.now()).getTime(),focusTimeMs:t.focusTimeMs||0,focusSessions:t.focusSessions||0,focusHistory:t.focusHistory||[],estimatedMinutes:t.estimatedMinutes||t.durationMinutes||0}));
    let list=[...tasks,...important];
    if(state.queueManual){
      const order=new Map(state.queue.map(x=>[String(x.id),Number(x.order)||0]));
      list.sort((a,b)=>(order.has(a.id)?order.get(a.id):Number.MAX_SAFE_INTEGER)-(order.has(b.id)?order.get(b.id):Number.MAX_SAFE_INTEGER)||pri(a.priority).rank-pri(b.priority).rank);
    }else list.sort((a,b)=>pri(a.priority).rank-pri(b.priority).rank||(a.createdAt||0)-(b.createdAt||0));
    $('fmQueueCount').textContent=list.length+' offene Aufgaben';
    const doneTasks=[...allLegacy.filter(t=>t.done),...allImportant.filter(t=>t.done&&!t.example)];$('fmQueueDoneSummary').textContent='Erledigte Aufgaben · '+doneTasks.length;$('fmQueueDoneList').innerHTML=doneTasks.length?doneTasks.map(t=>'<div class="fm-queue-done-row"><span>✓</span><b>'+esc(t.title)+'</b><small>'+esc(pri(t.priority==='high'?'important':t.priority||'provisional').name)+'</small></div>').join(''):'<p class="fm-empty">Noch keine erledigten Aufgaben.</p>';
    target.innerHTML=list.length?list.map(t=>{
      const linked=current()?.linkedTaskSnapshot?.id===t.id&&current()?.linkedTaskSnapshot?.source===t.source;
      const categoryInfo=t.source==='important'?(IMPORTANT_CATEGORIES[t.category]||{name:'Important',color:'#c1c6c4'}):(t.category?{name:t.category,color:'#8db5d0'}:null);const categoryName=categoryInfo?.name||'';const planned=t.estimatedMinutes?'<small>Geplant · '+duration(t.estimatedMinutes*60000)+'</small>':'';const lastWork=t.focusHistory?.slice().sort((a,b)=>b.at-a.at)[0];const work=t.focusSessions?'<details class="fm-task-activity"><summary>Worked on in Focus Mode · '+t.focusSessions+' Sessions · '+duration(t.focusTimeMs)+' focused'+(lastWork?' · zuletzt '+dateLabel(lastWork.localDate||dateKey(lastWork.at)):'')+'</summary><div>'+(t.focusHistory||[]).slice().sort((a,b)=>b.at-a.at).map(h=>'<small>'+dateLabel(h.localDate||dateKey(h.at))+' · '+(h.timezone?timeInZone(h.at,h.timezone):timeLabel(h.at))+' · '+duration(h.durationMs)+'</small>').join('')+'</div></details>':'';
      return '<div class="fm-queue-row" draggable="true" data-fm-drag="'+esc(t.id)+'"><span class="fm-drag-handle" aria-hidden="true">⠿</span><span class="fm-queue-copy"><b>'+esc(t.title)+'</b><small>'+esc(t.source==='important'?'Important':'Task Queue')+(categoryName?' · <span style="color:'+categoryInfo.color+'">'+esc(categoryName)+'</span>':'')+' · <span style="color:'+pri(t.priority).color+'">'+esc(pri(t.priority).name)+'</span></small>'+planned+work+'</span><button type="button" class="fm-queue-assign '+(linked?'is-linked':'')+'" data-fm-assign="'+esc(t.id)+'" data-fm-source="'+t.source+'">'+(linked?'Zugeordnet':'Als Fokusziel')+'</button></div>';
    }).join(''):'<p class="fm-empty">Keine offenen Aufgaben gefunden. Du kannst unten ein eigenes Fokusziel vorbereiten oder auf Important Aufgaben ergänzen.</p>';
  };
  const addDaysKey=(key,n)=>{const d=new Date(key+'T12:00:00');d.setDate(d.getDate()+n);return localISO(d);};
  const weekStartKey=key=>{const d=new Date(key+'T12:00:00'),wd=(d.getDay()+6)%7;d.setDate(d.getDate()-wd);return localISO(d);};
  const monthShiftKey=(key,n)=>{const d=new Date(key+'T12:00:00');d.setDate(1);d.setMonth(d.getMonth()+n);return localISO(d);};
  const renderStats=()=>{
    const now=new Date(),todayKey=localISO(now),tomorrowKey=addDaysKey(todayKey,1),thisWeek=weekStartKey(todayKey),nextWeek=addDaysKey(thisWeek,7),prevWeek=addDaysKey(thisWeek,-7),monthStart=todayKey.slice(0,7)+'-01',nextMonth=monthShiftKey(monthStart,1),prevMonth=monthShiftKey(monthStart,-1);
    const storedSegments=state.sessions.flatMap(s=>(s.focusSegments||[]).map(seg=>({...seg,category:s.category})));
    const live=current(),liveSegments=live&&live.status==='RUNNING'&&live.phase==='focus'&&live.phaseStartedAt?splitRangeByDate(live.phaseStartedAt,Date.now(),live.phaseStartTimezone||zone()).map(seg=>({...seg,category:live.category})):[],allSegments=storedSegments.concat(liveSegments);
    const sumRange=(list,from,to)=>list.filter(seg=>(seg.localDate||dateKey(seg.start))>=from&&(seg.localDate||dateKey(seg.start))<to).reduce((n,seg)=>n+(seg.durationMs||seg.end-seg.start||0),0);
    const dayMs=sumRange(allSegments,todayKey,tomorrowKey),weekMs=sumRange(allSegments,thisWeek,nextWeek),prevWeekMs=sumRange(storedSegments,prevWeek,thisWeek),monthMs=sumRange(allSegments,monthStart,nextMonth),prevMonthMs=sumRange(storedSegments,prevMonth,monthStart);
    const completedToday=state.sessions.filter(s=>s.status==='COMPLETED'&&(s.completedLocalDate||dateKey(s.completedAt||0))===todayKey),completedWeek=state.sessions.filter(s=>s.status==='COMPLETED'&&(s.completedLocalDate||dateKey(s.completedAt||0))>=thisWeek&&(s.completedLocalDate||dateKey(s.completedAt||0))<nextWeek),completedMonth=state.sessions.filter(s=>s.status==='COMPLETED'&&(s.completedLocalDate||dateKey(s.completedAt||0))>=monthStart&&(s.completedLocalDate||dateKey(s.completedAt||0))<nextMonth),interruptedToday=state.sessions.filter(s=>s.status==='INTERRUPTED'&&(s.lastActiveLocalDate||dateKey(s.lastActiveAt||0))===todayKey);
    const avgToday=completedToday.length?completedToday.reduce((n,x)=>n+totalFocus(x),0)/completedToday.length:0;
    $('fmStatToday').textContent=duration(dayMs);$('fmStatWeek').textContent=duration(weekMs);$('fmStatMonth').textContent=duration(monthMs);
    $('fmStatCompleted').textContent=String(completedToday.length);$('fmStatInterrupted').textContent=String(interruptedToday.length);$('fmStatAverage').textContent=duration(avgToday);$('fmStatWeekSessions').textContent=completedWeek.length+' Sessions abgeschlossen';$('fmStatMonthSessions').textContent=completedMonth.length+' Sessions abgeschlossen';
    $('fmStatWeekCompare').textContent=(prevWeekMs?((weekMs-prevWeekMs)/prevWeekMs*100>=0?'+':'')+((weekMs-prevWeekMs)/prevWeekMs*100).toFixed(0)+' %':'Noch kein Vorwochenvergleich');
    $('fmStatMonthCompare').textContent='Ø / Tag '+duration(monthMs/Math.max(1,now.getDate()))+' · '+(prevMonthMs?((monthMs-prevMonthMs)/prevMonthMs*100>=0?'+':'')+((monthMs-prevMonthMs)/prevMonthMs*100).toFixed(0)+' % zum Vormonat':'kein Vormonatsvergleich');
    const days=[];for(let i=6;i>=0;i--){const key=addDaysKey(todayKey,-i),ms=sumRange(allSegments,key,addDaysKey(key,1));days.push({label:new Date(key+'T12:00:00').toLocaleDateString('de-DE',{weekday:'short'}),ms});}
    const max=Math.max(1,...days.map(x=>x.ms));
    $('fmWeekChart').innerHTML=days.map(x=>'<div class="fm-chart-col"><span>'+duration(x.ms)+'</span><i><b style="height:'+Math.max(2,x.ms/max*100)+'%"></b></i><small>'+x.label+'</small></div>').join('');
    const categoryData=CATEGORIES.map(c=>({c,ms:allSegments.filter(seg=>seg.category===c.id).reduce((n,seg)=>n+(seg.durationMs||seg.end-seg.start||0),0)})).filter(x=>x.ms>0).sort((a,b)=>b.ms-a.ms);
    const catTotal=categoryData.reduce((n,x)=>n+x.ms,0);
    $('fmCategoryStats').innerHTML=categoryData.length?categoryData.map(x=>'<div class="fm-category-stat"><span><i style="background:'+x.c.color+'"></i>'+esc(x.c.name)+'</span><b>'+duration(x.ms)+'</b><small>'+Math.round(x.ms/catTotal*100)+' %</small></div>').join(''):'<p class="fm-empty">Kategorien-Auswertung erscheint nach den ersten Fokusabschnitten.</p>';
  };
  const renderHistory=()=>{
    const target=$('fmHistoryList');if(!target)return;
    const q=historyQuery.trim().toLocaleLowerCase('de').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    let list=state.sessions.filter(s=>['COMPLETED','INTERRUPTED'].includes(s.status));
    list=list.filter(s=>{
      const hay=(s.name+' '+s.goal+' '+(s.notes||'')+' '+cat(s.category).name+' '+pri(s.priority).name+' '+(s.linkedTaskSnapshot?.title||' ')+' '+(s.distractions||[]).map(x=>x.text||'').join(' ')).toLocaleLowerCase('de').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
      if(q&&!hay.includes(q))return false;
      const lastEvent=(s.timeline||[]).slice().sort((a,b)=>b.at-a.at)[0],last=lastEvent?.at||s.createdAt||0,date=lastEvent?.localDate||dateKey(last);
      if(historyFilters.range==='today'&&date!==localISO(new Date()))return false;
      if(historyFilters.range==='7'&&date<addDaysKey(localISO(new Date()),-6))return false;
      if(historyFilters.range==='30'&&date<addDaysKey(localISO(new Date()),-29))return false;
      if(historyFilters.range==='month'&&date.slice(0,7)!==localISO(new Date()).slice(0,7))return false;
      if(historyFilters.range==='custom'&&((historyFilters.from&&date<historyFilters.from)||(historyFilters.to&&date>historyFilters.to)))return false;
      if(historyFilters.categories.length&&!historyFilters.categories.includes(s.category))return false;
      if(historyFilters.statuses.length&&!historyFilters.statuses.includes(s.status))return false;
      if(historyFilters.priorities.length&&!historyFilters.priorities.includes(s.priority))return false;
      return true;
    }).sort((a,b)=>Math.max(...(b.timeline||[]).map(e=>e.at||0),b.createdAt||0)-Math.max(...(a.timeline||[]).map(e=>e.at||0),a.createdAt||0));
    $('fmHistoryTotal').textContent=String(list.length);
    $('fmHistoryFocus').textContent=duration(list.reduce((n,s)=>n+totalFocus(s),0));
    $('fmHistoryCompleted').textContent=String(list.filter(s=>s.status==='COMPLETED').length);
    const pages=Math.max(1,Math.ceil(list.length/pageSize));historyPage=Math.min(historyPage,pages);
    const start=(historyPage-1)*pageSize,shown=list.slice(start,start+pageSize);
    if(!list.length){target.innerHTML='<div class="fm-history-empty"><b>'+(state.sessions.some(s=>['COMPLETED','INTERRUPTED'].includes(s.status))?'Keine Sessions entsprechen deiner Suche oder den ausgewählten Filtern.':'Deine Session History ist noch leer.')+'</b><p>'+(state.sessions.length?'Passe die Suche oder Filter an.':'Abgeschlossene und unterbrochene Sessions werden hier gesammelt.')+'</p></div>';}
    else{
      let previous='';
      target.innerHTML=shown.map(s=>{
        const latest=(s.timeline||[]).slice().sort((a,b)=>b.at-a.at)[0],at=latest?.at||s.createdAt||0,date=latest?.localDate||dateKey(at),heading=date!==previous?'<div class="fm-history-date">'+dateLabel(date)+'</div>':'';previous=date;
        return heading+'<button type="button" class="fm-history-row" data-fm-history-detail="'+esc(s.id)+'"><span class="fm-history-state '+s.status.toLowerCase()+'">'+(s.status==='COMPLETED'?'✓':'Ⅱ')+'</span><span class="fm-history-copy"><b>'+esc(s.name)+'</b><small>'+esc(s.goal)+' · <span style="color:'+cat(s.category).color+'">'+esc(cat(s.category).name)+'</span> · <span style="color:'+pri(s.priority).color+'">'+esc(pri(s.priority).name)+'</span> · geplant '+duration(s.originalFocusMs)+' · '+(s.focusSegments||[]).length+' Fokusabschnitte · '+dateLabel(date)+'</small></span><span class="fm-history-duration">'+duration(totalFocus(s))+'</span><span class="fm-history-badge">'+s.status+'</span></button>';
      }).join('');
    }
    $('fmHistoryPageLabel').textContent='Seite '+historyPage+' / '+pages;$('fmHistoryFilterSummary').textContent='Neueste zuerst · '+list.length+' Treffer';
    $('fmHistoryPageNumbers').innerHTML=Array.from({length:pages},(_,i)=>i+1).map(n=>'<button type="button" class="fm-page-number '+(n===historyPage?'active':'')+'" data-fm-page="'+n+'">'+n+'</button>').join('');
    $('fmHistoryPrev').disabled=historyPage<=1;$('fmHistoryNext').disabled=historyPage>=pages;
    $('fmHistoryPageSize').value=String(pageSize);
  };
  const renderRecentHistory=()=>{const target=$('fmRecentHistory');if(!target)return;const list=state.sessions.filter(s=>['COMPLETED','INTERRUPTED'].includes(s.status)).slice().sort((a,b)=>Math.max(...(b.timeline||[]).map(e=>e.at||0),b.createdAt||0)-Math.max(...(a.timeline||[]).map(e=>e.at||0),a.createdAt||0)).slice(0,4);target.innerHTML=list.length?list.map(s=>{const last=Math.max(...(s.timeline||[]).map(e=>e.at||0),s.createdAt||0);return '<article class="fm-recent-row"><span class="fm-recent-state '+(s.status==='COMPLETED'?'is-complete':'is-interrupted')+'">'+(s.status==='COMPLETED'?'✓':'Ⅱ')+'</span><span class="fm-recent-copy"><b>'+esc(s.name)+'</b><small>'+esc(s.goal)+' · '+dateLabel(dateKey(last))+'</small></span><strong>'+duration(totalFocus(s))+'</strong></article>';}).join(''):'<p class="fm-empty">Noch keine abgeschlossenen oder unterbrochenen Sessions.</p>';};
  const renderAll=()=>{renderCurrent();renderQueue();renderStats();renderHistory();renderRecentHistory();renderStorage();};
  const prepareConfig=()=>{
    const goal=$('fmGoal').value.trim(),name=$('fmName').value.trim()||goal;
    const preset=PRESETS.find(x=>x.id===$('fmPreset').value)||PRESETS[0];
    const focusMin=preset.id==='custom'?Number($('fmCustomFocus').value):preset.focus;
    const breakMin=preset.id==='custom'?Number($('fmCustomBreak').value):preset.break;
    if(!goal){toast('Bitte zuerst ein Fokusziel festlegen.');$('fmGoal').focus();return null;}
    if(!Number.isFinite(focusMin)||focusMin<1||focusMin>1440||!Number.isFinite(breakMin)||breakMin<0||breakMin>240){toast('Bitte gültige Fokus- und Pausendauern eintragen.');return null;}
    const category=$('fmCategory').value,priority=$('fmPriority').value;
    if(categoryCount(category,editingPreparedId)>=2){toast('In dieser Kategorie sind bereits zwei offene Sessions vorhanden.');return null;}
    const linkedValue=$('fmLinkedTask').value;
    let linkedTask=null;
    if(linkedValue){const [source,...idParts]=linkedValue.split(':');const linkedId=idParts.join(':');const found=source==='task'?getLegacyTasks().find(x=>String(x.id)===linkedId):getImportant().find(x=>String(x.id)===linkedId);if(found)linkedTask={id:String(found.id),title:found.title,source,category:found.category||'',priority:found.priority||''};}
    return {goal,name,category,priority,preset:preset.id,focusMs:focusMin*60000,breakMs:breakMin*60000,linkedTask};
  };
  const fillLinkedOptions=()=>{
    const select=$('fmLinkedTask');if(!select)return;
    const options=[...getLegacyTasks().filter(t=>!t.done).map(t=>({id:String(t.id),title:t.title,source:'task'})),...getImportant().filter(t=>!t.done&&!t.example).map(t=>({id:String(t.id),title:t.title,source:'important'}))];
    select.innerHTML='<option value="">Eigenes Fokusziel</option>'+options.map(t=>'<option value="'+t.source+':'+esc(t.id)+'">'+esc(t.title)+' · '+(t.source==='task'?'Task Queue':'Important')+'</option>').join('');
  };
  const assignTask=(id,source)=>{
    const found=source==='task'?getLegacyTasks().find(x=>String(x.id)===id):getImportant().find(x=>String(x.id)===id);
    if(!found)return;
    let s=current();
    if(!s||s.status==='COMPLETED'||s.discarded){toast('Wähle zuerst eine vorbereitete oder offene Session.');return;}
    s.linkedTask={id:String(found.id),source,title:found.title};s.linkedTaskSnapshot={id:String(found.id),source,title:found.title,category:found.category||'',priority:found.priority||''};s.goal=found.title;s.name=s.name||found.title;s.lastActiveAt=Date.now();$('fmGoal').value=found.title;$('fmLinkedTask').value=source+':'+String(found.id);if(s.status==='PREPARED')loadSetup(s);persist();renderAll();toast('Fokusziel zugeordnet.');
  };
  const updateTaskTime= s=>{
    if(!s.linkedTaskSnapshot||s.taskTimeLogged)return;
    const snap=s.linkedTaskSnapshot;
    if(snap.source==='task'){
      const list=getLegacyTasks(),task=list.find(t=>String(t.id)===String(snap.id));
      if(task){const ms=totalFocus(s);task.focusTimeMs=(task.focusTimeMs||0)+ms;task.focusSessions=(task.focusSessions||0)+1;task.focusHistory=task.focusHistory||[];const byDay=new Map();(s.focusSegments||[]).forEach(seg=>{const key=seg.localDate||dateKey(seg.start),old=byDay.get(key)||{at:seg.start,durationMs:0,timezone:seg.timezone||zone()};old.at=Math.min(old.at,seg.start);old.durationMs+=seg.durationMs;byDay.set(key,old);});byDay.forEach((h,localDate)=>task.focusHistory.push({sessionId:s.id,at:h.at,localDate,durationMs:h.durationMs,timezone:h.timezone}));try{localStorage.setItem(TASKS,JSON.stringify(list));s.taskTimeLogged=true;}catch{toast('Die Aufgabenaktivität konnte nicht gespeichert werden.');}}
    }else if(snap.source==='important'){
      const raw=read(IMPORTANT,{entries:[]}),entries=Array.isArray(raw)?raw:(raw.entries||[]),task=entries.find(t=>String(t.id)===String(snap.id));
      if(task){const ms=totalFocus(s);task.focusTimeMs=(task.focusTimeMs||0)+ms;task.focusSessions=(task.focusSessions||0)+1;task.focusHistory=task.focusHistory||[];const byDay=new Map();(s.focusSegments||[]).forEach(seg=>{const key=seg.localDate||dateKey(seg.start),old=byDay.get(key)||{at:seg.start,durationMs:0,timezone:seg.timezone||zone()};old.at=Math.min(old.at,seg.start);old.durationMs+=seg.durationMs;byDay.set(key,old);});byDay.forEach((h,localDate)=>task.focusHistory.push({sessionId:s.id,at:h.at,localDate,durationMs:h.durationMs,timezone:h.timezone}));try{localStorage.setItem(IMPORTANT,JSON.stringify(Array.isArray(raw)?entries:{...raw,entries}));s.taskTimeLogged=true;}catch{toast('Die Aufgabenaktivität konnte nicht gespeichert werden.');}}
    }
  };
  const finish=(s,now=Date.now())=>{
    if(!s)return;
    reconcile(s,now);
    if(!['RUNNING','PAUSED'].includes(s.status)||s.phase!=='focus')return;
    if(s.status==='RUNNING')appendCurrentFocus(s,now);
    s.status='COMPLETED';s.deadline=null;s.phaseStartedAt=null;s.remainingMs=0;s.completedAt=now;s.completedLocalDate=dateInZone(now,zone());s.lastActiveAt=now;s.lastActiveLocalDate=s.completedLocalDate;
    event(s,'completed','Session erfolgreich abgeschlossen',now);
    updateTaskTime(s);
    setDistractionFree(false);persist();stopTick();renderAll();toast('Session erfolgreich abgeschlossen.');
  };
  const interrupt=(s)=>{if(!s)return;if(s.status==='RUNNING')pauseSession(s,'interrupt');else if(s.status==='PAUSED'){s.status='INTERRUPTED';s.lastActiveAt=Date.now();s.lastActiveLocalDate=dateInZone(s.lastActiveAt,zone());s.lastInterruptedAt=s.lastActiveAt;event(s,'interrupt','Session unterbrochen',s.lastActiveAt);persist();}setDistractionFree(false);stopTick();persist();renderAll();};
  const switchSession=id=>{
    if(id===activeId){if(countdownTarget===id)return;if(current()?.status==='PREPARED')loadSetup(current());return;}
    if(countdownHandle){clearInterval(countdownHandle);countdownHandle=null;countdownTarget=null;countdownValue=0;}
    const old=current();if(old&&old.status==='RUNNING')pauseSession(old,'pause');
    activeId=id;state.activeId=id;const next=current();if(next?.status==='RUNNING')pauseSession(next,'pause');
    if(next)next.lastActiveAt=Date.now();if(next?.status==='PREPARED')loadSetup(next);else{editingPreparedId=null;$('fmSetupSubmit').textContent='Session vorbereiten ＋';}
    setDistractionFree(!!next?.distractionFree&&next.status==='RUNNING');persist();stopTick();renderAll();
  };
  const editHistory=(s)=>{
    historyDraftId=s.id;
    $('fmHistoryEditName').value=s.name;$('fmHistoryEditGoal').value=s.goal;$('fmHistoryEditCategory').value=s.category;$('fmHistoryEditPriority').value=s.priority;$('fmHistoryEditNotes').value=s.notes||'';
    $('fmHistoryEditDialog').hidden=false;
  };
  const closeHistoryDetail=()=>{$('fmHistoryDetailDialog').hidden=true;historyDetailId=null;};
  const showHistoryDetail=id=>{
    const s=state.sessions.find(x=>x.id===id);if(!s)return;historyDetailId=id;
    $('fmHistoryDetailTitle').textContent=s.name;$('fmHistoryDetailGoal').textContent=s.goal;
    const latestEvent=(s.timeline||[]).slice().sort((a,b)=>b.at-a.at)[0];$('fmHistoryDetailMeta').textContent=statusText(s)+' · '+dateLabel(latestEvent?.localDate||dateKey(latestEvent?.at||s.createdAt||0))+' · '+cat(s.category).name+' · '+pri(s.priority).name;
    $('fmHistoryDetailStats').innerHTML='<div><small>FOKUSZEIT</small><b>'+duration(totalFocus(s))+'</b></div><div><small>GEPLANTE DAUER</small><b>'+duration(s.originalFocusMs)+'</b></div><div><small>FOKUSABSCHNITTE</small><b>'+(s.focusSegments||[]).length+'</b></div>';
    $('fmHistoryTimeline').innerHTML=(s.timeline||[]).concat((s.focusSegments||[]).map(seg=>({type:'focus-segment',label:'Fokusabschnitt · '+duration(seg.durationMs),at:seg.start,end:seg.end,zone:seg.timezone,localDate:seg.localDate,localTime:seg.localStart,localEnd:seg.localEnd})),(s.breakSegments||[]).map(seg=>({type:'break-segment',label:'Pausenabschnitt · '+duration(seg.durationMs),at:seg.start,end:seg.end,zone:seg.timezone,localDate:seg.localDate,localTime:seg.localStart,localEnd:seg.localEnd}))).sort((a,b)=>a.at-b.at).map(e=>'<div class="fm-timeline-item"><i class="'+esc(e.type)+'"></i><span><b>'+esc(e.label)+'</b><small>'+dateLabel(e.localDate||dateKey(e.at))+' · '+(e.localTime||timeLabel(e.at))+(e.end?' – '+(e.localEnd||timeLabel(e.end)):'')+' · '+esc(e.zone||'')+'</small></span></div>').join('');
    $('fmHistoryDetailNotes').textContent=s.notes||'Keine Notizen gespeichert.';
    $('fmHistoryDetailDistractions').innerHTML=(s.distractions||[]).map(d=>'<div class="fm-distraction-row"><span><small>'+dateLabel(d.localDate||dateKey(d.at))+' · '+(d.localTime||timeLabel(d.at))+'</small><b>'+esc(d.text)+'</b></span><span><button type="button" data-fm-history-edit-distraction="'+esc(d.id)+'">Bearbeiten</button><button type="button" data-fm-history-delete-distraction="'+esc(d.id)+'">×</button></span></div>').join('')||'<p class="fm-empty">Keine Ablenkungen protokolliert.</p>';
    $('fmHistoryDetailLink').textContent=s.linkedTaskSnapshot?(s.linkedTaskSnapshot.title+' · '+(s.linkedTaskSnapshot.source==='important'?'Important':'Task Queue')):'Kein Aufgabenlink';const linkedExists=s.linkedTaskSnapshot&&(s.linkedTaskSnapshot.source==='important'?getImportant().some(x=>String(x.id)===String(s.linkedTaskSnapshot.id)):getLegacyTasks().some(x=>String(x.id)===String(s.linkedTaskSnapshot.id)));$('fmHistoryOpenLinked').hidden=!linkedExists;$('fmHistoryOpenLinked').dataset.page=s.linkedTaskSnapshot?.source==='important'?'important':'projects';
    $('fmHistoryDetailDialog').hidden=false;
  };
  const resetHistoryFilters=()=>{historyQuery='';$('fmHistoryFrom').closest('.fm-history-date-fields').dataset.custom='false';historyFilters={range:'all',from:'',to:'',categories:[],statuses:[],priorities:[]};historyPage=1;renderHistoryControls();renderHistory();};
  const renderActiveFilters=()=>{
    const chips=[];
    const add=(type,value,label)=>chips.push('<button type="button" class="fm-filter-chip" data-fm-clear-filter="'+type+'" data-value="'+esc(value||'')+'">'+esc(label)+' <span>×</span></button>');
    if(historyQuery)add('search','', 'Suche: '+historyQuery);
    if(historyFilters.range!=='all')add('range','',historyFilters.range==='today'?'Heute':historyFilters.range==='7'?'Letzte 7 Tage':historyFilters.range==='30'?'Letzte 30 Tage':historyFilters.range==='month'?'Dieser Monat':'Benutzerdefiniert');
    if(historyFilters.range==='custom'&&(historyFilters.from||historyFilters.to))add('dates','',(historyFilters.from||'…')+' – '+(historyFilters.to||'…'));
    historyFilters.categories.forEach(id=>add('category',id,'Kategorie: '+cat(id).name));
    historyFilters.statuses.forEach(id=>add('status',id,'Status: '+(id==='COMPLETED'?'Abgeschlossen':'Unterbrochen')));
    historyFilters.priorities.forEach(id=>add('priority',id,'Priorität: '+pri(id).name));
    $('fmHistoryActiveFilters').innerHTML=chips.join('');
    $('fmHistoryReset').hidden=chips.length===0;
  };
  const renderHistoryControls=()=>{
    $('fmHistorySearch').value=historyQuery;$('fmHistoryRange').value=historyFilters.range;$('fmHistoryFrom').value=historyFilters.from;$('fmHistoryTo').value=historyFilters.to;
    $('fmHistoryFrom').closest('.fm-history-date-fields').dataset.custom=String(historyFilters.range==='custom');
    $('fmHistoryCategoryFilters').innerHTML=CATEGORIES.map(c=>'<label style="color:'+c.color+'"><input type="checkbox" data-fm-filter-cat="'+c.id+'" '+(historyFilters.categories.length===0||historyFilters.categories.includes(c.id)?'checked':'')+'><span>'+esc(c.name)+'</span></label>').join('');
    $('fmHistoryStatusFilters').innerHTML=['COMPLETED','INTERRUPTED'].map(x=>'<label><input type="checkbox" data-fm-filter-status="'+x+'" '+(historyFilters.statuses.length===0||historyFilters.statuses.includes(x)?'checked':'')+'><span>'+(x==='COMPLETED'?'Abgeschlossen':'Unterbrochen')+'</span></label>').join('');
    $('fmHistoryPriorityFilters').innerHTML=PRIORITIES.map(p=>'<label style="color:'+p.color+'"><input type="checkbox" data-fm-filter-priority="'+p.id+'" '+(historyFilters.priorities.length===0||historyFilters.priorities.includes(p.id)?'checked':'')+'><span>'+esc(p.name)+'</span></label>').join('');
    renderActiveFilters();
  };
  const leaveHistory=()=>{historyOpen=false;resetHistoryFilters();$('fmHistoryView').hidden=true;$('fmMainView').hidden=false;};
  const openHistory=()=>{historyOpen=true;historyPage=1;$('fmMainView').hidden=true;$('fmHistoryView').hidden=false;renderHistoryControls();renderHistory();window.scrollTo({top:0,behavior:'smooth'});};
  const syncPresetCards=()=>{const value=$('fmPreset')?.value||'pomodoro';document.querySelectorAll('#fmPresetCards [data-fm-preset]').forEach(btn=>{const active=btn.dataset.fmPreset===value;btn.classList.toggle('is-selected',active);btn.setAttribute('aria-pressed',String(active));});if($('fmCustomDuration'))$('fmCustomDuration').hidden=value!=='custom';};
  const loadSetup=s=>{if(!s||s.status!=='PREPARED')return;editingPreparedId=s.id;$('fmGoal').value=s.goal;$('fmName').value=s.name;$('fmCategory').value=s.category;$('fmPriority').value=s.priority;$('fmPreset').value=s.preset||'custom';syncPresetCards();$('fmCustomFocus').value=Math.round(s.originalFocusMs/60000);$('fmCustomBreak').value=Math.round(s.breakDurationMs/60000);$('fmLinkedTask').value=s.linkedTaskSnapshot?.source&&s.linkedTaskSnapshot?.id?s.linkedTaskSnapshot.source+':'+s.linkedTaskSnapshot.id:'';$('fmSetupSubmit').textContent='Änderungen speichern';};
  const useTemplate=s=>{
    const config={name:s.name,goal:s.goal,category:s.category,priority:s.priority,preset:s.preset,focusMs:s.originalFocusMs,breakMs:s.breakDurationMs,linkedTask:null};
    if(categoryCount(config.category)>=2){toast('In dieser Kategorie sind bereits zwei offene Sessions vorhanden.');return;}
    const next=createSession(config,'PREPARED');activeId=next.id;state.activeId=activeId;refreshLinkedOptions();loadSetup(next);leaveHistory();renderAll();toast('Neue vorbereitete Session aus Vorlage erstellt.');
  };
  const resetSession=s=>{
    if(!s||s.phase!=='focus'||!['RUNNING','PAUSED'].includes(s.status))return;
    const wasRunning=s.status==='RUNNING',now=Date.now();
    if(wasRunning){reconcile(s,now);if(s.status!=='RUNNING'||s.phase!=='focus')return;appendCurrentFocus(s,now);}
    s.phase='focus';s.phaseDurationMs=s.originalFocusMs;s.remainingMs=s.originalFocusMs;s.deadline=wasRunning?now+s.originalFocusMs:null;s.phaseStartedAt=wasRunning?now:null;s.phaseStartTimezone=wasRunning?zone():null;s.phaseStartLocalDate=wasRunning?dateInZone(now,s.phaseStartTimezone):null;s.status=wasRunning?'RUNNING':'PAUSED';s.lastActiveAt=now;
    event(s,'reset','Fokusphase zurückgesetzt · bisherige Fokuszeit erhalten',now);persist();ensureTick();renderAll();
  };
  const handleAction=(action)=>{
    const s=current();if(!s)return;
    if(action==='pause'){pauseSession(s,'pause');stopTick();renderAll();}
    if(action==='resume')resumeSession(s);
    if(action==='interrupt'){if(confirm('Session unterbrechen? Sie bleibt gespeichert und kann später fortgesetzt werden.'))interrupt(s);}
    if(action==='discard'){if(confirm('Diese unterbrochene Session endgültig verwerfen? Sie wird aus den offenen Sessions entfernt, bleibt aber in der History dokumentiert.')){updateTaskTime(s);s.status='INTERRUPTED';s.discarded=true;s.discardedAt=Date.now();event(s,'discarded','Session verworfen',s.discardedAt);activeId=sortedOpen()[0]?.id||null;state.activeId=activeId;persist();renderAll();}}
    if(action==='reset'){if(confirm('Fokusphase auf die ursprüngliche Dauer zurücksetzen? Die bereits geleistete Fokuszeit bleibt als eigener Abschnitt erhalten.'))resetSession(s);}
    if(action==='complete'){if(confirm('Session jetzt erfolgreich abschließen?'))finish(s);}
    if(action==='skip'){const now=Date.now();if(['RUNNING','PAUSED'].includes(s.status)&&s.phase==='break'){if(s.status==='RUNNING'&&s.phaseStartedAt)addBreakSegment(s,s.phaseStartedAt,Math.min(now,s.deadline||now));s.status='EXPIRED';s.remainingMs=0;s.deadline=null;s.phaseStartedAt=null;s.lastActiveAt=now;event(s,'skip-break','Pause übersprungen · nächste Fokusphase manuell starten',now);setDistractionFree(false);stopTick();persist();renderAll();}}
  };
  const buildMarkup=()=>{
    const html = String.raw`<section class="fm-mobile-capture"><span class="fm-kicker">SATYRN HQ · QUICK CAPTURE</span><h2>Idee festhalten</h2><p>Die mobile Ansicht ist bewusst auf schnelles Festhalten beschränkt. Fokus-Sessions planst und startest du am Desktop.</p><textarea id="fmMobileIdea" class="fm-input" rows="5" maxlength="600" placeholder="Idee, Aufgabe oder nächsten Schritt notieren …"></textarea><button type="button" id="fmMobileSave" class="fm-button fm-primary">In Task Queue speichern <span>＋</span></button></section>
    <div class="fm-page-head"><div><div class="eyebrow">SATYRN HQ · FOCUS WORKSPACE</div><h1>Focus <em>Center.</em></h1><p>Plane deine Arbeit, starte fokussierte Sessions und behalte Fortschritt und Verlauf an einem Ort im Blick.</p></div><div class="fm-head-actions"><button type="button" class="fm-history-open" id="fmHistoryOpen">◷ <span>History</span></button><span class="fm-storage-pill" id="fmStorageState" data-state="saved">SAVED</span></div></div>
      <div class="fm-main-view" id="fmMainView">
        <section class="fm-current glass-card" aria-labelledby="fmCurrentHeading">
          <div class="fm-current-top"><div><span class="fm-kicker">01 · CURRENT SESSION</span><h2 id="fmCurrentHeading">Dein Fokus im Mittelpunkt</h2></div><div class="fm-current-meta"><label class="fm-current-select-label">Kategorie<select id="fmCurrentCategory" class="fm-meta-select"><option value="music">Music Production</option><option value="mixing">Mixing &amp; Mastering</option><option value="content">Content Creation</option><option value="business">Business</option><option value="learning">Learning</option><option value="organisation">Organisation</option></select></label><label class="fm-current-select-label">Priorität<select id="fmCurrentPriority" class="fm-meta-select"><option value="urgent">Dringend</option><option value="important">Wichtig</option><option value="provisional">Vorläufig</option><option value="indefinite">Unbefristet</option></select></label></div></div>
          <div class="fm-current-grid">
            <div class="fm-timer-column">
              <div class="fm-timer-ring" id="fmTimerRing" style="--fm-progress:0"><div class="fm-timer-core"><span id="fmTimerStatus" data-state="ready">READY</span><strong id="fmTimerTime">00:00:00</strong><small id="fmElapsed">0min Fokuszeit</small></div></div>
              <div class="fm-session-identity"><small id="fmCurrentName">Keine aktive Session</small><input id="fmCurrentGoal" class="fm-current-goal-input" aria-label="Aktuelles Fokusziel" value="Noch kein Fokusziel ausgewählt"><span id="fmCurrentLink">Eigenes Fokusziel</span></div>
              <p class="fm-session-hint" id="fmSessionHint">Bereite eine Session vor oder wähle eine offene Session.</p>
              <div class="fm-timer-actions" id="fmTimerActions"></div>
              <button type="button" class="fm-button fm-primary fm-start" id="fmStartPrepared" hidden>Session starten</button>
              <div class="fm-next-break" id="fmNextBreak">Der Countdown startet erst nach deiner ausdrücklichen Freigabe.</div>
            </div>
            <aside class="fm-session-side">
              <div class="fm-panel-heading"><div><span class="fm-kicker">OPEN SESSIONS</span><h3>Deine Sessions</h3></div><span class="fm-count" id="fmOpenCount">0 offen</span></div>
              <div class="fm-open-list" id="fmOpenSessions"></div>
              <button type="button" class="fm-button fm-subtle fm-distraction-toggle" id="fmDistractionToggle" aria-pressed="false">Distraction-Free-Modus</button>
            </aside>
          </div>
          <div class="fm-notes-grid">
            <details class="fm-disclosure" open><summary>Session Notes <span>Automatisch gespeichert</span></summary><textarea id="fmNotes" class="fm-input fm-notes" rows="4" placeholder="Gedanken, Ideen und wichtige Zwischenschritte …"></textarea></details>
            <details class="fm-disclosure"><summary>Distraction Log <span id="fmDistractionCount">0 Einträge</span></summary><form id="fmDistractionForm" class="fm-distraction-form"><input id="fmDistractionInput" class="fm-input" maxlength="240" placeholder="Ablenkung kurz festhalten …"><button class="fm-button" id="fmDistractionAdd" type="submit">＋ Notieren</button></form><div id="fmDistractionList"></div></details>
          </div>
          <div class="fm-storage-note" id="fmStorageNote">Lokal im Browser gespeichert · Cloud-Synchronisierung ist noch nicht eingerichtet.</div>
        </section>
        <div class="fm-work-grid" id="fmWorkGrid">
          <section class="fm-panel glass-card fm-setup-panel">
            <div class="fm-panel-heading"><div><span class="fm-kicker">02 · SESSION SETUP</span><h2>Session vorbereiten</h2></div><span class="fm-count">NO AUTO-START</span></div>
            <form id="fmSetupForm">
              <label class="fm-label" for="fmGoal">Fokusziel *</label><input id="fmGoal" class="fm-input" required maxlength="160" placeholder="z. B. Melodie und Arrangement finalisieren">
              <label class="fm-label" for="fmName">Session-Name</label><input id="fmName" class="fm-input" maxlength="100" placeholder="Optional · wird sonst vom Fokusziel übernommen">
              <div class="fm-form-two"><div><label class="fm-label" for="fmCategory">Kategorie</label><select id="fmCategory" class="fm-input"><option value="music" selected>Music Production</option><option value="mixing">Mixing &amp; Mastering</option><option value="content">Content Creation</option><option value="business">Business</option><option value="learning">Learning</option><option value="organisation">Organisation</option></select></div><div><label class="fm-label" for="fmPriority">Priorität</label><select id="fmPriority" class="fm-input"><option value="urgent">Dringend</option><option value="important" selected>Wichtig</option><option value="provisional">Vorläufig</option><option value="indefinite">Unbefristet</option></select></div></div>
              <label class="fm-label" for="fmLinkedTask">Aufgabe verknüpfen</label><select id="fmLinkedTask" class="fm-input"><option value="">Eigenes Fokusziel</option></select>
              <div class="fm-duration-head"><label class="fm-label" for="fmPreset">Session-Dauer</label><span>Fokuszeit / Pause</span></div><select id="fmPreset" class="fm-input fm-preset-native" aria-hidden="true" tabindex="-1" hidden><option value="pomodoro" selected>Pomodoro</option><option value="extended">Extended</option><option value="deep">Deep Work</option><option value="long">Long Session</option><option value="marathon">Marathon</option><option value="custom">Custom</option></select><div class="fm-preset-grid" id="fmPresetCards" role="group" aria-label="Session-Dauer auswählen"><button type="button" class="fm-preset-card is-selected" data-fm-preset="pomodoro" aria-pressed="true"><span>QUICK FOCUS</span><strong>25 <small>min</small></strong><em>5 min Pause</em></button><button type="button" class="fm-preset-card" data-fm-preset="extended" aria-pressed="false"><span>STANDARD</span><strong>50 <small>min</small></strong><em>10 min Pause</em></button><button type="button" class="fm-preset-card" data-fm-preset="deep" aria-pressed="false"><span>DEEP WORK</span><strong>90 <small>min</small></strong><em>15 min Pause</em></button><button type="button" class="fm-preset-card" data-fm-preset="long" aria-pressed="false"><span>LONG SESSION</span><strong>120 <small>min</small></strong><em>20 min Pause</em></button><button type="button" class="fm-preset-card" data-fm-preset="marathon" aria-pressed="false"><span>MARATHON</span><strong>180 <small>min</small></strong><em>30 min Pause</em></button><button type="button" class="fm-preset-card" data-fm-preset="custom" aria-pressed="false"><span>YOUR OWN</span><strong>Custom</strong><em>Eigene Dauer festlegen</em></button></div>
              <div class="fm-form-two fm-custom-duration" id="fmCustomDuration" hidden><div><label class="fm-label" for="fmCustomFocus">Fokus (Minuten)</label><input id="fmCustomFocus" class="fm-input" type="number" min="1" max="1440" value="45"></div><div><label class="fm-label" for="fmCustomBreak">Pause (Minuten)</label><input id="fmCustomBreak" class="fm-input" type="number" min="0" max="240" value="10"></div></div>
              <div class="fm-setup-footer"><span>Die Session wird gespeichert, aber nicht gestartet.</span><div class="fm-setup-buttons"><button type="button" id="fmSetupNew" class="fm-text-button">Neue Session</button><button type="submit" id="fmSetupSubmit" class="fm-button fm-primary">Session vorbereiten <span>＋</span></button></div></div>
            </form>
          </section>
          <section class="fm-panel glass-card fm-queue-panel" id="fmQueuePanel">
            <div class="fm-panel-heading"><div><span class="fm-kicker">03 · TASK QUEUE</span><h2>Als Nächstes</h2></div><span class="fm-count" id="fmQueueCount">0 Aufgaben</span></div>
            <p class="fm-panel-intro">Offene Aufgaben aus deiner Task Queue und Important. Ziehe Einträge, um eine eigene Reihenfolge zu speichern.</p>
            <div id="fmQueueList" class="fm-queue-list"></div><details class="fm-queue-done"><summary id="fmQueueDoneSummary">Erledigte Aufgaben · 0</summary><div id="fmQueueDoneList"></div></details>
            <div class="fm-queue-footer"><button type="button" id="fmQueueDefault" class="fm-text-button">Nach Priorität sortieren</button><button type="button" id="fmQueueAdd" class="fm-text-button">Eigenes Ziel vorbereiten ＋</button></div>
          </section>
        </div>
        <section class="fm-panel glass-card fm-stats-panel" id="fmStatsPanel">
          <div class="fm-panel-heading"><div><span class="fm-kicker">04 · STATISTICS</span><h2>Deine Fokusleistung</h2></div><span class="fm-count">ACTUAL FOCUS TIME</span></div>
          <div class="fm-stat-grid">
            <article><small>HEUTE</small><b id="fmStatToday">0min</b><span>Fokuszeit</span></article>
            <article><small>DIESE WOCHE</small><b id="fmStatWeek">0min</b><span id="fmStatWeekCompare">Vorwochenvergleich</span><span id="fmStatWeekSessions">0 Sessions abgeschlossen</span></article>
            <article><small>DIESER MONAT</small><b id="fmStatMonth">0min</b><span id="fmStatMonthCompare">Vormonatsvergleich</span><span id="fmStatMonthSessions">0 Sessions abgeschlossen</span></article>
            <article><small>COMPLETED</small><b id="fmStatCompleted">0</b><span>Abgeschlossene Sessions</span></article>
            <article><small>INTERRUPTED</small><b id="fmStatInterrupted">0</b><span>Heute unterbrochen</span></article><article><small>Ø COMPLETED</small><b id="fmStatAverage">0min</b><span>Ø Dauer heute</span></article>
          </div>
          <div class="fm-stats-lower"><div><div class="fm-panel-heading"><h3>Letzte 7 Tage</h3><span>pro Tag</span></div><div id="fmWeekChart" class="fm-week-chart"></div></div><div><div class="fm-panel-heading"><h3>Kategorien</h3><span>Gesamter Verlauf</span></div><div id="fmCategoryStats" class="fm-category-stats"></div></div></div>
        </section>
        <section class="fm-panel glass-card fm-recent-history"><div class="fm-panel-heading"><div><span class="fm-kicker">05 · SESSION HISTORY</span><h2>Zuletzt bearbeitet</h2></div><button type="button" class="fm-text-button" data-fm-open-history>Gesamten Verlauf öffnen ↗</button></div><div id="fmRecentHistory" class="fm-recent-history-list"><p class="fm-empty">Deine abgeschlossenen und unterbrochenen Sessions erscheinen hier.</p></div></section>
      </div>
      <section class="fm-history-view" id="fmHistoryView" hidden>
        <div class="fm-history-heading"><div><span class="fm-kicker">SESSION ARCHIVE</span><h2>Session History</h2><p>Deine abgeschlossenen und unterbrochenen Sessions – chronologisch und vollständig.</p></div><button type="button" class="fm-button fm-subtle" id="fmHistoryBack">← Zurück zum Focus Center</button></div>
        <div class="fm-history-kpis"><article><small>SESSIONS</small><b id="fmHistoryTotal">0</b></article><article><small>FOKUSZEIT</small><b id="fmHistoryFocus">0min</b></article><article><small>COMPLETED</small><b id="fmHistoryCompleted">0</b></article></div>
        <div class="fm-history-controls">
          <div class="fm-history-search"><input id="fmHistorySearch" class="fm-input" type="search" placeholder="Session-Name oder Fokusziel suchen …"><button type="button" id="fmHistorySearchClear" aria-label="Suche löschen">×</button></div>
          <div class="fm-form-two"><div><label class="fm-label" for="fmHistoryRange">Zeitraum</label><select id="fmHistoryRange" class="fm-input"><option value="all">Gesamter Verlauf</option><option value="today">Heute</option><option value="7">Letzte 7 Tage</option><option value="30">Letzte 30 Tage</option><option value="month">Dieser Monat</option><option value="custom">Benutzerdefiniert</option></select></div><div><label class="fm-label" for="fmHistoryPageSize">Pro Seite</label><select id="fmHistoryPageSize" class="fm-input"><option>10</option><option selected>20</option><option>50</option></select></div></div>
          <div class="fm-form-two fm-history-date-fields" data-custom="false"><div><label class="fm-label" for="fmHistoryFrom">Von</label><input id="fmHistoryFrom" class="fm-input" type="date"></div><div><label class="fm-label" for="fmHistoryTo">Bis</label><input id="fmHistoryTo" class="fm-input" type="date"></div></div>
          <div class="fm-history-filter-grid"><section><b>Kategorie</b><div id="fmHistoryCategoryFilters"></div></section><section><b>Status</b><div id="fmHistoryStatusFilters"></div></section><section><b>Priorität</b><div id="fmHistoryPriorityFilters"></div></section></div>
          <div class="fm-history-filter-actions"><button type="button" class="fm-text-button" id="fmHistoryReset">Filter zurücksetzen</button><span id="fmHistoryFilterSummary">Neueste zuerst</span></div><div class="fm-history-active-filters" id="fmHistoryActiveFilters"></div>
        </div>
        <div class="fm-history-results" id="fmHistoryList"></div>
        <div class="fm-history-pagination"><button type="button" id="fmHistoryPrev" class="fm-button fm-subtle">Zurück</button><span id="fmHistoryPageNumbers"></span><span id="fmHistoryPageLabel">Seite 1 / 1</span><button type="button" id="fmHistoryNext" class="fm-button fm-subtle">Weiter</button></div>
      </section>
    </div>
    <div class="fm-dialog-backdrop" id="fmHistoryDetailDialog" hidden><section class="fm-dialog fm-detail-dialog" role="dialog" aria-modal="true" aria-labelledby="fmHistoryDetailTitle"><div class="fm-dialog-head"><div><span class="fm-kicker">SESSION DETAILS</span><h2 id="fmHistoryDetailTitle"></h2><p id="fmHistoryDetailGoal"></p><p id="fmHistoryDetailMeta"></p></div><button type="button" class="fm-dialog-close" data-fm-close-dialog>×</button></div><div class="fm-detail-stats" id="fmHistoryDetailStats"></div><h3>Zeitlicher Verlauf</h3><div class="fm-timeline" id="fmHistoryTimeline"></div><details class="fm-disclosure"><summary>Session Notes</summary><p id="fmHistoryDetailNotes"></p></details><details class="fm-disclosure"><summary>Distraction Log</summary><div id="fmHistoryDetailDistractions"></div></details><div class="fm-history-linked"><small>VERKNÜPFTE AUFGABE</small><b id="fmHistoryDetailLink">Keine Aufgabenverknüpfung</b><button type="button" id="fmHistoryOpenLinked" hidden>Aufgabe öffnen ↗</button></div><div class="fm-dialog-actions"><button type="button" class="fm-button" id="fmHistoryUseTemplate">Als Vorlage verwenden</button><button type="button" class="fm-button fm-subtle" id="fmHistoryEdit">Details bearbeiten</button><button type="button" class="fm-button fm-danger-ghost" id="fmHistoryDelete">Session löschen</button><button type="button" class="fm-button fm-subtle" data-fm-close-dialog>Schließen</button></div></section></div>
    <div class="fm-dialog-backdrop" id="fmHistoryEditDialog" hidden><section class="fm-dialog" role="dialog" aria-modal="true" aria-labelledby="fmHistoryEditHeading"><div class="fm-dialog-head"><div><span class="fm-kicker">EDIT SESSION</span><h2 id="fmHistoryEditHeading">Details bearbeiten</h2></div><button type="button" class="fm-dialog-close" data-fm-close-edit>×</button></div><form id="fmHistoryEditForm"><label class="fm-label" for="fmHistoryEditName">Session-Name</label><input id="fmHistoryEditName" class="fm-input" required><label class="fm-label" for="fmHistoryEditGoal">Fokusziel</label><input id="fmHistoryEditGoal" class="fm-input" required><div class="fm-form-two"><div><label class="fm-label" for="fmHistoryEditCategory">Kategorie</label><select id="fmHistoryEditCategory" class="fm-input"><option value="music" selected>Music Production</option><option value="mixing">Mixing &amp; Mastering</option><option value="content">Content Creation</option><option value="business">Business</option><option value="learning">Learning</option><option value="organisation">Organisation</option></select></div><div><label class="fm-label" for="fmHistoryEditPriority">Priorität</label><select id="fmHistoryEditPriority" class="fm-input"><option value="urgent">Dringend</option><option value="important" selected>Wichtig</option><option value="provisional">Vorläufig</option><option value="indefinite">Unbefristet</option></select></div></div><label class="fm-label" for="fmHistoryEditNotes">Notizen</label><textarea id="fmHistoryEditNotes" class="fm-input" rows="5"></textarea><div class="fm-dialog-actions"><button class="fm-button fm-primary" type="submit">Änderungen speichern</button><button type="button" class="fm-button fm-subtle" data-fm-close-edit>Abbrechen</button></div></form></section></div>`;
    const placeholder=focusPage.innerHTML;
    const marker=placeholder.indexOf('<div class="page-intro">');
    focusPage.innerHTML=html;
  };
  buildMarkup();
  const refreshLinkedOptions=()=>fillLinkedOptions();
  $('fmPreset').addEventListener('change',syncPresetCards);$('fmPresetCards').addEventListener('click',e=>{const button=e.target.closest('[data-fm-preset]');if(!button)return;$('fmPreset').value=button.dataset.fmPreset;syncPresetCards();});$('fmRecentHistory').addEventListener('click',e=>{if(e.target.closest('[data-fm-open-history]'))openHistory();});syncPresetCards();
  $('fmMobileSave').addEventListener('click',()=>{const input=$('fmMobileIdea'),title=input.value.trim();if(!title){input.focus();return;}const list=getLegacyTasks(),now=Date.now();list.unshift({id:now,title,priority:'normal',done:false,createdAt:now});try{localStorage.setItem(TASKS,JSON.stringify(list));input.value='';refreshLinkedOptions();renderQueue();toast('Idee in der Task Queue gespeichert.');}catch{toast('Die Idee konnte nicht gespeichert werden. Bitte Browser-Speicher prüfen.');}});
  $('fmSetupNew').addEventListener('click',()=>{editingPreparedId=null;$('fmSetupForm').reset();$('fmPreset').value='pomodoro';syncPresetCards();$('fmLinkedTask').value='';$('fmSetupSubmit').textContent='Session vorbereiten ＋';$('fmGoal').focus();});
  $('fmSetupForm').addEventListener('submit',e=>{
    e.preventDefault();const config=prepareConfig();if(!config)return;
    if(editingPreparedId){const existing=state.sessions.find(x=>x.id===editingPreparedId&&x.status==='PREPARED');if(existing){existing.name=config.name;existing.goal=config.goal;existing.category=config.category;existing.priority=config.priority;existing.preset=config.preset;existing.originalFocusMs=config.focusMs;existing.phaseDurationMs=config.focusMs;existing.remainingMs=config.focusMs;existing.breakDurationMs=config.breakMs;if(config.linkedTask){existing.linkedTask=config.linkedTask;existing.linkedTaskSnapshot={...config.linkedTask};}existing.updatedAt=Date.now();event(existing,'prepared-edited','Vorbereitete Session angepasst');persist();loadSetup(existing);renderAll();toast('Vorbereitete Session aktualisiert.');return;}}
    const created=createSession(config,'PREPARED');state.activeId=created.id;activeId=created.id;refreshLinkedOptions();loadSetup(created);renderAll();toast('Session vorbereitet. Der Timer wurde noch nicht gestartet.');
  });
  $('fmStartPrepared').addEventListener('click',()=>{
    const s=current();if(!s)return;
    if(s.status==='PREPARED'||s.status==='EXPIRED')startCountdown(s);
  });
  $('fmTimerActions').addEventListener('click',e=>{const b=e.target.closest('[data-fm-action]');if(b)handleAction(b.dataset.fmAction);});
  $('fmOpenSessions').addEventListener('click',e=>{const b=e.target.closest('[data-fm-select]');if(b)switchSession(b.dataset.fmSelect);});
  $('fmDistractionToggle').addEventListener('click',()=>{setDistractionFree(!current()?.distractionFree);persist();});
  $('fmNotes').addEventListener('input',e=>{const s=current();if(!s)return;s.notes=e.target.value;saveSoon();});
  $('fmCurrentGoal').addEventListener('change',e=>{const s=current();if(!s)return;const value=e.target.value.trim();if(!value){e.target.value=s.goal;return;}s.goal=value;s.updatedAt=Date.now();saveSoon();renderOpenSessions();});
  $('fmCurrentCategory').addEventListener('change',e=>{const s=current();if(!s)return;const next=e.target.value;if(categoryCount(next,s.id)>=2){toast('In dieser Kategorie sind bereits zwei andere offene Sessions.');e.target.value=s.category;return;}s.category=next;s.updatedAt=Date.now();persist();renderCurrent();renderStats();});
  $('fmCurrentPriority').addEventListener('change',e=>{const s=current();if(!s)return;s.priority=e.target.value;s.updatedAt=Date.now();persist();renderCurrent();});
  $('fmDistractionForm').addEventListener('submit',e=>{e.preventDefault();const s=current(),input=$('fmDistractionInput'),text=input.value.trim();if(!s){toast('Bitte zuerst eine Session auswählen.');return;}s.distractions=s.distractions||[];const at=Date.now(),tz=zone();s.distractions.unshift({id:uid(),at,localDate:dateInZone(at,tz),localTime:timeInZone(at,tz),timezone:tz,text:text||'Ablenkung'});event(s,'distraction','Ablenkung notiert');input.value='';persist();renderDistractions();});
  $('fmDistractionList').addEventListener('click',e=>{
    const edit=e.target.closest('[data-fm-edit-distraction]'),del=e.target.closest('[data-fm-delete-distraction]'),s=current();if(!s)return;
    if(edit){const d=s.distractions.find(x=>x.id===edit.dataset.fmEditDistraction);if(!d)return;const value=prompt('Ablenkung bearbeiten:',d.text);if(value===null)return;d.text=value.trim()||'Ablenkung';event(s,'distraction-edited','Distraction-Log-Eintrag bearbeitet');persist();renderDistractions();}
    if(del&&confirm('Diesen Distraction-Log-Eintrag löschen?')){s.distractions=s.distractions.filter(x=>x.id!==del.dataset.fmDeleteDistraction);event(s,'distraction-deleted','Distraction-Log-Eintrag gelöscht');persist();renderDistractions();}
  });
  $('fmQueueList').addEventListener('click',e=>{const b=e.target.closest('[data-fm-assign]');if(b)assignTask(b.dataset.fmAssign,b.dataset.fmSource);});
  $('fmQueueList').addEventListener('dragstart',e=>{const row=e.target.closest('[data-fm-drag]');if(!row)return;taskDragId=row.dataset.fmDrag;row.classList.add('is-dragging');e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',taskDragId);});
  $('fmQueueList').addEventListener('dragover',e=>{const row=e.target.closest('[data-fm-drag]');if(row){e.preventDefault();row.classList.add('is-drop-target');}});
  $('fmQueueList').addEventListener('dragleave',e=>e.target.closest('[data-fm-drag]')?.classList.remove('is-drop-target'));
  $('fmQueueList').addEventListener('drop',e=>{
    const row=e.target.closest('[data-fm-drag]');if(!row||!taskDragId)return;e.preventDefault();
    const all=[...$('fmQueueList').querySelectorAll('[data-fm-drag]')].map(x=>x.dataset.fmDrag),from=all.indexOf(taskDragId),to=all.indexOf(row.dataset.fmDrag);if(from<0||to<0)return;
    all.splice(to,0,all.splice(from,1)[0]);state.queueManual=true;state.queue=all.map((id,i)=>({id,order:i}));taskDragId=null;persist();renderQueue();
  });
  $('fmQueueList').addEventListener('dragend',()=>{taskDragId=null;$('fmQueueList').querySelectorAll('.is-dragging,.is-drop-target').forEach(x=>x.classList.remove('is-dragging','is-drop-target'));});
  $('fmQueueDefault').addEventListener('click',()=>{state.queueManual=false;state.queue=[];persist();renderQueue();});
  $('fmQueueAdd').addEventListener('click',()=>{leaveHistory();$('fmSetupNew').click();$('fmGoal').focus();$('fmGoal').scrollIntoView({behavior:'smooth',block:'center'});});
  $('fmHistoryOpen').addEventListener('click',openHistory);$('fmHistoryBack').addEventListener('click',leaveHistory);
  $('fmHistorySearch').addEventListener('input',e=>{historyQuery=e.target.value;historyPage=1;renderActiveFilters();clearTimeout(historySearchTimer);historySearchTimer=setTimeout(renderHistory,160);});
  $('fmHistorySearchClear').addEventListener('click',()=>{historyQuery='';historyPage=1;renderHistoryControls();renderHistory();});
  $('fmHistoryRange').addEventListener('change',e=>{historyFilters.range=e.target.value;$('fmHistoryFrom').closest('.fm-history-date-fields').dataset.custom=String(e.target.value==='custom');historyPage=1;renderActiveFilters();renderHistory();});
  ['fmHistoryFrom','fmHistoryTo'].forEach(id=>$(id).addEventListener('change',e=>{historyFilters[id==='fmHistoryFrom'?'from':'to']=e.target.value;historyPage=1;renderActiveFilters();renderHistory();}));
  $('fmHistoryPageSize').addEventListener('change',e=>{pageSize=Number(e.target.value)||20;historyPage=1;renderHistory();});
  $('fmHistoryCategoryFilters').addEventListener('change',e=>{const b=e.target.closest('[data-fm-filter-cat]');if(!b)return;const all=CATEGORIES.map(x=>x.id),selected=historyFilters.categories.length?historyFilters.categories.slice():all.slice();b.checked?(!selected.includes(b.dataset.fmFilterCat)&&selected.push(b.dataset.fmFilterCat)):historyFilters.categories=selected.filter(x=>x!==b.dataset.fmFilterCat);if(b.checked)historyFilters.categories=selected.length===all.length?[]:selected;historyPage=1;renderHistoryControls();renderHistory();});
  $('fmHistoryStatusFilters').addEventListener('change',e=>{const b=e.target.closest('[data-fm-filter-status]');if(!b)return;const all=['COMPLETED','INTERRUPTED'],selected=historyFilters.statuses.length?historyFilters.statuses.slice():all.slice();b.checked?(!selected.includes(b.dataset.fmFilterStatus)&&selected.push(b.dataset.fmFilterStatus)):historyFilters.statuses=selected.filter(x=>x!==b.dataset.fmFilterStatus);if(b.checked)historyFilters.statuses=selected.length===all.length?[]:selected;historyPage=1;renderHistoryControls();renderHistory();});
  $('fmHistoryPriorityFilters').addEventListener('change',e=>{const b=e.target.closest('[data-fm-filter-priority]');if(!b)return;const all=PRIORITIES.map(x=>x.id),selected=historyFilters.priorities.length?historyFilters.priorities.slice():all.slice();b.checked?(!selected.includes(b.dataset.fmFilterPriority)&&selected.push(b.dataset.fmFilterPriority)):historyFilters.priorities=selected.filter(x=>x!==b.dataset.fmFilterPriority);if(b.checked)historyFilters.priorities=selected.length===all.length?[]:selected;historyPage=1;renderHistoryControls();renderHistory();});
  $('fmHistoryReset').addEventListener('click',resetHistoryFilters);
  $('fmHistoryActiveFilters').addEventListener('click',e=>{const b=e.target.closest('[data-fm-clear-filter]');if(!b)return;const type=b.dataset.fmClearFilter,value=b.dataset.value;if(type==='search')historyQuery='';if(type==='range'||type==='dates'){historyFilters.range='all';historyFilters.from='';historyFilters.to='';}if(type==='category')historyFilters.categories=historyFilters.categories.filter(x=>x!==value);if(type==='status')historyFilters.statuses=historyFilters.statuses.filter(x=>x!==value);if(type==='priority')historyFilters.priorities=historyFilters.priorities.filter(x=>x!==value);historyPage=1;renderHistoryControls();renderHistory();});
  $('fmHistoryPrev').addEventListener('click',()=>{historyPage=Math.max(1,historyPage-1);renderHistory();});
  $('fmHistoryNext').addEventListener('click',()=>{historyPage++;renderHistory();});
  $('fmHistoryPageNumbers').addEventListener('click',e=>{const b=e.target.closest('[data-fm-page]');if(b){historyPage=Number(b.dataset.fmPage)||1;renderHistory();}});
  $('fmHistoryList').addEventListener('click',e=>{const b=e.target.closest('[data-fm-history-detail]');if(b)showHistoryDetail(b.dataset.fmHistoryDetail);});
  $('fmHistoryDetailDialog').addEventListener('click',e=>{if(e.target===e.currentTarget||e.target.closest('[data-fm-close-dialog]')){closeHistoryDetail();return;}const edit=e.target.closest('[data-fm-history-edit-distraction]'),del=e.target.closest('[data-fm-history-delete-distraction]'),s=state.sessions.find(x=>x.id===historyDetailId);if(!s)return;if(edit){const d=s.distractions.find(x=>x.id===edit.dataset.fmHistoryEditDistraction);if(!d)return;const value=prompt('Ablenkung bearbeiten:',d.text);if(value===null)return;d.text=value.trim()||'Ablenkung';event(s,'distraction-edited','Distraction-Log-Eintrag bearbeitet');persist();showHistoryDetail(s.id);}if(del&&confirm('Diesen Distraction-Log-Eintrag löschen?')){s.distractions=s.distractions.filter(x=>x.id!==del.dataset.fmHistoryDeleteDistraction);event(s,'distraction-deleted','Distraction-Log-Eintrag gelöscht');persist();showHistoryDetail(s.id);}});
  $('fmHistoryEditDialog').addEventListener('click',e=>{if(e.target===e.currentTarget||e.target.closest('[data-fm-close-edit]')){$('fmHistoryEditDialog').hidden=true;historyDraftId=null;}});
  $('fmHistoryEdit').addEventListener('click',()=>{const s=state.sessions.find(x=>x.id===historyDetailId);if(s)editHistory(s);});
  $('fmHistoryEditForm').addEventListener('submit',e=>{e.preventDefault();const s=state.sessions.find(x=>x.id===historyDraftId);if(!s)return;const nextCategory=$('fmHistoryEditCategory').value;if(s.status==='INTERRUPTED'&&!s.discarded&&nextCategory!==s.category&&categoryCount(nextCategory,s.id)>=2){toast('In dieser Kategorie sind bereits zwei andere offene Sessions.');return;}s.name=$('fmHistoryEditName').value.trim();s.goal=$('fmHistoryEditGoal').value.trim();s.category=nextCategory;s.priority=$('fmHistoryEditPriority').value;s.notes=$('fmHistoryEditNotes').value;event(s,'details-edited','Sessiondetails nachträglich bearbeitet');persist();$('fmHistoryEditDialog').hidden=true;historyDraftId=null;showHistoryDetail(s.id);renderHistory();});
  $('fmHistoryUseTemplate').addEventListener('click',()=>{const s=state.sessions.find(x=>x.id===historyDetailId);if(s)useTemplate(s);closeHistoryDetail();});
  // The data-page attribute is handled by the shared HQ navigation delegate.
  $('fmHistoryDelete').addEventListener('click',()=>{const s=state.sessions.find(x=>x.id===historyDetailId);if(!s||!confirm('Diese Session und ihr History-Protokoll endgültig löschen?'))return;state.sessions=state.sessions.filter(x=>x.id!==s.id);if(activeId===s.id){activeId=sortedOpen()[0]?.id||null;state.activeId=activeId;}persist();closeHistoryDetail();renderAll();});
  document.addEventListener('keydown',e=>{
    const tag=(e.target?.tagName||'').toLowerCase(),typing=['input','textarea','select'].includes(tag)||e.target?.isContentEditable;
    if(typing||e.ctrlKey||e.metaKey||e.altKey)return;
    if(e.key==='Escape'&&historyOpen){leaveHistory();return;}
    if(historyOpen)return;
    const s=current();if(!s)return;
    if(e.code==='Space'&&['RUNNING','PAUSED'].includes(s.status)){e.preventDefault();handleAction(s.status==='RUNNING'?'pause':'resume');}
    if(e.key.toLowerCase()==='r'&&s.phase==='focus'&&['RUNNING','PAUSED'].includes(s.status)){e.preventDefault();handleAction('reset');}
    if(e.key.toLowerCase()==='n'){$('fmNotes').focus();$('fmNotes').scrollIntoView({behavior:'smooth',block:'center'});}
    if(e.key==='['||e.key===']'){const list=sortedOpen(),idx=list.findIndex(x=>x.id===s.id),next=list[(idx+(e.key==='['?-1:1)+list.length)%list.length];if(next)switchSession(next.id);}
  });
  document.addEventListener('visibilitychange',()=>{
    const s=current();if(!s)return;
    if(document.hidden){if(s.status==='RUNNING')persist();return;}
    if(detectSystemSleep(s))return;reconcile(s);if(s.status!=='RUNNING')stopTick();else ensureTick();persist();renderAll();
  });
  window.addEventListener('pagehide',()=>{
    const s=current();if(s?.status==='RUNNING'){const now=Date.now();pauseSession(s,'pause',now);persist();}
  });
  window.addEventListener('beforeunload',e=>{
    const s=current();if(s?.status==='RUNNING'||storageState==='SAVE ERROR'){e.preventDefault();e.returnValue=s?.status==='RUNNING'?'Deine Focus-Session läuft noch.':'Änderungen konnten nicht gespeichert werden.';}
  });
  document.addEventListener('click',e=>{
    const nav=e.target.closest('[data-page]');
    if(!nav||!nav.closest('.main-area,.hq-side-nav,.hq-top-nav'))return;
    if(nav.dataset.page==='focus'){refreshLinkedOptions();renderQueue();return;}
    if(focusPage.classList.contains('active-page')){
      const ok=persist();
      if(!ok&&!confirm('Änderungen konnten nicht lokal gespeichert werden. Trotzdem zur anderen Seite wechseln?')){e.preventDefault();e.stopImmediatePropagation();return;}
    }
    if(!$('fmHistoryEditDialog').hidden){const changed=$('fmHistoryEditName').value!==state.sessions.find(x=>x.id===historyDraftId)?.name||$('fmHistoryEditGoal').value!==state.sessions.find(x=>x.id===historyDraftId)?.goal||$('fmHistoryEditNotes').value!==(state.sessions.find(x=>x.id===historyDraftId)?.notes||'');if(changed&&!confirm('Die Bearbeitung enthält noch nicht gespeicherte Änderungen. Seite trotzdem wechseln?')){e.preventDefault();e.stopImmediatePropagation();return;}$('fmHistoryEditDialog').hidden=true;historyDraftId=null;}
    $('fmHistoryDetailDialog').hidden=true;historyDetailId=null;
    if(historyOpen)leaveHistory();
  },true);
  window.addEventListener('storage',e=>{if(e.key===IMPORTANT||e.key===TASKS){refreshLinkedOptions();renderQueue();}});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden){refreshLinkedOptions();renderQueue();}});
  // Recover an interrupted browser/device lifecycle as PAUSED; downtime is never focus time.
  const recovered=state.sessions.find(s=>s.id===activeId);
  if(!recovered||!OPEN.has(recovered.status))activeId=sortedOpen()[0]?.id||null;
  state.sessions.forEach(s=>{
    if(s.status==='RUNNING'){
      const now=Date.now();s.remainingMs=Math.max(0,s.remainingMs||0);s.deadline=null;s.phaseStartedAt=null;s.status='PAUSED';s.lastActiveAt=now;event(s,'recovered','Nach Wiederöffnung als PAUSED wiederhergestellt',now);
    }
  });
  state.activeId=activeId;persist();refreshLinkedOptions();if(current()?.status==='PREPARED')loadSetup(current());renderAll();ensureTick();
})();