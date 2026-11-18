import { formatDay } from './dates';
import { isComplete, scoreDay, type DailyRecord } from './model';
import { questionsForDate } from './schedule';
export function resultText(day: DailyRecord, currentStreak: number): string {
  if (!isComplete(day)) throw new Error('Complete all five questions to share your result.');
  const squares = questionsForDate(day.date,day.version).map(q => day.attempts[q.id].selected === q.correct ? '🟩' : '🟥').join('');
  return `NEET-PG Daily Challenge\n📅 ${formatDay(day.date)}\n🎯 Score: ${scoreDay(day)}/5\n✅ Daily Challenge Completed!${!day.streakEligible ? ' (Catch-up / no streak credit)' : ''}\n\n${squares}\n\n🔥 ${currentStreak}-Day Streak\n\nPreparing for NEET-PG 2027!`;
}
export async function copyText(value: string): Promise<boolean> {
  try { if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(value); return true; } } catch { /* try legacy copy */ }
  const field = document.createElement('textarea'); field.value = value;
  field.style.position = 'fixed'; field.style.opacity = '0'; field.setAttribute('readonly','');
  const previous=document.activeElement as HTMLElement|null;
  // Content outside a modal dialog is inert, so the legacy selection must live inside it.
  (document.querySelector('dialog[open]')||document.body).append(field); field.focus(); field.select(); field.setSelectionRange(0,value.length);
  let copied = false; try { copied = document.execCommand('copy'); } catch { /* display selectable text */ }
  field.remove(); previous?.focus(); return copied;
}
