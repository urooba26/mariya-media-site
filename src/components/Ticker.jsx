import Icon from './Icon'
import { TICKER } from '../data'

// Infinite marquee: the list is rendered twice so the -50% keyframe loops seamlessly.
export default function Ticker() {
  const items = [...TICKER, ...TICKER]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map(([icon, label], i) => (
          <span className="ticker-item" key={i}><Icon name={icon} />{label}</span>
        ))}
      </div>
    </div>
  )
}
