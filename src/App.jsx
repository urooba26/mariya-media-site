import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Sprite from './components/Sprite'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Achievements from './pages/Achievements'
import AchievementDetail from './pages/AchievementDetail'
import CaseStudies from './pages/CaseStudies'
import CaseStudyDetail from './pages/CaseStudyDetail'
import Stories from './pages/Stories'
import StoryDetail from './pages/StoryDetail'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Crew from './pages/Crew'
import MemberDetail from './pages/MemberDetail'
import Testimonials from './pages/Testimonials'
import TestimonialDetail from './pages/TestimonialDetail'
import NotFound from './pages/NotFound'
import { usePageMeta } from './lib/seo'

// Scroll to top on route change (with instant fallback for reduced motion)
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()
  usePageMeta() // route-driven <title> / meta description

  // cursor spotlight inside interactive cards
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
      <ScrollProgress />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold-500 focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
        onClick={(e) => {
          // HashRouter owns the URL hash — handle the skip link manually.
          e.preventDefault()
          const main = document.getElementById('main')
          main?.focus()
          main?.scrollIntoView()
        }}
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/achievements/:slug" element={<AchievementDetail />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:slug" element={<StoryDetail />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/crew/:slug" element={<MemberDetail />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/testimonials/:slug" element={<TestimonialDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
