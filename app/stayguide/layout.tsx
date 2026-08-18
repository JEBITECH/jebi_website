import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ProductSchema from '@/components/seo/ProductSchema'
import { generateBreadcrumbs } from '@/lib/seo/breadcrumbs'

export const metadata: Metadata = genMeta('/stayguide')

export default function StayGuideLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbs = generateBreadcrumbs('/stayguide', 'StayGuide')

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ProductSchema name="StayGuide" description="Digital guidebook platform that enhances guest experiences with local recommendations, property info, and self-service check-in tools." />
      {children}
    </>
  )
}
