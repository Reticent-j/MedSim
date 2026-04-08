import React, { useState, useMemo } from 'react'
import { CASES, SPECIALTIES } from '../data/cases'
import { getCaseStatus } from '../utils/progress'
import { Icons } from './icons'

const STATUS_CONFIG = {
  'not-started': { label: 'Not Started', cls: 'status-not-started' },
  'in-progress':  { label: 'In Progress', cls: 'status-in-progress'  },
  'completed':    { label: 'Completed',   cls: 'status-completed'    },
}

const SORT_OPTIONS = [
  { value: 'default',    label: 'Default (Case #)' },
  { value: 'specialty',  label: 'Specialty' },
  { value: 'status',     label: 'Completion Status' },
  { value: 'name',       label: 'Patient Name' },
]

const STATUS_ORDER = { 'in-progress': 0, 'not-started': 1, 'completed': 2 }

export default function SplashScreen({ onStartCase, progress }) {
  const [filterSpecialty, setFilterSpecialty] = useState('all')
  const [sortBy, setSortBy] = useState('default')

  const stats = useMemo(() => {
    const completed  = CASES.filter(c => getCaseStatus(progress, c.id) === 'completed').length
    const inProgress = CASES.filter(c => getCaseStatus(progress, c.id) === 'in-progress').length
    return { completed, inProgress, total: CASES.length }
  }, [progress])

  const visibleCases = useMemo(() => {
    let list = filterSpecialty === 'all'
      ? [...CASES]
      : CASES.filter(c => c.specialty === filterSpecialty)

    switch (sortBy) {
      case 'specialty':
        list.sort((a, b) => a.specialty.localeCompare(b.specialty) || a.id - b.id)
        break
      case 'status': {
        list.sort((a, b) => {
          const sa = STATUS_ORDER[getCaseStatus(progress, a.id)] ?? 1
          const sb = STATUS_ORDER[getCaseStatus(progress, b.id)] ?? 1
          return sa - sb || a.id - b.id
        })
        break
      }
      case 'name':
        list.sort((a, b) => a.patient.name.localeCompare(b.patient.name))
        break
      default:
        list.sort((a, b) => a.id - b.id)
    }
    return list
  }, [filterSpecialty, sortBy, progress])

  const activeSpecialty = SPECIALTIES.find(s => s.id === filterSpecialty)

  return (
    <div className="splash">
      {/* Header */}
      <div className="splash-logo">
        <div className="splash-cross">{Icons.cross}</div>
        <div className="splash-title">Med<span>Sim</span></div>
      </div>
      <div className="splash-sub">Primary Care &nbsp;·&nbsp; Clinical Decision Trainer</div>

      {/* Progress summary */}
      <div className="splash-progress-bar-wrap">
        <div className="splash-stats">
          <div className="splash-stat">
            <span className="splash-stat-num">{stats.completed}</span>
            <span className="splash-stat-lbl">Completed</span>
          </div>
          <div className="splash-stat-sep" />
          <div className="splash-stat">
            <span className="splash-stat-num in-prog">{stats.inProgress}</span>
            <span className="splash-stat-lbl">In Progress</span>
          </div>
          <div className="splash-stat-sep" />
          <div className="splash-stat">
            <span className="splash-stat-num">{stats.total}</span>
            <span className="splash-stat-lbl">Total Cases</span>
          </div>
        </div>
        <div className="splash-progress-track">
          <div
            className="splash-progress-fill"
            style={{ width: `${(stats.completed / stats.total) * 100}%` }}
          />
        </div>
      </div>

      {/* Specialty filter tabs */}
      <div className="splash-filters">
        <div className="splash-filter-tabs">
          <button
            className={`splash-filter-tab ${filterSpecialty === 'all' ? 'active' : ''}`}
            onClick={() => setFilterSpecialty('all')}
          >
            All Cases
            <span className="tab-count">{CASES.length}</span>
          </button>
          {SPECIALTIES.map(sp => {
            const count = CASES.filter(c => c.specialty === sp.id).length
            return (
              <button
                key={sp.id}
                className={`splash-filter-tab ${filterSpecialty === sp.id ? 'active' : ''}`}
                style={filterSpecialty === sp.id
                  ? { borderColor: sp.color, color: sp.color, background: sp.bg }
                  : {}}
                onClick={() => setFilterSpecialty(filterSpecialty === sp.id ? 'all' : sp.id)}
              >
                {sp.label}
                <span className="tab-count">{count}</span>
              </button>
            )
          })}
        </div>

        <div className="splash-sort-wrap">
          <span className="splash-sort-label">Sort by</span>
          <select
            className="splash-sort-select"
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
          >
            {SORT_OPTIONS.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Specialty description banner */}
      {activeSpecialty && (
        <div className="splash-specialty-banner" style={{
          borderColor: activeSpecialty.border,
          background: activeSpecialty.bg,
          color: activeSpecialty.color,
        }}>
          <strong>{activeSpecialty.label}</strong> &nbsp;—&nbsp; {activeSpecialty.desc}
        </div>
      )}

      {/* Case grid */}
      <div className="splash-cases">
        {visibleCases.map(c => {
          const status = getCaseStatus(progress, c.id)
          const { label: statusLabel, cls: statusCls } = STATUS_CONFIG[status]
          const sp = SPECIALTIES.find(s => s.id === c.specialty)

          return (
            <div
              key={c.id}
              className="splash-case-card"
              onClick={() => onStartCase(c.id)}
            >
              <div className="case-card-top">
                <div className="case-num">Case {c.id}</div>
                <span className={`case-status-badge ${statusCls}`}>{statusLabel}</span>
              </div>

              <div className="case-patient-name">{c.patient.name}</div>
              <div className="case-cc">{c.patient.chiefComplaint}</div>

              <div className="case-card-footer">
                <div className="case-tags">
                  {c.meta.tagLabels.map((t, i) => (
                    <span key={i} className={`case-tag ${t.cls}`}>{t.t}</span>
                  ))}
                  {sp && (
                    <span
                      className="case-tag case-tag-specialty"
                      style={{ background: sp.bg, color: sp.color, border: `1px solid ${sp.border}` }}
                    >
                      {sp.label}
                    </span>
                  )}
                </div>
                <div className="case-start-arrow">Begin Case →</div>
              </div>
            </div>
          )
        })}
      </div>

      <button className="btn-ghost">About MedSim</button>
    </div>
  )
}
