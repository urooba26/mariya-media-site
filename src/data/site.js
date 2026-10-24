// Navigation, hero copy, stats, marquee keywords and FAQs.
// Everything a non-developer might want to reword lives in src/data/.

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/what-we-do', label: 'What We Do' },
  { to: '/expertise', label: 'Our Expertise' },
  { to: '/crew', label: 'Our Crew' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

// ── Home hero ───────────────────────────────────────────────────────────────
export const HERO = {
  kicker: 'TikTok Agency',
  // PLACEHOLDER: sample headline — swap for the client's preferred wording.
  titleLead: 'Where Every Creator',
  titleGold: 'Has the Opportunity',
  titleTail: 'to Grow.',
  subtitle:
    'Mariya Media Ltd is a creator-first TikTok agency. We train hosts, support LIVE creators and build communities where talent turns into opportunity — with professionalism, creativity and honesty at the core.',
  // PLACEHOLDER: sample numbers, clearly labelled as sample content in PLACEHOLDERS.md.
  liveViewers: '1.2K',
}

// ── Home highlights (animated counters) ─────────────────────────────────────
// PLACEHOLDER: sample stats. Replace value/suffix/label with verified figures.
export const STATS = [
  { value: 500, suffix: '+', label: 'Hosts trained & supported', icon: 'Users' },
  { value: 20, suffix: 'M+', label: 'Monthly LIVE views generated', icon: 'Eye' },
  { value: 45, suffix: '+', label: 'Countries reached', icon: 'Globe' },
  { value: 24, suffix: '/7', label: 'Community support', icon: 'LifeBuoy' },
  { value: 5, suffix: ' yrs', label: 'In live media', icon: 'TrendingUp' },
]

// ── Keyword ticker ──────────────────────────────────────────────────────────
export const MARQUEE_WORDS = [
  'LIVE', 'Growth', 'Content', 'Community', 'Host Training', 'Verification',
  'Creator Support', 'Monetization', 'Brand Deals', 'Never Give Up',
]

// ── FAQ (contact page) ──────────────────────────────────────────────────────
export const FAQS = [
  {
    q: 'Do I need experience to join?',
    a: 'No. Many of our hosts started with zero experience. What matters is consistency, a willingness to learn and a positive attitude. Our training path is built for complete beginners.',
  },
  {
    q: 'What does a TikTok host actually do?',
    a: 'A host runs LIVE sessions — welcoming viewers, hosting games and matches, engaging the room and helping the community feel welcome. We teach you the craft step by step.',
  },
  {
    q: 'How do I get started?',
    a: 'Send us a message through the contact form or WhatsApp. We will talk through your goals, answer your questions and guide you to the right first step.',
  },
  {
    q: 'Can I join from any country?',
    a: 'Yes. Our community is global and online-based. As long as you can go LIVE on TikTok in your region, distance is not a barrier.',
  },
  {
    q: 'Do you help with verification and restrictions?',
    a: 'Yes. We guide creators through TikTok’s verification process and help resolve common account restrictions. See Our Expertise for details.',
  },
]
