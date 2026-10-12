import { TESTIMONIALS } from '../content/testimonials'
import PageHero from '../components/PageHero'
import { TestimonialCard } from '../components/Cards'
import CTASection from '../components/CTASection'
import { Stagger, PageFade } from '../lib/motion'

export default function Testimonials() {
  return (
    <PageFade>
      <PageHero
        eyebrow="Testimonials"
        title="Reviews With Receipts"
        lede="Every testimonial links to an expanded review — results, context and the case study it came from."
        stats={[['6', 'Expanded reviews'], ['5.0', 'Average rating'], ['92%', 'Renewal rate'], ['100+', 'Brands served']]}
      />
      <section className="section-pad">
        <div className="container-x">
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" gap={0.1}>
            {TESTIMONIALS.map((t, i) => <TestimonialCard key={t.slug} item={t} index={i} />)}
          </Stagger>
        </div>
      </section>
      <CTASection
        title="Add Your Name to This List"
        lede="Start with a free account audit. If we can’t move your numbers, we’ll tell you straight."
        secondary={{ to: '/case-studies', label: 'Read the full results' }}
      />
    </PageFade>
  )
}
