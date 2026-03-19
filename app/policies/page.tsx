import BookCTA from '../components/BookCTA'
import { practiceData } from '../lib/practice-data'

export default function PoliciesPage() {
  const { hipaa, fees, feesNotes, payment, cancellations } = practiceData

  return (
    <div className="min-h-screen bg-black pt-28">
      {/* Header */}
      <section className="pb-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-gold-400 uppercase tracking-widest mb-4">
            {hipaa.title}
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {hipaa.intro}
          </p>
        </div>
      </section>

      {/* Fees */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-gold-700/40 p-8">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-gold-400 uppercase tracking-wider text-center mb-8">
              Fees
            </h2>

            <div className="space-y-3">
              {fees.map((fee, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-gold-700/20 last:border-0">
                  <span className="text-gray-300 text-sm">{fee.service}</span>
                  <span className="text-white font-medium text-sm ml-4 whitespace-nowrap">{fee.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              {feesNotes.map((note, i) => (
                <p key={i} className="text-gray-500 text-xs leading-relaxed">{note}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Cancellations */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Payment */}
            <div className="border border-gold-700/40 p-8">
              <h2 className="text-lg font-serif font-bold text-gold-400 uppercase tracking-wider mb-4">
                {payment.title}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">{payment.text}</p>
            </div>

            {/* Cancellations */}
            <div className="border border-gold-700/40 p-8">
              <h2 className="text-lg font-serif font-bold text-gold-400 uppercase tracking-wider mb-4">
                {cancellations.title}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">{cancellations.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* HIPAA Notice */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-gold-700/40 p-8">
            <h2 className="text-lg font-serif font-bold text-gold-400 uppercase tracking-wider mb-4 text-center">
              Notice of Privacy Practices
            </h2>
            <p className="text-gray-400 text-xs leading-relaxed text-center uppercase tracking-wide mb-6">
              {hipaa.privacyNotice}
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              This Notice of Privacy Practice describes how we may use and disclose your protected health information to carry out treatment, payment, or health care operations and for other purposes that are permitted or required by law. It also describes your rights to access and control your protected health information. &ldquo;Protected health information&rdquo; (PHI) is information about you, including demographic information, that may identify you and that relates to your past, present, or future physical or mental health or condition and related health care services.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">
              We are required to abide by the terms of this Notice of Privacy Practice. We may change the terms of our notice at any time. Upon your request, we will provide you with any revised Notice of Privacy Practice. You may request a revised version by contacting our office.
            </p>
          </div>
        </div>
      </section>

      <BookCTA />
    </div>
  )
}
