import React from 'react'

const TOTAL_POSSIBLE = 800

const GRADE_MAP = [
  [90, 'A+', 'Outstanding Clinician'],
  [80, 'A',  'Excellent Performance'],
  [70, 'B',  'Good Clinical Judgment'],
  [55, 'C',  'Satisfactory'],
  [0,  'D',  'Needs Improvement'],
]

export default function ResultsScreen({ score, caseScores, onRestart }) {
  const pct = Math.min(100, Math.round((score / TOTAL_POSSIBLE) * 100))
  const [, grade, gradeLabel] = GRADE_MAP.find(([min]) => pct >= min)
  const pctDeg = `${pct * 3.6}deg`

  return (
    <div className="results-screen">
      <div className="results-card" style={{ '--pct': pctDeg }}>
        <div className="results-title">Session Complete</div>
        <div className="results-subtitle">MedSim — Primary Care Decision Trainer</div>

        <div className="results-score-circle" style={{ '--pct': pctDeg }}>
          <div className="results-score-inner">
            <div className="results-score-num">{score}</div>
            <div className="results-score-lbl">Points</div>
          </div>
        </div>

        <div className="results-grade">{grade}</div>
        <div className="results-grade-label">{gradeLabel}</div>

        <div className="results-breakdown">
          {caseScores.map((cs, i) => (
            <div key={i} className="rb-row">
              <span className="rb-label">Case {i + 1}: {cs.patientName}</span>
              <span className={`rb-val ${cs.outcome === 'correct' ? 'good' : cs.outcome === 'incorrect' ? 'bad' : ''}`}>
                {cs.outcome === 'correct' ? '✓' : cs.outcome === 'partial' ? '~' : '✗'}{' '}
                {cs.score > 0 ? '+' : ''}{cs.score} pts
              </span>
            </div>
          ))}
          <div className="rb-row" style={{ borderTop: '1px solid rgba(255,255,255,.1)', marginTop: 4, paddingTop: 12 }}>
            <span className="rb-label" style={{ fontWeight: 700, color: '#e2e8f0' }}>Total Score</span>
            <span className="rb-val" style={{ fontSize: 18 }}>{score} / {TOTAL_POSSIBLE}</span>
          </div>
        </div>
      </div>

      <div className="results-actions">
        <button className="btn-primary" onClick={onRestart}>Try Another Case</button>
        <button className="btn-ghost" onClick={onRestart}>Back to Menu</button>
      </div>
    </div>
  )
}
