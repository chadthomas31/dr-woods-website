# Site IA, navigation, and legacy content parity

**Status:** Approved for implementation planning  
**Legacy reference:** [robertlwoodsmd.com](https://www.robertlwoodsmd.com/) (Zing.work / current production)  
**Date:** 2026-03-23

## 1. Goals

- Present **three balanced visitor paths**: start care (contact + phone), learn & decide (about + services), policies & logistics (policies, privacy, fees).
- Use **familiar medical-site labels** (Home, About, Services, Policies, Contact) with **reorder and retooling**—not generic “hub” nav labels.
- **Meet or exceed** production content: every substantive fact, narrative block, and policy text from the live site should exist in the new site (edited for typos/clarity only where noted).
- **Improve** on production UX, IA, broken/wrong patterns, and SEO; **do not** reproduce obvious CMS artifacts or third-party template errors.

## 2. Information architecture (navigation)

### 2.1 Primary nav order (left → right)

1. **Home** → `/`
2. **About Me** → `/about` (dropdown: deep links below)
3. **Services** → `/services` (dropdown: each item → `/services#{stable-id}`)
4. **Policies and Procedures** → `/policies`
5. **Contact** (or **Contact Me**—pick one; use consistently in nav, footer, and metadata)

**Rationale:** Learn & decide (About + Services) appears before Policies; Contact remains the natural end-cap for “start care.”

### 2.2 About Me dropdown — targets and labels

Align menu labels with on-page `id`s and **title case** (match or improve on live capitalization).

| Label (recommended)        | Target                    | Notes |
|----------------------------|---------------------------|--------|
| Journey of passion         | `/about#journey`          | Live: [A Journey Of Passion](https://www.robertlwoodsmd.com/a-journey-of-passion) — full narrative must be ported (see §4). |
| Dance career               | `/about#dance-section` or `/about#dance` | Teaser vs gallery: default **teaser** (`#dance-section`); optional second line to gallery (`#dance`) if desired. |
| Computer books             | `/about#computer-books`   | Live label “ComputerBooks” → normalize spacing/case. |
| Accolades and testimonials | `/about#accolades`        | |

**Live-only placeholders** on [about-us](https://www.robertlwoodsmd.com/about-us): “Education & Training,” “Medical Career” (under construction), “Resources” (coming soon). **Decision:** Either (a) add matching placeholder sections on `/about` with honest “coming soon” copy, or (b) omit until Dr. Woods supplies copy—**do not** imply content exists. Record the choice in the implementation plan.

### 2.3 Services dropdown

- Add **stable `id` attributes** on each service block on `/services` (slug derived from service key, e.g. `psychiatric-diagnostic-evaluation`).
- Each dropdown entry → `/services#{slug}`.
- **Nav labels** must match `practiceData.services[].name` or an explicit `navLabel` field—no drift between menu and page headings.
- Legacy services page: [health-insurance](https://www.robertlwoodsmd.com/health-insurance) (misnamed URL on live). Use its body copy as the **source of truth** for parity; reconcile differences with current `practiceData` (prefer clearer wording; fix live typos e.g. “refererring” → “referring”).

### 2.4 Top bar

Keep **phone** + **schedule** + path to care. Optional third link **Policies** → `/policies` if the bar has room without clutter; if not, **footer** must clearly surface policies/privacy so that journey is not weaker than the others.

### 2.5 Footer

Rebalance columns so the three journeys are obvious:

- **Learn:** About, Services (and key links as needed).
- **Start care:** Phone, email, `/contact`.
- **Policies:** `/policies`, privacy/HIPAA links consistent with page content.

## 3. Legacy site audit (summary)

### 3.1 What to preserve

- **Positioning:** Concierge psychiatry, home visits, telepsychiatry, 25+ years, cancer recovery / return to practice narrative on home and about flows ([homepage](https://www.robertlwoodsmd.com/), [about-us](https://www.robertlwoodsmd.com/about-us)).
- **Hero tagline:** “Empowering Minds Enriching Lives” (live matches new site intent).
- **Long-form Journey** text from [a-journey-of-passion](https://www.robertlwoodsmd.com/a-journey-of-passion) — ensure `practiceData` / About sections contain the **full** story, not a shortened substitute.
- **Services** descriptions from [health-insurance](https://www.robertlwoodsmd.com/health-insurance) (all listed modalities).
- **Privacy:** [data-privacy](https://www.robertlwoodsmd.com/data-privacy) — last updated July 7, 2024; migrate into `/policies` or a dedicated privacy section as appropriate so footer “Data Privacy Policy” is not a dead end.
- **Contact:** Address, phone, email (3305 Molino, Irvine, CA 92618; 714-336-8042; rwoodsmd@me.com).

### 3.2 What to improve (do not copy blindly)

| Issue on live | New site behavior |
|---------------|-------------------|
| Homepage “conditions” area shows **“Basement Finishing”** and typos (“Adiction,” “Depresion”) | Use intentional condition list; correct spelling; no template junk. |
| Contact form “Service Inquiry” options are **wrong vertical** (“Personal Care Assistance,” housekeeping) | Replace with psychiatry-appropriate options or free-text; align with concierge practice. |
| Services live URL is `/health-insurance` | Use `/services`; add **redirects** from legacy URLs when launching. |
| About sub-stories split across many URLs | Single `/about` with anchors **improves** UX; add **301 redirects** from old paths (see §5). |
| Duplicate/boilerplate nav noise in fetched content | One clean `practiceData.nav`; consistent Header/Footer. |

### 3.3 Additional legacy URLs to crawl for parity

Implement migration pass (manual or scripted) for:

- [dance-career](https://www.robertlwoodsmd.com/dance-career)
- [computerbooks](https://www.robertlwoodsmd.com/computerbooks)
- [accolades-and-testimonials](https://www.robertlwoodsmd.com/accolades-and-testimonials)

Confirm each block’s text and images exist on the new `/about` (or linked assets). **Images:** preserve alt text and meaning; optimize for Next/Image.

## 4. Content migration checklist (acceptance)

- [ ] Home: hero, about teaser, conditions list, services teaser, mission, book CTA — parity with live **minus** errors listed in §3.2.
- [ ] About: intro (“Receive the Highest Quality…”), travel-to-patient paragraph, condition bullets, **About Doctor Woods** subsections (journey, dance, computer books, accolades) — full text from legacy subpages where applicable.
- [ ] Services: every service block from [health-insurance](https://www.robertlwoodsmd.com/health-insurance) with durations/fees alignment to `fees` in `practiceData` where relevant.
- [ ] Policies: HIPAA + fee schedule + payment/cancellation + **privacy policy text** from [data-privacy](https://www.robertlwoodsmd.com/data-privacy).
- [ ] Contact: correct practice fields; working submission path (if form exists); visible phone/email/address.
- [ ] Footer: explore links, contact block, copyright, privacy link.
- [ ] **Optional placeholders:** Education & training, medical career, resources — match live “under construction” honesty or omit explicitly.

## 5. Redirects (launch)

When the new site replaces production, configure redirects at the hosting layer (e.g. Vercel `redirects` in `next.config.js` or host rules):

| Legacy path | New target |
|-------------|------------|
| `/about-us` | `/about` |
| `/a-journey-of-passion` | `/about#journey` |
| `/dance-career` | `/about#dance-section` or `#dance` (match chosen default) |
| `/computerbooks` | `/about#computer-books` |
| `/accolades-and-testimonials` | `/about#accolades` |
| `/health-insurance` | `/services` |
| `/contact-and-support` | `/contact` |
| `/data-privacy` | `/policies` (or `#privacy` if split within page) |

Verify with a crawl after deploy.

## 6. Single source of truth

- **`app/lib/practice-data.ts`** (and small TS types): nav, doctor info, services, about sections, fees, HIPAA, mission, hero copy.
- **Components** consume data; avoid duplicating strings in JSX except for purely presentational wrappers.

## 7. Accessibility and polish

- Dropdown keyboard support and focus; `aria-expanded` where applicable.
- Anchor targets use `scroll-mt-*` compatible with fixed header.
- Consistent casing (“Contact me” vs “CONTACT me” → pick sentence or title case site-wide).

## 8. Next step

Invoke **writing-plans** to produce an implementation plan: data diff (legacy vs repo), redirect config, `practiceData` updates, `/services` ids, nav/footer updates, optional placeholder sections, QA checklist.

---

## References (live site)

- [Homepage](https://www.robertlwoodsmd.com/)
- [About Us](https://www.robertlwoodsmd.com/about-us)
- [A Journey of Passion](https://www.robertlwoodsmd.com/a-journey-of-passion)
- [Services (health-insurance)](https://www.robertlwoodsmd.com/health-insurance)
- [Contact](https://www.robertlwoodsmd.com/contact-and-support)
- [Data Privacy Policy](https://www.robertlwoodsmd.com/data-privacy)
