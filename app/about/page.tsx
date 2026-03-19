'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import BookCTA from '../components/BookCTA'
import { practiceData } from '../lib/practice-data'

function AccordionItem({ title, content, isOpen, onClick }: { title: string; content: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border border-gold-700/40 mb-3">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gold-400/5 transition-colors"
      >
        <h3 className="text-lg font-serif font-bold text-gold-400 uppercase tracking-wider italic">{title}</h3>
        <ChevronDown
          size={20}
          className={`text-gold-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-300 leading-relaxed">{content}</p>
        </div>
      )}
    </div>
  )
}

export default function AboutPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { about, conditions } = practiceData

  return (
    <div className="min-h-screen bg-black pt-28">
      {/* Intro */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gold-400 uppercase tracking-widest text-sm font-medium mb-4">{about.intro.label}</p>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-white uppercase tracking-wide leading-snug mb-6">
                {about.intro.title}
              </h1>
              {about.intro.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-300 leading-relaxed mb-4">{p}</p>
              ))}

              {/* Conditions list */}
              <ul className="grid grid-cols-2 gap-2 mt-6">
                {conditions.map((c, i) => (
                  <li key={i} className="flex items-center text-gray-300 text-sm">
                    <span className="text-gold-400 mr-2">&bull;</span>
                    {c.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Photo placeholder */}
            <div className="bg-gradient-to-br from-amber-900/40 to-stone-800/40 rounded-lg aspect-[4/5] border border-gold-700/20" />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto border-t border-gold-700/30" />

      {/* About Doctor Woods - Accordion */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white uppercase tracking-wide text-center mb-10">
            About Doctor Woods
          </h2>

          {about.sections.map((section, i) => (
            <AccordionItem
              key={i}
              title={section.title}
              content={section.content}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </section>

      <BookCTA />
    </div>
  )
}
