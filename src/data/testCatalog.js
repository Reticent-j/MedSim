// Global test catalog — organized by category and subcategory.
// Each entry's `id` is the catalog test ID used by ActionsPanel and App.
// `costDollars` is the approximate USD cost shown in the running total.
// CATALOG_CASE_MAP maps caseId → { catalogTestId: caseActionId }
// so catalog tests can resolve to case-specific findings.

export const TEST_CATALOG = [
  {
    category: 'Imaging',
    icon: 'imaging',
    subcategories: [
      {
        name: 'CT Scan',
        tests: [
          { id: 'cat_ct_head',       label: 'CT Head (non-contrast)',              costDollars: 1200 },
          { id: 'cat_ct_chest',      label: 'CT Chest (with contrast)',            costDollars: 1500 },
          { id: 'cat_ctpa',          label: 'CT Pulmonary Angiography (CTPA)',     costDollars: 1800 },
          { id: 'cat_ct_abd',        label: 'CT Abdomen & Pelvis (with contrast)', costDollars: 1400 },
          { id: 'cat_ct_angio',      label: 'CT Angiography (Aorta / Vessels)',    costDollars: 2000 },
          { id: 'cat_ct_neck_chest', label: 'CT Neck/Chest/Abdomen/Pelvis',       costDollars: 1600 },
        ],
      },
      {
        name: 'MRI',
        tests: [
          { id: 'cat_mri_brain', label: 'MRI Brain (with/without contrast)',           costDollars: 2200 },
          { id: 'cat_mri_si',    label: 'MRI Sacroiliac Joints',                       costDollars: 1800 },
          { id: 'cat_mri_spine', label: 'MRI Spine (Cervical / Thoracic / Lumbar)',    costDollars: 1900 },
          { id: 'cat_mri_joint', label: 'MRI Joint (Knee / Shoulder / Hip)',           costDollars: 1700 },
        ],
      },
      {
        name: 'X-Ray',
        tests: [
          { id: 'cat_xray_chest',    label: 'Chest X-Ray (PA/Lateral)',                 costDollars: 300 },
          { id: 'cat_xray_abd',      label: 'Abdominal X-Ray (KUB)',                    costDollars: 280 },
          { id: 'cat_xray_pelvis',   label: 'X-Ray Pelvis & Sacroiliac Joints',         costDollars: 280 },
          { id: 'cat_xray_hands',    label: 'X-Ray Hands & Wrists (bilateral)',          costDollars: 250 },
          { id: 'cat_xray_foot',     label: 'X-Ray Foot / Ankle',                       costDollars: 250 },
          { id: 'cat_xray_knee',     label: 'X-Ray Knee (AP/Lateral/Merchant)',          costDollars: 260 },
          { id: 'cat_xray_hip',      label: 'X-Ray Pelvis & Hip (AP/Lateral)',           costDollars: 270 },
          { id: 'cat_xray_spine',    label: 'X-Ray Spine (Thoracic / Lumbar)',           costDollars: 290 },
          { id: 'cat_xray_shoulder', label: 'X-Ray Shoulder',                           costDollars: 260 },
        ],
      },
      {
        name: 'Ultrasound',
        tests: [
          { id: 'cat_us_echo',    label: 'Echocardiogram (Transthoracic)',          costDollars: 900  },
          { id: 'cat_us_abd',     label: 'Abdominal Ultrasound',                   costDollars: 500  },
          { id: 'cat_us_dvt',     label: 'Lower Extremity Doppler (DVT screen)',   costDollars: 600  },
          { id: 'cat_us_joint',   label: 'Musculoskeletal Ultrasound (Power Doppler)', costDollars: 550 },
          { id: 'cat_us_renal',   label: 'Renal Ultrasound',                       costDollars: 450  },
          { id: 'cat_us_thyroid', label: 'Thyroid Ultrasound',                     costDollars: 420  },
        ],
      },
      {
        name: 'Nuclear / PET',
        tests: [
          { id: 'cat_pet_ct', label: 'PET/CT Staging (F-18 FDG)', costDollars: 5000 },
        ],
      },
    ],
  },
  {
    category: 'Lab Tests',
    icon: 'lab',
    subcategories: [
      {
        name: 'General Blood Panels',
        tests: [
          { id: 'cat_lab_cbc',         label: 'CBC with Differential',               costDollars: 120 },
          { id: 'cat_lab_bmp',         label: 'BMP / Lactic Acid',                   costDollars: 150 },
          { id: 'cat_lab_cmp_lft',     label: 'CMP / Liver Function Tests (LFTs)',   costDollars: 180 },
          { id: 'cat_lab_coag',        label: 'Coagulation Panel (PT/INR/aPTT)',      costDollars: 160 },
          { id: 'cat_lab_ua',          label: 'Urinalysis / Urine Protein:Cr',        costDollars: 80  },
          { id: 'cat_lab_type_screen', label: 'Type & Screen / Crossmatch',           costDollars: 200 },
        ],
      },
      {
        name: 'Cardiac Labs',
        tests: [
          { id: 'cat_lab_ekg',      label: '12-Lead EKG',                            costDollars: 150 },
          { id: 'cat_lab_troponin', label: 'Troponin / Cardiac Enzymes (CK-MB, BNP)', costDollars: 220 },
          { id: 'cat_lab_ddimer',   label: 'D-Dimer (High Sensitivity)',              costDollars: 180 },
          { id: 'cat_lab_abg',      label: 'Arterial Blood Gas (ABG)',                costDollars: 140 },
          { id: 'cat_lab_lipid',    label: 'Lipid Panel',                            costDollars: 130 },
        ],
      },
      {
        name: 'Infection & Inflammation',
        tests: [
          { id: 'cat_lab_blood_cx',   label: 'Blood Cultures (×2 sets)',                                  costDollars: 200 },
          { id: 'cat_lab_crp_esr',    label: 'CRP / ESR / Procalcitonin',                                costDollars: 160 },
          { id: 'cat_lab_hiv_panel',  label: 'HIV / EBV / CMV / Hepatitis Panel',                        costDollars: 350 },
          { id: 'cat_lab_urine_cx',   label: 'Urine Culture & Sensitivity',                              costDollars: 120 },
          { id: 'cat_lab_tropical',   label: 'Tropical Disease Screen (Malaria smear / Dengue NS1+Ab / Typhoid)', costDollars: 320 },
          { id: 'cat_lab_fungal_ag',  label: 'Fungal Antigen Screen (Histoplasma / Cryptococcal urine Ag)', costDollars: 380 },
        ],
      },
      {
        name: 'Hormonal & Specialized',
        tests: [
          { id: 'cat_lab_glucose',       label: 'Stat Glucose (Fingerstick / Serum)',        costDollars: 40  },
          { id: 'cat_lab_uric_acid',     label: 'Serum Uric Acid',                           costDollars: 100 },
          { id: 'cat_lab_rf_anticcp',    label: 'Rheumatoid Factor & Anti-CCP',              costDollars: 280 },
          { id: 'cat_lab_ana',           label: 'ANA Panel (anti-dsDNA, anti-Smith, etc.)',  costDollars: 320 },
          { id: 'cat_lab_complement',    label: 'Complement Levels (C3 / C4 / CH50)',         costDollars: 250 },
          { id: 'cat_lab_hlab27',        label: 'HLA-B27 Genetic Typing',                    costDollars: 400 },
          { id: 'cat_lab_tumor_markers', label: 'Tumor Markers / CEA / LDH / Beta-2M',       costDollars: 380 },
          { id: 'cat_lab_tsh',           label: 'TSH / Thyroid Function Panel',               costDollars: 180 },
          { id: 'cat_lab_hba1c',         label: 'HbA1c',                                     costDollars: 90  },
        ],
      },
    ],
  },
]

