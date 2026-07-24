'use client'

import AnimatedSection from '@/components/AnimatedSection'
import StaggeredList from '@/components/StaggeredList'
import { Layers, CheckCircle2 } from 'lucide-react'

const models = [
  { name: 'Equal Distribution', description: 'Split revenue evenly across all owners in the group.' },
  { name: 'Conditional Distribution', description: 'Apply payout rules based on configurable conditions.' },
  { name: 'Monthly Fixed Amount', description: 'Pay owners a set amount every month, regardless of occupancy.' },
  { name: 'Combination Distribution', description: 'Blend fixed amounts with percentage-based splits.' },
  { name: 'As Per Available Nights', description: 'Distribute based on each owner\u2019s share of available nights.' },
  { name: 'As Per Nights Booked', description: 'Distribute based on actual nights booked per owner.' },
  { name: 'Fixed Per Month', description: 'A predictable, flat monthly payout per unit or owner.' },
  { name: 'Percentage of Net Revenue', description: 'The classic owner/PMC split, fully configurable per formula.' },
]

export default function OwnerHubDistribution() {
  return (
    <section id="distribution" className="py-20 md:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-stayguide-blue border border-stayguide-blue/20 bg-stayguide-blue/5 px-4 py-2 rounded-full mb-5">
              <Layers className="w-3.5 h-3.5" />
              Distribution Models
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 font-heading leading-tight mb-4">
              Every Ownership Deal,{' '}
              <span className="text-stayguide-blue">Already Supported</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-gray-600 text-base sm:text-lg leading-7">
              No two ownership agreements are identical. OwnerHub ships with eight
              distribution strategies so you rarely need a custom one.
            </p>
          </AnimatedSection>
        </div>

        <StaggeredList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {models.map((m) => (
            <div
              key={m.name}
              className="h-full bg-secondary-gray rounded-xl border border-gray-100 p-5"
            >
              <div className="flex items-start gap-2.5 mb-2">
                <CheckCircle2 className="w-4 h-4 text-stayguide-green flex-shrink-0 mt-0.5" />
                <h3 className="text-sm font-semibold text-gray-900 leading-snug">{m.name}</h3>
              </div>
              <p className="text-xs text-gray-600 leading-5 pl-6">{m.description}</p>
            </div>
          ))}
        </StaggeredList>
      </div>
    </section>
  )
}
