import Reveal from './Reveal.jsx'
import Button from './Button.jsx'
import { SITE } from '../config.js'

// Shared closing CTA band used at the bottom of pages.
// primary/secondary accept either { to } (router link) or { href } (external).
export default function CtaBand({
  title = 'Ready to start your creator journey?',
  intro = 'Join Mariya Media Ltd and get the training, support and community you need to grow on TikTok.',
  primary = { to: '/contact', label: 'Join Our Agency' },
  secondary = { to: '/crew', label: 'Meet Our Crew' },
}) {
  return (
    <section className="section section--tight">
      <div className="container">
        <Reveal className="cta-band">
          <span className="eyebrow center" style={{ position: 'relative' }}>{SITE.name}</span>
          <h2>{title}</h2>
          <p>{intro}</p>
          <div className="cta-band__btns">
            <Button {...primary} size="lg">{primary.label}</Button>
            <Button {...secondary} variant="ghost" size="lg">{secondary.label}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
