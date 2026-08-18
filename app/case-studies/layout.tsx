import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { generateBreadcrumbs } from '@/lib/seo/breadcrumbs'

export const metadata: Metadata = genMeta('/case-studies')

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbs = generateBreadcrumbs('/case-studies', 'Case Studies')

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      {children}
    </>
  )
}
