import { STORIES } from '../content/stories'
import PageHero from '../components/PageHero'
import { StoryCard } from '../components/Cards'
import CTASection from '../components/CTASection'
import { Stagger, PageFade } from '../lib/motion'

export default function Stories() {
  return (
    <PageFade>
      <PageHero
        eyebrow="Creator Stories"
        title="Case Studies of People, Not Just Brands"
        lede="Four creators, four starting points, four timelines — with the challenges, strategies and earnings laid out in full."
        stats={[[String(STORIES.length), 'Journeys documented'], ['1.4M', 'Top follower count'], ['$22k', 'Top monthly income'], ['92%', 'Still growing']]}
      />
      <section className="section-pad">
        <div className="container-x">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.1}>
            {STORIES.map((s, i) => <StoryCard key={s.slug} item={s} index={i} />)}
          </Stagger>
        </div>
      </section>
      <CTASection
        title="Your Story Starts With One Stream"
        lede="Join the next Creator Academy cohort or talk to us about managed growth. Either way, the first step is the same."
        primary={{ to: '/contact', label: 'Start your journey' }}
        secondary={{ to: '/courses', label: 'Browse the Academy' }}
      />
    </PageFade>
  )
}
