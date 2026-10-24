import Reveal from './Reveal.jsx'

// Consistent section heading: eyebrow + title + optional intro copy.
export default function SectionHeading({ eyebrow, title, intro, center = false, id }) {
  return (
    <Reveal className={`sec-head ${center ? 'center' : ''}`} id={id}>
      {eyebrow && <span className={`eyebrow ${center ? 'center' : ''}`}>{eyebrow}</span>}
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </Reveal>
  )
}
