import { useParams, Link } from 'react-router-dom'
import { getAchievement, ACHIEVEMENTS } from '../content/achievements'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { AchievementCard } from '../components/Cards'
import { Reveal, Stagger, PageFade } from '../lib/motion'
import NotFound from './NotFound'

export default function AchievementDetail() {
  const { slug } = useParams()
  const item = getAchievement(slug)
  if (!item) return <NotFound />
  const related = ACHIEVEMENTS.filter((a) => a.slug !== slug).slice(0, 3)

  return (
    <PageFade>
      <PageHero
        eyebrow={`Achievements / ${item.category}`}
        title={item.title}
        lede={item.summary}
        stats={item.stats}
      />

      {/* Narrative + metrics */}
      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <span className="eyebrow">The story</span>
            <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-zinc-400 md:text-lg">
              {item.narrative.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="card p-6 sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Key metrics</p>
              <dl className="mt-5 space-y-4">
                {Object.entries(item.metrics).map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between border-b border-white/[0.06] pb-3 last:border-0">
                    <dt className="text-sm capitalize text-zinc-500">{k.replace(/([A-Z])/g, ' $1')}</dt>
                    <dd className="font-display text-xl font-bold text-gradient-gold">{String(v)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-white/[0.05] bg-ink-950/60 section-pad">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Milestones</span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">How it happened</h2>
          </Reveal>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {item.milestones.map(([when, title, desc], i) => (
              <Reveal key={title} delay={i * 0.08}>
                <li className="card relative h-full p-5">
                  <span className="absolute -top-3 left-5 rounded-full bg-gold-gradient px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink-950">
                    {when}
                  </span>
                  <p className="mt-3 font-display text-base font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Media / evidence */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Evidence</span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Media &amp; artifacts</h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-6 md:grid-cols-3" gap={0.1}>
            {item.media.map(([title, desc], i) => (
              <figure key={title} className="card group overflow-hidden">
                <div className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${['from-gold-500/25 to-ink-900', 'from-tik-cyan/20 to-ink-900', 'from-tik-pink/20 to-ink-900'][i % 3]}`}>
                  <span className="font-display text-5xl font-extrabold text-white/10 transition-transform duration-500 group-hover:scale-110">
                    {item.headline.value.replace(/[^0-9A-Z]/g, '').slice(0, 4)}
                  </span>
                  <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-widest text-gold-400 backdrop-blur">
                    {['Dashboard', 'Highlight', 'Artifact'][i % 3]}
                  </span>
                </div>
                <figcaption className="p-5">
                  <p className="font-display text-sm font-semibold text-white">{title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">{desc}</p>
                </figcaption>
              </figure>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-white/[0.05] bg-ink-950/60 section-pad">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-bold sm:text-3xl">More achievements</h2>
            <Link to="/achievements" className="text-sm font-semibold text-gold-400 hover:text-gold-300">View all →</Link>
          </div>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.1}>
            {related.map((a, i) => <AchievementCard key={a.slug} item={a} index={i} />)}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </PageFade>
  )
}
