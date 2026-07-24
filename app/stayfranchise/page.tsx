"use client";

import { Suspense } from "react";
import { Loader2 } from "lucide-react";

import FloatingSidebar from "@/components/FloatingSidebar";
import FMSHero from "@/components/fms/FMSHero";
import FMSChallenges from "@/components/fms/FMSChallenges";
import FMSSolution from "@/components/fms/FMSSolution";
import FMSDataOwnership from "@/components/fms/FMSDataOwnership";
import FMSSettlement from "@/components/fms/FMSSettlement";
import FMSDashboardPreview from "@/components/fms/FMSDashboardPreview";
import FMSOnboarding from "@/components/fms/FMSOnboarding";
import FMSAISupport from "@/components/fms/FMSAISupport";
import FMSGlobalReach from "@/components/fms/FMSGlobalReach";
import FMSCTA from "@/components/fms/FMSCTA";
import ProductContactSection from "@/components/ProductContactSection";

const sections = [
  { id: "hero", label: "Home" },
  { id: "challenges", label: "Challenges" },
  { id: "solution", label: "Solution" },
  { id: "data-ownership", label: "Data Ownership" },
  { id: "settlement", label: "Settlement" },
  { id: "dashboard", label: "Dashboard" },
  { id: "onboarding", label: "Onboarding" },
  { id: "ai-support", label: "AI & Reports" },
  { id: "global", label: "Global Reach" },
  { id: "contact", label: "Contact" },
];

function StayFranchisePageContent() {
  return (
    <div className="bg-white overflow-hidden">
      <FloatingSidebar sections={sections} />
      <FMSHero />
      <FMSChallenges />
      <FMSSolution />
      <FMSDataOwnership />
      <FMSSettlement />
      <FMSDashboardPreview />
      <FMSOnboarding />
      <FMSAISupport />
      <FMSGlobalReach />
      <ProductContactSection
        productName="StayFranchise"
        accentColor="fms-indigo"
        accentColorAlt="fms-gold"
      />
      <FMSCTA />
    </div>
  );
}

export default function StayFranchisePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-fms-indigo animate-spin" />
        </div>
      }
    >
      <StayFranchisePageContent />
    </Suspense>
  );
}
