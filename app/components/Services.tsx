import Link from 'next/link'
import { practiceData } from '../lib/practice-data'

export default function Services() {
  const { conditions, serviceCards } = practiceData

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Conditions Grid */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold-400 uppercase tracking-wide">
            I Provide Help For Any Need You Have Such As:
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-20">
          {conditions.map((condition, i) => (
            <div key={i} className="group relative overflow-hidden aspect-[4/3] cursor-default">
              <div className={`absolute inset-0 bg-gradient-to-br ${condition.gradient}`} />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute inset-0 flex items-end p-4">
                <div>
                  <span className="text-gold-400 text-xs">&bull;</span>
                  <p className="text-white font-medium text-sm mt-1">{condition.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Cards */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold-400 uppercase tracking-wide">
            My Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {serviceCards.map((card, i) => (
            <div key={i} className="relative overflow-hidden group border border-gold-700/30 hover:border-gold-400/50 transition-colors">
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`} />
              <div className="relative z-10 p-8 text-center">
                <h3 className="text-xl font-serif font-bold text-gold-400 uppercase tracking-wider mb-4">{card.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services" className="inline-block bg-gold-400 hover:bg-gold-500 text-black px-8 py-3 font-semibold text-sm uppercase tracking-widest transition-colors">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
