'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  CodeBracketIcon, 
  CloudArrowUpIcon, 
  Cog6ToothIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  UsersIcon,
  CpuChipIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  ChartBarIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline'

import AnimatedSection from '@/components/AnimatedSection'
import ParallaxSection from '@/components/ParallaxSection'
import StaggeredList from '@/components/StaggeredList'
import FloatingElements from '@/components/FloatingElements'

const customDevelopmentUseCases = [
  {
    title: 'Property Management Systems (PMS)',
    description: 'Custom PMS solutions tailored to your specific property type and operational needs',
    examples: ['Multi-property hotel chains', 'Boutique hotel operations', 'Vacation rental management']
  },
  {
    title: 'Property Management Companies (PMC)',
    description: 'Comprehensive platforms for property management companies handling multiple clients',
    examples: ['Portfolio management tools', 'Owner reporting systems', 'Maintenance coordination']
  },
  {
    title: 'Third-Party Integrations',
    description: 'Seamless connections between your existing systems and new technology',
    examples: ['Channel manager integrations', 'Payment gateway connections', 'API development']
  }
]

const productLifecycle = [
  {
    stage: 'Analysis',
    description: 'Deep dive into your business requirements and technical needs',
    icon: ChartBarIcon,
    details: ['Stakeholder interviews', 'Technical assessment', 'Market research', 'Feasibility study']
  },
  {
    stage: 'Design',
    description: 'User experience design and technical architecture planning',
    icon: LightBulbIcon,
    details: ['UX/UI design', 'System architecture', 'Database design', 'API specifications']
  },
  {
    stage: 'Build',
    description: 'Agile development with continuous feedback and iteration',
    icon: CodeBracketIcon,
    details: ['Sprint planning', 'Development', 'Code reviews', 'Testing']
  },
  {
    stage: 'Delivery',
    description: 'Deployment, training, and go-live support',
    icon: RocketLaunchIcon,
    details: ['Deployment', 'User training', 'Documentation', 'Go-live support']
  },
  {
    stage: 'Integration',
    description: 'Seamless integration with your existing systems and workflows',
    icon: Cog6ToothIcon,
    details: ['System integration', 'Data migration', 'Workflow optimization', 'Performance tuning']
  },
  {
    stage: 'Support',
    description: 'Ongoing maintenance, updates, and feature enhancements',
    icon: WrenchScrewdriverIcon,
    details: ['24/7 monitoring', 'Regular updates', 'Feature enhancements', 'Technical support']
  }
]

const teamRoles = [
  {
    role: 'Full-Stack Developers',
    description: 'Expert developers proficient in modern web technologies',
    avatar: '👨‍💻',
    skills: ['React/Next.js', 'Node.js/Python', 'Database design', 'API development']
  },
  {
    role: 'QA Engineers',
    description: 'Quality assurance specialists ensuring robust, bug-free software',
    avatar: '🔍',
    skills: ['Automated testing', 'Manual testing', 'Performance testing', 'Security testing']
  },
  {
    role: 'Solution Architects',
    description: 'Senior architects designing scalable, maintainable systems',
    avatar: '🏗️',
    skills: ['System design', 'Cloud architecture', 'Microservices', 'Security design']
  },
  {
    role: 'AI Specialists',
    description: 'Machine learning experts building intelligent hospitality solutions',
    avatar: '🤖',
    skills: ['Computer vision', 'NLP', 'Predictive analytics', 'ML operations']
  },
  {
    role: 'DevOps Engineers',
    description: 'Infrastructure experts ensuring reliable, scalable deployments',
    avatar: '⚙️',
    skills: ['CI/CD', 'Container orchestration', 'Cloud platforms', 'Monitoring']
  },
  {
    role: 'Hospitality Consultants',
    description: 'Domain experts with deep hospitality industry knowledge',
    avatar: '🏨',
    skills: ['Operations consulting', 'Process optimization', 'Industry best practices', 'Change management']
  }
]

