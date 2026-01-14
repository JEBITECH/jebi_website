'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface RollingOption {
  id: string
  title: string
  subtitle: string
  description: string
  icon: string
}

interface RollingOptionsProps {
  options: RollingOption[]
  interval?: number
  className?: string
}

export default function RollingOptions({ 
  options, 
  interval = 3000, 
  className = '' 
}: RollingOptionsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % options.length)
    }, interval)

    return () => clearInterval(timer)
  }, [options.length, interval, isAutoPlaying])

  const handleOptionClick = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className={`bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden ${className}`}>
      {/* Option Tabs */}
      <div className="flex flex-wrap sm:flex-nowrap border-b border-gray-200">
        {options.map((option, index) => (
          <button
            key={option.id}
            onClick={() => handleOptionClick(index)}
            className={`flex-1 px-3 sm:px-4 py-3 text-sm font-medium transition-all duration-300 min-w-0 ${
              currentIndex === index
                ? 'bg-primary-orange text-white shadow-sm'
                : 'text-gray-600 hover:text-primary-orange hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-center gap-1 sm:gap-2">
              <span className="text-base sm:text-lg">{option.icon}</span>
              <span className="text-xs sm:text-sm truncate">{option.title}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-8 min-h-[200px] sm:min-h-[250px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="text-4xl sm:text-5xl mb-4">{options[currentIndex].icon}</div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              {options[currentIndex].title}
            </h3>
            <p className="text-base sm:text-lg text-primary-orange font-medium mb-4">
              {options[currentIndex].subtitle}
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              {options[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {options.map((_, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-primary-orange w-8' : 'bg-gray-300 w-2'
              }`}
            />
          ))}
        </div>
        
        {/* Auto-play indicator */}
        {isAutoPlaying && (
          <div className="absolute top-4 right-4">
            <div className="w-2 h-2 bg-primary-orange rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  )
}