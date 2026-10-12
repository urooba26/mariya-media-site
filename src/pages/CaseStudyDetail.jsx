import { useParams, Link } from 'react-router-dom'
import { getCaseStudy, CASE_STUDIES } from '../content/caseStudies'
import PageHero from '../components/PageHero'
import { LineChart, BeforeAfter } from '../components/Charts'
import CTASection from '../components/CTASection'
import { CaseStudyCard } from '../components/Cards'
import { Reveal, Stagger, PageFade } from '../lib/motion'
import NotFound from './NotFound'

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const cs = getCaseStudy(slug)
  if (!cs) return <NotFound />
  const related = CASE_STUDIES.filter((c) => c.slug !== slug).slice(0, 2)

  return (
    <PageFade>
      <PageHero
        eyebrow={`Case Study / ${cs.client}`}
        title={cs.title}
        lede={cs.tagline}
        stats={[
          [cs.results[0][0], cs.results[0][1]],
          [cs.results[1][0], cs.results[1][1]],
          [cs.results[2][0], cs.results[2][1]],
          [cs.results[3][0], cs.results[3][1]],
        ]}
      >
        <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-500">
          {[['Industry', cs.industry], ['Region', cs.region], ['Duration', cs.duration]].map(([k, v]) => (
            <span key={k} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5">
              <span className="text-zinc-600">{k}: </span>{v}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Client overview + challenge */}
      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Client overview</span>
            <div className="mt-5 flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-gradient font-display text-xl font-bold text-ink-950">
                {cs.logoText}
              </span>
              <div>
                <h2 className="text-2xl font-bold">{cs.client}</h2>
                <p className="text-sm text-zinc-500">{cs.industry} · {cs.region}</p>
              </div>
            </div>
            <p className="mt-6 text-base leading-relaxed text-zinc-400">
              {cs.challenge}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">The challenge</span>
            <p className="mt-5 text-base leading-relaxed text-zinc-400">{cs.strategy}</p>
            <div className="mt-6 rounded-2xl border border-gold-500/20 bg-gold-500/[0.06] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-400">Headline result</p>
              <p className="mt-2 font-display text-3xl font-bold text-gradient-gold">{cs.results[0][0]}</p>
              <p className="text-sm text-zinc-400">{cs.results[0][1]}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Strategy & solution */}
      <section className="border-y border-white/[0.05] bg-ink-950/60 section-pad">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Solution</span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">What we built</h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-5 sm:grid-cols-2" gap={0.09}>
            {cs.solution.map(([title, desc], i) => (
              <div key={title} className="card p-6">
                <span className="font-display text-sm font-bold text-gold-500">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{desc}</p>
              </div>
            ))}
          </Stagger>

          {/* Execution process */}
          <Reveal>
            <h3 className="mt-14 text-xl font-bold sm:text-2xl">Execution process</h3>
          </Reveal>
          <ol className="mt-6 grid gap-5 md:grid-cols-4">
            {cs.execution.map(([when, title, desc], i) => (
              <Reveal key={title} delay={i * 0.08}>
                <li className="relative card h-full p-5">
                  <span className="absolute -top-3 left-4 rounded-full bg-ink-800 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold-400 ring-1 ring-gold-500/40">
                    {when}
                  </span>
                  <p className="mt-2 font-display text-base font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Results & graphs */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Results</span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Growth, charted</h2>
          </Reveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="mb-3 flex items-baseline justify-between">
                <h3 className="text-base font-semibold text-white">Monthly revenue growth</h3>
                <span className="text-xs text-zinc-600">{cs.beforeAfter.labels[0]} → {cs.beforeAfter.labels.at(-1)}</span>
              </div>
              <LineChart
                series={cs.beforeAfter.monthlyRevenue}
                labels={cs.beforeAfter.labels}
                color="#F6B620"
                label={`${cs.client} monthly revenue growth chart`}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mb-3 flex items-baseline justify-between">
                <h3 className="text-base font-semibold text-white">Audience growth</h3>
                <span className="text-xs text-zinc-600">followers (thousands)</span>
              </div>
              <LineChart
                series={cs.beforeAfter.followers}
                labels={cs.beforeAfter.labels}
                color="#25F4EE"
                label={`${cs.client} follower growth chart`}
              />
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mb-3 flex items-baseline justify-between">
                <h3 className="text-base font-semibold text-white">Engagement rate</h3>
                <span className="text-xs text-zinc-600">percent</span>
              </div>
              <LineChart
                series={cs.beforeAfter.engagement}
                labels={cs.beforeAfter.labels}
                color="#FE2C55"
                label={`${cs.client} engagement rate chart`}
              />
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mb-3">
                <h3 className="text-base font-semibold text-white">Before &amp; after</h3>
              </div>
              <BeforeAfter rows={cs.comparison} />
            </Reveal>
          </div>

          {/* Results strip */}
          <Stagger className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4" gap={0.08}>
            {cs.results.map(([v, l]) => (
              <div key={l} className="card p-5 text-center">
                <p className="font-display text-3xl font-bold text-gradient-gold">{v}</p>
                <p className="mt-1 text-xs text-zinc-500">{l}</p>
              </div>
            ))}
          </Stagger>

          {/* Quote */}
          <Reveal className="mt-12">
            <blockquote className="card relative mx-auto max-w-3xl p-8 text-center sm:p-10">
              <span aria-hidden="true" className="absolute -top-6 left-1/2 -translate-x-1/2 font-serif text-7xl leading-none text-gold-500/40">“</span>
              <p className="font-serif text-xl italic leading-relaxed text-zinc-200 sm:text-2xl">{cs.quote.text}</p>
              <footer className="mt-5 text-sm text-zinc-500">— {cs.quote.by}</footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-white/[0.05] bg-ink-950/60 section-pad">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-bold">More case studies</h2>
            <Link to="/case-studies" className="text-sm font-semibold text-gold-400 hover:text-gold-300">View all →</Link>
          </div>
          <Stagger className="grid gap-6 lg:grid-cols-2" gap={0.1}>
            {related.map((c, i) => <CaseStudyCard key={c.slug} item={c} index={i} />)}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </PageFade>
  )
}
