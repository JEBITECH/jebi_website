"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

import FloatingSidebar from "@/components/FloatingSidebar";
import GuestyHero, { GuestyReferralStrip } from "@/components/guesty/GuestyHero";
import GuestyProblem from "@/components/guesty/GuestyProblem";
import GuestyValueCallout from "@/components/guesty/GuestyValueCallout";
import GuestyWhy from "@/components/guesty/GuestyWhy";
import GuestyPainAreas from "@/components/guesty/GuestyPainAreas";
import GuestyServices from "@/components/guesty/GuestyServices";
import GuestyIndustries from "@/components/guesty/GuestyIndustries";
import GuestyTechStack from "@/components/guesty/GuestyTechStack";
import GuestyProcess from "@/components/guesty/GuestyProcess";
import GuestyBenefits from "@/components/guesty/GuestyBenefits";
import GuestyGoalTable from "@/components/guesty/GuestyGoalTable";
import GuestyCaseStudies from "@/components/guesty/GuestyCaseStudies";
import GuestyTestimonials from "@/components/guesty/GuestyTestimonials";
import GuestyFAQ from "@/components/guesty/GuestyFAQ";
import GuestyCTABanner from "@/components/guesty/GuestyCTABanner";
import GuestyContact from "@/components/guesty/GuestyContact";

const sections = [
  { id: "hero", label: "Home" },
  { id: "problem", label: "The Problem" },
  { id: "services", label: "Services" },
  { id: "pain-areas", label: "Pain Areas" },
  { id: "process", label: "Process" },
  { id: "goal-table", label: "Solutions" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

// ---------------------------------------------------------------------------
// Referral tracking hook
// ---------------------------------------------------------------------------

function useGuestyReferral() {
  const searchParams = useSearchParams();
  const [tracking, setTracking] = useState({
    leadSource: "guesty-marketplace",
    utmSource: "guesty",
    utmCampaign: "",
  });

  useEffect(() => {
    const ref = searchParams.get("ref") || "guesty-marketplace";
    const utmSource = searchParams.get("utm_source") || "guesty";
    const utmCampaign = searchParams.get("utm_campaign") || "";

    setTracking({ leadSource: ref, utmSource, utmCampaign });

    try {
      sessionStorage.setItem("jebitech_lead_source", ref);
    } catch {
      // sessionStorage unavailable — ignore
    }

    const w = window as typeof window & { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: "guesty_page_view",
      lead_source: ref,
      utm_source: utmSource,
      utm_campaign: utmCampaign,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return tracking;
}

// ---------------------------------------------------------------------------
// Page content
// ---------------------------------------------------------------------------

function GuestyPageContent() {
  const tracking = useGuestyReferral();

  return (
    <div className="bg-white overflow-hidden">
      <FloatingSidebar sections={sections} />

      <GuestyReferralStrip leadSource={tracking.leadSource} />
      <GuestyHero />
      <GuestyProblem />
      <GuestyValueCallout />
      <GuestyWhy />
      <GuestyPainAreas />
      <GuestyServices />
      <GuestyIndustries />
      <GuestyTechStack />
      <GuestyProcess />
      <GuestyBenefits />
      <GuestyGoalTable />
      <GuestyCaseStudies />
      {/* <GuestyTestimonials /> */}
      <GuestyFAQ />
      <GuestyCTABanner />
      <GuestyContact tracking={tracking} />
    </div>
  );
}

export default function GuestyPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-primary-orange animate-spin" />
        </div>
      }
    >
      <GuestyPageContent />
    </Suspense>
  );
}
