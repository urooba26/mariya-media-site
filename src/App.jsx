import { lazy, Suspense, useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, useReducedMotion } from 'framer-motion'

import Preloader from './components/Preloader.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import PageTransition from './components/PageTransition.jsx'

// Routes are lazy-loaded for fast first paint.
const Home = lazy(() => import('./pages/Home.jsx'))
const WhatWeDo = lazy(() => import('./pages/WhatWeDo.jsx'))
const Expertise = lazy(() => import('./pages/Expertise.jsx'))
const Crew = lazy(() => import('./pages/Crew.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

// Scroll to top on every route change.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }) }, [pathname])
  return null
}

// Route loader fallback.
function RouteLoader() {
  return (
    <div style={{ minHeight: '60vh', display: 'grid', placeItems: 'center' }} role="status" aria-label="Loading page">
      <div style={{ textAlign: 'center' }}>
        <div className="spinner" style={{ width: 44, height: 44, margin: '0 auto', borderColor: 'rgba(201,162,75,.25)', borderTopColor: '#f1d27a' }} />
        <p style={{ marginTop: 18, fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>Loading</p>
      </div>
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/what-we-do" element={<PageTransition><WhatWeDo /></PageTransition>} />
        <Route path="/expertise" element={<PageTransition><Expertise /></PageTransition>} />
        <Route path="/crew" element={<PageTransition><Crew /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const reduced = useReducedMotion()
  return (
    <HashRouter>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Preloader />
      <ScrollProgress />
      <CursorGlow />
      <ScrollToTop />
      <Navbar />

      <main id="main" style={{ minHeight: '60vh' }}>
        <Suspense fallback={reduced ? null : <RouteLoader />}>
          <AnimatedRoutes />
        </Suspense>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </HashRouter>
  )
}
