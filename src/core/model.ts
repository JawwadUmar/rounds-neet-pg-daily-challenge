import type { Letter } from '../data/types';
import { browserZone, dayInZone, isDay, navigable, validZone } from './dates';
import { questionsForDate, SCHEDULE_VERSION } from './schedule';
export interface Attempt { selected: Letter | null; submitted: boolean; submittedAt: string | null }
export interface DailyRecord {
  date: string; version: string; questionIds: string[]; attempts: Record<string, Attempt>;
  completedAt: string | null; completedDay: string | null; streakEligible: boolean;
}
export interface Progress {
  schemaVersion: 1; revision: number; createdAt: string; updatedAt: string; maxSeenAt: string;
  preferences: { theme: 'light' | 'dark'; timeZone: string };
  days: Record<string, DailyRecord>; bookmarks: string[];
}
const letters = ['A', 'B', 'C', 'D'];
const timestamp = (v: unknown): v is string => typeof v === 'string' && Number.isFinite(Date.parse(v)) && new Date(v).toISOString() === v;
export function emptyProgress(now = new Date(), timeZone = browserZone()): Progress {
  const iso = now.toISOString();
  return { schemaVersion: 1, revision: 0, createdAt: iso, updatedAt: iso, maxSeenAt: iso, preferences: { theme: 'light', timeZone }, days: {}, bookmarks: [] };
}
export function createDay(day: string): DailyRecord {
  const questionIds = questionsForDate(day).map(q => q.id);
  return { date: day, version: SCHEDULE_VERSION, questionIds, attempts: Object.fromEntries(questionIds.map(id => [id, { selected: null, submitted: false, submittedAt: null }])), completedAt: null, completedDay: null, streakEligible: false };
}
export function submittedCount(day?: DailyRecord): number { return day ? day.questionIds.filter(id => day.attempts[id]?.submitted).length : 0; }
export function scoreDay(day: DailyRecord): number { return questionsForDate(day.date).filter(q => day.attempts[q.id]?.submitted && day.attempts[q.id].selected === q.correct).length; }
export function isComplete(day?: DailyRecord): boolean { return !!day?.completedAt && submittedCount(day) === 5; }
export function clockIssue(progress: Progress, now: Date, baseline?: { wall: number; mono: number }, monotonic?: number): string | null {
  if (now.getTime() < Date.parse(progress.maxSeenAt) - 120_000) return 'The device clock moved backwards. Check your date and time. New completions will be saved without streak credit while the clock is inconsistent.';
  if (baseline && monotonic !== undefined && Math.abs((now.getTime() - baseline.wall) - (monotonic - baseline.mono)) > 300_000) return 'A device-clock change was detected. Check your date and time, then reload. New completions are saved without streak credit until resolved.';
  return null;
}
export type Action =
  | { type: 'select' | 'submit'; date: string; id: string; selected?: Letter; clockUncertain?: boolean }
  | { type: 'theme'; theme: 'light' | 'dark' }
  | { type: 'bookmark'; id: string; date?: string }
  | { type: 'touch' };
export function applyAction(progress: Progress, action: Action, now = new Date()): Progress {
  const next = structuredClone(progress);
  if (action.type === 'theme') next.preferences.theme = action.theme;
  else if (action.type === 'bookmark') {
    const removing=next.bookmarks.includes(action.id);
    next.bookmarks = removing ? next.bookmarks.filter(id => id !== action.id) : [...next.bookmarks, action.id];
    if(!removing && action.date && navigable(action.date,dayInZone(now,next.preferences.timeZone)) && questionsForDate(action.date).some(q=>q.id===action.id)) next.days[action.date] ??= createDay(action.date);
  }
  else if (action.type === 'select' || action.type === 'submit') {
    const today = dayInZone(now, next.preferences.timeZone);
    if (!navigable(action.date, today)) throw new Error('Future or unavailable challenges cannot be attempted.');
    const day = next.days[action.date] ??= createDay(action.date);
    const attempt = day.attempts[action.id];
    if (!attempt || !day.questionIds.includes(action.id)) throw new Error('Question does not belong to this challenge.');
    if (attempt.submitted) return progress;
    if (action.type === 'select') {
      if (!action.selected || !letters.includes(action.selected)) throw new Error('Select a valid answer.');
      attempt.selected = action.selected;
    } else {
      if (!attempt.selected) throw new Error('Choose an answer before confirming.');
      attempt.submitted = true;
      attempt.submittedAt = now.toISOString();
      if (submittedCount(day) === 5 && !day.completedAt) {
        day.completedAt = now.toISOString(); day.completedDay = today;
        day.streakEligible = action.date === today && !action.clockUncertain && !clockIssue(progress, now);
      }
    }
  }
  next.revision++;
  next.updatedAt = now.toISOString();
  if (now.toISOString() > next.maxSeenAt) next.maxSeenAt = now.toISOString();
  return next;
}

