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
    title: "People-Centric Culture",
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
  { metric: "500+", label: "Properties Managed" },
  { metric: "10M+", label: "Guest Interactions" },
  { metric: "99.9%", label: "System Uptime" },
  { metric: "25+", label: "Countries Served" }
]

export default function About() {
  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Hero Section */}
      <div className="relative isolate px-6 pt-24 pb-12 md:pt-28 md:pb-16 lg:px-8">
        <FloatingElements />

        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-r from-primary-orange/20 to-primary-purple/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="container-custom">
          <AnimatedSection direction="up" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl font-heading mb-6">
                About JebiTech
              </h1>
              <AnimatedSection direction="up" delay={0.4}>
                <p className="text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
                  Built by hospitality and technology experts to solve real operational challenges
                  and empower the future of hospitality.
                </p>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* 2. Story Section */}
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
          {/* Centered Header */}
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-6">
                <StarIcon className="w-5 h-5 text-primary-purple" />
                <span className="text-primary-purple text-sm font-semibold">Our Journey</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-heading mb-6">
                Our Story
              </h2>
              <p className="text-xl leading-8 text-gray-600">
                From a simple observation to a comprehensive hospitality technology platform
              </p>
            </div>
          </AnimatedSection>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <AnimatedSection direction="left" delay={0.2} className="flex">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 w-full flex flex-col">
                <div className="space-y-6 text-base text-gray-600 leading-relaxed flex-1">
                  <p>
                    JebiTech was born from a simple observation: hospitality businesses were drowning in
                    manual processes, disconnected systems, and technology that didn't understand their
                    unique operational challenges.
                  </p>
                  <p>
                    Founded by former hospitality operators and technology leaders, we've experienced
                    firsthand the frustration of systems that promise everything but deliver complexity.
                    We built JebiTech to bridge this gap.
                  </p>
                  <p>
                    Today, we're a team of hospitality domain experts and world-class engineers,
                    building the technology platform that we wished existed when we were running
                    hotels, vacation rentals, and hospitality operations.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3} className="flex">
              <div className="bg-gradient-to-br from-primary-purple via-purple-700 to-purple-800 rounded-2xl p-10 shadow-2xl relative overflow-hidden w-full flex flex-col">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-orange/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="relative z-10 flex-1 flex items-center">
                  <div className="grid grid-cols-2 gap-6 w-full">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                      <div className="text-5xl font-bold text-white mb-2">2019</div>
                      <div className="text-sm text-white/80 font-medium">Founded</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                      <div className="text-5xl font-bold text-primary-orange mb-2">50+</div>
                      <div className="text-sm text-white/80 font-medium">Team Members</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                      <div className="text-5xl font-bold text-white mb-2">500+</div>
                      <div className="text-sm text-white/80 font-medium">Properties</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                      <div className="text-5xl font-bold text-primary-orange mb-2">25+</div>
                      <div className="text-sm text-white/80 font-medium">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* 3. Vision, Mission & Values */}
      <div className="relative bg-white section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-6">
                <StarIcon className="w-5 h-5 text-primary-purple" />
                <span className="text-primary-purple text-sm font-semibold">Our Foundation</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-heading mb-6">
                Vision, Mission & Values
              </h2>
              <p className="text-xl leading-8 text-gray-600">
                The principles that guide everything we build and every decision we make
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            {/* Vision & Mission */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnimatedSection direction="left" delay={0.2}>
                <div className="relative bg-gradient-to-br from-primary-purple via-purple-700 to-purple-800 rounded-2xl p-10 text-white shadow-2xl overflow-hidden h-full flex flex-col">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <StarIcon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold">Our Vision</h3>
                    </div>
                    <p className="text-lg text-white/90 leading-relaxed flex-1">
                      To be the trusted technology partner Globally for the hospitality industry,
                      helping organisations into technology or hospitality business and end-users,
                      through innovative, seamless, and customized solutions and Services delivered by top domain and technology experts.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.3}>
                <div className="relative bg-gradient-to-br from-primary-orange via-orange-600 to-orange-700 rounded-2xl p-10 text-white shadow-2xl overflow-hidden h-full flex flex-col">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <ChartBarIcon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold">Our Mission</h3>
                    </div>
                    <p className="text-lg text-white/90 leading-relaxed flex-1">
                      At Jebitech, we partner with hospitality technology companies,
                      combining technology, data, expertise, and service excellence
                      to drive client success, innovation, and sustainable growth.
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
                <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {values.map((value, index) => (
                    <div 
                      key={value.title} 
                      className="flex flex-col bg-white rounded-2xl p-8 shadow-md border border-gray-100 h-full"
                    >
                      {/* Icon */}
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-purple to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
                          <value.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        {value.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed flex-1">
                        {value.description}
                      </p>
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
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-heading mb-6">
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
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-heading mb-6">
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
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-heading mb-6">
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

      {/* 8. Hospitality Domain Expertise */}
      <div className="bg-primary-purple section-padding relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-20"></div>
        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                Deep Hospitality Expertise
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                We don't just build software—we understand hospitality operations inside and out
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection direction="up" delay={0.2}>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-orange mb-4">15+</div>
                <div className="text-white font-semibold mb-2">Years in Hospitality</div>
                <div className="text-gray-300 text-sm">Combined team experience in hotel operations, vacation rentals, and property management</div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-orange mb-4">10K+</div>
                <div className="text-white font-semibold mb-2">Properties Served</div>
                <div className="text-gray-300 text-sm">From boutique hotels to large resort chains, vacation rentals to serviced apartments</div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.6}>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-orange mb-4">100+</div>
                <div className="text-white font-semibold mb-2">Operational Challenges Solved</div>
                <div className="text-gray-300 text-sm">Real-world problems from housekeeping workflows to revenue optimization</div>
              </div>
            </AnimatedSection>
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

      {/* 12. Client Impact & Proof */}
      <div className="relative bg-white section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-6">
                <ChartBarIcon className="w-5 h-5 text-primary-purple" />
                <span className="text-primary-purple text-sm font-semibold">Proven Results</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-heading mb-6">
                Our Impact
              </h2>
              <p className="text-xl leading-8 text-gray-600">
                Real results from real hospitality businesses using JebiTech solutions
              </p>
            </div>
          </AnimatedSection>

          {/* Impact Metrics */}
          <StaggeredList className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {impactMetrics.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md border border-gray-100 text-center">
                <div className="text-5xl font-bold text-primary-purple mb-3">
                  {item.metric}
                </div>
                <div className="text-gray-600 font-medium text-sm">{item.label}</div>
              </div>
            ))}
          </StaggeredList>

          {/* Testimonial */}
          <AnimatedSection direction="up" delay={0.4}>
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-purple to-purple-700 rounded-2xl p-10 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-orange/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              {/* Quote Icon */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <blockquote className="text-center">
                  <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
                    "JebiTech doesn't just provide software—they understand our business. Their team has walked in our shoes, and it shows in every feature they build."
                  </p>
                  <footer className="border-t border-white/20 pt-6">
                    <div className="font-bold text-white text-lg mb-1">Sarah Mitchell</div>
                    <div className="text-white/80 text-sm">VP Operations, Luxury Resort Group</div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* 13. Global Presence */}
      <div className="bg-primary-purple section-padding relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-20"></div>
        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                Global Reach, Local Understanding
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Supporting hospitality businesses across multiple continents with 24/7 coverage
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <AnimatedSection direction="up" delay={0.2}>
              <div>
                <MapPinIcon className="h-12 w-12 text-primary-orange mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">North America</div>
                <div className="text-gray-300">Headquarters in San Francisco, distributed team across US & Canada</div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <div>
                <GlobeAltIcon className="h-12 w-12 text-primary-orange mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">Europe & APAC</div>
                <div className="text-gray-300">Development centers in London, Berlin, and Singapore</div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.6}>
              <div>
                <UsersIcon className="h-12 w-12 text-primary-orange mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">24/7 Support</div>
                <div className="text-gray-300">Round-the-clock technical support across all time zones</div>
              </div>
            </AnimatedSection>
          </div>
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