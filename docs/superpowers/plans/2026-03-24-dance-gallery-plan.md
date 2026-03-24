# Dance Career Gallery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extend the Dance Career section to display all 10 archival photos in a 2-column grid with hover captions.

**Architecture:** Add a `GalleryPhoto` sub-component to `DanceCareerSection.tsx` that renders photos 3-10 in a 2-column grid below the existing opening pair. Update `AboutDoctorWoods.tsx` to pass the full gallery array instead of slicing.

**Tech Stack:** Next.js, React, Tailwind CSS, TypeScript

**Spec:** `docs/superpowers/specs/2026-03-24-dance-gallery-design.md`

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `app/components/DanceCareerSection.tsx` | Modify | Add `GalleryPhoto` sub-component, add grid container, update props |
| `app/components/AboutDoctorWoods.tsx` | Modify | Pass full `danceGallery` array instead of `.slice(0, 2)` |

---

## Task 1: Add GalleryPhoto Sub-Component

**Files:**
- Modify: `app/components/DanceCareerSection.tsx`

- [ ] **Step 1: Add GalleryPhoto function component**

Add this new sub-component after the existing `OpeningPhoto` function (around line 72):

```tsx
/**
 * Gallery grid photo: no border, caption in lower third on hover.
 * Larger/bolder caption than opening pair.
 */
function GalleryPhoto({ item }: { item: DanceGalleryEntry }) {
  return (
    <figure
      tabIndex={0}
      className="group relative aspect-[3/4] sm:aspect-[4/5] rounded-md overflow-hidden bg-black outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-inset"
    >
      <Image
        src={item.src}
        alt=""
        fill
        className={`object-cover transition-transform duration-500 ease-out motion-reduce:transition-none group-hover:scale-[1.05] group-focus-within:scale-[1.05] ${item.color ? '' : 'grayscale contrast-[1.06]'}`}
        sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 400px"
      />
      {/* Dim overlay */}
      <div
        className="absolute inset-0 bg-black/0 group-hover:bg-black/50 group-focus-within:bg-black/50 transition-colors duration-300 motion-reduce:transition-none pointer-events-none"
        aria-hidden
      />
      {/* Caption in lower third */}
      <figcaption className="absolute inset-x-0 bottom-0 h-1/3 flex items-end bg-gradient-to-t from-black/90 to-transparent p-3 sm:p-4 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-300 motion-reduce:transition-none motion-reduce:translate-y-0 pointer-events-none">
        <p className="text-gold-400 text-sm sm:text-base font-serif font-bold leading-snug">
          {item.caption}
        </p>
      </figcaption>
    </figure>
  )
}
```

- [ ] **Step 2: Verify file saves without syntax errors**

Run: `cd /home/runninja/.cursor/worktrees/dr-woods-website/jdw && npx tsc --noEmit 2>&1 | head -20`
Expected: No errors related to `GalleryPhoto`

---

## Task 2: Update Component Props

**Files:**
- Modify: `app/components/DanceCareerSection.tsx`

- [ ] **Step 1: Update DanceCareerSectionProps type**

Change the props type from:

```tsx
type DanceCareerSectionProps = {
  title: string
  paragraphs: string[]
  /** First two photos only — Silverado / Napa opening row (own section). */
  openingPair: DanceGalleryEntry[]
}
```

To:

```tsx
type DanceCareerSectionProps = {
  title: string
  paragraphs: string[]
  /** Full dance gallery array — first 2 are opening pair, rest are grid. */
  gallery: DanceGalleryEntry[]
}
```

- [ ] **Step 2: Update component signature and internal slicing**

Change the component from:

```tsx
export default function DanceCareerSection({
  title,
  paragraphs,
  openingPair,
}: DanceCareerSectionProps) {
  const [left, right] = openingPair
  if (!left || !right) return null
```

To:

