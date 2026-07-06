'use client'

import { motion } from 'framer-motion'
import { Check, Briefcase, Code2, Users2, Plug, ArrowRight, Sparkles } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import StaggeredList from '@/components/StaggeredList'
import MagneticButton from '@/components/MagneticButton'

const services = [
  {
    num: '01',
    icon: Code2,
    title: 'Custom Development',
    overview:
      'Tailored software built specifically for hospitality operations — from booking platforms to internal tools your team actually wants to use.',
    idealFor: [
      'Multi-property operators outgrowing spreadsheets',
      'Brands needing a branded booking experience',
      'Teams wanting owner/guest self-service',
    ],
    deliverables: [
      'Booking platforms & owner portals',
      'Operations & housekeeping dashboards',
      'Revenue management & reporting tools',
      'AI assistants & automation platforms',
    ],
    outcome: 'Fewer manual workflows, faster operations',
    gradient: 'from-purple-500 to-purple-600',
    accentBorder: 'border-purple-500/30',
    featured: false,
  },
  {
    num: '02',
    icon: Users2,
    title: 'Dedicated Team',
    overview:
      'Experienced engineers who become an extension of your internal team — onboarded fast, scoped clearly, and managed with full transparency.',
    idealFor: [
      'Companies that need to scale engineering fast',
      'Teams with a backlog but no bandwidth',
      'Founders who want senior talent without hiring overhead',
    ],
    deliverables: [
      'Full stack, frontend & backend developers',
      'Mobile, QA & DevOps engineers',
      'UI/UX designers & solution architects',
    ],
    outcome: 'Predictable delivery without the hiring cycle',
    gradient: 'from-primary-orange to-orange-500',
    accentBorder: 'border-primary-orange/30',
    featured: true,
  },
  {
    num: '03',
    icon: Plug,
    title: 'Implementation & Integration',
    overview:
      'We help businesses integrate and extend their Guesty ecosystem using available APIs and best practices — connecting the systems you already rely on.',
    idealFor: [
      'Operators running disconnected PMS, CRM, ERP tools',
      'Teams migrating off legacy systems',
      'Companies automating manual handoffs',
    ],
    deliverables: [
      'PMS, CRM & payment gateway integrations',
      'Channel manager & OTA connectivity',
      'Data migration & workflow automation',
    ],
    outcome: 'One connected system instead of five disconnected ones',
    gradient: 'from-blue-500 to-blue-600',
    accentBorder: 'border-blue-500/30',
    featured: false,
  },
]

export default function GuestyServices() {
  return (
    <div id="services" className="relative bg-gradient-to-b from-white via-gray-50/50 to-white section-padding overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(74,26,92,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-custom px-4 sm:px-6 relative z-10">
        <AnimatedSection direction="up">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-purple/5 border border-primary-purple/15 rounded-full mb-5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <Briefcase className="w-4 h-4 text-primary-purple" />
              <span className="text-primary-purple text-xs font-semibold uppercase tracking-wider">
                Our services
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading mb-4">
              Three ways to work with us
            </h2>
            <p className="text-base sm:text-lg leading-7 text-gray-500">
              Pick a single project, plug in a dedicated team, or hand us the full
              implementation. Every engagement is scoped around outcomes, not hours.
            </p>
          </div>
        </AnimatedSection>

        <StaggeredList className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((s) => (
            <motion.div
              key={s.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className={`relative flex flex-col rounded-[22px] overflow-hidden bg-white border-2 ${
                s.featured
                  ? 'border-primary-orange shadow-xl shadow-primary-orange/10'
                  : 'border-gray-200 shadow-md'
              } h-full`}
            >
              {/* Featured badge */}
              {s.featured && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary-orange text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                    <Sparkles className="w-3 h-3" /> Popular
                  </span>
                </div>
              )}

              {/* Colored top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${s.gradient}`} />

              {/* Header */}
              <div className="p-6 sm:p-7 pb-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-lg`}>
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-mono text-xs text-primary-orange font-bold">{s.num}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">{s.overview}</p>
              </div>

              {/* Content sections */}
              <div className="flex-1 flex flex-col px-6 sm:px-7 pb-7 gap-5">
                <div className="border-t border-gray-100 pt-5">
                  <h4 className="text-[10.5px] uppercase tracking-widest text-gray-400 font-bold mb-3">
                    Ideal for
                  </h4>
                  <ul className="space-y-2">
                    {s.idealFor.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-gray-700 leading-snug">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${s.gradient} mt-1.5 flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-100 pt-5">
                  <h4 className="text-[10.5px] uppercase tracking-widest text-gray-400 font-bold mb-3">
                    Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {s.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-gray-700 leading-snug">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${s.gradient} mt-1.5 flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome — pushed to bottom */}
                <div className="mt-auto border-t border-gray-100 pt-5">
                  <h4 className="text-[10.5px] uppercase tracking-widest text-gray-400 font-bold mb-2.5">
                    Business outcome
                  </h4>
                  <p className="flex items-center gap-2 text-[14px] text-gray-900 font-semibold">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    {s.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggeredList>

        {/* CTA removed — handled by dedicated CTA banner section */}
      </div>
    </div>
  )
}
