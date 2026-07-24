'use client'

import AnimatedSection from '@/components/AnimatedSection'
import { Calculator, CheckCircle2 } from 'lucide-react'

const flowSteps = [
  { step: '01', label: 'Reservation Revenue', detail: 'Gross booking captured' },
  { step: '02', label: 'OTA Commissions', detail: 'Deducted automatically' },
  { step: '03', label: 'Tax Handling', detail: 'Inclusive / exclusive logic' },
  { step: '04', label: 'Franchise Split', detail: 'Franchisor & franchisee share' },
  { step: '05', label: 'Owner Settlement', detail: 'Net payout to property owner' },
]

// Illustrative example formula — configurable per franchisor, shown here for demonstration only
const exampleFormula = [
  { label: 'Franchisor Fee', value: '12% of Net Revenue' },
  { label: 'Franchisee Split', value: '25% of Net Revenue' },
  { label: 'Owner Settlement', value: '63% of Net Revenue' },
  { label: 'OTA Commission', value: '15% (Direct Deduct)' },
  { label: 'Tax Calculation', value: 'Exclusive (Added)' },
  { label: 'Payment Frequency', value: 'Monthly / On-Demand' },
]

const traits = ['Automated', 'Configurable', 'Accurate', 'Scalable']

export default function FMSSettlement() {
  return (
    <section id="settlement" className="py-20 md:py-28 bg-secondary-gray">
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-stayguide-blue border border-stayguide-blue/20 bg-white px-4 py-2 rounded-full mb-5 shadow-sm">
              <Calculator className="w-3.5 h-3.5" />
              Settlement Engine
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 font-heading leading-tight mb-4">
              Configurable, Automated{' '}
              <span className="text-stayguide-blue">Revenue Distribution</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-gray-600 text-base sm:text-lg leading-7">
              Every reservation flows through a transparent, rules-based split across all
              parties, calculated automatically and ready for audit.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: flow steps */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 h-full">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">Revenue Flow</h3>
              <div className="relative space-y-5">
                <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gray-100" />
                {flowSteps.map((s) => (
                  <div key={s.step} className="relative flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-stayguide-blue text-white flex items-center justify-center text-xs font-bold flex-shrink-0 relative z-10">
                      {s.step}
                    </div>
                    <div className="pt-1.5">
                      <div className="text-sm font-semibold text-gray-900">{s.label}</div>
                      <div className="text-xs text-gray-500">{s.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right: example formula config */}
          <AnimatedSection direction="right" delay={0.25}>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 h-full flex flex-col">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Formula Configuration</h3>
                <span className="text-[10px] font-semibold text-gray-400 uppercase">Example</span>
              </div>
              <p className="text-xs text-gray-400 mb-6">
                Illustrative split shown for reference, every value is fully configurable per franchisor.
              </p>

              <div className="space-y-3 mb-6 flex-1">
                {exampleFormula.map((f) => (
                  <div key={f.label} className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
                    <span className="text-sm text-gray-600">{f.label}</span>
                    <span className="text-sm font-semibold text-gray-900">{f.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                {traits.map((t) => (
                  <span key={t} className="inline-flex items-center gap-1 text-xs font-semibold text-stayguide-blue bg-stayguide-blue/5 px-3 py-1.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
