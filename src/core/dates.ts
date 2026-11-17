export const ARCHIVE_START = '2026-01-01';
export const DAY_MS = 86_400_000;
export function isDay(value: unknown): value is string {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(value + 'T00:00:00Z');
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
}
export function ordinal(day: string): number {
  if (!isDay(day)) throw new Error('Invalid calendar date');
  return Date.parse(day + 'T00:00:00Z') / DAY_MS;
}
export function addDays(day: string, amount: number): string {
  return new Date((ordinal(day) + amount) * DAY_MS).toISOString().slice(0, 10);
}
export function daysBetween(a: string, b: string): number { return ordinal(b) - ordinal(a); }
export function validZone(zone: unknown): zone is string {
  if (typeof zone !== 'string') return false;
  try { new Intl.DateTimeFormat('en', { timeZone: zone }).format(); return true; } catch { return false; }
}
export function browserZone(): string {
  try { return Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Kolkata'; } catch { return 'Asia/Kolkata'; }
}
export function dayInZone(now: Date, timeZone: string): string {
  const parts = new Intl.DateTimeFormat('en', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(now);
  const get = (type: string) => parts.find(p => p.type === type)!.value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}
export function formatDay(day: string, options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' }): string {
  return new Intl.DateTimeFormat('en-IN', { ...options, timeZone: 'UTC' }).format(new Date(day + 'T12:00:00Z'));
}
export function navigable(day: string, today: string): boolean { return isDay(day) && day >= ARCHIVE_START && day <= today; }
export function calendarMonth(month: string): Array<string | null> {
  const first = month + '-01';
  const weekday = (new Date(first + 'T12:00:00Z').getUTCDay() + 6) % 7;
  const count = new Date(Date.UTC(Number(month.slice(0,4)), Number(month.slice(5,7)), 0)).getUTCDate();
  return [...Array<null>(weekday).fill(null), ...Array.from({ length: count }, (_, i) => addDays(first, i))];
}
export function shiftMonth(month: string, amount: number): string {
  const date = new Date(month + '-01T12:00:00Z');
  date.setUTCMonth(date.getUTCMonth() + amount);
  return date.toISOString().slice(0,7);
}
export function secondsToMidnight(now: Date, timeZone: string): number {
  const current = dayInZone(now, timeZone);
  let lo = now.getTime(), hi = lo + 27 * 3_600_000;
  while (hi - lo > 500) {
    const mid = Math.floor((lo + hi) / 2);
    if (dayInZone(new Date(mid), timeZone) === current) lo = mid; else hi = mid;
  }
  return Math.max(0, Math.ceil((hi - now.getTime()) / 1000));
}
