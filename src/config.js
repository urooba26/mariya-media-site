// ─────────────────────────────────────────────────────────────────────────────
// SITE-WIDE SETTINGS — the only file a non-developer needs for contact details.
// Every value here is used across the whole site (navbar, footer, WhatsApp
// button, contact page, meta tags). Edit and save — no other file needs touching.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Mariya Media Ltd',
  tagline: 'Empowering Creators. Building Communities. Creating Opportunities.',
  // PLACEHOLDER: replace with the real production domain once the site is live.
  url: 'https://example.com',
  logo: 'logo.jpg',
}

// ── WhatsApp ────────────────────────────────────────────────────────────────
// Real business number: +48 669 296 554 — digits only, WITH country code,
// no "+" and no spaces (48 = Poland).
export const WHATSAPP_NUMBER = '48669296554'

// The pre-filled message opened when someone taps the floating button.
export const WHATSAPP_MESSAGE =
  "Hi Mariya Media Ltd! I'd like to know more about joining your TikTok agency."

// ── Email ───────────────────────────────────────────────────────────────────
// Real business inbox.
export const CONTACT_EMAIL = 'ariyam0804@gmail.com'

// ── Google Apps Script (contact form backend) ───────────────────────────────
// PLACEHOLDER: paste your deployed Web App URL here (it ends with /exec).
// Leave empty and the form will simulate a successful submit so you can
// preview the flow before the sheet is connected. Setup steps: see README.
export const GOOGLE_APPS_SCRIPT_URL = ''

// ── Social links ────────────────────────────────────────────────────────────
// PLACEHOLDER: every URL below is a dummy. Replace with the real profiles.
export const SOCIALS = [
  { id: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@youragency' },
  { id: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/youragency' },
  { id: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@youragency' },
  { id: 'whatsapp', label: 'WhatsApp', url: '' }, // auto-built from WHATSAPP_NUMBER
]

// ── Interest dropdown on the contact form ───────────────────────────────────
export const INTEREST_OPTIONS = [
  'Host Training',
  'Host Assistant',
  'Account Growth',
  'Verification Help',
  'Restriction Help',
  'Other',
]

// Convenience helper used by FloatingWhatsApp and the Contact page.
export function whatsappLink(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
