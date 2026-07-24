'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Home, ShieldCheck, TrendingUp } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const stats = [
  { value: '8', label: 'Distribution Models' },
  { value: '100%', label: 'Auditable Settlements' },
  { value: 'Self', label: 'Service Owner Portal' },
  { value: 'Zero', label: 'Spreadsheet Dependency' },
]

export default function OwnerHubHero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-stayguide-blue-dark pt-28 pb-20 md:pt-32 md:pb-24">
      {/* Fine grain texture, no gradients */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <filter id="ownerhub-hero-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#ownerhub-hero-noise)" />
      </svg>
      <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-stayguide-green/60" />
      <div className="absolute top-16 right-20 w-1 h-1 rounded-full bg-white/40" />
      <div className="absolute bottom-16 left-10 w-1.5 h-1.5 rounded-full bg-stayguide-green/40" />

      <div className="container-custom px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
                <Home className="w-3.5 h-3.5 text-stayguide-green" />
                <span className="text-white text-xs font-bold uppercase tracking-wide">Owner Settlement Platform</span>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.15}>
              <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold tracking-tight text-white font-heading leading-[1.05] mb-6">
                Transparent Payouts.{' '}
                <span className="text-stayguide-green">Zero Disputes.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <p className="text-lg md:text-xl leading-8 text-white/75 max-w-2xl mb-10">
                OwnerHub automates property owner settlements, from formula-based revenue
                splits to auditable statements, so property managers stop reconciling
                spreadsheets and owners stop chasing answers.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.25}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-stayguide-green text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-stayguide-green-dark transition-colors duration-200 group"
                >
                  Request a Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-colors duration-200"
                >
                  See How It Works
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <div key={stat.label}>
                    <div className={`text-2xl font-bold ${i % 2 === 0 ? 'text-stayguide-green' : 'text-white'}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/50 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right — flat settlement statement preview, no gradients */}
          <div className="lg:col-span-5">
            <AnimatedSection direction="right" delay={0.25}>
              <div className="relative bg-white/[0.05] border border-white/15 rounded-3xl p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <ShieldCheck className="w-4 h-4 text-stayguide-green" />
                  <span className="text-white text-sm font-semibold">Owner Statement Preview</span>
                </div>

                {/* Statement header */}
                <div className="border border-white/15 rounded-2xl px-4 py-3.5 mb-4">
                  <div className="text-[10px] text-white/50 uppercase tracking-wider font-bold mb-0.5">Owner</div>
                  <div className="text-sm text-white font-semibold">Sarah Mitchell — Unit 204</div>
                </div>

                {/* Line items */}
                <div className="space-y-2.5 mb-4">
                  {[
                    { label: 'Gross Reservation Revenue', value: '$4,820' },
                    { label: 'OTA Commission (15%)', value: '-$723' },
                    { label: 'PMC Management Fee (20%)', value: '-$964' },
                    { label: 'Utility & Periodic Charges', value: '-$110' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between text-sm">
                      <span className="text-white/60">{row.label}</span>
                      <span className="text-white/90 font-medium">{row.value}</span>
                    </div>
                  ))}
                </div>

                {/* Net payout */}
                <div className="border-t border-white/15 pt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">Net Owner Payout</span>
                  <span className="text-xl font-bold text-stayguide-green">$3,023</span>
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -top-5 -right-4 bg-white rounded-2xl px-4 py-2.5 shadow-[0_16px_32px_rgba(0,0,0,0.35)]"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-stayguide-blue" />
                    <span className="text-xs font-bold text-gray-900">Auto-Calculated</span>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
