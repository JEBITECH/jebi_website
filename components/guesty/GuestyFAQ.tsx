'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const faqs = [
  {
    q: 'Do you have an official partnership with Guesty?',
    a: 'We help businesses integrate and extend their Guesty ecosystem using available APIs and best practices. We are a technology implementation partner, not an official Guesty product.',
  },
  {
    q: "What's the difference between custom development and a dedicated team?",
    a: 'Custom development is a scoped project with a fixed deliverable. A dedicated team is an ongoing engagement where our engineers work as part of your team on your roadmap.',
  },
  {
    q: 'How is pricing structured?',
    a: 'Custom projects are quoted per scope after discovery. Dedicated team engagements are priced monthly per engineer based on role and seniority.',
  },
  {
    q: 'What does the engagement model look like?',
    a: 'We start with a discovery call, follow with a scoped proposal, then move into sprints with regular demos and transparent reporting.',
  },
  {
    q: 'How do you handle data security?',
    a: 'We follow industry-standard practices for access control, encryption and secure API handling, and can work within your existing security requirements.',
  },
  {
    q: 'What integrations can you build?',
    a: 'PMS, CRM, payment gateways, channel managers, accounting and ERP systems, OTA connectivity and other third-party APIs your business relies on.',
  },
  {
    q: 'How long do projects typically take?',
    a: 'Integration projects often run 4–10 weeks. Custom platform builds vary by scope and are estimated after discovery.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes. Engineers who built your system can stay on for maintenance, monitoring and future enhancements.',
  },
  {
    q: 'What technologies do you work with?',
    a: 'React, Next.js, Node.js, .NET, Java, Python, Flutter, AWS, Azure, Google Cloud, and modern API standards including REST and GraphQL.',
  },
  {
    q: 'How do we communicate during a project?',
    a: 'Regular standups, shared project boards and direct access to your engineering lead — no communication black box.',
  },
  {
    q: 'Can you scale the team up or down?',
    a: 'Yes, dedicated team size flexes with your roadmap, with reasonable notice for ramping up or down.',
  },
  {
    q: 'What size companies do you work with?',
    a: 'From single-operator vacation rental businesses to enterprise hospitality brands managing thousands of properties.',
  },
]

export default function GuestyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div id="faq" className="bg-white border-t border-gray-100 section-padding">
      <div className="container-custom px-4 sm:px-6 max-w-3xl mx-auto">
        <AnimatedSection direction="up">
          <div className="mb-10">
            <span className="inline-block font-mono text-xs text-primary-purple uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading">
              Questions, answered
            </h2>
          </div>
        </AnimatedSection>

        <div>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.q} className="border-b border-gray-200 py-5">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-5 text-left"
                >
                  <h4 className="text-[15.5px] font-semibold text-gray-900">{faq.q}</h4>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 text-primary-purple"
                  >
                    <Plus className="w-5 h-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-[14.5px] text-gray-600 leading-relaxed pt-3.5">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
