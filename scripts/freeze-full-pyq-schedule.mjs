import { createHash } from 'node:crypto';
import { writeFile } from 'node:fs/promises';
import { build } from 'esbuild';

await build({ entryPoints: ['src/data/bank.ts'], outfile: '.cache/full-schedule-bank.mjs', bundle: true, platform: 'node', format: 'esm' });
const { bank } = await import('../.cache/full-schedule-bank.mjs');
const hash = value => createHash('sha256').update('rounds-full-pyq-v3/' + value).digest('hex');
const subjects = [...new Set(bank.map(q => q.subject))].sort((a,b) => hash(a).localeCompare(hash(b),'en'));
const queues = new Map(subjects.map(subject => [subject, bank.filter(q => q.subject === subject).map(q => q.id).sort((a,b) => hash(a).localeCompare(hash(b),'en'))]));
const ids = [];
while (ids.length + 5 <= bank.length) {
  const available = subjects.filter(subject=>queues.get(subject).length)
    .sort((a,b)=>queues.get(b).length-queues.get(a).length || hash(a).localeCompare(hash(b),'en'));
  if (available.length < 5) throw new Error('Fewer than five subjects remain before the final partial day.');
  for (const subject of available.slice(0,5)) ids.push(queues.get(subject).shift());
}
for (const subject of subjects) if (queues.get(subject).length) ids.push(...queues.get(subject));
// 2,251 entries leave one slot in the final five-question day. Append four
// distinct-subject IDs only after every question has appeared once.
const byId = new Map(bank.map(q=>[q.id,q]));
const paddedSubjects = new Set([byId.get(ids.at(-1)).subject]);
const padding = [];
for (const id of ids) {
  const subject = byId.get(id).subject;
  if (!paddedSubjects.has(subject)) { padding.push(id); paddedSubjects.add(subject); }
  if (padding.length===4) break;
}
ids.push(...padding);
if (padding.length!==4 || ids.length % 5 || new Set(ids.slice(0,bank.length)).size !== bank.length || new Set(ids.slice(-5)).size !== 5 || new Set(ids.slice(-5).map(id=>byId.get(id).subject)).size!==5) throw new Error('Incomplete or repeated full-PYQ schedule.');
await writeFile(process.argv[2] ?? 'src/data/schedule-v3.json',JSON.stringify({
  version:'v3', effectiveFrom:'2026-11-19', cycleDays:ids.length / 5, ids,
},null,2)+'\n',{flag:'wx'});
console.log(`Frozen v3: ${bank.length} unique questions, ${ids.length / 5}-day cycle; final-day repeats begin only after full coverage.`);
