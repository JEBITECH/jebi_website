'use client'

import AnimatedSection from '@/components/AnimatedSection'
import StaggeredList from '@/components/StaggeredList'
import { Globe2, Plug, Database, ShieldCheck, Coins, RefreshCw, Clock } from 'lucide-react'

const regions = [
  { name: 'USA', description: 'North America hub' },
  { name: 'UK', description: 'Europe gateway' },
  { name: 'UAE', description: 'Middle East base' },
  { name: 'India', description: 'Asia Pacific tech' },
  { name: 'Singapore', description: 'SE Asia hub' },
]

const capabilities = [
  { icon: Plug, text: 'Multi-PMS integration per country' },
  { icon: Database, text: 'Centralized data across all regions' },
  { icon: ShieldCheck, text: 'Data sovereignty & compliance' },
  { icon: Coins, text: 'Multi-currency settlement support' },
  { icon: RefreshCw, text: 'Real-time global sync' },
  { icon: Clock, text: 'Timezone-aware reporting' },
]

export default function FMSGlobalReach() {
  return (
    <section id="global" className="py-20 md:py-28 bg-secondary-gray">
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-stayguide-blue border border-stayguide-blue/20 bg-white px-4 py-2 rounded-full mb-5 shadow-sm">
              <Globe2 className="w-3.5 h-3.5" />
              Global Reach
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 font-heading leading-tight mb-4">
              One Platform.{' '}
              <span className="text-stayguide-blue">Every Country.</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-gray-600 text-base sm:text-lg leading-7">
              Expanding rapidly. Wherever your franchise grows, StayFranchise scales with you.
            </p>
          </AnimatedSection>
        </div>

        {/* Region chips */}
        <StaggeredList className="flex flex-wrap justify-center gap-4 mb-14">
          {regions.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4 text-center min-w-[130px]"
            >
              <div className="text-base font-bold text-gray-900">{r.name}</div>
              <div className="text-xs text-gray-500 mt-0.5">{r.description}</div>
            </div>
          ))}
        </StaggeredList>

        {/* Capabilities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {capabilities.map((c, i) => (
            <AnimatedSection key={c.text} direction="up" delay={0.1 + i * 0.05}>
              <div className="h-full bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-stayguide-blue/10 flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-4 h-4 text-stayguide-blue" />
                </div>
                <span className="text-sm font-medium text-gray-800">{c.text}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
