import Image from 'next/image'
import Link from 'next/link'
import { practiceData } from '../lib/practice-data'

export default function AboutDoctorWoods() {
  const { about } = practiceData
  const imgs = about.aboutDoctorImages
  const [journey, dance, computer, accolades] = about.sections

  return (
    <section className="py-16 md:py-28 bg-gradient-to-b from-olive-100/30 via-olive-50/40 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 md:mb-20">
          <p className="text-olive-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">Get to know</p>
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal-dark font-serif mb-6">
            About Doctor Woods
          </h2>
          <div className="h-1 w-24 bg-olive-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            A journey from the stage to the bedside—from ballet companies in Europe to concierge psychiatry in Orange County.
          </p>
        </header>

        {/* Journey */}
        <article
          id="journey"
          className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mb-20 md:mb-28 scroll-mt-32"
        >
          <div className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl ring-1 ring-olive-200/60 order-2 md:order-1">
            <Image
              src={imgs.journey}
              alt="Dr. Woods — compassionate psychiatric care"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-charcoal-dark mb-4">{journey.title}</h3>
            <p className="text-gray-600 leading-relaxed text-lg">{journey.content}</p>
          </div>
        </article>

        {/* Dance — teaser + link to gallery */}
        <article
          id="dance-section"
          className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mb-20 md:mb-28 scroll-mt-32"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-charcoal-dark mb-4">{dance.title}</h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">{dance.content}</p>
            {'content2' in dance && dance.content2 && (
              <p className="text-gray-600 leading-relaxed text-lg mb-6">{dance.content2}</p>
            )}
            <Link
              href="#dance"
              className="inline-flex items-center text-olive-600 font-semibold hover:text-olive-700 transition-colors"
            >
              Scroll to dance career photo gallery →
            </Link>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-olive-200/60">
            <Image
              src="/images/about/dance/dance-3.webp"
              alt="Robert Woods in Divertimento #15, Frankfurt Opera Ballet"
              fill
              className="object-cover brightness-110 contrast-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </article>

        {/* Computer books */}
        <article
          id="computer-books"
          className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mb-20 md:mb-28 scroll-mt-32"
        >
          <div className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl ring-1 ring-olive-200/60 order-2 md:order-1">
            <Image
              src={imgs.computerBooks}
              alt="Technology and writing — computer books and software"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-charcoal-dark mb-4">{computer.title}</h3>
            <p className="text-gray-600 leading-relaxed text-lg">{computer.content}</p>
          </div>
        </article>

        {/* Accolades */}
        <article
          id="accolades"
          className="grid md:grid-cols-2 gap-10 md:gap-14 items-center mb-20 md:mb-28 scroll-mt-32"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-charcoal-dark mb-4">{accolades.title}</h3>
            <p className="text-gray-600 leading-relaxed text-lg">{accolades.content}</p>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-olive-200/60">
            <Image
              src={imgs.accolades}
              alt="Recognition and patient-centered care"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </article>

        {/* Coming soon trio */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="rounded-2xl border border-olive-200 bg-olive-50/60 p-8 shadow-sm">
            <h3 className="text-lg font-bold text-charcoal-dark mb-3">{about.educationTraining.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{about.educationTraining.body}</p>
          </div>
          <div className="rounded-2xl border border-olive-200 bg-olive-50/60 p-8 shadow-sm">
            <h3 className="text-lg font-bold text-charcoal-dark mb-3">{about.medicalCareer.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{about.medicalCareer.body}</p>
          </div>
          <div className="rounded-2xl border border-olive-200 bg-olive-500/10 p-8 shadow-sm ring-1 ring-olive-300/40">
            <h3 className="text-lg font-bold text-charcoal-dark mb-3">{about.patientResources.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{about.patientResources.body}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
