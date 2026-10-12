import { CASE_STUDIES } from '../content/caseStudies'
import PageHero from '../components/PageHero'
import { CaseStudyCard } from '../components/Cards'
import CTASection from '../components/CTASection'
import { Stagger, PageFade } from '../lib/motion'

export default function CaseStudies() {
  return (
    <PageFade>
      <PageHero
        eyebrow="Case Studies"
        title="The Receipts"
        lede="Four full engagements — client overview, challenge, strategy, execution, results, and before-and-after graphs. Nothing invented, nothing hidden."
        stats={[['4', 'Full write-ups'], ['$27M+', 'Revenue attributed'], ['5x', 'Average ROAS'], ['100%', 'Data disclosed']]}
      />
      <section className="section-pad">
        <div className="container-x">
          <Stagger className="grid gap-6" gap={0.12}>
            {CASE_STUDIES.map((c, i) => <CaseStudyCard key={c.slug} item={c} index={i} />)}
          </Stagger>
        </div>
      </section>
      <CTASection
        title="Your Brand Could Be Write-Up #5"
        lede="Every engagement starts with a free account audit and a 90-day roadmap. No obligation, no fluff."
        secondary={{ to: '/services', label: 'Explore services first' }}
      />
    </PageFade>
  )
}
