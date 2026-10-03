import Button from './Button'
import Icon from './Icon'
import Counter from './Counter'
import { STATS } from '../data'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div data-r>
          <span className="live-badge"><i />Live now · 128 hosts streaming</span>
          <h1>Grow. Host. Earn. <br />With <span>Mariya Media Ltd</span></h1>
          <p>Live-stream hosts and creators grow faster with expert training, hands-on coaching and an agency that handles the hard parts, so you can focus on going live.</p>
          <div className="cta">
            <Button href="#contact">Join the Agency <Icon name="tiktok" /></Button>
            <Button variant="ghost" href="#what">Get Training</Button>
          </div>
          <div className="stats">
            {STATS.map(([n, suffix, label]) => (
              <div key={label}><Counter to={n} suffix={suffix} /><span>{label}</span></div>
            ))}
          </div>
        </div>
        <div data-r style={{ '--d': '180ms' }}>
          <div className="portrait" role="img" aria-label="Host portrait placeholder">
            <svg style={{ color: '#2a1c0c' }}><use href="#person" /></svg>
            <div className="reactions" aria-hidden="true">
              <span><Icon name="heart" /></span>
              <span><Icon name="star" /></span>
              <span><Icon name="music" /></span>
              <span><Icon name="heart" /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
