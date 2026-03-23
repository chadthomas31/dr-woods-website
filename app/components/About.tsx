import Link from 'next/link'
import { practiceData } from '../lib/practice-data'

export default function About() {
  const { homeAbout } = practiceData

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-olive-500 font-medium text-xl md:text-2xl mb-4">{homeAbout.label}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-dark mb-6">
          {homeAbout.title}
        </h2>
        <div className="text-gray-600 text-lg leading-relaxed mb-8 space-y-4 text-left max-w-3xl mx-auto">
          {homeAbout.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <Link
          href="/about"
          className="touch-target-link text-olive-500 hover:text-olive-600 font-semibold text-xl md:text-2xl transition-colors px-3"
        >
          Learn More About Dr. Woods &rarr;
        </Link>
      </div>
    </section>
  )
}
