'use client'
import { useRouter } from "next/navigation";
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

// Experience Data
const experienceData = [
  {
    category: 'Tech Companies',
    location: 'USA & Europe',
    description: 'Custom Development',
    units: '30 to 30,000 units',
    icon: '💻',
    color: 'bg-blue-500'
  },
  {
    category: 'Product Implementation',
    location: 'UAE & USA',
    description: 'Vacation rental solutions',
    units: '18 to 120 units per group',
    icon: '🏖️',
    color: 'bg-green-500'
  },
  {
    category: 'Other Services',
    location: 'Europe',
    description: 'Comprehensive support',
    units: '10 to 100k units',
    icon: '🌍',
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
      <div className="relative isolate lg:px-8 min-h-screen flex items-center">
        <FloatingElements />

        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-primary-orange/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="container-custom w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[300px]">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-8">
              <AnimatedSection direction="up" delay={0.2}>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-3xl xl:text-3xl font-heading leading-tight">
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
                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton href="/contact" intensity={0.1} className="btn-primary text-lg px-8 py-4">
                    Request Demo
                  </MagneticButton>
                  <MagneticButton href="/products" intensity={0.1} className="btn-secondary text-lg px-8 py-4">
                    Explore Products
                  </MagneticButton>
                </div>
              </AnimatedSection>

              {/* Trust Indicators */}
              <AnimatedSection direction="up" delay={1.0}>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
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
            <div className="flex justify-top">
              {/* <AnimatedSection direction="right" delay={0.5}> */}
              <div className="w-full max-w-lg lg:max-w-xl">
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
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                Our Solutions
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
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
        <div className="bg-secondary-gray section-padding">
          <div className="container-custom">
            <AnimatedSection direction="up">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                  Why Choose JebiTech
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
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
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                Our Experience
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Proven track record across different markets and scales
              </p>
            </div>
          </AnimatedSection>

          <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experienceData.map((experience) => (
              <div key={experience.category} className="bg-secondary-gray rounded-xl p-8 text-center card-hover hover-glow">
                <div className={`mx-auto w-16 h-16 ${experience.color} rounded-full flex items-center justify-center mb-6 floating`}>
                  <span className="text-2xl">{experience.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{experience.category}</h3>
                <p className="text-primary-orange font-semibold mb-2">{experience.location}</p>
                <p className="text-gray-600 mb-4">{experience.description}</p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm font-semibold text-primary-purple">{experience.units}</p>
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
        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                Trusted Worldwide
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Join thousands of hospitality businesses that trust JebiTech
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
                  'Property Mgmt',
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

      {/* 10. Final CTA */}
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