'use client'

import { Star } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import StaggeredList from '@/components/StaggeredList'

const testimonials = [
  {
    quote:
      'They understood our operations from day one. The integration work alone saved our team hours every week.',
    author: 'Operations Director',
    role: 'Vacation Rental Company',
  },
  {
    quote:
      'Onboarding the dedicated team took days, not months. They felt like our own engineers within the first sprint.',
    author: 'Founder',
    role: 'Property Management Company',
  },
  {
    quote:
      'Custom development that actually reflects how hospitality teams work — not a generic software template.',
    author: 'Technology Director',
    role: 'Hospitality Brand',
  },
]

export default function GuestyTestimonials() {
  return (
    <div className="bg-white section-padding">
      <div className="container-custom px-4 sm:px-6">
        <AnimatedSection direction="up">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="inline-block font-mono text-xs text-primary-purple uppercase tracking-wider mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading">
              What partners say about working with us
            </h2>
          </div>
        </AnimatedSection>

        <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-7">
              <div className="flex gap-0.5 text-primary-orange mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-[14.5px] text-gray-700 italic leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-purple to-primary-orange flex-shrink-0" />
                <div>
                  <div className="text-[13.5px] font-bold text-gray-900">{t.author}</div>
                  <div className="text-[12px] text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </StaggeredList>
      </div>
    </div>
  )
}
