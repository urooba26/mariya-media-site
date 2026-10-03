import { useEffect, useState } from 'react'
import Logo from './Logo'
import Button from './Button'
import Icon from './Icon'
import { NAV } from '../data'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#top')

  // scroll-spy: highlight the nav item for whichever section crosses the middle of the viewport
  useEffect(() => {
    const els = NAV.map(([href]) => document.getElementById(href.slice(1))).filter(Boolean)
    if (!els.length || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive('#' + e.target.id) })
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const go = (href) => (e) => {
    setActive(href) // instant feedback while the smooth scroll runs
    setOpen(false)
  }

  return (
    <header>
      <div className="wrap nav">
        <Logo />
        <nav id="nav" className={open ? 'open' : ''} aria-label="Primary">
          <ul>{NAV.map(([href, label]) => (
            <li key={href}><a href={href} aria-current={active === href ? 'location' : undefined} onClick={go(href)}>{label}</a></li>
          ))}</ul>
        </nav>
        <Button href="#contact">Join the Agency <Icon name="arrow" /></Button>
        <button className="menu-btn" aria-label="Toggle menu" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(o => !o)}><Icon name="menu" /></button>
      </div>
    </header>
  )
}