// Default costs when a direct (non-catalog) action is performed, by action group name.
export const DIRECT_ACTION_COST_DEFAULTS = {
  'Physical Exam': 0,
  'Consults': 500,
  'Labs': 200,
  'Imaging': 600,
}

// Maps caseId → { catalogTestId: actionId }
// Allows ActionsPanel to resolve catalog clicks to real case actions.
export const CATALOG_CASE_MAP = {
  // Case 1 — STEMI
  1: {
    cat_lab_ekg: 'lab_ekg',
    cat_lab_troponin: 'lab_cardiac',
    cat_lab_cbc: 'lab_cbc',
    cat_xray_chest: 'img_cxr',
  },
  // Case 2 — Bacterial Meningitis
  2: {
    cat_lab_cbc: 'lab_cbc',
    cat_lab_bmp: 'lab_bmp',
    cat_lab_blood_cx: 'lab_culture',
    cat_ct_head: 'img_ct',
  },
  // Case 3 — Acute Appendicitis
  3: {
    cat_lab_cbc: 'lab_cbc_c',
    cat_lab_crp_esr: 'lab_crp_c',
    cat_us_abd: 'img_us',
    cat_ct_abd: 'img_ct_abd',
  },
  // Case 4 — Pulmonary Embolism
  4: {
    cat_lab_ddimer: 'lab_ddimer',
    cat_lab_abg: 'lab_abg',
    cat_lab_troponin: 'lab_troponin',
    cat_ctpa: 'img_ctpa',
    cat_us_echo: 'img_echo',
  },
  // Case 5 — Aortic Dissection
  5: {
    cat_lab_coag: 'lab_type_screen',
    cat_lab_troponin: 'lab_troponin_d',
    cat_xray_chest: 'img_cxr_d',
    cat_ct_angio: 'img_cta',
  },
  // Case 6 — Acute Ischemic Stroke
  6: {
    cat_lab_glucose: 'lab_glucose_stat',
    cat_lab_coag: 'lab_coags_stroke',
    cat_ct_head: 'img_ct_head',
    cat_ct_angio: 'img_cta_stroke',
  },
  // Case 7 — Rheumatoid Arthritis
  7: {
    cat_lab_rf_anticcp: 'lab_rf',
    cat_lab_crp_esr: 'lab_inflam',
    cat_lab_cmp_lft: 'lab_metabolic_ra',
    cat_xray_hands: 'img_xray_hands',
    cat_us_joint: 'img_us_joints',
  },
  // Case 8 — SLE
  8: {
    cat_lab_ana: 'lab_ana_sle',
    cat_lab_complement: 'lab_complement',
    cat_lab_ua: 'lab_renal_sle',
    cat_lab_cbc: 'lab_cbc_sle',
  },
  // Case 9 — Acute Gout
  9: {
    cat_lab_uric_acid: 'lab_urate',
    cat_lab_crp_esr: 'lab_inflam_gout',
    cat_xray_foot: 'img_xray_foot',
  },
  // Case 10 — Ankylosing Spondylitis
  10: {
    cat_lab_hlab27: 'lab_hlab27',
    cat_lab_crp_esr: 'lab_inflam_as',
    cat_xray_pelvis: 'img_xray_pelvis',
    cat_mri_si: 'img_mri_si',
  },
  // Case 11 — Lung Cancer
  11: {
    cat_lab_tumor_markers: 'lab_onc_panel',
    cat_xray_chest: 'img_cxr_ca',
    cat_ct_chest: 'img_ct_chest',
    cat_pet_ct: 'img_pet',
  },
  // Case 12 — Colorectal Cancer
  12: {
    cat_lab_cbc: 'lab_cbc_crc',
    cat_lab_tumor_markers: 'lab_cea',
    cat_ct_abd: 'img_ct_crc',
  },
  // Case 13 — Lymphoma
  13: {
    cat_lab_tumor_markers: 'lab_ldh',
    cat_lab_hiv_panel: 'lab_hiv_ebv',
    cat_ct_neck_chest: 'img_ct_lymphoma',
  },
  // Case 14 — AML
  14: {
    cat_lab_cbc: 'lab_cbc_aml',
    cat_lab_coag: 'lab_coag_aml',
    cat_lab_uric_acid: 'lab_tumor_lysis',
  },
  // Case 15 — Hip Fracture
  15: {
    cat_lab_coag: 'lab_preop_hip',
    cat_lab_ekg: 'lab_ekg_hip',
    cat_xray_hip: 'img_hip_xray',
  },
  // Case 16 — Knee (Meniscal / ACL)
  16: {
    cat_xray_knee: 'img_xray_knee',
    cat_mri_joint: 'img_mri_knee',
  },
  // Case 17 — Compartment Syndrome
  17: {
    cat_lab_cbc: 'lab_ck_rhabdo',
  },
  // Case 18 — Vertebral Compression Fracture / Spine
  18: {
    cat_lab_tumor_markers: 'lab_bone_metab',
    cat_lab_cbc: 'lab_cbc_spine',
    cat_xray_spine: 'img_xray_spine',
    cat_mri_spine: 'img_mri_spine',
  },
  // Cases 19–30 (ultra-rare ER) — these actions live exclusively in the
  // "Exam & Consults" tab (no catalog mapping) because their findings
  // are so specialized that standard catalog panels would be misleading.

  // Case 36 — Acute Pyelonephritis
  36: {
    cat_lab_ua:      'lab_36_urine',
    cat_ct_abd:      'img_36_ct',
    cat_lab_urine_cx:'consult_36_id',  // closest match — culture & sensitivity
  },
  // Case 37 — Community-Acquired Pneumonia
  37: {
    cat_xray_chest: 'img_37_cxr',
    cat_lab_cbc:    'lab_37_cbc',
  },
  // Case 38 — C. difficile Infection
  38: {
    cat_ct_abd:        'img_38_ct',
    cat_lab_blood_cx:  'lab_38_stool',   // stool cultures closest match
    cat_lab_crp_esr:   'pe_38_exam',
  },
  // Case 39 — Bacterial Meningitis
  39: {
    cat_ct_head:      'img_39_ct',
    cat_lab_blood_cx: 'lab_39_lp',      // CSF culture via LP closest match
  },
  // Case 40 — Skin Abscess (MRSA/MSSA)
  40: {
    cat_lab_blood_cx: 'lab_40_culture', // wound culture
  },
  // Case 41 — Suspected Lung Cancer (NSCLC)
  41: {
    cat_ct_chest:      'img_41_ct',
    cat_lab_tumor_markers: 'lab_41_biopsy',
  },
  // Case 42 — Breast Mass (Invasive Ductal Carcinoma)
  42: {
    cat_lab_tumor_markers: 'lab_42_biopsy',
  },
  // Case 43 — Colorectal Cancer
  43: {
    cat_lab_cbc:           'lab_43_cbc',
    cat_lab_tumor_markers: 'consult_43_onc',
    cat_ct_abd:            'img_43_colonoscopy',
  },
  // Case 44 — Hodgkin Lymphoma
  44: {
    cat_pet_ct:            'img_44_pet',
    cat_lab_tumor_markers: 'lab_44_biopsy',
  },
  // Case 45 — Prostate Cancer
  45: {
    cat_lab_tumor_markers: 'lab_45_psa',
    cat_mri_joint:         'img_45_mri',   // prostate MRI — closest catalog entry
  },

  // Case 31 — Typhoid Fever
  31: {
    cat_lab_cbc: 'lab_cbc_31',
    cat_lab_blood_cx: 'lab_bcx_31',
    cat_lab_cmp_lft: 'lab_lft_31',
    cat_lab_tropical: 'lab_widal_31',
    cat_us_abd: 'img_us_31',
  },
  // Case 32 — Visceral Leishmaniasis
  32: {
    cat_lab_cbc: 'lab_cbc_32',
    cat_lab_cmp_lft: 'lab_protein_32',
    cat_lab_crp_esr: 'lab_inflam_32',
    cat_lab_tropical: 'lab_rk39_32',
    cat_us_abd: 'img_us_32',
  },
  // Case 33 — Dengue Hemorrhagic Fever
  33: {
    cat_lab_cbc: 'lab_cbc_33',
    cat_lab_cmp_lft: 'lab_lft_33',
    cat_lab_tropical: 'lab_dengue_33',
    cat_lab_abg: 'lab_abg_33',
  },
  // Case 34 — Disseminated Histoplasmosis
  34: {
    cat_lab_cbc: 'lab_cbc_34',
    cat_lab_tumor_markers: 'lab_ldh_34',
    cat_lab_fungal_ag: 'lab_histo_34',
    cat_ct_chest: 'img_ct_34',
    cat_lab_hiv_panel: 'lab_cd4_34',
  },
  // Case 35 — Acute HIV Seroconversion
  35: {
    cat_lab_hiv_panel: 'lab_hiv_35',
    cat_lab_cbc: 'lab_cbc_35',
    cat_lab_crp_esr: 'lab_inflam_35',
    cat_lab_bmp: 'lab_bmp_35',
  },
}

