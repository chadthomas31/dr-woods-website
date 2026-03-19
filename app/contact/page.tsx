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
  }

  return (
    <div className="min-h-screen bg-black pt-28">
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-8 md:p-10">
              <h1 className="text-2xl font-serif font-bold text-black uppercase tracking-wide mb-6">
                Book A Consultation With Me Today!
              </h1>

              {submitted ? (
                <div className="text-center py-12">
                  <p className="text-xl font-serif text-black mb-4">Thank you!</p>
                  <p className="text-gray-600">Your email client should open with the consultation request. If it doesn&apos;t, please call us directly at {doctor.phone}.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-600 text-sm mb-1">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-gray-300 px-4 py-2.5 text-black text-sm focus:outline-none focus:border-gold-400"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 text-sm mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-gray-300 px-4 py-2.5 text-black text-sm focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm mb-1">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-gray-300 px-4 py-2.5 text-black text-sm focus:outline-none focus:border-gold-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm mb-1">Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border border-gray-300 px-4 py-2.5 text-black text-sm focus:outline-none focus:border-gold-400 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gold-400 hover:bg-gold-500 text-black px-8 py-3 font-semibold text-sm uppercase tracking-widest transition-colors w-full"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gold-400 uppercase tracking-wider mb-8">
                Contact Me
              </h2>

              <div className="space-y-6">
                <div>
                  <p className="text-gold-400 text-sm uppercase tracking-wider mb-1">Office</p>
                  <p className="text-gray-300">
                    {doctor.address.street}, {doctor.address.city}, {doctor.address.state} {doctor.address.zip}
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-gold-400" />
                  <a href={doctor.phoneHref} className="text-white hover:text-gold-400 transition-colors">
                    {doctor.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-gold-400" />
                  <a href={`mailto:${doctor.email}`} className="text-white hover:text-gold-400 transition-colors">
                    {doctor.email}
                  </a>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-gold-400 mt-0.5" />
                  <p className="text-gray-300">
                    {doctor.address.street}<br />
                    {doctor.address.city}, {doctor.address.state} {doctor.address.zip}<br />
                    {doctor.address.country}
                  </p>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 border border-gold-700/30 bg-stone-900/50 aspect-video flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.4!2d-117.79!3d33.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQwJzQ4LjAiTiAxMTfCsDQ3JzI0LjAiVw!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '250px' }}
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
