import { Link } from 'react-router-dom'
import { Mail, MapPin, Send, Heart } from 'lucide-react'
import { BrandIcon } from './Brand.jsx'
import { NAV_LINKS } from '../data/site.js'
import { SERVICES } from '../data/services.js'
import { SITE, CONTACT_EMAIL, SOCIALS, whatsappLink } from '../config.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div>
            <div className="footer__brand">
              <span className="footer__mark">
                <img src={`${import.meta.env.BASE_URL}${SITE.logo}`} alt={`${SITE.name} logo`} width={60} height={60} />
              </span>
              <span>
                <b>MARIYA</b>
                <span>Media Ltd</span>
              </span>
            </div>
            <p className="footer__tagline">{SITE.tagline}</p>
            <div className="socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.id}
                  data-net={s.id}
                  href={s.id === 'whatsapp' ? whatsappLink() : s.url}
                  target={s.id === 'whatsapp' ? undefined : '_blank'}
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  title={s.label}
                >
                  <BrandIcon id={s.id} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4>Quick Links</h4>
            <ul className="footer__list">
              {NAV_LINKS.map((l) => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4>Services</h4>
            <ul className="footer__list">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.title}><Link to="/what-we-do">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4>Contact</h4>
            <ul className="footer__contact">
              <li>
                <Mail size={17} aria-hidden="true" />
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li>
                <Send size={17} aria-hidden="true" />
                <a href={whatsappLink()} target="_blank" rel="noreferrer noopener">WhatsApp us</a>
              </li>
              <li>
                <MapPin size={17} aria-hidden="true" />
                <span>Lahore, Pakistan · Worldwide (online)</span> {/* PLACEHOLDER: confirm address */}
              </li>
            </ul>
            <ButtonLike href={whatsappLink()} />
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} {SITE.name}. All rights reserved.</span>
          <span>
            Made with <Heart size={13} style={{ display: 'inline', color: 'var(--pink)' }} aria-hidden="true" /> · Alhamdulillah
          </span>
        </div>
      </div>
    </footer>
  )
}

function ButtonLike({ href }) {
  return (
    <a className="btn btn--sm btn--ghost" href={href} target="_blank" rel="noreferrer noopener">
      <BrandIcon id="whatsapp" size={15} /> Chat on WhatsApp
    </a>
  )
}
