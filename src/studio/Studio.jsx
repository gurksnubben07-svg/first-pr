import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ASPECTS, GEN_STEPS, STUDIO_MODES, STUDIO_POOL } from '../data.js'
import { Icon, Logo } from '../ui.jsx'

/* deterministic pick so a prompt keeps a stable result per seed */
function pickFrom(pool, prompt, seed, count = 4) {
  let h = 2166136261
  const s = `${prompt}|${seed}`
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  const out = []
  for (let i = 0; i < count; i++) out.push(pool[Math.abs(h + i * 2654435761) % pool.length])
  return out
}

const DEFAULT_PROMPT = 'Amber serum bottle on wet terrazzo, editorial morning light'
const BRAND = { name: 'Aurelia Skin', ink: '#F5F0E6', accent: '#C9F270' }

/* ---------------- draggable overlay layer ---------------- */

function Layer({ pos, onMove, visible, selected, onSelect, className = '', children, label }) {
  const ref = useRef(null)
  const drag = useRef(null)
  if (!visible) return null
  return (
    <div
      ref={ref}
      className={`stx-layer ${className} ${selected ? 'selected' : ''}`}
      style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
      title={label}
      onPointerDown={(e) => {
        e.stopPropagation()
        onSelect()
        const stage = ref.current.parentElement.getBoundingClientRect()
        drag.current = {
          stage,
          startX: e.clientX,
          startY: e.clientY,
          ox: pos.x,
          oy: pos.y,
        }
        ref.current.setPointerCapture(e.pointerId)
      }}
      onPointerMove={(e) => {
        if (!drag.current) return
        const { stage, startX, startY, ox, oy } = drag.current
        onMove({
          x: Math.min(95, Math.max(0, ox + ((e.clientX - startX) / stage.width) * 100)),
          y: Math.min(95, Math.max(0, oy + ((e.clientY - startY) / stage.height) * 100)),
        })
      }}
      onPointerUp={() => (drag.current = null)}
    >
      {children}
    </div>
  )
}

/* ---------------- export composer (real PNG download) ---------------- */

function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 3) {
  const words = text.split(' ')
  const lines = []
  let line = ''
  for (const w of words) {
    const test = line ? `${line} ${w}` : w
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line)
      line = w
    } else line = test
    if (lines.length === maxLines) break
  }
  if (line && lines.length < maxLines) lines.push(line)
  lines.forEach((l, i) => ctx.fillText(l, x, y + i * lineHeight))
  return lines.length
}

async function exportPng({ imgSrc, aspect, layers, headline, ctaText, dark }) {
  const img = await new Promise((res, rej) => {
    const im = new Image()
    im.onload = () => res(im)
    im.onerror = rej
    im.src = imgSrc
  })
  const canvas = document.createElement('canvas')
  canvas.width = aspect.w
  canvas.height = aspect.h
  const ctx = canvas.getContext('2d')

  /* cover crop */
  const scale = Math.max(canvas.width / img.width, canvas.height / img.height)
  const w = img.width * scale
  const h = img.height * scale
  ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h)

  const ink = dark ? '#F5F0E6' : '#17130E'
  const px = (p, total) => (p / 100) * total

  if (layers.headline.visible) {
    const fs = Math.round(canvas.width * 0.075)
    ctx.font = `italic 600 ${fs}px "Instrument Serif", serif`
    ctx.fillStyle = ink
    ctx.shadowColor = 'rgba(0,0,0,0.45)'
    ctx.shadowBlur = 24
    wrapText(
      ctx,
      headline,
      px(layers.headline.x, canvas.width),
      px(layers.headline.y, canvas.height) + fs / 2,
      canvas.width * 0.8,
      fs * 1.05
    )
    ctx.shadowBlur = 0
  }
  if (layers.cta.visible) {
    const fs = Math.round(canvas.width * 0.03)
    ctx.font = `600 ${fs}px Inter, sans-serif`
    const tw = ctx.measureText(ctaText).width
    const pad = fs * 1.1
    const x = px(layers.cta.x, canvas.width)
    const y = px(layers.cta.y, canvas.height)
    const bh = fs * 2.6
    ctx.fillStyle = '#C9F270'
    ctx.beginPath()
    ctx.roundRect(x, y - bh / 2, tw + pad * 2, bh, bh / 2)
    ctx.fill()
    ctx.fillStyle = '#17130E'
    ctx.fillText(ctaText, x + pad, y + fs * 0.52)
  }
  if (layers.badge.visible) {
    const r = canvas.width * 0.075
    const x = px(layers.badge.x, canvas.width) + r
    const y = px(layers.badge.y, canvas.height) + r
    ctx.fillStyle = '#17130E'
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
    ctx.strokeStyle = '#C9F270'
    ctx.lineWidth = r * 0.06
    ctx.beginPath()
    ctx.arc(x, y, r * 0.82, 0, Math.PI * 2)
    ctx.stroke()
    ctx.fillStyle = '#C9F270'
    ctx.font = `italic 600 ${Math.round(r * 0.52)}px "Instrument Serif", serif`
    ctx.textAlign = 'center'
    ctx.fillText('-30%', x, y + r * 0.18)
    ctx.textAlign = 'left'
  }
  if (layers.logo.visible) {
    const fs = Math.round(canvas.width * 0.034)
    ctx.font = `italic 400 ${fs}px "Instrument Serif", serif`
    ctx.fillStyle = ink
    ctx.shadowColor = 'rgba(0,0,0,0.5)'
    ctx.shadowBlur = 16
    ctx.fillText(BRAND.name, px(layers.logo.x, canvas.width), px(layers.logo.y, canvas.height) + fs / 3)
    ctx.shadowBlur = 0
  }

  const a = document.createElement('a')
  a.download = `cascade-${aspect.id.replace(':', 'x')}.png`
  a.href = canvas.toDataURL('image/png')
  a.click()
}

