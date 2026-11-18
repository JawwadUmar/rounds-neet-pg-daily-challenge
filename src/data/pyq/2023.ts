// Generated from the supplied edition by scripts/pyq/populate.py.
import { readPaper } from './paper';
import { dailyPapers } from './daily';

const entries = readPaper(2023, {
  "Anatomy": [
    {
      "number": 2,
      "statement": "A 5-year-old child with features of acute tonsillitis complains of ear pain. Which nerve is responsible for this referred ear pain?",
      "options": [
        "Greater auricular nerve",
        "Tympanic branch of glossopharyngeal nerve",
        "Auricular branch of vagus",
        "Mandibular nerve"
      ],
      "correct": "B",
      "answerText": "(B) Tympanic branch of glossopharyngeal nerve",
      "explanation": "This clinical scenario is a classic example of referred pain. The palatine tonsils are primarily innervated by the tonsillar branches of the glossopharyngeal nerve (CN IX). This same cranial nerve also provides sensory innervation to the middle ear cavity and the inner surface of the tympanic membrane via its tympanic branch (Jacobsons nerve). Because both the inflamed tonsil and the middle ear share a common sensory pathway through the glossopharyngeal nerve, the brain misinterprets the origin of the pain signals from the tonsils, perceiving them as coming from the ear. This phenomenon is known as referred otalgia. The other nerves listed innervate the external ear and surrounding skin but do not share a common sensory pathway with the palatine tonsils, making them incorrect choices for this specific clinical presentation.",
      "pages": [
        225,
        258
      ]
    },
    {
      "number": 3,
      "statement": "In a patient of liver cirrhosis anastomotic blood flow increase in",
      "options": [
        "Left gastric vein & esophageal veins",
        "Middle colic vein & left colic vein",
        "Sigmoidal & superior rectal vein",
        "Superior & inferior phrenic vein"
      ],
      "correct": "A",
      "answerText": "(A) Left gastric vein & esophageal veins",
      "explanation": "Liver cirrhosis leads to portal hypertension, which forces blood from the high-pressure portal system into the low-pressure systemic venous system through sites of portosystemic anastomosis. One of the most critical of these sites is at the gastroesophageal junction. Here, blood from the left gastric vein (a tributary of the portal vein) is shunted into the esophageal veins (which drain into the systemic azygos vein). The resulting massive increase in blood flow through this connection causes the veins to dilate, forming esophageal varices. These varices are prone to rupture and can cause life-threatening upper gastrointestinal bleeding, a major complication of cirrhosis. The other options do not represent major portosystemic anastomoses; they are either connections within the portal system or entirely within the systemic circulation.",
      "pages": [
        225,
        258
      ]
    }
  ],
  "Physiology": [
    {
      "number": 4,
      "statement": "A transport mechanism across the cell membrane is shown below. This process represents which of the following?",
      "options": [
        "Simple diffusion",
        "Facilitated diffusion",
        "Secondary active transport",
        "Primary active transport"
      ],
      "correct": "B",
      "answerText": "(B) Facilitated diffusion",
      "explanation": "The image displays molecules moving across a cell membrane from a region of high concentration to a region of low concentration. This movement is mediated by transmembrane proteins (a channel and a carrier protein). This process is the definition of facilitated diffusion. It is a form of passive transport, as it does not require metabolic energy (ATP) and relies on the concentration gradient. The proteins simply facilitate the passage of substances that cannot easily cross the lipid bilayer on their own, such as ions, glucose, and amino acids. Simple diffusion (A) does not involve proteins. Primary active transport (D) directly uses energy to move substances against their concentration gradient.",
      "pages": [
        225,
        258
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q4-1.png",
          "width": 663,
          "height": 304,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 7,
      "statement": "If the dorsal column of the spinal cord is compressed or injured from the lateral side, which of the following nerve fibers would be affected first?",
      "options": [
        "Cervical",
        "Sacral",
        "Thoracic",
        "Lumbar"
      ],
      "correct": "A",
      "answerText": "(A) Cervical",
      "explanation": "The dorsal columns of the spinal cord, which convey sensations of fine touch and proprioception, exhibit a distinct somatotopic organization. Sensory fibers from the lower body (sacral, lumbar) enter the cord first and are positioned medially. As the tract ascends, fibers from higher levels (thoracic, cervical) are added progressively to the lateral aspect. Therefore, the sacral fibers are the most medial, followed by lumbar and thoracic fibers, with the cervical fibers being the most lateral. Consequently, an injury impacting the dorsal column from the lateral side would first damage the most laterally located fibers, which are those originating from the cervical region. The sacral fibers, being the most medial, would be the last to be affected by such a lesion.",
      "pages": [
        225,
        263
      ]
    },
    {
      "number": 8,
      "statement": "An action potential recorded from a mammalian neuron is shown, with different phases labeled by letters. Which of the following pairs is correctly matched?",
      "options": [
        "Point A-threshold",
        "Point B to C- Na+ channel opening",
        "Point D-K+ channel closure",
        "Point E- Absolute refractory period"
      ],
      "correct": "B",
      "answerText": "(B) Point B to C- Na+ channel opening",
      "explanation": "The phase of the action potential from point B to point C represents the rapid depolarization or upstroke. This is caused by the activation and opening of voltage-gated sodium (Na+) channels once the membrane potential reaches the threshold. The resulting massive influx of positively charged Na+ ions into the neuron causes the sharp rise in membrane potential seen in the graph. Option (A) is incorrect because point A is the resting membrane potential, not the threshold. Option (C) is incorrect because point D lies on the repolarization phase, which is caused by the opening of potassium (K+) channels and efflux of K+. Option (D) is incorrect because point E is the after-hyperpolarization phase, which corresponds to the relative refractory period, not the absolute one.",
      "pages": [
        234,
        263
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q8-1.png",
          "width": 355,
          "height": 248,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 9,
      "statement": "A spirometer recording is shown in the diagram below. What does the part marked with the arrow indicate?",
      "options": [
        "Residual volume",
        "FRC",
        "ERV",
        "Residual Volume"
      ],
      "correct": "C",
      "answerText": "(C) ERV",
      "explanation": "The spirometry trace shows various lung volumes. The regular, small waves represent the tidal volume (TV). The arrow indicates the maximal amount of air that can be forcefully exhaled after a normal, quiet expiration (at the end of a tidal volume breath). This volume is, by definition, the Expiratory Reserve Volume (ERV). Residual volume (A, D) is the air that remains in the lungs even after a maximal exhalation and cannot be measured with a spirometer. Functional Residual Capacity (FRC) (B) is the sum of the ERV and the residual volume (FRV = ERV + RV), representing the total amount of air left in the lungs after a normal expiration. The arrow specifically isolates the expiratory reserve portion.",
      "pages": [
        234,
        263
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q9-1.png",
          "width": 341,
          "height": 259,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 10,
      "statement": "The phases of the ventricular muscle action potential are shown below. Which of the following phase–description pairs is correctly matched?",
      "options": [
        "Calcium channel open in phase 2",
        "Potassium channel closes in phase 0",
        "Transient sodium channel open in phase 3",
        "Calcium channel closes in phase 4"
      ],
      "correct": "A",
      "answerText": "(A) Calcium channel open in phase 2",
      "explanation": "The ventricular action potential has distinct phases driven by different ion channels. Phase 2, known as the plateau phase, is a prolonged period of depolarization that is characteristic of cardiac myocytes. This plateau is maintained by a balance between an inward flow of calcium ions through slow L-type calcium channels (which are open) and an outward flow of potassium ions. This sustained calcium influx is essential for triggering the contraction of the heart muscle. Phase 0 (B) is caused by the opening of fast sodium channels. Phase 3 (C) is rapid repolarization, caused by the closure of calcium channels and the continued efflux of potassium. Phase 4 (D) is the resting potential, during which the L-type calcium channels are closed.",
      "pages": [
        234,
        263
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q10-1.png",
          "width": 352,
          "height": 253,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 11,
      "statement": "In cases of infant respiratory distress syndrome (IRDS), there is a deficiency of which specific lipid?",
      "options": [
        "Lecithin",
        "Sphingomyelin",
        "Phosphatidylserine",
        "Phosphatidylethanolamine"
      ],
      "correct": "A",
      "answerText": "(A) Lecithin",
      "explanation": "Infant respiratory distress syndrome (IRDS) is caused by a deficiency of pulmonary surfactant in the lungs of premature newborns. Surfactant is a complex that reduces alveolar surface tension, preventing the air sacs from collapsing at the end of expiration. The most crucial component of surfactant is a phospholipid called dipalmitoylphosphatidylcholine (DPPC). DPPC is a specific type of lecithin, which is a general term for any phosphatidylcholine. The maturity of fetal lungs is often assessed by the lecithin-to-sphingomyelin (L/S) ratio in amniotic fluid; a ratio above 2 indicates sufficient surfactant production and lung maturity. In IRDS, the production of lecithin is inadequate, leading to respiratory failure. The other lipids listed are not the primary deficient components.",
      "pages": [
        234,
        264
      ]
    },
    {
      "number": 12,
      "statement": "Vitamin K dependent clotting factor",
      "options": [
        "Factor I",
        "Factor II",
        "Factor III",
        "Factor IV"
      ],
      "correct": "B",
      "answerText": "(B) Factor II",
      "explanation": "Vitamin K is a vital cofactor for the hepatic enzyme gamma-glutamyl carboxylase. This enzyme is responsible for the post-translational carboxylation of glutamate residues on several key proteins of the coagulation cascade. This carboxylation step is essential for these factors to bind calcium and phospholipids, thereby becoming functionally active. The clotting factors that depend on this vitamin K-mediated step are Factors II (prothrombin), VII, IX, and X, as well as the anticoagulant proteins C and S. From the options provided, Factor II is the correct vitamin K-dependent factor. Factor I is fibrinogen, Factor III is tissue factor, and Factor IV is calcium ions; none of these require vitamin K for their synthesis or function.",
      "pages": [
        234,
        264
      ]
    }
  ],
  "Biochemistry": [
    {
      "number": 13,
      "statement": "A family that predominantly consumes polished rice presents with signs of a vitamin deficiency. Which vitamin deficiency is likely, and which investigation is used to detect it?",
      "options": [
        "Riboflavin with Glutathione reductase",
        "Pyridoxine with Xanthurenic acid",
        "Riboflavin with Transketolase",
        "Thiamine with Transketolase"
      ],
      "correct": "D",
      "answerText": "(D) Thiamine with Transketolase",
      "explanation": "Polished rice is rice that has had its outer bran and germ layers removed. These layers are the primary dietary source of Thiamine (Vitamin B1). A diet heavily reliant on polished rice is a classic cause of thiamine deficiency, which leads to the condition known as beriberi. The functional status of thiamine in the body is biochemically assessed by measuring the activity of the enzyme transketolase in red blood cells. Transketolase, an enzyme in the pentose phosphate pathway, requires thiamine pyrophosphate (TPP) as a cofactor. In a thiamine-deficient state, the enzymes baseline activity is low, but it increases significantly when TPP is added to the test tube, confirming the deficiency.",
      "pages": [
        234,
        264
      ]
    },
    {
      "number": 14,
      "statement": "When the insulin-to-glucagon ratio is low, which of the following enzymes is stimulated?",
      "options": [
        "Lipoprotein lipase",
        "Hormone sensitive lipase",
        "Phosphofructokinase I",
        "Glycogen synthase"
      ],
      "correct": "B",
      "answerText": "(B) Hormone sensitive lipase",
      "explanation": "A low insulin-to-glucagon ratio is the hormonal signal of the fasting state, indicating a need to mobilize stored energy. In adipose tissue, glucagon and low insulin levels lead to the activation of Hormone-Sensitive Lipase (HSL). HSL is the key intracellular enzyme that catalyzes the hydrolysis of stored triglycerides into free fatty acids and glycerol. These products are then released into the bloodstream to be used as fuel by other tissues like the liver and muscle, through processes like beta-oxidation and gluconeogenesis. In contrast, insulin (a high insulin:glucagon ratio) stimulates enzymes involved in storage, such as Lipoprotein lipase (A) for fat uptake, Phosphofructokinase I (C) for glycolysis, and Glycogen synthase (D) for glycogen synthesis.",
      "pages": [
        234,
        264
      ]
    }
  ],
  "Pathology": [
    {
      "number": 16,
      "statement": "A 35-year-old man presents with fatigue and weakness. Peripheral blood smear shows the findings illustrated below. What is the most likely genetic change associated with this patient?",
      "options": [
        "T(9,22)",
        "T(15,17)",
        "T(11,14)",
        "T(14,18)"
      ],
      "correct": "B",
      "answerText": "(B) T(15,17)",
      "explanation": "The peripheral blood smear in the image shows numerous abnormal promyelocytes containing heavy cytoplasmic granules and likely Auer rods. This appearance is characteristic of Acute Promyelocytic Leukemia (APL), a subtype of acute myeloid leukemia. Patients with APL commonly present with symptoms such as fatigue, weakness, anemia, and bleeding tendencies due to bone marrow failure and coagulopathy.\nThe most common genetic abnormality associated with APL is the translocation t(15;17). This translocation occurs between chromosome 15 and chromosome 17 and results in the fusion of the PML gene on chromosome 15 with the RARA (retinoic acid receptor alpha) gene on chromosome 17. The resulting PML-RARA fusion protein blocks the normal differentiation of myeloid precursor cells at the promyelocyte stage, leading to accumulation of abnormal promyelocytes in the bone marrow and peripheral blood.\nThis genetic defect is clinically important because APL is highly responsive to targeted therapy. Treatment with all-trans retinoic acid (ATRA) or arsenic trioxide helps overcome the differentiation block, allowing the leukemic promyelocytes to mature into normal cells. Therefore, the correct answer is (B) t(15;17), which is the hallmark cytogenetic abnormality of Acute Promyelocytic Leukemia.",
      "pages": [
        237,
        265
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q16-1.jpg",
          "width": 385,
          "height": 257,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 17,
      "statement": "A 44-year-old patient presents with lymphadenopathy. On examination, generalized lymphadenopathy is noted without organomegaly. Peripheral blood smear shows lymphocytosis with smudge cells. What is the next appropriate step in the diagnostic workup?",
      "options": [
        "Lymph node biopsy",
        "Flow cytometry",
        "BM examination",
        "Genetic analysis"
      ],
      "correct": "B",
      "answerText": "(B) Flow cytometry",
      "explanation": "This clinical presentation is highly characteristic of Chronic Lymphocytic Leukemia (CLL), a malignancy of mature B-lymphocytes. Key features include an older patient, generalized lymphadenopathy, significant lymphocytosis, and the presence of smudge cells (fragile neoplastic lymphocytes) on the peripheral smear. The gold standard and essential next step to confirm the diagnosis is immunophenotyping by flow cytometry on the peripheral blood. This test identifies a monoclonal population of B-cells expressing a unique pattern of surface markers (typically CD19, CD20-dim, CD5, and CD23). This confirms the clonality and specific cell type, establishing the diagnosis of CLL without initially needing more invasive procedures like a bone marrow (BM) examination or lymph node biopsy, which are reserved for atypical cases or staging.",
      "pages": [
        237,
        265
      ]
    },
    {
      "number": 18,
      "statement": "A 7-year-old child presents to the outpatient department with swelling of the jaw. On examination, cytopenias are noted, and bone marrow aspiration shows the cells depicted below. What is the most likely diagnosis?",
      "options": [
        "Follicular lymphoma",
        "Adult T cell leukemia",
        "Burkitts lymphoma",
        "Infectious mononucleosis"
      ],
      "correct": "C",
      "answerText": "(C) Burkitts lymphoma",
      "explanation": "This combination of features—a jaw mass in a child (a classic location for endemic Burkitts), cytopenias indicating bone marrow infiltration, and the characteristic cell morphology—is pathognomonic for Burkitts lymphoma/leukemia. The bone marrow aspirate shows uniform, medium-sized lymphoblasts with round nuclei, stippled chromatin, and, most distinctively, intensely basophilic cytoplasm filled with prominent lipid vacuoles. This morphology is classified as L3 in the FAB system. Burkitts lymphoma is an extremely aggressive B-cell non-Hodgkin lymphoma. Follicular lymphoma (A) is a low-grade lymphoma typically found in adults. Adult T-cell leukemia (B) is also rare in children. Infectious mononucleosis (D) features reactive atypical lymphocytes, not a uniform population of malignant blasts.",
      "pages": [
        237,
        265
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q18-1.jpg",
          "width": 407,
          "height": 303,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 19,
      "statement": "Identify the structure in the below histology slide?",
      "options": [
        "Islet of langerhans",
        "Glomerulus",
        "Lymph node",
        "Hassall corpuscles"
      ],
      "correct": "B",
      "answerText": "(B) Glomerulus",
      "explanation": "The histology slide clearly shows the microscopic architecture of the kidney cortex. The prominent, ball-like structures are glomeruli, which are tufts of capillaries responsible for the initial filtration of blood. Each glomerulus is surrounded by Bowmans capsule and is interspersed among numerous cross-sections of renal tubules. This appearance is uniquely characteristic of the kidney. Islets of Langerhans (A) are endocrine cell clusters found in the pancreas. A lymph node (C) has a distinct architecture with follicles and sinuses. Hassalls corpuscles (D) are structures found only in the medulla of the thymus. The image is unequivocally a view of the renal cortex, and the identified structures are glomeruli.",
      "pages": [
        237,
        265
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q19-1.jpg",
          "width": 385,
          "height": 257,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 20,
      "statement": "Which of the following statements are true regarding the relative risk associated with Mendelian patterns of inheritance?",
      "options": [
        "2/3 autosomal dominant",
        "1/4 autosomal recessive",
        "1/10 Y linked",
        "3/4 X Linked"
      ],
      "correct": "B",
      "answerText": "(B) 1/4 autosomal recessive",
      "explanation": "This question asks for the correct recurrence risk for an affected child in a typical Mendelian inheritance scenario. For an autosomal recessive disorder, an affected child (genotype aa) is most commonly born to two heterozygous carrier parents (genotype Aa). In such a cross (Aa x Aa), the probability for each pregnancy is as follows: a 1 in 4 chance of having an affected child (aa), a 2 in 4 (or 1/2) chance of having an unaffected carrier child (Aa), and a 1 in 4 chance of having an unaffected, non-carrier child (AA). Therefore, the risk of having another child affected with the same autosomal recessive condition is 1/4 or 25%. The other options are incorrect for standard Mendelian patterns.",
      "pages": [
        237,
        274
      ]
    },
    {
      "number": 21,
      "statement": "A 5-year-old child presents with a history of fever and is diagnosed with ventricular tachycardia and cardiac dysfunction. Histopathology of the heart is shown below. What is the most likely diagnosis?",
      "options": [
        "Chagas disease",
        "Rheumatic heart disease",
        "Lymphocytic myocarditis",
        "Pericarditis"
      ],
      "correct": "C",
      "answerText": "(C) Lymphocytic myocarditis",
      "explanation": "The histopathology image (HPE) of the heart muscle reveals a dense inflammatory infiltrate composed mainly of lymphocytes, with associated damage and necrosis of adjacent cardiac muscle cells (myocytes). This finding, combined with the clinical presentation in a child—acute onset of fever, cardiac arrhythmia (ventricular tachycardia), and myocardial dysfunction—is the classic picture of acute lymphocytic myocarditis. This condition is an inflammation of the heart muscle, most commonly triggered by a viral infection (e.g., Coxsackievirus B). The immune response to the virus leads to the infiltration of lymphocytes and subsequent cardiac damage. Rheumatic heart disease (B) is characterized by Aschoff bodies. Chagas disease (A) would show a parasitic infiltrate. Pericarditis (D) is inflammation of the pericardial sac, not the muscle itself.",
      "pages": [
        236,
        274
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q21-1.jpg",
          "width": 513,
          "height": 388,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 22,
      "statement": "A 34-year-old man employed in the cement industry presented with a history of breathing difficulty. On examination, a chest X-ray revealed an opacity, and histological analysis confirmed the diagnosis of mesothelioma. Which of the following is the most likely causative factor?",
      "options": [
        "Silicosis",
        "Asbestosis",
        "Coal",
        "Iron oxide"
      ],
      "correct": "B",
      "answerText": "(B) Asbestosis",
      "explanation": "Malignant mesothelioma, a cancer arising from the mesothelial cells lining the pleura, has an exceptionally strong and well-established causal link to asbestos exposure. Although the patient works in the cement industry, this is a known risk factor, as asbestos was frequently incorporated into cement products for many years to provide reinforcement and fire resistance. The diagnosis of mesothelioma is considered a sentinel event for prior asbestos exposure, which often occurred decades before the cancer develops. The other listed dusts are associated with different pneumoconioses: silica causes silicosis (A), coal dust causes coal workers pneumoconiosis (C), and iron oxide causes siderosis (D). None of these are known to cause mesothelioma.",
      "pages": [
        236,
        274
      ]
    },
    {
      "number": 23,
      "statement": "A 20-year-old patient presented with a history of pedal edema and was found to have proteinuria on investigation. Kidney biopsy revealed a characteristic spike-and-dome appearance. What is the most likely diagnosis?",
      "options": [
        "Minimal change disease",
        "Membranous glomerulonephritis",
        "FSGS",
        "C3 glomerulonephritis"
      ],
      "correct": "B",
      "answerText": "(B) Membranous glomerulonephritis",
      "explanation": "The clinical presentation of pedal edema and proteinuria suggests a nephrotic syndrome. The key to the diagnosis is the kidney biopsy finding. A spike and dome appearance is pathognomonic for Membranous Glomerulonephritis (MGN). This appearance is seen on silver staining, where the domes are subepithelial immune complex deposits on the outer side of the glomerular basement membrane (GBM), and the spikes are new GBM material laid down by podocytes between these deposits. This process thickens the GBM and damages the filtration barrier, causing the massive proteinuria characteristic of nephrotic syndrome. Minimal change disease (A) shows normal light microscopy. Focal segmental glomerulosclerosis (FSGS) (C) shows segmental scarring. Neither has a spike and dome pattern.",
      "pages": [
        236,
        274
      ]
    }
  ],
  "Pharmacology": [
    {
      "number": 25,
      "statement": "A patient with elevated uric acid levels is receiving treatment for gout. Which of the following drugs acts by inhibiting the synthesis of uric acid?",
      "options": [
        "Probenecid",
        "Allopurinol",
        "Colchicine",
        "Diclofenac"
      ],
      "correct": "B",
      "answerText": "(B) Allopurinol",
      "explanation": "Uric acid is the final product of purine metabolism. The enzyme xanthine oxidase catalyzes the last two steps of this pathway. Allopurinol is a xanthine oxidase inhibitor. By blocking this enzyme, allopurinol decreases the production of uric acid, thereby lowering serum uric acid levels and preventing gout attacks. It is a first-line medication for the chronic management of gout. In contrast, probenecid (A) is a uricosuric agent that works by increasing the excretion of uric acid by the kidneys. Colchicine (C) and diclofenac (D) are anti-inflammatory drugs used to treat the pain and inflammation of an acute gout flare, but they do not alter uric acid levels.",
      "pages": [
        236,
        267
      ]
    },
    {
      "number": 26,
      "statement": "A patient receiving digoxin developed toxicity, with a serum digoxin level of 4 ng/mL. Given that digoxin has a half-life of 40 hours, how long will it take for the drug concentration to decrease to the therapeutic level of 1 ng/mL?",
      "options": [
        "80 hours",
        "40 hours",
        "160 hours",
        "120 hours"
      ],
      "correct": "A",
      "answerText": "(A) 80 hours",
      "explanation": "A drugs half-life is the time it takes for its plasma concentration to decrease by 50%. The initial toxic concentration is 4 ng/ml, and the target is 1 ng/ml.\nAfter the first half-life (40 hours), the concentration will fall from 4 ng/ml to 2 ng/ml.\nAfter the second half-life (another 40 hours), the concentration will fall again by half, from 2 ng/ml to 1 ng/ml. To get from 4 ng/ml to 1 ng/ml requires two half-lives. Total time = 2 half-lives × 40 hours/half-life = 80 hours.",
      "pages": [
        236,
        267
      ]
    },
    {
      "number": 27,
      "statement": "A patient undergoing cancer chemotherapy developed thrombocytopenia. Which of the following drugs is used to promote recovery from chemotherapy-induced thrombocytopenia?",
      "options": [
        "Epoetin",
        "Oprelvekin",
        "Filgrastim",
        "Amifostine"
      ],
      "correct": "B",
      "answerText": "(B) Oprelvekin",
      "explanation": "Chemotherapy-induced thrombocytopenia (a low platelet count) can be treated with thrombopoietic growth factors that stimulate platelet production in the bone marrow. Oprelvekin is a recombinant form of interleukin-11 (IL-11), a cytokine that stimulates the proliferation of hematopoietic progenitor cells and the maturation of megakaryocytes, the cells that produce platelets. This leads to an increase in the peripheral platelet count. Epoetin (A) is erythropoietin, which stimulates red blood cell production. Filgrastim (C) is a granulocyte colony-stimulating factor (G-CSF) that stimulates neutrophil production. Amifostine (D) is a cytoprotective agent used to reduce certain toxicities of chemotherapy but does not stimulate hematopoiesis.",
      "pages": [
        236,
        267
      ]
    },
    {
      "number": 28,
      "statement": "Which of the following drugs acts as both an angiotensin-converting enzyme (ACE) inhibitor and a neprilysin inhibitor?",
      "options": [
        "Omapatrilat",
        "Sacubitril",
        "Enalapril",
        "Candesartan"
      ],
      "correct": "A",
      "answerText": "(A) Omapatrilat",
      "explanation": "Omapatrilat is a vasopeptidase inhibitor, a class of drugs designed to inhibit both angiotensin-converting enzyme (ACE) and neprilysin simultaneously. By inhibiting ACE, it reduces the production of the vasoconstrictor angiotensin II. By inhibiting neprilysin, it increases the levels of vasodilating natriuretic peptides. This dual action provides potent blood pressure reduction. Sacubitril (B) is a neprilysin inhibitor, but it is combined with an angiotensin receptor blocker (valsartan), not an ACE inhibitor, to avoid the high incidence of angioedema associated with omapatrilat. Enalapril (C) is solely an ACE inhibitor, and candesartan (D) is an angiotensin receptor blocker.",
      "pages": [
        236,
        267
      ]
    },
    {
      "number": 29,
      "statement": "Which drug is the treatment of choice for dialysis disequilibrium syndrome?",
      "options": [
        "Ethacrynic acid",
        "Mannitol",
        "Aspirin",
        "Bumetanide"
      ],
      "correct": "B",
      "answerText": "(B) Mannitol",
      "explanation": "Dialysis Disequilibrium Syndrome (DDS) is a neurological complication resulting from cerebral edema. It occurs when hemodialysis removes urea from the blood much faster than from the brain, creating an osmotic gradient that pulls water into the brain cells. The treatment aims to counteract this osmotic shift. Mannitol is an osmotic diuretic. When administered intravenously, it increases the osmolarity of the blood, creating a reverse osmotic gradient that pulls fluid out of the brain tissue and into the vasculature, thereby reducing cerebral edema and intracranial pressure. Loop diuretics like ethacrynic acid (A) and bumetanide (D) do not address the central osmotic imbalance. Aspirin (C) has no role in this condition.",
      "pages": [
        236,
        267
      ]
    },
    {
      "number": 30,
      "statement": "A patient is scheduled to undergo cardiac surgery. Which antibiotic is most appropriate for preoperative prophylaxis?",
      "options": [
        "Doxycycline",
        "Cefazolin",
        "Penicillin G",
        "Erythromycin"
      ],
      "correct": "B",
      "answerText": "(B) Cefazolin",
      "explanation": "The goal of preoperative antibiotic prophylaxis for cardiac surgery is to prevent surgical site infections (SSIs), which are most commonly caused by skin flora like Staphylococcus aureus and Staphylococcus epidermidis. Cefazolin, a first-generation cephalosporin, is the recommended drug of choice for this indication. It has an excellent spectrum of activity against these common pathogens, a good safety profile, and appropriate pharmacokinetics to maintain adequate tissue levels during surgery. It is typically administered intravenously within 60 minutes prior to the initial incision. The other antibiotics listed either have an inappropriate spectrum of coverage for skin flora or are associated with higher rates of resistance, making them suboptimal choices for this specific prophylactic use.",
      "pages": [
        241,
        267
      ]
    },
    {
      "number": 31,
      "statement": "A child presented with confusion and irritability, had not passed urine since morning, complained of photophobia, and had a history of eating something while playing in the field. What is the most likely type of poisoning, and what is the appropriate antidote?",
      "options": [
        "Datura-pyridostigmine",
        "Datura-physostigmine",
        "Yellow oleander- pralidoxime",
        "Yellow oleander- physostigmine"
      ],
      "correct": "B",
      "answerText": "(B) Datura-physostigmine",
      "explanation": "The combination of central nervous system effects (confusion, irritability), urinary retention, and photophobia (from mydriasis) is characteristic of an anticholinergic toxidrome. A common plant source for this poisoning is Datura (Jimsonweed). The appropriate antidote for severe anticholinergic poisoning with central effects is an acetylcholinesterase inhibitor that can cross the blood-brain barrier. Physostigmine is a tertiary amine, allowing it to penetrate the CNS and reverse both central and peripheral symptoms. Pyridostigmine (A) is a quaternary amine that does not cross the blood-brain barrier and is therefore ineffective for the CNS symptoms. Yellow oleander (C, D) is a cardiac glycoside, and pralidoxime is an antidote for organophosphate poisoning.",
      "pages": [
        241,
        270
      ]
    },
    {
      "number": 32,
      "statement": "A patient with organophosphate poisoning was treated with atropine infusion and pralidoxime. Two hours later, the patient developed a high-grade fever. What is the most likely cause of this fever?",
      "options": [
        "Side effects of oxime",
        "Side effects of atropine",
        "Due to OP poisoning",
        "Due to increased secretions"
      ],
      "correct": "B",
      "answerText": "(B) Side effects of atropine",
      "explanation": "In the treatment of organophosphate (OP) poisoning, high doses of atropine are administered to block the muscarinic effects of excess acetylcholine. A significant anticholinergic side effect of atropine is the inhibition of sweating (anhidrosis) by blocking muscarinic receptors on sweat glands. The inability to sweat severely impairs the bodys ability to dissipate heat, which can lead to a rise in core body temperature, a condition known as atropine fever. This is a direct pharmacological consequence of the high-dose atropine therapy required in this setting. The fever is not a typical effect of pralidoxime (A) or the OP poisoning itself (C), and increased secretions (D) would cause heat loss, not fever.",
      "pages": [
        241,
        270
      ]
    },
    {
      "number": 33,
      "statement": "What is the treatment of Aspirin overdose?",
      "options": [
        "Naloxone",
        "N-Acetylcysteine",
        "Glucagon",
        "IV NaHCO₃"
      ],
      "correct": "D",
      "answerText": "(D) IV NaHCO₃",
      "explanation": "The primary goals in managing aspirin (salicylate) overdose are to correct metabolic disturbances and enhance the drugs elimination. This is best achieved with intravenous sodium bicarbonate (IV NaHCO₃). Administering bicarbonate alkalinizes the urine (raises its pH). Since aspirin is a weak acid, a more alkaline urine causes the aspirin molecules to become ionized. This ion trapping prevents them from being reabsorbed across the renal tubular membranes, thereby significantly increasing their excretion. Additionally, IV bicarbonate helps to correct the severe metabolic acidosis that is a hallmark of significant salicylate toxicity. N-Acetylcysteine (B) is the antidote for acetaminophen (paracetamol) overdose, not aspirin.",
      "pages": [
        241,
        270
      ]
    },
    {
      "number": 35,
      "statement": "A patient with bronchial asthma on inhaled corticosteroid therapy presented with oral thrush. Which antifungal drug is used for its management?",
      "options": [
        "Terbinafine",
        "Flucytosine",
        "Clotrimazole",
        "Griesiofulvion"
      ],
      "correct": "C",
      "answerText": "(C) Clotrimazole",
      "explanation": "Oropharyngeal candidiasis, commonly known as oral thrush, is a frequent local side effect of inhaled corticosteroids due to local immune suppression. The standard treatment for uncomplicated cases is a topical antifungal agent. Clotrimazole is an excellent choice as it is available in the form of a troche (lozenge). The patient dissolves the troche slowly in the mouth, which allows for prolonged contact between the antifungal medication and the affected oral and pharyngeal mucosa, leading to effective eradication of the Candida infection. Griseofulvin (D) and terbinafine (A) are not effective against Candida. Flucytosine (B) is a systemic antifungal reserved for severe, life-threatening fungal infections and is not used for oral thrush.",
      "pages": [
        241,
        270
      ]
    },
    {
      "number": 36,
      "statement": "What is the mechanism of action of t PA?",
      "options": [
        "Anti thrombin effect",
        "Fibrinolytic effect",
        "Inhibits clot formation",
        "Anti platelet effect"
      ],
      "correct": "B",
      "answerText": "(B) Fibrinolytic effect",
      "explanation": "t-PA stands for tissue Plasminogen Activator. It is a proteolytic enzyme that plays a crucial role in dissolving blood clots. Its mechanism of action is fibrinolytic. t-PA functions by binding to fibrin within an existing thrombus (blood clot). This binding activates t-PA, enabling it to convert plasminogen, an inactive proenzyme that is also present in the clot, into its active form, plasmin. Plasmin is a potent enzyme that directly degrades the fibrin meshwork which forms the structural integrity of the clot. This enzymatic breakdown of fibrin leads to the dissolution of the clot. t-PA does not prevent clot formation (C) or have direct anti-platelet (D) or anti-thrombin (A) effects; it actively breaks down a pre-formed clot.",
      "pages": [
        241,
        270
      ]
    },
    {
      "number": 37,
      "statement": "A child diagnosed with whooping cough has a total leukocyte count greater than 50,000 cells/ mm³ with absolute lymphocytosis. What is the appropriate treatment?",
      "options": [
        "Clarithromycin",
        "Ampicillin",
        "Cotrimoxazole",
        "Azithromycin"
      ],
      "correct": "D",
      "answerText": "(D) Azithromycin",
      "explanation": "Whooping cough (pertussis) is caused by the bacterium Bordetella pertussis. A very high total leukocyte count (TLC) with a predominance of lymphocytes is a hallmark of severe pertussis and is associated with increased morbidity and mortality. The drugs of choice for treating pertussis are macrolide antibiotics. Azithromycin is the preferred agent, particularly in infants and children, due to its once-daily dosing, shorter 5-day course, and superior safety profile compared to older macrolides like erythromycin. While clarithromycin (A) is an alternative, azithromycin is generally favored. Antibiotic treatment is crucial to eradicate the organism, thereby reducing the patients infectivity and preventing further spread. If started early, it may also lessen the severity and duration of symptoms. Ampicillin (B) and cotrimoxazole (C) are not effective first-line treatments.",
      "pages": [
        241,
        269
      ]
    },
    {
      "number": 38,
      "statement": "Drug of Choice for Gonnorhea?",
      "options": [
        "Clarithromycin",
        "Ampicillin",
        "Ceftriaxone",
        "Azithromycin"
      ],
      "correct": "C",
      "answerText": "(C) Ceftriaxone",
      "explanation": "The treatment for gonorrhea, caused by Neisseria gonorrhoeae, has been complicated by the bacteriums ability to develop widespread resistance to multiple classes of antibiotics. Due to high rates of resistance, penicillins (like ampicillin), tetracyclines, and fluoroquinolones are no longer recommended. Current treatment guidelines from major public health bodies like the CDC recommend a single intramuscular injection of Ceftriaxone, a third-generation cephalosporin, as the primary and most reliable treatment for uncomplicated urogenital, rectal, or pharyngeal gonorrhea. For many years, it was combined with azithromycin, but due to increasing azithromycin resistance, ceftriaxone remains the cornerstone of therapy. Clarithromycin (A) is not used for treating gonorrhea.",
      "pages": [
        241,
        269
      ]
    },
    {
      "number": 39,
      "statement": "A patient being treated with crinoline for hypertension and using nicotine replacement therapy suddenly stopped taking crinoline and developed a headache. What is the underlying mechanism responsible for this headache?",
      "options": [
        "Receptor hypersensitivity",
        "Rebound hypertension",
        "Hypotension",
        "Receptor down regulation"
      ],
      "correct": "B",
      "answerText": "(B) Rebound hypertension",
      "explanation": "Clonidine lowers blood pressure by stimulating central alpha-2 adrenergic receptors, which suppresses sympathetic nervous system outflow. When clonidine is taken chronically, the body adapts to this state of reduced sympathetic tone. If the medication is stopped abruptly, this inhibitory effect is suddenly removed. The result is a surge in sympathetic activity, leading to a rapid and often severe increase in blood pressure to levels that can exceed the pre-treatment baseline. This phenomenon is known as rebound hypertension. A severe, acute headache is a very common symptom of this hypertensive crisis. While receptor down regulation (D) during treatment contributes to this withdrawal phenomenon, the direct cause of the headache is the rebound hypertension itself.",
      "pages": [
        241,
        269
      ]
    }
  ],
  "Forensic Medicine": [
    {
      "number": 41,
      "statement": "Which autopsy technique is used to minimize the risk of infection transmission in patients with HIV?",
      "options": [
        "Rokitansky technique",
        "Virchow technique",
        "Letulle technique",
        "Ghons technique"
      ],
      "correct": "C",
      "answerText": "(C) Letulle technique",
      "explanation": "The Letulle technique is an autopsy method in which all thoracic, abdominal, and pelvic organs are removed together as a single organ block and then dissected outside the body. This technique minimizes repeated handling of individual organs within the body cavity and reduces the number of cuts and manipulations required during the initial stages of the autopsy. Because of this, it helps reduce the exposure of the pathologist to blood, body fluids, and potentially infectious materials.\nIn patients with HIV, hepatitis B, hepatitis C, or other blood-borne infections, minimizing direct exposure to infected tissues is extremely important. The Letulle technique allows the organs to be examined in a controlled manner after removal, which lowers the risk of accidental injuries, splashes, and aerosol generation that could transmit infection.\nOther techniques are less suitable in such situations. The Virchow technique removes organs one by one, increasing handling and exposure. The Rokitansky technique involves in-situ dissection, and the Ghon technique removes organs in functional blocks but still requires more manipulation.\nTherefore, the Letulle technique is preferred to minimize infection transmission risk during autopsy in HIV patients.",
      "pages": [
        238,
        269
      ]
    },
    {
      "number": 42,
      "statement": "In a deceased individual, the body temperature was recorded as 39°C. What is the most likely cause of death?",
      "options": [
        "Cyanide poisoning",
        "Corrosive poisoning",
        "Septicemia",
        "Intra abdominal hemorrhage"
      ],
      "correct": "C",
      "answerText": "(C) Septicemia",
      "explanation": "Normally, a body cools after death (algor mortis). However, in certain conditions, the body temperature can remain elevated or even rise for a short period postmortem, a phenomenon called postmortem caloricity. This occurs in deaths associated with a hypermetabolic state or excessive heat production immediately prior to death. Septicemia (sepsis) is a classic cause. The massive systemic inflammatory response in sepsis generates a high antemortem fever, and continued metabolic activity of bacteria after death can contribute to this sustained high temperature. Other causes include heat stroke, certain poisonings (like strychnine), and pontine hemorrhage. Conditions like hemorrhage (D) and cyanide poisoning (A) typically lead to rapid body cooling.",
      "pages": [
        238,
        268
      ]
    },
    {
      "number": 43,
      "statement": "Which autopsy technique involves the en bloc removal of the thoracic, cervical, and abdominal organs together?",
      "options": [
        "Rokitansky technique",
        "Virchow technique",
        "Lettuce technique",
        "Ghons technique"
      ],
      "correct": "C",
      "answerText": "(C) Lettuce technique",
      "explanation": "The autopsy method that involves removing the thoracic, cervical, and abdominal organs as a single, large unit is known as the Letulle technique. This is also referred to as the en masse or en bloc method. By keeping all the organ systems connected, this technique allows for excellent examination of anatomical relationships, which is particularly useful for tracing the pathways of trauma, metastatic cancer, or complex congenital anomalies. The Virchow technique (B) involves removing organs one by one. The Rokitansky technique (A) is an in situ dissection. The Ghon technique (D) involves removal by functional blocks (e.g., thoraco-cervical block, abdominal block). Lettuce is likely a common misspelling of Letulle.",
      "pages": [
        238,
        268
      ]
    },
    {
      "number": 44,
      "statement": "Sec 314 of IPC deals with",
      "options": [
        "Criminal abortion with consent",
        "Criminal abortion without consent",
        "Criminal abortion leading to death of mother",
        "Preventing a child from being born alive"
      ],
      "correct": "C",
      "answerText": "(C) Criminal abortion leading to death of mother",
      "explanation": "Section 314 of the Indian Penal Code (IPC) specifically addresses the outcome of death resulting from an act performed with the intent to cause a miscarriage. The section states: Whoever, with intent to cause the miscarriage of a woman with child, does any act which causes the death of such woman, shall be punished... This clearly defines the offense as an illegal abortion procedure that unintentionally but consequently leads to the death of the pregnant woman. Section 312 deals with causing a miscarriage with consent, while Section 313 addresses causing a miscarriage without the womans consent. Section 315 pertains to acts intended to prevent a child from being born alive.",
      "pages": [
        238,
        268
      ]
    },
    {
      "number": 46,
      "statement": "A patient developed seizures, muscle tremors, and backward arching of the spine after consuming a herbal medicine. What is the most likely cause of these symptoms?",
      "options": [
        "Strychnine poisoning",
        "Oleander poisoning",
        "Aconite poisoning",
        "Castor seed poisoning"
      ],
      "correct": "A",
      "answerText": "(A) Strychnine poisoning",
      "explanation": "This constellation of symptoms is pathognomonic for strychnine poisoning. Strychnine is a potent neurotoxin, sometimes found as an adulterant in herbal medicines or in rodenticides. It acts as a competitive antagonist of the inhibitory neurotransmitter glycine in the spinal cord and brainstem. By blocking this inhibition, strychnine causes uncontrolled, exaggerated reflex neuronal activity. This leads to characteristic and severe muscular convulsions, tremors, and opisthotonus (a dramatic, rigid arching of the back, causing a backward aching of the spine). The seizures are often intensely painful and can be triggered by even minor stimuli. Oleander (B) is cardiotoxic, Aconite (C) causes arrhythmias and paresthesias, and Castor seeds (D) cause severe gastrointestinal distress.",
      "pages": [
        238,
        271
      ]
    }
  ],
  "Microbiology": [
    {
      "number": 47,
      "statement": "A 45-year-old man presented to the outpatient department with abdominal pain and diarrhea for the past three days, along with fatigue, anorexia, and weight loss. On examination, his blood pressure was 130/70 mm Hg with a regular pulse of 70 beats per minute, and he was found to have jaundice. Ultrasonography of the liver showed intrahepatic and extrahepatic bile duct dilatation with strictures and intraductal pigmented stones. What is the most likely causative agent?",
      "options": [
        "Enterobius (pinworm)",
        "Stronglyoides stercoralis",
        "Ancylostoma duodenale",
        "Clonorchis sinensis"
      ],
      "correct": "D",
      "answerText": "(D) Clonorchis sinensis",
      "explanation": "The clinical and radiological findings are highly suggestive of chronic biliary disease caused by the Chinese liver fluke, Clonorchis sinensis. This parasitic flatworm infects the biliary tree. Chronic infection leads to persistent inflammation of the bile ducts, causing periductal fibrosis, ductal strictures, and both intrahepatic and extrahepatic biliary dilatation. This chronic inflammation and stasis also promote the formation of intraductal pigmented stones. The patients symptoms of abdominal pain, jaundice, and weight loss are consistent with biliary obstruction and its complications, which include recurrent pyogenic cholangitis and an increased risk of cholangiocarcinoma. The other parasites listed are intestinal nematodes and do not cause this specific biliary pathology.",
      "pages": [
        238,
        271
      ]
    },
    {
      "number": 48,
      "statement": "A sewer worker presented with high-grade fever, jaundice, and conjunctival suffusion. What is the next most appropriate investigation to confirm the diagnosis?",
      "options": [
        "Microscopic agglutination test",
        "Paul Bunnell",
        "Widal test",
        "Weil Felix test"
      ],
      "correct": "A",
      "answerText": "(A) Microscopic agglutination test",
      "explanation": "The classic triad of fever, jaundice, and conjunctival suffusion (redness of the conjunctiva without pus) in a patient with an occupational risk like being a sewer worker is highly indicative of Weils disease, the severe form of leptospirosis. This is a zoonotic infection caused by the spirochete Leptospira. The definitive and gold standard serological test for diagnosing leptospirosis is the Microscopic Agglutination Test (MAT). This complex test detects antibodies in the patients serum that react with live Leptospira serovars. A four-fold or greater rise in the MAT titer between acute and convalescent serum samples confirms the diagnosis. The other tests are for different diseases: Paul-Bunnell for infectious mononucleosis (B), Widal for typhoid fever (C), and Weil-Felix for rickettsial diseases (D).",
      "pages": [
        238,
        271
      ]
    },
    {
      "number": 49,
      "statement": "Boys hostel get infected as hostlers develop polymorphous rashes with fever?",
      "options": [
        "Isolation for 6 days",
        "Isolation for 6 days and give acyclovir",
        "Isolation for 14 days & give IV immunoglobulin within 48 hours",
        "Isolation for 6 days & give IV immunoglobulin within 72 hours"
      ],
      "correct": "B",
      "answerText": "(B) Isolation for 6 days and give acyclovir",
      "explanation": "The presence of fever with polymorphous rash among boys living in a hostel strongly suggests Varicella (Chickenpox), a highly contagious viral infection caused by the Varicella-zoster virus. Chickenpox commonly spreads rapidly in crowded settings such as hostels, schools, and dormitories through respiratory droplets and direct contact with vesicular lesions.\nA key clinical feature of chickenpox is a polymorphous rash, meaning lesions are present in different stages simultaneously (macules, papules, vesicles, and crusts). Fever, malaise, and itching usually accompany the rash.\nManagement focuses on preventing transmission and reducing viral replication. Patients should be isolated for about 6 days, typically until the lesions begin to crust over, as infectivity is highest from 1–2 days before rash appearance until crusting occurs.\nThe antiviral drug Acyclovir is used to inhibit viral DNA replication. Early administration helps reduce severity, duration of fever, and formation of new lesions, especially during outbreaks in closed communities like hostels.\nIntravenous immunoglobulin (IVIG) is generally reserved for immuno compromised individuals or severe cases, not routine outbreaks.\nTherefore, the most appropriate management in this scenario is isolation for 6 days with acyclovir therapy.",
      "pages": [
        238,
        271
      ]
    },
    {
      "number": 50,
      "statement": "Rotavirus diagnosis?",
      "options": [
        "Antigen in stool",
        "Ab in stool",
        "Antibody in serum",
        "Light microscopy of stool sample"
      ],
      "correct": "A",
      "answerText": "(A) Antigen in stool",
      "explanation": "Rotavirus is a leading cause of severe acute gastroenteritis in infants and young children. For diagnosing an active infection, the most widely used, rapid, and reliable method is the detection of viral antigen in a stool sample. This is typically performed using commercial enzyme-linked immuno sorbent assay (ELISA) kits or latex agglutination tests. These assays are highly sensitive and specific for detecting a common rotavirus structural protein (VP6), confirming that the virus is actively replicating in the gut and is the cause of the diarrhea. Serology (C) is not useful for acute diagnosis. Antibody detection in stool (B) is not a standard method. Viruses cannot be seen with light microscopy (D).",
      "pages": [
        239,
        271
      ]
    },
    {
      "number": 51,
      "statement": "What is true for trichomonas?",
      "options": [
        "Twitching motility is seen on wet mount",
        "Cannot be grown in culture",
        "Darting motility is seen",
        "Cysts are seen on wet mount 4"
      ],
      "correct": "A",
      "answerText": "(A) Twitching motility is seen on wet mount",
      "explanation": "Trichomonas vaginalis, the protozoan parasite responsible for trichomoniasis, exists only in a trophozoite stage and does not form cysts (D is incorrect)5. A key diagnostic feature is its appearance on a saline wet mount of vaginal or urethral discharge. Under the microscope, the pear-shaped trophozoite exhibits a characteristic and vigorous\njerky or twitching motility, which is due to the rapid movement of its flagellar. This feature is highly specific and allows for a rapid diagnosis. While it can be grown in special media like Diamonds medium, this is not routine (B is incorrect)7. Darting motility (C) is a term more commonly used to describe the movement of bacteria like\nVibrio cholerae, not Trichomonas. Therefore, the observation of its unique twitching movement on a wet mount is a true and classic diagnostic sign.",
      "pages": [
        239,
        272
      ]
    },
    {
      "number": 52,
      "statement": "A child presented with fever, headache, and neck stiffness. Cerebrospinal fluid examination showed low glucose levels and gram-negative pleomorphic organisms. What is the characteristic feature of this organism on culture?",
      "options": [
        "Alpha hemolysis of sheep RBC 9",
        "Satellitism in presence of Staphylococcus aureus",
        "Non lactose fermentation on Mc Conkey agar",
        "Bacitracin sensitive"
      ],
      "correct": "B",
      "answerText": "(B) Satellitism in presence of Staphylococcus aureus",
      "explanation": "The clinical presentation of meningitis in a child, with CSF findings of low glucose and gram-negative pleomorphic rods, is highly suggestive of infection with Haemophilus influenzae. This bacterium is fastidious and requires two specific growth factors: X factor (hemin) and V factor (NAD). Standard sheep blood agar provides X factor but not V factor. However, Staphylococcus aureus produces V factor as a metabolic by product. When both organisms are plated on blood agar, H. influenzae will only grow in tiny colonies immediately surrounding the larger S. aureus colonies, which are supplying the needed V factor. This phenomenon is known as satellitism and is a classic laboratory test for identifying H. influenzae. The other options describe different bacteria: alpha hemolysis (A) is typical of S. pneumoniae, non-lactose fermentation (C) is seen in Salmonella, and bacitracin sensitivity (D) identifies S. pyogenes.",
      "pages": [
        239,
        272
      ]
    },
    {
      "number": 53,
      "statement": "A patient presenting with fever and swelling tested positive for filarial antigen. What should be the next step in management?",
      "options": [
        "DEC provocation test",
        "LN biopsy",
        "BM aspiration",
        "Peripheral blood smear to identify microfilaria"
      ],
      "correct": "D",
      "answerText": "(D) Peripheral blood smear to identify microfilaria",
      "explanation": "The detection of filarial antigen in the blood is a highly sensitive and specific method for diagnosing lymphatic filariasis, particularly that caused by Wuchereria bancrofti. A positive antigen test is considered diagnostic, and in most clinical settings, treatment would be the next step. However, among the given options, which are all further diagnostic tests, the most logical traditional step would be to attempt to visualize the parasite itself. This is done by examining a peripheral blood smear for the presence of microfilariae. Since the microfilariae of W. bancrofti exhibit nocturnal periodicity (they are most numerous in peripheral blood at night), a nighttime blood draw is preferred. A DEC provocation test (A) is a method used to stimulate the release of microfilariae into the bloodstream during the daytime to facilitate their detection on a smear.",
      "pages": [
        239,
        272
      ]
    },
    {
      "number": 54,
      "statement": "A patient presented with hepatosplenomegaly and was found to have pallor on examination. A rapid antigen test was positive for HRP-2 antigen. Which species of Plasmodium is responsible for this infection?",
      "options": [
        "Falciparum",
        "Malariae",
        "Ovale",
        "Vivax"
      ],
      "correct": "A",
      "answerText": "(A) Falciparum",
      "explanation": "Rapid diagnostic tests (RDTs) for malaria work by detecting specific antigens produced by the Plasmodium parasites. The Histidine-Rich Protein 2 (HRP-2) antigen is produced exclusively by Plasmodium falciparum. Therefore, a positive result for HRP-2 is diagnostic for an infection with P. falciparum. Other RDTs may detect different antigens, such as plasmodium lactate dehydrogenase (pLDH), which can be pan-specific (detecting all species) or specific to other species like P. vivax. However, the finding of a positive HRP-2 antigen test, as in this patient, specifically identifies the causative agent as P. falciparum. The clinical findings of hepatosplenomegaly and pallor (due to anemia from hemolysis) are also consistent with a significant malarial infection.",
      "pages": [
        239,
        272
      ]
    },
    {
      "number": 55,
      "statement": "A man from Bihar presented with fever and skin lesions. Microscopic examination revealed an organism containing a kinetoplast. What is the causative agent responsible for this condition?",
      "options": [
        "Leishmania tropica",
        "Toxoplasma gondii",
        "Babesia microti",
        "Malaria"
      ],
      "correct": "A",
      "answerText": "(A) Leishmania tropica",
      "explanation": "The key to this diagnosis is the geographical location and the microscopic finding. Bihar is a well-known endemic region for visceral leishmaniasis (Kala-azar) in India. The microscopic finding of an organism with a kinetoplast is a defining characteristic of protozoa belonging to the order Kinetoplastida, which includes both Leishmania and Trypanosoma. The kinetoplast is a distinctive network of mitochondrial DNA located within a single large mitochondrion. In a patient from Bihar presenting with fever and skin lesions (which can occur in post-kala-azar dermal leishmaniasis), finding a kinetoplast-containing organism is diagnostic of Leishmania.\nToxoplasma, Babesia, and Plasmodium (Malaria) are all protozoan parasites, but they do not possess a kinetoplast. Leishmania tropica is a species that causes cutaneous leishmaniasis.",
      "pages": [
        239,
        272
      ]
    },
    {
      "number": 56,
      "statement": "A patient with a history of multiple sexual partners presented with fever and jaundice. Laboratory investigations showed elevated SGPT levels, and both HBsAg and HBeAg were positive. Which of the following treatment options is not recommended in this condition?",
      "options": [
        "Lamivudine",
        "Peg interferon",
        "Combination of peg interferon + lamivudine",
        "Tenofovir >54 weeks"
      ],
      "correct": "C",
      "answerText": "(C) Combination of peg interferon + lamivudine",
      "explanation": "The patient has acute hepatitis B, indicated by fever, jaundice, and high SGPT. The serology shows HBsAg positive (infection) and HBeAg positive (high viral replication and high infectivity). Treatment for chronic hepatitis B includes nucleos(t)ide analogs like lamivudine and tenofovir, or immunomodulators like pegylated interferon. However, combination therapy with both pegylated interferon and lamivudine is generally not recommended. Clinical trials have shown that this combination does not provide a significant benefit over monotherapy with either agent alone and may increase the risk of side effects. While both drugs are used individually, their concurrent use is not a standard of care. Therefore, this combination would be the treatment that is not recommended for this patient.",
      "pages": [
        239,
        273
      ]
    },
    {
      "number": 57,
      "statement": "Owl eye inclusion bodies?",
      "options": [
        "CMV",
        "Toxoplasma",
        "HSV",
        "EBV"
      ],
      "correct": "A",
      "answerText": "(A) CMV",
      "explanation": "The presence of owls eye inclusion bodies is a pathognomonic histological finding for infection with Cytomegalovirus (CMV), a member of the herpesvirus family. These characteristic inclusions are seen within infected cells, which become markedly enlarged (cytomegaly). The inclusion itself is a large, basophilic, intranuclear body that is surrounded by a clear halo. This appearance, with the central dark inclusion (the pupil) and the surrounding clear zone (the iris), strikingly resembles the eye of an owl. These inclusions can be found in various tissues, including the lungs, kidneys, liver, and gastrointestinal tract, in patients with active CMV infection, particularly those who are immuno compromised. The other pathogens listed are associated with different histological findings.",
      "pages": [
        239,
        273
      ]
    },
    {
      "number": 58,
      "statement": "A 50-year-old man from Delhi presented with fever, headache, joint pain, petechial rash, and bleeding gums. Blood investigations revealed hemoglobin of 10 g/dL, a white blood cell count of 3,000/mm³, and a platelet count of 20,000/ mm³. What is the most likely diagnosis?",
      "options": [
        "Dengue",
        "Scrub typhus",
        "Babesiosis",
        "Typhoid"
      ],
      "correct": "A",
      "answerText": "(A) Dengue",
      "explanation": "The combination of symptoms and laboratory findings is highly characteristic of Dengue fever, an arboviral infection endemic in areas like Delhi. The clinical features include high-grade fever, headache, and severe joint pain (myalgias and arthralgias, giving it the name break-bone fever). The presence of a petechial rash and bleeding gums are warning signs of severe dengue, indicating increased vascular permeability. The laboratory results are classic for dengue: leukopenia (WBC-3000) and severe thrombocytopenia (platelet count of 20,000). This triad of fever, thrombocytopenia, and hemorrhagic manifestations is the hallmark of dengue. Scrub typhus, typhoid, and babesiosis can present with fever and cytopenias but this specific constellation, especially the severe thrombocytopenia with bleeding, strongly points to dengue.",
      "pages": [
        239,
        273
      ]
    },
    {
      "number": 59,
      "statement": "A patient presented with a painless genital ulcer accompanied by non-tender inguinal lymphadenopathy. What is the most likely diagnosis?",
      "options": [
        "Syphilis",
        "Chancroid",
        "Granuloma inguinale",
        "Genital TB"
      ],
      "correct": "A",
      "answerText": "(A) Syphilis",
      "explanation": "The classic presentation of primary syphilis, caused by the spirochete Treponema pallidum, is a single, painless ulcer (known as a chancre) at the site of inoculation. The chancre typically has a clean base and firm, indurated borders. This is often accompanied by regional non-tender inguinal lymphadenopathy. This combination of a painless ulcer and non-tender nodes is highly specific for primary syphilis. In contrast, chancroid (B), caused by Haemophilus ducreyi, typically presents with multiple, painful ulcers and tender, suppurative lymphadenopathy (buboes). Granuloma inguinale (C) causes painless, progressive, ulcerative lesions without significant lymphadenopathy.",
      "pages": [
        239,
        273
      ]
    },
    {
      "number": 60,
      "statement": "A patient with a history of multiple sexual partners presented with urethral discharge. Gram staining of the discharge showed characteristic findings. Which of the following drugs is not used in the management of this condition?",
      "options": [
        "Ceftriaxone",
        "Ampicillin",
        "Azithromycin",
        "Doxycycline"
      ],
      "correct": "B",
      "answerText": "(B) Ampicillin",
      "explanation": "The image shows a Gram stain of urethral discharge with gram-negative diplococci located inside polymorphonuclear leukocytes (neutrophils). This is the classic microscopic finding for urethritis caused by Neisseria gonorrhoeae. Due to widespread and high-level resistance, penicillins, including ampicillin, are no longer effective and are not used in the management of gonorrhea. The current recommended treatment is ceftriaxone. Often, treatment also includes an agent to cover for potential co-infection with Chlamydia trachomatis, such as azithromycin or doxycycline, both of which are effective options. Therefore, ampicillin is the only drug on the list that is not a part of modern treatment regimens for this condition.",
      "pages": [
        240,
        273
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q60-1.jpg",
          "width": 512,
          "height": 342,
          "alt": "Figure accompanying the question"
        }
      ]
    }
  ],
  "PSM": [
    {
      "number": 62,
      "statement": "A 10-year-old child presented to the outpatient department. According to the National Immunization Schedule, which vaccine should be advised at this age?",
      "options": [
        "Td vaccine",
        "Typhoid vaccine",
        "BCG",
        "DPT"
      ],
      "correct": "A",
      "answerText": "(A) Td vaccine",
      "explanation": "According to Indias National Immunization Schedule (NIS), several vaccines are administered during infancy and early childhood. By the age of 5, a child should have received booster doses of DPT (Diphtheria, Pertussis, Tetanus). The schedule then includes further booster doses at later ages to maintain immunity. At 10 years of age, and again at 16 years, a booster dose of the Td vaccine (Tetanus and diphtheria, adult formulation) is recommended. The adult formulation (Td) contains a lower dose of the diphtheria toxoid compared to the pediatric DPT vaccine. BCG is given at birth. The second DPT booster is given at 5 years. Typhoid vaccine is recommended but may have different schedules depending on the type used. The Td vaccine is the specifically scheduled vaccine for a 10-year-old.",
      "pages": [
        240,
        266
      ]
    },
    {
      "number": 63,
      "statement": "A 22-year-old pregnant woman presented to a subcentre with a history of consuming papaya and feared that it might have caused abortion. After thorough examination, the pregnancy was found to be safe, and she was reassured and sent home. Which health worker should be sent for a rural home visit in this situation?",
      "options": [
        "ASHA",
        "Train birth attendant",
        "Anganwadi worker",
        "MO"
      ],
      "correct": "C",
      "answerText": "(C) Anganwadi worker",
      "explanation": "In rural health services under the Integrated Child Development Services (ICDS) scheme, the Anganwadi Worker plays an important role in providing maternal and child health education, nutritional guidance, and counseling at the community level. In this case, the pregnant woman was worried that consuming papaya might lead to abortion. After medical examination, the pregnancy was found to be safe and she was reassured.\nHowever, myths and misconceptions related to diet during pregnancy are common in rural communities. A home visit is useful to reinforce counseling, provide reassurance, and educate the woman and her family about safe nutrition during pregnancy. The Anganwadi worker regularly conducts home visits, nutrition education sessions, and antenatal counseling, making her the most appropriate worker for follow-up in this situation.\nOther options are less suitable. Accredited Social Health Activist mainly focuses on mobilizing people for health services and institutional delivery, while a trained birth attendant assists during delivery. The medical officer (MO) is responsible for clinical care at health facilities rather than routine household counseling.\nThus, the Anganwadi worker is the appropriate health worker for the rural home visit.",
      "pages": [
        240,
        266
      ]
    },
    {
      "number": 65,
      "statement": "How to collect tap water for bacteriological study",
      "options": [
        "Before collecting water let water flow for 1 min",
        "Attach bottle before turning on the tap to avoid splashing",
        "Attach bottle to mid stream & avoid splashing",
        "Tap water from leaking tap"
      ],
      "correct": "C",
      "answerText": "(C) Attach bottle to mid stream & avoid splashing",
      "explanation": "The correct procedure for collecting a tap water sample for bacteriological analysis is designed to ensure the sample is representative of the water in the main pipe and is not contaminated by the tap itself. The standard procedure involves several steps. First, the tap should be cleaned and sterilized (often by flaming). Then, the water should be allowed to run at a medium flow for 2-3 minutes to flush out any stagnant water from the local pipes. Finally, the sterile collection bottle should be opened carefully, and the sample should be collected from the mid-stream of the water flow without the bottle touching the tap and without splashing, which could introduce contaminants. The bottle should not be completely filled to allow for mixing before analysis. Option C best describes the collection part of this process.",
      "pages": [
        240,
        275
      ]
    },
    {
      "number": 66,
      "statement": "What is the best measure for assessing the overall health status of a community, and which indicator is most sensitive to the availability and utilization of health services?",
      "options": [
        "IMR",
        "MMR",
        "DALY",
        "HDI"
      ],
      "correct": "A",
      "answerText": "(A) IMR",
      "explanation": "The Infant Mortality Rate (IMR), which is the number of deaths of infants under one year of age per 1,000 live births, is widely regarded as one of the most sensitive indicators of the overall health status of a community. It reflects not just the health of infants but also the socioeconomic conditions, public health infrastructure, and the quality and accessibility of maternal and child health services. A high IMR suggests issues with nutrition, sanitation, infectious disease control, and poor access to or utilization of healthcare. The Maternal Mortality Ratio (MMR) is specific to maternal health. DALYs measure the burden of disease , and the HDI is a broader measure of development that includes education and income, not just health. IMR is particularly sensitive to changes in the healthcare system.",
      "pages": [
        240,
        275
      ]
    },
    {
      "number": 67,
      "statement": "Which of the following statements regarding the Colombo Plan is correct?",
      "options": [
        "Chemotherapy",
        "Cancer units",
        "Cobalt supply",
        "Human resource development"
      ],
      "correct": "D",
      "answerText": "(D) Human resource development",
      "explanation": "The Colombo Plan, established in 1951, is a regional intergovernmental organization focused on fostering economic and social development in the Asia-Pacific region. While its activities have evolved over the years, a central and enduring theme has been the promotion of human resource development. This is achieved through programs that provide technical cooperation, training, and sharing of expertise among member countries. The plan aims to build capacity and skills in various sectors, including public administration, private sector development, and drug advisory programs. The other options are far too specific and do not represent the broad mandate of the Colombo Plan, which has always been centered on cooperative development and capacity building.",
      "pages": [
        240,
        275
      ]
    },
    {
      "number": 68,
      "statement": "A 10-year-old child presented to the pediatric outpatient department with fever, rash, and Koplik spots on the buccal mucosa. What is the most likely diagnosis?",
      "options": [
        "Measles",
        "Mumps",
        "Rubella",
        "Chicken pox"
      ],
      "correct": "A",
      "answerText": "(A) Measles",
      "explanation": "The clinical triad of fever, rash, and Kopliks spots is pathognomonic for measles (rubeola). Kopliks spots are small, white or bluish-white spots with an erythematous base, typically found on the buccal mucosa opposite the molars. They are an enanthem that appears 1-2 days before the characteristic maculopapular skin rash (exanthem) and are considered a definitive sign of measles. The rash typically starts on the face and spreads downwards. Mumps is characterized by parotitis , rubella has a milder rash and lymphadenopathy , and chickenpox presents with a vesicular rash. The presence of Kopliks spots makes the diagnosis of measles certain.",
      "pages": [
        243,
        275
      ]
    },
    {
      "number": 69,
      "statement": "Identify the vitamin deficiency in the child shown in the image below.",
      "options": [
        "Vit D Deficiency",
        "Vit A Deficiency",
        "Vit K Deficiency",
        "Vit E Deficiency"
      ],
      "correct": "A",
      "answerText": "(A) Vit D Deficiency",
      "explanation": "The image shows bowing of the legs (genu varum) in a child, which is a classic sign of Rickets caused by Vitamin D deficiency. Vitamin D plays a crucial role in the absorption of calcium and phosphorus from the intestine, which are essential for proper bone mineralization and skeletal growth. When vitamin D levels are insufficient, bones become soft, weak, and poorly mineralized, leading to skeletal deformities.\nIn growing children, this defective mineralization affects the epiphyseal growth plates, causing characteristic features such as bowed legs, knock knees, widening of wrists and ankles, frontal bossing, and rachitic rosary (enlargement at the costochondral junctions). The bowing of legs occurs because the softened bones cannot withstand the body weight during standing and walking.\nCommon causes include inadequate sunlight exposure, poor dietary intake of vitamin D, malnutrition, and malabsorption disorders. Early diagnosis and treatment with vitamin D supplementation and adequate sunlight exposure can correct the deficiency and prevent permanent skeletal deformities.\nThus, the clinical appearance in the image is most consistent with Vitamin D deficiency leading to rickets.",
      "pages": [
        243,
        275
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q69-1.jpg",
          "width": 309,
          "height": 512,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 70,
      "statement": "An alcoholic patient presented to the outpatient department with ataxia, confusion, and visual disturbances. What is the underlying cause of this condition?",
      "options": [
        "Thiamine Deficiency",
        "Niacin Deficiency",
        "Biotin Deficiency",
        "Vitamin A Deficency"
      ],
      "correct": "A",
      "answerText": "(A) Thiamine Deficiency",
      "explanation": "The classic triad of ataxia (unsteady gait), confusion, and ophthalmoplegia (visual changes/abnormal eye movements) is characteristic of Wernickes encephalopathy. This is an acute neurological emergency caused by a severe deficiency of thiamine (Vitamin B1). Chronic alcoholism is the most common cause in developed countries, as it leads to poor nutrition, impaired thiamine absorption, and increased metabolic demand for the vitamin. If left untreated, Wernickes encephalopathy can progress to Korsakoff syndrome, a chronic condition characterized by profound memory loss and confabulation. The prompt recognition of this triad and immediate administration of high-dose intravenous thiamine is critical to prevent irreversible brain damage. Niacin deficiency causes pellagra (dementia, dermatitis, diarrhea).",
      "pages": [
        243,
        280
      ]
    },
    {
      "number": 71,
      "statement": "A patient presented with symptoms suggestive of pulmonary tuberculosis, but sputum examination was negative for TB. Chest X-ray findings were consistent with tuberculosis. What should be the next step in management?",
      "options": [
        "Repeat sputum samples",
        "Start TB treatment",
        "CBNAAT",
        "Home remedy"
      ],
      "correct": "C",
      "answerText": "(C) CBNAAT",
      "explanation": "The patient is clinically and radiologically suspected of having pulmonary tuberculosis but has a negative sputum smear. This is a common scenario, as sputum smear microscopy has limited sensitivity. The next step according to current diagnostic algorithms is to perform a more sensitive and specific molecular test. The Cartridge-Based Nucleic Acid Amplification Test (CBNAAT), such as GeneXpert, is the recommended test in this situation. CBNAAT can detect Mycobacterium tuberculosis DNA directly from the sputum sample with much higher sensitivity than microscopy. A major advantage is that it can also simultaneously detect resistance to rifampicin, a key first-line anti-TB drug. Starting treatment based on X-ray alone is not ideal without microbiological confirmation , and simply repeating the same insensitive sputum smear test is less effective than upgrading to a molecular test.",
      "pages": [
        243,
        280
      ]
    },
    {
      "number": 72,
      "statement": "A male patient presented with a clean-cut wound and had received tetanus toxoid immunization 10 years ago. What is the appropriate management of this wound?",
      "options": [
        "Full course tetanus vaccine to be given",
        "Full dose TT with TIG",
        "Single dose TT",
        "No treatment required"
      ],
      "correct": "C",
      "answerText": "(C) Single dose TT",
      "explanation": "The management of a wound for tetanus prophylaxis depends on the type of wound and the patients vaccination history. This patient has a clean, minor wound. His last tetanus toxoid (TT) vaccine was 10 years ago. According to tetanus prophylaxis guidelines, for a patient with a clean, minor wound whose last dose was 10 or more years ago (or if the history is unknown), a single booster dose of the TT vaccine should be administered. This is sufficient to boost the patients immunity. Tetanus Immune Globulin (TIG) is not required for clean, minor wounds. A full course is only needed for those with an inadequate primary series. No treatment would be incorrect as immunity wanes over time and a booster is needed after 10 years.",
      "pages": [
        243,
        280
      ]
    },
    {
      "number": 73,
      "statement": "A patient has varicella. The management for remaining contacts would be",
      "options": [
        "Isolate for 6 days + acyclovir + vzig for 72 hours",
        "VZIG only",
        "Isolate for 14 days + vzig within 48 hours",
        "Isolate for 6 days"
      ],
      "correct": "C",
      "answerText": "(C) Isolate for 14 days + vzig within 48 hours",
      "explanation": "The disease referred to here is Varicella (Chickenpox), which is caused by the Varicella-zoster virus. It is a highly contagious disease that spreads through respiratory droplets and direct contact with vesicular fluid. When a case of varicella occurs, close contacts—especially those who are susceptible—are at risk of developing the infection.\nFor susceptible contacts, preventive management includes isolation (quarantine) for 14 days, which corresponds to the maximum incubation period of varicella (10–21 days). This helps prevent further spread if the contact becomes infectious.\nIn addition, Varicella Zoster Immune Globulin should be administered within 48 hours of exposure. VZIG provides passive immunity by supplying antibodies against the virus and is particularly recommended for high-risk individuals, such as pregnant women, immuno compromised patients, and newborns exposed to the virus.\nOther options are incorrect because 6-day isolation applies to infected patients, not contacts, and acyclovir is used mainly for treatment rather than routine prophylaxis of contacts.\nTherefore, the appropriate management for remaining contacts is isolation for 14 days with VZIG administration within 48 hours of exposure.",
      "pages": [
        243,
        280
      ]
    },
    {
      "number": 74,
      "statement": "A premature, low–birth-weight infant was found to have decreased hearing, patent ductus arteriosus (PDA), and bilateral cataracts. What is the most likely cause of these findings?",
      "options": [
        "Rubella",
        "CMV",
        "Toxoplasmosis",
        "HSV"
      ],
      "correct": "A",
      "answerText": "(A) Rubella",
      "explanation": "This constellation of birth defects is the classic presentation of Congenital Rubella Syndrome (CRS). This syndrome occurs when a pregnant woman is infected with the rubella virus, especially during the first trimester, and the virus is transmitted to the fetus. The classic triad of CRS consists of: 1) Cataracts (or other eye defects like retinopathy), 2) Sensorineural hearing loss, and 3) Congenital heart defects, with Patent Ductus Arteriosus (PDA) and pulmonary artery stenosis being the most common. In addition to this triad, affected infants often have low birth weight and prematurity. While other congenital infections (part of the TORCH complex) can cause some of these findings, this specific combination, particularly the triad of cataracts, deafness, and PDA, is the hallmark of congenital rubella.",
      "pages": [
        243,
        277
      ]
    },
    {
      "number": 75,
      "statement": "A poor farmer with a history of repeated crop failures developed progressive spastic paraparesis, upper motor neuron signs, and gait instability. What is the most likely toxin responsible for this condition?",
      "options": [
        "BOAA",
        "Aflatoxin",
        "Strychnine",
        "Ergotoxine"
      ],
      "correct": "A",
      "answerText": "(A) BOAA",
      "explanation": "This clinical scenario describes neurolathyrism, a crippling neurodegenerative disease. It is caused by the overconsumption of the grass pea, Lathyrus sativus, particularly during times of famine and crop failure when it becomes a staple food. The grass pea contains a neurotoxin called Beta-N-oxalyl-amino-L-alanine (BOAA). This toxin is an excitotoxin that leads to the irreversible degeneration of upper motor neurons. This results in the characteristic clinical picture of a slowly progressive, spastic paraparesis (stiffness and weakness of the legs), hyperreflexia, and an unsteady, scissors-like gait. Aflatoxin is a hepatotoxin and carcinogen. Strychnine causes acute seizures , and ergotoxine causes vasoconstriction (ergotism).",
      "pages": [
        243,
        277
      ]
    },
    {
      "number": 76,
      "statement": "Which vitamin is used to treat neurolathyrism",
      "options": [
        "Vit C",
        "Vit A",
        "Vit B",
        "Vit E"
      ],
      "correct": "C",
      "answerText": "(C) Vit B",
      "explanation": "Neurolathyrism is a neurological condition caused by excessive consumption of the pulse Lathyrus sativus (Kesari dal). This pulse contains a neurotoxin called Beta-oxalyl-L-alpha,beta-diaminopropionic acid, which damages the motor neurons of the spinal cord.\nNeurolathyrism usually occurs in poor rural populations during drought or famine, when Lathyrus sativus becomes the major dietary component. The disease mainly affects young adults and is characterized by spastic paralysis of the lower limbs, difficulty in walking, exaggerated reflexes, and muscle stiffness, while sensory functions remain normal.\nManagement focuses primarily on prevention and nutritional improvement. Adequate intake of Vitamin B complex is recommended because B-complex vitamins help improve nerve metabolism and neurological function. Supplementation with Vitamin B may help reduce neurological damage and support recovery along with a balanced diet.\nOther options are incorrect because Vitamin A is mainly related to vision and epithelial health, Vitamin C is used for scurvy, and Vitamin E is associated with antioxidant protection.\nTherefore, Vitamin B (especially Vitamin B complex) is used in the management of neurolathyrism.",
      "pages": [
        243,
        277
      ]
    },
    {
      "number": 77,
      "statement": "Which disease is caused by zinc deficiency",
      "options": [
        "Acrodermatitis enteropathica",
        "Psoriasis",
        "Seborrheic dermatitis",
        "Glucagonoma syndrome."
      ],
      "correct": "A",
      "answerText": "(A) Acrodermatitis enteropathica",
      "explanation": "Acrodermatitis enteropathica is a rare, autosomal recessive metabolic disorder characterized by the inability to absorb zinc from the diet. It can also be acquired due to nutritional deficiencies. The condition classically presents in infancy after weaning from breast milk and manifests with a distinct clinical triad: 1) a periorificial (around the mouth and anus) and acral (on the hands and feet) dermatitis, 2) alopecia (hair loss), and 3) severe diarrhea. These symptoms are a direct result of profound zinc deficiency. The condition responds dramatically to oral zinc supplementation. While zinc deficiency can worsen other skin conditions, it is the direct and sole cause of acrodermatitis enteropathica. The other conditions listed have different etiologies.",
      "pages": [
        242,
        277
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q77-1.jpg",
          "width": 258,
          "height": 195,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 78,
      "statement": "A person who had low blood pressure during childhood is more likely to have low blood pressure in adulthood. What is this phenomenon called?",
      "options": [
        "Tracking phenomenon",
        "Rule of Halve",
        "WHO Steps approach",
        "None of the above"
      ],
      "correct": "A",
      "answerText": "(A) Tracking phenomenon",
      "explanation": "The tendency for a physiological variable, such as blood pressure or cholesterol levels, to remain in a certain percentile or rank over time as a person ages is known as the tracking phenomenon. The statement that a person with low blood pressure in childhood is likely to have relatively low blood pressure in adulthood is a direct example of this concept. Similarly, children with blood pressure in the higher percentiles are at an increased risk of developing hypertension as adults. This phenomenon highlights the importance of monitoring risk factors like blood pressure from an early age, as childhood values can be predictive of adult health status. The Rule of Halves refers to the underdiagnosis and undertreatment of hypertension in a community , while the WHO Steps approach is a framework for chronic disease surveillance.",
      "pages": [
        242,
        277
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q78-1.jpg",
          "width": 513,
          "height": 218,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 79,
      "statement": "Deficiency of which vitamin is the most common cause of petechial bleeding of the gums?",
      "options": [
        "Vit A",
        "Vit C",
        "Vit D",
        "Vit K"
      ],
      "correct": "B",
      "answerText": "(B) Vit C",
      "explanation": "Bleeding from the gums (gingival hemorrhage), often appearing as petechiae, is a hallmark sign of scurvy, the disease caused by severe Vitamin C (ascorbic acid) deficiency. Vitamin C is essential for the synthesis of collagen, a critical protein for maintaining the structural integrity of blood vessels and connective tissues. In a deficient state, capillary walls become fragile and are prone to rupture with minor trauma, leading to bleeding. The gums are particularly affected, becoming swollen, spongy, and friable. While Vitamin K deficiency can cause generalized bleeding due to impaired coagulation factor synthesis, the characteristic petechial bleeding specifically from inflamed gums is most strongly associated with Vitamin C deficiency.",
      "pages": [
        242,
        284
      ]
    }
  ],
  "ENT": [
    {
      "number": 80,
      "statement": "A patient shows a negative Rinne test with 256 Hz and 512 Hz tuning forks but a positive Rinne test with a 1024 Hz tuning fork. What is the estimated air–bone gap in this patient?",
      "options": [
        "15 to 30 Db",
        "30 to 45 Db",
        "45 to 60 Db",
        ">60 Db"
      ],
      "correct": "B",
      "answerText": "(B) 30 to 45 Db",
      "explanation": "Rinnes test compares air conduction (AC) and bone conduction (BC) of sound. A negative test (BC > AC) indicates a conductive hearing loss. The magnitude of the conductive loss, or the air-bone gap (ABG), correlates with which tuning fork frequencies give a negative result.\nA negative Rinne at 256 Hz corresponds to an ABG of at least 15-20 dB.\nA negative Rinne at 512 Hz corresponds to an ABG of at least 30-35 dB.\nA negative Rinne at 1024 Hz corresponds to an ABG of at least 45-50 dB.\nThis patient is negative at 256 Hz and 512 Hz, but becomes positive at 1024 Hz. This means their air-bone gap is large enough to be detected by the 512 Hz fork but not large enough to be detected by the 1024 Hz fork. This places the air-bone gap in the range of\n30 to 45 dB.",
      "pages": [
        242,
        284
      ]
    },
    {
      "number": 81,
      "statement": "Identify the marked structure",
      "options": [
        "Tubal tonsil",
        "Fossa of Rosen muller",
        "Eustachian tube opening",
        "Torus tubarius"
      ],
      "correct": "B",
      "answerText": "(B) Fossa of Rosen muller",
      "explanation": "The image displays an endoscopic view of the nasopharynx. The prominent bulge labeled MC is the torus tubarius, which is the cartilaginous end of the Eustachian tube opening into the nasopharynx. The arrow is pointing to the slit-like recess or depression located just posterior and superior to this bulge. This specific anatomical location is known as the pharyngeal recess or fossa of Resummoned. This fossa is a clinically important site because it is the most common location for nasopharyngeal carcinoma to originate. The tubal tonsil (A) is lymphoid tissue near the opening, and the Eustachian tube opening (C) is the orifice itself, anterior to the fossa.",
      "pages": [
        242,
        284
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q81-1.jpg",
          "width": 341,
          "height": 341,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 82,
      "statement": "An elderly patient presented with a change in voice and was diagnosed with cancer. He subsequently underwent a specific intervention. Following which surgical procedure is this intervention typically performed?",
      "options": [
        "Partial laryngectomy",
        "Total Laryngectomy",
        "Vertical Hemilaryngectomy",
        "Horizontal hemilaryngectomy"
      ],
      "correct": "B",
      "answerText": "(B) Total Laryngectomy",
      "explanation": "The device shown in the image is a tracheoesophageal voice prosthesis. This device is specifically used for voice rehabilitation after a total laryngectomy. During a total laryngectomy, the entire larynx (voice box) is removed, and the trachea is brought out to the neck to create a permanent stoma for breathing. This disconnects the lungs from the pharynx and mouth, resulting in the loss of normal speech. To restore voice, a small puncture can be created between the trachea and the esophagus, into which this one-way valve prosthesis is placed. It allows air from the lungs to be shunted into the esophagus, causing the pharyngoesophageal segment to vibrate and produce sound, which can then be articulated into speech. This intervention is not required for partial laryngectomies, where some portion of the larynx is preserved.",
      "pages": [
        242,
        284
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q82-1.jpg",
          "width": 388,
          "height": 317,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 83,
      "statement": "Which of the following conditions is not an indication for the use of this device?",
      "options": [
        "Pulmonary toilet",
        "Upper airway assessment",
        "Acute upper airway obstruction",
        "Prolonged mechanical ventilation"
      ],
      "correct": "B",
      "answerText": "(B) Upper airway assessment",
      "explanation": "The image shows a tracheostomy tube. A tracheostomy is a surgical procedure to create an opening into the trachea, through which this tube is placed to establish a secure airway. Its primary indications include:\nBypassing an acute upper airway obstruction (e.g., due to tumor, trauma, or angioedema).\nFacilitating prolonged mechanical ventilation in critically ill patients, as it is more comfortable and secure than an endotracheal tube for long-term use.\nAiding in pulmonary toilet, which is the clearance of tracheobronchial secretions in patients who cannot cough effectively.\nA tracheostomy is a therapeutic intervention to establish an airway; it is not a diagnostic tool used for upper airway assessment. Assessment is done using techniques like laryngoscopy or imaging.",
      "pages": [
        242,
        284
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q83-1.jpg",
          "width": 386,
          "height": 352,
          "alt": "Figure accompanying the question"
        }
      ]
    }
  ],
  "Ophthalmology": [
    {
      "number": 84,
      "statement": "An infant presented with difficulty opening the eyes, a cloudy cornea, and excessive watering from the eyes since birth. Based on the clinical picture shown, what is the most probable diagnosis?",
      "options": [
        "Congenital glaucoma",
        "Mucopolysaccharoidosis",
        "Congenital cataract",
        "Opthalmia neonatarum"
      ],
      "correct": "A",
      "answerText": "(A) Congenital glaucoma",
      "explanation": "The image and clinical description point strongly to congenital glaucoma. This condition results from abnormal development of the eyes aqueous humor drainage system, leading to elevated intraocular pressure (IOP). In an infant, whose sclera is still elastic, this high pressure causes the eyeball to stretch and enlarge, a condition called buphthalmos (ox eye), as seen in the picture. The elevated IOP also causes edema in the cornea, leading to the cloudy cornea. The classic triad of symptoms for congenital glaucoma is epiphora (excessive watering), photophobia (light sensitivity, leading to difficulty opening the eye), and blepharospasm. Congenital cataract involves opacification of the lens, not the cornea. Ophthalmia neonatorum is conjunctivitis with discharge.",
      "pages": [
        235,
        279
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q84-1.jpg",
          "width": 342,
          "height": 228,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 85,
      "statement": "A 65-year-old man presented with colored halos and a gradual decrease in vision. He has a long-standing history of diabetes mellitus. Based on the slit-lamp examination findings shown, what is the diagnosis and the appropriate management for this patient?",
      "options": [
        "Sunflower cataract/ snow flake cataract- control sugar levels",
        "Zonular cataract- lens extraction",
        "Immature senile cataract-Phacoemulsification & IMSC",
        "Rossette cataract- ECCE"
      ],
      "correct": "C",
      "answerText": "(C)  Immature  senile  cataract- Phacoemulsification & IMSC",
      "explanation": "The slit lamp image shows a uniformly opacified lens, consistent with a cataract. The patient is 65 years old, making an age-related senile cataract the most common type. The symptoms of gradual vision decrease and colored halos (due to diffraction of light by water clefts in the lens) are classic for cataracts. While diabetes can cause specific types of cataracts (like snowflake cataracts), senile cataracts are still the most prevalent in this age group, even with diabetes. The image shows a significant but not completely opaque (mature) cataract, so it could be classified as an immature senile cataract. The definitive and standard modern management for a visually significant cataract is surgical removal.\nPhacoemulsification with implantation of an intraocular lens (IOL) is the current gold standard procedure. IMSC is incorrect as it is an outdated method.",
      "pages": [
        235,
        279
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q85-1.jpg",
          "width": 307,
          "height": 205,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 86,
      "statement": "Which is the best diagnostic modality for this corneal condition",
      "options": [
        "Rose bengal dye",
        "Lissamine green stain",
        "Fluorescein dye with cobalt blue light",
        "Fluorescein dye with green filter"
      ],
      "correct": "C",
      "answerText": "(C) Fluorescein dye with cobalt blue light",
      "explanation": "The image shows a classic dendritic ulcer of the cornea, which is pathognomonic for Herpes Simplex Virus (HSV) keratitis. This ulcer has a characteristic branching, tree-like pattern. The best way to visualize and diagnose such corneal epithelial defects is by using fluorescein dye staining followed by examination with a cobalt blue light. Fluorescein is a yellow dye that stains areas where the corneal epithelium is absent (the stroma), but it does not stain intact epithelial cells. When viewed under the cobalt blue filter of a slit lamp, the stained ulcerated area fluoresces a brilliant green, making the dendritic pattern clearly visible. While Rose Bengal and Lissamine Green dyes can also be used to stain devitalized cells, fluorescein with a cobalt blue light is the standard and most effective method for identifying epithelial defects like this one.",
      "pages": [
        235,
        279
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q86-1.jpg",
          "width": 433,
          "height": 296,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 87,
      "statement": "A 65-year-old patient presented with binasal visual field loss. Imaging revealed a space-occupying lesion in the brain, for which the patient is receiving treatment. What is the most probable location of this lesion?",
      "options": [
        "Chiasma",
        "Rt. Optic tract",
        "Lt. Optic tract",
        "Lt. Visual cortex"
      ],
      "correct": "A",
      "answerText": "(A) Chiasma",
      "explanation": "The visual pathway has a precise organization. The optic chiasm is where the nerve fibers from the nasal (medial) half of each retina cross to the opposite side, while the temporal (lateral) fibers remain uncrossed. The nasal retinal fibers are responsible for vision in the temporal visual fields. A lesion that compresses the optic chiasm from the center (like a pituitary adenoma) will damage these crossing nasal fibers from both eyes. This results in the loss of vision in both temporal fields, a defect known as bitemporal hemianopia. The question describes binasal vision loss, which is the loss of vision in the fields closest to the nose. This rare defect is caused by bilateral lesions compressing the lateral, uncrossed fibers of the optic chiasm, for example, from bilateral internal carotid artery aneurysms. However, chiasmal lesions are the only single location that can produce bilateral field defects like this. The options likely contain an error, intending to say bitemporal, which points directly to the chiasm.",
      "pages": [
        235,
        279
      ]
    },
    {
      "number": 88,
      "statement": "A child presented with a dark-colored, progressively enlarging lesion on one side of the face that has been present since birth. What is the most likely long-term complication that may develop in the future?",
      "options": [
        "Cataract",
        "Glaucoma",
        "Malignant melanoma",
        "Loss of vision"
      ],
      "correct": "B",
      "answerText": "(B) Glaucoma",
      "explanation": "The image shows a large, bluish-grey patch of pigmentation on one side of the face, involving the periorbital area. This is characteristic of a Nevus of Ota (oculodermal melanocytosis). This is a congenital condition involving an increased number of melanocytes in the skin (dermis) in the distribution of the first and second branches of the trigeminal nerve. Crucially, this condition often involves ocular melanocytosis as well, meaning there is increased pigmentation within the eye itself (uveal tract, sclera). Individuals with Nevus of Ota, particularly those with ocular involvement, have a significantly increased lifetime risk of developing glaucoma on the affected side. They also have a small but increased risk of developing uveal malignant melanoma, but glaucoma is a much more common long-term complication that requires regular monitoring.",
      "pages": [
        235,
        276
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q88-1.jpg",
          "width": 570,
          "height": 380,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 89,
      "statement": "What is the refractive error shown in this image of sturms conoid.",
      "options": [
        "Hypermetropia",
        "Myopia",
        "Astigmatism",
        "Presbyopia"
      ],
      "correct": "C",
      "answerText": "(C) Astigmatism",
      "explanation": "The diagram illustrates the concept of Sturms conoid, which is the optical effect produced by an astigmatic eye. Astigmatism is a refractive error where the eyes refractive surfaces (usually the cornea) are not perfectly spherical. Instead, they have different curvatures in different meridians (e.g., the vertical meridian is steeper than the horizontal). As a result, parallel rays of light entering the eye are not focused to a single point. Instead, they form two separate focal lines at different distances, as shown in the diagram labeled Focus 1 and Focus 2. The pattern of light rays between these two focal lines is known as Sturms conoid. This refractive state is the definition of astigmatism. Myopia and hypermetropia involve a single focal point that is in front of or behind the retina, respectively.",
      "pages": [
        244,
        276
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q89-1.png",
          "width": 513,
          "height": 248,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 90,
      "statement": "A 2-year-old child presented with developmental delay (mental retardation) and was found to have a cherry-red spot on retinal examination. What is the most likely diagnosis?",
      "options": [
        "Tay sach disease",
        "Hurler disease",
        "Hunter disease",
        "Neiman pick disease"
      ],
      "correct": "A",
      "answerText": "(A) Tay sach disease",
      "explanation": "The finding of a cherry-red spot on the retina is a classic ophthalmological sign seen in several lysosomal storage diseases. It occurs when lipids or other substances accumulate in the ganglion cells of the retina, making the surrounding macula appear pale or white. This accentuates the normal red color of the underlying choroid at the fovea, which is devoid of ganglion cells. In a child presenting with progressive neurodegeneration (mental retardation) and a cherry-red spot, the most likely diagnosis is Tay-Sachs disease, which is caused by a deficiency of the enzyme hexosaminidase A. Niemann-Pick disease (D) can also present with a cherry-red spot, but Tay-Sachs is the classic answer for this combination. Hurler and Hunter syndromes are mucopolysaccharidoses and are not typically associated with this retinal finding.",
      "pages": [
        244,
        276
      ]
    },
    {
      "number": 91,
      "statement": "A child presented with swelling of the left eye. What is the most likely diagnosis of this condition?",
      "options": [
        "Dermoid of limbus",
        "Lipodermoid",
        "Pingecula",
        "Pterygium"
      ],
      "correct": "A",
      "answerText": "(A) Dermoid of limbus",
      "explanation": "The image shows a whitish, rounded mass located at the limbus (junction of the cornea and sclera) in a child. This appearance is characteristic of Limbal Dermoid, also called epibulbar dermoid. It is a benign congenital tumor composed of normal tissue in an abnormal location (choristoma) and often contains elements such as hair follicles, sebaceous glands, and connective tissue.\nLimbal dermoids are usually present since birth or early childhood and most commonly occur at the inferotemporal quadrant of the limbus. Clinically, they appear as a smooth, yellowish-white elevated mass that may partially extend onto the cornea. Large lesions can cause astigmatism, visual disturbance, or cosmetic concerns.\nThe other options differ in appearance and age group:\n1. Pinguecula – yellowish conjunctival deposit seen in adults.\n2. Pterygium – triangular fibrovascular growth extending onto the cornea.\n3. Lipodermoid – soft yellow mass usually located in the outer conjunctiva.\nTherefore, the most likely diagnosis in this child is Dermoid of the limbus.",
      "pages": [
        244,
        276
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q91-1.jpg",
          "width": 227,
          "height": 158,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 92,
      "statement": "A patient with a history of dementia was noted to have a golden-yellow ring around the cornea on examination. Which of the following investigations would be most helpful in establishing the diagnosis?",
      "options": [
        "Sr. ceruloplasmin level",
        "Sr. calcium level",
        "Alpha-fetoprotein level",
        "Sr. iron level"
      ],
      "correct": "A",
      "answerText": "(A) Sr. ceruloplasmin level",
      "explanation": "The combination of neurological symptoms (dementia) and a golden yellow ring around the cornea is pathognomonic for Wilsons disease. The corneal ring is known as a Kayser-Fleischer ring, and it is caused by the deposition of copper in Descemets membrane. Wilsons disease is an autosomal recessive disorder of copper metabolism, leading to toxic accumulation of copper in various organs, primarily the liver and the brain. The diagnosis is confirmed by laboratory investigations that reflect this abnormal copper metabolism. A key diagnostic test is measuring the serum ceruloplasmin level, which is typically low in patients with Wilsons disease because the liver cannot properly incorporate copper into it for secretion. Other tests include 24-hour urinary copper excretion (which is high) and a liver biopsy.",
      "pages": [
        244,
        276
      ]
    },
    {
      "number": 93,
      "statement": "A patient with a gradual decrease in vision has recently developed myopia. What is the most likely cause of this refractive condition?",
      "options": [
        "Axial myopia",
        "Index myopia",
        "Positional myopia",
        "Curvatural myopia"
      ],
      "correct": "B",
      "answerText": "(B) Index myopia",
      "explanation": "The slit lamp image shows nuclear sclerosis, which is the hardening and yellowing of the central part (nucleus) of the crystalline lens. This is a common age-related change and a type of cataract. As the nucleus becomes denser, its refractive index increases. This increase in the refractive power of the lens causes light rays to converge more strongly, shifting the eyes focal point forward. This results in the development or worsening of myopia (nearsightedness). This specific type of myopia, caused by a change in the refractive index of the lens, is known as index myopia. It often leads to a temporary improvement in near vision, sometimes called second sight. Axial myopia is due to a long eyeball, and curvatural myopia is due to a steep cornea.",
      "pages": [
        244,
        281
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q93-1.jpg",
          "width": 434,
          "height": 293,
          "alt": "Figure accompanying the question"
        }
      ]
    }
  ],
  "General Medicine": [
    {
      "number": 94,
      "statement": "Which antibiotic is the drug of choice for prophylaxis in a patient scheduled for elective cardiac surgery?",
      "options": [
        "Cefazolin",
        "Penicillin G",
        "Azithromycin",
        "Erythromycin"
      ],
      "correct": "A",
      "answerText": "(A) Cefazolin",
      "explanation": "Surgical site infection (SSI) after cardiac surgery can be catastrophic. Prophylactic antibiotics are given to reduce this risk. The most common pathogens causing SSI are skin organisms, primarily Staphylococcus aureus and Staphylococcus epidermidis.\nCefazolin, a first-generation cephalosporin, is the antibiotic of choice for prophylaxis in most cardiac surgeries. It provides excellent bactericidal coverage against these common pathogens, has a favorable safety profile, and achieves adequate tissue concentrations when administered intravenously within 60 minutes before the incision. Penicillin G has a narrow spectrum and high rates of staphylococcal resistance. Macrolides like azithromycin and erythromycin are not recommended for this indication due to their bacteriostatic nature and resistance patterns.",
      "pages": [
        247,
        281
      ]
    },
    {
      "number": 95,
      "statement": "A patient presented with a blood pressure of 160/110 mm Hg, and a CT scan of the head revealed subarachnoid hemorrhage (SAH). What should be the next step in the management of this patient?",
      "options": [
        "Nimodipine",
        "Conventional angiography for aneurysm",
        "Urgent surgical intervention",
        "Option A and B"
      ],
      "correct": "D",
      "answerText": "(D) Option A and B",
      "explanation": "This patient has an aneurysmal subarachnoid hemorrhage (SAH). The management involves two immediate and critical goals. First, the most common cause of SAH is a ruptured saccular (berry) aneurysm. It is essential to identify the source of the bleeding so it can be secured to prevent a devastating re-bleed.\nCerebral angiography (either conventional or CT angiography) is the next step to locate the aneurysm. Second, a major cause of delayed morbidity and mortality after SAH is cerebral vasospasm, which can lead to ischemic stroke. The calcium channel blocker nimodipine has been shown to improve outcomes by reducing the incidence and severity of delayed cerebral ischemia and is started in all patients with aneurysmal SAH as soon as the diagnosis is made. Therefore, both starting nimodipine and performing angiography are crucial next steps.",
      "pages": [
        247,
        281
      ]
    },
    {
      "number": 96,
      "statement": "Which Murmur is shown below",
      "options": [
        "MR",
        "AS",
        "MS",
        "AR"
      ],
      "correct": "A",
      "answerText": "(A) MR",
      "explanation": "The phonocardiogram shows a heart murmur that begins with the first heart sound (S₁) and continues throughout systole, ending at or with the second heart sound (S₂). The murmur is relatively uniform in intensity, creating a plateau shape. This is the classic description of a pansystolic (or holosystolic) murmur. This type of murmur is produced by blood flowing from a high-pressure chamber to a low-pressure chamber throughout systole. It is the hallmark of Mitral Regurgitation (MR), where blood regurgitates from the left ventricle back into the left atrium during ventricular contraction. Other causes include tricuspid regurgitation and ventricular septal defect. Aortic stenosis (AS) causes a crescendo-decrescendo murmur, while mitral stenosis (MS) and aortic regurgitation (AR) cause diastolic murmurs.",
      "pages": [
        247,
        281
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q96-1.jpg",
          "width": 443,
          "height": 92,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 97,
      "statement": "A 10 year old boy is admitted with features of severe dehydration nausea & vomiting. Urine sugar is 3+ & RBS=550 mg/dl. ABG shows pH of 7.1 & HCO₃=7 mmol/L Line of management as per ISPAD guidelines is?",
      "options": [
        "10 ml per kg of iv fluids & 0.1 unit/kg/hr bolus",
        "10 ml per kg of iv fluids & after 1 hour of fluid 0.1 unit/kg/hr of insulin",
        "20 ml per kg of iv fluids & 0.1 unit/kg/hr of insulin bolus",
        "20 ml per kg of iv fluids & after 1 hour of fluid 0.1 unit/kg/hr of insulin bolus"
      ],
      "correct": "B",
      "answerText": "(B) 10 ml per kg of iv fluids & after 1 hour of fluid 0.1 unit/kg/hr of insulin",
      "explanation": "This child is in Diabetic Ketoacidosis (DKA), evidenced by hyperglycemia (RBS 550), ketonuria (implied by urine sugar 3+), and severe metabolic acidosis (pH 7.1, HCO₃ 7). According to the International Society for Pediatric and Adolescent Diabetes (ISPAD) guidelines, the initial management prioritizes fluid resuscitation to restore circulatory volume and improve renal perfusion. An initial IV fluid bolus of normal saline, typically 10 ml/kg, is given over the first hour. Critically, insulin therapy should be delayed for the first hour of fluid replacement. Starting insulin immediately can cause a rapid drop in glucose and osmolality, potentially worsening cerebral edema. Therefore, the insulin infusion (at a rate of 0.05-0.1 unit/kg/hr, without a bolus) is started one hour after initiating fluids. Thus, option B is the closest description of the correct initial management.",
      "pages": [
        247,
        281
      ]
    },
    {
      "number": 98,
      "statement": "A 65-year-old patient with occasional alcohol consumption and a history of aspirin use for the past four years presented with epigastric pain, hematemesis, and melena. What is the most likely diagnosis?",
      "options": [
        "Peptic Ulcer Disease (PUD)",
        "Mallory Weiss",
        "Boerhaave syndrome",
        "Variceal bleed"
      ],
      "correct": "A",
      "answerText": "(A) Peptic Ulcer Disease (PUD)",
      "explanation": "This patient presents with an upper gastrointestinal bleed (hematemesis and melena) along with epigastric pain. A crucial part of the history is the long-term use of aspirin. Aspirin and other nonsteroidal anti-inflammatory drugs (NSAIDs) are a major cause of Peptic Ulcer Disease (PUD) because they inhibit prostaglandin synthesis, which compromises the protective mucosal barrier of the stomach and duodenum. Bleeding is a common and serious complication of PUD. While alcohol use can also contribute to gastritis, the chronic aspirin use is the most significant risk factor in this case. A Mallory-Weiss tear is typically preceded by forceful retching. Boerhaave syndrome involves esophageal rupture and is a surgical emergency. Variceal bleeding is a complication of portal hypertension, for which there is no history given.",
      "pages": [
        247,
        278
      ]
    },
    {
      "number": 99,
      "statement": "A patient who underwent surgical treatment for a pituitary tumor developed polyuria along with elevated serum osmolality. Which of the following statements regarding the treatment of this patient is correct?",
      "options": [
        "Desmopressin for life long basis",
        "Desmopressin for 2 weeks",
        "Vaptans for life long basis",
        "Thiazides for 2 weeks"
      ],
      "correct": "A",
      "answerText": "(A) Desmopressin for life long basis",
      "explanation": "The patient has developed central Diabetes Insipidus (DI) as a complication of pituitary surgery. Damage to the posterior pituitary or pituitary stalk during surgery can lead to deficient secretion of Antidiuretic Hormone (ADH). The lack of ADH causes the kidneys to be unable to reabsorb water, leading to the excretion of large volumes of dilute urine (polyuria), which in turn causes dehydration and high serum osmolarity. The treatment for central DI is hormone replacement with desmopressin (DDAVP), a synthetic analog of ADH. Post-surgical DI can be transient, but if the damage is permanent, treatment will be required on a lifelong basis. Vaptans are ADH antagonists and would worsen the condition. Thiazides are used for nephrogenic DI, not central DI.",
      "pages": [
        247,
        278
      ]
    },
    {
      "number": 100,
      "statement": "A woman presented with severe anemia, fatigue, and gingival hyperplasia. Peripheral blood smear findings are shown below. Which chromosomal translocation is most likely responsible for this condition?",
      "options": [
        "AML with t(15:17)",
        "AML with inv 16",
        "AML with t(8:21)",
        "AML with mutated NPM1"
      ],
      "correct": "A",
      "answerText": "(A) AML with t(15:17)",
      "explanation": "The clinical features described—severe anemia, fatigue, and gingival hyperplasia—along with the peripheral blood smear findings suggest Acute Promyelocytic Leukemia. The smear typically shows abnormal promyelocytes with heavy cytoplasmic granules and Auer rods, sometimes forming bundles known as “faggot cells.”\nThis leukemia is strongly associated with the chromosomal translocation t(15;17). This translocation results in fusion of the PML gene with the RARA gene, producing the PML-RARA fusion protein. The fusion protein blocks differentiation of myeloid precursor cells at the promyelocyte stage, leading to accumulation of abnormal promyelocytes in bone marrow and peripheral blood.\nThis subtype of AML is clinically important because it responds well to targeted therapy with All-trans retinoic acid, which overcomes the differentiation block and allows leukemic cells to mature.\nThus, the most likely chromosomal abnormality responsible for the findings is t(15;17), characteristic of Acute Promyelocytic Leukemia (APL).",
      "pages": [
        247,
        278
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q100-1.jpg",
          "width": 307,
          "height": 205,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 101,
      "statement": "An HIV-positive patient with a CD4 count of 100 cells/mm³ presented with the lesions shown in the image. What is the most likely diagnosis?",
      "options": [
        "HIV with disseminated histoplasmosis",
        "HIV with disseminated cryptococcosis",
        "HIV with Molluscum contagiosum",
        "HIV with P.jiroveci"
      ],
      "correct": "B",
      "answerText": "(B) HIV with disseminated cryptococcosis",
      "explanation": "The patient is HIV-positive with a CD4 count of 100 cells/mm³, indicating severe immunosuppression. The images show multiple papular skin lesions on the face and trunk, many of which resemble umbilicated papules similar to molluscum contagiosum. In advanced HIV infection, this presentation is characteristic of Disseminated Cryptococcosis caused by Cryptococcus neoformans.\nCryptococcus usually enters the body through inhalation and initially affects the lungs. In immunocompromised individuals, especially those with CD4 counts below 100 cells/mm³, the infection can spread through the bloodstream and cause systemic disease involving the skin, central nervous system, and other organs. Cutaneous lesions often appear as multiple dome-shaped or umbilicated papules, mimicking Molluscum Contagiosum, but they are due to fungal dissemination.\nOther options are less likely: Histoplasmosis causes papules and ulcers, molluscum contagiosum is viral and localized, and Pneumocystis jirovecii mainly causes pneumonia.\nThus, the most likely diagnosis is HIV with disseminated cryptococcosis.",
      "pages": [
        247,
        278
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q101-1.jpg",
          "width": 264,
          "height": 175,
          "alt": "Question figure 1 of 2"
        },
        {
          "src": "assets/images/pyq/2023/q101-2.jpg",
          "width": 185,
          "height": 122,
          "alt": "Question figure 2 of 2"
        }
      ]
    },
    {
      "number": 102,
      "statement": "The congenital heart disease shown is caused by a defect in which part of the aortic arch?",
      "options": [
        "2nd Aortic Arch",
        "3rd Aortic Arch",
        "4th Aortic Arch",
        "6th Aortic Arch"
      ],
      "correct": "D",
      "answerText": "(D) 6th Aortic Arch",
      "explanation": "The image displays a Patent Ductus Arteriosus (PDA), a connection between the aorta and the pulmonary artery that persists after birth. During fetal development, the great arteries arise from a series of six paired aortic arches. The ductus arteriosus is an embryological remnant derived specifically from the distal portion of the left 6th aortic arch. In the fetus, this vessel shunts blood from the pulmonary artery to the aorta, bypassing the non-functional lungs. Normally, it constricts and closes shortly after birth, becoming the ligamentum arteriosum. When it fails to close, the resulting PDA allows oxygenated blood from the aorta to flow back into the pulmonary circulation, potentially leading to pulmonary hypertension and heart failure.",
      "pages": [
        246,
        283
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q102-1.jpg",
          "width": 335,
          "height": 414,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 104,
      "statement": "A 50-year-old laborer became unconscious and was brought to the emergency room with a body temperature of 105°F and decreased skin turgor. Which of the following findings would not be expected in this condition?",
      "options": [
        "Sweating",
        "Hypotension",
        "Tachypnea",
        "Red & hot skin"
      ],
      "correct": "A",
      "answerText": "(A) Sweating",
      "explanation": "The clinical triad of hyperthermia (temperature >40°C or 104°F), central nervous system dysfunction (unconsciousness), and anhidrosis (absence of sweating) is classic for heat stroke. In classic (non-exertional) heat stroke, the bodys thermoregulatory center in the hypothalamus fails, causing the sweating mechanism to shut down. As a result, the skin is typically hot and dry. Therefore, sweating is the sign that would most likely not be seen. The other signs are expected: hypotension (B) occurs due to profound dehydration (indicated by decreased skin turgor) and peripheral vasodilation. Tachypnea (C) is a compensatory response. The skin is red and hot (D) due to the bodys attempt to dissipate heat through peripheral vasodilation.",
      "pages": [
        246,
        283
      ]
    },
    {
      "number": 105,
      "statement": "A 75-year-old woman was socially withdrawn, spoke to no one, sat silently, and stared into space. On autopsy, microscopic examination of the hippocampus revealed the presence of Lewy bodies. What is the most likely diagnosis?",
      "options": [
        "Parkinson Disease",
        "Alzheimers Disease",
        "Huntington chorea",
        "Prion"
      ],
      "correct": "A",
      "answerText": "(A) Parkinson Disease",
      "explanation": "The definitive finding in this case is the presence of Lewy bodies on microscopic examination of the brain. Lewy bodies are abnormal intracellular aggregates of the protein alpha-synuclein. They are the pathological hallmark of a spectrum of neurodegenerative disorders known as synucleinopathies, which includes Parkinsons Disease (PD) and Dementia with Lewy Bodies (DLB). While the patients symptoms of apathy and withdrawal could suggest dementia, the presence of Lewy bodies directly points to a diagnosis on this spectrum. Among the choices provided, Parkinsons disease is the most appropriate answer. Alzheimers disease is characterized by amyloid plaques and neurofibrillary tangles. Huntingtons chorea involves striatal atrophy, and prion disease causes spongiform changes.",
      "pages": [
        246,
        283
      ]
    },
    {
      "number": 106,
      "statement": "A 75-year-old woman exhibited marked social withdrawal, remained silent, and often sat staring into space. Postmortem examination of the hippocampus revealed Lewy bodies on microscopic analysis. What is the most likely diagnosis?",
      "options": [
        "Prefrontal cortex",
        "Basal ganglia",
        "Amygdala",
        "Insular cortex"
      ],
      "correct": "B",
      "answerText": "(B) Basal ganglia",
      "explanation": "The clinical triad of apathy (not taking interest), resting tremors, and rigidity are classic signs of Parkinsons disease. The underlying pathology of Parkinsons disease is the progressive loss of dopamine-producing neurons in the substantia nigra pars compacta, which is a key component of the basal ganglia. The basal ganglia are a group of deep subcortical nuclei that are crucial for motor control, as well as for motivation and executive function. The depletion of dopamine in this region disrupts the normal functioning of motor circuits, leading to the characteristic motor symptoms (tremor, rigidity, bradykinesia). The disruption of non-motor circuits contributes to non-motor symptoms like apathy. The other brain regions listed are not the primary site of pathology in Parkinsons disease.",
      "pages": [
        246,
        283
      ]
    },
    {
      "number": 107,
      "statement": "An alcoholic patient with a history of loose stools a few days earlier now presents with pain in the right hypochondrium. Ultrasonography reveals a liver abscess with a volume of approximately 75 cc. What is the next best step in management?",
      "options": [
        "PAIR (Percutaneous Aspiration, Infusion of drugs, and Re-aspiration)",
        "Medical management",
        "Surgical management",
        "Percutaneous drainage"
      ],
      "correct": "B",
      "answerText": "(B) Medical management",
      "explanation": "This patients presentation of right upper quadrant pain following a diarrheal illness is highly suggestive of an amebic liver abscess, caused by Entamoeba histolytica. Alcoholism is a known risk factor. The treatment of choice for an uncomplicated amebic liver abscess is medical management with a tissue amebicide, primarily metronidazole, followed by a luminal agent like paromomycin to eradicate intestinal colonization. Aspiration or drainage is generally not required for uncomplicated abscesses and is reserved for specific indications, such as very large abscesses at risk of rupture, failure of medical therapy, or if the diagnosis is uncertain and a pyogenic (bacterial) abscess cannot be ruled out. Given the size of 75 cc and the classic history, initiating medical therapy is the correct next best step.",
      "pages": [
        246,
        282
      ]
    },
    {
      "number": 108,
      "statement": "An AIDS patient with a CD4 count of 150 cells/ mm³ presented with chest infiltrates on chest X-ray along with mediastinal lymphadenopathy. Per-abdominal examination revealed hepatosplenomegaly. Bone marrow aspiration (BMA) examination showed characteristic findings. What is the most likely diagnosis?",
      "options": [
        "Visceral leishmania",
        "Toxoplasmosis",
        "Histoplasmosis",
        "P. Jiroveci"
      ],
      "correct": "C",
      "answerText": "(C) Histoplasmosis",
      "explanation": "The patient is severely immuno compromised (CD4 count 150) and presents with a disseminated illness involving the lungs (infiltrates, mediastinal adenopathy) and reticuloendothelial system (hepatosplenomegaly). This is a classic presentation of progressive disseminated histoplasmosis in an AIDS patient. The definitive diagnosis is made by identifying the organism. The bone marrow aspirate (BMA) image shows small, oval yeast forms located within the cytoplasm of macrophages. This intracellular location is a key characteristic of Histoplasma capsulatum. Leishmania (A) also presents as intracellular amastigotes but is morphologically different (possessing a kinetoplast). Toxoplasma (B) has crescent-shaped tachyzoites. P. jirovecii (D) appears as cysts on silver stain and does not typically cause hepatosplenomegaly.",
      "pages": [
        246,
        282
      ]
    },
    {
      "number": 109,
      "statement": "Clonorchis sinensis causes",
      "options": [
        "Carcinoma of Bladder urinary",
        "Carcinoma of Gallbladder",
        "Carcinoma of Biliary tract",
        "Stomach cancer"
      ],
      "correct": "C",
      "answerText": "(C) Carcinoma of Biliary tract",
      "explanation": "Clonorchis sinensis, the Chinese liver fluke, is a parasite that resides in the biliary ducts of its host. Chronic infection leads to persistent inflammation and proliferation of the biliary epithelium. This chronic inflammation is a major risk factor for the development of malignancy. Clonorchis sinensis is classified as a Group 1 carcinogen by the IARC and is a well-established cause of cholangiocarcinoma, which is a carcinoma of the biliary tract. The cancer can arise from either the intrahepatic or extrahepatic bile ducts. Carcinoma of the urinary bladder (A) is associated with Schistosoma haematobium. Carcinoma of the gallbladder (B) is associated with chronic cholecystitis and gallstones, not directly with this parasite.",
      "pages": [
        246,
        282
      ]
    },
    {
      "number": 110,
      "statement": "A patient from Delhi presented with high-grade fever and petechiae. Laboratory investigations revealed a platelet count of 20,000/mm³ and a total leukocyte count of 3,000/mm³. What is the most likely diagnosis?",
      "options": [
        "Malaria",
        "Dengue",
        "Scrub typhus",
        "Typhoid"
      ],
      "correct": "B",
      "answerText": "(B) Dengue",
      "explanation": "This clinical and laboratory picture is classic for Dengue fever, especially in an endemic area like Delhi. The combination of high-grade fever, hemorrhagic manifestations (petechiae), severe thrombocytopenia (platelet count of 20,000/mm³), and leukopenia (TLC of 3,000/mm³) is the hallmark of this disease. Petechiae and other bleeding signs are warning signs that can indicate progression to severe dengue. While other infections like scrub typhus and typhoid can cause fever and cytopenias, the degree of thrombocytopenia seen here is particularly characteristic of dengue. Malaria typically presents with fever and anemia but less commonly with such severe thrombocytopenia and leukopenia.",
      "pages": [
        251,
        282
      ]
    },
    {
      "number": 111,
      "statement": "A hypertensive patient is on multiple medications. His ECG findings are shown below. Which of the drugs he is taking is most likely responsible for these ECG changes?",
      "options": [
        "Spironolactone",
        "Thiazides",
        "Prazosin",
        "Metoprolol"
      ],
      "correct": "A",
      "answerText": "(A) Spironolactone",
      "explanation": "The ECG shows tall, peaked T-waves and a widened QRS complex, which are classic signs of hyperkalemia (elevated serum potassium). The question asks which antihypertensive medication could be responsible for this. Spironolactone is a potassium-sparing diuretic. It acts as an aldosterone antagonist in the distal convoluted tubule and collecting duct of the kidney. By blocking aldosterone, it inhibits the excretion of potassium, leading to its retention in the body. This effect can cause hyperkalemia, especially in patients with renal impairment or those taking other drugs that raise potassium levels (like ACE inhibitors or ARBs). Thiazide diuretics (B) typically cause hypokalemia. Prazosin (C) and metoprolol (D) do not have a primary effect on potassium levels.",
      "pages": [
        251,
        282
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q111-1.jpg",
          "width": 604,
          "height": 373,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 112,
      "statement": "A patient presented to the emergency department after ingesting 100 tablets of aspirin. What is the appropriate management for this patient?",
      "options": [
        "Glucagon",
        "N Acetyl Cysteine",
        "Urinary alkalinization",
        "Hydrogen Cyanide"
      ],
      "correct": "C",
      "answerText": "(C) Urinary alkalinization",
      "explanation": "A massive overdose of aspirin (a salicylate) is a medical emergency that causes severe metabolic acidosis and other systemic toxicities. A cornerstone of management is to enhance the elimination of the salicylate from the body. This is achieved through urinary alkalinization. By administering intravenous sodium bicarbonate, the pH of the urine is raised. Since aspirin is a weak acid, an alkaline environment causes it to become ionized. This ionized form is trapped within the renal tubules and cannot be reabsorbed, leading to significantly increased renal excretion. For severe poisoning, hemodialysis may also be required. N-Acetylcysteine (B) is the antidote for acetaminophen poisoning.",
      "pages": [
        251,
        285
      ]
    },
    {
      "number": 113,
      "statement": "A patient with markedly elevated urea levels underwent hemodialysis and subsequently developed seizures along with altered mental status. Which of the following should be used in the management of this condition?",
      "options": [
        "Mannitol",
        "Ethacrynic acid",
        "Furosemide",
        "Bumetanide"
      ],
      "correct": "A",
      "answerText": "(A) Mannitol",
      "explanation": "This patient is experiencing Dialysis Disequilibrium Syndrome (DDS), a neurological complication that occurs after rapid hemodialysis. It is caused by cerebral edema. Urea is cleared from the blood faster than from the brain, creating an osmotic gradient that pulls water into the brain cells. The resulting cerebral edema leads to neurological symptoms like altered mentation and seizures. The treatment of choice is intravenous mannitol. Mannitol is an osmotic agent that increases the osmolarity of the blood, creating a counter-gradient that pulls water out of the brain tissue and into the vasculature. This reduces the cerebral edema and alleviates the symptoms. Loop diuretics like furosemide (C) do not address the underlying osmotic imbalance.",
      "pages": [
        251,
        285
      ]
    },
    {
      "number": 114,
      "statement": "A 25-year-old woman presented with neck swelling, tremors, and palpitations. She is a known case of asthma and was found to have a blood pressure of 180/110 mm Hg. Electrocardiography revealed atrial fibrillation. What is the appropriate management for this patient?",
      "options": [
        "Propylthiouracil",
        "Esmolol",
        "Propranolol",
        "Diltiazem"
      ],
      "correct": "D",
      "answerText": "(D) Diltiazem",
      "explanation": "This patient is presenting with a thyroid storm, a life-threatening thyrotoxic state characterized by high fever, tachycardia (atrial fibrillation), hypertension, and CNS effects. A key part of management is controlling the heart rate and blood pressure. Beta-blockers are typically used for this purpose. However, this patient has a history of asthma, which is a relative contraindication to non-selective beta-blockers like propranolol (C), as they can cause bronchospasm. While a cardioselective beta-blocker like esmolol (B) might be used cautiously, the safest choice among the options to control the heart rate in a patient with thyrotoxicosis and reactive airway disease is a non-dihydropyridine calcium channel blocker, such as diltiazem. It will effectively control the ventricular rate in atrial fibrillation without the risk of precipitating an asthma attack. Propylthiouracil (A) is also essential to block thyroid hormone synthesis, but rate control is the most immediate priority.",
      "pages": [
        251,
        285
      ]
    },
    {
      "number": 115,
      "statement": "A patient presented with fatigue and was found to have a mid-diastolic murmur along with a prominent A wave in the jugular venous pulse. In which condition is this finding seen?",
      "options": [
        "TS",
        "MS",
        "TR",
        "AR"
      ],
      "correct": "A",
      "answerText": "(A) TS",
      "explanation": "The combination of a mid-diastolic murmur and a prominent a wave in the jugular venous pulse (JVP) is the classic presentation of Tricuspid Stenosis (TS). The mid-diastolic murmur is caused by turbulent blood flow across the narrowed tricuspid valve as the right ventricle fills. The prominent a wave in the JVP reflects the forceful contraction of the right atrium against the stenotic, resistant tricuspid valve, leading to increased pressure being transmitted back into the jugular veins. Mitral stenosis (MS) also causes a mid-diastolic murmur, but it does not cause a prominent a wave in the JVP. Tricuspid regurgitation (TR) causes a prominent v wave, and aortic regurgitation (AR) causes a decrescendo diastolic murmur.",
      "pages": [
        251,
        285
      ]
    },
    {
      "number": 116,
      "statement": "Test for diagnosis of HSV Encephalitis",
      "options": [
        "CSF PCR Viral load",
        "CSF Chick embryonal culture",
        "CSF Tzanck smear",
        "CSF Culture"
      ],
      "correct": "A",
      "answerText": "(A) CSF PCR Viral load",
      "explanation": "Herpes Simplex Virus (HSV) encephalitis is the most common cause of sporadic fatal encephalitis. It is a medical emergency requiring prompt diagnosis and treatment with acyclovir. The diagnostic test of choice and the gold standard is the detection of HSV DNA in the cerebrospinal fluid (CSF) using Polymerase Chain Reaction (PCR). CSF PCR for HSV is highly sensitive (>95%) and specific (>99%). It allows for a rapid and accurate diagnosis, which is crucial for initiating antiviral therapy early. Viral culture of the CSF (D) is very rarely positive and is too slow to be clinically useful. Tzanck smear (C) is used for skin lesions, not CSF. Chick embryo culture (B) is an outdated method.",
      "pages": [
        251,
        285
      ]
    },
    {
      "number": 117,
      "statement": "A cement factory worker involved in operating heavy machinery and performing paint work complained of developing white discoloration of the fingers. What is the most likely underlying etiology for this condition?",
      "options": [
        "Asbestosis",
        "Silicosis",
        "Vibration",
        "Paint & chemicals"
      ],
      "correct": "C",
      "answerText": "(C) Vibration",
      "explanation": "The symptom of white fingers, especially when triggered by cold, is characteristic of Raynauds phenomenon. When this occurs due to occupational exposure, it is often called vibration-induced white finger (VWF) or hand-arm vibration syndrome (HAVS). The patients job involves using heavy machinery, which is a major source of occupational hand-arm vibration. Chronic exposure to this vibration damages the small blood vessels and nerves in the fingers. This leads to episodes of vasospasm where the fingers turn white, then blue, and finally red upon rewarming, often accompanied by numbness and tingling. While the patient works in a cement factory and with paints, the specific symptom of white fingers is most directly linked to the use of vibrating heavy machinery.",
      "pages": [
        251,
        292
      ]
    },
    {
      "number": 118,
      "statement": "In which of the following conditions is bilateral hemorrhage of the temporal lobes observed?",
      "options": [
        "HSV Encephalitis",
        "Silicosis",
        "Amoebic meningoencephalitis",
        "None of the above"
      ],
      "correct": "A",
      "answerText": "(A) HSV Encephalitis",
      "explanation": "Herpes Simplex Virus (HSV) Encephalitis has a characteristic and striking predilection for the temporal lobes of the brain. Neuroimaging, such as CT or MRI, classically shows inflammation, edema, and often hemorrhage and necrosis, asymmetrically affecting the medial temporal lobes and inferior frontal lobes. The involvement is often bilateral, though typically one side is more severely affected than the other. This specific anatomical localization is a key diagnostic clue for HSV encephalitis. Silicosis (B) is a lung disease. Amoebic meningoencephalitis (C), particularly that caused by Naegleria fowleri, is a rapidly fatal infection of the brain but does not have the same specific temporal lobe tropism as HSV.",
      "pages": [
        251,
        292
      ]
    },
    {
      "number": 119,
      "statement": "A 30-year-old patient with chronic hepatitis B is HBeAg positive, has a viral load of 10⁵ copies/ mL, and shows a doubling of SGPT levels. Which treatment should be initiated for this patient?",
      "options": [
        "Tenofovir >48 weeks",
        "Lamivudine + Tenofovir >48 weeks",
        "Pegylated interferon with Tenofovir for 6 months",
        "Pegylated interferon with Lamivudine for 48 weeks"
      ],
      "correct": "A",
      "answerText": "(A) Tenofovir >48 weeks",
      "explanation": "This patient has HBeAg-positive chronic hepatitis B in the immune-active phase, which is an indication for treatment. The criteria for treatment are met: elevated HBV DNA (viral load > 20,000 IU/mL; 10^5 copies/mL is roughly equivalent) and elevated ALT (SGPT). According to current international guidelines, the preferred first-line treatments are potent nucleos(t)ide analogs with a high barrier to resistance, such as tenofovir or entecavir, or a finite course of pegylated interferon. A long-term course (>48 weeks) of tenofovir monotherapy is a standard and highly effective first-line option. Combination therapy with two nucleos(t)ide analogs (B) is not recommended for initial treatment. Combination of interferon and a nucleoside analog (C, D) is not standard practice. Lamivudine alone is no longer preferred due to high rates of resistance.",
      "pages": [
        248,
        292
      ]
    }
  ],
  "General Surgery": [
    {
      "number": 120,
      "statement": "SOFA score includes",
      "options": [
        "PR/BP/Temp",
        "Temp/BP/GCS",
        "RR/BP/GCS",
        "HR/BP/Temp"
      ],
      "correct": "C",
      "answerText": "(C) RR/BP/GCS",
      "explanation": "The question is likely referring to the quick SOFA (qSOFA) score, which is a simplified screening tool for identifying patients with suspected infection who are at high risk for poor outcomes (sepsis). The full SOFA (Sequential Organ Failure Assessment) score is a more complex tool used in the ICU. The qSOFA score consists of three clinical criteria, each worth one point:\n1. Respiratory Rate (RR) � 22 breaths/minute.\n2. Altered mentation, assessed by Glasgow Coma Scale (GCS) < 15.\n3. Systolic Blood Pressure (BP) � 100 mmHg.\nA qSOFA score of 2 or more suggests a high risk of sepsis. Therefore, the components are Respiratory Rate, Blood Pressure, and GCS.",
      "pages": [
        248,
        292
      ],
      "reviewOnly": true
    },
    {
      "number": 121,
      "statement": "A 30-year-old patient presented with a four-week history of a midline neck swelling that moves upward on swallowing and on protrusion of the tongue. Based on the image shown, what is the most likely diagnosis?",
      "options": [
        "Thyroglossal cyst",
        "Plunging Ranula",
        "Branchial cyst",
        "Dermoid cyst"
      ],
      "correct": "A",
      "answerText": "(A) Thyroglossal cyst",
      "explanation": "A midline neck swelling that moves upward with both swallowing (deglutition) and protrusion of the tongue is the classic pathognomonic sign of a thyroglossal duct cyst. This cyst is a congenital anomaly that arises from a persistent thyroglossal duct, the tract along which the thyroid gland descends from the base of the tongue to its final position in the neck during embryonic development. Because the duct remains attached to the base of the tongue via the foramen cecum, the cyst is pulled upward when the tongue is protruded. Similarly, its attachment to the hyoid bone causes it to rise with swallowing. A branchial cyst is typically located laterally in the neck. A ranula is a cyst in the floor of the mouth, and a dermoid cyst in the neck does not typically move with tongue protrusion.",
      "pages": [
        248,
        292
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q121-1.jpg",
          "width": 300,
          "height": 225,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 122,
      "statement": "A 23-year-old medical student presented with exophthalmos, palpitations, and heat intolerance. Based on the clinical image shown, which antibody level is most likely to be elevated in this patient?",
      "options": [
        "Against thyroid receptor",
        "Anti TPΟ",
        "Antithyroglobulin",
        "Serum thyrotropin"
      ],
      "correct": "A",
      "answerText": "(A) Against thyroid receptor",
      "explanation": "The clinical triad of exophthalmos (proptosis), palpitations, and heat intolerance is classic for Graves disease, the most common cause of hyperthyroidism. Graves disease is an autoimmune disorder caused by the production of autoantibodies that stimulate the thyroid gland. The pathognomonic antibody is the Thyroid-Stimulating Hormone (TSH) Receptor Antibody (TRAb), also known as Thyroid-Stimulating Immunoglobulin (TSI). These antibodies bind to and activate the TSH receptor on thyroid follicular cells, leading to uncontrolled production and release of thyroid hormones. The exophthalmos (Graves ophthalmopathy) is also caused by an autoimmune reaction against tissues in the orbit. Anti-TPO and anti-thyroglobulin antibodies can also be present but are less specific and are also found in Hashimotos thyroiditis.",
      "pages": [
        248,
        292
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q122-1.jpg",
          "width": 290,
          "height": 307,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 124,
      "statement": "Deep ring is a defect in which structure?",
      "options": [
        "External oblique",
        "Internal oblique",
        "Transversus abdominis",
        "Fascia transversalis"
      ],
      "correct": "D",
      "answerText": "(D) Fascia transversalis",
      "explanation": "The inguinal canal is a passage through the layers of the anterior abdominal wall. It has two openings: the superficial inguinal ring and the deep inguinal ring. The deep (or internal) inguinal ring is the entrance to the canal. It is not a true hole but rather the beginning of a tubular evagination of the fascia transversalis, which is the layer of fascia lining the deep surface of the abdominal muscles. As the spermatic cord (in males) or round ligament (in females) passes from the abdomen into the inguinal canal, it pushes this fascial layer ahead of it, forming the internal spermatic fascia. Thus, the deep ring is anatomically considered an opening or defect in the transversalis fascia. The superficial ring is a defect in the external oblique aponeurosis.",
      "pages": [
        248,
        287
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q124-1.jpg",
          "width": 601,
          "height": 409,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 125,
      "statement": "A childs urine turns dark on standing. What is the most probable underlying cause?",
      "options": [
        "Type I tyrosinemia",
        "Congenital erythropoietic porphyria",
        "Type II tyrosinemia",
        "Alkaptonuria"
      ],
      "correct": "D",
      "answerText": "(D) Alkaptonuria",
      "explanation": "Alkaptonuria is a rare autosomal recessive metabolic disorder caused by a deficiency of the enzyme homogentisate 1,2-dioxygenase. This enzyme is involved in the catabolism of the amino acids phenylalanine and tyrosine. The deficiency leads to the accumulation of homogentisic acid in the body. Homogentisic acid is excreted in the urine. Upon exposure to air (oxidation) and an alkaline pH, this acid polymerizes to form a dark, black pigment. This is why a characteristic sign of alkaptonuria is urine that turns dark or black upon standing. Other long-term features of the disease include ochronosis (darkening of connective tissues, especially cartilage) and a debilitating form of arthritis. The other conditions listed do not cause this specific urinary finding.",
      "pages": [
        248,
        287
      ]
    },
    {
      "number": 126,
      "statement": "A patient with a history of road traffic accident presents with altered consciousness. On examination, he opens his eyes in response to painful stimuli, speaks inappropriate words, and withdraws his limbs on stimulation. What is the patients Glasgow Coma Scale (GCS) score?",
      "options": [
        "E2, V3, M4",
        "E2, V4, M4",
        "E3, V4, M3",
        "E4, V4, M4"
      ],
      "correct": "A",
      "answerText": "(A) E2, V3, M4",
      "explanation": "The Glasgow Coma Scale (GCS) is used to assess the level of consciousness after a head injury. It has three components: Eye Opening (E), Verbal Response (V), and Motor Response (M).\nEye Opening (E) : The patient opens his eyes on painful stimuli. This corresponds to a score of E2. (E4=Spontaneous, E3=To speech, E1=None).\nVerbal Response (V) : The patient speaks inappropriate words. This means the patient is using recognizable words, but in a confused, non-conversational manner. This corresponds to a score of V3. (V5=Oriented, V4=Confused, V2=Incomprehensible sounds, V1=None).\nMotor Response (M) : The patient shows withdrawals of limb on stimulation. This means they pull their limb away from a painful stimulus. This corresponds to a score of M4. (M6=Obeys commands, M5=Localizes pain, M3=Abnormal flexion, M2=Extension, M1=None).\nThe total GCS score is E2 + V3 + M4 = 9.",
      "pages": [
        253,
        287
      ]
    },
    {
      "number": 127,
      "statement": "Clonorchis sinensis is associated with which cancer?",
      "options": [
        "Heptaocellular Carcinoma",
        "Cholangiocarcinoma",
        "Gastric cancer",
        "Urinary bladder cancer"
      ],
      "correct": "B",
      "answerText": "(B) Cholangiocarcinoma",
      "explanation": "Clonorchis sinensis, the Chinese liver fluke, is classified by the International Agency for Research on Cancer (IARC) as a Group 1 carcinogen, meaning it is definitively carcinogenic to humans. This parasite infects and lives within the biliary ducts of the liver. Chronic infection leads to persistent inflammation, epithelial hyperplasia, and periductal fibrosis. This long-standing inflammation and cellular damage significantly increase the risk of developing cancer of the bile ducts, which is known as cholangiocarcinoma. This association is well-established, particularly in endemic areas of East Asia. It is not directly associated with hepatocellular carcinoma, gastric cancer, or urinary bladder cancer (which is linked to Schistosoma haematobium).",
      "pages": [
        253,
        287
      ]
    },
    {
      "number": 128,
      "statement": "Good prognostic factor for BIRADS V breast cancer is",
      "options": [
        "P53 +ve",
        "BRCA 1",
        "Ki67",
        "ER +v"
      ],
      "correct": "D",
      "answerText": "(D) ER +v",
      "explanation": "BI-RADS V indicates a lesion that is highly suggestive of malignancy. Once a diagnosis of breast cancer is confirmed, several prognostic factors are assessed. A positive Estrogen Receptor (ER) status is generally considered a good prognostic factor. This is because ER-positive tumors are dependent on estrogen for their growth. Therefore, they are highly likely to respond to endocrine therapies, such as tamoxifen or aromatase inhibitors, which block the effects of estrogen. This provides an effective, targeted treatment option that often leads to better outcomes and lower recurrence rates compared to ER-negative tumors. In contrast, p53 mutation (A) and high Ki-67 expression (C) are markers of high proliferation and are associated with a poorer prognosis. BRCA1 mutation (B) is a high-risk genetic factor.",
      "pages": [
        253,
        290
      ]
    },
    {
      "number": 129,
      "statement": "Direct inguinal hernia which part is weak",
      "options": [
        "Conjoined tendon",
        "Pectinate ligament",
        "Lacunar ligament",
        "Poupart ligament"
      ],
      "correct": "A",
      "answerText": "(A) Conjoined tendon",
      "explanation": "A direct inguinal hernia occurs when abdominal contents protrude directly through a weakness in the posterior wall of the inguinal canal, medial to the inferior epigastric vessels. This area of the posterior wall is known as Hesselbachs triangle. The floor and posterior wall of this triangle are formed by the transversalis fascia, which is reinforced superiorly by the conjoined tendon (the fused insertion of the internal oblique and transversus abdominis muscles). A direct hernia results from an acquired weakness or defect in this posterior wall, often involving attenuation or breakdown of the transversalis fascia and the conjoined tendon. Therefore, weakness of the conjoined tendon is a primary factor in the development of a direct inguinal hernia.",
      "pages": [
        253,
        290
      ]
    },
    {
      "number": 130,
      "statement": "A 56-year-old chronic smoker presented with weight loss and a cough lasting for more than one year. He was found to have hypercalcemia. Biopsy revealed atypical cells with hyperchromatic nuclei. What is the most likely diagnosis?",
      "options": [
        "SCC",
        "Adenocarcinoma",
        "Small cell cancer",
        "Atypical large cell"
      ],
      "correct": "A",
      "answerText": "(A) SCC",
      "explanation": "This patient, a chronic smoker, presents with symptoms suggestive of lung cancer. A key finding is hypercalcemia. Of the major types of lung cancer, Squamous Cell Carcinoma (SCC) is the most common cause of hypercalcemia. This is a paraneoplastic syndrome, where the tumor produces parathyroid hormone-related protein (PTHrP), which mimics the action of PTH, leading to increased bone resorption and elevated serum calcium levels. SCC is strongly associated with smoking and typically arises centrally near the main bronchi. The biopsy findings of atypical cells with hyperchromatic nuclei are consistent with a malignancy like SCC. Small cell cancer can also cause paraneoplastic syndromes, but more commonly SIADH or Cushing syndrome.",
      "pages": [
        253,
        290
      ]
    },
    {
      "number": 131,
      "statement": "What is the CEAP classification for varicose veins with eczema?",
      "options": [
        "C2",
        "C3",
        "C4 A",
        "C4 B"
      ],
      "correct": "C",
      "answerText": "(C) C4 A",
      "explanation": "The CEAP (Clinical, Etiological, Anatomical, Pathophysiological) classification is a standardized system for describing chronic venous disorders. The C component describes the clinical signs.\nC0 : No visible signs\nC1 : Telangiectasias or reticular veins\nC2 : Varicose veins\nC3 : Edema\nC4 : Skin and subcutaneous changes. This class is further subdivided:\nC4 a : Pigmentation or eczema\nC4b : Lipodermatosclerosis or atrophie blanche\nC5 : Healed venous ulcer\nC6 : Active venous ulcer\nSince the patient has varicose veins with eczema, the correct classification is C4a. The presence of eczema places the patient in the C4 category, and specifically in the a subcategory.",
      "pages": [
        253,
        290
      ]
    },
    {
      "number": 132,
      "statement": "A 4-month-old infant presented with jaundice and pale stools. Investigations revealed ductal dilatation with a biliary plug. Alkaline phosphatase levels were elevated, while AST and ALT levels were normal. Liver biopsy showed ductal proliferation with fibrosis of the bile ducts. What is the most probable diagnosis?",
      "options": [
        "Criger Najjar syndrome",
        "Dubin Johnson syndrome",
        "Biliary atresia",
        "HCC"
      ],
      "correct": "C",
      "answerText": "(C) Biliary atresia",
      "explanation": "This clinical picture is classic for biliary atresia, a progressive, idiopathic disease of infancy characterized by the obliteration of extrahepatic bile ducts. The presentation is typically within the first few months of life with persistent jaundice, acholic (pale) stools, and dark urine. The obstruction to bile flow leads to a cholestatic pattern of liver injury, with a markedly elevated alkaline phosphatase (ALP) and conjugated bilirubin, while transaminases (AST, ALT) may be only mildly elevated initially. The biopsy findings of ductal proliferation and portal tract fibrosis are the histologic hallmarks of extrahepatic biliary obstruction. The other conditions are inherited disorders of bilirubin metabolism that do not cause biliary obstruction.",
      "pages": [
        253,
        290
      ]
    },
    {
      "number": 133,
      "statement": "A chronic alcoholic was found to have an increased NADH : NAD⁺ ratio with normal blood urea levels. Which of the following metabolic findings is most likely to be seen in this individual?",
      "options": [
        "Low lactate",
        "High glucose",
        "High urate",
        "Low urate"
      ],
      "correct": "C",
      "answerText": "(C) High urate",
      "explanation": "Chronic alcohol consumption leads to a significant increase in the hepatic NADH:NAD+ ratio due to the metabolism of ethanol. This altered redox state has several metabolic consequences. One key effect is the inhibition of gluconeogenesis and the shunting of pyruvate to lactate, causing lactic acidosis (ruling out A and B). Additionally, the excess NADH promotes the conversion of dihydroxyacetone phosphate to glycerol-3-phosphate, leading to increased triglyceride synthesis (fatty liver). Critically, the resulting lactic acidosis competes with uric acid for excretion in the renal tubules. The increased lactate levels in the blood inhibit the renal tubular secretion of urate, leading to its retention and causing hyperuricemia (high urate). This is why gout attacks are frequently precipitated by alcohol consumption.",
      "pages": [
        253,
        289
      ]
    },
    {
      "number": 134,
      "statement": "True statement for the following condition shown in image",
      "options": [
        "Caused by mixed bacterial infection",
        "Bladder diversion required",
        "B/L orchidectomy needed",
        "Anti gas gangrene serum should be given"
      ],
      "correct": "A",
      "answerText": "(A) Caused by mixed bacterial infection",
      "explanation": "The image shows Fourniers gangrene, which is a life-threatening necrotizing fasciitis of the perineal, genital, or perianal regions. The most accurate statement about this condition is that it is typically caused by a polymicrobial or mixed bacterial infection. The infection usually involves a combination of aerobic and anaerobic bacteria (e.g., E. coli, Klebsiella, Streptococci, Staphylococci, Bacteroides, Clostridium) that act synergistically to cause rapid tissue destruction. The cornerstone of treatment is urgent, aggressive surgical debridement of all necrotic tissue and broad-spectrum intravenous antibiotics. While a urinary catheter is placed, a formal bladder diversion (B) is not always required. Orchidectomy (C) is only performed if the testes are necrotic, which is rare due to their separate blood supply. Anti-gas gangrene serum (D) is for clostridial myonecrosis, and antibiotics are the primary treatment here.",
      "pages": [
        253,
        289
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q134-1.jpg",
          "width": 336,
          "height": 410,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 135,
      "statement": "A 30-year-old patient presented to the hospital with abdominal pain, weight loss, and sterile pyuria, as shown in the image provided. What is the most likely diagnosis?",
      "options": [
        "Putty kidney",
        "Pyelonephritis",
        "Nephrocalcinosis",
        "Staghorn calculus"
      ],
      "correct": "A",
      "answerText": "(A) Putty kidney",
      "explanation": "The patients presentation with constitutional symptoms (weight loss), abdominal pain, and sterile pyuria (white blood cells in the urine without bacterial growth on standard culture) is highly suggestive of genitourinary tuberculosis. The image of the kidney, likely an X-ray or CT scan, shows features of end-stage renal tuberculosis. This advanced stage is characterized by extensive caseous necrosis and dystrophic calcification throughout the renal parenchyma, leading to a shrunken, non-functional, calcified kidney. This specific radiological appearance is referred to as a putty kidney. It represents autonephrectomy, where the kidney is destroyed by the disease process. The combination of sterile pyuria and the putty kidney appearance is pathognomonic for renal tuberculosis.",
      "pages": [
        250,
        289
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q135-1.jpg",
          "width": 513,
          "height": 513,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 136,
      "statement": "A patient with chronic pancreatitis presented to the emergency department with upper abdominal pain. Imaging revealed a dilated pancreatic duct measuring 10 mm with calculi within the duct. What is the best treatment plan for this patient?",
      "options": [
        "Gastrojejunostomy",
        "Distal pancreatectomy",
        "Longitudinal pancreaticojejunostomy",
        "Total pancreatectomy"
      ],
      "correct": "C",
      "answerText": "(C) Longitudinal pancreaticojejunostomy",
      "explanation": "This patient has chronic pancreatitis complicated by intractable pain and significant pancreatic duct obstruction, evidenced by a markedly dilated main pancreatic duct (10 mm; normal is <3 mm) containing calculi. The primary goal of surgery in this situation is to decompress the obstructed pancreatic duct to relieve pain. The most appropriate surgical procedure for this is a longitudinal pancreaticojejunostomy, commonly known as the Puestow procedure or a modification of it. In this operation, the pancreatic duct is opened longitudinally along its length, and a side-to-side anastomosis is created with a loop of jejunum. This allows for free drainage of pancreatic juice directly into the intestine, bypassing the obstruction and reducing intraductal pressure, which is the main cause of the pain.",
      "pages": [
        250,
        289
      ]
    },
    {
      "number": 137,
      "statement": "A patient with a history of trauma five years ago now presents with the clinical features shown in the image below. What is the most likely diagnosis?",
      "options": [
        "Keloid",
        "Thrombophlebitis",
        "Hemangioma",
        "Neurofibroma"
      ],
      "correct": "A",
      "answerText": "(A) Keloid",
      "explanation": "The image displays a large, raised, firm scar that has grown well beyond the boundaries of the original wound. This is the defining characteristic of a keloid. A keloid is an abnormal proliferation of scar tissue that forms at the site of cutaneous injury. Unlike a hypertrophic scar, which remains confined to the original wound margins, a keloid invades the surrounding normal skin. They are composed of excessive deposits of collagen and often have a smooth, shiny surface. They can be itchy or painful and tend to recur even after excision. They are more common in individuals with darker skin pigmentation and often appear months after the initial trauma, as described in the history.",
      "pages": [
        250,
        289
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q137-1.jpg",
          "width": 465,
          "height": 298,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 138,
      "statement": "A 55-year-old alcoholic patient presented with weight loss. Investigations revealed elevated alpha-fetoprotein (AFP) levels, normal AST and ALT levels, and increased conjugated bilirubin. What is the most probable diagnosis?",
      "options": [
        "Cholangiocarcinoma",
        "HCC",
        "Adenoma",
        "Alcoholic hepatitis"
      ],
      "correct": "B",
      "answerText": "(B) HCC",
      "explanation": "This patient has several risk factors for chronic liver disease and presents with signs of a liver mass. The most significant laboratory finding is an increased Alpha-Fetoprotein (AFP) level. AFP is a tumor marker, and a markedly elevated level in an adult with chronic liver disease (alcoholism is a major cause of cirrhosis, a precursor to HCC) is highly specific for Hepatocellular Carcinoma (HCC). The weight loss is a constitutional symptom of malignancy. The high conjugated bilirubin suggests biliary obstruction, which can be caused by the tumor compressing bile ducts. While transaminases (AST, ALT) can be normal in established cirrhosis or with certain tumor morphologies, the elevated AFP is the key to the diagnosis. Cholangiocarcinoma (A) typically does not produce AFP.",
      "pages": [
        250,
        286
      ]
    },
    {
      "number": 139,
      "statement": "A patient complained of loss of sensation and the presence of callosity, as shown in the image below. What is the most likely diagnosis?",
      "options": [
        "Arterial ulcer",
        "Venous ulcer",
        "Trophic ulcer",
        "Malignant ulcer"
      ],
      "correct": "C",
      "answerText": "(C) Trophic ulcer",
      "explanation": "The image shows a punched-out ulcer on a pressure-bearing area of the foot (like the ball of the foot or heel), surrounded by a rim of callus. The key feature in the history is the loss of sensation. This combination is the hallmark of a trophic ulcer, also known as a neuropathic or perforating ulcer. These ulcers develop due to a loss of protective sensation, which is most commonly caused by peripheral neuropathy (e.g., from diabetes, leprosy, or spinal cord injury). Without sensation, the patient is unaware of repetitive minor trauma and pressure, which leads to skin breakdown and ulceration. The ulcer is typically painless. Arterial ulcers are painful and occur on toes, while venous ulcers occur on the medial malleolus and are associated with signs of venous insufficiency.",
      "pages": [
        250,
        286
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q139-1.jpg",
          "width": 367,
          "height": 213,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 140,
      "statement": "A 5-year-old child presented with bleeding per rectum and was found to have a rectal polyp. Histopathological examination showed dilated glands with mucin and inflammatory cell infiltration. What is the most probable diagnosis?",
      "options": [
        "Hamartomatous polyp",
        "Adenomatous polyp",
        "Choriostoma",
        "Adenocarcinoma"
      ],
      "correct": "A",
      "answerText": "(A) Hamartomatous polyp",
      "explanation": "The most common type of colorectal polyp in children is a juvenile polyp, which is a type of hamartomatous polyp. A hamartoma is a benign, focal malformation that resembles a neoplasm but is composed of a disorganized mixture of mature cells and tissues that are native to the organ of origin. The histological description of a juvenile polyp matches the findings perfectly: it consists of dilated, mucin-filled cystic glands set in an inflamed, edematous lamina propria. These polyps are benign and typically present with painless rectal bleeding in young children. Adenomatous polyps (B) are pre-malignant lesions that are rare in children and have a different histology (dysplastic glands).",
      "pages": [
        250,
        286
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q140-1.jpg",
          "width": 307,
          "height": 205,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 141,
      "statement": "What is the best treatment for a patient with sodium hydroxide (NaOH) ingestion who presents with complete dysphagia?",
      "options": [
        "Feeding jejunostomy",
        "Esophagojejunostomy",
        "Gastrojejunostomy",
        "Stenting"
      ],
      "correct": "A",
      "answerText": "(A) Feeding jejunostomy",
      "explanation": "Ingestion of a strong alkali like sodium hydroxide (NaOH) causes severe liquefactive necrosis of the esophagus, leading to extensive tissue damage, inflammation, and subsequent stricture formation. The patients complete dysphagia indicates a severe injury with total obstruction of the esophageal lumen. In this acute phase, the primary goal is to provide nutritional support while allowing the inflamed esophagus to heal and the extent of the damage to become clear. Oral feeding is impossible. Therefore, the best initial treatment is to establish a route for enteral feeding that completely bypasses the esophagus and stomach. A feeding jejunostomy accomplishes this by placing a tube directly into the jejunum. This allows for long-term nutritional support while definitive management of the esophageal stricture (e.g., dilatation or reconstruction) is planned for a later date.",
      "pages": [
        249,
        286
      ]
    },
    {
      "number": 142,
      "statement": "The patient shown in the image is experiencing dyspnea. Which of the following statements regarding this condition is false?",
      "options": [
        "Hyperbaric O₂ has no role",
        "Debridement may be required daily",
        "This is known as Meleney gangrene",
        "None of the above"
      ],
      "correct": "A",
      "answerText": "(A) Hyperbaric O₂ has no role",
      "explanation": "The image likely shows a severe soft tissue infection such as necrotizing fasciitis or Meleneys gangrene (a specific progressive synergistic bacterial gangrene). This is a surgical emergency requiring aggressive debridement and antibiotics.\nDaily debridement (B) is often necessary to remove all non-viable tissue.\nMeleneys gangrene (C) is a historical term for a specific subtype of this process.\nHyperbaric oxygen (HBO) therapy is often used as an adjunctive treatment for necrotizing fasciitis, especially when anaerobic bacteria (like Clostridium) are involved. HBO increases tissue oxygenation, enhances leukocyte killing ability, and inhibits the growth of anaerobes. While its role is debated and it is not a substitute for surgery, to say it has no role is a false statement. Therefore, A is the false statement.",
      "pages": [
        249,
        286
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q142-1.jpg",
          "width": 341,
          "height": 512,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 143,
      "statement": "A patient presented with fever and a mass over the glans penis, showing a verrucous growth as seen in the image below. What is the treatment of choice for this condition?",
      "options": [
        "Partial penectomy",
        "Podophyllin local application",
        "CO₂ laser",
        "5 Fu cream application"
      ],
      "correct": "A",
      "answerText": "(A) Partial penectomy",
      "explanation": "The image shows a giant condyloma acuminatum, also known as a Buschke-Löwenstein tumor. Although histologically benign (it is a verrucous carcinoma, a low-grade squamous cell carcinoma), it is locally aggressive, invasive, and destructive. It is caused by Human Papillomavirus (HPV), typically types 6 and 11. Due to its large size, high rate of recurrence, and potential for malignant transformation into invasive squamous cell carcinoma, topical treatments like podophyllin (B), 5-FU cream (D), or simple CO₂ laser ablation (C) are often inadequate and associated with very high failure rates. The treatment of choice for a large Buschke-Löwenstein tumor is wide surgical excision to ensure complete removal and prevent recurrence. This may necessitate a partial or even total penectomy depending on the extent of invasion.",
      "pages": [
        249,
        291
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q143-1.jpg",
          "width": 410,
          "height": 525,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 144,
      "statement": "A patient with liver cirrhosis presented with bleeding. Which portosystemic anastomosis is most prone to bleeding in this condition?",
      "options": [
        "Left gastric and esophagus vein",
        "Superior rectal with sigmoid vessel",
        "LGV with phrenic veins",
        "Mid Colic and Superior colic"
      ],
      "correct": "A",
      "answerText": "(A) Left gastric and esophagus vein",
      "explanation": "In patients with cirrhosis, portal hypertension develops, shunting blood through portosystemic anastomoses. The most clinically significant and life-threatening bleeding arises from the anastomosis at the gastroesophageal junction. Here, the portal circulation, represented by the left gastric vein, connects with the systemic circulation, represented by the esophageal veins that drain into the azygos system. The increased pressure and flow through this pathway cause the formation of esophageal varices. These thin-walled, dilated veins are highly prone to rupture, leading to massive hematemesis. The other options do not represent the primary sites of major variceal bleeding in cirrhosis.",
      "pages": [
        249,
        291
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q144-1.png",
          "width": 307,
          "height": 205,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 145,
      "statement": "A patient presented with a nodular swelling on the cheek that has a mixed consistency, as shown in the image below. What is the most likely diagnosis?",
      "options": [
        "Parotid tumor",
        "Dermoid tumor",
        "Sebaceous cyst",
        "Tumor of jaw"
      ],
      "correct": "A",
      "answerText": "(A) Parotid tumor",
      "explanation": "The image shows a well-demarcated, nodular swelling located on the cheek, in the preauricular area, which is the typical location of the parotid gland. The most common tumor of the parotid gland is a pleomorphic adenoma, also known as a benign mixed tumor. These tumors are typically slow-growing, painless, firm, and often have a mixed consistency or a bosselated (lobulated) surface upon palpation, which fits the description. Given the location and character, a parotid tumor is the most likely diagnosis. A sebaceous cyst would be more superficial and have a central punctum. A dermoid cyst is possible but less common in this specific location. A tumor of the jaw would be a bony, hard mass.",
      "pages": [
        249,
        291
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q145-1.jpg",
          "width": 719,
          "height": 449,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 146,
      "statement": "What is the most common complication that occurs after ligation of the first major vessel during an abdominoperineal resection (APR)?",
      "options": [
        "Sympathetic- bladder dysfunction and impotency",
        "Parasympathetic- bladder dysfunction and erectile dysfunction",
        "Sympathetic- loss of perineal sensation and impotency",
        "Sympathetic- bladder dysfunction and retrograde ejaculation"
      ],
      "correct": "B",
      "answerText": "(B) Parasympathetic- bladder dysfunction and erectile dysfunction",
      "explanation": "Abdominoperineal Resection (APR) is a major surgery for low rectal cancers that involves extensive pelvic dissection. During the procedure, the pelvic autonomic nerves are at high risk of injury. The pelvic splanchnic nerves (nervi erigentes), which carry parasympathetic fibers from S2-S4, are crucial for both bladder function (micturition) and erectile function. Injury to these nerves, which can occur during dissection around the rectum, is a common complication and leads to neurogenic bladder dysfunction (urinary retention or incontinence) and erectile dysfunction. The sympathetic nerves are more responsible for ejaculation, and their injury can cause retrograde ejaculation. Therefore, injury to the parasympathetic nerves is the most common cause of both bladder and erectile problems post-APR.",
      "pages": [
        252,
        291
      ]
    },
    {
      "number": 147,
      "statement": "Pain in parotid tumor due to involvement of which structure",
      "options": [
        "Auriculotemporal",
        "Facial",
        "Investing layer of Deep cervical fascia",
        "Hypoglossal nerve"
      ],
      "correct": "A",
      "answerText": "(A) Auriculotemporal",
      "explanation": "Pain associated with a Parotid tumor is usually due to irritation or involvement of the Auriculotemporal nerve. This nerve arises from the Mandibular nerve and supplies sensory innervation to the parotid gland, temporomandibular joint, and skin of the temporal region and ear.\nWhen a parotid tumor enlarges, it may compress or infiltrate the auriculotemporal nerve, producing pain in the parotid region that may radiate to the ear or temporal area. Therefore, pain in a parotid swelling often indicates involvement of this sensory nerve.\nOther options are less appropriate:\n1. Facial nerve passes through the parotid gland but is mainly motor. Tumor involvement causes facial muscle paralysis rather than pain.\n2. The investing layer of deep cervical fascia forms the parotid capsule but is not responsible for the characteristic pain pattern.\n3. Hypoglossal nerve supplies tongue muscles and is not related to parotid gland sensation.\nThus, pain in a parotid tumor is typically due to involvement of the auriculotemporal nerve.",
      "pages": [
        252,
        291
      ]
    }
  ],
  "Pediatrics": [
    {
      "number": 148,
      "statement": "Images of BM aspiration (A) and peripheral smear (B) from a child with pancytopenia shown below. Which enzyme is deficient in this condition.",
      "options": [
        "Glucose 6 phosphatase",
        "Glucocerebrosidase",
        "Hexosaminidase",
        "Alpha galactosidase"
      ],
      "correct": "B",
      "answerText": "(B) Glucocerebrosidase",
      "explanation": "The image of the bone marrow aspirate (A) shows a characteristic Gaucher cell. This is a large macrophage with an abundant, fibrillary cytoplasm that has a wrinkled tissue paper or crumpled silk appearance. The presence of these cells is pathognomonic for Gaucher disease, a lysosomal storage disorder. Gaucher disease is caused by a deficiency of the enzyme glucocerebrosidase (also known as acid β-glucosidase). This enzyme deficiency leads to the accumulation of the substrate glucocerebroside within the lysosomes of macrophages throughout the reticuloendothelial system. This results in the clinical features of pancytopenia (due to bone marrow infiltration), hepatosplenomegaly, and bone disease.",
      "pages": [
        252,
        288
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q148-1.jpg",
          "width": 382,
          "height": 244,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 149,
      "statement": "In an infant with a birth weight of 2.8 kg, which parameter is the best indicator of adequate growth?",
      "options": [
        "Weight gain of 300 gm/ month till 1 year",
        "Increase in length of 25 cm in 1st year",
        "Anterior fontanelle closure by 6 month",
        "Weight under 75% & length under 25%"
      ],
      "correct": "A",
      "answerText": "(A) Weight gain of 300 gm/ month till 1 year",
      "explanation": "In infants, weight gain is the most sensitive and practical indicator of adequate growth and nutrition. For a normal infant with a birth weight of 2.8 kg, expected growth patterns follow standard pediatric growth norms. During the first year of life, weight increases rapidly due to high metabolic activity and nutritional demands.\nNormally, infants gain about 25–30 g per day, which corresponds to approximately 750–900 g per month in the first 3–4 months, and later the rate gradually slows. On average, a gain of around 300 g per month during infancy is considered an acceptable indicator of steady growth when monitored over time along with growth charts.\nOther options are less appropriate indicators. Although length increases about 25 cm during the first year, length measurements are less sensitive to short-term nutritional changes. Anterior fontanelle closure by 6 months is incorrect because it usually closes between 12–18 months. The option mentioning weight under 75% and length under 25% suggests growth failure rather than normal growth.\nTherefore, regular monthly weight gain (about 300 g/month) is considered the best practical indicator of adequate infant growth.",
      "pages": [
        252,
        288
      ]
    },
    {
      "number": 150,
      "statement": "A 4-year-old child presented with recurrent episodes of jaundice (icterus) and pallor. What is the most probable diagnosis, and which investigation should be done to confirm it?",
      "options": [
        "Autoimmune hemolytic anemia, direct Coombs",
        "Autoimmune thrombocytopenic purpura, direct coombs",
        "Hereditary Spherocytosis osmotic fragility test",
        "None"
      ],
      "correct": "C",
      "answerText": "(C) Hereditary Spherocytosis osmotic fragility test",
      "explanation": "The combination of episodic icterus (jaundice) and pallor (from anemia) in a child suggests a chronic hemolytic anemia. One of the most common inherited hemolytic anemias is Hereditary Spherocytosis (HS). This is a disorder of the red blood cell membrane cytoskeleton, which causes the cells to become spherical rather than biconcave discs. These spherocytes are less deformable and are prematurely destroyed in the spleen, leading to chronic hemolysis, anemia, jaundice, and often splenomegaly. The classic diagnostic laboratory test for HS is the osmotic fragility test. This test demonstrates that the spherocytic red cells have increased fragility and will lyse more readily when placed in hypotonic saline solutions compared to normal red blood cells.",
      "pages": [
        252,
        288
      ]
    },
    {
      "number": 151,
      "statement": "A 10-year-old boy presented with complaints of recurrent bleeding and a past history of joint pains. There was no history of mucosal bleeding. Deficiency of which coagulation factor is most likely responsible for this condition?",
      "options": [
        "Factor 8 & 9",
        "Factor 3&4",
        "Vwf",
        "Lupus anticoagulant"
      ],
      "correct": "A",
      "answerText": "(A) Factor 8 & 9",
      "explanation": "The clinical presentation of recurrent bleeding into joints (hemarthrosis), leading to joint pain, in a male patient is the classic picture of hemophilia. The absence of significant mucosal bleeding makes von Willebrand disease (vWD) less likely, as mucocutaneous bleeding is its hallmark. Hemophilia A is an X-linked recessive disorder caused by a deficiency of Factor VIII, while Hemophilia B is an X-linked recessive disorder caused by a deficiency of Factor IX. Both factors are critical components of the intrinsic coagulation cascade. Their deficiency impairs clot formation, leading to the characteristic deep tissue and joint hemorrhages. A lupus anticoagulant (D) is typically associated with thrombosis, not a bleeding disorder.",
      "pages": [
        252,
        288
      ]
    },
    {
      "number": 152,
      "statement": "Chloride level is tested in which disease?",
      "options": [
        "Cystic fibrosis",
        "Gauchers disease",
        "Osteogenesis imperfecta",
        "Liddle Syndrome"
      ],
      "correct": "A",
      "answerText": "(A) Cystic fibrosis",
      "explanation": "The measurement of chloride concentration in sweat is the gold standard diagnostic test for Cystic Fibrosis (CF). CF is a genetic disorder caused by mutations in the CFTR gene, which codes for a chloride ion channel. A defective channel impairs chloride transport across epithelial cells. In the sweat ducts, this defect prevents the reabsorption of chloride from sweat, resulting in an abnormally high sweat chloride concentration. A level greater than 60 mmol/L is considered diagnostic. The other listed conditions are not diagnosed by a chloride test; Gauchers disease is diagnosed via enzyme assay, Osteogenesis Imperfecta by genetic testing or clinical findings, and Liddle Syndrome by genetic testing and clinical response to specific diuretics.",
      "pages": [
        252,
        293
      ]
    },
    {
      "number": 153,
      "statement": "A 10-year-old child presented with tachypnea and severe dehydration. Investigations revealed a random blood glucose level of 550 mg/dL, urine glucose 3+, arterial blood pH of 7.1, and serum bicarbonate of 7 mmol/L. What is the most appropriate management for this patient?",
      "options": [
        "Stabilize, NS 10 ml/kg followed by insulin 0.1 U/Kg/hr",
        "Stabilize, NS 10 ml/Kg followed by insulin 0.2 U/Kg/hr",
        "Stabilize, NS 20 ml/kg followed by insulin 0.1 U/Kg/hr",
        "Stabilize, NS 20 ml/kg followed by insulin 0.2 U/Kg/hr"
      ],
      "correct": "C",
      "answerText": "(C) Stabilize, NS 20 ml/kg followed by insulin 0.1 U/Kg/hr",
      "explanation": "This child is in severe Diabetic Ketoacidosis (DKA), evidenced by hyperglycemia, acidosis (pH 7.1), and severe dehydration. According to pediatric DKA guidelines (like ISPAD), the initial management prioritizes fluid resuscitation to restore perfusion. For severe dehydration or shock, an initial isotonic saline bolus of 20 ml/kg is appropriate. This is followed by a continuous intravenous insulin infusion. The standard rate for the insulin infusion is 0.05-0.1 U/kg/hr. An insulin bolus is no longer recommended. Insulin therapy should begin approximately one hour after fluid resuscitation has started to prevent rapid osmolar shifts that could increase the risk of cerebral edema. Option C provides the correct fluid volume for severe dehydration and the standard insulin infusion rate.",
      "pages": [
        245,
        293
      ]
    },
    {
      "number": 154,
      "statement": "A child was brought with visible bony deformities, as shown in the image below. Deficiency of which nutrient is responsible for these findings?",
      "options": [
        "Vitamin A",
        "Vitamin D",
        "Vitamin C",
        "Vitamin K"
      ],
      "correct": "B",
      "answerText": "(B) Vitamin D",
      "explanation": "The image displays bowed legs (genu varum), a classic skeletal deformity of rickets. Rickets in children is caused by a deficiency of Vitamin D. Vitamin D is crucial for calcium and phosphate homeostasis. It promotes the intestinal absorption of these minerals, which are essential for the proper mineralization of the organic bone matrix (osteoid). In the absence of adequate Vitamin D, the growing bones of a child fail to mineralize, becoming soft and weak. The mechanical stress of weight-bearing then causes the long bones of the legs to bend and bow. Other signs of rickets include widening of the wrists and costochondral junctions (rachitic rosary).",
      "pages": [
        245,
        293
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q154-1.jpg",
          "width": 375,
          "height": 240,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 155,
      "statement": "Gum bleeding in scurvy is due to",
      "options": [
        "Defect in collagen synthesis",
        "Increased keratinization of epithelium",
        "Inhibition of clotting factors",
        "Low calcium"
      ],
      "correct": "A",
      "answerText": "(A) Defect in collagen synthesis",
      "explanation": "Scurvy is the clinical syndrome of Vitamin C (ascorbic acid) deficiency. Vitamin C is an essential cofactor for the enzymes prolyl and lysyl hydroxylase. These enzymes are responsible for the hydroxylation of proline and lysine residues during the synthesis of collagen, a step that is critical for the formation of stable, cross-linked collagen fibers. A defect in collagen synthesis due to Vitamin C deficiency results in weakened connective tissue throughout the body. This leads to increased fragility of capillary walls, which manifests as the characteristic signs of scurvy, including perifollicular hemorrhage, bruising, and swollen, bleeding gums. Clotting factor synthesis is dependent on Vitamin K, not Vitamin C.",
      "pages": [
        245,
        293
      ]
    }
  ],
  "Orthopedics": [
    {
      "number": 156,
      "statement": "The image shows an orthopedic procedure being performed. Identify this procedure.",
      "options": [
        "Intraosseous cannulation for fluid therapy",
        "Intraosseous abscess drainage",
        "Diagnostic biopsy",
        "Intraosseous cannulation for pain relief"
      ],
      "correct": "A",
      "answerText": "(A) Intra osseous cannulation for fluid therapy",
      "explanation": "The image demonstrates the placement of a needle into the medullary cavity of the proximal tibia, using specific anatomical landmarks like the tibial tuberosity and anterior border. This is the standard technique for intra osseous (IO) cannulation. This procedure is a rapid and effective method for gaining non-collapsible vascular access in emergency situations, particularly in pediatric patients or adults in shock when establishing a peripheral intravenous (IV) line is difficult or impossible. The rich vascular network within the bone marrow provides a direct route into the systemic circulation, allowing for the rapid administration of fluids, medications, and blood products. It is a life-saving intervention, not primarily for abscess drainage, biopsy, or pain relief in this context.",
      "pages": [
        245,
        293
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q156-1.png",
          "width": 326,
          "height": 236,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 157,
      "statement": "Based on the image shown below, what is the most likely diagnosis?",
      "options": [
        "Pagets disease",
        "Osteogenesis imperfecta",
        "Fibrous dysplasia",
        "Osteosarcoma"
      ],
      "correct": "B",
      "answerText": "(B) Osteogenesis imperfecta",
      "explanation": "The X-ray image shows marked bowing and deformity of the long bones of the lower limbs, which is characteristic of Osteogenesis Imperfecta. This condition is a hereditary disorder caused by mutations affecting type I collagen synthesis, most commonly involving the COL1A1 or COL1A2. Because collagen is an important structural component of bone, defective collagen leads to fragile bones that fracture easily.\nRadiologically, osteogenesis imperfect a shows thin cortices, osteopenia, multiple healed fractures, and bowing of long bones. Clinically, patients may present with recurrent fractures, bone deformities, short stature, blue sclera, hearing loss, and dentinogenesis imperfect a.\nThe other options are less consistent with the image. Paget disease typically occurs in older adults, fibrous dysplasia shows a ground-glass appearance in bone, and osteosarcoma usually presents with destructive bone lesions and periosteal reactions such as a sunburst pattern.\nTherefore, the radiographic appearance is most consistent with osteogenesis imperfecta, also known as brittle bone disease.",
      "pages": [
        245,
        294
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q157-1.jpg",
          "width": 100,
          "height": 176,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 158,
      "statement": "Correctly matched statement regarding the splint shown in image :",
      "options": [
        "Knuckle bender splint; UNP",
        "Dynamic cock up splint; RNP",
        "Turn buckle splint; VIC",
        "Knuckle bender splint; MNP"
      ],
      "correct": "B",
      "answerText": "(B) Dynamic cock up splint; RNP",
      "explanation": "The image shows a dynamic cock-up splint. This type of splint holds the wrist in extension (the cock-up position) while allowing for active flexion of the fingers. It is primarily used in the management of wrist drop, which is the inability to actively extend the wrist and fingers. Wrist drop is the classic sign of Radial Nerve Palsy (RNP). By supporting the wrist in a functional extended position, the splint prevents flexion contractures and improves the patients hand function while awaiting nerve recovery. A knuckle bender splint (A, D) is used to correct claw hand deformity resulting from ulnar (UNP) or median nerve palsy (MNP) by flexing the metacarpophalangeal (MCP) joints.",
      "pages": [
        245,
        294
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q158-1.jpg",
          "width": 257,
          "height": 385,
          "alt": "Figure accompanying the question"
        }
      ]
    }
  ],
  "Obstetrics & Gynaecology": [
    {
      "number": 160,
      "statement": "A 30-year-old woman undergoing infertility treatment with human menopausal gonadotropin (HMG) developed abdominal pain and dyspnea. What is this condition called?",
      "options": [
        "Ovarian hyperstimulation syndrome",
        "PCOD",
        "Theca Lutein cyst",
        "Hypogonadotropic hypogonadism"
      ],
      "correct": "A",
      "answerText": "(A) Ovarian hyperstimulation syndrome",
      "explanation": "The patient is undergoing controlled ovarian stimulation with human menopausal gonadotropin (HMG) for infertility. A major potential complication of this treatment is Ovarian Hyperstimulation Syndrome (OHSS). OHSS is an excessive systemic response to ovulation induction drugs. It is characterized by the development of multiple ovarian cysts, leading to a massive cystic enlargement of the ovaries. This causes a fluid shift from the intravascular space to the third space due to increased vascular permeability. The clinical manifestations range from mild abdominal bloating to severe cases with abdominal pain, ascites, pleural effusion (causing dyspnea), hemoconcentration, and an increased risk of thromboembolism.",
      "pages": [
        254,
        294
      ]
    },
    {
      "number": 161,
      "statement": "Which of the following surgical procedures scheduled in the operating theatre cannot be performed using a hysteroscope?",
      "options": [
        "Asherman syndrom",
        "Septum resection",
        "Subserous myoma",
        "Tubal ligation"
      ],
      "correct": "C",
      "answerText": "(C) Subserous myoma",
      "explanation": "A hysteroscope is an instrument inserted through the cervix to visualize and operate within the uterine cavity. Therefore, it can only be used for pathologies located inside the uterus (intracavitary) or within the uterine wall but bulging into the cavity (submucosal). Hysteroscopy is the standard approach for lysing adhesions in Ashermans syndrome (A), resecting a uterine septum (B), and performing tubal ligation via cannulation of the tubal ostia (D). A subserous myoma, by definition, is a fibroid located on the outer surface of the uterus, projecting into the peritoneal cavity. It is not accessible from inside the uterine cavity and therefore cannot be removed via hysteroscopy. Its removal requires a laparoscopy or laparotomy.",
      "pages": [
        254,
        294
      ]
    },
    {
      "number": 162,
      "statement": "A 16-year-old girl with primary amenorrhea presented with cyclical abdominal pain and a suprapubic bulge. On examination, there was swelling along the entire length of the vagina. What is the most likely diagnosis?",
      "options": [
        "Complete vaginal atresia",
        "Imperforate hymen",
        "Total Mullerian agenesis",
        "Transverse vaginal septum"
      ],
      "correct": "B",
      "answerText": "(B) Imperforate hymen",
      "explanation": "This presentation is classic for an imperforate hymen. The patient has primary amenorrhea despite having normal ovarian function (indicated by developed secondary sexual characteristics, which are implied). The normal hormonal cycles cause menstrual bleeding, but the imperforate hymen creates a complete obstruction at the vaginal outlet. This leads to the accumulation of menstrual blood in the vagina (hematocolpos) and uterus (hematometra). This collection of blood causes the cyclical, crampy abdominal pain and the palpable suprapubic bulge (the enlarged uterus). The hematocolpos creates the swelling along the entire vagina. A transverse vaginal septum could present similarly, but imperforate hymen is more common and fits the description perfectly.",
      "pages": [
        254,
        295
      ]
    },
    {
      "number": 163,
      "statement": "A 23-year-old woman was brought to the outpatient department by her mother-in-law with complaints of inability to conceive despite six months of cohabitation. What should be the next step in management?",
      "options": [
        "Hysterosalpingography",
        "Revisit after 6 months",
        "Husband semen analysis",
        "Hysterectomy"
      ],
      "correct": "B",
      "answerText": "(B) Revisit after 6 months",
      "explanation": "Infertility is defined as the inability to conceive after one year of regular, unprotected intercourse. This patient is only 23 years old and has been trying to conceive for only 6 months. In a young, healthy couple, it is statistically normal for conception to take up to a year. Therefore, initiating an invasive and expensive infertility workup (like hysterosalpingography or hormonal assays) at this stage is premature. The most appropriate next step in management is to reassure the couple and advise them to continue trying to conceive for another six months. They should be counseled on timing intercourse with ovulation. If they have not conceived after a total of one year, then a formal infertility investigation would be warranted.",
      "pages": [
        254,
        295
      ]
    },
    {
      "number": 164,
      "statement": "A woman with cervical cancer has recently undergone radical surgical treatment. What is the best preventive advice that should be given to her 14-year-old daughter?",
      "options": [
        "HPV Vaccine",
        "BRCA testing",
        "PTEN Testing",
        "Cervical biopsy"
      ],
      "correct": "A",
      "answerText": "(A) HPV Vaccine",
      "explanation": "Nearly all cases of cervical cancer are caused by persistent infection with high-risk strains of the Human Papillomavirus (HPV). While cervical cancer itself is not a hereditary disease, the causative agent is a preventable infection. The most effective primary prevention strategy against cervical cancer is vaccination against HPV. The HPV vaccine is highly effective at preventing infection with the most common cancer-causing HPV types (like 16 and 18). It is recommended for adolescents before they become sexually active, typically between ages 9 and 14. Therefore, the best advice for the 14-year-old daughter of a woman with cervical cancer is to receive the HPV vaccine to protect herself from the virus that causes the disease.",
      "pages": [
        254,
        295
      ]
    },
    {
      "number": 165,
      "statement": "A 27-year-old woman presented with two months of amenorrhea after previously having three regular menstrual cycles. Ultrasonography revealed a left adnexal mass measuring 3 × 2.5 cm. Her serum β-hCG level was 2800 mIU/mL. No fetal pole was seen within the uterus, and there was no cardiac activity. What should be the next step in management?",
      "options": [
        "Oral methotrexate",
        "Multiple doses of methotrexate with leucovorin",
        "Single dose of methotrexate injection",
        "Two dose of methotrexate injection"
      ],
      "correct": "C",
      "answerText": "(C) Single dose of methotrexate injection",
      "explanation": "The clinical features suggest Ectopic Pregnancy, most commonly occurring in the Fallopian tube. The patient has amenorrhea for 2 months, a positive β-hCG level (2800 mIU/mL), and an adnexal mass on ultrasonography with no intrauterine pregnancy, which strongly indicates ectopic pregnancy.\nMedical management is preferred when the patient is hemodynamically stable, the adnexal mass is small (<3.5–4 cm), there is no fetal cardiac activity, and β-hCG levels are relatively low (generally <5000 mIU/mL). In this case, the adnexal mass measures 3 × 2.5 cm, β-hCG is 2800 mIU/mL, and no cardiac activity is present, fulfilling the criteria for medical therapy.\nThe drug used is Methotrexate, which inhibits DNA synthesis and stops trophoblastic cell growth. The single-dose methotrexate regimen is commonly used because it is effective, simpler, and has fewer side effects compared to multidose regimens.\nTherefore, the next appropriate step in management is a single-dose methotrexate injection.",
      "pages": [
        254,
        295
      ]
    },
    {
      "number": 166,
      "statement": "A woman at 32 weeks of gestation presented with complaints of difficulty in breathing and walking. Fetal movements were normal. On examination, the abdomen was tense but non-tender, and the symphysis–fundal height measured 41 cm. What is the most likely diagnosis?",
      "options": [
        "Polyhydramnios",
        "Oligohydramnios",
        "Maternal-fetal ascites",
        "Stillbirth"
      ],
      "correct": "A",
      "answerText": "(A) Polyhydramnios",
      "explanation": "The clinical findings are highly suggestive of polyhydramnios, which is an excessive amount of amniotic fluid. The key finding is the significant discrepancy between the gestational age (32 weeks) and the symphysial-fundal height (41 cm), indicating a uterus that is much larger than expected. The tense abdomen and the patients symptoms of dyspnea (difficulty breathing, due to the enlarged uterus pushing up on the diaphragm) and difficulty walking are also classic consequences of the increased intra-abdominal pressure from the excess fluid. Fetal parts are often difficult to palpate in cases of polyhydramnios, and the fetal heart sound may be muffled. Oligohydramnios (B) is a deficiency of amniotic fluid and would present with a uterus that is small for dates.",
      "pages": [
        260,
        295
      ]
    },
    {
      "number": 167,
      "statement": "A 17-year-old girl with primary amenorrhea has normal breast development but absent pubic and axillary hair. Bilateral inguinal masses are palpable. Ultrasonography shows absence of the uterus, fallopian tubes, and ovaries. Which of the following best explains this clinical scenario?",
      "options": [
        "PCOS",
        "Turner Syndrome",
        "Complete AIS",
        "Hypergonadotropic hypogonadism"
      ],
      "correct": "C",
      "answerText": "(C) Complete AIS",
      "explanation": "This constellation of findings is classic for Complete Androgen Insensitivity Syndrome (CAIS). These individuals are genetically male (46,XY). They have testes (the bilateral inguinal masses) which produce normal male levels of testosterone. However, due to a defect in the androgen receptor, their bodies are completely unable to respond to testosterone. The testosterone is peripherally converted to estrogen, which results in the development of normal female breasts. Since there is no response to androgens, Wolffian ducts regress, and male external genitalia do not form. The testes still produce anti-Müllerian hormone, which causes the regression of Müllerian structures, hence the absence of the uterus and fallopian tubes. The lack of androgen effect also explains the scant or absent pubic and axillary hair.",
      "pages": [
        260,
        300
      ]
    },
    {
      "number": 168,
      "statement": "A 40-year-old woman scheduled for a total laparoscopic hysterectomy expressed concern and asked her gynecologist about the procedure. What is the main disadvantage of a total laparoscopic hysterectomy?",
      "options": [
        "Increase blood loss",
        "Long hospital stay",
        "Increase postoperative pain",
        "Increased chances of Bladder injury"
      ],
      "correct": "D",
      "answerText": "(D) Increased chances of Bladder injury",
      "explanation": "Compared to traditional abdominal hysterectomy, total laparoscopic hysterectomy (TLH) offers numerous advantages, including less blood loss, shorter hospital stays, and less postoperative pain. However, the laparoscopic approach is associated with a unique set of potential complications. Due to the need to dissect the cervix away from the bladder using electrosurgical instruments in a space with limited tactile feedback, there is a slightly increased risk of thermal or direct injury to the urinary tract, particularly the bladder. While the overall complication rate is low in experienced hands, bladder injury is a recognized disadvantage when compared to the abdominal approach, where the anatomy can be more directly visualized and palpated.",
      "pages": [
        260,
        300
      ]
    },
    {
      "number": 169,
      "statement": "A 53-year-old woman was diagnosed with carcinoma of the cervix. On clinical examination, a necrotic cervical lesion was found extending into the parametrium. What is the appropriate management for this stage of cervical cancer?",
      "options": [
        "Surgery",
        "Chemoradiation",
        "Biopsy",
        "Surgery + Radiotherapy"
      ],
      "correct": "B",
      "answerText": "(B) Chemoradiation",
      "explanation": "The patient has been diagnosed with cervical cancer that has extended into the parametrium (the connective tissue adjacent to the uterus). According to the FIGO staging system for cervical cancer, parametrial involvement signifies at least Stage IIB disease. For locally advanced cervical cancer (Stage IIB through IVA), the standard of care and the treatment that offers the best survival outcomes is definitive chemoradiation. This involves a course of external beam radiation therapy to the pelvis, often combined with brachytherapy (internal radiation), given concurrently with a platinum-based chemotherapy agent (typically cisplatin). The chemotherapy acts as a radiosensitizer, making the cancer cells more susceptible to the effects of radiation. Surgery is not the primary treatment for this stage of disease.",
      "pages": [
        260,
        300
      ]
    },
    {
      "number": 170,
      "statement": "A 25-year-old female who was sexually active with multiple sexual partners presents with swelling in the wall of labia majora. What is the most likely diagnosis?",
      "options": [
        "Bartholin abscess",
        "Cystic fibrosis",
        "Gartners cyst",
        "Trichomoniasis"
      ],
      "correct": "A",
      "answerText": "(A) Bartholin abscess",
      "explanation": "The Bartholins glands are located in the posterolateral aspect of the vaginal vestibule, at the base of the labia majora. Their function is to secrete mucus for lubrication. If the duct of one of these glands becomes blocked, fluid can accumulate, forming a cyst. If this cyst becomes infected, it develops into a Bartholin abscess. This presents as a tender, fluctuant, erythematous swelling in the labia majora. The infection is often polymicrobial and can be associated with sexually transmitted pathogens, making a history of multiple sexual partners a risk factor. Gartners cysts are located on the anterolateral wall of the vagina. Trichomoniasis causes a vaginal discharge, and cystic fibrosis is a systemic disease.",
      "pages": [
        260,
        300
      ]
    }
  ],
  "Dermatology": [
    {
      "number": 171,
      "statement": "An obese woman presented with facial acne that did not improve despite appropriate medical treatment. What is the most likely underlying cause of her persistent acne?",
      "options": [
        "Hypergonadism",
        "Change in her diet",
        "PCOS",
        "Uses of lotions & cream"
      ],
      "correct": "C",
      "answerText": "(C) PCOS",
      "explanation": "The combination of obesity and persistent, treatment-resistant acne in a female should raise suspicion for an underlying endocrine disorder, specifically Polycystic Ovary Syndrome (PCOS). PCOS is a common hormonal disorder characterized by hyperandrogenism (excess male hormones), ovulatory dysfunction, and polycystic ovarian morphology. The excess androgens are responsible for the clinical signs of hirsutism (excess hair growth) and persistent acne. The acne is often inflammatory and located on the lower face and jawline. Obesity is also a very common feature of PCOS and contributes to insulin resistance, which can exacerbate the hypermodernism. While diet and cosmetics can influence acne, a persistent case unresponsive to standard treatment warrants investigation for PCOS.",
      "pages": [
        260,
        300
      ]
    },
    {
      "number": 172,
      "statement": "A 50-year-old man with a known history of HIV infection presented with a painful lesion on the palate. What is the most likely diagnosis?",
      "options": [
        "Kaposi sarcoma",
        "Squamous cell carcinoma",
        "Basal cell carcinoma",
        "HCC"
      ],
      "correct": "A",
      "answerText": "(A) Kaposi sarcoma",
      "explanation": "Kaposi sarcoma (KS) is an AIDS-defining illness. It is a vascular tumor caused by Human Herpesvirus-8 (HHV-8). While it most commonly presents as purplish, non-blanching macules, papules, or nodules on the skin, it can also affect mucosal surfaces. The hard palate is the most common intraoral site for KS. Oral lesions can be painful, especially if they become ulcerated, and can interfere with eating. In an HIV-positive patient, the appearance of a pigmented, painful lesion on the palate is highly suggestive of Kaposi sarcoma. Squamous cell carcinoma is also possible but KS is more specific to this clinical context.",
      "pages": [
        260,
        300
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q172-1.jpg",
          "width": 227,
          "height": 234,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 173,
      "statement": "Which chemical causes following allergic reaction",
      "options": [
        "Pollen",
        "PPD",
        "Balsum of peru",
        "Hexa"
      ],
      "correct": "B",
      "answerText": "(B) PPD",
      "explanation": "The image shows a delayed-type (Type IV) hypersensitivity reaction on the skin, which is the basis of patch testing for allergic contact dermatitis and tests like the Mantoux test. PPD (Purified Protein Derivative) is the substance used in the Mantoux test to screen for tuberculosis. When injected intradermally into an individual who has been previously sensitized to Mycobacterium tuberculosis, it elicits a classic Type IV hypersensitivity reaction, which manifests as an indurated, erythematous papule after 48-72 hours, similar to a positive patch test reaction. Balsam of Peru (C) is a common contact allergen, but PPD is the classic example of a substance that induces this type of immunologic reaction for diagnostic purposes. Pollen (A) typically causes Type I hypersensitivity reactions (e.g., hay fever).",
      "pages": [
        260,
        297
      ]
    },
    {
      "number": 174,
      "statement": "A patient presented with diarrhea, dementia, and dermatitis. Deficiency of which nutrient is responsible for this condition?",
      "options": [
        "Niacin",
        "Biotin",
        "Vit B9",
        "Vit A"
      ],
      "correct": "A",
      "answerText": "(A) Niacin",
      "explanation": "The classic triad of Dermatitis, Diarrhea, and Dementia (often referred to as the 3 Ds) is the hallmark of pellagra, the disease caused by a severe deficiency of Niacin (Vitamin B3). The dermatitis is typically a photosensitive, hyperpigmented rash that appears symmetrically on sun-exposed areas of the body (e.g., Casals necklace). The gastrointestinal effects include diarrhea, vomiting, and a bright red tongue (glossitis). The neurological manifestations can range from irritability and insomnia to severe dementia, delirium, and psychosis. If left untreated, pellagra can be fatal (the 4th D - Death). This combination of symptoms is pathognomonic for niacin deficiency.",
      "pages": [
        257,
        297
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q174-1.jpg",
          "width": 360,
          "height": 140,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 175,
      "statement": "What is the long-term complication associated with this condition?",
      "options": [
        "Malignant melanoma",
        "Cataract",
        "Loss of vision",
        "Glaucoma"
      ],
      "correct": "A",
      "answerText": "(A) Malignant melanoma",
      "explanation": "The condition described is commonly associated with Xeroderma Pigmentosum, a genetic disorder characterized by defective nucleotide excision repair of UV-induced DNA damage. Because of this defect, patients are extremely sensitive to ultraviolet (UV) radiation, leading to early skin changes such as freckling, hyperpigmentation, dryness of skin, and ocular involvement.\nOver time, repeated UV exposure causes accumulation of DNA mutations in skin cells. As a result, individuals with xeroderma pigmentosum have a very high risk of developing skin cancers at an early age, including Malignant Melanoma, basal cell carcinoma, and squamous cell carcinoma. These malignancies can occur in childhood or early adolescence, much earlier than in the general population.\nAlthough eye problems such as photophobia, keratitis, cataract, and vision loss may occur, the most serious long-term complication is the development of malignant melanoma and other skin cancers due to continuous UV-induced DNA damage.\nTherefore, the most important long-term complication associated with this condition is malignant melanoma.",
      "pages": [
        257,
        297
      ]
    },
    {
      "number": 176,
      "statement": "What is the cause of a painless ulcer accompanied by painless lymphadenopathy?",
      "options": [
        "Granuloma Inguinale",
        "Chancroid",
        "Syphilis",
        "Neisseria gonorrhea"
      ],
      "correct": "C",
      "answerText": "(C) Syphilis",
      "explanation": "The combination of a painless genital ulcer (chancre) and painless, non-tender regional lymphadenopathy is the classic presentation of primary syphilis, which is caused by the spirochete Treponema pallidum. The chancre is typically a single, clean-based, indurated ulcer that appears at the site of inoculation. In contrast, chancroid (B) is characterized by multiple, soft, painful ulcers with tender, suppurative lymph nodes (buboes). Granuloma inguinale (A) presents with painless, beefy-red ulcers but typically without significant lymphadenopathy (pseudobuboes may form). Gonorrhea (D) causes urethritis and cervicitis, not typically ulcerative lesions.",
      "pages": [
        257,
        297
      ]
    },
    {
      "number": 177,
      "statement": "The wife of a truck driver with a history of multiple sexual partners presented with vaginal discharge. On examination, cervical erosions were noted. According to syndromic management, which STD treatment kit should be given to this patient?",
      "options": [
        "Green",
        "Grey",
        "Red",
        "Yellow"
      ],
      "correct": "A",
      "answerText": "(A) Green",
      "explanation": "Under Indias National AIDS Control Organisation (NACO) guidelines, sexually transmitted infections (STIs) are managed using a syndromic approach with color-coded kits. A patient presenting with vaginal discharge and cervical erosions (which suggests cervicitis) should be managed according to the Cervical Discharge Syndrome protocol. The pre-packaged treatment kit for this syndrome is the Green Kit. This kit contains a combination of antibiotics designed to treat the most common causes of cervicitis, which are Neisseria gonorrhoeae and Chlamydia trachomatis. The Green Kit typically contains a single dose of azithromycin and a single dose of cefixime. The Grey Kit is for inguinal bubo, and the Yellow/White kits are for urethral discharge/vaginitis.",
      "pages": [
        257,
        297
      ]
    }
  ],
  "Anesthesia": [
    {
      "number": 178,
      "statement": "When to put patient in given position?",
      "options": [
        "Unconscious patient and both pulse & breathing absent",
        "Unconscious patient & both pulse & breathing present",
        "Unconscious patient with pulse present & breathing absent",
        "Unconscious patient with pulse absent & breathing present"
      ],
      "correct": "B",
      "answerText": "(B) Unconscious patient & both pulse & breathing present",
      "explanation": "The image displays the recovery position. This position is used for an unconscious patient who is breathing and has a pulse, but is not suspected of having a spinal injury. The purpose of the recovery position is to maintain a clear and open airway. By placing the person on their side, it prevents their tongue from falling back and obstructing the pharynx. It also allows any fluid, such as saliva or vomit, to drain safely out of the mouth, reducing the risk of aspiration into the lungs. If a patient is unconscious and not breathing, or has no pulse (A, C, D), they require immediate cardiopulmonary resuscitation (CPR), not placement in the recovery position.",
      "pages": [
        257,
        304
      ]
    },
    {
      "number": 179,
      "statement": "Identify the position?",
      "options": [
        "Head tilt chin lift",
        "Jaw thrust",
        "Manual inline stabilization",
        "none"
      ],
      "correct": "A",
      "answerText": "(A) Head tilt chin lift",
      "explanation": "The image demonstrates the head-tilt, chin-lift maneuver. This is a fundamental technique in basic life support used to open the airway of an unconscious patient who is not suspected of having a cervical spine injury. The maneuver is performed by placing one hand on the patients forehead and gently tilting the head back, while the fingers of the other hand are placed under the bony part of the chin to lift it forward. This action lifts the tongue away from the posterior pharyngeal wall, which is the most common cause of airway obstruction in an unconscious person. The jaw thrust maneuver (B) is an alternative technique used when a spinal injury is suspected.",
      "pages": [
        257,
        304
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q179-1.jpg",
          "width": 634,
          "height": 314,
          "alt": "Figure accompanying the question"
        }
      ]
    }
  ],
  "Radiology": [
    {
      "number": 180,
      "statement": "A 31-year-old woman delivered a 1 kg baby at 31 weeks of gestation. The newborn was found to have hepatosplenomegaly and jaundice. CT scan of the brain showed periventricular calcifications. What is the most likely diagnosis?",
      "options": [
        "Toxoplasmosis",
        "Herpes Simplex",
        "CMV",
        "Parvo B 19"
      ],
      "correct": "C",
      "answerText": "(C) CMV",
      "explanation": "This infant presents with signs of a congenital infection, including prematurity, low birth weight, hepatosplenomegaly, and jaundice. The key diagnostic finding is the periventricular calcifications on the head CT scan. This specific pattern of intracranial calcification is the hallmark of congenital Cytomegalovirus (CMV) infection. CMV is the most common congenital viral infection. While congenital toxoplasmosis (A) also causes intracranial calcifications, they tend to be diffuse and scattered throughout the brain parenchyma, rather than being concentrated around the ventricles. The combination of prematurity, hepatosplenomegaly, and periventricular calcifications is classic for congenital CMV.",
      "pages": [
        257,
        304
      ]
    },
    {
      "number": 181,
      "statement": "A 32-year-old patient presented with altered sensorium. CT scan of the brain revealed bilateral temporal lobe hemorrhages. What is the most likely diagnosis?",
      "options": [
        "TB",
        "Herpes Simplex",
        "Brain cancer",
        "Stroke"
      ],
      "correct": "B",
      "answerText": "(B) Herpes Simplex",
      "explanation": "The combination of an acute change in mental status (altered sensorium) and a CT scan showing hemorrhage in both temporal lobes is highly characteristic of Herpes Simplex Encephalitis (HSE). HSE, most commonly caused by HSV-1, has a distinct predilection for the limbic system, particularly the medial temporal lobes and inferior frontal lobes. The infection leads to a severe necrotizing and hemorrhagic inflammatory process in these regions. This specific anatomical tropism is a key radiological clue. While other conditions can affect the temporal lobes, this acute, bilateral hemorrhagic presentation is the classic finding for HSE, which is a neurological emergency requiring immediate antiviral therapy.",
      "pages": [
        257,
        304
      ]
    },
    {
      "number": 182,
      "statement": "A 22-year-old woman presented with swelling of the forearm. A radiograph of the affected area is shown below. What is the most likely diagnosis?",
      "options": [
        "Giant cell tumor",
        "Chondroblastoma",
        "Osteochondroma",
        "Aneurysmal Bone cyst"
      ],
      "correct": "A",
      "answerText": "(A) Giant cell tumor",
      "explanation": "The radiograph shows a large, eccentric, purely lytic (destructive) lesion located in the epiphysis of the distal radius, extending to the articular surface. The lesion has a well-defined but non-sclerotic margin, giving it a soap bubble appearance. This location (epiphysis of a long bone, typically around the knee or at the distal radius) and radiographic appearance in a young adult are classic for a Giant Cell Tumor (GCT) of bone. GCTs are typically benign but can be locally aggressive and may recur after treatment. An aneurysmal bone cyst (D) is also a lytic, expansile lesion but is usually located in the metaphysis. Chondroblastoma (B) occurs in the epiphysis but is more common in adolescents and typically smaller.",
      "pages": [
        257,
        304
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q182-1.jpg",
          "width": 600,
          "height": 450,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 183,
      "statement": "A 35-year-old patient presented with morning stiffness and reduced chest expansion. He also complained of redness of the eyes. Based on the clinical history and radiographic findings, what is the most likely diagnosis?",
      "options": [
        "Healed TB",
        "Ankylosing spondylitis",
        "Pagets disease",
        "Osteoporosis"
      ],
      "correct": "B",
      "answerText": "(B) Ankylosing spondylitis",
      "explanation": "This clinical picture is classic for Ankylosing Spondylitis (AS), a chronic inflammatory spondyloarthropathy. The key features are inflammatory back pain with morning stiffness that improves with activity, and involvement of the sacroiliac joints and spine. The reduced chest expansion is a characteristic finding, resulting from inflammation and fusion of the costovertebral joints. The radiograph shows classic signs of AS, including sacroiliitis (inflammation and fusion of the sacroiliac joints) and syndesmophytes, leading to the bamboo spine appearance. Furthermore, acute anterior uveitis (presenting as red, painful eyes) is the most common extra-articular manifestation of AS.",
      "pages": [
        255,
        299
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q183-1.jpg",
          "width": 338,
          "height": 411,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 184,
      "statement": "A 3-year-old child presented with fever and biphasic stridor, with a history of a recent upper respiratory tract infection. There was no dysphagia. Based on the radiographic findings shown below, what is the most likely diagnosis?",
      "options": [
        "Acute laryngotracheobronchitis",
        "Acute epiglottitis",
        "Laryngomalacia",
        "Foreign body glottis"
      ],
      "correct": "A",
      "answerText": "(A) Acute laryngotracheobronchitis",
      "explanation": "The radiograph of the neck shows a symmetric, cone-shaped narrowing of the subglottic trachea, which is known as the steeple sign. This radiological finding, combined with the clinical presentation of a young child with fever, a preceding upper respiratory infection (URI), and stridor, is classic for acute laryngotracheobronchitis, more commonly known as croup. Croup is a viral infection (usually parainfluenza virus) that causes inflammation and edema in the larynx and subglottic airway. The absence of dysphagia also helps distinguish it from acute epiglottitis (B), which typically presents with drooling and difficulty swallowing.",
      "pages": [
        255,
        299
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q184-1.jpg",
          "width": 363,
          "height": 380,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 185,
      "statement": "A 36-year-old patient presented with cough and fever for the past 12 days. On examination, crepitations were heard on the right side. A chest X-ray was performed. What is the most likely diagnosis?",
      "options": [
        "Apical segment of lower lobe consolidation",
        "Posterior segment of lower lobe consolidation",
        "Middle lobe consolidation",
        "Loculated pleural effusion"
      ],
      "correct": "C",
      "answerText": "(C) Middle lobe consolidation",
      "explanation": "The chest X-ray shows an opacity in the right lung that obscures the right heart border. This is known as the silhouette sign. When an intrathoracic opacity is in direct contact with the border of the heart, it will obscure that border on an X-ray. The right heart border is anatomically contiguous with the right middle lobe. Therefore, an opacity that silhouettes the right heart border indicates a pathological process, such as pneumonia or consolidation, within the right middle lobe. The clinical signs of cough, fever, and crepitations (crackles) are consistent with pneumonia. Consolidation in other lobes would obscure different structures (e.g., the diaphragm for lower lobes).",
      "pages": [
        255,
        299
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q185-1.jpg",
          "width": 442,
          "height": 369,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 186,
      "statement": "A 45-year-old woman diagnosed with stage IIB carcinoma of the cervix is planned for treatment with radiotherapy. Which of the following statements regarding ionizing radiation is correct?",
      "options": [
        "The normal cell & cancer cell will be equally sensitive",
        "Gl mucosa is more resistant part",
        "The radiation at a point is inversely proportional to the square of the distance from the source",
        "Small blood vessels are resistant to the effect of radiation"
      ],
      "correct": "C",
      "answerText": "(C) The radiation at a point is inversely proportional to the square of the distance from the source",
      "explanation": "This question tests a fundamental principle of physics as it applies to radiation therapy. The Inverse Square Law states that the intensity of radiation from a point source decreases with the square of the distance from that source. This means that if you double the distance from the radiation source, the dose received at that point will be reduced to one-quarter. This principle is critically important in radiotherapy for treatment planning and for radiation safety, as it explains why small changes in distance can have a large effect on the radiation dose delivered to the tumor and surrounding healthy tissues. The other statements are false: cancer cells are generally more sensitive than normal cells (A), GI mucosa is highly sensitive (B), and small blood vessels are also sensitive to radiation (D).",
      "pages": [
        259,
        299
      ]
    },
    {
      "number": 187,
      "statement": "A CT scan of a 50-year-old patient who presented with abdominal pain is shown below. Which of the following statements regarding this CT finding is correct?",
      "options": [
        "Surgery is mandatory",
        "Etiology is echinococcus spp.",
        "Angioembolization is indicated",
        "FNAC is diagnostic"
      ],
      "correct": "B",
      "answerText": "(B) Etiology is echinococcus spp.",
      "explanation": "The axial CT scan shows a very large, well-encapsulated, multiseptated cystic lesion in the liver. A key feature is the presence of multiple smaller daughter cysts within the larger mother cyst. This appearance is pathognomonic for a hydatid cyst, which is caused by infection with the larval stage of the tapeworm Echinococcus granulosus. The statement that the etiology is Echinococcus species is therefore correct. Surgery is one treatment option but is not always mandatory; medical therapy or percutaneous techniques (PAIR) can also be used. Fine-needle aspiration or cytology (FNAC) is generally contraindicated due to the high risk of anaphylactic shock and peritoneal dissemination of protoscolices if the cyst ruptures.",
      "pages": [
        259,
        299
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q187-1.jpg",
          "width": 448,
          "height": 338,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 189,
      "statement": "A radiograph of a 10-year-old boy with knee pain for the past three months is shown below. There is no definite history of trauma. Which of the following statements regarding the diagnosis and management is correct?",
      "options": [
        "Fracture of upper pole",
        "Avulsion fracture of patella-tension band wiring",
        "Bipartite patella- Do radiograph of the other knee",
        "Avulsion fracture of patella- Inter fragmentary screw fixation"
      ],
      "correct": "C",
      "answerText": "(C) Bipartite patella- Do radiograph of the other knee",
      "explanation": "The radiograph shows what appears to be a fracture line at the superolateral pole of the patella. However, the fragment has smooth, well-corticated (rounded) edges, which is not typical for an acute fracture. This appearance is characteristic of a bipartite patella, which is a normal congenital variant where a secondary ossification center of the patella fails to fuse with the main body. It is often asymptomatic and discovered incidentally. A key step to confirm that this is a developmental variant and not a fracture is to obtain a radiograph of the contralateral (other) knee, as a bipartite patella is bilateral in about 40-50% of cases. Finding a similar appearance in the other knee would confirm the diagnosis.",
      "pages": [
        259,
        302
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q189-1.jpg",
          "width": 794,
          "height": 500,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 190,
      "statement": "A patient presented with bone deformities along with associated skin lesions, as shown in the image below. What is the most likely diagnosis?",
      "options": [
        "Fibrous Dysplasia",
        "GCT",
        "Enchondroma",
        "Pagets Disease"
      ],
      "correct": "A",
      "answerText": "(A) Fibrous Dysplasia",
      "explanation": "The radiograph shows a shepherds crook deformity of the proximal femur, with an expansile, ground-glass appearance of the bone. This is a classic finding in fibrous dysplasia, a benign bone disorder where normal bone is replaced by fibrous tissue. The combination of bone deformities and skin lesions is highly suggestive of McCune-Albright syndrome, a specific form of polyostotic (multiple bone) fibrous dysplasia. This syndrome is defined by the triad of polyostotic fibrous dysplasia, endocrine abnormalities (like precocious puberty), and characteristic café-au-lait skin macules. These skin lesions are typically large, unilateral, and have irregular coast of Maine borders.",
      "pages": [
        262,
        302
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q190-1.jpg",
          "width": 405,
          "height": 720,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 191,
      "statement": "Identify the fracture seen in the given radiograph that results in inability to dorsiflex the foot.",
      "options": [
        "Femur fracture",
        "Tibia fracture",
        "Fibula fracture",
        "B & c"
      ],
      "correct": "C",
      "answerText": "(C) Fibula fracture",
      "explanation": "The inability to dorsiflex the foot (foot drop) is caused by an injury to the common peroneal (fibular) nerve. This nerve is anatomically vulnerable as it winds around the neck of the fibula. The radiograph shows an ankle fracture, but the question implies a fracture at a location that would cause foot drop. A fracture of the proximal fibula, specifically at the fibular neck, is a common cause of common peroneal nerve palsy. Therefore, among the choices, a fibula fracture (specifically, a proximal one) is the injury that would lead to an inability to dorsiflex the foot. The image itself shows a distal tibiofibular fracture, which doesnt typically cause foot drop unless there is a compartment syndrome, but based on the text of the question, fibular neck fracture is the intended answer.",
      "pages": [
        262,
        302
      ],
      "images": [
        {
          "src": "assets/images/pyq/2023/q191-1.jpg",
          "width": 439,
          "height": 630,
          "alt": "Figure accompanying the question"
        }
      ]
    },
    {
      "number": 192,
      "statement": "A pediatric patient presented with a swelling over the head that has been present since birth (for the past two months). What is the most likely diagnosis?",
      "options": [
        "Cephalhematoma",
        "Caput succedaneum",
        "Soft tissue swelling",
        "None of the above"
      ],
      "correct": "A",
      "answerText": "(A) Cephalhematoma",
      "explanation": "This question describes a head swelling in a newborn. Caput succedaneum is edema of the scalp that is present at birth, pits on pressure, and importantly, crosses suture lines. It resolves within a few days. A cephalhematoma, on the other hand, is a subperiosteal collection of blood. It appears a few hours after birth, is firm, and is strictly limited by the suture lines of the skull bone it overlies. Critically, a cephalhematoma can take several weeks to months to resolve. The history of a swelling that has been present for 2 months since birth makes caput succedaneum impossible. This prolonged duration is highly characteristic of a cephalhematoma, which may even calcify over time.",
      "pages": [
        262,
        302
      ]
    },
    {
      "number": 193,
      "statement": "A construction worker developed a persistent cough and shortness of breath and was later diagnosed with mesothelioma. What is the most likely underlying diagnosis or cause of this condition?",
      "options": [
        "Asbestosis",
        "Lung cancer",
        "COPD",
        "Chronic Bronchitis"
      ],
      "correct": "A",
      "answerText": "(A) Asbestosis",
      "explanation": "The development of mesothelioma, a rare and aggressive cancer of the pleura, is almost exclusively linked to prior exposure to asbestos. Construction work is a high-risk occupation for asbestos exposure. The patients respiratory symptoms (cough and shortness of breath) are likely due to the underlying interstitial lung disease caused by the inhalation of asbestos fibers, which is known as asbestosis. Asbestosis is a form of pulmonary fibrosis. Therefore, the overall diagnosis, encompassing both the benign fibrotic lung disease and the resulting malignancy, is asbestosis. While the patient also has cancer, the term asbestosis refers to the underlying pneumoconiosis that led to the development of mesothelioma.",
      "pages": [
        262,
        302
      ]
    }
  ],
  "Psychiatry": [
    {
      "number": 195,
      "statement": "A male patient with a history of marital conflicts presented with complaints of premature ejaculation. Which of the following non-pharmacological methods can be useful in managing this condition?",
      "options": [
        "Squeeze technique",
        "CBT",
        "Exposure and responsive prevention",
        "Sensate focus technique"
      ],
      "correct": "A",
      "answerText": "(A) Squeeze technique",
      "explanation": "Premature (early) ejaculation is a common male sexual dysfunction. A cornerstone of non-pharmacological, behavioral therapy for this condition is the squeeze technique, developed by Masters and Johnson. This technique involves the man or his partner stimulating the penis until he feels the urge to ejaculate. At that point, the partner firmly squeezes the head of the penis for several seconds, which diminishes the ejaculatory urge. This process is repeated multiple times before allowing ejaculation to occur. The goal is to help the man gain better awareness of his pre-ejaculatory sensations and develop voluntary control over the ejaculatory reflex. Sensate focus (D) is a technique used more for arousal disorders and erectile dysfunction.",
      "pages": [
        262,
        301
      ]
    },
    {
      "number": 196,
      "statement": "A patient diagnosed with schizophrenia did not respond to treatment with haloperidol and thioridazine. He was started on another medication, after which he developed side effects such as excessive salivation (sialorrhea), dyslipidemia, and hyperglycemia. Which drug was most likely initiated?",
      "options": [
        "Clozapine",
        "Risperidone",
        "Aripiprazole",
        "Ziprasidone"
      ],
      "correct": "A",
      "answerText": "(A) Clozapine",
      "explanation": "This patient has treatment-resistant schizophrenia, defined by the failure to respond to adequate trials of at least two different antipsychotic medications (haloperidol and thioridazine). The drug of choice and the only medication approved for treatment-resistant schizophrenia is clozapine. Furthermore, the side effect profile described is highly characteristic of clozapine. It is known for causing significant metabolic side effects, including dyslipidemia and hyperglycemia (risk of new-onset diabetes). Uniquely among antipsychotics, it frequently causes sialorrhea (excessive salivation), whereas most others tend to cause dry mouth.",
      "pages": [
        262,
        301
      ]
    },
    {
      "number": 197,
      "statement": "A 75-year-old woman has difficulty performing daily activities and presents with resting tremors, rigidity, visual hallucinations, and episodes of staring into space. Lewy bodies are identified on examination. What is the most likely diagnosis?",
      "options": [
        "Parkinson",
        "Alzheimer disease",
        "Prion disease",
        "Dementia with Lewy bodies"
      ],
      "correct": "D",
      "answerText": "(D) Dementia with Lewy bodies",
      "explanation": "The patient presents with resting tremors, rigidity, visual hallucinations, and cognitive impairment affecting daily activities, which are key features of Dementia with Lewy bodies. This condition is characterized by the presence of Lewy bodies in neurons of the brain.\nLewy bodies are abnormal protein aggregates mainly composed of Alpha-synuclein. Their accumulation leads to neuronal degeneration, especially in the cerebral cortex and brainstem. Clinically, dementia with Lewy bodies presents with a combination of cognitive decline, fluctuating attention, recurrent visual hallucinations, and parkinsonian motor features such as tremor and rigidity.\nA distinguishing feature of this disease is early visual hallucinations and fluctuating cognition, which helps differentiate it from Alzheimer disease, where memory loss is usually the earliest symptom. Although Parkinson disease also has Lewy bodies, dementia typically develops later in its course.\nThus, the combination of parkinsonian symptoms, dementia, hallucinations, and Lewy bodies strongly indicates Dementia with Lewy bodies.",
      "pages": [
        261,
        301
      ]
    }
  ]
});
export default [...entries, ...dailyPapers.filter(q => q.examYear === 2023)].sort((a, b) => a.number! - b.number!);
