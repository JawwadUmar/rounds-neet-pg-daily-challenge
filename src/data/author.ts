import { LETTERS, type Question, type Reference, type Subject } from './types';

// Only option placement is transformed. Every stem, key and rationale is authored static content.
export function question(
  id: string, subject: Subject, topic: string, difficulty: 'Medium' | 'Hard',
  statement: string, choices: [string, string, string, string], explanation: string,
  distractors: [string, string, string], takeaways: string[], references: Reference[],
): Question {
  let seed = 2166136261;
  for (const c of id) seed = Math.imul(seed ^ c.charCodeAt(0), 16777619) >>> 0;
  const order = [0, 1, 2, 3];
  for (let i = 3; i > 0; i--) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const j = Math.floor((seed / 4294967296) * (i + 1)); [order[i], order[j]] = [order[j], order[i]];
  }
  const rationales = [explanation, ...distractors];
  return {
    id, subject, topic, difficulty, statement,
    options: Object.fromEntries(order.map((source, i) => [LETTERS[i], choices[source]])) as Question['options'],
    correct: LETTERS[order.indexOf(0)], type: 'Practice', examYear: null,
    provenance: 'Independently authored practice. Not an authenticated previous-year question. Difficulty is an editorial estimate.',
    explanation,
    optionExplanations: Object.fromEntries(order.map((source, i) => [LETTERS[i], rationales[source]])) as Question['optionExplanations'],
    takeaways, references,
  };
}

