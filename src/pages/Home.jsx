import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {
  Users, Eye, Globe, LifeBuoy, TrendingUp, ArrowRight, Music2,
  Heart, Gift, PlayCircle, Sparkles, Award, MessageCircle,
} from 'lucide-react'

import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Counter from '../components/Counter.jsx'
import Marquee from '../components/Marquee.jsx'
import Photo from '../components/Photo.jsx'
import Icon from '../components/Icon.jsx'
import AchievementsCarousel from '../components/AchievementsCarousel.jsx'
import CtaBand from '../components/CtaBand.jsx'

import { HERO, STATS } from '../data/site.js'
import { CREW } from '../data/crew.js'
import { CORE_SERVICES, SERVICES } from '../data/services.js'
import { EXPERTISE } from '../data/expertise.js'
import { SITE, SOCIALS, whatsappLink } from '../config.js'
import { BrandIcon } from '../components/Brand.jsx'

const STAT_ICONS = { Users, Eye, Globe, LifeBuoy, TrendingUp }

// Quick links to every main page (agency links block).
const QUICK_LINKS = [
  { to: '/what-we-do', icon: <PlayCircle size={22} />, title: 'What We Do', text: 'Host Training, Host Assistant and full agency support.' },
  { to: '/expertise', icon: <Sparkles size={22} />, title: 'Our Expertise', text: 'Growth, content, LIVE, verification and restriction help.' },
  { to: '/crew', icon: <Users size={22} />, title: 'Our Crew', text: 'Meet the leadership, managers, senior hosts and hosts.' },
  { to: '/about', icon: <Award size={22} />, title: 'About Us', text: 'Our story, mission, vision and the people behind it all.' },
  { to: '/contact', icon: <MessageCircle size={22} />, title: 'Contact', text: 'Send a message, apply to join, or just say salam.' },
]

