import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { generateBreadcrumbs } from '@/lib/seo/breadcrumbs'

export const metadata: Metadata = genMeta('/terms')

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbs = generateBreadcrumbs('/terms', 'Terms of Service')

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      {children}
    </>
  )
}
