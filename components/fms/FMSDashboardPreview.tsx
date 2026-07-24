'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import { LayoutDashboard, CalendarCheck, DollarSign, TrendingUp, Building2 } from 'lucide-react'

// Illustrative sample metrics — for demonstration of the live dashboard experience only
const kpis = [
  { icon: CalendarCheck, value: '1,847', label: 'Total Reservations', delta: '+12%' },
  { icon: DollarSign, value: '$2.4M', label: 'Total Revenue', delta: '+8%' },
  { icon: TrendingUp, value: '$1,299', label: 'Avg Booking Value', delta: '+15%' },
  { icon: Building2, value: '124', label: 'Active Properties', delta: '+3%' },
]

const revenueBySource = [
  { label: 'Airbnb', value: 38, color: 'bg-stayguide-blue' },
  { label: 'Direct', value: 28, color: 'bg-stayguide-green' },
  { label: 'VRBO', value: 18, color: 'bg-stayguide-blue-light' },
  { label: 'Booking.com', value: 12, color: 'bg-stayguide-green-light' },
  { label: 'Other', value: 4, color: 'bg-gray-300' },
]

export default function FMSDashboardPreview() {
  return (
    <section id="dashboard" className="py-20 md:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-stayguide-blue border border-stayguide-blue/20 bg-stayguide-blue/5 px-4 py-2 rounded-full mb-5">
              <LayoutDashboard className="w-3.5 h-3.5" />
              Live Dashboard
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 font-heading leading-tight mb-4">
              Real-Time Revenue{' '}
              <span className="text-stayguide-blue">& Booking Intelligence</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-gray-600 text-base sm:text-lg leading-7">
              Filter by franchisee, status, or date range and see the numbers behind your
              entire network update instantly.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection direction="up" delay={0.25}>
          <div className="max-w-5xl mx-auto bg-secondary-gray rounded-3xl border border-gray-100 p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Sample View</span>
              <span className="text-[10px] text-gray-400">Illustrative data for demonstration</span>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {kpis.map((kpi, i) => (
                <motion.div
                  key={kpi.label}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm p-5"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-stayguide-blue/10 flex items-center justify-center">
                      <kpi.icon className="w-4 h-4 text-stayguide-blue" />
                    </div>
                    <span className="text-xs font-semibold text-emerald-600">{kpi.delta}</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{kpi.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{kpi.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Revenue by source */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 sm:p-6">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-5">Revenue by Source</h3>
              <div className="flex h-3 rounded-full overflow-hidden mb-4">
                {revenueBySource.map((s) => (
                  <div key={s.label} className={s.color} style={{ width: `${s.value}%` }} />
                ))}
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {revenueBySource.map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${s.color}`} />
                    <span className="text-xs text-gray-600">{s.label}</span>
                    <span className="text-xs font-semibold text-gray-900">{s.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
