import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { practiceData } from '../lib/practice-data'

const learnLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
] as const

const policyLinks = [
  { label: 'Policies & procedures', href: '/policies' },
  { label: 'Website data privacy', href: '/policies#website-privacy' },
  { label: 'Fee schedule', href: '/policies#fees' },
  { label: 'HIPAA / privacy practices', href: '/policies#hipaa-notice' },
] as const

export default function Footer() {
  const { doctor, conditions } = practiceData

  return (
    <footer className="bg-charcoal-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Practice */}
          <div>
            <h3 className="text-3xl font-cursive mb-2">{doctor.name}</h3>
            <p className="text-olive-400 text-sm font-medium mb-4">{doctor.subtitle}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{doctor.tagline}</p>
          </div>

          {/* Learn & decide */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-olive-400">Learn &amp; decide</h4>
            <ul className="space-y-2 mb-6">
              {learnLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-olive-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
              Conditions we treat
            </p>
            <ul className="space-y-2">
              {conditions.map((c) => (
                <li key={c.name}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-olive-400 transition-colors text-sm"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Start care */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-olive-400">Start care</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-olive-400 hover:text-olive-300 font-semibold text-sm transition-colors"
                >
                  Schedule an appointment
                </Link>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Phone size={14} className="text-olive-400 shrink-0" />
                <a href={doctor.phoneHref} className="hover:text-olive-400 transition-colors text-sm">
                  {doctor.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail size={14} className="text-olive-400 shrink-0" />
                <a href={`mailto:${doctor.email}`} className="hover:text-olive-400 transition-colors text-sm break-all">
                  {doctor.email}
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-300">
                <MapPin size={14} className="text-olive-400 mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed">
                  {doctor.address.street}, {doctor.address.city}, {doctor.address.state}{' '}
                  {doctor.address.zip}
                </span>
              </li>
            </ul>
          </div>

          {/* Policies & logistics */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-olive-400">Policies &amp; logistics</h4>
            <ul className="space-y-2">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-olive-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} {doctor.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <Link
              href="/policies#website-privacy"
              className="text-gray-500 hover:text-olive-400 text-xs transition-colors"
            >
              Privacy policy
            </Link>
            <Link
              href="/policies#hipaa-notice"
              className="text-gray-500 hover:text-olive-400 text-xs transition-colors"
            >
              HIPAA notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
