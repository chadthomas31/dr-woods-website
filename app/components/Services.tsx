import Link from 'next/link'
import Image from 'next/image'
import { practiceData } from '../lib/practice-data'

/** Matches serviceCards order; last image was the old hero (legacy lower gallery set). */
const SERVICE_IMAGES = [
  '/images/service-1.webp',
  '/images/service-2.webp',
  '/images/service-3.webp',
  '/images/hero-banner.webp',
] as const

export default function Services() {
  const { conditions, serviceCards } = practiceData

  return (
    <>
      {/* How We Can Help */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-dark mb-4">
              How We Can Help You
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Dr. Woods provides help for a wide range of mental health needs, including:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
            {conditions.map((condition, i) => (
              <div
                key={i}
                className="bg-olive-50/80 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6 text-center border border-olive-100"
              >
                <p className="font-semibold text-charcoal-dark">{condition.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-dark mb-4">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCards.map((card, i) => (
              <div key={i} className="bg-olive-50/80 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group border border-olive-100">
                <div className="relative h-48">
                  <Image
                    src={SERVICE_IMAGES[i] ?? `/images/service-1.webp`}
                    alt={card.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-olive-900/20" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal-dark mb-3">{card.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{card.description}</p>
                  <Link
                    href="/services"
                    className="touch-target-link text-olive-500 hover:text-olive-600 font-semibold text-sm transition-colors -ml-2 pl-2"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
