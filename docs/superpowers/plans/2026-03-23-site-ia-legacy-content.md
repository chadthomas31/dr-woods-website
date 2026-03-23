# Site IA, legacy content parity, and redirects — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align navigation and footer with the approved IA spec, achieve full substantive content parity with [robertlwoodsmd.com](https://www.robertlwoodsmd.com/) (minus known bugs), add stable service anchors, surface website privacy policy, add legacy URL redirects, and verify with lint + production build.

**Architecture:** Keep `app/lib/practice-data.ts` as the single source of truth for copy, nav structure, and metadata. Components (`Header`, `Footer`, page files) only map over data or render sections. Legacy URLs are handled with Next.js `redirects` in the active config file. No new backend: contact stays mailto-based unless product scope changes.

**Tech Stack:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, `lucide-react`.

**Spec:** `docs/superpowers/specs/2026-03-23-site-ia-and-legacy-content-design.md`

**Note on testing:** This repo has no Jest/Vitest/Playwright scripts. Verification is `npm run lint`, `npm run build`, and the manual checklist in Task 8. If you add a test runner later, add unit tests for URL helpers and redirect list first (@superpowers:test-driven-development).

---

## File map (expected touch list)

| File | Responsibility |
|------|----------------|
| `app/lib/practice-data.ts` | Nav, services (+ slugs), about copy, privacy policy text, fees/HIPAA |
| `app/services/page.tsx` | `id` on each service card from slug |
| `app/components/Header.tsx` | Consumes `nav`; optional top-bar Policies link |
| `app/components/Footer.tsx` | Three-journey column layout; links |
| `app/about/page.tsx` | Placeholder sections (`educationTraining`, `medicalCareer`, `patientResources`) with `id`s + `scroll-mt-*` |
| `app/policies/page.tsx` | Render website privacy section (new data block) |
| `next.config.js` **or** `next.config.ts` | Redirects only in the **active** config (see Task 7 note) |

---

### Task 1: Resolve Next config duplication

**Files:**

- Modify: `next.config.js`
- Modify: `next.config.ts` (possibly delete or merge)

- [ ] **Step 1:** Run `npx next info` or inspect which config Next loads (repo currently has both an empty `next.config.js` and a `next.config.ts` with `images.domains`). Determine which file Next 14 actually uses when both exist.

- [ ] **Step 2:** Consolidate to **one** config file. Preserve `images` options from `next.config.ts` if needed for `next/image`.

- [ ] **Step 3:** Run `npm run build`

Expected: Build completes without config errors.

- [ ] **Step 4:** Commit

```bash
git add next.config.js next.config.ts
git commit -m "chore: consolidate Next config for redirects and image domains"
```

---

### Task 2: Add service slugs and anchor IDs

**Files:**

- Modify: `app/lib/practice-data.ts` (extend each service object with `slug: string`)
- Modify: `app/services/page.tsx`

- [ ] **Step 1:** In `practice-data.ts`, add a URL-safe `slug` for each entry in `services` (kebab-case), e.g. `psychiatric-diagnostic-evaluation`, `individual-psychotherapy`, `medication-management`, `case-management`, `competency-evaluations`, `other-treatments`, `family-group-therapies`, `telepsychiatry`.

- [ ] **Step 2:** In `services/page.tsx`, map `services` and set `id={service.slug}` on the card wrapper (or heading) so `/services#slug` scrolls correctly. Reuse existing `scroll-mt-*` pattern from About.

- [ ] **Step 3:** Run `npm run lint` and `npm run build`

Expected: No TS errors; anchors unique on page.

- [ ] **Step 4:** Commit

```bash
git add app/lib/practice-data.ts app/services/page.tsx
git commit -m "feat: add stable service section anchors for nav deep links"
```

---

### Task 3: Align `nav` with spec (About + Services dropdowns)

**Files:**

- Modify: `app/lib/practice-data.ts`

- [ ] **Step 1:** **About** children — set `href` to match real DOM ids:

  - Journey → `/about#journey`
  - Dance career → `/about#dance-section` (recommended) or `/about#dance` per spec decision
  - Computer books → `/about#computer-books`
  - Accolades → `/about#accolades`

  Fix label casing (e.g. "Computer books" or "Computer Books", not `computer books`).

