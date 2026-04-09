# MedSim — Medical Diagnosis Simulator

A browser-based clinical decision-making game where you manage real ER, Rheumatology, Oncology, Orthopedic, and Infectious Disease cases. Order workup, interpret findings, and choose the right disposition — before your patient deteriorates.

---

## Gameplay

Each case presents a patient with a chief complaint, vitals, history, medications, allergies, and social/family history. You work through three panels:

**Patient Panel** — Read the chart. Track the patient's real-time state (stable / worsening / improving).

**Findings Panel** — Results appear here as you order tests and exams. Scroll automatically tracks the latest result.

**Actions Panel** — Two tabs:
- **Test Catalog** — A comprehensive library of labs and imaging organized by category (CBC, metabolic, cardiac, imaging, etc.). Relevant tests are highlighted on Easy difficulty.
- **Exam & Consults** — Case-specific physical exams, specialist consults, and any specialized procedures not in the standard catalog.

When you're ready, choose a **Final Disposition** at the bottom. Your choice is scored immediately with detailed attending feedback.

---

## Scoring

| Action | Points |
|--------|--------|
| Physical exam | 15–50 pts |
| Labs / Imaging | 15–50 pts |
| Consults | 25–40 pts |
| Correct disposition | +100 to +200 pts |
| Partial disposition | −20 to +60 pts |
| Incorrect disposition | −60 to −200 pts |
| Critical workup bonus | +50 pts (all critical actions completed) |
| Unnecessary test penalty (medium) | −10 pts per 3 wasted tests |
| Unnecessary test penalty (hard) | −25 pts per 3 wasted tests |

Score never drops below 0.

---

## Difficulty Levels

| Level | Test hints | Category hints | Unnecessary test penalty |
|-------|------------|----------------|--------------------------|
| Easy | Per-test relevance highlighted | Category & subcategory badges | None |
| Medium | None | Category & subcategory badges | −10 pts per trigger |
| Hard | None | None | −25 pts per trigger |

**Deterioration Popup** — Every 3 irrelevant tests ordered triggers a "Diagnostic Delay" warning. On medium/hard, this deducts points and worsens the patient's displayed state.

---

## Evolving Patients — Multi-Stage Cases

12 cases feature a second (or third) stage. If you choose the wrong disposition, the patient doesn't just lose points — they come back sicker.

