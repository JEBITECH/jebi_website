'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Building2, ShieldCheck, Sparkles } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const stats = [
  { value: '6', label: 'Step Onboarding' },
  { value: '24/7', label: 'AI Support Agent' },
  { value: 'Multi', label: 'PMS Per Country' },
  { value: '100%', label: 'Data Ownership' },
]

export default function FMSHero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-stayguide-blue-dark pt-28 pb-20 md:pt-32 md:pb-24">
      {/* Fine grain texture, no gradients */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <filter id="fms-hero-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#fms-hero-noise)" />
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
                <Building2 className="w-3.5 h-3.5 text-stayguide-green" />
                <span className="text-white text-xs font-bold uppercase tracking-wide">StayFranchise</span>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.15}>
              <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold tracking-tight text-white font-heading leading-[1.05] mb-6">
                One Platform. Every Franchise.{' '}
                <span className="text-stayguide-green">Complete Intelligence.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <p className="text-lg md:text-xl leading-8 text-white/75 max-w-2xl mb-10">
                StayFranchise centralizes operations, automates settlements, and delivers
                real-time insights for hospitality and vacation rental franchises. Onboard
                new franchisees in minutes, keep every property on the PMS that fits them,
                and see revenue across your entire network in one dashboard.
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
                  href="#solution"
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

          {/* Right — flat organizational hierarchy visual, no gradients */}
          <div className="lg:col-span-5">
            <AnimatedSection direction="right" delay={0.25}>
              <div className="relative bg-white/[0.05] border border-white/15 rounded-3xl p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <ShieldCheck className="w-4 h-4 text-stayguide-green" />
                  <span className="text-white text-sm font-semibold">Your Franchise Network</span>
                </div>

                {/* Franchisor node */}
                <div className="border border-stayguide-green/40 bg-stayguide-green/10 rounded-2xl px-4 py-3.5 mb-4">
                  <div className="text-[10px] text-stayguide-green uppercase tracking-wider font-bold mb-0.5">Franchisor</div>
                  <div className="text-sm text-white font-semibold">Brand HQ Organization</div>
                </div>

                {/* Connecting lines + franchisee nodes */}
                <div className="relative pl-6 space-y-3">
                  <div className="absolute left-2 top-0 bottom-3 w-px bg-white/15" />
                  {[
                    { name: 'Franchisee — North America', units: '312 units' },
                    { name: 'Franchisee — Europe', units: '184 units' },
                    { name: 'Franchisee — Middle East', units: '96 units' },
                  ].map((f) => (
                    <motion.div
                      key={f.name}
                      className="relative border border-white/15 rounded-xl px-4 py-3"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute -left-6 top-1/2 w-4 h-px bg-white/15" />
                      <div className="text-sm text-white font-medium">{f.name}</div>
                      <div className="text-xs text-white/50 mt-0.5">{f.units}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -top-5 -right-4 bg-white rounded-2xl px-4 py-2.5 shadow-[0_16px_32px_rgba(0,0,0,0.35)]"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-stayguide-blue" />
                    <span className="text-xs font-bold text-gray-900">Live Sync Active</span>
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
