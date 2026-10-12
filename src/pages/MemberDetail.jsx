import { useParams, Link } from 'react-router-dom'
import { getMember, CREW } from '../content/crew'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { CrewCard } from '../components/Cards'
import { Reveal, Stagger, PageFade } from '../lib/motion'
import NotFound from './NotFound'

export default function MemberDetail() {
  const { slug } = useParams()
  const member = getMember(slug)
  if (!member) return <NotFound />
  const related = CREW.filter((m) => m.slug !== slug).slice(0, 3)

  return (
    <PageFade>
      <PageHero
        eyebrow={`Our Crew / ${member.role}`}
        title={member.name}
        lede={member.bio}
        stats={member.stats}
      />

      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <span className="eyebrow">Profile</span>
            <div className="mt-6 flex items-center gap-5">
              <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gold-gradient font-display text-2xl font-bold text-ink-950">
                {member.initials}
              </span>
              <div>
                <h2 className="text-2xl font-bold">{member.name}</h2>
                <p className="text-gold-500">{member.role}</p>
                <p className="mt-1 text-sm text-zinc-500">{member.location} · {member.tenure}</p>
              </div>
            </div>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-400">
              <p>{member.bio}</p>
            </div>

            <blockquote className="mt-8 rounded-2xl border border-gold-500/20 bg-gold-500/[0.05] p-6">
              <p className="font-serif text-xl italic leading-relaxed text-zinc-200">“{member.quote}”</p>
            </blockquote>

            <a href={`mailto:${member.email}`} className="btn-ghost mt-8">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><use href="#sprite-mail" /></svg>
              {member.email}
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card p-6 sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Expertise</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {member.expertise.map((e) => (
                  <span key={e} className="rounded-full border border-gold-500/25 bg-gold-500/10 px-3.5 py-1.5 text-xs text-gold-300">{e}</span>
                ))}
              </div>

              <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Career path</p>
              <ol className="mt-4 space-y-4 border-l border-gold-500/25 pl-5">
                {member.career.map(([year, text]) => (
                  <li key={year} className="relative">
                    <span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-gold-500 bg-ink-900" />
                    <p className="font-display text-sm font-bold text-gold-400">{year}</p>
                    <p className="mt-1 text-sm text-zinc-500">{text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/[0.05] bg-ink-950/60 section-pad">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-bold">Meet the rest of the crew</h2>
            <Link to="/crew" className="text-sm font-semibold text-gold-400 hover:text-gold-300">View all →</Link>
          </div>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.1}>
            {related.map((m, i) => <CrewCard key={m.slug} item={m} index={i} />)}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </PageFade>
  )
}
