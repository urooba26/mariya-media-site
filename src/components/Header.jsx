import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV, NAV_SECONDARY } from '../content/site'
import Logo from './Logo'

const CTA = { to: '/contact', label: 'Book a Consultation' }

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menus on navigation
  useEffect(() => {
    setOpen(false)
    setMoreOpen(false)
  }, [pathname])

  // lock scroll while mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const secondaryActive = NAV_SECONDARY.some((i) => pathname.startsWith(i.to))

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <Link to="/" aria-label="Mariya Media Ltd — home" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) =>
            item.label === 'Contact' ? null : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors duration-300 ${
                    isActive ? 'text-gold-400' : 'text-zinc-300 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-gold-500"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            )
          )}

          {/* More dropdown */}
          <div className="relative" onMouseLeave={() => setMoreOpen(false)}>
            <button
              onMouseEnter={() => setMoreOpen(true)}
              onClick={() => setMoreOpen((v) => !v)}
              aria-expanded={moreOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors ${
                secondaryActive ? 'text-gold-400' : 'text-zinc-300 hover:text-white'
              }`}
            >
              Explore
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className={`transition-transform ${moreOpen ? 'rotate-180' : ''}`}>
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full w-52 rounded-2xl border border-white/10 bg-ink-850/95 p-2 shadow-card backdrop-blur-xl"
                >
                  {NAV_SECONDARY.map((i) => (
                    <Link
                      key={i.to}
                      to={i.to}
                      onMouseEnter={() => setMoreOpen(true)}
                      className="block rounded-xl px-4 py-2.5 text-sm text-zinc-300 transition hover:bg-gold-500/10 hover:text-gold-300"
                    >
                      {i.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <Link to={CTA.to} className="btn-gold hidden !px-5 !py-2.5 text-[13px] sm:inline-flex">
            {CTA.label}
          </Link>

          {/* Mobile toggle */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 h-0.5 w-full bg-white transition-all duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-full bg-white transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 h-0.5 w-full bg-white transition-all duration-300 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[72px] z-40 overflow-y-auto border-t border-white/[0.06] bg-ink-950/97 backdrop-blur-2xl lg:hidden"
          >
            <nav aria-label="Mobile" className="container-x flex flex-col gap-1 py-8">
              {[...NAV, ...NAV_SECONDARY].map((item, i) => (
                <motion.div
                  key={item.to + i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.045, duration: 0.4 }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-display transition ${
                        isActive ? 'bg-gold-500/10 text-gold-300' : 'text-zinc-200 hover:bg-white/[0.04]'
                      }`
                    }
                  >
                    {item.label}
                    <span className="text-sm text-zinc-600">→</span>
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6"
              >
                <Link to={CTA.to} className="btn-gold w-full">
                  {CTA.label}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
