'use client'

import AnimatedSection from '@/components/AnimatedSection'
import { Bot, Zap, Target, DollarSign } from 'lucide-react'

const reasons = [
  {
    icon: Bot,
    title: 'Live AI Guest Portal',
    description: 'A fully live, AI-powered guest portal that answers questions, sends updates, and learns from every interaction — replacing static PDFs and printed manuals forever.',
    color: 'text-stayguide-blue',
    bg: 'bg-stayguide-blue/10',
    borderColor: 'border-stayguide-blue/20',
  },
  {
    icon: Zap,
    title: 'Instant AI Bot Support',
    description: 'The built-in AI bot answers guest questions instantly and accurately, reducing support load by up to 70% and improving response times from hours to seconds.',
    color: 'text-stayguide-green',
    bg: 'bg-stayguide-green/10',
    borderColor: 'border-stayguide-green/20',
  },
  {
    icon: Target,
    title: 'Centralized Guest Hub',
    description: 'One platform for guest communication, automated messaging, in-stay promotions, upsells, and local recommendations — all in one beautifully branded experience.',
    color: 'text-stayguide-blue',
    bg: 'bg-stayguide-blue/10',
    borderColor: 'border-stayguide-blue/20',
  },
  {
    icon: DollarSign,
    title: 'Revenue Through the Stay',
    description: 'Promote property services, local business partnerships, and special offers throughout the guest journey — turning the handbook into a revenue-generating channel.',
    color: 'text-stayguide-green',
    bg: 'bg-stayguide-green/10',
    borderColor: 'border-stayguide-green/20',
  },
]

export default function StayGuideWhy() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-stayguide-blue border border-stayguide-blue/20 bg-stayguide-blue/5 px-4 py-2 rounded-full mb-5">
              <Target className="w-3.5 h-3.5" />
              Why StayGuide
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 font-heading leading-tight mb-4">
              Not Another PDF.{' '}
              <span className="text-stayguide-green">A Living Guest Portal.</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-gray-600 text-base sm:text-lg leading-7">
              StayGuide replaces static welcome books and outdated PDFs with a dynamic,
              AI-powered experience that works around the clock.
            </p>
          </AnimatedSection>
        </div>

        {/* Why Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} direction="up" delay={0.1 + i * 0.08}>
              <div className={`h-full p-7 rounded-2xl border ${reason.borderColor} bg-white hover:shadow-lg hover:shadow-stayguide-blue/5 transition-all duration-300`}>
                <div className={`w-12 h-12 rounded-xl ${reason.bg} flex items-center justify-center mb-5`}>
                  <reason.icon className={`w-6 h-6 ${reason.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-sm text-gray-600 leading-7">{reason.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
