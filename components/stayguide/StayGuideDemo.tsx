'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function StayGuideDemo() {
  return (
    <section id="demo" className="py-20 md:py-28 bg-white">
      <div className="container-custom px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-stayguide-green border border-stayguide-green/20 bg-stayguide-green/5 px-4 py-2 rounded-full mb-5">
              <span className="text-sm">▶</span>
              Product Demo
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 font-heading leading-tight mb-4">
              See StayGuide in <span className="text-stayguide-blue">Action</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-gray-600 text-base sm:text-lg leading-7">
              Guest-ready in minutes, not weeks. Set up your fully branded, AI-powered guest
              handbook with a simple 3-step process.
            </p>
          </AnimatedSection>
        </div>

        {/* Demo Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Phone Mockup */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="flex justify-center">
              <div className="relative">
                {/* Phone frame */}
                <div className="w-[280px] sm:w-[300px] rounded-[2.5rem] border-[8px] border-gray-900 bg-white shadow-2xl overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-gray-900 text-white text-[10px] px-5 py-1.5 flex justify-between items-center">
                    <span>9:41</span>
                    <div className="w-20 h-5 bg-gray-800 rounded-full" />
                    <span className="flex gap-1">
                      <span>📶</span>
                      <span>🔋</span>
                    </span>
                  </div>

                  {/* App Header */}
                  <div className="bg-stayguide-blue px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                        <Image
                          src="/stayguide-logo.png"
                          alt="StayGuide"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">StayGuide Assistant</div>
                        <div className="text-blue-200 text-[10px] flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-stayguide-green" />
                          Online — instant replies
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-3 space-y-3 bg-gray-50 min-h-[320px]">
                    {/* QR Scan message */}
                    <div className="bg-stayguide-blue/5 border border-stayguide-blue/10 rounded-xl p-3 text-center">
                      <div className="text-2xl mb-1">⬛</div>
                      <div className="text-[10px] text-stayguide-blue font-medium">Scan to access your StayGuide</div>
                    </div>

                    {/* Bot welcome */}
                    <div className="bg-white border border-gray-100 rounded-xl rounded-tl-sm p-2.5 text-xs text-gray-700 shadow-sm">
                      👋 Welcome to Villa Serenity! Your digital handbook is ready. What would you like to know?
                    </div>

                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-stayguide-blue text-white rounded-xl rounded-tr-sm px-3 py-2 text-xs max-w-[80%]">
                        What&apos;s the Wi-Fi password?
                      </div>
                    </div>

                    {/* Bot response */}
                    <div className="bg-white border border-gray-100 rounded-xl rounded-tl-sm p-2.5 text-xs text-gray-700 shadow-sm">
                      <div className="font-medium mb-1">📶 Wi-Fi Details:</div>
                      <div className="text-[11px] space-y-0.5 text-gray-600">
                        <div>Network: VillaSerenity_5G</div>
                        <div>Password: Welcome2025!</div>
                        <div>Speed: 300 Mbps fiber</div>
                      </div>
                    </div>

                    {/* User message 2 */}
                    <div className="flex justify-end">
                      <div className="bg-stayguide-blue text-white rounded-xl rounded-tr-sm px-3 py-2 text-xs max-w-[80%]">
                        Any good restaurants nearby?
                      </div>
                    </div>

                    {/* Bot response 2 */}
                    <div className="bg-white border border-gray-100 rounded-xl rounded-tl-sm p-2.5 text-xs text-gray-700 shadow-sm">
                      <div className="font-medium mb-1">🍽️ Top picks within 10 min:</div>
                      <div className="text-[11px] space-y-0.5 text-gray-600">
                        <div>• Café Blue — best espresso</div>
                        <div>• The Grill House — dinner only</div>
                        <div>• Spice Garden — excellent curry</div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-white border-t border-gray-100 px-3 py-2.5 flex gap-2 overflow-x-auto">
                    {['🔑 Check-in', '🗺️ Local Tips', '📋 Rules', '🆘 Emergency'].map((action) => (
                      <div
                        key={action}
                        className="text-[10px] bg-stayguide-green/10 text-stayguide-green px-2.5 py-1.5 rounded-full whitespace-nowrap font-medium border border-stayguide-green/20"
                      >
                        {action}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -right-8 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2"
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="text-[10px] text-gray-500">Response Time</div>
                  <div className="text-sm font-bold text-stayguide-blue">&lt; 2s</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-8 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2"
                  animate={{ y: [3, -3, 3] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="text-[10px] text-gray-500">Languages</div>
                  <div className="text-sm font-bold text-stayguide-green">30+</div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          {/* Steps */}
          <div className="space-y-8">
            <AnimatedSection direction="right" delay={0.2}>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 font-heading mb-2">
                Guest-Ready in Minutes, <span className="text-stayguide-green">Not Weeks</span>
              </h3>
              <p className="text-gray-600 mb-8">
                Set up your fully branded, AI-powered guest handbook with a simple 3-step process. No developers needed.
              </p>
            </AnimatedSection>

            {[
              {
                step: '1',
                title: 'Set Up Your Handbook',
                description: 'Add your property details, house rules, Wi-Fi info, check-in instructions, and local recommendations through an easy dashboard.',
              },
              {
                step: '2',
                title: 'Share the QR Code',
                description: 'Print the QR code on a welcome card or send via email. Guests scan it and instantly access their personalized handbook.',
              },
              {
                step: '3',
                title: 'AI Handles the Rest',
                description: 'Your AI assistant answers guest questions, sends automated messages, and collects insights — around the clock, without any effort from you.',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} direction="right" delay={0.3 + i * 0.1}>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-stayguide-blue text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-6">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            <AnimatedSection direction="right" delay={0.6}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-stayguide-green text-white px-6 py-3 rounded-xl font-medium hover:bg-stayguide-green-dark transition-all duration-300 shadow-lg shadow-stayguide-green/20 mt-4"
              >
                Try Live Demo <ArrowRight className="w-4 h-4" />
              </a>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
