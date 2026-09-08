"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Building2,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Globe2,
  ShieldCheck,
  Rocket,
  BarChart3,
  MessageCircle,
  Wallet,
  ClipboardCheck,
  Link2,
  Handshake,
  GraduationCap,
  Megaphone,
  Quote,
  BadgeCheck,
  Ticket,
  Images,
} from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import StaggeredList from "@/components/StaggeredList";
import FloatingSidebar from "@/components/FloatingSidebar";
import MagneticButton from "@/components/MagneticButton";
import VRMACountdown from "@/components/vrma/VRMACountdown";
import VRMAMeetingForm from "@/components/vrma/VRMAMeetingForm";
import jayimage from "../assets/jayimage.jpg";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about-vrma", label: "About VRMA" },
  { id: "community", label: "Community" },
  { id: "why-jebitech", label: "Why JebiTech" },
  { id: "products", label: "Our Products" },
  { id: "booth", label: "Visit Our Booth" },
  { id: "leadership", label: "Leadership" },
  { id: "faq", label: "FAQ" },
  { id: "cta", label: "Connect" },
];

// Event logistics — booth number to be confirmed
const eventDetails = [
  { icon: Calendar, label: "When", value: "Oct 4–6, 2026" },
  { icon: MapPin, label: "Where", value: "Nashville, TN" },
  { icon: Building2, label: "Venue", value: "Music City Center" },
  { icon: Ticket, label: "Booth", value: "740" },
];

// What VRMA offers its member community — grounded in VRMA's own stated mission
const vrmaPillars = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Best-in-class conferences, workshops, and certifications that keep operators ahead of an evolving industry.",
  },
  {
    icon: Globe2,
    title: "Global Community",
    description: "The largest network of vacation rental professionals worldwide, spanning property managers, PMCs, and technology partners.",
  },
  {
    icon: Handshake,
    title: "Connection",
    description: "Direct access to decision-makers, peers, and innovators shaping the future of short-term rental hospitality.",
  },
  {
    icon: Megaphone,
    title: "Advocacy",
    description: "A unified voice representing the industry on regulation, policy, and the issues that affect how operators do business.",
  },
];

// JebiTech's product suite — the two most relevant to a VRMA audience get their own
// dedicated pages; the rest link into the main product catalogue.
const productSuite = [
  {
    id: "franchise-management",
    href: "/franchise-management",
    icon: Link2,
    name: "Franchise Management System",
    tagline: "One platform, every franchise",
    outcome: "Go live in days, not months",
    description:
      "Centralized franchisor and franchisee operations, automated settlements, and real-time insights across every property and country.",
  },
  {
    id: "owner-hub",
    href: "/owner-hub",
    icon: BarChart3,
    name: "OwnerHub",
    tagline: "Transparent owner settlements",
    outcome: "Eliminate settlement disputes",
    description:
      "Formula-driven owner and PMC settlements calculated automatically, with full transparency, auditability, and zero spreadsheets.",
  },
  {
    id: "stayguide",
    href: "/stayguide",
    icon: MessageCircle,
    name: "StayGuide",
    tagline: "The guest's personal smart assistant",
    outcome: "Cut support queries by up to 60%",
    description:
      "A mobile-first digital handbook with AI-powered answers, check-in instructions, and local guides for every stage of the guest journey.",
  },
  {
    id: "booking-engine",
    href: "/products?product=booking-engine",
    icon: Globe2,
    name: "Booking Engine",
    tagline: "Direct bookings made simple",
    outcome: "Increase direct bookings by 40%",
    description:
      "AI-powered booking engine and website builder that unifies reservations, websites, and operations with seamless PMS integration.",
  },
  {
    id: "virtue-inspect",
    href: "/products?product=virtue-inspect",
    icon: ClipboardCheck,
    name: "VirtueInspect",
    tagline: "AI-powered inspections at scale",
    outcome: "Reduce inspection time by up to 80%",
    description:
      "Computer-vision inspections that detect damages, missing inventory, and cleanliness issues automatically, with no more manual checklists.",
  },
  {
    id: "virtue-finance",
    href: "/products?product=virtue-finance",
    icon: Wallet,
    name: "Virtue Finance",
    tagline: "Hospitality-native accounting",
    outcome: "Cut manual accounting effort by 80%",
    description:
      "Turns PMS operational data into journals, trial balances, and financial statements automatically, built for hospitality complexity.",
  },
];

