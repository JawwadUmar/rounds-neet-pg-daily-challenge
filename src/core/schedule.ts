import manifest from '../data/schedule-v1.json' with { type: 'json' };
import { byId } from '../data/bank';
import { ARCHIVE_START, daysBetween, isDay } from './dates';
import type { Question } from '../data/types';
export const SCHEDULE_VERSION = manifest.version;
export const CYCLE_DAYS = manifest.cycleDays;
export function questionsForDate(day: string): Question[] {
  if (!isDay(day) || day < ARCHIVE_START) throw new Error('Challenge is outside the archive');
  const start = (daysBetween(manifest.effectiveFrom, day) % CYCLE_DAYS) * 5;
  const result = manifest.ids.slice(start, start + 5).map(id => byId.get(id));
  if (result.length !== 5 || result.some(q => !q) || new Set(result.map(q => q!.id)).size !== 5) throw new Error('Invalid frozen question schedule');
  return result as Question[];
}
