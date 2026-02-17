import Link from 'next/link'
import {
  UserGroupIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  HeartIcon,
  ChartBarIcon,
  CogIcon,
  UsersIcon,
  StarIcon,
  CheckBadgeIcon,
  MapPinIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

import AnimatedSection from '@/components/AnimatedSection'
import ParallaxSection from '@/components/ParallaxSection'
import StaggeredList from '@/components/StaggeredList'
import FloatingElements from '@/components/FloatingElements'
import jayimage from '../assets/jayimage.jpg';
import pradeepimage from '../assets/pradeepimage.jpg';
import emmanuelimage from '../assets/emmanuelimage.jpg'
import Image from "next/image";
import { TeamCarousel } from '@/components/TeamCrousel'


const leadership = [
  {
    name: "Jay Bhavsar",
    role: "Chief Executive Officer",
    bio: "Dynamic business professional in the field of technology services with relentless focus on customer value and an entrepreneurial passion. In the 14 years of my work experience. I have had a rapidly progressing career from a QA analyst to a Director and co-founder of Maxxton India. Got a great opportunity to form the organization from scratch and learned a lot with it.",
    image: jayimage,
    linkedin: "https://in.linkedin.com/in/jay-bhavsar-0194615"
  },
  {
    name: "Emmanuel Swami",
    role: "Chief Operating Officer",
    bio: "With over 22 years of experience in the information technology sector, I am currently the Service Delivery Head at Jebitech, where I lead the delivery and execution of IT services and product-based solutions across multiple industries. In this role, I oversee end-to-end project and service management, ensuring seamless execution, consistent client satisfaction, and measurable business outcomes.",
    image: emmanuelimage,
    linkedin: "https://www.linkedin.com/in/emmanuel-swami-a78ab039/"
  },
  {
    name: "Pradeep Tiwari",
    role: "Chief Technology Officer",
    bio: "As a seasoned professional at the forefront of R&D in artificial intelligence & Software Development, specializing in Object Detection, OCR, AI Chatbots (LLM), Agentic AI and Predictive Maintenance. With a Ph.D. from SVNIT in AIML, Speech, and Image processing, my academic background is deeply rooted in the very fabric of AI and machine learning.",
    image: pradeepimage,
    linkedin: "https://in.linkedin.com/in/dr-pradeep-tiwari-b63981b8"
  },

  // {
  //   name: "Emma Rodriguez",
  //   role: "Chief Operating Officer",
  //   bio: "20+ years in hotel operations. Former Regional Director at Hilton, deep understanding of property management challenges.",
  //   image: "/team/coo.jpg",
  //   linkedin: "#"
  // },
  // {
  //   name: "David Kim",
  //   role: "Chief Product Officer",
  //   bio: "Product leader with 12+ years building B2B SaaS platforms. Former Head of Product at Oracle Hospitality.",
  //   image: "/team/cpo.jpg",
  //   linkedin: "#"
  // }
]

const advisors = [
  {
    name: "Robert Martinez",
    role: "Former CEO, Hospitality Tech Ventures",
    expertise: "Strategic Growth & M&A",
    image: "/advisors/advisor1.jpg"
  },
  {
    name: "Lisa Thompson",
    role: "Former CTO, Expedia Group",
    expertise: "Platform Architecture & Scale",
    image: "/advisors/advisor2.jpg"
  },
  {
    name: "James Wilson",
    role: "Former VP Operations, Four Seasons",
    expertise: "Hospitality Operations",
    image: "/advisors/advisor3.jpg"
  }
]

const team = [
  // Engineering Team
  { name: "Alex Kumar", role: "Senior Full Stack Engineer", department: "Engineering", image: "/team/eng1.jpg", linkedin: "#" },
  { name: "Maria Santos", role: "DevOps Engineer", department: "Engineering", image: "/team/eng2.jpg", linkedin: "#" },
  { name: "John Park", role: "Frontend Engineer", department: "Engineering", image: "/team/eng3.jpg", linkedin: "#" },
  { name: "Sophie Brown", role: "Backend Engineer", department: "Engineering", image: "/team/eng4.jpg", linkedin: "#" },

  // Product Team
  { name: "Rachel Green", role: "Senior Product Manager", department: "Product", image: "/team/pm1.jpg", linkedin: "#" },
  { name: "Tom Anderson", role: "UX/UI Designer", department: "Product", image: "/team/design1.jpg", linkedin: "#" },
  { name: "Nina Patel", role: "Product Analyst", department: "Product", image: "/team/analyst1.jpg", linkedin: "#" },

  // QA Team
  { name: "Carlos Mendez", role: "QA Lead", department: "QA", image: "/team/qa1.jpg", linkedin: "#" },
  { name: "Amy Liu", role: "Automation Engineer", department: "QA", image: "/team/qa2.jpg", linkedin: "#" }
]

const values = [
  {
    title: "Customer-Centricity",
    description: "Our commitment to clients drives solutions that create meaningful value, enhance ROI, and foster enduring trust and relationship",
    icon: CheckBadgeIcon
  },
  {
    title: "Employee Culture",
    description: "We invest in our people, nurture talent, and foster continuous growth & development, celebrate diversity, creating an environment where everyone can grow, excel, and succeed.",
    icon: ShieldCheckIcon
  },
  {
    title: "Integrity",
    description: "We uphold ethics, honesty, and transparency, building trust in everything we do",
    icon: CogIcon
  },
  {
    title: "Operational Efficiency",
    description: "Simplifying operations to drive reliable, high-impact results based on client needs & oprational flow",
    icon: BuildingOfficeIcon
  }
]

const workingPrinciples = [
  {
    title: "Agile Delivery",
    description: "Iterative development with continuous client feedback and rapid deployment cycles."
  },
  {
    title: "Product Mindset",
    description: "Building solutions that scale, not just custom implementations for single clients."
  },
  {
    title: "Security-First",
    description: "Enterprise-grade security built into every layer of our architecture."
  },
  {
    title: "Documentation",
    description: "Comprehensive documentation ensures knowledge sharing and system maintainability."
  },
  {
    title: "Client Collaboration",
    description: "Deep partnership approach with regular communication and transparent processes."
  }
]

const cultureHighlights = [
  {
    title: "Learning Culture",
    description: "Continuous learning budget, conference attendance, and internal knowledge sharing.",
    icon: AcademicCapIcon
  },
  {
    title: "Ownership Mindset",
    description: "Every team member has equity and decision-making authority in their domain.",
    icon: UserGroupIcon
  },
  {
    title: "Transparency",
    description: "Open communication, shared metrics, and regular all-hands updates.",
    icon: GlobeAltIcon
  },
  {
    title: "Work-Life Balance",
    description: "Flexible remote/hybrid work with focus on results, not hours.",
    icon: HeartIcon
  }
]

const impactMetrics = [
  { metric: "15+", label: "Years in Hospitality" },
  { metric: "10K+", label: "Properties Served" },
  { metric: "100+", label: "Operational Challenges Solved" },
  { metric: "99.9%", label: "System Uptime" }
]

export default function About() {
  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Hero Section */}
      <div className="relative isolate px-6 pt-24 pb-16 md:pt-28 md:pb-20 lg:px-8 overflow-hidden bg-gradient-to-br from-primary-purple via-purple-700 to-purple-800">
        <FloatingElements />

        {/* Enhanced Background */}
        <div className="absolute inset-0 -z-10">
          {/* Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl"></div>
          
          {/* Dot Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '48px 48px'
            }}></div>
          </div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <span className="text-white text-sm font-semibold">🏢 Who We Are</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl font-heading mb-8">
                About JebiTech
              </h1>
              
              {/* Description */}
              <AnimatedSection direction="up" delay={0.4}>
                <p className="text-xl md:text-2xl leading-relaxed text-white/90 max-w-3xl mx-auto">
                  Built by hospitality technology experts, we solve real operational challenges and empower the future of hospitality by delivering innovative technology and serving as a trusted extension of our partners' business operations, platforms, and ecosystems.
                </p>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* 2. Story Section */}
      <div className="relative bg-white section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-primary-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-[600px] h-[600px] bg-primary-orange/5 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          {/* Centered Header */}
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-4xl text-center mb-20">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-8">
                <StarIcon className="w-5 h-5 text-primary-purple" />
                <span className="text-primary-purple text-sm font-semibold">Our Journey</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 font-heading mb-8">
                Our Story
              </h2>
              <p className="text-2xl leading-relaxed text-gray-600 font-medium">
                From a simple insight to enabling hospitality technology ecosystems
              </p>
            </div>
          </AnimatedSection>

          {/* Story Content - Enhanced Typography */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="max-w-6xl mx-auto mb-20">
              <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-12 md:p-16 shadow-xl border border-gray-100 relative overflow-hidden">
                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-purple/5 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-primary-orange/5 to-transparent rounded-tr-full"></div>
                
                <div className="relative z-10 space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed">
                  <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-primary-purple first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                    Our journey began with a straightforward observation: the hospitality industry was not lacking technology, it was lacking the expertise to make technology truly work. Many organizations had access to capable platforms, yet struggled to configure them effectively, integrate them seamlessly, or receive timely enhancements that matched their operational realities.
                  </p>
                  <p>
                    Working closely with operators, we saw teams facing real-world challenges, delayed feature delivery, disconnected systems, and limitations in adapting existing solutions to evolving business needs. In many cases, the gap was not the software itself, but the absence of deep domain expertise bridging hospitality operations and technology execution.
                  </p>
                  <p>
                    We stepped in to fill that gap, partnering with clients as subject-matter experts, enabling better system usage, accelerating delivery, and building custom solutions where standard tools fell short. Over time, these engagements revealed recurring patterns and unmet needs across the industry.
                  </p>
                  <p className="font-semibold text-primary-purple">
                    That insight led us to go further.
                  </p>
                  <p>
                    We began developing our own technology, solutions designed from operational realities, not theoretical assumptions, combining implementation experience, integration depth, and hands-on industry knowledge into platforms that address real challenges.
                  </p>
                  <p className="text-xl md:text-2xl font-semibold text-gray-900 pt-4 border-t-2 border-primary-orange/20">
                    Today, we continue to operate at the intersection of hospitality and technology, delivering our own products while serving as a trusted extension of our partners' ecosystems, focused on solving practical problems and shaping the future of hospitality operations.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Stats Grid - Enhanced Design */}
          <AnimatedSection direction="up" delay={0.4}>
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group bg-gradient-to-br from-primary-purple via-purple-700 to-purple-800 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  <div className="relative z-10">
                    <div className="text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">2017</div>
                    <div className="text-sm text-white/90 font-semibold uppercase tracking-wider">Founded</div>
                  </div>
                </div>
                
                <div className="group bg-gradient-to-br from-primary-orange via-orange-600 to-orange-700 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  <div className="relative z-10">
                    <div className="text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">50+</div>
                    <div className="text-sm text-white/90 font-semibold uppercase tracking-wider">Team Members</div>
                  </div>
                </div>
                
                <div className="group bg-gradient-to-br from-primary-purple via-purple-700 to-purple-800 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  <div className="relative z-10">
                    <div className="text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">10+</div>
                    <div className="text-sm text-white/90 font-semibold uppercase tracking-wider">AI enabled Products</div>
                  </div>
                </div>
                
                <div className="group bg-gradient-to-br from-primary-orange via-orange-600 to-orange-700 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  <div className="relative z-10">
                    <div className="text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">5</div>
                    <div className="text-sm text-white/90 font-semibold uppercase tracking-wider">Continents</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* 3. Vision, Mission & Values */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-primary-purple/5 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-6">
                <StarIcon className="w-5 h-5 text-primary-purple" />
                <span className="text-primary-purple text-sm font-semibold">Our Foundation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading mb-6">
                Vision, Mission & Values
              </h2>
              <p className="text-xl leading-8 text-gray-600">
                The principles that guide everything we build and every decision we make
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            {/* Vision & Mission */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              <AnimatedSection direction="left" delay={0.2}>
                <div className="group relative bg-gradient-to-br from-primary-purple via-purple-700 to-purple-800 rounded-3xl p-12 text-white shadow-2xl overflow-hidden h-full flex flex-col hover:shadow-3xl transition-all duration-300">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <StarIcon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-4xl font-bold">Our Vision</h3>
                    </div>
                    <p className="text-xl text-white/95 leading-relaxed flex-1">
                      To be the trusted technology partner globally for the hospitality industry, helping organisations into technology or hospitality business and end-users, through innovative, seamless, and customized solutions and services delivered by top domain and technology experts.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.3}>
                <div className="group relative bg-gradient-to-br from-primary-orange via-orange-600 to-orange-700 rounded-3xl p-12 text-white shadow-2xl overflow-hidden h-full flex flex-col hover:shadow-3xl transition-all duration-300">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <ChartBarIcon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-4xl font-bold">Our Mission</h3>
                    </div>
                    <p className="text-xl text-white/95 leading-relaxed flex-1">
                      At Jebitech, we partner with hospitality technology companies, combining technology, data, expertise, and service excellence to drive client success, innovation, and sustainable growth.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Values */}
            <AnimatedSection direction="up">
              <div className="relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-4">
                    <StarIcon className="w-5 h-5 text-primary-purple" />
                    <span className="text-primary-purple text-sm font-semibold">What Drives Us</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    The principles that guide every decision we make and every solution we build
                  </p>
                </div>

                {/* Values Grid */}
                <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {values.map((value, index) => (
                    <div 
                      key={value.title} 
                      className="group flex flex-col bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full hover:shadow-2xl hover:border-primary-purple/30 hover:-translate-y-2 transition-all duration-300"
                    >
                      {/* Icon */}
                      <div className="mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary-purple to-purple-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <value.icon className="h-10 w-10 text-white" />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-purple transition-colors duration-300">
                        {value.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-base leading-relaxed flex-1">
                        {value.description}
                      </p>
                      
                      {/* Bottom accent line */}
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="w-12 h-1 bg-gradient-to-r from-primary-orange to-orange-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                      </div>
                    </div>
                  ))}
                </StaggeredList>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* 4. Leadership Team */}
      <ParallaxSection speed={0.2}>
        <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 section-padding overflow-hidden">
          {/* Background Elements */}
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
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-4">
                  <UsersIcon className="w-5 h-5 text-primary-purple" />
                  <span className="text-primary-purple text-sm font-semibold">Meet Our Leaders</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading mb-6">
                  Leadership Team
                </h2>
                <p className="text-xl leading-8 text-gray-600">
                  Experienced leaders with deep hospitality and technology expertise driving innovation and excellence
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {leadership.map((leader) => {
                const initials = leader.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("");

                return (
                  <div
                    key={leader.name}
                    className="flex flex-col bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full"
                  >
                    {/* Profile Image Section */}
                    <div className="relative bg-gradient-to-br from-primary-purple to-purple-700 p-8 pb-16">
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                          backgroundSize: '24px 24px'
                        }}></div>
                      </div>
                      <div className="relative w-32 h-32 rounded-2xl mx-auto overflow-hidden bg-white shadow-2xl ring-4 ring-white/20">
                        {leader.image ? (
                          <Image
                            src={leader.image}
                            alt={leader.name}
                            width={128}
                            height={128}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary-orange to-orange-600 flex items-center justify-center">
                            <span className="text-white font-bold text-3xl">
                              {initials}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col flex-1 p-6 -mt-8 relative z-10">
                      {/* Name & Role Card */}
                      <div className="bg-white rounded-xl shadow-md p-4 mb-4 border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 text-center mb-1">
                          {leader.name}
                        </h3>
                        <p className="text-primary-orange text-sm text-center font-semibold">
                          {leader.role}
                        </p>
                      </div>

                      {/* Bio */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                        {leader.bio}
                      </p>

                      {/* LinkedIn Link */}
                      <div className="pt-4 border-t border-gray-100">
                        <Link
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 text-primary-purple font-semibold text-sm"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                          </svg>
                          <span>Connect on LinkedIn</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </StaggeredList>
          </div>
        </div>
      </ParallaxSection>
      {/* 5. Advisory Board */}
      {/* <div className="bg-white section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                Advisory Board
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Industry veterans and former executives who guide our strategic direction
              </p>
            </div>
          </AnimatedSection>

          <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor) => (
              <div key={advisor.name} className="text-center card-hover">
                <div className="w-20 h-20 bg-gradient-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {advisor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{advisor.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{advisor.role}</p>
                <p className="text-primary-orange text-sm font-medium">{advisor.expertise}</p>
              </div>
            ))}
          </StaggeredList>
        </div>
      </div> */}

      {/* 6. Our Team */}
      <div className="relative bg-white section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-6">
                <UserGroupIcon className="w-5 h-5 text-primary-purple" />
                <span className="text-primary-purple text-sm font-semibold">Meet the Team</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading mb-6">
                Our Team
              </h2>
              <p className="text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
                World-class engineers, designers, and product experts building the future of hospitality tech
              </p>
            </div>
          </AnimatedSection>

          {/* Team Carousel - Fixed positioning issue */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="relative">
              <TeamCarousel />
            </div>
          </AnimatedSection>

          {/* Team Stats */}
          <AnimatedSection direction="up" delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { number: '50+', label: 'Team Members' },
                { number: '15+', label: 'Countries' },
                { number: '20+', label: 'Years Experience' },
                { number: '100%', label: 'Remote-First' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-primary-purple mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>


      {/* 7. How We Work */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 section-padding overflow-hidden">
        {/* Background Elements */}
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-6">
                <CogIcon className="w-5 h-5 text-primary-purple" />
                <span className="text-primary-purple text-sm font-semibold">Our Methodology</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading mb-6">
                How We Work
              </h2>
              <p className="text-xl leading-8 text-gray-600">
                Our proven methodology for delivering exceptional hospitality technology solutions
              </p>
            </div>
          </AnimatedSection>

          {/* Featured Layout: 2 columns on top, 3 columns on bottom */}
          <div className="max-w-6xl mx-auto">
            {/* Top Row - 2 Cards */}
            <StaggeredList className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {workingPrinciples.slice(0, 2).map((principle, index) => (
                <div 
                  key={principle.title} 
                  className="flex flex-col bg-white rounded-2xl p-8 shadow-md border border-gray-100 group hover:shadow-xl hover:border-primary-orange/30 transition-all duration-300"
                >
                  {/* Header with Number and Line */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-purple to-purple-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-2xl">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-purple transition-colors duration-300">
                        {principle.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed flex-1">
                    {principle.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="w-16 h-1.5 bg-gradient-to-r from-primary-orange to-orange-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </StaggeredList>

            {/* Bottom Row - 3 Cards */}
            <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {workingPrinciples.slice(2).map((principle, index) => (
                <div 
                  key={principle.title} 
                  className="flex flex-col bg-white rounded-2xl p-8 shadow-md border border-gray-100 h-full group hover:shadow-xl hover:border-primary-orange/30 transition-all duration-300"
                >
                  {/* Number Badge */}
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-purple to-purple-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">{index + 3}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-purple transition-colors duration-300">
                    {principle.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {principle.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="w-12 h-1.5 bg-gradient-to-r from-primary-orange to-orange-600 rounded-full group-hover:w-20 transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </StaggeredList>
          </div>
        </div>
      </div>



      {/* 9. Culture & Life at JebiTech */}
      {/* <ParallaxSection speed={0.3}>
        <div className="bg-secondary-gray section-padding">
          <div className="container-custom">
            <AnimatedSection direction="up">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                  Culture & Life at JebiTech
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We've built a culture that attracts top talent and empowers everyone to do their best work
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cultureHighlights.map((highlight) => (
                <div key={highlight.title} className="bg-white rounded-xl p-6 card-hover hover-glow">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </div>
              ))}
            </StaggeredList>
          </div>
        </div>
      </ParallaxSection> */}

      {/* 10. Careers CTA */}
      <div className="bg-gradient-to-br from-primary-purple to-purple-800 section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                Build the Future of Hospitality Tech
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
                Join our team of passionate engineers, designers, and hospitality experts who are
                transforming how the industry operates.
              </p>
              <div className="mt-10">
                <Link href="/careers" className="bg-white text-primary-purple px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg inline-block">
                  View Open Positions
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* 11. Trust & Compliance */}
      {/* <div className="bg-white section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                Trust & Security
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Enterprise-grade security and compliance practices protect your data and operations
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="text-center card-hover">
                <ShieldCheckIcon className="h-12 w-12 text-primary-orange mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">SOC 2 Ready</h3>
                <p className="text-gray-600 text-sm">Security controls and processes designed for SOC 2 compliance</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="text-center card-hover">
                <GlobeAltIcon className="h-12 w-12 text-primary-orange mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">GDPR Compliant</h3>
                <p className="text-gray-600 text-sm">Data protection practices that meet European privacy standards</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="text-center card-hover">
                <CheckBadgeIcon className="h-12 w-12 text-primary-orange mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Enterprise NDAs</h3>
                <p className="text-gray-600 text-sm">Comprehensive confidentiality agreements with all team members</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <div className="text-center card-hover">
                <CogIcon className="h-12 w-12 text-primary-orange mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Security-First</h3>
                <p className="text-gray-600 text-sm">Security considerations built into every layer of our architecture</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div> */}

      {/* 12. Our Impact - Deep Hospitality Expertise */}
      <div className="relative bg-gradient-to-br from-primary-purple via-purple-700 to-purple-800 section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <ChartBarIcon className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-semibold">Proven Results</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading mb-6">
                Our Impact
              </h2>
              <p className="text-xl leading-8 text-white/90">
                Deep hospitality knowledge and proven impact across the industry
              </p>
            </div>
          </AnimatedSection>

          {/* Impact Metrics - Enhanced Design */}
          <StaggeredList className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {impactMetrics.map((item, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.metric}
                  </div>
                  <div className="text-white/90 font-semibold text-sm uppercase tracking-wider">{item.label}</div>
                </div>
              </div>
            ))}
          </StaggeredList>
        </div>
      </div>



      {/* 14. Final CTA */}
      <div className="relative bg-white section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Floating Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-4xl text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-6">
                <span className="text-primary-purple text-sm font-semibold">🚀 Let's Build Something Great Together</span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-heading mb-6">
                Ready to Work Together?
              </h2>
              
              {/* Description */}
              <p className="mx-auto max-w-2xl text-xl leading-8 text-gray-600 mb-10">
                Whether you're looking to transform your operations, partner with us, or join our team,
                we'd love to hear from you.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link 
                  href="/contact" 
                  className="group relative px-10 py-5 bg-primary-purple text-white rounded-full font-bold text-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3"
                >
                  <span>Talk to Leadership</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/contact" 
                  className="group px-10 py-5 bg-white text-primary-purple rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 border-2 border-primary-purple shadow-lg flex items-center gap-3"
                >
                  <span>Partner with Us</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Additional Link */}
              <div className="text-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-primary-purple font-semibold hover:text-primary-orange transition-colors text-lg group"
                >
                  <span>Join the Team</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}