import { SERVICES, getService } from '../content/services'
import PageHero, { SectionHead } from '../components/PageHero'
import { ServiceCard } from '../components/Cards'
import CTASection from '../components/CTASection'
import { Stagger, PageFade } from '../lib/motion'

export default function Services() {
  return (
    <PageFade>
      <PageHero
        eyebrow="Services"
        title="Everything You Need to Win on TikTok"
        lede="Seven specialist services, built to combine. Start with one or run the full growth machine — every engagement is scoped to your stage."
        stats={[['7', 'Service lines'], ['100+', 'Brands scaled'], ['5x', 'Average ROAS'], ['92%', 'Renewal rate']]}
      />
      <section className="section-pad">
        <div className="container-x">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={0.1}>
            {SERVICES.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </Stagger>
        </div>
      </section>
      <CTASection
        title="Not Sure Which Service You Need?"
        lede="Book a free 30-minute strategy call. We will audit your account live and tell you exactly where the leverage is — even if it means you don’t need us."
        primary={{ to: '/contact', label: 'Get your free audit' }}
        secondary={{ to: '/case-studies', label: 'See what worked for others' }}
      />
    </PageFade>
  )
}
