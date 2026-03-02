"use client";

import Link from 'next/link';
import {
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  UserGroupIcon,
  AcademicCapIcon,
  HeartIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  TrophyIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
  ScaleIcon,
  UsersIcon,
  FaceSmileIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

import AnimatedSection from '@/components/AnimatedSection';
import FloatingElements from '@/components/FloatingElements';
import { motion } from 'framer-motion';
import FloatingSidebar from '@/components/FloatingSidebar';

const stats = [
  { number: "7+", label: "Benefit Pillars" },
  { number: "360°", label: "Well-being Focus" },
  { number: "∞", label: "Growth Paths" }
];

const benefitPillars = [
  {
    icon: ShieldCheckIcon,
    title: "Security",
    subtitle: "Full insurance coverage",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: TrophyIcon,
    title: "Recognition",
    subtitle: "Meaningful appreciation",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: AcademicCapIcon,
    title: "Learning",
    subtitle: "Continuous growth",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: RocketLaunchIcon,
    title: "Growth",
    subtitle: "Career pathways",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: ScaleIcon,
    title: "Balance",
    subtitle: "Work-life harmony",
    color: "from-pink-500 to-rose-600"
  },
  {
    icon: FaceSmileIcon,
    title: "Engagement",
    subtitle: "Community & fun",
    color: "from-indigo-500 to-blue-600"
  }
];

const benefits = [
  {
    icon: ShieldCheckIcon,
    title: "Security & Wellness",
    description: "Comprehensive employee insurance for complete peace of mind — from life and medical to dental benefits and extended protection.",
    features: [
      "Gym membership reimbursement",
      "Employee Assistance Program (EAP)",
      "Wellness podcasts — health, nutrition & finance",
      "Personal & professional stress support"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrophyIcon,
    title: "Recognition",
    description: "Our rewards platform fosters a culture of appreciation where contributions are celebrated across all levels — non-hierarchical, transparent, and inclusive.",
    tagline: "Great work deserves to be seen — and celebrated.",
    features: [],
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: AcademicCapIcon,
    title: "Learning & Development",
    description: "Curated learning platforms, leadership programs, online academies, certification support, and mentoring opportunities to continuously strengthen your skills.",
    tagline: "At Jebitech, growth is a mindset — not a milestone.",
    features: [],
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: RocketLaunchIcon,
    title: "Career Growth",
    description: "Through Internal Job Postings and transparent career pathways, Jebitechers explore lateral and vertical movements across functions — shaping their own careers.",
    tagline: "Your ambition deserves room to grow.",
    features: [],
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    icon: ScaleIcon,
    title: "Work-Life Balance",
    description: "Paid time off, parental leaves, birthday & marriage celebrations, supportive facilities and employee-friendly policies — all designed to make life easier.",
    tagline: "Perform at your best, in every aspect of life.",
    features: [],
    gradient: "from-pink-500 to-rose-600"
  },
  {
    icon: SparklesIcon,
    title: "Engagement & Fun",
    description: "Employee Impact Groups, Fun Fridays, festive celebrations, themed events, sports activities and cultural initiatives — the spirit of celebration is always alive.",
    tagline: "Energy and enthusiasm are part of life here.",
    features: [],
    gradient: "from-indigo-500 to-purple-600"
  }
];

const whyJoinReasons = [
  "Work on innovative and impactful projects",
  "Be part of a collaborative and supportive team",
  "Opportunities for continuous learning and growth",
  "Performance-driven culture with recognition and rewards",
  "Transparent leadership and open communication"
];

const jobTags = ["Angular", "Node.js", "Nest.js", "Full-time"];

export default function LifeAtJebitech() {
  const sections = [
    { id: 'hero', label: 'Overview' },
    { id: 'promise', label: 'Our Promise' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'careers', label: 'Careers' },
    { id: 'apply', label: 'How to Apply' },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Floating Sidebar Navigation */}
      <FloatingSidebar sections={sections} />

      {/* Hero Section - Enhanced */}
      <div id="hero" className="relative isolate px-6 pt-24 pb-20 md:pt-32 md:pb-28 lg:px-8 overflow-hidden bg-gradient-to-br from-primary-purple via-purple-700 to-purple-900">
        <FloatingElements />

        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <motion.div 
            className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
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
            className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-primary-orange/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '48px 48px'
            }}></div>
          </div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="text-center max-w-5xl mx-auto">
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <UserGroupIcon className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-semibold">People First Culture</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl font-heading mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Life at Jebitech
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p 
                className="text-xl md:text-2xl leading-relaxed text-white/90 max-w-4xl mx-auto mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Step into a workplace where total rewards go beyond pay — where employee well-being is truly paramount. Physical, mental, emotional, and financial — we've got you covered.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link
                  href="#benefits"
                  className="group px-8 py-4 bg-white text-primary-purple rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-2"
                >
                  Explore Life Here
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#careers"
                  className="group px-8 py-4 bg-primary-orange text-white rounded-full font-bold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-2"
                >
                  View Open Roles
                  <BriefcaseIcon className="w-5 h-5" />
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-sm md:text-base text-white/80 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Our People Promise Section */}
      <div id="promise" className="relative bg-white section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-4xl text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <HeartIcon className="w-5 h-5 text-primary-purple" />
                <span className="text-primary-purple text-sm font-semibold">Our People Promise</span>
              </motion.div>
              
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 font-heading mb-6">
                Benefits beyond compensation
              </h2>
              <p className="text-xl leading-relaxed text-gray-600 mb-6">
                At Jebitech, we focus on holistic well-being — physical, mental, emotional, and financial — ensuring our people feel supported in every aspect of life.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 font-medium">
                Our thoughtfully designed benefits and people practices empower Jebitechers to thrive both professionally and personally, every single day.
              </p>
            </div>
          </AnimatedSection>

          {/* Benefit Pillars Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {benefitPillars.map((pillar, index) => (
              <AnimatedSection key={pillar.title} direction="up" delay={0.1 * index}>
                <motion.div
                  className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 text-center"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary-purple to-purple-700 rounded-xl flex items-center justify-center">
                      <pillar.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{pillar.title}</h3>
                    <p className="text-xs text-gray-600">{pillar.subtitle}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Everything You Need to Thrive Section */}
      <div id="benefits" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 font-heading mb-4">
                Everything You Need to Thrive
              </h2>
              <p className="text-xl leading-8 text-gray-600">
                A workplace that truly cares
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} direction="up" delay={0.1 * index}>
                <motion.div
                  className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div 
                        className="w-14 h-14 bg-gradient-to-br from-primary-purple to-purple-700 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <benefit.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-base leading-relaxed mb-4">
                      {benefit.description}
                    </p>
                    
                    {/* Tagline */}
                    {benefit.tagline && (
                      <p className="text-primary-purple font-semibold italic mb-4">
                        {benefit.tagline}
                      </p>
                    )}
                    
                    {/* Features */}
                    {benefit.features && benefit.features.length > 0 && (
                      <ul className="space-y-3 mt-auto">
                        {benefit.features.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx }}
                          >
                            <CheckCircleIcon className="w-5 h-5 text-primary-orange flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Careers at Jebitech Section */}
      <div id="careers" className="relative bg-white section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-4xl text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <BriefcaseIcon className="w-5 h-5 text-primary-purple" />
                <span className="text-primary-purple text-sm font-semibold">Join Our Team</span>
              </motion.div>
              
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 font-heading mb-6">
                Careers at Jebitech
              </h2>
              <p className="text-xl leading-8 text-gray-600 mb-6">
                Great technology starts with great people
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                We are a growing, innovation-driven organization committed to delivering excellence to our clients while building a collaborative and inspiring workplace for our team.
              </p>
            </div>
          </AnimatedSection>

          {/* Why Join Us */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="max-w-4xl mx-auto mb-16">
              <motion.div 
                className="bg-gradient-to-br from-primary-purple/5 to-primary-orange/5 rounded-3xl p-10 border-2 border-primary-purple/20"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
                  <SparklesIcon className="w-7 h-7 text-primary-orange" />
                  Why Join Us?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {whyJoinReasons.map((reason, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                      whileHover={{ x: 5 }}
                    >
                      <CheckCircleIcon className="w-6 h-6 text-primary-orange flex-shrink-0 mt-0.5" />
                      <span className="text-base text-gray-700 font-medium">{reason}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Open Positions */}
          <AnimatedSection direction="up" delay={0.3}>
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">Open Positions</h3>
              
              {/* Job Card */}
              <motion.div 
                className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 mb-10"
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                  <div className="flex-1">
                    <h4 className="text-3xl font-bold text-gray-900 mb-4">Full Stack Developer</h4>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {jobTags.map((tag, idx) => (
                        <motion.span
                          key={tag}
                          className="px-4 py-2 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 text-primary-purple rounded-full text-sm font-semibold border border-primary-purple/20"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Join our engineering team building innovative hospitality technology solutions.
                    </p>
                  </div>

                  <div className="lg:w-56 flex-shrink-0">
                    <Link
                      href="https://live.digisme.in/ATS/JobApplication.aspx?q=MHBlRmp2L0N0a0hFOGNzZlN6SVJpcUFPVVR0dllQektVdlp5djE5emlLRT0="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-purple to-purple-700 text-white rounded-full font-bold text-lg hover:from-primary-purple hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Apply Now
                      <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Open Application CTA */}
              <motion.div 
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-10 border-2 border-dashed border-gray-300 text-center"
                whileHover={{ scale: 1.01 }}
              >
                <LightBulbIcon className="w-12 h-12 text-primary-orange mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Don't see a role that fits?
                </h4>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  We're always excited to connect with talented professionals.
                </p>
                <Link
                  href="https://live.digisme.in/ATS/JobApplication.aspx?q=MHBlRmp2L0N0a0hFOGNzZlN6SVJpcUFPVVR0dllQektVdlp5djE5emlLRT0="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-orange text-white rounded-full font-bold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Submit Open Application
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </motion.div>

              {/* How to Apply */}
              <motion.div 
                className="mt-10 bg-blue-50 rounded-2xl p-6 border border-blue-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-lg">💡</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-2">How to Apply:</h5>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Explore current openings and submit through our career portal. Ensure your resume is updated and highlights your key skills, experience, and achievements.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* How to Apply Section */}
      <div id="apply" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                className="bg-blue-50 rounded-3xl p-10 border-2 border-blue-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <LightBulbIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">How to Apply</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      Explore current openings and submit through our career portal. Ensure your resume is updated and highlights your key skills, experience, and achievements.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      If you do not find a suitable opening, you can still share your profile with us — we are always excited to connect with talented professionals.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative bg-gradient-to-br from-primary-purple via-purple-700 to-purple-900 section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        
        <motion.div 
          className="absolute top-20 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-heading mb-6">
                  Ready to Join Our Team?
                </h2>
                <p className="text-xl leading-8 text-white/90 mb-10">
                  Be part of a team that's transforming the hospitality industry through innovative technology and exceptional people.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary-purple rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  Get in Touch
                  <ArrowRightIcon className="w-6 h-6" />
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
