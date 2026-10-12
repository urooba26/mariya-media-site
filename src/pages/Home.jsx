import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { STATS } from '../content/site'
import { ACHIEVEMENTS } from '../content/achievements'
import { CASE_STUDIES } from '../content/caseStudies'
import { SERVICES } from '../content/services'
import { STORIES } from '../content/stories'
import { COURSES } from '../content/courses'
import { CREW } from '../content/crew'
import { TESTIMONIALS } from '../content/testimonials'
import Counter from '../components/Counter'
import Ticker from '../components/Ticker'
import PhoneMockup from '../components/PhoneMockup'
import CTASection from '../components/CTASection'
import { SectionHead } from '../components/PageHero'
import { ServiceCard, AchievementCard, CaseStudyCard, StoryCard, CourseCard, CrewCard, TestimonialCard } from '../components/Cards'
import { Reveal, Stagger, PageFade } from '../lib/motion'

export default function Home() {
  return (
    <PageFade>
      <Hero />
      <Ticker />
      <StatsBand />
      <AchievementsSection />
      <ServicesPreview />
      <CaseStudiesSection />
      <StoriesSection />
      <CoursesSection />
      <CrewSection />
      <TestimonialsSection />
      <CTASection />
    </PageFade>
  )
}

/* ---------------- Hero ---------------- */
function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <section ref={ref} className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44" aria-labelledby="hero-title">
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" aria-hidden="true" />
      <motion.div style={reduce ? undefined : { y: orbY }} className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-gold-500/[0.09] blur-[110px]" />
        <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-tik-cyan/[0.06] blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-tik-pink/[0.05] blur-[100px]" />
      </motion.div>

      {/* grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)' }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          {/* Copy */}
          <motion.div style={reduce ? undefined : { y: textY }}>
            <motion.span
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-gold-400" />
              TikTok Agency · Est. 2022
            </motion.span>

            <h1 id="hero-title" className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
              {['We Make', 'Brands Go'].map((line, i) => (
                <motion.span
                  key={line}
                  initial={reduce ? false : { opacity: 0, y: 34 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
              <motion.span
                initial={reduce ? false : { opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative block text-gradient-gold"
              >
                Viral
                <motion.span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 h-[3px] w-full origin-left bg-gold-gradient"
                  initial={reduce ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.span>
            </h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-7 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg"
            >
              Strategy, content systems, LIVE operations and host training — the full growth machine behind
              <strong className="text-white"> 500M+ views</strong>, <strong className="text-white">$20M+ revenue</strong> and
              <strong className="text-white"> 100+ brands</strong> scaled on TikTok.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62, duration: 0.7 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <MagneticLink to="/contact" className="btn-gold !px-9 !py-4 text-base">
                Book a Consultation
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><use href="#sprite-arrow" /></svg>
              </MagneticLink>
              <Link to="/case-studies" className="btn-ghost !px-8 !py-4 text-base">View case studies</Link>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-zinc-500"
            >
              {['Trusted by 100+ brands', '92% renewal rate', '5x average ROAS'].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="text-gold-500"><use href="#sprite-check" /></svg>
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <div className="relative">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

// Magnetic hover link wrapper for primary CTAs.
function MagneticLink({ to, children, className }) {
  const reduce = useReducedMotion()
  return (
    <motion.div whileHover={reduce ? undefined : { scale: 1.04 }} whileTap={{ scale: 0.97 }}>
      <Link to={to} className={className}>{children}</Link>
    </motion.div>
  )
}

/* ---------------- Stats band ---------------- */
function StatsBand() {
  return (
    <section className="relative border-b border-white/[0.05] py-14 md:py-16" aria-label="Agency results">
      <div className="container-x">
        <Stagger className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="card p-5 text-center sm:p-6">
              <p className="font-display text-3xl font-extrabold text-gradient-gold sm:text-4xl md:text-[2.75rem]">
                {s.prefix && <Counter prefix={s.prefix} value={s.value} duration={2} suffix="" />}
                {!s.prefix && <Counter value={s.value} duration={2} suffix="" />}
                {s.suffix && <span>{s.suffix}</span>}
              </p>
              <p className="mt-2 text-sm font-medium text-white">{s.label}</p>
              <p className="mt-0.5 text-[11px] text-zinc-600">{s.note}</p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

/* ---------------- Section wrappers ---------------- */
function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`section-pad ${className}`} aria-labelledby={id ? `${id}-h` : undefined}>
      <div className="container-x">
        {typeof children === 'function' ? children() : children}
      </div>
    </section>
  )
}

function AchievementsSection() {
  return (
    <Section id="achievements">
      <SectionHead
        eyebrow="Agency Highlights"
        title="Achievements That Trace Back to a Dashboard"
        lede="Awards are nice. Audited numbers are better. Here is what 47 managed accounts produced in twelve months."
        action={<Link to="/achievements" className="btn-ghost !py-3">All achievements →</Link>}
      />
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.1}>
        {ACHIEVEMENTS.slice(0, 6).map((a, i) => <AchievementCard key={a.slug} item={a} index={i} />)}
      </Stagger>
    </Section>
  )
}

function ServicesPreview() {
  return (
    <Section id="what" className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <SectionHead
        eyebrow="What We Do"
        title="Seven Services. One Growth Machine."
        lede="Every engagement combines the services below — picked for your stage, not sold as a bundle."
        action={<Link to="/services" className="btn-ghost !py-3">Explore all services →</Link>}
      />
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.1}>
        {SERVICES.slice(0, 6).map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
      </Stagger>
      <Reveal className="mt-8">
        <Link to="/services/hosting-assistant" className="card card-hover flex flex-col items-center gap-3 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-lg font-semibold text-white">Plus: Hosting Assistant — your backstage crew</p>
            <p className="mt-1 text-sm text-zinc-500">Co-hosts, moderators and rundown managers plugged into every show you run.</p>
          </div>
          <span className="btn-gold !py-2.5 text-sm">See how it works →</span>
        </Link>
      </Reveal>
    </Section>
  )
}

function CaseStudiesSection() {
  return (
    <Section id="work" className="relative bg-ink-950/60">
      <SectionHead
        eyebrow="Proven Work"
        title="Case Studies, Not Case Claims"
        lede="Challenge, strategy, execution, results — with before-and-after graphs you can interrogate."
        action={<Link to="/case-studies" className="btn-ghost !py-3">All case studies →</Link>}
      />
      <Stagger className="grid gap-6 lg:grid-cols-2" gap={0.12}>
        {CASE_STUDIES.slice(0, 2).map((c, i) => <CaseStudyCard key={c.slug} item={c} index={i} />)}
      </Stagger>
    </Section>
  )
}

function StoriesSection() {
  return (
    <Section id="stories">
      <SectionHead
        eyebrow="Creator Stories"
        title="Careers Made in Public"
        lede="Real creators, real timelines — from the first hundred followers to six-figure years."
        action={<Link to="/stories" className="btn-ghost !py-3">All stories →</Link>}
      />
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.1}>
        {STORIES.slice(0, 3).map((s, i) => <StoryCard key={s.slug} item={s} index={i} />)}
      </Stagger>
    </Section>
  )
}

function CoursesSection() {
  return (
    <Section id="courses" className="relative bg-ink-950/60">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-tik-cyan/40 to-transparent" />
      <SectionHead
        eyebrow="Creator Academy"
        title="Learn the System, Not the Shortcut"
        lede="The same curricula we run internally — hook engineering, LIVE selling, host certification."
        action={<Link to="/courses" className="btn-ghost !py-3">All courses →</Link>}
      />
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" gap={0.1}>
        {COURSES.map((c, i) => <CourseCard key={c.slug} item={c} index={i} />)}
      </Stagger>
    </Section>
  )
}

function CrewSection() {
  return (
    <Section id="crew">
      <SectionHead
        eyebrow="Our Crew"
        title="The Team Behind the Numbers"
        lede="Strategists, coaches, producers and analysts — every account has named humans accountable for it."
        action={<Link to="/crew" className="btn-ghost !py-3">Meet everyone →</Link>}
      />
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.1}>
        {CREW.slice(0, 3).map((m, i) => <CrewCard key={m.slug} item={m} index={i} />)}
      </Stagger>
    </Section>
  )
}

function TestimonialsSection() {
  return (
    <Section id="testimonials" className="relative bg-ink-950/60">
      <SectionHead
        eyebrow="Testimonials"
        title="What Clients Say When We’re Not in the Room"
        action={<Link to="/testimonials" className="btn-ghost !py-3">All testimonials →</Link>}
      />
      <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" gap={0.1}>
        {TESTIMONIALS.slice(0, 3).map((t, i) => <TestimonialCard key={t.slug} item={t} index={i} />)}
      </Stagger>
    </Section>
  )
}
