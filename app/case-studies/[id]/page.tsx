import { notFound } from 'next/navigation'
import CaseStudyClient from './CaseStudyClient'

// This would typically come from a database or API
const getCaseStudyById = (id: string) => {
  const caseStudies = [
    {
      id: 'luxury-resort-chain',
      clientName: 'Premium Resort Group',
      industry: 'Luxury Resorts',
      location: 'California, USA',
      properties: 12,
      rooms: 2400,
      duration: '8 months',
      logo: '/clients/premium-resort.png',
      heroImage: '/case-studies/luxury-resort-hero.jpg',
      challenges: [
        {
          title: 'Outdated Technology Infrastructure',
          description: 'Legacy PMS system from 2010 causing frequent downtime and data inconsistencies',
          icon: '🏗️'
        },
        {
          title: 'Manual Check-in Processes',
          description: 'Average check-in time of 15 minutes creating guest frustration and lobby congestion',
          icon: '⏱️'
        },
        {
          title: 'Disconnected Systems',
          description: 'Separate systems for reservations, housekeeping, and guest services with no integration',
          icon: '🔗'
        },
        {
          title: 'Limited Analytics',
          description: 'No real-time reporting or insights into operational performance and guest satisfaction',
          icon: '📊'
        }
      ],
      solution: {
        overview: 'Implemented a comprehensive cloud-based property management system with mobile integration, real-time analytics, and seamless third-party integrations.',
        modules: [
          {
            name: 'Operations Management',
            description: 'Centralized operations dashboard with real-time visibility across all properties',
            timeline: 'Months 1-2',
            features: ['Multi-property dashboard', 'Real-time reporting', 'Staff scheduling', 'Task management']
          },
          {
            name: 'Guest Experience Platform',
            description: 'Mobile-first guest journey from booking to checkout with personalized services',
            timeline: 'Months 3-4',
            features: ['Mobile check-in/out', 'Digital room keys', 'Concierge services', 'Feedback system']
          },
          {
            name: 'Analytics & Insights',
            description: 'Advanced analytics platform providing actionable insights for decision making',
            timeline: 'Months 5-6',
            features: ['Revenue analytics', 'Guest satisfaction tracking', 'Operational KPIs', 'Predictive insights']
          },
          {
            name: 'System Integration',
            description: 'Seamless integration with existing channel managers, payment systems, and third-party tools',
            timeline: 'Months 7-8',
            features: ['Channel manager sync', 'Payment processing', 'Accounting integration', 'API connections']
          }
        ]
      },
      metrics: [
        { 
          label: 'Check-in Time Reduction', 
          value: '40%', 
          trend: 'down', 
          before: '15 minutes average',
          after: '9 minutes average',
          description: 'Mobile check-in and streamlined processes reduced average check-in time significantly'
        },
        { 
          label: 'Guest Satisfaction Increase', 
          value: '25%', 
          trend: 'up', 
          before: '3.8/5 rating',
          after: '4.75/5 rating',
          description: 'Improved guest experience through digital services and faster service delivery'
        },
        { 
          label: 'Operational Efficiency', 
          value: '30%', 
          trend: 'up', 
          before: '65% efficiency score',
          after: '85% efficiency score',
          description: 'Automated workflows and real-time coordination improved overall efficiency'
        },
        { 
          label: 'Annual Cost Savings', 
          value: '$2M', 
          trend: 'up', 
          before: '$8.5M operational costs',
          after: '$6.5M operational costs',
          description: 'Reduced labor costs and improved resource utilization'
        }
      ],
      testimonial: {
        quote: "JebiTech didn't just provide us with software—they transformed our entire operation. The new system reduced our check-in time by 40% and our guests are happier than ever. The real-time analytics have given us insights we never had before, allowing us to make data-driven decisions that directly impact our bottom line.",
        author: "Sarah Mitchell",
        role: "VP Operations",
        company: "Premium Resort Group",
        image: "/testimonials/sarah-mitchell.jpg",
        fullQuote: "Working with JebiTech has been transformational for our resort chain. From day one, their team demonstrated deep understanding of hospitality operations. They didn't just implement technology—they reimagined our entire guest journey. The results speak for themselves: 40% faster check-ins, 25% higher guest satisfaction, and $2M in annual savings. But beyond the numbers, we've seen a cultural shift in our organization. Our staff are more empowered, our guests are more satisfied, and our operations run like clockwork."
      },
      implementation: {
        approach: 'Phased rollout across 12 properties with minimal disruption to operations',
        timeline: [
          { phase: 'Discovery & Planning', duration: '2 weeks', description: 'Comprehensive analysis of existing systems and operational workflows' },
          { phase: 'Pilot Implementation', duration: '1 month', description: 'Deployed solution at 2 flagship properties for testing and refinement' },
          { phase: 'Staff Training', duration: '3 weeks', description: 'Comprehensive training program for all staff across operational levels' },
          { phase: 'Phased Rollout', duration: '5 months', description: 'Gradual deployment across remaining 10 properties with ongoing support' },
          { phase: 'Optimization', duration: 'Ongoing', description: 'Continuous monitoring, optimization, and feature enhancements' }
        ]
      }
    }
    // Add more case studies here...
  ]
  
  return caseStudies.find(study => study.id === id)
}

// Generate static params for all case studies
export async function generateStaticParams() {
  // Return all possible case study IDs for static generation
  return [
    { id: 'luxury-resort-chain' },
    // Add more case study IDs as they are created
  ]
}

interface PageProps {
  params: {
    id: string
  }
}

export default function CaseStudyDetail({ params }: PageProps) {
  const caseStudy = getCaseStudyById(params.id)

  if (!caseStudy) {
    notFound()
  }

  return <CaseStudyClient caseStudy={caseStudy} />
}