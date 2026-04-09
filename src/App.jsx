import React, { useState, useCallback, useEffect } from 'react'
import { CASES } from './data/cases'
import { resolveCatalogTest, DIRECT_ACTION_COST_DEFAULTS } from './data/testCatalog'
import { loadProgress, saveProgress, markInProgress, markCompleted } from './utils/progress'
import SplashScreen from './components/SplashScreen'
import GameScreen from './components/GameScreen'
import ResultsScreen from './components/ResultsScreen'

const WASTED_THRESHOLD = 3
const WASTED_PENALTY = { easy: 0, medium: -10, hard: -25 }

export default function App() {
  const [screen, setScreen] = useState('splash')        // 'splash' | 'game' | 'results'
  const [currentCase, setCurrentCase] = useState(null)
  const [score, setScore] = useState(0)
  const [usedActions, setUsedActions] = useState(new Set())
  const [findings, setFindings] = useState([])
  const [disposed, setDisposed] = useState(false)
  const [outcomeInfo, setOutcomeInfo] = useState(null)
  const [caseScores, setCaseScores] = useState([])
  const [totalCost, setTotalCost] = useState(0)
  const [patientState, setPatientState] = useState('stable')
  const [patientStateMsg, setPatientStateMsg] = useState(null)
  const [difficulty, setDifficulty] = useState('medium')
  const [progress, setProgress] = useState(() => loadProgress())

  // Multi-stage / evolving patient state
  const [currentStageIndex, setCurrentStageIndex] = useState(null) // null=no stages, 0=root, 1+=follow-up
  const [stageDeltaAccumulator, setStageDeltaAccumulator] = useState(0)

  // Deterioration popup state
  const [wastedTestCount, setWastedTestCount] = useState(0)
  const [deteriorationDismissed, setDeteriorationDismissed] = useState(0)
  const [showDeteriorationPopup, setShowDeteriorationPopup] = useState(false)
  const [lastPenaltyApplied, setLastPenaltyApplied] = useState(0)

  // Persist progress whenever it changes
  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  // Browser back-button / Backspace navigation
  useEffect(() => {
    const handlePop = () => {
      setScreen(prev => {
        if (prev === 'game') return 'splash'
        if (prev === 'results') return 'splash'
        return prev
      })
    }
    window.addEventListener('popstate', handlePop)
    return () => window.removeEventListener('popstate', handlePop)
  }, [])

  // Derive active stage data (actions/dispositions/patient) from current stage index
  const getActiveStageData = useCallback((c, stageIdx) => {
    if (stageIdx !== null && stageIdx > 0 && c?.stages?.[stageIdx - 1]) {
      const stage = c.stages[stageIdx - 1]
      return {
        activeActions: stage.actions,
        activeDispositions: stage.dispositions,
        activeCriticals: stage.criticalActions,
        activePatient: stage.patientUpdate
          ? { ...c.patient, ...stage.patientUpdate }
          : c.patient,
        stageLabel: stage.stageLabel,
      }
    }
    return {
      activeActions: c?.actions ?? [],
      activeDispositions: c?.dispositions ?? [],
      activeCriticals: c?.criticalActions ?? [],
      activePatient: c?.patient ?? null,
      stageLabel: null,
    }
  }, [])

  const startCase = useCallback((caseId) => {
    const c = CASES.find(x => x.id === caseId)
    if (!c) return
    setCurrentCase(c)
    setUsedActions(new Set())
    setFindings([])
    setDisposed(false)
    setOutcomeInfo(null)
    setTotalCost(0)
    setPatientState('stable')
    setPatientStateMsg(null)
    setCurrentStageIndex(c.stages ? 0 : null)
    setStageDeltaAccumulator(0)
    setWastedTestCount(0)
    setDeteriorationDismissed(0)
    setShowDeteriorationPopup(false)
    setLastPenaltyApplied(0)
    setScreen('game')
    setProgress(prev => markInProgress(prev, caseId))
    window.history.pushState({ screen: 'game' }, '')
  }, [])

  const performAction = useCallback((actionId) => {
    if (!currentCase || disposed) return
    const { activeActions } = getActiveStageData(currentCase, currentStageIndex)
    let found = null
    let foundGroupName = null
    for (const group of activeActions) {
      for (const item of group.items) {
        if (item.id === actionId) { found = item; foundGroupName = group.group; break }
      }
      if (found) break
    }
    if (!found || usedActions.has(actionId)) return

    const costDollars = DIRECT_ACTION_COST_DEFAULTS[foundGroupName] ?? 0

    setUsedActions(prev => new Set([...prev, actionId]))
    setFindings(prev => [...prev, found.finding])
    setScore(prev => prev + found.points)
    setTotalCost(prev => prev + costDollars)

    if (found.stateEffect) {
      setPatientState(found.stateEffect.state)
      setPatientStateMsg(found.stateEffect.message)
    }
  }, [currentCase, disposed, usedActions, currentStageIndex, getActiveStageData])

  const performCatalogTest = useCallback((catalogTestId, catalogTestLabel) => {
    if (!currentCase || disposed) return
    if (usedActions.has(catalogTestId)) return

    const { activeActions } = getActiveStageData(currentCase, currentStageIndex)
    const { actionId, finding, points, costDollars } = resolveCatalogTest(
      currentCase.id,
      catalogTestId,
      catalogTestLabel,
      activeActions,
    )

    if (actionId) {
      if (usedActions.has(actionId)) return
      setUsedActions(prev => new Set([...prev, catalogTestId, actionId]))
      let realFinding = null
      let stateEffect = null
      for (const group of activeActions) {
        for (const item of group.items) {
          if (item.id === actionId) {
            realFinding = item.finding
            stateEffect = item.stateEffect ?? null
            break
          }
        }
        if (realFinding) break
      }
      if (realFinding) {
        setFindings(prev => [...prev, realFinding])
        setScore(prev => prev + points)
        setTotalCost(prev => prev + costDollars)
        if (stateEffect) {
          setPatientState(stateEffect.state)
          setPatientStateMsg(stateEffect.message)
        }
      }
    } else {
      // Generic (wasted) test
      setUsedActions(prev => new Set([...prev, catalogTestId]))
      setFindings(prev => [...prev, finding])
      setTotalCost(prev => prev + costDollars)

      const newCount = wastedTestCount + 1
      setWastedTestCount(newCount)

      const newTrigger = Math.floor(newCount / WASTED_THRESHOLD)
      if (newTrigger > deteriorationDismissed) {
        const penalty = WASTED_PENALTY[difficulty] ?? 0
        setScore(prev => Math.max(0, prev + penalty))
        setLastPenaltyApplied(penalty)
        setPatientState('worsening')
        setPatientStateMsg('Diagnostic delay — unnecessary tests wasting critical time.')
        setShowDeteriorationPopup(true)
      }
    }
  }, [currentCase, disposed, usedActions, currentStageIndex, getActiveStageData,
      wastedTestCount, deteriorationDismissed, difficulty])

  const dismissDeteriorationPopup = useCallback(() => {
    setDeteriorationDismissed(Math.floor(wastedTestCount / WASTED_THRESHOLD))
    setShowDeteriorationPopup(false)
  }, [wastedTestCount])

  const chooseDisposition = useCallback((dispId) => {
    if (!currentCase || disposed) return
    const { activeDispositions, activeCriticals } = getActiveStageData(currentCase, currentStageIndex)
    const disp = activeDispositions.find(d => d.id === dispId)
    if (!disp) return

    const critMissed = activeCriticals.filter(a => !usedActions.has(a))
    const critBonus = critMissed.length === 0 ? 50 : 0
    const delta = disp.points + critBonus

    // Check if this disposition triggers a follow-up stage
    const nextStage = currentCase.stages?.find(s => s.triggerOn.includes(dispId)) ?? null

    setDisposed(true)
    setScore(prev => Math.max(0, prev + delta))

    if (nextStage) {
      // Stage transition — case continues
      setStageDeltaAccumulator(prev => prev + delta)
      setOutcomeInfo({ disp, critBonus, critMissed, delta, totalCost, hasNextStage: true, nextStage })
      setPatientState('worsening')
      setPatientStateMsg(nextStage.transitionMessage)
      setProgress(prev => markInProgress(prev, currentCase.id))
    } else {
      // Final stage — case ends
      const finalDelta = stageDeltaAccumulator + delta
      setOutcomeInfo({ disp, critBonus, critMissed, delta, totalCost, hasNextStage: false })
      setCaseScores(prev => [
        ...prev,
        {
          caseId: currentCase.id,
          patientName: currentCase.patient.name,
          score: finalDelta,
          outcome: disp.outcome,
          totalCost,
        },
      ])
      if (disp.outcome === 'correct') {
        setPatientState('improving')
        setPatientStateMsg(null)
      } else {
        setPatientState('worsening')
      }
      setProgress(prev => markCompleted(prev, currentCase.id))
    }
  }, [currentCase, disposed, usedActions, currentStageIndex, getActiveStageData,
      totalCost, stageDeltaAccumulator])

  const advanceToStage = useCallback((stage) => {
    const nextIdx = (currentStageIndex ?? 0) + 1
    const transitionFinding = {
      type: 'stage_transition',
      stageLabel: stage.stageLabel,
      transitionMessage: stage.transitionMessage,
    }
    setCurrentStageIndex(nextIdx)
    setDisposed(false)
    setOutcomeInfo(null)
    setUsedActions(new Set())
    setTotalCost(0)
    setFindings(prev => [...prev, transitionFinding])
    setPatientState('worsening')
    setPatientStateMsg(null)
  }, [currentStageIndex])

  const goHome = useCallback(() => {
    setScreen('splash')
    window.history.back()
  }, [])

  const goToNextCase = useCallback((caseId) => {
    startCase(caseId)
  }, [startCase])

  const showResults = useCallback(() => {
    setScreen('results')
    window.history.pushState({ screen: 'results' }, '')
  }, [])

  const restart = useCallback(() => {
    setScore(0)
    setCaseScores([])
    setScreen('splash')
  }, [])

  if (screen === 'splash') {
    return (
      <SplashScreen
        onStartCase={startCase}
        progress={progress}
        difficulty={difficulty}
        onDifficultyChange={setDifficulty}
      />
    )
  }

  if (screen === 'game' && currentCase) {
    const { activeActions, activeDispositions, activePatient, stageLabel } =
      getActiveStageData(currentCase, currentStageIndex)

    return (
      <GameScreen
        currentCase={currentCase}
        score={score}
        totalCost={totalCost}
        usedActions={usedActions}
        findings={findings}
        disposed={disposed}
        outcomeInfo={outcomeInfo}
        patientState={patientState}
        patientStateMsg={patientStateMsg}
        difficulty={difficulty}
        activeActions={activeActions}
        activeDispositions={activeDispositions}
        activePatient={activePatient}
        stageLabel={stageLabel}
        showDeteriorationPopup={showDeteriorationPopup}
        lastPenaltyApplied={lastPenaltyApplied}
        wastedTestCount={wastedTestCount}
        onAction={performAction}
        onCatalogTest={performCatalogTest}
        onDispose={chooseDisposition}
        onGoHome={goHome}
        onNextCase={goToNextCase}
        onShowResults={showResults}
        onAdvanceToStage={advanceToStage}
        onDismissDeteriorationPopup={dismissDeteriorationPopup}
      />
    )
  }

  if (screen === 'results') {
    return (
      <ResultsScreen
        score={score}
        caseScores={caseScores}
        onRestart={restart}
      />
    )
  }

  return null
}
