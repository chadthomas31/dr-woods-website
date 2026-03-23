import Image from 'next/image'
import BookCTA from '../components/BookCTA'
import PageBanner from '../components/PageBanner'
import AboutDoctorWoods from '../components/AboutDoctorWoods'
import { practiceData } from '../lib/practice-data'

export default function AboutPage() {
  const { about, conditions } = practiceData

  return (
    <div className="min-h-screen">
      <div className="pt-28">
        <PageBanner title="About Me" imageSrc="/images/services-banner.jpeg" />
      </div>

      {/* Intro section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-olive-500 font-semibold text-sm uppercase tracking-wider mb-4">{about.intro.label}</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-dark mb-6 leading-tight">
                {about.intro.title}
              </h1>
              {about.intro.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 text-lg leading-relaxed mb-4">{p}</p>
              ))}
              <ul className="grid grid-cols-2 gap-3 mt-8">
                {conditions.map((c, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="w-2.5 h-2.5 bg-olive-500 rounded-full mr-3 flex-shrink-0" />
                    {c.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl aspect-[4/5] overflow-hidden shadow-xl">
              <Image
                src="/images/about-doctor-patient.jpeg"
                alt="Doctor with patient during consultation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <AboutDoctorWoods />

      {/* Dance Career Gallery - two large photos per row, hover popup */}
      <section id="dance" className="py-16 md:py-24 bg-olive-50/50 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-dark text-center mb-4">
            Dance Career Highlights
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
            From the Silverado Ballet Troupe to the Zürich Opera Ballet—six years in Europe performing with George Balanchine&apos;s works and alongside Rudolph Nureyev.
          </p>
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {about.danceGallery.map((img, i) => (
              <figure key={i} className="group">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-gray-200">
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    className="object-cover transition-all duration-500 ease-out brightness-110 contrast-105 group-hover:scale-105 group-hover:brightness-95"
                    sizes="(max-width: 768px) 50vw, 45vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-6 bg-charcoal-dark/0 group-hover:bg-charcoal-dark/40 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100">
                    <p className="text-white font-bold text-base md:text-lg leading-relaxed text-center drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out opacity-0 group-hover:opacity-100">
                      {img.caption}
                    </p>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <BookCTA />
    </div>
  )
}
