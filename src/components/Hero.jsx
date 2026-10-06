import { useEffect, useRef, useState } from 'react'
import { HERO_CHIPS, PROMPT_SUGGESTIONS } from '../data.js'
import { Icon, Reveal } from '../ui.jsx'

const FLOATERS = [
  { img: '/assets/serum.jpg', cls: 'f-a', depth: 26 },
  { img: '/assets/group.jpg', cls: 'f-b', depth: -18 },
  { img: '/assets/sneaker.jpg', cls: 'f-c', depth: 14 },
  { img: '/assets/bag.jpg', cls: 'f-d', depth: -24 },
]

export default function Hero() {
  const [prompt, setPrompt] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const boxRef = useRef(null)
  const stageRef = useRef(null)

  useEffect(() => {
    const onDocClick = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) setShowSuggestions(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  /* gentle pointer parallax on the floating product cards */
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const cards = stage.querySelectorAll('[data-depth]')
    let raf = 0
    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const nx = e.clientX / window.innerWidth - 0.5
        const ny = e.clientY / window.innerHeight - 0.5
        cards.forEach((c) => {
          const d = parseFloat(c.dataset.depth)
          c.style.transform = `translate3d(${(-nx * d).toFixed(1)}px, ${(-ny * d).toFixed(1)}px, 0)`
        })
      })
    }
    window.addEventListener('pointermove', onMove)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  const submit = (text) => {
    const p = (text ?? prompt).trim()
    window.location.hash = `#/studio?mode=image${p ? `&prompt=${encodeURIComponent(p)}` : ''}`
  }

  const onKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      submit()
    }
  }

  return (
    <section className="hero" id="top" ref={stageRef}>
      <div className="hero-glow" aria-hidden="true" />
      {FLOATERS.map((f) => (
        <figure key={f.img} className={`hero-float ${f.cls}`} data-depth={f.depth} aria-hidden="true">
          <img src={f.img} alt="" loading="eager" />
        </figure>
      ))}

      <div className="container hero-inner">
        <Reveal className="hero-pill-wrap">
          <span className="pill pill-lime">
            <Icon name="sparkle" size={14} /> New — Pilot agent &amp; batch edit 2.0
          </span>
        </Reveal>

        <Reveal as="h1" className="hero-title" delay={80}>
          What should we <em>make</em> today?
        </Reveal>

        <Reveal as="p" className="hero-sub" delay={140}>
          Cascade turns your product catalog into campaign-ready photography, ads and video —
          on-brand, in every format, in minutes.
        </Reveal>

        <Reveal className="hero-box-wrap" delay={220}>
          <div className="hero-box" ref={boxRef}>
            <div className="hero-box-row">
              <button className="hb-icon" aria-label="Attach a reference" title="Attach a reference">
                <Icon name="plus" size={18} />
              </button>
              <textarea
                rows={2}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={onKey}
                placeholder="Describe the shot — the product, the mood, the setting…"
                aria-label="Creative prompt"
              />
              <button className="hb-send" onClick={() => submit()} aria-label="Generate">
                <Icon name="arrow" size={18} />
              </button>
            </div>
            <div className="hero-box-foot">
              <button className="hb-model" type="button">
                <Icon name="sparkle" size={13} /> Cascade v2
              </button>
              <button className="hb-suggest" type="button" onClick={() => setShowSuggestions((v) => !v)}>
                {showSuggestions ? 'Hide suggestions' : 'See suggestions'}
                <Icon name={showSuggestions ? 'back' : 'arrow'} size={13} />
              </button>
            </div>
            {showSuggestions && (
              <div className="hb-panel">
                {PROMPT_SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    className="hb-suggestion"
                    onClick={() => {
                      setPrompt(s)
                      setShowSuggestions(false)
                      submit(s)
                    }}
                  >
                    <Icon name="sparkle" size={14} />
                    <span>{s}</span>
                    <Icon name="arrow" size={14} className="go" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="hero-chips">
            {HERO_CHIPS.map((c) => (
              <button key={c.label} className="chip" onClick={() => submit(c.prompt)}>
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal className="hero-trust" delay={300}>
          <span>Free during beta</span>
          <i />
          <span>No card required</span>
          <i />
          <span>Full commercial rights</span>
        </Reveal>
      </div>
    </section>
  )
}
