'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import BookCTA from '../components/BookCTA'
import { practiceData } from '../lib/practice-data'

export default function ContactPage() {
  const { doctor } = practiceData
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Consultation Request from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:${doctor.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        event_category: 'Contact',
        event_label: 'Consultation Request',
      })
    }
  }

  return (
    <div className="min-h-screen pt-40">
      <section className="pb-20 pt-[1in]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-charcoal-dark mb-4 uppercase">
              Book a Consultation
            </h1>
            <p className="text-gray-600 text-lg">
              Reach out today and take the first step toward better mental health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <p className="text-2xl font-bold text-charcoal-dark mb-4">Thank you!</p>
                  <p className="text-gray-600">Your email client should open with the consultation request. If it doesn&apos;t, please call us directly at {doctor.phone}.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1.5">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full min-h-[44px] border border-gray-300 rounded-md px-4 py-3 text-gray-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full min-h-[44px] border border-gray-300 rounded-md px-4 py-3 text-gray-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full min-h-[44px] border border-gray-300 rounded-md px-4 py-3 text-gray-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1.5">Message</label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full min-h-[120px] border border-gray-300 rounded-md px-4 py-3 text-gray-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent resize-y"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full text-sm">
                    Submit
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-charcoal-dark mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-olive-50 rounded-full flex items-center justify-center">
                    <Phone size={18} className="text-olive-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a
                      href={doctor.phoneHref}
                      onClick={() => {
                        if (typeof window.gtag === 'function') {
                          window.gtag('event', 'phone_click', {
                            event_category: 'Contact',
                            event_label: doctor.phone,
                          })
                        }
                      }}
                      className="touch-target-link text-charcoal-dark hover:text-olive-500 transition-colors font-medium"
                    >
                      {doctor.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-olive-50 rounded-full flex items-center justify-center">
                    <Mail size={18} className="text-olive-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href={`mailto:${doctor.email}`}
                      className="touch-target-link text-charcoal-dark hover:text-olive-500 transition-colors font-medium break-all"
                    >
                      {doctor.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-olive-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-olive-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Office</p>
                    <p className="text-charcoal-dark font-medium">
                      {doctor.address.street}<br />
                      {doctor.address.city}, {doctor.address.state} {doctor.address.zip}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.4!2d-117.79!3d33.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQwJzQ4LjAiTiAxMTfCsDQ3JzI0LjAiVw!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookCTA />
    </div>
  )
}
