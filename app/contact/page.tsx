'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

import AnimatedSection from '@/components/AnimatedSection'
import StaggeredList from '@/components/StaggeredList'
import FloatingElements from '@/components/FloatingElements'

const inquiryTypes = [
  { value: 'demo', label: 'Request a Demo' },
  { value: 'consultation', label: 'Free Consultation' },
  { value: 'partnership', label: 'Partnership Inquiry' },
  { value: 'support', label: 'Technical Support' },
  { value: 'careers', label: 'Career Opportunities' },
  { value: 'general', label: 'General Inquiry' }
]

const offices = [
  {
    name: 'San Francisco HQ',
    address: '123 Tech Street, Suite 400\nSan Francisco, CA 94105',
    phone: '+1 (555) 123-4567',
    email: 'sf@jebitech.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST',
    timezone: 'Pacific Time',
    coordinates: { lat: 37.7749, lng: -122.4194 },
    isPrimary: true
  },
  {
    name: 'London Office',
    address: '45 Innovation Square\nLondon EC2A 4DP, UK',
    phone: '+44 20 7123 4567',
    email: 'london@jebitech.com',
    hours: 'Mon-Fri: 9:00 AM - 5:30 PM GMT',
    timezone: 'Greenwich Mean Time',
    coordinates: { lat: 51.5074, lng: -0.1278 },
    isPrimary: false
  },
  {
    name: 'Singapore Office',
    address: '88 Marina Bay Drive\nSingapore 018956',
    phone: '+65 6123 4567',
    email: 'singapore@jebitech.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM SGT',
    timezone: 'Singapore Time',
    coordinates: { lat: 1.3521, lng: 103.8198 },
    isPrimary: false
  }
]

