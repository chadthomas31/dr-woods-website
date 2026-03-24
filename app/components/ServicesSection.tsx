'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { practiceData } from '../lib/practice-data'

const icons: Record<string, JSX.Element> = {
  'clipboard-check': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  brain: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  pill: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
    </svg>
  ),
  users: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
  scale: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" />
    </svg>
  ),
  sparkles: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  heart: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  video: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
}

function FeaturedServiceCard({ service, index }: { service: typeof practiceData.services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      id={service.slug}
      className="group relative overflow-hidden rounded-2xl bg-charcoal-dark scroll-mt-32"
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] md:aspect-[16/10] relative">
        {service.image && (
          <Image
            src={service.image}
            alt=""
            fill
            className={`object-cover transition-all duration-700 ease-out ${
              isHovered ? 'scale-110 brightness-50' : 'scale-100 brightness-75'
            }`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-olive-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <div className={`transform transition-all duration-500 ${isHovered ? '-translate-y-4' : 'translate-y-0'}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-2 rounded-xl bg-olive-500/20 backdrop-blur-sm text-olive-400 transition-all duration-300 ${
              isHovered ? 'scale-110 bg-olive-500/40' : ''
            }`}>
              {service.icon && icons[service.icon]}
            </div>
            {service.duration && (
              <span className="text-olive-400/80 text-sm font-medium px-3 py-1 rounded-full bg-olive-500/10 backdrop-blur-sm">
                {service.duration}
              </span>
            )}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-serif">
            {service.name}
          </h3>

          <p className={`text-gray-300 text-sm md:text-base leading-relaxed transition-all duration-500 ${
            isHovered ? 'opacity-100 max-h-40' : 'opacity-70 max-h-16 line-clamp-2'
          }`}>
            {service.description}
          </p>

          <div className={`flex items-center gap-4 mt-4 transition-all duration-500 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {service.hasBookButton && (
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-olive-600 hover:bg-olive-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-olive-500/25"
              >
                Book Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            )}
            <Link
              href={`/services#${service.slug}`}
              className="text-olive-400 hover:text-olive-300 font-medium text-sm transition-colors"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>

      <div className={`absolute top-4 right-4 w-12 h-12 rounded-full border-2 border-olive-400/30 flex items-center justify-center transition-all duration-500 ${
        isHovered ? 'scale-110 border-olive-400/60 rotate-45' : ''
      }`}>
        <svg className="w-5 h-5 text-olive-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  )
}

function ServiceCard({ service, index }: { service: typeof practiceData.services[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      id={service.slug}
      className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-olive-500/10 transition-all duration-500 scroll-mt-32"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        {service.image && (
          <Image
            src={service.image}
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 to-transparent" />

        <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/95 backdrop-blur-sm text-olive-600 shadow-lg group-hover:scale-110 group-hover:bg-olive-500 group-hover:text-white transition-all duration-300">
          {service.icon && icons[service.icon]}
        </div>

        {service.duration && (
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
            {service.duration}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-charcoal-dark mb-2 font-serif group-hover:text-olive-600 transition-colors">
          {service.shortName || service.name}
        </h3>

        <p className={`text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
          isExpanded ? '' : 'line-clamp-3'
        }`}>
          {service.description}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-olive-600 hover:text-olive-700 text-sm font-medium mt-3 flex items-center gap-1 transition-colors"
        >
          {isExpanded ? 'Show less' : 'Read more'}
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {service.hasBookButton && (
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 w-full justify-center px-5 py-3 bg-olive-600 hover:bg-olive-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
          >
            Book Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-olive-500 to-olive-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  )
}

function CategoryNav({ categories, active, onChange }: { categories: string[]; active: string; onChange: (c: string) => void }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      <button
        onClick={() => onChange('All')}
        className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
          active === 'All'
            ? 'bg-olive-600 text-white shadow-lg shadow-olive-500/25'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        All Services
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
            active === cat
              ? 'bg-olive-600 text-white shadow-lg shadow-olive-500/25'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default function ServicesSection() {
  const { services } = practiceData
  const featuredServices = services.filter((s) => s.featured)
  const otherServices = services.filter((s) => !s.featured)
  const categories = [...new Set(otherServices.map((s) => s.category).filter(Boolean))] as string[]
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredServices = activeCategory === 'All' 
    ? otherServices 
    : otherServices.filter((s) => s.category === activeCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal-dark via-charcoal to-olive-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-olive-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-olive-500/20 rounded-full text-olive-400 text-sm font-medium mb-6 animate-fade-in">
              Comprehensive Mental Health Care
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Personalized psychiatric care tailored to your individual needs, delivered with compassion and expertise.
            </p>
          </div>

          {/* Featured Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {featuredServices.map((service, i) => (
              <FeaturedServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-dark mb-4 font-serif">
              Complete Care Options
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From diagnostic evaluations to ongoing therapy, explore all the ways we can support your mental health journey.
            </p>
          </div>

          <CategoryNav 
            categories={categories} 
            active={activeCategory} 
            onChange={setActiveCategory} 
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredServices.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-olive-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-olive-100 text-lg mb-8">
            Take the first step toward better mental health. Schedule a consultation today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-olive-700 font-bold rounded-xl hover:bg-olive-50 transition-all duration-300 hover:shadow-xl text-lg"
          >
            Schedule Consultation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