export default function Home() {
  const heroRef = useRef(null)
  const reduced = useReducedMotion()

  // Parallax on hero imagery (desktop only)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 90])
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -40])

  const previewCrew = CREW.slice(0, 6)

  return (
    <>
      <Seo
        title="TikTok Agency — Empowering Creators"
        description="Mariya Media Ltd trains hosts, supports LIVE creators and builds communities where talent turns into opportunity."
        path="/"
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="hero" ref={heroRef}>
        <div className="hero__mesh" aria-hidden="true">
          <span className="hero__blob hero__blob--1" />
          <span className="hero__blob hero__blob--2" />
          <span className="hero__blob hero__blob--3" />
        </div>
        <span className="hero__grid" aria-hidden="true" />
        <span className="hero__vignette" aria-hidden="true" />

        <div className="container hero__inner">
          <motion.div style={{ y: textY }}>
            <Reveal variant="fadeUp" duration={0.6}>
              <span className="hero__kicker">
                <span className="note"><Music2 aria-hidden="true" /></span>
                {HERO.kicker}
              </span>
            </Reveal>

            <h1>
              <Reveal><span className="line">{HERO.titleLead}</span></Reveal>
              <Reveal delay={0.1}><span className="line gold-text">{HERO.titleGold}</span></Reveal>
              <Reveal delay={0.2}><span className="line">{HERO.titleTail}</span></Reveal>
            </h1>

            <Reveal delay={0.3}>
              <p className="hero__sub">{HERO.subtitle}</p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="hero__cta">
                <Button to="/contact" size="lg">Join Our Agency</Button>
                <Button to="/crew" variant="ghost" size="lg">Meet Our Crew</Button>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="hero__proof">
                {STATS.slice(0, 3).map((s) => (
                  <div key={s.label}>
                    <b><Counter value={s.value} suffix={s.suffix} /></b>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </motion.div>

          {/* hero visual: creator photo slot + eagle/gold motif */}
          <motion.div className="hero__visual" style={{ y: portraitY }}>
            <Reveal variant="scale" duration={0.9}>
              <div className="hero__portrait">
                <Photo
                  src={null}
                  alt="Mariya Media Ltd creator"
                  hint="Add hero photo — public/photos/hero.jpg"
                  eager
                />
              </div>

              <span className="live-badge" aria-label={`${HERO.liveViewers} viewers watching live`}>
                <i aria-hidden="true" /> LIVE <small>{HERO.liveViewers} watching</small>
              </span>

              <span className="hero__logo-echo" aria-hidden="true">
                <img src={`${import.meta.env.BASE_URL}${SITE.logo}`} alt="" width={132} height={132} />
              </span>

              <span className="hero__float hero__float--1" data-kind="heart" aria-hidden="true"><Heart size={20} /></span>
              <span className="hero__float hero__float--2" data-kind="gift" aria-hidden="true"><Gift size={20} /></span>
              <span className="hero__float hero__float--3" data-kind="note" aria-hidden="true"><Music2 size={20} /></span>
            </Reveal>
          </motion.div>
        </div>

        <div className="hero__scroll" aria-hidden="true">
          Scroll
          <span />
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────────────────── */}
      <Marquee />

      {/* ── AGENCY HIGHLIGHTS (stats) ────────────────────────────────────── */}
      <section className="section" id="highlights">
        <div className="container">
          <SectionHeading
            eyebrow="Agency Highlights"
            title="Numbers that carry a story behind them"
            intro="Sample figures for layout — replace them with your verified numbers in src/data/site.js."
            center
          />
          <Reveal className="stats-grid" stagger>
            {STATS.map((s) => {
              const I = STAT_ICONS[s.icon] || Users
              return (
                <Reveal.Item key={s.label} className="card stat">
                  <span className="stat__icon"><I aria-hidden="true" /></span>
                  <span className="stat__value"><Counter value={s.value} suffix={s.suffix} /></span>
                  <span className="stat__label">{s.label}</span>
                </Reveal.Item>
              )
            })}
          </Reveal>
        </div>
      </section>

      {/* ── AGENCY LINKS ─────────────────────────────────────────────────── */}
      <section className="section section--alt" id="links">
        <div className="container">
          <SectionHeading
            eyebrow="Explore"
            title="Everything, one tap away"
            intro="Jump straight to the part of the site you came for."
            center
          />

          <Reveal className="link-grid" stagger>
            {QUICK_LINKS.map((q) => (
              <Reveal.Item key={q.to}>
                <Link className="quicklink" to={q.to}>
                  <span className="quicklink__icon">{q.icon}</span>
                  <span style={{ flex: 1 }}>
                    <h3>{q.title}</h3>
                    <p>{q.text}</p>
                  </span>
                  <ArrowRight className="quicklink__arrow" size={20} aria-hidden="true" />
                </Link>
              </Reveal.Item>
            ))}
          </Reveal>

          <Reveal delay={0.2} style={{ marginTop: 40, display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--faint)' }}>Follow the agency</span>
            <div className="socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.id}
                  data-net={s.id}
                  href={s.id === 'whatsapp' ? whatsappLink() : s.url}
                  target={s.id === 'whatsapp' ? undefined : '_blank'}
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  title={s.label}
                >
                  <BrandIcon id={s.id} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHAT WE DO PREVIEW ───────────────────────────────────────────── */}
      <section className="section" id="what-we-do">
        <div className="container">
          <SectionHeading
            eyebrow="What We Do"
            title="Two core offerings, built around you"
            intro="Host Training and Host Assistant sit at the heart of the agency — everything else supports them."
            center
          />

          <Reveal className="stats-grid" stagger style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {CORE_SERVICES.map((s) => (
              <Reveal.Item key={s.id} className="card">
                <span className="chip"><Icon name={s.icon} size={26} /></span>
                <h3 style={{ fontSize: 24, marginBottom: 8 }}>{s.title}</h3>
                <span style={{ fontSize: 12.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--cyan)' }}>{s.kicker}</span>
                <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.75 }}>{s.lead}</p>
              </Reveal.Item>
            ))}
          </Reveal>

          <Reveal delay={0.25} style={{ marginTop: 34, display: 'grid', gap: 14 }}>
            <div className="teaser__tags" style={{ justifyContent: 'center', marginBottom: 0 }}>
              {SERVICES.map((s) => <span key={s.title}>{s.title}</span>)}
            </div>
            <div style={{ textAlign: 'center' }}>
              <Button to="/what-we-do" variant="ghost">See the full breakdown</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── EXPERTISE PREVIEW ────────────────────────────────────────────── */}
      <section className="section section--alt" id="expertise">
        <div className="container">
          <SectionHeading
            eyebrow="Our Expertise"
            title="Five areas we know inside out"
            intro="From first followers to verification — guidance that keeps accounts safe and growing."
            center
          />

          <Reveal className="stats-grid" stagger style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))' }}>
            {EXPERTISE.map((e) => (
              <Reveal.Item key={e.title} className="card">
                <span className="chip"><Icon name={e.icon} size={24} /></span>
                <h3 style={{ fontSize: 20, marginBottom: 10 }}>{e.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.7 }}>{e.lead}</p>
              </Reveal.Item>
            ))}
          </Reveal>

          <Reveal delay={0.2} style={{ textAlign: 'center', marginTop: 36 }}>
            <Button to="/expertise" variant="ghost">Explore our expertise</Button>
          </Reveal>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ─────────────────────────────────────────────────── */}
      <section className="section" id="achievements">
        <div className="container">
          <SectionHeading
            eyebrow="Achievements"
            title="Milestones worth celebrating"
            intro="Swipeable highlights from our community. Sample content — see PLACEHOLDERS.md."
          />
          <Reveal variant="fadeUp" amount={0.05}>
            <AchievementsCarousel />
          </Reveal>
        </div>
      </section>

      {/* ── CREW PREVIEW (avatar slider) ─────────────────────────────────── */}
      <section className="section section--alt" id="crew">
        <div className="container">
          <SectionHeading
            eyebrow="Our Crew"
            title="The people behind every LIVE"
            intro="Leadership, managers, senior hosts and hosts — one team, one promise."
            center
          />

          <div className="swiper--fallback">
            <Reveal className="crew-strip" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: 16 }}>
              {previewCrew.map((m) => (
                <Link className="avatar-card" to="/crew" key={m.id} aria-label={`View ${m.name} on the crew page`}>
                  <span className="avatar-card__photo">
                    <Photo src={m.photo} alt={m.name} round />
                  </span>
                  <b>{m.name}</b>
                  <span>{m.role}</span>
                </Link>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.2} style={{ textAlign: 'center', marginTop: 40 }}>
            <Button to="/crew" size="lg">Meet the full crew</Button>
          </Reveal>
        </div>
      </section>

      {/* ── MINI CONTACT CTA ─────────────────────────────────────────────── */}
      <section className="section section--tight">
        <div className="container">
          <CtaBand
            title="Your first LIVE could be the start of everything"
            intro="Tell us a little about yourself and we’ll guide you to the right first step — training, assistant support or full creator growth."
            primary={{ to: '/contact', label: 'Start the conversation' }}
            secondary={{ href: whatsappLink(), label: 'WhatsApp us' }}
          />
        </div>
      </section>
    </>
  )
}
