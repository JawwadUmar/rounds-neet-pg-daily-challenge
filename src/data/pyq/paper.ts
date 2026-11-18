import type { Letter, Question, QuestionImage, Subject } from '../types';

interface Entry {
  number: number;
  statement: string;
  options: [string, string, string, string];
  correct: Letter;
  answerText: string;
  explanation: string;
  pages: [number, number];
  images?: QuestionImage[];
  imageUnavailable?: boolean;
  reviewOnly?: boolean;
  difficulty?: 'Medium' | 'Hard';
  topic?: string;
}

export function readPaper(year: number, groups: Partial<Record<Subject, Entry[]>>): Question[] {
  return (Object.entries(groups) as [Subject, Entry[]][]).flatMap(([subject, entries]) => entries.map(entry => {
    const [A, B, C, D] = entry.options;
    return {
      ...entry, id: `pyq-${year}-${entry.number}`, examYear: year, type: 'PYQ' as const, subject,
      options: { A, B, C, D }, topic: entry.topic ?? subject, difficulty: entry.difficulty ?? null,
      provenance: 'MEDINK, NEET PG PYQ 2025–2018, April 2026 edition',
      optionExplanations: {}, takeaways: [], references: [],
    };
  }));
}
