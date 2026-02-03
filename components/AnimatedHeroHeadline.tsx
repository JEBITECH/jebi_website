'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AnimatedHeroHeadline = () => {
  const [state, setState] = useState(0)

  const states = [
    {
      col1: 'Offering',
      col3: 'property managers',
      color: 'text-primary-orange'
    },
    {
      col1: 'Delivering',
      col3: 'hospitality tech companies',
      color: 'text-primary-purple'
    }
  ]

  const col2 = 'centralized, end-to-end management for'

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => (prev + 1) % states.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const currentState = states[state]

  return (
    <div>
      {/* Visually hidden fallback for screen readers */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        A strategic growth partner, {currentState.col1} {col2} {currentState.col3}
      </div>

      {/* Visible animated headline */}
      <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-900 max-w-7xl">
        <span className="block mb-2 sm:mb-3 text-lg sm:text-xl md:text-2xl font-medium">
          A strategic growth partner,{' '}
          <motion.span
            key={`inline-${state}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="inline"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className={`font-semibold ${currentState.color} transition-colors duration-500`}
            >
              {currentState.col1}
            </motion.span>
            {' '}
            <span className="text-gray-900">centralized,</span>
          </motion.span>
        </span>

        <motion.span
          key={`line2-${state}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.15 }}
          className="inline-block"
        >
          <span className="text-gray-900 text-lg sm:text-xl md:text-2xl font-medium">end-to-end management for</span>
          {' '}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.35 }}
            className={`font-semibold ${currentState.color} transition-colors duration-500 text-lg sm:text-xl md:text-2xl`}
          >
            {currentState.col3}
          </motion.span>
        </motion.span>
      </p>
    </div>
  )
}

export default AnimatedHeroHeadline
