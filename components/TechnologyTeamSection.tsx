"use client";

import React from "react";
import { motion } from "framer-motion";

const teamData = [
    { id: "01", text: "Team with 20 years of Experience in developing technology for hospitality industry", angle: -50 },
    { id: "02", text: "Worked with Clients with Complex business operations and solved it using Technology", angle: -25 },
    { id: "03", text: "Working Experience of Clients from Australia, Europe, UK and USA, giving us knowledge of different working, functions and rules of different locations.", angle: -5 },
    { id: "04", text: "Experience of using Wide range of technology and hands on with latest technical knowledge", angle: 25 },
    { id: "05", text: "Experience Tech team with great domain knowledge", angle: 50 },
];

const TechnologyTeamSection = () => {
    // SVG Coordinate Constants
    const viewBoxSize = 600;
    const center = 300; // Exact center of our SVG coordinate space
    const arcRadius = 240; // The radius of the blue line

    return (
        <>
            {/* Mobile View - Vertical List */}
            <div className="block lg:hidden">
              {/* Central Heading */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 text-center"
              >
                <div className="inline-block bg-white rounded-3xl shadow-xl p-8 border-4 border-slate-50 relative">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b] leading-tight">
                    Technology <br /> Team
                  </h2>
                  <div className="absolute inset-0 rounded-3xl border-4 border-transparent border-t-orange-300 border-r-purple-500 border-b-green-400 opacity-40" />
                </div>
              </motion.div>

              {/* List of Points */}
              <div className="space-y-4">
                {teamData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-md p-4 sm:p-5 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg">
                        {item.id}
                      </div>
                      <p className="flex-1 text-[#4338ca] font-medium text-sm sm:text-base leading-relaxed pt-1">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop View - Original Arc Design */}
            <section className="hidden lg:block relative w-full bg-white flex items-center justify-center">
                {/* Wrapper to hold everything in place */}
                <div className="relative w-full max-w-6xl h-[700px]">

                    {/* 1. THE MAIN SVG LAYER (Contains the Arc and the "Video" Pointer) */}
                    <svg
                        viewBox={`0 0 1200 ${viewBoxSize}`}
                        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                    >
                        {/* The Blue Arc Line */}
                        <motion.path
                            d={`M ${center + arcRadius * Math.cos(-60 * Math.PI / 180)} ${center + arcRadius * Math.sin(-60 * Math.PI / 180)} 
                   A ${arcRadius} ${arcRadius} 0 0 1 
                   ${center + arcRadius * Math.cos(60 * Math.PI / 180)} ${center + arcRadius * Math.sin(60 * Math.PI / 180)}`}
                            fill="none"
                            stroke="#60A5FA" // Light blue
                            strokeWidth="3"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </svg>

                    {/* 2. THE CENTRAL HEADING CIRCLE */}
                    <div
                        className="absolute z-20 shadow-2xl rounded-full bg-white flex items-center justify-center border-[10px] border-slate-50"
                        style={{
                            width: '380px',
                            height: '380px',
                            left: `${center - 60}px`,
                            top: `${center - 140}px`,
                            transform: 'translateX(-180px)' // Shifts it left to make room for text on right
                        }}
                    >
                        <div className="text-center">
                            <h2 className="text-4xl font-extrabold text-[#1e1b4b] leading-tight">
                                Technology <br /> Team
                            </h2>
                        </div>
                        {/* Colored segmented border simulation */}
                        <div className="absolute inset-0 rounded-full border-[6px] border-transparent border-t-orange-300 border-r-purple-500 border-b-green-400 opacity-40" />
                    </div>

                    {/* 3. THE ALIGNED POINTS AND TEXT */}
                    {teamData.map((item, index) => {
                        // Convert angles to X and Y coordinates relative to the same center
                        const rad = (item.angle * Math.PI) / 180;
                        const x = center + arcRadius * Math.cos(rad);
                        const y = center + arcRadius * Math.sin(rad);

                        // Different gradient colors for each number
                        const gradients = [
                            'from-blue-500 to-blue-600',
                            'from-purple-500 to-purple-600',
                            'from-pink-500 to-pink-600',
                            'from-orange-500 to-orange-600',
                            'from-green-500 to-green-600'
                        ];

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 * index + 1 }}
                                className="absolute z-30 flex items-center gap-6"
                                style={{
                                    left: `${x - 50}px`,
                                    top: `${y + 20}px`,
                                    transform: 'translate(-24px, -24px) translateX(-180px)', // Centers the bubble on the line & accounts for left shift
                                    width: '800px', // Prevents text collapse
                                }}
                            >
                                {/* The Number Bubble (Exactly on the blue line) */}
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradients[index]} shadow-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                                    {item.id}
                                </div>

                                {/* The Description Text */}
                                <p className="text-[#1e1b4b] font-medium text-lg leading-snug max-w-md">
                                    {item.text}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default TechnologyTeamSection;