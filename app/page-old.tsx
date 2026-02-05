import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { 
  BuildingOfficeIcon,
  HomeModernIcon,
  KeyIcon,
  BuildingStorefrontIcon,
  CogIcon,
  WrenchScrewdriverIcon,
  UsersIcon,
  ArrowPathIcon,
  CircleStackIcon,
  ClipboardDocumentCheckIcon,
  CubeTransparentIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  HomeIcon,
  SparklesIcon,
  PresentationChartLineIcon,
  LinkIcon
} from '@heroicons/react/24/outline'

import AnimatedSection from '@/components/AnimatedSection'
import ParallaxSection from '@/components/ParallaxSection'
import StaggeredList from '@/components/StaggeredList'
import FloatingElements from '@/components/FloatingElements'
import MagneticButton from '@/components/MagneticButton'
import TextReveal from '@/components/TextReveal'
import RollingOptions from '@/components/RollingOptions'
import OfferingDelivering from '@/components/OfferingDelivering'
import { placeholderImages } from '@/components/PlaceholderImage'
import { 
  HotelIcon, 
  ResortIcon, 
  PropertyIcon,
  BookingIcon,
  InspectionIcon,
  ConnectIcon,
  HandbookIcon,
  AuditIcon,
  CloudIcon as CustomCloudIcon,
  SecurityIcon,
  IntegrationIcon,
  GrowthIcon
} from '@/components/CustomIcons'

// Rolling Options Data - Unused maybe remove later on
const rollingOptions = [
  {
    id: 'custom-development',
    title: 'Custom Development',
    subtitle: 'Analysis → Develop → Implement → Support',
    description: 'End-to-end custom software development tailored to your specific hospitality needs. From initial analysis to ongoing support.',
    icon: '⚙️'
  },
  {
    id: 'dedicated-team',
    title: 'Dedicated Team',
    subtitle: 'Develop → Implement → Support',
    description: 'Dedicated development teams for existing tech companies. Seamlessly integrate with your current operations.',
    icon: '👥'
  },
  {
    id: 'in-house-products',
    title: 'In-House Products',
    subtitle: 'Develop → Implement → Support',
    description: 'Ready-to-deploy hospitality products including booking engines, inspection tools, and management platforms.',
    icon: '📦'
  },
  {
    id: 'other-services',
    title: 'Other Services',
    subtitle: 'Data Analysis → System Integration → User Support',
    description: 'Comprehensive data analysis and system user services for any department in your organization.',
    icon: '📊'
  }
]

const targetAudience = [
  { name: 'Property Managers', icon: PropertyIcon },
  { name: 'Hotels', icon: HotelIcon },
  { name: 'Vacation Rentals', icon: ResortIcon },
  { name: 'Serviced Apartments', icon: PropertyIcon },
  { name: 'Enterprises', icon: BuildingOfficeIcon }
]

const problemSolutions = [
  {
    problem: 'Manual work',
    solution: 'Automation',
    icon: ArrowPathIcon,
    description: 'Transform repetitive tasks into automated workflows'
  },
  {
    problem: 'Data silos',
    solution: 'Unified systems',
    icon: CircleStackIcon,
    description: 'Connect all your systems for seamless data flow'
  },
  {
    problem: 'Operational chaos',
    solution: 'Accountability',
    icon: ClipboardDocumentCheckIcon,
    description: 'Clear processes and real-time visibility'
  },
  {
    problem: 'Scaling issues',
    solution: 'Modular platforms',
    icon: CubeTransparentIcon,
    description: 'Grow your business with scalable architecture'
  }
]

const services = [
  {
    name: 'Custom Software Development',
    description: 'Tailored solutions built for your specific needs',
    icon: CogIcon
  },
  {
    name: 'Software Product Engineering',
    description: 'End-to-end product development and optimization',
    icon: WrenchScrewdriverIcon
  },
  {
    name: 'Dedicated Development Teams',
    description: 'Expert teams working exclusively on your projects',
    icon: UsersIcon
  }
]

const products = [
  {
    name: 'Booking Engine',
    description: 'Streamlined reservation management system',
    icon: BookingIcon
  },
  {
    name: 'Virtue Inspect',
    description: 'Property inspection and maintenance tracking',
    icon: InspectionIcon
  },
  {
    name: 'Virtue Connect',
    description: 'Integrated communication platform',
    icon: ConnectIcon
  },
  {
    name: 'Guest Handbook',
    description: 'Digital guest experience management',
    icon: HandbookIcon
  },
  {
    name: 'Data Audit & Logs',
    description: 'Comprehensive data tracking and analytics',
    icon: AuditIcon
  }
]

