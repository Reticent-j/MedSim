import React from 'react'
import { Icons } from './icons'

const STATE_CONFIG = {
  stable:    { label: 'Stable',    cls: 'state-stable',    icon: '◉' },
  worsening: { label: 'Worsening', cls: 'state-worsening', icon: '▼' },
  improving: { label: 'Improving', cls: 'state-improving', icon: '▲' },
}

export default function PatientPanel({ patient, patientState = 'stable', patientStateMsg = null }) {
  const flagCls = s => {
    if (s === 'abnormal') return 'abnormal'
    if (s === 'borderline') return 'borderline'
    if (s === 'normal') return 'normal'
    return ''
  }

  const stateInfo = STATE_CONFIG[patientState] ?? STATE_CONFIG.stable

  return (
    <div className="patient-panel">
      {/* Avatar + Name */}
      <div className="patient-header">
        <div className={`patient-avatar ${patient.avatar}`}>{patient.emoji}</div>
        <div>
          <div className="patient-name">{patient.name}</div>
          <div className="patient-meta">{patient.age} y/o {patient.sex} &nbsp;·&nbsp; Triage</div>
        </div>
      </div>

      {/* Patient State Indicator */}
      <div className={`patient-state-bar ${stateInfo.cls}`}>
        <span className="patient-state-icon">{stateInfo.icon}</span>
        <div className="patient-state-body">
          <span className="patient-state-label">Patient Condition: <strong>{stateInfo.label}</strong></span>
          {patientStateMsg && (
            <span className="patient-state-msg">{patientStateMsg}</span>
          )}
        </div>
      </div>

      {/* Chief Complaint */}
      <div>
        <div className="section-label">Chief Complaint</div>
        <div className="cc-badge">
          {Icons.alert}
          {patient.chiefComplaint}
        </div>
      </div>

      {/* Vital Signs */}
      <div>
        <div className="section-label">Vital Signs</div>
        <div className="vitals-grid">
          {patient.vitals.map((v, i) => (
            <div key={i} className="vital-card">
              <div className="vital-label">{v.label}</div>
              <div className={`vital-value ${flagCls(v.status)}`}>{v.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* HPI */}
      <div>
        <div className="section-label">History of Present Illness</div>
        <div className="history-block">{patient.history}</div>
      </div>

      {/* Background */}
      <div>
        <div className="section-label">Background</div>
        <div className="info-table">
          {[
            { lbl: 'PMH', val: patient.pmh },
            { lbl: 'Medications', val: patient.medications },
            { lbl: 'Social', val: patient.social },
            { lbl: 'Family Hx', val: patient.family },
          ].map(row => (
            <div key={row.lbl} className="info-row">
              <span className="lbl">{row.lbl}</span>
              <span className="val">{row.val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Allergy strip */}
      {patient.allergies !== 'NKDA' && (
        <div className="allergy-strip">
          {Icons.warn}
          <span><strong>ALLERGY:</strong> {patient.allergies}</span>
        </div>
      )}
    </div>
  )
}
