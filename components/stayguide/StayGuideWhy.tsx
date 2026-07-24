'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import { Bot, Zap, Target, DollarSign, ArrowUpRight } from 'lucide-react'

const reasons = [
  {
    icon: Bot,
    title: 'Live AI Guest Portal',
    description: 'A fully live, AI-powered guest portal that answers questions, sends updates, and learns from every interaction — replacing static PDFs and printed manuals forever.',
    highlight: 'Always up-to-date',
    color: 'text-stayguide-blue',
    bg: 'bg-stayguide-blue',
    bgLight: 'bg-stayguide-blue/5',
    borderHover: 'hover:border-stayguide-blue/30',
    glowColor: 'group-hover:shadow-stayguide-blue/10',
  },
  {
    icon: Zap,
    title: 'Instant AI Bot Support',
    description: 'The built-in AI bot answers guest questions instantly and accurately, reducing support load by up to 70% and improving response times from hours to seconds.',
    highlight: '70% fewer queries',
    color: 'text-stayguide-green',
    bg: 'bg-stayguide-green',
    bgLight: 'bg-stayguide-green/5',
    borderHover: 'hover:border-stayguide-green/30',
    glowColor: 'group-hover:shadow-stayguide-green/10',
  },
  {
    icon: Target,
    title: 'Centralized Guest Hub',
    description: 'One platform for guest communication, automated messaging, in-stay promotions, upsells, and local recommendations — all in one beautifully branded experience.',
    highlight: 'Single platform',
    color: 'text-stayguide-blue',
    bg: 'bg-stayguide-blue',
    bgLight: 'bg-stayguide-blue/5',
    borderHover: 'hover:border-stayguide-blue/30',
    glowColor: 'group-hover:shadow-stayguide-blue/10',
  },
  {
    icon: DollarSign,
    title: 'Revenue Through the Stay',
    description: 'Promote property services, local business partnerships, and special offers throughout the guest journey — turning the handbook into a revenue-generating channel.',
    highlight: 'New revenue stream',
    color: 'text-stayguide-green',
    bg: 'bg-stayguide-green',
    bgLight: 'bg-stayguide-green/5',
    borderHover: 'hover:border-stayguide-green/30',
    glowColor: 'group-hover:shadow-stayguide-green/10',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function StayGuideWhy() {
  return (
    <section className="py-20 md:py-28 bg-[#F4F4FB] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #3939B7 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container-custom px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-stayguide-blue border border-stayguide-blue/20 bg-stayguide-blue/5 px-4 py-2 rounded-full mb-5">
              <Target className="w-3.5 h-3.5" />
              Why StayGuide
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 font-heading leading-tight mb-4">
              Not Another PDF.{' '}
              <span className="text-stayguide-green">A Living Guest Portal.</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-gray-600 text-base sm:text-lg leading-7 max-w-2xl mx-auto">
              StayGuide replaces static welcome books and outdated PDFs with a dynamic,
              AI-powered experience that works around the clock.
            </p>
          </AnimatedSection>
        </div>

        {/* Why Grid — Bento-inspired layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              variants={cardVariants}
              className={`group relative h-full p-8 rounded-3xl border border-gray-100 ${reason.borderHover} bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${reason.glowColor}`}
            >
              {/* Top row: icon + highlight badge */}
              <div className="flex items-start justify-between mb-5">
                <div className={`w-13 h-13 rounded-2xl ${reason.bgLight} flex items-center justify-center p-3`}>
                  <reason.icon className={`w-6 h-6 ${reason.color}`} />
                </div>
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide ${reason.bgLight} ${reason.color}`}>
                  {reason.highlight}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-7">
                {reason.description}
              </p>

              {/* Hover arrow indicator */}
              <div className={`absolute bottom-6 right-6 w-8 h-8 rounded-full ${reason.bgLight} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <ArrowUpRight className={`w-4 h-4 ${reason.color}`} />
              </div>

              {/* Decorative gradient on hover */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${reason.bgLight} rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none -translate-y-1/2 translate-x-1/4`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent line */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-[2px] bg-stayguide-blue/20 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-stayguide-green/40" />
            <div className="w-12 h-[2px] bg-stayguide-green/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
