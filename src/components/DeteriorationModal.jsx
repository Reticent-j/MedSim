import React from 'react'

export default function DeteriorationModal({ wastedTestCount, penaltyApplied, difficulty, onDismiss }) {
  return (
    <div className="deterioration-overlay" onClick={onDismiss}>
      <div className="deterioration-modal" onClick={e => e.stopPropagation()}>
        <div className="deterioration-icon">⚠️</div>
        <div className="deterioration-title">Diagnostic Delay</div>
        <div className="deterioration-subtitle">Patient Condition Deteriorating</div>
        <p className="deterioration-body">
          You have ordered <strong>{wastedTestCount} unnecessary tests</strong>, delaying
          diagnosis while the patient's condition worsens. Time spent on irrelevant workup
          is time the patient doesn't have.
        </p>
        {penaltyApplied < 0 && (
          <div className="deterioration-penalty">
            {penaltyApplied} pts — diagnostic delay penalty ({difficulty} mode)
          </div>
        )}
        <p className="deterioration-hint">
          Focus your workup on the most likely diagnosis based on the history and vitals.
        </p>
        <button className="deterioration-dismiss-btn" onClick={onDismiss}>
          Acknowledge
        </button>
      </div>
    </div>
  )
}