```tsx
export default function DanceCareerSection({
  title,
  paragraphs,
  gallery,
}: DanceCareerSectionProps) {
  const [left, right] = gallery.slice(0, 2)
  const gridPhotos = gallery.slice(2)
  if (!left || !right) return null
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `cd /home/runninja/.cursor/worktrees/dr-woods-website/jdw && npx tsc --noEmit 2>&1 | head -20`
Expected: Error about `AboutDoctorWoods.tsx` passing wrong prop (this is expected, we fix it in Task 4)

---

## Task 3: Add Gallery Grid Below Opening Pair

**Files:**
- Modify: `app/components/DanceCareerSection.tsx`

- [ ] **Step 1: Add grid container after opening pair**

After the closing `</div>` of the double gold frame (around line 135), add:

```tsx
        {/* Main gallery grid */}
        {gridPhotos.length > 0 && (
          <div className="grid grid-cols-2 gap-x-2 gap-y-5 mt-8 max-w-6xl mx-auto">
            {gridPhotos.map((item, i) => (
              <GalleryPhoto key={item.src || i} item={item} />
            ))}
          </div>
        )}
```

- [ ] **Step 2: Verify file structure is correct**

The component should now have this structure:
1. Opening pair in double gold frame
2. Gallery grid below (8 photos, 2 columns, 4 rows)

---

## Task 4: Update AboutDoctorWoods to Pass Full Gallery

**Files:**
- Modify: `app/components/AboutDoctorWoods.tsx`

- [ ] **Step 1: Update the DanceCareerSection prop**

Find this line (around line 67-71):

```tsx
        <DanceCareerSection
          title={dance.title}
          paragraphs={danceParagraphs}
          openingPair={about.danceGallery.slice(0, 2)}
        />
```

Change to:

```tsx
        <DanceCareerSection
          title={dance.title}
          paragraphs={danceParagraphs}
          gallery={about.danceGallery}
        />
```

- [ ] **Step 2: Verify TypeScript compiles clean**

Run: `cd /home/runninja/.cursor/worktrees/dr-woods-website/jdw && npx tsc --noEmit`
Expected: No errors

---

## Task 5: Build and Visual Verification

**Files:**
- None (verification only)

- [ ] **Step 1: Run production build**

Run: `cd /home/runninja/.cursor/worktrees/dr-woods-website/jdw && npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 2: Start dev server**

Run: `cd /home/runninja/.cursor/worktrees/dr-woods-website/jdw && npm run dev`
Expected: Server starts on localhost:3000

- [ ] **Step 3: Visual verification checklist**

Navigate to http://localhost:3000/about and verify:

- [ ] All 10 photos display on About page
- [ ] Opening pair retains double gold frame
- [ ] Remaining 8 photos have no border, rounded corners
- [ ] Hover shows dimming, zoom, and caption
- [ ] Caption is bold, larger, in lower third
- [ ] Photo 10 (costume sketch) displays in color
- [ ] Keyboard navigation works (Tab + focus ring)
- [ ] 20px vertical spacing between rows in grid

---

## Task 6: Commit Changes

**Files:**
- `app/components/DanceCareerSection.tsx`
- `app/components/AboutDoctorWoods.tsx`

- [ ] **Step 1: Stage and commit**

```bash
cd /home/runninja/.cursor/worktrees/dr-woods-website/jdw
git add app/components/DanceCareerSection.tsx app/components/AboutDoctorWoods.tsx
git commit -m "feat(about): display full dance gallery with 2-column grid

- Add GalleryPhoto sub-component with hover caption in lower third
- Update DanceCareerSection to accept full gallery array
- Render remaining 8 photos in 2-column grid below opening pair
- Captions are bold, larger font, gold text
- Photo 10 displays in color, others grayscale
- Accessible: keyboard nav, focus ring, reduced motion support"
```

Expected: Commit succeeds

---

## Summary

| Task | Description | Estimated Time |
|------|-------------|----------------|
| 1 | Add GalleryPhoto sub-component | 3 min |
| 2 | Update component props | 2 min |
| 3 | Add gallery grid container | 2 min |
| 4 | Update AboutDoctorWoods prop | 1 min |
| 5 | Build and visual verification | 5 min |
| 6 | Commit changes | 1 min |
| **Total** | | **~14 min** |
