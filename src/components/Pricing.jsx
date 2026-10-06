import { useState } from 'react'
import { FAQS, PLANS } from '../data.js'
import { Icon, Reveal } from '../ui.jsx'

function PlanCard({ plan, annual }) {
  const price = plan.enterprise ? null : annual ? plan.annual : plan.monthly
  return (
    <Reveal className={`plan ${plan.popular ? 'popular' : ''}`}>
      {plan.popular && <span className="plan-badge">Most popular</span>}
      <h3>{plan.name}</h3>
      <p className="plan-blurb">{plan.blurb}</p>
      {plan.enterprise ? (
        <p className="plan-price">
          <span className="plan-custom">Custom</span>
        </p>
      ) : (
        <p className="plan-price">
          <span className="plan-num">${price}</span>
          <span className="plan-per">/ month</span>
          {annual && (
            <span className="plan-save">billed annually — save ${(plan.monthly - plan.annual) * 12}</span>
          )}
        </p>
      )}
      {plan.credits && <p className="plan-credits">{plan.credits}</p>}
      <ul>
        {plan.features.map((f) => (
          <li key={f}>
            <Icon name="check" size={14} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button
        className={`btn ${plan.popular ? 'btn-lime' : 'btn-dark'} plan-cta`}
        onClick={() => (window.location.hash = '#/studio')}
      >
        {plan.enterprise ? 'Talk to sales' : 'Get started'}
      </button>
    </Reveal>
  )
}

export function Pricing() {
  const [annual, setAnnual] = useState(true)
  return (
    <section className="section" id="pricing">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          Pricing
        </Reveal>
        <Reveal as="h2" className="h2">
          Make your next <em>1,000 assets</em> the easy part
        </Reveal>
        <Reveal as="p" className="lede">
          Start free while we&rsquo;re in beta. Upgrade when your asset volume does.
        </Reveal>

        <Reveal className="bill-toggle">
          <button className={!annual ? 'on' : ''} onClick={() => setAnnual(false)}>
            Monthly
          </button>
          <button className={annual ? 'on' : ''} onClick={() => setAnnual(true)}>
            Yearly <em>save 20%</em>
          </button>
        </Reveal>

        <div className="plans">
          {PLANS.map((p) => (
            <PlanCard key={p.id} plan={p} annual={annual} />
          ))}
        </div>
        <p className="plan-note">Prices exclude local taxes. Cancel any time — credits roll over for 60 days.</p>
      </div>
    </section>
  )
}

export function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section-tight" id="faq">
      <div className="container faq-wrap">
        <div className="faq-head">
          <Reveal as="p" className="eyebrow">
            FAQ
          </Reveal>
          <Reveal as="h2" className="h2">
            Recently asked <em>questions</em>
          </Reveal>
          <Reveal as="p" className="lede">
            Everything else lives in the help centre — or ask us directly any time.
          </Reveal>
        </div>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div key={f.q} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{f.q}</span>
                <Icon name="plus" size={16} />
              </button>
              <div className="faq-a">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
