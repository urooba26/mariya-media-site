// ─────────────────────────────────────────────────────────────────────────────
// CREW — grouped for the tabs on /crew: Leadership, Managers, Senior Hosts, Hosts.
// Photos: leave `photo: null` to render the generated gold placeholder card,
// or set a path like '/photos/name.jpg' (drop real images in public/photos/).
// ─────────────────────────────────────────────────────────────────────────────

export const CREW_GROUPS = ['Leadership', 'Managers', 'Senior Hosts', 'Hosts']

export const CREW = [
  // ── Leadership ────────────────────────────────────────────────────────────
  {
    id: 'mariya',
    group: 'Leadership',
    name: 'Mariya Rajpoot',
    role: 'Founder / Visionary',
    photo: null, // PLACEHOLDER: add a real portrait at public/photos/mariya.jpg
    location: 'Lahore, Pakistan', // PLACEHOLDER: confirm location
    intro:
      'Originally from Lahore, I have always considered myself a self-made woman with a curious mind and a desire to understand life beyond its boundaries. My TikTok journey began with a challenge — hosting and live matches — and grew into a dream: how can we make this challenging platform easier and better for women? That question became Mariya Media Ltd.',
    quote: 'Where Every Creator Has the Opportunity to Grow.',
    links: {
      tiktok: 'https://www.tiktok.com/@mariyarajpoot', // PLACEHOLDER
      instagram: 'https://www.instagram.com/mariyarajpoot', // PLACEHOLDER
      whatsapp: '', // optional, e.g. https://wa.me/923000000000
    },
  },
  {
    id: 'aryam',
    group: 'Leadership',
    name: 'Aryam', // PLACEHOLDER: surname to be confirmed by the client
    role: 'Co-Founder',
    photo: null, // PLACEHOLDER: add a real portrait at public/photos/aryam.jpg
    location: 'Pakistan', // PLACEHOLDER: confirm location
    intro:
      'Mariya Media Ltd was born from a simple promise: when someone I believe in has a dream, I will stand beside them and help turn that dream into reality. My journey with Mariya Media Ltd began because of my partner, Mariya, whose dream was to build her own agency. For me, supporting that dream was never a question. That belief became the foundation of what is now Mariya Media Ltd.',
    quote: 'I don’t simply want to create creators. I want to help create confidence.',
    links: {
      tiktok: 'https://www.tiktok.com/@aryam', // PLACEHOLDER
      instagram: '', // optional placeholder
      whatsapp: '', // optional
    },
  },

  // ── Managers ──────────────────────────────────────────────────────────────
  // PLACEHOLDER: dummy crew members below — replace with the real team.
  {
    id: 'manager-1',
    group: 'Managers',
    name: 'Sana Iqbal',
    role: 'Creator Manager (placeholder)',
    photo: null,
    location: 'Karachi, Pakistan', // PLACEHOLDER
    intro:
      'Placeholder profile. This manager supports a roster of hosts with daily session planning, performance reviews and platform guidance. Replace this block with the real team member’s details.',
    quote: 'Consistency beats intensity — every single time.',
    links: {
      tiktok: 'https://www.tiktok.com/@placeholder', // PLACEHOLDER
      instagram: '',
      whatsapp: '',
    },
  },
  {
    id: 'manager-2',
    group: 'Managers',
    name: 'Bilal Ahmed',
    role: 'Community Manager (placeholder)',
    photo: null,
    location: 'Islamabad, Pakistan', // PLACEHOLDER
    intro:
      'Placeholder profile. This manager looks after community care, moderation standards and creator onboarding. Replace with the real team member.',
    quote: 'A strong room is built by welcome, not by noise.',
    links: {
      tiktok: 'https://www.tiktok.com/@placeholder', // PLACEHOLDER
      instagram: '',
      whatsapp: '',
    },
  },

  // ── Senior Hosts ──────────────────────────────────────────────────────────
  {
    id: 'senior-host-1',
    group: 'Senior Hosts',
    name: 'Hina Malik',
    role: 'Senior Host (placeholder)',
    photo: null,
    location: 'Lahore, Pakistan', // PLACEHOLDER
    intro:
      'Placeholder profile. A senior host who trains newcomers in room flow, games and match hosting, and leads by example on every LIVE. Replace with the real team member.',
    quote: 'Your first LIVE is the hardest. After that, it’s home.',
    links: {
      tiktok: 'https://www.tiktok.com/@placeholder', // PLACEHOLDER
      instagram: '',
      whatsapp: '',
    },
  },
  {
    id: 'senior-host-2',
    group: 'Senior Hosts',
    name: 'Zara Khan',
    role: 'Senior Host (placeholder)',
    photo: null,
    location: 'Dubai, UAE', // PLACEHOLDER
    intro:
      'Placeholder profile. Mentors hosts on audience engagement and handles high-traffic LIVE sessions with calm and confidence. Replace with the real team member.',
    quote: 'Talk to one person, not to a crowd.',
    links: {
      tiktok: 'https://www.tiktok.com/@placeholder', // PLACEHOLDER
      instagram: '',
      whatsapp: '',
    },
  },

  // ── Hosts ─────────────────────────────────────────────────────────────────
  {
    id: 'host-1',
    group: 'Hosts',
    name: 'Ayesha Noor',
    role: 'LIVE Host (placeholder)',
    photo: null,
    location: 'Rawalpindi, Pakistan', // PLACEHOLDER
    intro:
      'Placeholder profile. A LIVE host specialising in interactive games and evening sessions. Replace with the real team member.',
    quote: 'Alhamdulillah for every small win.',
    links: {
      tiktok: 'https://www.tiktok.com/@placeholder', // PLACEHOLDER
      instagram: '',
      whatsapp: '',
    },
  },
  {
    id: 'host-2',
    group: 'Hosts',
    name: 'Fatima Raza',
    role: 'LIVE Host (placeholder)',
    photo: null,
    location: 'Lahore, Pakistan', // PLACEHOLDER
    intro:
      'Placeholder profile. Hosts community-focused LIVE sessions and helps welcome new viewers into the room. Replace with the real team member.',
    quote: 'Every viewer was once a first-time visitor.',
    links: {
      tiktok: 'https://www.tiktok.com/@placeholder', // PLACEHOLDER
      instagram: '',
      whatsapp: '',
    },
  },
  {
    id: 'host-3',
    group: 'Hosts',
    name: 'Usman Tariq',
    role: 'LIVE Host (placeholder)',
    photo: null,
    location: 'Faisalabad, Pakistan', // PLACEHOLDER
    intro:
      'Placeholder profile. Focused on match hosting and consistent daily sessions. Replace with the real team member.',
    quote: 'Show up, every day, on time.',
    links: {
      tiktok: 'https://www.tiktok.com/@placeholder', // PLACEHOLDER
      instagram: '',
      whatsapp: '',
    },
  },
]
