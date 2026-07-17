'use client'

import AnimatedSection from '@/components/AnimatedSection'
import { Building2, Home, Building, Users, CheckCircle } from 'lucide-react'

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
    ],
    color: 'border-t-stayguide-blue',
    iconBg: 'bg-stayguide-blue/10',
    iconColor: 'text-stayguide-blue',
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
    ],
    color: 'border-t-stayguide-green',
    iconBg: 'bg-stayguide-green/10',
    iconColor: 'text-stayguide-green',
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
    ],
    color: 'border-t-stayguide-blue',
    iconBg: 'bg-stayguide-blue/10',
    iconColor: 'text-stayguide-blue',
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
    ],
    color: 'border-t-stayguide-green',
    iconBg: 'bg-stayguide-green/10',
    iconColor: 'text-stayguide-green',
  },
]

export default function StayGuideUseCases() {
  return (
    <section id="use-cases" className="py-20 md:py-28 bg-gray-50/50">
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

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, i) => (
            <AnimatedSection key={useCase.title} direction="up" delay={0.1 + i * 0.08}>
              <div className={`h-full p-6 rounded-2xl border border-gray-100 border-t-4 ${useCase.color} bg-white hover:shadow-lg hover:shadow-stayguide-blue/5 transition-all duration-300`}>
                <div className={`w-11 h-11 rounded-xl ${useCase.iconBg} flex items-center justify-center mb-4`}>
                  <useCase.icon className={`w-5 h-5 ${useCase.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{useCase.title}</h3>
                <div className="text-xs font-medium text-stayguide-green mb-3">{useCase.subtitle}</div>
                <p className="text-sm text-gray-600 leading-6 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-stayguide-green flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
