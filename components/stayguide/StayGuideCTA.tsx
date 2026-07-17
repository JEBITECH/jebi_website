'use client'

import AnimatedSection from '@/components/AnimatedSection'
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function StayGuideCTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-stayguide-blue via-stayguide-blue-dark to-[#252580] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-stayguide-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="container-custom px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-200 border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Ready to get started?
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 relative bg-white/10 backdrop-blur-sm rounded-2xl p-2">
                <Image
                  src="/stayguide-logo.png"
                  alt="StayGuide"
                  fill
                  className="object-contain p-1"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white font-heading leading-tight mb-4">
              Ready to Transform Your{' '}
              <span className="text-stayguide-green-light">Guest Experience?</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.25}>
            <p className="text-blue-100/80 text-base sm:text-lg leading-7 mb-8">
              Join leading hospitality teams already using StayGuide to delight guests,
              reduce admin, and drive more revenue.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-stayguide-green text-white px-7 py-3.5 rounded-xl font-medium hover:bg-stayguide-green-dark transition-all duration-300 shadow-lg"
              >
                See StayGuide Live <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-xl font-medium hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Request a Demo
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.35}>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-blue-200">
              {[
                'No credit card required',
                'Setup in under 30 minutes',
                'Free 14-day trial',
                'Full onboarding support',
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-stayguide-green" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
