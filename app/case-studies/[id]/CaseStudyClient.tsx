'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeftIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  CalendarIcon,
  UserGroupIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

import AnimatedSection from '@/components/AnimatedSection'
import ParallaxSection from '@/components/ParallaxSection'
import StaggeredList from '@/components/StaggeredList'

interface CaseStudyClientProps {
  caseStudy: any
}

export default function CaseStudyClient({ caseStudy }: CaseStudyClientProps) {
  const [activeModule, setActiveModule] = useState(0)

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-primary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="container-custom py-16">
          <AnimatedSection direction="up">
            <div className="mb-8">
              <Link href="/case-studies" className="inline-flex items-center text-primary-purple hover:text-primary-orange transition-colors">
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Back to Case Studies
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
                  {caseStudy.industry}
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-heading mb-6">
                  {caseStudy.clientName}
                </h1>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-primary-orange mr-3" />
                    <span className="text-gray-600">{caseStudy.location}</span>
                  </div>
                  <div className="flex items-center">
                    <BuildingOfficeIcon className="h-5 w-5 text-primary-orange mr-3" />
                    <span className="text-gray-600">{caseStudy.properties} Properties</span>
                  </div>
                  <div className="flex items-center">
                    <UserGroupIcon className="h-5 w-5 text-primary-orange mr-3" />
                    <span className="text-gray-600">{caseStudy.rooms} Rooms</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-5 w-5 text-primary-orange mr-3" />
                    <span className="text-gray-600">{caseStudy.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary-purple/10 to-primary-orange/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {caseStudy.metrics.map((metric: any, index: number) => (
                    <div key={index} className="text-center">
                      <div className={`text-3xl font-bold mb-2 ${
                        metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {metric.trend === 'down' ? '-' : '+'}{metric.value}
                      </div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Challenges Section */}
      <ParallaxSection speed={0.3}>
        <div className="bg-secondary-gray section-padding">
          <div className="container-custom">
            <AnimatedSection direction="up">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                  The Challenge
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Key operational challenges that were limiting growth and guest satisfaction
                </p>
              </div>
            </AnimatedSection>
            
            <StaggeredList className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudy.challenges.map((challenge: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm card-hover">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">{challenge.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{challenge.title}</h3>
                      <p className="text-gray-600">{challenge.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </StaggeredList>
          </div>
        </div>
      </ParallaxSection>

      {/* Solution Section */}
      <div className="bg-white section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                The Solution
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {caseStudy.solution.overview}
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Module Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Implementation Modules</h3>
                <div className="space-y-2">
                  {caseStudy.solution.modules.map((module: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setActiveModule(index)}
                      className={`w-full text-left p-4 rounded-lg transition-colors ${
                        activeModule === index
                          ? 'bg-gradient-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <div className="font-semibold">{module.name}</div>
                      <div className={`text-sm ${activeModule === index ? 'text-gray-200' : 'text-gray-500'}`}>
                        {module.timeline}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Module Details */}
            <div className="lg:col-span-2">
              <AnimatedSection key={activeModule} direction="right">
                <div className="bg-secondary-gray rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {caseStudy.solution.modules[activeModule].name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {caseStudy.solution.modules[activeModule].description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary-purple mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {caseStudy.solution.modules[activeModule].features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-primary-orange mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-500 mb-1">Implementation Timeline</div>
                    <div className="font-semibold text-primary-purple">
                      {caseStudy.solution.modules[activeModule].timeline}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <ParallaxSection speed={0.2}>
        <div className="bg-primary-purple section-padding">
          <div className="container-custom">
            <AnimatedSection direction="up">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                  Measurable Results
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Quantifiable impact across key performance indicators
                </p>
              </div>
            </AnimatedSection>
            
            <StaggeredList className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudy.metrics.map((metric: any, index: number) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 glass-morphism">
                  <div className="flex items-center justify-between mb-4">
                    <metric.icon className="h-8 w-8 text-primary-orange" />
                    <div className={`text-3xl font-bold ${
                      metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {metric.trend === 'down' ? '-' : '+'}{metric.value}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3">{metric.label}</h3>
                  <p className="text-gray-300 text-sm mb-4">{metric.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">Before</div>
                      <div className="text-white font-medium">{metric.before}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">After</div>
                      <div className="text-primary-orange font-medium">{metric.after}</div>
                    </div>
                  </div>
                </div>
              ))}
            </StaggeredList>
          </div>
        </div>
      </ParallaxSection>

      {/* Testimonial Section */}
      <div className="bg-white section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-4xl">
              <div className="bg-gradient-to-br from-secondary-gray to-white rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {caseStudy.testimonial.author.split(' ').map((n: string) => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{caseStudy.testimonial.author}</h3>
                  <p className="text-primary-orange font-medium">{caseStudy.testimonial.role}</p>
                  <p className="text-gray-600">{caseStudy.testimonial.company}</p>
                </div>
                
                <blockquote className="text-center">
                  <p className="text-xl text-gray-700 italic leading-relaxed">
                    "{caseStudy.testimonial.fullQuote}"
                  </p>
                </blockquote>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-primary section-padding sticky bottom-0 z-50">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  See How We Can Help Your Property
                </h3>
                <p className="text-gray-200">
                  Get a personalized demo tailored to your specific needs
                </p>
              </div>
              <div className="flex gap-4 mt-4 sm:mt-0">
                <Link href="/contact" className="bg-white text-primary-purple px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Request Demo
                </Link>
                <Link href="/contact" className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
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