// Common questions attendees have before booking a meeting or visiting the booth
const faqs = [
  {
    question: "Where can I find JebiTech at VRMA 26 Nashville?",
    answer:
      "We'll be on the show floor at Music City Center for the full event, October 4-6, 2026. Our exact booth number will be confirmed closer to the show, reserve a meeting slot below and we'll send you the details directly.",
  },
  {
    question: "Do I need to book a meeting in advance, or can I just stop by?",
    answer:
      "Both work. Walk-ups are always welcome at the booth, but if you want dedicated time with our founders or a specific product deep-dive, reserving a slot in advance guarantees you get it.",
  },
  {
    question: "Which of your products should I look at first?",
    answer:
      "If you manage a multi-brand or multi-location portfolio, start with our Franchise Management System. If owner payouts and settlement transparency are your pain point, OwnerHub is built exactly for that. Not sure? Select \"General / Not Sure Yet\" in the form and we'll guide you.",
  },
  {
    question: "Can I get a live demo at the conference?",
    answer:
      "Yes. Our team runs live demos of the full technology suite throughout the show, no pre-booking required for a booth walkthrough. For a deeper, seated demo, we recommend reserving a slot in advance.",
  },
  {
    question: "Do you work with franchisors outside the US?",
    answer:
      "Yes. Our platform is built for multi-country operations from day one, with multi-PMS, multi-currency, and timezone-aware support already in production use.",
  },
];

// Reasons to stop by the booth
const boothHighlights = [
  { icon: Sparkles, text: "Live demos of our full technology suite" },
  { icon: Users, text: "Meet our founders & engineering leadership" },
  { icon: CheckCircle2, text: "Exclusive conference-only pricing" },
  { icon: Rocket, text: "Free trial activation for every attendee" },
];

// Track record, reused from our company-wide metrics
const impactStats = [
  { value: "15+", label: "Years in Hospitality" },
  { value: "10K+", label: "Properties Served" },
  { value: "10+", label: "AI-Enabled Products" },
  { value: "99.9%", label: "System Uptime" },
];

// Community gallery — only the clean, flat-background VRMA member images are used here.
// (1.png and 2.png are bold ad-style gradients that clash with the site's flat design
// system, so they're intentionally excluded from this rotation.)
const communitySlides = [
  { src: "/assets/vrma/3.png", alt: "VRMA member badge", caption: "Part of a Global Network", shape: "rounded-[3rem_1rem_3rem_1rem]" },
  { src: "/assets/vrma/4.png", alt: "VRMA member badge", caption: "Connected to Industry Leaders", shape: "rounded-3xl" },
  { src: "/assets/vrma/5.png", alt: "VRMA member testimonial on industry connections", caption: "Supporting Our Members' Growth", shape: "rounded-[1rem_3rem_1rem_3rem]" },
  { src: "/assets/vrma/6.png", alt: "VRMA support for big business decisions", caption: "Guidance for Every Big Decision", shape: "rounded-2xl" },
  { src: "/assets/vrma/7.png", alt: "Join the largest global community of vacation rental managers", caption: "The Largest VR Community", shape: "rounded-[2.5rem]" },
];

const SLIDE_ROTATE_MS = 4200;

// Visual "slots" the community slides cycle through — front card is largest & sharpest
const communitySlotStyle = (rel: number) => {
  switch (rel) {
    case 0:
      return { x: 0, y: 0, rotate: -2, scale: 1.15, opacity: 1, zIndex: 50, blur: 0 };
    case 1:
      return { x: 130, y: -30, rotate: 9, scale: 0.82, opacity: 0.85, zIndex: 40, blur: 1 };
    case 2:
      return { x: 205, y: 8, rotate: 16, scale: 0.66, opacity: 0.4, zIndex: 30, blur: 2 };
    case 3:
      return { x: -220, y: 40, rotate: -17, scale: 0.62, opacity: 0, zIndex: 10, blur: 2 };
    default:
      return { x: -160, y: 56, rotate: -12, scale: 0.66, opacity: 0, zIndex: 5, blur: 2 };
  }
};

// Reusable flat section eyebrow badge — one consistent pattern used everywhere on this page
function SectionBadge({
  icon: Icon,
  children,
  tone = "light",
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  if (tone === "dark") {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
        <Icon className="w-4 h-4 text-primary-orange" />
        <span className="text-white text-sm font-semibold">{children}</span>
      </div>
    );
  }
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white shadow-sm border border-gray-100 rounded-full mb-6">
      <Icon className="w-4 h-4 text-primary-purple" />
      <span className="text-primary-purple text-sm font-semibold">{children}</span>
    </div>
  );
}