const socialChannels = [
  {
    name: 'LinkedIn',
    handle: '@jebitech',
    url: 'https://linkedin.com/company/jebitech',
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
    message: '',
    subscribe: false
  })
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const formElement = document.getElementById('contact-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Update URL hash without triggering navigation
      window.history.pushState(null, '', '#contact-form')
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setFormStatus('submitting')
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setFormStatus('success')
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          inquiryType: '',
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
      {/* 1. Hero Section */}
      <div className="relative isolate px-6 pt-32 pb-16 md:pt-36 md:pb-20 lg:px-8">
        <FloatingElements />
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
              backgroundSize: '48px 48px'
            }}></div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-purple/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left" className="flex">
              <div className="flex flex-col justify-center w-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-6 w-fit">
                  <ChatBubbleLeftRightIcon className="w-5 h-5 text-primary-purple" />
                  <span className="text-primary-purple text-sm font-semibold">Let's Connect</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-heading mb-6">
                  Get in Touch with <span className="text-primary-orange">JebiTech</span>
                </h1>
                <p className="text-xl leading-8 text-gray-600 mb-10">
                  Let's build smarter hospitality technology together. Whether you need a demo, 
                  consultation, or have questions, we're here to help transform your operations.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link href="#contact-form" onClick={scrollToForm} className="btn-primary text-lg px-8 py-4">
                    Request Demo
                  </Link>
                  <Link href="#contact-form" onClick={scrollToForm} className="btn-secondary text-lg px-8 py-4">
                    Talk to Experts
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={0.2} className="flex">
              <div className="w-full">
                {/* Collaboration Cards */}
                <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100 w-full h-full flex flex-col justify-center">
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center h-40">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-purple to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                        <BuildingOfficeIcon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-base font-bold text-gray-900">Your Business</div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center h-40">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-purple to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                        <UserGroupIcon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-base font-bold text-gray-900">Our Experts</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary-orange text-white rounded-xl p-8 font-semibold shadow-lg h-40 flex flex-col items-center justify-center">
                      <RocketLaunchIcon className="h-10 w-10 mx-auto mb-4" />
                      <div className="text-xl mb-2">Successful Partnership</div>
                      <div className="text-base text-white/90">Transforming hospitality operations together</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* 2. Contact Form Section */}
      <div id="contact-form" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Contact Form */}
            <AnimatedSection direction="left" className="flex">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 w-full flex flex-col">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-2">
                  Send us a Message
                </h2>
                <p className="text-gray-600 mb-8">Fill out the form and we'll get back to you shortly</p>
                  
                  {formStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-green-800">Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  )}
                  
                  {formStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                      <ExclamationCircleIcon className="h-5 w-5 text-red-600 mr-3" />
                      <span className="text-red-800">Something went wrong. Please try again.</span>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="relative">
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
                      </div>
                      
                      <div className="relative">
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
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="relative">
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
                      </div>
                      
                      <div className="relative">
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
                      </div>
                    </div>

                    <div>
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
                    </div>

                    <div className="flex-1 flex flex-col">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, requirements, or how we can help you..."
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent flex-1 ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                    </div>

                    <div className="flex items-center">
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
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                        formStatus === 'submitting'
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'btn-primary'
                      }`}
                    >
                      {formStatus === 'submitting' ? 'Sending Message...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </AnimatedSection>

              {/* Response Expectations */}
              <AnimatedSection direction="right" delay={0.2} className="flex">
                <div className="w-full flex flex-col">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-2">
                    What to Expect
                  </h2>
                  <p className="text-gray-600 mb-8">
                    We understand that time is valuable in hospitality. Here's how quickly 
                    you can expect to hear from our team:
                  </p>
                  
                  <div className="space-y-4 flex-1 flex flex-col justify-between">
                    {responseExpectations.map((expectation, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex-1 flex items-start">
                        <div className="flex items-start gap-4 w-full">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-purple to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                            <expectation.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-1">{expectation.type}</h3>
                            <div className="text-primary-orange font-semibold text-sm mb-2">{expectation.time}</div>
                            <p className="text-gray-600 text-sm leading-relaxed">{expectation.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>

      {/* 3. Contact Details & Offices */}
      <div className="relative bg-white section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-6">
                <BuildingOfficeIcon className="w-5 h-5 text-primary-purple" />
                <span className="text-primary-purple text-sm font-semibold">Global Presence</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                Our Global Offices
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                With offices across three continents, we provide 24/7 support and local expertise
              </p>
            </div>
          </AnimatedSection>
          
          <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {offices.map((office) => (
              <div key={office.name} className="flex">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col w-full relative overflow-hidden">
                  {/* Headquarters Corner Badge */}
                  {office.isPrimary && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-gradient-to-br from-primary-orange to-orange-600 text-white px-6 py-2 text-xs font-bold shadow-lg" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)' }}>
                        Headquarter
                      </div>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">{office.name}</h3>
                  
                  <div className="space-y-4 flex-1">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-purple to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 shadow-md">
                        <MapPinIcon className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-gray-600 text-sm whitespace-pre-line leading-relaxed">{office.address}</div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-purple to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 shadow-md">
                        <PhoneIcon className="h-5 w-5 text-white" />
                      </div>
                      <a href={`tel:${office.phone}`} className="text-gray-600 text-sm hover:text-primary-orange transition-colors font-medium">
                        {office.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-purple to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 shadow-md">
                        <EnvelopeIcon className="h-5 w-5 text-white" />
                      </div>
                      <a href={`mailto:${office.email}`} className="text-gray-600 text-sm hover:text-primary-orange transition-colors font-medium">
                        {office.email}
                      </a>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-purple to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 shadow-md">
                        <ClockIcon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-gray-600 text-sm font-medium">{office.hours}</div>
                        <div className="text-gray-500 text-xs mt-1">{office.timezone}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </StaggeredList>
        </div>
      </div>

      {/* 4. Map Section */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #FF6B35 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-6">
                <GlobeAltIcon className="w-5 h-5 text-primary-purple" />
                <span className="text-primary-purple text-sm font-semibold">Worldwide Coverage</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                Find Us on the Map
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Strategically located to serve you better across different time zones
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="h-[500px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14243827845!2d-122.50764019453125!3d37.75767381874453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JebiTech Office Locations"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* 5. Alternative Channels */}
      <div className="relative bg-white section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-6">
                <ChatBubbleLeftRightIcon className="w-5 h-5 text-primary-purple" />
                <span className="text-primary-purple text-sm font-semibold">Stay Connected</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading mb-4">
                Connect with Us
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                Choose your preferred way to get in touch and stay updated
              </p>
            </div>
          </AnimatedSection>
          
          <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialChannels.map((channel) => {
              const IconComponent = SocialIcons[channel.icon as keyof typeof SocialIcons];
              
              return (
                <a
                  key={channel.name}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group flex flex-col relative overflow-hidden h-full"
                >
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/5 to-primary-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon Container */}
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-purple to-purple-700 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <div className="text-white">
                        <IconComponent />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-orange transition-colors">
                      {channel.name}
                    </h3>
                    <div className="text-primary-purple font-semibold mb-4 text-sm bg-purple-50 rounded-lg py-2 px-3 inline-block mx-auto">
                      {channel.handle}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">{channel.description}</p>
                    
                    {/* Arrow indicator */}
                    <div className="flex items-center justify-center text-primary-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-semibold mr-2">Connect</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              )
            })}
          </StaggeredList>
        </div>
      </div>

      {/* 6. Final CTA */}
      <div className="relative bg-gradient-to-br from-primary-purple via-purple-700 to-primary-purple section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-orange/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-3 h-3 bg-primary-orange/30 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-20 left-40 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-40 right-20 w-4 h-4 bg-primary-orange/30 rounded-full animate-pulse delay-300"></div>
        
        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-8 backdrop-blur-sm">
                <RocketLaunchIcon className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-semibold">Let's Get Started</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Start Your Project With Us
              </h2>
              
              <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Ready to transform your hospitality operations? Let's discuss your needs and build something amazing together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="#contact-form" 
                  onClick={scrollToForm} 
                  className="group bg-white text-primary-purple px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl hover:-translate-y-1 flex items-center gap-3"
                >
                  <span>Request Demo</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  href="#contact-form" 
                  onClick={scrollToForm} 
                  className="group border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-3"
                >
                  <span>Talk to Experts</span>
                  <ChatBubbleLeftRightIcon className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <div className="text-white/80 text-sm">Support Available</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">2hrs</div>
                    <div className="text-white/80 text-sm">Response Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">100+</div>
                    <div className="text-white/80 text-sm">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                    <div className="text-white/80 text-sm">Uptime SLA</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}