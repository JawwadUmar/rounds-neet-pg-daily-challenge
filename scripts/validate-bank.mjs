import assert from 'node:assert/strict';
import { mkdir, readFile, readdir, stat } from 'node:fs/promises';
import { build } from 'esbuild';

await mkdir('.cache',{recursive:true});
await build({entryPoints:['src/data/bank.ts'],outfile:'.cache/bank.mjs',bundle:true,platform:'node',format:'esm'});
const {fullBank,bank,practiceBank}=await import('../.cache/bank.mjs');
const all=await fullBank();
const counts={2018:296,2019:293,2020:300,2021:197,2022:199,2023:197,2024:379,2025:200};
assert.equal(all.length,2251);
assert.equal(bank.length,2251);
assert.equal(new Set(all.map(q=>q.id)).size,all.length);
assert.equal(new Set(bank.map(q=>q.id)).size,bank.length);
const subjects=new Set(practiceBank.map(q=>q.subject));
assert.equal(subjects.size,19);
const existing=new Set();
for(const q of practiceBank) {
  assert.equal(q.examYear,null,q.id);assert.ok(q.statement.length>=100&&q.explanation.length>=200,q.id);
  assert.equal(new Set(Object.values(q.options)).size,4,q.id);
  assert.ok(q.references.length&&q.takeaways.length>=2,q.id);
  assert.ok(q.references.every(r=>r.title&&r.section&&r.url.startsWith('https://')),q.id);
  assert.ok(Object.values(q.optionExplanations).every(t=>t.length>=45),q.id);
  assert.equal(Object.keys(q.optionExplanations).length,4,q.id);
  assert.ok(!existing.has(q.subject+q.topic),q.id);existing.add(q.subject+q.topic);
}
for(const subject of subjects){
  assert.equal(practiceBank.filter(q=>q.subject===subject).length,10);
}
assert.ok(bank.every(q=>['Medium','Hard'].includes(q.difficulty)));
const linked=new Set();
for(const [year,count] of Object.entries(counts)) {
  const questions=all.filter(q=>q.examYear===+year);
  assert.deepEqual(questions.map(q=>q.number),Array.from({length:count},(_,i)=>i+1));
  assert.equal(new Set(questions.map(q=>q.subject)).size,19);
  for(const q of questions) {
    assert.equal(q.id,`pyq-${year}-${q.number}`);
    assert.ok(subjects.has(q.subject)&&q.statement.trim()&&q.explanation.trim(),q.id);
    assert.deepEqual(Object.keys(q.options),['A','B','C','D']);
    assert.ok(Object.values(q.options).every(text=>text.trim()),q.id);
    assert.ok(q.answerText.startsWith('('+q.correct+')'),q.id);
    assert.ok(q.pages.length===2&&q.pages.every(p=>p>=7&&p<=758),q.id);
    if(new Set(Object.values(q.options)).size!==4)assert.ok(q.reviewOnly,q.id);
    for(const image of q.images??[]){
      assert.ok(image.src.startsWith(`assets/images/pyq/${year}/q${q.number}-`),q.id);
      assert.ok(image.width>0&&image.height>0&&image.alt,q.id);
      assert.ok(!linked.has(image.src),image.src);linked.add(image.src);
      assert.ok((await stat('public/'+image.src)).size>0,image.src);
    }
  }
  for(const file of await readdir('public/assets/images/pyq/'+year))assert.ok(linked.has(`assets/images/pyq/${year}/`+file),file);
}
assert.equal(linked.size,495);
const mixed=JSON.parse(await readFile('src/data/schedule-v2.json','utf8'));
const full=JSON.parse(await readFile('src/data/schedule-v3.json','utf8'));
const dailyPdf=bank.filter(q=>q.examYear!==null);
const dailyPdfIds=new Set(dailyPdf.map(q=>q.id));
assert.equal(dailyPdf.length,2061);
assert.equal(dailyPdfIds.size,dailyPdf.length);
assert.equal(dailyPdf.filter(q=>!full.ids.slice(0,2251).includes(q.id)).length,0);
assert.equal(full.ids.length,full.cycleDays*5);
assert.equal(full.ids.length,2255);
assert.equal(new Set(full.ids.slice(0,2251)).size,2251);
assert.deepEqual(new Set(full.ids.slice(0,2251)),new Set(bank.map(q=>q.id)));
assert.equal(new Set(full.ids.slice(2251)).size,4);
assert.ok(full.ids.slice(2251).every(id=>new Set(full.ids.slice(0,2251)).has(id)));
assert.equal(mixed.ids.filter(id=>dailyPdfIds.has(id)).length,95);
assert.ok(dailyPdf.every(q=>['Medium','Hard'].includes(q.difficulty)));
assert.equal(dailyPdf.filter(q=>q.difficultyEstimated).length,1966);
assert.equal(dailyPdf.filter(q=>!q.difficultyEstimated).length,95);
assert.ok(dailyPdf.filter(q=>q.difficultyEstimated).every(q=>q.difficulty==='Medium'));
console.log('Passed: 2,061 paired paper entries, 190 original questions, 19 subjects, 495 linked figures and a 451-day rotation covering all 2,251 unique questions before its final-day padding.');
