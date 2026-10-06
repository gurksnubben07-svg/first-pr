import { useRef, useState } from 'react'
import { WORKFLOW_TABS, WORKFLOW_TILES } from '../data.js'
import { Icon, Reveal } from '../ui.jsx'

/* Interactive before/after comparison slider used on the "Edit" tab */
function CompareTile({ before, after, label }) {
  const ref = useRef(null)
  const [pos, setPos] = useState(55)
  const dragging = useRef(false)

  const setFromClientX = (clientX) => {
    const r = ref.current.getBoundingClientRect()
    setPos(Math.min(96, Math.max(4, ((clientX - r.left) / r.width) * 100)))
  }

  return (
    <div
      ref={ref}
      className="compare"
      onPointerDown={(e) => {
        dragging.current = true
        ref.current.setPointerCapture(e.pointerId)
        setFromClientX(e.clientX)
      }}
      onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
    >
      <img src={before} alt="" draggable="false" />
      <div className="compare-after" style={{ width: `${pos}%` }}>
        <img src={after} alt="" draggable="false" />
      </div>
      <div className="compare-bar" style={{ left: `${pos}%` }}>
        <span className="compare-handle">
          <Icon name="arrow" size={12} className="flip-x" />
          <Icon name="arrow" size={12} />
        </span>
      </div>
      <span className="compare-tag left">After</span>
      <span className="compare-tag right">Before</span>
      <span className="tile-label">{label}</span>
    </div>
  )
}

function Tile({ t, kind }) {
  if (t.compare) {
    return <CompareTile before="/assets/candle.jpg" after={t.img} label={t.label} />
  }
  return (
    <figure className="wf-tile">
      <img src={t.img} alt={t.label} loading="lazy" />
      <figcaption>
        <span className="tile-label">{t.label}</span>
        {kind === 'video' ? (
          <span className="tile-tag video">
            <Icon name="play" size={11} /> {t.tag}
          </span>
        ) : (
          <span className={`tile-tag ${t.tag}`}>{t.tag}</span>
        )}
      </figcaption>
      {kind === 'video' && (
        <span className="tile-play">
          <Icon name="play" size={18} />
        </span>
      )}
    </figure>
  )
}

export default function TabsSection() {
  const [active, setActive] = useState('photoshoot')
  const tiles = WORKFLOW_TILES[active]

  return (
    <section className="section section-deep" id="gallery">
      <div className="container">
        <Reveal as="p" className="eyebrow light">
          Workflows
        </Reveal>
        <Reveal as="h2" className="h2 light">
          your whole catalog. <em>every asset your team needs.</em>
        </Reveal>
        <Reveal as="p" className="lede light">
          Consistent imagery across every SKU, colourway and campaign — without rewriting the
          brief each time.
        </Reveal>

        <Reveal className="tabs-wrap">
          <p className="tabs-hint">Choose a workflow</p>
          <div className="tabs" role="tablist" aria-label="Workflows">
            {WORKFLOW_TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={active === t.id}
                className={`tab ${active === t.id ? 'active' : ''}`}
                onClick={() => setActive(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        {active === 'batch' && (
          <div className="batch-bar">
            <span>
              <Icon name="layers" size={14} /> Applying “Spring palette” to 24 assets
            </span>
            <span className="batch-pct">62%</span>
          </div>
        )}

        <div key={active} className={`wf-grid wf-${active}`}>
          {tiles.map((t) => (
            <Tile key={t.label} t={t} kind={active} />
          ))}
        </div>
      </div>
    </section>
  )
}
