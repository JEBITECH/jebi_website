'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import { Mail, Send, MessageCircle, Headphones, Users, Video, CheckCircle, AlertCircle, Sparkles } from 'lucide-react'

interface ProductContactSectionProps {
  productName: string
  accentColor: string      // e.g. "fms-indigo" or "ownerhub-blue"
  accentColorAlt: string   // e.g. "fms-gold" or "ownerhub-green"
}

export default function ProductContactSection({ productName, accentColor, accentColorAlt }: ProductContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    propertyType: '',
    inquiryType: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setFormStatus('submitting')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          inquiryType: formData.inquiryType,
          product: productName,
          message: `Property Type: ${formData.propertyType}\n\n${formData.message}`,
          subscribe: false,
        }),
      })

      if (!response.ok) throw new Error('Failed to send')
      setFormStatus('success')
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', company: '', propertyType: '', inquiryType: '', message: '' })
        setFormStatus('idle')
      }, 4000)
    } catch {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 3000)
    }
  }

  const responseTimes = [
    { icon: Video, title: 'Demo Requests', time: 'Within 2 hours', description: "We'll schedule a personalized demo at your convenience" },
    { icon: MessageCircle, title: 'General Inquiries', time: 'Within 4 hours', description: 'Our team will respond with detailed information' },
    { icon: Headphones, title: 'Technical Support', time: 'Within 1 hour', description: 'Priority support for existing clients' },
    { icon: Users, title: 'Partnership Inquiries', time: 'Within 24 hours', description: 'Strategic partnerships team will reach out' },
  ]

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="container-custom px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-fms-indigo border border-fms-indigo/20 bg-fms-indigo/5 px-4 py-2 rounded-full mb-5">
              <Mail className="w-3.5 h-3.5" />
              Get in Touch
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 font-heading leading-tight mb-4">
              Ready to Get Started?
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-gray-600 text-base sm:text-lg leading-7">
              Whether you need a personalized demo, have questions about plans, or want to
              explore a partnership, our team is here to help.
            </p>
          </AnimatedSection>
        </div>

        {/* Unified card layout */}
        <AnimatedSection direction="up" delay={0.25}>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Form — 2 columns */}
                <div className="lg:col-span-2 p-6 md:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-100">
                    <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-5 h-5 text-fms-indigo" />
                    <h3 className="text-xl font-bold text-gray-900">Send Us a Message</h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">We typically respond within 2 hours during business hours</p>

                  {/* Status alerts */}
                  <AnimatePresence mode="wait">
                    {formStatus === 'success' && (
                      <motion.div
                        className="mb-5 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-green-800 font-medium">Message sent successfully! We&apos;ll get back to you soon.</span>
                      </motion.div>
                    )}
                    {formStatus === 'error' && (
                      <motion.div
                        className="mb-5 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span className="text-sm text-red-800 font-medium">Something went wrong. Please try again.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="pc-name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                        <input
                          id="pc-name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-${accentColor}/20 focus:border-${accentColor} outline-none transition-all ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="pc-email" className="block text-sm font-medium text-gray-700 mb-1.5">Work Email *</label>
                        <input
                          id="pc-email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-${accentColor}/20 focus:border-${accentColor} outline-none transition-all ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Row 2: Phone + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="pc-phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                        <input
                          id="pc-phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-gray-200 focus:border-gray-300 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="pc-company" className="block text-sm font-medium text-gray-700 mb-1.5">Company</label>
                        <input
                          id="pc-company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-gray-200 focus:border-gray-300 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3: Property Type + Inquiry Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="pc-property" className="block text-sm font-medium text-gray-700 mb-1.5">Property Type</label>
                        <select
                          id="pc-property"
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-gray-200 focus:border-gray-300 outline-none transition-all text-gray-700"
                        >
                          <option value="">Select property type</option>
                          <option value="hotel">Hotel / Boutique Hotel</option>
                          <option value="vacation-rental">Vacation Rental (Airbnb/VRBO)</option>
                          <option value="serviced-apartments">Serviced Apartments</option>
                          <option value="property-management">Property Management Company</option>
                          <option value="franchise">Franchise / Multi-Brand</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="pc-inquiry" className="block text-sm font-medium text-gray-700 mb-1.5">Inquiry Type *</label>
                        <select
                          id="pc-inquiry"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-gray-200 focus:border-gray-300 outline-none transition-all text-gray-700 ${errors.inquiryType ? 'border-red-400' : 'border-gray-200'}`}
                        >
                          <option value="">Select inquiry type</option>
                          <option value="demo">Request a Demo</option>
                          <option value="general">General Question</option>
                          <option value="pricing">Pricing & Plans</option>
                          <option value="integration">Integration Partnership</option>
                          <option value="white-label">White Label / OEM</option>
                        </select>
                        {errors.inquiryType && <p className="mt-1 text-xs text-red-600">{errors.inquiryType}</p>}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="pc-message" className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                      <textarea
                        id="pc-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements..."
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-gray-200 focus:border-gray-300 outline-none transition-all resize-none ${errors.message ? 'border-red-400' : 'border-gray-200'}`}
                      />
                      {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-fms-indigo text-white py-3 rounded-xl font-medium hover:bg-fms-indigo-dark transition-all duration-300 shadow-lg shadow-fms-indigo/20 hover:shadow-xl hover:shadow-fms-indigo/30 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4" />
                      {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>

                {/* Right sidebar — 1 column */}
                <div className="lg:col-span-1 p-6 md:p-8 bg-secondary-gray flex flex-col justify-between">
                  <div>
                    {/* Quick Contact */}
                    <div className="mb-6 pb-6 border-b border-gray-200">
                      <h4 className="text-sm font-bold text-gray-900 mb-3">Quick Contact</h4>
                      <a
                        href="mailto:sales@jebitech.com"
                        className="flex items-center gap-3 p-3 bg-fms-indigo rounded-xl hover:shadow-lg transition-all group"
                      >
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-xs text-white/80">Email Us</div>
                          <div className="font-semibold text-white text-sm">sales@jebitech.com</div>
                        </div>
                      </a>
                    </div>

                    {/* Response Times */}
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-4">Response Times</h4>
                      <div className="space-y-3.5">
                        {responseTimes.map((item, i) => (
                          <div key={item.title} className="flex items-start gap-3">
                            <div className={`w-8 h-8 rounded-lg ${i % 2 === 0 ? `bg-${accentColor}/10` : `bg-${accentColorAlt}/10`} flex items-center justify-center flex-shrink-0`}>
                              <item.icon className={`w-4 h-4 ${i % 2 === 0 ? `text-${accentColor}` : `text-${accentColorAlt}`}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-semibold text-gray-900">{item.title}</div>
                              <div className={`text-xs font-bold ${i % 2 === 0 ? `text-${accentColor}` : `text-${accentColorAlt}`}`}>{item.time}</div>
                              <div className="text-[11px] text-gray-500 mt-0.5 leading-4">{item.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom note */}
                  <div className="mt-6 pt-5 border-t border-gray-200">
                    <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1">
                      <span className="text-pink-500">♥</span> We&apos;re here to help you succeed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
