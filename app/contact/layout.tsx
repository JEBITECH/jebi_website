import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { generateBreadcrumbs } from '@/lib/seo/breadcrumbs'

export const metadata: Metadata = genMeta('/contact')

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbs = generateBreadcrumbs('/contact', 'Contact')

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      {children}
    </>
  )
}
