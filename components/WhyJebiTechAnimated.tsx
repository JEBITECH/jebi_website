'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function WhyJebiTechAnimated() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const whyJebiTechPoints = [
    {
      number: '01',
      title: 'Team with 20 years of Experience in',
      subtitle: 'developing technology for hospitality Industry',
      color: '#9333EA'
    },
    {
      number: '02', 
      title: 'Worked with Clients with Complex business operations',
      subtitle: 'and solved it using Technology',
      color: '#9333EA'
    },
    {
      number: '03',
      title: 'Working Experience of Clients from Australia, Europe, UK',
      subtitle: 'and USA, giving us knowledge of different working, functions and rules of different locations.',
      color: '#06B6D4'
    },
    {
      number: '04',
      title: 'Experience of using Wide range of technology and hands on',
      subtitle: 'with latest technical knowledge',
      color: '#FF6B35'
    },
    {
      number: '05',
      title: 'Experience Tech team with great domain knowledge',
      subtitle: '',
      color: '#84CC16'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const circleVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const pointVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.8 },
    visible: { 
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  }

  return (
    <div className="relative w-full min-h-[600px] lg:min-h-[700px] bg-gray-50 rounded-3xl p-8 lg:p-12 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="relative w-full h-full"
      >
        {/* Background Dots */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full"></div>
          <div className="absolute top-32 right-32 w-2 h-2 bg-purple-400 rounded-full"></div>
          <div className="absolute bottom-40 left-40 w-2 h-2 bg-purple-400 rounded-full"></div>
          <div className="absolute top-1/2 right-20 w-2 h-2 bg-purple-400 rounded-full"></div>
        </div>

        {/* Central Technology Team Circle - LEFT SIDE */}
        <motion.div
          variants={circleVariants}
          className="absolute top-1/2 left-8 lg:left-16 transform -translate-y-1/2 z-10"
        >
          <div className="relative w-48 h-48 lg:w-56 lg:h-56">
            {/* Gradient Circle */}
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 200 200">
              <circle
                cx="100"
                cy="100"
                r="85"
                fill="none"
                stroke="url(#circleGradient)"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#84CC16" />
                  <stop offset="25%" stopColor="#FF6B35" />
                  <stop offset="50%" stopColor="#06B6D4" />
                  <stop offset="75%" stopColor="#9333EA" />
                  <stop offset="100%" stopColor="#84CC16" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white rounded-full shadow-lg border-4 border-gray-100 m-4">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 leading-tight">
                Technology
              </h3>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 leading-tight">
                Team
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Curved Connecting Path */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          <motion.path
            d="M 280 300 Q 400 200 500 150 Q 600 100 700 120 Q 800 140 900 180 Q 950 200 1000 240"
            fill="none"
            stroke="rgba(147, 51, 234, 0.3)"
            strokeWidth="3"
            strokeDasharray="8,8"
            variants={pathVariants}
          />
        </svg>

        {/* JebiTech Logo - TOP RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute top-8 right-8"
        >
          <div className="flex items-center gap-2 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
            <div className="w-6 h-6 bg-primary-orange rounded-md flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
            <span className="font-bold text-gray-900 text-sm">JEBITECH</span>
          </div>
        </motion.div>

        {/* Numbered Points - RIGHT SIDE */}
        <div className="absolute top-16 right-8 lg:right-16 space-y-8 lg:space-y-12 max-w-md">
          {whyJebiTechPoints.map((point, index) => (
            <motion.div
              key={point.number}
              variants={pointVariants}
              className="flex items-start gap-4"
              style={{ marginTop: index * 20 }}
            >
              {/* Number Circle */}
              <motion.div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                style={{ backgroundColor: point.color }}
                whileHover={{ scale: 1.1 }}
                animate={{
                  boxShadow: [
                    `0 4px 12px ${point.color}40`,
                    `0 8px 20px ${point.color}60`,
                    `0 4px 12px ${point.color}40`
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              >
                {point.number}
              </motion.div>

              {/* Content Card */}
              <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200 flex-1 hover:shadow-xl transition-all duration-300">
                <h4 className="font-semibold text-gray-900 text-sm mb-2 leading-tight">
                  {point.title}
                </h4>
                {point.subtitle && (
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {point.subtitle}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-40"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
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