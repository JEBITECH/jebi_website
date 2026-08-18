export interface RouteConfig {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  changeFrequency: 'weekly' | 'monthly';
  priority: number;
  lastModified: string;
  ogImageAlt: string;
}

export const PRIORITY_HOME = 1.0;
export const PRIORITY_PRODUCT = 0.8;
export const PRIORITY_DEFAULT = 0.5;

export const routes: RouteConfig[] = [
  {
    path: '/',
    title: 'jebitech - hospitality technology company',
    description:
      'JebiTech Solutions builds hospitality technology products including property management, guest experience, and franchise operations software tools.',
    keywords: [
      'jebitech',
      'jebi softech services',
      'hospitality technology company',
      'hospitality tech partner',
      'vacation rental technology',
      'property management software solutions',
      'hospitality SaaS platform',
      'proptech solutions',
      'short-term rental technology',
      'hospitality technology company Pune India',
    ],
    changeFrequency: 'weekly',
    priority: PRIORITY_HOME,
    lastModified: '2025-01-15',
    ogImageAlt: 'JebiTech Solutions - Hospitality Technology Company',
  },
  {
    path: '/about',
    title: 'About JebiTech - Our Mission and Team',
    description:
      'Learn about JebiTech Solutions, a Pune-based hospitality technology company building innovative software products for the vacation rental industry now.',
    keywords: [
      'about jebitech',
      'jebi softech services',
      'hospitality technology company Pune India',
      'property management software development India',
      'vacation rental tech partner Europe',
      'hospitality software outsourcing',
      'hotel technology solutions',
      'serviced apartment software',
    ],
    changeFrequency: 'monthly',
    priority: PRIORITY_DEFAULT,
    lastModified: '2025-01-10',
    ogImageAlt: 'About JebiTech Solutions team and mission',
  },
  {
    path: '/products',
    title: 'Hospitality Software Products by JebiTech',
    description:
      'Explore JebiTech hospitality software products including Booking Engine, VirtueInspect, Virtue Connect, and Virtue Finance for rental operators today.',
    keywords: [
      'booking engine for vacation rentals',
      'AI property inspection software',
      'PMS integration platform',
      'hospitality accounting software',
      'vacation rental booking engine',
      'property management company software',
      'holiday home management software',
      'cloud-native property management platform',
      'OTA integration technology',
      'multi-PMS booking platform',
    ],
    changeFrequency: 'monthly',
    priority: PRIORITY_PRODUCT,
    lastModified: '2025-01-12',
    ogImageAlt: 'JebiTech hospitality software product suite',
  },
  {
    path: '/services',
    title: 'Custom Development and Tech Services',
    description:
      'JebiTech offers custom software development, dedicated engineering teams, and implementation services tailored for hospitality businesses around the world.',
    keywords: [
      'custom hospitality software development',
      'dedicated development team for hospitality',
      'PMS integration services',
      'hospitality system integration',
      'PMS data migration services',
      'API integration for property management',
      'hire hospitality software developers',
      'staff augmentation for proptech',
      'PMS custom development',
      'bespoke property management software',
    ],
    changeFrequency: 'monthly',
    priority: PRIORITY_PRODUCT,
    lastModified: '2025-01-10',
    ogImageAlt: 'JebiTech custom development and technology services',
  },
  {
    path: '/contact',
    title: 'Contact JebiTech - Get in Touch Today',
    description:
      'Reach out to JebiTech Solutions for hospitality technology inquiries, product demos, partnership opportunities, and custom development project requests.',
    keywords: [
      'contact jebitech',
      'hospitality tech inquiry',
      'product demo request',
      'partnership opportunities',
      'software consultation',
      'hospitality software company India',
      'vacation rental tech partner Europe',
    ],
    changeFrequency: 'monthly',
    priority: PRIORITY_DEFAULT,
    lastModified: '2025-01-10',
    ogImageAlt: 'Contact JebiTech Solutions for inquiries',
  },
  {
    path: '/stayguide',
    title: 'StayGuide - Digital Guest Experience Platform',
    description:
      'StayGuide is a digital guidebook platform that enhances guest experiences with local recommendations, property info, and self-service check-in tools.',
    keywords: [
      'digital guest handbook',
      'guest communication platform',
      'digital guidebook for vacation rentals',
      'mobile guest assistant',
      'contactless check-in app',
      'guest experience platform',
      'AI guest support chatbot',
      'improve guest satisfaction technology',
      'stayguide',
    ],
    changeFrequency: 'monthly',
    priority: PRIORITY_PRODUCT,
    lastModified: '2025-01-12',
    ogImageAlt: 'StayGuide digital guest experience platform interface',
  },
  {
    path: '/stayfranchise',
    title: 'StayFranchise - Franchise Management Software',
    description:
      'StayFranchise provides franchise management tools for vacation rental operators to scale operations, manage multiple locations, and ensure consistency.',
    keywords: [
      'franchise management software',
      'vacation rental franchise',
      'multi-location management',
      'stayfranchise',
      'scale vacation rental operations',
      'property management automation',
      'hospitality workflow automation',
    ],
    changeFrequency: 'monthly',
    priority: PRIORITY_PRODUCT,
    lastModified: '2025-01-12',
    ogImageAlt: 'StayFranchise franchise management software dashboard',
  },
  {
    path: '/owner-hub',
    title: 'OwnerHub - Property Owner Portal Solution',
    description:
      'OwnerHub gives property owners a transparent portal to track bookings, revenue, maintenance updates, and communicate with their management company.',
    keywords: [
      'owner reporting software',
      'automated owner settlement',
      'property owner dashboard',
      'owner hub',
      'trust accounting for property managers',
      'PMS-driven financial reporting',
      'property management bookkeeping',
      'reduce manual work property management',
    ],
    changeFrequency: 'monthly',
    priority: PRIORITY_PRODUCT,
    lastModified: '2025-01-12',
    ogImageAlt: 'OwnerHub property owner portal dashboard view',
  },
  {
    path: '/careers',
    title: 'Careers at JebiTech - Join Our Team',
    description:
      'Explore career opportunities at JebiTech Solutions in Pune, India. Join our engineering team building next-generation hospitality technology products.',
    keywords: [
      'jebitech careers',
      'hire hospitality software developers',
      'React Next.js development team',
      'Node.js hospitality developers',
      'TypeScript development services',
      'offshore development team India',
      'hospitality technology company Pune India',
      'software engineer jobs pune',
    ],
    changeFrequency: 'monthly',
    priority: PRIORITY_DEFAULT,
    lastModified: '2025-01-15',
    ogImageAlt: 'Careers at JebiTech Solutions in Pune India',
  },
  {
    path: '/guesty',
    title: 'Guesty Integration and Expert Services',
    description:
      'JebiTech provides Guesty integration services, custom API development, workflow automation, and expert consulting for property management companies.',
    keywords: [
      'Guesty development partner',
      'Guesty custom integration',
      'Guesty marketplace partner',
      'guesty integration',
      'guesty api development',
      'channel manager integration',
      'property management integration',
      'PMS data migration services',
      'reduce OTA commission dependency',
      'increase direct bookings vacation rental',
    ],
    changeFrequency: 'monthly',
    priority: PRIORITY_DEFAULT,
    lastModified: '2025-01-10',
    ogImageAlt: 'JebiTech Guesty integration and consulting services',
  },
  {
    path: '/vrma',
    title: 'VRMA Partnership and Industry Engagement',
    description:
      'JebiTech is an active VRMA member contributing to vacation rental industry standards, attending conferences, and building community partnerships.',
    keywords: [
      'vrma member',
      'vacation rental management association',
      'vacation rental technology',
      'short-term rental technology',
      'property management software solutions',
      'hospitality SaaS platform',
      'proptech solutions',
    ],
    changeFrequency: 'monthly',
    priority: PRIORITY_DEFAULT,
    lastModified: '2025-01-10',
    ogImageAlt: 'JebiTech VRMA partnership and industry involvement',
  },
  {
    path: '/case-studies',
    title: 'Client Case Studies and Success Stories',
    description:
      'Read JebiTech client case studies showcasing successful hospitality technology implementations, measurable results, and operational improvements.',
    keywords: [
      'case studies',
      'hospitality tech results',
      'property management automation',
      'reduce OTA commission dependency',
      'increase direct bookings vacation rental',
      'automate property inspections',
      'scale vacation rental operations',
      'hospitality workflow automation',
    ],
    changeFrequency: 'monthly',
    priority: PRIORITY_DEFAULT,
    lastModified: '2025-01-10',
    ogImageAlt: 'JebiTech client case studies and success stories',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy - JebiTech Solutions',
    description:
      'Read the JebiTech Solutions privacy policy to understand how we collect, use, protect, and manage your personal data across our website and products.',
    keywords: [
      'privacy policy',
      'data protection',
      'personal data',
      'jebitech privacy',
      'gdpr compliance',
    ],
    changeFrequency: 'monthly',
    priority: PRIORITY_DEFAULT,
    lastModified: '2025-01-05',
    ogImageAlt: 'JebiTech Solutions privacy policy page',
  },
  {
    path: '/terms',
    title: 'Terms of Service - JebiTech Solutions',
    description:
      'Review the JebiTech Solutions terms of service covering website usage, intellectual property rights, limitation of liability, and user responsibilities.',
    keywords: [
      'terms of service',
      'terms and conditions',
      'website usage policy',
      'jebitech terms',
      'legal agreement',
    ],
    changeFrequency: 'monthly',
    priority: PRIORITY_DEFAULT,
    lastModified: '2025-01-05',
    ogImageAlt: 'JebiTech Solutions terms of service page',
  },
];
