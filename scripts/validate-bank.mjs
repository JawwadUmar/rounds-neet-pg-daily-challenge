import { build } from 'esbuild';
import { mkdir } from 'node:fs/promises';
await mkdir('.cache', { recursive: true });
await build({ entryPoints: ['src/data/bank.ts'], outfile: '.cache/bank.mjs', bundle: true, platform: 'node', format: 'esm' });
const { bank } = await import('../.cache/bank.mjs');
const errors = [];
const ids = new Set();
const stems = new Set();
const topics = new Set();
const coverage = new Map();
const answers = { A: 0, B: 0, C: 0, D: 0 };
for (const q of bank) {
  const fail = message => errors.push(`${q.id}: ${message}`);
  if (ids.has(q.id)) fail('duplicate id');
  ids.add(q.id);
  if (stems.has(q.statement.toLowerCase())) fail('duplicate stem');
  stems.add(q.statement.toLowerCase());
  const topic = q.subject + ':' + q.topic;
  if (topics.has(topic)) fail('duplicate subject/topic');
  topics.add(topic);
  coverage.set(q.subject, (coverage.get(q.subject) || 0) + 1);
  if (!['Medium', 'Hard'].includes(q.difficulty)) fail('invalid difficulty');
  if (q.statement.length < 100) fail('insufficiently developed stem');
  if (Object.keys(q.options).join('') !== 'ABCD') fail('must have exactly four labeled options');
  if (new Set(Object.values(q.options)).size !== 4) fail('duplicate options');
  if (!Object.hasOwn(q.options, q.correct)) fail('missing correct answer');
  if (q.explanation.length < 200) fail('insufficient explanation');
  for (const letter of ['A','B','C','D']) if ((q.optionExplanations[letter] || '').length < 45) fail(`missing substantive ${letter} rationale`);
  if (q.takeaways.length < 2) fail('need two learning points');
  if (!q.provenance || !q.references.length || q.references.some(r => !r.title || !r.section || !r.url.startsWith('https://'))) fail('missing references/provenance');
  if (q.type === 'Practice' && q.examYear !== null) fail('practice question must not have exam year');
  if (q.type === 'PYQ' && !Number.isInteger(q.examYear)) fail('PYQ requires verified year');
  answers[q.correct]++;
}
if (bank.length !== 190 || coverage.size !== 19 || [...coverage.values()].some(n => n !== 10)) errors.push('Expected 190 questions: 10 per each of 19 subjects');
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(JSON.stringify({ status: 'passed', questions: bank.length, subjects: coverage.size, perSubject: 10, practice: bank.filter(q => q.type === 'Practice').length, medium: bank.filter(q => q.difficulty === 'Medium').length, hard: bank.filter(q => q.difficulty === 'Hard').length, answerDistribution: answers }, null, 2));
