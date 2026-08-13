import type { MetadataRoute } from 'next'
import { routes } from '@/lib/seo/routes'

const BASE_URL = 'https://jebitech.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.path === '/' ? 'weekly' : 'monthly',
    priority: route.priority,
  }))
}
