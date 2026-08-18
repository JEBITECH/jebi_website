import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import JobPostingSchema from '@/components/seo/JobPostingSchema'
import { generateBreadcrumbs } from '@/lib/seo/breadcrumbs'

export const metadata: Metadata = genMeta('/careers')

const currentJobs = [
  {
    title: 'Full Stack Developer',
    description: 'Build and maintain hospitality technology products using React, Next.js, Node.js, and TypeScript.',
    datePosted: '2025-01-10',
    location: { city: 'Pune', region: 'Maharashtra', country: 'India' },
  },
  {
    title: 'Backend Engineer',
    description: 'Design and implement scalable APIs and microservices for property management and booking systems.',
    datePosted: '2025-01-10',
    location: { city: 'Pune', region: 'Maharashtra', country: 'India' },
  },
]

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbs = generateBreadcrumbs('/careers', 'Careers')

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <JobPostingSchema jobs={currentJobs} />
      {children}
    </>
  )
}
