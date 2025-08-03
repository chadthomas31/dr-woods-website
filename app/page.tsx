'use client'

import { useState, useEffect } from 'react'
import { Phone, Mail, MapPin, Clock, Star, Shield, Heart, Home as HomeIcon, Award, Users, ChevronRight, PlayCircle, CheckCircle, Calendar, MessageSquare, ArrowRight } from 'lucide-react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      text: "Dr. Woods provided exceptional care during my most challenging time. His personalized approach and availability gave me the confidence to focus on my recovery.",
      author: "Sarah M.",
      role: "Executive"
    },
    {
      text: "Having Dr. Woods come to my home for consultations was life-changing. The level of personal attention and medical expertise is unmatched.",
      author: "Michael R.",
      role: "Business Owner"
    },
    {
      text: "After 25 years in traditional healthcare, Dr. Woods' concierge approach is exactly what modern medicine should be - personal, thorough, and accessible.",
      author: "Jennifer L.",
      role: "Healthcare Professional"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Luxury Header */}
      <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                <Heart className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dr. Robert L. Woods MD</h1>
                <p className="text-sm text-blue-600 font-medium">Concierge Psychiatry</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
              <a href="tel:+17143368042" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                Schedule Consultation
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="transition-all duration-1000">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6 text-sm font-medium">
                <Award className="mr-2" size={16} />
                25+ Years of Psychiatric Excellence
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Exceptional Care
                <span className="block text-blue-600">In Your Space</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience personalized psychiatric care that comes to you. Dr. Woods brings decades of expertise 
                directly to your home, office, or preferred location—because your mental health deserves undivided attention.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="tel:+17143368042" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
                  Schedule Private Consultation
                </a>
                <a href="#about" className="flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors">
                  <PlayCircle className="mr-2" size={24} />
                  Learn Dr. Woods' Story
                </a>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <HomeIcon className="text-blue-600 mx-auto mb-2" size={32} />
                  <p className="font-semibold text-gray-900">In-Home Visits</p>
                  <p className="text-sm text-gray-600">Your comfort, your space</p>
                </div>
                <div className="text-center">
                  <Clock className="text-blue-600 mx-auto mb-2" size={32} />
                  <p className="font-semibold text-gray-900">24/7 Availability</p>
                  <p className="text-sm text-gray-600">Always here when needed</p>
                </div>
                <div className="text-center">
                  <Shield className="text-blue-600 mx-auto mb-2" size={32} />
                  <p className="font-semibold text-gray-900">Confidential Care</p>
                  <p className="text-sm text-gray-600">Complete privacy assured</p>
                </div>
              </div>
            </div>

            <div className="transition-all duration-1000 delay-300">
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                        <Heart className="text-white" size={32} />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-2xl font-bold text-gray-900">Dr. Robert L. Woods</h3>
                        <p className="text-blue-600 font-medium">Board-Certified Psychiatrist</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      "After overcoming my own health challenges, I've reimagined psychiatric care to be 
                      truly personal, accessible, and focused on what matters most—you."
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="text-green-500 mr-3" size={18} />
                        Cancer survivor and advocate
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="text-green-500 mr-3" size={18} />
                        25+ years clinical experience
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="text-green-500 mr-3" size={18} />
                        Concierge & Telepsychiatry specialist
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="text-green-500 mr-3" size={18} />
                        Individualized treatment approach
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ⭐ Trusted by Hundreds of Families
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">A Journey of Resilience & Reimagination</h2>
              <div className="text-gray-600 space-y-4">
                <p className="text-lg">
                  For over 25 years, Dr. Woods practiced traditional psychiatry with dedication and success. 
                  Then life took an unexpected turn—a stage IV cancer diagnosis that would change everything.
                </p>
                <p className="text-lg">
                  After 6 months of intensive treatment and 5+ years cancer-free, Dr. Woods emerged with a 
                  profound understanding: healthcare should be personal, unhurried, and centered on the human experience.
                </p>
                <p className="text-lg">
                  Today, without the constraints of a traditional office, Dr. Woods brings the highest quality 
                  psychiatric care directly to you—whether at home, work, school, or anywhere you feel most comfortable.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
              <blockquote className="text-2xl font-medium text-gray-900 mb-6 italic">
                "My experience taught me that every patient is unique, and statistical data should guide—never replace—individualized care."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={24} />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Dr. Robert L. Woods MD</p>
                  <p className="text-blue-600">Founder, Concierge Psychiatry Practice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Psychiatric Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From your first consultation to ongoing wellness support, every aspect of your care is designed 
              around your unique needs and comfort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Depression & Anxiety</h3>
              <p className="text-gray-600 mb-6">Evidence-based treatment for mood disorders with personalized care plans.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">ADHD & Focus</h3>
              <p className="text-gray-600 mb-6">Comprehensive evaluation and treatment for attention disorders.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trauma & PTSD</h3>
              <p className="text-gray-600 mb-6">Specialized care for trauma recovery using evidence-based approaches.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Family Support</h3>
              <p className="text-gray-600 mb-6">Guidance for family members affected by mental health challenges.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sleep & Wellness</h3>
              <p className="text-gray-600 mb-6">Comprehensive approach to sleep disorders and mental health.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Executive Wellness</h3>
              <p className="text-gray-600 mb-6">Specialized care for high-performing professionals.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Where You Feel Most Comfortable</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Dr. Woods brings exceptional psychiatric care to any location that suits your needs.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center justify-center space-x-2">
                <HomeIcon size={24} />
                <span className="font-medium">Your Home</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin size={24} />
                <span className="font-medium">Your Office</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users size={24} />
                <span className="font-medium">Schools</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MessageSquare size={24} />
                <span className="font-medium">Telepsychiatry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

             {/* Testimonials Section */}
       <section className="py-20 bg-white">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-gray-900 mb-6">What Patients Say</h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Hear from families who have experienced Dr. Woods' personalized approach to psychiatric care.
             </p>
           </div>

           <div className="relative">
             <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
               <div className="text-center">
                 <div className="flex justify-center mb-6">
                   {[0, 1, 2].map((index) => (
                     <button
                       key={index}
                       onClick={() => setActiveTestimonial(index)}
                       className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                         activeTestimonial === index ? 'bg-blue-600' : 'bg-blue-300'
                       }`}
                     />
                   ))}
                 </div>
                 
                 <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 italic leading-relaxed">
                   "{testimonials[activeTestimonial].text}"
                 </blockquote>
                 
                 <div className="flex items-center justify-center space-x-2">
                   <Star className="text-yellow-400" size={20} />
                   <Star className="text-yellow-400" size={20} />
                   <Star className="text-yellow-400" size={20} />
                   <Star className="text-yellow-400" size={20} />
                   <Star className="text-yellow-400" size={20} />
                 </div>
                 
                 <div className="mt-4">
                   <p className="font-semibold text-gray-900">{testimonials[activeTestimonial].author}</p>
                   <p className="text-blue-600">{testimonials[activeTestimonial].role}</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Contact Section */}
       <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Begin Your Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take the first step toward personalized psychiatric care that prioritizes your comfort and individual needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+17143368042" className="text-blue-600 hover:text-blue-700 transition-colors text-lg">
                      (714) 336-8042
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:rwoodsmd@me.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                      rwoodsmd@me.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Office Address</p>
                    <p className="text-gray-600 leading-relaxed">
                      3305 Molino<br />
                      Irvine, California 92618<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="text-yellow-400" size={32} />
                <h3 className="text-2xl font-bold">Schedule Your Consultation</h3>
              </div>
              
              <p className="text-blue-100 mb-6 leading-relaxed">
                Dr. Woods offers both in-person visits and secure telepsychiatry sessions. 
                Choose the format that best supports your comfort and schedule.
              </p>
              
              <div className="space-y-4">
                <a href="tel:+17143368042" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 w-full text-center py-4 rounded-full font-bold text-lg transition-colors block">
                  Call (714) 336-8042
                </a>
                <a href="mailto:rwoodsmd@me.com" className="bg-white/20 hover:bg-white/30 text-white border border-white/30 w-full text-center py-4 rounded-full font-semibold transition-colors block">
                  Email for Information
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Dr. Robert L. Woods MD</h3>
                  <p className="text-blue-400">Concierge Psychiatry</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Providing exceptional, personalized psychiatric care in the comfort and convenience 
                of your chosen environment.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <Phone size={16} className="text-blue-400" />
                  <a href="tel:+17143368042" className="hover:text-blue-400 transition-colors">
                    (714) 336-8042
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail size={16} className="text-blue-400" />
                  <a href="mailto:rwoodsmd@me.com" className="hover:text-blue-400 transition-colors">
                    rwoodsmd@me.com
                  </a>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin size={16} className="text-blue-400 mt-1" />
                  <span>Irvine, California</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">HIPAA Notice</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 mt-12">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © 2025 Dr. Robert L. Woods MD. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
