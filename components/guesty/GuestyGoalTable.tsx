'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Target, Zap } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import MagneticButton from '@/components/MagneticButton'

const goalTable = [
  { goal: 'Reduce operational costs', solution: 'Workflow automation' },
  { goal: 'Scale to more properties', solution: 'Custom operational platform' },
  { goal: 'Improve owner retention', solution: 'Owner portal' },
  { goal: 'Improve guest reviews', solution: 'Guest experience tools' },
  { goal: 'Reduce damages', solution: 'AI inspections' },
  { goal: 'Eliminate manual work', solution: 'Guesty automation' },
  { goal: 'Connect multiple systems', solution: 'Custom integrations' },
  { goal: 'Make better decisions', solution: 'Executive dashboards' },
  { goal: 'Increase staff efficiency', solution: 'Mobile workforce apps' },
  { goal: 'Support franchise growth', solution: 'Multi-brand management platform' },
]

export default function GuestyGoalTable() {
  return (
    <div id="goal-table" className="relative bg-primary-purple-dark section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,107,53,0.1)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(107,44,122,0.15)_0%,transparent_70%)]" />
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
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <AnimatedSection direction="left">
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.06] border border-white/10 rounded-full text-[11px] font-mono text-purple-200 uppercase tracking-wider mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Target className="w-3.5 h-3.5" /> From goal to solution
              </motion.div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-heading mb-5 leading-tight">
                Match your business goal to the right custom solution
              </h2>
              <p className="text-white/50 text-[15px] leading-relaxed mb-8">
                Use this table as a conversation guide with your team — or share it with the
                Guesty account team to identify where Jebitech can plug in.
              </p>
              <MagneticButton
                href="#contact"
                intensity={0.1}
                className="btn-primary inline-flex items-center gap-2 rounded-xl px-7 py-4"
              >
                Book a consultation <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </AnimatedSection>

          {/* Right — Table */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-2 gap-4 px-6 py-4 border-b border-white/10 bg-white/[0.03]">
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/40">
                  Business Goal
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/40">
                  Your Solution
                </span>
              </div>

              {/* Table rows */}
              <div>
                {goalTable.map((row, i) => (
                  <motion.div
                    key={row.goal}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                    className={`grid grid-cols-2 gap-4 px-6 py-4 ${
                      i !== goalTable.length - 1 ? 'border-b border-white/[0.06]' : ''
                    } transition-colors duration-200`}
                  >
                    <span className="text-[14px] text-white/60">{row.goal}</span>
                    <span className="text-[14px] font-semibold text-white flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-primary-orange flex-shrink-0" />
                      {row.solution}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
