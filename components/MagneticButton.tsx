'use client'

import { useRef, useEffect } from 'react'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  intensity?: number
  onClick?: () => void
  href?: string
}

export default function MagneticButton({ 
  children, 
  className = '', 
  intensity = 0.1,
  onClick,
  href
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      const moveX = x * intensity
      const moveY = y * intensity
      
      button.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`
    }

    const handleMouseLeave = () => {
      button.style.transform = 'translate(0px, 0px) scale(1)'
    }

    const handleMouseEnter = () => {
      button.style.transition = 'none'
    }

    const handleTransitionEnd = () => {
      button.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)
    button.addEventListener('mouseenter', handleMouseEnter)
    button.addEventListener('transitionend', handleTransitionEnd)

    // Set initial transition
    button.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
      button.removeEventListener('mouseenter', handleMouseEnter)
      button.removeEventListener('transitionend', handleTransitionEnd)
    }
  }, [intensity])

  const baseClasses = `
    inline-block cursor-pointer will-change-transform
    ${className}
  `

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={baseClasses}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      className={baseClasses}
    >
      {children}
    </button>
  )
}