'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  CloudIcon, 
  CogIcon, 
  DevicePhoneMobileIcon, 
  ChartBarIcon,
  ClipboardDocumentListIcon,
  DocumentTextIcon,
  LinkIcon,
  ShieldCheckIcon,
  CubeTransparentIcon,
  CpuChipIcon,
  ArrowPathIcon,
  EyeIcon,
  CheckCircleIcon,
  PlayIcon,
  PlusIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

import AnimatedSection from '@/components/AnimatedSection'
import ParallaxSection from '@/components/ParallaxSection'
import StaggeredList from '@/components/StaggeredList'
import FloatingElements from '@/components/FloatingElements'

const platformCapabilities = [
  { name: 'Operations', icon: CogIcon, description: 'Streamline daily operations and workflows' },
  { name: 'Tasks', icon: ClipboardDocumentListIcon, description: 'Automated task management and tracking' },
  { name: 'Housekeeping', icon: CheckCircleIcon, description: 'Intelligent housekeeping coordination' },
  { name: 'Guest Experience', icon: DevicePhoneMobileIcon, description: 'Enhanced guest journey management' },
  { name: 'Analytics', icon: ChartBarIcon, description: 'Real-time insights and reporting' },
  { name: 'Integrations', icon: LinkIcon, description: 'Seamless third-party connections' }
]

const products = [
  {
    id: 'booking-engine',
    name: 'Booking Engine',
    tagline: 'Direct bookings made simple',
    outcome: 'Increase direct bookings by 40%',
    icon: DevicePhoneMobileIcon,
    description: 'Modern, conversion-optimized booking engine that integrates seamlessly with your website and drives direct reservations.',
    capabilities: [
      'Real-time availability and pricing',
      'Mobile-optimized booking flow',
      'Dynamic pricing integration',
      'Multi-language support',
      'Payment gateway integration',
      'Booking modification tools'
    ],
    benefits: [
      'Reduce OTA commissions',
      'Increase profit margins',
      'Better guest data control',
      'Improved conversion rates'
    ],
    useCases: [
      'Hotel chains wanting to reduce OTA dependency',
      'Boutique properties seeking direct bookings',
      'Vacation rentals optimizing conversion rates'
    ]
  },
  {
    id: 'virtue-inspect',
    name: 'Virtue Inspect',
    tagline: 'AI-powered property inspection',
    outcome: 'Reduce inspection time by 60%',
    icon: EyeIcon,
    description: 'Computer vision and AI technology that automates property inspections, damage detection, and maintenance scheduling.',
    capabilities: [
      'AI-powered damage detection',
      'Automated inspection reports',
      'Photo comparison analysis',
      'Maintenance scheduling',
      'Cost estimation tools',
      'Historical tracking'
    ],
    benefits: [
      'Faster turnaround times',
      'Consistent inspection quality',
      'Reduced human error',
      'Automated documentation'
    ],
    useCases: [
      'Vacation rental turnovers',
      'Hotel room inspections',
      'Property damage assessments',
      'Maintenance planning'
    ]
  },
  {
    id: 'virtue-connect',
    name: 'Virtue Connect',
    tagline: 'Unified communication hub',
    outcome: 'Improve team coordination by 50%',
    icon: LinkIcon,
    description: 'Centralized communication platform that connects all stakeholders - staff, guests, vendors, and management.',
    capabilities: [
      'Multi-channel messaging',
      'Task assignment and tracking',
      'Guest communication tools',
      'Vendor coordination',
      'Emergency notifications',
      'Integration with existing tools'
    ],
    benefits: [
      'Streamlined communication',
      'Faster issue resolution',
      'Better guest satisfaction',
      'Improved team efficiency'
    ],
    useCases: [
      'Multi-property management',
      'Remote team coordination',
      'Guest service optimization',
      'Vendor management'
    ]
  },
  {
    id: 'guest-handbook',
    name: 'Guest Handbook',
    tagline: 'Digital guest experience platform',
    outcome: 'Increase guest satisfaction by 35%',
    icon: DocumentTextIcon,
    description: 'Interactive digital guidebook that enhances the guest experience with personalized recommendations and services.',
    capabilities: [
      'Personalized recommendations',
      'Local area guides',
      'Service request portal',
      'Digital concierge',
      'Feedback collection',
      'Multi-language support'
    ],
    benefits: [
      'Enhanced guest experience',
      'Reduced front desk calls',
      'Increased ancillary revenue',
      'Better guest reviews'
    ],
    useCases: [
      'Luxury hotels enhancing service',
      'Vacation rentals providing local info',
      'Business hotels streamlining services'
    ]
  },
  {
    id: 'data-audit',
    name: 'Data Audit & Logs',
    tagline: 'Complete operational transparency',
    outcome: 'Achieve 100% audit compliance',
    icon: ChartBarIcon,
    description: 'Comprehensive audit trail and logging system that ensures compliance and provides operational insights.',
    capabilities: [
      'Complete audit trails',
      'Real-time monitoring',
      'Compliance reporting',
      'Data analytics',
      'Custom dashboards',
      'Automated alerts'
    ],
    benefits: [
      'Regulatory compliance',
      'Operational transparency',
      'Risk mitigation',
      'Performance insights'
    ],
    useCases: [
      'Enterprise compliance requirements',
      'Financial audit preparation',
      'Operational optimization',
      'Risk management'
    ]
  }
]

