const STORAGE_KEY = 'medsim_progress'

export function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch {}
}

// status: 'not-started' | 'in-progress' | 'completed'
export function getCaseStatus(progress, caseId) {
  return progress[caseId] ?? 'not-started'
}

export function markInProgress(progress, caseId) {
  if (progress[caseId] === 'completed') return progress
  return { ...progress, [caseId]: 'in-progress' }
}

export function markCompleted(progress, caseId) {
  return { ...progress, [caseId]: 'completed' }
}