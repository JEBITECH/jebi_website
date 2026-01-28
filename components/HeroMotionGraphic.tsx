// 'use client'

// import { motion } from 'framer-motion'
// import { useEffect, useState } from 'react'

// export default function HeroMotionGraphic() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2
//       }
//     }
//   }

//   const cardVariants = {
//     hidden: { 
//       opacity: 0, 
//       scale: 0.8,
//       y: 50
//     },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.16, 1, 0.3, 1]
//       }
//     }
//   }

//   const floatingVariants = {
//     animate: {
//       y: [-10, 10, -10],
//       transition: {
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   }

//   const pulseVariants = {
//     animate: {
//       scale: [1, 1.05, 1],
//       transition: {
//         duration: 2,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   }

//   return (
//     <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary-purple via-purple-600 to-primary-purple rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
//         {/* Animated Background Pattern */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-primary-orange/30 rounded-full blur-xl animate-pulse"></div>
//           <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-16 sm:w-24 h-16 sm:h-24 bg-white/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
//           <div className="absolute top-1/2 left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-primary-orange/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '2s' }}></div>
//           <div className="absolute top-1/4 right-1/4 w-8 sm:w-12 h-8 sm:h-12 bg-white/10 rounded-full blur-sm animate-pulse" style={{ animationDelay: '3s' }}></div>
//         </div>

//         {/* Grid pattern overlay */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="w-full h-full" style={{
//             backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
//             backgroundSize: '20px 20px'
//           }}></div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate={isVisible ? "visible" : "hidden"}
//         className="relative z-10 w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto"
//       >
//         {/* Center Hub - JebiTech */}
//         <motion.div
//           variants={pulseVariants}
//           animate="animate"
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
//         >
//           <div className="w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-gray-600 hover:border-primary-orange transition-all duration-300">
//             <div className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 bg-primary-orange rounded-md sm:rounded-lg mb-1 sm:mb-2 flex items-center justify-center">
//               <div className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 bg-white rounded-sm"></div>
//             </div>
//             <div className="text-white font-bold text-xs sm:text-sm lg:text-base">JebiTech</div>
//             <div className="text-gray-300 text-xs sm:text-xs lg:text-sm text-center px-1 sm:px-2">Software, IT & AI solutions</div>
//           </div>
//         </motion.div>

//         {/* Bookings Card - Top */}
//         <motion.div
//           variants={cardVariants}
//           className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 sm:-translate-y-4"
//         >
//           <motion.div
//             variants={floatingVariants}
//             animate="animate"
//             className="w-20 sm:w-28 lg:w-32 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg sm:rounded-xl shadow-lg flex flex-col items-center justify-center text-white hover:shadow-xl transition-all duration-300 cursor-pointer"
//           >
//             <div className="text-lg sm:text-2xl lg:text-3xl mb-0 sm:mb-1">📅</div>
//             <div className="text-xs sm:text-sm lg:text-base font-semibold">Bookings</div>
//           </motion.div>
//         </motion.div>

//         {/* Accounting Card - Left */}
//         <motion.div
//           variants={cardVariants}
//           className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-4"
//         >
//           <motion.div
//             variants={floatingVariants}
//             animate="animate"
//             style={{ animationDelay: '1s' }}
//             className="w-20 sm:w-28 lg:w-32 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-primary-orange to-orange-600 rounded-lg sm:rounded-xl shadow-lg flex flex-col items-center justify-center text-white hover:shadow-xl transition-all duration-300 cursor-pointer"
//           >
//             <div className="text-lg sm:text-2xl lg:text-3xl mb-0 sm:mb-1">💰</div>
//             <div className="text-xs sm:text-sm lg:text-base font-semibold">Accounting</div>
//           </motion.div>
//         </motion.div>

//         {/* Tasks Card - Right */}
//         <motion.div
//           variants={cardVariants}
//           className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-2 sm:translate-x-4"
//         >
//           <motion.div
//             variants={floatingVariants}
//             animate="animate"
//             style={{ animationDelay: '2s' }}
//             className="w-20 sm:w-28 lg:w-32 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-primary-orange to-orange-600 rounded-lg sm:rounded-xl shadow-lg flex flex-col items-center justify-center text-white hover:shadow-xl transition-all duration-300 cursor-pointer"
//           >
//             <div className="text-lg sm:text-2xl lg:text-3xl mb-0 sm:mb-1">✅</div>
//             <div className="text-xs sm:text-sm lg:text-base font-semibold">Tasks</div>
//           </motion.div>
//         </motion.div>

