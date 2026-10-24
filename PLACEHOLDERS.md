# PLACEHOLDERS.md — everything to replace before going live

Every item below is **dummy / sample data**. Each is marked with a
`// PLACEHOLDER` comment in the code, so you can also search the project
for `PLACEHOLDER` to find them in context.

> ⚠️ **Do not ship fake numbers as real claims.** Sample stats, achievements
> and rewards below are for layout only — swap them for verified figures,
> or delete the row, before promoting the site.

---

## 1. Contact settings — [`src/config.js`](src/config.js)

| What | Current value | What to put |
|---|---|---|
| `SITE.url` | `https://example.com` | Your real domain (used in meta/OG tags) |
| `WHATSAPP_NUMBER` | ✅ Real: `48669296554` (+48 669 296 554) | — |
| `WHATSAPP_MESSAGE` | "Hi Mariya Media Ltd!…" | Optional: tweak the pre-filled message |
| `CONTACT_EMAIL` | ✅ Real: `ariyam0804@gmail.com` | — |
| `GOOGLE_APPS_SCRIPT_URL` | `''` (empty → form simulates submit) | Your deployed `/exec` Web App URL |
| `SOCIALS[].url` | `@youragency` dummy links | Real TikTok / Instagram / YouTube profile URLs |

The floating WhatsApp button reads `WHATSAPP_NUMBER` + `WHATSAPP_MESSAGE`,
so updating `config.js` once updates **every** WhatsApp link on the site.

---

## 2. Sample statistics — [`src/data/site.js`](src/data/site.js)

`STATS` array — **sample content, not verified figures**:

- `500+ Hosts trained & supported`
- `20M+ Monthly LIVE views generated`
- `45+ Countries reached`
- `24/7 Community support`
- `5 yrs In live media`

Also in `site.js`:
- `HERO.liveViewers` (`'1.2K'`) — the fake LIVE counter in the hero.
- `HERO` headline/subtitle — sample wording, freely editable.
- `FAQS` answers — written to match the agency's services; adjust wording as needed.

---

## 3. Achievements carousel — [`src/data/achievements.js`](src/data/achievements.js)

All 6 cards are **dummy data**: titles, `@sample.creator.*` handles, rewards
and tags. Replace with genuine milestones, or point `image` at real
thumbnails in `public/photos/`.

---

## 4. Crew — [`src/data/crew.js`](src/data/crew.js)

| Member | Status |
|---|---|
| **Mariya Rajpoot** — Co-Founder | Real intro + quote supplied. **Photo** and **location** are placeholders; TikTok/Instagram URLs are placeholders. |
| **Aryam Hasmi** — Founder | Real intro supplied. Name and title confirmed by the client. Photo, location, social URLs are placeholders. |
| Sana Iqbal, Bilal Ahmed | **Dummy managers** — replace names, roles, bios, photos, links |
| Hina Malik, Zara Khan | **Dummy senior hosts** — replace everything |
| Ayesha Noor, Fatima Raza, Usman Tariq | **Dummy hosts** — replace everything |

Every crew member's `photo: null` renders the generated gold placeholder card.
Drop real photos into `public/photos/` and set e.g. `photo: '/photos/mariya.jpg'`
— **note:** with GitHub Pages sub-path deploys, prefer `photo: 'photos/mariya.jpg'`
via the same `import.meta.env.BASE_URL` pattern used for the logo if images fail.

---

## 5. Service & expertise copy

- [`src/data/services.js`](src/data/services.js) — **real agency profile text**
  (Creator Management → Community Support). The two `CORE_SERVICES`
  (Host Training / Host Assistant) have **sample bullet lists** written by us —
  review and adjust the details.
- [`src/data/expertise.js`](src/data/expertise.js) — descriptions and bullets are
  **sample wording** built from the supplied service list. No prices included
  (per your instruction). `WHY_US` is the agency's real values text.

---

## 6. About page — [`src/data/about.js`](src/data/about.js)

| Content | Status |
|---|---|
| `STORY`, `MISSION`, `VISION`, `VALUES` | ✅ Real supplied copy (light grammar polish only) |
| `FOUNDERS[0]` Mariya Rajpoot (Co-Founder) — intro, pull quote, "Beyond the Co-Founder", "My Promise" | ✅ Real supplied copy |
| `FOUNDERS[1]` Aryam Hasmi (Founder) — journey, purpose, leadership, difference, message, vision | ✅ Real supplied copy |
| Founders' names & titles | ✅ Confirmed: **Aryam Hasmi — Founder**, **Mariya Rajpoot — Co-Founder** |
| `TIMELINE` (2021–2025) | **Sample dates/titles** — confirm the real milestones |
| **Split of the founder letter** | ⚠️ The client's two supplied texts arrived as one long letter attributed to the co-founder. We split it by voice: **Mariya** → *Beyond the Founder*, *My Promise*; **Aryam** → *Journey to TikTok*, *My Purpose*, *Leadership Philosophy*, *What Makes Us Different*, *A Message to Creators*, *My Vision*. Re-assign any section by moving it between the two `sections` arrays above. |
| Founder portraits | Placeholders (`photo: null`) — add real portraits |
| `FOUNDER_SIGNOFF.line` | Real supplied tagline |

---

## 7. Site-wide

- `index.html` — default `<title>`, description and OG image (logo) are fine;
  update the canonical URL once the domain is known.
- `public/logo.jpg` — the real logo, used everywhere (navbar, footer,
  preloader, favicon, OG image).
- Location line: ✅ Confirmed as **"Worldwide — we work remotely"**
  (`src/components/Footer.jsx` and `src/pages/Contact.jsx`).

---

## 8. Images at a glance

| Slot | Where it renders | How to fill it |
|---|---|---|
| Hero creator photo | Home hero | Add `public/photos/hero.jpg`, set `src` in `src/pages/Home.jsx` |
| Crew portraits | Crew page + home strip + About founders | `photo` field in `crew.js` / `about.js` |
| Achievement thumbnails | Carousel | `image` field in `achievements.js` |

Everything without a photo shows a **generated gold gradient + initials**
placeholder — there are no broken image icons and no external image requests.
