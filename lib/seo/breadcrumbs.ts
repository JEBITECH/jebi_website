import { routes } from './routes';

const BASE_URL = 'https://jebitech.com';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Formats a path segment into a human-readable name.
 * Replaces hyphens with spaces and capitalizes each word.
 */
function formatSegmentName(segment: string): string {
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Looks up a path in the route registry and returns the route title
 * (without any site name suffix), or null if not found.
 */
function getRouteTitle(path: string): string | null {
  const route = routes.find((r) => r.path === path);
  if (!route) return null;
  // Strip common site name suffixes like " - JebiTech" or " | JebiTech"
  const title = route.title.replace(/\s*[-|]\s*JebiTech.*$/i, '');
  return title;
}

/**
 * Generates breadcrumb items for a given route path.
 *
 * - Always includes "Home" as position 1 linking to the base URL.
 * - Includes intermediate path segments for nested routes.
 * - Sets the current page as the final item with the provided page title
 *   and its canonical URL (base + path + trailing slash).
 */
export function generateBreadcrumbs(
  routePath: string,
  pageTitle: string
): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [];

  // Always start with Home
  breadcrumbs.push({
    name: 'Home',
    url: BASE_URL,
  });

  // Clean the route path (remove query params and fragments)
  const cleanPath = routePath.split('?')[0].split('#')[0];

  // Split into segments, filtering out empty strings
  const segments = cleanPath.split('/').filter((s) => s.length > 0);

  if (segments.length === 0) {
    // Homepage — just return Home
    return breadcrumbs;
  }

  // Add intermediate segments (all except the last one)
  for (let i = 0; i < segments.length - 1; i++) {
    const intermediatePath = '/' + segments.slice(0, i + 1).join('/');
    const registryTitle = getRouteTitle(intermediatePath);
    const name = registryTitle || formatSegmentName(segments[i]);
    const url = `${BASE_URL}${intermediatePath}/`;

    breadcrumbs.push({ name, url });
  }

  // Add current page as the final item
  const canonicalUrl = `${BASE_URL}${cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath}/`;
  breadcrumbs.push({
    name: pageTitle,
    url: canonicalUrl,
  });

  return breadcrumbs;
}
