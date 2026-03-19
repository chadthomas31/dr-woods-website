import Link from 'next/link'
import { practiceData } from '../lib/practice-data'

export default function About() {
  const { homeAbout } = practiceData

  return (
    <section className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gold-400 uppercase tracking-widest text-sm font-medium mb-4">{homeAbout.label}</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white uppercase tracking-wide leading-snug">
            {homeAbout.title}
          </h2>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-8">
          {homeAbout.text}
        </p>

        <div className="text-center">
          <Link href="/about" className="text-gold-400 hover:text-gold-300 uppercase tracking-wider text-sm font-semibold transition-colors">
            Learn More About Dr. Woods &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
