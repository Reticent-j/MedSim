export const SPECIALTIES = [
  { id: 'er',    label: 'Emergency Room',       desc: 'High-acuity, time-critical presentations',          color: '#ef4444', bg: 'rgba(239,68,68,.12)',   border: 'rgba(239,68,68,.3)'   },
  { id: 'rheum', label: 'Rheumatology',         desc: 'Autoimmune & inflammatory conditions',              color: '#8b5cf6', bg: 'rgba(139,92,246,.12)',  border: 'rgba(139,92,246,.3)'  },
  { id: 'onc',   label: 'Oncology',             desc: 'Malignancy diagnosis & management',                 color: '#f59e0b', bg: 'rgba(245,158,11,.12)',  border: 'rgba(245,158,11,.3)'  },
  { id: 'ortho', label: 'Orthopedics',          desc: 'Bone, joint & musculoskeletal injury',              color: '#10b981', bg: 'rgba(16,185,129,.12)',  border: 'rgba(16,185,129,.3)'  },
  { id: 'id',    label: 'Infectious Disease',   desc: 'Travel medicine, tropical & rare pathogens',        color: '#0891b2', bg: 'rgba(8,145,178,.12)',   border: 'rgba(8,145,178,.3)'   },
]

export const CASES = [
  // ══════════════════════════════════════════════════════
  //  EMERGENCY ROOM
  // ══════════════════════════════════════════════════════

  // ─── ER Case 1: Robert M. — Anterior STEMI ────────────
  {
    id: 1, specialty: 'er',
    meta: { title: 'Chest Pain', tagLabels: [{ t: 'URGENT', cls: 'urgent' }, { t: 'Cardiology', cls: '' }] },
    patient: {
      name: 'Robert M.', age: 54, sex: 'Male', avatar: 'male', emoji: '👨',
      chiefComplaint: 'Severe chest pain radiating to left arm, 2 hours',
      vitals: [
        { label: 'BP',    value: '158/96',  status: 'abnormal'   },
        { label: 'HR',    value: '108 bpm', status: 'abnormal'   },
        { label: 'RR',    value: '20 /min', status: 'borderline' },
        { label: 'Temp',  value: '37.0 °C', status: 'normal'     },
        { label: 'O₂ Sat',value: '94%',     status: 'abnormal'   },
        { label: 'Pain',  value: '9 / 10',  status: 'abnormal'   },
      ],
      history: '54-year-old male presents with substernal crushing chest pain that started approximately 2 hours ago. Pain radiates to the left arm and jaw. Patient is diaphoretic and appears pale and anxious. He denies loss of consciousness.',
      pmh: 'Hypertension, Type 2 Diabetes Mellitus, Hyperlipidemia',
      medications: 'Metformin 1000 mg BID, Lisinopril 10 mg QD, Atorvastatin 40 mg QD',
      allergies: 'Penicillin (rash)',
      social: '30-pack-year smoker, occasional alcohol',
      family: 'Father had MI at age 58',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_cardiac', label: 'Cardiac & Lung Exam', icon: 'exam', cost: null, points: 30,
          finding: { type: 'exam', title: 'Physical Examination', subtitle: 'Cardiac & Pulmonary',
            results: [
              { name: 'General',           val: 'Diaphoretic, pale, in obvious distress',  flag: 'critical'  },
              { name: 'Heart sounds',      val: 'S1 S2 present, no murmurs',               flag: 'normal'    },
              { name: 'Lung auscultation', val: 'Bibasilar crackles noted',                flag: 'abnormal'  },
              { name: 'JVD',               val: 'Mild JVD present',                        flag: 'abnormal'  },
            ],
            note: { type: 'alert', text: 'Bibasilar crackles and JVD suggest early pulmonary edema — consider acute left heart failure.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_ekg', label: '12-Lead EKG', icon: 'lab', cost: 'stat', points: 50,
          finding: { type: 'labs', title: '12-Lead Electrocardiogram', subtitle: 'Stat',
            results: [
              { name: 'Rhythm',      val: 'Sinus tachycardia',               flag: 'abnormal' },
              { name: 'ST segments', val: 'ST elevation V1–V4 (2–4 mm)',      flag: 'critical' },
              { name: 'Q waves',     val: 'Early Q waves V1–V3',              flag: 'critical' },
              { name: 'T waves',     val: 'Hyperacute T waves V1–V4',         flag: 'critical' },
            ],
            note: { type: 'alert', text: 'ST elevation in V1–V4 consistent with anterior STEMI. Door-to-balloon time must be under 90 minutes.' } } },
        { id: 'lab_cardiac', label: 'Cardiac Enzymes (Troponin, CK-MB)', icon: 'lab', cost: 'stat', points: 40,
          finding: { type: 'labs', title: 'Cardiac Biomarkers', subtitle: 'Stat Panel',
            results: [
              { name: 'Troponin I', val: '4.8 ng/mL', ref: '(ref < 0.04)', flag: 'critical' },
              { name: 'CK-MB',      val: '68 U/L',    ref: '(ref < 25)',    flag: 'critical' },
              { name: 'BNP',        val: '420 pg/mL', ref: '(ref < 100)',   flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Troponin markedly elevated — myocardial necrosis confirmed. Combined with EKG, anterior STEMI is confirmed.' } } },
        { id: 'lab_cbc', label: 'CBC / BMP', icon: 'lab', cost: null, points: 15,
          finding: { type: 'labs', title: 'Complete Blood Count & Metabolic Panel', subtitle: 'Routine',
            results: [
              { name: 'WBC',        val: '11.2 × 10³/µL', ref: '(4.5–11.0)', flag: 'abnormal' },
              { name: 'Creatinine', val: '1.3 mg/dL',      ref: '(0.7–1.2)', flag: 'abnormal' },
              { name: 'Glucose',    val: '198 mg/dL',       ref: '(70–100)',  flag: 'abnormal' },
            ],
            note: { type: '', text: 'Borderline creatinine — consider contrast load with PCI.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_cxr', label: 'Chest X-Ray (PA/Lateral)', icon: 'imaging', cost: 'stat', points: 20,
          finding: { type: 'imaging', title: 'Chest X-Ray', subtitle: 'PA & Lateral',
            results: [
              { name: 'Cardiac silhouette',  val: 'Mildly enlarged (CTR 0.56)',          flag: 'abnormal' },
              { name: 'Lung fields',         val: 'Bilateral interstitial infiltrates',   flag: 'critical' },
              { name: 'Pleural effusion',    val: 'Small bilateral',                      flag: 'abnormal' },
            ],
            note: { type: 'warn', text: 'Pulmonary edema pattern supports acute decompensated heart failure secondary to STEMI.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_cardio', label: 'Cardiology Consult', icon: 'consult', cost: 'stat', points: 30,
          finding: { type: 'consult', title: 'Cardiology Consult', subtitle: 'Dr. Rivera, Interventional Cardiology',
            results: [
              { name: 'Recommendation', val: 'Activate cath lab immediately',           flag: 'critical' },
              { name: 'Plan',           val: 'Primary PCI (door-to-balloon < 90 min)',  flag: 'critical' },
              { name: 'Medications',    val: 'Aspirin 325mg, Heparin, Clopidogrel',     flag: 'normal'   },
            ],
            note: { type: 'alert', text: 'Anterior STEMI confirmed. Emergent PCI required. Transfer to cath lab now.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_er_stemi', label: 'Activate STEMI Protocol — Transfer to ER', icon: 'er', outcome: 'correct', points: 200,
        feedback: { title: 'Correct Diagnosis & Management', grade: 'Excellent',
          body: 'Robert has an anterior STEMI. Immediate STEMI protocol activation and transfer for primary PCI is the correct treatment. Time is myocardium — every minute of delay increases infarct size.' } },
      { id: 'disp_admit', label: 'Admit to Cardiology Ward', icon: 'admit', outcome: 'incorrect', points: -80,
        feedback: { title: 'Incorrect — Time-Critical Emergency', grade: 'Critical Error',
          body: 'Admitting to the cardiology ward is far too slow for a STEMI. This patient needs emergent PCI within 90 minutes. Standard admission bypasses cath lab activation and leads to irreversible myocardial damage.' } },
      { id: 'disp_home', label: 'Send Home with Nitroglycerin PRN', icon: 'home', outcome: 'incorrect', points: -150,
        feedback: { title: 'Dangerous Disposition', grade: 'Fatal Error',
          body: 'Sending home a patient with an active STEMI is a fatal error. EKG, troponins, and clinical presentation confirm MI requiring emergent intervention.' } },
      { id: 'disp_stress', label: 'Order Stress Test — Follow up in 1 week', icon: 'rx', outcome: 'incorrect', points: -120,
        feedback: { title: 'Inappropriate Outpatient Management', grade: 'Critical Error',
          body: 'Stress testing is absolutely contraindicated in acute STEMI. The diagnosis is confirmed. Outpatient management will be fatal.' } },
    ],
    correctDisposition: 'disp_er_stemi',
    criticalActions: ['lab_ekg', 'lab_cardiac'],
  },

  // ─── ER Case 2: Maya T. — Bacterial Meningitis ────────
  {
    id: 2, specialty: 'er',
    meta: { title: 'Severe Headache & Fever', tagLabels: [{ t: 'URGENT', cls: 'urgent' }, { t: 'Neurology', cls: '' }] },
    patient: {
      name: 'Maya T.', age: 23, sex: 'Female', avatar: 'female', emoji: '👩',
      chiefComplaint: 'Worst headache of life, high fever, neck stiffness — 6 hours',
      vitals: [
        { label: 'BP',     value: '118/74',  status: 'normal'     },
        { label: 'HR',     value: '114 bpm', status: 'abnormal'   },
        { label: 'RR',     value: '22 /min', status: 'borderline' },
        { label: 'Temp',   value: '39.4 °C', status: 'abnormal'   },
        { label: 'O₂ Sat', value: '98%',     status: 'normal'     },
        { label: 'Pain',   value: '10 / 10', status: 'abnormal'   },
      ],
      history: '23-year-old college student with sudden onset "worst headache of my life," high fever, photophobia, and neck stiffness over 6 hours. She appears confused and lethargic. Roommate reports a mild URI 3 days ago.',
      pmh: 'No significant past medical history',
      medications: 'Oral contraceptive pill',
      allergies: 'NKDA',
      social: 'Non-smoker, social drinker, college dormitory resident',
      family: 'Non-contributory',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_neuro', label: 'Neurological Exam', icon: 'exam', cost: null, points: 50,
          finding: { type: 'exam', title: 'Neurological Examination', subtitle: 'Complete',
            results: [
              { name: 'Mental status',     val: 'Confused, disoriented to time and place',         flag: 'critical' },
              { name: "Kernig's sign",     val: 'POSITIVE — pain on knee extension',               flag: 'critical' },
              { name: "Brudzinski's sign", val: 'POSITIVE — hip/knee flex with neck flex',         flag: 'critical' },
              { name: 'Nuchal rigidity',   val: 'Severe — cannot touch chin to chest',             flag: 'critical' },
              { name: 'Photophobia',       val: 'Marked',                                           flag: 'abnormal' },
              { name: 'Papilledema',       val: 'Not present on fundoscopy',                        flag: 'normal'   },
            ],
            note: { type: 'alert', text: "Classic meningismus triad: fever + headache + nuchal rigidity. Kernig's and Brudzinski's signs strongly suggest bacterial meningitis." } } },
        { id: 'pe_skin', label: 'Skin & General Exam', icon: 'exam', cost: null, points: 40,
          finding: { type: 'exam', title: 'Skin & General Examination', subtitle: '',
            results: [
              { name: 'Skin',    val: 'Non-blanching petechial rash — trunk and legs', flag: 'critical'  },
              { name: 'General', val: 'Acutely ill, febrile, diaphoretic',             flag: 'abnormal'  },
            ],
            note: { type: 'alert', text: 'Non-blanching petechiae are a medical emergency — highly suspicious for meningococcemia. Do NOT delay antibiotic therapy.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_cbc', label: 'CBC with Differential', icon: 'lab', cost: 'stat', points: 30,
          finding: { type: 'labs', title: 'Complete Blood Count', subtitle: 'Stat',
            results: [
              { name: 'WBC',         val: '22.4 × 10³/µL', ref: '(4.5–11.0)', flag: 'critical' },
              { name: 'Neutrophils', val: '89%',            ref: '— Bands 12%',flag: 'critical' },
              { name: 'Platelets',   val: '88 × 10³/µL',   ref: '(150–400)',   flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Severe leukocytosis with bandemia and thrombocytopenia — sepsis with possible DIC.' } } },
        { id: 'lab_bmp', label: 'BMP / Lactic Acid', icon: 'lab', cost: 'stat', points: 30,
          finding: { type: 'labs', title: 'Basic Metabolic Panel & Lactate', subtitle: 'Stat',
            results: [
              { name: 'Lactic acid',   val: '3.8 mmol/L', ref: '(0.5–2.2)', flag: 'critical' },
              { name: 'Procalcitonin', val: '48 ng/mL',   ref: '(<0.5)',    flag: 'critical' },
              { name: 'Glucose',       val: '58 mg/dL',   ref: '(70–100)',  flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Elevated lactate and procalcitonin consistent with severe bacterial sepsis.' } } },
        { id: 'lab_culture', label: 'Blood Cultures × 2', icon: 'lab', cost: 'stat', points: 25,
          finding: { type: 'labs', title: 'Blood Cultures', subtitle: 'Aerobic & Anaerobic, 2 sets',
            results: [
              { name: 'Gram stain', val: 'Preliminary: Gram-negative diplococci', flag: 'critical' },
              { name: 'Status',     val: 'Pending (results in 24–72 hrs)',          flag: 'normal'   },
            ],
            note: { type: 'alert', text: 'Draw cultures BEFORE antibiotics when possible, but do NOT delay antibiotics for culture results.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_ct', label: 'CT Head (non-contrast)', icon: 'imaging', cost: 'urgent', points: 25,
          finding: { type: 'imaging', title: 'CT Head — Non-contrast', subtitle: 'Urgent',
            results: [
              { name: 'Mass lesion',          val: 'None identified',                    flag: 'normal'   },
              { name: 'Midline shift',        val: 'Absent',                             flag: 'normal'   },
              { name: 'Hydrocephalus',        val: 'Mild communicating hydrocephalus',   flag: 'abnormal' },
              { name: 'Meningeal enhancement',val: 'Diffuse',                            flag: 'critical' },
            ],
            note: { type: '', text: 'No contraindication to lumbar puncture. Mild hydrocephalus consistent with meningitis.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_id', label: 'Infectious Disease Consult', icon: 'consult', cost: 'urgent', points: 30,
          finding: { type: 'consult', title: 'Infectious Disease Consult', subtitle: 'Dr. Patel, Infectious Disease',
            results: [
              { name: 'Diagnosis',   val: 'Bacterial meningitis — likely meningococcal',                  flag: 'critical' },
              { name: 'Antibiotics', val: 'Ceftriaxone 2g IV q12h + Vancomycin + Dexamethasone',          flag: 'critical' },
              { name: 'Isolation',   val: 'Droplet precautions immediately',                               flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Do not wait for LP results. Transfer to ED/ICU immediately. Notify Public Health.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_er_mening', label: 'Emergency — Transfer to ER / ICU', icon: 'er', outcome: 'correct', points: 200,
        feedback: { title: 'Life-Saving Decision', grade: 'Excellent',
          body: 'Maya has bacterial meningitis, most likely meningococcal given the petechial rash. Immediate IV antibiotics before or during transfer and ICU-level monitoring is correct. Every hour of delay worsens outcome.' } },
      { id: 'disp_lp_office', label: 'Perform LP Here — Monitor in Office', icon: 'rx', outcome: 'partial', points: -50,
        feedback: { title: 'Partial Credit — Wrong Setting', grade: 'Incomplete',
          body: 'Obtaining CSF is the right instinct, but LP in a primary care office is insufficient. This patient is critically ill and requires IV antibiotics, ICU monitoring, and emergent transfer.' } },
      { id: 'disp_home_mening', label: 'Send Home — Viral Meningitis Presumed', icon: 'home', outcome: 'incorrect', points: -200,
        feedback: { title: 'Fatal Error — Do Not Dismiss', grade: 'Fatal Error',
          body: 'Non-blanching petechiae, positive meningismus signs, WBC of 22k, and gram-negative diplococci all point to life-threatening bacterial meningitis. Sending home is catastrophic.' } },
      { id: 'disp_observe', label: 'Admit — General Ward × 24 hrs', icon: 'admit', outcome: 'incorrect', points: -100,
        feedback: { title: 'Insufficient Level of Care', grade: 'Significant Error',
          body: 'General ward admission with oral antibiotics is inadequate. This patient requires ICU-level care, IV broad-spectrum antibiotics, and neurological monitoring.' } },
    ],
    correctDisposition: 'disp_er_mening',
    criticalActions: ['pe_neuro', 'pe_skin', 'lab_cbc'],
  },

  // ─── ER Case 3: Carlos R. — Acute Appendicitis ────────
  {
    id: 3, specialty: 'er',
    meta: { title: 'Abdominal Pain', tagLabels: [{ t: 'MODERATE', cls: 'moderate' }, { t: 'Surgical', cls: '' }] },
    patient: {
      name: 'Carlos R.', age: 31, sex: 'Male', avatar: 'male', emoji: '👨',
      chiefComplaint: 'Worsening RLQ abdominal pain, nausea × 18 hours',
      vitals: [
        { label: 'BP',     value: '126/80',  status: 'normal'     },
        { label: 'HR',     value: '96 bpm',  status: 'borderline' },
        { label: 'RR',     value: '16 /min', status: 'normal'     },
        { label: 'Temp',   value: '38.1 °C', status: 'borderline' },
        { label: 'O₂ Sat', value: '99%',     status: 'normal'     },
        { label: 'Pain',   value: '7 / 10',  status: 'abnormal'   },
      ],
      history: '31-year-old male with periumbilical pain migrating to the right lower quadrant over 18 hours. Associated nausea, two episodes of vomiting, and anorexia. Pain worsens with movement.',
      pmh: 'No significant medical history',
      medications: 'None', allergies: 'NKDA',
      social: 'Non-smoker, occasional alcohol. Software engineer.',
      family: 'Non-contributory',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_abdomen', label: 'Abdominal Exam', icon: 'exam', cost: null, points: 50,
          finding: { type: 'exam', title: 'Abdominal Examination', subtitle: 'Complete',
            results: [
              { name: "McBurney's point",  val: 'POSITIVE — direct tenderness',             flag: 'critical'  },
              { name: 'Rebound tenderness',val: 'POSITIVE — RLQ',                           flag: 'critical'  },
              { name: "Rovsing's sign",    val: 'POSITIVE — RLQ pain with LLQ palpation',  flag: 'critical'  },
              { name: 'Psoas sign',        val: 'POSITIVE',                                  flag: 'abnormal'  },
              { name: 'Bowel sounds',      val: 'Hypoactive throughout',                     flag: 'abnormal'  },
            ],
            note: { type: 'alert', text: "McBurney's point + rebound + Rovsing's = classic appendicitis triad. Alvarado score ≥ 7." } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_cbc_c', label: 'CBC with Differential', icon: 'lab', cost: null, points: 30,
          finding: { type: 'labs', title: 'Complete Blood Count', subtitle: 'With Differential',
            results: [
              { name: 'WBC',         val: '14.8 × 10³/µL', ref: '(4.5–11.0)', flag: 'critical' },
              { name: 'Neutrophils', val: '82%',            ref: '— Bands 6%', flag: 'abnormal' },
            ],
            note: { type: 'warn', text: 'Leukocytosis with left shift supports acute inflammation.' } } },
        { id: 'lab_crp_c', label: 'CRP / ESR', icon: 'lab', cost: null, points: 15,
          finding: { type: 'labs', title: 'Inflammatory Markers', subtitle: '',
            results: [
              { name: 'CRP', val: '88 mg/L',  ref: '(<5)',    flag: 'critical' },
              { name: 'ESR', val: '62 mm/hr', ref: '(0–22)', flag: 'abnormal' },
            ],
            note: { type: '', text: 'Significantly elevated CRP supports acute inflammation.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_us', label: 'Abdominal Ultrasound', icon: 'imaging', cost: null, points: 40,
          finding: { type: 'imaging', title: 'Abdominal Ultrasound', subtitle: 'RLQ focused',
            results: [
              { name: 'Appendix',             val: 'Visualized — diameter 9.2 mm (> 6 mm abnormal)', flag: 'critical' },
              { name: 'Compressibility',      val: 'Non-compressible',                                flag: 'critical' },
              { name: 'Periappendiceal fat',  val: 'Increased echogenicity — stranding',              flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Dilated, non-compressible appendix >6mm — appendicitis confirmed on ultrasound.' } } },
        { id: 'img_ct_abd', label: 'CT Abdomen & Pelvis', icon: 'imaging', cost: 'urgent', points: 30,
          finding: { type: 'imaging', title: 'CT Abdomen/Pelvis', subtitle: 'With IV Contrast',
            results: [
              { name: 'Appendix',   val: '8.8 mm, wall thickening, periappendiceal fat stranding', flag: 'critical' },
              { name: 'Perforation',val: 'No free air — intact appendix',                           flag: 'normal'   },
            ],
            note: { type: '', text: 'CT confirms acute uncomplicated appendicitis without perforation.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_surgery', label: 'General Surgery Consult', icon: 'consult', cost: 'urgent', points: 40,
          finding: { type: 'consult', title: 'General Surgery Consult', subtitle: 'Dr. Chen, General Surgery',
            results: [
              { name: 'Assessment', val: 'Acute appendicitis — uncomplicated',              flag: 'critical' },
              { name: 'Plan',       val: 'Laparoscopic appendectomy within 6–12 hours',    flag: 'critical' },
              { name: 'Pre-op',     val: 'NPO, IV fluids, IV antibiotics (pip-tazo)',       flag: 'abnormal' },
            ],
            note: { type: '', text: 'Transfer to ED for pre-op workup and OR scheduling.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_er_appy', label: 'Transfer to ER — Surgical Consult', icon: 'er', outcome: 'correct', points: 200,
        feedback: { title: 'Correct Management', grade: 'Excellent',
          body: 'Carlos has acute uncomplicated appendicitis. Transfer for surgical consult and laparoscopic appendectomy is correct. IV hydration, NPO, and IV antibiotics should be initiated before transfer.' } },
      { id: 'disp_observe_c', label: 'Admit for Antibiotics — Watch Overnight', icon: 'admit', outcome: 'partial', points: 40,
        feedback: { title: 'Partial Credit — Conservative Approach', grade: 'Acceptable',
          body: 'Non-operative management with antibiotics alone is an accepted alternative in some centers (APPAC trial). However, surgical consultation remains the standard of care.' } },
      { id: 'disp_home_c', label: 'Send Home — Musculoskeletal Pain', icon: 'home', outcome: 'incorrect', points: -150,
        feedback: { title: 'Dangerous Misdiagnosis', grade: 'Significant Error',
          body: "McBurney's tenderness, positive Rovsing's, leukocytosis, and imaging confirming appendicitis make dismissal dangerous. Risk of perforation and peritonitis." } },
      { id: 'disp_gi', label: 'GI Consult — Scope for Diagnosis', icon: 'rx', outcome: 'incorrect', points: -60,
        feedback: { title: 'Incorrect Pathway', grade: 'Incorrect',
          body: 'Colonoscopy is contraindicated in acute appendicitis — insufflation pressure could precipitate perforation. Surgical consultation is the correct next step.' } },
    ],
    correctDisposition: 'disp_er_appy',
    criticalActions: ['pe_abdomen', 'lab_cbc_c', 'img_us'],
  },

  // ─── ER Case 4: Diana L. — Pulmonary Embolism ─────────
  {
    id: 4, specialty: 'er',
    meta: { title: 'Dyspnea & Chest Pain', tagLabels: [{ t: 'URGENT', cls: 'urgent' }, { t: 'Pulmonary', cls: '' }] },
    patient: {
      name: 'Diana L.', age: 38, sex: 'Female', avatar: 'female', emoji: '👩',
      chiefComplaint: 'Sudden onset dyspnea and right-sided pleuritic chest pain × 3 hours',
      vitals: [
        { label: 'BP',     value: '108/68',  status: 'borderline' },
        { label: 'HR',     value: '118 bpm', status: 'abnormal'   },
        { label: 'RR',     value: '26 /min', status: 'abnormal'   },
        { label: 'Temp',   value: '37.2 °C', status: 'normal'     },
        { label: 'O₂ Sat', value: '91%',     status: 'abnormal'   },
        { label: 'Pain',   value: '6 / 10',  status: 'abnormal'   },
      ],
      history: '38-year-old female who returned from a 14-hour international flight 2 days ago. Sudden onset pleuritic right-sided chest pain and progressive dyspnea. She is on OCP and had no prior VTE history. Right calf has been swollen and tender for 3 days.',
      pmh: 'No prior VTE, migraine without aura',
      medications: 'Oral contraceptive pill, sumatriptan PRN',
      allergies: 'NKDA',
      social: 'Non-smoker, social drinker, marketing executive (frequent long-haul flights)',
      family: 'Mother had DVT postpartum',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_resp', label: 'Respiratory & Cardiac Exam', icon: 'exam', cost: null, points: 30,
          finding: { type: 'exam', title: 'Respiratory & Cardiac Examination', subtitle: '',
            results: [
              { name: 'Respiratory',    val: 'Tachypneic, accessory muscle use',               flag: 'abnormal' },
              { name: 'Breath sounds',  val: 'Decreased right lower lobe, pleural rub',        flag: 'abnormal' },
              { name: 'Cardiac',        val: 'Tachycardia, loud P2 (right heart strain)',       flag: 'abnormal' },
              { name: 'JVD',            val: 'Mild JVD present',                               flag: 'abnormal' },
            ],
            note: { type: 'warn', text: 'Tachycardia + tachypnea + hypoxia in the context of recent long-haul travel = PE until proven otherwise.' } } },
        { id: 'pe_ext', label: 'Lower Extremity Exam', icon: 'exam', cost: null, points: 25,
          finding: { type: 'exam', title: 'Lower Extremity Examination', subtitle: '',
            results: [
              { name: 'Right calf',     val: 'Erythema, warmth, pitting edema, tender to palpation', flag: 'critical' },
              { name: 'Homans sign',    val: 'Positive (limited sensitivity/specificity)',             flag: 'abnormal' },
              { name: 'Left leg',       val: 'Normal',                                                 flag: 'normal'   },
              { name: 'Circumference',  val: 'Right calf 3 cm larger than left',                      flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Clinical DVT in right lower extremity — high Wells Score. Consider DVT/PE diagnosis.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_ddimer', label: 'D-Dimer (High Sensitivity)', icon: 'lab', cost: 'stat', points: 40,
          finding: { type: 'labs', title: 'D-Dimer', subtitle: 'Stat',
            results: [
              { name: 'D-Dimer', val: '6,480 ng/mL', ref: '(normal < 500)', flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Markedly elevated D-Dimer (13x upper limit of normal). Warrants urgent CTPA. D-Dimer alone does not rule in PE — imaging is required.' } } },
        { id: 'lab_abg', label: 'Arterial Blood Gas', icon: 'lab', cost: 'stat', points: 25,
          finding: { type: 'labs', title: 'Arterial Blood Gas', subtitle: 'Room Air',
            results: [
              { name: 'pH',    val: '7.48',      ref: '(7.35–7.45)', flag: 'abnormal' },
              { name: 'PaO₂', val: '62 mmHg',   ref: '(80–100)',    flag: 'critical' },
              { name: 'PaCO₂',val: '30 mmHg',   ref: '(35–45)',     flag: 'abnormal' },
              { name: 'HCO₃', val: '23 mEq/L',  ref: '(22–26)',     flag: 'normal'   },
            ],
            note: { type: 'warn', text: 'Hypoxemia with respiratory alkalosis (hyperventilation) — classic pattern for PE.' } } },
        { id: 'lab_troponin', label: 'Troponin / BNP', icon: 'lab', cost: 'stat', points: 20,
          finding: { type: 'labs', title: 'Cardiac Biomarkers', subtitle: '',
            results: [
              { name: 'Troponin I', val: '0.22 ng/mL', ref: '(< 0.04)', flag: 'abnormal' },
              { name: 'BNP',        val: '340 pg/mL',  ref: '(< 100)',  flag: 'critical' },
            ],
            note: { type: 'warn', text: 'Mildly elevated troponin and BNP indicate right heart strain — submassive PE with hemodynamic impact.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_ctpa', label: 'CT Pulmonary Angiography (CTPA)', icon: 'imaging', cost: 'stat', points: 50,
          finding: { type: 'imaging', title: 'CT Pulmonary Angiography', subtitle: 'Stat — Definitive',
            results: [
              { name: 'Right main PA',    val: 'Large filling defect — saddle thrombus extending into right lower lobe arteries', flag: 'critical' },
              { name: 'Left PA',          val: 'No filling defect identified',                                                      flag: 'normal'   },
              { name: 'RV/LV ratio',      val: '1.4 (> 0.9 = RV strain)',                                                          flag: 'critical' },
              { name: 'Hampton\'s hump',  val: 'Right lower lobe peripheral wedge opacity',                                        flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Large right-sided PE with RV strain — submassive (intermediate-risk) PE. Systemic thrombolysis not indicated yet if hemodynamically stable.' } } },
        { id: 'img_echo', label: 'Bedside Echocardiogram', icon: 'imaging', cost: null, points: 20,
          finding: { type: 'imaging', title: 'Transthoracic Echocardiogram', subtitle: 'Bedside',
            results: [
              { name: 'RV size',       val: 'Dilated (RV:LV ratio > 1)',               flag: 'critical' },
              { name: 'RV function',   val: 'Reduced — McConnell\'s sign present',     flag: 'critical' },
              { name: 'Septal motion', val: 'D-sign — paradoxical septal bowing',      flag: 'abnormal' },
              { name: 'LV function',   val: 'Preserved EF ~55%',                       flag: 'normal'   },
            ],
            note: { type: 'warn', text: 'RV dilation and McConnell\'s sign confirm hemodynamic impact of PE. Consider catheter-directed thrombolysis if deteriorates.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_pulm', label: 'Pulmonology / PERT Consult', icon: 'consult', cost: 'urgent', points: 25,
          finding: { type: 'consult', title: 'Pulmonary Embolism Response Team', subtitle: 'Dr. Morrison, Pulmonology',
            results: [
              { name: 'Risk stratification', val: 'Submassive (intermediate-high risk) PE',                  flag: 'critical' },
              { name: 'Anticoagulation',     val: 'Heparin infusion — weight-based dosing immediately',      flag: 'critical' },
              { name: 'Monitoring',          val: 'ICU admission, serial troponins and echo',                flag: 'abnormal' },
              { name: 'Escalation',          val: 'Catheter-directed thrombolysis if deterioration occurs',  flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Anticoagulate immediately. Systemic thrombolysis reserved for hemodynamic collapse. Monitor closely in ICU.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_anticoag_icu', label: 'Anticoagulate Now — Transfer to ER/ICU', icon: 'er', outcome: 'correct', points: 200,
        feedback: { title: 'Correct Management', grade: 'Excellent',
          body: 'Diana has a submassive PE with right heart strain. Immediate anticoagulation (heparin) and transfer to the ER/ICU for monitoring and PERT consultation is the correct approach. Systemic thrombolysis is on standby if she deteriorates hemodynamically.' } },
      { id: 'disp_o2_observe', label: 'Supplemental O₂ — Observe in Office', icon: 'admit', outcome: 'partial', points: -40,
        feedback: { title: 'Inadequate — ICU-Level Monitoring Required', grade: 'Significant Error',
          body: 'Supplemental oxygen alone is insufficient for submassive PE with RV strain. This patient requires anticoagulation, ICU monitoring, and PERT consultation. Office-based observation risks hemodynamic collapse.' } },
      { id: 'disp_abx', label: 'Antibiotics — Presumed Pneumonia', icon: 'rx', outcome: 'incorrect', points: -120,
        feedback: { title: 'Incorrect Diagnosis', grade: 'Critical Error',
          body: 'This is PE, not pneumonia. The pleuritic chest pain, hypoxia, right calf DVT, elevated D-Dimer (6480), and CTPA all confirm PE. Antibiotics will not treat a pulmonary embolism and will delay life-saving anticoagulation.' } },
      { id: 'disp_home_pe', label: 'Send Home — Anxiety / Musculoskeletal', icon: 'home', outcome: 'incorrect', points: -180,
        feedback: { title: 'Dangerous Disposition', grade: 'Fatal Error',
          body: 'This patient has a confirmed large pulmonary embolism with RV strain. Discharging home without anticoagulation is potentially fatal — the patient risks massive PE and cardiac arrest within hours.' } },
    ],
    correctDisposition: 'disp_anticoag_icu',
    criticalActions: ['lab_ddimer', 'img_ctpa', 'pe_ext'],
  },

  // ─── ER Case 5: Marcus T. — Aortic Dissection ─────────
  {
    id: 5, specialty: 'er',
    meta: { title: 'Tearing Chest Pain', tagLabels: [{ t: 'CRITICAL', cls: 'urgent' }, { t: 'Vascular', cls: '' }] },
    patient: {
      name: 'Marcus T.', age: 62, sex: 'Male', avatar: 'male', emoji: '👨',
      chiefComplaint: 'Sudden severe tearing chest pain radiating to the back × 1 hour',
      vitals: [
        { label: 'BP (R)',  value: '188/104', status: 'abnormal'   },
        { label: 'BP (L)',  value: '152/88',  status: 'abnormal'   },
        { label: 'HR',      value: '102 bpm', status: 'abnormal'   },
        { label: 'RR',      value: '20 /min', status: 'borderline' },
        { label: 'O₂ Sat',  value: '97%',     status: 'normal'     },
        { label: 'Pain',    value: '10 / 10', status: 'abnormal'   },
      ],
      history: '62-year-old male with 20-year history of poorly controlled hypertension. Sudden onset "worst pain of my life" — tearing quality, maximum at onset, radiating between shoulder blades. Described as "something ripping inside." No relief with position changes.',
      pmh: 'Hypertension (poorly controlled), bicuspid aortic valve',
      medications: 'Amlodipine 10 mg QD (inconsistently taken)',
      allergies: 'Sulfa drugs (rash)',
      social: 'Non-smoker, drinks 2–3 beers weekly, retired firefighter',
      family: 'Brother died of "aortic aneurysm" at 55',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_cv_dissect', label: 'Cardiovascular Exam (Both Arms)', icon: 'exam', cost: null, points: 40,
          finding: { type: 'exam', title: 'Cardiovascular Examination', subtitle: 'Including Bilateral BP',
            results: [
              { name: 'BP differential', val: '>30 mmHg between right and left arm',   flag: 'critical' },
              { name: 'Heart sounds',    val: 'Diastolic murmur at LLSB (aortic regurgitation)', flag: 'critical' },
              { name: 'Radial pulses',   val: 'Right > Left — pulse deficit left radial',         flag: 'critical' },
              { name: 'Neurological',    val: 'Intact — no focal deficits',                        flag: 'normal'   },
            ],
            note: { type: 'alert', text: 'Pulse differential + BP differential + aortic regurgitation murmur = Type A dissection until proven otherwise. This is a surgical emergency.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_type_screen', label: 'Type & Screen / CBC / Coags', icon: 'lab', cost: 'stat', points: 25,
          finding: { type: 'labs', title: 'Pre-operative Labs', subtitle: 'Stat',
            results: [
              { name: 'Blood type',  val: 'A positive',                   flag: 'normal'   },
              { name: 'Hgb',         val: '14.2 g/dL',                    flag: 'normal'   },
              { name: 'INR',         val: '1.0',                          flag: 'normal'   },
              { name: 'D-Dimer',     val: '4,200 ng/mL', ref: '(< 500)', flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Type & cross for 6 units pRBC. D-Dimer elevated — supports dissection (though non-specific). Prepare patient for OR.' } } },
        { id: 'lab_troponin_d', label: 'Troponin / BMP', icon: 'lab', cost: 'stat', points: 15,
          finding: { type: 'labs', title: 'Cardiac Biomarkers & Metabolic Panel', subtitle: '',
            results: [
              { name: 'Troponin I',  val: '0.18 ng/mL',  ref: '(< 0.04)',  flag: 'abnormal' },
              { name: 'Creatinine',  val: '1.4 mg/dL',   ref: '(0.7–1.2)', flag: 'abnormal' },
            ],
            note: { type: 'warn', text: 'Mild troponin elevation — possible coronary ostium involvement. Renal impairment may reflect renal artery malperfusion.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_cxr_d', label: 'Chest X-Ray (Stat)', icon: 'imaging', cost: 'stat', points: 20,
          finding: { type: 'imaging', title: 'Chest X-Ray', subtitle: 'Portable AP',
            results: [
              { name: 'Mediastinum', val: 'Widened (> 8 cm) — mediastinal widening',   flag: 'critical' },
              { name: 'Aortic knob', val: 'Obscured — loss of aortic contour',          flag: 'critical' },
              { name: 'Lung fields', val: 'Clear bilaterally',                           flag: 'normal'   },
              { name: 'Effusion',    val: 'Small left pleural effusion',                 flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Widened mediastinum is the hallmark of aortic dissection on CXR. Proceed immediately to CTA. Do NOT delay for MRI.' } } },
        { id: 'img_cta', label: 'CT Angiography — Chest/Abdomen/Pelvis', icon: 'imaging', cost: 'stat', points: 50,
          finding: { type: 'imaging', title: 'CT Aortography', subtitle: 'Emergent — Definitive',
            results: [
              { name: 'Dissection type',  val: 'Stanford Type A — ascending aorta involved',       flag: 'critical' },
              { name: 'Intimal flap',     val: 'Present from aortic root to descending thoracic',  flag: 'critical' },
              { name: 'True/False lumen', val: 'False lumen partially thrombosed',                  flag: 'abnormal' },
              { name: 'Pericardium',      val: 'Small hemopericardium present',                     flag: 'critical' },
              { name: 'Coronaries',       val: 'Right coronary ostium involvement',                 flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Stanford Type A dissection — mortality increases 1–2% per hour without surgery. Emergency cardiothoracic surgery consultation IMMEDIATELY.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_cts', label: 'Cardiothoracic Surgery Consult', icon: 'consult', cost: 'stat', points: 40,
          finding: { type: 'consult', title: 'Cardiothoracic Surgery', subtitle: 'Dr. Okafor, CT Surgery',
            results: [
              { name: 'Diagnosis',  val: 'Stanford Type A aortic dissection',               flag: 'critical' },
              { name: 'Plan',       val: 'Emergency open aortic repair — activate OR now',  flag: 'critical' },
              { name: 'Pre-op',     val: 'Target SBP 100–120 mmHg, HR < 60 with esmolol',  flag: 'abnormal' },
              { name: 'Prognosis',  val: 'Without surgery: ~50% mortality at 48 hours',    flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Type A dissection — surgical emergency. Beta-blocker first, then vasodilator to control BP. Transfer to OR.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_cts_surgery', label: 'Emergency CT Surgery — Transfer to OR', icon: 'er', outcome: 'correct', points: 200,
        feedback: { title: 'Correct — Life-Saving Surgical Referral', grade: 'Excellent',
          body: 'Marcus has a Stanford Type A aortic dissection — this is a surgical emergency. Immediate cardiothoracic surgery consultation, blood pressure control with esmolol, and emergency open aortic repair is the correct management. Without surgery, mortality approaches 50% within 48 hours.' } },
      { id: 'disp_anticoag_d', label: 'Anticoagulate — Suspected STEMI', icon: 'rx', outcome: 'incorrect', points: -200,
        feedback: { title: 'Dangerous — Anticoagulation Contraindicated', grade: 'Fatal Error',
          body: 'Anticoagulating a patient with aortic dissection dramatically increases hemorrhagic complications and mortality. The tearing quality of pain, BP differential, and widened mediastinum should distinguish dissection from MI. Heparin in dissection can cause exsanguination.' } },
      { id: 'disp_antihtn', label: 'Antihypertensives — Monitor in Office', icon: 'admit', outcome: 'incorrect', points: -100,
        feedback: { title: 'Insufficient — Surgical Emergency Bypassed', grade: 'Critical Error',
          body: 'While BP control is part of the bridge therapy, monitoring a Type A dissection in a primary care office without CT surgery consultation and OR preparation is dangerous. This patient will die without emergency surgery.' } },
      { id: 'disp_home_d', label: 'Discharge with Pain Management', icon: 'home', outcome: 'incorrect', points: -200,
        feedback: { title: 'Fatal Error', grade: 'Fatal Error',
          body: 'Discharging a patient with an acute Type A aortic dissection is incompatible with survival. This is one of the most immediately life-threatening cardiovascular emergencies in medicine.' } },
    ],
    correctDisposition: 'disp_cts_surgery',
    criticalActions: ['pe_cv_dissect', 'img_cta', 'consult_cts'],
  },

  // ─── ER Case 6: Barbara K. — Acute Ischemic Stroke ────
  {
    id: 6, specialty: 'er',
    meta: { title: 'Sudden Neurological Deficit', tagLabels: [{ t: 'CRITICAL', cls: 'urgent' }, { t: 'Neurology', cls: '' }] },
    patient: {
      name: 'Barbara K.', age: 71, sex: 'Female', avatar: 'female', emoji: '👩',
      chiefComplaint: 'Sudden left-sided facial droop, arm weakness, and slurred speech × 45 minutes',
      vitals: [
        { label: 'BP',     value: '182/98',  status: 'abnormal'   },
        { label: 'HR',     value: '88 bpm',  status: 'normal'     },
        { label: 'RR',     value: '14 /min', status: 'normal'     },
        { label: 'Temp',   value: '36.8 °C', status: 'normal'     },
        { label: 'O₂ Sat', value: '97%',     status: 'normal'     },
        { label: 'GCS',    value: '13 / 15', status: 'abnormal'   },
      ],
      history: '71-year-old female with sudden onset left facial droop, left arm and leg weakness, and dysarthria. Symptoms began 45 minutes ago while watching TV. Last known well is confirmed at 45 minutes. She has a history of atrial fibrillation.',
      pmh: 'Atrial fibrillation, hypertension, hyperlipidemia, type 2 diabetes',
      medications: 'Warfarin 5 mg QD (INR reportedly therapeutic), metoprolol, atorvastatin, metformin',
      allergies: 'NKDA',
      social: 'Non-smoker, former social drinker, retired librarian, lives alone',
      family: 'Mother had stroke at 74',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_nihss', label: 'NIHSS Neurological Assessment', icon: 'exam', cost: null, points: 50,
          finding: { type: 'exam', title: 'NIH Stroke Scale Assessment', subtitle: 'NIHSS Score: 14',
            results: [
              { name: 'Consciousness',   val: '1 — drowsy but arousable',                    flag: 'abnormal' },
              { name: 'Facial palsy',    val: 'Left lower face — partial paralysis',          flag: 'critical' },
              { name: 'Motor arm (L)',   val: 'Grade 2 — drifts before 10 seconds',           flag: 'critical' },
              { name: 'Motor leg (L)',   val: 'Grade 2 — drifts before 5 seconds',            flag: 'critical' },
              { name: 'Sensory',         val: 'Decreased left hemibody',                      flag: 'abnormal' },
              { name: 'Speech',          val: 'Mild dysarthria — words slurred',              flag: 'abnormal' },
              { name: 'Neglect',         val: 'Left-sided hemispatial neglect',               flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'NIHSS 14 — moderate-severe stroke. Right MCA distribution. Last known well 45 min ago — within tPA window (< 4.5 hours). Act NOW.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_glucose_stat', label: 'Stat Glucose (Fingerstick)', icon: 'lab', cost: 'stat', points: 30,
          finding: { type: 'labs', title: 'Fingerstick Blood Glucose', subtitle: 'Stat — Must exclude hypoglycemia',
            results: [
              { name: 'Glucose', val: '148 mg/dL', ref: '(70–100)', flag: 'abnormal' },
            ],
            note: { type: '', text: 'Hypoglycemia excluded as stroke mimic. Glucose is elevated but not a contraindication to tPA.' } } },
        { id: 'lab_coags_stroke', label: 'INR / aPTT / CBC', icon: 'lab', cost: 'stat', points: 25,
          finding: { type: 'labs', title: 'Coagulation & Blood Count', subtitle: 'Stat',
            results: [
              { name: 'INR',         val: '1.2',              ref: '(0.9–1.1)', flag: 'abnormal' },
              { name: 'aPTT',        val: '30 sec',           ref: '(25–35)',   flag: 'normal'   },
              { name: 'Platelets',   val: '224 × 10³/µL',    ref: '(150–400)', flag: 'normal'   },
            ],
            note: { type: '', text: 'INR 1.2 is sub-therapeutic for stroke prevention in AFib — does not contraindicate tPA (threshold < 1.7).' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_ct_head', label: 'CT Head — Non-contrast (Stat)', icon: 'imaging', cost: 'stat', points: 40,
          finding: { type: 'imaging', title: 'CT Head — Non-contrast', subtitle: 'Stat — Rule out hemorrhage',
            results: [
              { name: 'Hemorrhage',      val: 'None identified',                                     flag: 'normal'   },
              { name: 'Early ischemia',  val: 'Subtle hyperdensity right MCA (clot sign)',            flag: 'critical' },
              { name: 'ASPECTS score',   val: '9/10 — favorable for intervention',                   flag: 'normal'   },
              { name: 'Mass/shift',      val: 'None',                                                  flag: 'normal'   },
            ],
            note: { type: 'alert', text: 'No hemorrhage on CT — tPA NOT contraindicated. Hyperdense MCA sign confirms proximal occlusion. Activate stroke protocol immediately.' } } },
        { id: 'img_cta_stroke', label: 'CT Angiography Head & Neck', icon: 'imaging', cost: 'stat', points: 30,
          finding: { type: 'imaging', title: 'CT Angiography', subtitle: 'Head & Neck',
            results: [
              { name: 'Right MCA M1',  val: 'Complete occlusion — proximal right MCA',           flag: 'critical' },
              { name: 'Right ICA',     val: 'Patent',                                              flag: 'normal'   },
              { name: 'Left MCA',      val: 'Patent',                                              flag: 'normal'   },
              { name: 'Collaterals',   val: 'Moderate — leptomeningeal collaterals present',      flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Proximal right MCA occlusion — large vessel occlusion (LVO). Thrombectomy eligible if NIHSS ≥ 6 and within 24 hours of last known well.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_neuro', label: 'Neurology — Stroke Team Consult', icon: 'consult', cost: 'stat', points: 35,
          finding: { type: 'consult', title: 'Stroke Neurology Consult', subtitle: 'Dr. Vasquez, Vascular Neurology',
            results: [
              { name: 'Diagnosis',       val: 'Right MCA ischemic stroke — LVO',                              flag: 'critical' },
              { name: 'tPA eligibility', val: 'ELIGIBLE — within 4.5h window, no contraindications',          flag: 'critical' },
              { name: 'tPA plan',        val: 'Alteplase 0.9 mg/kg IV (max 90mg) — give now',                 flag: 'critical' },
              { name: 'Thrombectomy',    val: 'Proceed to angio suite for mechanical thrombectomy after tPA', flag: 'critical' },
            ],
            note: { type: 'alert', text: '"Time is brain" — 1.9 million neurons die per minute of ischemia. tPA + thrombectomy gives best outcomes. Transfer to stroke unit.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_tpa_thrombectomy', label: 'IV tPA + Thrombectomy — Stroke Unit', icon: 'er', outcome: 'correct', points: 200,
        feedback: { title: 'Optimal Acute Stroke Management', grade: 'Excellent',
          body: 'Barbara is within the 4.5-hour tPA window with an eligible NIHSS, no hemorrhage, and no contraindications. IV alteplase followed by mechanical thrombectomy for the MCA LVO is the gold standard. 1.9 million neurons die per minute of delay — you acted correctly.' } },
      { id: 'disp_aspirin_admit', label: 'Aspirin + Admit — Observation', icon: 'admit', outcome: 'partial', points: -60,
        feedback: { title: 'Missed Reperfusion Window — Partial Credit', grade: 'Significant Error',
          body: 'Antiplatelet therapy and stroke unit admission are appropriate components, but this patient is within the tPA window and has an LVO eligible for thrombectomy. Not offering reperfusion therapy significantly worsens functional outcomes.' } },
      { id: 'disp_heparin_stroke', label: 'Full Anticoagulation — Heparin Infusion', icon: 'rx', outcome: 'incorrect', points: -100,
        feedback: { title: 'Incorrect — Increases Hemorrhagic Transformation', grade: 'Critical Error',
          body: 'Full heparin anticoagulation in acute ischemic stroke is not indicated as primary treatment and significantly increases the risk of hemorrhagic transformation. tPA + thrombectomy is the correct approach for LVO within the window.' } },
      { id: 'disp_home_stroke', label: 'Send Home — Transient Ischemic Attack', icon: 'home', outcome: 'incorrect', points: -200,
        feedback: { title: 'Fatal Error — Active Stroke Cannot Be Dismissed', grade: 'Fatal Error',
          body: 'This patient has an active large vessel occlusion ischemic stroke with NIHSS 14, not a TIA. TIA by definition has complete resolution within 24 hours. This patient has ongoing deficits and an MCA occlusion. Discharge without treatment leads to permanent disability.' } },
    ],
    correctDisposition: 'disp_tpa_thrombectomy',
    criticalActions: ['pe_nihss', 'img_ct_head', 'img_cta_stroke'],
  },

  // ══════════════════════════════════════════════════════
  //  RHEUMATOLOGY
  // ══════════════════════════════════════════════════════

  // ─── Rheum Case 1: Linda P. — Rheumatoid Arthritis ───
  {
    id: 7, specialty: 'rheum',
    meta: { title: 'Bilateral Joint Pain & Stiffness', tagLabels: [{ t: 'SUBACUTE', cls: '' }, { t: 'Autoimmune', cls: '' }] },
    patient: {
      name: 'Linda P.', age: 52, sex: 'Female', avatar: 'female', emoji: '👩',
      chiefComplaint: 'Bilateral hand and wrist joint pain with morning stiffness > 1 hour × 6 months',
      vitals: [
        { label: 'BP',     value: '122/78',  status: 'normal' },
        { label: 'HR',     value: '76 bpm',  status: 'normal' },
        { label: 'RR',     value: '14 /min', status: 'normal' },
        { label: 'Temp',   value: '37.1 °C', status: 'normal' },
        { label: 'O₂ Sat', value: '99%',     status: 'normal' },
        { label: 'Pain',   value: '6 / 10',  status: 'abnormal' },
      ],
      history: '52-year-old female with a 6-month history of symmetric bilateral MCP and PIP joint pain and swelling. Morning stiffness lasting > 1 hour that improves with activity. She notes increasing difficulty opening jars and typing. No rash, no recent infection, no dry eyes or mouth.',
      pmh: 'Hypothyroidism, mild depression',
      medications: 'Levothyroxine 75 mcg QD, sertraline 50 mg QD, ibuprofen PRN (partial relief)',
      allergies: 'NKDA',
      social: 'Non-smoker, occasional wine. Elementary school teacher.',
      family: 'Mother had "bad arthritis" in her hands',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_joint_ra', label: 'Musculoskeletal Joint Exam', icon: 'exam', cost: null, points: 40,
          finding: { type: 'exam', title: 'Musculoskeletal Examination', subtitle: 'Hands, Wrists, & Upper Extremities',
            results: [
              { name: 'MCP joints (bilateral)',   val: 'Swollen, boggy, warm — 2nd and 3rd bilaterally',  flag: 'critical' },
              { name: 'PIP joints (bilateral)',    val: 'Fusiform swelling, tender',                       flag: 'abnormal' },
              { name: 'DIP joints',               val: 'Spared — no involvement',                         flag: 'normal'   },
              { name: 'Wrists',                   val: 'Bilateral synovitis, restricted range of motion', flag: 'abnormal' },
              { name: 'Grip strength',            val: 'Reduced bilaterally (40% normal)',                flag: 'abnormal' },
              { name: 'Rheumatoid nodules',       val: 'Small nodule at left olecranon',                 flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Symmetric small joint arthritis (MCP/PIP) with DIP sparing and nodules strongly supports Rheumatoid Arthritis. ACR/EULAR score ≥ 6.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_rf', label: 'Rheumatoid Factor & Anti-CCP', icon: 'lab', cost: null, points: 45,
          finding: { type: 'labs', title: 'Rheumatoid Serology', subtitle: '',
            results: [
              { name: 'Rheumatoid Factor (RF)',  val: '248 IU/mL',   ref: '(< 14 IU/mL)',  flag: 'critical' },
              { name: 'Anti-CCP antibody',       val: '> 250 U/mL',  ref: '(< 20 U/mL)',   flag: 'critical' },
              { name: 'ANA',                     val: 'Weakly positive 1:80',               flag: 'abnormal' },
              { name: 'Anti-dsDNA',              val: 'Negative',                           flag: 'normal'   },
            ],
            note: { type: 'alert', text: 'Anti-CCP is 95% specific for RA and predicts more aggressive, erosive disease. Strongly seropositive RA — early aggressive DMARD therapy warranted.' } } },
        { id: 'lab_inflam', label: 'ESR / CRP / CBC', icon: 'lab', cost: null, points: 20,
          finding: { type: 'labs', title: 'Inflammatory Markers & Blood Count', subtitle: '',
            results: [
              { name: 'ESR',         val: '68 mm/hr',       ref: '(< 20)',      flag: 'abnormal' },
              { name: 'CRP',         val: '32 mg/L',        ref: '(< 5)',       flag: 'critical' },
              { name: 'Hgb',         val: '10.8 g/dL',      ref: '(12–16)',     flag: 'abnormal' },
              { name: 'MCV',         val: '82 fL (normocytic)', ref: '(80–100)',flag: 'normal'   },
            ],
            note: { type: 'warn', text: 'Normocytic anemia of chronic disease + elevated inflammatory markers consistent with active RA.' } } },
        { id: 'lab_metabolic_ra', label: 'BMP / LFTs (Baseline)', icon: 'lab', cost: null, points: 10,
          finding: { type: 'labs', title: 'Metabolic Panel & Liver Function', subtitle: 'Pre-DMARD Baseline',
            results: [
              { name: 'Creatinine', val: '0.8 mg/dL', ref: '(0.5–1.1)', flag: 'normal' },
              { name: 'ALT',        val: '22 U/L',     ref: '(7–40)',    flag: 'normal' },
              { name: 'AST',        val: '18 U/L',     ref: '(10–40)',   flag: 'normal' },
            ],
            note: { type: '', text: 'Baseline liver function normal — acceptable to start methotrexate. Monitor LFTs every 3 months on therapy.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_xray_hands', label: 'X-Ray Both Hands & Wrists', icon: 'imaging', cost: null, points: 30,
          finding: { type: 'imaging', title: 'Plain Radiographs', subtitle: 'Bilateral Hands & Wrists',
            results: [
              { name: 'Periarticular osteopenia',val: 'Present bilaterally at MCPs',                   flag: 'abnormal' },
              { name: 'Joint space',              val: 'Mild narrowing at 2nd & 3rd MCPs bilateral',   flag: 'abnormal' },
              { name: 'Erosions',                 val: 'Early marginal erosions at 2nd MCP right',     flag: 'critical' },
              { name: 'Soft tissue',              val: 'Fusiform swelling at MCPs and PIPs',           flag: 'abnormal' },
            ],
            note: { type: 'warn', text: 'Early marginal erosions confirm erosive RA. This patient requires aggressive early DMARD therapy to prevent further joint destruction.' } } },
        { id: 'img_us_joints', label: 'Musculoskeletal Ultrasound', icon: 'imaging', cost: null, points: 15,
          finding: { type: 'imaging', title: 'MSK Ultrasound — Hands', subtitle: 'Power Doppler',
            results: [
              { name: 'Synovitis',   val: 'Active — bilateral MCP and wrist synovitis',         flag: 'critical' },
              { name: 'Power Doppler',val: 'Increased flow — active inflammation',              flag: 'abnormal' },
              { name: 'Erosions',    val: 'Confirmed at 2nd MCP — deeper than X-ray suggests', flag: 'critical' },
            ],
            note: { type: 'warn', text: 'Ultrasound is more sensitive than X-ray for early synovitis and erosions. Confirms active disease requiring DMARD initiation.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_rheum', label: 'Rheumatology Referral', icon: 'consult', cost: null, points: 35,
          finding: { type: 'consult', title: 'Rheumatology Consultation', subtitle: 'Dr. Nakamura, Rheumatology',
            results: [
              { name: 'Diagnosis',      val: 'Seropositive Rheumatoid Arthritis — moderate-severe', flag: 'critical' },
              { name: 'DMARD therapy',  val: 'Methotrexate 10–15 mg weekly + folic acid',           flag: 'critical' },
              { name: 'Bridge therapy', val: 'Prednisone 10 mg QD taper over 6 weeks',              flag: 'abnormal' },
              { name: 'Target',         val: 'Treat-to-target — remission or low disease activity', flag: 'normal'   },
            ],
            note: { type: 'alert', text: 'Early aggressive DMARD therapy reduces erosive damage, disability, and cardiovascular risk. Do not delay — erosions are irreversible.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_rheum_dmard', label: 'Rheumatology Referral + Start Methotrexate', icon: 'consult', outcome: 'correct', points: 200,
        feedback: { title: 'Optimal RA Management', grade: 'Excellent',
          body: 'Linda has seropositive RA with early erosions — urgent rheumatology referral and DMARD initiation (methotrexate + folic acid) is the gold standard. Early treatment prevents irreversible joint destruction, disability, and cardiovascular complications.' } },
      { id: 'disp_nsaids_ra', label: 'NSAIDs Only — Follow up in 3 Months', icon: 'rx', outcome: 'partial', points: 20,
        feedback: { title: 'Partial Credit — Insufficient Long-Term Management', grade: 'Incomplete',
          body: 'NSAIDs provide symptomatic relief but do not prevent joint erosion or disease progression. This patient has confirmed erosive seropositive RA. NSAIDs alone without DMARDs lead to progressive disability. Rheumatology referral is essential.' } },
      { id: 'disp_reassure_ra', label: 'Reassurance — Age-Related Arthritis', icon: 'home', outcome: 'incorrect', points: -80,
        feedback: { title: 'Incorrect Diagnosis — RA Dismissed', grade: 'Critical Error',
          body: 'Attributing this presentation to normal aging is a serious error. The symmetric MCP/PIP arthritis, morning stiffness >1 hour, strongly positive RF and anti-CCP, early erosions on imaging, and normocytic anemia all confirm RA. Delayed treatment leads to permanent joint destruction.' } },
      { id: 'disp_steroid_only', label: 'Prednisone Long-Term — No Rheum Referral', icon: 'rx', outcome: 'incorrect', points: -60,
        feedback: { title: 'Incomplete — Steroids Not Disease-Modifying', grade: 'Significant Error',
          body: 'Long-term corticosteroids alone are not appropriate as the primary RA treatment. They provide symptomatic relief but do not prevent erosive progression and cause significant long-term side effects (osteoporosis, diabetes, infections). DMARDs are required.' } },
    ],
    correctDisposition: 'disp_rheum_dmard',
    criticalActions: ['lab_rf', 'pe_joint_ra', 'img_xray_hands'],
  },

  // ─── Rheum Case 2: Priya S. — Systemic Lupus (SLE) ───
  {
    id: 8, specialty: 'rheum',
    meta: { title: 'Facial Rash & Proteinuria', tagLabels: [{ t: 'SUBACUTE', cls: '' }, { t: 'Autoimmune', cls: '' }] },
    patient: {
      name: 'Priya S.', age: 28, sex: 'Female', avatar: 'female', emoji: '👩',
      chiefComplaint: 'Butterfly facial rash, joint pain, fatigue, and abnormal urinalysis × 3 months',
      vitals: [
        { label: 'BP',     value: '148/92',  status: 'abnormal'   },
        { label: 'HR',     value: '88 bpm',  status: 'normal'     },
        { label: 'RR',     value: '14 /min', status: 'normal'     },
        { label: 'Temp',   value: '37.8 °C', status: 'borderline' },
        { label: 'O₂ Sat', value: '98%',     status: 'normal'     },
        { label: 'Pain',   value: '4 / 10',  status: 'abnormal'   },
      ],
      history: '28-year-old South Asian female presenting with 3 months of malar facial rash (worse in sun), bilateral joint pain in hands and wrists, profound fatigue, and patchy hair loss. Routine urinalysis at her GP showed 3+ protein. She has noted oral ulcers recurring for the past 2 months.',
      pmh: 'No significant history. Recurrent oral ulcers since age 20.',
      medications: 'Ibuprofen PRN, vitamin D',
      allergies: 'Sulfonamides (hives)',
      social: 'Non-smoker, social drinker. Graduate student in biology.',
      family: 'Maternal aunt has "autoimmune disease" — unknown type',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_sle', label: 'Skin, Joint & Systemic Exam', icon: 'exam', cost: null, points: 45,
          finding: { type: 'exam', title: 'Physical Examination', subtitle: 'Multi-system',
            results: [
              { name: 'Malar rash',       val: 'Butterfly distribution — spares nasolabial folds', flag: 'critical' },
              { name: 'Discoid lesions',   val: 'Two scarring lesions on left cheek',              flag: 'abnormal' },
              { name: 'Oral ulcers',       val: '2 painless ulcers on hard palate',                flag: 'abnormal' },
              { name: 'Joint exam',        val: 'Bilateral wrist and MCP synovitis — non-erosive', flag: 'abnormal' },
              { name: 'Alopecia',          val: 'Diffuse non-scarring alopecia',                   flag: 'abnormal' },
              { name: 'Serositis',         val: 'Pleuritic rub — right lower chest',              flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Malar rash + discoid lesions + oral ulcers + serositis + arthritis + renal involvement = SLE (ACR/EULAR criteria met with score > 10).' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_ana_sle', label: 'ANA Panel (Stat)', icon: 'lab', cost: null, points: 50,
          finding: { type: 'labs', title: 'Antinuclear Antibody Panel', subtitle: '',
            results: [
              { name: 'ANA',           val: '1:1280 — homogeneous pattern', ref: '(< 1:80)',     flag: 'critical' },
              { name: 'Anti-dsDNA',    val: '> 400 IU/mL',                  ref: '(< 10)',        flag: 'critical' },
              { name: 'Anti-Smith',    val: 'Positive',                      ref: '(negative)',    flag: 'critical' },
              { name: 'Anti-Ro/SSA',   val: 'Positive',                      ref: '(negative)',    flag: 'abnormal' },
              { name: 'Antiphospholipid', val: 'Weakly positive',            ref: '(negative)',    flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Anti-dsDNA and Anti-Smith are highly specific for SLE. High anti-dsDNA titer correlates with disease activity — especially lupus nephritis.' } } },
        { id: 'lab_complement', label: 'Complement Levels C3/C4', icon: 'lab', cost: null, points: 20,
          finding: { type: 'labs', title: 'Complement Studies', subtitle: '',
            results: [
              { name: 'C3',  val: '52 mg/dL',  ref: '(90–180)',  flag: 'critical' },
              { name: 'C4',  val: '8 mg/dL',   ref: '(16–47)',   flag: 'critical' },
              { name: 'CH50',val: 'Low',                          flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Low C3, C4, and CH50 indicate complement consumption — active immune complex deposition. Strongly suggests active lupus nephritis.' } } },
        { id: 'lab_renal_sle', label: 'UA, Urine Protein/Cr, BMP', icon: 'lab', cost: null, points: 30,
          finding: { type: 'labs', title: 'Renal Function & Urinalysis', subtitle: '',
            results: [
              { name: 'Creatinine',          val: '1.4 mg/dL',    ref: '(0.5–1.1)',   flag: 'abnormal' },
              { name: 'eGFR',                val: '52 mL/min/1.73m²',                 flag: 'critical' },
              { name: 'Urine protein/Cr',    val: '2.8 g/g',      ref: '(< 0.15)',    flag: 'critical' },
              { name: 'Urine RBC casts',     val: 'PRESENT',                          flag: 'critical' },
              { name: 'Hematuria',           val: '> 50 RBC/hpf', ref: '(< 5)',       flag: 'critical' },
            ],
            note: { type: 'alert', text: 'RBC casts + nephrotic-range proteinuria + elevated creatinine = lupus nephritis. Nephrology consultation and renal biopsy required urgently.' } } },
        { id: 'lab_cbc_sle', label: 'CBC with Differential', icon: 'lab', cost: null, points: 15,
          finding: { type: 'labs', title: 'Complete Blood Count', subtitle: '',
            results: [
              { name: 'WBC',         val: '3.2 × 10³/µL',  ref: '(4.5–11)',    flag: 'critical' },
              { name: 'Lymphocytes', val: '600/µL',          ref: '(1000–4800)', flag: 'critical' },
              { name: 'Hgb',         val: '10.2 g/dL',      ref: '(12–16)',     flag: 'abnormal' },
              { name: 'Platelets',   val: '98 × 10³/µL',    ref: '(150–400)',   flag: 'abnormal' },
            ],
            note: { type: 'warn', text: 'Pancytopenia in SLE — leukopenia, lymphopenia, hemolytic anemia, and thrombocytopenia all are SLICC criteria for SLE.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_rheum_sle', label: 'Rheumatology Urgent Consult', icon: 'consult', cost: null, points: 35,
          finding: { type: 'consult', title: 'Rheumatology Consultation', subtitle: 'Dr. Nakamura, Rheumatology',
            results: [
              { name: 'Diagnosis',      val: 'Systemic Lupus Erythematosus — active with nephritis',  flag: 'critical' },
              { name: 'Hydroxychloroquine', val: '200–400 mg QD — start immediately',                 flag: 'critical' },
              { name: 'Steroids',       val: 'Methylprednisolone pulse then oral prednisone taper',   flag: 'critical' },
              { name: 'Nephrology',     val: 'Urgent consult for renal biopsy — ISN/RPS classification', flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Active lupus nephritis is a renal emergency. Early aggressive therapy prevents progression to end-stage renal disease.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_sle_rheum', label: 'Urgent Rheumatology + Nephrology Referral', icon: 'consult', outcome: 'correct', points: 200,
        feedback: { title: 'Correct — Urgent Multi-Specialty Management', grade: 'Excellent',
          body: 'Priya has SLE with active lupus nephritis (RBC casts, nephrotic proteinuria, low complement). Urgent rheumatology for hydroxychloroquine and immunosuppression, and nephrology for renal biopsy to classify nephritis and guide therapy is the correct approach.' } },
      { id: 'disp_hydroxy_only', label: 'Hydroxychloroquine — Routine Rheum Follow-up', icon: 'rx', outcome: 'partial', points: 10,
        feedback: { title: 'Insufficient — Active Nephritis Requires Urgent Action', grade: 'Incomplete',
          body: 'Hydroxychloroquine is appropriate but insufficient alone given active lupus nephritis with declining renal function. This patient needs urgent nephrology referral and likely immunosuppression (mycophenolate or cyclophosphamide) to prevent end-stage kidney disease.' } },
      { id: 'disp_topical_sle', label: 'Topical Steroids — Rosacea & Eczema', icon: 'home', outcome: 'incorrect', points: -120,
        feedback: { title: 'Misdiagnosis — SLE Missed', grade: 'Critical Error',
          body: 'This is not rosacea or eczema. The malar rash spares the nasolabial folds (opposite of rosacea), the patient has active lupus nephritis, pancytopenia, positive ANA/anti-dsDNA, and multisystem involvement. Missing this diagnosis leads to renal failure.' } },
      { id: 'disp_antibiotics_sle', label: 'Antibiotics — Presumed Skin Infection', icon: 'rx', outcome: 'incorrect', points: -100,
        feedback: { title: 'Incorrect Diagnosis', grade: 'Critical Error',
          body: 'The bilateral symmetric rash, systemic symptoms, positive serology, proteinuria with RBC casts, and pancytopenia are not consistent with a skin infection. Treating with antibiotics delays appropriate immunosuppressive therapy for SLE.' } },
    ],
    correctDisposition: 'disp_sle_rheum',
    criticalActions: ['lab_ana_sle', 'lab_renal_sle', 'consult_rheum_sle'],
  },

  // ─── Rheum Case 3: Thomas B. — Acute Gout ────────────
  {
    id: 9, specialty: 'rheum',
    meta: { title: 'Acute Monoarthritis', tagLabels: [{ t: 'ACUTE', cls: 'moderate' }, { t: 'Rheumatology', cls: '' }] },
    patient: {
      name: 'Thomas B.', age: 55, sex: 'Male', avatar: 'male', emoji: '👨',
      chiefComplaint: 'Severe right big toe pain, swelling, and redness — woke from sleep',
      vitals: [
        { label: 'BP',     value: '146/88',  status: 'abnormal'   },
        { label: 'HR',     value: '84 bpm',  status: 'normal'     },
        { label: 'RR',     value: '14 /min', status: 'normal'     },
        { label: 'Temp',   value: '37.8 °C', status: 'borderline' },
        { label: 'O₂ Sat', value: '99%',     status: 'normal'     },
        { label: 'Pain',   value: '9 / 10',  status: 'abnormal'   },
      ],
      history: '55-year-old male who woke at 3am with excruciating right first MTP joint pain, swelling, and erythema. History of 2 prior similar episodes. Had a large steakhouse dinner with red wine and beer yesterday. History of kidney stones. Currently on HCTZ for hypertension.',
      pmh: 'Hypertension, nephrolithiasis (uric acid stones), mild CKD stage 2',
      medications: 'Hydrochlorothiazide 25 mg QD, lisinopril 10 mg QD',
      allergies: 'NKDA',
      social: '5–10 drinks/week, non-smoker, financial analyst',
      family: 'Father had gout',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_gout', label: 'Joint & Skin Examination', icon: 'exam', cost: null, points: 40,
          finding: { type: 'exam', title: 'Musculoskeletal & Skin Exam', subtitle: '',
            results: [
              { name: 'Right 1st MTP',  val: 'Erythema, marked swelling, exquisitely tender — cannot bear weight', flag: 'critical' },
              { name: 'Warmth',         val: 'Marked warmth — hot to touch',                                         flag: 'abnormal' },
              { name: 'Tophi',          val: 'Bilateral ear helices — chalky white deposits',                         flag: 'critical' },
              { name: 'Other joints',   val: 'No other joint involvement',                                            flag: 'normal'   },
              { name: 'Skin',           val: 'Desquamation over 1st MTP — late acute gout sign',                     flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Podagra (first MTP gout) in a middle-aged male + tophi + prior attacks + uricosuric diet trigger = classic acute gout flare.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_urate', label: 'Serum Uric Acid & BMP', icon: 'lab', cost: null, points: 30,
          finding: { type: 'labs', title: 'Metabolic Panel & Uric Acid', subtitle: '',
            results: [
              { name: 'Uric acid',   val: '9.8 mg/dL',  ref: '(< 6.0)',    flag: 'critical' },
              { name: 'Creatinine',  val: '1.4 mg/dL',  ref: '(0.7–1.2)', flag: 'abnormal' },
              { name: 'eGFR',        val: '58 mL/min',  ref: '(> 90)',     flag: 'abnormal' },
              { name: 'Glucose',     val: '108 mg/dL',  ref: '(70–100)',   flag: 'borderline' },
            ],
            note: { type: 'warn', text: 'Hyperuricemia + CKD + HCTZ use = classic triad predisposing to gout. Note: uric acid may be normal during an acute flare (redistributed into joint).' } } },
        { id: 'lab_inflam_gout', label: 'CRP / WBC', icon: 'lab', cost: null, points: 10,
          finding: { type: 'labs', title: 'Inflammatory Markers', subtitle: '',
            results: [
              { name: 'WBC', val: '13.2 × 10³/µL', ref: '(4.5–11)', flag: 'abnormal' },
              { name: 'CRP', val: '68 mg/L',         ref: '(< 5)',   flag: 'critical' },
              { name: 'ESR', val: '74 mm/hr',         ref: '(< 22)', flag: 'abnormal' },
            ],
            note: { type: '', text: 'Moderate leukocytosis and elevated CRP reflect the acute inflammatory response in gout. Must rule out septic arthritis if diagnosis is uncertain.' } } },
        { id: 'lab_aspirate', label: 'Joint Aspiration & Synovial Analysis', icon: 'lab', cost: null, points: 50,
          finding: { type: 'labs', title: 'Joint Fluid Analysis', subtitle: 'Right 1st MTP Aspirate',
            results: [
              { name: 'Appearance',      val: 'Cloudy, yellow-white',                                  flag: 'abnormal' },
              { name: 'WBC',             val: '48,000 cells/µL — predominantly PMNs',                 flag: 'critical' },
              { name: 'Crystals',        val: 'Negatively birefringent, needle-shaped monosodium urate', flag: 'critical' },
              { name: 'Gram stain',      val: 'No organisms seen',                                     flag: 'normal'   },
              { name: 'Culture',         val: 'Pending — no growth at 48 hours',                      flag: 'normal'   },
            ],
            note: { type: 'alert', text: 'Negatively birefringent needle-shaped crystals confirm monosodium urate (MSU) gout. This is the GOLD STANDARD diagnostic test.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_xray_foot', label: 'X-Ray Right Foot', icon: 'imaging', cost: null, points: 15,
          finding: { type: 'imaging', title: 'X-Ray Right Foot', subtitle: '',
            results: [
              { name: 'Bone',         val: 'No cortical erosions — early disease',                flag: 'normal'   },
              { name: 'Joint space',  val: 'Preserved at 1st MTP',                               flag: 'normal'   },
              { name: 'Soft tissue',  val: 'Marked soft tissue swelling 1st MTP',                flag: 'abnormal' },
              { name: 'Tophi',        val: 'Calcified tophi visible periarticular',              flag: 'abnormal' },
            ],
            note: { type: '', text: 'X-ray is often normal in early gout. Erosions ("rat-bite" erosions with overhanging edges) appear with chronic tophaceous gout.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_rheum_gout', label: 'Rheumatology Referral', icon: 'consult', cost: null, points: 25,
          finding: { type: 'consult', title: 'Rheumatology Consultation', subtitle: 'Dr. Nakamura, Rheumatology',
            results: [
              { name: 'Acute treatment',  val: 'Colchicine 1.2 mg then 0.6 mg × 1 hour — first-line', flag: 'critical' },
              { name: 'Alternative',      val: 'Indomethacin 50 mg TID × 5 days (if CKD ok)',          flag: 'abnormal' },
              { name: 'ULT timing',       val: 'Start allopurinol 4–6 weeks after acute resolves',      flag: 'critical' },
              { name: 'Lifestyle',        val: 'Low-purine diet, alcohol cessation, increase hydration', flag: 'abnormal' },
              { name: 'HCTZ',            val: 'Switch to losartan — uricosuric benefit in hypertension', flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Do NOT start allopurinol during an acute flare — it can prolong and worsen the attack by mobilizing urate. Wait until 4–6 weeks post-flare.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_gout_correct', label: 'Colchicine + Rheum Referral for ULT', icon: 'consult', outcome: 'correct', points: 200,
        feedback: { title: 'Correct Gout Management', grade: 'Excellent',
          body: 'Thomas has acute gout confirmed by crystal analysis. Colchicine (or NSAIDs if renal function permits) for the acute attack, switching HCTZ to losartan, and planning urate-lowering therapy (allopurinol, target uric acid < 6 mg/dL) after the flare resolves is the correct approach.' } },
      { id: 'disp_allopurinol_now', label: 'Start Allopurinol Immediately', icon: 'rx', outcome: 'incorrect', points: -80,
        feedback: { title: 'Incorrect Timing — Worsens Acute Flare', grade: 'Critical Error',
          body: 'Starting allopurinol during an acute gout flare mobilizes urate crystals from soft tissue into joints, prolonging and worsening the attack. Urate-lowering therapy must be initiated 4–6 weeks after the acute flare resolves.' } },
      { id: 'disp_abx_gout', label: 'Antibiotics — Presumed Septic Arthritis', icon: 'rx', outcome: 'partial', points: 30,
        feedback: { title: 'Partial Credit — Reasonable Concern, Wrong Treatment', grade: 'Incomplete',
          body: 'Ruling out septic arthritis is clinically appropriate (hence the partial credit for ordering the aspirate), but the crystal analysis confirms gout, not infection. Antibiotics are not warranted when gram stain is negative and crystals are identified.' } },
      { id: 'disp_reassure_gout', label: 'Ibuprofen — Reassurance, No Follow-up', icon: 'home', outcome: 'partial', points: 20,
        feedback: { title: 'Partial — Symptomatic Only, No Long-Term Plan', grade: 'Incomplete',
          body: 'NSAIDs can treat the acute attack, but without addressing the underlying hyperuricemia, dietary triggers, HCTZ contribution, and urate-lowering therapy, this patient will have recurrent attacks and progress to tophaceous gout and renal disease.' } },
    ],
    correctDisposition: 'disp_gout_correct',
    criticalActions: ['lab_aspirate', 'lab_urate', 'pe_gout'],
  },

  // ─── Rheum Case 4: Kevin L. — Ankylosing Spondylitis ─
  {
    id: 10, specialty: 'rheum',
    meta: { title: 'Inflammatory Back Pain', tagLabels: [{ t: 'CHRONIC', cls: '' }, { t: 'Rheumatology', cls: '' }] },
    patient: {
      name: 'Kevin L.', age: 26, sex: 'Male', avatar: 'male', emoji: '👨',
      chiefComplaint: '18 months of low back pain — worse at rest, better with exercise, morning stiffness > 1 hour',
      vitals: [
        { label: 'BP',     value: '118/72',  status: 'normal' },
        { label: 'HR',     value: '72 bpm',  status: 'normal' },
        { label: 'RR',     value: '14 /min', status: 'normal' },
        { label: 'Temp',   value: '37.0 °C', status: 'normal' },
        { label: 'O₂ Sat', value: '99%',     status: 'normal' },
        { label: 'Pain',   value: '5 / 10',  status: 'abnormal' },
      ],
      history: '26-year-old male with 18-month history of insidious onset inflammatory low back pain. Pain is worse with rest and at night, and paradoxically improves with exercise. Morning stiffness lasting > 1 hour. He also notes intermittent right heel pain (enthesitis) and a recent episode of painful red eye (anterior uveitis).',
      pmh: 'One episode of anterior uveitis (iritis) 8 months ago — treated with ophthalmology',
      medications: 'Ibuprofen 600 mg TID (partial relief), vitamin D 2000 IU QD',
      allergies: 'NKDA',
      social: 'Non-smoker. Graduate student. Active runner before pain started.',
      family: 'Father has psoriasis. Uncle has "spondylitis" on medication.',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_as', label: 'Spine & Sacroiliac Joint Exam', icon: 'exam', cost: null, points: 40,
          finding: { type: 'exam', title: 'Spinal & SI Joint Examination', subtitle: '',
            results: [
              { name: "Schober's test",    val: 'Reduced — 3.5 cm increase (normal > 5 cm)',       flag: 'critical' },
              { name: 'Chest expansion',   val: 'Reduced — 2.8 cm (normal > 5 cm)',                flag: 'abnormal' },
              { name: 'SI joint',          val: 'Bilateral sacroiliac joint tenderness on palpation', flag: 'critical' },
              { name: 'FABER test',        val: 'POSITIVE bilateral — sacroiliac inflammation',    flag: 'critical' },
              { name: 'Lateral lumbar',    val: 'Reduced range of motion all planes',              flag: 'abnormal' },
              { name: 'Achilles',          val: 'Tender bilaterally — enthesitis',                 flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Inflammatory back pain + reduced Schober + bilateral SI tenderness + enthesitis + prior uveitis = ankylosing spondylitis until proven otherwise.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_hlab27', label: 'HLA-B27 Typing', icon: 'lab', cost: null, points: 40,
          finding: { type: 'labs', title: 'HLA-B27 Genetic Typing', subtitle: '',
            results: [
              { name: 'HLA-B27', val: 'POSITIVE', ref: '(positive in ~90% of AS patients)', flag: 'critical' },
            ],
            note: { type: 'warn', text: 'HLA-B27 is positive in ~90% of patients with AS, but 8% of the general population is HLA-B27 positive. Clinical context is essential — do not use this alone as a diagnostic test.' } } },
        { id: 'lab_inflam_as', label: 'ESR / CRP / CBC', icon: 'lab', cost: null, points: 15,
          finding: { type: 'labs', title: 'Inflammatory Markers', subtitle: '',
            results: [
              { name: 'CRP',         val: '28 mg/L',       ref: '(< 5)',   flag: 'critical' },
              { name: 'ESR',         val: '52 mm/hr',       ref: '(< 15)', flag: 'abnormal' },
              { name: 'Hgb',         val: '12.8 g/dL',      ref: '(13.5–17.5)', flag: 'abnormal' },
              { name: 'ANA / RF',    val: 'Both negative',                 flag: 'normal'   },
            ],
            note: { type: '', text: 'Elevated CRP/ESR with negative ANA/RF helps distinguish AS from RA or SLE. Normocytic anemia of chronic disease is common in active AS.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_xray_pelvis', label: 'X-Ray Pelvis & Sacroiliac Joints', icon: 'imaging', cost: null, points: 25,
          finding: { type: 'imaging', title: 'X-Ray Pelvis — AP View', subtitle: '',
            results: [
              { name: 'Sacroiliac joints', val: 'Bilateral sacroiliitis — sclerosis and erosions, Grade II–III', flag: 'critical' },
              { name: 'Lumbar spine',      val: 'Early syndesmophytes at L4–L5 — "squaring" of vertebral bodies', flag: 'abnormal' },
              { name: 'Hip joints',        val: 'Normal joint space',                                              flag: 'normal'   },
            ],
            note: { type: 'warn', text: 'Bilateral sacroiliitis Grade II–III on X-ray with syndesmophytes meets modified New York criteria for Ankylosing Spondylitis.' } } },
        { id: 'img_mri_si', label: 'MRI Sacroiliac Joints', icon: 'imaging', cost: null, points: 30,
          finding: { type: 'imaging', title: 'MRI — Sacroiliac Joints', subtitle: 'STIR & T1 sequences',
            results: [
              { name: 'Bone marrow edema', val: 'Active — bilateral subchondral edema both SI joints',  flag: 'critical' },
              { name: 'Erosions',          val: 'Early erosions bilateral',                              flag: 'abnormal' },
              { name: 'Fat metaplasia',    val: 'Focal — chronic inflammation marker',                  flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'MRI bone marrow edema on STIR sequence = active sacroiliac inflammation. This meets ASAS criteria for axial spondyloarthritis even without X-ray changes.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_rheum_as', label: 'Rheumatology Referral', icon: 'consult', cost: null, points: 30,
          finding: { type: 'consult', title: 'Rheumatology Consultation', subtitle: 'Dr. Nakamura, Rheumatology',
            results: [
              { name: 'Diagnosis',    val: 'Ankylosing Spondylitis (radiographic axial SpA)',          flag: 'critical' },
              { name: 'First-line',   val: 'Maximally-dosed NSAIDs + daily physiotherapy program',     flag: 'critical' },
              { name: 'Second-line',  val: 'TNF inhibitor (adalimumab/etanercept) if NSAID failure',  flag: 'abnormal' },
              { name: 'Monitoring',   val: 'Annual ophthalmology for uveitis screening',               flag: 'abnormal' },
            ],
            note: { type: '', text: 'Early diagnosis and daily exercise are critical. Unlike RA, exercise improves AS — immobility worsens disease. TNF inhibitors halt radiographic progression.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_as_correct', label: 'Rheumatology Referral + NSAIDs + Physio', icon: 'consult', outcome: 'correct', points: 200,
        feedback: { title: 'Correct AS Management', grade: 'Excellent',
          body: 'Kevin has Ankylosing Spondylitis. Rheumatology referral, maximally dosed NSAIDs, and daily physiotherapy are the cornerstones of treatment. TNF inhibitors are indicated if NSAIDs fail. Early diagnosis prevents progressive spinal fusion (bamboo spine).' } },
      { id: 'disp_opioids_as', label: 'Opioid Analgesia — Orthopedic Referral', icon: 'rx', outcome: 'incorrect', points: -100,
        feedback: { title: 'Incorrect — Mechanical Cause Wrongly Assumed', grade: 'Critical Error',
          body: 'This is inflammatory, not mechanical, back pain. Opioids and orthopedics are inappropriate. The hallmarks of inflammatory back pain (worse at rest, better with exercise, morning stiffness >1 hour, age < 40, insidious onset) were all present. AS requires rheumatology management.' } },
      { id: 'disp_nsaids_only_as', label: 'NSAIDs — Follow up in 6 months (No Referral)', icon: 'rx', outcome: 'partial', points: 40,
        feedback: { title: 'Partial Credit — NSAIDs Without Specialist Referral', grade: 'Incomplete',
          body: 'NSAIDs are appropriate first-line therapy for AS and you recognized the inflammatory pattern, but a young patient with confirmed ankylosing spondylitis and early erosions requires rheumatology monitoring and potential biologic therapy.' } },
      { id: 'disp_activity_restrict', label: 'Activity Restriction — Bedrest', icon: 'home', outcome: 'incorrect', points: -120,
        feedback: { title: 'Harmful — Exercise Is Beneficial in AS', grade: 'Critical Error',
          body: 'Activity restriction and bedrest are the opposite of the correct treatment for ankylosing spondylitis. Unlike mechanical back pain, AS paradoxically improves with exercise. Immobility accelerates spinal fusion. Daily physiotherapy is a cornerstone of AS management.' } },
    ],
    correctDisposition: 'disp_as_correct',
    criticalActions: ['img_mri_si', 'lab_hlab27', 'pe_as'],
  },

  // ══════════════════════════════════════════════════════
  //  ONCOLOGY
  // ══════════════════════════════════════════════════════

  // ─── Onc Case 1: Eugene R. — Lung Cancer ─────────────
  {
    id: 11, specialty: 'onc',
    meta: { title: 'Hemoptysis & Weight Loss', tagLabels: [{ t: 'URGENT', cls: 'urgent' }, { t: 'Oncology', cls: '' }] },
    patient: {
      name: 'Eugene R.', age: 67, sex: 'Male', avatar: 'male', emoji: '👨',
      chiefComplaint: 'Hemoptysis, 20 lb weight loss, persistent cough × 3 months',
      vitals: [
        { label: 'BP',     value: '134/82',  status: 'normal'     },
        { label: 'HR',     value: '82 bpm',  status: 'normal'     },
        { label: 'RR',     value: '16 /min', status: 'normal'     },
        { label: 'Temp',   value: '37.0 °C', status: 'normal'     },
        { label: 'O₂ Sat', value: '94%',     status: 'abnormal'   },
        { label: 'Wt Loss',value: '20 lbs',  status: 'abnormal'   },
      ],
      history: '67-year-old male with 45-pack-year smoking history presenting with 3 episodes of hemoptysis, progressive productive cough, and 20-pound unintentional weight loss over 3 months. He also notes right shoulder pain that he attributes to "rotator cuff." Denies antibiotics prescribed × 2 without improvement.',
      pmh: 'COPD (FEV1 60%), hypertension, type 2 diabetes',
      medications: 'Tiotropium inhaler, amlodipine, metformin',
      allergies: 'Aspirin (GI intolerance)',
      social: '45 pack-year smoker, quit 2 years ago. Retired construction worker (asbestos exposure).',
      family: 'Brother with lung cancer at age 62',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_lung_ca', label: 'Pulmonary & Lymph Node Exam', icon: 'exam', cost: null, points: 30,
          finding: { type: 'exam', title: 'Pulmonary & Systemic Examination', subtitle: '',
            results: [
              { name: 'Breath sounds',       val: 'Absent right upper lobe — post-obstructive atelectasis',  flag: 'critical' },
              { name: 'Right shoulder',      val: 'Tenderness at apex — Pancoast syndrome concern',          flag: 'abnormal' },
              { name: 'Horner syndrome',     val: 'Partial ptosis + miosis right eye',                        flag: 'critical' },
              { name: 'Supraclavicular',     val: 'Right supraclavicular lymphadenopathy — hard, fixed, 2cm', flag: 'critical' },
              { name: 'Fingers',            val: 'Clubbing — digital clubbing present',                        flag: 'abnormal' },
              { name: 'Cachexia',           val: 'Significant — temporal wasting, muscle loss',               flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Horner syndrome + shoulder pain + apical mass = Pancoast tumor (superior sulcus tumor). Supraclavicular node = N3 disease if confirmed.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_onc_panel', label: 'CBC / BMP / LFTs / Tumor Markers', icon: 'lab', cost: null, points: 20,
          finding: { type: 'labs', title: 'Comprehensive Lab Panel', subtitle: '',
            results: [
              { name: 'Hgb',      val: '10.4 g/dL',   ref: '(13.5–17.5)', flag: 'abnormal' },
              { name: 'Na',       val: '128 mEq/L',   ref: '(136–145)',    flag: 'critical' },
              { name: 'Ca²⁺',    val: '11.8 mg/dL',  ref: '(8.5–10.5)',  flag: 'critical' },
              { name: 'ALP',      val: '312 U/L',      ref: '(44–147)',    flag: 'critical' },
              { name: 'CEA',      val: '88 ng/mL',     ref: '(< 3.0)',    flag: 'critical' },
              { name: 'NSE',      val: '48 ng/mL',     ref: '(< 16.3)',   flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Hyponatremia (SIADH from SCLC), hypercalcemia (squamous cell paraneoplastic PTHrP), elevated ALP (liver mets), and elevated tumor markers all strongly suggest advanced lung malignancy.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_cxr_ca', label: 'Chest X-Ray', icon: 'imaging', cost: null, points: 20,
          finding: { type: 'imaging', title: 'Chest X-Ray', subtitle: 'PA & Lateral',
            results: [
              { name: 'Right upper lobe', val: '4.5 cm irregular spiculated mass with hilar adenopathy', flag: 'critical' },
              { name: 'Right lung',       val: 'Partial right upper lobe collapse',                       flag: 'abnormal' },
              { name: 'Pleura',          val: 'Right pleural effusion — moderate',                        flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Spiculated RUL mass + hilar adenopathy in a heavy smoker = lung cancer until proven otherwise. CT chest is next essential step.' } } },
        { id: 'img_ct_chest', label: 'CT Chest/Abdomen/Pelvis + Contrast', icon: 'imaging', cost: null, points: 40,
          finding: { type: 'imaging', title: 'CT Staging — Chest/Abdomen/Pelvis', subtitle: 'With IV Contrast',
            results: [
              { name: 'Primary mass',      val: '4.8 cm spiculated RUL mass — invades chest wall',                  flag: 'critical' },
              { name: 'Mediastinum',        val: 'Multiple hypermetabolic mediastinal lymph nodes (N2)',              flag: 'critical' },
              { name: 'Liver',             val: 'Multiple hypodense hepatic lesions (M1b)',                           flag: 'critical' },
              { name: 'Adrenal',           val: 'Left adrenal nodule — 2.2 cm (M1b suspect)',                        flag: 'critical' },
              { name: 'Brain',             val: 'Not included — MRI brain recommended',                               flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Clinical Stage IV non-small cell lung cancer (T3N2M1b). Molecular profiling (EGFR, ALK, ROS1, PD-L1) is essential to guide targeted therapy.' } } },
        { id: 'img_pet', label: 'PET/CT Staging', icon: 'imaging', cost: null, points: 25,
          finding: { type: 'imaging', title: 'Whole-Body PET/CT', subtitle: 'F-18 FDG',
            results: [
              { name: 'Primary',   val: 'SUVmax 14.2 — RUL mass (hypermetabolic)',         flag: 'critical' },
              { name: 'N stations',val: 'Mediastinal N2 nodes — bilateral hilar N1 nodes', flag: 'critical' },
              { name: 'Hepatic',   val: 'Multiple FDG-avid hepatic lesions — metastases',   flag: 'critical' },
              { name: 'Bone',      val: 'T8 vertebra — FDG avid — bone metastasis',        flag: 'critical' },
            ],
            note: { type: 'warn', text: 'Stage IV disease with multiple sites of metastasis. Prognosis is significantly affected — multidisciplinary oncology team essential.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_pulm_onc', label: 'Pulmonology + Oncology Referral', icon: 'consult', cost: null, points: 40,
          finding: { type: 'consult', title: 'Pulmonology & Oncology Consultation', subtitle: 'Multidisciplinary Tumor Board',
            results: [
              { name: 'Tissue biopsy',   val: 'CT-guided core biopsy RUL mass — urgent',                flag: 'critical' },
              { name: 'Molecular',       val: 'EGFR, ALK, ROS1, KRAS, BRAF, MET, PD-L1 TPS',          flag: 'critical' },
              { name: 'Intent',          val: 'Palliative — curative resection not possible (Stage IV)', flag: 'abnormal' },
              { name: 'Treatment',       val: 'Targeted therapy if driver mutation; immunotherapy + chemo if none', flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Stage IV NSCLC — tissue biopsy and molecular profiling before starting systemic therapy is mandatory. Targeted therapy (EGFR/ALK inhibitors) can achieve excellent responses in driver-positive tumors.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_biopsy_tumor_board', label: 'CT Biopsy + Oncology + Tumor Board', icon: 'consult', outcome: 'correct', points: 200,
        feedback: { title: 'Correct Oncologic Approach', grade: 'Excellent',
          body: 'Eugene has Stage IV NSCLC. CT-guided biopsy for histology and molecular profiling, referral to oncology, and multidisciplinary tumor board review is the correct approach. Treatment depends on driver mutations (EGFR, ALK, ROS1) and PD-L1 expression.' } },
      { id: 'disp_antibiotics_ca', label: 'Antibiotics — Presumed Pneumonia', icon: 'rx', outcome: 'incorrect', points: -100,
        feedback: { title: 'Dangerous Diagnostic Delay', grade: 'Critical Error',
          body: 'This patient was already prescribed antibiotics twice without improvement. The spiculated mass, hemoptysis, weight loss, supraclavicular node, Horner syndrome, and hypercalcemia all point to lung cancer, not pneumonia. Further antibiotic delays diagnosis and worsens prognosis.' } },
      { id: 'disp_reassure_ca', label: 'COPD Follow-up — Routine Outpatient', icon: 'home', outcome: 'incorrect', points: -150,
        feedback: { title: 'Fatal Diagnostic Miss', grade: 'Fatal Error',
          body: 'Attributing this presentation to COPD alone ignores the spiculated lung mass, hemoptysis, weight loss, supraclavicular adenopathy, and paraneoplastic signs. Every week of delay in lung cancer diagnosis worsens staging and treatment options.' } },
      { id: 'disp_surgery_ca', label: 'Immediate Thoracic Surgery — No Biopsy', icon: 'er', outcome: 'incorrect', points: -60,
        feedback: { title: 'Incorrect Sequence — Biopsy First', grade: 'Significant Error',
          body: 'This is Stage IV disease — surgical resection is not indicated. Even if resectable, tissue biopsy and molecular profiling must precede surgery. Operating on Stage IV disease without a tissue diagnosis wastes surgical risk on a patient who needs systemic therapy.' } },
    ],
    correctDisposition: 'disp_biopsy_tumor_board',
    criticalActions: ['img_ct_chest', 'consult_pulm_onc', 'pe_lung_ca'],
  },

  // ─── Onc Case 2: Nancy M. — Colorectal Cancer ────────
  {
    id: 12, specialty: 'onc',
    meta: { title: 'Rectal Bleeding & Bowel Changes', tagLabels: [{ t: 'URGENT', cls: 'urgent' }, { t: 'GI Oncology', cls: '' }] },
    patient: {
      name: 'Nancy M.', age: 61, sex: 'Female', avatar: 'female', emoji: '👩',
      chiefComplaint: 'Rectal bleeding, pencil-thin stools, and 15 lb weight loss × 4 months',
      vitals: [
        { label: 'BP',     value: '122/76',  status: 'normal'   },
        { label: 'HR',     value: '88 bpm',  status: 'normal'   },
        { label: 'RR',     value: '14 /min', status: 'normal'   },
        { label: 'Temp',   value: '37.0 °C', status: 'normal'   },
        { label: 'O₂ Sat', value: '98%',     status: 'normal'   },
        { label: 'Wt Loss',value: '15 lbs',  status: 'abnormal' },
      ],
      history: '61-year-old post-menopausal woman with 4 months of blood mixed in stool, progressive constipation, pencil-thin stools, and 15-pound unintentional weight loss. She has never had a colonoscopy. She initially attributed bleeding to hemorrhoids. Lower abdominal cramping has worsened over 2 months.',
      pmh: 'Hypertension, type 2 diabetes. No prior colonoscopy.',
      medications: 'Lisinopril, metformin',
      allergies: 'Penicillin (hives)',
      social: 'Non-smoker, occasional wine. Retired nurse.',
      family: 'Father with colon cancer at 64. Sister with colon polyps.',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_crc', label: 'Abdominal & Digital Rectal Exam', icon: 'exam', cost: null, points: 40,
          finding: { type: 'exam', title: 'Abdominal & Rectal Examination', subtitle: '',
            results: [
              { name: 'Abdomen',      val: 'Firm palpable mass left lower quadrant — non-tender',       flag: 'critical' },
              { name: 'DRE',          val: 'Palpable indurated mass at 8 cm — gross blood on glove',    flag: 'critical' },
              { name: 'Pallor',       val: 'Conjunctival pallor — anemia',                              flag: 'abnormal' },
              { name: 'Liver',        val: 'Hepatomegaly — 3 cm below right costal margin',            flag: 'critical' },
              { name: 'Lymph nodes',  val: 'No supraclavicular adenopathy',                             flag: 'normal'   },
            ],
            note: { type: 'alert', text: 'Palpable rectal mass on DRE in a 61-year-old with rectal bleeding, pencil-thin stools, weight loss, and family history = colorectal cancer until proven otherwise.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_cbc_crc', label: 'CBC / Iron Studies', icon: 'lab', cost: null, points: 25,
          finding: { type: 'labs', title: 'Complete Blood Count & Iron Studies', subtitle: '',
            results: [
              { name: 'Hgb',         val: '9.2 g/dL',    ref: '(12.0–16.0)',  flag: 'critical' },
              { name: 'MCV',         val: '72 fL',        ref: '(80–100)',     flag: 'abnormal' },
              { name: 'Ferritin',    val: '6 ng/mL',      ref: '(10–120)',     flag: 'critical' },
              { name: 'TIBC',        val: '420 µg/dL',    ref: '(250–370)',    flag: 'abnormal' },
            ],
            note: { type: 'warn', text: 'Microcytic iron-deficiency anemia in a post-menopausal woman with rectal bleeding = lower GI blood loss until proven otherwise. Always do colonoscopy for iron deficiency in this demographic.' } } },
        { id: 'lab_cea', label: 'CEA / LFTs', icon: 'lab', cost: null, points: 20,
          finding: { type: 'labs', title: 'Tumor Marker & Liver Function', subtitle: '',
            results: [
              { name: 'CEA',   val: '48.2 ng/mL',  ref: '(< 2.5)',   flag: 'critical' },
              { name: 'ALP',   val: '288 U/L',      ref: '(44–147)',  flag: 'critical' },
              { name: 'ALT',   val: '88 U/L',       ref: '(7–40)',    flag: 'abnormal' },
              { name: 'Billi', val: '1.8 mg/dL',    ref: '(0.2–1.2)',flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Elevated CEA (48x normal) with abnormal LFTs strongly suggests CRC with hepatic metastases. CEA is used for monitoring response to treatment, not primary diagnosis.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_ct_crc', label: 'CT Abdomen/Pelvis + Contrast', icon: 'imaging', cost: null, points: 35,
          finding: { type: 'imaging', title: 'CT Staging — Abdomen & Pelvis', subtitle: 'With IV & Oral Contrast',
            results: [
              { name: 'Primary mass', val: '5.2 cm sigmoid colon mass — lumen-narrowing',         flag: 'critical' },
              { name: 'Lymph nodes',  val: 'Pericolic mesenteric lymphadenopathy',                 flag: 'critical' },
              { name: 'Liver',        val: 'Multiple hypodense hepatic lesions bilateral lobes — metastases', flag: 'critical' },
              { name: 'Peritoneum',   val: 'No peritoneal carcinomatosis',                         flag: 'normal'   },
              { name: 'Obstruction',  val: 'Partial — 30% luminal narrowing',                      flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Clinical Stage IV colorectal cancer (T3N1M1) — bilobar hepatic metastases. Resectability of liver mets determines treatment strategy. Hepatobiliary surgery consult needed.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_gi_onc', label: 'Gastroenterology + Oncology Referral', icon: 'consult', cost: null, points: 40,
          finding: { type: 'consult', title: 'GI Oncology Consultation', subtitle: 'Dr. Thompson, GI Oncology',
            results: [
              { name: 'Colonoscopy',    val: 'Urgent — tissue biopsy for histology and molecular testing',   flag: 'critical' },
              { name: 'Molecular',      val: 'MSI-H/dMMR, RAS (KRAS/NRAS), BRAF V600E testing',            flag: 'critical' },
              { name: 'Treatment',      val: 'FOLFOX or FOLFIRI ± bevacizumab depending on RAS status',     flag: 'abnormal' },
              { name: 'Hepatic mets',   val: 'Hepatobiliary surgery referral — assess resectability',        flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'MSI-H/dMMR tumors respond to immune checkpoint inhibitors (pembrolizumab). RAS wild-type tumors may benefit from anti-EGFR therapy (cetuximab/panitumumab).' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_colonoscopy_onc', label: 'Urgent Colonoscopy + Oncology Referral', icon: 'consult', outcome: 'correct', points: 200,
        feedback: { title: 'Correct Oncologic Workup', grade: 'Excellent',
          body: 'Nancy has clinical Stage IV colorectal cancer. Urgent colonoscopy for tissue biopsy and molecular profiling, oncology referral, and hepatobiliary surgery assessment of liver metastases resectability is the correct approach. Molecular testing guides chemotherapy regimen selection.' } },
      { id: 'disp_iron_only', label: 'Iron Supplementation — Repeat CBC in 3 months', icon: 'rx', outcome: 'incorrect', points: -120,
        feedback: { title: 'Dangerous Delay — Cancer Missed', grade: 'Fatal Error',
          body: 'Treating iron deficiency without investigating the source in a 61-year-old post-menopausal woman is a critical error. Iron deficiency at this age requires lower GI evaluation. The palpable mass, rectal bleeding, weight loss, and elevated CEA confirm colorectal cancer.' } },
      { id: 'disp_hemorrhoid_tx', label: 'Hemorrhoid Cream — Reassurance', icon: 'home', outcome: 'incorrect', points: -150,
        feedback: { title: 'Fatal Misdiagnosis', grade: 'Fatal Error',
          body: 'Treating rectal bleeding as hemorrhoids in a 61-year-old with weight loss, pencil-thin stools, palpable rectal mass, hepatomegaly, and family history of colon cancer is a catastrophic misdiagnosis. All rectal bleeding in patients over 50 requires colonoscopy.' } },
      { id: 'disp_egd_only', label: 'Upper Endoscopy — Iron Deficiency Workup', icon: 'rx', outcome: 'partial', points: 20,
        feedback: { title: 'Partial — Lower GI Source Ignored', grade: 'Incomplete',
          body: 'Upper endoscopy is a reasonable step for iron deficiency workup, but this patient has clear signs of lower GI pathology (rectal bleeding, pencil-thin stools, palpable LLQ mass, palpable rectal mass on DRE). Lower endoscopy is the priority.' } },
    ],
    correctDisposition: 'disp_colonoscopy_onc',
    criticalActions: ['pe_crc', 'img_ct_crc', 'consult_gi_onc'],
  },

  // ─── Onc Case 3: Rachel W. — Non-Hodgkin Lymphoma ────
  {
    id: 13, specialty: 'onc',
    meta: { title: 'Painless Lymphadenopathy & B Symptoms', tagLabels: [{ t: 'URGENT', cls: 'urgent' }, { t: 'Hematology/Oncology', cls: '' }] },
    patient: {
      name: 'Rachel W.', age: 45, sex: 'Female', avatar: 'female', emoji: '👩',
      chiefComplaint: 'Painless neck lump, drenching night sweats, and 15 lb weight loss × 6 weeks',
      vitals: [
        { label: 'BP',     value: '118/72',  status: 'normal'     },
        { label: 'HR',     value: '88 bpm',  status: 'normal'     },
        { label: 'RR',     value: '14 /min', status: 'normal'     },
        { label: 'Temp',   value: '37.6 °C', status: 'borderline' },
        { label: 'O₂ Sat', value: '98%',     status: 'normal'     },
        { label: 'Wt Loss',value: '15 lbs',  status: 'abnormal'   },
      ],
      history: '45-year-old female noticing a painless right neck lump over 6 weeks, associated with B symptoms: drenching night sweats (soaking sheets), 15 lb weight loss, and intermittent fevers. Denies sore throat, URI symptoms, or travel to endemic areas. Fatigue is profound.',
      pmh: 'No significant medical history',
      medications: 'Oral contraceptive pill',
      allergies: 'NKDA',
      social: 'Non-smoker, social drinker. High school teacher.',
      family: 'No family history of hematologic malignancy',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_lymphoma', label: 'Lymph Node & Systemic Exam', icon: 'exam', cost: null, points: 40,
          finding: { type: 'exam', title: 'Lymph Node & Systemic Examination', subtitle: '',
            results: [
              { name: 'Right cervical',   val: 'Multiple firm, rubbery, non-tender nodes — largest 3.5 cm', flag: 'critical' },
              { name: 'Left cervical',    val: '2 nodes — 1.5–2 cm, firm, non-tender',                      flag: 'abnormal' },
              { name: 'Bilateral axilla', val: 'Multiple nodes — 1–2 cm bilateral',                         flag: 'critical' },
              { name: 'Spleen',          val: 'Splenomegaly — 3 cm below left costal margin',              flag: 'critical' },
              { name: 'Liver',           val: 'No hepatomegaly',                                             flag: 'normal'   },
              { name: 'Waldeyer ring',   val: 'Tonsils normal — no involvement',                            flag: 'normal'   },
            ],
            note: { type: 'alert', text: 'Painless bilateral lymphadenopathy + splenomegaly + B symptoms (fever, night sweats, >10% weight loss) = lymphoma until proven otherwise. Excisional biopsy required.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_ldh', label: 'CBC / LDH / Uric Acid / Beta-2M', icon: 'lab', cost: null, points: 30,
          finding: { type: 'labs', title: 'Hematologic & Prognostic Labs', subtitle: '',
            results: [
              { name: 'WBC',              val: '14.2 × 10³/µL', ref: '(4.5–11)',     flag: 'abnormal' },
              { name: 'Lymphocytes',      val: '62% — absolute lymphocytosis',        flag: 'critical' },
              { name: 'LDH',             val: '820 U/L',         ref: '(140–280)',    flag: 'critical' },
              { name: 'Uric acid',        val: '8.8 mg/dL',      ref: '(3.4–7.0)',   flag: 'critical' },
              { name: 'Beta-2 microglobulin', val: '4.2 mg/L',  ref: '(< 2.0)',     flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Markedly elevated LDH (3x normal) and beta-2 microglobulin are international prognostic index (IPI) risk factors — suggest aggressive lymphoma. Tumor lysis risk is high.' } } },
        { id: 'lab_hiv_ebv', label: 'HIV / EBV / CMV / Hepatitis Panel', icon: 'lab', cost: null, points: 15,
          finding: { type: 'labs', title: 'Infectious Serology', subtitle: 'Pre-Treatment Baseline',
            results: [
              { name: 'HIV',           val: 'Negative (4th gen Ag/Ab)',  flag: 'normal' },
              { name: 'EBV IgG',       val: 'Positive (prior exposure)', flag: 'normal' },
              { name: 'EBV IgM',       val: 'Negative (not acute EBV)',  flag: 'normal' },
              { name: 'Hep B surface Ag', val: 'Negative',               flag: 'normal' },
              { name: 'Hep C Ab',      val: 'Negative',                  flag: 'normal' },
            ],
            note: { type: '', text: 'Hepatitis B and C must be checked pre-rituximab — HBV reactivation is a serious complication. HIV excluded as a cause of lymphadenopathy.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_ct_lymphoma', label: 'CT Neck/Chest/Abdomen/Pelvis', icon: 'imaging', cost: null, points: 30,
          finding: { type: 'imaging', title: 'CT Staging', subtitle: 'Neck/Chest/Abdomen/Pelvis with Contrast',
            results: [
              { name: 'Cervical',   val: 'Bilateral cervical and supraclavicular adenopathy',      flag: 'critical' },
              { name: 'Mediastinum',val: 'Anterior mediastinal mass — 4.8 cm conglomerate',        flag: 'critical' },
              { name: 'Axillary',   val: 'Bilateral axillary adenopathy',                          flag: 'critical' },
              { name: 'Spleen',     val: 'Splenomegaly with splenic lesions',                      flag: 'critical' },
              { name: 'Abdomen',    val: 'Retroperitoneal and mesenteric lymphadenopathy',          flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Extensive nodal involvement above and below the diaphragm with splenic involvement = Ann Arbor Stage III–IV disease. PET/CT for baseline metabolic staging required.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_hem_onc', label: 'Hematology/Oncology Referral', icon: 'consult', cost: null, points: 40,
          finding: { type: 'consult', title: 'Hematology/Oncology Consultation', subtitle: 'Dr. Singh, Hematology/Oncology',
            results: [
              { name: 'Biopsy plan',  val: 'Excisional lymph node biopsy — right cervical node',         flag: 'critical' },
              { name: 'Why excisional',val: 'FNA insufficient — need architecture for lymphoma subtype', flag: 'critical' },
              { name: 'Staging',      val: 'PET/CT + bone marrow biopsy',                               flag: 'abnormal' },
              { name: 'Likely Dx',    val: 'DLBCL vs Hodgkin lymphoma — biopsy will clarify',           flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Excisional biopsy is mandatory — lymphoma classification (which determines treatment) requires intact lymph node architecture. FNA alone is insufficient.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_biopsy_lymphoma', label: 'Excisional Biopsy + Hem/Onc Referral', icon: 'consult', outcome: 'correct', points: 200,
        feedback: { title: 'Correct Lymphoma Workup', grade: 'Excellent',
          body: 'Rachel has signs of aggressive lymphoma with B symptoms, Stage III–IV disease by imaging, and markedly elevated LDH. Excisional lymph node biopsy for histologic classification, PET/CT metabolic staging, and hematology/oncology referral is the correct approach.' } },
      { id: 'disp_antibiotics_lymphoma', label: 'Antibiotics × 2 Weeks — Reactive Nodes', icon: 'rx', outcome: 'incorrect', points: -100,
        feedback: { title: 'Diagnostic Delay — Lymphoma Missed', grade: 'Critical Error',
          body: 'Treating bilateral painless lymphadenopathy with B symptoms, splenomegaly, and elevated LDH as reactive lymphadenopathy with antibiotics is dangerous. A 2-week antibiotic trial delays diagnosis of an aggressive lymphoma that requires prompt chemotherapy.' } },
      { id: 'disp_fna_only', label: 'FNA Biopsy Only — Outpatient Follow-up', icon: 'rx', outcome: 'partial', points: 30,
        feedback: { title: 'Partial — FNA Alone Is Insufficient', grade: 'Incomplete',
          body: 'FNA cytology can suggest lymphoma but is insufficient to classify the subtype (DLBCL vs Hodgkin vs FL, etc.) because lymphoma diagnosis requires evaluation of lymph node architecture. Excisional biopsy is the standard of care and needed before treatment decisions.' } },
      { id: 'disp_watch_lymphoma', label: 'Watchful Waiting — Recheck in 3 Months', icon: 'home', outcome: 'incorrect', points: -150,
        feedback: { title: 'Dangerous — Aggressive Lymphoma Cannot Wait', grade: 'Fatal Error',
          body: 'The B symptoms, bilateral lymphadenopathy at multiple stations, splenomegaly, and LDH 3x normal suggest aggressive lymphoma (DLBCL). Diffuse large B-cell lymphoma can be fatal within weeks without treatment. Watchful waiting is not appropriate here.' } },
    ],
    correctDisposition: 'disp_biopsy_lymphoma',
    criticalActions: ['pe_lymphoma', 'img_ct_lymphoma', 'consult_hem_onc'],
  },

  // ─── Onc Case 4: Raymond K. — Acute Myeloid Leukemia ─
  {
    id: 14, specialty: 'onc',
    meta: { title: 'Pancytopenia & Blast Crisis', tagLabels: [{ t: 'CRITICAL', cls: 'urgent' }, { t: 'Hematology', cls: '' }] },
    patient: {
      name: 'Raymond K.', age: 58, sex: 'Male', avatar: 'male', emoji: '👨',
      chiefComplaint: 'Profound fatigue, easy bruising, recurrent infections, nosebleeds × 3 weeks',
      vitals: [
        { label: 'BP',     value: '108/68',  status: 'borderline' },
        { label: 'HR',     value: '108 bpm', status: 'abnormal'   },
        { label: 'RR',     value: '18 /min', status: 'borderline' },
        { label: 'Temp',   value: '38.6 °C', status: 'abnormal'   },
        { label: 'O₂ Sat', value: '96%',     status: 'borderline' },
        { label: 'Pain',   value: '3 / 10',  status: 'abnormal'   },
      ],
      history: '58-year-old male with 3 weeks of worsening fatigue, spontaneous bruising, gum bleeding, and recurrent infections treated twice with antibiotics without improvement. He notes nosebleeds that are difficult to stop. He was previously healthy and active but now cannot walk to his mailbox without resting.',
      pmh: 'No significant past history. Worked with industrial chemicals for 20 years.',
      medications: 'Amoxicillin (current)',
      allergies: 'NKDA',
      social: 'Non-smoker, social drinker. Recently retired industrial chemist.',
      family: 'No known hematologic malignancy',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_aml', label: 'Complete Physical Examination', icon: 'exam', cost: null, points: 35,
          finding: { type: 'exam', title: 'Physical Examination', subtitle: 'Complete',
            results: [
              { name: 'Skin',          val: 'Scattered petechiae and ecchymoses — trunk and extremities', flag: 'critical' },
              { name: 'Gums',          val: 'Gingival hypertrophy — infiltration by leukemic cells',     flag: 'critical' },
              { name: 'Pallor',        val: 'Severe conjunctival and mucosal pallor',                     flag: 'critical' },
              { name: 'Spleen',        val: 'Splenomegaly — 4 cm below costal margin',                   flag: 'abnormal' },
              { name: 'Liver',         val: 'Mild hepatomegaly',                                          flag: 'abnormal' },
              { name: 'Lymph nodes',   val: 'No lymphadenopathy',                                         flag: 'normal'   },
            ],
            note: { type: 'alert', text: 'Gingival hypertrophy is a hallmark of AML M4/M5 (monocytic differentiation). Petechiae with pallor and infection susceptibility = hematologic emergency.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_cbc_aml', label: 'CBC with Peripheral Smear', icon: 'lab', cost: 'stat', points: 50,
          finding: { type: 'labs', title: 'Complete Blood Count & Smear', subtitle: 'Stat',
            results: [
              { name: 'WBC',       val: '84,000 × 10³/µL',  ref: '(4.5–11)',    flag: 'critical' },
              { name: 'Blasts',    val: '> 20% on smear — Auer rods present',    flag: 'critical' },
              { name: 'Hgb',       val: '6.8 g/dL',          ref: '(13.5–17.5)', flag: 'critical' },
              { name: 'Platelets', val: '14,000 × 10³/µL',   ref: '(150–400)',   flag: 'critical' },
            ],
            note: { type: 'alert', text: '> 20% blasts on peripheral smear with Auer rods = AML diagnosis. This is a hematologic emergency. Immediate hematology consultation and hospital admission required.' } } },
        { id: 'lab_coag_aml', label: 'Coagulation Panel / DIC Screen', icon: 'lab', cost: 'stat', points: 30,
          finding: { type: 'labs', title: 'Coagulation & DIC Panel', subtitle: 'Stat',
            results: [
              { name: 'PT',          val: '18.2 sec',    ref: '(11–13.5)',    flag: 'critical' },
              { name: 'INR',         val: '1.8',         ref: '(0.9–1.1)',    flag: 'critical' },
              { name: 'Fibrinogen',  val: '84 mg/dL',    ref: '(200–400)',    flag: 'critical' },
              { name: 'D-Dimer',     val: '> 20,000',    ref: '(< 500)',      flag: 'critical' },
              { name: 'aPTT',        val: '52 sec',      ref: '(25–35)',      flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'DIC (disseminated intravascular coagulation) — consumption of clotting factors and fibrinogen. Especially common in AML M3 (APL). Emergency FFP and platelet transfusion.' } } },
        { id: 'lab_tumor_lysis', label: 'BMP / Uric Acid / LDH', icon: 'lab', cost: 'stat', points: 20,
          finding: { type: 'labs', title: 'Tumor Lysis Profile', subtitle: '',
            results: [
              { name: 'Uric acid',   val: '12.8 mg/dL',   ref: '(3.4–7.0)',  flag: 'critical' },
              { name: 'K+',          val: '5.8 mEq/L',    ref: '(3.5–5.0)',  flag: 'critical' },
              { name: 'Phosphorus',  val: '6.2 mg/dL',    ref: '(2.5–4.5)',  flag: 'critical' },
              { name: 'LDH',         val: '3,200 U/L',    ref: '(140–280)',  flag: 'critical' },
              { name: 'Creatinine',  val: '2.1 mg/dL',    ref: '(0.7–1.2)', flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Tumor lysis syndrome (TLS) — electrolyte derangements from rapid cell turnover. Hyperkalemia, hyperphosphatemia, hyperuricemia, acute kidney injury. IV fluids + rasburicase urgently.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_hem_aml', label: 'Hematology — Urgent (Same Day)', icon: 'consult', cost: 'stat', points: 45,
          finding: { type: 'consult', title: 'Hematology Emergency Consultation', subtitle: 'Dr. Singh, Hematology/Oncology',
            results: [
              { name: 'Diagnosis',    val: 'Acute Myeloid Leukemia — blast crisis',                       flag: 'critical' },
              { name: 'Bone marrow',  val: 'Emergency bone marrow biopsy + flow cytometry today',         flag: 'critical' },
              { name: 'Induction',    val: '7+3 regimen (cytarabine + idarubicin) once stabilized',       flag: 'critical' },
              { name: 'Supportive',   val: 'pRBC + platelet transfusion, broad-spectrum antibiotics, allopurinol/rasburicase', flag: 'critical' },
              { name: 'APL concern',  val: 'If APL (M3): start ATRA + arsenic immediately — most curable subtype', flag: 'critical' },
            ],
            note: { type: 'alert', text: 'AML is a hematologic emergency. Without treatment, median survival is weeks. Bone marrow biopsy defines subtype and guides therapy. If APL suspected, start ATRA immediately — do not wait for biopsy results.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_hem_admit_aml', label: 'Emergency Hematology — Admit to Hospital', icon: 'er', outcome: 'correct', points: 200,
        feedback: { title: 'Correct — Hematologic Emergency Managed', grade: 'Excellent',
          body: 'Raymond has AML with blast crisis, DIC, tumor lysis syndrome, and neutropenic fever. Emergency hematology consultation, hospital admission, bone marrow biopsy, supportive transfusions, and induction chemotherapy preparation is the correct approach. AML is potentially curable with prompt treatment.' } },
      { id: 'disp_iron_aml', label: 'Iron Supplements — Follow up CBC in 2 Weeks', icon: 'rx', outcome: 'incorrect', points: -200,
        feedback: { title: 'Fatal Error — AML Missed', grade: 'Fatal Error',
          body: 'This patient has blast crisis with WBC of 84,000, Hgb 6.8, platelets 14,000, DIC, and tumor lysis syndrome. Iron supplements are for iron deficiency anemia — this is acute myeloid leukemia. A 2-week delay could be fatal.' } },
      { id: 'disp_viral_aml', label: 'Discharge — Presumed Viral Illness', icon: 'home', outcome: 'incorrect', points: -200,
        feedback: { title: 'Fatal Error — AML Cannot Be Discharged', grade: 'Fatal Error',
          body: 'Discharging a patient with WBC 84k, blast crisis, DIC, neutropenic fever, and tumor lysis syndrome is incompatible with survival. This patient will die without immediate hospital admission and treatment.' } },
      { id: 'disp_ivig_aml', label: 'IVIG — Presumed Immune Thrombocytopenia', icon: 'rx', outcome: 'incorrect', points: -80,
        feedback: { title: 'Incorrect Diagnosis', grade: 'Critical Error',
          body: 'ITP causes isolated thrombocytopenia. This patient has pancytopenia (anemia + thrombocytopenia + elevated WBC with blasts), Auer rods on smear, gingival hypertrophy, and DIC — this is AML, not ITP. IVIG will not treat leukemia.' } },
    ],
    correctDisposition: 'disp_hem_admit_aml',
    criticalActions: ['lab_cbc_aml', 'consult_hem_aml', 'lab_coag_aml'],
  },

  // ══════════════════════════════════════════════════════
  //  ORTHOPEDICS
  // ══════════════════════════════════════════════════════

  // ─── Ortho Case 1: Dorothy K. — Hip Fracture ─────────
  {
    id: 15, specialty: 'ortho',
    meta: { title: 'Hip Pain After Fall', tagLabels: [{ t: 'URGENT', cls: 'urgent' }, { t: 'Orthopedics', cls: '' }] },
    patient: {
      name: 'Dorothy K.', age: 82, sex: 'Female', avatar: 'female', emoji: '👵',
      chiefComplaint: 'Right hip pain and inability to walk after falling in bedroom × 2 hours',
      vitals: [
        { label: 'BP',     value: '136/84',  status: 'normal'     },
        { label: 'HR',     value: '94 bpm',  status: 'normal'     },
        { label: 'RR',     value: '16 /min', status: 'normal'     },
        { label: 'Temp',   value: '37.0 °C', status: 'normal'     },
        { label: 'O₂ Sat', value: '97%',     status: 'normal'     },
        { label: 'Pain',   value: '8 / 10',  status: 'abnormal'   },
      ],
      history: '82-year-old woman who fell while getting out of bed this morning. Cannot bear weight on the right leg. Right hip and groin pain. She lives alone and lay on the floor for 1 hour before calling her daughter. Her last DEXA scan 3 years ago showed osteoporosis.',
      pmh: 'Osteoporosis, hypertension, chronic atrial fibrillation, mild cognitive impairment',
      medications: 'Apixaban 5 mg BID, amlodipine, donepezil, calcium, vitamin D',
      allergies: 'Morphine (nausea/vomiting)',
      social: 'Non-smoker, non-drinker. Lives alone, independent with ADLs prior to today.',
      family: 'Mother had hip fracture at 79',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_hip', label: 'Hip & Lower Extremity Exam', icon: 'exam', cost: null, points: 40,
          finding: { type: 'exam', title: 'Hip & Lower Extremity Examination', subtitle: '',
            results: [
              { name: 'Right leg position',  val: 'Shortened and externally rotated — classic fracture position', flag: 'critical' },
              { name: 'Range of motion',     val: 'Severely limited — any movement causes severe pain',           flag: 'critical' },
              { name: 'Groin tenderness',    val: 'Marked — on palpation over femoral head region',             flag: 'critical' },
              { name: 'Neurovascular',       val: 'Distal pulses intact bilaterally, sensation preserved',       flag: 'normal'   },
              { name: 'Skin',               val: 'No open wound, no lacerations',                               flag: 'normal'   },
            ],
            note: { type: 'alert', text: 'Shortened externally rotated right lower extremity with severe hip pain and inability to bear weight after fall in an elderly osteoporotic woman = femoral neck fracture until proven otherwise.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_preop_hip', label: 'Pre-op Labs (CBC, BMP, Coags, T&S)', icon: 'lab', cost: null, points: 25,
          finding: { type: 'labs', title: 'Pre-Operative Workup', subtitle: '',
            results: [
              { name: 'Hgb',       val: '10.8 g/dL',  ref: '(12.0–16.0)',  flag: 'abnormal' },
              { name: 'Platelets', val: '188 × 10³/µL',ref: '(150–400)',   flag: 'normal'   },
              { name: 'Creatinine',val: '1.3 mg/dL',  ref: '(0.5–1.1)',    flag: 'abnormal' },
              { name: 'K+',        val: '3.8 mEq/L',  ref: '(3.5–5.0)',   flag: 'normal'   },
              { name: 'INR',       val: '1.0',         ref: '(0.9–1.1)',   flag: 'normal'   },
              { name: 'Anti-Xa level', val: '0.08 IU/mL (apixaban effect detected)', ref: '', flag: 'abnormal' },
            ],
            note: { type: 'warn', text: 'Baseline anemia — may need transfusion. Apixaban on board — discuss with surgeon and anesthesia regarding reversal (andexanet alfa) vs. holding and waiting.' } } },
        { id: 'lab_ekg_hip', label: 'EKG (Pre-op Cardiac)', icon: 'lab', cost: null, points: 10,
          finding: { type: 'labs', title: 'Pre-operative Electrocardiogram', subtitle: '',
            results: [
              { name: 'Rhythm',  val: 'Atrial fibrillation — rate controlled (~88 bpm)', flag: 'abnormal' },
              { name: 'Rate',    val: '88 bpm — rate controlled',                         flag: 'normal'   },
              { name: 'ST/T',    val: 'No acute ST changes',                               flag: 'normal'   },
            ],
            note: { type: '', text: 'Known AFib — rate controlled. No acute cardiac abnormality. Discuss anticoagulation management with hematology/anesthesia for perioperative period.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_hip_xray', label: 'X-Ray Pelvis & Hip (AP/Lateral)', icon: 'imaging', cost: 'stat', points: 40,
          finding: { type: 'imaging', title: 'X-Ray Pelvis & Right Hip', subtitle: 'AP Pelvis + Cross-Table Lateral',
            results: [
              { name: 'Fracture',       val: 'Right femoral neck fracture — displaced (Garden Type III)',   flag: 'critical' },
              { name: 'Displacement',   val: 'Varus angulation with posterior tilt',                        flag: 'critical' },
              { name: 'Acetabulum',     val: 'Intact — no associated acetabular fracture',                 flag: 'normal'   },
              { name: 'Osteopenia',     val: 'Severe — loss of trabecular bone throughout',               flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Displaced Garden III femoral neck fracture. High risk of avascular necrosis (AVN) with internal fixation. Hemiarthroplasty or total hip arthroplasty preferred at this age.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_ortho_hip', label: 'Orthopedic Surgery Consult', icon: 'consult', cost: 'stat', points: 35,
          finding: { type: 'consult', title: 'Orthopedic Surgery Consultation', subtitle: 'Dr. Park, Orthopedic Surgery',
            results: [
              { name: 'Diagnosis',   val: 'Displaced right femoral neck fracture — Garden III',                   flag: 'critical' },
              { name: 'Surgery',     val: 'Bipolar hemiarthroplasty — within 24–48 hours',                       flag: 'critical' },
              { name: 'Pre-op',      val: 'Hold apixaban, pain management (acetaminophen + fascia iliaca block)', flag: 'abnormal' },
              { name: 'Anesthesia',  val: 'Spinal anesthesia preferred — lower mortality in elderly hip fx',     flag: 'abnormal' },
              { name: 'Post-op',     val: 'Immediate weight bearing as tolerated, PT from POD 1',               flag: 'normal'   },
            ],
            note: { type: 'alert', text: 'Every 24-hour delay in hip fracture surgery increases 30-day mortality by ~10% in elderly patients. Target: operative within 24–48 hours.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_ortho_surgery', label: 'Ortho Consult — Hemiarthroplasty within 24–48 h', icon: 'er', outcome: 'correct', points: 200,
        feedback: { title: 'Correct — Surgical Management of Hip Fracture', grade: 'Excellent',
          body: 'Dorothy has a displaced Garden III femoral neck fracture. Immediate orthopedic surgery consultation, pre-operative optimization (anticoagulation management, pain control, medical optimization), and hemiarthroplasty within 24–48 hours is the gold standard. Delay increases mortality.' } },
      { id: 'disp_conservative_hip', label: 'Bedrest & Pain Management — No Surgery', icon: 'admit', outcome: 'incorrect', points: -150,
        feedback: { title: 'Incorrect — Non-operative Management Is Inappropriate', grade: 'Critical Error',
          body: 'Non-operative management of a displaced femoral neck fracture in an ambulatory patient leads to non-union, avascular necrosis, prolonged immobility, and high mortality (pneumonia, DVT, pressure sores). Surgery within 24–48 hours is the standard of care.' } },
      { id: 'disp_admit_morning', label: 'Admit for Pain Meds — Morning Surgical Consult', icon: 'admit', outcome: 'partial', points: 60,
        feedback: { title: 'Partial — Consult Should Not Wait Until Morning', grade: 'Incomplete',
          body: 'While admission is correct, delaying orthopedic consultation until morning increases the time to surgery beyond optimal windows. Orthopedic consultation should be obtained immediately upon diagnosis to plan surgery within 24–48 hours.' } },
      { id: 'disp_home_hip', label: 'Send Home with Crutches & NSAIDs', icon: 'home', outcome: 'incorrect', points: -200,
        feedback: { title: 'Fatal Error — Displaced Fracture Cannot Bear Weight', grade: 'Fatal Error',
          body: 'A displaced Garden III femoral neck fracture is unstable and cannot support weight-bearing. Sending home with crutches risks complete displacement, neurovascular injury, and non-union. This patient requires surgical fixation.' } },
    ],
    correctDisposition: 'disp_ortho_surgery',
    criticalActions: ['img_hip_xray', 'consult_ortho_hip', 'pe_hip'],
  },

  // ─── Ortho Case 2: Tyler M. — ACL Tear ───────────────
  {
    id: 16, specialty: 'ortho',
    meta: { title: 'Knee Injury — Athletic', tagLabels: [{ t: 'ACUTE', cls: 'moderate' }, { t: 'Orthopedics', cls: '' }] },
    patient: {
      name: 'Tyler M.', age: 22, sex: 'Male', avatar: 'male', emoji: '👨',
      chiefComplaint: 'Left knee pain, swelling, and instability after soccer injury × 4 hours',
      vitals: [
        { label: 'BP',     value: '122/76',  status: 'normal'   },
        { label: 'HR',     value: '78 bpm',  status: 'normal'   },
        { label: 'RR',     value: '14 /min', status: 'normal'   },
        { label: 'Temp',   value: '37.0 °C', status: 'normal'   },
        { label: 'O₂ Sat', value: '99%',     status: 'normal'   },
        { label: 'Pain',   value: '7 / 10',  status: 'abnormal' },
      ],
      history: '22-year-old collegiate soccer player. During a game, he planted his left foot and pivoted, immediately hearing and feeling a "pop." He collapsed in immediate pain, and the knee rapidly swelled. He cannot bear weight. The injury occurred on a cut-and-turn mechanism — a classic ACL injury pattern.',
      pmh: 'No significant medical history',
      medications: 'Ibuprofen 400 mg (already taken)',
      allergies: 'NKDA',
      social: 'Non-smoker, social drinker. Collegiate soccer, wants to continue athletics.',
      family: 'Non-contributory',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_knee', label: 'Knee Stability & Ligament Exam', icon: 'exam', cost: null, points: 50,
          finding: { type: 'exam', title: 'Knee Examination', subtitle: 'Ligament Stability Testing',
            results: [
              { name: 'Effusion',      val: 'Large — tense hemarthrosis, ballottement positive',        flag: 'critical' },
              { name: 'Lachman test',  val: 'POSITIVE — > 5 mm anterior translation, soft endpoint',   flag: 'critical' },
              { name: 'Ant. Drawer',   val: 'POSITIVE — increased anterior tibial translation',         flag: 'critical' },
              { name: 'Pivot shift',   val: 'POSITIVE — clunk felt with reduction',                     flag: 'critical' },
              { name: 'Valgus stress', val: 'Negative — MCL intact',                                    flag: 'normal'   },
              { name: 'Varus stress',  val: 'Negative — LCL intact',                                    flag: 'normal'   },
              { name: 'McMurray',      val: 'Equivocal — limited by effusion and pain',                 flag: 'borderline' },
            ],
            note: { type: 'alert', text: 'Lachman + Anterior Drawer + Pivot Shift positive = ACL tear until proven otherwise. Lachman is the most sensitive test (sensitivity 84%, specificity 98%) — perform first.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_xray_knee', label: 'X-Ray Left Knee (AP/Lateral/Merchant)', icon: 'imaging', cost: null, points: 20,
          finding: { type: 'imaging', title: 'X-Ray Left Knee', subtitle: 'Three Views',
            results: [
              { name: 'Fracture',       val: 'No bony fracture identified',                              flag: 'normal'   },
              { name: 'Joint space',    val: 'Preserved medial and lateral joint spaces',                flag: 'normal'   },
              { name: 'Effusion',       val: 'Large joint effusion visible on lateral view',             flag: 'abnormal' },
              { name: 'Segond fx',      val: 'Not present (would indicate complete ACL tear)',           flag: 'normal'   },
            ],
            note: { type: '', text: 'X-ray rules out fracture. A Segond fracture (lateral tibial avulsion) when present is pathognomonic for ACL tear. MRI is needed for soft tissue diagnosis.' } } },
        { id: 'img_mri_knee', label: 'MRI Left Knee (Definitive)', icon: 'imaging', cost: null, points: 40,
          finding: { type: 'imaging', title: 'MRI Left Knee', subtitle: '3T — With and Without Contrast',
            results: [
              { name: 'ACL',           val: 'COMPLETE TEAR — discontinuity mid-substance',              flag: 'critical' },
              { name: 'PCL',           val: 'Intact',                                                   flag: 'normal'   },
              { name: 'Medial meniscus',val: 'Intact',                                                  flag: 'normal'   },
              { name: 'Lateral meniscus',val: 'Posterior horn — small partial tear',                    flag: 'abnormal' },
              { name: 'Bone bruise',   val: 'Anterolateral tibial plateau + lateral femoral condyle — pivot shift pattern', flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Complete ACL tear confirmed. Pivot shift bone bruise pattern on MRI is highly characteristic of ACL mechanism injury. Concurrent lateral meniscal tear noted.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_ortho_acl', label: 'Orthopedic Surgery Referral', icon: 'consult', cost: null, points: 30,
          finding: { type: 'consult', title: 'Orthopedic Sports Medicine Consultation', subtitle: 'Dr. Park, Orthopedic Surgery',
            results: [
              { name: 'Diagnosis',      val: 'Complete left ACL tear + lateral meniscal partial tear',      flag: 'critical' },
              { name: 'Acute phase',    val: 'RICE, knee brace, crutches, PT referral × 4–6 weeks',        flag: 'abnormal' },
              { name: 'Surgery',        val: 'ACL reconstruction — timing after swelling subsides (3–6 wk)', flag: 'critical' },
              { name: 'Graft options',  val: 'Patellar tendon vs hamstring autograft — discuss with patient', flag: 'abnormal' },
              { name: 'Return to sport',val: '9–12 months post-reconstruction with full PT',               flag: 'abnormal' },
            ],
            note: { type: '', text: 'Young active athlete — ACL reconstruction is strongly recommended for return to cutting/pivoting sports. Non-operative management leads to pivot instability and progressive meniscal and cartilage damage.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_acl_correct', label: 'Ortho Referral + MRI + RICE + Brace', icon: 'consult', outcome: 'correct', points: 200,
        feedback: { title: 'Correct ACL Management', grade: 'Excellent',
          body: 'Tyler has a complete ACL tear with a concurrent lateral meniscal injury. Acute RICE, knee immobilizer, MRI for confirmation, and orthopedic referral for surgical ACL reconstruction (patellar tendon/hamstring autograft) is the correct approach for a young active athlete.' } },
      { id: 'disp_nsaids_only_acl', label: 'NSAIDs + PT — No Imaging or Referral', icon: 'rx', outcome: 'incorrect', points: -80,
        feedback: { title: 'Incomplete — ACL Injury Mismanaged', grade: 'Significant Error',
          body: 'NSAIDs alone without imaging or orthopedic referral for an ACL tear in a young athlete leads to recurrent instability, meniscal damage, and cartilage loss. A complete ACL tear in an active individual requires MRI confirmation and surgical consultation.' } },
      { id: 'disp_cast_acl', label: 'Full Extension Cast — Immobilize 6 Weeks', icon: 'rx', outcome: 'incorrect', points: -100,
        feedback: { title: 'Harmful — Full Extension Cast Is Contraindicated', grade: 'Critical Error',
          body: 'Full extension casting for an ACL tear causes arthrofibrosis (permanent stiffness), quadriceps atrophy, and DVT risk. Current management is functional bracing, early range of motion, and PT — not rigid immobilization.' } },
      { id: 'disp_discharge_acl', label: '"Just a Sprain" — Discharge Without Workup', icon: 'home', outcome: 'incorrect', points: -120,
        feedback: { title: 'Misdiagnosis — Positive Lachman Cannot Be Ignored', grade: 'Critical Error',
          body: 'Dismissing a positive Lachman test, anterior drawer, pivot shift, and large hemarthrosis as a "sprain" is incorrect. An acute hemarthrosis after a pivot injury in a young athlete is an ACL tear until proven otherwise. This warrants MRI and orthopedic referral.' } },
    ],
    correctDisposition: 'disp_acl_correct',
    criticalActions: ['pe_knee', 'img_mri_knee', 'consult_ortho_acl'],
  },

  // ─── Ortho Case 3: Alex T. — Compartment Syndrome ────
  {
    id: 17, specialty: 'ortho',
    meta: { title: 'Post-Fracture Leg Pain', tagLabels: [{ t: 'CRITICAL', cls: 'urgent' }, { t: 'Orthopedics', cls: '' }] },
    patient: {
      name: 'Alex T.', age: 19, sex: 'Male', avatar: 'male', emoji: '👨',
      chiefComplaint: 'Severe worsening lower leg pain 6 hours after tibia fracture casting',
      vitals: [
        { label: 'BP',     value: '124/80',  status: 'normal'     },
        { label: 'HR',     value: '116 bpm', status: 'abnormal'   },
        { label: 'RR',     value: '18 /min', status: 'borderline' },
        { label: 'Temp',   value: '37.0 °C', status: 'normal'     },
        { label: 'O₂ Sat', value: '99%',     status: 'normal'     },
        { label: 'Pain',   value: '10 / 10', status: 'abnormal'   },
      ],
      history: '19-year-old male who had a right tibial shaft fracture splinted 6 hours ago after a motorcycle accident. He now reports severe and increasing pain in his right lower leg, far out of proportion to what is expected. His pain is no longer controlled by IV morphine. He also reports numbness on the dorsum of his foot.',
      pmh: 'No significant medical history',
      medications: 'Morphine 4 mg IV (given × 2, inadequate relief)',
      allergies: 'NKDA',
      social: 'Non-smoker. University student. Motorcycle enthusiast.',
      family: 'Non-contributory',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_compartment', label: 'Compartment & Neurovascular Exam', icon: 'exam', cost: null, points: 50,
          finding: { type: 'exam', title: 'Compartment Pressure & Neurovascular Assessment', subtitle: 'Right Lower Leg',
            results: [
              { name: 'Anterior compartment', val: 'Rock hard, tense, tender on palpation',                flag: 'critical' },
              { name: 'Passive stretch',       val: 'EXCRUCIATING pain with passive toe dorsiflexion',     flag: 'critical' },
              { name: 'Paresthesias',          val: 'Numbness — dorsal foot and first web space (deep peroneal N)', flag: 'critical' },
              { name: 'Capillary refill',      val: '3 seconds — delayed',                                 flag: 'abnormal' },
              { name: 'Distal pulse',          val: 'Dorsalis pedis present but weakened',                 flag: 'abnormal' },
              { name: 'Skin',                  val: 'Intact — no open fracture',                           flag: 'normal'   },
            ],
            note: { type: 'alert', text: 'Pain with passive stretch + hard compartment + paresthesias = compartment syndrome. This is a surgical emergency. Do NOT wait for pulses to be absent — that is a very late and devastating sign.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_compartment_press', label: 'Compartment Pressure Measurement', icon: 'lab', cost: 'stat', points: 50,
          finding: { type: 'labs', title: 'Compartment Pressure Measurement', subtitle: 'Stryker STIC Device',
            results: [
              { name: 'Anterior compartment',        val: '48 mmHg (critical > 30 mmHg)',   flag: 'critical' },
              { name: 'Lateral compartment',         val: '34 mmHg',                         flag: 'critical' },
              { name: 'Superficial posterior',       val: '26 mmHg',                         flag: 'abnormal' },
              { name: 'Deep posterior',              val: '38 mmHg',                         flag: 'critical' },
              { name: 'Delta P (DBP - compartment)', val: '32 mmHg (critical if < 30)',     flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Compartment pressure > 30 mmHg (or delta P < 30 mmHg) = fasciotomy indicated immediately. Irreversible muscle necrosis begins within 6 hours of ischemia.' } } },
        { id: 'lab_ck_rhabdo', label: 'CK / BMP / Urinalysis (Rhabdomyolysis Screen)', icon: 'lab', cost: 'stat', points: 20,
          finding: { type: 'labs', title: 'Muscle Necrosis & Renal Function', subtitle: '',
            results: [
              { name: 'Creatine Kinase (CK)',  val: '28,400 U/L',   ref: '(< 200)',    flag: 'critical' },
              { name: 'Creatinine',            val: '1.6 mg/dL',    ref: '(0.7–1.2)', flag: 'abnormal' },
              { name: 'Myoglobinuria',         val: 'Urine "tea-colored" — myoglobin positive', flag: 'critical' },
              { name: 'K+',                    val: '5.4 mEq/L',    ref: '(3.5–5.0)', flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Markedly elevated CK with myoglobinuria = rhabdomyolysis from muscle ischemia. Aggressive IV fluid resuscitation to protect kidneys — target UO > 200 mL/hr.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_ortho_fasciotomy', label: 'Orthopedic Surgery — Emergency', icon: 'consult', cost: 'stat', points: 45,
          finding: { type: 'consult', title: 'Orthopedic Surgery — Emergency Consultation', subtitle: 'Dr. Park, Orthopedic Surgery',
            results: [
              { name: 'Diagnosis',   val: 'Acute compartment syndrome — right lower leg',                        flag: 'critical' },
              { name: 'Treatment',   val: 'EMERGENCY 4-compartment fasciotomy — OR within 1 hour',              flag: 'critical' },
              { name: 'Immediate',   val: 'Remove all constrictive dressings/cast NOW, elevate to heart level',  flag: 'critical' },
              { name: 'Prognosis',   val: 'Delay > 6 hours: irreversible nerve/muscle damage, possible amputation', flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Do not elevate extremity above heart level (reduces perfusion pressure). Remove cast IMMEDIATELY. OR for fasciotomy within 60 minutes. Every minute counts.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_fasciotomy', label: 'Emergency Fasciotomy — Remove Cast Now', icon: 'er', outcome: 'correct', points: 200,
        feedback: { title: 'Correct — Life- and Limb-Saving Decision', grade: 'Excellent',
          body: 'Alex has acute compartment syndrome with compartment pressures > 30 mmHg, positive passive stretch sign, paresthesias, and rhabdomyolysis. Immediate removal of the constrictive cast and emergency 4-compartment fasciotomy is the only treatment. Every minute of delay risks permanent nerve damage, muscle necrosis, and possible amputation.' } },
      { id: 'disp_ice_elevate', label: 'Ice + Elevate + Increase Pain Meds', icon: 'rx', outcome: 'incorrect', points: -200,
        feedback: { title: 'Fatal Error — Delays Life-Saving Surgery', grade: 'Fatal Error',
          body: 'Elevating above heart level reduces perfusion pressure to the already ischemic compartment, worsening necrosis. Ice application may mask symptoms. Increasing opioids treats the symptom but not the cause. This is a surgical emergency — fasciotomy cannot be delayed.' } },
      { id: 'disp_mri_cs', label: 'MRI to Evaluate for DVT', icon: 'imaging', outcome: 'incorrect', points: -150,
        feedback: { title: 'Incorrect — DVT Evaluation Wastes Critical Time', grade: 'Critical Error',
          body: 'MRI for DVT evaluation while compartment syndrome is suspected delays fasciotomy by hours. The clinical picture (hard compartment, positive passive stretch, paresthesias, compartment pressure > 30 mmHg) confirms compartment syndrome — no further imaging is needed before fasciotomy.' } },
      { id: 'disp_loosen_cast', label: 'Loosen Cast — Observe for 1 Hour', icon: 'admit', outcome: 'partial', points: 30,
        feedback: { title: 'Partial — Correct First Step, But Surgery Is Needed', grade: 'Incomplete',
          body: 'Loosening or bivalving the cast is the correct first step and can provide temporary relief. However, with compartment pressures > 30 mmHg and active neurovascular compromise, observation alone is insufficient. Emergency fasciotomy must be performed without further delay.' } },
    ],
    correctDisposition: 'disp_fasciotomy',
    criticalActions: ['pe_compartment', 'lab_compartment_press', 'consult_ortho_fasciotomy'],
  },

  // ─── Ortho Case 4: Edna P. — Vertebral Compression Fx ─
  {
    id: 18, specialty: 'ortho',
    meta: { title: 'Sudden Back Pain — Minimal Trauma', tagLabels: [{ t: 'ACUTE', cls: 'moderate' }, { t: 'Spine', cls: '' }] },
    patient: {
      name: 'Edna P.', age: 76, sex: 'Female', avatar: 'female', emoji: '👵',
      chiefComplaint: 'Sudden severe mid-back pain after lifting grocery bags × 2 days',
      vitals: [
        { label: 'BP',     value: '142/86',  status: 'abnormal'   },
        { label: 'HR',     value: '76 bpm',  status: 'normal'     },
        { label: 'RR',     value: '14 /min', status: 'normal'     },
        { label: 'Temp',   value: '37.0 °C', status: 'normal'     },
        { label: 'O₂ Sat', value: '97%',     status: 'normal'     },
        { label: 'Pain',   value: '7 / 10',  status: 'abnormal'   },
      ],
      history: '76-year-old woman with sudden onset severe mid-thoracic back pain while lifting light grocery bags 2 days ago. Pain is worst with sitting up and walking. She has lost 1.5 inches in height over the past 5 years. She has been on oral prednisone 10 mg daily for COPD for 3 years. No bowel/bladder changes, no leg weakness, no saddle anesthesia.',
      pmh: 'COPD on long-term corticosteroids, hypertension, osteoporosis (previously told at DEXA scan)',
      medications: 'Prednisone 10 mg QD, tiotropium, salbutamol PRN, amlodipine, calcium 600 mg QD',
      allergies: 'Codeine (nausea)',
      social: 'Non-smoker, non-drinker. Lives with husband.',
      family: 'Mother with "humped back" — presumed osteoporosis',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_spine', label: 'Spine & Neurological Exam', icon: 'exam', cost: null, points: 35,
          finding: { type: 'exam', title: 'Spine & Neurological Examination', subtitle: '',
            results: [
              { name: 'Midline tenderness', val: 'Severe point tenderness T8–T10 spinous processes',    flag: 'critical' },
              { name: 'Kyphosis',           val: 'Pronounced thoracic kyphosis (Dowager\'s hump)',      flag: 'abnormal' },
              { name: 'Height loss',        val: '3.8 cm height loss over 5 years',                    flag: 'abnormal' },
              { name: 'Motor strength',     val: 'Full 5/5 bilateral lower extremities',               flag: 'normal'   },
              { name: 'Sensation',          val: 'Intact — no dermatomal loss, no saddle anesthesia',  flag: 'normal'   },
              { name: 'Reflexes',           val: 'Symmetric 2+ bilaterally',                           flag: 'normal'   },
            ],
            note: { type: 'warn', text: 'Point tenderness + kyphosis + height loss + minimal trauma mechanism in a 76-year-old on chronic steroids = vertebral compression fracture. No neurological compromise — reassuring.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_bone_metab', label: 'Calcium / Vitamin D / PTH / Protein Electrophoresis', icon: 'lab', cost: null, points: 30,
          finding: { type: 'labs', title: 'Bone Metabolism & Malignancy Screen', subtitle: '',
            results: [
              { name: 'Ca²⁺',           val: '9.4 mg/dL',    ref: '(8.5–10.5)',  flag: 'normal'   },
              { name: 'Vitamin D (25-OH)',val: '11 ng/mL',    ref: '(30–100)',    flag: 'critical' },
              { name: 'PTH',             val: '88 pg/mL',     ref: '(15–65)',     flag: 'abnormal' },
              { name: 'SPEP',            val: 'No M-spike — normal protein electrophoresis',       flag: 'normal'   },
              { name: 'PSA / CA-125',    val: 'Not applicable — female, ordered appropriately',   flag: 'normal'   },
            ],
            note: { type: 'warn', text: 'Severe vitamin D deficiency + secondary hyperparathyroidism — accelerates bone loss especially on corticosteroids. No SPEP M-spike reduces concern for multiple myeloma.' } } },
        { id: 'lab_cbc_spine', label: 'CBC / ESR / CRP (Rule Out Malignancy/Infection)', icon: 'lab', cost: null, points: 15,
          finding: { type: 'labs', title: 'Blood Count & Inflammatory Markers', subtitle: '',
            results: [
              { name: 'WBC',  val: '7.8 × 10³/µL', ref: '(4.5–11)',  flag: 'normal'   },
              { name: 'Hgb',  val: '11.2 g/dL',     ref: '(12–16)',  flag: 'abnormal' },
              { name: 'ESR',  val: '44 mm/hr',       ref: '(< 20)',   flag: 'abnormal' },
              { name: 'CRP',  val: '8 mg/L',         ref: '(< 5)',    flag: 'abnormal' },
            ],
            note: { type: '', text: 'Mildly elevated ESR/CRP likely reflect chronic inflammation from COPD and fracture response — not specific for malignancy or infection. Normal WBC is reassuring.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_xray_spine', label: 'X-Ray Thoracic Spine (AP/Lateral)', icon: 'imaging', cost: null, points: 30,
          finding: { type: 'imaging', title: 'X-Ray Thoracic Spine', subtitle: 'AP & Lateral',
            results: [
              { name: 'T9 vertebra',   val: 'Acute compression fracture — 45% anterior height loss',       flag: 'critical' },
              { name: 'T7 vertebra',   val: 'Old healed compression fracture — chronic',                   flag: 'abnormal' },
              { name: 'Alignment',     val: 'Kyphotic deformity — exacerbated by acute fracture',         flag: 'abnormal' },
              { name: 'Pedicles',      val: 'Intact at T9 — no pedicle involvement',                      flag: 'normal'   },
              { name: 'Osteopenia',    val: 'Severe generalized osteopenia throughout',                    flag: 'critical' },
            ],
            note: { type: 'warn', text: 'Acute T9 VCF with prior fractures indicates severe osteoporosis and high re-fracture risk. MRI should be done to assess acuity and rule out cord/thecal sac compression.' } } },
        { id: 'img_mri_spine', label: 'MRI Thoracic Spine', icon: 'imaging', cost: null, points: 25,
          finding: { type: 'imaging', title: 'MRI Thoracic Spine', subtitle: 'T1, T2, STIR sequences',
            results: [
              { name: 'T9 edema',       val: 'Acute — bone marrow edema on STIR',                     flag: 'critical' },
              { name: 'Cord',           val: 'No spinal cord compression',                             flag: 'normal'   },
              { name: 'Thecal sac',     val: 'Mild indentation but adequate CSF signal present',      flag: 'borderline' },
              { name: 'Posterior wall', val: 'Intact — no retropulsion of bone fragments',            flag: 'normal'   },
              { name: 'Malignancy',     val: 'No signal characteristics of metastatic lesion',        flag: 'normal'   },
            ],
            note: { type: '', text: 'Benign osteoporotic compression fracture — no cord compression, no posterior wall breach, no malignancy signal. Conservative management appropriate.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_spine', label: 'Spine Surgery / Osteoporosis Consult', icon: 'consult', cost: null, points: 30,
          finding: { type: 'consult', title: 'Spine Surgery & Osteoporosis Consultation', subtitle: 'Dr. Park, Spine Surgery',
            results: [
              { name: 'Surgical need',  val: 'Not indicated — no cord compression, no instability',        flag: 'normal'   },
              { name: 'Kyphoplasty',    val: 'Consider if pain not controlled at 6–8 weeks',              flag: 'abnormal' },
              { name: 'Pain management',val: 'Acetaminophen + calcitonin nasal spray × 2 weeks',          flag: 'abnormal' },
              { name: 'Osteoporosis',   val: 'Start zoledronic acid + calcium 1200 mg + vitamin D 2000 IU', flag: 'critical' },
              { name: 'Steroid impact', val: 'Prednisone is a major risk factor — liaison with pulmonology re: dose reduction', flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Without bisphosphonate therapy, re-fracture risk at another vertebral level is 20% within 1 year. Treat the underlying osteoporosis aggressively.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_vcf_correct', label: 'Osteoporosis Tx + Spine Referral + Pain Mgmt', icon: 'consult', outcome: 'correct', points: 200,
        feedback: { title: 'Correct Vertebral Compression Fracture Management', grade: 'Excellent',
          body: 'Edna has an acute T9 VCF from corticosteroid-induced osteoporosis. The correct approach is pain management, vitamin D correction, initiation of anti-osteoporotic therapy (bisphosphonate or denosumab), spine consultation for possible kyphoplasty if pain persists, and addressing the steroid dose.' } },
      { id: 'disp_pain_only_vcf', label: 'Pain Meds Only — Bedrest', icon: 'rx', outcome: 'partial', points: 40,
        feedback: { title: 'Partial — Pain Management Without Treating Root Cause', grade: 'Incomplete',
          body: 'Pain management addresses the immediate symptom but the underlying severe osteoporosis (corticosteroid-induced, vitamin D deficient) must be treated with bisphosphonate therapy to prevent future vertebral and hip fractures, which carry significant mortality.' } },
      { id: 'disp_no_imaging_vcf', label: 'Muscle Strain — Muscle Relaxants', icon: 'home', outcome: 'incorrect', points: -100,
        feedback: { title: 'Dangerous Misdiagnosis', grade: 'Critical Error',
          body: 'Attributing severe midline thoracic back pain with point tenderness after minimal trauma in a 76-year-old on chronic steroids to muscle strain is a serious error. Without imaging, a vertebral compression fracture is missed. This patient also has neurological red flags that require MRI evaluation.' } },
      { id: 'disp_urgent_surgery_vcf', label: 'Urgent Spinal Surgery — Fusion', icon: 'er', outcome: 'incorrect', points: -80,
        feedback: { title: 'Overly Aggressive — Surgery Not Indicated', grade: 'Significant Error',
          body: 'MRI shows no cord compression, no thecal sac compromise, and an intact posterior vertebral wall. Urgent spinal fusion is not indicated for a stable uncomplicated VCF. Surgery is reserved for neurological compromise or kyphoplasty for persistent pain after 6–8 weeks of conservative management.' } },
    ],
    correctDisposition: 'disp_vcf_correct',
    criticalActions: ['img_xray_spine', 'lab_bone_metab', 'consult_spine'],
  },

  // ══════════════════════════════════════════════════════
  //  EMERGENCY ROOM — ULTRA-RARE PRESENTATIONS
  // ══════════════════════════════════════════════════════

  // ─── ER Case 7: Naegleria fowleri ────────────────────
  {
    id: 19, specialty: 'er',
    meta: { title: 'Rapidly Progressive Meningoencephalitis', tagLabels: [{ t: 'CRITICAL', cls: 'urgent' }, { t: 'Infectious Disease', cls: '' }] },
    patient: {
      name: 'Tyler W.', age: 14, sex: 'Male', avatar: 'male', emoji: '👦',
      chiefComplaint: 'Sudden severe headache, fever, confusion — 18 hours, recent freshwater swimming',
      vitals: [
        { label: 'BP',     value: '118/72',  status: 'normal'     },
        { label: 'HR',     value: '126 bpm', status: 'abnormal'   },
        { label: 'RR',     value: '24 /min', status: 'abnormal'   },
        { label: 'Temp',   value: '40.2 °C', status: 'abnormal'   },
        { label: 'O₂ Sat', value: '97%',     status: 'normal'     },
        { label: 'GCS',    value: '10 / 15', status: 'abnormal'   },
      ],
      history: '14-year-old male who went wakeboarding at a warm freshwater lake in Louisiana 5 days ago. Parents report he complained of headache and loss of smell 3 days ago. Today he developed severe bifrontal headache, high-grade fever, and is now confused and combative. He vomited twice en route. Neck is stiff. He has not responded to the ibuprofen given at home.',
      pmh: 'No significant past medical history. All vaccinations up to date.',
      medications: 'None',
      allergies: 'NKDA',
      social: 'Healthy active teenager. Non-smoker. 8th grade student.',
      family: 'Non-contributory',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_pam_neuro', label: 'Complete Neurological Exam', icon: 'exam', cost: null, points: 40,
          finding: { type: 'exam', title: 'Neurological Examination', subtitle: 'Detailed',
            results: [
              { name: 'Mental status',       val: 'GCS 10 — confused, agitated, combative',        flag: 'critical' },
              { name: 'Nuchal rigidity',     val: 'Severe — cannot flex chin to chest',             flag: 'critical' },
              { name: "Kernig's sign",       val: 'POSITIVE',                                        flag: 'critical' },
              { name: 'Olfaction',           val: 'Bilateral anosmia — cannot smell coffee sample', flag: 'critical' },
              { name: 'Photophobia',         val: 'Marked',                                          flag: 'abnormal' },
              { name: 'Papilledema',         val: 'Early bilateral papilledema',                    flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Bilateral anosmia + meningismus in a freshwater swimmer = Naegleria fowleri PAM until proven otherwise. N. fowleri enters through the olfactory nerve. This is nearly universally fatal — act in minutes.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_pam_csf', label: 'Lumbar Puncture & CSF Analysis (Urgent)', icon: 'lab', cost: 'stat', points: 50,
          finding: { type: 'labs', title: 'CSF Analysis', subtitle: 'Urgent — Lumbar Puncture',
            results: [
              { name: 'Appearance',      val: 'Bloody/xanthochromic — turbid, purulent',        flag: 'critical' },
              { name: 'Opening pressure',val: '380 mmH₂O (elevated > 200)',                    flag: 'critical' },
              { name: 'WBC',             val: '6,800 cells/µL — predominantly neutrophils',    flag: 'critical' },
              { name: 'RBC',             val: '12,000 cells/µL — not tap artifact',             flag: 'critical' },
              { name: 'Protein',         val: '410 mg/dL (ref < 45)',                            flag: 'critical' },
              { name: 'Glucose',         val: '18 mg/dL (serum 96) — very low ratio',           flag: 'critical' },
              { name: 'Gram stain',      val: 'No bacteria identified',                          flag: 'normal'   },
              { name: 'Wet prep',        val: 'MOTILE TROPHOZOITES IDENTIFIED',                 flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Motile amoebic trophozoites on CSF wet preparation = PAM. Gram-negative CSF with purulent pleocytosis and RBCs is characteristic. Do NOT wait for culture — begin treatment NOW.' } } },
        { id: 'lab_pam_basic', label: 'CBC / BMP / Blood Cultures', icon: 'lab', cost: 'stat', points: 20,
          finding: { type: 'labs', title: 'Basic Lab Panel', subtitle: 'Stat',
            results: [
              { name: 'WBC',         val: '22.1 × 10³/µL', ref: '(4.5–11)',  flag: 'critical' },
              { name: 'Na',          val: '130 mEq/L',       ref: '(136–145)', flag: 'critical' },
              { name: 'Blood culture',val: 'Negative (amoeba is not bacteremia)', flag: 'normal' },
            ],
            note: { type: 'warn', text: 'Hyponatremia likely from SIADH secondary to severe CNS infection. Negative blood cultures help distinguish from bacterial meningitis.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_pam_mri', label: 'MRI Brain (with contrast)', icon: 'imaging', cost: 'stat', points: 30,
          finding: { type: 'imaging', title: 'MRI Brain — Contrast-Enhanced', subtitle: 'Stat',
            results: [
              { name: 'Meningeal enhancement', val: 'Diffuse leptomeningeal enhancement',             flag: 'critical' },
              { name: 'Olfactory bulbs',        val: 'Bilateral olfactory bulb necrosis and edema',  flag: 'critical' },
              { name: 'Cerebral edema',         val: 'Diffuse — sulcal effacement, loss of cisterns', flag: 'critical' },
              { name: 'Hemorrhage',             val: 'Multifocal cortical hemorrhages',               flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Olfactory bulb necrosis is pathognomonic of PAM. Diffuse hemorrhagic meningoencephalitis — brain herniation imminent without aggressive treatment.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_pam_id', label: 'Infectious Disease + CDC Emergency Consult', icon: 'consult', cost: 'stat', points: 40,
          finding: { type: 'consult', title: 'Infectious Disease & CDC Emergency Consult', subtitle: 'Dr. Reyes, ID / CDC Emergency Operations',
            results: [
              { name: 'Diagnosis',      val: 'Primary Amoebic Meningoencephalitis — Naegleria fowleri', flag: 'critical' },
              { name: 'Amphotericin B', val: '1.5 mg/kg/day IV (liposomal) + intrathecal AmphoB',      flag: 'critical' },
              { name: 'Miltefosine',    val: '50 mg PO TID × 28 days (obtain via CDC)',                flag: 'critical' },
              { name: 'Rifampin',       val: '10 mg/kg/day IV + Azithromycin IV',                       flag: 'abnormal' },
              { name: 'ICP management', val: 'Hypothermia protocol, osmotic therapy, neuro-ICU',        flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Only ~5 survivors documented worldwide. CDC must be contacted immediately for miltefosine access. The "Milwaukee Protocol" (therapeutic hypothermia) has been associated with rare survival. Begin all agents simultaneously.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_pam_correct', label: 'Neuro-ICU + Amphotericin B + Miltefosine + CDC', icon: 'er', outcome: 'correct', points: 200,
        feedback: { title: 'Correct — Only Known Chance of Survival', grade: 'Excellent',
          body: 'Tyler has Primary Amoebic Meningoencephalitis caused by Naegleria fowleri. With >97% fatality, immediate multi-drug therapy (IV + intrathecal Amphotericin B, Miltefosine via CDC, Rifampin, Azithromycin), therapeutic hypothermia, and ICP management in neuro-ICU represents the only documented survival path. Every minute of delay worsens outcome.' } },
      { id: 'disp_pam_bacterial', label: 'Standard Bacterial Meningitis Protocol (Ceftriaxone + Vanc)', icon: 'rx', outcome: 'incorrect', points: -150,
        feedback: { title: 'Incorrect Pathogen — Fatal Delay', grade: 'Critical Error',
          body: 'Standard bacterial meningitis antibiotics have no activity against Naegleria fowleri. The CSF wet prep showing MOTILE TROPHOZOITES and the history of freshwater swimming should redirect diagnosis to PAM immediately. Bacterial meningitis protocols will fail — amoebicidal therapy must be started.' } },
      { id: 'disp_pam_admit_observe', label: 'Admit — Viral Encephalitis Protocol', icon: 'admit', outcome: 'incorrect', points: -200,
        feedback: { title: 'Misdiagnosis — Fatal Delay', grade: 'Fatal Error',
          body: 'Treating this as viral encephalitis wastes the only potential treatment window. The combination of freshwater swimming exposure, anosmia, bloody CSF with motile trophozoites on wet prep, and olfactory bulb necrosis on MRI is diagnostic of PAM. Acyclovir will not save this patient.' } },
    ],
    correctDisposition: 'disp_pam_correct',
    criticalActions: ['lab_pam_csf', 'consult_pam_id', 'pe_pam_neuro'],
  },

  // ─── ER Case 8: Lemierre's Syndrome ──────────────────
  {
    id: 20, specialty: 'er',
    meta: { title: 'Post-Pharyngitis Sepsis & Chest Pain', tagLabels: [{ t: 'URGENT', cls: 'urgent' }, { t: 'Infectious Disease', cls: '' }] },
    patient: {
      name: 'Connor B.', age: 19, sex: 'Male', avatar: 'male', emoji: '👨',
      chiefComplaint: 'Right neck pain, high fever, rigors, pleuritic chest pain — 5 days after "strep throat"',
      vitals: [
        { label: 'BP',     value: '98/62',   status: 'abnormal'   },
        { label: 'HR',     value: '132 bpm', status: 'abnormal'   },
        { label: 'RR',     value: '28 /min', status: 'abnormal'   },
        { label: 'Temp',   value: '39.8 °C', status: 'abnormal'   },
        { label: 'O₂ Sat', value: '92%',     status: 'abnormal'   },
        { label: 'Pain',   value: '8 / 10',  status: 'abnormal'   },
      ],
      history: '19-year-old college freshman who had a sore throat 2 weeks ago, saw urgent care, was told it was viral, and sent home. He seemed to improve briefly, then 5 days ago developed worsening right neck pain, spiking fevers with rigors, and today is in the ER with pleuritic chest pain, hemoptysis, and hypoxia. He appears toxic.',
      pmh: 'No significant history. Not on any medications at time of pharyngitis.',
      medications: 'Ibuprofen 600 mg PRN (self-prescribed)',
      allergies: 'NKDA',
      social: 'Non-smoker. College freshman living in dormitory. Socially drinks on weekends.',
      family: 'Non-contributory',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_lemierre', label: 'Head, Neck & Respiratory Exam', icon: 'exam', cost: null, points: 45,
          finding: { type: 'exam', title: 'Head, Neck & Pulmonary Examination', subtitle: '',
            results: [
              { name: 'Oropharynx',      val: 'Tonsillar erythema with peritonsillar fullness — residual pharyngitis', flag: 'abnormal' },
              { name: 'Right neck',      val: 'Tender, indurated cord along right SCM — IJV thrombosis', flag: 'critical' },
              { name: 'Cervical nodes',  val: 'Matted right anterior cervical lymphadenopathy',           flag: 'abnormal' },
              { name: 'Lung exam',       val: 'Decreased breath sounds right lower lobe, pleural rub',   flag: 'critical' },
              { name: 'Septic appearance', val: 'Diaphoretic, rigoring, altered, looks toxic',           flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Tender SCM cord + post-pharyngitis sepsis + pleuritic chest pain = Lemierre\'s Syndrome (septic thrombophlebitis of internal jugular vein) until proven otherwise.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_lemierre_cx', label: 'Blood Cultures × 2 (Aerobic & Anaerobic)', icon: 'lab', cost: 'stat', points: 50,
          finding: { type: 'labs', title: 'Blood Cultures', subtitle: 'Aerobic & Anaerobic — 2 sets',
            results: [
              { name: 'Preliminary',  val: 'Gram-negative pleomorphic rods (anaerobic bottle)',  flag: 'critical' },
              { name: 'Organism',     val: 'Fusobacterium necrophorum — 48h confirmed',           flag: 'critical' },
              { name: 'Sensitivity',  val: 'Sensitive to metronidazole, ampicillin-sulbactam',   flag: 'normal'   },
            ],
            note: { type: 'alert', text: 'Fusobacterium necrophorum is a gram-negative anaerobe — the causative agent of Lemierre\'s. It uniquely causes septic thrombophlebitis of the IJV and hematogenous spread to the lungs (septic pulmonary emboli).' } } },
        { id: 'lab_lemierre_panel', label: 'CBC / BMP / Coagulation', icon: 'lab', cost: 'stat', points: 20,
          finding: { type: 'labs', title: 'Comprehensive Lab Panel', subtitle: 'Stat',
            results: [
              { name: 'WBC',         val: '28.4 × 10³/µL', ref: '(4.5–11)',  flag: 'critical' },
              { name: 'Platelets',   val: '68 × 10³/µL',   ref: '(150–400)', flag: 'critical' },
              { name: 'INR',         val: '1.8',             ref: '(< 1.1)',   flag: 'abnormal' },
              { name: 'Lactate',     val: '4.2 mmol/L',      ref: '(< 2.0)',   flag: 'critical' },
              { name: 'Fibrinogen',  val: '680 mg/dL',       ref: '(200–400)', flag: 'abnormal' },
            ],
            note: { type: 'warn', text: 'Septic shock physiology (lactate 4.2), early DIC (thrombocytopenia, elevated INR). Aggressive fluid resuscitation and ICU-level care required.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_lemierre_ct', label: 'CT Neck & Chest with Contrast', icon: 'imaging', cost: 'stat', points: 50,
          finding: { type: 'imaging', title: 'CT Neck/Chest — Contrast-Enhanced', subtitle: 'Definitive',
            results: [
              { name: 'Right IJV',       val: 'Filling defect — thrombus extending from tonsillar fossa to subclavian junction', flag: 'critical' },
              { name: 'Lung (R lower)',  val: 'Multiple bilateral peripheral cavitating nodules — septic emboli',                 flag: 'critical' },
              { name: 'Right pleura',    val: 'Right-sided empyema — loculated fluid collection',                                 flag: 'critical' },
              { name: 'Mediastinum',     val: 'No mediastinitis',                                                                  flag: 'normal'   },
            ],
            note: { type: 'alert', text: 'IJV thrombus + cavitating septic pulmonary emboli = Lemierre\'s Syndrome confirmed. Right empyema may require thoracostomy drainage. This is the "forgotten disease" — missed by most clinicians.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_lemierre_id', label: 'Infectious Disease + Vascular Surgery Consult', icon: 'consult', cost: 'stat', points: 35,
          finding: { type: 'consult', title: 'Infectious Disease & Vascular Surgery', subtitle: 'Dr. Patel, ID / Dr. Torres, Vascular Surgery',
            results: [
              { name: 'Antibiotics',     val: 'Metronidazole 500mg IV q8h + Piperacillin-tazobactam',    flag: 'critical' },
              { name: 'Anticoagulation', val: 'Therapeutic LMWH — controversial but recommended in IJV thrombosis', flag: 'abnormal' },
              { name: 'Duration',        val: '6 weeks IV antibiotics minimum — IJV ligation if septic',  flag: 'abnormal' },
              { name: 'Thoracic',        val: 'Thoracentesis / thoracostomy for empyema drainage',        flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Anaerobic antibiotic coverage is essential — standard cephalosporins do NOT cover Fusobacterium. Add metronidazole or use a beta-lactam/beta-lactamase inhibitor.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_lemierre_correct', label: 'ICU — IV Anaerobic Abx + Anticoagulation + ID Consult', icon: 'er', outcome: 'correct', points: 200,
        feedback: { title: 'Correct — Lemierre\'s Requires Aggressive Management', grade: 'Excellent',
          body: 'Connor has Lemierre\'s Syndrome: Fusobacterium necrophorum septic thrombophlebitis of the right IJV with septic pulmonary emboli and empyema. ICU admission, anaerobic coverage (metronidazole + pip-tazo), therapeutic anticoagulation for the IJV thrombus, and thoracic drainage of empyema is correct. This "forgotten disease" carries significant mortality when missed.' } },
      { id: 'disp_lemierre_pe', label: 'Anticoagulate Only — Pulmonary Embolism Protocol', icon: 'rx', outcome: 'partial', points: 30,
        feedback: { title: 'Incomplete — Source Not Addressed', grade: 'Incomplete',
          body: 'Anticoagulation for the thrombosis is appropriate and you correctly identified the embolic picture, but this is SEPTIC embolism from Fusobacterium, not a bland PE. Without anaerobic antibiotics targeting Fusobacterium (metronidazole, pip-tazo), the infectious source continues to seed. Antibiotics are the primary intervention.' } },
      { id: 'disp_lemierre_standard_abx', label: 'Standard Sepsis Protocol — Ceftriaxone + Fluids', icon: 'admit', outcome: 'incorrect', points: -80,
        feedback: { title: 'Inadequate Coverage — Fusobacterium Missed', grade: 'Critical Error',
          body: 'Ceftriaxone has poor anaerobic coverage and inadequate activity against Fusobacterium necrophorum. Standard sepsis antibiotics without metronidazole or a beta-lactam/beta-lactamase inhibitor will fail to clear this infection. Additionally, the IJV thrombosis requires anticoagulation which was not addressed.' } },
    ],
    correctDisposition: 'disp_lemierre_correct',
    criticalActions: ['lab_lemierre_cx', 'img_lemierre_ct', 'consult_lemierre_id'],
  },

  // ─── ER Case 9: Ludwig's Angina ───────────────────────
  {
    id: 21, specialty: 'er',
    meta: { title: 'Neck Swelling & Muffled Voice', tagLabels: [{ t: 'CRITICAL', cls: 'urgent' }, { t: 'Airway Emergency', cls: '' }] },
    patient: {
      name: 'Raymond K.', age: 47, sex: 'Male', avatar: 'male', emoji: '👨',
      chiefComplaint: 'Severe jaw pain, neck swelling, difficulty swallowing, muffled voice — 3 days',
      vitals: [
        { label: 'BP',     value: '142/88',  status: 'abnormal'   },
        { label: 'HR',     value: '118 bpm', status: 'abnormal'   },
        { label: 'RR',     value: '22 /min', status: 'borderline' },
        { label: 'Temp',   value: '38.9 °C', status: 'abnormal'   },
        { label: 'O₂ Sat', value: '95%',     status: 'abnormal'   },
        { label: 'Pain',   value: '9 / 10',  status: 'abnormal'   },
      ],
      history: '47-year-old male with poorly controlled diabetes and no dental insurance who had a painful lower left molar for 3 weeks. 3 days ago his jaw and neck began swelling. Now presents with severe submandibular swelling, inability to fully open his mouth (trismus), muffled "hot potato" voice, difficulty swallowing his own saliva, and feels like he cannot breathe properly when lying down.',
      pmh: 'Type 2 Diabetes Mellitus (poorly controlled, HbA1c 11.8%), hypertension. No dental care in 6 years.',
      medications: 'Metformin 500 mg BID (inconsistent)',
      allergies: 'Clindamycin (rash)',
      social: 'Non-smoker, occasional beer. Construction worker. No dental insurance.',
      family: 'Non-contributory',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_ludwigs', label: 'Oropharyngeal & Neck Airway Assessment', icon: 'exam', cost: null, points: 50,
          finding: { type: 'exam', title: 'Oropharyngeal & Neck Examination', subtitle: 'Airway Priority',
            results: [
              { name: 'Trismus',          val: 'Maximum inter-incisor opening 12 mm (normal > 35 mm)',    flag: 'critical' },
              { name: 'Floor of mouth',   val: 'Indurated, tender, "woody" hardness — bilateral brawny edema', flag: 'critical' },
              { name: 'Tongue',           val: 'Elevated and displaced posteriorly — airway threat',      flag: 'critical' },
              { name: 'Voice',            val: 'Muffled "hot potato" dysphonia',                          flag: 'critical' },
              { name: 'Submandibular',    val: 'Bilateral firm non-fluctuant swelling extending to neck', flag: 'critical' },
              { name: 'O₂ on sitting up', val: 'Improves to 97% — cannot lie supine (airway collapses)', flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Bilateral submandibular woody induration + tongue elevation + trismus + "hot potato" voice = Ludwig\'s Angina. THIS IS AN AIRWAY EMERGENCY. Call anesthesia NOW for awake fiberoptic intubation before further assessment.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_ludwigs_panel', label: 'CBC / BMP / Blood Cultures / Glucose', icon: 'lab', cost: 'stat', points: 25,
          finding: { type: 'labs', title: 'Emergency Lab Panel', subtitle: 'Stat',
            results: [
              { name: 'WBC',     val: '24.6 × 10³/µL', ref: '(4.5–11)',   flag: 'critical' },
              { name: 'Glucose', val: '312 mg/dL',       ref: '(70–100)',   flag: 'critical' },
              { name: 'HbA1c',   val: '11.8%',           ref: '(< 5.7)',    flag: 'critical' },
              { name: 'Creatinine', val: '1.6 mg/dL',   ref: '(0.7–1.2)', flag: 'abnormal' },
              { name: 'Blood cultures', val: 'Drawn — preliminary negative (cellulitis, not abscess)', flag: 'normal' },
            ],
            note: { type: 'alert', text: 'Poorly controlled diabetes (HbA1c 11.8%) dramatically worsens polymicrobial head and neck infections. Diabetic patients have impaired leukocyte function — infection spreads rapidly through fascial planes.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_ludwigs_ct', label: 'CT Neck with Contrast (Soft Tissue Protocol)', icon: 'imaging', cost: 'stat', points: 40,
          finding: { type: 'imaging', title: 'CT Neck — Soft Tissue Contrast', subtitle: 'Stat — After Airway Secured',
            results: [
              { name: 'Sublingual space',     val: 'Bilateral phlegmon — no discrete abscess (cellulitis stage)', flag: 'critical' },
              { name: 'Submandibular space',  val: 'Bilateral involvement — "woody" edema pattern',             flag: 'critical' },
              { name: 'Parapharyngeal',       val: 'Right parapharyngeal extension — early spread',             flag: 'critical' },
              { name: 'Airway',               val: 'Trachea displaced and narrowed at oropharynx to 6 mm',      flag: 'critical' },
              { name: 'Dental origin',        val: 'Periapical abscess at left lower 2nd molar — source',       flag: 'abnormal' },
            ],
            note: { type: 'warn', text: 'CT ONLY after airway is secured — do not delay airway management for imaging. Spread to parapharyngeal space risks descending necrotizing mediastinitis, a lethal complication.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_ludwigs_ents', label: 'ENT + Anesthesia + Oral Surgery Consult', icon: 'consult', cost: 'stat', points: 40,
          finding: { type: 'consult', title: 'ENT, Anesthesia & Oral Surgery', subtitle: 'Dr. Wu, ENT / Dr. Kim, Anesthesia',
            results: [
              { name: 'Airway plan',  val: 'Awake fiberoptic intubation at bedside — tracheostomy on standby', flag: 'critical' },
              { name: 'Antibiotics',  val: 'Ampicillin-sulbactam 3g IV q6h + Metronidazole 500mg IV q8h',       flag: 'critical' },
              { name: 'Surgery',      val: 'Submandibular decompression incision and drainage in OR',            flag: 'critical' },
              { name: 'Dental source',val: 'Tooth #18 extraction under general anesthesia at time of I&D',      flag: 'abnormal' },
              { name: 'Steroids',     val: 'Dexamethasone 10 mg IV × 1 to reduce airway edema',                 flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Ludwig\'s Angina: never attempt blind intubation or RSI — airway distortion makes it nearly impossible without fiberoptic guidance. If unable to intubate, surgical airway (cricothyrotomy or tracheostomy) is lifesaving.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_ludwigs_correct', label: 'Awake Fiberoptic Intubation → OR → ICU', icon: 'er', outcome: 'correct', points: 200,
        feedback: { title: 'Correct — Airway First, Then Definitive Surgical Care', grade: 'Excellent',
          body: 'Raymond has Ludwig\'s Angina with imminent airway compromise. Awake fiberoptic intubation (with tracheostomy standby), IV polymicrobial antibiotics, and emergent OR for submandibular decompression + dental extraction is the correct management. Delaying airway management for any reason — including imaging — risks fatal asphyxiation.' } },
      { id: 'disp_ludwigs_abx_only', label: 'IV Antibiotics — Admit to Floor, Monitor', icon: 'admit', outcome: 'partial', points: -40,
        feedback: { title: 'Incomplete — Airway Emergency Underestimated', grade: 'Significant Error',
          body: 'IV antibiotics are necessary but insufficient. Ludwig\'s Angina requires immediate surgical airway planning and OR decompression. A 6 mm tracheal lumen can close completely with any positional change. Admitting without securing the airway and planning surgical drainage risks fatal airway collapse on the floor.' } },
      { id: 'disp_ludwigs_discharge', label: 'Oral Antibiotics — Dental Follow-up Next Week', icon: 'home', outcome: 'incorrect', points: -200,
        feedback: { title: 'Fatal Error — Airway Emergency Dismissed', grade: 'Fatal Error',
          body: 'This patient has bilateral fascial space infection with a 6 mm airway lumen. Discharge with oral antibiotics and delayed dental care will result in complete airway obstruction and death within hours. Oral antibiotics cannot penetrate the woody cellulitic tissue adequately.' } },
    ],
    correctDisposition: 'disp_ludwigs_correct',
    criticalActions: ['pe_ludwigs', 'img_ludwigs_ct', 'consult_ludwigs_ents'],
  },

  // ─── ER Case 10: Capnocytophaga Sepsis ───────────────
  {
    id: 22, specialty: 'er',
    meta: { title: 'Dog Bite Septic Shock', tagLabels: [{ t: 'CRITICAL', cls: 'urgent' }, { t: 'Infectious Disease', cls: '' }] },
    patient: {
      name: 'Gerald H.', age: 61, sex: 'Male', avatar: 'male', emoji: '👨',
      chiefComplaint: 'Rigors, purpuric rash, hypotension — 3 days after minor dog bite',
      vitals: [
        { label: 'BP',     value: '72/44',   status: 'abnormal'   },
        { label: 'HR',     value: '142 bpm', status: 'abnormal'   },
        { label: 'RR',     value: '30 /min', status: 'abnormal'   },
        { label: 'Temp',   value: '40.4 °C', status: 'abnormal'   },
        { label: 'O₂ Sat', value: '89%',     status: 'abnormal'   },
        { label: 'Lactate',value: '8.2 mmol',status: 'abnormal'   },
      ],
      history: '61-year-old male brought in by his wife in septic shock. Three days ago, their healthy family golden retriever nipped his hand — he barely bled, cleaned it with soap, dismissed it as trivial. He had a splenectomy following a motor vehicle accident 12 years ago. Yesterday he developed rigors; today he is barely arousable with a spreading purpuric rash on his extremities.',
      pmh: 'Asplenia (post-traumatic splenectomy 12 years ago), hypertension, type 2 diabetes. He was advised to have asplenia vaccinations but is not up to date.',
      medications: 'Amlodipine 10 mg, metformin 1000 mg BID',
      allergies: 'Sulfonamides',
      social: 'Retired postal worker. Non-smoker. Dog owner. Vaccinations not updated since splenectomy.',
      family: 'Non-contributory',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_capno', label: 'Full Sepsis & Skin Examination', icon: 'exam', cost: null, points: 35,
          finding: { type: 'exam', title: 'Systemic Examination', subtitle: 'Sepsis Assessment',
            results: [
              { name: 'Skin',          val: 'Extensive purpuric plaques — bilateral arms and legs, rapidly expanding', flag: 'critical' },
              { name: 'Right hand',    val: 'Small puncture wounds — dog bite site, erythematous but non-purulent', flag: 'abnormal' },
              { name: 'Mental status', val: 'Disoriented, obtunded — GCS 9',                                         flag: 'critical' },
              { name: 'Capillary refill', val: '> 5 seconds — cold clammy extremities',                             flag: 'critical' },
              { name: 'Abdomen',       val: 'No spleen palpable — splenectomy scar present',                         flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Asplenic patient with dog bite + purpuric rash + septic shock = Overwhelming Post-Splenectomy Infection (OPSI). Capnocytophaga canimorsus is a gram-negative oral flora of dogs — nearly universally fatal in asplenic hosts without immediate treatment. Mortality > 60% once shock develops.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_capno_cx', label: 'Blood Cultures × 2 + Wound Culture', icon: 'lab', cost: 'stat', points: 40,
          finding: { type: 'labs', title: 'Blood & Wound Cultures', subtitle: 'Stat — Before Antibiotics',
            results: [
              { name: 'Blood culture (aerobic)',  val: 'Thin, fusiform gram-negative rods — Capnocytophaga canimorsus', flag: 'critical' },
              { name: 'Sensitivity',              val: 'Susceptible to amoxicillin-clavulanate, penicillin, carbapenems', flag: 'normal' },
              { name: 'Wound culture',            val: 'Capnocytophaga — same organism',                                  flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Capnocytophaga canimorsus: normal oral flora of dogs and cats. Asplenic patients lack the ability to clear encapsulated organisms and gram-negative bacteremia — even a minor bite can be fatal within 24–72 hours.' } } },
        { id: 'lab_capno_dic', label: 'CBC / Coagulation / DIC Panel / BMP', icon: 'lab', cost: 'stat', points: 30,
          finding: { type: 'labs', title: 'DIC Workup & Organ Function', subtitle: 'Stat',
            results: [
              { name: 'WBC',        val: '1.2 × 10³/µL',  ref: '(4.5–11)',   flag: 'critical' },
              { name: 'Platelets',  val: '14 × 10³/µL',    ref: '(150–400)', flag: 'critical' },
              { name: 'INR',        val: '4.8',             ref: '(< 1.1)',   flag: 'critical' },
              { name: 'Fibrinogen', val: '60 mg/dL',        ref: '(200–400)', flag: 'critical' },
              { name: 'D-Dimer',    val: '> 20,000 ng/mL', ref: '(< 500)',   flag: 'critical' },
              { name: 'Creatinine', val: '4.2 mg/dL',      ref: '(0.7–1.2)', flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Fulminant DIC with multi-organ failure. The purpuric skin lesions represent cutaneous infarction from microvascular thrombosis — a manifestation of DIC. This is OPSI — immediate broad-spectrum antibiotics and ICU resuscitation are lifesaving.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_capno_cxr', label: 'Chest X-Ray (ARDS screen)', icon: 'imaging', cost: 'stat', points: 15,
          finding: { type: 'imaging', title: 'Chest X-Ray', subtitle: 'Portable AP',
            results: [
              { name: 'Lung fields', val: 'Bilateral interstitial infiltrates — early ARDS pattern', flag: 'critical' },
              { name: 'Heart',       val: 'Normal cardiac silhouette',                                flag: 'normal'   },
            ],
            note: { type: 'warn', text: 'Bilateral infiltrates consistent with sepsis-induced ARDS. This patient may require mechanical ventilation in addition to resuscitation.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_capno_id', label: 'Infectious Disease + Hematology Consult', icon: 'consult', cost: 'stat', points: 35,
          finding: { type: 'consult', title: 'Infectious Disease & Hematology', subtitle: 'Dr. Chen, ID / Dr. Park, Hematology',
            results: [
              { name: 'Antibiotic',     val: 'Piperacillin-tazobactam 4.5g IV q6h IMMEDIATELY',           flag: 'critical' },
              { name: 'DIC management', val: 'FFP + cryoprecipitate + platelet transfusion for bleeding', flag: 'critical' },
              { name: 'Vasopressors',   val: 'Norepinephrine 0.1–0.3 mcg/kg/min — MAP target > 65',       flag: 'critical' },
              { name: 'OPSI protocol',  val: 'Asplenic patients must be counselled about dog/cat bite danger and updated vaccinations after recovery', flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'OPSI carries 50–70% mortality once septic shock is established. Every 30 minutes of antibiotic delay increases mortality by ~7%. Do not wait for culture results.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_capno_correct', label: 'ICU — Pip-Tazo + Vasopressors + DIC Management', icon: 'er', outcome: 'correct', points: 200,
        feedback: { title: 'Correct — OPSI Requires Immediate Aggressive Treatment', grade: 'Excellent',
          body: 'Gerald has Overwhelming Post-Splenectomy Infection (OPSI) from Capnocytophaga canimorsus — rare, but devastatingly lethal in asplenic hosts. Immediate broad-spectrum IV antibiotics (pip-tazo or meropenem), vasopressors, DIC management, and ICU care is correct. Asplenic patients must always be counseled about animal bite risks.' } },
      { id: 'disp_capno_abx_oral', label: 'Amoxicillin-Clavulanate PO — Wound Care', icon: 'rx', outcome: 'incorrect', points: -200,
        feedback: { title: 'Fatal Error — Severity of OPSI Missed', grade: 'Fatal Error',
          body: 'This patient is in septic shock with DIC, multi-organ failure, and purpuric skin necrosis. Oral antibiotics and wound care is appropriate for a HEALTHY patient with a dog bite, but this asplenic man in shock requires ICU admission, IV antibiotics, vasopressors, and blood product support. Discharge would be fatal.' } },
      { id: 'disp_capno_wound_only', label: 'Wound Irrigation — Observation in ED', icon: 'admit', outcome: 'incorrect', points: -150,
        feedback: { title: 'Catastrophically Under-Treated', grade: 'Critical Error',
          body: 'The bite wound is trivial — the organism has already disseminated hematogenously. The problem is not the wound but fulminant bacteremia in an asplenic host. Wound care without antibiotics and resuscitation will not address the life-threatening bacteremia and shock.' } },
    ],
    correctDisposition: 'disp_capno_correct',
    criticalActions: ['lab_capno_cx', 'lab_capno_dic', 'consult_capno_id'],
  },

  // ─── ER Case 11: Acute Angle-Closure Glaucoma ─────────
  {
    id: 23, specialty: 'er',
    meta: { title: 'Unilateral Eye Pain & Headache', tagLabels: [{ t: 'URGENT', cls: 'urgent' }, { t: 'Ophthalmology', cls: '' }] },
    patient: {
      name: 'Margot V.', age: 66, sex: 'Female', avatar: 'female', emoji: '👩',
      chiefComplaint: 'Sudden unilateral eye pain, halos around lights, headache, nausea',
      vitals: [
        { label: 'BP',     value: '168/96',  status: 'abnormal'   },
        { label: 'HR',     value: '88 bpm',  status: 'normal'     },
        { label: 'RR',     value: '14 /min', status: 'normal'     },
        { label: 'Temp',   value: '36.9 °C', status: 'normal'     },
        { label: 'O₂ Sat', value: '98%',     status: 'normal'     },
        { label: 'Pain',   value: '8 / 10',  status: 'abnormal'   },
      ],
      history: '66-year-old farsighted female who was in a dim movie theater last evening. She developed sudden severe left eye pain, headache over the left side, and began seeing rainbow halos around lights. She vomited twice. She was previously misdiagnosed with migraine. She noticed her vision in the left eye is blurry and her eye looks red. She takes no eye drops.',
      pmh: 'Hyperopia (farsighted), mild hypertension. No prior eye surgery.',
      medications: 'Hydrochlorothiazide 25 mg QD',
      allergies: 'NKDA',
      social: 'Non-smoker, retired art teacher. Asian descent (higher anatomical risk).',
      family: 'Sister had "eye pressure problem"',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_glaucoma', label: 'Ocular Examination (Slit Lamp + Tonometry)', icon: 'exam', cost: null, points: 50,
          finding: { type: 'exam', title: 'Ocular Examination', subtitle: 'Left Eye — Detailed',
            results: [
              { name: 'Visual acuity (L)',  val: '20/200 — severely reduced (was 20/40)',          flag: 'critical' },
              { name: 'Pupil (L)',          val: 'Fixed, mid-dilated (~5mm), non-reactive to light', flag: 'critical' },
              { name: 'Cornea (L)',         val: 'Hazy/steamy — corneal edema from high IOP',       flag: 'critical' },
              { name: 'Conjunctiva (L)',    val: 'Ciliary flush — circumlimbal injection',           flag: 'abnormal' },
              { name: 'Anterior chamber',  val: 'Shallow — narrow angle confirmed',                 flag: 'critical' },
              { name: 'Globe',             val: 'Rock-hard to palpation',                            flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Fixed mid-dilated pupil + corneal haze + rock-hard eye + halos = Acute Angle-Closure Glaucoma. IOP must be measured immediately. Every hour of elevated IOP causes irreversible ganglion cell death — vision loss is permanent without rapid treatment.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_glaucoma_iop', label: 'Intraocular Pressure Measurement (Tonometry)', icon: 'lab', cost: 'stat', points: 50,
          finding: { type: 'labs', title: 'Intraocular Pressure — Goldmann Applanation Tonometry', subtitle: 'Stat',
            results: [
              { name: 'Left IOP',  val: '62 mmHg (CRITICAL — normal 10–21 mmHg)',  flag: 'critical' },
              { name: 'Right IOP', val: '18 mmHg (normal)',                          flag: 'normal'   },
              { name: 'Gonioscopy',val: 'Closed angle — 360° iridotrabecular contact', flag: 'critical' },
            ],
            note: { type: 'alert', text: 'IOP 62 mmHg = 3× normal. At pressures above 40 mmHg, central retinal artery perfusion pressure is exceeded — acute ischemic optic neuropathy and permanent vision loss develop within hours. Begin IOP-lowering therapy IMMEDIATELY.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_glaucoma_oct', label: 'Ocular Ultrasound (B-scan) / OCT Anterior Segment', icon: 'imaging', cost: null, points: 20,
          finding: { type: 'imaging', title: 'B-Scan Ocular Ultrasound', subtitle: 'Left Eye',
            results: [
              { name: 'Anterior chamber',val: 'Shallow — consistent with narrow angle anatomy',     flag: 'abnormal' },
              { name: 'Lens position',   val: 'Anterior lens displacement — contributes to angle closure', flag: 'abnormal' },
              { name: 'Vitreous',        val: 'Clear — no posterior pathology',                     flag: 'normal'   },
            ],
            note: { type: '', text: 'B-scan confirms anatomical narrow angle. Hyperfarsighted eye with short axial length predisposes to angle closure — worsened by pupil dilation in dim light (movie theater).' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_glaucoma_oph', label: 'Ophthalmology Emergency Consult', icon: 'consult', cost: 'stat', points: 40,
          finding: { type: 'consult', title: 'Ophthalmology Emergency Consultation', subtitle: 'Dr. Hashimoto, Ophthalmology',
            results: [
              { name: 'Timolol 0.5%',    val: '1 drop left eye q15min × 2 — reduces aqueous production',   flag: 'critical' },
              { name: 'Brimonidine 0.2%',val: '1 drop left eye — reduces aqueous production',               flag: 'critical' },
              { name: 'Pilocarpine 2%',  val: '1 drop q15min × 2 — miotic agent, opens drainage angle',    flag: 'critical' },
              { name: 'Acetazolamide',   val: '500 mg IV — systemic carbonic anhydrase inhibitor',          flag: 'critical' },
              { name: 'Mannitol',        val: '1 g/kg IV over 30 min if IOP not controlled',               flag: 'abnormal' },
              { name: 'Definitive',      val: 'Laser peripheral iridotomy both eyes within 24–48 hours',   flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Bilateral laser peripheral iridotomy (LPI) is the definitive treatment to prevent recurrence. The fellow eye must also be treated prophylactically — 50% of fellow eyes develop acute closure within 5 years without LPI.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_glaucoma_correct', label: 'Emergency IOP Reduction + Ophthalmology + Laser LPI', icon: 'er', outcome: 'correct', points: 200,
        feedback: { title: 'Correct — Vision-Saving Management', grade: 'Excellent',
          body: 'Margot has Acute Angle-Closure Glaucoma with IOP of 62 mmHg. Immediate multi-drug IOP reduction (topical timolol + pilocarpine + acetazolamide ± mannitol), urgent ophthalmology consultation, and definitive laser peripheral iridotomy is correct. Without treatment within hours, permanent vision loss is inevitable.' } },
      { id: 'disp_glaucoma_migraine', label: 'Migraine Protocol — Sumatriptan + Antiemetics', icon: 'rx', outcome: 'incorrect', points: -120,
        feedback: { title: 'Dangerous Misdiagnosis — Glaucoma Dismissed', grade: 'Critical Error',
          body: 'This is the classic missed diagnosis of acute angle-closure glaucoma — mistaken for migraine. The fixed mid-dilated pupil, rock-hard eye, and IOP of 62 mmHg distinguish it definitively. Triptans have no role. Every hour without IOP reduction causes irreversible retinal ganglion cell death.' } },
      { id: 'disp_glaucoma_neuro', label: 'CT Head — Rule Out Intracranial Pathology', icon: 'rx', outcome: 'partial', points: 20,
        feedback: { title: 'Partial Credit — Correct to Rule Out Stroke, But Eye Missed', grade: 'Incomplete',
          body: 'Ruling out intracranial pathology is reasonable given headache and vision change, but the ocular examination findings (fixed pupil, corneal haze, rock-hard eye) should diagnose angle-closure glaucoma clinically. A CT head adds delay without directing the correct treatment. The ophthalmologist should have been called simultaneously.' } },
    ],
    correctDisposition: 'disp_glaucoma_correct',
    criticalActions: ['pe_glaucoma', 'lab_glaucoma_iop', 'consult_glaucoma_oph'],
  },

  // ─── ER Case 12: Myxedema Coma ────────────────────────
  {
    id: 24, specialty: 'er',
    meta: { title: 'Unresponsive — Found at Home', tagLabels: [{ t: 'CRITICAL', cls: 'urgent' }, { t: 'Endocrinology', cls: '' }] },
    patient: {
      name: 'Evelyn T.', age: 74, sex: 'Female', avatar: 'female', emoji: '👩',
      chiefComplaint: 'Found unresponsive at home, hypothermic, bradycardic — not herself for 3 months',
      vitals: [
        { label: 'BP',     value: '88/56',   status: 'abnormal'   },
        { label: 'HR',     value: '42 bpm',  status: 'abnormal'   },
        { label: 'RR',     value: '8 /min',  status: 'abnormal'   },
        { label: 'Temp',   value: '33.8 °C', status: 'abnormal'   },
        { label: 'O₂ Sat', value: '88%',     status: 'abnormal'   },
        { label: 'GCS',    value: '6 / 15',  status: 'abnormal'   },
      ],
      history: '74-year-old female with known hypothyroidism found unresponsive on her bathroom floor by her daughter. Daughter reports her mother had been "slowing down" for months — gaining weight, sleeping excessively, constipated, and increasingly confused. On examination, she ran out of levothyroxine 4 months ago and could not afford refills. She has not answered the phone in 2 days. Found in a cold house (thermostat set to 62°F) which she claimed to prefer.',
      pmh: 'Hypothyroidism (diagnosed 12 years ago), hypertension, atrial fibrillation',
      medications: 'Levothyroxine 100 mcg QD (not refilled × 4 months), metoprolol 25 mg BID, warfarin 2.5 mg QD',
      allergies: 'Penicillin (anaphylaxis)',
      social: 'Widow, lives alone, retired school librarian. Daughter lives 2 hours away.',
      family: 'Sister with Hashimoto\'s thyroiditis',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_myxedema', label: 'Full Physical Examination', icon: 'exam', cost: null, points: 45,
          finding: { type: 'exam', title: 'Complete Physical Examination', subtitle: 'Myxedema Assessment',
            results: [
              { name: 'Consciousness',    val: 'GCS 6 — responds only to pain (E1V2M3)',                    flag: 'critical' },
              { name: 'Skin',             val: 'Pale, dry, doughy — non-pitting periorbital edema',         flag: 'abnormal' },
              { name: 'Hair/eyebrows',    val: 'Thinning scalp hair, lateral eyebrow loss (Queen Anne sign)', flag: 'abnormal' },
              { name: 'Tongue',           val: 'Macroglossia — large, doughy tongue',                       flag: 'abnormal' },
              { name: 'Reflexes',         val: 'Markedly delayed relaxation phase (hung-up reflexes)',       flag: 'critical' },
              { name: 'Abdomen',          val: 'Distended — paralytic ileus, no bowel sounds',              flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Hypothermia + bradycardia + hypoventilation + coma + macroglossia + hung-up reflexes in a hypothyroid patient off meds = Myxedema Coma. Mortality 20–40% even with treatment. Do not rewarm rapidly — use passive rewarming only.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_myxedema_tsh', label: 'TSH / Free T4 / Free T3 (Stat)', icon: 'lab', cost: 'stat', points: 50,
          finding: { type: 'labs', title: 'Thyroid Function Tests', subtitle: 'Stat',
            results: [
              { name: 'TSH',     val: '> 100 mIU/L',   ref: '(0.4–4.0)',     flag: 'critical' },
              { name: 'Free T4', val: '0.2 ng/dL',      ref: '(0.8–1.8)',     flag: 'critical' },
              { name: 'Free T3', val: '< 0.5 pg/mL',   ref: '(2.3–4.2)',    flag: 'critical' },
            ],
            note: { type: 'alert', text: 'TSH > 100 with critically low Free T4/T3 confirms severe hypothyroidism. In myxedema coma, T4 must be replaced IV. Do NOT wait for thyroid labs to start treatment — clinical diagnosis is sufficient.' } } },
        { id: 'lab_myxedema_panel', label: 'ABG / Cortisol / CBC / BMP / Glucose', icon: 'lab', cost: 'stat', points: 30,
          finding: { type: 'labs', title: 'Critical Care Labs', subtitle: 'Stat',
            results: [
              { name: 'PaCO₂',    val: '68 mmHg',     ref: '(35–45)',   flag: 'critical' },
              { name: 'PaO₂',     val: '52 mmHg',     ref: '(80–100)', flag: 'critical' },
              { name: 'Na',       val: '122 mEq/L',   ref: '(136–145)', flag: 'critical' },
              { name: 'Glucose',  val: '44 mg/dL',    ref: '(70–100)', flag: 'critical' },
              { name: 'Cortisol', val: '4.2 mcg/dL',  ref: '(6–23 AM)',flag: 'abnormal' },
              { name: 'INR',      val: '3.8',          ref: '(< 1.1)',  flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Hyponatremia (SIADH), hypoglycemia, CO₂ retention (hypoventilation), and low cortisol suggest concurrent adrenal insufficiency. Give hydrocortisone BEFORE levothyroxine — thyroid replacement without cortisol can precipitate adrenal crisis.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_myxedema_cxr', label: 'Chest X-Ray & EKG', icon: 'imaging', cost: 'stat', points: 20,
          finding: { type: 'imaging', title: 'Chest X-Ray & EKG', subtitle: 'Stat',
            results: [
              { name: 'Cardiac silhouette', val: 'Markedly enlarged — pericardial effusion',           flag: 'critical' },
              { name: 'EKG',                val: 'Sinus bradycardia 42 bpm — low voltage, flat T waves', flag: 'critical' },
              { name: 'EKG — Osborn waves', val: 'Present at J-point (hypothermia signature)',           flag: 'abnormal' },
            ],
            note: { type: 'warn', text: 'Pericardial effusion (myxedema pericarditis) + low voltage EKG + Osborn waves = hypothyroid cardiomyopathy. Pericardiocentesis rarely needed — resolves with thyroid replacement.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_myxedema_endo', label: 'Endocrinology + ICU Consult', icon: 'consult', cost: 'stat', points: 35,
          finding: { type: 'consult', title: 'Endocrinology & Critical Care', subtitle: 'Dr. Nguyen, Endocrinology',
            results: [
              { name: 'Step 1',           val: 'Hydrocortisone 100 mg IV q8h — BEFORE thyroid hormone',         flag: 'critical' },
              { name: 'Step 2',           val: 'Levothyroxine 200–400 mcg IV loading dose, then 50–100 mcg/day', flag: 'critical' },
              { name: 'Liothyronine T3',  val: '10 mcg IV q8h — some centers add T3 for severe cases',          flag: 'abnormal' },
              { name: 'Rewarming',        val: 'Passive rewarming ONLY — warm blankets, warm IV fluids',         flag: 'critical' },
              { name: 'Ventilation',      val: 'Intubate now — CO₂ 68, RR 8, severe hypoventilation',           flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Critical sequence: Hydrocortisone FIRST → then Levothyroxine IV. Reversing this order risks precipitating adrenal crisis. Active external rewarming (heating blankets, warm water immersion) causes peripheral vasodilation and cardiovascular collapse — passive rewarming only.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_myxedema_correct', label: 'Intubate + IV T4/Hydrocortisone + ICU', icon: 'er', outcome: 'correct', points: 200,
        feedback: { title: 'Correct — Myxedema Coma Protocol', grade: 'Excellent',
          body: 'Evelyn has myxedema coma with hypoventilation, hypothermia, and cardiovascular compromise. Immediate intubation (CO₂ 68), IV hydrocortisone FIRST (adrenal insufficiency must be covered), then IV levothyroxine loading, passive rewarming, glucose correction, and ICU admission is the correct sequence. Mortality is 20–40% even with optimal care.' } },
      { id: 'disp_myxedema_oral', label: 'Oral Levothyroxine — Warm Up — General Ward', icon: 'admit', outcome: 'incorrect', points: -150,
        feedback: { title: 'Incorrect Route and Inadequate Level of Care', grade: 'Critical Error',
          body: 'Oral levothyroxine is not appropriate when the patient is comatose (aspiration risk, unreliable absorption). IV levothyroxine is required in myxedema coma. Additionally, CO₂ retention at 68 mmHg requires intubation — general ward admission without airway management will lead to respiratory arrest.' } },
      { id: 'disp_myxedema_sepsis', label: 'Empiric Sepsis Antibiotics — Rule Out Infection', icon: 'rx', outcome: 'partial', points: 30,
        feedback: { title: 'Partial — Infection Ruled Out But Root Cause Missed', grade: 'Incomplete',
          body: 'Hypothermia + coma can be caused by sepsis (especially in elderly), so empiric antibiotics while workup is pending is defensible. However, the clinical picture — macroglossia, periorbital edema, hung-up reflexes, TSH > 100, off levothyroxine × 4 months — makes myxedema coma the diagnosis. Antibiotics alone will not save this patient.' } },
    ],
    correctDisposition: 'disp_myxedema_correct',
    criticalActions: ['lab_myxedema_tsh', 'lab_myxedema_panel', 'consult_myxedema_endo'],
  },

  // ─── ER Case 13: Pheochromocytoma Crisis ─────────────
  {
    id: 25, specialty: 'er',
    meta: { title: 'Paroxysmal Hypertensive Crisis', tagLabels: [{ t: 'CRITICAL', cls: 'urgent' }, { t: 'Endocrinology', cls: '' }] },
    patient: {
      name: 'Derek F.', age: 38, sex: 'Male', avatar: 'male', emoji: '👨',
      chiefComplaint: 'BP 262/148, severe headache, diaphoresis, palpitations — episodic × 8 months',
      vitals: [
        { label: 'BP',     value: '262/148', status: 'abnormal'   },
        { label: 'HR',     value: '148 bpm', status: 'abnormal'   },
        { label: 'RR',     value: '22 /min', status: 'borderline' },
        { label: 'Temp',   value: '37.6 °C', status: 'normal'     },
        { label: 'O₂ Sat', value: '96%',     status: 'normal'     },
        { label: 'Glucose',value: '218 mg/dL',status: 'abnormal'  },
      ],
      history: '38-year-old male with a documented 8-month history of episodic "spells" — sudden onset severe headache, profuse diaphoresis, palpitations, and flushing lasting 20–40 minutes. Three prior ER visits diagnosed as "panic attacks" or "hypertensive urgency." Tonight\'s spell is lasting > 90 minutes and BP will not respond to labetalol given by EMS. He is extremely anxious and diaphoretic. He has never taken antihypertensives and was otherwise healthy.',
      pmh: 'No prior hypertension diagnosis. Appendectomy age 22. Uncle reportedly had an "adrenal tumor."',
      medications: 'None prescribed. Labetalol given by EMS en route.',
      allergies: 'NKDA',
      social: 'Non-smoker, non-drinker. High school PE teacher. Active and fit.',
      family: 'Uncle had adrenal tumor. Maternal grandfather died of "stroke at young age."',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_pheo', label: 'Cardiovascular & Endocrine Examination', icon: 'exam', cost: null, points: 35,
          finding: { type: 'exam', title: 'Cardiovascular & Systemic Examination', subtitle: '',
            results: [
              { name: 'Diaphoresis',     val: 'Profuse — soaking shirt, face and trunk',             flag: 'critical' },
              { name: 'Fundoscopy',      val: 'Hypertensive retinopathy — grade III (flame haemorrhages)', flag: 'critical' },
              { name: 'Neurological',    val: 'Encephalopathy — confusion, visual disturbance',       flag: 'critical' },
              { name: 'Abdomen',         val: 'Right upper quadrant fullness on deep palpation — do not press further', flag: 'abnormal' },
              { name: 'Skin',            val: 'Café-au-lait spots noted — 3 spots on torso',          flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Episodic headache + diaphoresis + palpitations (the "triad") + hypertensive encephalopathy + positive family history + café-au-lait spots = Pheochromocytoma crisis. DO NOT give beta-blockers alone — this causes paradoxical worsening via unopposed alpha stimulation.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_pheo_catecholamines', label: 'Plasma Free Metanephrines (Stat)', icon: 'lab', cost: 'stat', points: 50,
          finding: { type: 'labs', title: 'Plasma Free Metanephrines', subtitle: 'Diagnostic Gold Standard',
            results: [
              { name: 'Normetanephrine', val: '8,420 pg/mL', ref: '(normal < 145)',  flag: 'critical' },
              { name: 'Metanephrine',    val: '4,180 pg/mL', ref: '(normal < 62)',   flag: 'critical' },
              { name: 'Chromogranin A',  val: '940 ng/mL',   ref: '(normal < 76)',   flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Plasma free metanephrines elevated > 4× normal = pheochromocytoma confirmed biochemically. Sensitivity 97% for pheo. Do not delay treatment waiting for these results — treat the crisis clinically.' } } },
        { id: 'lab_pheo_panel', label: 'Troponin / BMP / CBC / Glucose', icon: 'lab', cost: 'stat', points: 20,
          finding: { type: 'labs', title: 'Cardiac & Metabolic Panel', subtitle: 'Stat',
            results: [
              { name: 'Troponin I', val: '1.4 ng/mL',  ref: '(< 0.04)',  flag: 'critical' },
              { name: 'Glucose',    val: '218 mg/dL',   ref: '(70–100)', flag: 'critical' },
              { name: 'K+',         val: '3.1 mEq/L',  ref: '(3.5–5.0)',flag: 'abnormal' },
              { name: 'WBC',        val: '16 × 10³/µL',ref: '(4.5–11)', flag: 'abnormal' },
            ],
            note: { type: 'warn', text: 'Troponin elevation reflects catecholamine-induced myocardial injury (Takotsubo-pattern or true infarction). Hyperglycemia and hypokalemia are catecholamine effects. Echo to assess LV function.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_pheo_ct', label: 'CT Abdomen/Pelvis with Contrast', icon: 'imaging', cost: 'stat', points: 40,
          finding: { type: 'imaging', title: 'CT Abdomen & Pelvis — Contrast', subtitle: 'Stat — After BP Control',
            results: [
              { name: 'Right adrenal',  val: '5.8 cm heterogeneous mass — cystic center, peripheral enhancement', flag: 'critical' },
              { name: 'Left adrenal',   val: 'Normal',                                                              flag: 'normal'   },
              { name: 'Calcification',  val: 'Peripheral "egg-shell" calcification',                               flag: 'abnormal' },
              { name: 'Lymph nodes',    val: 'No retroperitoneal adenopathy',                                       flag: 'normal'   },
            ],
            note: { type: 'alert', text: 'Right adrenal mass with classic pheo morphology (heterogeneous, cystic, calcified). Ensure contrast CT only AFTER BP is controlled — contrast can trigger catecholamine release. Consider MIBG scan later to rule out extra-adrenal or metastatic disease.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_pheo_endo', label: 'Endocrinology + Anesthesia Consult', icon: 'consult', cost: 'stat', points: 35,
          finding: { type: 'consult', title: 'Endocrinology & Anesthesia', subtitle: 'Dr. Kim, Endocrinology',
            results: [
              { name: 'Alpha blockade FIRST', val: 'Phentolamine 5–10 mg IV bolus — NEVER beta-blockers first', flag: 'critical' },
              { name: 'If refractory',        val: 'Nicardipine infusion 5 mg/hr or nitroprusside',              flag: 'critical' },
              { name: 'Beta-blockade timing', val: 'Only AFTER full alpha blockade established',                  flag: 'critical' },
              { name: 'Pre-op prep',          val: 'Phenoxybenzamine PO × 10–14 days before elective surgery',   flag: 'abnormal' },
              { name: 'Genetics',             val: 'Screen for MEN2, VHL, NF1, SDHx mutations (family history)', flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'THE GOLDEN RULE: Never give beta-blockers before alpha-blockers in pheo. Beta blockade causes unopposed alpha stimulation → paradoxical severe hypertension, reflex bradycardia, and cardiovascular collapse. This error has killed patients.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_pheo_correct', label: 'IV Phentolamine (Alpha-Block First) + ICU + Endo Consult', icon: 'er', outcome: 'correct', points: 200,
        feedback: { title: 'Correct — Alpha Blockade First Is Critical', grade: 'Excellent',
          body: 'Derek has a pheochromocytoma crisis. Phentolamine IV (alpha-blocker first), ICU monitoring, endocrinology consultation, and planning for elective adrenalectomy after 10–14 days of oral phenoxybenzamine is correct. Genetic screening (MEN2, VHL, NF1) is indicated given family history of adrenal tumor.' } },
      { id: 'disp_pheo_labetolol', label: 'IV Labetalol — Hypertensive Emergency Protocol', icon: 'rx', outcome: 'incorrect', points: -150,
        feedback: { title: 'Dangerous Error — Beta-Before-Alpha Fatal in Pheo', grade: 'Fatal Error',
          body: 'Labetalol has predominantly beta-blocking effects. Giving it alone (or first) in a pheochromocytoma crisis blocks beta-mediated vasodilation while leaving alpha vasoconstriction unopposed — this causes paradoxical severe hypertension, reflex bradycardia, and can precipitate cardiovascular collapse. Alpha blockade must come FIRST.' } },
      { id: 'disp_pheo_panic', label: 'Anxiolytic + Admit Observation — Panic Disorder', icon: 'admit', outcome: 'incorrect', points: -100,
        feedback: { title: 'Misdiagnosis — Pheochromocytoma Pattern Dismissed', grade: 'Critical Error',
          body: 'This patient was already misdiagnosed with panic attacks three times. The episodic triad (headache + diaphoresis + palpitations), BP 262/148, café-au-lait spots, family history of adrenal tumor, and catecholamine-induced hyperglycemia and troponin elevation are not panic attacks. Benzodiazepines do not lower BP in catecholamine excess.' } },
    ],
    correctDisposition: 'disp_pheo_correct',
    criticalActions: ['lab_pheo_catecholamines', 'img_pheo_ct', 'consult_pheo_endo'],
  },

  // ─── ER Case 14: HELLP Syndrome ──────────────────────
  {
    id: 26, specialty: 'er',
    meta: { title: 'Pregnant — RUQ Pain & Thrombocytopenia', tagLabels: [{ t: 'CRITICAL', cls: 'urgent' }, { t: 'Obstetrics', cls: '' }] },
    patient: {
      name: 'Jasmine R.', age: 31, sex: 'Female', avatar: 'female', emoji: '👩',
      chiefComplaint: 'Severe RUQ pain, headache, visual disturbance — 34 weeks pregnant',
      vitals: [
        { label: 'BP',     value: '168/108', status: 'abnormal'   },
        { label: 'HR',     value: '102 bpm', status: 'abnormal'   },
        { label: 'RR',     value: '18 /min', status: 'borderline' },
        { label: 'Temp',   value: '37.2 °C', status: 'normal'     },
        { label: 'O₂ Sat', value: '98%',     status: 'normal'     },
        { label: 'Pain',   value: '8 / 10',  status: 'abnormal'   },
      ],
      history: '31-year-old G2P1 at 34+2 weeks gestation presenting with 8 hours of progressively worsening severe right upper quadrant and epigastric pain. She also has a severe frontal headache and sees "flashing lights and zigzag lines." At her 32-week visit, blood pressure was 138/88 and she had trace proteinuria. She was told to "monitor at home." She is very anxious about her baby.',
      pmh: 'Uncomplicated first pregnancy 3 years ago. Mild gestational hypertension in first pregnancy.',
      medications: 'Prenatal vitamins, occasional acetaminophen',
      allergies: 'Sulfonamides',
      social: 'Non-smoker, non-drinker. High school teacher. Married.',
      family: 'Mother had preeclampsia with both pregnancies',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_hellp', label: 'Obstetric & Abdominal Examination', icon: 'exam', cost: null, points: 40,
          finding: { type: 'exam', title: 'Obstetric & Abdominal Examination', subtitle: '',
            results: [
              { name: 'BP repeat (R arm)',   val: '172/112 — severe range',                              flag: 'critical' },
              { name: 'RUQ tenderness',      val: 'Severe epigastric and RUQ tenderness on palpation',   flag: 'critical' },
              { name: 'Edema',               val: 'Severe bilateral pitting edema to the knees',         flag: 'abnormal' },
              { name: 'Fundal height',       val: '34 cm — appropriate for gestational age',             flag: 'normal'   },
              { name: 'Fetal heart rate',    val: '148 bpm — reactive on CTG',                           flag: 'normal'   },
              { name: 'Visual fields',       val: 'Bilateral scintillating scotoma on confrontation',    flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Severe-range BP + RUQ pain + visual symptoms + proteinuria = HELLP syndrome or severe preeclampsia. HELLP (Hemolysis, Elevated Liver enzymes, Low Platelets) carries risk of liver rupture, abruptio placentae, DIC, and maternal/fetal death. Delivery is the cure.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_hellp_panel', label: 'CBC / LFTs / LDH / Uric Acid / Coags', icon: 'lab', cost: 'stat', points: 50,
          finding: { type: 'labs', title: 'HELLP Diagnostic Panel', subtitle: 'Stat — Diagnostic',
            results: [
              { name: 'Platelets',  val: '58 × 10³/µL',   ref: '(150–400)',  flag: 'critical' },
              { name: 'AST',        val: '420 U/L',         ref: '(10–40)',    flag: 'critical' },
              { name: 'ALT',        val: '380 U/L',         ref: '(7–40)',     flag: 'critical' },
              { name: 'LDH',        val: '1,480 U/L',       ref: '(< 200)',    flag: 'critical' },
              { name: 'Haptoglobin',val: '< 8 mg/dL',       ref: '(30–200)',   flag: 'critical' },
              { name: 'Bilirubin',  val: '3.8 mg/dL',       ref: '(< 1.2)',    flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Thrombocytopenia + elevated AST/LDH + hemolysis (low haptoglobin, elevated bilirubin) = HELLP confirmed. Tennessee classification: Class 1 (platelets < 50k). Risk of spontaneous hepatic rupture — avoid abdominal palpation. Delivery WITHIN HOURS.' } } },
        { id: 'lab_hellp_urine', label: 'Urine Protein:Creatinine Ratio / UA', icon: 'lab', cost: 'stat', points: 20,
          finding: { type: 'labs', title: 'Urinalysis & Protein:Creatinine Ratio', subtitle: 'Stat',
            results: [
              { name: 'Protein:Cr ratio', val: '3.8 (nephrotic range — > 0.3 = significant)',  flag: 'critical' },
              { name: 'UA dipstick',      val: '4+ protein, no blood, no nitrites',             flag: 'critical' },
              { name: 'Creatinine',       val: '1.1 mg/dL (elevated for pregnancy)',            flag: 'abnormal' },
            ],
            note: { type: 'warn', text: 'Nephrotic-range proteinuria confirms severe preeclampsia. In pregnancy, creatinine > 0.8 is abnormal — rising creatinine indicates renal involvement.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_hellp_us', label: 'Fetal Ultrasound + Liver Ultrasound', icon: 'imaging', cost: 'stat', points: 25,
          finding: { type: 'imaging', title: 'Obstetric & Liver Ultrasound', subtitle: 'Stat',
            results: [
              { name: 'Fetal biometry',  val: '34-week parameters — appropriate for gestational age',    flag: 'normal'   },
              { name: 'Fetal doppler',   val: 'Normal umbilical artery PI — no fetal compromise yet',    flag: 'normal'   },
              { name: 'Liver',           val: 'Subcapsular hematoma RIGHT lobe — 3.2 cm — DO NOT PALPATE', flag: 'critical' },
              { name: 'Peritoneum',      val: 'Trace free fluid around liver — early hemorrhage',         flag: 'critical' },
            ],
            note: { type: 'alert', text: 'HEPATIC RUPTURE IS IMMINENT. Subcapsular hematoma + free peritoneal fluid = pre-rupture state. Alert interventional radiology and OB surgery. No further abdominal palpation. Emergency C-section or induction NOW.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_hellp_ob', label: 'Obstetrics + Maternal-Fetal Medicine + ICU Consult', icon: 'consult', cost: 'stat', points: 40,
          finding: { type: 'consult', title: 'Obstetrics & Maternal-Fetal Medicine', subtitle: 'Dr. Silva, MFM / Dr. Okafor, ICU',
            results: [
              { name: 'Delivery plan',   val: 'Emergency C-section — 34 weeks, steroids given for fetal lung maturity', flag: 'critical' },
              { name: 'Magnesium',       val: 'Magnesium sulfate 4g IV load then 2g/hr — eclampsia seizure prophylaxis', flag: 'critical' },
              { name: 'Antihypertensive',val: 'Labetalol 20mg IV q10min OR hydralazine 5mg IV — target SBP < 160',      flag: 'critical' },
              { name: 'Steroids',        val: 'Betamethasone 12mg IM × 2 doses — fetal lung maturity',                  flag: 'abnormal' },
              { name: 'Blood products',  val: 'Platelets if < 50k before surgery, FFP for DIC',                         flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Delivery is the only cure for HELLP syndrome. Maternal stabilization is critical but must not delay delivery. Magnesium sulfate prevents eclamptic seizures but is NOT an antihypertensive.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_hellp_correct', label: 'Emergency C-Section + MgSO₄ + Antihypertensives + ICU', icon: 'er', outcome: 'correct', points: 200,
        feedback: { title: 'Correct — Delivery Is the Only Cure for HELLP', grade: 'Excellent',
          body: 'Jasmine has Class 1 HELLP syndrome at 34 weeks with a subcapsular hepatic hematoma threatening rupture. Emergency C-section, magnesium seizure prophylaxis, BP control (SBP < 160), and ICU admission is correct. The fetus at 34 weeks will do well with NICU support — maternal life must be prioritized.' } },
      { id: 'disp_hellp_conservative', label: 'Expectant Management — Corticosteroids, Monitor 48h', icon: 'admit', outcome: 'incorrect', points: -120,
        feedback: { title: 'Dangerous Delay — Hepatic Rupture Risk', grade: 'Critical Error',
          body: 'Expectant management is only considered in very select HELLP cases < 34 weeks in stable patients without liver involvement. This patient has a subcapsular hepatic hematoma, Class 1 thrombocytopenia (< 50k), severe-range BP, and visual symptoms. Delay risks hepatic rupture, DIC, maternal death, and fetal demise.' } },
      { id: 'disp_hellp_gallbladder', label: 'GI Consult — Rule Out Cholecystitis / Gallstones', icon: 'rx', outcome: 'incorrect', points: -80,
        feedback: { title: 'Missed Obstetric Emergency', grade: 'Critical Error',
          body: 'RUQ pain in pregnancy is frequently attributed to biliary pathology — this is the most dangerous diagnostic error in obstetrics. The combination of hypertension, proteinuria, thrombocytopenia, hemolysis, and elevated liver enzymes in a pregnant woman is HELLP syndrome until proven otherwise. Ultrasound revealed both a liver hematoma AND a normal gallbladder.' } },
    ],
    correctDisposition: 'disp_hellp_correct',
    criticalActions: ['lab_hellp_panel', 'img_hellp_us', 'consult_hellp_ob'],
  },

  // ─── ER Case 15: Fat Embolism Syndrome ───────────────
  {
    id: 27, specialty: 'er',
    meta: { title: 'Post-Fracture Hypoxia & Confusion', tagLabels: [{ t: 'URGENT', cls: 'urgent' }, { t: 'Trauma', cls: '' }] },
    patient: {
      name: 'Marcus D.', age: 24, sex: 'Male', avatar: 'male', emoji: '👨',
      chiefComplaint: 'Acute dyspnea, confusion, petechial rash — 48 hours after femur fracture fixation',
      vitals: [
        { label: 'BP',     value: '108/66',  status: 'borderline' },
        { label: 'HR',     value: '116 bpm', status: 'abnormal'   },
        { label: 'RR',     value: '30 /min', status: 'abnormal'   },
        { label: 'Temp',   value: '38.2 °C', status: 'borderline' },
        { label: 'O₂ Sat', value: '83%',     status: 'abnormal'   },
        { label: 'GCS',    value: '11 / 15', status: 'abnormal'   },
      ],
      history: '24-year-old male who suffered a closed right femoral shaft fracture in a motorcycle crash 48 hours ago. He underwent uncomplicated intramedullary nail fixation yesterday. Today he suddenly developed severe dyspnea, is confused and agitated, and a nurse noticed a petechial rash on his chest and axillae. He has no chest pain. His pain was well-controlled postoperatively.',
      pmh: 'No significant history. No prior surgeries.',
      medications: 'Post-op: morphine PCA, ketorolac, enoxaparin 40 mg SC',
      allergies: 'NKDA',
      social: 'Non-smoker. Construction apprentice. Lives with girlfriend.',
      family: 'Non-contributory',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_fat_embolism', label: 'Full Respiratory & Neurological Exam', icon: 'exam', cost: null, points: 50,
          finding: { type: 'exam', title: 'Respiratory & Neurological Examination', subtitle: 'Gurd Criteria Assessment',
            results: [
              { name: 'Petechiae',        val: 'PATHOGNOMONIC — non-palpable petechiae bilateral axillae, chest, conjunctiva', flag: 'critical' },
              { name: 'Mental status',    val: 'Confused, agitated, disoriented — GCS 11',                                     flag: 'critical' },
              { name: 'Breath sounds',    val: 'Bilateral coarse crackles — diffuse',                                          flag: 'critical' },
              { name: 'SpO₂ on 15L NRB', val: '83% — refractory hypoxemia',                                                   flag: 'critical' },
              { name: 'Retinal exam',     val: 'Fat globules visible in retinal vessels on fundoscopy',                        flag: 'critical' },
              { name: 'Fever',            val: '38.2°C — low-grade, part of FES',                                             flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'GURD CRITERIA MET: petechiae + hypoxemia + neurological dysfunction = Fat Embolism Syndrome (FES). Petechiae in axillae are PATHOGNOMONIC — occurs in only 50–60% of cases but are diagnostic when present. This is NOT a pulmonary embolism — D-Dimer and CTPA findings differ.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_fes_panel', label: 'ABG / CBC / Lipase / Fat Droplets in Urine', icon: 'lab', cost: 'stat', points: 40,
          finding: { type: 'labs', title: 'Fat Embolism Syndrome Panel', subtitle: 'Stat',
            results: [
              { name: 'PaO₂',         val: '48 mmHg on 100% O₂',     ref: '(80–100)', flag: 'critical' },
              { name: 'PaO₂/FiO₂',   val: '48 (< 200 = ARDS criteria)',              flag: 'critical' },
              { name: 'Hematocrit',   val: '28% (rapid drop from 42%)',ref: '(41–53)', flag: 'critical' },
              { name: 'Platelets',    val: '88 × 10³/µL',             ref: '(150–400)',flag: 'abnormal' },
              { name: 'Lipase',       val: '280 U/L',                  ref: '(< 60)',  flag: 'abnormal' },
              { name: 'Urine fat',    val: 'Fat macroglobules on Sudan Red staining', flag: 'critical' },
            ],
            note: { type: 'warn', text: 'Fat globules in urine (lipuria) confirm fat embolism. Rapid hematocrit drop occurs as RBCs are consumed by fat emboli in pulmonary vasculature. P:F ratio < 200 = ARDS — mechanical ventilation likely required.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_fes_cxr', label: 'Chest X-Ray + CT Chest', icon: 'imaging', cost: 'stat', points: 30,
          finding: { type: 'imaging', title: 'Chest Imaging', subtitle: 'CXR + HRCT',
            results: [
              { name: 'CXR',            val: 'Bilateral "snowstorm" interstitial infiltrates',             flag: 'critical' },
              { name: 'CT chest',       val: 'Bilateral ground-glass opacities — non-dependent pattern', flag: 'critical' },
              { name: 'CTPA emboli',    val: 'No large vessel filling defects — consistent with FES vs PE', flag: 'abnormal' },
              { name: 'Cardiomegaly',   val: 'Mild RV strain pattern on CT',                              flag: 'abnormal' },
            ],
            note: { type: 'warn', text: 'Fat emboli are too small to be seen on CTPA — CTPA will be negative for large vessel emboli but shows diffuse ground-glass. Distinguishes FES from classic PE. Treatment differs: FES = supportive, not anticoagulation.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_fes_icu', label: 'Pulmonology / Critical Care + Orthopedic Surgery Consult', icon: 'consult', cost: 'stat', points: 30,
          finding: { type: 'consult', title: 'Critical Care & Orthopedic Surgery', subtitle: 'Dr. Morrison, Pulm-CCM',
            results: [
              { name: 'Intubation',     val: 'Urgent — P:F 48, ARDS criteria met. Lung-protective ventilation', flag: 'critical' },
              { name: 'Corticosteroids',val: 'Methylprednisolone 1.5 mg/kg/day × 3 days — reduces fat-induced inflammation', flag: 'abnormal' },
              { name: 'Supportive care',val: 'No specific antidote — treat ARDS, maintain oxygenation',        flag: 'normal'   },
              { name: 'Anticoagulation',val: 'Continue enoxaparin prophylaxis — do NOT give therapeutic dose',  flag: 'abnormal' },
              { name: 'Ortho input',    val: 'IMN already placed — no further surgical change indicated',       flag: 'normal'   },
            ],
            note: { type: 'warn', text: 'Fat Embolism Syndrome is treated SUPPORTIVELY — not with thrombolytics or therapeutic anticoagulation (which are for PE). Lung-protective ventilation (6 mL/kg IBW, PEEP ≥ 8), corticosteroids, and time are the treatment.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_fes_correct', label: 'Intubate — Lung-Protective Ventilation + ICU + Steroids', icon: 'er', outcome: 'correct', points: 200,
        feedback: { title: 'Correct — Supportive Care for Fat Embolism Syndrome', grade: 'Excellent',
          body: 'Marcus has Fat Embolism Syndrome — the clinical triad (hypoxemia + neurological dysfunction + petechiae) and post-fracture timing are diagnostic. Urgent intubation with lung-protective ventilation (ARDS protocol), corticosteroids, and ICU support is correct. There is no specific antidote; prognosis is generally favorable with aggressive supportive care.' } },
      { id: 'disp_fes_anticoag', label: 'Full Therapeutic Anticoagulation — Pulmonary Embolism', icon: 'rx', outcome: 'incorrect', points: -100,
        feedback: { title: 'Wrong Diagnosis — FES ≠ Classic PE', grade: 'Critical Error',
          body: 'This is Fat Embolism Syndrome, not classic thromboembolism. CTPA shows no large vessel clot — the emboli are fat globules invisible to CTPA. Therapeutic anticoagulation does not treat FES and increases hemorrhagic risk in a post-operative patient. The pathognomonic petechiae, lipuria, and snowstorm infiltrates distinguish FES from PE.' } },
      { id: 'disp_fes_discharge', label: 'Increase O₂ to 15L — Reassess in 4 Hours', icon: 'admit', outcome: 'incorrect', points: -80,
        feedback: { title: 'Insufficient — ARDS Requires ICU Ventilation', grade: 'Significant Error',
          body: 'This patient has a P:F ratio of 48 (severe ARDS) with a SpO₂ of 83% on 15L non-rebreather. He is not recruitable with supplemental oxygen alone and requires mechanical ventilation. Observation without definitive airway management in a confused, severely hypoxic ARDS patient risks respiratory arrest.' } },
    ],
    correctDisposition: 'disp_fes_correct',
    criticalActions: ['pe_fat_embolism', 'lab_fes_panel', 'consult_fes_icu'],
  },

  // ─── ER Case 16: Methemoglobinemia ───────────────────
  {
    id: 28, specialty: 'er',
    meta: { title: 'Cyanosis Despite High O₂ — Dye Worker', tagLabels: [{ t: 'URGENT', cls: 'urgent' }, { t: 'Toxicology', cls: '' }] },
    patient: {
      name: 'Yusuf A.', age: 26, sex: 'Male', avatar: 'male', emoji: '👨',
      chiefComplaint: 'Cyanosis, headache, dizziness — pulse ox 92% but not improving on 100% O₂',
      vitals: [
        { label: 'BP',     value: '118/74',  status: 'normal'     },
        { label: 'HR',     value: '108 bpm', status: 'abnormal'   },
        { label: 'RR',     value: '22 /min', status: 'borderline' },
        { label: 'Temp',   value: '37.1 °C', status: 'normal'     },
        { label: 'SpO₂',  value: '92% on NRB', status: 'abnormal' },
        { label: 'GCS',    value: '13 / 15', status: 'abnormal'   },
      ],
      history: '26-year-old male who works at an industrial textile dye facility. He was cleaning mixing vats without adequate PPE for 3 hours and came in feeling dizzy, with a headache, and "turning blue." His colleague also feels unwell. On examination, he is visibly cyanotic with slate-grey/chocolate-brown discoloration to his lips and nail beds despite being on a non-rebreather mask at 15L. The pulse oximeter reads 92% and will not improve.',
      pmh: 'No significant history. G6PD status unknown.',
      medications: 'None',
      allergies: 'NKDA',
      social: 'Non-smoker. Recent immigrant. Working at dye factory for 3 months. English is second language.',
      family: 'Non-contributory',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_methb', label: 'Skin, Mucous Membranes & Neurological Exam', icon: 'exam', cost: null, points: 40,
          finding: { type: 'exam', title: 'Integument & Neurological Examination', subtitle: '',
            results: [
              { name: 'Skin color',       val: 'Chocolate-brown/slate-grey cyanosis — lips, nail beds, face', flag: 'critical' },
              { name: 'Blood color',      val: 'Venous blood sample: dark chocolate-brown (will not turn red on O₂ exposure)', flag: 'critical' },
              { name: 'SpO₂ response',    val: 'No improvement on 100% O₂ — SpO₂ plateau at ~85%',           flag: 'critical' },
              { name: 'Mental status',    val: 'Confused, lethargic, GCS 13',                                  flag: 'critical' },
              { name: 'Respiratory',      val: 'Tachypneic but lungs clear bilaterally',                       flag: 'borderline' },
            ],
            note: { type: 'alert', text: 'Chocolate-brown blood that does NOT become red when shaken in room air = Methemoglobinemia. Standard pulse oximetry is UNRELIABLE — it reads falsely high (~85%) in methemoglobinemia. Only co-oximetry measures true methemoglobin level. Request CO-oximetry immediately.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_methb_coox', label: 'Arterial Co-Oximetry + ABG (Stat)', icon: 'lab', cost: 'stat', points: 50,
          finding: { type: 'labs', title: 'Arterial Blood Gas with Co-Oximetry', subtitle: 'Stat — Diagnostic',
            results: [
              { name: 'MetHb level',  val: '44% (CRITICAL — normal < 1%)',        flag: 'critical' },
              { name: 'PaO₂',        val: '488 mmHg on 100% O₂ (dissolved O₂ is normal)', flag: 'normal'  },
              { name: 'SaO₂ (calc)', val: '98% (co-oximetry shows truth: 56%)', flag: 'critical' },
              { name: 'pH',          val: '7.32',  ref: '(7.35–7.45)',           flag: 'abnormal' },
              { name: 'Lactate',     val: '3.8 mmol/L',                          flag: 'critical' },
            ],
            note: { type: 'alert', text: 'The dissociation: PaO₂ normal (oxygen dissolved in plasma is fine) but MetHb 44% means 44% of hemoglobin cannot carry oxygen. Lactic acidosis from cellular hypoxia. Methylene blue is the antidote — administer within minutes.' } } },
        { id: 'lab_methb_g6pd', label: 'G6PD Enzyme Level (Before Methylene Blue)', icon: 'lab', cost: 'stat', points: 25,
          finding: { type: 'labs', title: 'G6PD Enzyme Activity', subtitle: 'Pre-Treatment Screen',
            results: [
              { name: 'G6PD activity', val: '12.1 U/gHgb (normal — G6PD sufficient)', ref: '(7–20 U/gHgb)', flag: 'normal' },
            ],
            note: { type: 'warn', text: 'G6PD must be checked BEFORE methylene blue — G6PD-deficient patients cannot regenerate NADPH and methylene blue may cause hemolysis. Since G6PD is normal here, methylene blue is safe to administer.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_methb_cxr', label: 'Chest X-Ray (Rule Out Pulmonary Cause)', icon: 'imaging', cost: 'stat', points: 10,
          finding: { type: 'imaging', title: 'Chest X-Ray', subtitle: 'Portable AP',
            results: [
              { name: 'Lung fields', val: 'Clear — no infiltrates, no effusion',          flag: 'normal' },
              { name: 'Heart',       val: 'Normal size and contour',                       flag: 'normal' },
            ],
            note: { type: '', text: 'Clear CXR confirms no primary pulmonary pathology — cyanosis is NOT due to lung disease. This supports the co-oximetry diagnosis of methemoglobinemia.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_methb_toxicology', label: 'Toxicology + Poison Control Consult', icon: 'consult', cost: 'stat', points: 35,
          finding: { type: 'consult', title: 'Medical Toxicology & Poison Control', subtitle: '1-800-222-1222 / Dr. Lee, Toxicology',
            results: [
              { name: 'Antidote',      val: 'Methylene blue 1–2 mg/kg IV over 5 minutes — GIVE NOW', flag: 'critical' },
              { name: 'Repeat dose',   val: 'If MetHb > 30% persists at 1 hour: repeat 1 mg/kg',    flag: 'abnormal' },
              { name: 'If G6PD deficient', val: 'High-dose ascorbic acid 1g IV + exchange transfusion', flag: 'abnormal' },
              { name: 'Occupational',  val: 'Report to OSHA — workplace exposure event, coworker needs evaluation', flag: 'abnormal' },
              { name: 'Mechanism',     val: 'Aniline dye compounds oxidize Fe²⁺ to Fe³⁺ — hemoglobin cannot bind O₂', flag: 'normal' },
            ],
            note: { type: 'alert', text: 'Methylene blue reduces MetHb back to hemoglobin by providing electrons via G6PD pathway. Response is rapid — MetHb level should drop > 50% within 30 minutes of administration. If no response, consider alternative diagnoses (sulfhemoglobin, G6PD deficiency).' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_methb_correct', label: 'Methylene Blue IV + ICU + Toxicology + OSHA Report', icon: 'er', outcome: 'correct', points: 200,
        feedback: { title: 'Correct — Methylene Blue Is the Antidote', grade: 'Excellent',
          body: 'Yusuf has methemoglobinemia (MetHb 44%) from aniline dye exposure. Methylene blue 1–2 mg/kg IV is the antidote and should produce rapid reversal. G6PD should be checked first. ICU monitoring, repeat co-oximetry at 1 hour, OSHA notification, and evaluation of the symptomatic coworker is correct management.' } },
      { id: 'disp_methb_intubate', label: 'Intubate — ARDS Protocol', icon: 'rx', outcome: 'partial', points: 20,
        feedback: { title: 'Partial — Airway Secured But Antidote Missing', grade: 'Incomplete',
          body: 'If methylene blue is available, it should be given BEFORE intubation. The cause of hypoxia is methemoglobin (not pulmonary pathology) — lungs are clear, PaO₂ is normal. Methylene blue may restore oxygenation within minutes, rendering intubation unnecessary. However, intubation to protect airway in a confused MetHb 44% patient is defensible.' } },
      { id: 'disp_methb_o2', label: 'Increase O₂ Flow Rate — Reassess', icon: 'admit', outcome: 'incorrect', points: -120,
        feedback: { title: 'Supplemental O₂ Does Not Treat Methemoglobinemia', grade: 'Critical Error',
          body: 'Standard pulse oximetry is unreliable in methemoglobinemia (reads 85% regardless of true MetHb level). Increasing O₂ cannot correct the problem — methemoglobin physically cannot carry oxygen regardless of partial pressure. The antidote is methylene blue, not oxygen. Without co-oximetry and the specific antidote, this patient will deteriorate.' } },
    ],
    correctDisposition: 'disp_methb_correct',
    criticalActions: ['lab_methb_coox', 'consult_methb_toxicology', 'lab_methb_g6pd'],
  },

  // ─── ER Case 17: Vertebral Artery Dissection ─────────
  {
    id: 29, specialty: 'er',
    meta: { title: 'Sudden Occipital Headache & Ataxia Post-Yoga', tagLabels: [{ t: 'URGENT', cls: 'urgent' }, { t: 'Neurology', cls: '' }] },
    patient: {
      name: 'Amara S.', age: 32, sex: 'Female', avatar: 'female', emoji: '👩',
      chiefComplaint: 'Sudden occipital headache, neck pain, dizziness, falling to the left — began during yoga',
      vitals: [
        { label: 'BP',     value: '138/82',  status: 'abnormal'   },
        { label: 'HR',     value: '86 bpm',  status: 'normal'     },
        { label: 'RR',     value: '16 /min', status: 'normal'     },
        { label: 'Temp',   value: '37.0 °C', status: 'normal'     },
        { label: 'O₂ Sat', value: '99%',     status: 'normal'     },
        { label: 'Pain',   value: '7 / 10',  status: 'abnormal'   },
      ],
      history: '32-year-old healthy female who was performing an advanced head-standing yoga pose (Sirsasana) when she felt a sudden "pop" in the back of her neck followed by immediate severe occipital headache described as "thunder clap." She became acutely dizzy, fell to the left, and vomited × 3. She has persistent left-sided facial numbness, double vision, and difficulty swallowing. She has no vascular risk factors and is on OCP.',
      pmh: 'Migraines (rare, well-controlled). No prior strokes or TIAs. No connective tissue disorder diagnosed.',
      medications: 'Oral contraceptive pill, sumatriptan PRN (not taken today)',
      allergies: 'NKDA',
      social: 'Non-smoker, social drinker. Yoga instructor. Physically fit.',
      family: 'Mother had Ehlers-Danlos syndrome (suspected)',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_vad', label: 'NIHSS + Posterior Fossa Neurological Exam', icon: 'exam', cost: null, points: 45,
          finding: { type: 'exam', title: 'Posterior Circulation Stroke Assessment', subtitle: 'NIHSS + Wallenberg Features',
            results: [
              { name: 'Nystagmus',         val: 'Horizontal nystagmus — beats leftward (ipsilateral lesion)',   flag: 'critical' },
              { name: 'Finger-nose test',   val: 'Left limb dysmetria — cerebellar ataxia',                     flag: 'critical' },
              { name: 'Gait',               val: 'Truncal ataxia — falls toward left',                          flag: 'critical' },
              { name: 'Left Horner',        val: 'Ptosis + miosis left eye — sympathetic chain disruption',     flag: 'critical' },
              { name: 'Facial sensation',   val: 'Decreased pain/temperature LEFT face (CN V ipsilateral)',     flag: 'critical' },
              { name: 'Body sensation',     val: 'Decreased pain/temperature RIGHT arm and leg (spinothalamic cross)', flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Wallenberg Syndrome (Lateral Medullary Infarction) pattern: ipsilateral facial numbness + contralateral body numbness + Horner + ataxia + dysphagia + nystagmus. Caused by PICA or vertebral artery occlusion. THUNDERCLAP onset during neck strain = dissection until proven otherwise.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_vad_coags', label: 'INR / aPTT / CBC / Hypercoagulable Screen', icon: 'lab', cost: 'stat', points: 20,
          finding: { type: 'labs', title: 'Coagulation & Hematology', subtitle: 'Stat',
            results: [
              { name: 'INR',        val: '1.1',            ref: '(< 1.1)',   flag: 'normal'   },
              { name: 'Platelets',  val: '286 × 10³/µL',  ref: '(150–400)', flag: 'normal'   },
              { name: 'Factor V Leiden', val: 'Heterozygous mutation — predisposes to dissection', flag: 'abnormal' },
              { name: 'Protein C/S',    val: 'Normal',                                            flag: 'normal'   },
            ],
            note: { type: 'warn', text: 'Factor V Leiden on OCP significantly increases thrombosis and vascular wall fragility risk. Connective tissue disorder workup (Ehlers-Danlos, Marfan) should be pursued in young dissection patients given family history.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_vad_cta', label: 'CT Head + CTA Head & Neck (Stat)', icon: 'imaging', cost: 'stat', points: 50,
          finding: { type: 'imaging', title: 'CT Head & CT Angiography — Head & Neck', subtitle: 'Stat — Definitive',
            results: [
              { name: 'CT head',         val: 'No hemorrhage — no hyperdensity',                                          flag: 'normal'   },
              { name: 'Left vertebral',  val: 'CTA: Intimal flap + "string sign" left vertebral artery V4 segment',       flag: 'critical' },
              { name: 'Left PICA',       val: 'Occluded — left posterior inferior cerebellar artery thrombosis',           flag: 'critical' },
              { name: 'Left cerebellum', val: 'Early ischemic changes lateral medulla and cerebellum — Wallenberg territory', flag: 'critical' },
              { name: 'MRI DWI',         val: 'Restricted diffusion lateral medulla and left cerebellum — acute infarct',   flag: 'critical' },
            ],
            note: { type: 'alert', text: '"String sign" (tapered narrowing with intimal flap) of left vertebral artery = dissection confirmed. PICA occlusion causing Wallenberg syndrome. tPA is relatively contraindicated in dissection with infarct — anticoagulation is the mainstay.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_vad_neuro', label: 'Neurology (Vascular) + Neurosurgery Consult', icon: 'consult', cost: 'stat', points: 35,
          finding: { type: 'consult', title: 'Vascular Neurology Consultation', subtitle: 'Dr. Vasquez, Vascular Neurology',
            results: [
              { name: 'tPA decision',    val: 'NOT indicated — active dissection with established infarct, risk of subarachnoid hemorrhage', flag: 'critical' },
              { name: 'Anticoagulation', val: 'Heparin infusion OR antiplatelet (aspirin 325 mg) — evidence equipoise', flag: 'critical' },
              { name: 'BP target',       val: 'SBP < 140 — reduce propagation risk',                                    flag: 'abnormal' },
              { name: 'OCP',             val: 'DISCONTINUE immediately — thrombogenic risk in dissection',              flag: 'critical' },
              { name: 'Monitoring',      val: 'Stroke unit admission — swallow assessment (dysphagia common in Wallenberg)', flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Vertebral artery dissection in young women on OCP is increasingly recognized. Yoga poses (neck hyperextension, rotation) can shear the vertebral artery wall. Connective tissue disorders (EDS, Marfan) must be screened. Prognosis generally better than atherosclerotic stroke.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_vad_correct', label: 'Anticoagulation + Stroke Unit + Stop OCP + Neurology', icon: 'er', outcome: 'correct', points: 200,
        feedback: { title: 'Correct — Vertebral Dissection Protocol', grade: 'Excellent',
          body: 'Amara has a left vertebral artery dissection with Wallenberg syndrome. Anticoagulation (or antiplatelet — equipoise exists), immediate OCP cessation, stroke unit admission, swallow assessment, and investigation for connective tissue disorder is correct. tPA is not indicated given active dissection and risk of hemorrhagic transformation.' } },
      { id: 'disp_vad_tpa', label: 'IV tPA — Within Stroke Window', icon: 'rx', outcome: 'incorrect', points: -100,
        feedback: { title: 'Contraindicated — Dissection Precludes tPA', grade: 'Critical Error',
          body: 'tPA in vertebral artery dissection carries risk of hemorrhagic transformation at the dissection site and subarachnoid hemorrhage. While the patient is within the time window, the imaging shows an active intimal dissection — thrombolytics are relatively contraindicated. Anticoagulation and mechanical thrombectomy evaluation are the appropriate considerations.' } },
      { id: 'disp_vad_migraine', label: 'Migraine with Aura — Sumatriptan + Antiemetics', icon: 'rx', outcome: 'incorrect', points: -120,
        feedback: { title: 'Dangerous Misdiagnosis — Stroke Missed', grade: 'Critical Error',
          body: 'Triptans cause vasoconstriction and are absolutely contraindicated in stroke or TIA. This patient has Wallenberg syndrome — a posterior circulation stroke from vertebral dissection — not a migraine. The thunderclap onset during neck strain, Horner syndrome, crossed sensory deficits, and ataxia are not migraine features. Triptans could extend the stroke.' } },
    ],
    correctDisposition: 'disp_vad_correct',
    criticalActions: ['pe_vad', 'img_vad_cta', 'consult_vad_neuro'],
  },

  // ─── ER Case 18: Acute Mesenteric Ischemia ────────────
  {
    id: 30, specialty: 'er',
    meta: { title: 'Severe Abdominal Pain Out of Proportion to Exam', tagLabels: [{ t: 'CRITICAL', cls: 'urgent' }, { t: 'Vascular Surgery', cls: '' }] },
    patient: {
      name: 'Howard P.', age: 73, sex: 'Male', avatar: 'male', emoji: '👨',
      chiefComplaint: 'Sudden severe diffuse abdominal pain — 4 hours, known atrial fibrillation',
      vitals: [
        { label: 'BP',     value: '102/64',  status: 'borderline' },
        { label: 'HR',     value: '122 bpm (irregular)', status: 'abnormal' },
        { label: 'RR',     value: '22 /min', status: 'borderline' },
        { label: 'Temp',   value: '37.4 °C', status: 'normal'     },
        { label: 'O₂ Sat', value: '96%',     status: 'normal'     },
        { label: 'Pain',   value: '10 / 10', status: 'abnormal'   },
      ],
      history: '73-year-old male with known persistent atrial fibrillation who missed his warfarin for 4 days "because he felt fine." He presents with sudden onset severe, colicky, diffuse abdominal pain that began 4 hours ago. He describes the pain as the worst of his life, has had 3 episodes of profuse watery diarrhea (some bloody), and has vomited twice. On exam, his abdomen is SOFT and minimally tender — dramatically less than expected for his level of agony.',
      pmh: 'Persistent atrial fibrillation, congestive heart failure (EF 30%), type 2 diabetes, hypertension. Prior TIA 2 years ago.',
      medications: 'Warfarin 5 mg QD (missed × 4 days), carvedilol 12.5 mg BID, furosemide 40 mg QD, metformin',
      allergies: 'ACE inhibitors (angioedema)',
      social: 'Non-smoker, retired electrician. Lives with wife. Does his own ADLs.',
      family: 'Brother died of "bowel problems" in his 70s',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_ami', label: 'Abdominal & Cardiovascular Examination', icon: 'exam', cost: null, points: 45,
          finding: { type: 'exam', title: 'Abdominal & Cardiovascular Examination', subtitle: 'Serial Exam Critical',
            results: [
              { name: 'Pain severity',     val: '10/10 subjective — writhing on stretcher, unable to find comfortable position', flag: 'critical' },
              { name: 'Abdomen',           val: 'SOFT — minimal tenderness on palpation (classic: pain out of proportion to exam)', flag: 'critical' },
              { name: 'Bowel sounds',      val: 'Hyperactive early — "borborygmi" from ischemic bowel',                         flag: 'abnormal' },
              { name: 'Rectal exam',       val: 'Gross bloody stool — maroon-colored',                                          flag: 'critical' },
              { name: 'Cardiac rhythm',    val: 'Irregularly irregular — uncontrolled AF (HR 122)',                              flag: 'critical' },
            ],
            note: { type: 'alert', text: '"PAIN OUT OF PROPORTION TO EXAM" is the hallmark of Acute Mesenteric Ischemia. Soft abdomen with 10/10 pain = gut ischemia until proven otherwise in an AF patient on subtherapeutic anticoagulation. Peritonitis develops LATE — when bowel has infarcted. Do not be falsely reassured by soft abdomen.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_ami_lactate', label: 'Lactate + CBC + BMP + Coagulation + LFTs', icon: 'lab', cost: 'stat', points: 40,
          finding: { type: 'labs', title: 'Mesenteric Ischemia Panel', subtitle: 'Stat',
            results: [
              { name: 'Lactate',      val: '7.8 mmol/L',    ref: '(< 2.0)',   flag: 'critical' },
              { name: 'WBC',          val: '24.6 × 10³/µL', ref: '(4.5–11)',  flag: 'critical' },
              { name: 'Creatinine',   val: '2.2 mg/dL',     ref: '(0.7–1.2)', flag: 'critical' },
              { name: 'INR',          val: '1.2 (subtherapeutic — was 2.1 last month)', ref: '', flag: 'critical' },
              { name: 'Phosphate',    val: '5.8 mg/dL',     ref: '(2.5–4.5)', flag: 'critical' },
              { name: 'Base deficit', val: '-12 mEq/L',                        flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Lactate 7.8 + hyperphosphatemia + severe metabolic acidosis (base deficit -12) = bowel necrosis with cellular lysis. Elevated phosphate from necrotic cells is a late, ominous sign. Hyperphosphatemia + lactate > 6 in AMI carries 80%+ mortality. Move FAST.' } } },
        { id: 'lab_ami_ddimer', label: 'D-Dimer / ABG', icon: 'lab', cost: 'stat', points: 15,
          finding: { type: 'labs', title: 'D-Dimer & ABG', subtitle: 'Stat',
            results: [
              { name: 'D-Dimer', val: '> 10,000 ng/mL', ref: '(< 500)',   flag: 'critical' },
              { name: 'pH',      val: '7.21',            ref: '(7.35–7.45)', flag: 'critical' },
              { name: 'HCO₃',   val: '11 mEq/L',        ref: '(22–26)',   flag: 'critical' },
            ],
            note: { type: 'warn', text: 'Markedly elevated D-Dimer supports thromboembolic occlusion of mesenteric vessels. Severe metabolic acidosis from bowel ischemia. This patient needs the OR, not observation.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_ami_cta', label: 'CT Angiography Abdomen/Pelvis (Mesenteric Protocol)', icon: 'imaging', cost: 'stat', points: 50,
          finding: { type: 'imaging', title: 'CT Mesenteric Angiography', subtitle: 'Arterial Phase + Venous Phase',
            results: [
              { name: 'SMA',              val: 'Large filling defect at SMA origin — embolus, near-total occlusion',             flag: 'critical' },
              { name: 'Small bowel',      val: 'Pneumatosis intestinalis — gas in bowel wall (bowel necrosis)',                  flag: 'critical' },
              { name: 'Portal vein',      val: 'Portal venous gas — severe mesenteric ischemia, advanced necrosis',             flag: 'critical' },
              { name: 'Bowel wall',       val: 'Non-enhancing — full-thickness ischemia',                                       flag: 'critical' },
              { name: 'Free air',         val: 'Not detected — perforation not yet occurred',                                   flag: 'normal'   },
            ],
            note: { type: 'alert', text: 'PNEUMATOSIS + PORTAL VENOUS GAS = TRANSMURAL BOWEL NECROSIS. This is a near-terminal finding. Mortality > 80% with this CT pattern. IMMEDIATE surgical exploration is the only possible intervention. Do not pursue further imaging or repeat labs — call surgery now.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_ami_vasc', label: 'Vascular Surgery + General Surgery Emergency Consult', icon: 'consult', cost: 'stat', points: 40,
          finding: { type: 'consult', title: 'Vascular & General Surgery — Emergency', subtitle: 'Dr. Torres, Vascular Surgery',
            results: [
              { name: 'Decision',      val: 'Emergency exploratory laparotomy — NOW',                                    flag: 'critical' },
              { name: 'Anticoagulation', val: 'Heparin 5,000u IV bolus immediately, infusion during prep',              flag: 'critical' },
              { name: 'Revascularization', val: 'Surgical embolectomy or on-table angioplasty if viable bowel remains', flag: 'critical' },
              { name: 'Resection',     val: 'Resect non-viable bowel — second-look laparotomy at 24–48 hours',          flag: 'critical' },
              { name: 'Prognosis',     val: 'Pneumatosis + portal gas: mortality 80–90% even with surgery',             flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Time from symptom onset to revascularization is the strongest predictor of survival in AMI. Each hour of delay adds ~10% mortality. Even with aggressive surgical intervention and bowel resection, survival with this degree of necrosis is < 20%. Family discussion of prognosis is essential.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_ami_correct', label: 'Emergency Heparin + OR — Bowel Resection + Embolectomy', icon: 'er', outcome: 'correct', points: 200,
        feedback: { title: 'Correct — Mesenteric Ischemia Requires Immediate Surgery', grade: 'Excellent',
          body: 'Howard has acute SMA embolism with pneumatosis and portal venous gas — transmural bowel necrosis. Immediate heparin, emergency exploratory laparotomy with SMA embolectomy, and resection of non-viable bowel is the only intervention. Prognosis is very poor at this stage but surgical intervention is the only chance of survival.' } },
      { id: 'disp_ami_observe', label: 'IV Fluids + NPO — Monitor Serial Exams', icon: 'admit', outcome: 'incorrect', points: -150,
        feedback: { title: 'Fatal Delay — Bowel Is Already Necrotic', grade: 'Fatal Error',
          body: 'Observation with serial abdominal exams is the most common and lethal error in AMI. The soft abdomen falsely reassures clinicians while the bowel is necrotic. Pneumatosis intestinalis and portal venous gas on CT represent advanced bowel necrosis — the window for survival is closing with each minute. Observation allows complete bowel infarction and septic shock.' } },
      { id: 'disp_ami_gi', label: 'GI Consult — Colonoscopy to Evaluate Bleeding', icon: 'rx', outcome: 'incorrect', points: -120,
        feedback: { title: 'Wrong Pathway — Colonoscopy Contraindicated', grade: 'Critical Error',
          body: 'Colonoscopy is absolutely contraindicated when mesenteric ischemia is suspected — insufflation pressure can precipitate perforation of an ischemic, friable bowel. The bloody diarrhea is a consequence of bowel ischemia, not the primary pathology. CT angiography already confirmed SMA embolus — surgery, not endoscopy, is required.' } },
    ],
    correctDisposition: 'disp_ami_correct',
    criticalActions: ['pe_ami', 'img_ami_cta', 'consult_ami_vasc'],
  },

  // ══════════════════════════════════════════════════════
  //  INFECTIOUS DISEASE
  // ══════════════════════════════════════════════════════

  // ─── ID Case 31: Maria C. — Typhoid Fever ────────────
  {
    id: 31, specialty: 'id',
    meta: { title: 'Fever — Returned Traveler', tagLabels: [{ t: 'TRAVEL HX', cls: 'urgent' }, { t: 'Infectious Disease', cls: '' }] },
    patient: {
      name: 'Maria C.', age: 28, sex: 'Female', avatar: 'female', emoji: '👩',
      chiefComplaint: 'Stepwise fever for 10 days, returned from India 2 weeks ago',
      vitals: [
        { label: 'BP',     value: '108/68',   status: 'borderline' },
        { label: 'HR',     value: '76 bpm',   status: 'normal'     },
        { label: 'RR',     value: '18 /min',  status: 'normal'     },
        { label: 'Temp',   value: '39.8 °C',  status: 'abnormal'   },
        { label: 'O₂ Sat', value: '98%',      status: 'normal'     },
        { label: 'Pain',   value: '3 / 10',   status: 'normal'     },
      ],
      history: '28-year-old female who spent 3 weeks in rural Rajasthan visiting family. Presents with gradually rising fever over 10 days, now daily temperatures of 39–40 °C. Complains of dull frontal headache, anorexia, and diffuse abdominal discomfort. Reports loose stools for the last 4 days. Notes a faint salmon-colored rash on her trunk that appeared 2 days ago. Took no prophylactic medications before travel.',
      pmh: 'No significant past medical history',
      medications: 'None',
      allergies: 'NKDA',
      social: 'Graduate student, non-smoker, minimal alcohol, sexually active with one partner',
      family: 'No relevant family history',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_31_abd', label: 'Abdominal & Skin Examination', icon: 'exam', points: 30,
          finding: { type: 'exam', title: 'Physical Examination', subtitle: 'Abdomen & Integument',
            results: [
              { name: 'Abdomen',        val: 'Mild diffuse tenderness, splenomegaly (3 cm below costal margin)', flag: 'abnormal'  },
              { name: 'Skin',           val: 'Rose spots — 8–10 faint salmon-pink macules on anterior trunk, 2–4 mm, blanching', flag: 'critical' },
              { name: 'Relative bradycardia', val: 'HR 76 with Temp 39.8 °C — pulse-temperature dissociation', flag: 'critical' },
              { name: 'Tongue',         val: 'White coating centrally, red edges (typhoid tongue)',             flag: 'abnormal'  },
            ],
            note: { type: 'alert', text: 'Rose spots + relative bradycardia + splenomegaly in a returned traveler from South Asia = Salmonella typhi until proven otherwise.' } },
          stateEffect: { state: 'worsening', message: 'Persistent high fever and splenomegaly. Patient fatigued and refusing oral intake. Watch for intestinal perforation.' } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_cbc_31', label: 'CBC with Differential', icon: 'lab', points: 25,
          finding: { type: 'labs', title: 'Complete Blood Count', subtitle: 'Stat',
            results: [
              { name: 'WBC',         val: '3.2 × 10³/µL',   ref: '(4.5–11)',    flag: 'abnormal' },
              { name: 'Neutrophils', val: '38%',             ref: '(50–70%)',    flag: 'abnormal' },
              { name: 'Lymphocytes', val: '52%',             ref: '(20–45%)',    flag: 'abnormal' },
              { name: 'Platelets',   val: '98 × 10³/µL',    ref: '(150–400)',   flag: 'abnormal' },
              { name: 'Hgb',         val: '10.8 g/dL',      ref: '(12–16)',     flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Leukopenia with relative lymphocytosis is characteristic of typhoid fever — a key differentiating feature from bacterial sepsis.' } } },
        { id: 'lab_bcx_31', label: 'Blood Cultures (×2 sets)', icon: 'lab', points: 50,
          finding: { type: 'labs', title: 'Blood Cultures', subtitle: 'Gold Standard Diagnostic',
            results: [
              { name: 'Culture ×2',  val: 'Salmonella enterica serotype Typhi — POSITIVE',  flag: 'critical' },
              { name: 'Sensitivity', val: '70–80% in week 1 of illness — ordered correctly in time window', flag: 'normal' },
              { name: 'Resistance',  val: 'Fluoroquinolone-resistant (ciprofloxacin MIC 0.25 µg/mL)',       flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Confirmed typhoid. Fluoroquinolone resistance common from South Asia — use azithromycin (first-line for uncomplicated) or IV ceftriaxone (for severe disease). Report to public health.' } } },
        { id: 'lab_lft_31', label: 'CMP / Liver Function Tests', icon: 'lab', points: 15,
          finding: { type: 'labs', title: 'Metabolic & Liver Panel', subtitle: 'Comprehensive',
            results: [
              { name: 'ALT',         val: '112 U/L',   ref: '(7–56)',    flag: 'abnormal' },
              { name: 'AST',         val: '98 U/L',    ref: '(10–40)',   flag: 'abnormal' },
              { name: 'Bilirubin',   val: '1.8 mg/dL', ref: '(0.2–1.2)',flag: 'abnormal' },
              { name: 'Albumin',     val: '3.1 g/dL',  ref: '(3.5–5)',  flag: 'abnormal' },
              { name: 'Creatinine',  val: '0.9 mg/dL', ref: '(0.6–1.2)',flag: 'normal'   },
            ],
            note: { type: '', text: 'Hepatitis is common in typhoid; transaminitis usually resolves with antibiotic treatment.' } } },
        { id: 'lab_widal_31', label: 'Tropical Disease Screen (Typhoid / Widal)', icon: 'lab', points: 20,
          finding: { type: 'labs', title: 'Typhoid Serology & Tropical Screen', subtitle: 'Widal Test + Malaria RDT',
            results: [
              { name: 'Widal O antigen',    val: '1:320 (positive ≥1:160)',                     flag: 'abnormal' },
              { name: 'Widal H antigen',    val: '1:160 (positive ≥1:160)',                     flag: 'abnormal' },
              { name: 'Malaria RDT',        val: 'NEGATIVE (P. falciparum / P. vivax)',          flag: 'normal'   },
              { name: 'Dengue NS1 Ag',      val: 'NEGATIVE',                                    flag: 'normal'   },
            ],
            note: { type: '', text: 'Widal test supports typhoid diagnosis but has limited specificity in endemic areas. Blood cultures (already ordered) remain gold standard.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_us_31', label: 'Abdominal Ultrasound', icon: 'imaging', points: 20,
          finding: { type: 'imaging', title: 'Abdominal Ultrasound', subtitle: 'Comprehensive',
            results: [
              { name: 'Spleen',          val: 'Enlarged — 16 cm (normal < 12 cm)',   flag: 'abnormal' },
              { name: 'Liver',           val: 'Mildly enlarged, homogeneous texture', flag: 'abnormal' },
              { name: 'Bowel',           val: 'No free air, no perforation detected', flag: 'normal'   },
              { name: 'Lymph nodes',     val: 'Mesenteric lymphadenopathy (1–2 cm)', flag: 'abnormal' },
            ],
            note: { type: '', text: 'Splenomegaly and hepatomegaly consistent with systemic typhoid infection. Serial exams warranted to detect bowel perforation — most feared complication.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_31_id', label: 'Infectious Disease Consult', icon: 'consult', points: 30,
          finding: { type: 'consult', title: 'Infectious Disease Consultation', subtitle: 'Travel Medicine',
            results: [
              { name: 'Assessment',   val: 'Typhoid fever (Salmonella typhi) — moderate severity', flag: 'critical' },
              { name: 'Treatment',    val: 'Azithromycin 1 g PO day 1, then 500 mg PO daily × 6 days', flag: 'normal' },
              { name: 'Alternative',  val: 'IV Ceftriaxone 2 g q24h if unable to tolerate PO or worsening', flag: 'normal' },
              { name: 'Avoid',        val: 'Ciprofloxacin — confirmed resistant; NSAIDs — spleen rupture risk', flag: 'critical' },
              { name: 'Public Health',val: 'Reportable condition — notify county health department',            flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Educate on handwashing and food safety. Screen household contacts. Follow-up stool cultures at 3 and 6 months to confirm clearance.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_31_correct', label: 'Admit — Azithromycin + ID Consult + Isolation', icon: 'admit', outcome: 'correct', points: 100,
        feedback: { title: 'Excellent — Typhoid Managed Correctly', grade: 'Outstanding',
          body: 'Admission for IV hydration and azithromycin treats fluoroquinolone-resistant typhoid appropriately. ID consult ensures correct antibiotic selection and public health reporting. Rose spots, relative bradycardia, and splenomegaly in a returned traveler from South Asia are classic. Blood cultures in week 1 carry 70–80% sensitivity — the optimal window.' } },
      { id: 'disp_31_partial', label: 'Admit — Ciprofloxacin + IV Fluids', icon: 'admit', outcome: 'partial', points: -30,
        feedback: { title: 'Partially Correct — Fluoroquinolone Resistance Missed', grade: 'Needs Improvement',
          body: 'Ciprofloxacin was the historical first-line agent for typhoid, but fluoroquinolone resistance from the Indian subcontinent is now widespread (>80% in some regions). Using ciprofloxacin in a resistant case risks clinical failure and prolonged fever. Azithromycin or ceftriaxone are preferred for travelers returning from South Asia.' } },
      { id: 'disp_31_incorrect', label: 'Discharge — Viral Illness, Supportive Care', icon: 'rx', outcome: 'incorrect', points: -120,
        feedback: { title: 'Critical Error — Untreated Typhoid Can Perforate', grade: 'Critical Error',
          body: 'Typhoid fever is not a viral self-limiting illness. Untreated, 10–30% of patients develop complications including intestinal perforation (mortality 50%), hemorrhage, myocarditis, and encephalopathy. The combination of rose spots + relative bradycardia + splenomegaly + travel to endemic area mandates blood cultures and antibiotic treatment.' } },
    ],
    correctDisposition: 'disp_31_correct',
    criticalActions: ['pe_31_abd', 'lab_bcx_31', 'consult_31_id'],
  },

  // ─── ID Case 32: Ahmed K. — Visceral Leishmaniasis (Kala-Azar) ─────────────
  {
    id: 32, specialty: 'id',
    meta: { title: 'Weight Loss & Splenomegaly', tagLabels: [{ t: 'TRAVEL HX', cls: 'urgent' }, { t: 'Tropical Medicine', cls: '' }] },
    patient: {
      name: 'Ahmed K.', age: 34, sex: 'Male', avatar: 'male', emoji: '👨',
      chiefComplaint: 'Progressive weight loss, fevers, and abdominal distension — 3 months after return from Sudan',
      vitals: [
        { label: 'BP',     value: '96/60',    status: 'abnormal'   },
        { label: 'HR',     value: '102 bpm',  status: 'abnormal'   },
        { label: 'RR',     value: '20 /min',  status: 'borderline' },
        { label: 'Temp',   value: '38.6 °C',  status: 'abnormal'   },
        { label: 'O₂ Sat', value: '97%',      status: 'normal'     },
        { label: 'Weight', value: '52 kg (↓14 kg)', status: 'abnormal' },
      ],
      history: '34-year-old male aid worker who spent 6 months in Blue Nile state, Sudan. Returned 3 months ago. Progressive fatigue, intermittent fevers (often twice daily), and dramatic weight loss — 14 kg in 10 weeks. Abdomen has become progressively distended. Now notes grayish discoloration of the skin on his hands and face. Denies cough, diarrhea, or urinary symptoms. Mild epistaxis last week.',
      pmh: 'No prior illnesses. No malaria prophylaxis taken while in Sudan.',
      medications: 'None',
      allergies: 'NKDA',
      social: 'Aid worker, non-smoker, occasional alcohol, no IV drug use',
      family: 'No relevant history',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_32_abd', label: 'Abdominal & Skin Examination', icon: 'exam', points: 35,
          finding: { type: 'exam', title: 'Physical Examination', subtitle: 'Abdomen, Skin & Lymphatics',
            results: [
              { name: 'Spleen',        val: 'MASSIVE — palpable 12 cm below costal margin, non-tender', flag: 'critical' },
              { name: 'Liver',         val: 'Hepatomegaly — 4 cm below costal margin',                  flag: 'abnormal' },
              { name: 'Skin',          val: 'Diffuse darkening (post-kala-azar dermal hyperpigmentation) — gray/dark on extremities', flag: 'critical' },
              { name: 'Lymph nodes',   val: 'Bilateral inguinal lymphadenopathy (1.5–2 cm)',             flag: 'abnormal' },
              { name: 'Muscle mass',   val: 'Severe wasting — temporal and thenar muscle loss evident',  flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Massive splenomegaly + skin darkening (kala-azar means "black fever" in Hindi) + aid worker in East Africa = Leishmania donovani until proven otherwise.' } },
          stateEffect: { state: 'worsening', message: 'Patient severely malnourished with massive splenomegaly. High risk of spontaneous splenic rupture. Pancytopenia worsening — prophylactic antibiotics consideration.' } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_cbc_32', label: 'CBC with Differential', icon: 'lab', points: 30,
          finding: { type: 'labs', title: 'Complete Blood Count', subtitle: 'Pancytopenia Panel',
            results: [
              { name: 'WBC',       val: '1.8 × 10³/µL',  ref: '(4.5–11)',   flag: 'critical' },
              { name: 'Hgb',       val: '6.4 g/dL',       ref: '(13–17)',    flag: 'critical' },
              { name: 'Platelets', val: '42 × 10³/µL',   ref: '(150–400)',  flag: 'critical' },
              { name: 'Retic',     val: '2.1%',            ref: '(0.5–2.5)', flag: 'normal'   },
            ],
            note: { type: 'alert', text: 'Severe pancytopenia — WBC, RBC, and platelets all critically low. Splenic sequestration + bone marrow infiltration by Leishmania amastigotes.' } } },
        { id: 'lab_protein_32', label: 'CMP / Total Protein & Albumin', icon: 'lab', points: 20,
          finding: { type: 'labs', title: 'Comprehensive Metabolic Panel', subtitle: 'Protein Studies',
            results: [
              { name: 'Total Protein',    val: '9.8 g/dL',    ref: '(6–8.3)',   flag: 'abnormal' },
              { name: 'Albumin',          val: '1.6 g/dL',    ref: '(3.5–5)',   flag: 'critical' },
              { name: 'Globulin',         val: '8.2 g/dL',    ref: '(2–3.5)',   flag: 'critical' },
              { name: 'A:G Ratio',        val: '0.19 (severely inverted)', ref: '(>1.2)', flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Reversed albumin:globulin ratio with polyclonal hypergammaglobulinemia is classic for visceral leishmaniasis. Severe hypoalbuminemia causing ascites.' } } },
        { id: 'lab_inflam_32', label: 'CRP / ESR / Procalcitonin', icon: 'lab', points: 10,
          finding: { type: 'labs', title: 'Inflammatory Markers', subtitle: 'Infection Screen',
            results: [
              { name: 'ESR',          val: '118 mm/hr',  ref: '(<20)',    flag: 'critical' },
              { name: 'CRP',          val: '64 mg/L',    ref: '(<10)',    flag: 'abnormal' },
              { name: 'Procalcitonin',val: '0.8 ng/mL',  ref: '(<0.25)', flag: 'abnormal' },
            ],
            note: { type: '', text: 'Markedly elevated ESR is characteristic of visceral leishmaniasis and hypergammaglobulinemia. Procalcitonin borderline — co-infection not excluded.' } } },
        { id: 'lab_rk39_32', label: 'Tropical Disease Screen (rK39 Rapid Test)', icon: 'lab', points: 50,
          finding: { type: 'labs', title: 'Tropical Disease Rapid Tests', subtitle: 'Leishmania-specific',
            results: [
              { name: 'rK39 RDT',         val: 'POSITIVE — Leishmania donovani antigen confirmed',  flag: 'critical' },
              { name: 'Malaria RDT',       val: 'NEGATIVE',                                          flag: 'normal'   },
              { name: 'DAT (titer)',        val: '1:3200 — Direct Agglutination Test strongly positive', flag: 'critical' },
              { name: 'Leishmania IgG',    val: 'Positive (ELISA)',                                  flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'rK39 rapid test has 97–100% sensitivity and specificity in East African visceral leishmaniasis. Splenic aspirate (98% sensitive) remains gold standard if diagnosis unclear — do NOT perform with platelets this low.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_us_32', label: 'Abdominal Ultrasound', icon: 'imaging', points: 20,
          finding: { type: 'imaging', title: 'Abdominal Ultrasound', subtitle: 'Organ Assessment',
            results: [
              { name: 'Spleen',     val: '28 cm longitudinal — massive splenomegaly (normal < 12 cm)', flag: 'critical' },
              { name: 'Liver',      val: '19 cm — hepatomegaly, homogeneous, no focal lesions',         flag: 'abnormal' },
              { name: 'Ascites',    val: 'Moderate free fluid in abdomen — hypoalbuminemia related',   flag: 'abnormal' },
              { name: 'Vasculature',val: 'Portal vein 16 mm — portal hypertension',                    flag: 'abnormal' },
            ],
            note: { type: '', text: 'Ultrasound confirms massive hepatosplenomegaly. Avoid splenic aspiration given thrombocytopenia risk. Bone marrow biopsy preferred for parasite confirmation if rK39 insufficient.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_32_id', label: 'Infectious Disease / Tropical Medicine Consult', icon: 'consult', points: 30,
          finding: { type: 'consult', title: 'Tropical Medicine Consultation', subtitle: 'Visceral Leishmaniasis Protocol',
            results: [
              { name: 'Diagnosis',    val: 'Visceral Leishmaniasis (Kala-Azar) — L. donovani, East Africa', flag: 'critical' },
              { name: '1st Line',     val: 'Liposomal Amphotericin B — 3 mg/kg IV days 1–5, then day 14 and 21', flag: 'normal' },
              { name: 'Alternative',  val: 'Miltefosine PO (weight-based dosing) — teratogenic, avoid in women of childbearing age', flag: 'normal' },
              { name: 'Monitoring',   val: 'Splenic index at 6 months to confirm response; parasite clearance', flag: 'normal' },
              { name: 'Transfusions', val: 'PRBCs for Hgb < 6 g/dL; platelets if < 20k or active bleeding',    flag: 'normal' },
            ],
            note: { type: 'alert', text: 'WHO-recommended: Liposomal AmB 30 mg/kg total (East Africa protocol). Follow with surveillance for PKDL (post-kala-azar dermal leishmaniasis) months to years later.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_32_correct', label: 'Admit ICU — Liposomal Amphotericin B + Blood Products + ID Consult', icon: 'admit', outcome: 'correct', points: 100,
        feedback: { title: 'Excellent — Visceral Leishmaniasis Recognized and Treated', grade: 'Outstanding',
          body: 'Liposomal amphotericin B is WHO-recommended first-line therapy for East African visceral leishmaniasis. ICU-level monitoring required given pancytopenia, massive splenomegaly, and risk of splenic rupture. The rK39 RDT is highly accurate in this setting. Key diagnostic clues: massive splenomegaly + skin darkening + returning traveler from East/South Africa + reversed albumin:globulin ratio + pancytopenia.' } },
      { id: 'disp_32_partial', label: 'Admit — Bone Marrow Biopsy First, Defer Treatment', icon: 'admit', outcome: 'partial', points: -20,
        feedback: { title: 'Acceptable but Delay Is Risky', grade: 'Needs Improvement',
          body: 'Bone marrow biopsy is confirmatory (sensitivity 60–85%) but is not required when rK39 is positive and the clinical picture is classic. Delaying treatment for confirmatory testing risks further deterioration in a patient with Hgb 6.4 g/dL and platelet count 42k. In resource-limited settings and with a positive rK39, treatment should begin promptly.' } },
      { id: 'disp_32_incorrect', label: 'Discharge — Malaria Treatment Empirically', icon: 'rx', outcome: 'incorrect', points: -130,
        feedback: { title: 'Fatal Error — Wrong Diagnosis', grade: 'Critical Error',
          body: 'Malaria was specifically excluded by rapid antigen testing. Empirical antimalarials will not treat visceral leishmaniasis and the patient will die from progressive pancytopenia, hemorrhage, or bacterial superinfection. Kala-azar is uniformly fatal without treatment. The 14 kg weight loss, skin darkening, and 3-month duration are inconsistent with acute malaria.' } },
    ],
    correctDisposition: 'disp_32_correct',
    criticalActions: ['pe_32_abd', 'lab_rk39_32', 'consult_32_id'],
  },

  // ─── ID Case 33: Elena R. — Dengue Hemorrhagic Fever ─────────────
  {
    id: 33, specialty: 'id',
    meta: { title: 'Fever & Thrombocytopenia', tagLabels: [{ t: 'TRAVEL HX', cls: 'urgent' }, { t: 'Hemorrhagic Fever', cls: '' }] },
    patient: {
      name: 'Elena R.', age: 21, sex: 'Female', avatar: 'female', emoji: '👩',
      chiefComplaint: 'High fever, severe myalgias, and rash — returned from Thailand 5 days ago',
      vitals: [
        { label: 'BP',     value: '98/64',    status: 'abnormal'   },
        { label: 'HR',     value: '112 bpm',  status: 'abnormal'   },
        { label: 'RR',     value: '22 /min',  status: 'borderline' },
        { label: 'Temp',   value: '39.4 °C',  status: 'abnormal'   },
        { label: 'O₂ Sat', value: '97%',      status: 'normal'     },
        { label: 'Pain',   value: '8 / 10',   status: 'abnormal'   },
      ],
      history: '21-year-old college student who traveled to Chiang Mai, Thailand for 2 weeks. Developed acute-onset fever (40 °C), severe retro-orbital headache, and debilitating myalgia ("breakbone fever") 5 days before return. Initial fever broke on day 4 — now returning on day 7 with new rash, worsening abdominal pain, and gum bleeding this morning. Took no prophylaxis. No prior dengue illness.',
      pmh: 'No significant past medical history',
      medications: 'Ibuprofen 400 mg TID (self-administered for fever)',
      allergies: 'Sulfa (rash)',
      social: 'College student, social alcohol, non-smoker',
      family: 'No relevant history',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_33_exam', label: 'Tourniquet Test & Skin/Mucosal Exam', icon: 'exam', points: 40,
          finding: { type: 'exam', title: 'Physical Examination', subtitle: 'Hemorrhagic Assessment',
            results: [
              { name: 'Tourniquet test',  val: 'POSITIVE — 28 petechiae in 2.5 cm² after 5 min inflation (≥20 = positive)', flag: 'critical' },
              { name: 'Skin rash',        val: 'Confluent petechial rash on trunk and extremities — "islands of white in sea of red"', flag: 'critical' },
              { name: 'Gums',             val: 'Oozing from gingival margins — spontaneous mucosal bleeding', flag: 'critical' },
              { name: 'Abdomen',          val: 'Right upper quadrant tenderness, positive fluid wave (ascites)',  flag: 'abnormal' },
              { name: 'Eyes',             val: 'Conjunctival injection, no jaundice',                             flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Positive tourniquet test + petechial rash + mucosal bleeding + ascites = Dengue Hemorrhagic Fever grade II–III. Plasma leakage to third space. STOP NSAIDs immediately — dramatically increases bleeding risk.' } },
          stateEffect: { state: 'worsening', message: 'Patient entering critical phase. Plasma leakage causing hemoconcentration. Risk of dengue shock syndrome in next 24–48 hours. Close monitoring required.' } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_cbc_33', label: 'CBC with Differential', icon: 'lab', points: 40,
          finding: { type: 'labs', title: 'Complete Blood Count', subtitle: 'Critical Monitoring',
            results: [
              { name: 'WBC',       val: '2.1 × 10³/µL',  ref: '(4.5–11)',   flag: 'critical' },
              { name: 'Platelets', val: '24 × 10³/µL',   ref: '(150–400)',  flag: 'critical' },
              { name: 'Hematocrit',val: '52%',            ref: '(36–46%)',   flag: 'critical' },
              { name: 'Hgb',       val: '14.8 g/dL',     ref: '(12–16)',    flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Leukopenia + thrombocytopenia + hematocrit rise ≥20% = Dengue Hemorrhagic Fever confirmed (WHO criteria). Hemoconcentration indicates plasma leakage into third space.' } } },
        { id: 'lab_lft_33', label: 'CMP / Liver Function Tests', icon: 'lab', points: 20,
          finding: { type: 'labs', title: 'Comprehensive Metabolic Panel', subtitle: 'Organ Function',
            results: [
              { name: 'AST',       val: '410 U/L',    ref: '(10–40)',   flag: 'critical' },
              { name: 'ALT',       val: '280 U/L',    ref: '(7–56)',    flag: 'critical' },
              { name: 'Albumin',   val: '2.8 g/dL',   ref: '(3.5–5)',  flag: 'abnormal' },
              { name: 'Creatinine',val: '1.6 mg/dL',  ref: '(0.6–1.2)',flag: 'abnormal' },
              { name: 'Na',        val: '128 mEq/L',  ref: '(135–145)',flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Severe dengue hepatitis with AST > ALT (unlike viral hepatitis). Hyponatremia from plasma leakage. Hypoalbuminemia worsening capillary leakage — monitor closely.' } } },
        { id: 'lab_dengue_33', label: 'Tropical Disease Screen (Dengue NS1 + Serology)', icon: 'lab', points: 50,
          finding: { type: 'labs', title: 'Dengue Rapid Diagnostic Tests', subtitle: 'NS1 Ag + IgM/IgG ELISA',
            results: [
              { name: 'NS1 Antigen',  val: 'POSITIVE (day 5 — still detectable in DHF)',          flag: 'critical' },
              { name: 'Dengue IgM',   val: 'POSITIVE — secondary dengue infection (IgM/IgG ≥ 1.2)', flag: 'critical' },
              { name: 'Dengue IgG',   val: 'POSITIVE — pre-existing antibody (DENV serotype prior exposure)', flag: 'abnormal' },
              { name: 'Serotype note',val: 'Secondary infection with different serotype — ADE mechanism drives DHF severity', flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Secondary dengue infection via Antibody-Dependent Enhancement (ADE) is the primary driver of DHF. Previous dengue IgG cross-reacts with new serotype, amplifying viral replication. No antiviral — supportive care is everything.' } } },
        { id: 'lab_abg_33', label: 'ABG / Metabolic Assessment', icon: 'lab', points: 15,
          finding: { type: 'labs', title: 'Arterial Blood Gas', subtitle: 'Respiratory & Acid-Base',
            results: [
              { name: 'pH',    val: '7.32',      ref: '(7.35–7.45)', flag: 'abnormal' },
              { name: 'pCO₂', val: '30 mmHg',   ref: '(35–45)',     flag: 'abnormal' },
              { name: 'HCO₃', val: '16 mEq/L',  ref: '(22–26)',     flag: 'abnormal' },
              { name: 'Lactate',val: '3.2 mmol/L',ref: '(<2)',       flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Metabolic acidosis with compensatory hyperventilation. Elevated lactate indicates tissue hypoperfusion — dengue shock syndrome developing. Aggressive IV fluid resuscitation required.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_33_id', label: 'Infectious Disease Consult', icon: 'consult', points: 25,
          finding: { type: 'consult', title: 'Infectious Disease Consultation', subtitle: 'Dengue Management Protocol',
            results: [
              { name: 'Diagnosis',  val: 'Dengue Hemorrhagic Fever Grade III (Dengue Shock Syndrome)', flag: 'critical' },
              { name: 'Fluids',     val: 'Isotonic crystalloid 10 mL/kg over 1 hour — then titrate to clinical response', flag: 'normal' },
              { name: 'Avoid',      val: 'NSAIDs (ibuprofen) — STOP immediately. No aspirin. No corticosteroids.', flag: 'critical' },
              { name: 'Avoid',      val: 'Prophylactic platelet transfusion — ONLY transfuse if < 10k or active severe bleeding', flag: 'critical' },
              { name: 'Monitoring', val: 'Hourly vitals, serial hematocrit Q4–6h, strict I&O, watch for fluid overload in recovery', flag: 'normal' },
            ],
            note: { type: 'alert', text: 'No dengue antiviral exists. Management is entirely supportive. The leakage phase (days 4–7) is the most dangerous — plasma returns to vasculature in recovery phase; over-hydration causes pulmonary edema.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_33_correct', label: 'Admit ICU — IV Crystalloids, Stop NSAIDs, Serial Hematocrit Monitoring', icon: 'admit', outcome: 'correct', points: 100,
        feedback: { title: 'Excellent — DHF Managed Appropriately', grade: 'Outstanding',
          body: 'ICU admission with careful crystalloid resuscitation is the cornerstone of dengue hemorrhagic fever management. Stopping NSAIDs (ibuprofen) is critical — they worsen platelet dysfunction and GI bleeding. Serial hematocrit every 4–6 hours tracks plasma leakage. Platelet transfusion is withheld unless < 10,000 or severe bleeding. The positive tourniquet test, hematocrit rise ≥ 20%, and thrombocytopenia confirm DHF.' } },
      { id: 'disp_33_partial', label: 'Admit — Platelet Transfusion Empirically Given', icon: 'admit', outcome: 'partial', points: -25,
        feedback: { title: 'Partially Correct — Prophylactic Platelets Contraindicated in DHF', grade: 'Needs Improvement',
          body: 'Prophylactic platelet transfusion is not recommended in dengue — platelets are destroyed rapidly by the immune response, transfusions carry risk, and clinical trials show no benefit without active bleeding. Only transfuse if count < 10,000/µL or active significant hemorrhage. Fluid management, not platelets, is the primary intervention.' } },
      { id: 'disp_33_incorrect', label: 'Discharge — Viral Syndrome, Continue NSAIDs for Pain', icon: 'rx', outcome: 'incorrect', points: -150,
        feedback: { title: 'Fatal Error — DHF Untreated with Harmful Medication', grade: 'Critical Error',
          body: 'This patient has dengue shock syndrome. Discharge is not safe — she needs continuous hemodynamic monitoring and careful fluid management. Continuing NSAIDs in dengue hemorrhagic fever is contraindicated: ibuprofen inhibits platelet function (already at 24k), promotes GI bleeding, and can precipitate fatal hemorrhage. This decision could be lethal.' } },
    ],
    correctDisposition: 'disp_33_correct',
    criticalActions: ['pe_33_exam', 'lab_cbc_33', 'lab_dengue_33'],
  },

  // ─── ID Case 34: Robert L. — Disseminated Histoplasmosis (HIV) ─────────────
  {
    id: 34, specialty: 'id',
    meta: { title: 'Fever & Mucocutaneous Lesions (HIV)', tagLabels: [{ t: 'IMMUNOCOMPROMISED', cls: 'urgent' }, { t: 'Fungal Infection', cls: '' }] },
    patient: {
      name: 'Robert L.', age: 45, sex: 'Male', avatar: 'male', emoji: '👨',
      chiefComplaint: 'Progressive fatigue, fever, weight loss, and skin lesions in known HIV patient',
      vitals: [
        { label: 'BP',     value: '104/68',   status: 'borderline' },
        { label: 'HR',     value: '108 bpm',  status: 'abnormal'   },
        { label: 'RR',     value: '24 /min',  status: 'abnormal'   },
        { label: 'Temp',   value: '38.9 °C',  status: 'abnormal'   },
        { label: 'O₂ Sat', value: '91%',      status: 'abnormal'   },
        { label: 'Weight', value: '61 kg (↓11 kg in 6 wks)', status: 'abnormal' },
      ],
      history: '45-year-old male with HIV diagnosed 8 years ago (lost to follow-up × 2 years, non-adherent to ART). Spent a long weekend cave exploring in Mammoth Cave National Park, Kentucky (Ohio River Valley) 8 weeks ago. Now presents with 6 weeks of progressive fatigue, daily fevers, night sweats, and 11 kg weight loss. New skin lesions appearing — "bumps on face and chest." Dry cough, dyspnea on exertion. Mild confusion today (family reports).',
      pmh: 'HIV/AIDS (non-adherent ART: bictegravir/tenofovir/emtricitabine stopped 2 years ago)',
      medications: 'None currently (self-discontinued ART)',
      allergies: 'Trimethoprim-sulfamethoxazole (hives)',
      social: 'Photographer, former smoker (5 pack-years), no IVDU, occasional alcohol',
      family: 'No relevant family history',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_34_skin', label: 'Mucocutaneous & Pulmonary Examination', icon: 'exam', points: 35,
          finding: { type: 'exam', title: 'Physical Examination', subtitle: 'Skin, Mucosa & Lungs',
            results: [
              { name: 'Skin',        val: 'Numerous 2–5 mm papules with central umbilication on face, chest, and arms — morphologically resembling molluscum contagiosum', flag: 'critical' },
              { name: 'Oral mucosa', val: 'White plaques on palate (thrush) + 3 shallow ulcers on tongue', flag: 'abnormal' },
              { name: 'Lungs',       val: 'Diffuse bilateral crackles, diminished at bases',                 flag: 'critical' },
              { name: 'Lymph nodes', val: 'Cervical + axillary lymphadenopathy (2–3 cm, non-tender)',       flag: 'abnormal' },
              { name: 'Neuro',       val: 'Mild disorientation to time (year correct, date wrong)',          flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Umbilicated papules in HIV with CD4 < 50 = think Histoplasma, Penicilliosis, Cryptococcus, or molluscum. Cave explorer + Ohio River Valley + disseminated findings = Histoplasma capsulatum until proven otherwise.' } },
          stateEffect: { state: 'worsening', message: 'O₂ sat 91%, mild confusion — CNS involvement and respiratory failure developing. Time-critical: initiate antifungal therapy urgently. ART restart timing critical (IRIS risk).' } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_cbc_34', label: 'CBC with Differential', icon: 'lab', points: 25,
          finding: { type: 'labs', title: 'Complete Blood Count', subtitle: 'Bone Marrow Assessment',
            results: [
              { name: 'WBC',       val: '2.4 × 10³/µL',  ref: '(4.5–11)',  flag: 'critical' },
              { name: 'Hgb',       val: '7.8 g/dL',       ref: '(13–17)',   flag: 'critical' },
              { name: 'Platelets', val: '68 × 10³/µL',   ref: '(150–400)', flag: 'critical' },
              { name: 'Peripheral smear', val: 'Intracellular yeast forms seen within macrophages in 30% of fields', flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Pancytopenia + intracellular yeast on peripheral smear = Histoplasma capsulatum (2–4 µm budding yeast engulfed by macrophages). Bone marrow biopsy will show heavy fungal burden.' } } },
        { id: 'lab_ldh_34', label: 'Tumor Markers / LDH', icon: 'lab', points: 15,
          finding: { type: 'labs', title: 'LDH & Inflammatory Markers', subtitle: 'Disease Severity',
            results: [
              { name: 'LDH',          val: '1,840 U/L',   ref: '(140–280)',  flag: 'critical' },
              { name: 'Ferritin',     val: '12,400 ng/mL',ref: '(12–300)',   flag: 'critical' },
              { name: 'Alkaline Phos',val: '420 U/L',     ref: '(44–147)',   flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Markedly elevated LDH and ferritin correlate with disseminated histoplasmosis burden and are used to track treatment response. Ferritin > 10,000 is a poor prognostic marker.' } } },
        { id: 'lab_histo_34', label: 'Fungal Antigen Screen (Histoplasma urine Ag)', icon: 'lab', points: 60,
          finding: { type: 'labs', title: 'Fungal Antigen Diagnostics', subtitle: 'Urine & Serum',
            results: [
              { name: 'Urine Histoplasma Ag', val: 'POSITIVE — 18.4 ng/mL (MiraVista EIA, ref < 0.2)',   flag: 'critical' },
              { name: 'Serum Histoplasma Ag', val: 'POSITIVE — 9.6 ng/mL',                               flag: 'critical' },
              { name: 'Cryptococcal Ag (serum)',val: 'NEGATIVE',                                          flag: 'normal'   },
              { name: 'Beta-D-Glucan',          val: '380 pg/mL (positive > 80)',                         flag: 'critical' },
            ],
            note: { type: 'alert', text: 'Urine Histoplasma antigen is the most sensitive test (85–95%) for disseminated disease in immunocompromised patients. Cryptococcal Ag negative helps narrow the differential. Begin treatment — do not wait for culture (4–6 weeks).' } } },
        { id: 'lab_cd4_34', label: 'HIV / CD4 Count / Viral Load', icon: 'lab', points: 30,
          finding: { type: 'labs', title: 'HIV Immunological Status', subtitle: 'Stat',
            results: [
              { name: 'CD4 Count',    val: '42 cells/µL (AIDS-defining)',     ref: '(> 500 normal)', flag: 'critical' },
              { name: 'HIV-1 RNA',    val: '2,400,000 copies/mL',            ref: '(undetectable)', flag: 'critical' },
              { name: 'HIV-2',        val: 'Not detected',                    ref: '',               flag: 'normal'   },
            ],
            note: { type: 'alert', text: 'CD4 42 — profound immunosuppression explaining disseminated disease. Restart ART 2–4 weeks AFTER antifungal induction to reduce IRIS risk (Histoplasma-IRIS can be severe). Do not restart ART simultaneously.' } } },
      ] },
      { group: 'Imaging', items: [
        { id: 'img_ct_34', label: 'CT Chest (with contrast)', icon: 'imaging', points: 25,
          finding: { type: 'imaging', title: 'CT Chest', subtitle: 'With Contrast',
            results: [
              { name: 'Pulmonary',   val: 'Diffuse bilateral micronodules (2–4 mm) in miliary pattern + ground-glass opacities', flag: 'critical' },
              { name: 'Mediastinum', val: 'Mediastinal lymphadenopathy — multiple nodes 1.5–3.5 cm',                              flag: 'abnormal' },
              { name: 'Pleura',      val: 'Small bilateral pleural effusions',                                                     flag: 'abnormal' },
            ],
            note: { type: 'alert', text: 'Miliary pattern + mediastinal lymphadenopathy in HIV with CD4 < 50 = disseminated histoplasmosis (or TB — exclude with sputum AFB). Radiographic pattern overlaps heavily with miliary TB.' } },
          stateEffect: { state: 'worsening', message: 'Bilateral miliary infiltrates confirmed. Patient requires supplemental O₂. Begin antifungal therapy urgently — delay beyond 24 hours significantly worsens outcomes.' } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_34_id', label: 'Infectious Disease Consult (HIV + Fungal)', icon: 'consult', points: 35,
          finding: { type: 'consult', title: 'HIV / Infectious Disease Consultation', subtitle: 'Disseminated Histoplasmosis Protocol',
            results: [
              { name: 'Diagnosis',    val: 'Disseminated Histoplasmosis — AIDS-defining illness (CD4 42)', flag: 'critical' },
              { name: 'Induction',    val: 'Liposomal Amphotericin B 3 mg/kg IV daily × 14 days (minimum)', flag: 'normal' },
              { name: 'Step-down',    val: 'Itraconazole 200 mg PO TID × 3 days, then BID × 12 months (minimum)', flag: 'normal' },
              { name: 'ART restart',  val: 'Delay ART restart 2–4 weeks — risk of IRIS (Histoplasma-IRIS severe)', flag: 'critical' },
              { name: 'Avoid',        val: 'Fluconazole — Histoplasma is intrinsically resistant. Do not use voriconazole first-line.', flag: 'critical' },
              { name: 'PCP ppx',      val: 'Atovaquone (sulfa allergy) 1500 mg PO daily — CD4 42 requires prophylaxis', flag: 'normal' },
            ],
            note: { type: 'alert', text: 'Track urine Histoplasma antigen every 2–4 weeks to monitor response. Relapse rate high without lifelong secondary prophylaxis (itraconazole) until CD4 > 150 on sustained ART.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_34_correct', label: 'Admit ICU — Liposomal AmB + Delay ART 2–4 weeks + Atovaquone PCP Ppx', icon: 'admit', outcome: 'correct', points: 100,
        feedback: { title: 'Excellent — Disseminated Histoplasmosis Correctly Managed', grade: 'Outstanding',
          body: 'Liposomal amphotericin B induction followed by itraconazole step-down is the IDSA-recommended regimen for severe disseminated histoplasmosis. Delaying ART 2–4 weeks reduces paradoxical IRIS. The urine antigen test is the highest-yield diagnostic in this setting. PCP prophylaxis with atovaquone (sulfa allergy) prevents a second OI at CD4 42. Cave exposure in Ohio River Valley is the classic exposure history.' } },
      { id: 'disp_34_partial', label: 'Admit — Fluconazole + Restart ART Immediately', icon: 'admit', outcome: 'partial', points: -40,
        feedback: { title: 'Two Critical Errors', grade: 'Significant Error',
          body: 'Fluconazole has no meaningful activity against Histoplasma capsulatum — it is intrinsically resistant. Only itraconazole (or amphotericin B for severe disease) is effective. Restarting ART immediately in a patient with CD4 42 and active disseminated histoplasmosis risks severe immune reconstitution inflammatory syndrome (IRIS), which can be fatal in fungal infections.' } },
      { id: 'disp_34_incorrect', label: 'Admit — Start Empiric TB Treatment (RIPE)', icon: 'rx', outcome: 'incorrect', points: -100,
        feedback: { title: 'Wrong Diagnosis — Histoplasma, Not TB', grade: 'Critical Error',
          body: 'While the miliary chest CT and cave exposure could suggest TB, the urine Histoplasma antigen was strongly positive (18.4 ng/mL) and intracellular yeast forms were visible on peripheral smear. Treating TB instead of histoplasmosis leaves the fungal infection untreated — fatal at CD4 42. The umbilicated skin papules and Ohio River Valley exposure are characteristic of disseminated Histoplasma, not TB.' } },
    ],
    correctDisposition: 'disp_34_correct',
    criticalActions: ['pe_34_skin', 'lab_histo_34', 'lab_cd4_34', 'consult_34_id'],
  },

  // ─── ID Case 35: James T. — Acute HIV-1 Seroconversion ─────────────
  {
    id: 35, specialty: 'id',
    meta: { title: 'Mononucleosis-Like Syndrome', tagLabels: [{ t: 'EXPOSURE HX', cls: 'urgent' }, { t: 'Infectious Disease', cls: '' }] },
    patient: {
      name: 'James T.', age: 26, sex: 'Male', avatar: 'male', emoji: '👨',
      chiefComplaint: 'Sore throat, rash, fever, and swollen lymph nodes — 3 weeks after unprotected sexual exposure',
      vitals: [
        { label: 'BP',     value: '118/74',   status: 'normal'     },
        { label: 'HR',     value: '96 bpm',   status: 'borderline' },
        { label: 'RR',     value: '18 /min',  status: 'normal'     },
        { label: 'Temp',   value: '38.3 °C',  status: 'abnormal'   },
        { label: 'O₂ Sat', value: '99%',      status: 'normal'     },
        { label: 'Pain',   value: '5 / 10',   status: 'borderline' },
      ],
      history: '26-year-old male presents with 10 days of progressive flu-like illness: fever, sore throat, diffuse myalgia and arthralgia, and a rash that appeared 5 days ago. Reports a mononucleosis-like syndrome unlike any prior illness he has experienced. Mentions one episode of unprotected receptive anal intercourse with a partner of unknown HIV status 3 weeks ago. Previously tested HIV-negative 6 months ago. Has not taken PrEP. Denies IV drug use. Has not sought testing since the exposure.',
      pmh: 'No prior illnesses. Up to date on standard vaccinations.',
      medications: 'None',
      allergies: 'NKDA',
      social: 'Insurance analyst, MSM, non-smoker, social alcohol, no drugs',
      family: 'No relevant history',
    },
    actions: [
      { group: 'Physical Exam', items: [
        { id: 'pe_35_exam', label: 'Lymph Node, Skin & Oral Examination', icon: 'exam', points: 30,
          finding: { type: 'exam', title: 'Physical Examination', subtitle: 'Lymphatic, Mucocutaneous',
            results: [
              { name: 'Lymph nodes',  val: 'Generalized lymphadenopathy — cervical, axillary, inguinal (bilateral, 1–2 cm, tender)', flag: 'abnormal' },
              { name: 'Oropharynx',   val: 'Erythematous pharynx, tonsillar exudate; 4 shallow aphthous-type ulcers on buccal mucosa', flag: 'abnormal' },
              { name: 'Skin',         val: 'Non-pruritic maculopapular rash — trunk, palms, and soles (2–5 mm erythematous macules)', flag: 'critical' },
              { name: 'Spleen',       val: 'Mild splenomegaly (tip palpable)',                                                         flag: 'abnormal' },
              { name: 'Testes',       val: 'No masses or tenderness',                                                                 flag: 'normal'   },
            ],
            note: { type: 'alert', text: 'Maculopapular rash on palms/soles + oral ulcers + generalized lymphadenopathy 3 weeks post high-risk exposure = acute HIV seroconversion (Fiebig stage III–IV). Viral loads > 1 million at this stage — extreme infectivity window.' } } },
      ] },
      { group: 'Labs', items: [
        { id: 'lab_hiv_35', label: 'HIV / EBV / CMV / Hepatitis Panel', icon: 'lab', points: 60,
          finding: { type: 'labs', title: 'Acute Retroviral / Viral Panel', subtitle: '4th Generation Ag/Ab + RNA',
            results: [
              { name: 'HIV-1/2 Ag/Ab (4th gen)', val: 'REACTIVE — p24 antigen DETECTED',                       flag: 'critical' },
              { name: 'HIV-1 RNA (PCR)',          val: '1,840,000 copies/mL (log₁₀ 6.3)',                       flag: 'critical' },
              { name: 'HIV-1/2 differentiation',  val: 'HIV-1 POSITIVE — HIV-2 NEGATIVE',                      flag: 'critical' },
              { name: 'Monospot (EBV heterophile)',val: 'NEGATIVE — ruling out infectious mononucleosis',       flag: 'normal'   },
              { name: 'EBV VCA IgM',              val: 'NEGATIVE',                                              flag: 'normal'   },
              { name: 'CMV IgM',                  val: 'NEGATIVE',                                              flag: 'normal'   },
              { name: 'HBsAg / HCV Ab',           val: 'NEGATIVE',                                              flag: 'normal'   },
            ],
            note: { type: 'alert', text: 'Acute HIV confirmed — p24 antigenemia + HIV-1 RNA 1.84M copies/mL. 4th-gen Ag/Ab is positive; antibody-only (3rd gen) may still be NEGATIVE at this early stage — the "window period." Begin 4-party exposure counseling and immediate ART.' } },
          stateEffect: { state: 'improving', message: 'Diagnosis confirmed — acute HIV seroconversion. Early ART initiation dramatically reduces reservoir seeding. Patient can achieve undetectable status within 3–6 months. Excellent long-term prognosis with adherence.' } },
        { id: 'lab_cbc_35', label: 'CBC with Differential', icon: 'lab', points: 20,
          finding: { type: 'labs', title: 'Complete Blood Count', subtitle: 'Lymphocyte Assessment',
            results: [
              { name: 'WBC',         val: '3.8 × 10³/µL',  ref: '(4.5–11)',   flag: 'abnormal' },
              { name: 'Lymphocytes', val: '14% (absolute 530/µL)', ref: '(>1000)', flag: 'abnormal' },
              { name: 'Atypical lymphs', val: '12% — reactive lymphocytosis (virocytes)', flag: 'abnormal' },
              { name: 'Platelets',   val: '110 × 10³/µL',  ref: '(150–400)',  flag: 'abnormal' },
            ],
            note: { type: '', text: 'Lymphopenia with atypical lymphocytes (virocytes) is characteristic of acute HIV. Unlike EBV mono, true atypical large lymphocytes are less prominent; instead, CD4 T-cells are acutely depleted.' } } },
        { id: 'lab_inflam_35', label: 'CRP / ESR / Procalcitonin', icon: 'lab', points: 10,
          finding: { type: 'labs', title: 'Inflammatory Markers', subtitle: 'Acute Phase',
            results: [
              { name: 'CRP',          val: '48 mg/L',    ref: '(<10)',   flag: 'abnormal' },
              { name: 'ESR',          val: '62 mm/hr',   ref: '(<20)',   flag: 'abnormal' },
              { name: 'Procalcitonin',val: '0.18 ng/mL', ref: '(<0.25)',flag: 'normal'   },
            ],
            note: { type: '', text: 'Elevated inflammatory markers confirm active systemic illness. Normal procalcitonin makes bacterial sepsis unlikely. Pattern consistent with acute viral syndrome.' } } },
        { id: 'lab_bmp_35', label: 'BMP / Lactic Acid', icon: 'lab', points: 10,
          finding: { type: 'labs', title: 'Basic Metabolic Panel', subtitle: 'Baseline before ART',
            results: [
              { name: 'Creatinine',  val: '0.9 mg/dL',   ref: '(0.6–1.2)',flag: 'normal'   },
              { name: 'Glucose',     val: '88 mg/dL',    ref: '(70–100)', flag: 'normal'   },
              { name: 'Na / K',      val: '138 / 4.0 mEq/L', ref: '(normal)', flag: 'normal' },
              { name: 'ALT',         val: '62 U/L',      ref: '(7–56)',   flag: 'abnormal' },
              { name: 'Lactic Acid', val: '1.1 mmol/L',  ref: '(<2)',     flag: 'normal'   },
            ],
            note: { type: '', text: 'Normal renal function — TAF-based ART (tenofovir alafenamide) preferred over TDF given renal safety profile. Mildly elevated ALT from hepatic inflammation — baseline before ART.' } } },
      ] },
      { group: 'Consults', items: [
        { id: 'consult_35_id', label: 'Infectious Disease Consult (HIV Care)', icon: 'consult', points: 40,
          finding: { type: 'consult', title: 'HIV/Infectious Disease Consultation', subtitle: 'Acute Seroconversion Management',
            results: [
              { name: 'Diagnosis',    val: 'Acute HIV-1 Seroconversion — Fiebig Stage III (p24 Ag + / Ab ±)', flag: 'critical' },
              { name: 'ART — Start',  val: 'Bictegravir/Tenofovir AF/Emtricitabine (Biktarvy) 1 tab PO daily — SAME DAY', flag: 'normal' },
              { name: 'Why early ART',val: 'Limits viral reservoir seeding, preserves immune function, reduces set-point VL', flag: 'normal' },
              { name: 'Baseline labs',val: 'CD4/VL, genotype resistance testing (before ART), HLA-B5701 (abacavir), creatinine', flag: 'normal' },
              { name: 'Partner notification', val: 'Discuss with patient — DIS (Disease Intervention Specialists) available', flag: 'normal' },
              { name: 'PrEP counseling',      val: 'Educate partners — PrEP can prevent future transmission',                flag: 'normal' },
              { name: 'Prognosis',            val: 'With adherence: undetectable in 3–6 months; normal lifespan expected',  flag: 'normal' },
            ],
            note: { type: 'alert', text: 'U=U: Undetectable = Untransmittable. Counsel patient that achieving undetectable viral load prevents sexual transmission. This is both therapeutic and a public health intervention.' } } },
      ] },
    ],
    dispositions: [
      { id: 'disp_35_correct', label: 'Start ART Same Day — Biktarvy + ID Follow-up + Partner Notification', icon: 'rx', outcome: 'correct', points: 100,
        feedback: { title: 'Excellent — Acute HIV Diagnosed and Managed Optimally', grade: 'Outstanding',
          body: 'Same-day ART initiation during acute HIV seroconversion dramatically limits the size of the viral reservoir and preserves immune function. The 4th-generation HIV-1/2 Ag/Ab combo test detects p24 antigenemia weeks before antibodies appear — critical in the acute window period. HIV-1 RNA PCR confirms the diagnosis. Biktarvy (bictegravir/TAF/FTC) is preferred first-line for its high barrier to resistance and excellent tolerability. Counsel on U=U.' } },
      { id: 'disp_35_partial', label: 'Admit — Wait for Resistance Testing Before Starting ART', icon: 'admit', outcome: 'partial', points: -20,
        feedback: { title: 'Partially Correct — Delay in ART Is Suboptimal', grade: 'Needs Improvement',
          body: 'DHHS guidelines recommend starting ART on the same day or within days of diagnosis — including before resistance results return. Send genotype resistance testing before starting ART, but do not wait for results. Start empirically with a high-barrier-to-resistance regimen (integrase inhibitor-based). Reservoir seeding occurs rapidly in the first weeks — each day of delay matters.' } },
      { id: 'disp_35_incorrect', label: 'Discharge — Symptomatic Treatment for EBV Mononucleosis', icon: 'rx', outcome: 'incorrect', points: -130,
        feedback: { title: 'Missed HIV Diagnosis — Mononucleosis Ruled Out by Monospot', grade: 'Critical Error',
          body: 'The monospot test and EBV VCA IgM were both negative, ruling out infectious mononucleosis. HIV-1 RNA of 1.84 million copies/mL and a reactive 4th-generation Ag/Ab test confirm acute HIV. The palm/sole rash and oral ulcers are not typical of EBV mono. Discharging without ART allows continued immune destruction during the seroconversion syndrome — when viral load is highest and reservoir seeding is most aggressive.' } },
    ],
    correctDisposition: 'disp_35_correct',
    criticalActions: ['pe_35_exam', 'lab_hiv_35', 'consult_35_id'],
  },

  {
id: 36,
specialty: 'id',
meta: { title: 'Acute Pyelonephritis', tagLabels: [{ t: 'FEVER', cls: 'urgent' }, { t: 'URINARY', cls: '' }] },
patient: {
name: 'Maria L.', age: 34, sex: 'Female', avatar: 'female', emoji: '👩',
chiefComplaint: 'Fever, flank pain, and nausea for 2 days',
vitals: [
{ label: 'BP', value: '102/66', status: 'borderline' },
{ label: 'HR', value: '108 bpm', status: 'abnormal' },
{ label: 'RR', value: '20 /min', status: 'borderline' },
{ label: 'Temp', value: '39.1 °C', status: 'abnormal' },
{ label: 'O₂ Sat', value: '98%', status: 'normal' },
{ label: 'Pain', value: '7 / 10', status: 'abnormal' }
],
history: '34 year old woman with 2 days of fever, chills, right sided flank pain, and dysuria. Reports urinary frequency and urgency. Symptoms worsened despite increased fluid intake. No recent hospitalizations. Denies vaginal discharge. No prior similar episodes.',
pmh: 'Recurrent urinary tract infections',
medications: 'None',
allergies: 'NKDA',
social: 'Sexually active, no tobacco, occasional alcohol',
family: 'Non contributory'
},
actions: [
{ group: 'Physical Exam', items: [
{ id: 'pe_36_exam', label: 'Abdominal and Costovertebral Exam', icon: 'exam', points: 30,
finding: { type: 'exam', title: 'Physical Exam', subtitle: 'Abdomen and flank',
results: [
{ name: 'Costovertebral angle tenderness', val: 'Positive on right side', flag: 'critical' },
{ name: 'Abdominal tenderness', val: 'Mild suprapubic tenderness', flag: 'abnormal' },
{ name: 'Guarding', val: 'None', flag: 'normal' }
],
note: { type: 'alert', text: 'Costovertebral angle tenderness strongly suggests upper urinary tract infection involving the kidney.' }
}
}
]},
{ group: 'Labs', items: [
{ id: 'lab_36_urine', label: 'Urinalysis', icon: 'lab', points: 50,
finding: { type: 'labs', title: 'Urinalysis', subtitle: 'Infection markers',
results: [
{ name: 'Leukocyte esterase', val: 'Positive', ref: 'Negative', flag: 'critical' },
{ name: 'Nitrites', val: 'Positive', ref: 'Negative', flag: 'critical' },
{ name: 'WBC', val: 'Greater than 50 per hpf', ref: '0 to 5', flag: 'critical' },
{ name: 'Bacteria', val: 'Many', ref: 'None', flag: 'critical' }
],
note: { type: 'alert', text: 'Nitrites and leukocyte esterase together strongly support gram negative urinary infection.' }
}
}
]},
{ group: 'Imaging', items: [
{ id: 'img_36_ct', label: 'CT Abdomen and Pelvis', icon: 'imaging', points: 30,
finding: { type: 'imaging', title: 'CT Findings', subtitle: 'Renal inflammation',
results: [
{ name: 'Right kidney', val: 'Enlarged with perinephric stranding', flag: 'abnormal' }
],
note: { type: '', text: 'Imaging is useful if complications or obstruction are suspected.' }
}
}
]},
{ group: 'Consults', items: [
{ id: 'consult_36_id', label: 'Infectious Disease', icon: 'consult', points: 20,
finding: { type: 'consult', title: 'Management Guidance', subtitle: 'Antibiotic therapy',
results: [
{ name: 'Recommendation', val: 'Outpatient oral fluoroquinolone or inpatient IV antibiotics if unstable', flag: 'normal' }
],
note: { type: 'alert', text: 'Severe cases require IV antibiotics and possible admission.' }
}
}
]}
],
dispositions: [
{ id: 'disp_36_correct', label: 'Start antibiotics and outpatient management', icon: 'rx', outcome: 'correct', points: 100,
feedback: { title: 'Appropriate treatment', grade: 'Outstanding', body: 'Uncomplicated pyelonephritis can be managed with antibiotics if stable and tolerating oral intake.' } },
{ id: 'disp_36_partial', label: 'Admit for observation without antibiotics', icon: 'admit', outcome: 'partial', points: -20,
feedback: { title: 'Incomplete', grade: 'Needs Improvement', body: 'Antibiotics are required and should not be delayed.' } },
{ id: 'disp_36_incorrect', label: 'Discharge without treatment', icon: 'rx', outcome: 'incorrect', points: -120,
feedback: { title: 'Dangerous', grade: 'Critical Error', body: 'Untreated pyelonephritis can progress to sepsis.' } }
],
correctDisposition: 'disp_36_correct',
criticalActions: ['pe_36_exam', 'lab_36_urine', 'img_36_ct']
},

{
id: 37,
specialty: 'id',
meta: { title: 'Community Acquired Pneumonia', tagLabels: [{ t: 'RESPIRATORY', cls: 'urgent' }] },
patient: {
name: 'Daniel K.', age: 52, sex: 'Male', avatar: 'male', emoji: '👨',
chiefComplaint: 'Cough with fever and shortness of breath for 5 days',
vitals: [
{ label: 'BP', value: '110/70', status: 'normal' },
{ label: 'HR', value: '102 bpm', status: 'abnormal' },
{ label: 'RR', value: '22 /min', status: 'abnormal' },
{ label: 'Temp', value: '38.5 °C', status: 'abnormal' },
{ label: 'O₂ Sat', value: '93%', status: 'abnormal' },
{ label: 'Pain', value: '4 / 10', status: 'borderline' }
],
history: '52 year old male with 5 days of productive cough, fever, and pleuritic chest pain. Symptoms progressed with increasing fatigue and mild shortness of breath. No recent travel. No prior lung disease.',
pmh: 'Hypertension',
medications: 'Lisinopril',
allergies: 'NKDA',
social: 'Smokes 1 pack per day, occasional alcohol',
family: 'Father had heart disease'
},
actions: [
{ group: 'Physical Exam', items: [
{ id: 'pe_37_exam', label: 'Lung Exam', icon: 'exam', points: 30,
finding: { type: 'exam', title: 'Respiratory Exam', subtitle: 'Lung fields',
results: [
{ name: 'Breath sounds', val: 'Decreased at right lower lobe', flag: 'abnormal' },
{ name: 'Crackles', val: 'Present in right base', flag: 'critical' },
{ name: 'Percussion', val: 'Dullness over right lower lobe', flag: 'abnormal' }
],
note: { type: 'alert', text: 'Focal crackles with dullness suggests consolidation.' },
            stateEffect: { state: 'worsening', message: 'O₂ sat 93% — consolidation confirmed. Patient at risk for respiratory failure without prompt treatment.' }
}
}
]},
{ group: 'Imaging', items: [
{ id: 'img_37_cxr', label: 'Chest X ray', icon: 'imaging', points: 40,
finding: { type: 'imaging', title: 'Chest X ray', subtitle: 'Pulmonary infiltrate',
results: [
{ name: 'Right lower lobe', val: 'Consolidation present', flag: 'critical' }
],
note: { type: 'alert', text: 'Lobar consolidation is consistent with bacterial pneumonia.' }
}
}
]},
{ group: 'Labs', items: [
{ id: 'lab_37_cbc', label: 'CBC', icon: 'lab', points: 20,
finding: { type: 'labs', title: 'Blood Count', subtitle: 'Infection markers',
results: [
{ name: 'WBC', val: '14.2 x 10^3 per uL', ref: '4.5 to 11', flag: 'abnormal' },
{ name: 'Neutrophils', val: '82%', ref: '40 to 70', flag: 'abnormal' }
],
note: { type: '', text: 'Neutrophil predominance suggests bacterial infection.' }
}
}
]},
{ group: 'Consults', items: [
{ id: 'consult_37_id', label: 'Pulmonology', icon: 'consult', points: 20,
finding: { type: 'consult', title: 'Management', subtitle: 'Antibiotic selection',
results: [
{ name: 'Recommendation', val: 'Outpatient oral antibiotics if stable, otherwise inpatient IV therapy', flag: 'normal' }
],
note: { type: 'alert', text: 'Severity assessment guides disposition.' }
}
}
]}
],
dispositions: [
{ id: 'disp_37_correct', label: 'Start antibiotics outpatient with close follow up', icon: 'rx', outcome: 'correct', points: 100,
feedback: { title: 'Correct management', grade: 'Outstanding', body: 'Stable patients with community acquired pneumonia can be treated as outpatients with appropriate antibiotics.' } },
{ id: 'disp_37_partial', label: 'Admit without antibiotics', icon: 'admit', outcome: 'partial', points: -20,
feedback: { title: 'Incomplete', grade: 'Needs Improvement', body: 'Antibiotics are required.' } },
{ id: 'disp_37_incorrect', label: 'No treatment and discharge', icon: 'rx', outcome: 'incorrect', points: -120,
feedback: { title: 'Dangerous', grade: 'Critical Error', body: 'Untreated pneumonia can lead to respiratory failure.' } }
],
correctDisposition: 'disp_37_correct',
criticalActions: ['pe_37_exam', 'img_37_cxr', 'lab_37_cbc']
},

{
id: 38,
specialty: 'id',
meta: { title: 'Clostridioides Difficile Infection', tagLabels: [{ t: 'DIARRHEA', cls: 'urgent' }] },
patient: {
name: 'Sarah M.', age: 67, sex: 'Female', avatar: 'female', emoji: '👩',
chiefComplaint: 'Watery diarrhea and abdominal cramps after antibiotics',
vitals: [
{ label: 'BP', value: '98/60', status: 'abnormal' },
{ label: 'HR', value: '110 bpm', status: 'abnormal' },
{ label: 'RR', value: '18 /min', status: 'normal' },
{ label: 'Temp', value: '38.2 °C', status: 'abnormal' },
{ label: 'O₂ Sat', value: '97%', status: 'normal' },
{ label: 'Pain', value: '6 / 10', status: 'abnormal' }
],
history: '67 year old woman recently completed a 10 day course of broad spectrum antibiotics for pneumonia. Now has 6 to 8 watery bowel movements per day with abdominal cramping. No blood in stool. Symptoms began 3 days ago.',
pmh: 'Type 2 diabetes',
medications: 'Metformin',
allergies: 'Penicillin allergy',
social: 'Lives in assisted facility',
family: 'Non contributory'
},
actions: [
{ group: 'Labs', items: [
{ id: 'lab_38_stool', label: 'Stool Toxin Test', icon: 'lab', points: 60,
finding: { type: 'labs', title: 'Stool Testing', subtitle: 'C diff toxins',
results: [
{ name: 'Toxin A and B', val: 'Positive', ref: 'Negative', flag: 'critical' }
],
note: { type: 'alert', text: 'Positive toxin confirms active infection rather than colonization.' },
            stateEffect: { state: 'worsening', message: 'Toxin A/B confirmed — C. diff colitis active. High risk of toxic megacolon without treatment.' }
}
}
]},
{ group: 'Physical Exam', items: [
{ id: 'pe_38_exam', label: 'Abdominal Exam', icon: 'exam', points: 30,
finding: { type: 'exam', title: 'Abdominal Findings', subtitle: 'GI exam',
results: [
{ name: 'Tenderness', val: 'Diffuse mild tenderness', flag: 'abnormal' },
{ name: 'Rebound', val: 'Absent', flag: 'normal' }
],
note: { type: '', text: 'Severe cases may show signs of toxic megacolon.' }
}
}
]},
{ group: 'Imaging', items: [
{ id: 'img_38_ct', label: 'CT Abdomen', icon: 'imaging', points: 20,
finding: { type: 'imaging', title: 'CT Findings', subtitle: 'Colitis',
results: [
{ name: 'Colon', val: 'Wall thickening and inflammation', flag: 'abnormal' }
],
note: { type: '', text: 'Imaging used if complications suspected.' }
}
}
]},
{ group: 'Consults', items: [
{ id: 'consult_38_id', label: 'Infectious Disease', icon: 'consult', points: 20,
finding: { type: 'consult', title: 'Treatment Guidance', subtitle: 'Antibiotic therapy',
results: [
{ name: 'First line', val: 'Oral vancomycin or fidaxomicin', flag: 'normal' }
],
note: { type: 'alert', text: 'Stop inciting antibiotics if possible.' }
}
}
]}
],
dispositions: [
{ id: 'disp_38_correct', label: 'Start oral vancomycin', icon: 'rx', outcome: 'correct', points: 100,
feedback: { title: 'Correct', grade: 'Outstanding', body: 'Oral vancomycin is first line for moderate to severe infection.' } },
{ id: 'disp_38_partial', label: 'IV antibiotics only', icon: 'admit', outcome: 'partial', points: -20,
feedback: { title: 'Incomplete', grade: 'Needs Improvement', body: 'Oral therapy is required since the drug acts in the gut lumen.' } },
{ id: 'disp_38_incorrect', label: 'No treatment', icon: 'rx', outcome: 'incorrect', points: -120,
feedback: { title: 'Dangerous', grade: 'Critical Error', body: 'Untreated infection can lead to toxic megacolon and sepsis.' } }
],
correctDisposition: 'disp_38_correct',
criticalActions: ['lab_38_stool', 'pe_38_exam', 'consult_38_id']
},

{
id: 39,
specialty: 'id',
meta: { title: 'Meningitis Suspicion', tagLabels: [{ t: 'NEURO', cls: 'urgent' }] },
patient: {
name: 'Kevin R.', age: 29, sex: 'Male', avatar: 'male', emoji: '👨',
chiefComplaint: 'Severe headache, fever, and neck stiffness',
vitals: [
{ label: 'BP', value: '120/76', status: 'normal' },
{ label: 'HR', value: '115 bpm', status: 'abnormal' },
{ label: 'RR', value: '20 /min', status: 'borderline' },
{ label: 'Temp', value: '39.0 °C', status: 'abnormal' },
{ label: 'O₂ Sat', value: '98%', status: 'normal' },
{ label: 'Pain', value: '9 / 10', status: 'abnormal' }
],
history: '29 year old man with sudden onset severe headache, fever, photophobia, and vomiting for 1 day. Neck stiffness present. No recent travel. No trauma.',
pmh: 'None',
medications: 'None',
allergies: 'NKDA',
social: 'College student, occasional alcohol',
family: 'Non contributory'
},
actions: [
{ group: 'Physical Exam', items: [
{ id: 'pe_39_exam', label: 'Neurologic Exam', icon: 'exam', points: 40,
finding: { type: 'exam', title: 'Neurologic Findings', subtitle: 'Meningeal signs',
results: [
{ name: 'Nuchal rigidity', val: 'Present', flag: 'critical' },
{ name: 'Kernig sign', val: 'Positive', flag: 'critical' },
{ name: 'Brudzinski sign', val: 'Positive', flag: 'critical' }
],
note: { type: 'alert', text: 'Classic meningeal signs indicate irritation of the meninges.' },
            stateEffect: { state: 'worsening', message: 'Positive Kernig and Brudzinski signs. Bacterial meningitis must be treated within minutes — every hour of delay increases mortality by ~10%.' }
}
}
]},
{ group: 'Labs', items: [
{ id: 'lab_39_lp', label: 'Lumbar Puncture', icon: 'lab', points: 60,
finding: { type: 'labs', title: 'CSF Analysis', subtitle: 'Cerebrospinal fluid',
results: [
{ name: 'Opening pressure', val: '280 mm H2O', ref: '70 to 180', flag: 'critical' },
{ name: 'WBC', val: '1200 per uL with neutrophils', ref: '0 to 5', flag: 'critical' },
{ name: 'Glucose', val: '30 mg/dL', ref: '45 to 80', flag: 'critical' },
{ name: 'Protein', val: '180 mg/dL', ref: '15 to 45', flag: 'critical' }
],
note: { type: 'alert', text: 'Neutrophilic pleocytosis with low glucose suggests bacterial meningitis.' }
}
}
]},
{ group: 'Imaging', items: [
{ id: 'img_39_ct', label: 'CT Head', icon: 'imaging', points: 20,
finding: { type: 'imaging', title: 'CT Head', subtitle: 'Pre lumbar puncture',
results: [
{ name: 'Mass effect', val: 'None', flag: 'normal' }
],
note: { type: '', text: 'CT may be required before lumbar puncture if increased intracranial pressure suspected.' }
}
}
]},
{ group: 'Consults', items: [
{ id: 'consult_39_id', label: 'Infectious Disease', icon: 'consult', points: 20,
finding: { type: 'consult', title: 'Management', subtitle: 'Emergent therapy',
results: [
{ name: 'Treatment', val: 'Immediate IV antibiotics and dexamethasone', flag: 'normal' }
],
note: { type: 'alert', text: 'Do not delay antibiotics in suspected bacterial meningitis.' }
}
}
]}
],
dispositions: [
{ id: 'disp_39_correct', label: 'Immediate IV antibiotics after LP', icon: 'rx', outcome: 'correct', points: 100,
feedback: { title: 'Correct', grade: 'Outstanding', body: 'Bacterial meningitis is a medical emergency requiring prompt antibiotics after diagnostic sampling.' } },
{ id: 'disp_39_partial', label: 'Observe without antibiotics', icon: 'admit', outcome: 'partial', points: -20,
feedback: { title: 'Incomplete', grade: 'Needs Improvement', body: 'Observation without treatment risks rapid deterioration.' } },
{ id: 'disp_39_incorrect', label: 'Discharge home', icon: 'rx', outcome: 'incorrect', points: -120,
feedback: { title: 'Dangerous', grade: 'Critical Error', body: 'Untreated meningitis can lead to death or permanent neurologic damage.' } }
],
correctDisposition: 'disp_39_correct',
criticalActions: ['pe_39_exam', 'lab_39_lp', 'consult_39_id']
},

{
id: 40,
specialty: 'id',
meta: { title: 'Skin Abscess', tagLabels: [{ t: 'SKIN', cls: '' }] },
patient: {
name: 'Alex P.', age: 41, sex: 'Male', avatar: 'male', emoji: '👨',
chiefComplaint: 'Painful swollen lump on arm with redness',
vitals: [
{ label: 'BP', value: '118/78', status: 'normal' },
{ label: 'HR', value: '90 bpm', status: 'normal' },
{ label: 'RR', value: '16 /min', status: 'normal' },
{ label: 'Temp', value: '37.8 °C', status: 'borderline' },
{ label: 'O₂ Sat', value: '99%', status: 'normal' },
{ label: 'Pain', value: '6 / 10', status: 'abnormal' }
],
history: '41 year old man with a 4 day history of a painful, enlarging lesion on the forearm. Initially a small pimple that worsened. Reports warmth and redness. No systemic symptoms.',
pmh: 'None',
medications: 'None',
allergies: 'NKDA',
social: 'Works in construction',
family: 'Non contributory'
},
actions: [
{ group: 'Physical Exam', items: [
{ id: 'pe_40_exam', label: 'Skin Exam', icon: 'exam', points: 40,
finding: { type: 'exam', title: 'Skin Findings', subtitle: 'Local infection',
results: [
{ name: 'Lesion', val: 'Fluctuant erythematous nodule with central pus', flag: 'critical' },
{ name: 'Surrounding erythema', val: 'Present', flag: 'abnormal' }
],
note: { type: 'alert', text: 'Fluctuance suggests a drainable abscess requiring incision and drainage.' }
}
}
]},
{ group: 'Labs', items: [
{ id: 'lab_40_culture', label: 'Wound Culture', icon: 'lab', points: 40,
finding: { type: 'labs', title: 'Culture Results', subtitle: 'Bacterial identification',
results: [
{ name: 'Organism', val: 'Staphylococcus aureus', ref: 'None', flag: 'critical' }
],
note: { type: '', text: 'Culture guides antibiotic selection if needed.' }
}
}
]},
{ group: 'Consults', items: [
{ id: 'consult_40_id', label: 'Surgery', icon: 'consult', points: 20,
finding: { type: 'consult', title: 'Procedure', subtitle: 'Incision and drainage',
results: [
{ name: 'Recommendation', val: 'Incision and drainage is primary treatment', flag: 'normal' }
],
note: { type: 'alert', text: 'Antibiotics alone are insufficient for abscesses.' }
}
}
]}
],
dispositions: [
{ id: 'disp_40_correct', label: 'Incision and drainage with or without antibiotics', icon: 'rx', outcome: 'correct', points: 100,
feedback: { title: 'Correct', grade: 'Outstanding', body: 'Source control via drainage is the definitive treatment for abscess.' } },
{ id: 'disp_40_partial', label: 'Antibiotics only', icon: 'rx', outcome: 'partial', points: -20,
feedback: { title: 'Incomplete', grade: 'Needs Improvement', body: 'Without drainage, infection may persist.' } },
{ id: 'disp_40_incorrect', label: 'No treatment', icon: 'rx', outcome: 'incorrect', points: -120,
feedback: { title: 'Dangerous', grade: 'Critical Error', body: 'Untreated abscess can spread and worsen.' } }
],
correctDisposition: 'disp_40_correct',
criticalActions: ['pe_40_exam', 'lab_40_culture']
},

{
id: 41,
specialty: 'onc',
meta: { title: 'Suspected Lung Cancer', tagLabels: [{ t: 'CANCER', cls: 'urgent' }] },
patient: {
name: 'Robert S.', age: 64, sex: 'Male', avatar: 'male', emoji: '👨',
chiefComplaint: 'Persistent cough and weight loss',
vitals: [
{ label: 'BP', value: '122/78', status: 'normal' },
{ label: 'HR', value: '88 bpm', status: 'normal' },
{ label: 'RR', value: '18 /min', status: 'normal' },
{ label: 'Temp', value: '37.2 °C', status: 'normal' },
{ label: 'O₂ Sat', value: '95%', status: 'borderline' },
{ label: 'Pain', value: '3 / 10', status: 'borderline' }
],
history: '64 year old male with chronic smoking history presents with persistent cough, unintended weight loss, and occasional hemoptysis over 2 months. Reports fatigue and decreased appetite.',
pmh: 'COPD',
medications: 'Inhalers',
allergies: 'NKDA',
social: '40 pack year smoking history',
family: 'Brother had lung cancer'
},
actions: [
{ group: 'Imaging', items: [
{ id: 'img_41_ct', label: 'CT Chest', icon: 'imaging', points: 60,
finding: { type: 'imaging', title: 'CT Chest', subtitle: 'Pulmonary mass',
results: [
{ name: 'Right upper lobe mass', val: '3.5 cm spiculated lesion', flag: 'critical' }
],
note: { type: 'alert', text: 'Spiculated mass is highly suspicious for malignancy.' },
            stateEffect: { state: 'worsening', message: 'Spiculated 3.5 cm RUL mass — high probability of malignancy. Urgent biopsy and oncology referral required.' }
}
}
]},
{ group: 'Labs', items: [
{ id: 'lab_41_biopsy', label: 'Tissue Biopsy', icon: 'lab', points: 60,
finding: { type: 'labs', title: 'Histopathology', subtitle: 'Tumor type',
results: [
{ name: 'Diagnosis', val: 'Non small cell lung carcinoma', ref: 'None', flag: 'critical' }
],
note: { type: '', text: 'Biopsy confirms malignancy and subtype.' }
}
}
]},
{ group: 'Consults', items: [
{ id: 'consult_41_onc', label: 'Oncology', icon: 'consult', points: 30,
finding: { type: 'consult', title: 'Treatment Plan', subtitle: 'Staging and therapy',
results: [
{ name: 'Next step', val: 'PET CT for staging and molecular testing', flag: 'normal' }
],
note: { type: 'alert', text: 'Staging determines treatment options.' }
}
}
]}
],
dispositions: [
{ id: 'disp_41_correct', label: 'Refer to oncology for staging and treatment', icon: 'admit', outcome: 'correct', points: 100,
feedback: { title: 'Correct', grade: 'Outstanding', body: 'Confirmed lung cancer requires staging and multidisciplinary management.' } },
{ id: 'disp_41_partial', label: 'Antibiotics for presumed infection', icon: 'rx', outcome: 'partial', points: -20,
feedback: { title: 'Incomplete', grade: 'Needs Improvement', body: 'Malignancy must be considered given imaging findings.' } },
{ id: 'disp_41_incorrect', label: 'No follow up needed', icon: 'rx', outcome: 'incorrect', points: -120,
feedback: { title: 'Dangerous', grade: 'Critical Error', body: 'Untreated lung cancer progresses and reduces survival.' } }
],
correctDisposition: 'disp_41_correct',
criticalActions: ['img_41_ct', 'lab_41_biopsy', 'consult_41_onc']
},

{
id: 42,
specialty: 'onc',
meta: { title: 'Breast Mass Evaluation', tagLabels: [{ t: 'ONCOLOGY', cls: 'urgent' }] },
patient: {
name: 'Linda G.', age: 48, sex: 'Female', avatar: 'female', emoji: '👩',
chiefComplaint: 'Painless breast lump noticed during self exam',
vitals: [
{ label: 'BP', value: '118/72', status: 'normal' },
{ label: 'HR', value: '76 bpm', status: 'normal' },
{ label: 'RR', value: '16 /min', status: 'normal' },
{ label: 'Temp', value: '36.8 °C', status: 'normal' },
{ label: 'O₂ Sat', value: '99%', status: 'normal' },
{ label: 'Pain', value: '1 / 10', status: 'normal' }
],
history: '48 year old woman reports a painless lump in the left breast discovered 3 weeks ago. No nipple discharge. No systemic symptoms.',
pmh: 'None',
medications: 'None',
allergies: 'NKDA',
social: 'Non smoker, moderate alcohol',
family: 'Mother had breast cancer'
},
actions: [
{ group: 'Physical Exam', items: [
{ id: 'pe_42_exam', label: 'Breast Exam', icon: 'exam', points: 40,
finding: { type: 'exam', title: 'Breast Findings', subtitle: 'Palpation',
results: [
{ name: 'Mass', val: 'Hard irregular mass in left upper outer quadrant', flag: 'critical' },
{ name: 'Mobility', val: 'Fixed', flag: 'abnormal' }
],
note: { type: 'alert', text: 'Hard irregular fixed mass is concerning for malignancy.' }
}
}
]},
{ group: 'Imaging', items: [
{ id: 'img_42_mammo', label: 'Mammogram', icon: 'imaging', points: 50,
finding: { type: 'imaging', title: 'Mammogram', subtitle: 'Breast imaging',
results: [
{ name: 'Lesion', val: 'Spiculated mass with microcalcifications', flag: 'critical' }
],
note: { type: 'alert', text: 'Microcalcifications increase suspicion for malignancy.' }
}
}
]},
{ group: 'Labs', items: [
{ id: 'lab_42_biopsy', label: 'Core Biopsy', icon: 'lab', points: 60,
finding: { type: 'labs', title: 'Pathology', subtitle: 'Tissue diagnosis',
results: [
{ name: 'Diagnosis', val: 'Invasive ductal carcinoma', ref: 'None', flag: 'critical' }
],
note: { type: '', text: 'Biopsy confirms breast cancer subtype.' }
}
}
]},
{ group: 'Consults', items: [
{ id: 'consult_42_onc', label: 'Oncology and Surgery', icon: 'consult', points: 30,
finding: { type: 'consult', title: 'Management', subtitle: 'Treatment planning',
results: [
{ name: 'Next step', val: 'Staging and receptor testing', flag: 'normal' }
],
note: { type: 'alert', text: 'Hormone receptor status guides therapy.' }
}
}
]}
],
dispositions: [
{ id: 'disp_42_correct', label: 'Refer for biopsy confirmation and oncology care', icon: 'admit', outcome: 'correct', points: 100,
feedback: { title: 'Correct', grade: 'Outstanding', body: 'Suspicious breast mass requires biopsy and oncologic evaluation.' } },
{ id: 'disp_42_partial', label: 'Reassurance only', icon: 'rx', outcome: 'partial', points: -20,
feedback: { title: 'Incomplete', grade: 'Needs Improvement', body: 'Imaging and biopsy are required.' } },
{ id: 'disp_42_incorrect', label: 'Ignore findings', icon: 'rx', outcome: 'incorrect', points: -120,
feedback: { title: 'Dangerous', grade: 'Critical Error', body: 'Delay in diagnosis worsens prognosis.' } }
],
correctDisposition: 'disp_42_correct',
criticalActions: ['pe_42_exam', 'img_42_mammo', 'lab_42_biopsy']
},

{
id: 43,
specialty: 'onc',
meta: { title: 'Colorectal Cancer Screening Concern', tagLabels: [{ t: 'GI', cls: '' }] },
patient: {
name: 'George H.', age: 61, sex: 'Male', avatar: 'male', emoji: '👨',
chiefComplaint: 'Blood in stool and fatigue',
vitals: [
{ label: 'BP', value: '115/70', status: 'normal' },
{ label: 'HR', value: '92 bpm', status: 'borderline' },
{ label: 'RR', value: '18 /min', status: 'normal' },
{ label: 'Temp', value: '36.9 °C', status: 'normal' },
{ label: 'O₂ Sat', value: '98%', status: 'normal' },
{ label: 'Pain', value: '2 / 10', status: 'normal' }
],
history: '61 year old man with intermittent rectal bleeding and fatigue for 2 months. Reports unintentional weight loss and change in bowel habits.',
pmh: 'Iron deficiency anemia',
medications: 'Iron supplements',
allergies: 'NKDA',
social: 'Former smoker',
family: 'No known colon cancer'
},
actions: [
{ group: 'Labs', items: [
{ id: 'lab_43_cbc', label: 'CBC', icon: 'lab', points: 30,
finding: { type: 'labs', title: 'Blood Count', subtitle: 'Anemia evaluation',
results: [
{ name: 'Hemoglobin', val: '9.8 g/dL', ref: '13.5 to 17.5', flag: 'abnormal' },
{ name: 'MCV', val: '72 fL', ref: '80 to 100', flag: 'abnormal' }
],
note: { type: '', text: 'Microcytic anemia suggests chronic blood loss.' }
}
}
]},
{ group: 'Imaging', items: [
{ id: 'img_43_colonoscopy', label: 'Colonoscopy', icon: 'imaging', points: 60,
finding: { type: 'imaging', title: 'Colonoscopy', subtitle: 'Colon lesion',
results: [
{ name: 'Mass', val: 'Ulcerated lesion in sigmoid colon', flag: 'critical' }
],
note: { type: 'alert', text: 'Colonoscopy is diagnostic and allows biopsy.' }
}
}
]},
{ group: 'Labs', items: [
{ id: 'lab_43_biopsy', label: 'Biopsy', icon: 'lab', points: 50,
finding: { type: 'labs', title: 'Histology', subtitle: 'Tumor type',
results: [
{ name: 'Diagnosis', val: 'Adenocarcinoma of colon', ref: 'None', flag: 'critical' }
],
note: { type: '', text: 'Confirms colorectal malignancy.' }
}
}
]},
{ group: 'Consults', items: [
{ id: 'consult_43_onc', label: 'Oncology', icon: 'consult', points: 30,
finding: { type: 'consult', title: 'Management', subtitle: 'Staging',
results: [
{ name: 'Next step', val: 'CT chest abdomen pelvis for staging', flag: 'normal' }
],
note: { type: 'alert', text: 'Staging determines prognosis and treatment.' }
}
}
]}
],
dispositions: [
{ id: 'disp_43_correct', label: 'Refer for colonoscopy and oncology staging', icon: 'admit', outcome: 'correct', points: 100,
feedback: { title: 'Correct', grade: 'Outstanding', body: 'Symptoms and anemia warrant urgent colonoscopy and biopsy.' } },
{ id: 'disp_43_partial', label: 'Iron therapy only', icon: 'rx', outcome: 'partial', points: -20,
feedback: { title: 'Incomplete', grade: 'Needs Improvement', body: 'Underlying malignancy must be evaluated.' } },
{ id: 'disp_43_incorrect', label: 'No further workup', icon: 'rx', outcome: 'incorrect', points: -120,
feedback: { title: 'Dangerous', grade: 'Critical Error', body: 'Delay in diagnosis worsens outcomes.' } }
],
correctDisposition: 'disp_43_correct',
criticalActions: ['lab_43_cbc', 'img_43_colonoscopy', 'lab_43_biopsy']
},

{
id: 44,
specialty: 'onc',
meta: { title: 'Lymphoma Evaluation', tagLabels: [{ t: 'HEMATOLOGY', cls: 'urgent' }] },
patient: {
name: 'Anna B.', age: 39, sex: 'Female', avatar: 'female', emoji: '👩',
chiefComplaint: 'Swollen lymph nodes and night sweats',
vitals: [
{ label: 'BP', value: '120/80', status: 'normal' },
{ label: 'HR', value: '96 bpm', status: 'borderline' },
{ label: 'RR', value: '18 /min', status: 'normal' },
{ label: 'Temp', value: '38.0 °C', status: 'abnormal' },
{ label: 'O₂ Sat', value: '98%', status: 'normal' },
{ label: 'Pain', value: '3 / 10', status: 'borderline' }
],
history: '39 year old woman with 3 months of painless lymph node enlargement in the neck, associated with night sweats and weight loss.',
pmh: 'None',
medications: 'None',
allergies: 'NKDA',
social: 'Non smoker',
family: 'No cancer history'
},
actions: [
{ group: 'Physical Exam', items: [
{ id: 'pe_44_exam', label: 'Lymph Node Exam', icon: 'exam', points: 40,
finding: { type: 'exam', title: 'Lymphatic Exam', subtitle: 'Nodes',
results: [
{ name: 'Nodes', val: 'Firm, rubbery, non tender cervical nodes', flag: 'critical' }
],
note: { type: 'alert', text: 'Painless lymphadenopathy with systemic symptoms suggests lymphoma.' },
            stateEffect: { state: 'worsening', message: 'Constitutional B-symptoms with firm rubbery lymphadenopathy. Hodgkin lymphoma likely — biopsy is urgent.' }
}
}
]},
{ group: 'Labs', items: [
{ id: 'lab_44_biopsy', label: 'Lymph Node Biopsy', icon: 'lab', points: 70,
finding: { type: 'labs', title: 'Histology', subtitle: 'Lymph node tissue',
results: [
{ name: 'Diagnosis', val: 'Hodgkin lymphoma', ref: 'None', flag: 'critical' }
],
note: { type: '', text: 'Biopsy is required for definitive diagnosis.' }
}
}
]},
{ group: 'Imaging', items: [
{ id: 'img_44_pet', label: 'PET CT', icon: 'imaging', points: 40,
finding: { type: 'imaging', title: 'PET CT', subtitle: 'Staging',
results: [
{ name: 'Metabolic activity', val: 'Increased uptake in multiple nodes', flag: 'critical' }
],
note: { type: 'alert', text: 'PET CT is used for staging and response assessment.' }
}
}
]},
{ group: 'Consults', items: [
{ id: 'consult_44_onc', label: 'Oncology', icon: 'consult', points: 30,
finding: { type: 'consult', title: 'Treatment', subtitle: 'Chemotherapy plan',
results: [
{ name: 'Plan', val: 'ABVD regimen consideration after staging', flag: 'normal' }
],
note: { type: 'alert', text: 'Treatment depends on stage and subtype.' }
}
}
]}
],
dispositions: [
{ id: 'disp_44_correct', label: 'Oncology referral for biopsy and staging', icon: 'admit', outcome: 'correct', points: 100,
feedback: { title: 'Correct', grade: 'Outstanding', body: 'Painless lymphadenopathy with B symptoms requires biopsy and oncologic evaluation.' } },
{ id: 'disp_44_partial', label: 'Antibiotics trial', icon: 'rx', outcome: 'partial', points: -20,
feedback: { title: 'Incomplete', grade: 'Needs Improvement', body: 'Malignancy must be ruled out.' } },
{ id: 'disp_44_incorrect', label: 'No evaluation', icon: 'rx', outcome: 'incorrect', points: -120,
feedback: { title: 'Dangerous', grade: 'Critical Error', body: 'Missed lymphoma leads to delayed treatment.' } }
],
correctDisposition: 'disp_44_correct',
criticalActions: ['pe_44_exam', 'lab_44_biopsy', 'img_44_pet']
},

{
id: 45,
specialty: 'onc',
meta: { title: 'Prostate Cancer Screening Concern', tagLabels: [{ t: 'UROLOGY', cls: '' }] },
patient: {
name: 'Henry J.', age: 70, sex: 'Male', avatar: 'male', emoji: '👨',
chiefComplaint: 'Urinary frequency and nocturia',
vitals: [
{ label: 'BP', value: '130/82', status: 'borderline' },
{ label: 'HR', value: '78 bpm', status: 'normal' },
{ label: 'RR', value: '16 /min', status: 'normal' },
{ label: 'Temp', value: '36.7 °C', status: 'normal' },
{ label: 'O₂ Sat', value: '98%', status: 'normal' },
{ label: 'Pain', value: '2 / 10', status: 'normal' }
],
history: '70 year old man with urinary hesitancy, weak stream, nocturia, and mild pelvic discomfort over several months.',
pmh: 'Benign prostatic hyperplasia',
medications: 'Tamsulosin',
allergies: 'NKDA',
social: 'Retired, no smoking',
family: 'No prostate cancer history'
},
actions: [
{ group: 'Labs', items: [
{ id: 'lab_45_psa', label: 'PSA Test', icon: 'lab', points: 50,
finding: { type: 'labs', title: 'PSA Level', subtitle: 'Tumor marker',
results: [
{ name: 'PSA', val: '12.4 ng per mL', ref: '0 to 4', flag: 'critical' }
],
note: { type: 'alert', text: 'Elevated PSA may indicate prostate cancer or benign enlargement.' }
}
}
]},
{ group: 'Physical Exam', items: [
{ id: 'pe_45_dre', label: 'Digital Rectal Exam', icon: 'exam', points: 40,
finding: { type: 'exam', title: 'Prostate Exam', subtitle: 'DRE findings',
results: [
{ name: 'Prostate', val: 'Firm irregular enlargement', flag: 'critical' }
],
note: { type: 'alert', text: 'Irregular firm prostate is suspicious for malignancy.' }
}
}
]},
{ group: 'Imaging', items: [
{ id: 'img_45_mri', label: 'Prostate MRI', icon: 'imaging', points: 40,
finding: { type: 'imaging', title: 'MRI Prostate', subtitle: 'Lesion characterization',
results: [
{ name: 'Lesion', val: 'Suspicious peripheral zone lesion', flag: 'critical' }
],
note: { type: '', text: 'MRI helps guide biopsy targeting.' }
}
}
]},
{ group: 'Labs', items: [
{ id: 'lab_45_biopsy', label: 'Prostate Biopsy', icon: 'lab', points: 60,
finding: { type: 'labs', title: 'Pathology', subtitle: 'Tumor confirmation',
results: [
{ name: 'Diagnosis', val: 'Prostate adenocarcinoma', ref: 'None', flag: 'critical' }
],
note: { type: '', text: 'Biopsy confirms malignancy and grading.' }
}
}
]}
],
dispositions: [
{ id: 'disp_45_correct', label: 'Urology referral for biopsy and staging', icon: 'admit', outcome: 'correct', points: 100,
feedback: { title: 'Correct', grade: 'Outstanding', body: 'Elevated PSA with abnormal DRE warrants biopsy and further evaluation.' } },
{ id: 'disp_45_partial', label: 'Watchful waiting only', icon: 'rx', outcome: 'partial', points: -20,
feedback: { title: 'Incomplete', grade: 'Needs Improvement', body: 'Further diagnostic evaluation is required given abnormal findings.' } },
{ id: 'disp_45_incorrect', label: 'No follow up', icon: 'rx', outcome: 'incorrect', points: -120,
feedback: { title: 'Dangerous', grade: 'Critical Error', body: 'Potential malignancy would be missed.' } }
],
correctDisposition: 'disp_45_correct',
criticalActions: ['lab_45_psa', 'pe_45_dre', 'lab_45_biopsy']
}
]