const architectureFeatures = [
  { name: 'Microservices-based', description: 'Scalable, maintainable architecture' },
  { name: 'RBAC', description: 'Role-based access control' },
  { name: 'Cloud-native', description: 'Built for modern cloud infrastructure' },
  { name: 'AI-ready', description: 'Machine learning integration capabilities' },
  { name: 'API-first', description: 'Comprehensive REST and GraphQL APIs' },
  { name: 'Real-time', description: 'Live updates and notifications' }
]

const integrations = [
  { name: 'Opera PMS', category: 'PMS', logo: '/integrations/opera.png' },
  { name: 'Booking.com', category: 'Channel Manager', logo: '/integrations/booking.png' },
  { name: 'Expedia', category: 'Channel Manager', logo: '/integrations/expedia.png' },
  { name: 'Stripe', category: 'Payments', logo: '/integrations/stripe.png' },
  { name: 'PayPal', category: 'Payments', logo: '/integrations/paypal.png' },
  { name: 'Salesforce', category: 'CRM', logo: '/integrations/salesforce.png' },
  { name: 'Slack', category: 'Communication', logo: '/integrations/slack.png' },
  { name: 'Zapier', category: 'Automation', logo: '/integrations/zapier.png' }
]

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [activeTab, setActiveTab] = useState('capabilities')

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Platform Overview */}
      <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen flex items-center">
        <FloatingElements />
        
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] animated-gradient opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-heading">
                  Unified <span className="text-primary-orange">Hospitality</span> Operations Platform
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  Modular products that work together seamlessly to transform your hospitality operations, 
                  from booking to checkout and everything in between.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link href="/contact" className="btn-primary text-lg px-8 py-4 hover-glow">
                    Request Demo
                  </Link>
                  <Link href="/contact" className="text-primary-purple font-semibold hover:text-primary-orange transition-colors">
                    Talk to Experts →
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={0.3}>
              <div className="relative">
                {/* Platform Diagram */}
                <div className="bg-gradient-to-br from-primary-purple/10 to-primary-orange/10 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {products.slice(0, 4).map((product, index) => (
                      <div key={product.id} className="bg-white rounded-lg p-4 shadow-sm card-hover">
                        <product.icon className="h-8 w-8 text-primary-orange mb-2" />
                        <div className="text-sm font-semibold text-gray-900">{product.name}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-primary text-white rounded-lg p-4 font-semibold">
                      Unified Platform
                    </div>
                    <div className="mt-2 text-sm text-gray-600">All products integrate seamlessly</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* 2. Platform Capabilities */}
      <ParallaxSection speed={0.3}>
        <div className="bg-secondary-gray section-padding">
          <div className="container-custom">
            <AnimatedSection direction="up">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                  Complete Platform Capabilities
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Six core areas that cover every aspect of hospitality operations
                </p>
              </div>
            </AnimatedSection>
            
            <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformCapabilities.map((capability) => (
                <div key={capability.name} className="bg-white rounded-xl p-6 card-hover hover-glow glass-morphism">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 floating">
                      <capability.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{capability.name}</h3>
                  </div>
                  <p className="text-gray-600">{capability.description}</p>
                </div>
              ))}
            </StaggeredList>
          </div>
        </div>
      </ParallaxSection>

      {/* 3. In-House Products */}
      <div className="bg-white section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                Our Product Suite
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Five specialized products designed to solve specific hospitality challenges
              </p>
            </div>
          </AnimatedSection>
          
          <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className={`bg-secondary-gray rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                  selectedProduct.id === product.id 
                    ? 'ring-2 ring-primary-orange shadow-lg scale-105' 
                    : 'card-hover'
                }`}
                onClick={() => setSelectedProduct(product)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 pulse-glow">
                    <product.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-primary-orange font-medium">{product.tagline}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-lg p-3">
                  <div className="text-sm font-semibold text-primary-purple">{product.outcome}</div>
                </div>
              </div>
            ))}
          </StaggeredList>
        </div>
      </div>

      {/* 4. Product Experience (Deep Dive) */}
      <ParallaxSection speed={0.2}>
        <div className="bg-primary-purple section-padding">
          <div className="container-custom">
            <AnimatedSection direction="up">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                  {selectedProduct.name} Deep Dive
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  {selectedProduct.description}
                </p>
              </div>
            </AnimatedSection>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  {/* Tab Navigation */}
                  <div className="flex space-x-1 mb-8 bg-gray-100 rounded-lg p-1">
                    {['capabilities', 'benefits', 'useCases'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                          activeTab === tab
                            ? 'bg-white text-primary-purple shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {tab === 'capabilities' && 'Capabilities'}
                        {tab === 'benefits' && 'Benefits'}
                        {tab === 'useCases' && 'Use Cases'}
                      </button>
                    ))}
                  </div>
                  
                  {/* Tab Content */}
                  <div className="space-y-4">
                    {activeTab === 'capabilities' && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Capabilities</h3>
                        <ul className="space-y-3">
                          {selectedProduct.capabilities.map((capability, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{capability}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {activeTab === 'benefits' && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Benefits</h3>
                        <ul className="space-y-3">
                          {selectedProduct.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <ArrowRightIcon className="h-5 w-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {activeTab === 'useCases' && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Perfect For</h3>
                        <ul className="space-y-3">
                          {selectedProduct.useCases.map((useCase, index) => (
                            <li key={index} className="flex items-start">
                              <PlayIcon className="h-5 w-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-8">
                    <Link href="/contact" className="btn-primary">
                      See {selectedProduct.name} in Action
                    </Link>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <selectedProduct.icon className="h-24 w-24 text-primary-orange mx-auto mb-4" />
                    <div className="text-lg font-semibold text-gray-900 mb-2">{selectedProduct.name}</div>
                    <div className="text-primary-orange font-medium">{selectedProduct.outcome}</div>
                    <div className="mt-4 text-sm text-gray-600">
                      Interactive demo and screenshots coming soon
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* 5. Architecture & Scalability */}
      <div className="bg-secondary-gray section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                Built for Scale & Reliability
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Modern architecture principles ensure your platform grows with your business
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <StaggeredList className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {architectureFeatures.map((feature) => (
                    <div key={feature.name} className="bg-white rounded-lg p-4 card-hover">
                      <div className="bg-gradient-primary text-white text-xs px-3 py-1 rounded-full inline-block mb-3">
                        {feature.name}
                      </div>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </StaggeredList>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Architecture</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Frontend</span>
                    <span className="text-primary-orange font-medium">React/Next.js</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Backend</span>
                    <span className="text-primary-orange font-medium">Node.js/Python</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Database</span>
                    <span className="text-primary-orange font-medium">PostgreSQL/Redis</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Infrastructure</span>
                    <span className="text-primary-orange font-medium">AWS/Docker/K8s</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Monitoring</span>
                    <span className="text-primary-orange font-medium">DataDog/Sentry</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* 6. Integrations */}
      <div className="bg-white section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                Seamless Integrations
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Connect with your existing tools and systems through our comprehensive API platform
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {integrations.map((integration, index) => (
              <AnimatedSection key={integration.name} direction="up" delay={index * 0.1}>
                <div className="text-center card-hover">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-xs font-medium text-gray-600">{integration.name}</span>
                  </div>
                  <div className="text-xs text-gray-500">{integration.category}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection direction="up" delay={0.8}>
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-lg p-6 inline-block">
                <PlusIcon className="h-8 w-8 text-primary-orange mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-900">Open API Platform</div>
                <div className="text-xs text-gray-600 mt-1">Build custom integrations</div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={1.0}>
            <div className="text-center mt-8">
              <Link href="/integrations" className="text-primary-purple font-semibold hover:text-primary-orange transition-colors">
                View All Supported Integrations →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* 7. Primary CTA */}
      <div className="bg-gradient-primary section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                See How Our Platform Works for Your Properties
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-200">
                Get a personalized demo tailored to your specific hospitality business needs and see 
                the impact our platform can have on your operations.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="bg-white text-primary-purple px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg">
                  Request Demo
                </Link>
                <Link href="/contact" className="text-white font-semibold hover:text-gray-200 transition-colors">
                  Talk to Our Experts →
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}