| Case | Patient | Wrong Disposition Triggers | Stage 2 |
|------|---------|---------------------------|---------|
| 1 | Robert M. (STEMI) | Admit to Cardiology Ward | Cardiogenic shock — EF 18%, BP 70/40 |
| 2 | Maya T. (Meningitis) | General Ward Admission | Transtentorial herniation — GCS 5, blown pupils |
| 3 | Carlos R. (Appendicitis) | Antibiotics Overnight | Perforated appendicitis — septic shock, free air |
| 4 | Diana L. (PE) | Supplemental O₂ — Observe | Massive PE — BP 60 systolic, RV collapse |
| 5 | Marcus T. (Aortic Dissection) | Antihypertensives in Office | Aortic rupture — tamponade + hemothorax |
| 6 | Barbara K. (Stroke) | Aspirin + Admit (no tPA) | Malignant MCA infarction — 12 mm midline shift |
| 17 | (Compartment Syndrome) | Loosen Cast — Observe | Rhabdomyolysis + Volkmann's contracture |
| 21 | (Ludwig's Angina) | Antibiotics Only — Floor | Stage 2: Airway obstruction (stridor, SpO₂ 89%) → **Stage 3**: Descending necrotizing mediastinitis |
| 25 | (Pheochromocytoma) | IV Labetalol | Unopposed alpha crisis — BP 300/160, seizure, PRES |
| 30 | (Mesenteric Ischemia) | IV Fluids + Serial Exams | Transmural bowel necrosis — lactate 11.4, pneumoperitoneum |
| 38 | (C. diff Colitis) | No Treatment | Toxic megacolon — 9 cm colon, pneumatosis coli |
| 39 | (Bacterial Meningitis) | Discharge Home | Herniation + purpura fulminans + DIC |

Each stage resets your action slate and cost tracker. The timeline of findings is preserved so you can see the full clinical story. Score accumulates across stages.

---

## Cases

### Emergency Room (30 cases)

| # | Patient | Diagnosis | Key Teaching Point |
|---|---------|-----------|-------------------|
| 1 | Robert M., 54M | Anterior STEMI | Door-to-balloon < 90 min; every hour = 1M cardiomyocytes lost |
| 2 | Maya T., 23F | Bacterial Meningitis (meningococcal) | Antibiotics within 30 min; non-blanching petechiae = emergency |
| 3 | Carlos R., 31M | Acute Appendicitis | Non-op antibiotics fail in 27% — surgery is standard of care |
| 4 | Diana L., 38F | Submassive PE | Submassive vs massive PE — thrombolysis threshold at hemodynamic collapse |
| 5 | Marcus T., 62M | Stanford Type A Aortic Dissection | Beta-blocker first, then vasodilator; mortality +1–2%/hour without surgery |
| 6 | Barbara K., 71F | Large Vessel Occlusion Stroke (MCA) | tPA + thrombectomy within 4.5h; 1.9M neurons/minute lost |
| 19 | — | Primary Amoebic Meningoencephalitis | Naegleria fowleri from warm freshwater; miltefosine + amphotericin |
| 20 | — | Lemierre's Syndrome | Fusobacterium septic thrombophlebitis — not a "sore throat" |
| 21 | — | Ludwig's Angina | Airway FIRST — awake fiberoptic intubation, never blind RSI |
| 22 | — | Capnocytophaga (Dog Bite Sepsis) | Asplenic patients: dog bite → fatal sepsis in hours |
| 23 | — | Acute Angle-Closure Glaucoma | Eye pain + nausea + mid-dilated pupil ≠ migraine |
| 24 | — | Myxedema Coma | Hypothermia + bradycardia + low GCS → IV T4 + hydrocortisone |
| 25 | — | Pheochromocytoma | Alpha-block FIRST, then beta — never give beta-blockers alone |
| 26 | — | HELLP Syndrome | Emergency delivery regardless of gestational age |
| 27 | — | Fat Embolism Syndrome | Long bone fracture → hypoxia + petechiae + confusion |
| 28 | — | Methemoglobinemia | Cyanosis with normal PaO₂ + industrial exposure → methylene blue |
| 29 | — | Vertebral Artery Dissection | Young patient + neck pain + stroke → not a migraine; stop OCP |
| 30 | — | Acute Mesenteric Ischemia | "Pain out of proportion to exam" + AF → SMA embolus; < 6h window |

### Rheumatology (4 cases)

| # | Diagnosis | Key Teaching Point |
|---|-----------|-------------------|
| 7 | Rheumatoid Arthritis | Symmetric MCP/PIP + DIP sparing + RF + Anti-CCP → early DMARD |
| 8 | Systemic Lupus Erythematosus | Malar rash + nephritis + ANA → urgent rheum + nephrology |
| 9 | Acute Gouty Arthritis | Podagra + urate crystals (negatively birefringent) → colchicine |
| 10 | Ankylosing Spondylitis | Inflammatory back pain + sacroiliitis + HLA-B27 → NSAIDs + physio |

### Oncology (4 cases)

| # | Diagnosis | Key Teaching Point |
|---|-----------|-------------------|
| 11 | Non-Small Cell Lung Cancer | Smoker + weight loss + cavitary mass → CT biopsy + tumor board |
| 12 | Colorectal Cancer | Iron deficiency anemia + rectal bleeding > 45 → urgent colonoscopy |
| 13 | Non-Hodgkin Lymphoma | Painless lymphadenopathy + B symptoms → excisional biopsy |
| 14 | Acute Myeloid Leukemia | Pancytopenia + blasts → emergency hematology admission |

### Orthopedics (4 cases)

| # | Diagnosis | Key Teaching Point |
|---|-----------|-------------------|
| 15 | Hip Fracture (Femoral Neck) | Elderly fall + shortened/externally rotated leg → hemiarthroplasty within 48h |
| 16 | ACL Tear | Pivot + pop + effusion → MRI + brace + ortho referral |
| 17 | Acute Compartment Syndrome | The 5 P's; pressure > 30 mmHg → fasciotomy within 4–6h |
| 18 | Vertebral Compression Fracture | Osteoporotic woman + back pain + height loss → DEXA + bisphosphonate |

### Infectious Disease (5 cases)

| # | Diagnosis | Key Teaching Point |
|---|-----------|-------------------|
| 31 | Enteric Fever (Typhoid) | Travel + rose spots + relative bradycardia → azithromycin |
| 32 | Visceral Leishmaniasis (Kala-Azar) | Splenomegaly + fever + pancytopenia in traveler → liposomal AmB |
| 33 | Dengue Fever | Thrombocytopenia + leukopenia + travel → supportive care; NSAIDs contraindicated |
| 34 | Disseminated Histoplasmosis in HIV | CD4 < 50 + diffuse pulmonary + splenomegaly → AmB first, delay ART |
| 35 | Primary HIV Seroconversion | Mononucleosis-like syndrome + risk exposure → ART same day |

---

## Additional ChatGPT-Generated Cases (36–45)

Cases 36–45 cover a range of ER, ID, and hematology presentations generated to extend coverage of outpatient and inpatient medicine.

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18 + Vite 6 |
| Styling | Pure CSS custom properties (no Tailwind, no CSS Modules) |
| Routing | State-based (`screen` ∈ `splash \| game \| results`) |
| Persistence | `localStorage` (case progress tracking) |
| Build | `npm run build` → static `dist/` directory |
| Deploy | Any static host (Vercel, Netlify, GitHub Pages) |

No external UI libraries, no backend, no authentication.

---

## Project Structure

```
src/
  components/
    SplashScreen.jsx      — Case selection, difficulty picker, progress tracking
    GameScreen.jsx        — Three-column game layout + topbar
    PatientPanel.jsx      — Chart: vitals, history, medications
    FindingsPanel.jsx     — Scrolling results feed + outcome card
    ActionsPanel.jsx      — Test catalog + exam/consults tabs + disposition
    DeteriorationModal.jsx — Diagnostic delay warning popup
    ResultsScreen.jsx     — Final score + case-by-case breakdown
    icons.jsx             — SVG icon components
  data/
    cases.js              — All 45 cases + stage definitions
    testCatalog.js        — TEST_CATALOG, CATALOG_CASE_MAP, resolveCatalogTest()
  utils/
    progress.js           — localStorage progress (in-progress / completed)
  App.jsx                 — All game state, callbacks, multi-stage logic
  index.css               — Global styles
```

---

## Running Locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
```

---

## Case Schema

```js
{
  id: 1,
  specialty: 'er',             // 'er' | 'rheum' | 'onc' | 'ortho' | 'id'
  meta: { title, tagLabels },
  patient: {
    name, age, sex, avatar, emoji,
    chiefComplaint, vitals, history,
    pmh, medications, allergies, social, family,
  },
  actions: [
    {
      group: 'Physical Exam',  // 'Physical Exam' | 'Labs' | 'Imaging' | 'Consults'
      items: [
        {
          id: 'pe_cardiac',
          label: 'Cardiac & Lung Exam',
          icon: 'exam',         // 'exam' | 'lab' | 'imaging' | 'consult'
          cost: 'stat',         // 'stat' | 'urgent' | null
          points: 30,
          stateEffect: {        // optional — triggers patient state update
            state: 'worsening',
            message: 'Heart failure pattern confirmed.',
          },
          finding: {
            type: 'exam',       // 'exam' | 'labs' | 'imaging' | 'consult'
            title, subtitle,
            results: [{ name, val, ref, flag }],  // flag: 'normal' | 'borderline' | 'abnormal' | 'critical'
            note: { type, text },  // type: '' | 'warn' | 'alert'
          },
        },
      ],
    },
  ],
  dispositions: [
    {
      id: 'disp_er_stemi',
      label: 'Activate STEMI Protocol',
      icon: 'er',               // 'er' | 'admit' | 'home' | 'rx' | 'consult'
      outcome: 'correct',       // 'correct' | 'partial' | 'incorrect'
      points: 200,
      feedback: { title, grade, body },
    },
  ],
  correctDisposition: 'disp_er_stemi',
  criticalActions: ['lab_ekg', 'lab_cardiac'],  // must complete for +50 bonus

  // Optional — absent on most cases
  stages: [
    {
      id: 'stage_2_stemi_shock',
      triggerOn: ['disp_admit'],    // disposition IDs that route to this stage
      stageLabel: 'Stage 2 — Cardiogenic Shock',
      transitionMessage: '6 hours later...',
      patientUpdate: {              // shallow-merged onto original patient
        chiefComplaint, vitals, history,
      },
      actions: [...],               // same structure as root actions
      dispositions: [...],
      criticalActions: [...],
    },
  ],
}
```

---

## Cost Tracking

Each test has a `costDollars` value derived from the test catalog:

| Group | Default Cost |
|-------|-------------|
| Physical Exam | $0 |
| Labs | $200 |
| Imaging | $600 |
| Consults | $500 |

Costs reset to $0 when advancing to a new stage. The running total is displayed in the topbar.

---

## Progress Persistence

Case progress is saved to `localStorage` per case ID:
- `in-progress` — case started but not completed
- `completed` — final disposition reached
- For staged cases: `in-progress` after Stage 1 wrong disposition; `completed` only after the final stage

---

## License

MIT
