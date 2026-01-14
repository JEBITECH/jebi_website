'use client'

import { useEffect } from 'react'

interface SmoothScrollProps {
  children: React.ReactNode
  speed?: number
}

export default function SmoothScroll({ children, speed = 1 }: SmoothScrollProps) {
  useEffect(() => {
    let currentScroll = 0
    let targetScroll = 0
    let ease = 0.1 * speed

    const updateScroll = () => {
      targetScroll = window.scrollY
      currentScroll += (targetScroll - currentScroll) * ease
      
      document.body.style.transform = `translateY(${-currentScroll}px)`
      
      requestAnimationFrame(updateScroll)
    }

    // Only enable smooth scroll on desktop
    const isDesktop = window.innerWidth > 768
    
    if (isDesktop) {
      document.body.style.position = 'fixed'
      document.body.style.top = '0'
      document.body.style.left = '0'
      document.body.style.width = '100%'
      document.body.style.height = '100vh'
      document.body.style.overflow = 'hidden'
      
      updateScroll()
    }

    return () => {
      if (isDesktop) {
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.left = ''
        document.body.style.width = ''
        document.body.style.height = ''
        document.body.style.overflow = ''
        document.body.style.transform = ''
      }
    }
  }, [speed])

  return <>{children}</>
}