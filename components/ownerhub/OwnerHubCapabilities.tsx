'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import {
  Sparkles,
  Calculator,
  Users,
  ClipboardList,
  Receipt,
  BookOpen,
  FileText,
} from 'lucide-react'

const capabilities = [
  {
    icon: Calculator,
    title: 'Settlement Formulas',
    description: 'Define reusable owner/PMC revenue-split rules once, then apply them across any unit or owner.',
  },
  {
    icon: Users,
    title: 'Owner Group Settlements',
    description: 'Group owners who share a payout model under one distribution rule instead of configuring each individually.',
  },
  {
    icon: ClipboardList,
    title: 'Settlement Overview',
    description: 'Every generated settlement in one place, with owner amount, PMC amount, and status at a glance.',
  },
  {
    icon: Receipt,
    title: 'Charges & Fees',
    description: 'Track periodic management fees and utility charges per unit, applied automatically at settlement time.',
  },
  {
    icon: BookOpen,
    title: 'Owner Ledger',
    description: 'A running transaction ledger per owner or unit, opening balance, credits, debits, and closing balance.',
  },
  {
    icon: FileText,
    title: 'Owner Statements',
    description: 'Generate and deliver monthly statement documents per owner, with a clear Generated to Uploaded workflow.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function OwnerHubCapabilities() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-secondary-gray">
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-stayguide-blue border border-stayguide-blue/20 bg-white px-4 py-2 rounded-full mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              How It Works
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 font-heading leading-tight mb-4">
              Six Capabilities,{' '}
              <span className="text-stayguide-blue">One Settlement Engine</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-gray-600 text-base sm:text-lg leading-7">
              From defining the formula to delivering the statement, OwnerHub covers every
              step of the owner payout lifecycle.
            </p>
          </AnimatedSection>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              variants={item}
              className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-stayguide-blue/10 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-stayguide-blue" />
                </div>
                <span className="text-xs font-bold text-gray-300">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">{c.title}</h3>
              <p className="text-sm text-gray-600 leading-6">{c.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
