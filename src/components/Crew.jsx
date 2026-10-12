import { useRef } from 'react'
import Section from './Section'
import Photo from './Photo'
import Button from './Button'
import Icon from './Icon'
import { CREW } from '../data'
export default function Crew() {
  const track = useRef(null)
  const next = () => { const c = track.current; c.scrollBy({ left: c.firstElementChild.offsetWidth + 20, behavior: 'smooth' }) }
  return (
    <Section id="crew" title="Our Crew" kicker="Meet the Team">
      <div className="crew-wrap">
        <div className="crew" ref={track} tabIndex={0} aria-label="Crew members">
          {CREW.map((m, i) => (
            <article className="card member" key={m.id} data-r style={{ '--d': `${(i % 4) * 90}ms` }}>
              <Photo className="sq" src={m.src} alt={m.name} />
              <h3>{m.name}</h3><div className="role">{m.role}</div>
              <p>{m.location}<br />{m.email}</p>
              <Button href="#contact">Book a free meeting</Button>
            </article>
          ))}
        </div>
        <button className="arrow" onClick={next} aria-label="Next team member"><Icon name="arrow" /></button>
      </div>
    </Section>
  )
}
