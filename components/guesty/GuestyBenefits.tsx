'use client'

import { motion } from 'framer-motion'
import { Rocket, Users2, ShieldCheck, Plug, LifeBuoy, Handshake, ArrowRight, Sparkles } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import StaggeredList from '@/components/StaggeredList'
import MagneticButton from '@/components/MagneticButton'

const benefits = [
  {
    icon: Rocket,
    title: 'Build faster',
    desc: 'Reusable hospitality components mean projects start ahead of zero.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Users2,
    title: 'Scale engineering on demand',
    desc: 'Add senior developers in days, not months of recruiting.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: ShieldCheck,
    title: 'Reduce delivery risk',
    desc: 'Solution architects scope projects before a line of code is written.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Plug,
    title: 'Custom integrations',
    desc: 'We connect Guesty to the systems you already depend on.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: LifeBuoy,
    title: 'Reliable, ongoing support',
    desc: 'Engineers who know your codebase stay on after launch.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Handshake,
    title: 'A long-term technology partner',
    desc: 'One team across every future build, not a one-off vendor.',
    color: 'from-purple-500 to-purple-600',
  },
]

export default function GuestyBenefits() {
  return (
    <div className="relative bg-gradient-to-b from-gray-50/80 via-white to-white section-padding overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(74,26,92,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-custom px-4 sm:px-6 relative z-10">
        <AnimatedSection direction="up">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-orange/5 border border-primary-orange/15 rounded-full mb-5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <Sparkles className="w-4 h-4 text-primary-orange" />
              <span className="text-primary-orange text-xs font-semibold uppercase tracking-wider">
                Why Guesty customers work with us
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading mb-4">
              Already on Guesty? Here&apos;s what changes.
            </h2>
            <p className="text-base sm:text-lg leading-7 text-gray-500">
              You don&apos;t need a new platform. You need the missing layer that connects it to
              everything else you run.
            </p>
          </div>
        </AnimatedSection>

        <StaggeredList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              whileHover={{ y: -5, boxShadow: '0 20px 40px -16px rgba(74,26,92,0.12)' }}
              transition={{ duration: 0.3 }}
              className="relative bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 flex flex-col gap-4 group overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl bg-gradient-to-br from-primary-purple to-primary-orange" />

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${b.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <b.icon className="w-5 h-5 text-white" />
              </div>

              {/* Content */}
              <div>
                <h4 className="text-[16px] font-bold text-gray-900 mb-1.5">{b.title}</h4>
                <p className="text-[13.5px] text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </StaggeredList>

      </div>
    </div>
  )
}