const sources = {
  anatomy: ['OpenStax Anatomy and Physiology 2e', 'https://openstax.org/details/books/anatomy-and-physiology-2e'],
  neuro: ['Clinical Methods, 3e — The Neurologic System (NCBI Bookshelf)', 'https://www.ncbi.nlm.nih.gov/books/NBK1746/'],
  physiology: ['OpenStax Anatomy and Physiology 2e', 'https://openstax.org/details/books/anatomy-and-physiology-2e'],
  acid: ['Merck Manual Professional — Acid–Base Disorders', 'https://www.merckmanuals.com/professional/nephrology/acid-base-regulation-and-disorders/acid-base-disorders'],
  vq: ['StatPearls — Pulmonary Ventilation and Perfusion', 'https://www.ncbi.nlm.nih.gov/books/NBK539907/'],
  mcad: ['GeneReviews — Medium-Chain Acyl-CoA Dehydrogenase Deficiency', 'https://www.ncbi.nlm.nih.gov/books/NBK1424/'],
  otc: ['GeneReviews — Ornithine Transcarbamylase Deficiency', 'https://www.ncbi.nlm.nih.gov/books/NBK154378/'],
  biochem: ['NCBI Bookshelf — Biochemistry, 5e (Berg, Tymoczko, Stryer)', 'https://www.ncbi.nlm.nih.gov/books/NBK21154/'],
  pathology: ['MSD Manual Professional — Hematology and Oncology', 'https://www.msdmanuals.com/professional/hematology-and-oncology'],
  renal: ['KDIGO Glomerular Diseases guideline, updated chapters', 'https://kdigo.org/wp-content/uploads/2024/05/KDIGO-2021-Glomerular-Diseases-Guideline_English_2024-Chapter-Updates.pdf'],
  hit: ['ASH — Heparin-induced thrombocytopenia guideline', 'https://pmc.ncbi.nlm.nih.gov/articles/6258919/'],
  pharm: ['MSD Manual Professional — Clinical Pharmacology', 'https://www.msdmanuals.com/professional/clinical-pharmacology'],
  poisoning: ['MSD Manual Professional — Poisoning', 'https://www.msdmanuals.com/professional/injuries-poisoning/poisoning'],
  micro: ['NCBI Bookshelf — Medical Microbiology, 4e', 'https://www.ncbi.nlm.nih.gov/books/NBK7627/'],
  tb: ['CDC — Clinical and Laboratory Diagnosis for Tuberculosis', 'https://www.cdc.gov/tb/hcp/testing-diagnosis/clinical-and-laboratory-diagnosis.html'],
  botulism: ['CDC — Clinical Overview of Botulism', 'https://www.cdc.gov/botulism/hcp/clinical-overview/index.html'],
  rabies: ['WHO — Rabies vaccinations and immunization', 'https://www.who.int/teams/control-of-neglected-tropical-diseases/rabies/vaccinations-and-immunization/'],
  epi: ['WHO — Basic Epidemiology, 2e', 'https://iris.who.int/handle/10665/43541'],
  ent: ['MSD Manual Professional — Ear, Nose, and Throat Disorders', 'https://www.msdmanuals.com/professional/ear-nose-and-throat-disorders'],
  eye: ['MSD Manual Professional — Eye Disorders', 'https://www.msdmanuals.com/professional/eye-disorders'],
  ino: ['MSD Manual Professional — Internuclear Ophthalmoplegia', 'https://www.msdmanuals.com/professional/neurologic-disorders/neuro-ophthalmologic-and-cranial-nerve-disorders/internuclear-ophthalmoplegia'],
  medicine: ['MSD Manual Professional — Endocrine and Metabolic Disorders', 'https://www.msdmanuals.com/professional/endocrine-and-metabolic-disorders'],
  surgery: ['MSD Manual Professional — Gastrointestinal Disorders', 'https://www.msdmanuals.com/professional/gastrointestinal-disorders'],
  ectopic: ['NICE NG126 — Management of tubal ectopic pregnancy', 'https://www.nice.org.uk/guidance/ng126/chapter/management-of-tubal-ectopic-pregnancy'],
  obg: ['MSD Manual Professional — Gynecology and Obstetrics', 'https://www.msdmanuals.com/professional/gynecology-and-obstetrics'],
  pph: ['FIGO — Postpartum hemorrhage recommendations 2022', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9313855/'],
  pediatrics: ['MSD Manual Professional — Pediatrics', 'https://www.msdmanuals.com/professional/pediatrics'],
  meningitis: ['NICE NG240 — Bacterial meningitis recommendations', 'https://www.nice.org.uk/guidance/ng240/chapter/Recommendations'],
  ortho: ['MSD Manual Professional — Injuries and Poisoning', 'https://www.msdmanuals.com/professional/injuries-poisoning'],
  compartment: ['StatPearls — Acute Compartment Syndrome', 'https://www.ncbi.nlm.nih.gov/books/NBK448124/'],
  skin: ['DermNet — Dermatology reference', 'https://dermnetnz.org/topics'],
  bullous: ['ICMR — Immunobullous dermatoses treatment workflow', 'https://www.icmr.gov.in/icmrobject/uploads/STWs/1725967366_immunobullous.pdf'],
  psych: ['MSD Manual Professional — Psychiatric Disorders', 'https://www.msdmanuals.com/professional/psychiatric-disorders'],
  nms: ['StatPearls — Neuroleptic Malignant Syndrome', 'https://www.ncbi.nlm.nih.gov/books/NBK482282/'],
  radio: ['RadiologyInfo (ACR/RSNA) — Diagnostic imaging', 'https://www.radiologyinfo.org/en/info'],
  contrast: ['American College of Radiology — Manual on Contrast Media', 'https://cs.acr.org/-/media/ACR/Files/Clinical-Resources/Contrast_Media.pdf'],
  anesthesia: ['MSD Manual Professional — Critical Care Medicine', 'https://www.msdmanuals.com/professional/critical-care-medicine'],
  mh: ['European Malignant Hyperthermia Group — Crisis guideline v2024', 'https://www.emhg.org/recommendations-1/2024/11/4/recognising-and-managing-a-malignant-hyperthermia-crisis-v2024'],
  last: ['ASRA — Local Anesthetic Systemic Toxicity checklist 2020', 'https://rapm.bmj.com/content/46/1/81'],
  drowning: ['Royal College of Pathologists — Autopsy for bodies recovered from water', 'https://www.rcpath.org/resourceLibrary/guidelines-on-autopsy-practice-autopsy-for-bodies-recovered-from-water.html'],
  rigor: ['Systematic review — Postmortem interval estimation', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12346081/'],
  vitality: ['Review — Assessing wound vitality in decomposed bodies', 'https://pubmed.ncbi.nlm.nih.gov/36550324/'],
  firearm: ['NIST/SWGGUN — Gunshot residue distance determination guidelines', 'https://www.nist.gov/system/files/documents/2016/11/28/guidelines_for_gunshot_residue_distance_determinations.pdf'],
  petechiae: ['The forensic significance of conjunctival petechiae', 'https://pubmed.ncbi.nlm.nih.gov/3354519/'],
  torsion: ['Royal Australasian College of Surgeons — Acute scrotal pain and suspected torsion', 'https://www.surgeons.org/about-racs/position-papers/acute-scrotal-pain-and-suspected-testicular-torsion-guidelines-2022'],
  breast: ['MSD Manual Professional — Breast Masses', 'https://www.msdmanuals.com/professional/gynecology-and-obstetrics/breast-disorders/breast-masses'],
  cdiff: ['CDC — C. diff: Facts for Clinicians', 'https://www.cdc.gov/c-diff/hcp/clinical-overview/index.html'],
  hbv: ['CDC — Hepatitis B surveillance guidance', 'https://www.cdc.gov/hepatitis/php/surveillance-guidance/hepatitis-b.html'],
} as const;

export function ref(key: keyof typeof sources, section: string): Reference {
  return { title: sources[key][0], url: sources[key][1], section };
}
