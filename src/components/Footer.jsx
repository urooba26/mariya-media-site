import { Link } from 'react-router-dom'
import { NAV, NAV_SECONDARY, CONTACT, SOCIALS } from '../content/site'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-ink-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-gold-500/[0.06] blur-[100px]" />

      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <Link to="/" aria-label="Mariya Media Ltd — home">
            <Logo />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
            The TikTok agency for brands and creators who refuse to grow slowly. Strategy, production,
            LIVE operations and training — under one roof.
          </p>
          <div className="flex gap-3">
            {SOCIALS.map(([icon, label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-gold-500/50 hover:text-gold-400"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <use href={`#sprite-${icon}`} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Explore" links={[...NAV, ...NAV_SECONDARY]} />
        <FooterCol
          title="Services"
          links={[
            { to: '/services/account-growth', label: 'Account Growth' },
            { to: '/services/content-strategy', label: 'Content Strategy' },
            { to: '/services/live-stream-operations', label: 'Live Stream Operations' },
            { to: '/services/host-training', label: 'Host Training' },
            { to: '/services/identity-verification', label: 'Identity Verification' },
            { to: '/services/restriction-help', label: 'Restriction Help' },
          ]}
        />

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">Get in touch</h3>
          <ul className="space-y-3.5 text-sm text-zinc-500">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="transition hover:text-gold-400">{CONTACT.email}</a>
            </li>
            <li>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="transition hover:text-gold-400">{CONTACT.phone}</a>
            </li>
            <li className="pt-1 leading-relaxed">{CONTACT.address}</li>
            <li className="text-zinc-600">{CONTACT.hours}</li>
          </ul>
          <Link to="/contact" className="btn-ghost mt-6 !px-5 !py-2.5 text-[13px]">
            Book a Consultation →
          </Link>
        </div>
      </div>

      <div className="border-t border-white/[0.05]">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-zinc-600 sm:flex-row">
          <p>© {year} Mariya Media Ltd. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold-500" />
            Registered in England &amp; Wales · Built for virality
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">{title}</h3>
      <ul className="space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.to + l.label}>
            <Link to={l.to} className="text-zinc-500 transition hover:text-gold-400">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