// Generic finding returned when a catalog test has no case-specific result.
export function genericFinding(catalogTestLabel) {
  return {
    type: 'labs',
    title: catalogTestLabel,
    subtitle: 'No case-relevant findings',
    results: [
      {
        name: 'Result',
        val: 'Unremarkable — within normal limits',
        flag: 'normal',
      },
    ],
    note: {
      type: '',
      text: 'This test was not specifically indicated for this case. No abnormalities detected.',
    },
  }
}

// Resolve a catalog test click for a given case.
// Returns { actionId, finding, points, costDollars } — actionId or finding will be null.
export function resolveCatalogTest(caseId, catalogTestId, catalogTestLabel, caseActions) {
  const caseMap = CATALOG_CASE_MAP[caseId] ?? {}
  const actionId = caseMap[catalogTestId]

  // Look up cost from catalog
  let costDollars = 0
  for (const cat of TEST_CATALOG) {
    for (const sub of cat.subcategories) {
      for (const t of sub.tests) {
        if (t.id === catalogTestId) { costDollars = t.costDollars ?? 0; break }
      }
    }
  }

  if (actionId) {
    // Find the actual action object in the case
    for (const group of caseActions) {
      for (const item of group.items) {
        if (item.id === actionId) {
          return { actionId, finding: null, points: item.points, costDollars }
        }
      }
    }
  }

  // No case-specific action — return generic finding with 0 points
  return { actionId: null, finding: genericFinding(catalogTestLabel), points: 0, costDollars }
}
