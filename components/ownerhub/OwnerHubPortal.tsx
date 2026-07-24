'use client'

import AnimatedSection from '@/components/AnimatedSection'
import { UserCheck, Eye, Download, Lock } from 'lucide-react'

const portalFeatures = [
  {
    icon: Eye,
    title: 'Full Visibility, Read-Only',
    description: 'Owners see their own ledger, settlements, and statements in real time, no waiting on an email.',
  },
  {
    icon: Download,
    title: 'Statements on Demand',
    description: 'Every generated statement is available to download the moment it\u2019s ready.',
  },
  {
    icon: Lock,
    title: 'Scoped Access, By Design',
    description: 'Owners can view their own data but cannot generate settlements or edit formulas, that stays with your team.',
  },
]

export default function OwnerHubPortal() {
  return (
    <section id="portal" className="py-20 md:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <AnimatedSection direction="left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-stayguide-blue/5 border border-stayguide-blue/20 rounded-full mb-6">
              <UserCheck className="w-4 h-4 text-stayguide-blue" />
              <span className="text-stayguide-blue text-sm font-semibold">Self-Service Owner Portal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading mb-6 leading-tight">
              Give Owners Their Own{' '}
              <span className="text-stayguide-blue">Window Into Every Payout</span>
            </h2>
            <p className="text-lg leading-8 text-gray-600 mb-5">
              Every property owner gets scoped, self-service access, their own transaction
              ledger, their own settlements, their own statements. No spreadsheets emailed
              back and forth, no "can you resend that" support tickets.
            </p>
            <p className="text-lg leading-8 text-gray-600">
              Your team keeps full control over formulas, groups, and settlement generation.
              Owners just see the truth, whenever they want it.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-4">
              {portalFeatures.map((f) => (
                <div
                  key={f.title}
                  className="bg-secondary-gray rounded-2xl border border-gray-100 p-6 flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-stayguide-blue" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{f.title}</h3>
                    <p className="text-sm text-gray-600 leading-6">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
