'use client'

import AnimatedSection from '@/components/AnimatedSection'
import { ShieldCheck, RefreshCw, Rocket, Eye } from 'lucide-react'

const pillars = [
  {
    icon: RefreshCw,
    tag: 'PMS Change Protection',
    title: 'Switch PMS Anytime, Zero Data Loss',
    description:
      "When you change your PMS, you don't lose a single record. Guest history, reservations, and financials stay safely in StayFranchise, completely independent of your PMS.",
  },
  {
    icon: Rocket,
    tag: 'Franchise Expansion Ready',
    title: 'New Franchise Signed? Hit the Ground Running',
    description:
      'Sign a new franchise and you already have all client details, booking history, and marketing data ready to target and acquire guests from day one.',
  },
  {
    icon: Eye,
    tag: 'Cross-PMS Transparency',
    title: 'Full Data Transparency Without Changing PMS',
    description:
      'Get complete visibility into revenue, settlements, and operations across all properties and franchisees, all in one dashboard, without touching your existing PMS.',
  },
]

export default function FMSDataOwnership() {
  return (
    <section id="data-ownership" className="py-20 md:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-stayguide-blue border border-stayguide-blue/20 bg-stayguide-blue/5 px-4 py-2 rounded-full mb-5">
              <ShieldCheck className="w-3.5 h-3.5" />
              PMS Flexibility
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 font-heading leading-tight mb-4">
              Why Your Data{' '}
              <span className="text-stayguide-blue">Always Stays With You</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-gray-600 text-base sm:text-lg leading-7">
              Your data belongs to you, not your PMS vendor. StayFranchise is your single
              source of truth.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} direction="up" delay={0.1 + i * 0.08}>
              <div className="h-full p-7 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-stayguide-blue/10 flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-stayguide-blue" />
                </div>
                <div className="text-xs font-bold text-stayguide-green uppercase tracking-wider mb-2">{p.tag}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-6">{p.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
