import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { generateBreadcrumbs } from '@/lib/seo/breadcrumbs'

export const metadata: Metadata = {
  title: 'JebiTech at VRMA 26 Nashville | Franchise Management, OwnerHub & More',
  description:
    "Meet JebiTech at VRMA 26 Nashville, Oct 4-6, 2026. See live demos of our Franchise Management System, OwnerHub owner settlements, StayGuide guest handbook, and booking engine. Reserve a meeting today.",
  keywords:
    'VRMA 2026, VRMA Nashville, vacation rental management, franchise management software, owner settlement software, hospitality technology, property management software, JebiTech VRMA',
  alternates: {
    canonical: 'https://jebitech.com/vrma/',
  },
  openGraph: {
    title: 'JebiTech at VRMA 26 Nashville',
    description:
      'Proud VRMA member and exhibitor. See our full hospitality technology suite live, Oct 4-6, 2026 in Nashville, TN.',
    url: 'https://jebitech.com/vrma/',
    siteName: 'JebiTech',
    images: [
      {
        url: '/assets/vrma/7.png',
        width: 1024,
        height: 683,
        alt: 'JebiTech at VRMA 26 Nashville',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JebiTech at VRMA 26 Nashville',
    description:
      'Proud VRMA member and exhibitor. See our full hospitality technology suite live, Oct 4-6, 2026 in Nashville, TN.',
    images: ['/assets/vrma/7.png'],
  },
}

export default function VRMALayout({ children }: { children: React.ReactNode }) {
  const breadcrumbs = generateBreadcrumbs('/vrma', 'VRMA')

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      {children}
    </>
  )
}
