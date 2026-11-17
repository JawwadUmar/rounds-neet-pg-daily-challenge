import { ArrowLeft, ArrowRight, Bookmark, BookOpen, Check, CheckCircle2, ChevronDown, ChevronUp, CircleHelp, Copy, Flame, LockKeyhole, Share2, ShieldCheck, Sparkles, X } from 'lucide-react';
import { LETTERS, type Letter, type Question } from '../data/types';
import { scoreDay, submittedCount, type DailyRecord } from '../core/model';

export function Quiz({ questions, day, index, setIndex, busy, select, submit, explanation, setExplanation, bookmarked, bookmark, results, review, share, currentStreak, durable }: {
  questions: Question[]; day: DailyRecord; index: number; setIndex: (i:number)=>void; busy:boolean;
  select:(letter:Letter)=>void; submit:()=>void; explanation:boolean; setExplanation:(v:boolean)=>void;
  bookmarked:boolean; bookmark:()=>void; results:boolean; review:()=>void; share:()=>void; currentStreak:number; durable:boolean;
}) {
  const q=questions[index], attempt=day.attempts[q.id], total=submittedCount(day), correct=attempt.submitted&&attempt.selected===q.correct;
  return <section className="panel quiz-panel" aria-label="Daily question challenge">
    <div className="question-tabs" aria-label="Question navigation">
      {questions.map((question,i)=>{const a=day.attempts[question.id];return <button key={question.id} onClick={()=>setIndex(i)} aria-label={`Question ${i+1}, ${question.subject}${a.submitted?', answered':''}`} aria-current={index===i&&!results?'step':undefined} className={`question-tab ${i===index&&!results?'active':''} ${a.submitted?'answered':''}`}><span>{a.submitted?<Check size={13}/>:String(i+1).padStart(2,'0')}</span><span>Question {i+1}</span></button>;})}
    </div>
    {results ? <div className="results-view">
      <div className="completion-medal"><Check size={32}/><Sparkles className="medal-sparkle" size={22}/></div>
      <span className="eyebrow">YOU SHOWED UP. THAT COUNTS.</span><h2>Daily challenge complete.</h2><p>Five questions. One more step toward 2027.</p>
      <div className="score-display"><strong>{scoreDay(day)}<span>/ 5</span></strong><span>YOUR SCORE</span></div>
      <div className="result-squares" aria-label={questions.map((q,i)=>`Question ${i+1}: ${day.attempts[q.id].selected===q.correct?'correct':'incorrect'}`).join(', ')}>{questions.map(q=><span key={q.id} className={day.attempts[q.id].selected===q.correct?'right':'wrong'}>{day.attempts[q.id].selected===q.correct?<Check size={21}/>:<X size={21}/>}</span>)}</div>
      <div className="result-streak"><Flame size={18}/><strong>{currentStreak}-day streak</strong><span>{day.streakEligible?'One day at a time.':'Catch-up complete · no streak credit'}</span></div>
      <div className="result-actions"><button className="button primary" onClick={share}><Share2 size={16}/> Share your result</button><button className="button secondary" onClick={review}><BookOpen size={16}/>Review answers</button></div>
      <p className="result-note">{durable?'Your result is saved on this device. Take a moment to review the why.':'This result is temporary. Export a backup in Settings before closing.'}</p>
    </div> : <>
      <div className="quiz-body" key={q.id}>
        <div className="question-meta"><div><span className="subject-tag"><span/>{q.subject}</span><span className={`difficulty ${q.difficulty.toLowerCase()}`}>{q.difficulty}</span></div><button className={`icon-button bookmark ${bookmarked?'bookmarked':''}`} onClick={bookmark} aria-label={bookmarked?'Remove question from saved review':'Save question for review'} aria-pressed={bookmarked}><Bookmark size={19} fill={bookmarked?'currentColor':'none'}/></button></div>
        <div className="question-number">QUESTION {String(index+1).padStart(2,'0')} <span>OF 05</span><i/> ORIGINAL PRACTICE</div>
        <h2 className="question-statement">{q.statement}</h2>
        <p className="answer-instruction"><CircleHelp size={14}/>Select the single best answer.</p>
        <fieldset className="options" disabled={busy||attempt.submitted}><legend className="sr-only">Answer options for question {index+1}</legend>{LETTERS.map(letter=>{
          const selected=attempt.selected===letter, right=attempt.submitted&&letter===q.correct,wrong=attempt.submitted&&selected&&!right;
          return <label key={letter} className={`option ${selected?'selected':''} ${right?'correct':''} ${wrong?'incorrect':''} ${attempt.submitted?'locked':''}`}><input type="radio" name={q.id} value={letter} checked={selected} onChange={()=>select(letter)}/><span className="option-letter">{letter}</span><span className="option-text">{q.options[letter]}</span><span className="option-indicator">{right?<Check size={17}/>:wrong?<X size={17}/>:<i/>}</span></label>;
        })}</fieldset>
        {attempt.submitted && <div className={`answer-feedback ${correct?'correct':'incorrect'}`} role="status"><span>{correct?<CheckCircle2 size={19}/>:<CircleHelp size={19}/>}</span><div><strong>{correct?'That’s correct. Well reasoned.':'A useful concept to revisit.'}</strong><p>Correct answer: <b>{q.correct}.</b> {q.options[q.correct]}</p></div></div>}
        <div className="answer-actions"><span className="saved-hint"><LockKeyhole size={13}/>{attempt.submitted?'Answer confirmed & locked':'Your answer locks on confirmation'}</span>{!attempt.submitted?<button className="button primary confirm-button" disabled={!attempt.selected||busy} onClick={submit}>{busy?'Saving…':'Confirm answer'}<ArrowRight size={16}/></button>:<button className={`button explanation-button ${explanation?'open':''}`} aria-expanded={explanation} aria-controls="question-explanation" onClick={()=>setExplanation(!explanation)}><BookOpen size={16}/>{explanation?'Hide explanation':'Explanation'}{explanation?<ChevronUp size={15}/>:<ChevronDown size={15}/>}</button>}</div>
        {attempt.submitted&&explanation&&<div id="question-explanation" className="explanation"><div className="explanation-title"><BookOpen size={18}/><h3>Understand the why</h3></div><span className="topic-label">{q.topic}</span><p>{q.explanation}</p><h4>Why the other options don’t fit</h4><div className="distractors">{LETTERS.filter(letter=>letter!==q.correct).map(letter=><div key={letter}><span>{letter}</span><p><strong>{q.options[letter]}</strong><br/>{q.optionExplanations[letter]}</p></div>)}</div><div className="takeaways"><h4><Sparkles size={16}/>Take it to the exam</h4><ul>{q.takeaways.map(t=><li key={t}>{t}</li>)}</ul></div><h4>References & further reading</h4><ul className="reference-list">{q.references.map(reference=><li key={reference.url+reference.section}><a href={reference.url} target="_blank" rel="noreferrer">{reference.title} ↗</a><span>{reference.section}</span></li>)}</ul><p className="editorial-note">Original practice · estimated {q.difficulty.toLowerCase()} difficulty · {q.id}<br/>Reference-linked educational content; no independent clinician review. Not an authenticated PYQ.</p></div>}
      </div>
      <div className="quiz-footer"><button className="text-button" disabled={index===0} onClick={()=>setIndex(index-1)}><ArrowLeft size={15}/>Previous</button><span className="quiz-save-status"><ShieldCheck size={14}/> {total}/5 confirmed</span><button className="text-button next" disabled={index===4} onClick={()=>setIndex(index+1)}>Next question<ArrowRight size={15}/></button></div>
    </>}
  </section>;
}
