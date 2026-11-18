// Run deliberately only for a NEW edition. Never regenerate an existing historical manifest.
import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
const target = new URL('../src/data/schedule-v1.json', import.meta.url);
try { await readFile(target); throw new Error('v1 is already frozen; create a new date-effective edition instead.'); }
catch (e) { if (e.code !== 'ENOENT') throw e; }
const { practiceBank: bank } = await import('../.cache/bank.mjs');
const hash = value => createHash('sha256').update('neet-pg-v1:' + value).digest('hex');
const subjects = [...new Set(bank.map(q => q.subject))].sort((a,b) => hash(a).localeCompare(hash(b)));
const groups = new Map(subjects.map(subject => [subject, bank.filter(q => q.subject === subject).sort((a,b) => hash(a.id).localeCompare(hash(b.id))).map(q => q.id)]));
const ids = Array.from({ length: 190 }, (_, i) => groups.get(subjects[i % 19])[Math.floor(i / 19)]);
await writeFile(target, JSON.stringify({ version: 'v1', effectiveFrom: '2026-01-01', cycleDays: 38, ids }, null, 2) + '\n');
console.log('Frozen v1: 190 unique slots, 38-day cycle.');
