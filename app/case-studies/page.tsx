'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  FunnelIcon,
  MagnifyingGlassIcon,
  BuildingOfficeIcon,
  HomeModernIcon,
  KeyIcon,
  BuildingStorefrontIcon,
  GlobeAltIcon,
  ChartBarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PlayIcon,
  EyeIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline'

import AnimatedSection from '@/components/AnimatedSection'
import ParallaxSection from '@/components/ParallaxSection'
import StaggeredList from '@/components/StaggeredList'
import FloatingElements from '@/components/FloatingElements'

const propertyTypes = [
  { value: 'all', label: 'All Properties' },
  { value: 'hotel', label: 'Hotels' },
  { value: 'resort', label: 'Resorts' },
  { value: 'vacation-rental', label: 'Vacation Rentals' },
  { value: 'serviced-apartment', label: 'Serviced Apartments' },
  { value: 'boutique', label: 'Boutique Properties' }
]

const regions = [
  { value: 'all', label: 'All Regions' },
  { value: 'north-america', label: 'North America' },
  { value: 'europe', label: 'Europe' },
  { value: 'asia-pacific', label: 'Asia Pacific' },
  { value: 'middle-east', label: 'Middle East' },
  { value: 'latin-america', label: 'Latin America' }
]

const useCases = [
  { value: 'all', label: 'All Use Cases' },
  { value: 'operations', label: 'Operations Optimization' },
  { value: 'automation', label: 'Process Automation' },
  { value: 'guest-experience', label: 'Guest Experience' },
  { value: 'revenue', label: 'Revenue Optimization' },
  { value: 'integration', label: 'System Integration' }
]

