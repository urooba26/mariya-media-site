import Reveal from './Reveal.jsx'

// Shared header for inner pages: animated mesh, eyebrow, title, intro, chips.
export default function PageHero({ eyebrow, title, intro, chips = [] }) {
  return (
    <section className="page-hero">
      <span className="page-hero__mesh" aria-hidden="true" />
      <span className="page-hero__ring" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          {chips.length > 0 && (
            <div className="page-hero__stats">
              {chips.map((c) => (
                <span key={c.label}>{c.icon}{c.label}</span>
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
