"use client";

import { Suspense } from "react";
import { Loader2 } from "lucide-react";

import FloatingSidebar from "@/components/FloatingSidebar";
import StayGuideHero from "@/components/stayguide/StayGuideHero";
import StayGuideMarquee from "@/components/stayguide/StayGuideMarquee";
import StayGuideFeatures from "@/components/stayguide/StayGuideFeatures";
import StayGuideDemo from "@/components/stayguide/StayGuideDemo";
import StayGuideBenefits from "@/components/stayguide/StayGuideBenefits";
import StayGuideUseCases from "@/components/stayguide/StayGuideUseCases";
import StayGuideWhy from "@/components/stayguide/StayGuideWhy";
import StayGuideIntegrations from "@/components/stayguide/StayGuideIntegrations";
import StayGuideCTA from "@/components/stayguide/StayGuideCTA";
import StayGuideContact from "@/components/stayguide/StayGuideContact";

const sections = [
  { id: "hero", label: "Home" },
  { id: "features", label: "Features" },
  { id: "demo", label: "Demo" },
  { id: "benefits", label: "Benefits" },
  { id: "use-cases", label: "Use Cases" },
  { id: "integrations", label: "Integrations" },
  { id: "contact", label: "Contact" },
];

function StayGuidePageContent() {
  return (
    <div className="bg-white overflow-hidden">
      <FloatingSidebar sections={sections} />
      <StayGuideHero />
      <StayGuideMarquee />
      <StayGuideFeatures />
      <StayGuideDemo />
      <StayGuideBenefits />
      <StayGuideUseCases />
      <StayGuideWhy />
      <StayGuideIntegrations />
      <StayGuideCTA />
      <StayGuideContact />
    </div>
  );
}

export default function StayGuidePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
        </div>
      }
    >
      <StayGuidePageContent />
    </Suspense>
  );
}
