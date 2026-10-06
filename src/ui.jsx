import { useEffect, useRef, useState } from 'react'

/* ---------- scroll reveal ---------- */

export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15, ...options }
    )
    obs.observe(el)
    return () => obs.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return [ref, inView]
}

export function Reveal({ children, className = '', delay = 0, as: Tag = 'div', ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/* ---------- count-up numbers ---------- */

export function useCountUp(target, active, duration = 1500) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(target * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, active, duration])
  return value
}

/* ---------- inline icons (stroke, 24x24) ---------- */

const PATHS = {
  camera: 'M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm8 8.5a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z',
  layers: 'M12 3 3 8l9 5 9-5-9-5Zm-9 9.5 9 5 9-5M3 17l9 5 9-5',
  wand: 'M6 21 21 6a2.12 2.12 0 0 0-3-3L3 18l3 3Zm-1-15 2 2M9 3l2 2M3 9l2 2',
  film: 'M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm3 0v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4',
  zap: 'M13 2 4 14h6l-1 8 9-12h-6l1-8Z',
  bot: 'M12 4V2M5 8h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm3 5h.01M16 13h.01M9 17h6M2 12v4M22 12v4',
  stack: 'M4 7h16M4 12h16M4 17h10',
  check: 'M4 12.5 9.5 18 20 5.5',
  arrow: 'M4 12h15m0 0-6-6m6 6-6 6',
  play: 'M7 5.5v13l11-6.5-11-6.5Z',
  plus: 'M12 5v14M5 12h14',
  sparkle: 'M12 3c.6 4.2 2.7 6.3 7 7-4.3.7-6.4 2.8-7 7-.6-4.2-2.7-6.3-7-7 4.3-.7 6.4-2.8 7-7Zm7 11c.3 1.8 1.2 2.7 3 3-1.8.3-2.7 1.2-3 3-.3-1.8-1.2-2.7-3-3 1.8-.3 2.7-1.2 3-3ZM5 14c.25 1.5 1 2.25 2.5 2.5C6 16.75 5.25 17.5 5 19c-.25-1.5-1-2.25-2.5-2.5C4 16.25 4.75 15.5 5 14Z',
  globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-9 9h18M12 3c2.5 2.4 3.8 5.6 3.8 9S14.5 18.6 12 21c-2.5-2.4-3.8-5.6-3.8-9S9.5 5.4 12 3Z',
  scissors: 'M7 8.5A2.5 2.5 0 1 0 7 3.5a2.5 2.5 0 0 0 0 5Zm0 12A2.5 2.5 0 1 0 7 15.5a2.5 2.5 0 0 0 0 5ZM9.2 7.5 20 18M20 6 9.2 16.5M14 13l1.5 1.5',
  palette: 'M12 3a9 9 0 0 0 0 18c1.2 0 2-.8 2-2 0-.6-.2-1-.6-1.4-.4-.4-.6-.8-.6-1.3 0-1.2 1-2 2.2-2H17a5 5 0 0 0 5-5c0-3.9-4.5-6.3-10-6.3ZM7.5 11a1.25 1.25 0 1 0 0-2.5A1.25 1.25 0 0 0 7.5 11Zm4-3a1.25 1.25 0 1 0 0-2.5A1.25 1.25 0 0 0 11.5 8Zm5 1a1.25 1.25 0 1 0 0-2.5A1.25 1.25 0 0 0 16.5 9Z',
  drag: 'M9 5h.01M15 5h.01M9 12h.01M15 12h.01M9 19h.01M15 19h.01',
  download: 'M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 19h16',
  eye: 'M3 12s3.5-6.5 9-6.5S21 12 21 12s-3.5 6.5-9 6.5S3 12 3 12Zm9 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  back: 'M20 12H5m0 0 6 6m-6-6 6-6',
  refresh: 'M4 12a8 8 0 0 1 14-5l2 2m0-6v6h-6m6 3a8 8 0 0 1-14 5l-2-2m0 6v-6h6',
}

export function Icon({ name, size = 20, strokeWidth = 1.8, className = '' }) {
  return (
    <svg
      className={`ic ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[name] || PATHS.sparkle} />
    </svg>
  )
}

/* ---------- brand mark ---------- */

export function Logo({ size = 30 }) {
  return (
    <span className="logo-mark" style={{ width: size, height: size }}>
      <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#17130E" />
        <path
          d="M6 12c2.7 0 2.7 3 5.4 3S14 12 16.7 12s2.7 3 5.3 3 2.7-3 4-3"
          stroke="#C9F270"
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M6 19c2.7 0 2.7 3 5.4 3S14 19 16.7 19s2.7 3 5.3 3 2.7-3 4-3"
          stroke="#F5F0E6"
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}
