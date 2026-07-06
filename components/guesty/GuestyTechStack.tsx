'use client'

import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const techStack = [
  'React',
  'Next.js',
  'Angular',
  'Node.js',
  '.NET',
  'Java',
  'Python',
  'Flutter',
  'React Native',
  'AWS',
  'Azure',
  'Google Cloud',
  'Docker',
  'Kubernetes',
  'PostgreSQL',
  'MongoDB',
  'REST APIs',
  'GraphQL',
  'OpenAI',
  'Applied AI',
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
}

export default function GuestyTechStack() {
  return (
    <div className="relative bg-white section-padding overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(74,26,92,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,107,53,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-custom px-4 sm:px-6 relative z-10">
        <AnimatedSection direction="up">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-purple/5 border border-primary-purple/15 rounded-full mb-5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <Cpu className="w-4 h-4 text-primary-purple" />
              <span className="text-primary-purple text-xs font-semibold uppercase tracking-wider">
                Technology expertise
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading mb-4">
              The stack behind your integration
            </h2>
            <p className="text-base sm:text-lg leading-7 text-gray-500">
              Modern, cloud-native tooling chosen for reliability at hospitality scale.
            </p>
          </div>
        </AnimatedSection>

        {/* Tech pills — centered flex wrap */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech}
              variants={item}
              whileHover={{ y: -4, scale: 1.06, boxShadow: '0 12px 30px -8px rgba(74,26,92,0.18)' }}
              transition={{ duration: 0.25 }}
              className="px-5 py-3 rounded-xl bg-white border border-gray-200 text-[14px] font-semibold text-gray-700 cursor-default hover:border-primary-purple/30 hover:text-primary-purple hover:bg-primary-purple/[0.03] transition-colors duration-200 shadow-sm"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
