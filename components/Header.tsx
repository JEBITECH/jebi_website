'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { JebiTechLogo } from './CustomIcons'
import MagneticButton from './MagneticButton'
import Image from "next/image";
import Jebitech1 from '../app/assets/Jebitech1.jpg'


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide header when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false);
      }

      // Show header when scrolling up
      if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // return (
  //   <header className="bg-white shadow-sm sticky top-0 z-50">
  //     {/* <nav className="container-custom flex items-center justify-between p-6 lg:px-8" aria-label="Global">
  //       <div className="flex lg:flex-1">
  //         <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
  //           <JebiTechLogo size={32} />
  //           <span className="text-2xl font-heading font-bold">
  //             <span className="text-primary-purple">JEBI</span>
  //             <span className="text-primary-orange">TECH</span>
  //           </span>
  //         </Link>
  //       </div>
  //       <div className="flex lg:hidden">
  //         <button
  //           type="button"
  //           className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
  //           onClick={() => setMobileMenuOpen(true)}
  //         >
  //           <Bars3Icon className="h-6 w-6" aria-hidden="true" />
  //         </button>
  //       </div>
  //       <div className="hidden lg:flex lg:gap-x-12">
  //         {navigation.map((item) => (
  //           <Link
  //             key={item.name}
  //             href={item.href}
  //             className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-orange transition-colors"
  //           >
  //             {item.name}
  //           </Link>
  //         ))}
  //       </div>
  //       <div className="hidden lg:flex lg:flex-1 lg:justify-end">
  //         <MagneticButton href="/contact" className="btn-primary">
  //           Get Started
  //         </MagneticButton>
  //       </div>
  //     </nav> */}


  //     {/* Mobile menu */}
  //     {mobileMenuOpen && (
  //       <div className="lg:hidden">
  //         <div className="fixed inset-0 z-50" />
  //         <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
  //           <div className="flex items-center justify-between">
  //             <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
  //               <JebiTechLogo size={24} />
  //               <span className="text-xl font-heading font-bold">
  //                 <span className="text-primary-purple">JEBI</span>
  //                 <span className="text-primary-orange">TECH</span>
  //               </span>
  //             </Link>
  //             <button
  //               type="button"
  //               className="-m-2.5 rounded-md p-2.5 text-gray-700"
  //               onClick={() => setMobileMenuOpen(false)}
  //             >
  //               <XMarkIcon className="h-6 w-6" aria-hidden="true" />
  //             </button>
  //           </div>
  //           <div className="mt-6 flow-root">
  //             <div className="-my-6 divide-y divide-gray-500/10">
  //               <div className="space-y-2 py-6">
  //                 {navigation.map((item) => (
  //                   <Link
  //                     key={item.name}
  //                     href={item.href}
  //                     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
  //                     onClick={() => setMobileMenuOpen(false)}
  //                   >
  //                     {item.name}
  //                   </Link>
  //                 ))}
  //               </div>
  //               <div className="py-6">
  //                 <Link
  //                   href="/contact"
  //                   className="btn-primary w-full text-center block"
  //                   onClick={() => setMobileMenuOpen(false)}
  //                 >
  //                   Get Started
  //                 </Link>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     )}
  //   </header>
  // )
  return (
    <>
      {/* Hover Trigger Area (Top 12px) */}
      <div
        className="fixed top-0 left-0 right-0 h-3 z-50"
        onMouseEnter={() => setShowHeader(true)}
      />

      <header
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => {
          setHovering(false);
          setShowHeader(false);
        }}
        className={`
          bg-white shadow-sm
          fixed top-0 left-0 right-0 z-50
          transition-transform duration-300 ease-in-out
          ${showHeader || hovering ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <nav
          className="container-custom flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center  gap-2">
              <Image
                src={Jebitech1} // update path
                alt="JebiTech"
                width={160}
                height={40}
                priority
                className="object-contain"
              />
            </Link>
          </div>

          {/* <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <JebiTechLogo size={32} />
              <span className="text-2xl font-heading font-bold">
                <span className="text-primary-purple">JEBI</span>
                <span className="text-primary-orange">TECH</span>
              </span>
            </Link>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-orange transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <MagneticButton href="/contact" className="btn-primary">
              Get Started
            </MagneticButton>
          </div>
        </nav>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                  <JebiTechLogo size={24} />
                  <span className="text-xl font-heading font-bold">
                    <span className="text-primary-purple">JEBI</span>
                    <span className="text-primary-orange">TECH</span>
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/contact"
                      className="btn-primary w-full text-center block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}