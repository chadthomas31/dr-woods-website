'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { practiceData } from '../lib/practice-data'

function DropdownMenu({
  item,
  pathname,
  openDropdown,
  onToggle,
  onClose,
}: {
  item: typeof practiceData.nav[number]
  pathname: string
  openDropdown: string | null
  onToggle: (label: string) => void
  onClose: () => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const hasChildren = 'children' in item && item.children && item.children.length > 0
  const isOpen = openDropdown === item.label

  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onClose])

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className={`text-xl font-medium transition-colors ${
          pathname === item.href
            ? 'text-olive-500 border-b-2 border-olive-500 pb-1'
            : 'text-gray-600 hover:text-olive-500'
        }`}
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => onToggle(item.label)}
        className={`text-xl font-medium transition-colors flex items-center gap-1 border-0 bg-transparent cursor-pointer ${
          pathname === item.href
            ? 'text-olive-500 border-b-2 border-olive-500 pb-1'
            : 'text-gray-600 hover:text-olive-500'
        }`}
      >
        {item.label}
        <ChevronDown size={18} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-3 min-w-[220px] bg-olive-50 rounded-xl shadow-xl border border-olive-200 py-3 z-50 animate-fadeIn">
          <div className="px-3 py-1.5 text-base font-semibold uppercase tracking-wider text-gray-400 border-b border-gray-100 mb-2">
            {item.label}
          </div>
          {item.children!.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              onClick={onClose}
              className="block px-4 py-3 text-base text-gray-700 hover:bg-olive-50 hover:text-olive-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { doctor, nav } = practiceData
  const pathname = usePathname()

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label))
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-olive-50 shadow-sm">
      {/* Top bar */}
      <div className="bg-olive-500 text-white text-lg sm:text-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <a href={doctor.phoneHref} className="flex items-center space-x-2 hover:text-olive-300 transition-colors whitespace-nowrap">
            <Phone size={20} />
            <span>{doctor.phone}</span>
          </a>
          <div className="hidden sm:flex items-center space-x-3 sm:space-x-4 text-base sm:text-lg flex-wrap justify-end gap-y-1">
            <Link href="/contact" className="hover:text-olive-300 transition-colors whitespace-nowrap">
              Schedule an Appointment
            </Link>
            <span className="text-gray-400 hidden md:inline" aria-hidden>
              |
            </span>
            <Link href="/policies" className="hover:text-olive-300 transition-colors whitespace-nowrap">
              Policies
            </Link>
            <span className="text-gray-400 hidden md:inline" aria-hidden>
              |
            </span>
            <Link href="/services" className="hover:text-olive-300 transition-colors whitespace-nowrap">
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav - light olive tint */}
      <div className="w-full bg-olive-50 border-b border-olive-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - centered under phone #, 0.5in from left, 1in from menu */}
          <Link href="/" className="block pl-[0.5in] mr-[1in] shrink-0">
            <h1 className="text-3xl sm:text-4xl font-cursive text-charcoal-dark whitespace-nowrap">{doctor.name}</h1>
            <p className="text-olive-500 text-sm font-medium whitespace-nowrap">{doctor.subtitle}</p>
          </Link>

          {/* Desktop Nav - single line, no wrap */}
          <nav className="hidden lg:flex items-center flex-nowrap space-x-8 shrink-0">
            {nav.map((item) => (
              <span key={item.href} className="whitespace-nowrap shrink-0">
                <DropdownMenu
                item={item}
                pathname={pathname}
                openDropdown={openDropdown}
                onToggle={handleDropdownToggle}
                onClose={() => setOpenDropdown(null)}
              />
              </span>
            ))}
            <Link href="/contact" className="btn-primary text-lg whitespace-nowrap shrink-0">
              Contact Me
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-charcoal hover:text-olive-500"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden pb-4 border-t border-olive-100 pt-4 space-y-1">
            {nav.map((item) => {
              const hasChildren = 'children' in item && item.children && item.children.length > 0
              return (
                <div key={item.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => { if (!hasChildren) setMobileOpen(false) }}
                      className={`block py-2 text-xl font-medium flex-1 ${
                        pathname === item.href ? 'text-olive-500' : 'text-gray-600'
                      }`}
                    >
                      {item.label}
                    </Link>
                    {hasChildren && (
                      <button
                        onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                        className="p-2 text-gray-400 hover:text-olive-500"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${mobileDropdown === item.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}
                  </div>
                  {hasChildren && mobileDropdown === item.label && (
                    <div className="pl-4 pb-2 space-y-1">
                      {item.children!.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1.5 text-base text-gray-500 hover:text-olive-500"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block btn-primary text-lg text-center mt-2">
              Contact Me
            </Link>
          </nav>
        )}
        </div>
      </div>
    </header>
  )
}
