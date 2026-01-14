'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

interface OfferingDeliveringProps {
  className?: string
}

export default function OfferingDelivering({ className = '' }: OfferingDeliveringProps) {
  const [activeTab, setActiveTab] = useState<'offering' | 'delivering'>('offering')

  const offeringOptions = [
    { name: 'Property Manager', icon: '🏢', description: 'Comprehensive property management solutions' },
    { name: 'Vacation Rental Company', icon: '🏖️', description: 'End-to-end vacation rental platforms' },
    { name: 'Holiday Home/Service Apartment', icon: '🏠', description: 'Specialized accommodation management' },
    { name: 'Hotel', icon: '🏨', description: 'Full-service hotel management systems' },
    { name: 'OTA', icon: '🌐', description: 'Online travel agency solutions' }
  ]

  const deliveringOptions = [
    { name: 'PMS Tech Companies', icon: '💻', description: 'Property Management System providers' },
    { name: 'Channel Manager Companies', icon: '📊', description: 'Distribution and channel management' },
    { name: 'Booking Engine Providers', icon: '🎯', description: 'Direct booking technology companies' },
    { name: 'Hospitality SaaS', icon: '☁️', description: 'Software-as-a-Service platforms' },
    { name: 'PropTech Startups', icon: '🚀', description: 'Emerging property technology companies' }
  ]

  const currentOptions = activeTab === 'offering' ? offeringOptions : deliveringOptions

  return (
    <div className={className}>
      <AnimatedSection direction="up">
        <div className="text-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('offering')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'offering'
                  ? 'bg-primary-orange text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Offering
            </button>
            <button
              onClick={() => setActiveTab('delivering')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'delivering'
                  ? 'bg-primary-purple text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Delivering
            </button>
          </div>
        </div>
      </AnimatedSection>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6"
      >
        {currentOptions.map((option, index) => (
          <motion.div
            key={option.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover-lift card-hover"
          >
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{option.icon}</div>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{option.name}</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{option.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}