'use client'

import { motion } from 'framer-motion'
import { Building2, Palmtree, Hotel, Home, Briefcase, Globe2, Rocket, Cloud } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import StaggeredList from '@/components/StaggeredList'

const industries = [
  { name: 'Vacation Rentals', icon: Palmtree, color: 'from-orange-500 to-orange-600' },
  { name: 'Property Management', icon: Building2, color: 'from-purple-500 to-purple-600' },
  { name: 'Hotels', icon: Hotel, color: 'from-blue-500 to-blue-600' },
  { name: 'Resorts', icon: Palmtree, color: 'from-pink-500 to-pink-600' },
  { name: 'Serviced Apartments', icon: Home, color: 'from-green-500 to-green-600' },
  { name: 'Travel Technology', icon: Globe2, color: 'from-purple-500 to-purple-600' },
  { name: 'PropTech', icon: Rocket, color: 'from-orange-500 to-orange-600' },
  { name: 'Hospitality SaaS', icon: Cloud, color: 'from-blue-500 to-blue-600' },
]

export default function GuestyIndustries() {
  return (
    <div id="industries" className="relative bg-primary-purple-dark section-padding overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>
      </div>

      <div className="container-custom px-4 sm:px-6 relative z-10">
        <AnimatedSection direction="up">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.06] border border-white/10 rounded-full text-[11px] font-mono text-purple-200 uppercase tracking-wider mb-5">
              <Briefcase className="w-3.5 h-3.5" /> Industries we serve
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading mb-4">
              Built for every corner of hospitality
            </h2>
            <p className="text-base sm:text-lg leading-7 text-white/50">
              From vacation rentals to enterprise SaaS — we understand your market.
            </p>
          </div>
        </AnimatedSection>

        <StaggeredList className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
          {industries.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -5, scale: 1.03, borderColor: 'rgba(255,107,53,0.4)' }}
              transition={{ duration: 0.3 }}
              className="bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center gap-3 group cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-[13px] sm:text-[14px] font-semibold text-white/90 leading-snug">
                {item.name}
              </span>
            </motion.div>
          ))}
        </StaggeredList>
      </div>
    </div>
  )
}
