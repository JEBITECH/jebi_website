'use client'

import AnimatedSection from '@/components/AnimatedSection'
import { Link2, ArrowRight } from 'lucide-react'

const integrations = [
  { name: 'Airbnb', emoji: '🏠' },
  { name: 'VRBO', emoji: '🏡' },
  { name: 'Booking.com', emoji: '🌐' },
  { name: 'Guesty', emoji: '🔧' },
  { name: 'Hostaway', emoji: '⚙️' },
  { name: 'Lodgify', emoji: '📋' },
  { name: 'Schlage', emoji: '🔑' },
  { name: 'RemoteLock', emoji: '🚪' },
  { name: 'Twilio SMS', emoji: '💬' },
  { name: 'Mailchimp', emoji: '📧' },
  { name: 'Stripe', emoji: '💳' },
  { name: 'Zapier', emoji: '🔌' },
]

const duplicated = [...integrations, ...integrations]

export default function StayGuideIntegrations() {
  return (
    <section id="integrations" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container-custom px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-stayguide-green border border-stayguide-green/20 bg-stayguide-green/5 px-4 py-2 rounded-full mb-5">
              <Link2 className="w-3.5 h-3.5" />
              Integrations
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 font-heading leading-tight mb-4">
              Works With Your{' '}
              <span className="text-stayguide-blue">Existing Stack</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-gray-600 text-base sm:text-lg leading-7 max-w-2xl mx-auto">
              StayGuide integrates with the tools you already rely on — PMS platforms,
              booking engines, smart locks, and communication systems.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Single-line scrolling ticker */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex items-center gap-0 w-max animate-marquee-left"
          style={{ animationDuration: '50s' }}
        >
          {duplicated.map((integration, i) => (
            <div
              key={`${integration.name}-${i}`}
              className="flex items-center gap-2.5 px-6 py-4 flex-shrink-0 group cursor-default"
            >
              <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                {integration.emoji}
              </span>
              <span className="text-base font-semibold text-gray-800 group-hover:text-stayguide-blue transition-colors whitespace-nowrap">
                {integration.name}
              </span>
              {/* Separator dot */}
              <span className="ml-4 w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom content */}
      <div className="container-custom px-4 sm:px-6 relative z-10">
        <AnimatedSection direction="up" delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-sm text-gray-400 font-medium">
              + custom integrations via API & webhooks
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-stayguide-blue hover:text-stayguide-blue-dark transition-colors group"
            >
              Need a custom integration? Let&apos;s talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
