import { useRef, useState } from 'react';
import { ArrowDownToLine, ArrowRight, BookOpen, Check, ChevronRight, Clock3, Database, Download, Flame, FolderArchive, Moon, Sun, Target, Trophy, Upload } from 'lucide-react';
import { byId } from '../data/bank';
import { SUBJECTS } from '../data/types';
import { addDays, ARCHIVE_START, formatDay, navigable } from '../core/dates';
import { isComplete, scoreDay, submittedCount, type Action, type Progress } from '../core/model';
import { questionsForDate } from '../core/schedule';
import { statistics } from '../core/stats';
import { downloadFile, type ProgressStore } from '../core/storage';
import { ActivityGraph } from './components';

export function Stats({stats}:{stats:ReturnType<typeof statistics>}) {
  const cards=[
    {name:'Current streak',value:stats.current,unit:stats.current===1?'day':'days',icon:Flame},
    {name:'Longest streak',value:stats.longest,unit:stats.longest===1?'day':'days',icon:Trophy},
    {name:'Challenges completed',value:stats.completed,unit:'',icon:BookOpen},
    {name:'Overall accuracy',value:stats.attempted?stats.accuracy:'—',unit:stats.attempted?'%':'',icon:Target},
  ];
  return <div className="stats-grid">{cards.map(c=><section className="stat-card" key={c.name}><div className="stat-top"><c.icon size={16}/><span>{c.name}</span></div><div className="stat-value">{c.value}<span>{c.unit}</span></div></section>)}</div>;
}

export function Archive({today,progress,openDate}:{today:string;progress:Progress;openDate:(d:string)=>void}) {
  const [month,setMonth]=useState(today.slice(0,7));
  const dates=Array.from({length:31},(_,i)=>addDays(month+'-01',i)).filter(d=>d.startsWith(month)&&navigable(d,today)).reverse();
  return <div className="page-enter"><header className="page-heading"><p className="section-label"><FolderArchive size={15}/>Study calendar</p><h1>Challenge <em>archive.</em></h1><p>Complete a past set or revisit your answers.</p></header>
    <section className="panel archive-panel"><div className="catalogue-head"><h2>Daily challenges</h2><label className="month-picker">Month<input type="month" aria-label="Archive month" value={month} min={ARCHIVE_START.slice(0,7)} max={today.slice(0,7)} onChange={e=>{if(e.target.value>=ARCHIVE_START.slice(0,7)&&e.target.value<=today.slice(0,7))setMonth(e.target.value);}}/></label></div>
      <div>{dates.map(d=>{const saved=progress.days[d],done=isComplete(saved),count=submittedCount(saved);
        return <button className="archive-row" key={d} onClick={()=>openDate(d)}><span className={`archive-day ${done?'complete':''}`}>{done?<Check size={18}/>:Number(d.slice(-2))}</span><span className="archive-title"><strong>{formatDay(d,{weekday:'long',month:'long',day:'numeric'})}</strong><small>{questionsForDate(d,saved?.version).map(q=>q.subject).join(' · ')}</small></span><span className="archive-status">{done?`${scoreDay(saved)} / 5`:count?`${count}/5 attempted`:'Not started'}</span><ChevronRight size={17}/></button>;
      })}</div></section></div>;
}