/* ---------------- studio ---------------- */

const LAYER_DEFS = [
  { id: 'headline', label: 'Headline', icon: 'film' },
  { id: 'cta', label: 'CTA button', icon: 'zap' },
  { id: 'badge', label: 'Offer badge', icon: 'sparkle' },
  { id: 'logo', label: 'Logo', icon: 'eye' },
]

export default function Studio({ initialPrompt, initialMode }) {
  const [credits, setCredits] = useState(2470)
  const [prompt, setPrompt] = useState(initialPrompt || DEFAULT_PROMPT)
  const [mode, setMode] = useState(
    STUDIO_MODES.some((m) => m.id === initialMode) ? initialMode : 'image'
  )
  const [aspectId, setAspectId] = useState('1:1')
  const [seed, setSeed] = useState(0)
  const [status, setStatus] = useState('idle') // idle | generating | done
  const [step, setStep] = useState(0)
  const [result, setResult] = useState(null)
  const [variations, setVariations] = useState([])
  const [selected, setSelected] = useState('headline')
  const [headline, setHeadline] = useState('Spring skin, bottled.')
  const [ctaText, setCtaText] = useState('Shop the drop')
  const [playing, setPlaying] = useState(true)
  const [exported, setExported] = useState(false)
  const [history, setHistory] = useState([
    { prompt: 'Holiday gift-guide ads across the coffee range', mode: 'ad', seed: 3 },
    { prompt: 'Low-key macro of the heritage watch on slate', mode: 'photoshoot', seed: 1 },
  ])
  const [batch, setBatch] = useState(
    ASPECTS.map((a) => ({ ...a, active: ['1:1', '4:5'].includes(a.id), state: 'idle' }))
  )

  const [layers, setLayers] = useState({
    headline: { visible: true, x: 6, y: 12 },
    cta: { visible: true, x: 6, y: 80 },
    badge: { visible: true, x: 76, y: 8 },
    logo: { visible: true, x: 70, y: 88 },
  })

  const aspect = useMemo(() => ASPECTS.find((a) => a.id === aspectId), [aspectId])
  const isVideo = mode === 'video'
  const timers = useRef([])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  /* auto-run once if we arrived with a prompt from the landing hero */
  const autoRan = useRef(false)
  useEffect(() => {
    if (autoRan.current) return
    autoRan.current = true
    if (initialPrompt) generate(initialPrompt, initialMode)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const generate = useCallback(
    (p = prompt, m = mode, s = seed) => {
      timers.current.forEach(clearTimeout)
      timers.current = []
      setStatus('generating')
      setStep(0)
      setExported(false)
      setBatch((b) => b.map((x) => ({ ...x, state: 'idle' })))
      GEN_STEPS.forEach((_, i) => {
        timers.current.push(setTimeout(() => setStep(i), i * 620))
      })
      timers.current.push(
        setTimeout(() => {
          const picks = pickFrom(STUDIO_POOL, `${p}${m}`, s, 4)
          setVariations(picks)
          setResult(picks[0])
          setStatus('done')
          setCredits((c) => Math.max(0, c - (m === 'video' ? 24 : 6)))
          setHistory((h) => [{ prompt: p, mode: m, seed: s }, ...h].slice(0, 6))
        }, GEN_STEPS.length * 620 + 500)
      )
    },
    [prompt, mode, seed]
  )

  const runBatch = () => {
    const actives = batch.filter((b) => b.active)
    actives.forEach((b, i) => {
      timers.current.push(
        setTimeout(() => {
          setBatch((cur) => cur.map((x) => (x.id === b.id ? { ...x, state: 'running' } : x)))
          timers.current.push(
            setTimeout(
              () => setBatch((cur) => cur.map((x) => (x.id === b.id ? { ...x, state: 'done' } : x))),
              900
            )
          )
        }, i * 1100)
      )
    })
  }

  const moveLayer = (id, patch) => setLayers((l) => ({ ...l, [id]: { ...l[id], ...patch } }))

  const doExport = () => {
    if (!result) return
    exportPng({ imgSrc: result, aspect, layers, headline, ctaText, dark: true })
    setExported(true)
    timers.current.push(setTimeout(() => setExported(false), 2200))
  }

  return (
    <div className="st">
      {/* top bar */}
      <header className="st-top">
        <div className="st-top-left">
          <button className="btn btn-ghost btn-sm" onClick={() => (window.location.hash = '')}>
            <Icon name="back" size={15} /> Site
          </button>
          <span className="st-divider" />
          <Logo size={26} />
          <span className="st-title">
            Studio <em>/ Aurelia Skin</em>
          </span>
        </div>
        <div className="st-top-right">
          <span className="st-credits">
            <Icon name="sparkle" size={13} /> {credits.toLocaleString()} credits
          </span>
          <button className="btn btn-lime btn-sm" onClick={doExport} disabled={status !== 'done'}>
            <Icon name="download" size={15} /> {exported ? 'Saved!' : 'Export PNG'}
          </button>
        </div>
      </header>

      <div className="st-body">
        {/* left rail — create */}
        <aside className="st-rail">
          <p className="st-rail-title">Create</p>
          <textarea
            className="st-prompt"
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe what to generate…"
          />
          <div className="st-modes">
            {STUDIO_MODES.map((m) => (
              <button
                key={m.id}
                className={`st-mode ${mode === m.id ? 'on' : ''}`}
                onClick={() => setMode(m.id)}
              >
                <Icon name={m.icon} size={14} /> {m.label}
              </button>
            ))}
          </div>
          <p className="st-rail-label">Format</p>
          <div className="st-aspects">
            {ASPECTS.map((a) => (
              <button key={a.id} className={aspectId === a.id ? 'on' : ''} onClick={() => setAspectId(a.id)}>
                {a.id}
              </button>
            ))}
          </div>
          <button
            className="btn btn-dark st-gen"
            onClick={() => generate()}
            disabled={status === 'generating'}
          >
            {status === 'generating' ? (
              <>Generating…</>
            ) : (
              <>
                <Icon name="sparkle" size={15} /> Generate
              </>
            )}
          </button>
          <button
            className="btn btn-ghost st-gen2"
            onClick={() => {
              const s = seed + 1
              setSeed(s)
              generate(prompt, mode, s)
            }}
            disabled={status === 'generating' || status === 'idle'}
          >
            <Icon name="refresh" size={14} /> Regenerate
          </button>

          <p className="st-rail-label">Recent runs</p>
          <div className="st-history">
            {history.map((h, i) => (
              <button
                key={`${h.prompt}-${i}`}
                className="st-hist-item"
                onClick={() => {
                  setPrompt(h.prompt)
                  setMode(h.mode)
                  generate(h.prompt, h.mode, h.seed + 1)
                }}
              >
                <Icon name={STUDIO_MODES.find((m) => m.id === h.mode)?.icon || 'sparkle'} size={13} />
                <span>{h.prompt}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* stage */}
        <main className="st-stage-wrap">
          <div className="st-stage" onPointerDown={() => setSelected(null)}>
            <div
              className={`st-canvas ${isVideo ? 'is-video' : ''}`}
              style={{ aspectRatio: `${aspect.w} / ${aspect.h}` }}
              onPointerDown={(e) => e.stopPropagation()}
            >
              {status === 'idle' && (
                <div className="st-empty">
                  <Logo size={44} />
                  <p>Write a prompt and hit Generate.</p>
                  <span>Your creative will render here, ready for layers and export.</span>
                </div>
              )}

              {status === 'generating' && (
                <div className="st-progress">
                  <div className="st-orb" />
                  <ul>
                    {GEN_STEPS.map((s, i) => (
                      <li key={s} className={i < step ? 'past' : i === step ? 'now' : ''}>
                        <Icon name={i < step ? 'check' : 'sparkle'} size={13} /> {s}
                      </li>
                    ))}
                  </ul>
                  <div className="st-bar">
                    <span style={{ width: `${((step + 1) / GEN_STEPS.length) * 100}%` }} />
                  </div>
                </div>
              )}

              {status === 'done' && result && (
                <>
                  <img
                    src={result}
                    alt="Generated creative"
                    className={`st-result ${isVideo && playing ? 'kenburns' : ''}`}
                    draggable="false"
                  />
                  <Layer
                    pos={layers.headline}
                    visible={layers.headline.visible}
                    selected={selected === 'headline'}
                    onSelect={() => setSelected('headline')}
                    onMove={(p) => moveLayer('headline', p)}
                    className="stx-headline"
                    label="Headline"
                  >
                    {headline}
                  </Layer>
                  <Layer
                    pos={layers.cta}
                    visible={layers.cta.visible}
                    selected={selected === 'cta'}
                    onSelect={() => setSelected('cta')}
                    onMove={(p) => moveLayer('cta', p)}
                    className="stx-cta"
                    label="CTA button"
                  >
                    {ctaText} <Icon name="arrow" size={13} />
                  </Layer>
                  <Layer
                    pos={layers.badge}
                    visible={layers.badge.visible}
                    selected={selected === 'badge'}
                    onSelect={() => setSelected('badge')}
                    onMove={(p) => moveLayer('badge', p)}
                    className="stx-badge"
                    label="Offer badge"
                  >
                    <span>-30%</span>
                  </Layer>
                  <Layer
                    pos={layers.logo}
                    visible={layers.logo.visible}
                    selected={selected === 'logo'}
                    onSelect={() => setSelected('logo')}
                    onMove={(p) => moveLayer('logo', p)}
                    className="stx-logo"
                    label="Logo"
                  >
                    {BRAND.name}
                  </Layer>

                  {isVideo && (
                    <div className="st-video-ui" onPointerDown={(e) => e.stopPropagation()}>
                      <button className="st-play" onClick={() => setPlaying((v) => !v)}>
                        <Icon name={playing ? 'eye' : 'play'} size={16} />
                      </button>
                      <div className={`st-video-track ${playing ? 'run' : ''}`}>
                        <span />
                      </div>
                      <span className="st-video-time">0:08</span>
                    </div>
                  )}
                </>
              )}
            </div>

            {status === 'done' && (
              <div className="st-vars">
                {variations.map((v, i) => (
                  <button
                    key={`${v}-${i}`}
                    className={`st-var ${result === v ? 'on' : ''}`}
                    onClick={() => setResult(v)}
                  >
                    <img src={v} alt={`Variation ${i + 1}`} />
                    <span>v{i + 1}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </main>

        {/* right rail — layers + batch */}
        <aside className="st-rail right">
          <p className="st-rail-title">Layers</p>
          <div className="st-layers">
            {LAYER_DEFS.map((d) => (
              <div
                key={d.id}
                className={`st-layer-row ${selected === d.id ? 'sel' : ''}`}
                onClick={() => setSelected(d.id)}
              >
                <Icon name="drag" size={14} className="mute" />
                <Icon name={d.icon} size={14} />
                <span className="st-layer-name">{d.label}</span>
                <button
                  className={`st-eye ${layers[d.id].visible ? 'on' : ''}`}
                  aria-label={`Toggle ${d.label}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    moveLayer(d.id, { visible: !layers[d.id].visible })
                  }}
                >
                  <Icon name="eye" size={14} />
                </button>
              </div>
            ))}
          </div>

          {selected === 'headline' && (
            <>
              <p className="st-rail-label">Headline text</p>
              <input className="st-input" value={headline} onChange={(e) => setHeadline(e.target.value)} />
            </>
          )}
          {selected === 'cta' && (
            <>
              <p className="st-rail-label">Button text</p>
              <input className="st-input" value={ctaText} onChange={(e) => setCtaText(e.target.value)} />
            </>
          )}

          <span className="st-divider wide" />

          <p className="st-rail-title">Batch render</p>
          <div className="st-batch">
            {batch.map((b) => (
              <div key={b.id} className="st-batch-row">
                <label>
                  <input
                    type="checkbox"
                    checked={b.active}
                    onChange={() =>
                      setBatch((cur) => cur.map((x) => (x.id === b.id ? { ...x, active: !x.active } : x)))
                    }
                  />
                  <span>{b.id}</span>
                </label>
                <em className={`st-batch-state ${b.state}`}>
                  {b.state === 'done' ? 'done' : b.state === 'running' ? 'rendering…' : 'idle'}
                </em>
              </div>
            ))}
          </div>
          <button
            className="btn btn-dark st-gen"
            onClick={runBatch}
            disabled={status !== 'done' || !batch.some((b) => b.active)}
          >
            <Icon name="layers" size={15} /> Render {batch.filter((b) => b.active).length} formats
          </button>
        </aside>
      </div>
    </div>
  )
}
