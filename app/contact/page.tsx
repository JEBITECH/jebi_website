'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  EnvelopeIcon, 
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  HeartIcon,
  PaperAirplaneIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

import StaggeredList from '@/components/StaggeredList'

const inquiryTypes = [
  { value: 'services', label: 'Our Services' },
  { value: 'custom-development', label: 'Custom Development' },
  { value: 'implementation', label: 'Implementation and Integration Services' },
  { value: 'demo', label: 'Demo of our SaaS Product' },
  { value: 'trial', label: 'Book Trial' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'general', label: 'General Inquiry' }
]

const products = [
  { value: 'all', label: 'All Products' },
  { value: 'booking-engine', label: 'Booking Engine' },
  { value: 'channel-manager', label: 'Channel Manager' },
  { value: 'guest-handbook', label: 'Guest Handbook' },
  { value: 'virtue-connect', label: 'Virtue Connect ER' },
  { value: 'virtue-inspect', label: 'Virtue Inspect' }
]

const offices = [
  {
    name: "Pune Office",
    address: '12, Sweet Watervilla, Amanora\nPune, India',
    phone: '+91 20 1234 5678',
    email: 'sales@jebitech.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    timezone: 'Indian Standard Time (IST)',
    coordinates: { lat: 18.514794, lng: 73.94373 },
    isPrimary: true
  }
]

const socialChannels = [
  {
    name: 'LinkedIn',
    handle: '@jebi-softech-services',
    url: 'https://www.linkedin.com/company/jebi-softech-services/',
    description: 'Professional updates and industry insights',
    icon: 'linkedin'
  },
  {
    name: 'Twitter',
    handle: '@jebitech',
    url: 'https://twitter.com/jebitech',
    description: 'Latest news and product updates',
    icon: 'twitter'
  },
  {
    name: 'WhatsApp',
    handle: '+1 (555) 123-4567',
    url: 'https://wa.me/15551234567',
    description: 'Quick questions and instant support',
    icon: 'whatsapp'
  },
  {
    name: 'Slack',
    handle: 'jebitech-community',
    url: '#',
    description: 'Join our community workspace',
    icon: 'slack'
  }
]

const responseExpectations = [
  {
    type: 'Demo Requests',
    time: 'Within 2 hours',
    description: 'We\'ll schedule a personalized demo at your convenience',
    icon: RocketLaunchIcon
  },
  {
    type: 'General Inquiries',
    time: 'Within 4 hours',
    description: 'Our team will respond with detailed information',
    icon: ChatBubbleLeftRightIcon
  },
  {
    type: 'Technical Support',
    time: 'Within 1 hour',
    description: 'Priority support for existing clients',
    icon: UserGroupIcon
  },
  {
    type: 'Partnership Inquiries',
    time: 'Within 24 hours',
    description: 'Strategic partnerships team will reach out',
    icon: HeartIcon
  }
]

