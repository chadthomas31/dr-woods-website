import Image from 'next/image'
import { practiceData } from '../lib/practice-data'

export default function BookCTA() {
  const { doctor } = practiceData

  return (
    <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/cta-woman.jpeg"
        alt="Thoughtful woman - take the first step toward better mental health"
        fill
        className="object-cover"
        sizes="100vw"
        priority={false}
      />
      <div className="absolute inset-0 bg-charcoal-dark/60" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif mb-6 uppercase tracking-wide">
          Ready to Book an Appointment?
        </h2>
        <p className="text-white/90 text-lg md:text-xl mb-10">
          Give us a call today and put your mind at ease.
        </p>
        <a
          href={doctor.phoneHref}
          className="inline-block bg-amber-700/90 hover:bg-amber-600 text-white font-semibold py-4 px-12 rounded-sm transition-colors uppercase tracking-wide text-lg"
        >
          Call Now
        </a>
      </div>
    </section>
  )
}
