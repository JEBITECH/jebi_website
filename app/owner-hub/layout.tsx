import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ProductSchema from '@/components/seo/ProductSchema'
import { generateBreadcrumbs } from '@/lib/seo/breadcrumbs'

export const metadata: Metadata = genMeta('/owner-hub')

export default function OwnerHubLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbs = generateBreadcrumbs('/owner-hub', 'OwnerHub')

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ProductSchema name="OwnerHub" description="Transparent property owner portal to track bookings, revenue, maintenance updates, and communicate with management companies." />
      {children}
    </>
  )
}
