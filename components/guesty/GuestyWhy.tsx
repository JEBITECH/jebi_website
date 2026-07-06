'use client'

import { motion } from 'framer-motion'
import { Code2, Users2, Zap, Link2, Briefcase, Award, Globe2, Cpu, Brain, Sparkles } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import StaggeredList from '@/components/StaggeredList'

const cards = [
  {
    icon: Code2,
    title: 'Custom hospitality software',
    desc: 'Booking platforms, owner and guest portals, and operations tools built around how your business actually runs.',
    bg: 'bg-[#efe9fb]',
    color: 'text-primary-purple',
    gradient: 'from-primary-purple to-purple-400',
  },
  {
    icon: Users2,
    title: 'Dedicated engineering teams',
    desc: 'Senior developers who plug into your workflow, your tools, and your standups — not a black-box outsourcing model.',
    bg: 'bg-orange-50',
    color: 'text-primary-orange',
    gradient: 'from-primary-orange to-orange-400',
  },
  {
    icon: Zap,
    title: 'Faster digital transformation',
    desc: 'Ship in weeks, not quarters. We bring reusable hospitality components so projects start ahead, not from zero.',
    bg: 'bg-green-50',
    color: 'text-green-600',
    gradient: 'from-green-500 to-green-400',
  },
  {
    icon: Link2,
    title: 'Seamless system integration',
    desc: 'We connect Guesty to your PMS, CRM, payments, and OTA channels using documented APIs and proven patterns.',
    bg: 'bg-[#f1ecfb]',
    color: 'text-primary-purple-dark',
    gradient: 'from-primary-purple-dark to-purple-500',
  },
]

const teamHighlights = [
  {
    num: '01',
    icon: Award,
    title: '20 Years of Hospitality Tech Experience',
    desc: 'A team with two decades of hands-on experience developing technology solutions purpose-built for the hospitality industry.',
  },
  {
    num: '02',
    icon: Brain,
    title: 'Complex Operations, Solved',
    desc: 'Worked with clients running highly complex business operations and delivered custom technology that simplified and scaled them.',
  },
  {
    num: '03',
    icon: Globe2,
    title: 'Global Working Knowledge',
    desc: 'Clients across Australia, Europe, UK and USA — giving us deep understanding of different markets, functions, regulations and operating models.',
  },
  {
    num: '04',
    icon: Cpu,
    title: 'Wide Range of Technology',
    desc: 'Hands-on experience with a broad technology landscape and always current with the latest tools, frameworks and best practices.',
  },
  {
    num: '05',
    icon: Users2,
    title: 'Domain Experts Who Code',
    desc: 'An experienced engineering team that combines strong technical skills with deep hospitality domain knowledge — no translation layer needed.',
  },
]

export default function GuestyWhy() {
  return (
    <div id="why" className="bg-white section-padding">
      <div className="container-custom px-4 sm:px-6">
        <AnimatedSection direction="up">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-gray-100 rounded-full mb-4 border border-gray-200">
              <Briefcase className="w-4 h-4 text-primary-purple" />
              <span className="text-primary-purple text-sm font-semibold">
                Why hospitality companies choose Jebitech
              </span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading mb-4">
              Engineering depth that hospitality platforms actually need
            </h2>
            <p className="text-base sm:text-lg leading-7 text-gray-600">
              Most agencies don&apos;t understand hospitality workflows. We&apos;ve built booking
              engines, owner portals, and integration pipelines specifically for property
              managers and vacation rental operators.
            </p>
          </div>
        </AnimatedSection>

        {/* Core capability cards */}
        <StaggeredList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -6, boxShadow: '0 20px 40px -20px rgba(0,0,0,0.15)' }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 overflow-hidden group text-center"
            >
              {/* Decorative top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient}`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${card.bg} flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <card.icon className={`w-6 h-6 ${card.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-[17px] font-bold text-gray-900 mb-2.5 leading-snug">{card.title}</h3>
              <p className="text-[13.5px] text-gray-500 leading-relaxed">{card.desc}</p>

              {/* Hover glow */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl ${card.bg}`} />
            </motion.div>
          ))}
        </StaggeredList>

        {/* Technology Team section */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="relative bg-gradient-to-br from-primary-purple-dark to-[#1a0f33] rounded-3xl px-6 sm:px-10 py-10 sm:py-14 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-orange/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)',
                  backgroundSize: '28px 28px',
                }}
              />
            </div>

            <div className="relative z-10 text-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/[0.06] border border-white/10 rounded-full text-[11px] font-mono text-purple-200 uppercase tracking-wider mb-4">
                <Sparkles className="w-3 h-3" /> Technology Team
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-3">
                What Sets Our Team Apart
              </h3>
              <p className="text-white/50 text-base max-w-xl mx-auto">
                Engineering depth combined with hospitality domain expertise
              </p>
            </div>

            <StaggeredList className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* First row — 3 cards */}
              {teamHighlights.slice(0, 3).map((item) => (
                <motion.div
                  key={item.num}
                  whileHover={{ y: -4, borderColor: 'rgba(255,107,53,0.4)' }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-purple to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/20">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-mono text-xs text-primary-orange font-bold">{item.num}</span>
                  </div>
                  <h4 className="text-[15px] font-bold text-white mb-2.5 leading-snug">{item.title}</h4>
                  <p className="text-[13px] text-white/50 leading-relaxed mt-auto">{item.desc}</p>
                </motion.div>
              ))}
            </StaggeredList>
            {/* Second row — 2 cards centered */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 mt-5 max-w-2xl lg:max-w-[680px] mx-auto">
              {teamHighlights.slice(3).map((item) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ y: -4, borderColor: 'rgba(255,107,53,0.4)' }}
                  className="bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-purple to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/20">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-mono text-xs text-primary-orange font-bold">{item.num}</span>
                  </div>
                  <h4 className="text-[15px] font-bold text-white mb-2.5 leading-snug">{item.title}</h4>
                  <p className="text-[13px] text-white/50 leading-relaxed mt-auto">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
