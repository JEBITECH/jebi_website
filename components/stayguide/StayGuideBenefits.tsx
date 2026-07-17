'use client'

import AnimatedSection from '@/components/AnimatedSection'
import { 
  PhoneOff, 
  Star, 
  Clock, 
  TrendingUp, 
  Palette, 
  Brain 
} from 'lucide-react'

const benefits = [
  {
    icon: PhoneOff,
    value: '70%',
    label: 'Fewer Repetitive Calls',
    description: 'Guests find answers instantly — Wi-Fi, check-in, house rules — without messaging the host.',
    color: 'text-stayguide-blue',
    bg: 'bg-stayguide-blue/10',
  },
  {
    icon: Star,
    value: '5★',
    label: 'Improved Guest Reviews',
    description: 'Instant intelligent support means guests feel taken care of from arrival to departure.',
    color: 'text-stayguide-green',
    bg: 'bg-stayguide-green/10',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Always-On Support',
    description: 'The AI assistant never sleeps. Guests get answers at 2am the same as at 2pm.',
    color: 'text-stayguide-blue',
    bg: 'bg-stayguide-blue/10',
  },
  {
    icon: TrendingUp,
    value: '3x',
    label: 'More Revenue Opportunities',
    description: 'Promote upsells, local partners, and services throughout the guest journey seamlessly.',
    color: 'text-stayguide-green',
    bg: 'bg-stayguide-green/10',
  },
  {
    icon: Palette,
    value: '100%',
    label: 'On-Brand Experience',
    description: 'Every interaction reflects your property\'s identity — not a generic white-label product.',
    color: 'text-stayguide-blue',
    bg: 'bg-stayguide-blue/10',
  },
  {
    icon: Brain,
    value: 'AI',
    label: 'Intelligent Insights',
    description: 'Understand what guests ask most, where friction occurs, and how to fix it proactively.',
    color: 'text-stayguide-green',
    bg: 'bg-stayguide-green/10',
  },
]

export default function StayGuideBenefits() {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-stayguide-green border border-stayguide-green/20 bg-stayguide-green/5 px-4 py-2 rounded-full mb-5">
              <TrendingUp className="w-3.5 h-3.5" />
              Measurable Impact
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 font-heading leading-tight mb-4">
              Real Results That{' '}
              <span className="text-stayguide-blue">Transform Operations</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-gray-600 text-base sm:text-lg leading-7">
              StayGuide delivers outcomes hosts and property managers care about — better
              reviews, less admin work, and more revenue.
            </p>
          </AnimatedSection>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <AnimatedSection key={benefit.label} direction="up" delay={0.1 + i * 0.05}>
              <div className="relative p-6 rounded-2xl border border-gray-100 bg-white hover:border-stayguide-blue/20 hover:shadow-lg hover:shadow-stayguide-blue/5 transition-all duration-300 text-center">
                <div className={`w-12 h-12 rounded-xl ${benefit.bg} flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{benefit.value}</div>
                <div className="text-sm font-semibold text-stayguide-green mb-2">{benefit.label}</div>
                <p className="text-sm text-gray-600 leading-6">{benefit.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
