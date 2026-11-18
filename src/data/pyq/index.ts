import type { Question, Subject } from '../types';
import { subjectIndex } from './subject-index';

export const YEARS = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018] as const;
export type PaperYear = typeof YEARS[number];
const loaders = {
  2025: () => import('./2025'), 2024: () => import('./2024'),
  2023: () => import('./2023'), 2022: () => import('./2022'),
  2021: () => import('./2021'), 2020: () => import('./2020'),
  2019: () => import('./2019'), 2018: () => import('./2018'),
};
export async function loadPaper(year: PaperYear): Promise<Question[]> {
  return (await loaders[year]()).default;
}
export async function loadPapers(): Promise<Question[]> {
  return (await Promise.all(YEARS.map(loadPaper))).flat();
}
export async function loadShelf(year:PaperYear|'all',subject:Subject|'all'):Promise<Question[]> {
  const years=year==='all'?YEARS:[year];
  return (await Promise.all(years.map(async y=>{
    const questions=await loadPaper(y);
    return subject==='all'?questions:subjectIndex[subject][y].flatMap(([first,last])=>questions.slice(first-1,last));
  }))).flat();
}
