'use client'

import AnimatedSection from '@/components/AnimatedSection'
import StaggeredList from '@/components/StaggeredList'
import {
  AlertTriangle,
  Globe2,
  BarChart3,
  FileClock,
  Calculator,
  HelpCircle,
} from 'lucide-react'

const challenges = [
  {
    icon: FileClock,
    title: 'Slow & Complex Onboarding',
    description: 'Manual processes slow down franchise setup and expansion, delaying revenue from day one.',
  },
  {
    icon: Globe2,
    title: 'Different PMS Per Country',
    description: 'No unified system across global locations means fragmented data and duplicated effort.',
  },
  {
    icon: BarChart3,
    title: 'No Real-Time Revenue Data',
    description: 'Delayed insights affect critical decision-making when franchisors need answers fastest.',
  },
  {
    icon: FileClock,
    title: 'Manual Daily Reports',
    description: 'Hours wasted on repetitive report creation every day, across every property and market.',
  },
  {
    icon: Calculator,
    title: 'Complex Settlements',
    description: 'Error-prone manual settlement calculations across franchisors, franchisees, and owners.',
  },
  {
    icon: HelpCircle,
    title: 'Unresolved Franchisee Queries',
    description: 'Support backlogs frustrate franchisees and operators waiting on answers from HQ.',
  },
]

export default function FMSChallenges() {
  return (
    <section id="challenges" className="py-20 md:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-stayguide-blue border border-stayguide-blue/20 bg-stayguide-blue/5 px-4 py-2 rounded-full mb-5">
              <AlertTriangle className="w-3.5 h-3.5" />
              The Challenges
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 font-heading leading-tight mb-4">
              Sound Familiar?
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-gray-600 text-base sm:text-lg leading-7">
              These challenges cost franchises thousands of hours and dollars every year.
              StayFranchise is built to solve all of them.
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
