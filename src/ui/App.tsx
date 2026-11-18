import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, BookMarked, BookOpen, CalendarDays, Check, ChevronLeft, ChevronRight, CircleHelp, Clock3, Copy, Database, Menu, Moon, Settings2, Share2, ShieldCheck, Sun, X } from 'lucide-react';
import { addDays, ARCHIVE_START, dayInZone, formatDay, navigable } from '../core/dates';
import { clockIssue, createDay, isComplete, type Action, type Progress } from '../core/model';
import { questionsForDate } from '../core/schedule';
import { copyText, resultText } from '../core/share';
import { statistics } from '../core/stats';
import { ProgressStore } from '../core/storage';
import { ActivityGraph, Modal, MonthCalendar } from './components';
import { Library } from './Library';
import { Quiz } from './Quiz';
import { focusQuestion } from './QuestionReader';
import { Archive, LibraryLink, ProgressView, SettingsView, Stats } from './Workspace';

type Page='daily'|'bank'|'archive'|'progress'|'settings';
const navigation=[['daily','Daily challenge'],['bank','PYQ library'],['archive','Challenge archive'],['progress','Your progress']] as const;
const store=new ProgressStore();

export function App() {
  const [progress,setProgress]=useState<Progress|null>(null),[now,setNow]=useState(new Date());
  const [page,setPage]=useState<Page>('daily'),[date,setDate]=useState<string|null>(null),[month,setMonth]=useState('');
  const [index,setIndex]=useState(0),[explanation,setExplanation]=useState(false),[results,setResults]=useState(true);
  const [busy,setBusy]=useState(false),[menu,setMenu]=useState(false),[modal,setModal]=useState<'help'|'share'|null>(null),[toast,setToast]=useState('');
  const baseline=useRef({wall:Date.now(),mono:performance.now()});
  const closeModal=useCallback(()=>setModal(null),[]);
  const closeMenu=useCallback(()=>setMenu(false),[]);
  const today=dayInZone(now,progress?.preferences.timeZone??'Asia/Kolkata');
  const selected=date&&navigable(date,today)?date:today;
  useEffect(()=>{
    let mounted=true;
    const unsubscribe=store.subscribe(()=>{if(mounted)setProgress(store.snapshot);});
    void store.initialize().then(p=>{if(mounted){setProgress(p);void store.dispatch({type:'touch'}).catch(()=>undefined);}});
    const timer=setInterval(()=>setNow(new Date()),15_000);
    const wake=()=>{if(document.visibilityState==='visible'){setNow(new Date());void store.refresh().then(()=>store.dispatch({type:'touch'})).catch(()=>undefined);}};
    document.addEventListener('visibilitychange',wake);
    return ()=>{mounted=false;unsubscribe();clearInterval(timer);document.removeEventListener('visibilitychange',wake);};
  },[]);
  useEffect(()=>{if(progress)document.documentElement.dataset.theme=progress.preferences.theme;},[progress?.preferences.theme]);
  useEffect(()=>{if(!toast)return;const timer=setTimeout(()=>setToast(''),4000);return()=>clearTimeout(timer);},[toast]);
  useEffect(()=>{
    if(!date||!navigable(date,today)){setDate(null);setIndex(0);setResults(true);setExplanation(false);setModal(null);setMonth(today.slice(0,7));}
  },[today]);
  function openDate(value:string) {
    if(!navigable(value,today)){setToast('Choose a challenge through today.');return;}
    setDate(value===today?null:value);setMonth(value.slice(0,7));setPage('daily');setIndex(0);setResults(true);setExplanation(false);setMenu(false);
  }
  function goPage(value:Page) {
    if(value==='daily')openDate(today);
    else{setPage(value);setMenu(false);}
    window.scrollTo(0,0);
  }
  function changeIndex(value:number){setIndex(value);setExplanation(false);setResults(false);focusQuestion();}
  function openFromArchive(value:string){
    openDate(value);
    requestAnimationFrame(()=>document.querySelector('.challenge-heading')?.scrollIntoView({block:'start'}));
  }
  async function dispatch(action:Action) {
    if(busy)return;
    setBusy(true);
    try {
      const updated=await store.dispatch(action,new Date());
      if(action.type==='submit'&&isComplete(updated.days[action.date]))setResults(true);
      setNow(new Date());
    }catch(e){setToast(e instanceof Error?e.message:'Could not save the change.');}
    finally{setBusy(false);}
  }
  if(!progress)return <main className="loading-screen"><BookOpen size={30}/><p>Opening Rounds…</p></main>;
  const available=today>=ARCHIVE_START;
  const day=available?selected:ARCHIVE_START,record=progress.days[day]??createDay(day);
  const questions=questionsForDate(day,record.version),question=questions[index];
  const stats=statistics(progress,today),done=isComplete(record),dark=progress.preferences.theme==='dark';
  const issue=clockIssue(progress,new Date(),baseline.current,performance.now());
  const shareText=done?resultText(record,stats.current):'';
  async function copyResult(){setToast(await copyText(shareText)?'Result copied.':'Select the result text to copy it.');}
  async function shareResult(){
    try{if(navigator.share)await navigator.share({title:'NEET-PG Daily Challenge',text:shareText});else await copyResult();}
    catch(e){if(!(e instanceof DOMException&&e.name==='AbortError'))await copyResult();}
  }
  const links=navigation.map(([id,label])=><button key={id} aria-current={page===id?'page':undefined} onClick={()=>goPage(id)}>{label}</button>);
  return <div className="app-shell">
    <a href="#main-content" className="skip-link">Skip to content</a>
    <header className="masthead"><div className="masthead-inner">
      <button className="brand" aria-label="Rounds home" onClick={()=>goPage('daily')}><span className="brand-mark"><BookOpen size={21} strokeWidth={1.5}/></span><span>rounds<span>.</span></span></button>
      <nav className="desktop-nav" aria-label="Main navigation">{links}</nav>
      <div className="mast-tools"><button className="icon-button" aria-label={dark?'Use light theme':'Use dark theme'} title={dark?'Light theme':'Dark theme'} disabled={busy} onClick={()=>void dispatch({type:'theme',theme:dark?'light':'dark'})}>{dark?<Sun size={18}/>:<Moon size={18}/>}</button>
        <button className="icon-button settings-toggle" aria-label="Settings & backups" onClick={()=>goPage('settings')}><Settings2 size={18}/></button>
        <button className="icon-button mobile-menu" aria-label="Open navigation" aria-expanded={menu} onClick={()=>setMenu(true)}><Menu size={22}/></button></div>
    </div></header>
    <main id="main-content" className="main-content">
      {store.warning&&<div className="notice warning" role="alert"><Database size={18}/><span>{store.warning}</span><button className="text-button" onClick={()=>goPage('settings')}>Back up<ArrowRight size={15}/></button></div>}
      {issue&&<div className="notice warning" role="alert"><Clock3 size={18}/>{issue}</div>}
      {page==='daily' && <div className="page-enter">
        <div className="desk-intro"><header className="page-heading"><p className="section-label"><span className="small-rule"/>NEET-PG 2027</p><h1>Daily <em>rounds.</em></h1><p>Five clinical questions across five subjects. Review the reasoning behind each answer as you go.</p></header><LibraryLink open={()=>goPage('bank')}/></div>
        <Stats stats={stats}/>
        <div className="challenge-heading"><div className="section-line"><h2>{selected===today?'Question of the day':'From the archive'}</h2></div>
          <div className="date-navigation"><button className="icon-button" aria-label="Previous challenge" disabled={!available||selected<=ARCHIVE_START} onClick={()=>openDate(addDays(selected,-1))}><ChevronLeft size={16}/></button>
            <label className="date-label"><CalendarDays size={15}/><span>{formatDay(selected,{day:'numeric',month:'short',year:'numeric'})}</span><input aria-label="Choose challenge date" type="date" min={ARCHIVE_START} max={today} value={selected} onChange={e=>openDate(e.target.value)}/></label>
            <button className="icon-button" aria-label="Next challenge" disabled={selected>=today} onClick={()=>openDate(addDays(selected,1))}><ChevronRight size={16}/></button>
            {selected<today&&<button className="today-link" onClick={()=>openDate(today)}>Today</button>}</div>
        </div>
        {selected<today&&<p className="notice catchup"><CalendarDays size={16}/>Catch-up challenge. Completion counts toward your calendar and total.</p>}
        <div className="challenge-layout">
          {available?<Quiz questions={questions} day={record} index={index} setIndex={changeIndex} busy={busy}
            select={letter=>void dispatch({type:'select',date:selected,id:question.id,selected:letter})}
            submit={()=>void dispatch({type:'submit',date:selected,id:question.id,clockUncertain:!!issue})}
            explanation={explanation} setExplanation={setExplanation} bookmarked={progress.bookmarks.includes(question.id)}
            bookmark={()=>void dispatch({type:'bookmark',id:question.id,date:selected})} results={done&&results}
            review={()=>{changeIndex(0);setExplanation(true);}} share={()=>setModal('share')} currentStreak={stats.current} durable={store.mode!=='memory'}/>
          :<section className="panel empty-state"><h2>Check your device date</h2><p>The archive starts on 1 January 2026.</p></section>}
          <aside className="desk-aside"><MonthCalendar month={month||today.slice(0,7)} setMonth={setMonth} today={today} selected={selected} progress={progress} openDate={openFromArchive}/>
            {available&&<section className="contents-panel"><h3><BookMarked size={17}/>In this challenge</h3><ol>{questions.map((q,i)=><li key={q.id}><button className={index===i&&!(done&&results)?'current':''} onClick={()=>changeIndex(i)}><span>{String(i+1).padStart(2,'0')}</span>{q.subject}{record.attempts[q.id]?.submitted?<Check size={14}/>:<ChevronRight size={13}/>}</button></li>)}</ol></section>}</aside>
        </div><ActivityGraph today={today} progress={progress} openDate={openFromArchive}/>
      </div>}
      {page==='bank'&&<Library study={progress.study??{}} busy={busy} dispatch={a=>void dispatch(a)}/>}
      {page==='archive'&&<Archive today={today} progress={progress} openDate={openFromArchive}/>}
      {page==='progress'&&<ProgressView today={today} progress={progress} openDate={openFromArchive} openQuestion={(d,i)=>{openDate(d);changeIndex(i);}}/>}
      {page==='settings'&&<SettingsView progress={progress} today={today} busy={busy} dispatch={a=>void dispatch(a)} store={store}/>}
      <footer className="site-footer"><span><BookOpen size={15}/> rounds.</span><button className="text-button" onClick={()=>setModal('help')}><CircleHelp size={15}/>How it works</button><small><ShieldCheck size={13}/>{store.mode==='memory'?'Temporary session':'Saved on this device'}</small></footer>
    </main>
    {menu&&<Modal title="Navigation" close={closeMenu}><nav className="mobile-nav" aria-label="Mobile navigation">{links}<button onClick={()=>goPage('settings')}>Settings & backups</button></nav></Modal>}
    {toast&&<div className="toast" role="status">{toast}<button className="icon-button" aria-label="Dismiss notification" onClick={()=>setToast('')}><X size={15}/></button></div>}
    {modal==='share'&&done&&<Modal title="Share your result" close={closeModal}><textarea className="share-preview" readOnly value={shareText} aria-label="Shareable challenge result" rows={12} onFocus={e=>e.target.select()}/><div className="share-actions"><button className="button primary" onClick={()=>void copyResult()}><Copy size={16}/>Copy to clipboard</button><button className="button secondary" onClick={()=>void shareResult()}><Share2 size={16}/>{typeof navigator.share==='function'?'Share result':'Copy & share'}</button></div></Modal>}
    {modal==='help'&&<Modal title="How daily rounds work" close={closeModal}><div className="help-copy"><h3>Attempt the set</h3><p>Five questions open at midnight in your study timezone. Choose an option and confirm to lock your answer and unlock the solution.</p><h3>Build a streak</h3><p>Finish all five on their calendar day to earn streak credit. Catch-up challenges mark the original date complete. A missed day ends a streak.</p><h3>Study a paper</h3><p>Open the PYQ library to work by subject or year. Library answers are saved separately from daily challenges.</p><h3>Keep your progress</h3><p>Your browser stores your answers. Export a backup in Settings before clearing browser data or moving to another device.</p></div></Modal>}
  </div>;
}
