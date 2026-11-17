export const SUBJECTS = [
  'Anatomy', 'Physiology', 'Biochemistry', 'Pathology', 'Pharmacology',
  'Microbiology', 'Forensic Medicine', 'PSM', 'ENT', 'Ophthalmology',
  'General Medicine', 'General Surgery', 'Obstetrics & Gynaecology',
  'Pediatrics', 'Orthopedics', 'Dermatology', 'Psychiatry', 'Radiology', 'Anesthesia',
] as const;
export type Subject = typeof SUBJECTS[number];
export const LETTERS = ['A', 'B', 'C', 'D'] as const;
export type Letter = typeof LETTERS[number];
export interface Reference { title: string; url: string; section: string }
export interface Question {
  id: string;
  statement: string;
  options: Record<Letter, string>;
  correct: Letter;
  subject: Subject;
  topic: string;
  difficulty: 'Medium' | 'Hard';
  type: 'Practice' | 'PYQ';
  examYear: number | null;
  provenance: string;
  explanation: string;
  optionExplanations: Record<Letter, string>;
  takeaways: string[];
  references: Reference[];
}
