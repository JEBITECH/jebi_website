'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import { Building2, Home, Building, Users, CheckCircle, ArrowRight } from 'lucide-react'

const useCases = [
  {
    icon: Building2,
    title: 'Hotels & Boutiques',
    subtitle: 'Hotels',
    description: 'Replace outdated in-room binders with a live, branded digital portal. Guests access everything — from spa bookings to restaurant menus — instantly.',
    features: [
      'AI concierge replacing front desk calls',
      'Real-time amenity and service updates',
      'In-stay promotions and upsells',
      'Guest feedback collection',
    ],
    stat: { value: '60%', label: 'fewer front desk calls' },
    gradient: 'from-stayguide-blue/5 to-stayguide-blue/10',
    accentColor: 'stayguide-blue',
    iconBg: 'bg-stayguide-blue/10',
    iconColor: 'text-stayguide-blue',
    ringColor: 'ring-stayguide-blue/20',
  },
  {
    icon: Home,
    title: 'Short-Term Rentals',
    subtitle: 'Vacation Rentals',
    description: 'Deliver a professional guest experience for Airbnb and VRBO listings. Automate check-in, reduce WhatsApp messages, and boost your ratings.',
    features: [
      'Automated check-in instructions',
      'House rules with instant AI answers',
      'Curated local area guide',
      'Post-stay review prompts',
    ],
    stat: { value: '5★', label: 'guest review average' },
    gradient: 'from-stayguide-green/5 to-stayguide-green/10',
    accentColor: 'stayguide-green',
    iconBg: 'bg-stayguide-green/10',
    iconColor: 'text-stayguide-green',
    ringColor: 'ring-stayguide-green/20',
  },
  {
    icon: Building,
    title: 'Serviced Apartments',
    subtitle: 'Serviced Apartments',
    description: 'Manage long-stay guests with ongoing digital communication, routine updates, and loyalty-building local partnerships built into the handbook.',
    features: [
      'Extended stay communication tools',
      'Inventory and amenity updates',
      'Maintenance request channel',
      'Local partnership integration',
    ],
    stat: { value: '40%', label: 'less manual messaging' },
    gradient: 'from-stayguide-blue/5 to-stayguide-blue/10',
    accentColor: 'stayguide-blue',
    iconBg: 'bg-stayguide-blue/10',
    iconColor: 'text-stayguide-blue',
    ringColor: 'ring-stayguide-blue/20',
  },
  {
    icon: Users,
    title: 'Property Managers',
    subtitle: 'Property Management',
    description: 'Centralize guest communication, automate support, and drive upsell revenue across your entire portfolio from a single platform.',
    features: [
      'Multi-property dashboard',
      'Guest communication automation',
      'Revenue and insights reporting',
      'Team collaboration tools',
    ],
    stat: { value: '3x', label: 'faster guest responses' },
    gradient: 'from-stayguide-green/5 to-stayguide-green/10',
    accentColor: 'stayguide-green',
    iconBg: 'bg-stayguide-green/10',
    iconColor: 'text-stayguide-green',
    ringColor: 'ring-stayguide-green/20',
  },
]

