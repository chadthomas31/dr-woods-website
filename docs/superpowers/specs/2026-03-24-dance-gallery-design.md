# Dance Career Gallery — Design Spec

**Date:** 2026-03-24  
**Status:** Approved  
**Scope:** Extend the About page's Dance Career section to display all 10 archival dance photos

---

## Overview

Dr. Woods' About page currently displays only 2 of 10 dance career photos in a "opening pair" layout. This design extends the `DanceCareerSection` component to display the remaining 8 photos in a 2-column grid directly below the opening pair, maintaining the existing black/gold aesthetic.

---

## Goals

1. Showcase all 10 dance photos on the About page
2. Maintain visual consistency with the existing opening pair design
3. Provide an elegant hover interaction for captions
4. Keep the implementation simple by extending the existing component

---

## Design Decisions

| Aspect | Decision | Rationale |
|--------|----------|-----------|
| Photos | Remaining 8 (indices 2-9 of `danceGallery`) | Opening pair (indices 0-1) already displayed |
| Placement | Same section, below opening pair | One cohesive "Dance Career" block |
| Layout | 2-column grid | Matches opening pair; large photos |
| Horizontal gap | 8px | Tight pairing within rows |
| Vertical gap | 20px | Clear row separation |
| Framing | No border | Photos float on black; `rounded-md` corners |
| Mobile | Stay 2-column | Consistent with opening pair |

---

## Structure

```
┌─────────────────────────────────────────────────────────┐
│                    DANCE CAREER                         │  ← Gold title with rules
│              (intro paragraphs)                         │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────┐   │
│  │ ┌─────────────┐  ┌─────────────┐                │   │  ← Opening pair
│  │ │   Photo 1   │  │   Photo 2   │                │   │    (double gold frame)
│  │ └─────────────┘  └─────────────┘                │   │    [existing]
│  └─────────────────────────────────────────────────┘   │
│                        ~32px                            │
│        ┌─────────────┐  ┌─────────────┐                │  ← Remaining 8 photos
│        │   Photo 3   │  │   Photo 4   │                │    (no border)
│        └─────────────┘  └─────────────┘                │    [new]
│                         20px                            │
│        ┌─────────────┐  ┌─────────────┐                │
│        │   Photo 5   │  │   Photo 6   │                │
│        └─────────────┘  └─────────────┘                │
│                         20px                            │
│        ┌─────────────┐  ┌─────────────┐                │
│        │   Photo 7   │  │   Photo 8   │                │
│        └─────────────┘  └─────────────┘                │
│                         20px                            │
│        ┌─────────────┐  ┌─────────────┐                │
│        │   Photo 9   │  │  Photo 10   │  ← (color)    │
│        └─────────────┘  └─────────────┘                │
└─────────────────────────────────────────────────────────┘
```

---

## Hover Interaction

Each photo in the main grid (photos 3-10) has this behavior:

### At Rest
- Grayscale filter (except photo 10 which displays in color)
- No caption visible
- No overlay

### On Hover / Focus
1. **Dim**: Semi-transparent black overlay (`bg-black/50`)
2. **Zoom**: Subtle scale up (`scale-[1.05]`), 500ms ease-out transition
3. **Caption**: Fades in with slide-up animation

### Caption Styling
- **Position**: Lower third of the photo
- **Color**: Gold (`text-gold-400`)
- **Font**: Serif, bold (`font-serif font-bold`)
- **Size**: `text-sm sm:text-base` (larger than opening pair)
- **Backdrop**: Gradient from `black/90` to transparent for readability
- **Animation**: `opacity-0 → opacity-100`, `translate-y-1 → translate-y-0`, 300ms

### Accessibility
- `tabIndex={0}` on each photo figure
- `focus-visible:ring-2 ring-gold-500` for keyboard focus
- `<figcaption>` element for semantics
- `prefers-reduced-motion` respected (disable zoom/slide animations)

---

## Responsive Behavior

| Breakpoint | Columns | Notes |
|------------|---------|-------|
| `< 640px` (mobile) | 2 | Same as desktop; smaller photos |
| `≥ 640px` (sm+) | 2 | Full-size photos |

### Touch Device Behavior (CSS-only)

Using `tabIndex={0}` and `focus-within`, touch devices get this behavior:
- **Tap photo** → focus triggers caption reveal (same as hover)
- **Tap another photo** → focus moves, previous caption hides
- **Tap outside gallery** → focus lost, caption hides

This is the same pattern used by the existing `OpeningPhoto` component. No JavaScript state management required.

---

## Implementation Plan

### Files to Modify

1. **`app/components/DanceCareerSection.tsx`**
   - Rename `openingPair` prop to `gallery` (full array)
   - Slice internally: `gallery.slice(0, 2)` for opening pair, `gallery.slice(2)` for grid
   - Add `GalleryPhoto` sub-component with updated caption styling
   - Add grid container below opening pair

2. **`app/components/AboutDoctorWoods.tsx`**
   - Update prop: pass full `about.danceGallery` instead of `.slice(0, 2)`

### Files Unchanged
- `app/lib/practice-data.ts` — data already structured correctly
- `tailwind.config.js` — gold colors already defined

### New Sub-Component: `GalleryPhoto`

```tsx
function GalleryPhoto({ item }: { item: DanceGalleryEntry }) {
  return (
    <figure
      tabIndex={0}
      className="group relative aspect-[3/4] sm:aspect-[4/5] rounded-md overflow-hidden bg-black outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
    >
      <Image
        src={item.src}
        alt=""
        fill
        className={`object-cover transition-transform duration-500 ease-out 
          motion-reduce:transition-none
          group-hover:scale-[1.05] group-focus-within:scale-[1.05]
          ${item.color ? '' : 'grayscale contrast-[1.06]'}`}
        sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 400px"
      />
      {/* Dim overlay */}
      <div
        className="absolute inset-0 bg-black/0 group-hover:bg-black/50 
          group-focus-within:bg-black/50 transition-colors duration-300
          motion-reduce:transition-none"
        aria-hidden
      />
      {/* Caption in lower third */}
      <figcaption
        className="absolute inset-x-0 bottom-0 h-1/3 flex items-end
          bg-gradient-to-t from-black/90 to-transparent
          p-3 sm:p-4
          opacity-0 translate-y-1 
          group-hover:opacity-100 group-hover:translate-y-0
          group-focus-within:opacity-100 group-focus-within:translate-y-0
          transition-all duration-300
          motion-reduce:transition-none motion-reduce:translate-y-0"
      >
        <p className="text-gold-400 text-sm sm:text-base font-serif font-bold leading-snug">
          {item.caption}
        </p>
      </figcaption>
    </figure>
  )
}
```

### Grid Container

```tsx
{/* Main gallery grid */}
<div className="grid grid-cols-2 gap-x-2 gap-y-5 mt-8">
  {gallery.slice(2).map((item, i) => (
    <GalleryPhoto key={i} item={item} />
  ))}
</div>
```

---

## Testing Checklist

- [ ] All 10 photos display on About page
- [ ] Opening pair retains double gold frame
- [ ] Remaining 8 photos have no border, rounded corners
- [ ] Hover shows dimming, zoom, and caption
- [ ] Caption is bold, larger, in lower third
- [ ] Photo 10 displays in color
- [ ] Keyboard navigation works (Tab + focus ring)
- [ ] Mobile: 2-column layout, tap photo to reveal caption (focus-based)
- [ ] Reduced motion: animations disabled

---

## Out of Scope

- Lightbox / modal view on click
- Lazy loading optimizations (Next.js Image handles this)
- Reordering photos (current order is intentional)
- Additional galleries (about-us photos, etc.)
