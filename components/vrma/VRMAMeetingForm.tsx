'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle, CalendarCheck } from 'lucide-react'

const interestOptions = [
  'Franchise Management System',
  'OwnerHub (Owner Settlements)',
  'StayGuide (Guest Handbook)',
  'Booking Engine',
  'General / Not Sure Yet',
]

export default function VRMAMeetingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const next: Record<string, string> = {}
    if (!formData.name.trim()) next.name = 'Name is required'
    if (!formData.email.trim()) next.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) next.email = 'Enter a valid email'
    if (!formData.company.trim()) next.company = 'Company is required'
    if (!formData.interest) next.interest = 'Please select what you want to discuss'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          inquiryType: 'demo',
          product: formData.interest,
          message: `VRMA 26 Nashville meeting request.\n\nWant to discuss: ${formData.interest}\n\n${formData.message}`,
          subscribe: false,
        }),
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('success')
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Request Received</h3>
        <p className="text-gray-600 text-sm leading-6">
          Thanks, {formData.name.split(' ')[0]}. Our team will reach out within 24 hours to
          lock in a time to meet at VRMA 26 Nashville.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-1">
        <CalendarCheck className="w-5 h-5 text-primary-orange" />
        <h3 className="text-lg font-bold text-gray-900">Reserve a Meeting Slot</h3>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        Tell us what you want to talk about, we&apos;ll confirm a time before or during the show.
      </p>

      <AnimatePresence mode="wait">
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2.5"
          >
            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
            <span className="text-sm text-red-800">Something went wrong. Please try again.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-primary-orange/20 focus:border-primary-orange outline-none transition-all ${
                errors.name ? 'border-red-400' : 'border-gray-200'
              }`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Work Email *</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-primary-orange/20 focus:border-primary-orange outline-none transition-all ${
                errors.email ? 'border-red-400' : 'border-gray-200'
              }`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Company *</label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-primary-orange/20 focus:border-primary-orange outline-none transition-all ${
                errors.company ? 'border-red-400' : 'border-gray-200'
              }`}
            />
            {errors.company && <p className="mt-1 text-xs text-red-600">{errors.company}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-primary-orange/20 focus:border-primary-orange outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">What do you want to discuss? *</label>
          <select
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-primary-orange/20 focus:border-primary-orange outline-none transition-all text-gray-700 ${
              errors.interest ? 'border-red-400' : 'border-gray-200'
            }`}
          >
            <option value="">Select a topic</option>
            {interestOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.interest && <p className="mt-1 text-xs text-red-600">{errors.interest}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Anything else? (optional)</label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Portfolio size, current challenges, preferred meeting time..."
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-primary-orange/20 focus:border-primary-orange outline-none transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-primary-orange text-white py-3 rounded-xl font-semibold hover:bg-primary-orange-dark transition-all duration-300 shadow-lg shadow-primary-orange/20 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
          {status === 'submitting' ? 'Sending...' : 'Reserve My Meeting Slot'}
        </button>
        <p className="text-[11px] text-gray-400 text-center">
          We&apos;ll follow up within 24 hours to confirm your slot.
        </p>
      </form>
    </div>
  )
}