//         {/* AI Inspection Card - Bottom */}
//         <motion.div
//           variants={cardVariants}
//           className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 sm:translate-y-4"
//         >
//           <motion.div
//             variants={floatingVariants}
//             animate="animate"
//             style={{ animationDelay: '3s' }}
//             className="w-20 sm:w-28 lg:w-32 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg sm:rounded-xl shadow-lg flex flex-col items-center justify-center text-white hover:shadow-xl transition-all duration-300 cursor-pointer"
//           >
//             <div className="text-lg sm:text-2xl lg:text-3xl mb-0 sm:mb-1">🔍</div>
//             <div className="text-xs sm:text-sm lg:text-base font-semibold">AI Inspection</div>
//           </motion.div>
//         </motion.div>

//         {/* Connecting Lines */}
//         <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
//           {/* Top line */}
//           <motion.line
//             x1="50%" y1="20%" x2="50%" y2="35%"
//             stroke="rgba(255, 255, 255, 0.4)"
//             strokeWidth="2"
//             strokeDasharray="5,5"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ duration: 2, delay: 1 }}
//           />
//           {/* Left line */}
//           <motion.line
//             x1="20%" y1="50%" x2="35%" y2="50%"
//             stroke="rgba(255, 255, 255, 0.4)"
//             strokeWidth="2"
//             strokeDasharray="5,5"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ duration: 2, delay: 1.5 }}
//           />
//           {/* Right line */}
//           <motion.line
//             x1="65%" y1="50%" x2="80%" y2="50%"
//             stroke="rgba(255, 255, 255, 0.4)"
//             strokeWidth="2"
//             strokeDasharray="5,5"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ duration: 2, delay: 2 }}
//           />
//           {/* Bottom line */}
//           <motion.line
//             x1="50%" y1="65%" x2="50%" y2="80%"
//             stroke="rgba(255, 255, 255, 0.4)"
//             strokeWidth="2"
//             strokeDasharray="5,5"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ duration: 2, delay: 2.5 }}
//           />
//         </svg>

//         {/* Floating Particles */}
//         {[...Array(8)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/40 rounded-full"
//             style={{
//               top: `${15 + Math.random() * 70}%`,
//               left: `${15 + Math.random() * 70}%`,
//             }}
//             animate={{
//               y: [-20, 20, -20],
//               opacity: [0.2, 0.8, 0.2],
//               scale: [0.5, 1, 0.5],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//               ease: "easeInOut"
//             }}
//           />
//         ))}
//       </motion.div>
//     </div>
//   )
// }

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   Calendar,
//   DollarSign,
//   CheckSquare,
//   Maximize,
//   Square
// } from 'lucide-react';

// // --- Types ---
// interface ServiceCard {
//   id: string;
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   color: string;
//   position: { x: number; y: number };
// }

// // --- Data ---
// const services: ServiceCard[] = [
//   {
//     id: 'bookings',
//     title: 'Bookings',
//     description: 'Manage appointments and schedules seamlessly.',
//     icon: <Calendar size={32} />,
//     color: 'bg-purple-600',
//     position: { x: 0, y: -160 }
//   },
//   {
//     id: 'accounting',
//     title: 'Accounting',
//     description: 'Track expenses and financial growth.',
//     icon: <DollarSign size={32} />,
//     color: 'bg-orange-600',
//     position: { x: -220, y: 0 }
//   },
//   {
//     id: 'tasks',
//     title: 'Tasks',
//     description: 'Organize daily workflows and productivity.',
//     icon: <CheckSquare size={32} />,
//     color: 'bg-orange-500',
//     position: { x: 220, y: 0 }
//   },
//   {
//     id: 'ai-inspection',
//     title: 'AI Inspection',
//     description: 'Automated quality control and analysis.',
//     icon: <Maximize size={32} />,
//     color: 'bg-purple-500',
//     position: { x: 0, y: 160 }
//   },
// ];

// const HeroMotionGraphic = () => {
//   return (
//     <div className="relative flex items-center justify-center min-h-screen bg-[#1a0b2e] overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full" />

//       {/* Central Hub Card */}
//       <motion.div
//         animate={{ y: [0, -10, 0] }}
//         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         className="z-20 w-48 h-56 bg-zinc-900/90 border border-zinc-700 rounded-3xl flex flex-col items-center justify-center p-6 shadow-2xl backdrop-blur-md"
//       >
//         <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
//           <Square className="text-white fill-current" size={32} />
//         </div>
//         <h2 className="text-white text-2xl font-bold">Jebitech</h2>
//         <p className="text-zinc-400 text-[10px] uppercase tracking-widest mt-2 text-center">
//           Software, IT & AI Solutions
//         </p>
//       </motion.div>

//       {/* Orbiting Cards */}
//       {services.map((service, index) => (
//         <OrbitCard key={service.id} service={service} index={index} />
//       ))}

