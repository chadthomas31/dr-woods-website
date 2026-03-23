import Link from 'next/link'
import Image from 'next/image'
import { practiceData } from '../lib/practice-data'
import heroEnrichingLives from '../../public/images/hero-enriching-lives.jpg'

export default function Hero() {
  const { hero, doctor } = practiceData

  return (
    <section className="pt-28 relative min-h-[60vh] flex items-center overflow-hidden">
      {/* Same full-bleed hero as legacy robertlwoodsmd.com (Empowering Minds / Enriching Lives) */}
      <Image
        src={heroEnrichingLives}
        alt="Calming scene representing compassionate psychiatric care and wellness"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-charcoal-dark/60" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <p className="text-amber-200/90 text-sm font-medium tracking-wider uppercase mb-4">
            {doctor.name}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif leading-tight">
            <span className="block">{hero.line1}</span>
            <span className="block mt-2">{hero.line2}</span>
          </h1>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-amber-700/90 hover:bg-amber-600 text-white font-semibold py-4 px-10 rounded-sm transition-colors uppercase tracking-wide"
          >
            Make an Appointment
          </Link>
        </div>
      </div>
    </section>
  )
}
