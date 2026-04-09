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

function StageTransitionCard({ finding }) {
  return (
    <div className="stage-transition-card">
      <div className="stage-transition-header">
        <span className="stage-transition-icon">🔄</span>
        <span className="stage-transition-label">{finding.stageLabel}</span>
      </div>
      <p className="stage-transition-message">{finding.transitionMessage}</p>
    </div>
  )
}

function OutcomeCard({ outcomeInfo, nextCase, onNextCase, onShowResults, onAdvanceToStage }) {
  const { disp, critBonus, critMissed, delta, hasNextStage, nextStage } = outcomeInfo
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

      {hasNextStage ? (
        <button
          className="outcome-next-btn outcome-stage-btn"
          onClick={() => onAdvanceToStage(nextStage)}
        >
          ⚠️ Patient Returns — Continue to {nextStage.stageLabel} →
        </button>
      ) : nextCase ? (
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

export default function FindingsPanel({
  findings,
  outcomeInfo,
  nextCase,
  onNextCase,
  onShowResults,
  onAdvanceToStage,
}) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (panelRef.current) {
      panelRef.current.scrollTop = panelRef.current.scrollHeight
    }
  }, [findings.length, outcomeInfo])

  if (findings.length === 0 && !outcomeInfo) {
    return (
      <div className="findings-panel" ref={panelRef}>
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
    <div className="findings-panel" ref={panelRef}>
      {findings.map((f, i) =>
        f.type === 'stage_transition'
          ? <StageTransitionCard key={i} finding={f} />
          : <FindingCard key={i} finding={f} />
      )}
      {outcomeInfo && (
        <OutcomeCard
          outcomeInfo={outcomeInfo}
          nextCase={nextCase}
          onNextCase={onNextCase}
          onShowResults={onShowResults}
          onAdvanceToStage={onAdvanceToStage}
        />
      )}
    </div>
  )
}
