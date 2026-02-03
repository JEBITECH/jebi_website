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

// Mapping stages to product IDs
const stageToProductMap: { [key: number]: string } = {
  1: 'booking-engine',
  2: 'guest-handbook',
  3: 'virtue-inspect',
  4: 'accounting',
  5: 'virtue-connect-erp'
};

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
        <div className="container-custom px-4 sm:px-6">
          {/* Header */}
          {showHeader && (
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
                Unified Hospitality Operations Platform
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4">
                From booking to scale, we solve real operational challenges at every stage
              </p>
            </div>
          )}

          {/* Main Content Card */}
          <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl bg-gradient-to-br from-gray-50 to-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* LEFT SIDE - Pain & Solution Cards + CTA Button */}
              <div className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col justify-between bg-white">
                <div className="w-full space-y-4 sm:space-y-6 md:space-y-8">
                  {/* PAIN Card */}
                  <div className="relative">
                    {/* Connecting Line - Hidden on mobile */}
                    <div className="hidden sm:block absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-red-400 to-primary-orange"></div>

                    <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900">The Challenge</h3>
                            <span className="text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 bg-red-50 text-red-600 rounded-full border border-red-200 whitespace-nowrap">
                              Pain Point
                            </span>
                          </div>
                          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">{activeStage.painDescription}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="flex justify-center -my-2 sm:-my-4 relative z-10">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-orange to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>

                  {/* SOLUTION Card */}
                  <div className="relative">
                    <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-orange to-orange-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900">{activeStage.solutionTitle}</h3>
                            <span className="text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 bg-orange-50 text-primary-orange rounded-full border border-orange-200 whitespace-nowrap">
                              Solution
                            </span>
                          </div>
                          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">{activeStage.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-4 sm:mt-6 md:mt-8">
                  <button
                    onClick={() => {
                      const productId = stageToProductMap[activeStage.id];
                      router.push(`/products?product=${productId}`);
                    }}
                    className="w-full group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-purple to-purple-700 hover:from-primary-purple hover:to-purple-800 text-white text-base sm:text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 sm:gap-3"
                  >
                    <span>{activeStage.ctaLabel}</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE - Product Image */}
              <div className="relative overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center bg-gray-50">
                <Image 
                  src={activeStage.image} 
                  alt={activeStage.title} 
                  fill
                  priority 
                  className="object-fill"
                />
              </div>
            </div>
          </div>

          {/* BOTTOM NAVIGATION STEPS */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 md:mt-12">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const active = index === activeIndex;

              return (
                <button
                  onClick={() => setActiveIndex(index)}
                  key={stage.id}
                  className={`group relative px-3 sm:px-4 md:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center shadow-md transition-all duration-300 transform hover:scale-105 min-w-[90px] sm:min-w-[110px] md:min-w-[120px] ${
                    active ? "bg-gradient-to-br from-primary-purple to-purple-700 text-white scale-105 shadow-xl" : "bg-white text-gray-700 hover:shadow-lg border border-gray-200"
                  }`}
                >
                  {active && (
                    <div className="absolute -top-1.5 sm:-top-2 -right-1.5 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-primary-orange rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-[10px] sm:text-xs font-bold">{stage.id}</span>
                    </div>
                  )}
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl flex items-center justify-center mb-1 sm:mb-2 ${active ? "bg-white/20" : "bg-gray-100 group-hover:bg-primary-orange/10"}`}>
                    <Icon size={16} className={`sm:w-5 sm:h-5 ${active ? "text-white" : "text-gray-600 group-hover:text-primary-orange"}`} />
                  </div>
                  <div className={`text-[10px] sm:text-xs font-bold ${active ? "text-white" : "text-gray-900"}`}>{stage.title}</div>
                  <div className={`text-[9px] sm:text-xs mt-0.5 sm:mt-1 ${active ? "text-white/70" : "text-gray-500"}`}>Stage {stage.id}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
