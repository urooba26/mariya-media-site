# Mariya Media Ltd — Website

A production-quality static site for **Mariya Media Ltd (TikTok agency)**:
premium dark luxury meets TikTok energy — deep black, metallic gold gradients,
and electric cyan / TikTok pink used sparingly as glows.

Built with **Vite + React (JavaScript)** · **React Router (HashRouter)** ·
**Framer Motion** · **Swiper** · **lucide-react** · **react-helmet-async** · plain CSS.

---

## Quick start

```bash
npm install
npm run dev        # local dev server (default http://localhost:5173)
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

The build is fully static — `dist/` can be deployed to Netlify, Vercel or
GitHub Pages for free.

---

## Navigation structure (why hybrid)

1. The site is a **hybrid**: a rich home page that teases every section, plus
   five dedicated routes (`/what-we-do`, `/expertise`, `/crew`, `/about`, `/contact`).
2. This gives first-time TikTok visitors an instant "everything we do" overview
   in one scroll, which a pure multi-page site would hide behind clicks.
3. But deep content — the crew zig-zag, the founder letters, the expertise
   detail — would overload a single page, so it lives on its own route.
4. Every teaser ends in an **Explore / Read more** button that hands off to the
   dedicated route, and the navbar/footer are identical everywhere.
5. **HashRouter** (`/#/crew`) is used so the same build works on GitHub Pages
   without server rewrite rules; `public/_redirects` is included for Netlify too.

---

## Editing content (no code knowledge needed)

| What you want to change | File |
|---|---|
| WhatsApp number / message | `src/config.js` → `WHATSAPP_NUMBER`, `WHATSAPP_MESSAGE` |
| Notification / contact email | `src/config.js` → `CONTACT_EMAIL` |
| Social links | `src/config.js` → `SOCIALS` |
| Google Apps Script URL | `src/config.js` → `GOOGLE_APPS_SCRIPT_URL` |
| Interest dropdown options | `src/config.js` → `INTEREST_OPTIONS` |
| Stats, hero copy, marquee, FAQs | `src/data/site.js` |
| Achievements carousel | `src/data/achievements.js` |
| Crew members & tabs | `src/data/crew.js` |
| Services (What We Do) | `src/data/services.js` |
| Expertise areas + Why Us | `src/data/expertise.js` |
| About: story, mission, values, timeline, founders | `src/data/about.js` |

Anything marked `// PLACEHOLDER` is dummy data — see **[PLACEHOLDERS.md](PLACEHOLDERS.md)**
for the full checklist.

### Setting the WhatsApp number

Open `src/config.js` and change:

```js
export const WHATSAPP_NUMBER = '923001234567' // digits only, WITH country code
export const WHATSAPP_MESSAGE = 'Hi Mariya Media Ltd! …'
```

Every WhatsApp link (floating button, contact page, footer, mobile menu) builds
`https://wa.me/<number>?text=<url-encoded message>` from these two values.

---

## Connecting the contact form to Google Sheets

The form POSTs JSON to a Google Apps Script Web App using
`Content-Type: text/plain` (which avoids CORS preflight blocking).

1. Create a Google Sheet: <https://sheets.new>
2. **Extensions → Apps Script**
3. Delete the default code and paste the whole of **[`apps-script/Code.gs`](apps-script/Code.gs)**.
4. At the top of the script set your inbox:
   ```js
   var OWNER_EMAIL = 'you@gmail.com';
   ```
5. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**, copy the URL (ends in `/exec`)
6. Paste it into `src/config.js`:
   ```js
   export const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/…/exec'
   ```
7. Redeploy the site.

On first submission the script writes the header row automatically
(`Timestamp | Name | TikTok ID | Email | Phone | Interest | Message`) and
emails the details to `OWNER_EMAIL` via `MailApp`.

> **While `GOOGLE_APPS_SCRIPT_URL` is empty**, the form still runs validation
> and shows the success state after a short delay (submission simulated), so
> you can preview the flow. Check the browser console for the notice.

Spam protection: a hidden **honeypot** field — bots that fill it get a fake
success and nothing is sent.

---

## Deployment (free)

The build uses **HashRouter**, so it needs no server rewrite rules anywhere.

### Netlify
1. `npm run build`
2. Drag the `dist/` folder onto <https://app.netlify.com/drop>
   - Or connect the repo: build command `npm run build`, publish dir `dist`
3. `public/_redirects` is included if you later switch to history routing.

### Vercel
1. Import the repo — framework **Vite**, build `npm run build`, output `dist`
2. Or `npm i -g vercel && vercel` and accept the defaults.

### GitHub Pages
Already wired up: `.github/workflows/deploy.yml` builds and publishes `dist/`
on every push to `main`.

> **Base path:** `vite.config.js` sets `base: '/mariya-media-site/'` for the
> GitHub Pages project URL. For Netlify/Vercel/custom domains run:
> ```bash
> VITE_BASE=/ npm run build
> ```

---

## Project structure

```
├── apps-script/Code.gs      Google Apps Script (sheet + notification email)
├── public/                  logo, _redirects
├── src/
│   ├── components/          Navbar, Footer, buttons, cards, form, carousel…
│   ├── data/                ← all editable content (non-developer friendly)
│   ├── config.js            ← all contact settings in one place
│   ├── pages/               Home, WhatWeDo, Expertise, Crew, About, Contact, 404
│   ├── styles/              tokens · base · components · pages
│   ├── App.jsx              routes + page transitions
│   └── main.jsx             entry
├── PLACEHOLDERS.md          everything you need to replace
└── README.md
```

---

## Accessibility & performance notes

- `prefers-reduced-motion` disables preloader, parallax, marquee, counters,
  cursor glow and all Framer Motion transitions.
- Skip link, visible gold focus states, aria labels on menus/tabs/accordions.
- Routes are lazy-loaded; images use `loading="lazy"` + `decoding="async"`.
- All placeholder photos are generated locally (no external image requests).
- SEO + Open Graph tags are set per route via `react-helmet-async`.