- [ ] **Step 2:** **Services** children — replace duplicate `/services` links with `/services#{slug}` matching Task 2 slugs. Align dropdown labels with `services[].name` or add optional `navLabel` if a shorter menu label is required.

- [ ] **Step 3:** Reorder top-level `nav` per spec: Home, About Me, Services (or My Services — pick one, use everywhere), Policies and Procedures, Contact.

- [ ] **Step 4:** `npm run lint` && `npm run build`

- [ ] **Step 5:** Commit

```bash
git add app/lib/practice-data.ts
git commit -m "feat: align nav dropdowns with about anchors and service slugs"
```

---

### Task 4: Footer — three-journey layout

**Files:**

- Modify: `app/components/Footer.tsx`

- [ ] **Step 1:** Restructure columns so they map to: **Learn** (About + Services), **Start care** (phone, email, `/contact`), **Policies** (`/policies`, privacy anchor if applicable). Keep branding column or merge into Learn per visual balance.

- [ ] **Step 2:** Ensure "Explore" list does not duplicate confusing paths; optional: link condition names to `/services` or to specific `#slug` anchors.

- [ ] **Step 3:** `npm run lint` && `npm run build`

- [ ] **Step 4:** Commit

```bash
git add app/components/Footer.tsx
git commit -m "feat: rebalance footer for learn, start care, and policies journeys"
```

---

### Task 5: Header top bar (optional Policies link)

**Files:**

- Modify: `app/components/Header.tsx`

- [ ] **Step 1:** If horizontal space allows, add a `Link` to `/policies` (label e.g. "Policies" or "Fees & policies") beside existing Schedule / Services links. If crowded, skip and document in commit that parity relies on main nav + footer.

- [ ] **Step 2:** Normalize casing for "Contact" / "Schedule" labels to match `nav`.

- [ ] **Step 3:** `npm run lint` && `npm run build`

- [ ] **Step 4:** Commit

```bash
git add app/components/Header.tsx
git commit -m "feat: optional policies link in header top bar"
```

---

### Task 6: About page — placeholders + full Journey parity

**Files:**

- Modify: `app/lib/practice-data.ts`
- Modify: `app/about/page.tsx`

