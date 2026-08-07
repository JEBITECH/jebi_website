'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  CheckCircle2,
  BadgeCheck,
  Sparkles,
  Building2,
  Quote,
} from 'lucide-react'

const highlights = [
  { icon: Sparkles, text: 'Live product demos at our booth' },
  { icon: Users, text: 'Meet our founders & engineering team' },
  { icon: CheckCircle2, text: 'Exclusive conference-only pricing' },
  { icon: Building2, text: 'Free trial for all attendees' },
]

const timeline = [
  { icon: Calendar, label: 'When', value: 'Oct 4–6, 2026' },
  { icon: MapPin, label: 'Where', value: 'Nashville, TN' },
  { icon: Building2, label: 'Venue', value: 'Music City Ctr' },
  { icon: BadgeCheck, label: 'Booth', value: '#740' },
]

// 3.png is the permanent "Proud Member" badge — pinned on the right side, not part of the rotation.
const memberBadge = { src: '/assets/vrma/3.png', alt: 'Proud Member of VRMA — Vacation Rental Management Association' }

// Remaining images rotate through the front position, one at a time, each with its own caption tag.
const images = [
  { src: '/assets/vrma/1.png', alt: 'Proud Member of VRMA' },
  { src: '/assets/vrma/4.png', alt: 'VRMA member badge' },
  { src: '/assets/vrma/5.png', alt: 'VRMA member testimonial on industry connections' },
  { src: '/assets/vrma/6.png', alt: 'VRMA — connect with peers on big business decisions' },
  { src: '/assets/vrma/7.png', alt: 'Join the largest global community of vacation rental managers' },
]

const ROTATE_MS = 3800

// Front card scales UP and centers; back cards shrink, fan out, blur slightly, and fade.
const slotStyle = (rel: number) => {
  switch (rel) {
    case 0:
      return { x: 0, y: 0, rotate: -2, scale: 1.24, opacity: 1, zIndex: 50, blur: 0 }
    case 1:
      return { x: 118, y: -34, rotate: 10, scale: 0.8, opacity: 0.8, zIndex: 40, blur: 1 }
    case 2:
      return { x: 182, y: 12, rotate: 17, scale: 0.62, opacity: 0.35, zIndex: 30, blur: 2 }
    case 3:
      return { x: -200, y: 44, rotate: -18, scale: 0.58, opacity: 0, zIndex: 10, blur: 2 }
    default:
      return { x: -150, y: 60, rotate: -13, scale: 0.62, opacity: 0, zIndex: 5, blur: 2 }
  }
}

