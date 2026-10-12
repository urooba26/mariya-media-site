import { CREW } from '../content/crew'
import PageHero from '../components/PageHero'
import { CrewCard } from '../components/Cards'
import CTASection from '../components/CTASection'
import { Stagger, PageFade } from '../lib/motion'

export default function Crew() {
  return (
    <PageFade>
      <PageHero
        eyebrow="Our Crew"
        title="Named Humans, Accountable Results"
        lede="Every account we manage has named strategists, producers and analysts behind it. Meet the crew — each profile includes their track record and working philosophy."
        stats={[[String(CREW.length), 'Core team'], ['640+', 'Hosts trained'], ['11', 'Countries covered'], ['92%', 'Client renewal']]}
      />
      <section className="section-pad">
        <div className="container-x">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.1}>
            {CREW.map((m, i) => <CrewCard key={m.slug} item={m} index={i} />)}
          </Stagger>
        </div>
      </section>
      <CTASection
        title="Want This Team in Your Corner?"
        lede="Every engagement starts with a call. Meet the people who would actually run your account."
        primary={{ to: '/contact', label: 'Book a consultation' }}
        secondary={{ to: '/about', label: 'About the agency' }}
      />
    </PageFade>
  )
}
