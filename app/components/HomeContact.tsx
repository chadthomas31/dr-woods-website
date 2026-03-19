import Link from 'next/link'

export default function HomeContact() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-0 overflow-hidden">
          {/* Left: Contact CTA */}
          <div className="bg-white p-10 md:p-14">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-black uppercase tracking-wide mb-6">
              Start Feeling At Ease. Contact Me Today.
            </h2>
            <div className="space-y-4 mb-8">
              <Link
                href="/contact"
                className="block bg-gold-400 hover:bg-gold-500 text-black text-center py-3 px-6 font-semibold text-sm uppercase tracking-widest transition-colors"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/services"
                className="block border border-gold-400 hover:bg-gold-400/10 text-gold-700 text-center py-3 px-6 font-semibold text-sm uppercase tracking-widest transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Right: Warm gradient placeholder for therapy photo */}
          <div className="bg-gradient-to-br from-stone-400 via-amber-200/60 to-stone-500 min-h-[300px] md:min-h-0" />
        </div>
      </div>
    </section>
  )
}