- [ ] **Step 1:** **Journey content:** Replace the shortened `about.sections[0].content` with the **full** narrative from [a-journey-of-passion](https://www.robertlwoodsmd.com/a-journey-of-passion) (paragraphs as in live site, preserving meaning; fix obvious typos). Optionally split into multiple paragraphs in data for readability.

- [ ] **Step 2:** **Dance / Computer books / Accolades:** Fetch [dance-career](https://www.robertlwoodsmd.com/dance-career), [computerbooks](https://www.robertlwoodsmd.com/computerbooks), [accolades-and-testimonials](https://www.robertlwoodsmd.com/accolades-and-testimonials). Merge any additional substantive copy into `about.sections` (and `danceGallery` captions if needed). Do not remove existing Next/Image assets without replacement.

- [ ] **Step 3:** **Placeholders:** `educationTraining`, `medicalCareer`, and `patientResources` already exist in `practiceData`. Render them on `about/page.tsx` after `AboutDoctorWoods` (or after gallery) with stable `id`s, e.g. `id="education-training"`, `id="medical-career"`, `id="patient-resources"`, and `scroll-mt-32` (or match header offset). Style consistently with existing sections.

- [ ] **Step 4:** Optionally add these to `nav` under About **only if** product owner wants them visible before content is complete; default per spec is honest “expanding soon” copy without cluttering dropdown.

- [ ] **Step 5:** `npm run lint` && `npm run build`

- [ ] **Step 6:** Commit

```bash
git add app/lib/practice-data.ts app/about/page.tsx
git commit -m "feat: legacy Journey copy parity and about placeholder sections"
```

---

### Task 7: Services + home copy parity

**Files:**

- Modify: `app/lib/practice-data.ts`
- Possibly modify: `app/components/Services.tsx`, `app/components/Hero.tsx`, `app/components/About.tsx`, `app/components/Mission.tsx` if any strings are hardcoded

- [ ] **Step 1:** Line-by-line compare each `services[]` description and duration with [health-insurance](https://www.robertlwoodsmd.com/health-insurance). Update `practiceData` to match live meaning; prefer clearer wording and fix live typos (e.g. “refererring” → “referring”, “who’s” → “whose” where grammatically correct).

- [ ] **Step 2:** Compare home sections (conditions, service teasers, mission, about blurb) with [homepage](https://www.robertlwoodsmd.com/). Ensure no “Basement Finishing” class of errors; spell conditions correctly.

- [ ] **Step 3:** `npm run lint` && `npm run build`

- [ ] **Step 4:** Commit

```bash
git add app/lib/practice-data.ts app/components/*.tsx
git commit -m "content: align services and home copy with legacy site"
```

---

### Task 8: Website privacy policy (non-HIPAA)

**Files:**

- Modify: `app/lib/practice-data.ts` (add e.g. `websitePrivacy: { title, lastUpdated, sections: ... }`)
- Modify: `app/policies/page.tsx`

- [ ] **Step 1:** Transcribe structured content from [data-privacy](https://www.robertlwoodsmd.com/data-privacy) (last updated July 7, 2024) into `practiceData`. Keep HIPAA/clinical notice separate from website privacy if they serve different purposes.

- [ ] **Step 2:** Render a new section on `/policies` below or above existing HIPAA content, with anchor `id="website-privacy"` for footer links.

- [ ] **Step 3:** Update `Footer` (and `Header` if needed) so “Data Privacy Policy” / “Privacy Policy” links to `/policies#website-privacy` or `/policies` with scroll target.

- [ ] **Step 4:** `npm run lint` && `npm run build`

- [ ] **Step 5:** Commit

```bash
git add app/lib/practice-data.ts app/policies/page.tsx app/components/Footer.tsx
git commit -m "feat: add website privacy policy from legacy site"
```

---

### Task 9: Legacy URL redirects

**Files:**

- Modify: active `next.config.js` or `next.config.ts` (after Task 1)

- [ ] **Step 1:** Add `redirects` async function returning permanent (308) or 301 entries per spec:

| Source | Destination |
|--------|-------------|
| `/about-us` | `/about` |
| `/a-journey-of-passion` | `/about#journey` |
| `/dance-career` | `/about#dance-section` (or `#dance` — match Task 3) |
| `/computerbooks` | `/about#computer-books` |
| `/accolades-and-testimonials` | `/about#accolades` |
| `/health-insurance` | `/services` |
| `/contact-and-support` | `/contact` |
| `/data-privacy` | `/policies#website-privacy` |

Note: Next.js may strip hash on server redirects; if hash is dropped, redirect to `/about` or `/policies` and rely on client scroll, or use middleware — document chosen behavior in commit if adjustment needed.

- [ ] **Step 2:** `npm run build` and manually hit a few paths in `next dev` with `curl -I` to confirm status codes.

- [ ] **Step 3:** Commit

```bash
git add next.config.js
git commit -m "feat: redirect legacy Zing URLs to new routes"
```

---

### Task 10: Final QA and documentation

**Files:**

- None or `docs/superpowers/specs/...` cross-link only if you update acceptance checklist

- [ ] **Step 1:** Run `npm run lint` and `npm run build`

- [ ] **Step 2:** Manual checklist from spec §4 (Home, About, Services, Policies, Contact, Footer).

- [ ] **Step 3:** Mark spec checklist items complete in a follow-up doc commit **only if** the team tracks progress in-repo.

- [ ] **Step 4:** Final commit if any README or deploy notes need redirect reminder for Vercel/host.

---

## Plan review

After implementation, optionally run a human or `plan-document-reviewer` pass on this file against the spec. Max three revision rounds per superpowers guidance.

---

## Execution handoff

**Plan complete and saved to** `docs/superpowers/plans/2026-03-23-site-ia-legacy-content.md`.

**Two execution options:**

1. **Subagent-Driven (recommended)** — Fresh subagent per task, review between tasks (@superpowers:subagent-driven-development).

2. **Inline execution** — Run tasks in this session with checkpoints (@superpowers:executing-plans).

**Which approach do you want?**
