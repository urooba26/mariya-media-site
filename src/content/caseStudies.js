// Case studies — full client engagements with before/after metrics and growth series for charts.
export const CASE_STUDIES = [
  {
    slug: 'lumiere-beauty-tiktok-shop',
    client: 'Lumière Beauty',
    logoText: 'LB',
    industry: 'Beauty & Skincare',
    region: 'UK & EU',
    duration: '8 months',
    title: 'From zero to $4.1M: Lumière’s TikTok Shop takeover',
    tagline: 'A 3-year-old indie skincare brand with no social proof, built into TikTok Shop’s Top 50 UK sellers.',
    challenge:
      'Lumière had a cult product and a warehouse full of inventory, but no social presence: 2,100 Instagram followers, no TikTok account, and a cost-per-acquisition that had risen 60% year over year on Meta ads. Paid acquisition was no longer survivable — they needed an owned demand channel.',
    strategy:
      'We skipped the "build followers first" playbook entirely. Instead: a 90-day Shop-first assault combining founder-led story content, a 30-creator affiliate army, and a weekly LIVE shopping show — engineered so every viral moment landed on a product card, not a like.',
    solution: [
      ['Shop-first architecture', 'Product catalogue rebuilt with 14 hero SKUs, bundle offers and live-exclusive pricing.'],
      ['Founder as face', 'CEO trained and coached to present weekly; authenticity outperformed polished ads 4:1.'],
      ['Affiliate army', '30 creators recruited on commission, briefed with proven hooks and posting windows.'],
      ['Weekly LIVE show', 'A 90-minute Tuesday shopping LIVE with rundown, moderator and post-show debrief.'],
    ],
    execution: [
      ['Weeks 1–3', 'Foundation', 'Catalogue rebuild, founder coaching, creator recruitment.'],
      ['Weeks 4–8', 'Ignition', 'First affiliate posts ship; first LIVEs; hook testing across 6 formats.'],
      ['Weeks 9–16', 'Scale', 'Winning formats doubled down; daily posting cadence; Shop ads layered in.'],
      ['Months 4–8', 'Compound', 'Seasonal drops, creator roster scaled to 85, LIVE moved to weekly.'],
    ],
    results: [
      ['$4.1M', 'Attributed revenue'],
      ['612%', 'ROAS on Shop ads'],
      ['187k', 'New followers'],
      ['8.2M', 'Campaign views'],
    ],
    beforeAfter: {
      monthlyRevenue: [38, 145, 620, 1140, 1780, 2450, 3310, 4100], // $k per month
      followers: [2.1, 8.4, 24, 51, 88, 121, 158, 187], // k
      engagement: [1.2, 2.8, 4.1, 5.6, 6.2, 6.9, 7.4, 7.8], // %
      labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8'],
    },
    comparison: [
      ['Monthly revenue', '$38k', '$4.1M'],
      ['Followers', '2,100', '187,000'],
      ['Engagement rate', '1.2%', '7.8%'],
      ['CAC', '$41', '$9'],
    ],
    quote: {
      text: 'We stopped renting our growth from Meta and started owning it. Mariya Media didn’t just get us views — they built a sales channel we control.',
      by: 'Elaine Voss, Founder & CEO, Lumière Beauty',
    },
  },
  {
    slug: 'pulse-fitness-app',
    client: 'Pulse Fitness',
    logoText: 'PF',
    industry: 'Health & Fitness',
    region: 'US',
    duration: '6 months',
    title: 'Pulse Fitness: 312k app installs from a standing start',
    tagline: 'A subscription fitness app that turned trainer-led TikTok content into its #1 install channel.',
    challenge:
      'Pulse was spending $180k/month on paid acquisition with a 4.1-month payback horizon — too slow to scale. Their six trainers were charismatic on camera but were posting twice a month, unscripted, with no retention strategy. The content was being wasted.',
    strategy:
      'Turn trainers into personalities, and personalities into pipelines. We built six distinct content personas with signature series, each engineered around the “open loop” structure that keeps viewers watching — then connected every video to a trial CTA with a creator-specific promo code.',
    solution: [
      ['Persona system', 'Six trainers, six distinct formats: “60-second burn”, “Gym mistakes”, “Form fix”, and three more.'],
      ['Series architecture', 'Episodic formats with cliffhangers — average profile visit rate tripled.'],
      ['UGC engine', '20 videos/week produced with an in-house editing pod working to retention standards.'],
      ['Attribution rig', 'Creator-specific codes and deep links measuring installs to the video level.'],
    ],
    execution: [
      ['Weeks 1–4', 'Persona workshop', 'Trainer casting, format design, hook libraries per persona.'],
      ['Weeks 5–8', 'Pilot', 'Two formats per trainer; daily retention reviews.'],
      ['Months 3–4', 'Scale', 'Winning series scaled; publishing to 4x/week per trainer.'],
      ['Months 5–6', 'Optimize', 'CTA and offer testing; email retargeting from TikTok traffic.'],
    ],
    results: [
      ['312k', 'App installs'],
      ['$4.20', 'Blended CPI (from $11.90)'],
      ['54M', 'Organic views'],
      ['18min', 'Avg. daily time in-app (from 9)'],
    ],
    beforeAfter: {
      monthlyRevenue: [92, 130, 240, 390, 560, 700], // subscription $k
      followers: [11, 38, 94, 167, 248, 321], // k across trainer accounts
      engagement: [2.1, 4.4, 6.1, 7.0, 7.6, 8.1],
      labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6'],
    },
    comparison: [
      ['Cost per install', '$11.90', '$4.20'],
      ['Monthly installs', '15.1k', '61.4k'],
      ['Monthly subscribers', '2.4k', '$700k MRR'],
      ['Video cadence', '2/month', '80/week'],
    ],
    quote: {
      text: 'Our trainers went from invisible to inescapable. TikTok is now the first line in every board deck because it is the channel that actually scales.',
      by: 'Marcus Chen, VP Growth, Pulse Fitness',
    },
  },
  {
    slug: 'nordic-home-living',
    client: 'Nordic Home Living',
    logoText: 'NH',
    industry: 'Home & Interiors',
    region: 'Nordics & DACH',
    duration: '10 months',
    title: 'Nordic Home Living: a slow category made addictive',
    tagline: 'How a furniture retailer built a 148k-follower interior design engine in a category TikTok “doesn’t work for”.',
    challenge:
      'Home interiors was the category everyone said TikTok couldn’t sell: high consideration, high price, long decision cycles. Nordic Home Living had beautiful products, a network of 46 physical stores, and zero organic social traction after two failed agency engagements.',
    strategy:
      'We treated the algorithm like an interiors magazine: “before/after” transformation arcs, “stylist secrets” authority content, and shoppable room tours — a format stack that turns 15-second videos into saved, shared, high-intent traffic.',
    solution: [
      ['Transformation arcs', 'Room makeover series filmed over days — the payoff structure drives saves and shares.'],
      ['Authority series', '“Stylist secrets” clips establishing expertise; the brand’s designers became the faces.'],
      ['Shoppable rooms', 'Every room tour tagged with the full product list; average basket of €340.'],
      ['Store integration', 'In-store content days feeding authentic footage; local store tags for footfall.'],
    ],
    execution: [
      ['Month 1', 'Proof of concept', 'One transformation series piloted in Stockholm; retention validated.'],
      ['Months 2–3', 'Format expansion', 'Three series added; styling team trained for camera.'],
      ['Months 4–6', 'Scale-up', 'Posting to 5/week; creator collaborations; DACH localization.'],
      ['Months 7–10', 'Commerce layer', 'Shop integration, live room tours, holiday campaign (€780k in 6 weeks).'],
    ],
    results: [
      ['148k', 'Followers gained'],
      ['€6.2M', 'Attributed revenue'],
      ['22M', 'Organic views'],
      ['31x', 'Return on retainer'],
    ],
    beforeAfter: {
      monthlyRevenue: [64, 110, 260, 480, 790, 1150, 1620, 2100, 2650, 3100], // €k
      followers: [3.2, 14, 33, 52, 71, 94, 112, 128, 141, 148],
      engagement: [0.9, 2.2, 3.8, 5.1, 5.9, 6.4, 6.8, 7.1, 7.3, 7.5],
      labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10'],
    },
    comparison: [
      ['Followers', '1,400', '148,000'],
      ['Monthly revenue (social)', '€0', '€3.1M'],
      ['Content cadence', '0/week', '5/week'],
      ['Saves per post', '12', '2,140'],
    ],
    quote: {
      text: 'Everyone told us furniture doesn’t go viral. Mariya Media proved the category wasn’t the problem — the storytelling was.',
      by: 'Ingrid Solberg, CMO, Nordic Home Living',
    },
  },
  {
    slug: 'volt-energy-drink',
    client: 'Volt Energy',
    logoText: 'VE',
    industry: 'Food & Beverage',
    region: 'UK & Middle East',
    duration: '5 months',
    title: 'Volt Energy: 41M views and a sell-out launch',
    tagline: 'A new energy drink’s launch campaign that emptied warehouse stock in 19 days.',
    challenge:
      'Volt was launching into a market dominated by two global giants, with a $120k launch budget — roughly 0.02% of what incumbents spend. The product was genuinely different (zero sugar, natural caffeine), but nobody had heard of it. Retail buyers needed proof of demand before listing.',
    strategy:
      'Manufacture a cultural moment: a 3-phase launch built on stunt-adjacent creator challenges, a LIVE launch night, and an aggressive affiliate wave timed to retail buyer review cycles — so the sell-out numbers arrived exactly when buyers were deciding.',
    solution: [
      ['Challenge format', '“The Volt 30” creator challenge — a 30-second endurance format designed for duets and stitches.'],
      ['Launch night LIVE', 'A three-hour LIVE with athletes and creators; 4,100 units sold during broadcast.'],
      ['Affiliate wave', '90 creators posting inside a 10-day window for algorithmic concentration.'],
      ['Buyer evidence pack', 'Weekly sell-through and view reports packaged for retail buyers.'],
    ],
    execution: [
      ['Weeks 1–2', 'Tease', 'Seeding to 90 creators; mystery packaging; countdown format.'],
      ['Week 3', 'Launch', 'Challenge goes live; LIVE launch night; Shop inventory released.'],
      ['Weeks 4–7', 'Amplify', 'Wave 2 creators; UGC remix; press outreach with performance data.'],
      ['Weeks 8–20', 'Sustain', 'Always-on affiliate program; three new retail listings secured.'],
    ],
    results: [
      ['41M', 'Views'],
      ['19 days', 'To sell-out'],
      ['3', 'National retail listings'],
      ['7.4x', 'ROAS'],
    ],
    beforeAfter: {
      monthlyRevenue: [0, 85, 640, 890, 1150], // $k
      followers: [0.4, 12, 44, 78, 112],
      engagement: [0, 5.1, 7.8, 8.4, 8.1],
      labels: ['Pre', 'Wk2', 'Wk6', 'Wk12', 'Wk20'],
    },
    comparison: [
      ['Awareness (aided)', '4%', '38%'],
      ['Warehouse stock', 'Full', 'Sold out (19 days)'],
      ['Retail listings', '0', '3 national chains'],
      ['Views', '0', '41M'],
    ],
    quote: {
      text: 'Retail buyers don’t care about awards — they care about sell-through. Mariya Media handed us charts that got us shelved in three chains.',
      by: 'David Okonkwo, Brand Director, Volt Energy',
    },
  },
]

export const getCaseStudy = (slug) => CASE_STUDIES.find((c) => c.slug === slug)
