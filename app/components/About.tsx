import Link from 'next/link'
import Image from 'next/image'
import { practiceData } from '../lib/practice-data'

export default function About() {
  const { homeAbout, conditions } = practiceData

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-olive-500 font-bold text-xl md:text-2xl mb-4">
              {homeAbout.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-dark mb-6">
              {homeAbout.title}
            </h2>
            <div className="text-gray-600 text-lg leading-relaxed mb-6 space-y-4">
              {homeAbout.paragraphs.slice(0, 2).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <ul className="grid grid-cols-2 gap-3 mb-8">
              {conditions.map((c, i) => (
                <li key={i} className="flex items-center text-gray-600">
                  <span className="w-2.5 h-2.5 bg-olive-500 rounded-full mr-3 flex-shrink-0" />
                  {c.name}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="touch-target-link text-olive-500 hover:text-olive-600 font-semibold text-lg transition-colors"
            >
              Learn More About Dr. Woods &rarr;
            </Link>
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
  )
}
