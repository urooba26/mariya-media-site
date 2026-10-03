import Logo from './Logo'
import Icon from './Icon'
import { FOOTER_LINKS } from '../data'
export default function Footer() {
  return (
    <>
      <footer><div className="wrap">
        <div className="f-grid">
          <div><Logo /><p style={{ color: 'var(--mute)', fontSize: 12, maxWidth: 260, marginTop: 12 }}>Empowering hosts and creators to grow, stream and earn with confidence.</p></div>
          {Object.entries(FOOTER_LINKS).map(([h, links]) => (
            <div key={h}><h4>{h}</h4><ul>{links.map(([href, l]) => <li key={l}><a href={href}>{l}</a></li>)}</ul></div>
          ))}
          <div><h4>Contact</h4><ul><li><a href="mailto:support@mariyamedia.com">support@mariyamedia.com</a></li><li><a href="tel:+920000000000">+92 000 0000000</a></li></ul></div>
          <div><h4>Follow Us</h4><div className="social">
            {[['tiktok','TikTok'],['ig','Instagram'],['fb','Facebook'],['yt','YouTube']].map(([i, l]) => <a key={i} href="#" aria-label={l}><Icon name={i} /></a>)}
          </div></div>
        </div>
        <div className="copy"><span>© {new Date().getFullYear()} Mariya Media Ltd. All rights reserved.</span><span><a href="#">Privacy Policy</a> &nbsp; <a href="#">Terms &amp; Conditions</a></span></div>
      </div></footer>
      <a className="wa" href="#contact" aria-label="Chat on WhatsApp"><Icon name="whatsapp" /></a>
    </>
  )
}
