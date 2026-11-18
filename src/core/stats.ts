import { addDays, daysBetween } from './dates';
import { isComplete, scoreDay, scoredAttempted, type Progress } from './model';
export function statistics(progress: Progress, today: string) {
  const completed = Object.values(progress.days).filter(d => d.date <= today && isComplete(d));
  const eligible = completed.filter(d => d.streakEligible && d.completedDay === d.date).map(d => d.date).sort();
  const set = new Set(eligible);
  let current = 0, cursor = set.has(today) ? today : addDays(today, -1);
  while (set.has(cursor)) { current++; cursor = addDays(cursor, -1); }
  let longest = 0, run = 0, last: string | null = null;
  for (const day of eligible) { run = last && daysBetween(last, day) === 1 ? run + 1 : 1; longest = Math.max(longest, run); last = day; }
  const attempted = Object.values(progress.days).filter(d => d.date <= today).reduce((n, d) => n + scoredAttempted(d), 0);
  const correct = Object.values(progress.days).filter(d => d.date <= today).reduce((n, d) => n + scoreDay(d), 0);
  return { current, longest, completed: completed.length, attempted, correct, accuracy: attempted ? Math.round(correct / attempted * 100) : 0, onTime: eligible.length };
}
