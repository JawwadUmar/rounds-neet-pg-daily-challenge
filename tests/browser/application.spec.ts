import { test, expect, chromium, type Page } from '@playwright/test';
import { mkdtemp } from 'node:fs/promises';
import { resolve } from 'node:path';
import { questionsForDate } from '../../src/core/schedule';
const DATE='2026-11-18';
async function boot(page:Page) {
  await page.clock.install({time:new Date('2026-11-18T06:00:00Z')});
  await page.goto('/'); await expect(page.getByRole('heading',{name:'Daily rounds.'})).toBeVisible();
}
async function answer(page:Page,letter='A') {
  await page.locator(`.option:has(input[value="${letter}"])`).click();
  await expect(page.getByRole('button',{name:'Confirm answer'})).toBeEnabled();
  await page.getByRole('button',{name:'Confirm answer'}).click();
  await expect(page.locator('.answer-feedback, .results-view')).toBeVisible();
}
async function finish(page:Page,date=DATE,correct=true) {
  const qs=questionsForDate(date);
  for(let i=0;i<5;i++) {
    await answer(page,correct?qs[i].correct:qs[i].correct==='A'?'B':'A');
    if(i<4)await page.getByRole('button',{name:'Next question',exact:true}).click();
  }
  await expect(page.getByRole('heading',{name:'Daily challenge complete.'})).toBeVisible();
}
async function profile(page:Page) {
  return page.evaluate(()=>new Promise<any>((resolve,reject)=>{const request=indexedDB.open('neet-pg-daily-v1',1);request.onsuccess=()=>{const db=request.result;const get=db.transaction('profile').objectStore('profile').get('main');get.onsuccess=()=>{resolve(get.result);db.close();};get.onerror=()=>reject(get.error);};request.onerror=()=>reject(request.error);}));
}
test('dashboard loads without errors, remote runtime requests or accessibility label gaps',async({page})=>{
  const errors:string[]=[],remote:string[]=[];page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(!r.url().startsWith('http://127.0.0.1:4173'))remote.push(r.url());});
  await boot(page);await expect(page.getByRole('radio')).toHaveCount(4);await expect(page.getByRole('button',{name:'Next challenge',exact:true})).toBeDisabled();
  await expect(page.getByRole('button',{name:'Confirm answer'})).toBeDisabled();await expect(page.getByRole('button',{name:'Explanation',exact:true})).toHaveCount(0);
  expect(await page.locator('button').evaluateAll(buttons=>buttons.filter(b=>!b.textContent?.trim()&&!b.getAttribute('aria-label')).length)).toBe(0);
  expect(errors).toEqual([]);expect(remote).toEqual([]);
});
test('unsubmitted selection and locked answers survive refresh and explanation stays gated',async({page})=>{
  await boot(page);const statement=await page.locator('.question-statement').textContent();
  await page.locator('.option:has(input[value="B"])').click();await expect(page.getByRole('button',{name:'Confirm answer'})).toBeEnabled();
  await page.reload();await expect(page.locator('.question-statement')).toHaveText(statement!);await expect(page.locator('input[value="B"]')).toBeChecked();
  await page.getByRole('button',{name:'Confirm answer'}).click();await page.getByRole('button',{name:'Explanation',exact:true}).click();
  await expect(page.getByRole('heading',{name:'Solution',exact:true})).toBeVisible();await expect(page.locator('.solution-prose')).toContainText(questionsForDate(DATE)[0].explanation.split('\n')[0]);
  await expect(page.getByRole('radio').first()).toBeDisabled();await page.reload();await expect(page.locator('input[value="B"]')).toBeChecked();await expect(page.getByRole('radio').first()).toBeDisabled();
  const p=await profile(page);expect(p.days[DATE].attempts[questionsForDate(DATE)[0].id].submitted).toBe(true);
});
test('full completion records exact answers, calendar, streak and spoiler-free copy',async({page,context})=>{
  await context.grantPermissions(['clipboard-read','clipboard-write']);await boot(page);await finish(page);
  await expect(page.locator('.score-display>strong')).toHaveText('5/ 5');
  await expect(page.getByRole('button',{name:'18 Nov 2026, today, completed',exact:true})).toBeVisible();
  const p=await profile(page);expect(p.days[DATE].streakEligible).toBe(true);expect(p.days[DATE].completedDay).toBe(DATE);
  await page.getByRole('button',{name:'Share your result'}).click();const text=await page.getByRole('textbox',{name:'Shareable challenge result'}).inputValue();
  expect(text).toContain('🟩🟩🟩🟩🟩');expect(text).toContain('1-Day Streak');for(const q of questionsForDate(DATE))expect(text).not.toContain(q.options[q.correct]);
  await page.getByRole('button',{name:'Copy to clipboard'}).click();expect((await page.evaluate(()=>navigator.clipboard.readText())).replace(/\r\n/g,'\n')).toBe(text);
  await page.getByRole('button',{name:'Close dialog'}).click();await page.reload();await expect(page.getByRole('heading',{name:'Daily challenge complete.'})).toBeVisible();
});
test('incorrect results show red squares and no score is fabricated',async({page})=>{
  await boot(page);await finish(page,DATE,false);await expect(page.locator('.score-display>strong')).toHaveText('0/ 5');
  await expect(page.locator('.result-squares .wrong')).toHaveCount(5);await page.getByRole('button',{name:'Share your result'}).click();
  await expect(page.getByRole('textbox',{name:'Shareable challenge result'})).toContainText('🟥🟥🟥🟥🟥');
});
test('catch-up turns its day green without receiving current streak credit',async({page})=>{
  await boot(page);await page.getByRole('button',{name:'Previous challenge',exact:true}).click();await expect(page.locator('.notice.catchup')).toBeVisible();await finish(page,'2026-11-17');
  const p=await profile(page);expect(p.days['2026-11-17'].completedDay).toBe(DATE);expect(p.days['2026-11-17'].streakEligible).toBe(false);
  await expect(page.locator('.result-streak')).toContainText('0-day streak');await expect(page.getByRole('button',{name:'17 Nov 2026, completed',exact:true})).toBeVisible();
});
test('future dates and future months are not navigable, archive remains accessible',async({page})=>{
  await boot(page);await expect(page.getByRole('button',{name:'Next calendar month'})).toBeDisabled();
  await expect(page.getByRole('button',{name:'19 Nov 2026, not completed',exact:true})).toBeDisabled();
  await page.getByLabel('Choose challenge date').fill('2026-01-01');await expect(page.getByRole('button',{name:'Previous challenge',exact:true})).toBeDisabled();
  await page.getByLabel('Choose challenge date').fill('2026-11-19');await expect(page.locator('.notice.catchup')).toBeVisible();
  await expect(page.getByLabel('Choose challenge date')).toHaveValue('2026-01-01');
});
test('dark theme persists, settings backup exports complete schema',async({page})=>{
  await boot(page);await page.getByRole('button',{name:'Use dark theme'}).click();await expect(page.locator('html')).toHaveAttribute('data-theme','dark');await page.reload();await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
  await page.getByRole('button',{name:'Settings & backups'}).click();const download=page.waitForEvent('download');await page.getByRole('button',{name:'Export backup'}).click();expect((await download).suggestedFilename()).toBe('rounds-backup-2026-11-18.json');
});
test('backup import rejects corruption without losing answers',async({page})=>{
  await boot(page);await answer(page,'A');const before=await profile(page);await page.getByRole('button',{name:'Settings & backups'}).click();
  await page.getByLabel('Import progress backup').setInputFiles({name:'bad.json',mimeType:'application/json',buffer:Buffer.from('{"schemaVersion":99}')});
  await expect(page.locator('.import-message')).toContainText('Unsupported or damaged');expect((await profile(page)).days).toEqual(before.days);
});
test('valid backup restores a complete historical challenge and rejects answer conflicts',async({page})=>{
  await boot(page);await finish(page);const backup=await profile(page);await page.getByRole('button',{name:'Settings & backups'}).click();
  await page.getByLabel('Import progress backup').setInputFiles({name:'rounds.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(backup))});await expect(page.locator('.import-message')).toContainText('Backup merged');
  const id=questionsForDate(DATE)[0].id;backup.days[DATE].attempts[id].selected=backup.days[DATE].attempts[id].selected==='A'?'B':'A';
  await page.getByLabel('Import progress backup').setInputFiles({name:'conflict.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(backup))});await expect(page.locator('.import-message')).toContainText('conflicts with a locked answer');
});
test('simultaneous tabs merge submitted answers atomically',async({page,context})=>{
  await boot(page);const other=await context.newPage();await boot(other);
  await other.getByRole('button',{name:/Question 2,/}).click();
  await Promise.all([answer(page,'A'),answer(other,'B')]);
  const p=await profile(page);expect(p.days[DATE].attempts[questionsForDate(DATE)[0].id].submitted).toBe(true);expect(p.days[DATE].attempts[questionsForDate(DATE)[1].id].submitted).toBe(true);await other.close();
});
test('unavailable IndexedDB falls back to durable local storage',async({page})=>{
  await page.addInitScript(()=>Object.defineProperty(window,'indexedDB',{get(){throw new Error('Blocked');}}));
  await boot(page);await expect(page.getByRole('alert')).toContainText('local storage');await answer(page,'A');await page.reload();
  await expect(page.locator('input[value="A"]')).toBeChecked();await expect(page.getByRole('radio').first()).toBeDisabled();
});
test('unavailable browser storage is explicit and still allows a backup',async({page})=>{
  await page.addInitScript(()=>{Object.defineProperty(window,'indexedDB',{get(){throw new Error('Blocked');}});Object.defineProperty(window,'localStorage',{get(){throw new Error('Blocked');}});});
  await boot(page);await expect(page.getByRole('alert')).toContainText('temporary');await answer(page,'A');await page.getByRole('button',{name:'Settings & backups'}).click();await expect(page.getByText('Temporary session storage',{exact:true})).toBeVisible();
});
test('corrupt IndexedDB record is preserved and not overwritten',async({page})=>{
  await boot(page);await answer(page,'A');
  await page.evaluate(()=>new Promise<void>(resolve=>{const req=indexedDB.open('neet-pg-daily-v1',1);req.onsuccess=()=>{const db=req.result;const tx=db.transaction('profile','readwrite');tx.objectStore('profile').put({schemaVersion:404},'main');tx.oncomplete=()=>{db.close();resolve();};};}));
  await page.reload();await expect(page.getByRole('alert')).toContainText('preserved untouched');await answer(page,'B');expect((await profile(page)).schemaVersion).toBe(404);
  await page.getByRole('button',{name:'Settings & backups'}).click();await expect(page.getByRole('button',{name:'Download preserved original data'})).toBeVisible();
});
test('midnight exposes a new challenge and saved study timezone survives travel',async({page,context})=>{
  await boot(page);await answer(page,'A');await page.clock.setFixedTime(new Date('2026-11-18T18:31:00Z'));await page.reload();
  await expect(page.getByLabel('Choose challenge date')).toHaveValue('2026-11-19');expect((await profile(page)).preferences.timeZone).toMatch(/Kolkata|Calcutta/);
  await page.getByRole('button',{name:'Previous challenge',exact:true}).click();await expect(page.locator('input[value="A"]')).toBeChecked();
});
test('rollback is visible and current progress remains accessible',async({page})=>{
  await boot(page);await answer(page,'A');await page.clock.setFixedTime(new Date('2026-11-17T06:00:00Z'));await page.reload();await expect(page.getByRole('alert')).toContainText('clock moved backwards');
});
test('desktop, tablet and mobile layouts have no page overflow and navigation remains usable',async({page})=>{
  await boot(page);
  for(const width of [1440,1024,768,390,320]) {
    await page.setViewportSize({width,height:1000});
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
    await expect(page.getByRole('button',{name:'Confirm answer'})).toBeVisible();
  }
  await page.setViewportSize({width:390,height:844});await page.getByRole('button',{name:'Open navigation'}).click();await page.getByRole('button',{name:'Challenge archive',exact:true}).click();await expect(page.getByRole('heading',{name:'Challenge archive.'})).toBeVisible();
  await page.getByRole('button',{name:'Open navigation'}).click();await page.getByRole('button',{name:'Your progress',exact:true}).click();await expect(page.getByRole('heading',{name:'Your progress.'})).toBeVisible();
});
test('capture desktop and mobile review artifacts',async({page})=>{
  await boot(page);await page.screenshot({path:'test-results/dashboard-desktop.png',fullPage:true});await page.setViewportSize({width:390,height:844});await page.screenshot({path:'test-results/dashboard-mobile.png',fullPage:true});await page.getByRole('button',{name:'Use dark theme'}).click();await page.screenshot({path:'test-results/dashboard-mobile-dark.png',fullPage:true});
});
test('legacy clipboard fallback works inside a modal when modern clipboard is denied',async({page,context})=>{
  await context.grantPermissions(['clipboard-read','clipboard-write']);await boot(page);await finish(page);
  await page.getByRole('button',{name:'Share your result'}).click();
  await page.evaluate(()=>Object.defineProperty(navigator.clipboard,'writeText',{value:async()=>{throw new DOMException('Denied','NotAllowedError');}}));
  await page.getByRole('button',{name:'Copy to clipboard'}).click();await expect(page.getByRole('status')).toContainText('Result copied');
  expect((await page.evaluate(()=>navigator.clipboard.readText())).replace(/\r\n/g,'\n')).toContain('🟩🟩🟩🟩🟩');
});
test('travel to another browser timezone retains the saved study date and question set',async({page,context,browser})=>{
  await boot(page);await answer(page,'B');const state=await context.storageState({indexedDB:true});
  const traveled=await browser.newContext({baseURL:'http://127.0.0.1:4173',timezoneId:'America/Los_Angeles',storageState:state});
  try{const other=await traveled.newPage();await boot(other);await expect(other.getByLabel('Choose challenge date')).toHaveValue(DATE);await expect(other.locator('input[value="B"]')).toBeChecked();expect((await profile(other)).preferences.timeZone).toMatch(/Kolkata|Calcutta/);}finally{await traveled.close();}
});
test('answers survive closing and restarting the browser process',async()=>{
  test.setTimeout(45_000);const directory=await mkdtemp(resolve('.cache/restart-'));
  const options={headless:true,baseURL:'http://127.0.0.1:4173',timezoneId:'Asia/Kolkata'};
  let persistent=await chromium.launchPersistentContext(directory,options);
  try{const page=persistent.pages()[0]||await persistent.newPage();await boot(page);for(let i=0;i<3;i++){await answer(page,'A');if(i<2)await page.getByRole('button',{name:'Next question',exact:true}).click();}}finally{await persistent.close();}
  persistent=await chromium.launchPersistentContext(directory,options);
  try{const page=persistent.pages()[0]||await persistent.newPage();await boot(page);await expect(page.locator('.quiz-count')).toContainText('3 / 5 confirmed');await expect(page.locator('input[value="A"]')).toBeChecked();await expect(page.getByRole('radio').first()).toBeDisabled();}finally{await persistent.close();}
});
test('a real backup restores on an empty browser profile',async({page,browser})=>{
  await boot(page);await finish(page);const backup=await profile(page);
  const fresh=await browser.newContext({baseURL:'http://127.0.0.1:4173',timezoneId:'Asia/Kolkata'});
  try{const other=await fresh.newPage();await boot(other);await other.getByRole('button',{name:'Settings & backups'}).click();await other.getByLabel('Import progress backup').setInputFiles({name:'backup.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(backup))});await expect(other.locator('.import-message')).toContainText('Backup merged');await other.getByRole('button',{name:'Daily challenge',exact:true}).click();await expect(other.getByRole('heading',{name:'Daily challenge complete.'})).toBeVisible();}finally{await fresh.close();}
});
test('a failed IndexedDB write falls back without losing the answer',async({page})=>{
  await boot(page);await page.evaluate(()=>Object.defineProperty(IDBObjectStore.prototype,'put',{value(){throw new DOMException('Quota exceeded','QuotaExceededError');}}));
  await answer(page,'A');await expect(page.getByRole('alert')).toContainText('local storage');
  expect(await page.evaluate(()=>JSON.parse(localStorage.getItem('neet-pg-progress-v1')!).days['2026-11-18'].attempts)).toBeTruthy();
  await page.reload();await expect(page.locator('input[value="A"]')).toBeChecked();await expect(page.getByRole('radio').first()).toBeDisabled();
});
