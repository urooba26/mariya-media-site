import Section from './Section'
import Photo from './Photo'
import Button from './Button'
import { ACHIEVEMENTS } from '../data'

export default function Achievements() {
  return (
    <Section id="achievements">
      <div className="ach-head">
        <div>
          <div className="kicker" data-r>Milestones</div>
          <h2 data-r>Our Achievements</h2>
        </div>
        <Button variant="ghost" href="#contact" data-r>Join Our Talent Platform</Button>
      </div>
      <div className="ach">
        {ACHIEVEMENTS.map((a, i) => (
          <figure key={a.title} data-r style={{ margin: 0, '--d': `${i * 80}ms` }}>
            <Photo src={a.src} alt={a.title} />
            <figcaption>{a.title}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