const platformCapabilities = [
  { name: 'Operations', icon: CustomCloudIcon },
  { name: 'Tasks', icon: ClipboardDocumentCheckIcon },
  { name: 'Housekeeping', icon: HomeIcon },
  { name: 'Guest Experience', icon: SparklesIcon },
  { name: 'Analytics', icon: PresentationChartLineIcon },
  { name: 'Integrations', icon: IntegrationIcon }
]

const whyJebitech = [
  {
    name: 'Microservices Architecture',
    description: 'Scalable, maintainable system design',
    icon: IntegrationIcon
  },
  {
    name: 'Security-First Design',
    description: 'Enterprise-grade security built-in',
    icon: SecurityIcon
  },
  {
    name: 'Cloud-Native Systems',
    description: 'Built for modern cloud infrastructure',
    icon: CustomCloudIcon
  },
  {
    name: 'AI-Ready Platforms',
    description: 'Future-proof with AI integration capabilities',
    icon: GrowthIcon
  }
]

const testimonials = [
  {
    quote: "JebiTech's solutions transformed our operations, reducing manual work by 60% and improving guest satisfaction significantly.",
    author: "Sarah Johnson",
    role: "Operations Manager",
    company: "Luxury Resort Chain"
  },
  {
    quote: "Their hospitality domain expertise is unmatched. They understand our challenges and deliver solutions that actually work.",
    author: "Michael Chen",
    role: "Property Manager",
    company: "Urban Boutique Hotels"
  },
  {
    quote: "The reliability and scalability of JebiTech's platform helped us expand from 5 to 50 properties seamlessly.",
    author: "Emma Rodriguez",
    role: "CEO",
    company: "Vacation Rental Group"
  }
]

