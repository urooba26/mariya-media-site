import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { Search, Home as HomeIcon } from 'lucide-react'

// 404 page.
export default function NotFound() {
  return (
    <section className="nf">
      <div className="container">
        <Seo title="Page not found" description="This page does not exist." path="/404" />
        <Reveal>
          <span className="nf__code" aria-hidden="true">404</span>
          <h1>This page flew the nest</h1>
          <p>
            The page you’re looking for doesn’t exist or has moved. Let’s get you back
            to the good stuff — training, LIVE support and a community that has your back.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button to="/" icon={false}><HomeIcon size={17} aria-hidden="true" /> Back to Home</Button>
            <Button to="/contact" variant="ghost" icon={false}>
              <Search size={17} aria-hidden="true" /> Contact us
            </Button>
          </div>
          <p style={{ marginTop: 30, fontSize: 13 }}>
            Or jump to a section: <Link to="/what-we-do" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>What We Do</Link>
            {' · '}
            <Link to="/crew" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Our Crew</Link>
            {' · '}
            <Link to="/about" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>About</Link>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
