import { ACHIEVEMENTS } from '../content/achievements'
import PageHero from '../components/PageHero'
import { AchievementCard } from '../components/Cards'
import CTASection from '../components/CTASection'
import { Stagger, PageFade } from '../lib/motion'

export default function Achievements() {
  return (
    <PageFade>
      <PageHero
        eyebrow="Achievements"
        title="Milestones We Can Prove"
        lede="Every achievement below links to its own page: the numbers behind it, the timeline, and the moments that made it."
        stats={[[String(ACHIEVEMENTS.length), 'Milestones documented'], ['500M+', 'Views generated'], ['$20M+', 'Revenue produced'], ['640+', 'Hosts trained']]}
      />
      <section className="section-pad">
        <div className="container-x">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.1}>
            {ACHIEVEMENTS.map((a, i) => <AchievementCard key={a.slug} item={a} index={i} />)}
          </Stagger>
        </div>
      </section>
      <CTASection
        title="Want Numbers Like These?"
        lede="The next achievement on this page could be yours. Start with a free growth assessment."
        secondary={{ to: '/case-studies', label: 'See how we did it' }}
      />
    </PageFade>
  )
}
