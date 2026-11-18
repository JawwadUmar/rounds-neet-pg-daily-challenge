import { test } from 'node:test';
import assert from 'node:assert/strict';
import { bank, byId, fullBank, practiceBank } from '../src/data/bank';
import { SUBJECTS } from '../src/data/types';
import { loadShelf, loadPapers } from '../src/data/pyq';
import { addDays, calendarMonth, dayInZone, navigable, ordinal, secondsToMidnight } from '../src/core/dates';
import { questionsForDate } from '../src/core/schedule';
import { applyAction, clockIssue, emptyProgress, isComplete, mergeBackup, scoreDay, scoredCount, validateProgress, type Progress } from '../src/core/model';
import { statistics } from '../src/core/stats';
import { dailySubjectMetrics, pyqYearMetrics, accuracyForQuestions } from '../src/core/performance';
import { resultText } from '../src/core/share';
const at = (date: string) => new Date(date + 'T12:00:00+05:30');
function finish(progress: Progress, day: string, actual = day, uncertain = false) {
  let next = progress;
  for (const question of questionsForDate(day)) {
    if(!question.reviewOnly)next = applyAction(next, { type: 'select', date: day, id: question.id, selected: question.correct }, at(actual));
    next = applyAction(next, { type: 'submit', date: day, id: question.id, clockUncertain: uncertain }, at(actual));
  }
  return next;
}
test('daily bank and whole library retain distinct records and their original letters', async () => {
  const full=await fullBank();
  assert.equal(bank.length,2251); assert.equal(byId.size,2251);
  for (const subject of SUBJECTS) assert.equal(bank.filter(q => q.subject === subject).length,practiceBank.filter(q=>q.subject===subject).length+full.filter(q=>q.subject===subject&&q.examYear!==null).length);
  assert.equal(bank.filter(q=>q.examYear!==null).length,2061);
  assert.ok(bank.filter(q=>q.examYear!==null).every(q=>q.type==='PYQ'&&q.examYear&&q.difficulty));
  for (const q of practiceBank) { assert.equal(q.type,'Practice'); assert.equal(q.examYear,null); assert.ok(q.references.length); assert.equal(new Set(Object.values(q.options)).size,4); }
  assert.equal(new Set(full.map(q=>q.id)).size,2251);
  const first=full.find(q=>q.id==='pyq-2025-1')!;
  assert.equal(first.correct,'D');assert.equal(first.options.D,'Hypoglossal nerve');assert.equal(first.images?.length,1);
});
test('five distinct subjects, fixed selection and no repeats in any 38-day window', () => {
  for (let offset = 0; offset < 76; offset++) {
    const ids: string[] = [];
    for (let i = 0; i < 38; i++) {
      const date = addDays('2026-01-01',offset+i); const qs = questionsForDate(date);
      assert.equal(qs.length,5); assert.equal(new Set(qs.map(q => q.id)).size,5); assert.equal(new Set(qs.map(q => q.subject)).size,5);
      assert.deepEqual(qs, questionsForDate(date)); ids.push(...qs.map(q => q.id));
    }
    assert.equal(new Set(ids).size,190);
  }
});
test('frozen schedule protects historical mappings', () => {
  assert.deepEqual(questionsForDate('2026-01-01').map(q => q.id), ['psy-02','pat-10','ana-06','for-02','med-06']);
});
test('mixed edition covers the entire qualified pool without repeats and combines both types each day',()=>{
  const ids:string[]=[];
  for(let i=0;i<57;i++){
    const qs=questionsForDate(addDays('2026-11-18',i),'v2');
    assert.equal(new Set(qs.map(q=>q.subject)).size,5,`${i}: ${qs.map(q=>`${q.id}=${q.subject}`).join(', ')}`);
    assert.equal(new Set(qs.map(q=>q.type)).size,2);
    assert.ok(qs.every(q=>q.difficulty&&!q.reviewOnly));ids.push(...qs.map(q=>q.id));
  }
  assert.equal(new Set(ids).size,285);assert.deepEqual(questionsForDate('2027-01-14','v2'),questionsForDate('2026-11-18','v2'));
});
test('full-PYQ edition rotates through every unique question before final padding repeats',()=>{
  const ids:string[]=[];
  for(let i=0;i<451;i++){
    const qs=questionsForDate(addDays('2026-11-19',i));
    assert.equal(new Set(qs.map(q=>q.subject)).size,5,`${i}: ${qs.map(q=>`${q.id}=${q.subject}`).join(', ')}`);
    assert.ok(qs.some(q=>!q.reviewOnly),`${i}: all five questions are read-only`);
    ids.push(...qs.map(q=>q.id));
  }
  assert.equal(ids.length,2255);assert.equal(new Set(ids.slice(0,2251)).size,2251);
  assert.deepEqual(new Set(ids.slice(0,2251)),new Set(bank.map(q=>q.id)));
  assert.equal(new Set(ids.slice(2251)).size,4);
  assert.ok(ids.slice(2251).every(id=>ids.slice(0,2251).includes(id)));
  assert.deepEqual(questionsForDate(addDays('2026-11-19',451)),questionsForDate('2026-11-19'));
  const date=Array.from({length:451},(_,i)=>addDays('2026-11-19',i)).find(d=>questionsForDate(d).some(q=>q.reviewOnly))!;
  const qs=questionsForDate(date),p=finish(emptyProgress(at(date),'Asia/Kolkata'),date),record=p.days[date];
  assert.equal(isComplete(record),true);assert.equal(scoredCount(record),qs.filter(q=>!q.reviewOnly).length);
  assert.equal(scoreDay(record),scoredCount(record));
  assert.ok(qs.filter(q=>q.reviewOnly).every(q=>record.attempts[q.id].submitted&&record.attempts[q.id].selected===null));
});
test('a legacy same-date record keeps its original questions, answers and share score',()=>{
  const date='2026-11-18',now=at(date),p=emptyProgress(now,'Asia/Kolkata');
  const old=questionsForDate(date,'v1');p.days[date]={date,version:'v1',questionIds:old.map(q=>q.id),
    attempts:Object.fromEntries(old.map(q=>[q.id,{selected:null,submitted:false,submittedAt:null}])),
    completedAt:null,completedDay:null,streakEligible:false};
  let next=validateProgress(p);
  for(const q of old){
    next=applyAction(next,{type:'select',date,id:q.id,selected:q.correct},now);
    next=applyAction(next,{type:'submit',date,id:q.id},now);
  }
  assert.match(resultText(next.days[date],1),/5\/5/);
  assert.throws(()=>mergeBackup(next,finish(emptyProgress(now,'Asia/Kolkata'),date)));
});
test('library answers lock and survive backup without affecting challenge history',()=>{
  const day='2026-11-18',now=at(day),id='pyq-2025-1';
  const p=emptyProgress(now,'Asia/Kolkata');
  const selected=applyAction(p,{type:'study-select',id,selected:'D'},now);
  const confirmed=applyAction(selected,{type:'study-submit',id},now);
  assert.equal(applyAction(confirmed,{type:'study-select',id,selected:'A'},now),confirmed);
  assert.deepEqual(mergeBackup(p,confirmed).study,confirmed.study);
  assert.equal(statistics(confirmed,day).attempted,0);assert.deepEqual(confirmed.days,{});
  assert.throws(()=>applyAction(p,{type:'study-select',id:'pyq-2018-998',selected:'A'},now));
});
test('daily and PYQ metrics use separate persisted attempt records and scoped PYQ clearing',()=>{
  const date='2026-11-19',now=at(date),p=emptyProgress(now,'Asia/Kolkata');
  const q1=byId.get('pyq-2019-1')!,q2=byId.get('pyq-2019-2')!,other=bank.find(q=>q.examYear===2019&&q.subject!==q1.subject)!,nextYear=byId.get('pyq-2020-1')!;
  let next=p;
  for(const [q,answer] of [[q1,q1.correct],[q2,q2.correct==='A'?'B':'A'],[other,other.correct],[nextYear,nextYear.correct]] as const){
    next=applyAction(next,{type:'study-select',id:q.id,selected:answer},now);
    next=applyAction(next,{type:'study-submit',id:q.id},now);
  }
  const year=pyqYearMetrics(next).find(row=>row.year===2019)!;
  assert.deepEqual([year.attempted,year.available,year.correct,year.accuracy],[3,293,2,67]);
  const subject=accuracyForQuestions([q1,q2],next.study!);
  assert.deepEqual([subject.attempted,subject.available,subject.correct,subject.accuracy],[2,2,1,50]);
  assert.equal(dailySubjectMetrics(next,date).length,0);

  const challengeQ=questionsForDate(date)[0];
  next=applyAction(next,{type:'select',date,id:challengeQ.id,selected:challengeQ.correct},now);
  next=applyAction(next,{type:'submit',date,id:challengeQ.id},now);
  assert.equal(dailySubjectMetrics(next,date).find(row=>row.subject===challengeQ.subject)?.attempted,1);
  assert.equal(pyqYearMetrics(next).find(row=>row.year===2019)?.attempted,3);

  next=applyAction(next,{type:'clear-pyq-performance',year:2019,subject:q1.subject},now);
  assert.equal(next.study?.[q1.id],undefined);assert.equal(next.study?.[q2.id],undefined);
  assert.ok(next.study?.[other.id]?.submitted);assert.ok(next.study?.[nextYear.id]?.submitted);
  assert.equal(next.days[date].attempts[challengeQ.id].submitted,true);
  next=applyAction(next,{type:'clear-pyq-performance',year:2019},now);
  assert.equal(Object.keys(next.study??{}).some(id=>byId.get(id)?.examYear===2019),false);
  assert.ok(next.study?.[nextYear.id]?.submitted);
});
test('upgrading a read-only legacy visit preserves the set the student already saw',()=>{
  const date='2026-11-18',legacy=emptyProgress(at(date),'Asia/Kolkata');
  delete legacy.scheduleEdition;
  const restored=validateProgress(legacy);
  assert.deepEqual(restored.days[date].questionIds,questionsForDate(date,'v1').map(q=>q.id));
  assert.equal(isComplete(restored.days[date]),false);
  assert.deepEqual(validateProgress(restored),restored);
});
test('all subject files select exactly their original year-wise records, including disjoint sections',async()=>{
  const all=await loadPapers();
  for(const subject of SUBJECTS){
    const subjectIds=(await loadShelf('all',subject)).map(q=>q.id);
    assert.deepEqual(subjectIds,all.filter(q=>q.subject===subject).map(q=>q.id));
  }
  assert.ok((await loadShelf(2019,'General Medicine')).some(q=>q.number===293));
});
test('calendar arithmetic crosses leap days, year and DST without local-time drift', () => {
  assert.equal(addDays('2028-02-28',1),'2028-02-29'); assert.equal(addDays('2028-02-29',1),'2028-03-01');
  assert.equal(addDays('2026-12-31',1),'2027-01-01'); assert.equal(ordinal('2026-03-09')-ordinal('2026-03-08'),1);
  assert.equal(calendarMonth('2026-11').filter(Boolean).length,30);
  assert.throws(() => ordinal('2026-02-30'));
});
test('saved study zone decides midnight independently of device zone', () => {
  const now = new Date('2026-11-18T18:31:00Z');
  assert.equal(dayInZone(now,'Asia/Kolkata'),'2026-11-19'); assert.equal(dayInZone(now,'America/New_York'),'2026-11-18');
  assert.equal(dayInZone(new Date('2026-11-18T18:29:00Z'),'Asia/Kolkata'),'2026-11-18');
  assert.ok(Math.abs(secondsToMidnight(new Date('2026-11-18T18:29:00Z'),'Asia/Kolkata')-60)<=1);
});
test('future/archive boundaries are enforced in navigation and submission', () => {
  assert.equal(navigable('2026-11-19','2026-11-18'),false); assert.equal(navigable('2025-12-31','2026-11-18'),false);
  assert.throws(() => applyAction(emptyProgress(at('2026-11-18'),'Asia/Kolkata'), { type:'select',date:'2026-11-19',id:questionsForDate('2026-11-19')[0].id,selected:'A' },at('2026-11-18')));
});
test('drafts survive serialization, answers lock after confirmation', () => {
  const day = '2026-11-18', q = questionsForDate(day)[0]; let p = emptyProgress(at(day),'Asia/Kolkata');
  p = applyAction(p,{ type:'select',date:day,id:q.id,selected:'A' },at(day));
  p = validateProgress(JSON.parse(JSON.stringify(p))); assert.equal(p.days[day].attempts[q.id].selected,'A');
  p = applyAction(p,{ type:'submit',date:day,id:q.id },at(day));
  const changed = applyAction(p,{ type:'select',date:day,id:q.id,selected:'B' },at(day));
  assert.equal(changed.days[day].attempts[q.id].selected,'A'); assert.equal(isComplete(changed.days[day]),false);
  assert.equal(statistics(changed,day).completed,0);
});
test('only all five confirmed answers complete a day and duplicate submissions are idempotent', () => {
  let p = emptyProgress(at('2026-11-18'),'Asia/Kolkata'); p = finish(p,'2026-11-18');
  assert.equal(isComplete(p.days['2026-11-18']),true); const before = JSON.stringify(p);
  const next = applyAction(p,{ type:'submit',date:'2026-11-18',id:questionsForDate('2026-11-18')[4].id },at('2026-11-18'));
  assert.equal(JSON.stringify(next),before); assert.equal(statistics(next,'2026-11-18').current,1);
});
test('streak stays available while today is pending and breaks after a missed day', () => {
  let p = emptyProgress(at('2026-11-15'),'Asia/Kolkata'); p=finish(p,'2026-11-15'); p=finish(p,'2026-11-16');
  assert.equal(statistics(p,'2026-11-17').current,2); assert.equal(statistics(p,'2026-11-18').current,0);
  assert.equal(statistics(p,'2026-11-18').longest,2);
});
test('catch-up turns the original date complete without repairing a historical streak', () => {
  let p=emptyProgress(at('2026-11-15'),'Asia/Kolkata'); p=finish(p,'2026-11-15'); p=finish(p,'2026-11-16');
  p=finish(p,'2026-11-18'); p=finish(p,'2026-11-17','2026-11-18');
  assert.equal(isComplete(p.days['2026-11-17']),true); assert.equal(p.days['2026-11-17'].completedDay,'2026-11-18');
  assert.equal(p.days['2026-11-17'].streakEligible,false);
  assert.deepEqual([statistics(p,'2026-11-18').current,statistics(p,'2026-11-18').longest,statistics(p,'2026-11-18').completed],[1,2,4]);
  validateProgress(p);
});
test('finishing yesterday after midnight is catch-up even if four answers were on time', () => {
  const date='2026-11-18'; let p=emptyProgress(at(date),'Asia/Kolkata'); const qs=questionsForDate(date);
  for(const q of qs.slice(0,4)) { p=applyAction(p,{type:'select',date,id:q.id,selected:q.correct},at(date)); p=applyAction(p,{type:'submit',date,id:q.id},at(date)); }
  p=applyAction(p,{type:'select',date,id:qs[4].id,selected:qs[4].correct},at('2026-11-19')); p=applyAction(p,{type:'submit',date,id:qs[4].id},at('2026-11-19'));
  assert.equal(p.days[date].streakEligible,false); assert.equal(statistics(p,'2026-11-19').current,0);
});
test('clock rollback and in-session jumps are detected and do not award streak credit', () => {
  let p=emptyProgress(at('2026-11-19'),'Asia/Kolkata'); assert.ok(clockIssue(p,at('2026-11-18')));
  assert.ok(clockIssue(p,at('2026-11-20'),{ wall:at('2026-11-19').getTime(),mono:100 },200));
  p=finish(p,'2026-11-18'); assert.equal(p.days['2026-11-18'].streakEligible,false);
  const uncertain=finish(emptyProgress(at('2026-11-18'),'Asia/Kolkata'),'2026-11-18','2026-11-18',true);
  assert.equal(statistics(uncertain,'2026-11-18').current,0);
});
test('share output reflects actual results and contains no stems or option answers', () => {
  const p=finish(emptyProgress(at('2026-11-18'),'Asia/Kolkata'),'2026-11-18'); const text=resultText(p.days['2026-11-18'],1);
  assert.ok(text.includes('5/5')); assert.ok(text.includes('🟩🟩🟩🟩🟩')); assert.ok(text.includes('1-Day Streak'));
  for (const q of questionsForDate('2026-11-18')) assert.ok(!text.includes(q.options[q.correct]));
});
test('corrupt progress and fabricated catch-up eligibility are rejected', () => {
  const p=finish(emptyProgress(at('2026-11-18'),'Asia/Kolkata'),'2026-11-17','2026-11-18'); p.days['2026-11-17'].streakEligible=true;
  assert.throws(()=>validateProgress(p)); assert.throws(()=>validateProgress({schemaVersion:99}));
});
test('backup merges preserve locked answers and never repair catch-up streaks',()=>{
  const current=finish(emptyProgress(at('2026-11-18'),'Asia/Kolkata'),'2026-11-18');
  const backup=finish(emptyProgress(at('2026-11-18'),'Asia/Kolkata'),'2026-11-17','2026-11-18');
  const merged=mergeBackup(current,backup,at('2026-11-18'));
  assert.equal(statistics(merged,'2026-11-18').completed,2);assert.equal(statistics(merged,'2026-11-18').current,1);
  assert.equal(merged.days['2026-11-17'].streakEligible,false);
  const conflict=structuredClone(current),id=questionsForDate('2026-11-18')[0].id;
  conflict.days['2026-11-18'].attempts[id].selected=conflict.days['2026-11-18'].attempts[id].selected==='A'?'B':'A';
  assert.throws(()=>mergeBackup(current,conflict));assert.equal(current.days['2026-11-18'].attempts[id].selected,questionsForDate('2026-11-18')[0].correct);
});
test('combining partial backups cannot fabricate an unrecorded completion',()=>{
  const day='2026-11-18';let first=emptyProgress(at(day),'Asia/Kolkata'),second=emptyProgress(at(day),'Asia/Kolkata');const qs=questionsForDate(day);
  for(let i=0;i<5;i++){let p=i<3?first:second;p=applyAction(p,{type:'select',date:day,id:qs[i].id,selected:'A'},at(day));p=applyAction(p,{type:'submit',date:day,id:qs[i].id},at(day));if(i<3)first=p;else second=p;}
  assert.throws(()=>mergeBackup(first,second),/unrecorded completion/);
});
test('a backup can set the study timezone only before existing challenge history',()=>{
  const backup=finish(emptyProgress(at('2026-11-18'),'Asia/Kolkata'),'2026-11-18');
  const empty=emptyProgress(at('2026-11-18'),'America/New_York');assert.equal(mergeBackup(empty,backup).preferences.timeZone,'Asia/Kolkata');
  const existing=finish(empty,'2026-11-18');assert.throws(()=>mergeBackup(existing,backup),/different study timezone/);
});
test('bookmarking an unanswered question preserves a navigable review date',()=>{
  const day='2026-11-18',id=questionsForDate(day)[0].id;
  const p=applyAction(emptyProgress(at(day),'Asia/Kolkata'),{type:'bookmark',id,date:day},at(day));
  assert.equal(p.bookmarks[0],id);assert.ok(p.days[day]);assert.equal(isComplete(p.days[day]),false);validateProgress(p);
});
