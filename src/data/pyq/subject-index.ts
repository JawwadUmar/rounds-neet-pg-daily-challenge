// Generated from the supplied edition by scripts/pyq/populate.py.
import type { Subject } from '../types';
import type { PaperYear } from './index';
import anatomy from './subjects/anatomy';
import anesthesia from './subjects/anesthesia';
import biochemistry from './subjects/biochemistry';
import dermatology from './subjects/dermatology';
import ent from './subjects/ent';
import forensic_medicine from './subjects/forensic-medicine';
import general_medicine from './subjects/general-medicine';
import general_surgery from './subjects/general-surgery';
import microbiology from './subjects/microbiology';
import obstetrics_gynaecology from './subjects/obstetrics-gynaecology';
import ophthalmology from './subjects/ophthalmology';
import orthopedics from './subjects/orthopedics';
import psm from './subjects/psm';
import pathology from './subjects/pathology';
import pediatrics from './subjects/pediatrics';
import pharmacology from './subjects/pharmacology';
import physiology from './subjects/physiology';
import psychiatry from './subjects/psychiatry';
import radiology from './subjects/radiology';

export const subjectIndex: Record<Subject, Record<PaperYear, number[][]>> = {
  "Anatomy": anatomy,
  "Anesthesia": anesthesia,
  "Biochemistry": biochemistry,
  "Dermatology": dermatology,
  "ENT": ent,
  "Forensic Medicine": forensic_medicine,
  "General Medicine": general_medicine,
  "General Surgery": general_surgery,
  "Microbiology": microbiology,
  "Obstetrics & Gynaecology": obstetrics_gynaecology,
  "Ophthalmology": ophthalmology,
  "Orthopedics": orthopedics,
  "PSM": psm,
  "Pathology": pathology,
  "Pediatrics": pediatrics,
  "Pharmacology": pharmacology,
  "Physiology": physiology,
  "Psychiatry": psychiatry,
  "Radiology": radiology
};