//       {/* Connecting Lines (SVG) */}
//       <svg className="absolute w-full h-full pointer-events-none opacity-20">
//         <line x1="50%" y1="50%" x2="50%" y2="calc(50% - 160px)" stroke="orange" strokeDasharray="5,5" />
//         <line x1="50%" y1="50%" x2="50%" y2="calc(50% + 160px)" stroke="orange" strokeDasharray="5,5" />
//         <line x1="50%" y1="50%" x2="calc(50% - 220px)" y2="50%" stroke="orange" strokeDasharray="5,5" />
//         <line x1="50%" y1="50%" x2="calc(50% + 220px)" y2="50%" stroke="orange" strokeDasharray="5,5" />
//       </svg>
//     </div>
//   );
// };

// const OrbitCard = ({ service, index }: { service: ServiceCard, index: number }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       initial={{ x: service.position.x, y: service.position.y }}
//       animate={{
//         y: [service.position.y, service.position.y - 15, service.position.y],
//       }}
//       transition={{
//         duration: 3,
//         delay: index * 0.5,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }}
//       whileHover={{ scale: 1.1, zIndex: 50 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className={`absolute w-36 h-36 ${service.color} rounded-2xl flex flex-col items-center justify-center cursor-pointer shadow-lg p-4 text-white text-center`}
//     >
//       <div className="mb-2 opacity-90">{service.icon}</div>
//       <span className="font-semibold text-sm">{service.title}</span>

//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="overflow-hidden"
//           >
//             <p className="text-[10px] mt-2 leading-tight text-white/90">
//               {service.description}
//             </p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default HeroMotionGraphic;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  DollarSign,
  CheckSquare,
  Maximize,
  Square,
  Code,
  Brackets,
  Layers,
  User,
  Users,
  Package,
  Home,
  Box,
  MoreHorizontal,
  Grid,
  Wrench,
  Puzzle,
  ToolCase,
  PlusSquare
} from 'lucide-react';

// --- Types ---
interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  position: { x: number; y: number };
}

// --- Data ---
const services: ServiceCard[] = [
  {
    id: 'Custom development',
    title: 'Custom development',
    description: 'Analysis / Develop / implement / Support.',
    icon: <Layers size={32} />,
    color: 'bg-purple-600',
    position: { x: 0, y: -180 }
  },
  {
    id: 'team',
    title: 'Dedicated team',
    description: 'Develop / implement / Support.',
    icon: <Users size={32} />,
    color: 'bg-orange-600',
    position: { x: -180, y: 0 }
  },
  {
    id: 'products',
    title: 'In house product',
    description: 'Develop / Implement / Support.',
    icon: <Box size={32} />,
    color: 'bg-orange-500',
    position: { x: 180, y: 0 }
  },
  {
    id: 'Other services',
    title: 'Other services',
    description: 'Data Alysis / System user service for any department.',
    icon: <PlusSquare size={32} />,
    color: 'bg-purple-500',
    position: { x: 0, y: 180 }
  },
];

const HeroMotionGraphic = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full" />

      {/* Central Hub Card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="z-20 w-48 h-56 bg-zinc-900/90 border border-zinc-700 rounded-3xl flex flex-col items-center justify-center p-6 shadow-2xl backdrop-blur-md"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
          <Square className="text-white fill-current" size={32} />
        </div>
        <h2 className="text-white text-2xl font-bold">Jebitech</h2>
        <p className="text-zinc-400 text-[10px] uppercase tracking-widest mt-2 text-center">
          Software, IT & AI Solutions
        </p>
      </motion.div>

      {/* Orbiting Cards */}
      {services.map((service, index) => (
        <OrbitCard key={service.id} service={service} index={index} />
      ))}

      {/* Connecting Lines (SVG) */}
      <svg className="absolute w-full h-full pointer-events-none opacity-20">
        <line x1="50%" y1="50%" x2="50%" y2="calc(50% - 160px)" stroke="orange" strokeDasharray="5,5" />
        <line x1="50%" y1="50%" x2="50%" y2="calc(50% + 160px)" stroke="orange" strokeDasharray="5,5" />
        <line x1="50%" y1="50%" x2="calc(50% - 220px)" y2="50%" stroke="orange" strokeDasharray="5,5" />
        <line x1="50%" y1="50%" x2="calc(50% + 220px)" y2="50%" stroke="orange" strokeDasharray="5,5" />
      </svg>
    </div>
  );
};

const OrbitCard = ({ service, index }: { service: ServiceCard, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ x: service.position.x, y: service.position.y }}
      animate={{
        y: [service.position.y, service.position.y - 15, service.position.y],
      }}
      transition={{
        duration: 3,
        delay: index * 0.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.1, zIndex: 50 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`absolute w-36 h-36 ${service.color} rounded-2xl flex flex-col items-center justify-center cursor-pointer shadow-lg p-4 text-white text-center`}
    >
      <div className="mb-2 opacity-90">{service.icon}</div>
      <span className="font-semibold text-sm">{service.title}</span>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <p className="text-[10px] mt-2 leading-tight text-white/90">
              {service.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HeroMotionGraphic;