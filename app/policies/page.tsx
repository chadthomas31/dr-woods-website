import BookCTA from '../components/BookCTA'
import { practiceData } from '../lib/practice-data'

export default function PoliciesPage() {
  const { hipaa, fees, feesNotes, payment, cancellations, websitePrivacy } = practiceData

  return (
    <div className="min-h-screen pt-40">
      <section className="pb-12 pt-[1in]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal-dark mb-4">{hipaa.title}</h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">{hipaa.intro}</p>
        </div>
      </section>

      {/* Website privacy (use of this site — distinct from HIPAA clinical notice below) */}
      <section id="website-privacy" className="pb-16 scroll-mt-36 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-charcoal-dark mb-2">{websitePrivacy.title}</h2>
          <p className="text-gray-500 text-sm mb-6">{websitePrivacy.lastUpdated}</p>
          <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-10">
            {websitePrivacy.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {websitePrivacy.sections.map((section) => (
            <div key={section.heading} className="mb-10 last:mb-0">
              <h3 className="text-lg font-bold text-charcoal-dark mb-3">{section.heading}</h3>
              {'paragraphs' in section && section.paragraphs && (
                <div className="space-y-3 text-gray-600 text-sm leading-relaxed mb-3">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}
              {'list' in section && section.list && (
                <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm leading-relaxed mb-3">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {'footerParagraphs' in section && section.footerParagraphs && (
                <div className="space-y-3 text-gray-600 text-sm leading-relaxed mt-3">
                  {section.footerParagraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Fees */}
      <section id="fees" className="pb-16 scroll-mt-36">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-charcoal-dark text-center mb-8">Fees</h2>

            <div className="space-y-0">
              {fees.map((fee, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700 text-sm">{fee.service}</span>
                  <span className="font-semibold text-charcoal-dark text-sm ml-4 whitespace-nowrap">{fee.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-2">
              {feesNotes.map((note, i) => (
                <p key={i} className="text-gray-400 text-xs leading-relaxed">{note}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Cancellations */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-lg font-bold text-charcoal-dark mb-4">{payment.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{payment.text}</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-lg font-bold text-charcoal-dark mb-4">{cancellations.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{cancellations.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* HIPAA */}
      <section id="hipaa-notice" className="pb-16 scroll-mt-36">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-lg font-bold text-charcoal-dark mb-4 text-center">Notice of Privacy Practices</h2>
            <p className="text-gray-500 text-xs text-center mb-6">{hipaa.privacyNotice}</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              This Notice of Privacy Practice describes how we may use and disclose your protected health information to carry out treatment, payment, or health care operations and for other purposes that are permitted or required by law. It also describes your rights to access and control your protected health information.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              We are required to abide by the terms of this Notice of Privacy Practice. We may change the terms of our notice at any time. Upon your request, we will provide you with any revised Notice of Privacy Practice.
            </p>
          </div>
        </div>
      </section>

      <BookCTA />
    </div>
  )
}
