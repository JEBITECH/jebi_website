"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { JebiTechLogo } from "./CustomIcons";
import MagneticButton from "./MagneticButton";
import Image from "next/image";
import Jebitech1 from "../app/assets/Jebitech1.jpg";

const productLinks = [
  { name: "All Products", href: "/products", description: "Our full technology suite" },
  { name: "StayGuide", href: "/stayguide", description: "AI guest handbook & concierge" },
  { name: "StayFranchise", href: "/stayfranchise", description: "Multi-franchise operations platform" },
  { name: "OwnerHub", href: "/owner-hub", description: "Owner settlements & statements" },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products", children: productLinks },
  // { name: 'Services', href: '/services' },
  // { name: 'Case Studies', href: '/case-studies' },
  // { name: "Guesty", href: "/guesty" },
  { name: "Life at jebitech", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="bg-white shadow-sm fixed top-[40px] left-0 right-0 z-50">
        <nav className="container-custom flex items-center justify-between px-6 py-3 lg:px-8 lg:py-3.5" aria-label="Global">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center  gap-2">
              <Image src={Jebitech1} alt="JebiTech" width={160} height={40} priority className="object-contain" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => {
              // Handle both exact match and with trailing slash
              const isActive =
                pathname === item.href ||
                pathname === `${item.href}/` ||
                (item.children?.some((c) => pathname === c.href || pathname === `${c.href}/`) ?? false);

              if (item.children) {
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 text-sm font-semibold leading-6 transition-colors relative ${
                        isActive ? "text-primary-orange" : "text-gray-900 hover:text-primary-orange"
                      }`}
                    >
                      {item.name}
                      <ChevronDownIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                      {isActive && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-orange rounded-full"></span>}
                    </Link>

                    {/* Dropdown */}
                    <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-2">
                        {item.children.map((child) => {
                          const isChildActive = pathname === child.href || pathname === `${child.href}/`;
                          return (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={`block rounded-lg px-3.5 py-2.5 transition-colors ${
                                isChildActive ? "bg-orange-50" : "hover:bg-gray-50"
                              }`}
                            >
                              <div className={`text-sm font-semibold ${isChildActive ? "text-primary-orange" : "text-gray-900"}`}>
                                {child.name}
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">{child.description}</div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-semibold leading-6 transition-colors relative ${isActive ? "text-primary-orange" : "text-gray-900 hover:text-primary-orange"}`}
                >
                  {item.name}
                  {isActive && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-orange rounded-full"></span>}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <MagneticButton href="/contact" className="btn-primary">
              Get Started
            </MagneticButton>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? "" : "hidden"}`}>
        <div className="fixed inset-0 z-50 bg-gray-900/50" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <JebiTechLogo size={24} />
              <span className="text-xl font-heading font-bold">
                <span className="text-primary-purple">JEBI</span>
                <span className="text-primary-orange">TECH</span>
              </span>
            </Link>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => {
                  // Handle both exact match and with trailing slash
                  const isActive = pathname === item.href || pathname === `${item.href}/`;
                  return (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors ${
                          isActive ? "text-primary-orange bg-orange-50" : "text-gray-900 hover:bg-gray-50"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <div className="ml-3 mt-1 space-y-1 border-l border-gray-100 pl-3">
                          {item.children.map((child) => {
                            const isChildActive = pathname === child.href || pathname === `${child.href}/`;
                            return (
                              <Link
                                key={child.name}
                                href={child.href}
                                className={`block rounded-lg px-3 py-2 text-sm font-medium leading-6 transition-colors ${
                                  isChildActive ? "text-primary-orange bg-orange-50" : "text-gray-600 hover:bg-gray-50"
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {child.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="py-6">
                <Link href="/contact" className="btn-primary w-full text-center block" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
