import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactForm from '../components/ContactForm.jsx'
import FaqAccordion from '../components/FaqAccordion.jsx'
import { Mail, Send, Clock, MapPin, MessageCircle } from 'lucide-react'
import { WhatsAppIcon } from '../components/Brand.jsx'

import { CONTACT_EMAIL, whatsappLink, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../config.js'

// Contact — form + direct contact cards + FAQ accordion.
export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Send a message to Mariya Media Ltd, or reach us directly on WhatsApp and email. We reply within 1–2 working days."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact"
        title="Let’s talk about your next step"
        intro="Fill in the form and we’ll get back to you — or skip the waiting and message us straight away on WhatsApp."
        chips={[
          { label: 'Replies in 1–2 days', icon: <Clock size={15} aria-hidden="true" /> },
          { label: 'WhatsApp for faster replies', icon: <MessageCircle size={15} aria-hidden="true" /> },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* ── Direct contact cards ───────────────────────────────────── */}
            <Reveal className="card contact-card" variant="slideLeft">
              <h3>Reach us directly</h3>
              <p>Prefer talking to a person? These reach us fastest.</p>

              <div className="contact-list">
                <a href={whatsappLink()} target="_blank" rel="noreferrer noopener">
                  <span className="contact-list__icon"><WhatsAppIcon size={20} /></span>
                  <span>
                    <b>WhatsApp</b>
                    <span>+{WHATSAPP_NUMBER} {/* PLACEHOLDER */}</span>
                  </span>
                </a>

                <a href={`mailto:${CONTACT_EMAIL}`}>
                  <span className="contact-list__icon"><Mail size={19} /></span>
                  <span>
                    <b>Email us</b>
                    <span>{CONTACT_EMAIL}</span>
                  </span>
                </a>

                <div>
                  <span className="contact-list__icon"><Clock size={19} /></span>
                  <span>
                    <b>Response time</b>
                    <span>1–2 working days</span>
                  </span>
                </div>

                <div>
                  <span className="contact-list__icon"><MapPin size={19} /></span>
                  <span>
                    <b>Based in</b>
                    <span>Lahore, Pakistan · Worldwide (online)</span> {/* PLACEHOLDER */}
                  </span>
                </div>
              </div>

              <a className="btn btn--block" href={whatsappLink()} target="_blank" rel="noreferrer noopener">
                <WhatsAppIcon size={17} /> Message us on WhatsApp
              </a>

              <p style={{ fontSize: 13, marginTop: 16, lineHeight: 1.7, color: 'var(--faint)' }}>
                Tip: include your TikTok ID in the message so we can look you up before we reply.
              </p>
            </Reveal>

            {/* ── Form ───────────────────────────────────────────────────── */}
            <Reveal className="card contact-card" variant="slideRight" delay={0.1}>
              <h3>Send us a message</h3>
              <p>Fields marked <span style={{ color: 'var(--pink)' }}>*</span> are required.</p>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="section section--alt" id="faq">
        <div className="container" style={{ maxWidth: 900 }}>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we hear most"
            intro="Can’t see yours? Ask us through the form or on WhatsApp."
            center
          />
          <Reveal><FaqAccordion /></Reveal>
        </div>
      </section>

      {/* WhatsApp prefill link repeated inline for mobile users */}
      <section className="section section--tight">
        <div className="container">
          <Reveal className="cta-band">
            <span className="eyebrow center" style={{ position: 'relative' }}>Fastest route</span>
            <h2>Skip the form — <span className="gold-text">just message us</span></h2>
            <p>Your message is already written for you. One tap and it opens in WhatsApp.</p>
            <div className="cta-band__btns">
              <a
                className="btn btn--lg"
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Send size={17} aria-hidden="true" /> Open WhatsApp
              </a>
            </div>
            <p style={{ fontSize: 12.5, marginTop: 18, color: 'var(--faint)', position: 'relative' }}>
              “{WHATSAPP_MESSAGE}”
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
