'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { ArrowRight, Database, Rocket, Eye } from 'lucide-react'

const pillars = [
  { icon: Database, text: 'PMS-Proof Data Ownership' },
  { icon: Rocket, text: 'Instant Franchise Expansion' },
  { icon: Eye, text: 'Full Transparency Always' },
]

export default function FMSCTA() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6">
        <AnimatedSection direction="up">
          <div className="relative bg-stayguide-blue-dark rounded-3xl p-10 md:p-16 text-center overflow-hidden">
            <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <filter id="fms-cta-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#fms-cta-noise)" />
            </svg>
            <div className="absolute top-8 right-10 w-2 h-2 rounded-full bg-stayguide-green/60" />
            <div className="absolute bottom-10 left-10 w-1.5 h-1.5 rounded-full bg-stayguide-green/40" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading mb-6">
                Ready to Transform Your Franchise?
              </h2>
              <p className="text-lg leading-8 text-white/75 mb-10">
                Experience the power of AI-driven hospitality management, built for
                franchisors who think ahead.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {pillars.map((p) => (
                  <div key={p.text} className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-2">
                    <p.icon className="w-3.5 h-3.5 text-stayguide-green" />
                    <span className="text-sm text-white/85">{p.text}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-stayguide-green text-white px-8 py-4 rounded-xl font-semibold hover:bg-stayguide-green-dark transition-colors duration-200 group"
              >
                Request a Demo Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
