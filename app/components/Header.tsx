'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { practiceData } from '../lib/practice-data'
import DoctorSignature from './DoctorSignature'

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

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false)
    setMobileDropdown(null)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        closeMobileMenu()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [mobileOpen, closeMobileMenu])

  return (
    <header className="fixed w-full top-0 z-50 bg-olive-50 shadow-sm">
      {/* Top bar */}
      <div className="bg-olive-500 text-white text-lg sm:text-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <a
            href={doctor.phoneHref}
            className="flex items-center min-h-[44px] space-x-2 hover:text-olive-300 transition-colors whitespace-nowrap -mx-2 px-2 rounded-md hover:bg-white/10"
          >
            <Phone size={20} />
            <span>{doctor.phone}</span>
          </a>
          <div className="hidden sm:flex items-center space-x-3 sm:space-x-4 text-base sm:text-lg flex-wrap justify-end gap-y-1">
            <Link
              href="/contact"
              className="inline-flex items-center min-h-[44px] px-1 hover:text-olive-300 transition-colors whitespace-nowrap rounded-md hover:bg-white/10"
            >
              Schedule an Appointment
            </Link>
            <span className="text-gray-400 hidden md:inline" aria-hidden>
              |
            </span>
            <Link
              href="/policies"
              className="inline-flex items-center min-h-[44px] px-1 hover:text-olive-300 transition-colors whitespace-nowrap rounded-md hover:bg-white/10"
            >
              Policies
            </Link>
            <span className="text-gray-400 hidden md:inline" aria-hidden>
              |
            </span>
            <Link
              href="/services"
              className="inline-flex items-center min-h-[44px] px-1 hover:text-olive-300 transition-colors whitespace-nowrap rounded-md hover:bg-white/10"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav - light olive tint */}
      <div className="w-full bg-olive-50 border-b border-olive-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4 py-4">
          {/* Logo: min-w-0 + max-w so wide intrinsic image cannot blow out flex row */}
          <Link
            href="/"
            className="block min-w-0 max-w-[260px] sm:max-w-[300px] md:max-w-[330px] lg:max-w-[380px] shrink"
          >
            <span className="sr-only">{doctor.name}</span>
            <DoctorSignature className="md:h-[4.5rem] lg:h-[4.75rem]" />
            <p className="text-olive-500 text-sm font-medium truncate mt-1">{doctor.subtitle}</p>
          </Link>

          {/* Desktop Nav - single line, no wrap */}
          <nav className="hidden lg:flex items-center flex-nowrap space-x-8 shrink-0 min-w-0">
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
            type="button"
            className="lg:hidden flex items-center justify-center min-h-[44px] min-w-[44px] rounded-lg text-charcoal hover:text-olive-500 hover:bg-olive-100/80 active:bg-olive-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-primary-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="relative w-7 h-7">
              <Menu 
                size={28} 
                className={`absolute inset-0 transition-all duration-300 ${
                  mobileOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                }`} 
              />
              <X 
                size={28} 
                className={`absolute inset-0 transition-all duration-300 ${
                  mobileOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                }`} 
              />
            </span>
          </button>
        </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileOpen ? 'visible' : 'invisible'
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Dark backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMobileMenu}
        />

        {/* Slide-in panel */}
        <nav
          id="mobile-primary-nav"
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-olive-50 shadow-2xl transform transition-transform duration-300 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between p-4 border-b border-olive-200 bg-olive-100/50">
            <span className="text-lg font-semibold text-charcoal-dark">Menu</span>
            <button
              type="button"
              onClick={closeMobileMenu}
              className="flex items-center justify-center h-11 w-11 rounded-lg text-gray-500 hover:text-olive-600 hover:bg-olive-200/50 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Scrollable nav content */}
          <div className="overflow-y-auto h-[calc(100%-80px)] p-4 space-y-1">
            {nav.map((item, index) => {
              const hasChildren = 'children' in item && item.children && item.children.length > 0
              const isExpanded = mobileDropdown === item.label
              return (
                <div 
                  key={item.href}
                  className="transform transition-all duration-300"
                  style={{ 
                    transitionDelay: mobileOpen ? `${index * 50}ms` : '0ms',
                    opacity: mobileOpen ? 1 : 0,
                    transform: mobileOpen ? 'translateX(0)' : 'translateX(20px)'
                  }}
                >
                  <div className="flex items-center justify-between rounded-lg hover:bg-olive-100/60 transition-colors">
                    <Link
                      href={item.href}
                      onClick={() => { if (!hasChildren) closeMobileMenu() }}
                      className={`flex min-h-[52px] items-center py-3 px-3 text-lg font-medium flex-1 transition-colors ${
                        pathname === item.href 
                          ? 'text-olive-600' 
                          : 'text-charcoal-dark hover:text-olive-600'
                      }`}
                    >
                      {item.label}
                      {pathname === item.href && (
                        <span className="ml-2 w-2 h-2 rounded-full bg-olive-500" />
                      )}
                    </Link>
                    {hasChildren && (
                      <button
                        type="button"
                        onClick={() => setMobileDropdown(isExpanded ? null : item.label)}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-gray-400 hover:text-olive-600 hover:bg-olive-200/50 transition-all mr-1"
                        aria-expanded={isExpanded}
                        aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${item.label} submenu`}
                      >
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}
                  </div>
                  
                  {/* Expandable submenu with animation */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      hasChildren && isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-4 py-2 space-y-1 border-l-2 border-olive-300 ml-4">
                      {item.children?.map((child, childIndex) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={closeMobileMenu}
                          className="flex min-h-[44px] items-center py-2 px-3 text-base text-gray-600 hover:text-olive-600 hover:bg-olive-100/40 rounded-lg transition-all"
                          style={{
                            transitionDelay: isExpanded ? `${childIndex * 30}ms` : '0ms'
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Contact button */}
            <div 
              className="pt-4 transform transition-all duration-300"
              style={{ 
                transitionDelay: mobileOpen ? `${nav.length * 50}ms` : '0ms',
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateX(0)' : 'translateX(20px)'
              }}
            >
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="btn-primary w-full text-lg text-center flex items-center justify-center gap-2 py-4"
              >
                <Phone size={20} />
                Contact Me
              </Link>
            </div>

            {/* Phone number */}
            <div 
              className="pt-4 text-center transform transition-all duration-300"
              style={{ 
                transitionDelay: mobileOpen ? `${(nav.length + 1) * 50}ms` : '0ms',
                opacity: mobileOpen ? 1 : 0
              }}
            >
              <a
                href={doctor.phoneHref}
                className="inline-flex items-center gap-2 text-olive-600 hover:text-olive-700 font-medium transition-colors"
              >
                <Phone size={18} />
                {doctor.phone}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
