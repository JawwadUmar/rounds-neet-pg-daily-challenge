import { createHash } from 'node:crypto';
import { writeFile } from 'node:fs/promises';
import { build } from 'esbuild';

await build({ entryPoints: ['src/data/bank.ts'], outfile: '.cache/scheduling.mjs', bundle: true, platform: 'node', format: 'esm' });
const { bank } = await import('../.cache/scheduling.mjs');
const hash = value => createHash('sha256').update('rounds-mixed-v2/' + value).digest('hex');
const shuffle = values => [...values].sort((a,b) => hash(a).localeCompare(hash(b),'en'));
const subjects = shuffle(new Set(bank.map(q => q.subject)));
const queues = new Map();
for (const subject of subjects) {
  for (const type of ['Practice','PYQ']) {
    queues.set(subject + type, shuffle(bank.filter(q => q.subject === subject && q.type === type).map(q => q.id)));
  }
}
const ids = Array.from({length:bank.length}, (_,i) => {
  const subject = subjects[i % subjects.length];
  const type = i % 3 === 0 ? 'PYQ' : 'Practice';
  const id = queues.get(subject + type).shift();
  if (!id) throw new Error('Unbalanced subject or question type');
  return id;
});
if (ids.length % 5 || new Set(ids).size !== bank.length) throw new Error('Incomplete freeze');
await writeFile(process.argv[2] ?? 'src/data/schedule-v2.json',JSON.stringify({
  version:'v2', effectiveFrom:'2026-11-18', cycleDays:ids.length / 5, ids,
},null,2)+'\n',{flag:'wx'});
