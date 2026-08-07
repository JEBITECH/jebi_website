'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { X, ArrowRight, MapPin, Calendar, Ticket } from 'lucide-react'
import Image from 'next/image'

const marqueeItems = [
  { icon: MapPin, text: "We're exhibiting at VRMA 26 Nashville" },
  { icon: Ticket, text: 'Booth #740' },
  { icon: Calendar, text: 'October 4–6, 2026' },
  { icon: MapPin, text: "We're exhibiting at VRMA 26 Nashville" },
  { icon: Ticket, text: 'Booth #740' },
  { icon: Calendar, text: 'October 4–6, 2026' },
]

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#4D3E5B] border-b border-white/[0.1]">
      <Link href="/vrma26" className="block">
        <div className="relative flex items-center py-2 px-4 overflow-hidden">
          {/* Left: Proud Member + VRMA badge + Booth */}
          <div className="flex items-center gap-2.5 flex-shrink-0 pr-4 border-r border-white/20 mr-4">
            <span className="text-[11px] text-white/80 font-medium whitespace-nowrap">Proud Member of</span>
            <Image
              src="/assets/vrma/1.png"
              alt="VRMA"
              width={28}
              height={28}
              className="object-contain rounded-md"
            />
            <span className="relative px-2.5 py-1 rounded-md text-white text-[11px] font-bold whitespace-nowrap animate-[booth-glow_3s_ease-in-out_infinite] border border-white/20">
              Booth #740
            </span>
          </div>

          {/* Center: Scrolling marquee text */}
          <div className="flex-1 overflow-hidden">
            <div className="flex whitespace-nowrap">
              <motion.div
                className="flex gap-6 items-center"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              >
                {[...marqueeItems, ...marqueeItems].map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 text-[12px] font-medium text-white/80 flex-shrink-0">
                    <item.icon className="w-3 h-3 text-white/50" />
                    {item.text}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex-shrink-0 pl-4 border-l border-white/20 ml-4 mr-8">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-white hover:text-primary-orange transition-colors whitespace-nowrap">
              Details
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </Link>

      <button
        onClick={(e) => { e.preventDefault(); setIsVisible(false); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all z-10"
        aria-label="Dismiss announcement"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  )
}
