'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  Globe,
  MapPin,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Zap,
  Clock,
  Heart,
  Send,
  Sparkles,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

interface Tracking {
  leadSource: string
  utmSource: string
  utmCampaign: string
}

const projectTypes = ['Custom Development', 'Dedicated Team', 'Implementation & Integration', 'Not sure yet']
const companySizes = ['1–10', '11–50', '51–200', '200+']
const budgets = ['Under $10k', '$10k–$50k', '$50k–$150k', '$150k+']
const hearAboutOptions = [
  'Guesty Marketplace partner page',
  'Guesty account manager / CS team',
  'Google search',
  'Referral',
  'Other',
]

const responseExpectations = [
  {
    icon: Clock,
    type: 'All Inquiries',
    time: 'Within 1 business day',
    desc: 'Our team will review your request and respond with a scoped recommendation.',
  },
]

const initialFormState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  country: '',
  companySize: companySizes[0],
  currentPlatform: 'Guesty',
  projectType: projectTypes[0],
  budget: budgets[0],
  howHeard: hearAboutOptions[0],
  referredBy: '',
  message: '',
}

export default function GuestyContact({ tracking }: { tracking: Tracking }) {
  const [formData, setFormData] = useState(initialFormState)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const next: Record<string, string> = {}
    if (!formData.name.trim()) next.name = 'Name is required'
    if (!formData.email.trim()) next.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) next.email = 'Email is invalid'
    if (!formData.company.trim()) next.company = 'Company is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')

    const w = window as typeof window & { dataLayer?: unknown[] }
    w.dataLayer = w.dataLayer || []
    w.dataLayer.push({
      event: 'guesty_lead_submitted',
      lead_source: tracking.leadSource,
      referred_by: formData.referredBy,
      how_heard: formData.howHeard,
    })

    try {
      const response = await fetch('/api/guesty-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          leadSource: tracking.leadSource,
          utmSource: tracking.utmSource,
          utmCampaign: tracking.utmCampaign,
          referralId: tracking.leadSource,
        }),
      })

      if (!response.ok) throw new Error('Failed to submit lead')

      setStatus('success')
      setTimeout(() => {
        setFormData(initialFormState)
        setStatus('idle')
      }, 4000)
    } catch (error) {
      console.error('Error submitting Guesty lead:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3500)
    }
  }

  return (
    <div id="contact" className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50/30 section-padding overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-orange/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-purple/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="container-custom px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <Sparkles className="w-4 h-4 text-primary-purple" />
              <span className="text-primary-purple text-sm font-semibold">Request a Consultation</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading mb-4">
              Let&apos;s Talk About Your <span className="text-primary-orange">Guesty</span> Ecosystem
            </h2>
            <p className="text-base sm:text-lg leading-7 text-gray-600">
              Tell us about your setup and what you&apos;re trying to solve. We&apos;ll respond within one business day with a scoped recommendation.
            </p>
          </div>
        </AnimatedSection>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            whileHover={{ boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.12)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Form Section — 2 columns */}
              <div className="lg:col-span-2 p-6 sm:p-8 md:p-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-heading mb-1 flex items-center gap-2">
                    <Send className="w-5 h-5 text-primary-orange" />
                    Send us a Message
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    We typically respond within 2 hours during business hours
                  </p>
                </motion.div>

                {/* Referral tracking note */}
                <div className="flex items-start gap-2.5 bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 mb-6 text-[12.5px] text-orange-800">
                  <Zap className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary-orange" />
                  <span>
                    We&apos;ve noted you&apos;re reaching us via the{' '}
                    <strong>{tracking.leadSource}</strong> page — your Jebitech rep will see this
                    when you submit.
                  </span>
                </div>

                {/* Status messages */}
                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="mb-6 flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3.5 text-green-800 text-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      Request sent successfully — we&apos;ll be in touch within one business day.
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="mb-6 flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3.5 text-red-800 text-sm"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      Something went wrong. Please try again.
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FloatingField label="Full Name *" error={errors.name}>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=" "
                        className={floatingInputClass(!!errors.name)}
                      />
                    </FloatingField>
                    <FloatingField label="Company *" error={errors.company}>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder=" "
                        className={floatingInputClass(!!errors.company)}
                      />
                    </FloatingField>
                    <FloatingField label="Email Address *" error={errors.email}>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=" "
                        className={floatingInputClass(!!errors.email)}
                      />
                    </FloatingField>
                    <FloatingField label="Phone Number">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=" "
                        className={floatingInputClass(false)}
                      />
                    </FloatingField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Country">
                      <input
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Company Size">
                      <select name="companySize" value={formData.companySize} onChange={handleChange} className={inputClass}>
                        {companySizes.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </Field>
                    <Field label="Current Platform">
                      <input
                        name="currentPlatform"
                        value={formData.currentPlatform}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Project Type">
                      <select name="projectType" value={formData.projectType} onChange={handleChange} className={inputClass}>
                        {projectTypes.map((p) => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="How did you hear about us?">
                      <select name="howHeard" value={formData.howHeard} onChange={handleChange} className={inputClass}>
                        {hearAboutOptions.map((h) => <option key={h} value={h}>{h}</option>)}
                      </select>
                    </Field>
                    <Field label="Guesty rep who referred you (optional)">
                      <input
                        name="referredBy"
                        value={formData.referredBy}
                        onChange={handleChange}
                        placeholder="Name or email, if known"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <Field label="Estimated Budget">
                    <select name="budget" value={formData.budget} onChange={handleChange} className={inputClass}>
                      {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </Field>

                  <Field label="Message">
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, requirements, or how we can help you..."
                      className={`${inputClass} resize-none`}
                    />
                  </Field>

                  <motion.button
                    type="submit"
                    disabled={status === 'submitting'}
                    whileHover={status !== 'submitting' ? { scale: 1.02, y: -1 } : {}}
                    whileTap={status !== 'submitting' ? { scale: 0.98 } : {}}
                    className={`w-full py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2.5 transition-all shadow-lg ${
                      status === 'submitting'
                        ? 'bg-gray-400 cursor-not-allowed text-white shadow-none'
                        : 'bg-primary-orange text-white hover:bg-primary-orange-dark hover:shadow-xl'
                    }`}
                  >
                    <motion.div
                      animate={status === 'submitting' ? { rotate: 360 } : {}}
                      transition={{ duration: 1, repeat: status === 'submitting' ? Infinity : 0, ease: 'linear' }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                    {status === 'submitting' ? 'Sending Request...' : 'Request Consultation'}
                    {status !== 'submitting' && <ArrowRight className="w-4 h-4" />}
                  </motion.button>
                </form>
              </div>

              {/* Sidebar — 1 column */}
              <div className="lg:col-span-1 p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-purple-50/50 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gray-100">
                <div>
                  {/* Quick Contact */}
                  <motion.div
                    className="mb-7 pb-7 border-b border-gray-200"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Contact</h3>

                    <motion.a
                      href="mailto:sales@jebitech.com"
                      className="flex items-center gap-3 p-3.5 bg-gradient-to-br from-primary-purple to-purple-700 rounded-xl hover:shadow-lg transition-all group"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] text-white/80 mb-0.5">Email Us</div>
                        <div className="font-semibold text-white text-sm">sales@jebitech.com</div>
                      </div>
                    </motion.a>

                    <div className="mt-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#efe9fb] text-primary-purple flex items-center justify-center flex-shrink-0">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Web</div>
                          <div className="text-sm font-semibold text-gray-900">jebitech.com/guesty</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#efe9fb] text-primary-purple flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Office</div>
                          <div className="text-sm font-semibold text-gray-900">Amanora, Pune, India</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Response Commitment */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <motion.div
                      className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
                      whileHover={{ y: -2, boxShadow: '0 8px 25px -8px rgba(0,0,0,0.1)' }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-purple to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-sm">Quick Response</div>
                          <p className="text-gray-500 text-[12px] leading-relaxed mt-1.5">
                            Our team will review your request and get back to you promptly with a clear next step.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Footer note */}
                <motion.div
                  className="mt-8 pt-6 border-t border-gray-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <div className="text-center text-xs text-gray-500 flex items-center justify-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-primary-orange" />
                    We&apos;re here to help you succeed
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function FloatingField({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {children}
      <label className="absolute left-4 top-3.5 text-gray-400 text-sm transition-all pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-primary-orange peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[11px]">
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </motion.div>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-gray-700 mb-1.5">{label}</label>
      {children}
    </div>
  )
}

function floatingInputClass(hasError: boolean) {
  return `peer w-full px-4 pt-5 pb-2 border rounded-xl text-[14px] focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all bg-white ${
    hasError ? 'border-red-500' : 'border-gray-300'
  }`
}

const inputClass =
  'w-full px-4 py-3 border border-gray-300 rounded-xl text-[14px] focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all bg-white'
