"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import teamwork from '../app/assets/teamwork.jpg'
import teamwork2 from '../app/assets/teamwork2.jpg'
import teamwork3 from '../app/assets/teamwork3.jpg'
import istockphoto from '../app/assets/istockphoto.jpg'
import photonew from '../app/assets/photonew.jpg'

// data/teamCarousel.ts
export const teamSlides = [
    {
        id: 1,
        image: istockphoto,
        text: "A dedicated team driving results through focus and collaboration.",
    },
    {
        id: 2,
        image: teamwork2,
        text: "Ideas grow stronger when minds come together.",
    },
    {
        id: 3,
        image: teamwork3,
        text: "Experience meets youthful energy and innovation.",
    },
    {
        id: 4,
        image: photonew,
        text: "Balanced teams build sustainable success.",
    },
];


export function TeamCarousel() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % teamSlides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relativew-full h-[420px] md:h-[550px] lg:h-[620px] max-w-5xl xl:max-w-6xl mx-auto overflow-hidden rounded-3xl shadow-2xl">

            {teamSlides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`
            absolute inset-0
            transition-opacity duration-700 ease-in-out
            ${index === active ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
                >
                    {/* IMPORTANT: relative wrapper for Image */}
                    <div className="relative w-full h-full">
                        <Image
                            src={slide.image}
                            alt={slide.text}
                            fill
                            sizes="(max-width: 768px) 100vw, 900px"
                            className="object-cover"
                            priority={index === active}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40" />

                        {/* Caption */}
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                            <p className="text-lg md:text-xl font-semibold max-w-xl">
                                {slide.text}
                            </p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Pagination dots */}
            <div className="absolute bottom-4 right-6 flex gap-2 z-20">
                {teamSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActive(index)}
                        className={`w-2.5 h-2.5 rounded-full transition ${index === active
                            ? "bg-white"
                            : "bg-white/40 hover:bg-white/70"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
