import { MARQUEE_WORDS } from '../data/site.js'

// Infinite keyword ticker. Content is duplicated once for a seamless loop.
export default function Marquee({ words = MARQUEE_WORDS }) {
  const group = (
    <div className="marquee__group">
      {words.map((w, i) => (
        <span className="marquee__item" key={`${w}-${i}`}>
          <i>{w}</i>
          <span className="marquee__dot" aria-hidden="true" />
        </span>
      ))}
    </div>
  )
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {group}
        {group}
      </div>
    </div>
  )
}
