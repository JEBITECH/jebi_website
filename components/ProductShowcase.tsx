"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { stages } from "@/app/products/page";

interface ProductShowcaseProps {
  showHeader?: boolean;
  autoRotate?: boolean;
  rotationInterval?: number;
  className?: string;
}

export default function ProductShowcase({ showHeader = true, autoRotate = true, rotationInterval = 8000, className = "" }: ProductShowcaseProps) {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStage = stages[activeIndex];

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stages.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotationInterval]);

  return (
    <AnimatedSection direction="up">
      <div className={`bg-white section-padding ${className}`}>
        <div className="container-custom">
          {/* Header */}
          {showHeader && (
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Unified Hospitality Operations Platform</h2>
              <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">From booking to scale, we solve real operational challenges at every stage</p>
            </div>
          )}

          {/* Main Content Card */}
          <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-gray-50 to-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* LEFT SIDE - Pain & Solution Cards */}
              <div className="p-8 sm:p-12 lg:p-16 flex items-center bg-white">
                <div className="w-full space-y-8">
                  {/* PAIN Card */}
                  <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-red-400 to-primary-orange"></div>

                    <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">The Challenge</h3>
                            <span className="text-xs font-semibold px-3 py-1 bg-red-50 text-red-600 rounded-full border border-red-200">Pain Point</span>
                          </div>
                          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{activeStage.painDescription}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="flex justify-center -my-4 relative z-10">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-orange to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>

                  {/* SOLUTION Card */}
                  <div className="relative">
                    <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-orange to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{activeStage.solutionTitle}</h3>
                            <span className="text-xs font-semibold px-3 py-1 bg-orange-50 text-primary-orange rounded-full border border-orange-200">Solution</span>
                          </div>
                          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{activeStage.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - Visual & CTA */}
              <div className="relative overflow-hidden">
                {/* Background Image - Full Coverage */}
                <Image src={activeStage.image} alt={activeStage.title} fill priority className="object-cover" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/80 via-purple-900/70 to-black/80"></div>

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-8 sm:p-12 lg:p-16 min-h-[600px]">
                  {/* CTA Section */}
                  <div className="text-center space-y-6 w-full max-w-md">
                    {/* CTA Button */}
                    <button
                      onClick={() => {
                        router.push(`/products?product=${activeStage.scrollToId}`);
                      }}
                      className="w-full group relative px-8 py-4 bg-white hover:bg-gray-50 text-primary-purple text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
                    >
                      <span>{activeStage.ctaLabel}</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>

                    {/* Benefits */}
                    <div className="space-y-2 pt-4">
                      {["Quick Setup", "Expert Support", "Proven Results"].map((benefit, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-2 text-white/90 text-sm">
                          <svg className="w-4 h-4 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM NAVIGATION STEPS */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const active = index === activeIndex;

              return (
                <button
                  onClick={() => setActiveIndex(index)}
                  key={stage.id}
                  className={`group relative px-5 py-3 rounded-2xl flex flex-col items-center justify-center shadow-md transition-all duration-300 transform hover:scale-105 min-w-[120px] ${
                    active ? "bg-gradient-to-br from-primary-purple to-purple-700 text-white scale-105 shadow-xl" : "bg-white text-gray-700 hover:shadow-lg border border-gray-200"
                  }`}
                >
                  {active && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-orange rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs font-bold">{stage.id}</span>
                    </div>
                  )}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 ${active ? "bg-white/20" : "bg-gray-100 group-hover:bg-primary-orange/10"}`}>
                    <Icon size={20} className={`${active ? "text-white" : "text-gray-600 group-hover:text-primary-orange"}`} />
                  </div>
                  <div className={`text-xs font-bold ${active ? "text-white" : "text-gray-900"}`}>{stage.title}</div>
                  <div className={`text-xs mt-1 ${active ? "text-white/70" : "text-gray-500"}`}>Stage {stage.id}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
