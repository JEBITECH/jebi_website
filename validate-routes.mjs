// Validation script for route registry constraints
import { routes, PRIORITY_HOME, PRIORITY_PRODUCT, PRIORITY_DEFAULT } from './lib/seo/routes.ts';

let errors = [];

// Check we have 14 routes
if (routes.length !== 14) {
  errors.push(`Expected 14 routes, got ${routes.length}`);
}

// Check priority constants
if (PRIORITY_HOME !== 1.0) errors.push('PRIORITY_HOME should be 1.0');
if (PRIORITY_PRODUCT !== 0.8) errors.push('PRIORITY_PRODUCT should be 0.8');
if (PRIORITY_DEFAULT !== 0.5) errors.push('PRIORITY_DEFAULT should be 0.5');

// Check each route's constraints
for (const route of routes) {
  const titleLen = route.title.length;
  if (titleLen < 30 || titleLen > 60) {
    errors.push(`Route ${route.path}: title "${route.title}" is ${titleLen} chars (must be 30-60)`);
  }

  const descLen = route.description.length;
  if (descLen < 150 || descLen > 160) {
    errors.push(`Route ${route.path}: description is ${descLen} chars (must be 150-160)`);
  }

  const kwCount = route.keywords.length;
  if (kwCount < 3 || kwCount > 10) {
    errors.push(`Route ${route.path}: ${kwCount} keywords (must be 3-10)`);
  }
}

// Check homepage title contains required terms
const home = routes.find(r => r.path === '/');
if (!home.title.toLowerCase().includes('jebitech')) {
  errors.push('Homepage title must contain "jebitech"');
}
if (!home.title.toLowerCase().includes('hospitality technology company')) {
  errors.push('Homepage title must contain "hospitality technology company"');
}

// Check homepage uses weekly, others monthly
if (home.changeFrequency !== 'weekly') {
  errors.push('Homepage changeFrequency must be "weekly"');
}
for (const route of routes.filter(r => r.path !== '/')) {
  if (route.changeFrequency !== 'monthly') {
    errors.push(`Route ${route.path}: changeFrequency should be "monthly"`);
  }
}

// Check priorities
const productPaths = ['/products', '/services', '/stayguide', '/stayfranchise', '/owner-hub'];
if (home.priority !== 1.0) errors.push('Homepage priority must be 1.0');
for (const route of routes) {
  if (productPaths.includes(route.path) && route.priority !== 0.8) {
    errors.push(`Route ${route.path}: priority should be 0.8`);
  }
  if (!productPaths.includes(route.path) && route.path !== '/' && route.priority !== 0.5) {
    errors.push(`Route ${route.path}: priority should be 0.5`);
  }
}

// Check uniqueness of titles and descriptions
const titles = routes.map(r => r.title);
const descriptions = routes.map(r => r.description);
const titleSet = new Set(titles);
const descSet = new Set(descriptions);
if (titleSet.size !== titles.length) errors.push('Duplicate titles found');
if (descSet.size !== descriptions.length) errors.push('Duplicate descriptions found');

// Results
if (errors.length === 0) {
  console.log('ALL CONSTRAINTS PASSED ✓');
  console.log(`Routes: ${routes.length}`);
  console.log('Title lengths:', routes.map(r => `${r.path}:${r.title.length}`).join(', '));
  console.log('Description lengths:', routes.map(r => `${r.path}:${r.description.length}`).join(', '));
} else {
  console.log('ERRORS:');
  errors.forEach(e => console.log('  - ' + e));
}
