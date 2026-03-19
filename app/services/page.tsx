import Link from 'next/link'
import BookCTA from '../components/BookCTA'
import { practiceData } from '../lib/practice-data'

export default function ServicesPage() {
  const { services } = practiceData

  return (
    <div className="min-h-screen bg-black pt-28">
      {/* Header */}
      <section className="pb-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="border border-gold-700/40 inline-block px-12 py-3 mb-6">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-gold-400 uppercase tracking-widest">
              Psychiatric Services
            </h1>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-16 items-center`}
            >
              {/* Circle photo placeholder */}
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-stone-600/40 to-amber-900/30 border border-gold-700/30 flex-shrink-0" />

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-gold-400 uppercase tracking-wider mb-4">
                  {service.name}
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">{service.description}</p>
                {service.duration && (
                  <p className="text-gray-500 text-sm mb-4">Duration: {service.duration}</p>
                )}
                {service.hasBookButton && (
                  <Link
                    href="/contact"
                    className="inline-block bg-gold-400 hover:bg-gold-500 text-black px-6 py-2.5 font-semibold text-sm uppercase tracking-widest transition-colors"
                  >
                    Book Now
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <BookCTA />
    </div>
  )
}
