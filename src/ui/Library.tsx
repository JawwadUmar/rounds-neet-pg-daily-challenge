import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Check, ChevronLeft, ChevronRight, LibraryBig, Search, Trash2 } from 'lucide-react';
import { loadShelf, YEARS, type PaperYear } from '../data/pyq';
import { SUBJECTS, type Question, type Subject } from '../data/types';
import type { Action, Attempt } from '../core/model';
import { focusQuestion, QuestionReader } from './QuestionReader';
import { accuracyForQuestions, pyqScopeHasPerformance } from '../core/performance';
import { Modal } from './components';

const PAGE_SIZE=12;
const fresh:Attempt={selected:null,submitted:false,submittedAt:null};
export function Library({study,busy,dispatch}:{study:Record<string,Attempt>;busy:boolean;dispatch:(a:Action)=>void}) {
  const [bank,setBank]=useState<Question[]>([]);
  const [retry,setRetry]=useState(0),[error,setError]=useState(false);
  const [year,setYear]=useState<PaperYear|'all'>('all'),[subject,setSubject]=useState<Subject|'all'>('all'),[query,setQuery]=useState('');
  const [page,setPage]=useState(0),[active,setActive]=useState<string|null>(null),[explanation,setExplanation]=useState(false);
  const [confirmClear,setConfirmClear]=useState(false);
  const opener=useRef<HTMLButtonElement|null>(null);
  useEffect(()=>{
    let mounted=true;
    setError(false);setBank([]);
    loadShelf(year,subject).then(data=>{if(mounted)setBank(data);},()=>{if(mounted)setError(true);});
    return ()=>{mounted=false;};
  },[retry,year,subject]);
  const items=useMemo(()=>{
    const term=query.trim().toLocaleLowerCase();
    return term?bank.filter(q=>[q.statement,q.topic,q.subject,...Object.values(q.options)].some(text=>text.toLocaleLowerCase().includes(term))):bank;
  },[bank,query]);
  const metrics=useMemo(()=>accuracyForQuestions(items,study),[items,study]);
  const canClear=year!=='all'&&pyqScopeHasPerformance(study,year,subject==='all'?undefined:subject);
  const closeClear=useCallback(()=>setConfirmClear(false),[]);
  const clearPerformance=useCallback(()=>{
    if(year!=='all')dispatch({type:'clear-pyq-performance',year,subject:subject==='all'?undefined:subject});
    setConfirmClear(false);
  },[dispatch,subject,year]);
  const current=active ? items.findIndex(q=>q.id===active) : -1;
  const shown=items[current];
  function open(index:number) {
    setActive(items[index].id);setPage(Math.floor(index/PAGE_SIZE));setExplanation(false);
    focusQuestion();
  }
  function back() {
    const id=active;
    setActive(null);setExplanation(false);
    requestAnimationFrame(()=> (document.getElementById('entry-'+id) || opener.current)?.focus());
  }
  return <div className="page-enter">
    <header className="page-heading"><p className="section-label"><LibraryBig size={15}/>NEET-PG · 2018–2025</p><h1>The PYQ <em>library.</em></h1></header>
    {shown ? <>
      <div className="library-reader-nav"><button className="text-button" onClick={back}><ArrowLeft size={16}/>Back to papers</button><span>{year==='all'?'Full curriculum':year}{subject==='all'?'':` / ${subject}`} · Question {current+1} of {items.length}</span></div>
      <section className="panel library-reader"><QuestionReader key={shown.id} question={shown} attempt={study[shown.id]??fresh} label="library question" busy={busy}
        select={letter=>dispatch({type:'study-select',id:shown.id,selected:letter})} submit={()=>dispatch({type:'study-submit',id:shown.id})} explanation={explanation} setExplanation={setExplanation}/>
        <div className="quiz-footer"><button className="text-button" disabled={current===0} onClick={()=>open(current-1)}><ArrowLeft size={16}/>Previous question</button><button className="text-button" disabled={current===items.length-1} onClick={()=>open(current+1)}>Next question<ArrowRight size={16}/></button></div>
      </section></> : <>
      <section className="volume-section" aria-label="Browse by examination year"><div className="section-line"><h2>Year-wise papers</h2><span className="fine-rule"/></div>
        <div className="volume-shelf">{YEARS.map((y,i)=><button key={y} aria-label={`Browse ${y} paper`} aria-pressed={year===y} className={`volume tone-${i%4}`} onClick={()=>{setYear(year===y?'all':y);setPage(0);}}>
          <span className="volume-lines" aria-hidden="true"/><strong>{y}</strong><BookOpen size={16} strokeWidth={1.4}/></button>)}</div>
      </section>
      <section className="panel catalogue"><div className="catalogue-head"><h2>{year==='all'?'Full curriculum':`${year} paper`}</h2>{year!=='all'&&<button className="text-button" onClick={()=>{setYear('all');setPage(0);}}>Full curriculum<ArrowRight size={14}/></button>}</div>
        <div className="library-filters"><label className="search-field"><Search size={17}/><input aria-label="Search questions or topics" type="search" placeholder="Search questions or topics" value={query} onChange={e=>{setQuery(e.target.value);setPage(0);}}/></label>
          <select aria-label="Filter by subject" value={subject} onChange={e=>{setSubject(e.target.value as Subject|'all');setPage(0);}}><option value="all">All subjects</option>{SUBJECTS.map(s=><option key={s}>{s}</option>)}</select></div>
        {year!=='all'&&<section className="pyq-filter-metrics" aria-label={`${year} PYQ performance`}><div className="pyq-filter-heading"><div><h3>{year} PYQ performance{subject==='all'?'':` · ${subject}`}</h3><p>Metrics follow the current year, subject, and search filters.</p></div><button className="text-button" disabled={!canClear} onClick={()=>setConfirmClear(true)}><Trash2 size={15}/>Clear {subject==='all'?'year':'subject'} data</button></div>
          <div className="performance-summary"><div><span>Attempted / available</span><strong>{metrics.attempted}/{metrics.available}</strong></div><div><span>Accuracy</span><strong>{metrics.accuracy===null?'—':`${metrics.accuracy}%`}</strong></div></div>
        </section>}
        {error?<div className="empty-state" role="alert">The papers could not be opened. <button className="text-button" onClick={()=>setRetry(retry+1)}>Try again</button></div>
        :!bank.length?<p className="empty-state" role="status">Opening the papers…</p>
        :!items.length?<div className="empty-state"><p>No questions match these filters.</p><button className="text-button" onClick={()=>{setQuery('');setSubject('all');setYear('all');setPage(0);}}>Clear filters</button></div>
        :<><div className="catalogue-list">{items.slice(page*PAGE_SIZE,(page+1)*PAGE_SIZE).map((q,index)=><button id={'entry-'+q.id} key={q.id} className="catalogue-entry" onClick={e=>{opener.current=e.currentTarget;open(page*PAGE_SIZE+index);}}>
          <span><small><span className="question-position">{page*PAGE_SIZE+index+1}/{items.length}</span> · {q.subject}</small><strong>{q.statement}</strong></span>{study[q.id]?.submitted?<Check size={18} aria-label="Answered"/>:<ChevronRight size={18}/>}</button>)}</div>
          <div className="pager"><button className="text-button" disabled={page===0} onClick={()=>setPage(page-1)}><ChevronLeft size={16}/>Previous page</button><span>Page {page+1}</span><button className="text-button" disabled={(page+1)*PAGE_SIZE>=items.length} onClick={()=>setPage(page+1)}>Next page<ChevronRight size={16}/></button></div>
        </>}
      </section></>}
    {confirmClear&&year!=='all'&&<Modal title="Clear PYQ performance?" close={closeClear}><p>This clears saved PYQ Library attempts for {subject==='all'?`the ${year} paper`:`${subject} in ${year}`}. Other years, subjects, and Daily Challenge history stay unchanged.</p><div className="backup-actions"><button className="button secondary" onClick={closeClear}>Cancel</button><button className="button primary" onClick={clearPerformance}><Trash2 size={16}/>Clear performance</button></div></Modal>}
  </div>;
}