// Social Media Brand Icons
const SocialIcons = {
  linkedin: () => (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  twitter: () => (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  whatsapp: () => (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  ),
  slack: () => (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
    </svg>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    product: '',
    message: '',
    subscribe: false
  })
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type'
    if ((formData.inquiryType === 'demo' || formData.inquiryType === 'trial') && !formData.product) {
      newErrors.product = 'Please select a product'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (name === 'inquiryType') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        product: ''
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
      }))
    }
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }
  
  const showProductSelection = formData.inquiryType === 'demo' || formData.inquiryType === 'trial'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setFormStatus('submitting')
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setFormStatus('success')
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          inquiryType: '',
          product: '',
          message: '',
          subscribe: false
        })
        setFormStatus('idle')
      }, 3000)
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 3000)
    }
  }

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Hero + Contact Form Section - Redesigned with Animations */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50/30 pt-24 md:pt-32 lg:pt-30 pb-16 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
              backgroundSize: '48px 48px'
            }}></div>
          </div>
          <motion.div 
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-orange/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-purple/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          {/* Hero Header with Stagger Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5 text-primary-purple" />
              </motion.div>
              <span className="text-primary-purple text-sm font-semibold">Let's Connect</span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 font-heading mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Get in Touch with <span className="text-primary-orange">JebiTech</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Let's build smarter hospitality technology together. Whether you need a demo, consultation, or have questions, we're here to help transform your operations.
            </motion.p>
          </motion.div>

          {/* Main Content - Single Box with Enhanced Animations */}
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <motion.div 
                className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Contact Form - Takes 2 columns */}
                  <div className="lg:col-span-2 p-6 md:p-8 border-r border-gray-100">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 font-heading mb-1 flex items-center gap-2">
                        <SparklesIcon className="w-6 h-6 text-primary-orange" />
                        Send us a Message
                      </h2>
                      <p className="text-gray-600 text-sm mb-5">We typically respond within 2 hours during business hours</p>
                    </motion.div>
                  
                    <AnimatePresence mode="wait">
                      {formStatus === 'success' && (
                        <motion.div 
                          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
                          initial={{ opacity: 0, scale: 0.9, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: -10 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3" />
                          <span className="text-green-800">Message sent successfully! We'll get back to you soon.</span>
                        </motion.div>
                      )}
                      
                      {formStatus === 'error' && (
                        <motion.div 
                          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
                          initial={{ opacity: 0, scale: 0.9, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: -10 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <ExclamationCircleIcon className="h-5 w-5 text-red-600 mr-3" />
                          <span className="text-red-800">Something went wrong. Please try again.</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.div 
                          className="relative"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.9, duration: 0.4 }}
                          whileFocus={{ scale: 1.02 }}
                        >
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`peer w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all ${
                              errors.name ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder=" "
                          />
                          <label
                            htmlFor="name"
                            className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary-orange peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
                          >
                            Full Name *
                          </label>
                          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                        </motion.div>
                        
                        <motion.div 
                          className="relative"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.0, duration: 0.4 }}
                        >
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`peer w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all ${
                              errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder=" "
                          />
                          <label
                            htmlFor="email"
                            className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary-orange peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
                          >
                            Email Address *
                          </label>
                          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.div 
                          className="relative"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.1, duration: 0.4 }}
                        >
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all"
                            placeholder=" "
                          />
                          <label
                            htmlFor="phone"
                            className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary-orange peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
                          >
                            Phone Number
                          </label>
                        </motion.div>
                        
                        <motion.div 
                          className="relative"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2, duration: 0.4 }}
                        >
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className={`peer w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all ${
                              errors.company ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder=" "
                          />
                          <label
                            htmlFor="company"
                            className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary-orange peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
                          >
                            Company Name *
                          </label>
                          {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.4 }}
                      >
                        <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                          Inquiry Type *
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent ${
                            errors.inquiryType ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select inquiry type</option>
                          {inquiryTypes.map(type => (
                            <option key={type.value} value={type.value}>{type.label}</option>
                          ))}
                        </select>
                        {errors.inquiryType && <p className="mt-1 text-sm text-red-600">{errors.inquiryType}</p>}
                      </motion.div>

                      {/* Conditional Product Selection with Animation */}
                      <AnimatePresence>
                        {showProductSelection && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                              Select Product *
                            </label>
                            <select
                              id="product"
                              name="product"
                              value={formData.product}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent ${
                                errors.product ? 'border-red-500' : 'border-gray-300'
                              }`}
                            >
                              <option value="">Select a product</option>
                              {products.map(product => (
                                <option key={product.value} value={product.value}>{product.label}</option>
                              ))}
                            </select>
                            {errors.product && <p className="mt-1 text-sm text-red-600">{errors.product}</p>}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.4 }}
                      >
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project, requirements, or how we can help you..."
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent resize-none ${
                            errors.message ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                      </motion.div>

                      <motion.div 
                        className="flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.4 }}
                      >
                        <input
                          id="subscribe"
                          name="subscribe"
                          type="checkbox"
                          checked={formData.subscribe}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary-orange focus:ring-primary-orange border-gray-300 rounded"
                        />
                        <label htmlFor="subscribe" className="ml-2 block text-sm text-gray-700">
                          Subscribe to product updates and hospitality tech insights
                        </label>
                      </motion.div>

                      <motion.button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className={`w-full py-3 px-6 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                          formStatus === 'submitting'
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'btn-primary'
                        }`}
                        whileHover={formStatus !== 'submitting' ? { scale: 1.02 } : {}}
                        whileTap={formStatus !== 'submitting' ? { scale: 0.98 } : {}}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6, duration: 0.4 }}
                      >
                        <motion.div
                          animate={formStatus === 'submitting' ? { rotate: 360 } : {}}
                          transition={{ duration: 1, repeat: formStatus === 'submitting' ? Infinity : 0, ease: "linear" }}
                        >
                          <PaperAirplaneIcon className="w-5 h-5" />
                        </motion.div>
                        {formStatus === 'submitting' ? 'Sending Message...' : 'Send Message'}
                      </motion.button>
                    </form>
                  </div>

                  {/* Sidebar - Contact Info & Response Times with Stagger */}
                  <div className="lg:col-span-1 p-6 bg-gradient-to-br from-gray-50 to-purple-50/50 flex flex-col justify-between">
                    <div>
                      {/* Quick Contact Section */}
                      <motion.div 
                        className="mb-6 pb-6 border-b border-gray-200"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0, duration: 0.5 }}
                      >
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Contact</h3>
                        
                        <motion.a 
                          href="mailto:sales@jebitech.com" 
                          className="flex items-center gap-3 p-3 bg-gradient-to-br from-primary-purple to-purple-700 rounded-xl hover:shadow-lg transition-all group"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <EnvelopeIcon className="h-5 w-5 text-white" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs text-white/90 mb-0.5">Email Us</div>
                            <div className="font-semibold text-white text-sm">sales@jebitech.com</div>
                          </div>
                        </motion.a>
                      </motion.div>

                      {/* Response Times Section with Stagger */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                      >
                        <h3 className="text-base font-bold text-gray-900 mb-4">Response Times</h3>
                        <div className="space-y-3">
                          {responseExpectations.map((expectation, index) => (
                            <motion.div 
                              key={index} 
                              className="flex items-start gap-3 pb-3 border-b border-gray-200 last:border-0 last:pb-0"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1.3 + (index * 0.1), duration: 0.4 }}
                              whileHover={{ x: 5 }}
                            >
                              <motion.div 
                                className="w-8 h-8 bg-gradient-to-br from-primary-purple to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                              >
                                <expectation.icon className="h-4 w-4 text-white" />
                              </motion.div>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-gray-900 text-xs mb-0.5">{expectation.type}</div>
                                <div className="text-primary-orange font-bold text-xs mb-1">{expectation.time}</div>
                                <p className="text-gray-600 text-xs leading-relaxed">{expectation.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Spacer to push content alignment */}
                    <motion.div 
                      className="mt-6 pt-6 border-t border-gray-200"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8, duration: 0.5 }}
                    >
                      <div className="text-center text-xs text-gray-500 flex items-center justify-center gap-1">
                        <HeartIcon className="w-4 h-4 text-primary-orange" />
                        We're here to help you succeed
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2. Office Location - Animated Cards */}
      <div className="relative bg-white section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center mb-12"
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <BuildingOfficeIcon className="w-5 h-5 text-primary-purple" />
              <span className="text-primary-purple text-sm font-semibold">Our Office</span>
            </motion.div>
            <motion.h2 
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Visit Our Office
            </motion.h2>
            <motion.p 
              className="mt-6 text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Located in Pune, India - we're here to serve you
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Office Details Card with Hover Effects */}
            {offices.map((office, idx) => (
              <motion.div
                key={office.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <motion.div 
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 h-full flex flex-col relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    y: -5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {office.isPrimary && (
                    <motion.div 
                      className="absolute top-0 right-0"
                      initial={{ x: 100 }}
                      animate={{ x: 0 }}
                      transition={{ delay: 1, type: "spring", stiffness: 100 }}
                    >
                      <div className="bg-gradient-to-br from-primary-orange to-orange-600 text-white px-6 py-2 text-xs font-bold shadow-lg" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)' }}>
                        Headquarter
                      </div>
                    </motion.div>
                  )}
                  
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    {office.name}
                  </motion.h3>
                  
                  <div className="space-y-5 flex-1">
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-primary-purple to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 shadow-md"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <MapPinIcon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900 mb-1">Address</div>
                        <div className="text-gray-600 text-base whitespace-pre-line leading-relaxed">{office.address}</div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.0 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-primary-purple to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 shadow-md"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <EnvelopeIcon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900 mb-1">Email</div>
                        <a href={`mailto:${office.email}`} className="text-gray-600 text-base hover:text-primary-orange transition-colors font-medium break-all">
                          {office.email}
                        </a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-primary-purple to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 shadow-md"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <PhoneIcon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900 mb-1">Phone</div>
                        <a href={`tel:${office.phone}`} className="text-gray-600 text-base hover:text-primary-orange transition-colors font-medium">
                          {office.phone}
                        </a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-primary-purple to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 shadow-md"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <ClockIcon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900 mb-1">Business Hours</div>
                        <div className="text-gray-600 text-base font-medium">{office.hours}</div>
                        <div className="text-gray-500 text-sm mt-1">{office.timezone}</div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* CTA Button with Animation */}
                  <motion.div 
                    className="mt-6 pt-5 border-t border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.3 }}
                  >
                    <motion.a 
                      href="https://www.google.com/maps/dir/?api=1&destination=18.514794,73.94373"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-primary-purple to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MapPinIcon className="h-5 w-5" />
                      <span>Get Directions</span>
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}

            {/* Map with Fade In */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.div 
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full min-h-[500px]"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0!2d73.94373!3d18.514794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c22273d37a27%3A0xc0ebc21bde9b31f4!2sSweet%20Water%20Villas!5e0!3m2!1sen!2sus!4v1771312989069!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JebiTech Office Location"
                  className="w-full h-full"
                ></iframe>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3. Alternative Channels - Animated Cards */}
      <div className="relative bg-white section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5 text-primary-purple" />
              <span className="text-primary-purple text-sm font-semibold">Stay Connected</span>
            </motion.div>
            <motion.h2 
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Connect with Us
            </motion.h2>
            <motion.p 
              className="text-lg leading-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Choose your preferred way to get in touch and stay updated
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialChannels.map((channel, index) => {
              const IconComponent = SocialIcons[channel.icon as keyof typeof SocialIcons];
              
              return (
                <motion.a
                  key={channel.name}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 flex flex-col relative overflow-hidden h-full group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  {/* Hover gradient effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary-purple/5 to-primary-orange/5 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon Container with Rotation */}
                    <motion.div 
                      className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-purple to-purple-700 rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="text-white">
                        <IconComponent />
                      </div>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-3"
                      whileHover={{ color: "#FF6B35" }}
                      transition={{ duration: 0.3 }}
                    >
                      {channel.name}
                    </motion.h3>
                    
                    <motion.div 
                      className="text-primary-purple font-semibold mb-4 text-sm bg-purple-50 rounded-lg py-2 px-3 inline-block mx-auto"
                      whileHover={{ scale: 1.05 }}
                    >
                      {channel.handle}
                    </motion.div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">{channel.description}</p>
                    
                    {/* Arrow indicator with Animation */}
                    <motion.div 
                      className="flex items-center justify-center text-primary-orange"
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-sm font-semibold mr-2">Connect</span>
                      <motion.svg 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.div>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
