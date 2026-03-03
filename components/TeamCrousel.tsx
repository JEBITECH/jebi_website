"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import teamImage000 from '../app/assets/teamImage000.jpeg'
import teamImage001 from '../app/assets/teamImage001.jpeg'
import teamImage002 from '../app/assets/teamImage002.jpeg'
import teamImage003 from '../app/assets/teamImage003.jpeg'
import teamImage004 from '../app/assets/teamImage004.jpeg'
import teamImage005 from '../app/assets/teamImage005.jpeg'
import teamImage006 from '../app/assets/teamImage006.jpeg'
import teamImage007 from '../app/assets/teamImage007.jpeg'
import teamImage008 from '../app/assets/teamImage 008.jpeg'

// data/teamCarousel.ts
export const teamSlides = [
    {
        id: 1,
        image: teamImage000,
        text: "A dedicated team driving results through focus and collaboration.",
    },
    {
        id: 2,
        image: teamImage001,
        text: "Ideas grow stronger when minds come together.",
    },
    {
        id: 3,
        image: teamImage002,
        text: "Experience meets youthful energy and innovation.",
    },
    {
        id: 4,
        image: teamImage003,
        text: "Balanced teams build sustainable success.",
    },
    {
        id: 5,
        image: teamImage004,
        text: "Innovation through collaboration and expertise.",
    },
    {
        id: 6,
        image: teamImage005,
        text: "Building the future of hospitality technology together.",
    },
    {
        id: 7,
        image: teamImage006,
        text: "Diverse perspectives driving exceptional solutions.",
    },
    {
        id: 8,
        image: teamImage007,
        text: "Passionate professionals committed to excellence.",
    },
    {
        id: 9,
        image: teamImage008,
        text: "United by a shared vision for hospitality innovation.",
    },
];

export function TeamCarousel() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive(prev => {
                const nextIndex = prev + 1;
                console.log('Current:', prev, 'Next:', nextIndex, 'Total:', teamSlides.length);
                return nextIndex >= teamSlides.length ? 0 : nextIndex;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Get the next 4 images for the small tiles, wrapping around if needed
    const getSmallImages = () => {
        const images = [];
        for (let i = 1; i <= 4; i++) {
            const index = (active + i) % teamSlides.length;
            images.push(index);
        }
        return images;
    };

    const smallImageIndices = getSmallImages();

    return (
        <div className="relative w-full max-w-7xl mx-auto">
            {/* Masonry Grid Layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {/* Large featured image - spans 2 rows on desktop */}
                <div className="col-span-2 row-span-2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl group">
                    <div className="relative w-full h-full">
                        <Image
                            key={`main-${active}`}
                            src={teamSlides[active].image}
                            alt={teamSlides[active].text}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <p className="text-lg md:text-xl font-semibold leading-relaxed">
                                {teamSlides[active].text}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Small images - dynamically showing next 4 images */}
                {smallImageIndices.map((imageIndex, i) => (
                    <div key={`small-${i}-${imageIndex}`} className="relative h-[195px] md:h-[242px] rounded-2xl overflow-hidden shadow-lg group">
                        <Image
                            src={teamSlides[imageIndex].image}
                            alt="Team member"
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    </div>
                ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
                {/* Previous Button */}
                <button
                    onClick={() => setActive((prev) => (prev - 1 + teamSlides.length) % teamSlides.length)}
                    className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary-orange hover:text-white transition-all duration-300 group"
                    aria-label="Previous"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Pagination dots */}
                <div className="flex gap-2">
                    {teamSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActive(index)}
                            className={`transition-all duration-300 rounded-full ${
                                index === active
                                    ? "w-8 h-2.5 bg-primary-orange"
                                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={() => setActive((prev) => (prev + 1) % teamSlides.length)}
                    className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary-orange hover:text-white transition-all duration-300 group"
                    aria-label="Next"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
