import Image from 'next/image'
import type { DanceGalleryEntry } from '../lib/practice-data'

export type DanceGalleryItem = DanceGalleryEntry

type DanceCareerSectionProps = {
  title: string
  paragraphs: string[]
  gallery: DanceGalleryEntry[]
  narrative: {
    column1: string[]
    column2: string[]
  }
}

const photoZoomClass =
  'transition-transform duration-500 ease-out motion-reduce:transition-none group-hover:scale-[1.05] group-focus-within:scale-[1.05]'

function SectionBanner({ title }: { title: string }) {
  return (
    <div className="text-center py-8 md:py-12">
      <div className="w-full h-px bg-gold-500 mb-5" aria-hidden="true" />
      <h3 className="font-serif text-gold-500 uppercase tracking-[0.15em] text-sm sm:text-base md:text-lg">
        {title}
      </h3>
      <div className="w-full h-px bg-gold-500 mt-5" aria-hidden="true" />
    </div>
  )
}

function UnderConstruction() {
  return (
    <div className="border border-gold-500/40 py-3 px-6 inline-block mt-4">
      <span className="text-gold-500/70 text-xs tracking-widest uppercase">
        -Under Construction-
      </span>
    </div>
  )
}

function NarrativeColumns({ column1, column2 }: { column1: string[]; column2: string[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-white/90 text-sm md:text-base leading-relaxed my-10 md:my-14 max-w-5xl mx-auto">
      <div className="space-y-4">
        {column1.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="space-y-4">
        {column2.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  )
}

function PhotoFull({ item }: { item: DanceGalleryEntry }) {
  return (
    <figure className="my-12 md:my-16 flex flex-col items-center">
      <Image
        src={item.src}
        alt=""
        width={1200}
        height={800}
        className={`w-auto max-w-full h-auto ${item.color ? '' : 'grayscale contrast-[1.06]'}`}
        sizes="100vw"
      />
      {item.caption && (
        <figcaption className="text-gold-400 text-xs sm:text-sm font-serif text-center mt-4 px-4 max-w-4xl">
          {item.caption}
        </figcaption>
      )}
    </figure>
  )
}

function PhotoPair({
  items,
  showCaptions = true,
}: {
  items: [DanceGalleryEntry, DanceGalleryEntry]
  showCaptions?: boolean
}) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-10 my-10 md:my-14">
      {items.map((item, i) => (
        <figure key={i} className="flex flex-col items-center">
          <Image
            src={item.src}
            alt=""
            width={550}
            height={700}
            className={`w-auto max-w-full h-auto ${item.color ? '' : 'grayscale contrast-[1.06]'}`}
            sizes="(max-width: 768px) 100vw, 550px"
          />
          {showCaptions && item.caption && (
            <figcaption className="text-gold-400 text-xs sm:text-sm font-serif text-center mt-3 px-2 max-w-md">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  )
}

function PhotoTrio({
  items,
}: {
  items: [DanceGalleryEntry, DanceGalleryEntry, DanceGalleryEntry]
}) {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-start gap-6 md:gap-8 my-12 md:my-16">
      {items.map((item, i) => (
        <figure key={i} className="flex flex-col items-center flex-1 max-w-[380px]">
          <div className="relative w-full aspect-[3/4]">
            <Image
              src={item.src}
              alt=""
              fill
              className={`object-contain ${item.color ? '' : 'grayscale contrast-[1.06]'}`}
              sizes="(max-width: 640px) 100vw, 380px"
            />
          </div>
          {item.caption && (
            <figcaption className="text-gold-400 text-xs font-serif text-center mt-3 px-1">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  )
}

function OpeningPhoto({ item }: { item: DanceGalleryEntry }) {
  const show = item.showCaption !== false
  const alignLeft = item.captionVariant === 'serif-bottom-left'

  return (
    <figure
      tabIndex={0}
      className="group relative bg-black m-0 outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-inset overflow-hidden aspect-[4/5]"
    >
      <Image
        src={item.src}
        alt=""
        fill
        className={`object-cover object-top ${photoZoomClass} ${item.color ? '' : 'grayscale contrast-[1.06]'}`}
        sizes="(max-width: 640px) 100vw, 50vw"
      />
      {show && (
        <>
          <div
            className="absolute inset-0 z-[1] bg-black/0 group-hover:bg-black/50 group-focus-within:bg-black/50 transition-colors duration-300 pointer-events-none"
            aria-hidden
          />
          <figcaption className="absolute inset-x-0 bottom-0 z-[2] flex flex-col justify-end bg-gradient-to-t from-black/92 via-black/35 to-transparent pt-24 sm:pt-28 pb-4 sm:pb-5 px-3 sm:px-4 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-300 pointer-events-none">
            <p
              className={`text-gold-400 text-[0.7rem] sm:text-sm leading-snug font-serif ${
                alignLeft ? 'text-left pl-0.5' : 'text-center max-w-[22rem] mx-auto w-full'
              }`}
            >
              {item.caption}
            </p>
          </figcaption>
        </>
      )}
      {!show && <figcaption className="sr-only">{item.caption}</figcaption>}
    </figure>
  )
}

export default function DanceCareerSection({
  title,
  paragraphs,
  gallery,
  narrative,
}: DanceCareerSectionProps) {
  if (gallery.length < 17) {
    console.warn('DanceCareerSection expects 17 gallery items for full editorial layout')
  }

  const openingPair = gallery.slice(0, 2) as [DanceGalleryEntry, DanceGalleryEntry]
  const hero = gallery[2]
  const donQuixote = gallery[3]
  const divertimentoGisella = [gallery[4], gallery[5]] as [DanceGalleryEntry, DanceGalleryEntry]
  const agon = gallery[6]
  const maurreenTrudi = [gallery[7], gallery[9]] as [DanceGalleryEntry, DanceGalleryEntry]
  const costumeApril = [gallery[10], gallery[11]] as [DanceGalleryEntry, DanceGalleryEntry]
  const threeAcross = [gallery[12], gallery[13], gallery[14]] as [
    DanceGalleryEntry,
    DanceGalleryEntry,
    DanceGalleryEntry,
  ]
  const newspapers = [gallery[15], gallery[16]] as [DanceGalleryEntry, DanceGalleryEntry]

  return (
    <section
      id="dance-section"
      className="bg-black text-white py-16 md:py-24 scroll-mt-32 w-screen relative left-1/2 right-1/2 -mx-[50vw]"
      aria-labelledby="dance-career-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Title */}
        <header className="text-center mb-10 md:mb-14">
          <div className="w-full h-px bg-gold-500 mb-5" aria-hidden="true" />
          <h2
            id="dance-career-heading"
            className="font-serif text-gold-500 uppercase tracking-[0.22em] text-base sm:text-lg md:text-xl"
          >
            {title}
          </h2>
          <div className="w-full h-px bg-gold-500 mt-5" aria-hidden="true" />
        </header>

        {/* Intro Paragraphs (from About section) */}
        <div className="space-y-5 md:space-y-6 text-center max-w-3xl mx-auto mb-12 md:mb-16 text-white/95 text-sm sm:text-base leading-relaxed font-sans">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Section 1: Opening Pair in double gold frame */}
        <div className="max-w-4xl mx-auto p-1 sm:p-1.5 border-[3px] border-gold-500">
          <div className="border border-gold-500/90 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gold-500/90">
              <div className="bg-black">
                <OpeningPhoto item={openingPair[0]} />
              </div>
              <div className="bg-black">
                <OpeningPhoto item={openingPair[1]} />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Frankfurt/Zürich Banner */}
        <SectionBanner title="Frankfurt, Germany · Zürich, Switzerland" />

        {/* Section 3: Narrative Text (two columns) */}
        <NarrativeColumns column1={narrative.column1} column2={narrative.column2} />

        {/* Section 4: Hero Photo (pas de deux) */}
        {hero && <PhotoFull item={hero} />}

        {/* Section 5: Don Quixote curtain call (full width) */}
        {donQuixote && <PhotoFull item={donQuixote} />}

        {/* Section 6: Divertimento + Gisella */}
        {divertimentoGisella[0] && divertimentoGisella[1] && (
          <PhotoPair items={divertimentoGisella} />
        )}

        {/* Section 7: Agon Full-width */}
        {agon && <PhotoFull item={agon} />}

        {/* Section 8: Maureen Horrigan + Trudi Campbell */}
        {maurreenTrudi[0] && maurreenTrudi[1] && <PhotoPair items={maurreenTrudi} />}

        {/* Section 9: Costume Sketch (color) + April Anderson */}
        {costumeApril[0] && costumeApril[1] && <PhotoPair items={costumeApril} />}

        {/* Section 10: LA Ballet / Pacific Northwest Banner */}
        <div className="text-center">
          <SectionBanner title="Los Angeles Ballet · Pacific Northwest Ballet" />
          <UnderConstruction />
        </div>

        {/* Section 11: Ballet Pacifica Banner */}
        <div className="text-center mt-8">
          <SectionBanner title="Ballet Pacifica · South Coast Ballet" />
          <UnderConstruction />
        </div>

        {/* Section 12: Three-Across Gallery */}
        {threeAcross[0] && threeAcross[1] && threeAcross[2] && (
          <PhotoTrio items={threeAcross} />
        )}

        {/* Section 13: Newspaper Articles */}
        {newspapers[0] && newspapers[1] && <PhotoPair items={newspapers} />}
      </div>
    </section>
  )
}
