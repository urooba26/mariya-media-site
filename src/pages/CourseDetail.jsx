import { useParams, Link } from 'react-router-dom'
import { getCourse, COURSES } from '../content/courses'
import { CONTACT } from '../content/site'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { CourseCard } from '../components/Cards'
import { Reveal, Stagger, PageFade } from '../lib/motion'
import NotFound from './NotFound'

export default function CourseDetail() {
  const { slug } = useParams()
  const course = getCourse(slug)
  if (!course) return <NotFound />
  const related = COURSES.filter((c) => c.slug !== slug).slice(0, 2)

  return (
    <PageFade>
      <PageHero
        eyebrow={`Courses / ${course.level}`}
        title={course.title}
        lede={course.tagline}
        stats={[
          [course.duration, 'Duration'],
          [String(course.lessons), 'Lessons'],
          [course.students, 'Students'],
          [String(course.rating), 'Rating'],
        ]}
      />

      {/* Overview + pricing card */}
      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <span className="eyebrow">About this course</span>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">{course.summary}</p>

            <h3 className="mt-10 text-xl font-bold">What you’ll walk away with</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {course.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-sm text-zinc-300">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-gold-500"><use href="#sprite-check" /></svg>
                  {o}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-xl font-bold">What’s included</h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {course.includes.map((inc) => (
                <span key={inc} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-400">{inc}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card sticky top-24 p-7">
              <span className="rounded-full border border-tik-cyan/30 bg-tik-cyan/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-tik-cyan">
                {course.level}
              </span>
              <p className="mt-5 font-display text-5xl font-extrabold text-white">
                {course.currency}{course.price}
              </p>
              <p className="mt-1 text-xs text-zinc-600">One-time · payment plan available at checkout</p>
              <p className="mt-4 rounded-xl border border-gold-500/25 bg-gold-500/[0.08] px-4 py-3 text-xs text-gold-300">
                {course.seats}
              </p>
              <Link to="/contact" className="btn-gold mt-6 w-full !py-4 text-base">Enroll now</Link>
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost mt-3 w-full">Ask a question first</a>
              <ul className="mt-6 space-y-2.5 border-t border-white/[0.07] pt-5 text-xs text-zinc-500">
                <li className="flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="text-gold-500"><use href="#sprite-check" /></svg>
                  14-day refund policy
                </li>
                <li className="flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="text-gold-500"><use href="#sprite-check" /></svg>
                  Lifetime access to recordings
                </li>
                <li className="flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="text-gold-500"><use href="#sprite-check" /></svg>
                  Certificate on completion
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Curriculum */}
      <section className="border-y border-white/[0.05] bg-ink-950/60 section-pad" id="curriculum">
        <div className="container-x max-w-4xl">
          <Reveal>
            <span className="eyebrow">Curriculum</span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Week by week</h2>
          </Reveal>
          <div className="mt-8 space-y-4">
            {course.curriculum.map(([week, title, lessons], i) => (
              <Reveal key={title} delay={i * 0.06}>
                <details className="card group p-5 sm:p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="flex items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 font-display text-sm font-bold text-gold-400">
                        {i + 1}
                      </span>
                      <span>
                        <span className="block text-[11px] uppercase tracking-widest text-gold-500">{week}</span>
                        <span className="block font-display font-semibold text-white">{title}</span>
                      </span>
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-gold-400 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <ul className="mt-4 space-y-2.5 border-t border-white/[0.06] pt-4 pl-14">
                    {lessons.map((l) => (
                      <li key={l} className="flex items-start gap-2.5 text-sm text-zinc-400">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="mt-1 shrink-0 text-gold-500"><use href="#sprite-play" /></svg>
                        {l}
                      </li>
                    ))}
                  </ul>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad" id="enroll">
        <div className="container-x max-w-3xl">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Before you enroll</h2>
          </Reveal>
          <div className="mt-8 space-y-4">
            {course.faqs.map(([q, a], i) => (
              <Reveal key={q} delay={i * 0.06}>
                <details className="card group p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-white">
                    {q}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-gold-400 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">{a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-white/[0.05] bg-ink-950/60 section-pad">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-bold">More courses</h2>
            <Link to="/courses" className="text-sm font-semibold text-gold-400 hover:text-gold-300">View all →</Link>
          </div>
          <Stagger className="grid gap-6 sm:grid-cols-2" gap={0.1}>
            {related.map((c, i) => <CourseCard key={c.slug} item={c} index={i} />)}
          </Stagger>
        </div>
      </section>

      <CTASection
        title="Secure Your Seat"
        lede={`${course.seats} — cohorts stay small so every practical gets coached.`}
        primary={{ to: '/contact', label: 'Enroll / ask a question' }}
        secondary={{ to: '/stories', label: 'Graduate stories' }}
      />
    </PageFade>
  )
}
