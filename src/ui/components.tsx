import { useEffect, useId, useRef, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { addDays, ARCHIVE_START, calendarMonth, formatDay, navigable, shiftMonth } from '../core/dates';
import { isComplete, submittedCount, type Progress } from '../core/model';

export function Modal({ title, children, close, wide = false }: { title: string; children: ReactNode; close: () => void; wide?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  useEffect(() => {
    const element = dialog.current!; const previous = document.activeElement as HTMLElement | null;
    element.showModal();
    const handler = () => close(); element.addEventListener('cancel',handler);
    return () => { element.removeEventListener('cancel',handler); element.close(); previous?.focus(); };
  },[close]);
  return <dialog ref={dialog} aria-labelledby={titleId} className={`modal ${wide ? 'modal-wide' : ''}`} onClick={event => { if (event.target === event.currentTarget) close(); }}>
    <div className="modal-heading"><h2 id={titleId}>{title}</h2><button className="icon-button" aria-label="Close dialog" onClick={close}><X size={20}/></button></div>
    <div className="modal-content">{children}</div>
  </dialog>;
}

export function MonthCalendar({ month, setMonth, today, selected, progress, openDate }: { month: string; setMonth: (m: string) => void; today: string; selected: string; progress: Progress; openDate: (d: string) => void }) {
  const cells = calendarMonth(month);
  const completeCount = Object.values(progress.days).filter(d => d.date.startsWith(month) && d.date <= today && isComplete(d)).length;
  return <section className="panel calendar-panel" aria-label="Challenge calendar">
    <div className="panel-heading"><h3>Study calendar</h3></div>
    <div className="month-navigation"><button className="icon-button" aria-label="Previous calendar month" disabled={month <= ARCHIVE_START.slice(0,7)} onClick={() => setMonth(shiftMonth(month,-1))}><ChevronLeft size={17}/></button><strong>{formatDay(month+'-01',{month:'long',year:'numeric'})}</strong><button className="icon-button" aria-label="Next calendar month" disabled={month >= today.slice(0,7)} onClick={() => setMonth(shiftMonth(month,1))}><ChevronRight size={17}/></button></div>
    <div className="month-grid" role="group" aria-label={formatDay(month+'-01',{month:'long',year:'numeric'})}>
      {['M','T','W','T','F','S','S'].map((day,index)=><span className="weekday" key={index} aria-hidden="true">{day}</span>)}
      {cells.map((day,index) => {
        if (!day) return <span key={'empty'+index}/>;
        const done = isComplete(progress.days[day]), partial = !done && submittedCount(progress.days[day])>0;
        const label = `${formatDay(day)}${day===today?', today':''}${done?', completed':partial?', in progress':', not completed'}`;
        return <button key={day} aria-label={label} aria-current={day===today?'date':undefined} disabled={!navigable(day,today)} title={label} onClick={()=>openDate(day)} className={`calendar-day ${done?'completed':''} ${partial?'partial':''} ${day===today?'today':''} ${day===selected?'chosen':''}`}>{Number(day.slice(-2))}{partial&&<i/>}</button>;
      })}
    </div>
    <div className="calendar-key"><span><i className="swatch completed"/>Completed</span><span><i className="swatch today"/>Today</span></div>
    <div className="calendar-foot"><strong>{completeCount} {completeCount===1?'day':'days'}</strong> completed this month</div>
  </section>;
}

export function ActivityGraph({ today, progress, openDate }: { today: string; progress: Progress; openDate: (d: string)=>void }) {
  const weekday = (new Date(today+'T12:00:00Z').getUTCDay()+6)%7;
  const start = addDays(today,-weekday-25*7);
  const weeks = Array.from({length:26},(_,week)=>Array.from({length:7},(_,day)=>addDays(start,week*7+day)));
  const count = Object.values(progress.days).filter(d=>d.date>=start && d.date<=today && isComplete(d)).length;
  let previousMonth = '';
  const labels = weeks.map(days => { const m=days[0].slice(0,7); const label=m!==previousMonth?formatDay(days[0],{month:'short'}):''; previousMonth=m; return label; });
  return <section className="panel activity-panel" aria-label="Contribution calendar">
    <div className="activity-heading"><h3>Study activity</h3><p>{count} completed in the last 26 weeks</p></div>
    <div className="activity-scroll"><div className="activity-chart"><div className="activity-row-labels"><span>Mon</span><span>Wed</span><span>Fri</span></div><div className="activity-weeks">{weeks.map((days,week)=><div className="activity-week" key={week}><span className="activity-month">{labels[week]}</span>{days.map(day=>{
      const done=isComplete(progress.days[day]),partial=!done&&submittedCount(progress.days[day])>0;
      return <button key={day} aria-label={`Activity ${formatDay(day)}: ${done?'completed':partial?'in progress':'not completed'}`} disabled={!navigable(day,today)} title={`${formatDay(day)} · ${done?'5/5 completed':`${submittedCount(progress.days[day])}/5 completed`}`} onClick={()=>openDate(day)} className={`activity-cell ${done?'completed':''} ${partial?'partial':''} ${day===today?'today':''}`}/>;
    })}</div>)}</div></div></div>
    <div className="activity-bottom"><span><i className="swatch"/>Not completed</span><span><i className="swatch completed"/>Completed</span></div>
  </section>;
}
