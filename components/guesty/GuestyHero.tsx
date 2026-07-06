'use client'

import { motion } from 'framer-motion'
import { Zap, Link2, Cloud, ArrowRight, Shield, Sparkles } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import MagneticButton from '@/components/MagneticButton'
import GuestyOrbitDiagram from './GuestyOrbitDiagram'

export function GuestyReferralStrip({ leadSource }: { leadSource: string }) {
  return (
    <div className="bg-primary-purple-dark text-white text-xs sm:text-sm text-center py-2.5 px-4 border-b border-white/10">
      You&apos;re viewing Jebitech&apos;s Guesty partner page{' '}
      <span className="inline-flex items-center gap-1.5 bg-primary-orange/15 border border-primary-orange/35 text-orange-200 px-2.5 py-0.5 rounded-full text-[11px] font-mono ml-1">
        <Zap className="w-2.5 h-2.5" /> source: {leadSource}
      </span>{' '}
      <span className="hidden sm:inline">— referrals here are logged for the Jebitech ↔ Guesty CS team.</span>
    </div>
  )
}

export default function GuestyHero() {
  return (
    <div
      id="hero"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#0B1220] via-[#1a0f33] to-[#0B1220] pt-10 pb-12 md:pt-14 md:pb-16 lg:pt-16 lg:pb-20"
    >
      {/* Radial glow top-right */}
      <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(59,30,138,0.4)_0%,transparent_70%)] pointer-events-none" />
      {/* Radial glow bottom-left */}
      <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(247,148,29,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/30 rounded-full"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.2, 0.7, 0.2],
              scale: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3.5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container-custom px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs text-purple-200/90 border border-purple-400/20 bg-white/[0.04] backdrop-blur-sm px-4 py-2 rounded-full mb-7 w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              BUILT FOR GUESTY PROPERTY MANAGERS
            </motion.div>

            <AnimatedSection direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[3.75rem] font-bold tracking-tight text-white font-heading leading-[1.08] mb-7">
                Your Guesty stack,{' '}
                <span className="bg-gradient-to-r from-purple-200 to-purple-300 bg-clip-text text-transparent">
                  fully extended.
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <p className="text-base sm:text-lg leading-7 sm:leading-8 text-white/60 max-w-lg mb-9">
                Guesty runs your reservations. Jebitech builds everything around it — custom
                workflows, owner portals, integrations, and automation — so your team stops
                working around software and starts working the way your business actually
                operates.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 mb-12">
                <MagneticButton
                  href="#contact"
                  intensity={0.1}
                  className="btn-primary text-base px-7 py-4 w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 rounded-xl shadow-lg shadow-primary-orange/20"
                >
                  Book a Free Consultation <ArrowRight className="w-4 h-4" />
                </MagneticButton>
                <MagneticButton
                  href="#contact"
                  intensity={0.1}
                  className="text-base px-7 py-4 w-full sm:w-auto text-center rounded-xl font-medium border border-white/20 text-white hover:bg-white/[0.06] backdrop-blur-sm transition-all duration-300"
                >
                  Talk to an Expert
                </MagneticButton>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-[13px] text-white/45">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center">
                    <Shield className="w-3.5 h-3.5 text-purple-300" />
                  </div>
                  <span>Guesty Marketplace ecosystem</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center">
                    <Link2 className="w-3.5 h-3.5 text-purple-300" />
                  </div>
                  <span>API &amp; integration specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center">
                    <Cloud className="w-3.5 h-3.5 text-purple-300" />
                  </div>
                  <span>Cloud-native engineering</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Orbit Diagram */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <GuestyOrbitDiagram />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
