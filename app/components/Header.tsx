'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { practiceData } from '../lib/practice-data'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { doctor, nav } = practiceData
  const pathname = usePathname()

  return (
    <header className="fixed w-full top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gold-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="block">
            <div className="border border-gold-400 px-4 py-2">
              <h1 className="text-lg sm:text-xl font-serif font-bold text-white tracking-wide">{doctor.name}</h1>
            </div>
            <p className="text-gold-400 text-sm font-serif mt-1">{doctor.subtitle}</p>
            <p className="text-gray-400 text-xs italic hidden sm:block">{doctor.tagline}</p>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm uppercase tracking-wider font-medium transition-colors ${
                  pathname === item.href ? 'text-gold-400 border-b border-gold-400 pb-1' : 'text-gray-300 hover:text-gold-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="bg-gold-400 hover:bg-gold-500 text-black px-6 py-2.5 font-semibold text-sm uppercase tracking-wider transition-colors">
              Contact Me
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-gold-400 hover:text-gold-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden pb-6 space-y-3 border-t border-gold-700/30 pt-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2 uppercase tracking-wider text-sm font-medium ${
                  pathname === item.href ? 'text-gold-400' : 'text-gray-300 hover:text-gold-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block bg-gold-400 hover:bg-gold-500 text-black px-6 py-3 font-semibold text-center uppercase tracking-wider text-sm transition-colors">
              Contact Me
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
