'use client'

import AnimatedSection from '@/components/AnimatedSection'
import { 
  Smartphone, 
  RefreshCw, 
  MessageCircle, 
  Map, 
  Bot, 
  Zap, 
  Link2, 
  Palette, 
  BarChart3 
} from 'lucide-react'

const features = [
  {
    icon: Smartphone,
    title: 'Mobile-First Digital Handbook',
    description: 'Interactive guest handbook accessible instantly via QR code. Beautiful, fast, and fully optimized for any smartphone — no app download needed.',
    color: 'text-stayguide-blue',
    bg: 'bg-stayguide-blue/10',
  },
  {
    icon: RefreshCw,
    title: 'Real-Time Content Updates',
    description: 'Update Wi-Fi passwords, house rules, amenity status, and local recommendations in real time. Guests always see the latest information.',
    color: 'text-stayguide-green',
    bg: 'bg-stayguide-green/10',
  },
  {
    icon: MessageCircle,
    title: 'Built-In Direct Messaging',
    description: 'Seamless two-way messaging between guests and property managers. Resolve questions instantly without relying on WhatsApp or third-party apps.',
    color: 'text-stayguide-blue',
    bg: 'bg-stayguide-blue/10',
  },
  {
    icon: Map,
    title: 'Curated Local Guides',
    description: 'Personalized local recommendations with interactive maps, partner discounts, and emergency contacts. Guests explore confidently and spend locally.',
    color: 'text-stayguide-green',
    bg: 'bg-stayguide-green/10',
  },
  {
    icon: Bot,
    title: 'AI-Powered Instant Answers',
    description: 'A smart AI bot answers guest questions 24/7 — check-in times, parking, local tips, house rules — reducing host support load dramatically.',
    color: 'text-stayguide-blue',
    bg: 'bg-stayguide-blue/10',
  },
  {
    icon: Zap,
    title: 'Automated Pre & Post Stay',
    description: 'Scheduled pre-arrival messages, check-in reminders, and post-departure follow-ups — all automated to save time and improve guest impressions.',
    color: 'text-stayguide-green',
    bg: 'bg-stayguide-green/10',
  },
  {
    icon: Link2,
    title: 'PMS & Check-in Integration',
    description: 'Seamlessly integrates with your existing Property Management System and check-in tools. Plug into your current workflow with no disruption.',
    color: 'text-stayguide-blue',
    bg: 'bg-stayguide-blue/10',
  },
  {
    icon: Palette,
    title: 'Fully Branded Experience',
    description: 'Customize colors, logos, and content to match your property brand. Every guest touchpoint reflects your identity, not a generic platform.',
    color: 'text-stayguide-green',
    bg: 'bg-stayguide-green/10',
  },
  {
    icon: BarChart3,
    title: 'Guest Behavior Insights',
    description: 'AI-driven analytics reveal common guest questions, pain points, and engagement patterns — helping you continuously improve the guest experience.',
    color: 'text-stayguide-blue',
    bg: 'bg-stayguide-blue/10',
  },
]

export default function StayGuideFeatures() {
  return (
    <section id="features" className="py-20 md:py-28 bg-[#F4F4FB]">
      <div className="container-custom px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-stayguide-blue border border-stayguide-blue/20 bg-stayguide-blue/5 px-4 py-2 rounded-full mb-5">
              <Smartphone className="w-3.5 h-3.5" />
              Key Features
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 font-heading leading-tight mb-4">
              Everything Guests Need,{' '}
              <span className="text-stayguide-green">Right in Their Hands</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-gray-600 text-base sm:text-lg leading-7">
              From check-in to checkout, StayGuide keeps guests informed, connected, and
              delighted — no app download required.
            </p>
          </AnimatedSection>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} direction="up" delay={0.1 + i * 0.05}>
              <div className="group relative h-full p-6 rounded-2xl border border-gray-100 bg-white hover:border-stayguide-blue/20 hover:shadow-lg hover:shadow-stayguide-blue/5 transition-all duration-300">
                <div className={`w-11 h-11 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-6">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
