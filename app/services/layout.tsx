import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { generateBreadcrumbs } from '@/lib/seo/breadcrumbs'

export const metadata: Metadata = genMeta('/services')

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbs = generateBreadcrumbs('/services', 'Services')

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        services={[
          {
            name: 'Custom Development',
            description: 'End-to-end custom software development tailored to hospitality business needs.',
            serviceType: 'Software Development',
          },
          {
            name: 'Dedicated Teams',
            description: 'Dedicated engineering teams embedded within your organization for ongoing projects.',
            serviceType: 'Staff Augmentation',
          },
          {
            name: 'Implementation & Integration',
            description: 'System implementation, API integration, and migration services for hospitality platforms.',
            serviceType: 'IT Integration',
          },
        ]}
      />
      {children}
    </>
  )
}
