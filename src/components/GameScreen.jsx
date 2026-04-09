import React from 'react'
import { CASES } from '../data/cases'
import { Icons } from './icons'
import PatientPanel from './PatientPanel'
import FindingsPanel from './FindingsPanel'
import ActionsPanel from './ActionsPanel'
import DeteriorationModal from './DeteriorationModal'

export default function GameScreen({
  currentCase,
  score,
  totalCost,
  usedActions,
  findings,
  disposed,
  outcomeInfo,
  patientState,
  patientStateMsg,
  difficulty,
  activeActions,
  activeDispositions,
  activePatient,
  stageLabel,
  showDeteriorationPopup,
  lastPenaltyApplied,
  wastedTestCount,
  onAction,
  onCatalogTest,
  onDispose,
  onGoHome,
  onNextCase,
  onShowResults,
  onAdvanceToStage,
  onDismissDeteriorationPopup,
}) {
  const nextCase = CASES.find(c => c.id > currentCase.id) ?? null

  return (
    <div className="game-screen">
      {/* Deterioration Modal Overlay */}
      {showDeteriorationPopup && (
        <DeteriorationModal
          wastedTestCount={wastedTestCount}
          penaltyApplied={lastPenaltyApplied}
          difficulty={difficulty}
          onDismiss={onDismissDeteriorationPopup}
        />
      )}

      {/* Top Bar */}
      <div className="topbar">
        <div className="topbar-brand">
          <div className="topbar-brand-cross">{Icons.cross}</div>
          MedSim
        </div>
        <div className="topbar-sep" />
        <div className={`topbar-case${stageLabel ? ' topbar-case--stage' : ''}`}>
          {stageLabel && <span className="topbar-stage-badge">STAGE 2</span>}
          <strong>{currentCase.id}</strong>
          &nbsp;—&nbsp;
          {stageLabel ? stageLabel : currentCase.patient.name}
        </div>
        <div className="topbar-spacer" />
        <div className="topbar-cost-wrap">
          <span className="topbar-cost-label">Cost</span>
          <span className="topbar-cost">${totalCost.toLocaleString()}</span>
        </div>
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
        <PatientPanel
          patient={activePatient}
          patientState={patientState}
          patientStateMsg={patientStateMsg}
        />

        <FindingsPanel
          findings={findings}
          outcomeInfo={outcomeInfo}
          nextCase={nextCase}
          onNextCase={onNextCase}
          onShowResults={onShowResults}
          onAdvanceToStage={onAdvanceToStage}
        />

        <ActionsPanel
          actions={activeActions}
          dispositions={activeDispositions}
          usedActions={usedActions}
          disposed={disposed}
          onAction={onAction}
          onCatalogTest={onCatalogTest}
          onDispose={onDispose}
          caseId={currentCase.id}
          difficulty={difficulty}
          stageLabel={stageLabel}
        />
      </div>
    </div>
  )
}
