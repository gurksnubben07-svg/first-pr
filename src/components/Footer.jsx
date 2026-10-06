import { FOOTER_COLS } from '../data.js'
import { Icon, Logo, Reveal } from '../ui.jsx'

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="cta-bg" aria-hidden="true">
        <img src="/assets/group.jpg" alt="" loading="lazy" />
      </div>
      <div className="container cta-inner">
        <Reveal as="h2" className="cta-title">
          turn your catalog into <em>campaign-ready creative</em>
        </Reveal>
        <Reveal as="p" className="cta-sub">
          Start with your products and brand. Generate the assets your team needs to launch,
          test and scale — today.
        </Reveal>
        <Reveal className="cta-actions">
          <button className="btn btn-lime btn-lg" onClick={() => (window.location.hash = '#/studio')}>
            Get started free <Icon name="arrow" size={16} />
          </button>
          <button className="btn btn-outline btn-lg">Talk to sales</button>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="nav-brand" href="#top">
              <Logo />
              <span className="nav-word">Cascade</span>
            </a>
            <p>The creative engine for commerce brands. Catalog in — campaigns out.</p>
            <div className="footer-badges">
              <span className="pill">SOC 2 ready</span>
              <span className="pill">GDPR aligned</span>
              <span className="pill">99.9% uptime</span>
            </div>
          </div>
          {FOOTER_COLS.map((col) => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              {col.links.map((l) => (
                <a key={l} href="#top" onClick={(e) => e.preventDefault()}>
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-base">
          <span>© 2026 Cascade Labs — a fictional demo brand.</span>
          <span>
            Imagery generated for this demo. Inspired by modern creative-AI landing pages.
          </span>
        </div>
      </div>
    </footer>
  )
}