const techStack = {
  'Frontend': [
    { name: 'React', category: 'Framework' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Styling' }
  ],
  'Backend': [
    { name: 'Node.js', category: 'Runtime' },
    { name: 'Python', category: 'Language' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Redis', category: 'Cache' }
  ],
  'Cloud & DevOps': [
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'Container' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'Terraform', category: 'IaC' }
  ],
  'AI & Data': [
    { name: 'TensorFlow', category: 'ML' },
    { name: 'OpenCV', category: 'Computer Vision' },
    { name: 'Apache Spark', category: 'Big Data' },
    { name: 'Elasticsearch', category: 'Search' }
  ]
}

const workingPrinciples = [
  {
    title: 'Product Mindset',
    description: 'We think like product owners, not just service providers',
    icon: LightBulbIcon,
    details: 'Every solution is built with scalability, user experience, and long-term value in mind.'
  },
  {
    title: 'Domain-First Approach',
    description: 'Deep hospitality expertise drives every technical decision',
    icon: BuildingOfficeIcon,
    details: 'Our team understands hospitality operations, ensuring solutions that actually work in practice.'
  },
  {
    title: 'Scalable Systems',
    description: 'Architecture designed to grow with your business',
    icon: RocketLaunchIcon,
    details: 'From startup to enterprise, our solutions scale seamlessly without major rewrites.'
  },
  {
    title: 'Security by Design',
    description: 'Enterprise-grade security built into every layer',
    icon: ShieldCheckIcon,
    details: 'Security considerations from day one, not as an afterthought.'
  }
]

const nonTechServices = [
  {
    title: 'Hospitality Consulting',
    description: 'Strategic guidance on technology adoption and operational optimization',
    icon: PresentationChartLineIcon,
    services: ['Technology roadmap planning', 'Process optimization', 'Digital transformation strategy', 'Vendor evaluation']
  },
  {
    title: 'Training & Support',
    description: 'Comprehensive training programs and ongoing support for your team',
    icon: AcademicCapIcon,
    services: ['User training programs', 'Technical documentation', 'Change management', 'Ongoing support']
  },
  {
    title: 'Project Management',
    description: 'End-to-end project management ensuring successful delivery',
    icon: DocumentTextIcon,
    services: ['Agile project management', 'Stakeholder coordination', 'Risk management', 'Quality assurance']
  }
]

export default function Services() {
  const [selectedTechCategory, setSelectedTechCategory] = useState('Frontend')
  const [expandedUseCase, setExpandedUseCase] = useState<number | null>(null)

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Services Overview */}
      <div className="relative isolate px-6 pt-20 md:pt-24 lg:px-8 min-h-screen flex items-center">
        <FloatingElements />
        
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] animated-gradient opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-heading">
                  We Build & Scale <span className="text-primary-orange">Hospitality</span> Technology Platforms
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  From initial concept to enterprise-scale platforms, we provide the expertise, 
                  teams, and technology to transform your hospitality operations.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link href="/contact" className="btn-primary text-lg px-8 py-4 hover-glow">
                    Talk to Our Experts
                  </Link>
                  <Link href="/contact" className="text-primary-purple font-semibold hover:text-primary-orange transition-colors">
                    Start a Project →
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={0.3}>
              <div className="relative">
                {/* Idea → Product → Scale Illustration */}
                <div className="bg-gradient-to-br from-primary-purple/10 to-primary-orange/10 rounded-2xl p-8">
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 floating">
                        <LightBulbIcon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">Idea</div>
                      <div className="text-xs text-gray-600 mt-1">Concept & Strategy</div>
                    </div>
                    
                    <ArrowRightIcon className="h-6 w-6 text-primary-orange mx-4" />
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mb-4 floating" style={{animationDelay: '1s'}}>
                        <CodeBracketIcon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">Product</div>
                      <div className="text-xs text-gray-600 mt-1">Build & Deploy</div>
                    </div>
                    
                    <ArrowRightIcon className="h-6 w-6 text-primary-orange mx-4" />
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 floating" style={{animationDelay: '2s'}}>
                        <RocketLaunchIcon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">Scale</div>
                      <div className="text-xs text-gray-600 mt-1">Grow & Optimize</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* 2. Custom Software Development */}
      <ParallaxSection speed={0.3}>
        <div className="bg-secondary-gray section-padding">
          <div className="container-custom">
            <AnimatedSection direction="up">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 pulse-glow">
                  <Cog6ToothIcon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                  Custom Software Development
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Full-stack development for PMS, PMC, and third-party integrations tailored to your specific requirements
                </p>
              </div>
            </AnimatedSection>
            
            <div className="space-y-8">
              {customDevelopmentUseCases.map((useCase, index) => (
                <AnimatedSection key={useCase.title} direction="up" delay={index * 0.2}>
                  <div className="bg-white rounded-xl p-6 shadow-sm card-hover">
                    <div 
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => setExpandedUseCase(expandedUseCase === index ? null : index)}
                    >
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                        <p className="text-gray-600">{useCase.description}</p>
                      </div>
                      <div className="ml-4">
                        {expandedUseCase === index ? (
                          <ChevronUpIcon className="h-6 w-6 text-primary-orange" />
                        ) : (
                          <ChevronDownIcon className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                    </div>
                    
                    {expandedUseCase === index && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="font-semibold text-primary-purple mb-3">Typical Use Cases:</h4>
                        <ul className="space-y-2">
                          {useCase.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="flex items-center text-gray-600">
                              <CheckCircleIcon className="h-5 w-5 text-primary-orange mr-3 flex-shrink-0" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* 3. Software Product Engineering */}
      <div className="bg-white section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                Software Product Engineering
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                End-to-end product lifecycle management from analysis to ongoing support
              </p>
            </div>
          </AnimatedSection>
          
          <div className="relative">
            {/* Timeline */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-primary"></div>
            
            <div className="space-y-12">
              {productLifecycle.map((stage, index) => (
                <AnimatedSection key={stage.stage} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.2}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="flex-1 lg:pr-8">
                      <div className="bg-secondary-gray rounded-xl p-6 card-hover">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                            <stage.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{stage.stage}</h3>
                            <p className="text-gray-600">{stage.description}</p>
                          </div>
                        </div>
                        <ul className="grid grid-cols-2 gap-2">
                          {stage.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-primary-orange rounded-full mr-2"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="hidden lg:block w-4 h-4 bg-primary-orange rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    <div className="flex-1 lg:pl-8"></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Dedicated Development Teams */}
      <ParallaxSection speed={0.2}>
        <div className="bg-primary-purple section-padding relative overflow-hidden">
          <div className="absolute inset-0 animated-gradient opacity-20"></div>
          <div className="container-custom relative z-10">
            <AnimatedSection direction="up">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                  Dedicated Development Teams
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Full-stack developers, QA engineers, architects, AI specialists, and consultants
                </p>
                <p className="mt-4 text-primary-orange font-semibold">
                  Plug into your team in weeks, not months
                </p>
              </div>
            </AnimatedSection>
            
            <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamRoles.map((role) => (
                <div key={role.role} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 card-hover glass-morphism">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{role.avatar}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{role.role}</h3>
                    <p className="text-gray-300 text-sm">{role.description}</p>
                  </div>
                  <div className="space-y-2">
                    {role.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="bg-white/20 rounded-full px-3 py-1 text-xs text-white text-center">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </StaggeredList>
          </div>
        </div>
      </ParallaxSection>

      {/* 5. Technology Expertise */}
      <div className="bg-secondary-gray section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                Technology Expertise
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                State-of-the-art tech stack across backend, frontend, cloud, DevOps, data, and AI
              </p>
            </div>
          </AnimatedSection>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {Object.keys(techStack).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedTechCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedTechCategory === category
                      ? 'bg-gradient-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Tech Stack Grid */}
            <StaggeredList className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {techStack[selectedTechCategory as keyof typeof techStack].map((tech) => (
                <div key={tech.name} className="text-center card-hover">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-purple/10 to-primary-orange/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-sm font-bold text-primary-purple">{tech.name.slice(0, 2)}</span>
                  </div>
                  <div className="text-sm font-semibold text-gray-900">{tech.name}</div>
                  <div className="text-xs text-gray-500">{tech.category}</div>
                </div>
              ))}
            </StaggeredList>
          </div>
        </div>
      </div>

      {/* 6. How We Work */}
      <div className="bg-white section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                How We Work
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our core principles that ensure successful project delivery and long-term partnership
              </p>
            </div>
          </AnimatedSection>
          
          <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workingPrinciples.map((principle) => (
              <div key={principle.title} className="text-center card-hover">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 floating">
                  <principle.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600 mb-4">{principle.description}</p>
                <p className="text-sm text-gray-500">{principle.details}</p>
              </div>
            ))}
          </StaggeredList>
        </div>
      </div>

      {/* 8. Non-Tech Services */}
      <ParallaxSection speed={0.3}>
        <div className="bg-secondary-gray section-padding">
          <div className="container-custom">
            <AnimatedSection direction="up">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                  Beyond Development
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Comprehensive services to ensure your technology initiatives succeed
                </p>
              </div>
            </AnimatedSection>
            
            <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {nonTechServices.map((service) => (
                <div key={service.title} className="bg-white rounded-xl p-6 shadow-sm card-hover hover-glow">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.services.map((item, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="h-4 w-4 text-primary-orange mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </StaggeredList>
          </div>
        </div>
      </ParallaxSection>

      {/* 7. Primary CTA */}
      <div className="bg-gradient-primary section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                Build or Scale Your Hospitality Platform with Us
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-200">
                Whether you need a dedicated team, custom development, or strategic consulting, 
                we have the expertise to help you succeed.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="bg-white text-primary-purple px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg">
                  Talk to Our Experts
                </Link>
                <Link href="/contact" className="text-white font-semibold hover:text-gray-200 transition-colors">
                  Start a Project →
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}