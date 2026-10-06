import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data.js'
import { Logo } from '../ui.jsx'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goStudio = () => {
    window.location.hash = '#/studio'
  }

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        <a className="nav-brand" href="#top" aria-label="Cascade home">
          <Logo />
          <span className="nav-word">Cascade</span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="btn btn-ghost" onClick={goStudio}>
            Sign in
          </button>
          <button className="btn btn-dark" onClick={goStudio}>
            Get started
          </button>
          <button
            className={`nav-burger ${open ? 'x' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
