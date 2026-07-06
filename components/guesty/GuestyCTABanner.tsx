'use client'

import { ArrowRight, Check } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import MagneticButton from '@/components/MagneticButton'

export default function GuestyCTABanner() {
  return (
    <div className="bg-white section-padding">
      <div className="container-custom px-4 sm:px-6">
        <AnimatedSection direction="scale">
          <div className="relative bg-gradient-to-br from-primary-purple via-primary-purple-dark to-primary-purple-dark rounded-3xl px-6 sm:px-12 py-14 sm:py-16 text-center overflow-hidden">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary-orange/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-400/15 rounded-full blur-3xl" />

            <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-white font-heading mb-4">
              Let&apos;s build your hospitality technology together.
            </h2>
            <p className="relative z-10 text-white/70 max-w-xl mx-auto mb-8 text-[15px] sm:text-base">
              One free consultation. No pressure, no obligation — just a clear path for your
              Guesty ecosystem.
            </p>
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-5 sm:gap-8 mb-9 text-[13px] sm:text-sm text-white/80">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-primary-orange" /> 30-minute discovery call
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-primary-orange" /> Scoped recommendation
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-primary-orange" /> No-obligation estimate
              </span>
            </div>
            <MagneticButton
              href="#contact"
              intensity={0.1}
              className="btn-primary relative z-10 text-base px-8 py-4 inline-flex items-center gap-2"
            >
              Schedule a Free Consultation <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