export function ProgressView({today,progress,openDate,openQuestion}:{today:string;progress:Progress;openDate:(d:string)=>void;openQuestion:(d:string,i:number)=>void}) {
  const stats=statistics(progress,today), totals=new Map<string,{n:number;correct:number}>();
  for(const record of Object.values(progress.days).filter(d=>d.date<=today)) {
    for(const id of record.questionIds) {
      const q=byId.get(id), a=record.attempts[id];
      if(!q||!a.submitted)continue;
      const entry=totals.get(q.subject)??{n:0,correct:0};
      entry.n++;if(a.selected===q.correct)entry.correct++;totals.set(q.subject,entry);
    }
  }
  return <div className="page-enter"><header className="page-heading"><p className="section-label"><BookOpen size={15}/>Study record</p><h1>Your <em>progress.</em></h1></header><Stats stats={stats}/><ActivityGraph today={today} progress={progress} openDate={openDate}/>
    <section className="panel section-panel"><h2>Subject accuracy</h2><div className="subject-progress-grid">{SUBJECTS.map(s=>{const row=totals.get(s);return <div key={s}><div><strong>{s}</strong><span>{row?`${row.correct}/${row.n}`:'Not attempted'}</span></div><div className="progress-track"><span style={{width:`${row?row.correct/row.n*100:0}%`}}/></div></div>;})}</div></section>
    {progress.bookmarks.length>0&&<section className="panel section-panel"><h2>Saved for review</h2>{progress.bookmarks.map(id=>{const q=byId.get(id),record=Object.values(progress.days).find(d=>d.date<=today&&d.questionIds.includes(id));return q&&record?<button key={id} className="catalogue-entry" onClick={()=>openQuestion(record.date,record.questionIds.indexOf(id))}><span><small>{q.subject}</small><strong>{q.statement}</strong></span><ChevronRight size={16}/></button>:null;})}</section>}
  </div>;
}

export function SettingsView({progress,today,busy,dispatch,store}:{progress:Progress;today:string;busy:boolean;dispatch:(a:Action)=>void;store:ProgressStore}) {
  const fileInput=useRef<HTMLInputElement>(null),[message,setMessage]=useState('');
  async function importFile(file?:File) {
    if(!file)return;
    setMessage('Checking backup…');
    try {
      if(file.size>10_000_000)throw new Error('Choose a Rounds backup smaller than 10 MB.');
      await store.importBackup(JSON.parse(await file.text()));setMessage('Backup merged. Locked answers were preserved.');
    }catch(e){setMessage(e instanceof Error?e.message:'Could not read the backup.');}
    if(fileInput.current)fileInput.current.value='';
  }
  return <div className="page-enter"><header className="page-heading"><h1>Study <em>settings.</em></h1></header><div className="settings-layout">
    <section className="panel section-panel"><h2>Appearance</h2><div className="setting-theme">{(['light','dark'] as const).map(theme=><button key={theme} aria-pressed={progress.preferences.theme===theme} disabled={busy} onClick={()=>dispatch({type:'theme',theme})}>{theme==='light'?<Sun size={20}/>:<Moon size={20}/>} {theme==='light'?'Light':'Dark'}</button>)}</div>
      <h2>Your study clock</h2><p className="setting-name"><Clock3 size={17}/>{progress.preferences.timeZone}</p><p>Each challenge begins at midnight in the timezone saved on your first visit. It stays fixed when you travel. The clock uses your device time.</p></section>
    <section className="panel section-panel"><h2>Progress and backups</h2><p className="setting-name"><Database size={18}/>{store.mode==='indexeddb'?'IndexedDB storage':store.mode==='local'?'Browser local storage':'Temporary session storage'}</p><p>Answers are stored in this browser. Clearing browser data, using private browsing, or switching devices can remove access to your progress.</p>
      <div className="backup-actions"><button className="button primary" onClick={()=>downloadFile(JSON.stringify(progress,null,2),`rounds-backup-${today}.json`)}><Download size={16}/>Export backup</button><button className="button secondary" onClick={()=>fileInput.current?.click()}><Upload size={16}/>Import backup</button></div>
      <input type="file" className="sr-only" accept=".json,application/json" ref={fileInput} aria-label="Import progress backup" onChange={e=>void importFile(e.target.files?.[0])}/>
      {message&&<p className="import-message" role="status">{message}</p>}
      {store.recoveryRaw&&<button className="text-button" onClick={()=>downloadFile(store.recoveryRaw!,`rounds-original-data-${today}.json`)}><ArrowDownToLine size={16}/>Download preserved original data</button>}
    </section></div></div>;
}

export function LibraryLink({open}:{open:()=>void}) {
  return <button className="library-link" onClick={open}>
    <span className="library-link-text"><span className="library-years">2018 — 2025</span><strong>Previous year<br/><em>papers</em></strong><span className="library-cta">Browse library <ArrowRight size={14}/></span></span>
    <span className="book-art" aria-hidden="true"><i className="book-back"/><i className="book-mid"/><i className="book-front"><span/><BookOpen size={31} strokeWidth={1.1}/><span/></i></span>
  </button>;
}
