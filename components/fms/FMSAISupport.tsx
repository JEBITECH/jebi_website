'use client'

import AnimatedSection from '@/components/AnimatedSection'
import { Bot, MessageSquareText, Zap, Database, Headset, FileText } from 'lucide-react'

const aiFeatures = [
  { icon: MessageSquareText, title: 'AI-Powered Answers', description: 'Ask anything about revenues, settlements, or bookings in plain language.' },
  { icon: Zap, title: 'Instant Resolution', description: 'No wait times, 24/7 availability with sub-second response.' },
  { icon: Database, title: 'Live Data Access', description: "Pulls real-time data directly from your StayFranchise dashboard." },
  { icon: Headset, title: 'Human Escalation', description: 'Escalates to human agents seamlessly when needed.' },
]

const reportFrequencies = [
  { label: 'Daily', description: 'Overnight revenue & reservation summary' },
  { label: 'Weekly', description: 'Booking trends & property performance' },
  { label: 'Monthly', description: 'Full financial settlement & reconciliation' },
]

export default function FMSAISupport() {
  return (
    <section id="ai-support" className="py-20 md:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-stayguide-blue border border-stayguide-blue/20 bg-stayguide-blue/5 px-4 py-2 rounded-full mb-5">
              <Bot className="w-3.5 h-3.5" />
              AI Support & Reporting
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 font-heading leading-tight mb-4">
              24/7 Intelligent Assistance,{' '}
              <span className="text-stayguide-blue">Automated Reports</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-gray-600 text-base sm:text-lg leading-7">
              Franchisees get answers instantly, and franchisors get reports without
              lifting a finger.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI Support Agent */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="h-full bg-secondary-gray rounded-2xl border border-gray-100 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-stayguide-blue flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">AI Support Agent</h3>
              </div>
              <div className="space-y-4">
                {aiFeatures.map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center flex-shrink-0">
                      <f.icon className="w-4 h-4 text-stayguide-blue" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{f.title}</div>
                      <div className="text-xs text-gray-600 mt-0.5">{f.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Smart Auto Reports */}
          <AnimatedSection direction="right" delay={0.25}>
            <div className="h-full bg-secondary-gray rounded-2xl border border-gray-100 p-6 sm:p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-stayguide-green flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Smart Auto Reports</h3>
              </div>

              <div className="space-y-3 mb-6">
                {reportFrequencies.map((r) => (
                  <div key={r.label} className="bg-white rounded-xl border border-gray-100 px-4 py-3.5 flex items-center gap-4">
                    <span className="text-xs font-bold text-stayguide-green uppercase tracking-wider w-16 flex-shrink-0">{r.label}</span>
                    <span className="text-sm text-gray-700">{r.description}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
                <span>Delivered automatically to the right people</span>
                <span className="font-semibold text-stayguide-blue">100% Automated</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
