'use client'
import { useRouter } from "next/navigation";
import { Laptop, Palmtree, Globe, BarChart3, Building2, Rocket, Settings, Users, Package } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import ParallaxSection from '@/components/ParallaxSection'
import StaggeredList from '@/components/StaggeredList'
import FloatingElements from '@/components/FloatingElements'
import MagneticButton from '@/components/MagneticButton'
import RollingOptions from '@/components/RollingOptions'
import OfferingDelivering from '@/components/OfferingDelivering'
import HeroMotionGraphic from '@/components/HeroMotionGraphic'
import {
  PropertyIcon,
  IntegrationIcon,
  GrowthIcon
} from '@/components/CustomIcons'
import AnimatedHeroHeadline from '@/components/AnimatedHeroHeadline'
import TechnologyTeamSection from '@/components/TechnologyTeamSection'
import ProductShowcase from '@/components/ProductShowcase'

// Rolling Options Data
const rollingOptions = [
  {
    id: 'custom-development',
    title: 'Custom Development',
    subtitle: 'Analysis → Develop → Implement → Support',
    description: 'End-to-end custom software development tailored to your specific hospitality needs. From initial analysis to ongoing support.',
    icon: Settings
  },
  {
    id: 'dedicated-team',
    title: 'Dedicated Team',
    subtitle: 'Develop → Implement → Support',
    description: 'Dedicated development teams for existing tech companies. Seamlessly integrate with your current operations.',
    icon: Users
  },
  {
    id: 'in-house-products',
    title: 'In-House Products',
    subtitle: 'Develop → Implement → Support',
    description: 'Ready-to-deploy hospitality products including booking engines, inspection tools, and management platforms.',
    icon: Package
  },
  {
    id: 'other-services',
    title: 'Other Services',
    subtitle: 'Data Analysis → System Integration → User Support',
    description: 'Comprehensive data analysis and system user services for any department in your organization.',
    icon: BarChart3
  }
]

