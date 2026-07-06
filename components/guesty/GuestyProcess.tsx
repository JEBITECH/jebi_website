'use client'

import { Search, ClipboardList, PenTool, Hammer, Plug, Rocket, LifeBuoy } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const steps = [
  { icon: Search, title: 'Discover', desc: 'We map your current Guesty setup, workflows and gaps.' },
  { icon: ClipboardList, title: 'Plan', desc: 'Scope, timeline and team structure are agreed upfront.' },
  { icon: PenTool, title: 'Design', desc: 'UX and architecture are designed around your operations.' },
  { icon: Hammer, title: 'Develop', desc: 'Agile sprints with visible progress and demos.' },
  { icon: Plug, title: 'Integrate', desc: 'Systems are connected and tested against real data.' },
  { icon: Rocket, title: 'Launch', desc: 'Controlled rollout with monitoring in place.' },
  { icon: LifeBuoy, title: 'Support', desc: 'Ongoing maintenance and a long-term technology partner.' },
]

export default function GuestyProcess() {
  return (
    <div id="process" className="bg-white border-t border-gray-100 border-b border-gray-100 section-padding">
      <div className="container-custom px-4 sm:px-6">
        <AnimatedSection direction="up">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <span className="inline-block font-mono text-xs text-primary-purple uppercase tracking-wider mb-4">
              Development process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading">
              How an engagement runs, start to finish
            </h2>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* connecting line (desktop) */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-gray-200" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-4 relative">
            {steps.map((step, i) => (
              <AnimatedSection key={step.title} direction="up" delay={i * 0.08}>
                <div className="relative flex flex-col items-start lg:items-center lg:text-center">
                  <div className="w-12 h-12 rounded-full bg-primary-purple text-white flex items-center justify-center mb-4 relative z-10 shadow-md">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[11px] text-primary-orange mb-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="text-[15px] font-bold text-gray-900 mb-1.5">{step.title}</h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
