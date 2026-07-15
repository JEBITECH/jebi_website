'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import { Mail, Video, Send, MessageCircle, Headphones, Users } from 'lucide-react'
import Image from 'next/image'

const responseTimes = [
  {
    icon: Video,
    title: 'Demo Requests',
    time: 'Within 2 hours',
    description: "We'll schedule a personalized demo at your convenience",
    color: 'text-stayguide-blue',
    bg: 'bg-stayguide-blue/10',
  },
  {
    icon: MessageCircle,
    title: 'General Inquiries',
    time: 'Within 4 hours',
    description: 'Our team will respond with detailed information',
    color: 'text-stayguide-green',
    bg: 'bg-stayguide-green/10',
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    time: 'Within 1 hour',
    description: 'Priority support for existing clients',
    color: 'text-stayguide-blue',
    bg: 'bg-stayguide-blue/10',
  },
  {
    icon: Users,
    title: 'Partnership Inquiries',
    time: 'Within 24 hours',
    description: 'Strategic partnerships team will reach out',
    color: 'text-stayguide-green',
    bg: 'bg-stayguide-green/10',
  },
]

export default function StayGuideContact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    propertyType: '',
    inquiryType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          inquiryType: formData.inquiryType,
          product: 'StayGuide',
          message: `Property Type: ${formData.propertyType}\n\n${formData.message}`,
          subscribe: false,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50/50">
      <div className="container-custom px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-stayguide-blue border border-stayguide-blue/20 bg-stayguide-blue/5 px-4 py-2 rounded-full mb-5">
              <Mail className="w-3.5 h-3.5" />
              Get in Touch
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 font-heading leading-tight mb-4">
              Get in Touch with <span className="text-stayguide-green">Us</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-gray-600 text-base sm:text-lg leading-7">
              Whether you need a personalized demo, have questions about plans, or want to
              explore a white-label partnership — we&apos;re here to help.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <AnimatedSection direction="left" delay={0.2} className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-1 flex items-center gap-2">
                <span className="text-stayguide-green">✦</span> Send Us a Message
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                We typically respond within 2 hours during business hours
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-stayguide-green/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-stayguide-green" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Message Sent!</h4>
                  <p className="text-gray-600 text-sm">
                    We&apos;ll get back to you within 2 hours during business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-stayguide-blue focus:ring-2 focus:ring-stayguide-blue/10 outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-stayguide-blue focus:ring-2 focus:ring-stayguide-blue/10 outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Work Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-stayguide-blue focus:ring-2 focus:ring-stayguide-blue/10 outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Property Type</label>
                    <select
                      required
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-stayguide-blue focus:ring-2 focus:ring-stayguide-blue/10 outline-none transition-all text-gray-700"
                    >
                      <option value="">Select your property type</option>
                      <option value="hotel">Hotel / Boutique Hotel</option>
                      <option value="vacation-rental">Vacation Rental (Airbnb/VRBO)</option>
                      <option value="serviced-apartments">Serviced Apartments</option>
                      <option value="property-management">Property Management Company</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Inquiry Type</label>
                    <select
                      required
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-stayguide-blue focus:ring-2 focus:ring-stayguide-blue/10 outline-none transition-all text-gray-700"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="demo">Request a Demo</option>
                      <option value="general">General Question</option>
                      <option value="white-label">White Label / OEM</option>
                      <option value="integration">Integration Partnership</option>
                      <option value="pricing">Pricing & Plans</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-stayguide-blue focus:ring-2 focus:ring-stayguide-blue/10 outline-none transition-all resize-none"
                      placeholder="Tell us about your property and requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-stayguide-blue text-white py-3 rounded-xl font-medium hover:bg-stayguide-blue-dark transition-all duration-300 shadow-lg shadow-stayguide-blue/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* Right sidebar */}
          <AnimatedSection direction="right" delay={0.3} className="lg:col-span-2">
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-stayguide-blue rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-200">Email Us</div>
                    <div className="font-semibold">hello@stayguide.io</div>
                  </div>
                </div>
              </div>

              {/* Response Times */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Response Times</h4>
                <div className="space-y-4">
                  {responseTimes.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                        <item.icon className={`w-4 h-4 ${item.color}`} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{item.title}</div>
                        <div className={`text-xs font-semibold ${item.color}`}>{item.time}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100 text-center">
                  <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                    <span className="text-pink-500">♥</span> We&apos;re here to help you succeed
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
