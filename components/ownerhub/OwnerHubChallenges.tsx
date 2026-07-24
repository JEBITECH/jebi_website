'use client'

import AnimatedSection from '@/components/AnimatedSection'
import StaggeredList from '@/components/StaggeredList'
import {
  AlertTriangle,
  FileSpreadsheet,
  Calculator,
  MessageCircleQuestion,
  Receipt,
  FileClock,
  Users,
} from 'lucide-react'

const challenges = [
  {
    icon: FileSpreadsheet,
    title: 'Spreadsheet-Driven Settlements',
    description: 'Manual calculations across dozens of owners and units invite errors and eat hours every month.',
  },
  {
    icon: Calculator,
    title: 'Inconsistent Revenue Splits',
    description: 'Different owners, different deals, no single source of truth for how each payout was calculated.',
  },
  {
    icon: Users,
    title: 'Hard to Manage Owner Groups',
    description: 'Owners who share a distribution model still get configured one by one, over and over.',
  },
  {
    icon: Receipt,
    title: 'Untracked Charges & Fees',
    description: 'Utility bills and periodic fees get missed or applied inconsistently across the portfolio.',
  },
  {
    icon: MessageCircleQuestion,
    title: 'Owner Trust Erosion',
    description: 'Without a clear breakdown, owners question every payout, and support has no quick answer.',
  },
  {
    icon: FileClock,
    title: 'Slow Statement Delivery',
    description: 'Generating and distributing monthly statements is a manual, error-prone, end-of-month scramble.',
  },
]

export default function OwnerHubChallenges() {
  return (
    <section id="challenges" className="py-20 md:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-stayguide-blue border border-stayguide-blue/20 bg-stayguide-blue/5 px-4 py-2 rounded-full mb-5">
              <AlertTriangle className="w-3.5 h-3.5" />
              The Problem
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 font-heading leading-tight mb-4">
              Owner Payouts Shouldn&apos;t Be a Guessing Game
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-gray-600 text-base sm:text-lg leading-7">
              Every property manager hits the same wall as their owner portfolio grows.
              OwnerHub is built to remove it entirely.
            </p>
          </AnimatedSection>
        </div>

        <StaggeredList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((c) => (
            <div
              key={c.title}
              className="h-full p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg hover:border-stayguide-blue/20 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-stayguide-blue/10 flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-stayguide-blue" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{c.title}</h3>
              <p className="text-sm text-gray-600 leading-6">{c.description}</p>
            </div>
          ))}
        </StaggeredList>
      </div>
    </section>
  )
}
