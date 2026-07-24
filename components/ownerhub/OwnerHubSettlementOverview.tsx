'use client'

import AnimatedSection from '@/components/AnimatedSection'
import { LayoutDashboard, CheckCircle2 } from 'lucide-react'

// Illustrative sample rows — for demonstration of the settlement overview experience only
const sampleSettlements = [
  { name: 'March Settlement — Building A', date: 'Mar 31, 2026', type: 'Group', owner: '$18,400', pmc: '$4,600', status: 'Settled' },
  { name: 'March Settlement — Sarah Mitchell', date: 'Mar 31, 2026', type: 'Individual', owner: '$3,023', pmc: '$964', status: 'Settled' },
  { name: 'April Settlement — Building A', date: 'Apr 30, 2026', type: 'Group', owner: '$19,120', pmc: '$4,780', status: 'Unsettled' },
]

export default function OwnerHubSettlementOverview() {
  return (
    <section id="settlement-overview" className="py-20 md:py-28 bg-secondary-gray">
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-stayguide-blue border border-stayguide-blue/20 bg-white px-4 py-2 rounded-full mb-5 shadow-sm">
              <LayoutDashboard className="w-3.5 h-3.5" />
              Settlement Overview
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 font-heading leading-tight mb-4">
              Every Settlement,{' '}
              <span className="text-stayguide-blue">One Auditable View</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-gray-600 text-base sm:text-lg leading-7">
              See individual and group settlements side by side, with owner and PMC amounts
              broken out and status tracked automatically.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection direction="up" delay={0.25}>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-gray-100">
              <span className="text-sm font-bold text-gray-900">Settlement Overview</span>
              <span className="text-[10px] text-gray-400">Illustrative data for demonstration</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-secondary-gray/60">
                    <th className="text-left py-3 px-5 font-medium text-gray-500">Settlement Name</th>
                    <th className="text-left py-3 px-5 font-medium text-gray-500">Date</th>
                    <th className="text-left py-3 px-5 font-medium text-gray-500">Type</th>
                    <th className="text-right py-3 px-5 font-medium text-gray-500">Owner Amount</th>
                    <th className="text-right py-3 px-5 font-medium text-gray-500">PMC Amount</th>
                    <th className="text-right py-3 px-5 font-medium text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleSettlements.map((s) => (
                    <tr key={s.name} className="border-b border-gray-50 last:border-0">
                      <td className="py-3.5 px-5 font-medium text-gray-900">{s.name}</td>
                      <td className="py-3.5 px-5 text-gray-500">{s.date}</td>
                      <td className="py-3.5 px-5 text-gray-500">{s.type}</td>
                      <td className="py-3.5 px-5 text-right font-medium text-gray-900">{s.owner}</td>
                      <td className="py-3.5 px-5 text-right text-gray-500">{s.pmc}</td>
                      <td className="py-3.5 px-5 text-right">
                        <span
                          className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${
                            s.status === 'Settled'
                              ? 'bg-stayguide-green/10 text-stayguide-green-dark'
                              : 'bg-amber-50 text-amber-600'
                          }`}
                        >
                          {s.status === 'Settled' && <CheckCircle2 className="w-3 h-3" />}
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
