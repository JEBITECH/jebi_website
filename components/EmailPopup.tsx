'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, CheckCircle, TrendingUp, Users, Award } from 'lucide-react'

interface EmailPopupProps {
  delaySeconds?: number
  showOnExitIntent?: boolean
  showOnEveryVisit?: boolean // Set to true to show on every page load (for testing)
  title?: string
  description?: string
  buttonText?: string
}

export default function EmailPopup({
  delaySeconds = 5,
  showOnExitIntent = true,
  showOnEveryVisit = false,
  title = "Transform Your Hospitality Operations",
  description = "Join industry leaders receiving exclusive insights, product updates, and proven strategies to optimize your property management.",
  buttonText = "Subscribe Now"
}: EmailPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    // Skip sessionStorage check if showOnEveryVisit is true
    if (!showOnEveryVisit) {
      const hasSeenPopup = sessionStorage.getItem('emailPopupSeen')
      const hasSubmittedEmail = sessionStorage.getItem('emailPopupSubmitted')
      
      if (hasSeenPopup || hasSubmittedEmail) {
        return
      }
    }

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delaySeconds * 1000)

    const handleMouseLeave = (e: MouseEvent) => {
      const hasSeenPopup = sessionStorage.getItem('emailPopupSeen')
      if (showOnExitIntent && e.clientY <= 0 && !hasSeenPopup) {
        setIsVisible(true)
      }
    }

    if (showOnExitIntent) {
      document.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      clearTimeout(timer)
      if (showOnExitIntent) {
        document.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [delaySeconds, showOnExitIntent])

  const handleClose = () => {
    setIsVisible(false)
    sessionStorage.setItem('emailPopupSeen', 'true')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'popup' })
      })

      if (response.ok) {
        setSubmitStatus('success')
        sessionStorage.setItem('emailPopupSubmitted', 'true')
        
        setTimeout(() => {
          setIsVisible(false)
        }, 3000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Newsletter signup error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9998]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 z-10 text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-all duration-200"
                aria-label="Close popup"
              >
                <X size={22} />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Left Side - Brand & Benefits */}
                <div className="relative bg-gradient-to-br from-primary-purple via-purple-700 to-purple-900 p-10 flex flex-col justify-between min-h-[500px]">
                  {/* Subtle Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                      backgroundSize: '32px 32px'
                    }}></div>
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 border border-white/20"
                    >
                      <Mail className="text-white" size={32} />
                    </motion.div>
                    
                    <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                      {title}
                    </h2>
                    <p className="text-white/90 text-base leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* Trust Badge */}
                  <div className="relative z-10 mt-8">
                    <div className="flex items-center gap-2 text-white/60 text-xs">
                      <CheckCircle size={16} />
                      <span>Trusted by leading hospitality brands</span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="p-10 flex flex-col justify-center bg-gray-50">
                  {submitStatus === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Welcome Aboard!</h3>
                      <p className="text-gray-600 mb-6">
                        Check your inbox for a confirmation email and your first insights.
                      </p>
                      <button
                        onClick={handleClose}
                        className="text-primary-purple font-semibold hover:underline"
                      >
                        Close
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Get Started Today
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Enter your email to receive valuable insights directly to your inbox.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className={`w-full px-4 py-3.5 border rounded-xl focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400 ${
                              submitStatus === 'error' ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'
                            }`}
                            required
                          />
                          {submitStatus === 'error' && (
                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                              <X size={14} />
                              Please enter a valid email address
                            </p>
                          )}
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 ${
                            isSubmitting
                              ? 'bg-gray-400 cursor-not-allowed'
                              : 'bg-gradient-to-r from-primary-purple to-purple-700 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]'
                          }`}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Subscribing...
                            </span>
                          ) : (
                            buttonText
                          )}
                        </button>

                        <p className="text-xs text-gray-500 text-center leading-relaxed">
                          By subscribing, you agree to receive marketing emails from JebiTech. 
                          <br />
                          Unsubscribe anytime. <a href="/privacy" className="text-primary-purple hover:underline">Privacy Policy</a>
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
