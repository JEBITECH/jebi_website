'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Zap,
  Link2,
  ClipboardList,
  Users2,
  Star,
  Globe2,
  Boxes,
  CheckCircle2,
  ArrowRight,
  Target,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import StaggeredList from '@/components/StaggeredList'

const painAreas = [
  { icon: Code2, label: 'Custom workflows & approvals', color: 'from-purple-500 to-purple-600' },
  { icon: Zap, label: 'Automation of repetitive tasks', color: 'from-orange-500 to-orange-600' },
  { icon: Link2, label: 'Third-party & internal integrations', color: 'from-blue-500 to-blue-600' },
  { icon: ClipboardList, label: 'Department dashboards & reporting', color: 'from-purple-500 to-purple-600' },
  { icon: Users2, label: 'Staff productivity tools', color: 'from-orange-500 to-orange-600' },
  { icon: Star, label: 'Owner & guest experiences', color: 'from-pink-500 to-pink-600' },
  { icon: Globe2, label: 'Data sync across platforms', color: 'from-blue-500 to-blue-600' },
  { icon: Boxes, label: 'Portfolio scalability', color: 'from-purple-500 to-purple-600' },
  { icon: CheckCircle2, label: 'Eliminate spreadsheets & manual work', color: 'from-green-500 to-green-600' },
  { icon: ArrowRight, label: 'Unique business requirements', color: 'from-orange-500 to-orange-600' },
]

export default function GuestyPainAreas() {
  return (
    <div
      id="pain-areas"
      className="relative bg-gradient-to-b from-white via-gray-50/80 to-white section-padding overflow-hidden"
    >
      {/* Decorative bg elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(74,26,92,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-custom px-4 sm:px-6 relative z-10">
        <AnimatedSection direction="up">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-purple/5 border border-primary-purple/15 rounded-full mb-5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <Target className="w-4 h-4 text-primary-purple" />
              <span className="text-primary-purple text-xs font-semibold uppercase tracking-wider">
                Pain areas we address
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading mb-5 leading-tight">
              Custom workflows built around{' '}
              <span className="text-primary-orange">your business</span> — not the other way around.
            </h2>
            <p className="text-base sm:text-lg leading-7 text-gray-500 max-w-2xl mx-auto">
              Most companies don&apos;t need a new PMS — they need their existing PMS to work the
              way their business operates. Here are the gaps we close.
            </p>
          </div>
        </AnimatedSection>

        <StaggeredList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {painAreas.map((p) => (
            <motion.div
              key={p.label}
              whileHover={{ y: -5, scale: 1.02, boxShadow: '0 16px 40px -12px rgba(74,26,92,0.15)' }}
              transition={{ duration: 0.3 }}
              className="relative bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center gap-3.5 group cursor-default overflow-hidden h-[160px] sm:h-[170px] justify-center"
            >
              {/* Subtle hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/[0.02] to-primary-orange/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              {/* Icon */}
              <div className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <p.icon className="w-5 h-5 text-white" />
              </div>

              {/* Label */}
              <h4 className="relative z-10 text-[13px] sm:text-[14px] font-semibold text-gray-800 leading-snug">
                {p.label}
              </h4>
            </motion.div>
          ))}
        </StaggeredList>
      </div>
    </div>
  )
}
