"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
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

export default function ProductShowcase({ showHeader = true, autoRotate = true, rotationInterval = 5000, className = "" }: ProductShowcaseProps) {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStage = stages[activeIndex];
  
  // Track if component is in view
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {
    if (!autoRotate || !inView) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stages.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotationInterval, inView]);

  return (
    <div ref={ref}>
      <AnimatedSection direction="up">
        <div className={`bg-white ${className}`}>
          <div className="container-custom px-4 sm:px-6 py-10 md:py-16">
          {/* Header */}
          {showHeader && (
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 px-2">
                Unified Hospitality Operations Platform
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto px-4">
                From booking to scale, we solve real operational challenges at every stage
              </p>
            </div>
          )}

          {/* Main Content Card */}
          <div className="relative w-full overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-gray-50 to-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* LEFT SIDE - Pain & Solution Cards + CTA Button */}
              <div className="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-between bg-white">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full space-y-2 sm:space-y-3"
                  >
                  {/* Product Name */}
                  <div className="mb-1">
                    <h2 className="text-base sm:text-lg font-bold text-primary-purple">{activeStage.productName}</h2>
                  </div>

                  {/* PAIN Card */}
                  <div className="relative">
                    {/* Connecting Line - Hidden on mobile */}
                    <div className="hidden sm:block absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-red-400 to-primary-orange"></div>

                    <div className="relative bg-white rounded-xl p-3 sm:p-4 lg:p-5 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-red-500 rounded-lg flex items-center justify-center shadow-lg">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1.5 sm:mb-2">
                            <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">The Challenge</h3>
                            <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 bg-red-50 text-red-600 rounded-full border border-red-200 whitespace-nowrap">
                              Pain Point
                            </span>
                          </div>
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{activeStage.painDescription}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="flex justify-center -my-1 relative z-10">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-primary-orange to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>

                  {/* SOLUTION Card */}
                  <div className="relative">
                    <div className="relative bg-white rounded-xl p-3 sm:p-4 lg:p-5 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-orange to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1.5 sm:mb-2">
                            <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">{activeStage.solutionTitle}</h3>
                            <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 bg-orange-50 text-primary-orange rounded-full border border-orange-200 whitespace-nowrap">
                              Solution
                            </span>
                          </div>
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{activeStage.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                </AnimatePresence>

                {/* CTA Button */}
                <div className="mt-3 sm:mt-4">
                  <button
                    onClick={() => {
                      const productId = stageToProductMap[activeStage.id];
                      router.push(`/products?product=${productId}`);
                    }}
                    className="w-full group relative px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary-purple to-purple-700 hover:from-primary-purple hover:to-purple-800 text-white text-sm sm:text-base font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
                  >
                    <span>{activeStage.ctaLabel}</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE - Product Image */}
              <div className="relative overflow-hidden min-h-[180px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-blue-100/20"></div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full h-full"
                  >
                    <Image 
                      src={activeStage.image} 
                      alt={activeStage.title} 
                      fill
                  priority 
                  className="object-cover lg:object-fill"
                />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* BOTTOM NAVIGATION STEPS */}
          <div className="mt-3 sm:mt-4">
            {/* Mobile View - Slideshow Grid with Dots */}
            <div className="block sm:hidden">
              {/* Stage Grid - All stages visible */}
              <div className="mb-3">
                {/* First Row - 3 items */}
                <div className="grid grid-cols-3 gap-2 mb-2">
                  {stages.slice(0, 3).map((stage, index) => {
                    const Icon = stage.icon;
                    const active = index === activeIndex;
                    return (
                      <button
                        key={stage.id}
                        onClick={() => setActiveIndex(index)}
                        className={`relative p-2 rounded-lg flex flex-col items-center transition-all duration-300 shadow-md ${
                          active 
                            ? 'bg-gradient-to-br from-primary-purple to-purple-700 text-white scale-105 shadow-xl' 
                            : 'bg-white text-gray-700 border border-gray-200'
                        }`}
                      >
                        {active && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary-orange rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white text-[10px] font-bold">{stage.id}</span>
                          </div>
                        )}
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-1 ${
                          active ? 'bg-white/20' : 'bg-gray-100'
                        }`}>
                          <Icon size={16} className={active ? 'text-white' : 'text-gray-600'} />
                        </div>
                        <div className={`text-[10px] font-semibold text-center leading-tight ${
                          active ? 'text-white' : 'text-gray-900'
                        }`}>
                          {stage.title}
                        </div>
                        <div className={`text-[9px] mt-0.5 ${
                          active ? 'text-white/70' : 'text-gray-500'
                        }`}>
                          Stage {stage.id}
                        </div>
                      </button>
                    );
                  })}
                </div>
                
                {/* Second Row - 2 items centered */}
                <div className="flex justify-center gap-2">
                  {stages.slice(3, 5).map((stage, index) => {
                    const Icon = stage.icon;
                    const actualIndex = index + 3;
                    const active = actualIndex === activeIndex;
                    return (
                      <button
                        key={stage.id}
                        onClick={() => setActiveIndex(actualIndex)}
                        className={`relative p-2 rounded-lg flex flex-col items-center transition-all duration-300 shadow-md w-[calc(33.333%-0.5rem)] ${
                          active 
                            ? 'bg-gradient-to-br from-primary-purple to-purple-700 text-white scale-105 shadow-xl' 
                            : 'bg-white text-gray-700 border border-gray-200'
                        }`}
                      >
                        {active && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary-orange rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white text-[10px] font-bold">{stage.id}</span>
                          </div>
                        )}
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-1 ${
                          active ? 'bg-white/20' : 'bg-gray-100'
                        }`}>
                          <Icon size={16} className={active ? 'text-white' : 'text-gray-600'} />
                        </div>
                        <div className={`text-[10px] font-semibold text-center leading-tight ${
                          active ? 'text-white' : 'text-gray-900'
                        }`}>
                          {stage.title}
                        </div>
                        <div className={`text-[9px] mt-0.5 ${
                          active ? 'text-white/70' : 'text-gray-500'
                        }`}>
                          Stage {stage.id}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-1.5">
                {stages.map((stage, index) => (
                  <button
                    key={stage.id}
                    onClick={() => setActiveIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === activeIndex 
                        ? 'w-6 h-1.5 bg-primary-purple' 
                        : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to ${stage.title}`}
                  />
                ))}
              </div>
            </div>

            {/* Tablet & Desktop View - Wrapped Grid */}
            <div className="hidden sm:flex flex-wrap justify-center gap-2">
              {stages.map((stage, index) => {
                const Icon = stage.icon;
                const active = index === activeIndex;

                return (
                  <button
                    onClick={() => setActiveIndex(index)}
                    key={stage.id}
                    className={`group relative px-3 md:px-4 py-2 rounded-xl flex flex-col items-center justify-center shadow-md transition-all duration-300 transform hover:scale-105 min-w-[100px] md:min-w-[110px] ${
                      active ? "bg-gradient-to-br from-primary-purple to-purple-700 text-white scale-105 shadow-xl" : "bg-white text-gray-700 hover:shadow-lg border border-gray-200"
                    }`}
                  >
                    {active && (
                      <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-primary-orange rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-[10px] font-bold">{stage.id}</span>
                      </div>
                    )}
                    <div className={`w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center mb-1.5 ${active ? "bg-white/20" : "bg-gray-100 group-hover:bg-primary-orange/10"}`}>
                      <Icon size={18} className={`${active ? "text-white" : "text-gray-600 group-hover:text-primary-orange"}`} />
                    </div>
                    <div className={`text-xs font-bold ${active ? "text-white" : "text-gray-900"}`}>{stage.title}</div>
                    <div className={`text-[10px] mt-0.5 ${active ? "text-white/70" : "text-gray-500"}`}>Stage {stage.id}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
    </div>
  );
}