export default function VRMAEventBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % images.length), ROTATE_MS)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative bg-primary-purple-dark overflow-hidden">
      {/* Fine grain texture for depth — no color gradients */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <filter id="vrma-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#vrma-noise)" />
      </svg>

      {/* Top accent bar */}
      <div className="h-1 w-full bg-primary-orange" />

      {/* Solid decorative dots */}
      <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-primary-orange/60" />
      <div className="absolute bottom-16 left-10 w-1.5 h-1.5 rounded-full bg-primary-orange/40" />

      <div className="container-custom px-4 sm:px-6 relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-center">
          {/* Left — Content (7 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } }}
            className="lg:col-span-7"
          >
            {/* Eyebrow row: badges + forward-looking note */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-primary-orange text-white text-xs font-bold uppercase tracking-wide rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                VRMA Member
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-white/30 text-white text-xs font-bold uppercase tracking-wide rounded-full">
                VRMA 2026 Exhibitor
              </span>
              <span className="inline-flex items-center gap-1.5 text-white/60 text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-primary-orange" />
                See you in Nashville
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
              className="text-3xl sm:text-4xl md:text-[3.25rem] font-bold text-white font-heading leading-[1.05] mb-5 tracking-tight"
            >
              Meet JebiTech at{' '}
              <span className="relative inline-block text-primary-orange">
                VRMA 26 Nashville
                <svg
                  className="absolute -bottom-1.5 left-0 w-full"
                  height="6"
                  viewBox="0 0 200 6"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path d="M1 4.5C40 1.5 160 1.5 199 4.5" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
              className="text-white/85 text-base sm:text-lg leading-7 mb-8 max-w-xl"
            >
              We&apos;re exhibiting at the world&apos;s largest vacation rental conference. Stop by our
              booth for live demos of our technology suite and to see how we&apos;re helping property
              managers modernize their operations.
            </motion.p>

            {/* Event timeline — horizontal connected strip instead of plain boxes */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
              className="relative flex items-stretch mb-9 max-w-2xl"
            >
              {/* Connecting line */}
              <div className="absolute top-[22px] left-[22px] right-[22px] h-px bg-white/15 -z-0" />

              {timeline.map((t) => (
                <div key={t.label} className="relative flex-1 flex flex-col items-start pr-8">
                  <div className="w-11 h-11 rounded-full bg-primary-orange/15 border border-primary-orange/40 flex items-center justify-center mb-3 relative z-10 flex-shrink-0">
                    <t.icon className="w-4.5 h-4.5 text-primary-orange" />
                  </div>
                  <div className="text-[10px] text-white/50 uppercase tracking-wider font-semibold mb-0.5 whitespace-nowrap">{t.label}</div>
                  <div className="text-sm text-white font-bold leading-tight whitespace-nowrap">{t.value}</div>
                </div>
              ))}
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-9"
            >
              {highlights.map((h) => (
                <div key={h.text} className="flex items-center gap-2.5">
                  <h.icon className="w-4 h-4 text-primary-orange flex-shrink-0" />
                  <span className="text-sm text-white/90">{h.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-orange text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-primary-orange-dark transition-colors duration-200 group shadow-[0_8px_24px_rgba(255,107,53,0.35)]"
              >
                Schedule a Meeting
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/vrma26"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 hover:border-white/50 transition-colors duration-200"
              >
                See Live Demo at VRMA
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Pinned member badge + rotating card carousel */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="relative w-full max-w-[480px] h-[480px] sm:h-[540px]">
              {/* Dashed orbit ring behind the stack — gentle breathing scale */}
              <motion.div
                className="absolute left-[58%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] rounded-full border border-dashed border-white/15 pointer-events-none"
                animate={{ rotate: 360, scale: [1, 1.03, 1] }}
                transition={{ rotate: { duration: 40, repeat: Infinity, ease: 'linear' }, scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
              />

              {/* Orbiting glow dot */}
              <motion.div
                className="absolute left-[58%] top-1/2 w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              >
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-orange shadow-[0_0_12px_rgba(255,107,53,0.8)]" />
              </motion.div>

              {/* Permanent "Proud Member" badge — 3.png, fixed, not part of the rotation */}
              <motion.div
                className="absolute left-0 top-2 sm:top-4 z-[55]"
                initial={{ opacity: 0, scale: 0.8, rotate: -8, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -6, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 180, damping: 15 }}
              >
                <motion.div
                  animate={{ rotate: [-6, -3, -6], y: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative bg-white p-1.5 rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.4)] border-2 border-primary-orange/50"
                  style={{ width: 118, height: 118 }}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image src={memberBadge.src} alt={memberBadge.alt} fill sizes="130px" className="object-cover" />
                  </div>
                  <div className="absolute -bottom-2.5 -right-2.5 w-7 h-7 flex items-center justify-center" title="Verified Member">
                    <BadgeCheck className="w-7 h-7 text-[#3B5BDB] fill-[#3B5BDB]" strokeWidth={0} />
                    <svg className="absolute w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                      <path d="m9 12 2 2 4-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating "Booth" stat badge */}
              <motion.div
                className="absolute top-2 sm:top-0 right-0 z-[60]"
                initial={{ opacity: 0, scale: 0.7, y: -12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 16 }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex items-center gap-2.5 bg-white rounded-2xl pl-2.5 pr-4 py-2.5 shadow-[0_16px_32px_rgba(0,0,0,0.35)] whitespace-nowrap"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-orange/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-primary-purple" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[9px] text-gray-400 uppercase tracking-wide font-bold">VRMA</div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-bold text-gray-900">Proud Member</span>
                      <span className="relative w-3.5 h-3.5 flex items-center justify-center flex-shrink-0">
                        <BadgeCheck className="w-3.5 h-3.5 text-[#3B5BDB] fill-[#3B5BDB]" strokeWidth={0} />
                        <svg className="absolute w-[7px] h-[7px]" viewBox="0 0 24 24" fill="none">
                          <path d="m9 12 2 2 4-4" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating quote chip */}
              <motion.div
                className="absolute bottom-4 sm:bottom-8 right-2 sm:right-4 z-[60]"
                initial={{ opacity: 0, scale: 0.7, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: 'spring', stiffness: 200, damping: 16 }}
              >
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex items-center gap-2 bg-primary-orange text-white rounded-full pl-3 pr-4 py-2 shadow-[0_16px_32px_rgba(255,107,53,0.35)] whitespace-nowrap"
                >
                  <Quote className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="text-xs font-semibold">7th year exhibiting</span>
                </motion.div>
              </motion.div>

              {/* Rotating card stack — front card enlarges, sharpens, and gets a caption tag */}
              <div className="absolute left-[58%] top-1/2 -translate-x-1/2 -translate-y-1/2">
                <AnimatePresence initial={false}>
                  {images.map((img, i) => {
                    const rel = (i - current + images.length) % images.length
                    const style = slotStyle(rel)
                    const isFront = rel === 0

                    return (
                      <motion.div
                        key={img.src}
                        className="absolute left-0 top-0"
                        style={{ zIndex: style.zIndex, filter: `blur(${style.blur}px)` }}
                        animate={{
                          x: style.x,
                          y: style.y,
                          rotate: style.rotate,
                          scale: style.scale,
                          opacity: style.opacity,
                        }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <motion.div
                          className={`relative bg-white p-2.5 rounded-[1.6rem] ${isFront ? 'ring-[3px] ring-primary-orange' : ''}`}
                          style={{ width: 224, height: 264, marginLeft: -112, marginTop: -132 }}
                          animate={
                            isFront
                              ? { boxShadow: ['0 24px 54px rgba(0,0,0,0.45)', '0 30px 64px rgba(255,107,53,0.28)', '0 24px 54px rgba(0,0,0,0.45)'] }
                              : { boxShadow: '0 20px 40px rgba(0,0,0,0.35)' }
                          }
                          transition={isFront ? { duration: 2.6, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.4 }}
                        >
                          <div className="relative w-full h-full rounded-[1.1rem] overflow-hidden">
                            <Image src={img.src} alt={img.alt} fill sizes="260px" className="object-cover" />
                          </div>

                          {isFront && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 }}
                              className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-primary-orange border-2 border-primary-purple-dark flex items-center justify-center shadow-lg"
                            >
                              <Sparkles className="w-4 h-4 text-white" />
                            </motion.div>
                          )}
                        </motion.div>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Progress dots for the carousel */}
        <div className="flex justify-center gap-2 mt-8 lg:hidden">
          {images.map((img, i) => (
            <button
              key={img.src}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-6 bg-primary-orange' : 'w-1.5 bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
