'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Layers, CreditCard, Globe2, Users, Home, Zap, Boxes } from 'lucide-react'

interface OrbitNode {
  id: string
  title: string
  tag: string
  description: string
  icon: React.ElementType
  color: string
  position: { x: number; y: number }
}

// Six nodes arranged in an even hexagon around the hub
const nodes: OrbitNode[] = [
  {
    id: 'pms',
    title: 'PMS Sync',
    tag: 'PROPERTY MGMT',
    description: 'Two-way sync between Guesty and your property management system.',
    icon: Layers,
    color: 'from-purple-500 to-purple-600',
    position: { x: 0, y: -200 },
  },
  {
    id: 'payments',
    title: 'Payments',
    tag: 'GATEWAY',
    description: 'Custom payment gateway integrations built around your billing flow.',
    icon: CreditCard,
    color: 'from-orange-500 to-orange-600',
    position: { x: 173, y: -100 },
  },
  {
    id: 'ota',
    title: 'OTA Channels',
    tag: 'CONNECTIVITY',
    description: 'Channel manager connections keeping every listing in sync.',
    icon: Globe2,
    color: 'from-orange-500 to-orange-600',
    position: { x: 173, y: 100 },
  },
  {
    id: 'crm',
    title: 'Guest CRM',
    tag: 'LIFECYCLE',
    description: 'Guest lifecycle tooling that plugs into your existing CRM.',
    icon: Users,
    color: 'from-purple-500 to-purple-600',
    position: { x: 0, y: 200 },
  },
  {
    id: 'portal',
    title: 'Owner Portal',
    tag: 'SELF-SERVICE',
    description: 'Branded owner and guest portals built on live Guesty data.',
    icon: Home,
    color: 'from-orange-500 to-orange-600',
    position: { x: -173, y: 100 },
  },
  {
    id: 'automation',
    title: 'Automation',
    tag: 'AI LAYER',
    description: 'Workflow automation and AI tooling layered on top of your stack.',
    icon: Zap,
    color: 'from-purple-500 to-purple-600',
    position: { x: -173, y: -100 },
  },
]

export default function GuestyOrbitDiagram() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === null) return 0
        return (prev + 1) % nodes.length
      })
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex items-center justify-center h-[320px] sm:h-[440px] lg:h-[560px]">
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
          Core Reservation System
        </p>
      </motion.div>

      {/* Orbiting nodes */}
      {nodes.map((node, index) => (
        <OrbitNodeCard
          key={node.id}
          node={node}
          index={index}
          isActive={activeIndex === index}
          onHover={() => setActiveIndex(null)}
        />
      ))}
    </div>
  )
}

function OrbitNodeCard({
  node,
  index,
  isActive,
  onHover,
}: {
  node: OrbitNode
  index: number
  isActive: boolean
  onHover: () => void
}) {
  const [isHovered, setIsHovered] = useState(false)

  // Responsive positions — tighter on mobile
  const getResponsivePosition = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth
      if (width < 640) {
        return { x: node.position.x * 0.42, y: node.position.y * 0.42 }
      }
      if (width < 1024) {
        return { x: node.position.x * 0.6, y: node.position.y * 0.6 }
      }
    }
    return node.position
  }

  const position = getResponsivePosition()
  const showDescription = isHovered || isActive
  const Icon = node.icon

  return (
    <motion.div
      initial={{ x: position.x, y: position.y, opacity: 0 }}
      animate={{
        x: position.x,
        y: [position.y, position.y - 10, position.y],
        opacity: 1,
        scale: showDescription ? 1.08 : 1,
      }}
      transition={{
        y: { duration: 3, delay: index * 0.35, repeat: Infinity, ease: 'easeInOut' },
        opacity: { duration: 0.6, delay: index * 0.1 },
      }}
      onHoverStart={() => {
        setIsHovered(true)
        onHover()
      }}
      onHoverEnd={() => setIsHovered(false)}
      className={`absolute w-[72px] sm:w-[100px] md:w-[124px] bg-gradient-to-br ${node.color} rounded-lg sm:rounded-xl flex flex-col items-center justify-center cursor-pointer shadow-lg p-2 sm:p-3 text-white text-center`}
      style={{ zIndex: showDescription ? 50 : 10 }}
    >
      <span className="hidden sm:block text-[7px] sm:text-[8px] font-semibold tracking-widest text-white/70 mb-1">
        {node.tag}
      </span>
      <Icon size={14} className="mb-0.5 sm:mb-1 opacity-95" />
      <span className="font-semibold text-[9px] sm:text-xs leading-tight">{node.title}</span>

      <AnimatePresence>
        {showDescription && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden hidden sm:block"
          >
            <p className="text-[9px] mt-2 leading-snug text-white/90">{node.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
