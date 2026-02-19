"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ProductShowcase from "@/components/ProductShowcase";
import {
  CloudIcon,
  CogIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
  DocumentTextIcon,
  LinkIcon,
  ShieldCheckIcon,
  CubeTransparentIcon,
  CpuChipIcon,
  ArrowPathIcon,
  EyeIcon,
  CheckCircleIcon,
  PlayIcon,
  PlusIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import StaggeredList from "@/components/StaggeredList";
import FloatingElements from "@/components/FloatingElements";
import { useRef } from "react";
import Image from "next/image";

const platformCapabilities = [
  { name: "Operations", icon: CogIcon, description: "Streamline daily operations and workflows" },
  { name: "Tasks", icon: ClipboardDocumentListIcon, description: "Automated task management and tracking" },
  { name: "Housekeeping", icon: CheckCircleIcon, description: "Intelligent housekeeping coordination" },
  { name: "Guest Experience", icon: DevicePhoneMobileIcon, description: "Enhanced guest journey management" },
  { name: "Analytics", icon: ChartBarIcon, description: "Real-time insights and reporting" },
  { name: "Integrations", icon: LinkIcon, description: "Seamless third-party connections" },
];

// const productDetailRef = useRef<HTMLDivElement | null>(null);

// const products = [
//   {
//     id: 'booking-engine',
//     name: 'Booking Engine CMS',
//     tagline: 'Direct bookings made simple',
//     outcome: 'Increase direct bookings by 40%',
//     icon: DevicePhoneMobileIcon,
//     description: 'AI-powered booking engine website builder with CMS for vacation rentals and service apartments that unifies reservations, websites, and operations with seamless PMS and ERP integration—built for scale, performance, and automation.',
//     capabilities: [
//       'Multi-PMS integration with platforms like Maxxton, Dharma, Hostaway, Guesty, and Mews',
//       'Intelligent reservation normalization across multiple PMS providers',
//       'Real-time availability, pricing, and booking synchronization',
//       'Built-in CMS for pages, blogs, menus, templates, and themes',
//       'AI-assisted content creation, website generation, and translations',
//       'Role-based access control with ERP-driven authentication (SSO)',
//       'Multi-site, multi-language, and multi-currency support'
//       // 'Real-time availability and pricing',
//       // 'Mobile-optimized booking flow',
//       // 'Dynamic pricing integration',
//       // 'Multi-language support',
//       // 'Payment gateway integration',
//       // 'Booking modification tools'
//     ],
//     benefits: [
//       'Reduce operational overhead by up to 60–80% through automation',
//       'Remove manual effort when managing multiple PMS systems',
//       'Launch and manage multi-property websites faster',
//       'Improve SEO performance with multilingual, CMS-driven pages',
//       'Scale property portfolios without infrastructure complexity'
//       // 'Reduce OTA commissions',
//       // 'Increase profit margins',
//       // 'Better guest data control',
//       // 'Improved conversion rates'
//     ],
//     useCases: [
//       'Unifies different PMS and booking engines into a single CMS platform',
//       'Normalizes data from multiple PMS systems into one consistent mode',
//       'AI-first architecture for content creation, website generation, and localization',
//       'Performance-optimized design with minimal database overhead'
//       // 'Hotel chains wanting to reduce OTA dependency',
//       // 'Boutique properties seeking direct bookings',
//       // 'Vacation rentals optimizing conversion rates'
//     ]
//   },
//   {
//     id: 'virtue-inspect',
//     name: 'Virtue Inspect',
//     tagline: 'AI-powered property inspection',
//     outcome: 'Reduce inspection time by 60%',
//     icon: EyeIcon,
//     description: 'Computer vision and AI technology that automates property inspections, damage detection, and maintenance scheduling.',
//     capabilities: [
//       'AI-powered damage detection',
//       'Automated inspection reports',
//       'Photo comparison analysis',
//       'Maintenance scheduling',
//       'Cost estimation tools',
//       'Historical tracking'
//     ],
//     benefits: [
//       'Faster turnaround times',
//       'Consistent inspection quality',
//       'Reduced human error',
//       'Automated documentation'
//     ],
//     useCases: [
//       'Vacation rental turnovers',
//       'Hotel room inspections',
//       'Property damage assessments',
//       'Maintenance planning'
//     ]
//   },
//   {
//     id: 'virtue-connect',
//     name: 'Virtue Connect',
//     tagline: 'Unified communication hub',
//     outcome: 'Improve team coordination by 50%',
//     icon: LinkIcon,
//     description: 'Centralized communication platform that connects all stakeholders - staff, guests, vendors, and management.',
//     capabilities: [
//       'Multi-channel messaging',
//       'Task assignment and tracking',
//       'Guest communication tools',
//       'Vendor coordination',
//       'Emergency notifications',
//       'Integration with existing tools'
//     ],
//     benefits: [
//       'Streamlined communication',
//       'Faster issue resolution',
//       'Better guest satisfaction',
//       'Improved team efficiency'
//     ],
//     useCases: [
//       'Multi-property management',
//       'Remote team coordination',
//       'Guest service optimization',
//       'Vendor management'
//     ]
//   },
//   {
//     id: 'guest-handbook',
//     name: 'Guest Handbook',
//     tagline: 'Digital guest experience platform',
//     outcome: 'Increase guest satisfaction by 35%',
//     icon: DocumentTextIcon,
//     description: 'Interactive digital guidebook that enhances the guest experience with personalized recommendations and services.',
//     capabilities: [
//       'Personalized recommendations',
//       'Local area guides',
//       'Service request portal',
//       'Digital concierge',
//       'Feedback collection',
//       'Multi-language support'
//     ],
//     benefits: [
//       'Enhanced guest experience',
//       'Reduced front desk calls',
//       'Increased ancillary revenue',
//       'Better guest reviews'
//     ],
//     useCases: [
//       'Luxury hotels enhancing service',
//       'Vacation rentals providing local info',
//       'Business hotels streamlining services'
//     ]
//   },
//   {
//     id: 'data-audit',
//     name: 'Data Audit & Logs',
//     tagline: 'Complete operational transparency',
//     outcome: 'Achieve 100% audit compliance',
//     icon: ChartBarIcon,
//     description: 'Comprehensive audit trail and logging system that ensures compliance and provides operational insights.',
//     capabilities: [
//       'Complete audit trails',
//       'Real-time monitoring',
//       'Compliance reporting',
//       'Data analytics',
//       'Custom dashboards',
//       'Automated alerts'
//     ],
//     benefits: [
//       'Regulatory compliance',
//       'Operational transparency',
//       'Risk mitigation',
//       'Performance insights'
//     ],
//     useCases: [
//       'Enterprise compliance requirements',
//       'Financial audit preparation',
//       'Operational optimization',
//       'Risk management'
//     ]
//   }
// ]

export const products = [
  {
    id: "booking-engine",
    name: "Booking Engine CMS",
    tagline: "Direct bookings made simple",
    outcome: "Increase direct bookings by 40%",
    icon: DevicePhoneMobileIcon,
    link: "http://139.59.22.205:5174",
    description:
      "AI-powered booking engine website builder with CMS for vacation rentals and service apartments that unifies reservations, websites, and operations with seamless PMS and ERP integration—built for scale, performance, and automation.",
    features: [
      "Multi-PMS integration with platforms like Maxxton, Dharma, Hostaway, Guesty, and Mews",
      "Intelligent reservation normalization across multiple PMS providers",
      "Real-time availability, pricing, and booking synchronization",
      "Built-in CMS for pages, blogs, menus, templates, and themes",
      "AI-assisted content creation, website generation, and translations",
      "Role-based access control with ERP-driven authentication (SSO)",
      "Multi-site, multi-language, and multi-currency support",
      // 'Real-time availability and pricing',
      // 'Mobile-optimized booking flow',
      // 'Dynamic pricing integration',
      // 'Multi-language support',
      // 'Payment gateway integration',
      // 'Booking modification tools'
    ],
    benefits: [
      "Reduce operational overhead by up to 60–80% through automation",
      "Remove manual effort when managing multiple PMS systems",
      "Launch and manage multi-property websites faster",
      "Improve SEO performance with multilingual, CMS-driven pages",
      "Scale property portfolios without infrastructure complexity",
      // 'Reduce OTA commissions',
      // 'Increase profit margins',
      // 'Better guest data control',
      // 'Improved conversion rates'
    ],
    differentiators: [
      "Unifies different PMS and booking engines into a single CMS platform",
      "Normalizes data from multiple PMS systems into one consistent mode",
      "AI-first architecture for content creation, website generation, and localization",
      "Performance-optimized design with minimal database overhead",
      // 'Hotel chains wanting to reduce OTA dependency',
      // 'Boutique properties seeking direct bookings',
      // 'Vacation rentals optimizing conversion rates'
    ],
  },
  {
    id: "guest-handbook",
    name: "Guest Handbook",
    tagline: "From Check-In to Check-Out — Your Guest’s Personal Smart Assistant",
    outcome: "Reduce guest support queries by up to 60%",
    icon: DocumentTextIcon,
    link: "http://139.59.22.205:5173/",
    description:
      "Guest Handbook is a digital, mobile-first guest assistant that delivers check-in instructions, house rules, local tips, messaging, and instant AI-powered answers throughout the guest journey.",
    features: [
      "Interactive, mobile-first digital handbook accessible via QR code",
      "Real-time updates to house rules, Wi-Fi details, and amenity status",
      "Built-in direct messaging between guests and property managers/hosts",
      "Curated local guides with maps, partner discounts, and emergency contacts",
      "Automated pre-arrival instructions and post-departure follow-ups",
      "Seamless integration with PMS and check-in tools",
    ],
    differentiators: [
      "Live, AI-powered guest portal replacing outdated PDFs and manuals",
      "AI bot answers guest questions instantly and reduces support load",
      "Centralized platform for guest communication, automation, and upsells",
      "In-stay promotions and local partnerships for additional revenue",
    ],
    benefits: [
      "Improve guest reviews with instant, intelligent support",
      "Reduce phone calls, WhatsApp messages, and repetitive questions",
      "AI-driven insights into guest behavior and common issues",
      "Promote properties and services throughout the guest journey",
      "Fully customizable and on-brand guest experience",
    ],
  },
  {
    id: "virtue-inspect",
    name: "VirtueInspect",
    tagline: "AI-powered inspections, communication, and control for smarter hospitality operations.",
    outcome: "Reduce inspection time by up to 80%",
    icon: EyeIcon,
    link: "http://139.59.22.205:5173/",
    description: "VirtueInspect is an AI-powered hospitality inspection and operations platform that detects damages, stains, and missing inventory while managing end-to-end inspection workflows.",
    features: [
      "AI-powered detection of damages, stains, and missing items",
      "Real-time inventory tracking and item counting",
      "Multi-language support for reports and communication",
      "Live calling between inspectors and property staff",
      "Seamless integration with Property Management Systems (PMS)",
      "Automated inspection scheduling and notifications",
    ],
    differentiators: [
      "Combines AI automation with PMS integration for faster, accurate inspections",
      "Reduces manual inspection time by up to 80%",
      "Provides actionable insights with visual evidence for faster decision-making",
    ],
    benefits: [
      "Lower operational costs and improved efficiency",
      "Minimize human error and overlooked damages",
      "Enhance guest satisfaction with faster issue resolution",
      "Simplify month-end reporting and audit processes",
    ],
  },
  {
    id: "virtue-connect-erp",
    name: "Virtue Connect / ERP",
    tagline:
      "A centralized PMS integration and data normalization platform that connects multiple property management systems into a single, standardized data layer—enabling unified reporting, secure access, and seamless cross-product integrations.",
    outcome: "Single source of truth across all PMS systems",
    icon: LinkIcon,
    link: "http://139.59.22.205:5173/",
    description:
      "Virtue Connect / ERP unifies multiple PMS platforms into one normalized, secure, and scalable data layer that powers analytics, booking engines, inspections, accounting, and guest-facing applications.",
    features: [
      "Integration with multiple popular PMS platforms (e.g., Guesty, Dharma)",
      "Creation of a normalized database using PMS-specific configurations",
      "Unified reservations and property data views across different PMSs",
      "Role-Based Access Control (RBAC) for secure data access",
      "Comprehensive audit logs for tracking data changes and user actions",
      "PMS data synchronization via scheduled cron jobs and manual sync options",
      "Scalable microservices-based architecture",
    ],
    differentiators: [
      "Eliminates data silos by unifying multiple PMSs into a single source of truth",
      "PMS-agnostic normalized data model for easy reporting and integrations",
      "Built-in security and compliance with RBAC and audit logging",
      "Designed to power downstream products like Booking Engine, Inspections, Accounting, Analytics, and Guest Apps",
    ],
    benefits: [
      "Faster onboarding of new PMS integrations",
      "Simplified analytics and reporting across properties and brands",
      "Reduced integration complexity and maintenance effort",
      "Improved data accuracy and consistency across systems",
      "Enables rapid development of new hospitality tech products",
    ],
  },
  {
    id: "virtue-finance",
    name: "Virtue Finance",
    tagline: "Hospitality-focused accounting & bookkeeping platform",
    outcome: "Reduce manual accounting effort by up to 80%",
    icon: ChartBarIcon,
    link: "http://139.59.22.205:5173/",
    description: "A PMS-driven accounting platform that automatically converts hospitality operational data into structured financial records, journals, trial balances, and financial statements.",
    features: [
      "Automated journal entry creation from PMS data",
      "Hospitality-specific accounting classification rules",
      "Real-time Trial Balance generation",
      "Financial Statements: P&L, Balance Sheet, Cash Flow",
      "Multi-dimensional reporting by property, brand, owner, location, and PMS",
      "Trust accounting for owner and guest funds",
      "Tax modules including VAT, GST, and regional taxes",
      "Formula-based accounting engine with configurable rules",
      "Real-time PMS data fetching via APIs",
      "Manual and bulk data import support",
    ],
    differentiators: [
      "Built exclusively for hospitality accounting complexities",
      "End-to-end automation from PMS data to financial statements",
      "Handles owner settlements, trust accounting, and multi-property structures",
    ],
    benefits: [
      "70–80% reduction in manual accounting work",
      "Faster month-end and year-end closing",
      "Improved accuracy and consistency across properties",
      "Reduced dependency on spreadsheets",
      "Scalable accounting as property portfolios grow",
      "Clear financial visibility for owners and operators",
    ],
  },
  {
    id: "owner-settlement",
    name: "Owner Settlement",
    tagline: "Real-time owner settlement & revenue-sharing platform for hospitality",
    outcome: "Eliminate settlement disputes and manual reconciliation",
    icon: DevicePhoneMobileIcon,
    link: "http://139.59.22.205:5173/",
    description: "A formula-driven settlement platform that calculates owner and PMC revenue shares in real time, with full transparency, auditability, and zero spreadsheet dependency.",
    features: [
      "Real-time settlement calculations from PMS data",
      "Formula-based revenue distribution at unit level",
      "Distribution-channel–specific logic (OTA, Direct, Corporate)",
      "Periodic auto-generated settlement entries",
      "Settlement freezing with full audit trails",
      "Expense and utility bill automation",
      "Owner portal with real-time financial visibility",
      "Monthly owner statements with downloadable reports",
      "Bill approval workflows with comments and history",
      "Exports to Excel, PDF, and accounting-ready formats",
    ],
    differentiators: [
      "Formula-driven settlements built specifically for hospitality",
      "Unit-linked formulas independent of ownership changes",
      "Real-time calculations instead of post-period reconciliation",
      "Owner-first transparency with approval workflows",
    ],
    benefits: [
      "Eliminates settlement disputes",
      "Faster monthly owner closures",
      "Reduced manual reconciliation effort",
      "Higher owner trust and retention",
      "Scales effortlessly with growing portfolios",
      "Clear separation of PMC and owner finances",
    ],
  },
];

const architectureFeatures = [
  { name: "Microservices-based", description: "Scalable, maintainable architecture" },
  { name: "RBAC", description: "Role-based access control" },
  { name: "Cloud-native", description: "Built for modern cloud infrastructure" },
  { name: "AI-ready", description: "Machine learning integration capabilities" },
  { name: "API-first", description: "Comprehensive REST and GraphQL APIs" },
  { name: "Real-time", description: "Live updates and notifications" },
];

import Guesty from "../assets/Guesty.png";
import Hostaway from "../assets/hostaway.jpeg";
import BookingCom from "../assets/booking-com.jpeg";
import Expedia from "../assets/expedia.jpeg";
import Airbnb from "../assets/airbnb.svg";
import Stripe from "../assets/stripe.svg";
import PayPal from "../assets/paypal.jpg";
import Salesforce from "../assets/salesforce.png";
import Slack from "../assets/slack.png";
import Zapier from "../assets/zapier.png";

const integrations = [
  { name: "Guesty", category: "PMS", logo: Guesty },
  { name: "Hostaway", category: "PMS", logo: Hostaway },
  { name: "Booking.com", category: "Channel Manager", logo: BookingCom },
  { name: "Expedia", category: "Channel Manager", logo: Expedia },
  { name: "Airbnb", category: "Channel Manager", logo: Airbnb },
  { name: "Stripe", category: "Payments", logo: Stripe },
  { name: "PayPal", category: "Payments", logo: PayPal },
  { name: "Salesforce", category: "CRM", logo: Salesforce },
  { name: "Slack", category: "Communication", logo: Slack },
  { name: "Zapier", category: "Automation", logo: Zapier },
];
import { Calendar, ClipboardList, Home, Settings, Rocket, LucideIcon } from "lucide-react";
import { MainStageCard } from "@/components/MainStageCard";
import { PainSolution } from "@/components/PainSolution";
import virturInspect from "../assets/virtueInspect.png";
import BookingEngine from "../assets/BookingEngine.png";
import GuestHandbook from "../assets/GuestHandbook.png";
import VirturConnectER3 from "../assets/VirtueConnectER3.png";
import accounting5 from "../assets/accounting5.png";
import GuestHandbook1 from "../assets/GuestHandbook1.png";
import ChannelManager from "../assets/ChannelManager.png";

import { StaticImageData } from "next/image";

export interface Stage {
  id: number;
  title: string;
  icon: LucideIcon;
  painTitle: string;
  painDescription: string;
  solutionTitle: string;
  solution: string;
  image: StaticImageData;
  ctaLabel: string;
  scrollToId: string;
  productName: string;
}

export const stages: Stage[] = [
  {
    id: 1,
    title: "Booking",
    icon: Calendar,
    image: BookingEngine,
    painTitle: "Get started with ease",
    painDescription: "Lost revenue to OTA commissions, no direct booking channel",
    solutionTitle: "Booking Engine",
    solution: "Direct reservations with real-time availability, dynamic pricing, zero commission fees",
    ctaLabel: "Discover Booking Engine",
    scrollToId: "booking-details",
    productName: "Booking Engine",
  },
  {
    id: 2,
    title: "Pre-Stay",
    icon: ClipboardList,
    image: GuestHandbook1,
    painTitle: "Get started with ease",
    painDescription: "Manual guest communication and check-in coordination",
    solutionTitle: "Pre-Stay Automation",
    solution: "Automated guest messages, digital check-in, and arrival instructions",
    ctaLabel: "Discover Guest Handbook",
    scrollToId: "Pre-Stay-details",
    productName: "Guest Handbook",
  },
  {
    id: 3,
    title: "Stay",
    icon: Home,
    image: virturInspect,
    painTitle: "Get started with ease",
    painDescription: "On-site issues with no centralized control",
    solutionTitle: "Guest Stay Tools",
    solution: "Live issue tracking, guest support, and service coordination",
    ctaLabel: "Discover Virtue  Inspect",
    scrollToId: "Stay-details",
    productName: "Virtue  Inspect",
  },
  {
    id: 4,
    title: "Operations",
    icon: Settings,
    image: accounting5,
    painTitle: "Get started with ease",
    painDescription: "Disconnected operations and manual processes",
    solutionTitle: "Operations",
    solution: "Unified operations, housekeeping, and maintenance workflows",
    ctaLabel: "Discover Operations",
    scrollToId: "Operations-details",
    productName: "Operations Suite",
  },
  {
    id: 5,
    title: "Scale",
    icon: Rocket,
    image: VirturConnectER3,
    painTitle: "Get started with ease",
    painDescription: "Hard to scale without operational visibility",
    solutionTitle: "Scale Platform",
    solution: "Insights, automation, and performance analytics for growth",
    ctaLabel: "Discover Virtue  Connect",
    scrollToId: "Scale-details",
    productName: "Virtue  Connect",
  },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [activeTab, setActiveTab] = useState("features");
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null);

  useEffect(() => {
    if (!productId) return;

    const matchedProduct = products.find((p) => p.id === productId);

    if (matchedProduct) {
      setSelectedProduct(matchedProduct);

      setTimeout(() => {
        document.getElementById("product-detail-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [productId]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePreviousProduct();
      } else if (e.key === "ArrowRight") {
        handleNextProduct();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProduct]);

  const handlePreviousProduct = () => {
    setSlideDirection("right");
    setTimeout(() => {
      const currentIndex = products.findIndex((p) => p.id === selectedProduct.id);
      const previousIndex = currentIndex === 0 ? products.length - 1 : currentIndex - 1;
      setSelectedProduct(products[previousIndex]);
      setActiveTab("features");
      setTimeout(() => setSlideDirection(null), 50);
    }, 300);
  };

  const handleNextProduct = () => {
    setSlideDirection("left");
    setTimeout(() => {
      const currentIndex = products.findIndex((p) => p.id === selectedProduct.id);
      const nextIndex = currentIndex === products.length - 1 ? 0 : currentIndex + 1;
      setSelectedProduct(products[nextIndex]);
      setActiveTab("features");
      setTimeout(() => setSlideDirection(null), 50);
    }, 300);
  };

  return (
    <div className="bg-white overflow-hidden pt-8 md:pt-12">
      <FloatingElements />

      {/* Product Showcase - Reusable Component */}
      <ProductShowcase showHeader={true} autoRotate={true} rotationInterval={8000} />

      {/* <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] animated-gradient opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div> */}

      {/* <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-heading">
                  Unified <span className="text-primary-orange">Hospitality</span> Operations Platform
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  Modular products that work together seamlessly to transform your hospitality operations, 
                  from booking to checkout and everything in between.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link href="/contact" className="btn-primary text-lg px-8 py-4 hover-glow">
                    Request Demo
                  </Link>
                  <Link href="/contact" className="text-primary-purple font-semibold hover:text-primary-orange transition-colors">
                    Talk to Experts →
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={0.3}>
              <div className="relative"> */}
      {/* Platform Diagram */}
      {/* <div className="bg-gradient-to-br from-primary-purple/10 to-primary-orange/10 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {products.slice(0, 4).map((product, index) => (
                      <div key={product.id} className="bg-white rounded-lg p-4 shadow-sm card-hover">
                        <product.icon className="h-8 w-8 text-primary-orange mb-2" />
                        <div className="text-sm font-semibold text-gray-900">{product.name}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-primary text-white rounded-lg p-4 font-semibold">
                      Unified Platform
                    </div>
                    <div className="mt-2 text-sm text-gray-600">All products integrate seamlessly</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div> */}
      {/* </div> */}

      {/* 2. Platform Capabilities */}
      {/* <ParallaxSection speed={0.3}>
        <div className="bg-secondary-gray section-padding">
          <div className="container-custom">
            <AnimatedSection direction="up">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                  Complete Platform Capabilities
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Six core areas that cover every aspect of hospitality operations
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {platformCapabilities.map((capability) => (
                <div key={capability.name} className="bg-white rounded-xl p-6 card-hover hover-glow glass-morphism">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 floating">
                      <capability.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{capability.name}</h3>
                  </div>
                  <p className="text-gray-600">{capability.description}</p>
                </div>
              ))}

            </StaggeredList>
          </div>
        </div>
      </ParallaxSection> */}

      {/* 3. In-House Products */}
      {/* <div className="bg-white section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                Our Product Suite
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Five specialized products designed to solve specific hospitality challenges
              </p>
            </div>
          </AnimatedSection>

          <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className={`bg-secondary-gray rounded-xl p-6 cursor-pointer transition-all duration-300 ${selectedProduct.id === product.id
                  ? 'ring-2 ring-primary-orange shadow-lg scale-105'
                  : 'card-hover'
                  }`}
                onClick={() => setSelectedProduct(product)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 pulse-glow">
                    <product.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-primary-orange font-medium">{product.tagline}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-lg p-3">
                  <div className="text-sm font-semibold text-primary-purple">{product.outcome}</div>
                </div>
              </div>
            ))}
          </StaggeredList>
        </div>
      </div> */}

      {/* 4. Product Experience (Deep Dive) */}
      <ParallaxSection speed={0.2}>
        <div className="bg-primary-purple section-padding" id="product-detail-section">
          <div className="container-custom">
            <AnimatedSection direction="up">
              <div className="mx-auto max-w-2xl text-center mb-16 relative">
                {/* Navigation Arrows */}
                <button
                  onClick={handlePreviousProduct}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                  aria-label="Previous product"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>

                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">{selectedProduct.name}</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">{selectedProduct.description}</p>

                {/* Product Counter */}
                <div className="mt-4 text-sm text-gray-300">
                  {products.findIndex((p) => p.id === selectedProduct.id) + 1} / {products.length}
                </div>

                <button
                  onClick={handleNextProduct}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                  aria-label="Next product"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </div>
            </AnimatedSection>

            <div
              className={`bg-white rounded-2xl p-8 shadow-xl transition-all duration-300 ease-out ${
                slideDirection === "left" ? "translate-x-[-100%] opacity-0" : slideDirection === "right" ? "translate-x-[100%] opacity-0" : "translate-x-0 opacity-100"
              }`}
            >
              {/* Product Indicators */}
              <div className="flex justify-center gap-2 mb-6">
                {products.map((product, index) => (
                  <button
                    key={product.id}
                    onClick={() => {
                      const currentIndex = products.findIndex((p) => p.id === selectedProduct.id);
                      const targetIndex = index;

                      if (targetIndex !== currentIndex) {
                        setSlideDirection(targetIndex > currentIndex ? "left" : "right");
                        setTimeout(() => {
                          setSelectedProduct(product);
                          setActiveTab("features");
                          setTimeout(() => setSlideDirection(null), 50);
                        }, 300);
                      }
                    }}
                    className={`transition-all duration-300 rounded-full ${selectedProduct.id === product.id ? "w-8 h-2 bg-primary-orange" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"}`}
                    aria-label={`Go to ${product.name}`}
                  />
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  {/* Tab Navigation */}
                  <div className="flex space-x-1 mb-8 bg-gray-100 rounded-lg p-1">
                    {/* {['capabilities', 'benefits', 'useCases'].map((tab) => ( */}
                    {["features", "benefits", "differentiators"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                          activeTab === tab ? "bg-white text-primary-purple shadow-sm" : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {tab === "features" && "Features"}
                        {tab === "benefits" && "Benefits"}
                        {tab === "differentiators" && "Differentiators"}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="space-y-4">
                    {activeTab === "features" && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key features</h3>
                        <ul className="space-y-3">
                          {selectedProduct.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircleIcon className="h-5 w-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeTab === "benefits" && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Benefits</h3>
                        <ul className="space-y-3">
                          {selectedProduct.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <ArrowRightIcon className="h-5 w-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeTab === "differentiators" && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Perfect For</h3>
                        <ul className="space-y-3">
                          {selectedProduct.differentiators.map((differentiator, index) => (
                            <li key={index} className="flex items-start">
                              <PlayIcon className="h-5 w-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{differentiator}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mt-8">
                    <Link href={selectedProduct.link} target="_blank" className="btn-primary">
                      See {selectedProduct.name} in Action
                    </Link>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <selectedProduct.icon className="h-24 w-24 text-primary-orange mx-auto mb-4" />
                    <div className="text-lg font-semibold text-gray-900 mb-2">{selectedProduct.name}</div>
                    <div className="text-primary-orange font-medium">{selectedProduct.outcome}</div>
                    <div className="mt-4 text-sm text-gray-600">Interactive demo and screenshots coming soon</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* 5. Architecture & Scalability */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 section-padding overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          ></div>
        </div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-6">
                <ShieldCheckIcon className="w-5 h-5 text-primary-purple" />
                <span className="text-primary-purple text-sm font-semibold">Enterprise-Grade Infrastructure</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-heading mb-6">
                Built for <span className="text-primary-purple">Scale & Reliability</span>
              </h2>
              <p className="text-xl leading-8 text-gray-600">Modern architecture principles and cutting-edge technology ensure your platform grows seamlessly with your business</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12 lg:items-stretch">
            {/* Architecture Features - Takes 3 columns */}
            <AnimatedSection direction="left" className="lg:col-span-3 flex">
              <div className="flex flex-col w-full bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-purple to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                    <CubeTransparentIcon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Architecture Features</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                  {architectureFeatures.map((feature, index) => (
                    <div
                      key={feature.name}
                      className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-orange/50 hover:-translate-y-1"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-orange to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                          <CheckCircleIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary-purple transition-colors">{feature.name}</div>
                          <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Technical Stack - Takes 2 columns */}
            <AnimatedSection direction="right" delay={0.2} className="lg:col-span-2 flex">
              <div className="flex flex-col w-full bg-gradient-to-br from-primary-purple via-purple-700 to-purple-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-orange/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      <CpuChipIcon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Tech Stack</h3>
                  </div>
                  <div className="space-y-3 flex-1 flex flex-col justify-center">
                    {[
                      { label: "Frontend", value: "React/Next.js", icon: "⚛️" },
                      { label: "Backend", value: "Node.js/Python", icon: "🚀" },
                      { label: "Database", value: "PostgreSQL/Redis", icon: "💾" },
                      { label: "Infrastructure", value: "AWS/Docker/K8s", icon: "☁️" },
                      { label: "Monitoring", value: "DataDog/Sentry", icon: "📊" },
                    ].map((tech, index) => (
                      <div
                        key={tech.label}
                        className="group flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
                          <span className="text-white font-medium">{tech.label}</span>
                        </div>
                        <span className="text-primary-orange font-bold text-sm">{tech.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Performance Metrics */}
          <AnimatedSection direction="up" delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { metric: "99.9%", label: "Uptime SLA", icon: ShieldCheckIcon },
                { metric: "<100ms", label: "API Response", icon: ArrowPathIcon },
                { metric: "10M+", label: "Requests/Day", icon: ChartBarIcon },
                { metric: "24/7", label: "Support", icon: CogIcon },
              ].map((stat, index) => (
                <div key={stat.label} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-purple/30 text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-purple rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary-purple mb-2">{stat.metric}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* 6. Integrations */}
      {/* <div className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">Seamless Integrations</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">Connect with your existing tools and systems through our comprehensive API platform</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
            {integrations.map((integration, index) => (
              <AnimatedSection key={integration.name} direction="up" delay={index * 0.05}>
                <div className="group bg-white rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary-orange/30 h-full">
                  <div className="flex flex-col items-center justify-center text-center space-y-2 h-full">
                    <div className="w-14 h-14 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Image src={integration.logo} alt={integration.name} width={56} height={56} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="w-full">
                      <div className="text-xs font-semibold text-gray-900 group-hover:text-primary-purple transition-colors line-clamp-1">{integration.name}</div>
                      <div className="text-[10px] text-gray-500 mt-1">{integration.category}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection direction="up" delay={0.5}>
            <div className="relative overflow-hidden bg-gradient-to-r from-primary-purple to-purple-700 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "32px 32px",
                  }}
                ></div>
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                  <PlusIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Open API Platform</h3>
                <p className="text-white/90 text-lg max-w-2xl mx-auto mb-6">
                  Build custom integrations with our comprehensive REST and GraphQL APIs. Full documentation and developer support included.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-primary-orange" />
                    <span>REST & GraphQL APIs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-primary-orange" />
                    <span>Webhooks Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-primary-orange" />
                    <span>Developer Portal</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.7}>
            <div className="text-center mt-12">
              <Link href="/integrations" className="inline-flex items-center gap-2 text-primary-purple font-semibold hover:text-primary-orange transition-colors text-lg group">
                <span>View All Supported Integrations</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div> */}

      {/* 7. Primary CTA */}
      <div className="relative bg-gradient-to-br from-primary-purple via-purple-800 to-primary-purple section-padding overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Floating Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-orange/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-4xl text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <span className="text-white text-sm font-semibold">🚀 Ready to Transform Your Operations?</span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-heading mb-6">Get a Personalized Demo Tailored to Your Business Needs</h2>

              {/* Description */}
              <p className="mx-auto max-w-2xl text-xl leading-8 text-white/90 mb-10">
                See the impact our platform can have on your hospitality operations. Book a demo and discover how we solve your specific challenges.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link
                  href="/contact"
                  className="group relative px-10 py-5 bg-white text-primary-purple rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3"
                >
                  <span>Request Demo</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="group px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 flex items-center gap-3"
                >
                  <span>Talk to Our Experts</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-primary-orange" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-primary-orange" />
                  <span>30-Minute Demo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-primary-orange" />
                  <span>Custom Solutions</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-purple"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
