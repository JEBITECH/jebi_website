'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X, ArrowRight } from 'lucide-react'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#2563EB] border-b border-white/[0.1]">
      <div className="relative flex items-center justify-center py-2.5 px-4">
        <Link href="/vrma" className="relative inline-flex items-center gap-3 group">
          {/* Pulsing live dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>

          <span className="text-[13px] text-white font-medium">
            We&apos;re exhibiting at{' '}
            <span className="font-bold">VRMA 26 Nashville</span>
            <span className="hidden sm:inline text-white/70 mx-1.5">·</span>
            <span className="hidden sm:inline text-white/70">Oct 4–6, 2026</span>
          </span>

          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 border border-white/30 text-[11px] font-semibold text-white group-hover:bg-white/30 transition-all">
            Details
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </Link>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/[0.12] transition-all"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}
