import { ArrowLeft, ArrowRight, BookOpen, Check, Flame, Share2, X } from 'lucide-react';
import type { Letter, Question } from '../data/types';
import { scoreDay, scoredCount, submittedCount, type DailyRecord } from '../core/model';
import { QuestionReader } from './QuestionReader';

interface QuizProps {
  questions:Question[]; day:DailyRecord; index:number; setIndex:(i:number)=>void; busy:boolean;
  select:(letter:Letter)=>void; submit:()=>void; explanation:boolean; setExplanation:(v:boolean)=>void;
  bookmarked:boolean; bookmark:()=>void; results:boolean; review:()=>void; share:()=>void; currentStreak:number; durable:boolean;
}
export function Quiz(p:QuizProps) {
  const {questions,day,index,results}=p;
  const q=questions[index];
  return <section className="panel quiz-panel" aria-label="Daily question challenge">
    <div className="quiz-tabs-bar"><div className="question-tabs" aria-label="Question navigation">{questions.map((q,i)=>
      <button key={q.id} onClick={()=>p.setIndex(i)} aria-label={`Question ${i+1}, ${q.subject}${day.attempts[q.id].submitted?', answered':''}`} aria-current={index===i&&!results?'step':undefined} className={`question-tab ${index===i&&!results?'active':''} ${day.attempts[q.id].submitted?'answered':''}`}>
        {day.attempts[q.id].submitted?<Check size={16}/>:String(i+1).padStart(2,'0')}
      </button>)}</div><span className="quiz-count">{submittedCount(day)} / 5 confirmed</span></div>
    {results?<div className="results-view">
      <span className="finish-seal"><Check size={30}/></span><h2>Daily challenge complete.</h2>
      <div className="score-display"><strong>{scoreDay(day)}<span>/ {scoredCount(day)}</span></strong><small>Correct answers{scoredCount(day)<5?' · read-only items excluded':''}</small></div>
      <div className="result-squares" aria-label={questions.map((q,i)=>`Question ${i+1} ${q.reviewOnly?'read-only':day.attempts[q.id].selected===q.correct?'correct':'incorrect'}`).join(', ')}>{questions.map(q=>q.reviewOnly?<span key={q.id} className="reviewed" title="Read-only · not scored">–</span>:<span key={q.id} className={day.attempts[q.id].selected===q.correct?'right':'wrong'}>{day.attempts[q.id].selected===q.correct?<Check size={20}/>:<X size={20}/>}</span>)}</div>
      <p className="result-streak"><Flame size={17}/>{p.currentStreak}-day streak{!day.streakEligible&&' · Catch-up complete'}</p>
      <div className="result-actions"><button className="button primary" onClick={p.share}><Share2 size={16}/>Share your result</button><button className="button secondary" onClick={p.review}><BookOpen size={16}/>Review answers</button></div>
      {!p.durable&&<p>Export a backup in Settings to keep this result.</p>}
    </div>:<>
      <QuestionReader key={q.id} question={q} attempt={day.attempts[q.id]} label={`question ${index+1}`} busy={p.busy} select={p.select} submit={p.submit} explanation={p.explanation} setExplanation={p.setExplanation} dailyChallenge bookmark={p.bookmark} bookmarked={p.bookmarked}/>
      <div className="quiz-footer"><button className="text-button" disabled={index===0} onClick={()=>p.setIndex(index-1)}><ArrowLeft size={15}/>Previous</button><button className="text-button" disabled={index===4} onClick={()=>p.setIndex(index+1)}>Next question<ArrowRight size={15}/></button></div>
    </>}
  </section>;
}
