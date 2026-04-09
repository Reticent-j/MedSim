import React, { useState } from 'react'
import { ACTION_ICON, Icons } from './icons'
import { TEST_CATALOG, CATALOG_CASE_MAP } from '../data/testCatalog'

// Which catalog tests are "available" (have a real case action) for the current case
function buildAvailableSet(caseId) {
  return new Set(Object.keys(CATALOG_CASE_MAP[caseId] ?? {}))
}

// Resolve the underlying action ID for a catalog test
function resolveActionId(caseId, catalogTestId) {
  return (CATALOG_CASE_MAP[caseId] ?? {})[catalogTestId] ?? null
}

// Check if a catalog test (or its underlying action) is in usedActions
function isCatalogUsed(caseId, catalogTestId, usedActions) {
  if (usedActions.has(catalogTestId)) return true
  const actionId = resolveActionId(caseId, catalogTestId)
  return actionId ? usedActions.has(actionId) : false
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="12" height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transition: 'transform .2s', transform: open ? 'rotate(90deg)' : 'none', flexShrink: 0 }}
    >
      <polyline points="4,2 8,6 4,10" />
    </svg>
  )
}

function CatalogSubcategory({ sub, caseId, usedActions, disposed, onCatalogTest, availableSet, difficulty }) {
  const [open, setOpen] = useState(false)

  const relevantCount = sub.tests.filter(t => availableSet.has(t.id)).length
  const usedCount     = sub.tests.filter(t => isCatalogUsed(caseId, t.id, usedActions)).length

  // Medium: show subcategory relevance badge but NOT individual test highlights
  // Easy: show everything
  // Hard: show nothing
  const showSubBadge  = difficulty !== 'hard' && relevantCount > 0
  const showTestHints = difficulty === 'easy'

  return (
    <div className="catalog-sub">
      <button
        className={`catalog-sub-header ${open ? 'open' : ''}`}
        onClick={() => setOpen(v => !v)}
      >
        <ChevronIcon open={open} />
        <span className="catalog-sub-name">{sub.name}</span>
        {showSubBadge && (
          <span className="catalog-sub-badge relevant">{relevantCount} relevant</span>
        )}
        {usedCount > 0 && (
          <span className="catalog-sub-badge used">{usedCount} done</span>
        )}
      </button>

      {open && (
        <div className="catalog-sub-tests">
          {sub.tests.map(test => {
            const relevant = availableSet.has(test.id)
            const used = isCatalogUsed(caseId, test.id, usedActions)
            // Easy: apply relevant class + pip; Medium/Hard: no per-test visual hint
            const showRelevant = showTestHints && relevant
            return (
              <button
                key={test.id}
                className={`catalog-test-btn ${used ? 'used' : ''} ${showRelevant ? 'relevant' : 'generic'}`}
                onClick={() => onCatalogTest(test.id, test.label)}
                disabled={used || disposed}
                title={
                  difficulty === 'easy' && relevant
                    ? 'Relevant to this case'
                    : difficulty === 'hard'
                    ? test.label
                    : 'Order this test'
                }
              >
                <span className="catalog-test-dot" />
                <span className="catalog-test-label">{test.label}</span>
                {showRelevant && !used && <span className="catalog-relevance-pip" />}
                {used && <span className="action-check">✓</span>}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

function CatalogCategory({ cat, caseId, usedActions, disposed, onCatalogTest, availableSet, difficulty }) {
  const [open, setOpen] = useState(false)

  const totalRelevant = cat.subcategories.reduce(
    (n, sub) => n + sub.tests.filter(t => availableSet.has(t.id)).length, 0
  )

  // Hard: hide category badge too
  const showCatBadge = difficulty !== 'hard' && totalRelevant > 0

  return (
    <div className="catalog-cat">
      <button
        className={`catalog-cat-header ${open ? 'open' : ''}`}
        onClick={() => setOpen(v => !v)}
      >
        <div className={`action-icon ${cat.icon}`} style={{ width: 22, height: 22, borderRadius: 4 }}>
          {ACTION_ICON[cat.icon]}
        </div>
        <span className="catalog-cat-name">{cat.category}</span>
        {showCatBadge && (
          <span className="catalog-cat-badge">{totalRelevant}</span>
        )}
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div className="catalog-cat-body">
          {cat.subcategories.map(sub => (
            <CatalogSubcategory
              key={sub.name}
              sub={sub}
              caseId={caseId}
              usedActions={usedActions}
              disposed={disposed}
              onCatalogTest={onCatalogTest}
              availableSet={availableSet}
              difficulty={difficulty}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// Hint bar text varies by difficulty
function CatalogHint({ difficulty }) {
  if (difficulty === 'easy') {
    return (
      <div className="catalog-hint diff-easy-hint">
        <span className="catalog-hint-dot relevant" /> Highlighted tests are relevant to this case &nbsp;
        <span className="catalog-hint-dot generic" /> No relevant finding
      </div>
    )
  }
  if (difficulty === 'medium') {
    return (
      <div className="catalog-hint diff-medium-hint">
        Categories &amp; subcategories show relevant test counts. Specific tests not highlighted.
      </div>
    )
  }
  // hard
  return (
    <div className="catalog-hint diff-hard-hint">
      Hard mode — no hints. Every unnecessary test is penalized.
    </div>
  )
}

export default function ActionsPanel({
  actions,
  dispositions,
  usedActions,
  disposed,
  onAction,
  onCatalogTest,
  onDispose,
  caseId,
  difficulty = 'medium',
  stageLabel = null,
}) {
  const [activeTab, setActiveTab] = useState('catalog') // 'catalog' | 'case'
  const availableSet = buildAvailableSet(caseId)

  // Set of action IDs that are reachable via the catalog for this case
  const catalogMappedIds = new Set(Object.values(CATALOG_CASE_MAP[caseId] ?? {}))

  // Case-specific tab shows: Physical Exam, Consults,
  // and any Labs/Imaging items NOT covered by the catalog (specialized procedures)
  const caseSpecific = actions
    .map(group => {
      if (group.group === 'Physical Exam' || group.group === 'Consults') return group
      // For Labs / Imaging: only show items NOT in the catalog map
      const uncatalogued = group.items.filter(item => !catalogMappedIds.has(item.id))
      if (uncatalogued.length === 0) return null
      return { ...group, group: `${group.group} (Specialized)`, items: uncatalogued }
    })
    .filter(Boolean)

  return (
    <div className="actions-panel">
      {stageLabel && (
        <div className="actions-stage-banner">
          ⚠️ {stageLabel}
        </div>
      )}
      <div className="actions-header">
        {Icons.clipboard}
        Workup &amp; Orders
      </div>

      {/* Tab toggle */}
      <div className="actions-tabs">
        <button
          className={`actions-tab ${activeTab === 'catalog' ? 'active' : ''}`}
          onClick={() => setActiveTab('catalog')}
        >
          Test Catalog
        </button>
        <button
          className={`actions-tab ${activeTab === 'case' ? 'active' : ''}`}
          onClick={() => setActiveTab('case')}
        >
          Exam &amp; Consults
        </button>
      </div>

      {/* Test catalog tab */}
      {activeTab === 'catalog' && (
        <div className="catalog-panel">
          <CatalogHint difficulty={difficulty} />
          {TEST_CATALOG.map(cat => (
            <CatalogCategory
              key={cat.category}
              cat={cat}
              caseId={caseId}
              usedActions={usedActions}
              disposed={disposed}
              onCatalogTest={onCatalogTest}
              availableSet={availableSet}
              difficulty={difficulty}
            />
          ))}
        </div>
      )}

      {/* Physical Exam & Consults tab */}
      {activeTab === 'case' && (
        <div className="case-specific-panel">
          {caseSpecific.map(group => (
            <div key={group.group} className="action-group">
              <div className="action-group-label">{group.group}</div>
              {group.items.map(item => {
                const used = usedActions.has(item.id)
                return (
                  <button
                    key={item.id}
                    className={`action-btn ${used ? 'used' : ''}`}
                    onClick={() => onAction(item.id)}
                    disabled={used || disposed}
                  >
                    <div className={`action-icon ${item.icon}`}>
                      {ACTION_ICON[item.icon]}
                    </div>
                    {item.label}
                    {!used && item.cost && (
                      <span className="action-cost">{item.cost.toUpperCase()}</span>
                    )}
                    {used && <span className="action-check">✓</span>}
                  </button>
                )
              })}
            </div>
          ))}
        </div>
      )}

      {/* Disposition */}
      <div className="disposition-divider" />
      <div className="disposition-warning">
        <strong>Disposition</strong> — When ready, select your final management decision below.
      </div>

      <div className="action-group">
        <div className="action-group-label">Final Disposition</div>
        {dispositions.map(d => (
          <button
            key={d.id}
            className="action-btn disposition"
            onClick={() => onDispose(d.id)}
            disabled={disposed}
            title={d.description}
          >
            <div className={`action-icon ${d.icon}`}>
              {ACTION_ICON[d.icon]}
            </div>
            {d.label}
          </button>
        ))}
      </div>
    </div>
  )
}
