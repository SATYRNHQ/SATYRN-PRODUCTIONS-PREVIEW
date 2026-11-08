import fs from 'node:fs';
import assert from 'node:assert/strict';
const read = path => fs.readFileSync(path, 'utf8');
const html=read('index.html'), sw=read('sw.js'), focus=read('focus-mode.js'), important=read('important.js'), hq=read('hq-tools.js');
const globalCss=read('styles.css'), focusCss=read('focus-mode.css'), reminderCss=read('focus-reminders.css');
function uniqueIds(source,label){const ids=[...source.matchAll(/\\bid=[\"']([^\"']+)[\"']/g)].map(m=>m[1]);const d=ids.filter((x,i)=>ids.indexOf(x)!==i);assert.equal(d.length,0,label+' duplicate IDs: '+[...new Set(d)].join(','));}
uniqueIds(html,'index.html');
const mark='const html = String.raw', tick=String.fromCharCode(96), at=focus.indexOf(mark), start=focus.indexOf(tick,at)+1, end=focus.indexOf(tick+';'+String.fromCharCode(10)+'    focusPage.innerHTML=html',start);
assert.ok(at>=0&&start>0&&end>start,'Focus markup template missing'); uniqueIds(focus.slice(start,end),'Focus template');
const refs=[...html.matchAll(/(?:src|href)=[\"']([^\"']+\\.(?:js|css)(?:\\?[^\"']*)?)[\"']/g)].map(m=>m[1]).filter(x=>!/^https?:/.test(x));
for(const ref of refs){assert.ok(fs.existsSync(ref.split('?')[0]),'Missing asset '+ref);assert.ok(sw.includes("'./"+ref+"'"),'Service worker cache mismatch '+ref);}
function checkFonts(css,label){for(const m of css.matchAll(/font-size\\s*:\\s*([^;{}]+)\\s*;/gi)){const v=m[1],px=[...v.matchAll(/(\\d+(?:\\.\\d+)?)px/g)].map(x=>+x[1]),rem=[...v.matchAll(/(\\d*\\.?\\d+)rem/g)].map(x=>parseFloat(x[1])),em=[...v.matchAll(/(\\d*\\.?\\d+)em/g)].map(x=>parseFloat(x[1]));assert.ok(!px.some(n=>n>0&&n<14)&&!rem.some(n=>n>0&&n<.875)&&!em.some(n=>n>0&&n<.875),label+' text below 14px: '+v);}}
checkFonts(globalCss,'styles.css');checkFonts(focusCss,'focus-mode.css');checkFonts(reminderCss,'focus-reminders.css');
assert.ok(!hq.includes('function renderFocus('),'Legacy Focus renderer remains');assert.ok(!globalCss.includes('.focus-dashboard'),'Legacy Focus CSS remains');
assert.ok(focus.includes('syncPresetCards')&&focus.includes("t.isTask===true")&&focus.includes('data-fm-complete')&&focus.includes('tone();')&&focus.includes('Notification.requestPermission')&&focus.includes("setDistractionFree(s.phase==='focus')"),'Focus preset/task/notification regression');
assert.ok(important.includes('BEISPIEL')&&important.includes('getAvailableLinks')&&important.includes('removeTarget'),'Important archive/link regression');
assert.ok(sw.includes('satyrn-hq-shell-v107'),'Service worker cache version not bumped');
console.log('SATYRN HQ validation passed: IDs, assets, cache versions, typography, Focus and Important.');