const caseStudies = [
  {
    id: 'luxury-resort-chain',
    clientName: 'Premium Resort Group',
    propertyType: 'resort',
    region: 'north-america',
    useCase: 'operations',
    logo: '/clients/premium-resort.png',
    industry: 'Luxury Resorts',
    location: 'California, USA',
    properties: 12,
    rooms: 2400,
    challenge: 'Outdated property management system causing operational inefficiencies and poor guest experience',
    solution: 'Implemented comprehensive cloud-based PMS with mobile integration and real-time analytics',
    modules: ['Operations', 'Tasks', 'Guest Experience', 'Analytics'],
    metrics: [
      { label: 'Check-in Time Reduction', value: '40%', trend: 'down', icon: ArrowTrendingDownIcon },
      { label: 'Guest Satisfaction Increase', value: '25%', trend: 'up', icon: ArrowTrendingUpIcon },
      { label: 'Operational Efficiency', value: '30%', trend: 'up', icon: ChartBarIcon },
      { label: 'Annual Cost Savings', value: '$2M', trend: 'up', icon: CurrencyDollarIcon }
    ],
    testimonial: {
      quote: "JebiTech transformed our operations completely. The new system reduced our check-in time by 40% and our guests are happier than ever.",
      author: "Sarah Mitchell",
      role: "VP Operations",
      image: "/testimonials/sarah-mitchell.jpg"
    },
    duration: '8 months',
    featured: true
  },
  {
    id: 'boutique-hotel-digital',
    clientName: 'Urban Boutique Hotels',
    propertyType: 'boutique',
    region: 'europe',
    useCase: 'automation',
    logo: '/clients/urban-boutique.png',
    industry: 'Boutique Hotels',
    location: 'London, UK',
    properties: 5,
    rooms: 180,
    challenge: 'Manual processes and disconnected systems limiting growth and guest experience',
    solution: 'Custom-built integrated platform connecting PMS, booking engine, and guest services',
    modules: ['Booking Engine', 'Virtue Connect', 'Guest Handbook'],
    metrics: [
      { label: 'Direct Bookings Increase', value: '60%', trend: 'up', icon: ArrowTrendingUpIcon },
      { label: 'Operational Cost Reduction', value: '35%', trend: 'down', icon: ArrowTrendingDownIcon },
      { label: 'Staff Onboarding Speed', value: '50%', trend: 'up', icon: ClockIcon },
      { label: 'Guest Satisfaction Rate', value: '95%', trend: 'up', icon: StarIcon }
    ],
    testimonial: {
      quote: "The integrated platform gave us the automation we desperately needed. Our direct bookings increased by 60% in just 6 months.",
      author: "James Wilson",
      role: "General Manager",
      image: "/testimonials/james-wilson.jpg"
    },
    duration: '6 months',
    featured: true
  },
  {
    id: 'vacation-rental-scale',
    clientName: 'Coastal Vacation Rentals',
    propertyType: 'vacation-rental',
    region: 'north-america',
    useCase: 'guest-experience',
    logo: '/clients/coastal-rentals.png',
    industry: 'Vacation Rentals',
    location: 'Florida, USA',
    properties: 150,
    rooms: 150,
    challenge: 'Inconsistent guest experience across properties and manual inspection processes',
    solution: 'Deployed Virtue Inspect AI and Guest Handbook for standardized operations',
    modules: ['Virtue Inspect', 'Guest Handbook', 'Operations'],
    metrics: [
      { label: 'Inspection Time Reduction', value: '65%', trend: 'down', icon: ArrowTrendingDownIcon },
      { label: 'Guest Review Score', value: '4.8/5', trend: 'up', icon: StarIcon },
      { label: 'Property Damage Claims', value: '45%', trend: 'down', icon: ArrowTrendingDownIcon },
      { label: 'Operational Efficiency', value: '40%', trend: 'up', icon: ChartBarIcon }
    ],
    testimonial: {
      quote: "Virtue Inspect revolutionized our property inspections. We can now turn over properties 65% faster with better quality control.",
      author: "Maria Rodriguez",
      role: "Operations Director",
      image: "/testimonials/maria-rodriguez.jpg"
    },
    duration: '4 months',
    featured: false
  },
  {
    id: 'serviced-apartments-integration',
    clientName: 'Metropolitan Serviced Apartments',
    propertyType: 'serviced-apartment',
    region: 'asia-pacific',
    useCase: 'integration',
    logo: '/clients/metropolitan.png',
    industry: 'Serviced Apartments',
    location: 'Singapore',
    properties: 8,
    rooms: 320,
    challenge: 'Multiple disconnected systems causing data inconsistencies and operational delays',
    solution: 'Comprehensive system integration with real-time data synchronization',
    modules: ['System Integration', 'Data Audit & Logs', 'Analytics'],
    metrics: [
      { label: 'Data Accuracy Improvement', value: '99%', trend: 'up', icon: CheckCircleIcon },
      { label: 'System Response Time', value: '80%', trend: 'up', icon: ClockIcon },
      { label: 'Manual Data Entry', value: '70%', trend: 'down', icon: ArrowTrendingDownIcon },
      { label: 'Reporting Efficiency', value: '55%', trend: 'up', icon: ChartBarIcon }
    ],
    testimonial: {
      quote: "The integration project eliminated our data silos completely. We now have real-time visibility across all our properties.",
      author: "David Chen",
      role: "IT Director",
      image: "/testimonials/david-chen.jpg"
    },
    duration: '5 months',
    featured: false
  },
  {
    id: 'hotel-chain-revenue',
    clientName: 'Grand Hotel Collection',
    propertyType: 'hotel',
    region: 'europe',
    useCase: 'revenue',
    logo: '/clients/grand-hotel.png',
    industry: 'Hotel Chain',
    location: 'Paris, France',
    properties: 25,
    rooms: 1800,
    challenge: 'Suboptimal pricing strategies and limited revenue management capabilities',
    solution: 'Advanced analytics platform with dynamic pricing and revenue optimization',
    modules: ['Analytics', 'Revenue Management', 'Operations'],
    metrics: [
      { label: 'Revenue Per Room', value: '28%', trend: 'up', icon: ArrowTrendingUpIcon },
      { label: 'Occupancy Rate', value: '15%', trend: 'up', icon: ArrowTrendingUpIcon },
      { label: 'Pricing Accuracy', value: '90%', trend: 'up', icon: CheckCircleIcon },
      { label: 'Revenue Growth', value: '$5.2M', trend: 'up', icon: CurrencyDollarIcon }
    ],
    testimonial: {
      quote: "The revenue optimization platform increased our RevPAR by 28%. The ROI was evident within the first quarter.",
      author: "Sophie Dubois",
      role: "Revenue Manager",
      image: "/testimonials/sophie-dubois.jpg"
    },
    duration: '7 months',
    featured: true
  },
  {
    id: 'resort-guest-experience',
    clientName: 'Tropical Paradise Resort',
    propertyType: 'resort',
    region: 'latin-america',
    useCase: 'guest-experience',
    logo: '/clients/tropical-paradise.png',
    industry: 'Beach Resort',
    location: 'Costa Rica',
    properties: 1,
    rooms: 200,
    challenge: 'Limited guest engagement and outdated communication systems',
    solution: 'Digital guest experience platform with mobile app and concierge services',
    modules: ['Guest Handbook', 'Virtue Connect', 'Mobile App'],
    metrics: [
      { label: 'Guest App Adoption', value: '85%', trend: 'up', icon: DevicePhoneMobileIcon },
      { label: 'Service Request Response', value: '60%', trend: 'up', icon: ClockIcon },
      { label: 'Guest Satisfaction', value: '4.9/5', trend: 'up', icon: StarIcon },
      { label: 'Ancillary Revenue', value: '22%', trend: 'up', icon: CurrencyDollarIcon }
    ],
    testimonial: {
      quote: "Our guests love the new digital experience. The mobile app has an 85% adoption rate and our satisfaction scores are at an all-time high.",
      author: "Carlos Mendez",
      role: "Guest Experience Manager",
      image: "/testimonials/carlos-mendez.jpg"
    },
    duration: '3 months',
    featured: false
  }
]

