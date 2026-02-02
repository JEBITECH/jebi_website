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
        <section className="relative w-full bg-white flex items-center justify-center p-4">
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

                    {/* The Moving Pointer Dot (The "Video" feel) */}
                    {/* <motion.circle
                        r="6"
                        fill="#3B82F6"
                        initial={{ offsetDistance: "0%" }}
                        whileInView={{ offsetDistance: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        style={{
                            offsetPath: `path('M ${center + arcRadius * Math.cos(-60 * Math.PI / 180)} ${center + arcRadius * Math.sin(-60 * Math.PI / 180)} A ${arcRadius} ${arcRadius} 0 0 1 ${center + arcRadius * Math.cos(60 * Math.PI / 180)} ${center + arcRadius * Math.sin(60 * Math.PI / 180)}')`,
                        }}
                    /> */}
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
                            <div className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#1e1b4b] font-bold text-lg flex-shrink-0">
                                {item.id}
                            </div>

                            {/* The Description Text */}
                            <p className="text-[#4338ca] font-medium text-lg leading-snug max-w-md">
                                {item.text}
                            </p>
                        </motion.div>
                    );
                })}

                {/* 4. LOGO (Top Right) */}
                {/* <div className="absolute top-0 right-0 text-right">
                    <h1 className="text-4xl font-black tracking-tighter text-[#1e1b4b]">
                        JEBI<span className="text-orange-500">TECH</span>
                    </h1>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
                        Empowering Hospitality Technology
                    </p>
                </div> */}

            </div>
        </section>
    );
};

export default TechnologyTeamSection;