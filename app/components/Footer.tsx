import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { practiceData } from '../lib/practice-data'

export default function Footer() {
  const { doctor, nav } = practiceData

  return (
    <footer className="bg-black text-white py-16 border-t border-gold-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo */}
          <div>
            <div className="border border-gold-400 px-4 py-2 inline-block mb-3">
              <h3 className="text-lg font-serif font-bold tracking-wide">{doctor.name}</h3>
            </div>
            <p className="text-gold-400 text-sm font-serif">{doctor.subtitle}</p>
            <p className="text-gray-500 text-xs italic mt-1">{doctor.tagline}</p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm text-gold-400">Explore</h4>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-300 hover:text-gold-400 transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Me */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm text-gold-400">Contact Me</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <Phone size={14} className="text-gold-500" />
                <a href={doctor.phoneHref} className="hover:text-gold-400 transition-colors text-sm">
                  {doctor.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={14} className="text-gold-500" />
                <a href={`mailto:${doctor.email}`} className="hover:text-gold-400 transition-colors text-sm">
                  {doctor.email}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={14} className="text-gold-500 mt-0.5" />
                <span className="text-sm">
                  {doctor.address.street}, {doctor.address.city}, {doctor.address.state} {doctor.address.zip}, {doctor.address.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold-700/30 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} {doctor.name}. All rights reserved.
          </p>
          <Link href="/policies" className="text-gray-500 hover:text-gold-400 text-xs mt-2 sm:mt-0 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
