// All site content lives here. Set `src` on any photo item to use a real image.
export const NAV = [['#top','Home'],['#achievements','Achievements'],['#what','What We Do'],['#expertise','Expertise'],['#crew','Our Crew'],['#about','About Us'],['#contact','Contact']]
export const STATS = [[500,'+','Hosts onboarded'],[20,'M+','Monthly viewers'],[5,' yrs','In live media']]
export const TICKER = [['tiktok','TikTok LIVE Agency'],['music','Creator Program'],['bolt','Instant Payouts'],['heart','20M+ Monthly Views'],['sparkles','On-Camera Training'],['flame','Talent Management'],['play','Brand Partnerships'],['star','Top Ranked Agency']]
export const ACHIEVEMENTS = ['Top Host Award','1M Gift Milestone','Creator Summit','Agency of the Year','Best Team'].map(t => ({ title: t, src: null }))
export const SERVICES = [
  ['mic','Host Training','Learn on-camera skills, engagement and monetisation from working pros.'],
  ['headphones','Coaching Assistant','One-to-one guidance on content, schedules and growth goals.'],
  ['users','Ongoing Support','A real team on hand for account and payout questions.'],
  ['share','Network Access','Collaborate with hosts and brands across our creator network.']]
export const EXPERTISE = [
  ['user-cog','Account Growth','Plans to grow followers and viewers.'],['pen','Content Strategy','Show formats that keep people watching.'],
  ['target','Live Stream Support','Technical and moderation help in real time.'],['trend','Performance Guidance','Metrics reviews and next-step advice.'],
  ['shield','Identity Verification','Fast, safe account verification.'],['life','Resolution Help','Quick fixes for bans and disputes.'],
  ['chart','Revenue Insights','Clear reporting on earnings.'],['users','Community Building','Grow loyal, active fan communities.']]
export const CREW = [
  ['Aryam Khalid','Agency Manager','Karachi, Pakistan','aryam@mariyamedia.com'],
  ['Tim Haldorsson','Senior Host Coach','Gothenburg, Sweden','tim@mariyamedia.com'],
  ['Lina Farooq','Live Stream Host','Lahore, Pakistan','lina@mariyamedia.com'],
  ['Omar Sadiq','Content Reviewer','Dubai, UAE','omar@mariyamedia.com']
].map(([name, role, location, email], i) => ({ id: i, name, role, location, email, src: null }))
export const FOOTER_LINKS = {
  'Quick Links': [['#top','Home'],['#achievements','Achievements'],['#what','What We Do'],['#about','About Us']],
  Services: [['#what','Host Training'],['#what','Coaching'],['#expertise','Verification'],['#expertise','Strategy']]}
