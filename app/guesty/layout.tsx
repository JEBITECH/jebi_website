import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import FaqSchema from '@/components/seo/FaqSchema'
import { generateBreadcrumbs } from '@/lib/seo/breadcrumbs'

export const metadata: Metadata = genMeta('/guesty')

const guestyFaqs = [
  {
    question: 'What Guesty integration services does JebiTech offer?',
    answer: 'JebiTech provides full Guesty integration services including custom API development, workflow automation, channel manager setup, payment gateway integration, and ongoing technical support for property management companies.',
  },
  {
    question: 'How long does a typical Guesty integration project take?',
    answer: 'Most Guesty integration projects take 4-8 weeks depending on complexity. Simple API integrations can be completed in 2-3 weeks, while full custom solutions with workflow automation typically require 6-8 weeks.',
  },
  {
    question: 'Can JebiTech help migrate data from another PMS to Guesty?',
    answer: 'Yes, JebiTech specializes in PMS migration to Guesty. We handle data mapping, property listing migration, reservation history transfer, and guest data import while minimizing operational downtime.',
  },
  {
    question: 'Does JebiTech offer ongoing Guesty support after integration?',
    answer: 'Yes, we offer dedicated support plans including bug fixes, feature enhancements, API monitoring, performance optimization, and 24/7 critical issue response for Guesty implementations.',
  },
  {
    question: 'What industries does JebiTech serve with Guesty solutions?',
    answer: 'JebiTech serves vacation rental managers, serviced apartment operators, boutique hotel chains, property management companies, and hospitality franchises using Guesty as their property management system.',
  },
  {
    question: 'Can JebiTech build custom reports and dashboards for Guesty?',
    answer: 'Absolutely. We build custom analytics dashboards, automated reporting tools, owner statement generators, and revenue management interfaces that pull data directly from Guesty APIs.',
  },
  {
    question: 'What is JebiTech\'s experience with Guesty Open API?',
    answer: 'JebiTech has extensive experience with Guesty Open API including reservations, listings, guests, tasks, accounting, and communications endpoints. We are recognized Guesty technology partners.',
  },
]

export default function GuestyLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbs = generateBreadcrumbs('/guesty', 'Guesty Integration')

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FaqSchema faqs={guestyFaqs} />
      {children}
    </>
  )
}
