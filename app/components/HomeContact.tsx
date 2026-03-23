import { practiceData } from '../lib/practice-data'

export default function HomeContact() {
  const { testimonials } = practiceData

  return (
    <section className="py-16 md:py-20 bg-olive-100/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-dark text-center mb-12">
          What Our Patients Say
        </h2>

        <div className="space-y-10">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="text-center">
              <p className="text-gray-600 text-lg italic leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <footer className="text-sm">
                <span className="font-semibold text-charcoal-dark">{t.author}</span>
                <span className="text-gray-400 mx-2">&mdash;</span>
                <span className="text-gray-500">{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
