import Image from 'next/image'
import { practiceData } from '../lib/practice-data'

export default function Mission() {
  const { mission } = practiceData

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/images/mission-1.jpeg"
              alt="Doctor with patient during consultation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-dark mb-6 uppercase tracking-wide">
              {mission.title}
            </h2>
            {mission.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
