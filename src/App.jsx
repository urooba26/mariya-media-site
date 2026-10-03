import { useEffect } from 'react'
import Sprite from './components/Sprite'
import Header from './components/Header'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Achievements from './components/Achievements'
import { WhatWeDo, Expertise } from './components/Services'
import Crew from './components/Crew'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // stagger-reveal every [data-r] element as it scrolls into view
  useEffect(() => {
    const els = document.querySelectorAll('[data-r]')
    if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('on')); return }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target) } })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  // spotlight glow that follows the cursor inside cards
  useEffect(() => {
    const move = (e) => {
      const card = e.target.closest?.('.card')
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
      card.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
    }
    document.addEventListener('pointermove', move)
    return () => document.removeEventListener('pointermove', move)
  }, [])

  return (
    <>
      <Sprite />
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero /><Ticker /><Achievements /><WhatWeDo /><Expertise /><Crew /><About /><Contact />
      </main>
      <Footer />
    </>
  )
}
