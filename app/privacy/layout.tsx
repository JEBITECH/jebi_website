import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { generateBreadcrumbs } from '@/lib/seo/breadcrumbs'

export const metadata: Metadata = genMeta('/privacy')

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbs = generateBreadcrumbs('/privacy', 'Privacy Policy')

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      {children}
    </>
  )
}
