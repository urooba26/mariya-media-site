import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import CrewMember from '../components/CrewMember.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { ShieldCheck, Star, Users, Mic } from 'lucide-react'

import { CREW, CREW_GROUPS } from '../data/crew.js'

const GROUP_ICONS = {
  Leadership: <Star size={14} aria-hidden="true" />,
  Managers: <ShieldCheck size={14} aria-hidden="true" />,
  'Senior Hosts': <Mic size={14} aria-hidden="true" />,
  Hosts: <Users size={14} aria-hidden="true" />,
}

// Our Crew — filter tabs + alternating side-by-side zig-zag member blocks.
export default function Crew() {
  const [active, setActive] = useState('Leadership')
  const reduced = useReducedMotion()

  const counts = useMemo(() => {
    const c = {}
    CREW_GROUPS.forEach((g) => { c[g] = CREW.filter((m) => m.group === g).length })
    return c
  }, [])

  const members = CREW.filter((m) => m.group === active)

  return (
    <>
      <Seo
        title="Our Crew"
        description="Meet the Mariya Media Ltd crew — leadership, managers, senior hosts and hosts."
        path="/crew"
      />

      <PageHero
        eyebrow="Our Crew"
        title="The people behind every LIVE"
        intro="Leadership that started with a dream, managers who keep the wheels turning, and hosts who make every room feel like home."
        chips={[
          { label: `${CREW.length} crew members`, icon: <Users size={15} aria-hidden="true" /> },
          { label: '4 teams', icon: <Star size={15} aria-hidden="true" /> },
          { label: 'Every member on TikTok', icon: <Mic size={15} aria-hidden="true" /> },
        ]}
      />

      <section className="section">
        <div className="container">
          {/* ── Tabs ─────────────────────────────────────────────────────── */}
          <div className="crew-tabs" role="tablist" aria-label="Crew teams">
            {CREW_GROUPS.map((g) => (
              <button
                key={g}
                type="button"
                role="tab"
                aria-selected={active === g}
                aria-controls={`panel-${g.replace(/\s+/g, '-').toLowerCase()}`}
                id={`tab-${g.replace(/\s+/g, '-').toLowerCase()}`}
                className={`crew-tab ${active === g ? 'active' : ''}`}
                onClick={() => setActive(g)}
              >
                {g}
                <span className="crew-tab__count">{counts[g]}</span>
              </button>
            ))}
          </div>

          {/* ── Members ──────────────────────────────────────────────────── */}
          <div
            id={`panel-${active.replace(/\s+/g, '-').toLowerCase()}`}
            role="tabpanel"
            aria-labelledby={`tab-${active.replace(/\s+/g, '-').toLowerCase()}`}
            tabIndex={0}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reduced ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -14 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {members.map((m, i) => (
                  <CrewMember key={m.id} member={m} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CtaBand
        title="Think you belong on this crew?"
        intro="We are always meeting hosts and creators who want to take this seriously. Send us your TikTok ID and we’ll take it from there."
        primary={{ to: '/contact', label: 'Apply to join' }}
        secondary={{ to: '/what-we-do', label: 'See how we train you' }}
      />
    </>
  )
}