// Shared noise-texture overlay used on every dark solid section for consistent depth without gradients
function NoiseOverlay({ id }: { id: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <filter id={id}>
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${id})`} />
    </svg>
  );
}

export default function VRMAPage() {
  const [communityIndex, setCommunityIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCommunityIndex((c) => (c + 1) % communitySlides.length),
      SLIDE_ROTATE_MS
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      <FloatingSidebar sections={sections} />

      {/* 1. HERO — flat solid dark purple, consistent with Booth & CTA sections */}
      <div
        id="hero"
        className="relative isolate overflow-hidden bg-primary-purple-dark pt-28 pb-20 md:pt-32 md:pb-24"
      >
        <NoiseOverlay id="hero-noise" />
        <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-primary-orange/60" />
        <div className="absolute top-16 right-20 w-1 h-1 rounded-full bg-white/40" />
        <div className="absolute bottom-16 left-10 w-1.5 h-1.5 rounded-full bg-primary-orange/40" />

        <div className="container-custom px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
            {/* Left content — trimmed to the essentials */}
            <div className="lg:col-span-6">
              <AnimatedSection direction="up" delay={0.1}>
                <div className="flex flex-wrap items-center gap-2.5 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-orange text-white text-[11px] font-bold uppercase tracking-wide rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    VRMA Member
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-white/30 text-white text-[11px] font-bold uppercase tracking-wide rounded-full">
                    VRMA 26 Exhibitor
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.15}>
                <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold tracking-tight text-white font-heading leading-[1.05] mb-5">
                  See You at{" "}
                  <span className="text-primary-orange">VRMA 26 Nashville</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.2}>
                <p className="text-lg leading-8 text-white/70 max-w-lg mb-8">
                  Our full hospitality technology suite, live on the show floor.
                  Come see how we turn operational complexity into a competitive advantage.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton href="#cta" intensity={0.1} className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto text-center">
                    Schedule a Meeting
                  </MagneticButton>
                  <MagneticButton
                    href="/products"
                    intensity={0.1}
                    className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-lg font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300 w-full sm:w-auto text-center"
                  >
                    Explore Products
                  </MagneticButton>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — unified event card: details + countdown + floating badge */}
            <div className="lg:col-span-6">
              <AnimatedSection direction="right" delay={0.25}>
                <div className="relative">
                  <div className="bg-white/[0.05] border border-white/15 rounded-3xl p-6 sm:p-8">
                    <div className="flex items-center gap-2 mb-5">
                      <Calendar className="w-4 h-4 text-primary-orange" />
                      <span className="text-white text-sm font-semibold">Event Details</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {eventDetails.map((d) => (
                        <div key={d.label} className="border border-white/15 rounded-xl px-4 py-3">
                          <d.icon className="w-3.5 h-3.5 text-primary-orange mb-1.5" />
                          <div className="text-[10px] text-white/50 uppercase tracking-wider font-semibold mb-0.5">
                            {d.label}
                          </div>
                          <div className="text-sm text-white font-bold leading-tight">{d.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-5 border-t border-white/10">
                      <div className="text-[10px] text-white/50 uppercase tracking-wider font-semibold mb-3">
                        Countdown to Nashville
                      </div>
                      <VRMACountdown />
                    </div>
                  </div>

                  {/* Floating member badge — small, flat, no gradient */}
                  <motion.div
                    className="absolute -top-6 -right-4 w-20 h-20 bg-white rounded-2xl p-1.5 shadow-[0_16px_36px_rgba(0,0,0,0.4)] border-2 border-primary-orange/40"
                    animate={{ y: [0, -6, 0], rotate: [4, 7, 4] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image src="/assets/vrma/1.png" alt="Proud VRMA Member" fill className="object-cover" />
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>

      {/* 2. ABOUT VRMA — white, flat */}
      <div id="about-vrma" className="relative bg-white section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="container-custom relative z-10 px-4 sm:px-6">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center mb-14">
              <div className="flex justify-center">
                <SectionBadge icon={Globe2}>About VRMA</SectionBadge>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading mb-6">
                The Voice of the Vacation Rental Industry
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                The Vacation Rental Management Association is the leading and largest global
                community for short-term vacation rental professionals, providing education,
                information, connection, and advocacy so members can grow and strengthen
                their businesses while creating memorable guest experiences.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vrmaPillars.map((pillar) => (
              <div key={pillar.title} className="bg-white rounded-2xl p-6 h-full shadow-sm border border-gray-100 card-hover">
                <div className="w-12 h-12 bg-primary-purple rounded-xl flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{pillar.title}</h3>
                <p className="text-sm text-gray-600 leading-6">{pillar.description}</p>
              </div>
            ))}
          </StaggeredList>
        </div>
      </div>

      {/* 3. COMMUNITY GALLERY — rotating slides, flat member images only */}
      <div id="community" className="relative bg-white section-padding overflow-hidden">
        <div className="container-custom relative z-10 px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
            {/* Left — heading */}
            <AnimatedSection direction="left" className="lg:col-span-5">
              <SectionBadge icon={Images}>Community Highlights</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading mb-6 leading-tight">
                What Being a VRMA Member Means to Us
              </h2>
              <p className="text-lg leading-8 text-gray-600 mb-4">
                Membership isn&apos;t just a badge. It&apos;s access to a network of industry
                leaders who support and inspire each other, and a commitment to staying
                ahead of the issues shaping vacation rental management.
              </p>
              <p className="text-lg leading-8 text-gray-600">
                From education to advocacy, VRMA keeps us, and the operators we serve, one
                step ahead of a fast-moving industry.
              </p>
            </AnimatedSection>

            {/* Right — rotating card stack */}
            <div className="lg:col-span-7 w-full flex justify-center">
              <div className="relative w-full max-w-[480px] h-[380px] sm:h-[420px]">
                {/* Dashed orbit ring */}
                <motion.div
                  className="absolute left-[56%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[290px] h-[290px] sm:w-[330px] sm:h-[330px] rounded-full border border-dashed border-primary-purple/15 pointer-events-none"
                  animate={{ rotate: 360, scale: [1, 1.03, 1] }}
                  transition={{
                    rotate: { duration: 45, repeat: Infinity, ease: "linear" },
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  }}
                />

                <div className="absolute left-[56%] top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <AnimatePresence initial={false}>
                    {communitySlides.map((slide, i) => {
                      const rel = (i - communityIndex + communitySlides.length) % communitySlides.length;
                      const style = communitySlotStyle(rel);
                      const isFront = rel === 0;

                      return (
                        <motion.div
                          key={slide.src}
                          className="absolute left-0 top-0"
                          style={{ zIndex: style.zIndex, filter: `blur(${style.blur}px)` }}
                          animate={{
                            x: style.x,
                            y: style.y,
                            rotate: style.rotate,
                            scale: style.scale,
                            opacity: style.opacity,
                          }}
                          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <motion.div
                            className={`relative bg-white p-2.5 ${slide.shape} ${
                              isFront ? "ring-[3px] ring-primary-orange" : ""
                            }`}
                            style={{ width: 220, height: 260, marginLeft: -110, marginTop: -130 }}
                            animate={
                              isFront
                                ? {
                                    boxShadow: [
                                      "0 24px 54px rgba(0,0,0,0.2)",
                                      "0 30px 64px rgba(74,26,92,0.2)",
                                      "0 24px 54px rgba(0,0,0,0.2)",
                                    ],
                                  }
                                : { boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }
                            }
                            transition={
                              isFront
                                ? { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
                                : { duration: 0.4 }
                            }
                          >
                            <div className={`relative w-full h-full overflow-hidden ${slide.shape}`}>
                              <Image src={slide.src} alt={slide.alt} fill sizes="260px" className="object-cover" />
                            </div>

                            {isFront && (
                              <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 }}
                                className="absolute -bottom-3 left-2 right-2 bg-primary-purple text-white text-xs font-semibold text-center px-3 py-2 rounded-xl shadow-lg"
                              >
                                {slide.caption}
                              </motion.div>
                            )}
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>

                {/* Progress dots */}
                <div className="absolute -bottom-2 left-0 right-0 flex justify-center gap-2">
                  {communitySlides.map((slide, i) => (
                    <button
                      key={slide.src}
                      aria-label={`Show slide ${i + 1}`}
                      onClick={() => setCommunityIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === communityIndex ? "w-6 bg-primary-orange" : "w-1.5 bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. WHY JEBITECH BELONGS HERE — white, flat */}
      <ParallaxSection speed={0.1}>
        <div id="why-jebitech" className="relative bg-white section-padding overflow-hidden">
          <div className="container-custom relative z-10 px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <AnimatedSection direction="left">
                <SectionBadge icon={ShieldCheck}>Why JebiTech</SectionBadge>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading mb-6 leading-tight">
                  We Don&apos;t Just Sell Software.
                  <br />
                  We Speak Vacation Rental.
                </h2>
                <p className="text-lg leading-8 text-gray-600 mb-5">
                  The vacation rental industry isn&apos;t short on technology. It&apos;s
                  short on partners who understand how operations actually work. Delayed
                  feature delivery, disconnected PMS systems, and generic tools that don&apos;t
                  fit real operational realities are the norm, not the exception.
                </p>
                <p className="text-lg leading-8 text-gray-600 mb-8">
                  We started as hands-on hospitality technologists solving these exact
                  problems for property managers and PMCs, and built our own product suite
                  from those operational realities. That&apos;s the expertise we bring to
                  every conversation at VRMA 26.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary-purple font-semibold hover:text-primary-orange transition-colors"
                >
                  Read our full story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {impactStats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      className={`rounded-2xl p-6 text-center shadow-sm border ${
                        i % 2 === 0 ? "bg-primary-purple border-primary-purple" : "bg-primary-orange border-primary-orange"
                      }`}
                      whileHover={{ scale: 1.03, y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-white/90 uppercase tracking-wider font-semibold">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* 5. PRODUCT SUITE — flat white */}
      <div id="products" className="bg-white section-padding">
        <div className="container-custom px-4 sm:px-6">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center mb-14">
              <div className="flex justify-center">
                <SectionBadge icon={Rocket}>Built for Vacation Rentals</SectionBadge>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading mb-6">
                One Partner, Every Stage of the Guest Journey
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                From the first booking to the final settlement, our product suite covers the
                operations vacation rental managers deal with every single day.
              </p>
            </div>
          </AnimatedSection>

          <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productSuite.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 card-hover hover-glow flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-primary-purple rounded-xl flex items-center justify-center mb-4">
                  <product.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-primary-orange font-semibold mb-3">{product.tagline}</p>
                <p className="text-sm text-gray-600 leading-6 mb-4 flex-1">{product.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs font-semibold text-primary-purple">{product.outcome}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-orange group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </StaggeredList>
        </div>
      </div>

      {/* 6. BOOTH EXPERIENCE — flat solid dark purple */}
      <ParallaxSection speed={0.15}>
        <div id="booth" className="relative bg-primary-purple-dark section-padding overflow-hidden">
          <NoiseOverlay id="booth-noise" />
          <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-primary-orange/60" />
          <div className="absolute bottom-16 left-10 w-1.5 h-1.5 rounded-full bg-primary-orange/40" />

          <div className="container-custom relative z-10 px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
              {/* Left content — 7 cols */}
              <AnimatedSection direction="left" className="lg:col-span-7">
                <SectionBadge icon={Ticket} tone="dark">Visit Our Booth</SectionBadge>
                <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-white font-heading mb-6 leading-[1.1]">
                  What to Expect at Booth <span className="text-primary-orange">740</span>
                </h2>
                <p className="text-lg leading-8 text-white/75 mb-9 max-w-lg">
                  Bring your toughest operational questions. Our team will be on the floor
                  the entire show, ready to map our technology suite to your portfolio.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-9">
                  {boothHighlights.map((h) => (
                    <div key={h.text} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                        <h.icon className="w-4 h-4 text-primary-orange" />
                      </div>
                      <span className="text-sm text-white/90 leading-5 pt-1.5">{h.text}</span>
                    </div>
                  ))}
                </div>

                <MagneticButton href="#cta" intensity={0.1} className="btn-primary text-base px-7 py-3.5 inline-block">
                  Reserve a Meeting Slot
                </MagneticButton>
              </AnimatedSection>

              {/* Right — event pass visual, 5 cols */}
              <AnimatedSection direction="right" delay={0.2} className="lg:col-span-5">
                <div className="relative mx-auto max-w-sm">
                  {/* Event pass card */}
                  <div className="relative bg-white rounded-3xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.45)] rotate-[-2deg]">
                    {/* Perforated top strip */}
                    <div className="flex items-center justify-between mb-5 pb-4 border-b border-dashed border-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary-purple flex items-center justify-center">
                          <Ticket className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Exhibitor Pass</span>
                      </div>
                      <BadgeCheck className="w-5 h-5 text-[#3B5BDB] fill-[#3B5BDB]" strokeWidth={0} />
                    </div>

                    {/* Photo */}
                    <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[4/3]">
                      <Image
                        src="/assets/vrma/2.png"
                        alt="VRMA member company recognition"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Booth number block */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Booth Number</div>
                        <div className="text-3xl font-bold text-primary-purple font-heading">740</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Exhibitor</div>
                        <div className="text-base font-bold text-gray-900">JebiTech</div>
                      </div>
                    </div>

                    {/* Barcode strip */}
                    <div className="flex gap-[3px] h-8 items-end pt-3 border-t border-dashed border-gray-200">
                      {Array.from({ length: 38 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gray-800"
                          style={{ height: `${[40, 90, 60, 100, 55, 75][i % 6]}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Floating member badge */}
                  <motion.div
                    className="absolute -top-6 -left-6 w-20 h-20 bg-white rounded-2xl p-1.5 shadow-[0_16px_36px_rgba(0,0,0,0.4)] border-2 border-primary-orange/40"
                    animate={{ y: [0, -6, 0], rotate: [-6, -3, -6] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image src="/assets/vrma/1.png" alt="Proud Member of VRMA" fill className="object-cover" />
                    </div>
                  </motion.div>

                  {/* Floating quote chip */}
                  <motion.div
                    className="absolute -bottom-5 -right-4 flex items-center gap-2 bg-primary-orange text-white rounded-full pl-3 pr-4 py-2 shadow-[0_16px_32px_rgba(255,107,53,0.35)] whitespace-nowrap"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Quote className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-xs font-semibold">See you on the show floor</span>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* 7. LEADERSHIP SPOTLIGHT — white, flat */}
      <div id="leadership" className="bg-white section-padding">
        <div className="container-custom px-4 sm:px-6">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-4xl">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm border border-gray-100">
                    <Image src={jayimage} alt="Jay Bhavsar, CEO of JebiTech" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <Quote className="w-8 h-8 text-primary-orange/40 mb-3" />
                    <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-4">
                      &ldquo;We partner with technology companies and property managers in the
                      vacation rental space to solve real operational challenges, not just
                      sell software. VRMA is where that partnership begins.&rdquo;
                    </p>
                    <div className="font-bold text-gray-900">Jay Bhavsar</div>
                    <div className="text-sm text-primary-orange font-medium">Founder &amp; CEO, JebiTech</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* 8. FAQ — kills objections before the final CTA */}
      <div id="faq" className="bg-secondary-gray section-padding">
        <div className="container-custom px-4 sm:px-6">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <div className="flex justify-center">
                <SectionBadge icon={MessageCircle}>Frequently Asked</SectionBadge>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading mb-4">
                Questions Before You Reach Out
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                Everything you need to know before visiting our booth or booking a meeting.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.question} direction="up" delay={0.05 * i}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* 9. FINAL CTA — embedded meeting-request form, flat solid dark purple background */}
      <div id="cta" className="relative bg-primary-purple-dark section-padding overflow-hidden">
        <NoiseOverlay id="cta-noise" />
        <div className="absolute top-8 right-10 w-2 h-2 rounded-full bg-primary-orange/60" />
        <div className="absolute bottom-10 left-10 w-1.5 h-1.5 rounded-full bg-primary-orange/40" />

        <div className="container-custom relative z-10 px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
            <AnimatedSection direction="left" className="lg:col-span-6">
              <SectionBadge icon={BadgeCheck} tone="dark">Let&apos;s Connect at VRMA 26</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-heading mb-6 leading-tight">
                See You in Nashville
              </h2>
              <p className="text-lg leading-8 text-white/75 mb-8">
                Whether you&apos;re evaluating new technology or just want to talk shop,
                our team would love to meet you on the show floor, or before you even
                arrive. Fill out the form and we&apos;ll confirm a time within 24 hours.
              </p>
              <div className="flex flex-wrap gap-3">
                {["No pressure, no pitch decks", "24-hour response", "Meet the founders"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 text-sm text-white/80 border border-white/15 rounded-full px-3.5 py-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary-orange" />
                    {item}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15} className="lg:col-span-6">
              <VRMAMeetingForm />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple accordion item for the FAQ section
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left"
      >
        <span className="text-sm sm:text-base font-semibold text-gray-900">{question}</span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <span className="text-lg leading-none">+</span>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 sm:px-6 pb-5 text-sm text-gray-600 leading-6">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