// Experience Data
const experienceData = [
  {
    category: 'Tech Companies',
    location: 'USA & Europe',
    description: 'Custom Development',
    units: '30 to 30,000 units',
    icon: Laptop,
    color: 'bg-blue-500'
  },
  {
    category: 'Product Implementation',
    location: 'UAE & USA',
    description: 'Vacation rental solutions',
    units: '18 to 120 units per group',
    icon: Palmtree,
    color: 'bg-green-500'
  },
  {
    category: 'Other Services',
    location: 'Europe',
    description: 'Comprehensive support',
    units: '10 to 100k units',
    icon: Globe,
    color: 'bg-purple-500'
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
  const router = useRouter();
  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Hero Section - Guesty Style */}
      <div className="relative isolate lg:px-8 pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 flex items-center">
        <FloatingElements />

        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-primary-orange/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="container-custom w-full px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-6 md:space-y-8">
              <AnimatedSection direction="up" delay={0.2}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-gray-900 font-heading leading-tight">
                  Empowering the <span className="text-primary-orange">Hospitality Tech</span> Ecosystem
                </h1>
              </AnimatedSection>

              {/* <AnimatedSection direction="up" delay={0.4}>
                <p className="text-xl leading-8 text-gray-600 max-w-2xl lg:text-2xl">
                  Through in-house products, custom solutions, and dedicated development teams for existing hospitality tech platforms.
                </p>
              </AnimatedSection> */}
              <AnimatedHeroHeadline />

              {/* <AnimatedSection direction="up" delay={0.6}>
                <p className="text-lg leading-7 text-gray-500 max-w-2xl">
                  A strategic growth partner, offering centralized, end-to-end management for property managers and hospitality tech companies.
                </p>
              </AnimatedSection> */}

              {/* CTA Buttons */}
              <AnimatedSection direction="up" delay={0.8}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <MagneticButton href="/contact" intensity={0.1} className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center">
                    Request Demo
                  </MagneticButton>
                  <MagneticButton href="/products" intensity={0.1} className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center">
                    Explore Products
                  </MagneticButton>
                </div>
              </AnimatedSection>

              {/* Trust Indicators */}
              <AnimatedSection direction="up" delay={1.0}>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>500+ Happy Clients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>10,000+ Properties</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>25+ Countries</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Motion Graphic */}
            <div className="flex justify-center lg:justify-start mt-8 lg:mt-0">
              {/* <AnimatedSection direction="right" delay={0.5}> */}
              <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
                <HeroMotionGraphic />
              </div>
              {/* </AnimatedSection> */}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Offering & Delivering Section */}
      <ParallaxSection speed={0.3}>
        <div className="bg-secondary-gray section-padding">
          <div className="container-custom">
            <AnimatedSection direction="up">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                  Who We Serve
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Strategic partnerships across the hospitality ecosystem
                </p>
              </div>
            </AnimatedSection>

            <OfferingDelivering />
          </div>
        </div>
      </ParallaxSection>

      {/* 3. Rolling Options Section */}
      <div className="bg-white section-padding">
        <div className="container-custom px-4 sm:px-6">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 font-heading">
                Our Solutions
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 px-4 sm:px-0">
                Comprehensive technology solutions for every stage of your growth
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3}>
            <RollingOptions options={rollingOptions} className="w-full" />
          </AnimatedSection>
        </div>
      </div>

      {/* 4. What We Do - Services */}
      {/* <ParallaxSection speed={0.2}>
        <div className="bg-secondary-gray section-padding">
          <div className="container-custom">
            <AnimatedSection direction="up">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                  Services
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Specialized services tailored to your business needs
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.name} className="bg-white rounded-xl shadow-sm p-8 text-center card-hover hover-glow">
                  <div className="mx-auto w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mb-6 floating">
                    <service.icon className="h-8 w-8 text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-sm text-gray-500">{service.details}</p>
                </div>
              ))}
            </StaggeredList>
          </div>
        </div>
      </ParallaxSection> */}

      {/* 5. In-House Products */}
      {/* <div className="bg-white section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                In-House Products
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ready-to-deploy solutions built specifically for hospitality
              </p>
            </div>
          </AnimatedSection>

          <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.name} className="bg-secondary-gray rounded-xl p-6 card-hover glass-morphism">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-purple rounded-lg flex items-center justify-center mr-4 pulse-glow">
                    <product.icon className="h-6 w-6 text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                {product.features && (
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-primary-orange rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </StaggeredList>
        </div>
      </div> */}
      {/* Product Showcase - Reusable Component */}
      <ProductShowcase 
        showHeader={true}
        autoRotate={true}
        rotationInterval={8000}
      />

      {/* 6. Why JebiTech - Animated */}
      <ParallaxSection speed={0.1}>
        <div className="relative bg-secondary-gray py-8 sm:py-12 md:py-16 overflow-hidden">
          <div className="container-custom px-4 sm:px-6 relative z-10">
            <AnimatedSection direction="up">
              <div className="mx-auto max-w-2xl text-center mb-4 sm:mb-6 md:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 font-heading">
                  Why Choose JebiTech
                </h2>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-6 sm:leading-7 text-gray-600">
                  Our expertise and experience in hospitality technology
                </p>
              </div>
            </AnimatedSection>

            {/* <WhyJebiTechAnimated /> */}
            <TechnologyTeamSection />
          </div>
        </div>

      </ParallaxSection>

      {/* 7. Experience Boxes */}
      <div className="bg-white section-padding">
        <div className="container-custom px-4 sm:px-6">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-200 mb-4 sm:mb-6">
                <BarChart3 className="w-4 h-4 text-primary-purple" />
                <span className="text-primary-purple text-xs sm:text-sm font-semibold">Track Record</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 font-heading mb-4 sm:mb-6 px-4">
                Our Experience
              </h2>
              <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-600 px-4">
                Proven track record across different markets and scales
              </p>
            </div>
          </AnimatedSection>

          <StaggeredList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {experienceData.map((experience, index) => (
              <div 
                key={experience.category} 
                className="relative bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg border border-gray-100 transition-all duration-300 overflow-hidden flex flex-col h-full hover:scale-105"
              >
                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1">
                  {/* Icon with enhanced styling */}
                  <div className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6">
                    <div className={`absolute inset-0 ${experience.color} rounded-2xl blur-xl opacity-40 transition-opacity duration-300`}></div>
                    <div className={`relative w-16 h-16 sm:w-20 sm:h-20 ${experience.color} rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300`}>
                      <experience.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Category */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 transition-colors duration-300 px-2">
                    {experience.category}
                  </h3>

                  {/* Location Badge */}
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-gradient-to-r from-primary-orange/10 to-primary-orange/20 rounded-full mb-4 mx-auto">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-primary-orange font-bold text-xs sm:text-sm whitespace-nowrap">{experience.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed px-2">
                    {experience.description}
                  </p>

                  {/* Spacer to push units card to bottom */}
                  <div className="flex-1"></div>

                  {/* Units Card */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-3 sm:p-4 border border-gray-100 shadow-sm transition-all duration-300">
                    <p className="text-xs sm:text-sm font-bold text-primary-purple">
                      {experience.units}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </StaggeredList>
        </div>
      </div>

      {/* 8. Client Testimonials */}
      <ParallaxSection speed={0.2}>
        <div className="bg-secondary-gray section-padding">
          <div className="container-custom">
            <AnimatedSection direction="up">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                  What Our Clients Say
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Trusted by hospitality leaders worldwide
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-8 card-hover hover-glow">
                  <div className="mb-6">
                    <div className="flex text-primary-orange mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
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
      </ParallaxSection>

      {/* 9. Social Proof */}
      <div className="bg-primary-purple section-padding relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 px-4 sm:px-6">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{
                backdropFilter: 'blur(5px) saturate(180%)',
                WebkitBackdropFilter: 'blur(5px) saturate(180%)',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <Globe className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-semibold">Global Impact</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading mb-6">
                Trusted Worldwide
              </h2>
              <p className="text-lg sm:text-xl leading-8 text-white/90">
                Join thousands of hospitality businesses that trust JebiTech
              </p>
            </div>
          </AnimatedSection>

          <StaggeredList className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {[
              { number: socialProof.clients, label: 'Happy Clients', icon: Users },
              { number: socialProof.properties, label: 'Properties Managed', icon: Building2 },
              { number: socialProof.countries, label: 'Countries', icon: Globe },
              { number: socialProof.uptime, label: 'Uptime', icon: BarChart3 }
            ].map((stat) => (
              <AnimatedSection key={stat.label} direction="up" delay={0.1}>
                <div className="text-center">
                  {/* Icon */}
                  <div className="mb-3">
                    <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white/60 mx-auto" strokeWidth={1.5} />
                  </div>
                  
                  {/* Number */}
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm sm:text-base text-white/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </StaggeredList>

          {/* Client Logos */}
          <AnimatedSection direction="up" delay={0.4}>
            <div>
              <p className="text-center text-white/90 text-base sm:text-lg mb-8 font-medium">Trusted by leading hospitality brands</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                {[
                  { name: 'Hotel Chains', icon: Building2 },
                  { name: 'Resort Group', icon: Palmtree },
                  { name: 'Property Mgmt', icon: Building2 },
                  { name: 'Vacation Rentals', icon: Palmtree },
                  { name: 'Boutique Hotels', icon: Building2 },
                  { name: 'Enterprise', icon: Rocket }
                ].map((client) => (
                  <div key={client.name} className="flex justify-center">
                    <div className="h-20 sm:h-24 w-full rounded-xl flex flex-col items-center justify-center gap-2 text-white hover:scale-105 transition-all duration-300 group" style={{
                      backdropFilter: 'blur(5px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(5px) saturate(180%)',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)'
                    }}>
                      <client.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 group-hover:text-white transition-colors" strokeWidth={1.5} />
                      <span className="text-xs sm:text-sm font-semibold text-center px-2">{client.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* 10. Final CTA */}
      <div className="bg-white section-padding">
        <div className="container-custom px-4 sm:px-6">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-200 mb-6">
                <Rocket className="w-4 h-4 text-primary-purple" />
                <span className="text-primary-purple text-sm font-semibold">Get Started Today</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 font-heading mb-6">
                Ready to Transform Your Operations?
              </h2>
              <p className="mx-auto max-w-2xl text-lg sm:text-xl leading-8 text-gray-600 mb-10">
                Join hundreds of hospitality businesses that trust JebiTech for their technology needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton href="/contact" className="btn-primary text-base sm:text-lg px-8 py-4 w-full sm:w-auto">
                  Book a Demo
                </MagneticButton>
                <MagneticButton href="/contact" className="btn-secondary text-base sm:text-lg px-8 py-4 w-full sm:w-auto">
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