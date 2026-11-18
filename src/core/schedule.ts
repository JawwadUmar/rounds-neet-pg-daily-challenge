import first from '../data/schedule-v1.json' with { type: 'json' };
import mixed from '../data/schedule-v2.json' with { type: 'json' };
import { byId } from '../data/bank';
import { ARCHIVE_START, daysBetween, isDay } from './dates';
import type { Question } from '../data/types';
export function versionForDate(day: string): string {
  return day >= mixed.effectiveFrom ? mixed.version : first.version;
}
export function questionsForDate(day: string, version = versionForDate(day)): Question[] {
  if (!isDay(day) || day < ARCHIVE_START) throw new Error('Challenge is outside the archive');
  const manifest = version === first.version ? first : version === mixed.version && day >= mixed.effectiveFrom ? mixed : null;
  if (!manifest) throw new Error('Invalid challenge date/version.');
  const start = (daysBetween(manifest.effectiveFrom, day) % manifest.cycleDays) * 5;
  const result = manifest.ids.slice(start, start + 5).map(id => byId.get(id));
  if (result.length !== 5 || result.some(q => !q) || new Set(result.map(q => q!.id)).size !== 5) throw new Error('Invalid frozen question schedule');
  return result as Question[];
}
