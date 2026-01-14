'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  stagger?: number
}

export default function TextReveal({ 
  children, 
  className = '', 
  delay = 0,
  stagger = 0.05 
}: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      setTimeout(() => setIsVisible(true), delay)
    }
  }, [inView, delay])

  const words = children.split(' ')

  return (
    <div ref={ref} className={`text-reveal ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden"
          style={{
            transitionDelay: isVisible ? `${index * stagger}s` : '0s'
          }}
        >
          <span
            className={`inline-block transition-transform duration-700 ease-out ${
              isVisible ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            {word}
            {index < words.length - 1 && '\u00A0'}
          </span>
        </span>
      ))}
    </div>
  )
}