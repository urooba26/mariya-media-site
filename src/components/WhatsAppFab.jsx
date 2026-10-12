import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { CONTACT } from '../content/site'

// Floating WhatsApp action — always reachable, expands to a mini panel on click.
export default function WhatsAppFab() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 380, damping: 26 }}
            className="card w-[19rem] border-white/10 bg-ink-850/95 p-5 shadow-card"
            role="dialog"
            aria-label="Chat on WhatsApp"
          >
            <p className="mb-1 text-sm font-semibold text-white">Chat with our team</p>
            <p className="mb-4 text-xs leading-relaxed text-zinc-400">
              Typical reply in under 2 hours during {CONTACT.hours}. Tell us your niche and goals —
              we will send an honest assessment.
            </p>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full !py-3 text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <use href="#sprite-whatsapp" />
              </svg>
              Start WhatsApp chat
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-2 block text-center text-xs text-zinc-500 underline-offset-4 hover:text-gold-400 hover:underline"
            >
              or email {CONTACT.email}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close contact panel' : 'Open WhatsApp contact panel'}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,.6)]"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" style={{ animationDuration: '2.4s' }} aria-hidden="true" />
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="relative">
          <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01c-1.52 0-3-.41-4.3-1.18l-.31-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.35c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.12 8.23z" />
        </svg>
      </motion.button>
    </div>
  )
}
