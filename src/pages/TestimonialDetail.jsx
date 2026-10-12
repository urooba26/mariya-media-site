import { useParams, Link } from 'react-router-dom'
import { getTestimonial, TESTIMONIALS } from '../content/testimonials'
import { getCaseStudy } from '../content/caseStudies'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { TestimonialCard } from '../components/Cards'
import { Reveal, Stagger, PageFade } from '../lib/motion'
import NotFound from './NotFound'

export default function TestimonialDetail() {
  const { slug } = useParams()
  const t = getTestimonial(slug)
  if (!t) return <NotFound />
  const related = TESTIMONIALS.filter((x) => x.slug !== slug).slice(0, 3)

  // Resolve the linked project (case study or story) for a real destination.
  const cs = t.project ? getCaseStudy(t.project) : null
  const projectHref = cs ? `/case-studies/${cs.slug}` : `/stories/${t.project}`

  return (
    <PageFade>
      <PageHero
        eyebrow={`Testimonials / ${t.company}`}
        title={`“${t.short}”`}
        lede={`${t.name} — ${t.role}, ${t.company}`}
        stats={t.results}
      />

      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <span className="eyebrow">Expanded review</span>
            <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-zinc-400 md:text-lg">
              {t.long.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient font-display text-lg font-bold text-ink-950">
                {t.initials}
              </span>
              <div>
                <p className="font-display font-semibold text-white">{t.name}</p>
                <p className="text-sm text-zinc-500">{t.role} · {t.company}</p>
                <div className="mt-1 flex gap-0.5 text-gold-400" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><use href="#sprite-star" /></svg>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card sticky top-24 p-6 sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Measured results</p>
              <dl className="mt-5 space-y-4">
                {t.results.map(([v, l]) => (
                  <div key={l} className="flex items-baseline justify-between border-b border-white/[0.06] pb-3 last:border-0">
                    <dt className="text-sm text-zinc-500">{l}</dt>
                    <dd className="font-display text-2xl font-bold text-gradient-gold">{v}</dd>
                  </div>
                ))}
              </dl>
              <Link to={projectHref} className="btn-gold mt-6 w-full">{t.projectLabel}</Link>
              <Link to="/contact" className="btn-ghost mt-3 w-full">Start your own results</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/[0.05] bg-ink-950/60 section-pad">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-bold">More reviews</h2>
            <Link to="/testimonials" className="text-sm font-semibold text-gold-400 hover:text-gold-300">View all →</Link>
          </div>
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" gap={0.1}>
            {related.map((x, i) => <TestimonialCard key={x.slug} item={x} index={i} />)}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </PageFade>
  )
}
