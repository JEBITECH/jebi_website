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
import ParallaxSection from '@/components/ParallaxSection'
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
    icon: '💼',
    description: 'Professional updates and industry insights'
  },
  {
    name: 'Twitter',
    handle: '@jebitech',
    url: 'https://twitter.com/jebitech',
    icon: '🐦',
    description: 'Latest news and product updates'
  },
  {
    name: 'WhatsApp',
    handle: '+1 (555) 123-4567',
    url: 'https://wa.me/15551234567',
    icon: '💬',
    description: 'Quick questions and instant support'
  },
  {
    name: 'Slack',
    handle: 'jebitech-community',
    url: '#',
    icon: '💬',
    description: 'Join our community workspace'
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
      <div className="relative isolate px-6 pt-20 md:pt-24 lg:px-8 min-h-screen flex items-center">
        <FloatingElements />
        
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-primary-orange/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-heading">
                  Get in Touch with <span className="text-primary-orange">JebiTech</span>
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  Let's build smarter hospitality technology together. Whether you need a demo, 
                  consultation, or have questions, we're here to help transform your operations.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link href="#contact-form" className="btn-primary text-lg px-8 py-4 hover-glow">
                    Request Demo
                  </Link>
                  <Link href="#contact-form" className="btn-secondary text-lg px-8 py-4">
                    Talk to Experts
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={0.3}>
              <div className="relative">
                {/* Collaboration Illustration */}
                <div className="bg-gradient-to-br from-primary-purple/10 to-primary-orange/10 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                      <BuildingOfficeIcon className="h-8 w-8 text-primary-orange mx-auto mb-2" />
                      <div className="text-sm font-semibold text-gray-900">Your Business</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                      <UserGroupIcon className="h-8 w-8 text-primary-purple mx-auto mb-2" />
                      <div className="text-sm font-semibold text-gray-900">Our Experts</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary-orange text-white rounded-lg p-4 font-semibold mb-4">
                      <RocketLaunchIcon className="h-6 w-6 mx-auto mb-2" />
                      Successful Partnership
                    </div>
                    <div className="text-sm text-gray-600">Transforming hospitality operations together</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* 2. Contact Form Section */}
      <ParallaxSection speed={0.3}>
        <div id="contact-form" className="bg-secondary-gray section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <AnimatedSection direction="left">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 font-heading mb-6">
                    Send us a Message
                  </h2>
                  
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
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
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

                    <div>
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
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent ${
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
                          : 'btn-primary hover-glow'
                      }`}
                    >
                      {formStatus === 'submitting' ? 'Sending Message...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </AnimatedSection>

              {/* Response Expectations */}
              <AnimatedSection direction="right" delay={0.3}>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 font-heading mb-6">
                    What to Expect
                  </h2>
                  <p className="text-gray-600 mb-8">
                    We understand that time is valuable in hospitality. Here's how quickly 
                    you can expect to hear from our team:
                  </p>
                  
                  <div className="space-y-6">
                    {responseExpectations.map((expectation, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-sm card-hover">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <expectation.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{expectation.type}</h3>
                            <div className="text-primary-orange font-medium mb-2">{expectation.time}</div>
                            <p className="text-gray-600 text-sm">{expectation.description}</p>
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
      </ParallaxSection>

      {/* 3. Contact Details & Offices */}
      <div className="bg-white section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                Our Global Offices
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                With offices across three continents, we provide 24/7 support and local expertise
              </p>
            </div>
          </AnimatedSection>
          
          <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <div key={office.name} className={`bg-secondary-gray rounded-xl p-6 card-hover ${
                office.isPrimary ? 'ring-2 ring-primary-orange' : ''
              }`}>
                {office.isPrimary && (
                  <div className="bg-primary-orange text-white px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
                    Headquarters
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{office.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPinIcon className="h-5 w-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-gray-600 text-sm whitespace-pre-line">{office.address}</div>
                  </div>
                  
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 text-primary-orange mr-3 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-gray-600 text-sm hover:text-primary-orange transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <EnvelopeIcon className="h-5 w-5 text-primary-orange mr-3 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-gray-600 text-sm hover:text-primary-orange transition-colors">
                      {office.email}
                    </a>
                  </div>
                  
                  <div className="flex items-start">
                    <ClockIcon className="h-5 w-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-gray-600 text-sm">{office.hours}</div>
                      <div className="text-gray-500 text-xs">{office.timezone}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </StaggeredList>
        </div>
      </div>

      {/* 4. Map Section */}
      <div className="bg-secondary-gray section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-primary-purple/20 to-primary-orange/20 flex items-center justify-center">
                <div className="text-center">
                  <GlobeAltIcon className="h-16 w-16 text-primary-orange mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Map</h3>
                  <p className="text-gray-600">
                    Interactive map with office locations would be integrated here
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Google Maps or Mapbox integration with clickable office markers
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* 5. Alternative Channels */}
      <div className="bg-white section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                Connect with Us
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Choose your preferred way to get in touch and stay updated
              </p>
            </div>
          </AnimatedSection>
          
          <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialChannels.map((channel) => (
              <a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-gray rounded-xl p-6 text-center card-hover hover-glow group"
              >
                <div className="text-4xl mb-4">{channel.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-orange transition-colors">
                  {channel.name}
                </h3>
                <div className="text-primary-purple font-medium mb-2">{channel.handle}</div>
                <p className="text-gray-600 text-sm">{channel.description}</p>
              </a>
            ))}
          </StaggeredList>
        </div>
      </div>

      {/* 6. Final CTA */}
      <div className="bg-primary-purple section-padding sticky bottom-0 z-50">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Start Your Project With Us
                </h3>
                <p className="text-gray-200">
                  Ready to transform your hospitality operations? Let's discuss your needs.
                </p>
              </div>
              <div className="flex gap-4 mt-6 sm:mt-0">
                <Link href="#contact-form" className="bg-white text-primary-purple px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Request Demo
                </Link>
                <Link href="#contact-form" className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                  Talk to Experts
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}