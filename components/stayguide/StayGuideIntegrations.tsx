'use client'

import AnimatedSection from '@/components/AnimatedSection'
import { Link2 } from 'lucide-react'

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

export default function StayGuideIntegrations() {
  return (
    <section id="integrations" className="py-20 md:py-28 bg-gray-50/50">
      <div className="container-custom px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            <p className="text-gray-600 text-base sm:text-lg leading-7">
              StayGuide integrates with the tools you already rely on — PMS platforms,
              booking engines, and check-in systems.
            </p>
          </AnimatedSection>
        </div>

        {/* Integrations Grid */}
        <AnimatedSection direction="up" delay={0.25}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="flex flex-col items-center gap-2 p-5 rounded-2xl border border-gray-100 bg-white hover:border-stayguide-green/30 hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {integration.emoji}
                </span>
                <span className="text-xs font-medium text-gray-700 text-center">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
