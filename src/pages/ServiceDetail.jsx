import { useParams, Link, Navigate } from 'react-router-dom'
import { getService, SERVICES } from '../content/services'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { ServiceCard } from '../components/Cards'
import { Stagger, Reveal, PageFade } from '../lib/motion'
import NotFound from './NotFound'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)
  if (!service) return <NotFound />

  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <PageFade>
      <PageHero
        eyebrow={`Services / ${service.title}`}
        title={service.title}
        lede={service.tagline}
        stats={service.outcomes.map((o) => {
          const [v, ...rest] = o.split(' ')
          return [v, rest.join(' ')]
        })}
      />

      {/* Overview */}
      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Overview</span>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-400 md:text-lg">
              {service.long.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="card sticky top-24 p-6 sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Engagement</p>
              <p className="mt-2 font-display text-3xl font-bold text-gradient-gold">{service.price}</p>
              <p className="mt-1 text-xs text-zinc-600">Scoped per account · cancel anytime after 90 days</p>
              <Link to="/contact" className="btn-gold mt-6 w-full">Book a consultation</Link>
              <Link to="/case-studies" className="btn-ghost mt-3 w-full">See related results</Link>
              <ul className="mt-6 space-y-2.5 border-t border-white/[0.07] pt-5">
                {service.faqs.slice(0, 2).map(([q]) => (
                  <li key={q} className="flex items-start gap-2 text-xs text-zinc-500">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-gold-500"><use href="#sprite-check" /></svg>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-y border-white/[0.05] bg-ink-950/60 section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">What you get</span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Deliverables</h2>
            <ul className="mt-6 space-y-4">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><use href="#sprite-check" /></svg>
                  </span>
                  <span className="text-sm text-zinc-300">{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <span className="eyebrow">How it runs</span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">The process</h2>
            <ol className="mt-6 space-y-5 border-l border-gold-500/25 pl-6">
              {service.process.map(([when, title, desc]) => (
                <li key={title} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-gold-500 bg-ink-900" />
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-gold-500">{when}</p>
                  <p className="mt-1 font-display text-lg font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm text-zinc-500">{desc}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad">
        <div className="container-x max-w-3xl">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Common questions</h2>
          </Reveal>
          <div className="mt-8 space-y-4">
            {service.faqs.map(([q, a], i) => (
              <Reveal key={q} delay={i * 0.07}>
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
          <SectionHeadLite title="Related services" />
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.1}>
            {others.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </PageFade>
  )
}

function SectionHeadLite({ title }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
    </div>
  )
}
