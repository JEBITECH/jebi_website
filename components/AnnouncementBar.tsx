'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { X, ArrowRight } from 'lucide-react'
import gsap from 'gsap'

function AnnouncementText() {
  return (
    <Link href="/vrma" className="inline-flex items-center gap-3 group whitespace-nowrap">
      <span className="relative flex h-2 w-2 flex-shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
      </span>
      <span className="text-[13px] text-white font-medium">
        We&apos;re exhibiting at{' '}
        <span className="font-bold">VRMA 26 Nashville</span>
        <span className="text-white/70 mx-1.5">·</span>
        <span className="text-white/70">Oct 4–6, 2026</span>
      </span>
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 border border-white/30 text-[11px] font-semibold text-white group-hover:bg-white/30 transition-all">
        Details
        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
      </span>
    </Link>
  )
}

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const tweenRef = useRef<gsap.core.Tween | null>(null)

  const setupAnimation = useCallback(() => {
    if (!containerRef.current || !textRef.current) return

    if (tweenRef.current) tweenRef.current.kill()

    const containerWidth = containerRef.current.offsetWidth
    const textWidth = textRef.current.offsetWidth

    const speed = 60
    const totalDistance = containerWidth + textWidth
    const duration = totalDistance / speed

    // Start from right edge, move to fully off left, repeat instantly
    tweenRef.current = gsap.fromTo(
      textRef.current,
      { x: containerWidth },
      {
        x: -textWidth,
        duration,
        ease: 'none',
        repeat: -1,
      }
    )
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(setupAnimation, 100)
    window.addEventListener('resize', setupAnimation)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', setupAnimation)
      if (tweenRef.current) tweenRef.current.kill()
    }
  }, [isVisible, setupAnimation])

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#2563EB] border-b border-white/[0.1]">
      <div className="relative flex items-center py-3.5">
        <div
          ref={containerRef}
          className="overflow-hidden flex-1 mr-10 relative"
          onMouseEnter={() => tweenRef.current?.pause()}
          onMouseLeave={() => tweenRef.current?.resume()}
        >
          <div ref={textRef} className="absolute left-0 top-1/2 -translate-y-1/2 will-change-transform">
            <AnnouncementText />
          </div>
          {/* Invisible spacer for height */}
          <div className="invisible pointer-events-none">
            <AnnouncementText />
          </div>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/[0.12] transition-all z-10"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}
