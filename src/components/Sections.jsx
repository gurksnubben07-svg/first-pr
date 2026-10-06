import { BRAND_WORDMARKS, CHANNELS, FEATURES, SHOWCASE } from '../data.js'
import { Icon, Logo, Reveal } from '../ui.jsx'

/* ---------- client wordmark marquee ---------- */

export function Marquee() {
  const row = [...BRAND_WORDMARKS, ...BRAND_WORDMARKS]
  return (
    <section className="marquee-sec">
      <Reveal as="p" className="marquee-title">
        Commerce teams ship <em>millions</em> of on-brand assets with Cascade.
      </Reveal>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {row.map((b, i) => (
            <span key={`${b.name}-${i}`} className={`wordmark wm-${b.style}`}>
              {b.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- platform feature grid ---------- */

export function Features() {
  return (
    <section className="section" id="platform">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          The platform
        </Reveal>
        <Reveal as="h2" className="h2">
          one workspace. <em>every creative workflow.</em>
        </Reveal>
        <Reveal as="p" className="lede">
          Bring in your catalog and brand rules, then create, adapt and export the assets your
          team needs to launch, test and grow.
        </Reveal>

        <div className="feature-grid">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} className="feature-card" delay={(i % 4) * 70}>
              <span className="feature-ic">
                <Icon name={f.icon} size={20} />
              </span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- channels ---------- */

export function Channels() {
  return (
    <section className="section-tight">
      <div className="container channels-wrap">
        <Reveal as="p" className="channels-title">
          Plugged into the channels your team already runs.
        </Reveal>
        <Reveal className="channels-row">
          {CHANNELS.map((c) => (
            <span key={c} className="chip chip-channel">
              {c}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- showcase: alternating feature blocks ---------- */

function Overlay({ overlay }) {
  if (!overlay) return null
  if (overlay.type === 'toolbar') {
    return (
      <div className="mock mock-toolbar">
        <span className="mt-item active">Recolour</span>
        <span className="mt-item">Resize</span>
        <span className="mt-item">Translate</span>
        <span className="mt-status">
          <Icon name="refresh" size={12} /> 12 / 24 assets
        </span>
      </div>
    )
  }
  if (overlay.type === 'chat') {
    return (
      <div className="mock mock-chat">
        <div className="mc-row user">{overlay.items[0]}</div>
        <div className="mc-row bot">
          <Logo size={16} /> {overlay.items[1]}
        </div>
      </div>
    )
  }
  if (overlay.type === 'layers') {
    return (
      <div className="mock mock-layers">
        {overlay.items.map((it, i) => (
          <div key={it} className="ml-row" style={{ '--i': i }}>
            <Icon name="drag" size={14} />
            <span>{it}</span>
            <Icon name="eye" size={14} />
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="mock mock-tokens">
      {overlay.items.map((it) => (
        <span key={it} className="mock-token">
          <Icon name="check" size={12} /> {it}
        </span>
      ))}
    </div>
  )
}

export function Showcase() {
  return (
    <section className="section" id="workflows">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          How it works
        </Reveal>
        <Reveal as="h2" className="h2">
          <em>the workflows</em> behind the creative engine
        </Reveal>
        <Reveal as="p" className="lede">
          Cascade turns your catalog and brand system into repeatable workflows — from first import
          to channel-ready output.
        </Reveal>

        <div className="showcase">
          {SHOWCASE.map((s, i) => (
            <Reveal key={s.title} className={`show-row ${i % 2 ? 'flip' : ''}`}>
              <div className="show-media">
                <img src={s.img} alt="" loading="lazy" />
                <Overlay overlay={s.overlay} />
              </div>
              <div className="show-copy">
                <p className="show-kicker">{s.kicker}</p>
                <h3 dangerouslySetInnerHTML={{ __html: s.title }} />
                <p>{s.body}</p>
                {s.cta && (
                  <button
                    className="btn btn-dark"
                    onClick={() => (window.location.hash = '#/studio')}
                  >
                    {s.cta} <Icon name="arrow" size={15} />
                  </button>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
