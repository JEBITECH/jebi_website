'use client'

import { motion } from 'framer-motion'

const features = [
  '✦ Interactive Digital Handbook',
  '✦ AI-Powered Guest Assistant',
  '✦ Real-Time House Rules Updates',
  '✦ Built-In Direct Messaging',
  '✦ Curated Local Guides & Maps',
  '✦ PMS & Check-in Tool Integration',
  '✦ Automated Pre-arrival Instructions',
  '✦ On-Brand Guest Experience',
]

export default function StayGuideMarquee() {
  return (
    <div className="relative py-4 bg-gradient-to-r from-stayguide-blue via-stayguide-blue-dark to-stayguide-blue overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...features, ...features].map((feature, i) => (
            <span key={i} className="text-sm font-medium text-white/90 flex-shrink-0">
              {feature}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
