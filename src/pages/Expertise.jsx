import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ExpertiseCard from '../components/ExpertiseCard.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { Sparkles, ShieldCheck, TrendingUp, Radio, PenTool, BadgeCheck } from 'lucide-react'

import { EXPERTISE, WHY_US } from '../data/expertise.js'

// Our Expertise — five expandable areas + "Why Choose Us" panel.
// No prices or payment details anywhere (client instruction).
export default function Expertise() {
  return (
    <>
      <Seo
        title="Our Expertise"
        description="Account growth, content strategy, live streaming, identity verification guidance and restriction help — from Mariya Media Ltd."
        path="/expertise"
      />

      <PageHero
        eyebrow="Our Expertise"
        title="Specialists in the five things creators ask us about most"
        intro="Growth, content, LIVE, verification and restrictions. Clear guidance, honest expectations, and no shortcuts that put your account at risk."
        chips={[
          { label: 'Account Growth', icon: <TrendingUp size={15} aria-hidden="true" /> },
          { label: 'Live Stream', icon: <Radio size={15} aria-hidden="true" /> },
          { label: 'Verification', icon: <BadgeCheck size={15} aria-hidden="true" /> },
          { label: 'Restriction Help', icon: <ShieldCheck size={15} aria-hidden="true" /> },
        ]}
      />

      {/* ── Expertise cards (expandable) ──────────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: 960 }}>
          <SectionHeading
            eyebrow="What we cover"
            title="Tap a card to see exactly what’s included"
            intro="Each area is a programme, not a one-off tip. Everything is explained in plain language, at your pace."
            center
          />

          <Reveal className="stats-grid" style={{ gridTemplateColumns: '1fr', gap: 16 }} stagger>
            {EXPERTISE.map((e, i) => (
              <Reveal.Item key={e.title}>
                <ExpertiseCard item={e} defaultOpen={i === 0} />
              </Reveal.Item>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Why choose us ─────────────────────────────────────────────────── */}
      <section className="section section--alt" id="why-us">
        <div className="container">
          <Reveal className="why-panel">
            <span className="eyebrow">Why choose us</span>
            <div className="sec-head" style={{ marginBottom: 0, marginTop: 14 }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>
                Built on values, not <span className="gold-text">promises</span>
              </h2>
              <p>
                The agency’s five values are how we work with every creator who walks
                through the door — no exceptions.
              </p>
            </div>

            <div className="why-panel__grid">
              {WHY_US.map(([title, text], i) => (
                <Reveal.Item key={title} className="why-item">
                  <span className="why-item__n">{String(i + 1).padStart(2, '0')}</span>
                  <b>{title}</b>
                  <p>{text}</p>
                </Reveal.Item>
              ))}
            </div>

            <div className="teaser__tags" style={{ marginTop: 34, justifyContent: 'center' }}>
              <span><Sparkles size={13} style={{ display: 'inline', verticalAlign: '-2px' }} aria-hidden="true" /> Creator-first</span>
              <span><PenTool size={13} style={{ display: 'inline', verticalAlign: '-2px' }} aria-hidden="true" /> Original content</span>
              <span><ShieldCheck size={13} style={{ display: 'inline', verticalAlign: '-2px' }} aria-hidden="true" /> Safe practices only</span>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Facing an account problem right now?"
        intro="Restrictions, verification stuck, growth stalled — tell us what’s happening and we’ll tell you honestly whether and how we can help."
        primary={{ to: '/contact', label: 'Describe your situation' }}
        secondary={{ to: '/what-we-do', label: 'See what we do' }}
      />
    </>
  )
}