export default function StayGuideUseCases() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeCase = useCases[activeIndex]

  return (
    <section id="use-cases" className="py-20 md:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-stayguide-blue border border-stayguide-blue/20 bg-stayguide-blue/5 px-4 py-2 rounded-full mb-5">
              <Users className="w-3.5 h-3.5" />
              Use Cases
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 font-heading leading-tight mb-4">
              Built for Every Corner of{' '}
              <span className="text-stayguide-green">Hospitality</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-gray-600 text-base sm:text-lg leading-7">
              Whether you manage one villa or hundreds of properties, StayGuide scales to
              your operations and brand.
            </p>
          </AnimatedSection>
        </div>

        {/* Desktop: Tab-based layout */}
        <AnimatedSection direction="up" delay={0.25}>
          <div className="hidden lg:block">
            {/* Tab Buttons */}
            <div className="flex justify-center gap-2 mb-10">
              {useCases.map((useCase, i) => (
                <button
                  key={useCase.title}
                  onClick={() => setActiveIndex(i)}
                  className={`relative flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeIndex === i
                      ? `bg-white shadow-lg shadow-${useCase.accentColor}/10 text-gray-900 ring-1 ${useCase.ringColor}`
                      : 'text-gray-500 hover:text-gray-700 hover:bg-white/60'
                  }`}
                >
                  <useCase.icon className={`w-4 h-4 ${activeIndex === i ? useCase.iconColor : ''}`} />
                  {useCase.title}
                  {activeIndex === i && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-${useCase.accentColor}`}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Active Content Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-3xl border border-gray-100 bg-gradient-to-br ${activeCase.gradient} p-10 overflow-hidden`}
              >
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-80 h-80 bg-${activeCase.accentColor}/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none`} />

                <div className="relative z-10 grid grid-cols-12 gap-10 items-center">
                  {/* Left: Content */}
                  <div className="col-span-7">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${activeCase.iconBg} flex items-center justify-center`}>
                        <activeCase.icon className={`w-6 h-6 ${activeCase.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{activeCase.title}</h3>
                        <span className={`text-xs font-semibold ${activeCase.iconColor} uppercase tracking-wider`}>
                          {activeCase.subtitle}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-7 mb-6 max-w-lg">
                      {activeCase.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {activeCase.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5">
                          <CheckCircle className={`w-4.5 h-4.5 ${activeCase.iconColor} flex-shrink-0 mt-0.5`} />
                          <span className="text-sm text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Stat highlight */}
                  <div className="col-span-5 flex justify-center">
                    <div className="relative">
                      <div className={`w-56 h-56 rounded-3xl bg-white/80 backdrop-blur-sm border border-white shadow-xl shadow-${activeCase.accentColor}/5 flex flex-col items-center justify-center text-center p-6`}>
                        <div className={`text-5xl font-bold ${activeCase.iconColor} mb-2`}>
                          {activeCase.stat.value}
                        </div>
                        <div className="text-sm text-gray-500 font-medium leading-5">
                          {activeCase.stat.label}
                        </div>
                        <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-gray-400">
                          <span>Average result</span>
                        </div>
                      </div>
                      {/* Decorative ring */}
                      <div className={`absolute -inset-3 rounded-[2rem] border border-dashed border-${activeCase.accentColor}/15 pointer-events-none`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimatedSection>

        {/* Mobile/Tablet: Card Grid */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-5">
          {useCases.map((useCase, i) => (
            <AnimatedSection key={useCase.title} direction="up" delay={0.1 + i * 0.08}>
              <div className={`group h-full p-6 rounded-2xl border border-gray-100 bg-gradient-to-br ${useCase.gradient} hover:shadow-xl hover:shadow-${useCase.accentColor}/10 transition-all duration-300 hover:-translate-y-1`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${useCase.iconBg} flex items-center justify-center`}>
                    <useCase.icon className={`w-6 h-6 ${useCase.iconColor}`} />
                  </div>
                  <div className={`px-3 py-1.5 rounded-lg bg-white/80 border border-white`}>
                    <span className={`text-lg font-bold ${useCase.iconColor}`}>{useCase.stat.value}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{useCase.title}</h3>
                <div className={`text-xs font-semibold ${useCase.iconColor} uppercase tracking-wider mb-3`}>
                  {useCase.subtitle}
                </div>
                <p className="text-sm text-gray-600 leading-6 mb-5">{useCase.description}</p>

                {/* Features */}
                <ul className="space-y-2.5">
                  {useCase.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle className={`w-4 h-4 ${useCase.iconColor} flex-shrink-0 mt-0.5`} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection direction="up" delay={0.4}>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-stayguide-blue hover:text-stayguide-blue-dark transition-colors group"
            >
              See how StayGuide fits your property type
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
