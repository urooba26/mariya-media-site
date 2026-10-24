import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { BrandIcon } from './Brand.jsx'
import { NAV_LINKS } from '../data/site.js'
import { SOCIALS, whatsappLink } from '../config.js'

// Sticky glass navbar: shrinks/frosts on scroll, animated underlines,
// full-screen animated mobile overlay.
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const reduced = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the menu on navigation
  useEffect(() => { setOpen(false) }, [pathname])

  // Lock scroll while the overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Escape closes the menu
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const menuVariants = reduced ? {} : {
    hidden: { opacity: 0, transition: { duration: 0.25 } },
    show: { opacity: 1, transition: { duration: 0.3, staggerChildren: 0.06, delayChildren: 0.08 } },
    exit: { opacity: 0, transition: { duration: 0.28 } },
  }
  const itemVariants = reduced ? {} : {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="container nav__inner">
          <Logo />

          <nav className="nav__links" aria-label="Main navigation">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => `nav__link ${isActive ? 'active' : ''}`} end={l.to === '/'}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav__cta">
            <Button to="/contact" size="sm">Join Us</Button>
            <button
              type="button"
              className={`hamburger ${open ? 'open' : ''}`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            aria-label="Mobile navigation"
          >
            <button
              type="button"
              className="hamburger open"
              style={{ position: 'absolute', top: 16, right: 20 }}
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X size={22} color="#fff" />
            </button>

            {NAV_LINKS.map((l, i) => (
              <motion.div key={l.to} variants={itemVariants}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) => `mobile-menu__link ${isActive ? 'active' : ''}`}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                >
                  <i>{String(i + 1).padStart(2, '0')}</i>
                  {l.label}
                </NavLink>
              </motion.div>
            ))}

            <motion.div className="mobile-menu__foot" variants={itemVariants}>
              <Button to="/contact" size="lg" className="btn--block">Join Our Agency</Button>
              <div className="socials" style={{ justifyContent: 'center' }}>
                {SOCIALS.map((s) => (
                  <a
                    key={s.id}
                    data-net={s.id}
                    href={s.id === 'whatsapp' ? whatsappLink() : s.url}
                    target={s.id === 'whatsapp' ? undefined : '_blank'}
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    onClick={() => setOpen(false)}
                  >
                    <BrandIcon id={s.id} />
                  </a>
                ))}
              </div>
              <small>Empowering Creators. Building Communities.</small>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
