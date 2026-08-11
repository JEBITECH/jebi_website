import type { Metadata } from 'next';
import { routes, type RouteConfig } from './routes';

const BASE_URL = 'https://jebitech.com';
const OG_IMAGE_PATH = '/images/og-default.jpg';
const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

/**
 * Strips query parameters and fragments from a route path,
 * then ensures it ends with a trailing slash.
 */
function getCanonicalPath(routePath: string): string {
  // Strip query params and fragments
  const cleanPath = routePath.split('?')[0].split('#')[0];
  // Ensure trailing slash
  return cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`;
}

/**
 * Generates Open Graph metadata for a given route config.
 */
export function getOpenGraphMetadata(route: RouteConfig) {
  const canonicalUrl = `${BASE_URL}${getCanonicalPath(route.path)}`;

  return {
    title: route.title,
    description: route.description,
    url: canonicalUrl,
    siteName: 'JebiTech',
    locale: 'en_US',
    type: 'website' as const,
    images: [
      {
        url: `${BASE_URL}${OG_IMAGE_PATH}`,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: route.ogImageAlt,
      },
    ],
  };
}

/**
 * Generates Twitter Card metadata for a given route config.
 */
export function getTwitterMetadata(route: RouteConfig) {
  return {
    card: 'summary_large_image' as const,
    title: route.title,
    description: route.description,
    images: [`${BASE_URL}${OG_IMAGE_PATH}`],
  };
}

/**
 * Generates a complete Next.js Metadata object for the given route path.
 * Looks up the route in the route registry and composes title, description,
 * keywords, canonical URL, Open Graph, Twitter Card, and optional Bing verification.
 */
export function generateMetadata(routePath: string): Metadata {
  const route = routes.find((r) => r.path === routePath);

  if (!route) {
    return {
      title: 'JebiTech',
      description: 'JebiTech Solutions - Hospitality Technology Company',
    };
  }

  const canonicalUrl = `${BASE_URL}${getCanonicalPath(route.path)}`;

  const metadata: Metadata = {
    title: route.title,
    description: route.description,
    keywords: route.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: getOpenGraphMetadata(route),
    twitter: getTwitterMetadata(route),
  };

  // Conditionally include Bing verification meta tag
  const bingVerificationCode = process.env.BING_VERIFICATION_CODE;
  if (bingVerificationCode) {
    metadata.other = {
      'msvalidate.01': bingVerificationCode,
    };
  }

  return metadata;
}
