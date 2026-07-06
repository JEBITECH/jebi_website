'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import StaggeredList from '@/components/StaggeredList'

const insights = [
  'Guesty is excellent at managing reservations, but every vacation rental business has unique operational processes that require custom solutions.',
  'As your business grows, manual work between Guesty and your other systems becomes time-consuming and error-prone.',
  "Many property managers rely on spreadsheets and disconnected tools because their workflows don't fit entirely within Guesty.",
  "Your team shouldn't have to adapt its processes to software. Software should adapt to your business.",
  'The more properties you manage, the more important it becomes to automate repetitive tasks and connect your business systems.',
  'Guesty is the operational foundation. Custom development extends it to support your unique business processes and future growth.',
]

export default function GuestyProblem() {
  return (
    <div id="problem" className="bg-primary-purple-dark section-padding relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom px-4 sm:px-6 relative z-10">
        <AnimatedSection direction="up">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <span className="inline-block font-mono text-xs text-purple-300 uppercase tracking-wider mb-4">
              The real challenge
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading">
              Guesty is exceptional. But every business has workflows that go beyond any platform.
            </h2>
          </div>
        </AnimatedSection>

        <StaggeredList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {insights.map((text, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-sm overflow-hidden"
            >
              <span
                aria-hidden
                className="absolute -top-3 left-4 text-6xl font-heading text-primary-orange/25 select-none"
              >
                &ldquo;
              </span>
              <p className="relative z-10 text-white/85 text-[15px] leading-relaxed italic">{text}</p>
            </motion.div>
          ))}
        </StaggeredList>
      </div>
    </div>
  )
}
