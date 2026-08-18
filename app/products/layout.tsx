import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ProductSchema from '@/components/seo/ProductSchema'
import { generateBreadcrumbs } from '@/lib/seo/breadcrumbs'

export const metadata: Metadata = genMeta('/products')

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbs = generateBreadcrumbs('/products', 'Products')

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ProductSchema name="Booking Engine" description="Direct booking engine for vacation rental operators to increase direct reservations and reduce OTA dependency." />
      <ProductSchema name="VirtueInspect" description="Property inspection and maintenance management tool for vacation rental quality assurance." />
      <ProductSchema name="Virtue Connect" description="Channel management and connectivity platform for multi-platform vacation rental distribution." />
      <ProductSchema name="Virtue Finance" description="Financial management and accounting automation software for hospitality businesses." />
      {children}
    </>
  )
}
