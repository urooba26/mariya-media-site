import { useParams, Link } from 'react-router-dom'
import { getStory, STORIES } from '../content/stories'
import PageHero from '../components/PageHero'
import { LineChart } from '../components/Charts'
import CTASection from '../components/CTASection'
import { StoryCard } from '../components/Cards'
import { Reveal, Stagger, PageFade } from '../lib/motion'
import NotFound from './NotFound'

export default function StoryDetail() {
  const { slug } = useParams()
  const story = getStory(slug)
  if (!story) return <NotFound />
  const related = STORIES.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <PageFade>
      <PageHero
        eyebrow={`Stories / ${story.tag}`}
        title={story.title}
        lede={story.hook}
        stats={story.metrics}
      />

      {/* Journey narrative */}
      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <span className="eyebrow">The journey</span>
            <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-zinc-400 md:text-lg">
              {story.journey.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
            </div>
            <div className="mt-8 rounded-2xl border border-gold-500/20 bg-gold-500/[0.05] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-400">The strategy</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{story.strategy}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Earnings trajectory</p>
              <ul className="mt-5 space-y-4">
                {story.earnings.map(([when, val]) => (
                  <li key={when} className="flex items-baseline justify-between border-b border-white/[0.06] pb-3 last:border-0">
                    <span className="text-sm text-zinc-500">{when}</span>
                    <span className="font-display text-lg font-bold text-gradient-gold">{val}</span>
                  </li>
                ))}
              </ul>
            </div>
            <blockquote className="card mt-6 p-6">
              <p className="font-serif text-lg italic leading-relaxed text-zinc-200">“{story.quote}”</p>
              <footer className="mt-3 text-sm text-zinc-500">— {story.name}, {story.handle}</footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Challenges */}
      <section className="border-y border-white/[0.05] bg-ink-950/60 section-pad">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Challenges</span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">What stood in the way</h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-5 md:grid-cols-3" gap={0.09}>
            {story.challenges.map(([title, desc]) => (
              <div key={title} className="card p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-tik-pink/15 text-tik-pink">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><use href="#sprite-bolt" /></svg>
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{desc}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Timeline + growth chart */}
      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Timeline</span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Growth, step by step</h2>
            <ol className="mt-8 space-y-5 border-l border-gold-500/25 pl-6">
              {story.timeline.map(([when, title, desc]) => (
                <li key={title} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-gold-500 bg-ink-900" />
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-gold-500">{when}</p>
                  <p className="mt-0.5 font-display text-base font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm text-zinc-500">{desc}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Audience growth</span>
            <h3 className="mt-4 text-xl font-semibold">Followers over time (thousands)</h3>
            <div className="mt-6">
              <LineChart
                series={story.growth.followers}
                labels={story.growth.labels}
                color="#F6B620"
                height={260}
                label={`${story.name} follower growth chart`}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related stories */}
      <section className="border-t border-white/[0.05] bg-ink-950/60 section-pad">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-bold">More stories</h2>
            <Link to="/stories" className="text-sm font-semibold text-gold-400 hover:text-gold-300">View all →</Link>
          </div>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.1}>
            {related.map((s, i) => <StoryCard key={s.slug} item={s} index={i} />)}
          </Stagger>
        </div>
      </section>

      <CTASection
        title="Think You Could Be Next?"
        lede="Every creator above started with one conversation. Take the first step."
        primary={{ to: '/contact', label: 'Talk to the team' }}
        secondary={{ to: '/courses', label: 'See the curriculum' }}
      />
    </PageFade>
  )
}
