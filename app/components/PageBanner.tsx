import Image from 'next/image'
import { practiceData } from '../lib/practice-data'

type PageBannerProps = {
  title: string
  subtitle?: string
  imageSrc?: string
}

export default function PageBanner({ title, subtitle, imageSrc = '/images/services-banner.jpeg' }: PageBannerProps) {
  const { doctor } = practiceData

  return (
    <section className="relative h-[280px] md:h-[360px] overflow-hidden">
      <Image
        src={imageSrc}
        alt={`${title} — ${doctor.name}`}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-charcoal-dark/60" />
      <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-amber-200/90 text-sm font-medium tracking-wider uppercase mb-1">
            {doctor.name}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight uppercase">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/90 mt-2 text-lg">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  )
}
