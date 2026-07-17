'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import Image from 'next/image'

const stats = [
  { value: '5★', label: 'Higher Guest Reviews' },
  { value: '70%', label: 'Fewer Repetitive Questions' },
  { value: '24/7', label: 'AI Guest Support' },
  { value: 'QR', label: 'Instant Access, No App' },
]

export default function StayGuideHero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50/80 via-white to-emerald-50/50 pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-stayguide-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-stayguide-green/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container-custom px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-medium text-stayguide-blue border border-stayguide-blue/20 bg-stayguide-blue/5 px-4 py-2 rounded-full mb-6 w-fit"
            >
              <span className="text-base">🏠</span>
              AI-Powered Guest Handbook
            </motion.div>

            <AnimatedSection direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem] font-bold tracking-tight text-gray-900 font-heading leading-[1.1] mb-4">
                Your Guests Deserve a{' '}
                <span className="text-stayguide-green">Smarter Stay</span>{' '}
                Experience
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-lg mb-8">
                StayGuide is a digital, mobile-first guest assistant that delivers check-in
                instructions, house rules, local tips, and instant AI-powered answers —
                throughout the entire guest journey.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 bg-stayguide-blue text-white px-7 py-3.5 rounded-xl font-medium hover:bg-stayguide-blue-dark transition-all duration-300 shadow-lg shadow-stayguide-blue/20 hover:shadow-xl hover:shadow-stayguide-blue/30 hover:-translate-y-0.5"
                >
                  <Sparkles className="w-4 h-4" />
                  See StayGuide in Action
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 border border-stayguide-green/30 bg-white text-stayguide-green px-7 py-3.5 rounded-xl font-medium hover:border-stayguide-green hover:bg-stayguide-green/5 transition-all duration-300"
                >
                  Explore Features
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <div className={`text-2xl font-bold ${i % 2 === 0 ? 'text-stayguide-blue' : 'text-stayguide-green'}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Logo + Orbit Visual */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                {/* Central area */}
                <div className="relative mx-auto w-72 h-72 sm:w-80 sm:h-80">
                  {/* Orbit rings */}
                  <div className="absolute inset-0 rounded-full border border-stayguide-green/20 animate-[spin_30s_linear_infinite]" />
                  <div className="absolute inset-6 rounded-full border border-stayguide-blue/15 animate-[spin_25s_linear_infinite_reverse]" />
                  
                  {/* Center logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 relative">
                      <Image
                        src="/stayguide-logo.png"
                        alt="StayGuide Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Floating feature icons */}
                  {[
                    { emoji: '📱', top: '2%', left: '48%', delay: 0 },
                    { emoji: '🤖', top: '22%', right: '-2%', delay: 0.5 },
                    { emoji: '💬', bottom: '22%', right: '2%', delay: 1 },
                    { emoji: '🗺️', bottom: '2%', left: '42%', delay: 1.5 },
                    { emoji: '🔑', bottom: '28%', left: '-2%', delay: 2 },
                    { emoji: '⚡', top: '18%', left: '2%', delay: 2.5 },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{ top: item.top, left: item.left, right: (item as any).right, bottom: (item as any).bottom }}
                      animate={{ y: [-4, 4, -4] }}
                      transition={{ duration: 3, repeat: Infinity, delay: item.delay, ease: 'easeInOut' }}
                    >
                      <div className="w-11 h-11 rounded-xl bg-white border border-gray-100 shadow-md flex items-center justify-center text-lg">
                        {item.emoji}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
