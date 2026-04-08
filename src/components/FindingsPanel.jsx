import React, { useEffect, useRef } from 'react'
import { FINDING_ICON } from './icons'

function FindingCard({ finding }) {
  const flagCls = flag => {
    if (flag === 'critical') return 'critical'
    if (flag === 'abnormal' || flag === 'borderline') return 'abnormal'
    return 'normal'
  }

  const typeClass = finding.type
  const icon = FINDING_ICON[finding.type]

  return (
    <div className="finding-card">
      <div className="finding-card-header">
        <div className={`finding-icon ${typeClass}`}>
          {icon}
        </div>
        <div>
          <div className="finding-title">{finding.title}</div>
          {finding.subtitle && (
            <div className="finding-subtitle">{finding.subtitle}</div>
          )}
        </div>
      </div>

      <div className="finding-results">
        {finding.results.map((r, i) => (
          <div key={i} className="result-row">
            <span className="result-name">{r.name}</span>
            <span>
              <span className={`result-val ${flagCls(r.flag)}`}>{r.val}</span>
              {r.ref && <span className="result-ref">{r.ref}</span>}
            </span>
          </div>
        ))}
      </div>

      {finding.note?.text && (
        <div className={`finding-note ${finding.note.type || ''}`}>
          {finding.note.text}
        </div>
      )}
    </div>
  )
}

function OutcomeCard({ outcomeInfo, nextCase, onNextCase, onShowResults }) {
  const { disp, critBonus, critMissed, delta } = outcomeInfo
  const emoji = { correct: '✅', partial: '⚠️', incorrect: '❌' }[disp.outcome] ?? '❓'
  const deltaSign = delta >= 0 ? '+' : ''
  const deltaClass = delta >= 0 ? 'plus' : 'minus'

  return (
    <div className={`outcome-card ${disp.outcome}`}>
      <div className="outcome-icon">{emoji}</div>
      <div className={`outcome-title ${disp.outcome}`}>{disp.feedback.title}</div>
      <div className="outcome-body">{disp.feedback.body}</div>
      <div className={`outcome-score-delta ${deltaClass}`}>
        {deltaSign}{delta} pts
      </div>
      {critBonus > 0 && (
        <div className="outcome-crit-bonus">
          +{critBonus} bonus pts — completed all critical workup steps
        </div>
      )}
      {critMissed.length > 0 && (
        <div className="outcome-missed">
          <strong>Missed critical workup:</strong>{' '}
          {critMissed.map(id => id.replace(/_/g, ' ')).join(', ')}
        </div>
      )}
      {nextCase ? (
        <button className="outcome-next-btn" onClick={() => onNextCase(nextCase.id)}>
          Next Case: {nextCase.patient.name} →
        </button>
      ) : (
        <button className="outcome-next-btn" onClick={onShowResults}>
          View Final Results →
        </button>
      )}
    </div>
  )
}

export default function FindingsPanel({ findings, outcomeInfo, nextCase, onNextCase, onShowResults }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [findings.length, outcomeInfo])

  if (findings.length === 0 && !outcomeInfo) {
    return (
      <div className="findings-panel">
        <div className="findings-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 9h6M9 12h6M9 15h4" />
          </svg>
          <p>No findings yet. Use the actions panel on the right to examine the patient and order workup.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="findings-panel">
      {findings.map((f, i) => (
        <FindingCard key={i} finding={f} />
      ))}
      {outcomeInfo && (
        <OutcomeCard
          outcomeInfo={outcomeInfo}
          nextCase={nextCase}
          onNextCase={onNextCase}
          onShowResults={onShowResults}
        />
      )}
      <div ref={bottomRef} />
    </div>
  )
}
