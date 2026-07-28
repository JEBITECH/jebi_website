'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw, Code, Globe2, BarChart3, Brain, Zap, Boxes } from 'lucide-react'

interface OrbitNode {
  id: string
  title: string
  tag: string
  description: string
  icon: React.ElementType
  color: string
  position: { x: number; y: number }
}

// Six nodes arranged in an even hexagon around the hub — wide enough to avoid overlap
const nodes: OrbitNode[] = [
  {
    id: 'pms',
    title: 'Data Synchronization Across Multiple Platforms',
    tag: 'DATA SYNC',
    description: 'Keep Guesty and your business applications connected with accurate, real-time data synchronization, eliminating duplicate entries, reducing errors, and ensuring every team works with the latest information.',
    icon: RefreshCw,
    color: 'from-purple-500 to-purple-600',
    position: { x: 0, y: -230 },
  },
  {
    id: 'payments',
    title: 'Custom Workflows & Feature Development',
    tag: 'DEVELOPMENT',
    description: 'Extend Guesty with custom modules, workflows, and features tailored to your unique business processes, ensuring your technology supports your operations instead of forcing process changes.',
    icon: Code,
    color: 'from-orange-500 to-orange-600',
    position: { x: 260, y: -140 },
  },
  {
    id: 'ota',
    title: 'Third-Party Integrations & Connectivity',
    tag: 'INTEGRATIONS',
    description: 'Seamlessly integrate Guesty with payment providers, accounting systems, OTAs, CRM, smart devices, and other third-party platforms to create a connected and efficient technology ecosystem.',
    icon: Globe2,
    color: 'from-orange-500 to-orange-600',
    position: { x: 260, y: 140 },
  },
  {
    id: 'crm',
    title: 'Business Intelligence & Executive Dashboards',
    tag: 'ANALYTICS',
    description: 'Gain real-time visibility into reservations, operations, finance, staff productivity, and business performance through custom dashboards and reports designed around your key performance indicators.',
    icon: BarChart3,
    color: 'from-purple-500 to-purple-600',
    position: { x: 0, y: 280 },
  },
  {
    id: 'portal',
    title: 'Custom AI Intelligence Layer',
    tag: 'AI LAYER',
    description: 'Enhance your business with AI-driven automation, build specific to your needs.',
    icon: Brain,
    color: 'from-orange-500 to-orange-600',
    position: { x: -260, y: 140 },
  },
  {
    id: 'automation',
    title: 'Business Process Automation',
    tag: 'AUTOMATION',
    description: 'Automate repetitive operational tasks, approvals, notifications, and workflows to improve efficiency, reduce manual effort, minimize errors, and allow your team to focus on delivering exceptional guest experiences.',
    icon: Zap,
    color: 'from-purple-500 to-purple-600',
    position: { x: -260, y: -140 },
  },
]

export default function GuestyOrbitDiagram() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (isHovering) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === null) return 0
        return (prev + 1) % nodes.length
      })
    }, 3200)
    return () => clearInterval(interval)
  }, [isHovering])

  return (
    <div className="relative flex items-center justify-center h-[400px] sm:h-[580px] lg:h-[750px]">
      {/* Glow */}
      <motion.div
        className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-primary-orange/15 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Rotating dashed ring */}
      <motion.div
        className="absolute w-[160px] h-[160px] sm:w-[240px] sm:h-[240px] rounded-full border border-dashed border-primary-purple/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary-orange shadow-[0_0_10px_2px_rgba(255,107,53,0.7)]" />
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary-purple shadow-[0_0_8px_2px_rgba(74,26,92,0.6)]" />
      </motion.div>

      {/* Hub */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="z-20 w-24 h-28 sm:w-32 sm:h-36 md:w-40 md:h-44 bg-gradient-to-br from-primary-purple-dark to-primary-purple rounded-xl sm:rounded-2xl flex flex-col items-center justify-center p-2.5 sm:p-4 shadow-2xl border border-white/10"
      >
        <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-lg sm:rounded-xl flex items-center justify-center mb-1.5 sm:mb-3">
          <Boxes className="text-primary-orange" size={18} />
        </div>
        <h3 className="text-white text-xs sm:text-base font-bold">Guesty</h3>
        <p className="text-white/60 text-[8px] sm:text-[10px] uppercase tracking-widest mt-0.5 sm:mt-1 text-center">
          Custom Development
        </p>
      </motion.div>

      {/* Orbiting nodes */}
      {nodes.map((node, index) => (
        <OrbitNodeCard
          key={node.id}
          node={node}
          index={index}
          isActive={activeIndex === index}
          expandDown={node.position.y < 0}
          onHover={() => { setIsHovering(true); setActiveIndex(index) }}
          onLeave={() => { setIsHovering(false) }}
        />
      ))}
    </div>
  )
}

function OrbitNodeCard({
  node,
  index,
  isActive,
  expandDown,
  onHover,
  onLeave,
}: {
  node: OrbitNode
  index: number
  isActive: boolean
  expandDown: boolean
  onHover: () => void
  onLeave: () => void
}) {
  // Responsive positions
  const getResponsivePosition = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth
      if (width < 640) {
        return { x: node.position.x * 0.4, y: node.position.y * 0.4 }
      }
      if (width < 1024) {
        return { x: node.position.x * 0.58, y: node.position.y * 0.58 }
      }
    }
    return node.position
  }

  const position = getResponsivePosition()
  const Icon = node.icon

  return (
    <motion.div
      initial={{ x: position.x, y: position.y, opacity: 0 }}
      animate={{
        x: position.x,
        y: [position.y, position.y - 10, position.y],
        opacity: 1,
        scale: isActive ? 1.04 : 1,
      }}
      transition={{
        y: { duration: 3, delay: index * 0.35, repeat: Infinity, ease: 'easeInOut' },
        opacity: { duration: 0.6, delay: index * 0.1 },
      }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      className={`absolute w-[80px] sm:w-[120px] md:w-[160px] bg-gradient-to-br ${node.color} rounded-lg sm:rounded-xl flex flex-col items-center justify-center cursor-pointer shadow-lg p-2 sm:p-3 md:p-4 text-white text-center`}
      style={{
        zIndex: isActive ? 50 : 10,
        transformOrigin: expandDown ? 'top center' : 'bottom center',
      }}
    >
      {/* Show description above title for top cards when expanded */}
      {expandDown && (
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden hidden sm:block order-last"
            >
              <p className="text-[8px] md:text-[9px] mt-2 leading-snug text-white/90">{node.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      <span className="hidden sm:block text-[7px] sm:text-[8px] font-semibold tracking-widest text-white/70 mb-1">
        {node.tag}
      </span>
      <Icon size={16} className="mb-0.5 sm:mb-1 opacity-95" />
      <span className="font-semibold text-[8px] sm:text-[10px] md:text-xs leading-tight">{node.title}</span>

      {/* Show description below title for bottom/side cards */}
      {!expandDown && (
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden hidden sm:block"
            >
              <p className="text-[8px] md:text-[9px] mt-2 leading-snug text-white/90">{node.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  )
}