// Reject inconsistent backups/storage rather than silently assigning credit or deleting progress.
export function validateProgress(value: unknown): Progress {
  if (!value || typeof value !== 'object') throw new Error('Progress file is not an object.');
  const p = value as Progress;
  if (p.schemaVersion !== 1 || !Number.isInteger(p.revision) || p.revision < 0 || !timestamp(p.createdAt) || !timestamp(p.updatedAt) || !timestamp(p.maxSeenAt)) throw new Error('Unsupported or damaged progress format.');
  if (!p.preferences || !['light','dark'].includes(p.preferences.theme) || !validZone(p.preferences.timeZone) || !Array.isArray(p.bookmarks) || p.bookmarks.some(id => typeof id !== 'string') || !p.days || typeof p.days !== 'object' || Array.isArray(p.days)) throw new Error('Invalid preferences or challenge records.');
  for (const [date, d] of Object.entries(p.days)) {
    if (!isDay(date) || date !== d.date || d.version !== SCHEDULE_VERSION || !Array.isArray(d.questionIds)) throw new Error('Invalid challenge date/version.');
    if (JSON.stringify(d.questionIds) !== JSON.stringify(questionsForDate(date).map(q => q.id))) throw new Error('Saved challenge does not match its frozen schedule.');
    if (!d.attempts || Object.keys(d.attempts).length !== 5) throw new Error('Invalid attempt records.');
    for (const id of d.questionIds) {
      const a = d.attempts[id];
      if (!a || (a.selected !== null && !letters.includes(a.selected)) || typeof a.submitted !== 'boolean' || (a.submitted && (!a.selected || !timestamp(a.submittedAt))) || (!a.submitted && a.submittedAt !== null)) throw new Error('Invalid submitted answer.');
    }
    const complete = submittedCount(d) === 5;
    if (complete !== !!d.completedAt || typeof d.streakEligible !== 'boolean') throw new Error('Inconsistent completion record.');
    if (complete) {
      if (!timestamp(d.completedAt) || !isDay(d.completedDay) || d.completedDay !== dayInZone(new Date(d.completedAt), p.preferences.timeZone) || d.completedDay < date) throw new Error('Invalid completion timestamp.');
      const latest = d.questionIds.map(id => d.attempts[id].submittedAt!).sort().at(-1)!;
      if (d.completedAt < latest) throw new Error('Completion predates submitted answers.');
      if (d.streakEligible && d.completedDay !== date) throw new Error('Catch-up cannot receive streak credit.');
    } else if (d.completedDay !== null || d.streakEligible) throw new Error('Incomplete challenge has completion credit.');
  }
  return structuredClone(p);
}

export function mergeBackup(current: Progress, raw: unknown, now = new Date()): Progress {
  const incoming=validateProgress(raw);
  if(incoming.preferences.timeZone!==current.preferences.timeZone && Object.keys(current.days).length) throw new Error('Backup uses a different study timezone. Import into an empty browser profile to preserve date history.');
  const merged=structuredClone(current);
  if(!Object.keys(merged.days).length)merged.preferences.timeZone=incoming.preferences.timeZone;
  for(const [date,record] of Object.entries(incoming.days)) {
    const existing=merged.days[date];
    if(!existing){merged.days[date]=record;continue;}
    for(const id of existing.questionIds) if(existing.attempts[id].submitted&&record.attempts[id].submitted&&existing.attempts[id].selected!==record.attempts[id].selected) throw new Error('Backup conflicts with a locked answer. Existing progress was not changed.');
    if(record.completedAt&&!existing.completedAt) {
      for(const id of existing.questionIds) if(existing.attempts[id].submitted&&existing.attempts[id].submittedAt!>record.completedAt) throw new Error('Backup completion predates existing attempts.');
      merged.days[date]=record;
    } else if(!existing.completedAt&&!record.completedAt) {
      for(const id of existing.questionIds) if(record.attempts[id].submitted&&!existing.attempts[id].submitted)existing.attempts[id]=record.attempts[id];
      if(submittedCount(existing)===5)throw new Error('Two partial backups would create an unrecorded completion. Import them into separate profiles.');
    }
  }
  merged.bookmarks=[...new Set([...merged.bookmarks,...incoming.bookmarks])];
  merged.maxSeenAt=[merged.maxSeenAt,incoming.maxSeenAt].sort().at(-1)!;
  merged.revision=Math.max(merged.revision,incoming.revision)+1;
  merged.updatedAt=now.toISOString();
  return validateProgress(merged);
}
