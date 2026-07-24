'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import {
  Sparkles,
  Building2,
  GitBranch,
  LayoutGrid,
  RefreshCw,
  BarChart3,
  Wallet,
  Bot,
  FileText,
  Globe2,
} from 'lucide-react'

const steps = [
  { icon: Building2, title: 'Franchisor Onboarding', description: 'Brand org setup in minutes' },
  { icon: GitBranch, title: 'Franchisee Onboarding', description: 'PMC & property mgmt org' },
  { icon: LayoutGrid, title: 'Property & Unit Mgmt', description: 'Units, types & area config' },
  { icon: RefreshCw, title: 'Reservation Sync', description: 'Cron, webhook & manual sync' },
  { icon: BarChart3, title: 'Dashboard & Analytics', description: 'Real-time live reports' },
  { icon: Wallet, title: 'Revenue Settlement', description: 'Franchisor & franchisee split' },
  { icon: Bot, title: 'AI Support Agent 24/7', description: 'Instant query resolution' },
  { icon: FileText, title: 'Smart Auto Reports', description: 'Daily, weekly, monthly' },
  { icon: Globe2, title: 'Global Expansion', description: 'Multi-country, multi-PMS' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function FMSSolution() {
  return (
    <section id="solution" className="py-20 md:py-28 bg-secondary-gray">
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-stayguide-blue border border-stayguide-blue/20 bg-white px-4 py-2 rounded-full mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Our Solution
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 font-heading leading-tight mb-4">
              AI-Powered Franchise Management,{' '}
              <span className="text-stayguide-blue">End to End</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-gray-600 text-base sm:text-lg leading-7">
              Nine connected capabilities that take a franchise network from onboarding to
              global scale, all inside one platform.
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
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={item}
              className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-stayguide-blue/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-stayguide-blue" />
                </div>
                <span className="text-xs font-bold text-gray-300">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
