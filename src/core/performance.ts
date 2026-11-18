import { byId } from '../data/bank';
import { YEARS } from '../data/pyq';
import type { Question, Subject } from '../data/types';
import type { Attempt, Progress } from './model';

export interface AccuracyMetrics { attempted:number; available:number; correct:number; accuracy:number|null }
export interface SubjectMetrics extends AccuracyMetrics { subject:Subject }
export interface YearMetrics extends AccuracyMetrics { year:number }

export function accuracyForQuestions(questions:Question[], attempts:Record<string,Attempt>):AccuracyMetrics {
  const attemptedQuestions=questions.filter(q=>attempts[q.id]?.submitted);
  const correct=attemptedQuestions.filter(q=>attempts[q.id].selected===q.correct).length;
  return {attempted:attemptedQuestions.length,available:questions.length,correct,accuracy:attemptedQuestions.length?Math.round(correct/attemptedQuestions.length*100):null};
}

export function dailySubjectMetrics(progress:Progress,today:string):SubjectMetrics[] {
  const totals=new Map<Subject,{attempted:number;correct:number}>();
  for(const record of Object.values(progress.days).filter(day=>day.date<=today)) for(const id of record.questionIds) {
    const q=byId.get(id),attempt=record.attempts[id];
    if(!q||q.reviewOnly||!attempt?.submitted)continue;
    const total=totals.get(q.subject)??{attempted:0,correct:0};
    total.attempted++;if(attempt.selected===q.correct)total.correct++;
    totals.set(q.subject,total);
  }
  return [...totals].map(([subject,total])=>({subject,attempted:total.attempted,available:total.attempted,correct:total.correct,accuracy:Math.round(total.correct/total.attempted*100)}));
}

export function pyqYearMetrics(progress:Progress):YearMetrics[] {
  const questions=[...byId.values()].filter(q=>q.examYear!==null);
  return YEARS.map(year=>{
    const paper=questions.filter(q=>q.examYear===year),metrics=accuracyForQuestions(paper,progress.study??{});
    return {year,...metrics};
  });
}

export function pyqScopeHasPerformance(study:Record<string,Attempt>,year:number,subject?:Subject):boolean {
  return Object.entries(study).some(([id,attempt])=>{
    const q=byId.get(id);
    return !!q&&q.examYear===year&&(!subject||q.subject===subject)&&(attempt.submitted||attempt.selected!==null);
  });
}
