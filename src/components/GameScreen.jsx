import React from 'react'
import { CASES } from '../data/cases'
import { Icons } from './icons'
import PatientPanel from './PatientPanel'
import FindingsPanel from './FindingsPanel'
import ActionsPanel from './ActionsPanel'

export default function GameScreen({
  currentCase,
  score,
  usedActions,
  findings,
  disposed,
  outcomeInfo,
  onAction,
  onCatalogTest,
  onDispose,
  onGoHome,
  onNextCase,
  onShowResults,
}) {
  const nextCase = CASES.find(c => c.id > currentCase.id) ?? null

  return (
    <div className="game-screen">
      {/* Top Bar */}
      <div className="topbar">
        <div className="topbar-brand">
          <div className="topbar-brand-cross">{Icons.cross}</div>
          MedSim
        </div>
        <div className="topbar-sep" />
        <div className="topbar-case">
          Case <strong>{currentCase.id}</strong> &nbsp;—&nbsp; {currentCase.patient.name}
        </div>
        <div className="topbar-spacer" />
        <div className="topbar-score-wrap">
          <span className="topbar-score-label">Score</span>
          <span className="topbar-score">{score}</span>
        </div>
        <button className="topbar-home-btn" onClick={onGoHome}>
          {Icons.home}
          Home
        </button>
      </div>

      {/* Three-column body */}
      <div className="game-body">
        <PatientPanel patient={currentCase.patient} />

        <FindingsPanel
          findings={findings}
          outcomeInfo={outcomeInfo}
          nextCase={nextCase}
          onNextCase={onNextCase}
          onShowResults={onShowResults}
        />

        <ActionsPanel
          actions={currentCase.actions}
          dispositions={currentCase.dispositions}
          usedActions={usedActions}
          disposed={disposed}
          onAction={onAction}
          onCatalogTest={onCatalogTest}
          onDispose={onDispose}
          caseId={currentCase.id}
        />
      </div>
    </div>
  )
}
