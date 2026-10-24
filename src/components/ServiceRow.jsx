import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'
import { Check } from 'lucide-react'

// Alternating numbered card with an illustration panel (What We Do).
// `index` flips the layout on even/odd rows.
export default function ServiceRow({ service, index = 0, numbered = true }) {
  const flip = index % 2 === 1
  return (
    <Reveal className={`svc-row ${flip ? 'svc-row--flip' : ''}`} amount={0.15}>
      <div className="svc-row__body">
        {numbered && <span className="svc-row__num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>}
        {service.kicker && <span className="svc-row__kicker">{service.kicker}</span>}
        <h3>{service.title}</h3>
        <p>{service.lead || service.text}</p>
        {service.points && (
          <ul className="svc-row__list">
            {service.points.map((p) => (
              <li key={p}>
                <Check size={17} aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="svc-row__art">
        <div className="svc-art" aria-hidden="true">
          <span className="svc-art__ring" />
          <span className="svc-art__icon">
            <Icon name={service.icon} size={64} />
          </span>
        </div>
      </div>
    </Reveal>
  )
}
