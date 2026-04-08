// Global test catalog — organized by category and subcategory.
// Each entry's `id` is the catalog test ID used by ActionsPanel and App.
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
          { id: 'cat_ct_head',  label: 'CT Head (non-contrast)' },
          { id: 'cat_ct_chest', label: 'CT Chest (with contrast)' },
          { id: 'cat_ctpa',     label: 'CT Pulmonary Angiography (CTPA)' },
          { id: 'cat_ct_abd',   label: 'CT Abdomen & Pelvis (with contrast)' },
          { id: 'cat_ct_angio', label: 'CT Angiography (Aorta / Vessels)' },
          { id: 'cat_ct_neck_chest', label: 'CT Neck/Chest/Abdomen/Pelvis' },
        ],
      },
      {
        name: 'MRI',
        tests: [
          { id: 'cat_mri_brain', label: 'MRI Brain (with/without contrast)' },
          { id: 'cat_mri_si',    label: 'MRI Sacroiliac Joints' },
          { id: 'cat_mri_spine', label: 'MRI Spine (Cervical / Thoracic / Lumbar)' },
          { id: 'cat_mri_joint', label: 'MRI Joint (Knee / Shoulder / Hip)' },
        ],
      },
      {
        name: 'X-Ray',
        tests: [
          { id: 'cat_xray_chest',  label: 'Chest X-Ray (PA/Lateral)' },
          { id: 'cat_xray_abd',    label: 'Abdominal X-Ray (KUB)' },
          { id: 'cat_xray_pelvis', label: 'X-Ray Pelvis & Sacroiliac Joints' },
          { id: 'cat_xray_hands',  label: 'X-Ray Hands & Wrists (bilateral)' },
          { id: 'cat_xray_foot',   label: 'X-Ray Foot / Ankle' },
          { id: 'cat_xray_knee',   label: 'X-Ray Knee (AP/Lateral/Merchant)' },
          { id: 'cat_xray_hip',    label: 'X-Ray Pelvis & Hip (AP/Lateral)' },
          { id: 'cat_xray_spine',  label: 'X-Ray Spine (Thoracic / Lumbar)' },
          { id: 'cat_xray_shoulder', label: 'X-Ray Shoulder' },
        ],
      },
      {
        name: 'Ultrasound',
        tests: [
          { id: 'cat_us_echo',   label: 'Echocardiogram (Transthoracic)' },
          { id: 'cat_us_abd',    label: 'Abdominal Ultrasound' },
          { id: 'cat_us_dvt',    label: 'Lower Extremity Doppler (DVT screen)' },
          { id: 'cat_us_joint',  label: 'Musculoskeletal Ultrasound (Power Doppler)' },
          { id: 'cat_us_renal',  label: 'Renal Ultrasound' },
          { id: 'cat_us_thyroid',label: 'Thyroid Ultrasound' },
        ],
      },
      {
        name: 'Nuclear / PET',
        tests: [
          { id: 'cat_pet_ct', label: 'PET/CT Staging (F-18 FDG)' },
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
          { id: 'cat_lab_cbc',     label: 'CBC with Differential' },
          { id: 'cat_lab_bmp',     label: 'BMP / Lactic Acid' },
          { id: 'cat_lab_cmp_lft', label: 'CMP / Liver Function Tests (LFTs)' },
          { id: 'cat_lab_coag',    label: 'Coagulation Panel (PT/INR/aPTT)' },
          { id: 'cat_lab_ua',      label: 'Urinalysis / Urine Protein:Cr' },
          { id: 'cat_lab_type_screen', label: 'Type & Screen / Crossmatch' },
        ],
      },
      {
        name: 'Cardiac Labs',
        tests: [
          { id: 'cat_lab_ekg',      label: '12-Lead EKG' },
          { id: 'cat_lab_troponin', label: 'Troponin / Cardiac Enzymes (CK-MB, BNP)' },
          { id: 'cat_lab_ddimer',   label: 'D-Dimer (High Sensitivity)' },
          { id: 'cat_lab_abg',      label: 'Arterial Blood Gas (ABG)' },
          { id: 'cat_lab_lipid',    label: 'Lipid Panel' },
        ],
      },
      {
        name: 'Infection & Inflammation',
        tests: [
          { id: 'cat_lab_blood_cx', label: 'Blood Cultures (×2 sets)' },
          { id: 'cat_lab_crp_esr',  label: 'CRP / ESR / Procalcitonin' },
          { id: 'cat_lab_hiv_panel',label: 'HIV / EBV / CMV / Hepatitis Panel' },
          { id: 'cat_lab_urine_cx', label: 'Urine Culture & Sensitivity' },
        ],
      },
      {
        name: 'Hormonal & Specialized',
        tests: [
          { id: 'cat_lab_glucose',       label: 'Stat Glucose (Fingerstick / Serum)' },
          { id: 'cat_lab_uric_acid',     label: 'Serum Uric Acid' },
          { id: 'cat_lab_rf_anticcp',    label: 'Rheumatoid Factor & Anti-CCP' },
          { id: 'cat_lab_ana',           label: 'ANA Panel (anti-dsDNA, anti-Smith, etc.)' },
          { id: 'cat_lab_complement',    label: 'Complement Levels (C3 / C4 / CH50)' },
          { id: 'cat_lab_hlab27',        label: 'HLA-B27 Genetic Typing' },
          { id: 'cat_lab_tumor_markers', label: 'Tumor Markers / CEA / LDH / Beta-2M' },
          { id: 'cat_lab_tsh',           label: 'TSH / Thyroid Function Panel' },
          { id: 'cat_lab_hba1c',         label: 'HbA1c' },
        ],
      },
    ],
  },
]

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
// Returns { actionId, finding } — one of them will be null.
export function resolveCatalogTest(caseId, catalogTestId, catalogTestLabel, caseActions) {
  const caseMap = CATALOG_CASE_MAP[caseId] ?? {}
  const actionId = caseMap[catalogTestId]

  if (actionId) {
    // Find the actual action object in the case
    for (const group of caseActions) {
      for (const item of group.items) {
        if (item.id === actionId) {
          return { actionId, finding: null, points: item.points }
        }
      }
    }
  }

  // No case-specific action — return generic finding with 0 points
  return { actionId: null, finding: genericFinding(catalogTestLabel), points: 0 }
}