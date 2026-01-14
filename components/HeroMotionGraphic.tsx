'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function HeroMotionGraphic() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-purple via-purple-600 to-primary-purple rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-primary-orange/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-16 sm:w-24 h-16 sm:h-24 bg-white/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-primary-orange/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/4 right-1/4 w-8 sm:w-12 h-8 sm:h-12 bg-white/10 rounded-full blur-sm animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="relative z-10 w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto"
      >
        {/* Center Hub - JebiTech */}
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <div className="w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-gray-600 hover:border-primary-orange transition-all duration-300">
            <div className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 bg-primary-orange rounded-md sm:rounded-lg mb-1 sm:mb-2 flex items-center justify-center">
              <div className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 bg-white rounded-sm"></div>
            </div>
            <div className="text-white font-bold text-xs sm:text-sm lg:text-base">JebiTech</div>
            <div className="text-gray-300 text-xs sm:text-xs lg:text-sm text-center px-1 sm:px-2">Software, IT & AI solutions</div>
          </div>
        </motion.div>

        {/* Bookings Card - Top */}
        <motion.div
          variants={cardVariants}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 sm:-translate-y-4"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="w-20 sm:w-28 lg:w-32 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg sm:rounded-xl shadow-lg flex flex-col items-center justify-center text-white hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="text-lg sm:text-2xl lg:text-3xl mb-0 sm:mb-1">📅</div>
            <div className="text-xs sm:text-sm lg:text-base font-semibold">Bookings</div>
          </motion.div>
        </motion.div>

        {/* Accounting Card - Left */}
        <motion.div
          variants={cardVariants}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-4"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '1s' }}
            className="w-20 sm:w-28 lg:w-32 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-primary-orange to-orange-600 rounded-lg sm:rounded-xl shadow-lg flex flex-col items-center justify-center text-white hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="text-lg sm:text-2xl lg:text-3xl mb-0 sm:mb-1">💰</div>
            <div className="text-xs sm:text-sm lg:text-base font-semibold">Accounting</div>
          </motion.div>
        </motion.div>

        {/* Tasks Card - Right */}
        <motion.div
          variants={cardVariants}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-2 sm:translate-x-4"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '2s' }}
            className="w-20 sm:w-28 lg:w-32 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-primary-orange to-orange-600 rounded-lg sm:rounded-xl shadow-lg flex flex-col items-center justify-center text-white hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="text-lg sm:text-2xl lg:text-3xl mb-0 sm:mb-1">✅</div>
            <div className="text-xs sm:text-sm lg:text-base font-semibold">Tasks</div>
          </motion.div>
        </motion.div>

        {/* AI Inspection Card - Bottom */}
        <motion.div
          variants={cardVariants}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 sm:translate-y-4"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '3s' }}
            className="w-20 sm:w-28 lg:w-32 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg sm:rounded-xl shadow-lg flex flex-col items-center justify-center text-white hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="text-lg sm:text-2xl lg:text-3xl mb-0 sm:mb-1">🔍</div>
            <div className="text-xs sm:text-sm lg:text-base font-semibold">AI Inspection</div>
          </motion.div>
        </motion.div>

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
          {/* Top line */}
          <motion.line
            x1="50%" y1="20%" x2="50%" y2="35%"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          {/* Left line */}
          <motion.line
            x1="20%" y1="50%" x2="35%" y2="50%"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          />
          {/* Right line */}
          <motion.line
            x1="65%" y1="50%" x2="80%" y2="50%"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 2 }}
          />
          {/* Bottom line */}
          <motion.line
            x1="50%" y1="65%" x2="50%" y2="80%"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 2.5 }}
          />
        </svg>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/40 rounded-full"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${15 + Math.random() * 70}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}