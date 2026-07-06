'use client'

import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import MagneticButton from '@/components/MagneticButton'

export default function GuestyValueCallout() {
  return (
    <div className="bg-white pt-14 sm:pt-16">
      <div className="container-custom px-4 sm:px-6">
        <AnimatedSection direction="scale">
          <div className="relative bg-gradient-to-br from-primary-purple via-primary-purple-dark to-primary-purple-dark rounded-3xl px-6 sm:px-10 py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary-orange/15 rounded-full blur-3xl" />
            <blockquote className="relative border-l-[3px] border-primary-orange pl-5 text-white/90 text-lg sm:text-xl leading-relaxed italic">
              If your team is still using spreadsheets, manually moving data between systems, or
              working around limitations in Guesty — custom development can eliminate those
              inefficiencies by building solutions tailored to your business, not forcing your
              business to fit the software.
            </blockquote>
            <div className="flex justify-center lg:justify-end">
              <MagneticButton
                href="#contact"
                intensity={0.12}
                className="btn-primary text-base px-7 py-4 whitespace-nowrap inline-flex items-center gap-2"
              >
                Let&apos;s solve this <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
