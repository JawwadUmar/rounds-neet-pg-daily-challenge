import { useCallback, useId, useState } from 'react';
import { ArrowRight, Bookmark, BookOpen, Check, CheckCircle2, ChevronDown, LockKeyhole, Maximize2, Minus, Plus, X } from 'lucide-react';
import { LETTERS, type Letter, type Question, type QuestionImage } from '../data/types';
import type { Attempt } from '../core/model';
import { Modal } from './components';

function Figures({ images }: { images: QuestionImage[] }) {
  const [active,setActive] = useState<number|null>(null);
  const [zoom,setZoom] = useState(1);
  const close = useCallback(() => setActive(null),[]);
  const picture = active===null ? null : images[active];
  return <>
    <div className="question-figures">{images.map((im,i)=>
      <button className="figure-button" key={im.src} aria-label={`Enlarge figure ${i+1}`} onClick={()=>{setZoom(1);setActive(i);}}>
        <img loading="lazy" src={im.src} width={im.width} height={im.height} alt={im.alt}/>
        <span aria-hidden="true"><Maximize2 size={14}/></span>
      </button>)}</div>
    {picture && <Modal title={images.length>1 ? `Figure ${active!+1} of ${images.length}` : 'Question figure'} close={close} wide>
      <div className="lightbox-controls"><button className="icon-button" aria-label="Zoom out" disabled={zoom<=1} onClick={()=>setZoom(zoom-.5)}><Minus size={17}/></button><output aria-live="polite">{zoom*100}%</output><button className="icon-button" aria-label="Zoom in" disabled={zoom>=3} onClick={()=>setZoom(zoom+.5)}><Plus size={17}/></button></div>
      <div className="lightbox-scroll" tabIndex={0} aria-label="Scrollable enlarged figure">
        <div className="lightbox-canvas" style={{width:`${zoom*100}%`}}><img alt={picture.alt} src={picture.src} width={picture.width} height={picture.height} style={{maxHeight:`${zoom*58}dvh`}}/></div>
      </div>
    </Modal>}
  </>;
}

interface Props {
  question: Question;
  attempt: Attempt;
  busy: boolean;
  label: string;
  select: (letter: Letter) => void;
  submit: () => void;
  explanation: boolean;
  setExplanation: (open:boolean) => void;
  dailyChallenge?: boolean;
  bookmark?: () => void;
  bookmarked?: boolean;
}

export function focusQuestion() {
  requestAnimationFrame(()=>{
    const heading=document.querySelector<HTMLElement>('.question-statement');
    if(!heading)return;
    const bounds=heading.getBoundingClientRect();
    heading.focus({preventScroll:true});
    if(bounds.top<0 || bounds.top>window.innerHeight*.65)heading.scrollIntoView({block:'start'});
  });
}

export function QuestionReader({question:q,attempt,busy,label,select,submit,explanation,setExplanation,dailyChallenge=false,bookmark,bookmarked}:Props) {
  const region = useId();
  const correct = attempt.selected===q.correct;
  const locked = attempt.submitted;
  const distractors = LETTERS.filter(l=>l!==q.correct && q.optionExplanations[l]);
  return <article className="quiz-body">
    <div className="reader-top"><span className="reader-identifiers"><span className="subject-tag">{q.subject}</span>{q.examYear && <span className="source-tag">PYQ {q.examYear}</span>}</span><span className="reader-tools">
      {q.difficulty && <span className="difficulty" aria-label={q.difficultyEstimated?`Estimated difficulty: ${q.difficulty}`:`Difficulty: ${q.difficulty}`} title={q.difficultyEstimated?'Estimated difficulty':'Difficulty'}>{q.difficulty}{q.difficultyEstimated?' · est.':''}</span>}
      {bookmark && <button className="icon-button" onClick={bookmark} aria-label={bookmarked?'Remove question from saved review':'Save question for review'} aria-pressed={!!bookmarked}><Bookmark size={18} fill={bookmarked?'currentColor':'none'}/></button>}
    </span></div>
    <h2 className="question-statement" tabIndex={-1}>{q.statement}</h2>
    {!!q.images?.length && <Figures images={q.images}/>}
    {q.imageUnavailable && <p className="image-unavailable">Figure unavailable.</p>}
    <fieldset className="options" disabled={busy||locked||q.reviewOnly}>
      <legend className="sr-only">Answer options for {label}</legend>
      {LETTERS.map(letter=>{
        const selected=attempt.selected===letter, right=locked&&letter===q.correct, wrong=locked&&selected&&!right;
        return <label key={letter} className={`option ${selected?'selected':''} ${right?'correct':''} ${wrong?'incorrect':''} ${locked?'locked':''}`}>
          <input type="radio" name={region} value={letter} checked={selected} onChange={()=>select(letter)}/>
          <span className="option-letter">{letter}</span><span className="option-text">{q.options[letter]}</span>
          {right?<Check size={18}/>:wrong?<X size={18}/>:<span className="choice-dot" aria-hidden="true"/>}
        </label>;
      })}
    </fieldset>
    {locked && <div role="status" className={`answer-feedback ${q.reviewOnly?'reviewed':correct?'correct':'incorrect'}`}>{q.reviewOnly?<BookOpen size={18}/>:correct?<CheckCircle2 size={18}/>:<BookOpen size={18}/>}<div><strong>{q.reviewOnly?'Read-only item':correct?'Correct answer':'Incorrect answer'}</strong><p>{q.reviewOnly?'This source item is not scored. Open the solution to review its printed key.':q.answerText??`${q.correct}. ${q.options[q.correct]}`}</p></div></div>}
    <div className="answer-actions">
      <span className="saved-hint"><LockKeyhole size={13}/>{q.reviewOnly?'Read-only question':locked?'Answer locked':'Choose one answer'}</span>
      {dailyChallenge&&q.reviewOnly&&!locked ? <button className="button primary" disabled={busy} onClick={submit}>Continue · not scored<ArrowRight size={15}/></button>
      : locked||q.reviewOnly ? <button className="button secondary" aria-expanded={explanation} aria-controls={region} onClick={()=>setExplanation(!explanation)}><BookOpen size={16}/>{explanation?'Hide explanation':q.reviewOnly?'Read solution':'Explanation'}<ChevronDown className={explanation?'up':''} size={15}/></button>
      : <button className="button primary" disabled={!attempt.selected||busy} onClick={submit}>Confirm answer<ArrowRight size={15}/></button>}
    </div>
    {(locked||q.reviewOnly)&&explanation && <section id={region} className="explanation">
      <div className="solution-heading"><BookOpen size={18}/><h3>Solution</h3></div>
      {q.reviewOnly && q.answerText && <p className="printed-key">Answer key &nbsp; {q.answerText}</p>}
      <div className="solution-prose">{q.explanation.split(/\n+/).filter(Boolean).map((p,i)=><p key={i}>{p}</p>)}</div>
      {!!distractors.length && <><h4>Why the other options don’t fit</h4><div className="distractors">{distractors.map(letter=><div key={letter}><span>{letter}</span><p><strong>{q.options[letter]}</strong><br/>{q.optionExplanations[letter]}</p></div>)}</div></>}
      {!!q.takeaways.length && <div className="takeaways"><h4>Exam takeaways</h4><ul>{q.takeaways.map(t=><li key={t}>{t}</li>)}</ul></div>}
    </section>}
  </article>;
}
