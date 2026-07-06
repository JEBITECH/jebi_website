'use client'

import AnimatedSection from '@/components/AnimatedSection'
import StaggeredList from '@/components/StaggeredList'

const caseStudies = [
  {
    tag: 'Vacation Rental Operator',
    title: 'Connecting five disconnected systems',
    problem:
      'Reservations, housekeeping and accounting lived in separate tools with manual data entry between them.',
    solution:
      'A dedicated team built a middleware layer integrating Guesty, accounting software and a custom housekeeping app.',
    impact: 'Manual data entry eliminated; daily ops time reduced significantly.',
  },
  {
    tag: 'Multi-Property Manager',
    title: 'A branded owner portal',
    problem: 'Property owners had no self-service way to view payouts or performance.',
    solution: 'Custom-built owner portal with real-time reporting, pulling data via API.',
    impact: 'Fewer owner support tickets and a stronger retention story.',
  },
  {
    tag: 'Boutique Hotel Group',
    title: 'Legacy system modernization',
    problem: 'An aging internal tool was blocking the team from adopting modern integrations.',
    solution: 'Phased migration to a cloud-native platform with zero booking downtime.',
    impact: 'Faster releases and a foundation ready for future integrations.',
  },
]

export default function GuestyCaseStudies() {
  return (
    <div id="case-studies" className="bg-white section-padding">
      <div className="container-custom px-4 sm:px-6">
        <AnimatedSection direction="up">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="inline-block font-mono text-xs text-primary-purple uppercase tracking-wider mb-4">
              Case studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading mb-4">
              Selected engagements
            </h2>
            <p className="text-base sm:text-lg leading-7 text-gray-600">
              Representative examples of the work we do. Details are illustrative pending
              published case studies.
            </p>
          </div>
        </AnimatedSection>

        <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((c) => (
            <div
              key={c.title}
              className="h-full flex flex-col rounded-[20px] overflow-hidden border border-gray-200 bg-white card-hover"
            >
              <div className="h-2 bg-gradient-to-r from-primary-purple to-primary-orange" />
              <div className="p-6 sm:p-7">
                <span className="font-mono text-[11px] text-primary-purple uppercase tracking-wider">
                  {c.tag}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-2.5 mb-4">{c.title}</h3>

                <p className="text-[10.5px] uppercase tracking-wider font-bold text-gray-400 mt-3">
                  Problem
                </p>
                <p className="text-[13.5px] text-gray-700 leading-relaxed mt-1">{c.problem}</p>

                <p className="text-[10.5px] uppercase tracking-wider font-bold text-gray-400 mt-3.5">
                  Solution
                </p>
                <p className="text-[13.5px] text-gray-700 leading-relaxed mt-1">{c.solution}</p>

                <p className="text-[10.5px] uppercase tracking-wider font-bold text-gray-400 mt-3.5">
                  Impact
                </p>
                <p className="text-[13.5px] text-gray-700 leading-relaxed mt-1">{c.impact}</p>
              </div>
            </div>
          ))}
        </StaggeredList>
      </div>
    </div>
  )
}
