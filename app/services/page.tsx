import Link from 'next/link'
import BookCTA from '../components/BookCTA'
import PageBanner from '../components/PageBanner'
import { practiceData } from '../lib/practice-data'

export default function ServicesPage() {
  const { services } = practiceData

  return (
    <div className="min-h-screen">
      <div className="pt-28">
        <PageBanner title="Our Services" />
      </div>
      <section className="pb-12 pt-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Dr. Woods offers comprehensive psychiatric care tailored to your individual needs.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.slug}
                id={service.slug}
                className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-md transition-shadow scroll-mt-32"
              >
                <h2 className="text-xl font-bold text-charcoal-dark mb-3">{service.name}</h2>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">{service.description}</p>
                {service.duration && (
                  <p className="text-gray-400 text-xs mb-4">Duration: {service.duration}</p>
                )}
                {service.hasBookButton && (
                  <Link href="/contact" className="text-olive-500 hover:text-olive-600 font-semibold text-sm transition-colors">
                    Book Now &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookCTA />
    </div>
  )
}
