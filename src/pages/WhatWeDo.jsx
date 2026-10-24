import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceRow from '../components/ServiceRow.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { GraduationCap, Headphones, Zap, Users } from 'lucide-react'

import { CORE_SERVICES, SERVICES } from '../data/services.js'

// What We Do — the two key offerings in rich zig-zag blocks,
// then the wider agency services as alternating numbered cards.
export default function WhatWeDo() {
  return (
    <>
      <Seo
        title="What We Do"
        description="Host Training and Host Assistant — the two core offerings of Mariya Media Ltd, plus creator management, LIVE support, content strategy, growth, verification, brand deals and community support."
        path="/what-we-do"
      />

      <PageHero
        eyebrow="What We Do"
        title="Two ways we stand beside you"
        intro="Everything the agency does is built around two core offerings — Host Training and Host Assistant — supported by the full range of creator services below."
        chips={[
          { label: 'Host Training', icon: <GraduationCap size={15} aria-hidden="true" /> },
          { label: 'Host Assistant', icon: <Headphones size={15} aria-hidden="true" /> },
          { label: '7 supporting services', icon: <Zap size={15} aria-hidden="true" /> },
        ]}
      />

      {/* ── The two core offerings ────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Core offerings"
            title="The heart of the agency"
            intro="These two programmes carry everything else. Start with training, and never go LIVE alone."
            center
          />

          {CORE_SERVICES.map((s, i) => (
            <ServiceRow key={s.id} service={s} index={i} />
          ))}
        </div>
      </section>

      {/* ── Wider services ────────────────────────────────────────────────── */}
      <section className="section section--alt" id="services">
        <div className="container">
          <SectionHeading
            eyebrow="Full agency support"
            title="Everything else we do for creators"
            intro="Seven services from the agency profile, each woven into day-to-day creator support."
            center
          />

          {SERVICES.map((s, i) => (
            <ServiceRow key={s.title} service={s} index={i + CORE_SERVICES.length} />
          ))}

          {/* value strip */}
          <Reveal className="why-panel" style={{ marginTop: 20 }}>
            <span className="eyebrow">How it feels to work with us</span>
            <div className="why-panel__grid">
              {[
                { icon: <Users size={22} aria-hidden="true" />, t: 'Creator-first', p: 'Your goals set the direction — not a template.' },
                { icon: <Zap size={22} aria-hidden="true" />, t: 'Responsive', p: 'Real humans, real answers, when you need them.' },
                { icon: <GraduationCap size={22} aria-hidden="true" />, t: 'Structured', p: 'Step-by-step paths instead of vague advice.' },
                { icon: <Headphones size={22} aria-hidden="true" />, t: 'Supported', p: 'Behind-the-scenes help through every LIVE.' },
              ].map((v, i) => (
                <Reveal.Item key={v.t} className="why-item">
                  <span className="why-item__n">{String(i + 1).padStart(2, '0')}</span>
                  <b>{v.t}</b>
                  <p>{v.p}</p>
                </Reveal.Item>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Not sure which one you need?"
        intro="Tell us where you are right now — beginner, returning, or already LIVE — and we’ll point you to the right starting place."
        primary={{ to: '/contact', label: 'Ask us anything' }}
        secondary={{ to: '/expertise', label: 'See our expertise' }}
      />
    </>
  )
}
