import Image from 'next/image'
import { practiceData } from '../lib/practice-data'
import DoctorSignature from './DoctorSignature'
import DanceCareerSection from './DanceCareerSection'

export default function AboutDoctorWoods() {
  const { about } = practiceData
  const imgs = about.aboutDoctorImages
  const [journey, dance, computer, accolades] = about.sections
  const danceParagraphs =
    dance && 'content' in dance
      ? [dance.content, dance.content2].filter((p): p is string => Boolean(p))
      : []

  return (
    <section className="py-16 md:py-28 bg-gradient-to-b from-olive-100/30 via-olive-50/40 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 md:mb-20">
          <p className="text-olive-600 font-bold text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.15em] mb-4">Get to know</p>
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal-dark font-serif mb-6">
            Doctor Woods
          </h2>
          <div className="h-1 w-24 bg-olive-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            A journey from the stage to the bedside—from ballet companies in Europe to concierge psychiatry in Orange County.
          </p>
        </header>

        {/* Journey */}
        <article id="journey" className="mb-14 md:mb-20 scroll-mt-32">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-charcoal-dark leading-snug tracking-tight text-center mb-10 md:mb-12">
            {journey.title}
          </h3>
          <div className="max-w-4xl mx-auto">
            {'paragraphs' in journey && Array.isArray(journey.paragraphs) ? (
              <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg text-center">
                {journey.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ) : (
              'content' in journey && (
                <p className="text-gray-600 leading-relaxed text-base md:text-lg text-center">{journey.content}</p>
              )
            )}
            <div className="mt-10 pt-6 border-t border-olive-100 flex flex-col items-center">
              <p className="text-gray-600 mb-2">Respectfully,</p>
              <DoctorSignature className="h-16 sm:h-[4.5rem] md:h-20" />
              <p className="text-charcoal-dark font-medium mt-2">Robert L Woods MD</p>
            </div>
          </div>
        </article>

        {/* Dance Career — full editorial layout with all sections */}
        {danceParagraphs.length > 0 && about.danceGallery.length >= 17 ? (
          <DanceCareerSection
            title={dance.title}
            paragraphs={danceParagraphs}
            gallery={about.danceGallery}
            narrative={about.danceNarrative}
          />
        ) : null}

        {/* Computer books */}
        <article
          id="computer-books"
          className="mb-20 md:mb-28 scroll-mt-32"
        >
          <div className="text-center mb-10">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-dark mb-8">{computer.title}</h3>
            {'paragraphs' in computer && Array.isArray(computer.paragraphs) ? (
              <div className="space-y-4 max-w-4xl mx-auto">
                {computer.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed text-lg">
                    {p}
                  </p>
                ))}
              </div>
            ) : (
              'content' in computer && (
                <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mx-auto">{computer.content}</p>
              )
            )}
          </div>
          
          {/* ComputerBooks Gallery */}
          {about.computerBooksGallery && about.computerBooksGallery.length > 0 && (() => {
            const gallery = about.computerBooksGallery
            const teamPhoto = gallery[gallery.length - 1]
            const tallBrochure = gallery[8]
            const middleImages = [
              gallery[0],
              ...gallery.slice(1, 8),
            ]
            
            return (
              <div className="space-y-8">
                {/* Hero image - Team photo - large and centered */}
                <div className="flex justify-center">
                  <div className="relative w-full max-w-2xl aspect-[4/3] rounded-xl overflow-hidden shadow-2xl ring-1 ring-olive-200/60">
                    <Image
                      src={teamPhoto.src}
                      alt={teamPhoto.alt}
                      fill
                      className="object-contain bg-gray-100"
                      sizes="(max-width: 768px) 100vw, 700px"
                    />
                  </div>
                </div>
                
                {/* Middle gallery - handheld devices */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                  {middleImages.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg ring-1 ring-olive-200/40 hover:ring-olive-500 hover:shadow-xl transition-all duration-300"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Bottom image - Tall brochure - full size */}
                <div className="flex justify-center">
                  <div className="relative w-full max-w-lg">
                    <Image
                      src={tallBrochure.src}
                      alt={tallBrochure.alt}
                      width={500}
                      height={900}
                      className="w-full h-auto rounded-xl shadow-2xl ring-1 ring-olive-200/60"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  </div>
                </div>
              </div>
            )
          })()}
        </article>

        {/* Accolades */}
        <article
          id="accolades"
          className="mb-20 md:mb-28 scroll-mt-32 bg-black text-white py-16 md:py-24 w-screen relative left-1/2 right-1/2 -mx-[50vw]"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="w-full max-w-2xl mx-auto h-px bg-gold-500 mb-5" aria-hidden="true" />
              <h3 className="text-2xl md:text-3xl font-serif text-gold-500 uppercase tracking-[0.15em]">
                {accolades.title}
              </h3>
              <div className="w-full max-w-2xl mx-auto h-px bg-gold-500 mt-5" aria-hidden="true" />
            </div>
            
            {/* Two letter images side by side */}
            {about.accoladesGallery && about.accoladesGallery.length > 0 && (
              <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12">
                {about.accoladesGallery.map((item, i) => (
                  <figure key={i} className="flex flex-col items-center max-w-md">
                    <div className="relative">
                      <Image
                        src={item.src}
                        alt={item.caption}
                        width={400}
                        height={520}
                        className="w-auto h-auto max-h-[500px] rounded-lg shadow-2xl"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                    <figcaption className="text-gold-400 text-sm font-serif text-center mt-4 px-2">
                      {item.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        </article>

        {/* Placeholder sections (legacy site: under construction / coming soon) */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-4">
          <section
            id="education-training"
            className="rounded-2xl border border-olive-200 bg-olive-50/60 p-8 shadow-sm scroll-mt-32"
          >
            <h3 className="text-lg font-bold text-charcoal-dark mb-3">{about.educationTraining.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{about.educationTraining.body}</p>
          </section>
          <section
            id="medical-career"
            className="rounded-2xl border border-olive-200 bg-olive-50/60 p-8 shadow-sm scroll-mt-32"
          >
            <h3 className="text-lg font-bold text-charcoal-dark mb-3">{about.medicalCareer.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{about.medicalCareer.body}</p>
          </section>
          <section
            id="patient-resources"
            className="rounded-2xl border border-olive-200 bg-olive-500/10 p-8 shadow-sm ring-1 ring-olive-300/40 scroll-mt-32"
          >
            <h3 className="text-lg font-bold text-charcoal-dark mb-3">{about.patientResources.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{about.patientResources.body}</p>
          </section>
        </div>
      </div>
    </section>
  )
}