const socialProof = {
  clients: "500+",
  properties: "10,000+",
  countries: "25+",
  uptime: "99.9%"
}

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Hero Section with Parallax */}
      <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen flex items-center">
        <FloatingElements />
        
        {/* Animated gradient background */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-primary-orange/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <AnimatedSection direction="up" delay={0.2}>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-heading">
                Empowering the <span className="text-primary-orange">Hospitality Tech</span> Ecosystem
              </h1>
              <AnimatedSection direction="up" delay={0.4}>
                <p className="mt-6 text-xl leading-8 text-gray-600 max-w-4xl mx-auto">
                  Through in-house products, custom solutions, and dedicated development teams for existing hospitality tech platforms.
                </p>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.6}>
                <p className="mt-4 text-lg leading-7 text-gray-500 max-w-4xl mx-auto">
                  A strategic growth partner, offering centralized, end-to-end management for property managers and hospitality tech companies.
                </p>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.6}>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <MagneticButton href="/contact" className="btn-primary text-lg px-8 py-4 hover-glow">
                    Request Demo
                  </MagneticButton>
                  <MagneticButton href="/products" className="btn-secondary text-lg px-8 py-4">
                    Explore Products
                  </MagneticButton>
                </div>
              </AnimatedSection>
              
              {/* Hero Image */}
              <AnimatedSection direction="up" delay={0.8}>
                <div className="mt-16">
                  <div className="relative mx-auto max-w-4xl">
                    <div className="absolute inset-0 bg-primary-orange/20 rounded-2xl blur-3xl"></div>
                    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-2xl border border-gray-200 hover-lift p-8">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🏨</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">JebiTech Platform</h3>
                        <p className="text-gray-600">Comprehensive hospitality management solution</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* 2. Who It's For with Staggered Animation */}
      <ParallaxSection speed={0.3}>
        <div className="bg-secondary-gray section-padding">
          <div className="container-custom">
            <AnimatedSection direction="up">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                  Built for Hospitality Leaders
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Trusted by property managers, hotels, and hospitality enterprises worldwide
                </p>
              </div>
            </AnimatedSection>
            
            <StaggeredList className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {targetAudience.map((audience) => (
                <div key={audience.name} className="text-center card-hover">
                  <div className="mx-auto w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-4 floating">
                    <audience.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">{audience.name}</h3>
                </div>
              ))}
            </StaggeredList>
          </div>
        </div>
      </ParallaxSection>

      {/* 3. Problems → Solutions with Enhanced Animations */}
      <div className="bg-white section-padding relative">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                From Problems to Solutions
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We transform hospitality challenges into competitive advantages
              </p>
            </div>
          </AnimatedSection>
          
          <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problemSolutions.map((item) => (
              <div key={item.problem} className="text-center card-hover glass-morphism p-6 rounded-xl">
                <div className="mx-auto w-16 h-16 bg-primary-purple rounded-full flex items-center justify-center mb-6 pulse-glow">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-2 mb-4">
                  <div className="text-red-600 font-medium line-through">{item.problem}</div>
                  <div className="text-2xl animate-bounce-slow">↓</div>
                  <div className="text-primary-orange font-bold text-lg">{item.solution}</div>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </StaggeredList>
        </div>
      </div>

      {/* 4. What We Do with Parallax */}
      <ParallaxSection speed={0.4}>
        <div className="bg-secondary-gray section-padding">
          <div className="container-custom">
            <AnimatedSection direction="up">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                  What We Do
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Comprehensive technology services for the hospitality industry
                </p>
              </div>
            </AnimatedSection>
            
            <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.name} className="bg-white rounded-xl shadow-sm p-8 text-center card-hover hover-glow">
                  <div className="mx-auto w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 floating">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-heading mb-4">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </StaggeredList>
          </div>
        </div>
      </ParallaxSection>

      {/* 5. In-House Products with Enhanced Effects */}
      <div className="bg-white section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                Our In-House Products
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Proven solutions built specifically for hospitality operations
              </p>
            </div>
          </AnimatedSection>
          
          <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.name} className="bg-secondary-gray rounded-xl p-6 card-hover glass-morphism">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-purple rounded-lg flex items-center justify-center mr-4 pulse-glow">
                    <product.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 font-heading">{product.name}</h3>
                </div>
                <p className="text-gray-600">{product.description}</p>
              </div>
            ))}
          </StaggeredList>
          
          <AnimatedSection direction="up" delay={0.8}>
            <div className="text-center mt-12">
              <Link href="/products" className="btn-primary hover-glow">
                Explore All Products
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* 6. Platform Capabilities with Animated Background */}
      <div className="bg-primary-purple section-padding relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-10"></div>
        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                Complete Platform Capabilities
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Everything you need to run your hospitality business efficiently
              </p>
            </div>
          </AnimatedSection>
          
          <StaggeredList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {platformCapabilities.map((capability) => (
              <div key={capability.name} className="text-center card-hover">
                <div className="mx-auto w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-4 floating pulse-glow">
                  <capability.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">{capability.name}</h3>
              </div>
            ))}
          </StaggeredList>
        </div>
      </div>

      {/* 7. Why Jebitech with Glass Morphism */}
      <ParallaxSection speed={0.2}>
        <div className="bg-secondary-gray section-padding">
          <div className="container-custom">
            <AnimatedSection direction="up">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                  Why Choose JebiTech
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Built on modern architecture principles for scalability and reliability
                </p>
              </div>
            </AnimatedSection>
            
            <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyJebitech.map((feature) => (
                <div key={feature.name} className="bg-white rounded-xl shadow-sm p-6 text-center card-hover hover-glow glass-morphism">
                  <div className="mx-auto w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 floating">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 font-heading mb-3">{feature.name}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </StaggeredList>
          </div>
        </div>
      </ParallaxSection>

      {/* 8. Client Feedback with Enhanced Cards */}
      <div className="bg-white section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                What Our Clients Say
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Trusted by hospitality leaders for reliability and domain expertise
              </p>
            </div>
          </AnimatedSection>
          
          <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-secondary-gray rounded-xl p-8 card-hover glass-morphism">
                <div className="mb-6">
                  <div className="flex text-primary-orange mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current animate-pulse" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-primary-orange font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </StaggeredList>
        </div>
      </div>

      {/* 9. Social Proof with Animated Counters */}
      <div className="bg-primary-purple section-padding relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-20"></div>
        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                Trusted Worldwide
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Our platform powers hospitality operations across the globe
              </p>
            </div>
          </AnimatedSection>
          
          <StaggeredList className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: socialProof.clients, label: 'Happy Clients' },
              { number: socialProof.properties, label: 'Properties Managed' },
              { number: socialProof.countries, label: 'Countries' },
              { number: socialProof.uptime, label: 'Uptime' }
            ].map((stat, index) => (
              <div key={index} className="card-hover">
                <div className="text-4xl font-bold text-primary-orange mb-2 pulse-glow">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </StaggeredList>
          
          {/* Client Logos */}
          <AnimatedSection direction="up" delay={0.4}>
            <div className="mt-16">
              <p className="text-center text-gray-300 mb-8">Trusted by leading hospitality brands</p>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
                {[
                  'Hotel Chain',
                  'Resort Group', 
                  'Property Management',
                  'Vacation Rentals',
                  'Boutique Hotels',
                  'Enterprise'
                ].map((name, index) => (
                  <div key={index} className="flex justify-center">
                    <div className="h-12 w-32 bg-white/20 rounded-lg flex items-center justify-center text-white text-xs font-medium hover:bg-white/30 transition-all duration-300">
                      {name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* 10. Final CTA with Enhanced Effects */}
      <div className="bg-white section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                Ready to Transform Your Operations?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Join hundreds of hospitality businesses that trust JebiTech for their technology needs.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <MagneticButton href="/contact" className="btn-primary text-lg px-8 py-4 hover-glow pulse-glow">
                  Book a Demo
                </MagneticButton>
                <MagneticButton href="/contact" className="btn-secondary text-lg px-8 py-4 card-hover">
                  Talk to Our Experts
                </MagneticButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}