'use client'

import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Live Demo', href: '#demo' },
  ],
  hospitality: [
    { name: 'Hotels', href: '#use-cases' },
    { name: 'Vacation Rentals', href: '#use-cases' },
    { name: 'Serviced Apartments', href: '#use-cases' },
    { name: 'Property Managers', href: '#use-cases' },
  ],
  company: [
    { name: 'Contact Us', href: '#contact' },
    { name: 'Request Demo', href: '#contact' },
    { name: 'White Label', href: '#contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
}

export default function StayGuideFooter() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 relative bg-white rounded-lg p-0.5">
                <Image
                  src="/stayguide-logo.png"
                  alt="StayGuide"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="text-2xl font-bold font-heading">
                <span className="text-stayguide-blue-light">Stay</span>
                <span className="text-stayguide-green">Guide</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-6 max-w-[260px]">
              AI-powered digital guest handbook and concierge platform — built for modern
              hospitality teams who want to delight guests and reduce manual work.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Product</h4>
            <ul className="space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-stayguide-green transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hospitality */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Hospitality</h4>
            <ul className="space-y-2.5">
              {footerLinks.hospitality.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-stayguide-green transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('#') ? (
                    <a href={link.href} className="text-sm text-gray-400 hover:text-stayguide-green transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-stayguide-green transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} StayGuide. All rights reserved.
            </p>
            <div className="flex gap-5 text-xs text-gray-500">
              <Link href="/privacy" className="hover:text-stayguide-green transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-stayguide-green transition-colors">
                Terms of Service
              </Link>
              <a href="#" className="hover:text-stayguide-green transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
