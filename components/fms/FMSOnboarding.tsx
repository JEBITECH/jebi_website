'use client'

import AnimatedSection from '@/components/AnimatedSection'
import {
  ClipboardList,
  Building2,
  UserCog,
  Plug,
  LayoutGrid,
  CreditCard,
  Palette,
  Zap,
  ShieldCheck,
  Globe2,
  Paintbrush,
} from 'lucide-react'

const steps = [
  { icon: Building2, title: 'Organization Details' },
  { icon: UserCog, title: 'Super Admin Setup' },
  { icon: Plug, title: 'PMS Integration' },
  { icon: LayoutGrid, title: 'Modules Selection' },
  { icon: CreditCard, title: 'Subscription Plan' },
  { icon: Palette, title: 'Theme Configuration' },
]

const outcomes = [
  { icon: Zap, text: 'Go live in days, not months' },
  { icon: ShieldCheck, text: 'Zero downtime migration' },
  { icon: Globe2, text: 'Multi-country ready, Day 1' },
  { icon: Paintbrush, text: 'White-label theme support' },
]

export default function FMSOnboarding() {
  return (
    <section id="onboarding" className="py-20 md:py-28 bg-secondary-gray">
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-stayguide-blue border border-stayguide-blue/20 bg-white px-4 py-2 rounded-full mb-5 shadow-sm">
              <ClipboardList className="w-3.5 h-3.5" />
              Onboarding
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 font-heading leading-tight mb-4">
              Simple 6-Step Franchise Setup
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-gray-600 text-base sm:text-lg leading-7">
              Go live in days, not months. Every new franchisee follows the same guided
              flow, from organization details to a fully themed, PMS-connected property.
            </p>
          </AnimatedSection>
        </div>

        {/* Step strip */}
        <AnimatedSection direction="up" delay={0.25}>
          <div className="relative max-w-4xl mx-auto mb-14">
            <div className="hidden sm:block absolute top-6 left-[8%] right-[8%] h-px bg-gray-200" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {steps.map((step, i) => (
                <div key={step.title} className="relative flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-3 relative z-10">
                    <step.icon className="w-5 h-5 text-stayguide-blue" />
                  </div>
                  <span className="text-[10px] font-bold text-stayguide-green mb-1">STEP {i + 1}</span>
                  <span className="text-sm font-semibold text-gray-900 leading-tight">{step.title}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Outcomes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {outcomes.map((o, i) => (
            <AnimatedSection key={o.text} direction="up" delay={0.1 + i * 0.06}>
              <div className="h-full bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-stayguide-blue/10 flex items-center justify-center flex-shrink-0">
                  <o.icon className="w-4 h-4 text-stayguide-blue" />
                </div>
                <span className="text-sm font-medium text-gray-800">{o.text}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