export default function CaseStudies() {
  const [selectedPropertyType, setSelectedPropertyType] = useState('all')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [selectedUseCase, setSelectedUseCase] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isFlipped, setIsFlipped] = useState<string | null>(null)

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesPropertyType = selectedPropertyType === 'all' || study.propertyType === selectedPropertyType
    const matchesRegion = selectedRegion === 'all' || study.region === selectedRegion
    const matchesUseCase = selectedUseCase === 'all' || study.useCase === selectedUseCase
    const matchesSearch = searchQuery === '' || 
      study.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.location.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesPropertyType && matchesRegion && matchesUseCase && matchesSearch
  })

  const featuredCaseStudies = filteredCaseStudies.filter(study => study.featured)

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen flex items-center">
        <FloatingElements />
        
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] animated-gradient opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="container-custom">
          <AnimatedSection direction="up" delay={0.2}>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-heading">
                Success <span className="text-primary-orange">Stories</span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
                Discover how hospitality businesses worldwide have transformed their operations 
                and achieved remarkable results with JebiTech's platform and services.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Filters Section */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200">
        <div className="container-custom py-6">
          <AnimatedSection direction="up">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                />
              </div>
              
              {/* Filters */}
              <div className="flex flex-wrap gap-4">
                <select
                  value={selectedPropertyType}
                  onChange={(e) => setSelectedPropertyType(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                >
                  {propertyTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
                
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                >
                  {regions.map(region => (
                    <option key={region.value} value={region.value}>{region.label}</option>
                  ))}
                </select>
                
                <select
                  value={selectedUseCase}
                  onChange={(e) => setSelectedUseCase(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                >
                  {useCases.map(useCase => (
                    <option key={useCase.value} value={useCase.value}>{useCase.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Featured Case Studies */}
      {featuredCaseStudies.length > 0 && (
        <ParallaxSection speed={0.3}>
          <div className="bg-secondary-gray section-padding">
            <div className="container-custom">
              <AnimatedSection direction="up">
                <div className="mx-auto max-w-2xl text-center mb-16">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                    Featured Success Stories
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Our most impactful transformations showcasing measurable results
                  </p>
                </div>
              </AnimatedSection>
              
              <StaggeredList className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredCaseStudies.map((study) => (
                  <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{study.clientName}</h3>
                          <p className="text-primary-orange font-medium">{study.industry}</p>
                          <p className="text-gray-600 text-sm">{study.location}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-purple">{study.properties}</div>
                          <div className="text-xs text-gray-500">Properties</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {study.metrics.slice(0, 2).map((metric, index) => (
                          <div key={index} className="bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <metric.icon className="h-5 w-5 text-primary-orange" />
                              <div className={`text-lg font-bold ${
                                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                              }`}>
                                {metric.trend === 'down' ? '-' : '+'}{metric.value}
                              </div>
                            </div>
                            <div className="text-sm text-gray-600">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                      
                      <p className="text-gray-600 mb-6">{study.challenge}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {study.modules.slice(0, 2).map((module, index) => (
                            <span key={index} className="bg-primary-purple/10 text-primary-purple px-3 py-1 rounded-full text-xs font-medium">
                              {module}
                            </span>
                          ))}
                          {study.modules.length > 2 && (
                            <span className="text-gray-500 text-xs">+{study.modules.length - 2} more</span>
                          )}
                        </div>
                        <Link 
                          href={`/case-studies/${study.id}`}
                          className="btn-primary text-sm"
                        >
                          View Case Study
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </StaggeredList>
            </div>
          </div>
        </ParallaxSection>
      )}

      {/* All Case Studies Grid */}
      <div className="bg-white section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                All Case Studies
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {filteredCaseStudies.length} success stories found
              </p>
            </div>
          </AnimatedSection>
          
          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-500 text-lg">No case studies match your current filters.</div>
              <button 
                onClick={() => {
                  setSelectedPropertyType('all')
                  setSelectedRegion('all')
                  setSelectedUseCase('all')
                  setSearchQuery('')
                }}
                className="mt-4 btn-secondary"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study) => (
                <div 
                  key={study.id} 
                  className="relative group"
                  onMouseEnter={() => setIsFlipped(study.id)}
                  onMouseLeave={() => setIsFlipped(null)}
                >
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden card-hover h-80">
                    {/* Front of Card */}
                    <div className={`absolute inset-0 p-6 transition-transform duration-500 ${
                      isFlipped === study.id ? 'transform rotateY-180' : ''
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {study.clientName.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary-purple">{study.properties}</div>
                          <div className="text-xs text-gray-500">Properties</div>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{study.clientName}</h3>
                      <p className="text-primary-orange font-medium mb-1">{study.industry}</p>
                      <p className="text-gray-600 text-sm mb-4">{study.location}</p>
                      
                      <p className="text-gray-600 text-sm mb-6 line-clamp-3">{study.challenge}</p>
                      
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{study.duration}</span>
                          <EyeIcon className="h-5 w-5 text-gray-400 group-hover:text-primary-orange transition-colors" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Back of Card */}
                    <div className={`absolute inset-0 p-6 bg-gradient-to-br from-primary-purple to-primary-orange text-white transition-transform duration-500 ${
                      isFlipped === study.id ? '' : 'transform rotateY-180'
                    }`}>
                      <h3 className="text-lg font-bold mb-4">Key Results</h3>
                      <div className="space-y-3 mb-6">
                        {study.metrics.slice(0, 3).map((metric, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <span className="text-sm opacity-90">{metric.label}</span>
                            <span className="font-bold">
                              {metric.trend === 'down' ? '-' : '+'}{metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="absolute bottom-6 left-6 right-6">
                        <Link 
                          href={`/case-studies/${study.id}`}
                          className="bg-white text-primary-purple px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center block"
                        >
                          View Full Case Study
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </StaggeredList>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-primary section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                Ready to Write Your Success Story?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-200">
                Join our growing list of successful clients and transform your hospitality business today.
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