// Brand glyphs (lucide does not ship TikTok/WhatsApp marks).
// All use currentColor so they inherit hover colours from CSS.

export function TikTokIcon({ size = 20, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...rest}>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.77-2.46V9.77a5.67 5.67 0 1 0 4.86 5.6V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.28 4.28 0 0 1-3.24-1.48Z" />
    </svg>
  )
}

export function WhatsAppIcon({ size = 20, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...rest}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35ZM12.05 21.8h-.02a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.77 9.77 0 0 1-1.5-5.22c0-5.4 4.4-9.8 9.81-9.8a9.75 9.75 0 0 1 6.94 2.88 9.72 9.72 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.8 9.8Zm8.34-18.14A11.72 11.72 0 0 0 12.05 0C5.55 0 .26 5.29.26 11.79c0 2.08.55 4.1 1.59 5.89L.16 24l6.47-1.69a11.76 11.76 0 0 0 5.41 1.37h.01c6.49 0 11.79-5.29 11.79-11.79 0-3.15-1.23-6.11-3.46-8.34Z" />
    </svg>
  )
}

export function InstagramIcon({ size = 20, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...rest}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function YoutubeIcon({ size = 20, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...rest}>
      <path d="M22.1 7.2a2.6 2.6 0 0 0-1.83-1.85C18.65 4.9 12 4.9 12 4.9s-6.65 0-8.27.45A2.6 2.6 0 0 0 1.9 7.2 27.4 27.4 0 0 0 1.45 12c0 1.62.15 3.23.45 4.8a2.6 2.6 0 0 0 1.83 1.85c1.62.45 8.27.45 8.27.45s6.65 0 8.27-.45a2.6 2.6 0 0 0 1.83-1.85c.3-1.57.45-3.18.45-4.8 0-1.62-.15-3.23-.45-4.8ZM9.95 15.1V8.9L15.2 12l-5.25 3.1Z" />
    </svg>
  )
}

const BRANDS = { tiktok: TikTokIcon, instagram: InstagramIcon, youtube: YoutubeIcon, whatsapp: WhatsAppIcon }

export function BrandIcon({ id, size = 20, ...rest }) {
  const Cmp = BRANDS[id]
  return Cmp ? <Cmp size={size} {...rest} /> : null
}
