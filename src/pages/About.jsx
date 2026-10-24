import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Photo from '../components/Photo.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { Compass, Target, Eye, Sparkles } from 'lucide-react'

import { STORY, MISSION, VISION, VALUES, TIMELINE, FOUNDERS, FOUNDER_SIGNOFF } from '../data/about.js'

// About — editorial story, mission, vision, timeline, values + both founders.
export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="The story, mission, vision and values of Mariya Media Ltd — plus the founder stories behind the agency."
        path="/about"
      />

      <PageHero
        eyebrow="About Us"
        title="More than an agency — a community"
        intro="Mariya Media Ltd was created with a simple vision: to build more than an agency — to build a community where creators can grow together."
        chips={[
          { label: 'Creator-first', icon: <Sparkles size={15} aria-hidden="true" /> },
          { label: 'Trust · Creativity · Growth', icon: <Target size={15} aria-hidden="true" /> },
        ]}
      />

      {/* ── Our Story + pull quote ───────────────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: 980 }}>
          <SectionHeading eyebrow="Our Story" title="How it began" />
          <Reveal>
            {STORY.map((p, i) => (
              <p key={i} style={{ fontSize: 17, lineHeight: 1.85, marginBottom: 18, maxWidth: '75ch' }}>{p}</p>
            ))}
          </Reveal>

          <Reveal className="pull-quote" variant="mask">
            <span className="pull-quote__mark" aria-hidden="true">”</span>
            <blockquote>{VISION.quote}</blockquote>
            <cite>The vision behind {FOUNDER_SIGNOFF.brand}</cite>
          </Reveal>
        </div>
      </section>

      {/* ── Mission + Vision ─────────────────────────────────────────────── */}
      <section className="section section--alt" id="mission">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            <Reveal className="card">
              <span className="chip"><Target size={26} aria-hidden="true" /></span>
              <h3 style={{ fontSize: 30, marginBottom: 14 }}>Our Mission</h3>
              <p style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 22 }}>{MISSION.intro}</p>
              <ul style={{ display: 'grid', gap: 11 }}>
                {MISSION.aims.map((a) => (
                  <li key={a} style={{ display: 'flex', gap: 11, fontSize: 15, color: 'var(--mute)', alignItems: 'flex-start' }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--gold-grad)', marginTop: 8, flexShrink: 0 }} aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="card" delay={0.12}>
              <span className="chip"><Eye size={26} aria-hidden="true" /></span>
              <h3 style={{ fontSize: 30, marginBottom: 14 }}>Our Vision</h3>
              <blockquote style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(21px, 2.6vw, 27px)', lineHeight: 1.5, color: 'var(--gold-light)', marginBottom: 18 }}>
                “{VISION.quote}”
              </blockquote>
              <p style={{ fontSize: 16, lineHeight: 1.8 }}>{VISION.text}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────────────────── */}
      <section className="section" id="journey">
        <div className="container" style={{ maxWidth: 900 }}>
          <SectionHeading
            eyebrow="The Journey"
            title="From one LIVE to a global community"
            intro="Sample dates for layout — confirm the real milestones in src/data/about.js (see PLACEHOLDERS.md)."
          />
          <Reveal className="timeline" stagger>
            {TIMELINE.map((t) => (
              <Reveal.Item key={t.year + t.title} className="tl-item">
                <span className="tl-item__year">{t.year}</span>
                <h4>{t.title}</h4>
                <p>{t.text}</p>
              </Reveal.Item>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────────── */}
      <section className="section section--alt" id="values">
        <div className="container">
          <SectionHeading eyebrow="Our Values" title="Five words we work by" center />
          <Reveal className="values-grid" stagger>
            {VALUES.map(([title, text], i) => (
              <Reveal.Item key={title} className="card value-card">
                <span className="value-card__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal.Item>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Founder stories ──────────────────────────────────────────────── */}
      <section className="section" id="founders">
        <div className="container">
          <SectionHeading
            eyebrow="Founder Stories"
            title="Two people, one promise"
            intro="In their own words — the belief, the journey and the promise behind Mariya Media Ltd."
            center
          />

          {FOUNDERS.map((f, i) => (
            <Reveal key={f.id} className={`founder ${i % 2 === 1 ? 'founder--flip' : ''}`} amount={0.1}>
              <aside className="founder__aside">
                <div className="founder__portrait">
                  <Photo src={f.photo} alt={f.name} hint={`Add ${f.name}'s portrait`} />
                </div>
                <div className="founder__caption">
                  <b>{f.name}</b>
                  <span>{f.role}</span>
                  <p>{f.tagline}</p>
                </div>
              </aside>

              <div className="founder__body">
                <h3>{f.name}</h3>
                <p className="lead">{f.intro}</p>

                <Reveal className="pull-quote" style={{ margin: '0 0 30px' }}>
                  <blockquote style={{ fontSize: 'clamp(19px, 2.4vw, 26px)' }}>{f.pull}</blockquote>
                  <cite>{f.name} · {f.role}</cite>
                </Reveal>

                {f.sections.map((s) => (
                  <div className="founder__section" key={s.heading}>
                    <h4>{s.heading}</h4>
                    {s.paras.map((p, pi) => <p key={pi}>{p}</p>)}
                    {s.pull && <div className="mini-pull">{s.pull}</div>}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}

          <Reveal className="pull-quote" style={{ marginTop: 60, textAlign: 'center' }}>
            <span className="pull-quote__mark" aria-hidden="true">”</span>
            <blockquote>{FOUNDER_SIGNOFF.line}</blockquote>
            <cite>{FOUNDER_SIGNOFF.brand}</cite>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Read the story? Now come be part of it."
        intro="Whether you are starting from zero or already hosting LIVEs, there is a place for you in this community."
        primary={{ to: '/contact', label: 'Join our agency' }}
        secondary={{ to: '/crew', label: 'Meet the crew' }}
      />
    </>
  )
}
