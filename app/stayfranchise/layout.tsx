import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ProductSchema from '@/components/seo/ProductSchema'
import { generateBreadcrumbs } from '@/lib/seo/breadcrumbs'

export const metadata: Metadata = genMeta('/stayfranchise')

export default function StayFranchiseLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbs = generateBreadcrumbs('/stayfranchise', 'StayFranchise')

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ProductSchema name="StayFranchise" description="Franchise management tools for vacation rental operators to scale operations, manage multiple locations, and ensure brand consistency." />
      {children}
    </>
  )
}
