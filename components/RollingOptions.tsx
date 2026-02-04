'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, LucideIcon } from 'lucide-react'

interface RollingOption {
  id: string
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
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
  const [openAccordions, setOpenAccordions] = useState<number[]>([0]) // First item open by default on mobile

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

  const toggleAccordion = (index: number) => {
    setOpenAccordions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const getGradientColor = (index: number) => {
    const colors = [
      'from-purple-500 to-purple-600',
      'from-orange-500 to-orange-600',
      'from-blue-500 to-blue-600',
      'from-pink-500 to-pink-600'
    ]
    return colors[index % colors.length]
  }

  return (
    <div className={`${className}`}>
      {/* Mobile View - Accordion Cards */}
      <div className="block md:hidden space-y-3">
        {options.map((option, index) => {
          const isOpen = openAccordions.includes(index)
          return (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full bg-gradient-to-r ${getGradientColor(index)} p-4 flex items-center justify-between text-white transition-all duration-300`}
              >
                <div className="flex items-center gap-3">
                  <option.icon className="w-7 h-7 text-primary-purple flex-shrink-0" strokeWidth={2} />
                  <div className="text-left">
                    <h3 className="text-base font-bold leading-tight">{option.title}</h3>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence initial={true}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-gradient-to-b from-gray-50 to-white">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="h-1 w-12 bg-gradient-to-r from-primary-orange to-orange-400 rounded-full"></div>
                      </div>
                      <p className="text-sm text-primary-orange font-semibold mb-3">
                        {option.subtitle}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* Tablet & Desktop View - Tabbed Interface */}
      <div className="hidden md:block bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Option Tabs */}
        <div className="flex flex-wrap sm:flex-nowrap border-b border-gray-200 bg-gray-50">
          {options.map((option, index) => (
            <button
              key={option.id}
              onClick={() => handleOptionClick(index)}
              className={`flex-1 px-3 md:px-4 py-3 text-sm font-medium transition-all duration-300 min-w-0 ${currentIndex === index
                  ? 'bg-primary-orange text-white shadow-sm'
                  : 'text-gray-600 hover:text-primary-orange hover:bg-gray-50'
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <option.icon className="w-4 h-4 md:w-5 md:h-5 text-primary-purple flex-shrink-0" strokeWidth={2} />
                <span className="text-xs md:text-sm truncate leading-tight">{option.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 min-h-[250px] md:min-h-[300px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="mb-4">
                {(() => {
                  const IconComponent = options[currentIndex].icon;
                  return <IconComponent className="w-16 h-16 md:w-20 md:h-20 text-primary-purple mx-auto" strokeWidth={1.5} />;
                })()}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 px-2">
                {options[currentIndex].title}
              </h3>
              <p className="text-base md:text-lg text-primary-orange font-medium mb-4 px-2">
                {options[currentIndex].subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed text-base px-4">
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
                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-primary-orange w-8' : 'bg-gray-300 w-2'
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
    </div>
  )
}