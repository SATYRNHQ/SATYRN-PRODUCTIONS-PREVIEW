import fs from 'node:fs';
import assert from 'node:assert/strict';

const read = path => fs.readFileSync(path, 'utf8');
const html = read('index.html');
const sw = read('sw.js');
const focus = read('focus-mode.js');
const important = read('important.js');
const hq = read('hq-tools.js');
const app = read('app.js');
const globalCss = read('styles.css');
const focusCss = read('focus-mode.css');
const reminderCss = read('focus-reminders.css');
const calendarCss = read('calendar.css');

function uniqueIds(source, label) {
  const ids = [...source.matchAll(/\bid=["']([^"']+)["']/g)].map(m => m[1]);
  const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
  assert.equal(duplicates.length, 0, label + ' contains duplicate IDs: ' + [...new Set(duplicates)].join(', '));
}

uniqueIds(html, 'index.html');
const marker = 'const html = String.raw';
const tick = String.fromCharCode(96);
const markerAt = focus.indexOf(marker);
const templateStart = focus.indexOf(tick, markerAt) + 1;
const templateEnd = focus.indexOf(tick + ';' + String.fromCharCode(10) + '    focusPage.innerHTML=html', templateStart);
assert.ok(markerAt >= 0 && templateStart > 0 && templateEnd > templateStart, 'Focus Mode markup template is present');
uniqueIds(focus.slice(templateStart, templateEnd), 'Focus Mode template');

const refs = [...html.matchAll(/(?:src|href)=["']([^"']+\.(?:js|css)(?:\?[^"']*)?)["']/g)]
  .map(m => m[1])
  .filter(ref => !/^https?:/.test(ref));
for (const ref of refs) {
  assert.ok(fs.existsSync(ref.split('?')[0]), 'Missing local asset: ' + ref);
  assert.ok(sw.includes("'./" + ref + "'"), 'Service worker does not precache current asset: ' + ref);
}

function tooSmall(value) {
  const px = [...value.matchAll(/(\d+(?:\.\d+)?)px/g)].map(m => +m[1]);
  const rem = [...value.matchAll(/(\d*\.?\d+)rem/g)].map(m => parseFloat(m[1]));
  const em = [...value.matchAll(/(\d*\.?\d+)em/g)].map(m => parseFloat(m[1]));
  return px.some(n => n > 0 && n < 14) || rem.some(n => n > 0 && n < .875) || em.some(n => n > 0 && n < .875);
}

function checkFonts(css, label) {
  for (const m of css.matchAll(/font-size\s*:\s*([^;{}]+)\s*;/gi)) {
    assert.ok(!tooSmall(m[1]), label + ' contains text below 14px: ' + m[1]);
  }
  for (const m of css.matchAll(/(?:^|[;{}])\s*font\s*:\s*([^;{}]+)\s*;/gim)) {
    assert.ok(!tooSmall(m[1]), label + ' contains font shorthand below 14px: ' + m[1]);
  }
}

checkFonts(globalCss, 'styles.css');
checkFonts(focusCss, 'focus-mode.css');
checkFonts(reminderCss, 'focus-reminders.css');
checkFonts(calendarCss, 'calendar.css');

assert.ok(!hq.includes('function renderFocus('), 'Legacy Focus renderer remains in hq-tools.js');
assert.ok(!globalCss.includes('.focus-dashboard'), 'Legacy Focus stylesheet remains in styles.css');
const cssWithoutComments = globalCss.replace(/\/\*[\s\S]*?\*\//g, '');
assert.ok(!/\.topbar\s*\{/.test(cssWithoutComments), 'Unused legacy topbar CSS remains');

const shellStart = html.indexOf('<div class="app-shell">');
const mainStart = html.indexOf('<main class="main-area">', shellStart);
const shell = html.slice(shellStart, mainStart);
assert.ok(shell.includes('class="hq-top-nav"'), 'Global headbar must stay in app shell');
assert.equal((shell.match(/class="hq-side-nav/g) || []).length, 2, 'Both global sidebars must stay in app shell');
const pageIds = new Set([...html.matchAll(/id="page-([^"]+)"/g)].map(m => m[1]));
for (const target of new Set([...html.matchAll(/data-page="([^"]+)"/g)].map(m => m[1]))) {
  assert.ok(pageIds.has(target), 'Navigation target missing page section: ' + target);
}
assert.ok(app.includes('function showPage') && globalCss.includes('.hq-top-nav') && globalCss.includes('.hq-side-nav'), 'Shared navigation flow/styles missing');
assert.ok(/--hq-card-radius\s*:\s*14px/.test(globalCss), 'Shared card radius must remain 14px');
assert.ok(/\.imp-modal\s*\{[^}]*border-radius:14px/.test(globalCss), 'Important modal radius must be 14px');
assert.ok(/\.important-page \.important-card:hover\s*\{[^}]*transform:none/.test(globalCss), 'Important cards must not lift on hover');

assert.ok(focus.includes('syncPresetCards'), 'Preset card synchronization is missing');
assert.ok(focus.includes('t.isTask===true') && focus.includes('data-fm-complete'), 'Focus Queue task integration is missing');
assert.ok(focus.includes('tone();') && focus.includes('Notification.requestPermission'), 'Focus sound/notification controls are missing');
assert.ok(focus.includes("setDistractionFree(s.phase==='focus')"), 'Distraction-Free must follow the active phase');
assert.ok(important.includes('BEISPIEL') && important.includes('getAvailableLinks') && important.includes('removeTarget'), 'Important archive/link integration is missing');
assert.ok(important.includes('building-2') && important.includes('handshake') && important.includes('landmark') && important.includes('telescope') && important.includes('layers'), 'Important category icons are incomplete');
assert.ok(important.includes('requestAnimationFrame') && important.includes('replaceWith(nextCard)'), 'Important card expand/collapse animation is missing');
assert.ok(important.includes('getAvailableLinks().find'), 'Important links must show current target names');
assert.ok(sw.includes("satyrn-hq-shell-v114"), 'Service worker cache version must match the current shell release');
assert.ok(html.includes('id="calGrid"') && html.includes('calendar.js?v=3') && html.includes('calendar.css?v=3'), 'Calendar page implementation or asset version is missing');
assert.ok(sw.includes("'./calendar.js?v=3'") && sw.includes("'./calendar.css?v=3'"), 'Service worker must precache the current Calendar assets');
assert.ok((html.match(/id="page-calendar"/g) || []).length === 1, 'Calendar page must exist exactly once');
assert.ok((html.match(/calendar\.js\?v=3/g) || []).length === 1, 'Calendar JavaScript must be included exactly once');
assert.ok((html.match(/calendar\.css\?v=3/g) || []).length === 1, 'Calendar stylesheet must be included exactly once');

const calendar = read('calendar.js');
for (const className of ['cal-day-modal', 'cal-detail-modal', 'cal-form-modal']) {
  assert.ok(calendar.includes('class="cal-modal ' + className + '"'), 'Calendar modal class is missing: ' + className);
  assert.ok(calendarCss.includes('.' + className), 'Calendar modal styles are missing: ' + className);
}
assert.ok(calendar.includes("ev.key==='Enter'||ev.key===' '") && calendar.includes("month=new Date(d.getFullYear(),d.getMonth(),1)"), 'Keyboard day selection must also switch to adjacent months');

console.log('SATYRN HQ validation passed: IDs, assets, cache versions, typography, navigation, Focus and Important invariants.');
