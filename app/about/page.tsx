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
  MapPinIcon
} from '@heroicons/react/24/outline'

import AnimatedSection from '@/components/AnimatedSection'
import ParallaxSection from '@/components/ParallaxSection'
import StaggeredList from '@/components/StaggeredList'
import FloatingElements from '@/components/FloatingElements'

const leadership = [
  {
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    bio: "15+ years in hospitality technology. Former VP at Marriott International, led digital transformation initiatives across 500+ properties.",
    image: "/team/ceo.jpg",
    linkedin: "#"
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    bio: "Former Principal Engineer at Airbnb. Expert in scalable systems and microservices architecture for hospitality platforms.",
    image: "/team/cto.jpg",
    linkedin: "#"
  },
  {
    name: "Emma Rodriguez",
    role: "Chief Operating Officer",
    bio: "20+ years in hotel operations. Former Regional Director at Hilton, deep understanding of property management challenges.",
    image: "/team/coo.jpg",
    linkedin: "#"
  },
  {
    name: "David Kim",
    role: "Chief Product Officer",
    bio: "Product leader with 12+ years building B2B SaaS platforms. Former Head of Product at Oracle Hospitality.",
    image: "/team/cpo.jpg",
    linkedin: "#"
  }
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
    title: "Ownership",
    description: "We take full responsibility for our work and its impact on our clients' success.",
    icon: CheckBadgeIcon
  },
  {
    title: "Reliability",
    description: "Our systems and team deliver consistent, dependable results that clients can count on.",
    icon: ShieldCheckIcon
  },
  {
    title: "Craftsmanship",
    description: "We build with attention to detail, quality, and long-term maintainability.",
    icon: CogIcon
  },
  {
    title: "Domain-First Thinking",
    description: "Deep hospitality expertise drives every product decision and technical choice.",
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
      <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen flex items-center">
        <FloatingElements />
        
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] animated-gradient opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <AnimatedSection direction="up" delay={0.2}>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-heading">
                About <span className="text-primary-orange">JebiTech</span>
              </h1>
              <AnimatedSection direction="up" delay={0.4}>
                <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
                  Built by hospitality and technology experts to solve real operational challenges 
                  and empower the future of hospitality.
                </p>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* 2. Story Section */}
      <ParallaxSection speed={0.3}>
        <div className="bg-secondary-gray section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="left">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading mb-6">
                    Our Story
                  </h2>
                  <div className="space-y-6 text-lg text-gray-600">
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
              
              <AnimatedSection direction="right" delay={0.3}>
                <div className="bg-white rounded-2xl p-8 shadow-lg glass-morphism">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">2019</div>
                      <div className="text-sm text-gray-600">Founded</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">50+</div>
                      <div className="text-sm text-gray-600">Team Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">500+</div>
                      <div className="text-sm text-gray-600">Properties</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-orange mb-2">25+</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* 3. Vision, Mission & Values */}
      <div className="bg-white section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                Our Foundation
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                The principles that guide everything we build and every decision we make
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-16">
            {/* Vision & Mission */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <AnimatedSection direction="left">
                <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-lg opacity-90">
                    To transform hospitality operations worldwide through intelligent, 
                    domain-specific technology that empowers businesses to deliver 
                    exceptional guest experiences while achieving operational excellence.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection direction="right">
                <div className="bg-secondary-gray rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                  <p className="text-lg text-gray-600">
                    We build scalable, secure, and intuitive technology solutions that 
                    solve real hospitality challenges, enabling our clients to focus on 
                    what they do best: creating memorable experiences for their guests.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Values */}
            <AnimatedSection direction="up">
              <div>
                <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">Our Values</h3>
                <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {values.map((value) => (
                    <div key={value.title} className="text-center card-hover glass-morphism p-6 rounded-xl">
                      <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6 floating">
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.description}</p>
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
        <div className="bg-secondary-gray section-padding">
          <div className="container-custom">
            <AnimatedSection direction="up">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                  Leadership Team
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Experienced leaders with deep hospitality and technology expertise
                </p>
              </div>
            </AnimatedSection>
            
            <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader) => (
                <div key={leader.name} className="bg-white rounded-xl shadow-sm p-6 card-hover hover-glow">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 text-center mb-2">{leader.name}</h3>
                  <p className="text-primary-orange text-sm text-center mb-4 font-medium">{leader.role}</p>
                  <p className="text-gray-600 text-sm text-center mb-4">{leader.bio}</p>
                  <div className="text-center">
                    <Link href={leader.linkedin} className="text-primary-purple hover:text-primary-orange transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      LinkedIn →
                    </Link>
                  </div>
                </div>
              ))}
            </StaggeredList>
          </div>
        </div>
      </ParallaxSection>

      {/* 5. Advisory Board */}
      <div className="bg-white section-padding">
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
      </div>

      {/* 6. Our Team */}
      <ParallaxSection speed={0.4}>
        <div className="bg-secondary-gray section-padding">
          <div className="container-custom">
            <AnimatedSection direction="up">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                  Our Team
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  World-class engineers, designers, and product experts building the future of hospitality tech
                </p>
              </div>
            </AnimatedSection>
            
            <StaggeredList className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.name} className="bg-white rounded-lg p-4 card-hover glass-morphism">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 text-center mb-1">{member.name}</h3>
                  <p className="text-xs text-primary-orange text-center mb-1 font-medium">{member.role}</p>
                  <p className="text-xs text-gray-500 text-center mb-2">{member.department}</p>
                  <div className="text-center">
                    <Link href={member.linkedin} className="text-xs text-primary-purple hover:text-primary-orange transition-colors">
                      LinkedIn
                    </Link>
                  </div>
                </div>
              ))}
            </StaggeredList>
          </div>
        </div>
      </ParallaxSection>

      {/* 7. How We Work */}
      <div className="bg-white section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                How We Work
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our proven methodology for delivering exceptional hospitality technology solutions
              </p>
            </div>
          </AnimatedSection>
          
          <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workingPrinciples.map((principle, index) => (
              <div key={principle.title} className="card-hover glass-morphism p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{principle.title}</h3>
                </div>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </StaggeredList>
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
      <ParallaxSection speed={0.3}>
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
      </ParallaxSection>

      {/* 10. Careers CTA */}
      <div className="bg-gradient-primary section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                Build the Future of Hospitality Tech
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-200">
                Join our team of passionate engineers, designers, and hospitality experts who are 
                transforming how the industry operates.
              </p>
              <div className="mt-10">
                <Link href="/careers" className="bg-white text-primary-purple px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg">
                  View Open Positions
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* 11. Trust & Compliance */}
      <div className="bg-white section-padding">
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
      </div>

      {/* 12. Client Impact & Proof */}
      <ParallaxSection speed={0.2}>
        <div className="bg-secondary-gray section-padding">
          <div className="container-custom">
            <AnimatedSection direction="up">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                  Our Impact
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Real results from real hospitality businesses using JebiTech solutions
                </p>
              </div>
            </AnimatedSection>
            
            <StaggeredList className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {impactMetrics.map((item, index) => (
                <div key={index} className="card-hover">
                  <div className="text-4xl font-bold text-primary-orange mb-2 pulse-glow">{item.metric}</div>
                  <div className="text-gray-600">{item.label}</div>
                </div>
              ))}
            </StaggeredList>
            
            <AnimatedSection direction="up" delay={0.6}>
              <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
                <blockquote className="text-center">
                  <p className="text-lg text-gray-700 italic mb-6">
                    "JebiTech doesn't just provide software—they understand our business. Their team has 
                    walked in our shoes, and it shows in every feature they build."
                  </p>
                  <footer>
                    <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                    <div className="text-sm text-gray-600">VP Operations, Luxury Resort Group</div>
                  </footer>
                </blockquote>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </ParallaxSection>

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
      <div className="bg-white section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                Ready to Work Together?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Whether you're looking to transform your operations, partner with us, or join our team, 
                we'd love to hear from you.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4 hover-glow">
                  Talk to Leadership
                </Link>
                <Link href="/partnerships" className="btn-secondary text-lg px-8 py-4">
                  Partner with Us
                </Link>
                <Link href="/careers" className="text-primary-purple font-semibold hover:text-primary-orange transition-colors">
                  Join the Team →
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}