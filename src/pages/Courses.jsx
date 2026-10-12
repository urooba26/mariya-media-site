import { COURSES } from '../content/courses'
import PageHero from '../components/PageHero'
import { CourseCard } from '../components/Cards'
import CTASection from '../components/CTASection'
import { Stagger, PageFade } from '../lib/motion'

export default function Courses() {
  return (
    <PageFade>
      <PageHero
        eyebrow="Creator Academy"
        title="Courses That Teach the System"
        lede="Four cohort programs built from the same playbooks our agency runs for 100+ brands — hook engineering, LIVE selling, host certification and the creator business."
        stats={[[String(COURSES.length), 'Cohort programs'], ['2,600+', 'Students trained'], ['4.9', 'Average rating'], ['92%', 'Completion rate']]}
      />
      <section className="section-pad">
        <div className="container-x">
          <Stagger className="grid gap-6 sm:grid-cols-2" gap={0.1}>
            {COURSES.map((c, i) => <CourseCard key={c.slug} item={c} index={i} />)}
          </Stagger>
        </div>
      </section>
      <CTASection
        title="Not Sure Which Course Fits?"
        lede="Book a consultation and we will point you to the right cohort — or tell you honestly if you don’t need one yet."
        secondary={{ to: '/stories', label: 'Read graduate stories' }}
      />
    </PageFade>
  )
}
