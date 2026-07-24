"use client";

import { Suspense } from "react";
import { Loader2 } from "lucide-react";

import FloatingSidebar from "@/components/FloatingSidebar";
import OwnerHubHero from "@/components/ownerhub/OwnerHubHero";
import OwnerHubChallenges from "@/components/ownerhub/OwnerHubChallenges";
import OwnerHubCapabilities from "@/components/ownerhub/OwnerHubCapabilities";
import OwnerHubDistribution from "@/components/ownerhub/OwnerHubDistribution";
import OwnerHubSettlementOverview from "@/components/ownerhub/OwnerHubSettlementOverview";
import OwnerHubPortal from "@/components/ownerhub/OwnerHubPortal";
import OwnerHubCTA from "@/components/ownerhub/OwnerHubCTA";
import ProductContactSection from "@/components/ProductContactSection";

const sections = [
  { id: "hero", label: "Home" },
  { id: "challenges", label: "The Problem" },
  { id: "how-it-works", label: "How It Works" },
  { id: "distribution", label: "Distribution Models" },
  { id: "settlement-overview", label: "Settlement Overview" },
  { id: "portal", label: "Owner Portal" },
  { id: "contact", label: "Contact" },
  { id: "cta", label: "Get Started" },
];

function OwnerHubPageContent() {
  return (
    <div className="bg-white overflow-hidden">
      <FloatingSidebar sections={sections} />
      <OwnerHubHero />
      <OwnerHubChallenges />
      <OwnerHubCapabilities />
      <OwnerHubDistribution />
      <OwnerHubSettlementOverview />
      <OwnerHubPortal />
      <ProductContactSection
        productName="OwnerHub"
        accentColor="ownerhub-blue"
        accentColorAlt="ownerhub-green"
      />
      <OwnerHubCTA />
    </div>
  );
}

export default function OwnerHubPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-ownerhub-blue animate-spin" />
        </div>
      }
    >
      <OwnerHubPageContent />
    </Suspense>
  );
}
