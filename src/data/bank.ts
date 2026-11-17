import { anatomy } from './anatomy';
import { physiology } from './physiology';
import { biochemistry } from './biochemistry';
import { pathology } from './pathology';
import { pharmacology } from './pharmacology';
import { microbiology } from './microbiology';
import { forensic } from './forensic';
import { psm } from './psm';
import { ent } from './ent';
import { ophthalmology } from './ophthalmology';
import { medicine } from './medicine';
import { surgery } from './surgery';
import { obg } from './obg';
import { pediatrics } from './pediatrics';
import { orthopedics } from './orthopedics';
import { dermatology } from './dermatology';
import { psychiatry } from './psychiatry';
import { radiology } from './radiology';
import { anesthesia } from './anesthesia';
import type { Question } from './types';
export const BANK_VERSION = 'v1' as const;
export const bank: readonly Question[] = Object.freeze([
  ...anatomy, ...physiology, ...biochemistry, ...pathology, ...pharmacology,
  ...microbiology, ...forensic, ...psm, ...ent, ...ophthalmology,
  ...medicine, ...surgery, ...obg, ...pediatrics, ...orthopedics,
  ...dermatology, ...psychiatry, ...radiology, ...anesthesia,
]);
export const byId = new Map(bank.map(question => [question.id, question]));
