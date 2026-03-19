import Link from 'next/link'

export default function BookCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-stone-950/50 to-black relative overflow-hidden">
      {/* Warm background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-950/20 via-transparent to-amber-950/20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white uppercase tracking-wide mb-4">
          Ready To Book An Appointment?
        </h2>
        <p className="text-gray-300 mb-8">
          Give us a call today and put your mind at ease.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-gold-400 hover:bg-gold-500 text-black px-10 py-4 font-semibold text-sm uppercase tracking-widest transition-all hover:shadow-lg hover:shadow-gold-400/20"
        >
          Call Now
        </Link>
      </div>
    </section>
  )
}
