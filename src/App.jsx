import React, { useState, useCallback, useEffect } from 'react'
import { CASES } from './data/cases'
import { resolveCatalogTest, DIRECT_ACTION_COST_DEFAULTS } from './data/testCatalog'
import { loadProgress, saveProgress, markInProgress, markCompleted } from './utils/progress'
import SplashScreen from './components/SplashScreen'
import GameScreen from './components/GameScreen'
import ResultsScreen from './components/ResultsScreen'

// Score deducted when an irrelevant (generic) catalog test is ordered, by difficulty
const IRRELEVANT_PENALTY = { easy: 0, medium: -5, hard: -15 }

export default function App() {
  const [screen, setScreen] = useState('splash')        // 'splash' | 'game' | 'results'
  const [currentCase, setCurrentCase] = useState(null)
  const [score, setScore] = useState(0)
  const [usedActions, setUsedActions] = useState(new Set())
  const [findings, setFindings] = useState([])
  const [disposed, setDisposed] = useState(false)
  const [outcomeInfo, setOutcomeInfo] = useState(null)
  const [caseScores, setCaseScores] = useState([])
  const [progress, setProgress] = useState(() => loadProgress())

  // Cost tracking
  const [totalCost, setTotalCost] = useState(0)

  // Patient state (consequence feedback)
  const [patientState, setPatientState] = useState('stable')       // 'stable' | 'worsening' | 'improving'
  const [patientStateMsg, setPatientStateMsg] = useState(null)     // optional message string

  // Difficulty setting — persists across cases in a session
  const [difficulty, setDifficulty] = useState('medium')           // 'easy' | 'medium' | 'hard'

  // Persist progress whenever it changes
  useEffect(() => {
    saveProgress(progress)
  }, [progress])

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
    setScreen('game')
    // Mark in-progress (won't downgrade a completed case)
    setProgress(prev => markInProgress(prev, caseId))
  }, [])

  const performAction = useCallback((actionId) => {
    if (!currentCase || disposed) return
    let found = null
    let foundGroup = null
    for (const group of currentCase.actions) {
      for (const item of group.items) {
        if (item.id === actionId) { found = item; foundGroup = group; break }
      }
      if (found) break
    }
    if (!found || usedActions.has(actionId)) return

    // Determine cost from group default
    const cost = DIRECT_ACTION_COST_DEFAULTS[foundGroup?.group] ?? 0

    setUsedActions(prev => new Set([...prev, actionId]))
    setFindings(prev => [...prev, found.finding])
    setScore(prev => prev + found.points)
    setTotalCost(prev => prev + cost)

    // Handle optional patient state progression
    if (found.stateEffect) {
      setPatientState(found.stateEffect.state)
      setPatientStateMsg(found.stateEffect.message)
    }
  }, [currentCase, disposed, usedActions])

  // Handle a click on a catalog test (may map to a real action or return generic finding)
  const performCatalogTest = useCallback((catalogTestId, catalogTestLabel) => {
    if (!currentCase || disposed) return
    // Prevent duplicate ordering (use catalogTestId as the "used" key)
    if (usedActions.has(catalogTestId)) return

    const { actionId, finding, points, costDollars } = resolveCatalogTest(
      currentCase.id,
      catalogTestId,
      catalogTestLabel,
      currentCase.actions,
    )

    if (actionId) {
      // Delegate to the real action (but guard against already-used real actions)
      if (usedActions.has(actionId)) return
      setUsedActions(prev => new Set([...prev, catalogTestId, actionId]))
      // Find the actual finding + stateEffect from the case action
      let realFinding = null
      let stateEffect = null
      for (const group of currentCase.actions) {
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
      // Generic (irrelevant) finding — apply difficulty-based penalty
      const penalty = IRRELEVANT_PENALTY[difficulty] ?? -5
      setUsedActions(prev => new Set([...prev, catalogTestId]))
      setFindings(prev => [...prev, finding])
      setScore(prev => Math.max(0, prev + penalty))
      setTotalCost(prev => prev + costDollars)
    }
  }, [currentCase, disposed, usedActions, difficulty])

  const chooseDisposition = useCallback((dispId) => {
    if (!currentCase || disposed) return
    const disp = currentCase.dispositions.find(d => d.id === dispId)
    if (!disp) return

    const critMissed = currentCase.criticalActions.filter(a => !usedActions.has(a))
    const critBonus = critMissed.length === 0 ? 50 : 0
    const delta = disp.points + critBonus

    setDisposed(true)
    setScore(prev => Math.max(0, prev + delta))
    setOutcomeInfo({ disp, critBonus, critMissed, delta, totalCost })
    setCaseScores(prev => [
      ...prev,
      {
        caseId: currentCase.id,
        patientName: currentCase.patient.name,
        score: delta,
        outcome: disp.outcome,
        totalCost,
      },
    ])
    // Update patient state based on outcome
    if (disp.outcome === 'correct') {
      setPatientState('improving')
      setPatientStateMsg('Patient responding to treatment. Prognosis improving with correct management.')
    } else if (disp.outcome === 'incorrect') {
      setPatientState('worsening')
      setPatientStateMsg('Patient condition deteriorating — incorrect management decision.')
    }
    // Mark completed regardless of outcome
    setProgress(prev => markCompleted(prev, currentCase.id))
  }, [currentCase, disposed, usedActions, totalCost])

  const goHome = useCallback(() => {
    if (window.confirm('Return to the main menu? Your current case progress will be lost.')) {
      setScreen('splash')
    }
  }, [])

  const goToNextCase = useCallback((caseId) => {
    startCase(caseId)
  }, [startCase])

  const showResults = useCallback(() => {
    setScreen('results')
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
        onAction={performAction}
        onCatalogTest={performCatalogTest}
        onDispose={chooseDisposition}
        onGoHome={goHome}
        onNextCase={goToNextCase}
        onShowResults={showResults}
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