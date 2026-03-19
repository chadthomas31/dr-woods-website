import { practiceData } from '../lib/practice-data'

export default function Hero() {
  const { doctor, hero } = practiceData

  return (
    <section className="pt-24 relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Warm gradient background to simulate the photography feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950/60 via-black to-stone-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />

      <div className="relative z-10 text-center px-4 py-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white uppercase tracking-widest mb-8">
          {hero.headline}
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {hero.description}
        </p>

        <a
          href={doctor.phoneHref}
          className="inline-block bg-gold-400 hover:bg-gold-500 text-black px-10 py-4 font-semibold text-sm uppercase tracking-widest transition-all hover:shadow-lg hover:shadow-gold-400/20"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  )
}
