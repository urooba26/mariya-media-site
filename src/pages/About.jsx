import { Link } from 'react-router-dom'
import { STATS } from '../content/site'
import { CREW } from '../content/crew'
import PageHero, { SectionHead } from '../components/PageHero'
import Counter from '../components/Counter'
import CTASection from '../components/CTASection'
import { CrewCard } from '../components/Cards'
import { Reveal, Stagger, PageFade } from '../lib/motion'

const VALUES = [
  ['Receipts over rhetoric', 'Every claim we make has a dashboard behind it. We publish the failures alongside the wins because that is what makes the wins credible.'],
  ['Systems over virality', 'A viral video is weather. A publishing system is climate. We build the climate — hook libraries, cadences, debrief rituals.'],
  ['Creators are partners', 'No exploitative contracts, no hidden splits. Creators keep their audiences, their voice and the lion’s share of what they earn.'],
  ['Say it plainly', 'Clients get honest reporting and honest odds. If we think a channel won’t work for you, we say so before you pay us.'],
]

const TIMELINE = [
  ['2022', 'Founded in London', 'Two people, one client, a shared conviction that TikTok growth could be engineered rather than hoped for.'],
  ['2023', 'The Academy opens', 'The host training curriculum launches; 18 graduates in the first cohort.'],
  ['2024', '100 brands mark', 'LIVE practice scales; Dubai studio opens; courses program crosses 1,000 students.'],
  ['2025', '500M & $20M', 'Annual milestones hit; shortlisted Creator Agency of the Year at the Global Social Awards.'],
]

export default function About() {
  return (
    <PageFade>
      <PageHero
        eyebrow="About Us"
        title="A Growth Agency Built Like an Engineering Firm"
        lede="Mariya Media Ltd was founded in 2022 on a simple bet: TikTok growth is a system, not a lottery. Four years later, that system has produced 500M views and $20M in client revenue."
        stats={STATS.map((s) => [`${s.prefix || ''}${s.value}${s.suffix}`, s.label])}
      />

      {/* Story */}
      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-zinc-400 md:text-lg">
              <p>
                We started managing a single creator’s account from a co-working desk in London. The account grew
                faster than anyone expected — not because of luck, but because we treated it like an engineering
                problem: audit the data, form a hypothesis, publish, measure, iterate.
              </p>
              <p>
                That playbook became the agency. Today we run growth programs for 100+ brands across 11 countries,
                produce LIVE events for audiences in the hundreds of thousands, and train hosts through an Academy
                that has graduated more than 640 people.
              </p>
              <p>
                We have stayed deliberately small on the leadership side and deep on delivery: every client works
                with the same strategists, producers and analysts who built the system — no account-manager
                telephone game, no juniors learning on your budget.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/crew" className="btn-gold">Meet the crew</Link>
              <Link to="/case-studies" className="btn-ghost">See our work</Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="card p-7">
              <span className="eyebrow">By the numbers</span>
              <dl className="mt-6 space-y-5">
                {[
                  [500, 'M+', 'Views generated'],
                  [20, 'M+', 'Revenue produced'],
                  [100, '+', 'Brands scaled'],
                  [640, '+', 'Hosts trained'],
                ].map(([v, sfx, label]) => (
                  <div key={label} className="flex items-baseline justify-between border-b border-white/[0.06] pb-4 last:border-0">
                    <dt className="text-sm text-zinc-400">{label}</dt>
                    <dd className="font-display text-3xl font-extrabold text-gradient-gold">
                      <Counter value={v} duration={2} />{sfx}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-white/[0.05] bg-ink-950/60 section-pad">
        <div className="container-x">
          <SectionHead eyebrow="What we stand for" title="Four rules we don’t bend" />
          <Stagger className="grid gap-6 sm:grid-cols-2" gap={0.09}>
            {VALUES.map(([title, desc], i) => (
              <div key={title} className="card p-6 sm:p-7">
                <span className="font-display text-sm font-bold text-gold-500">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">{desc}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad">
        <div className="container-x">
          <SectionHead eyebrow="Milestones" title="Four years, one trajectory" />
          <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map(([year, title, desc], i) => (
              <Reveal key={year} delay={i * 0.1}>
                <li className="card relative h-full p-6 pt-8">
                  <span className="absolute -top-4 left-6 rounded-full bg-gold-gradient px-4 py-1 text-xs font-bold text-ink-950">{year}</span>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Crew preview */}
      <section className="border-t border-white/[0.05] bg-ink-950/60 section-pad">
        <div className="container-x">
          <SectionHead
            eyebrow="Leadership"
            title="The people running the floor"
            action={<Link to="/crew" className="btn-ghost !py-3">Full crew →</Link>}
          />
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.1}>
            {CREW.slice(0, 3).map((m, i) => <CrewCard key={m.slug} item={m} index={i} />)}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </PageFade>
  )
}
