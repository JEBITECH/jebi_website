import Link from 'next/link'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    // { name: 'Services', href: '/services' },
    // { name: 'Case Studies', href: '/case-studies' },
    { name: 'Guesty', href: '/guesty' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/jebi-softech-services/',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
          <path
            fillRule="evenodd"
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-primary-purple overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl"></div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1 space-y-5">
            <div>
              <span className="text-3xl font-heading font-bold">
                <span className="text-white">JEBI</span>
                <span className="text-primary-orange">TECH</span>
              </span>
            </div>
            <p className="text-sm leading-6 text-white/70 max-w-[280px]">
              Built by hospitality technology experts, we solve real operational challenges and empower the future of hospitality.
            </p>
            <div className="flex space-x-3">
              {navigation.social.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="w-9 h-9 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-primary-orange hover:scale-110 transition-all duration-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold leading-6 text-white mb-5 uppercase tracking-wider">Quick Links</h3>
            <ul role="list" className="space-y-2.5">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-sm leading-6 text-white/70 hover:text-primary-orange transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold leading-6 text-white mb-5 uppercase tracking-wider">Services</h3>
            <ul role="list" className="space-y-2.5">
              <li><Link href="/guesty" className="text-sm text-white/70 hover:text-primary-orange transition-colors">Guesty Integration</Link></li>
              <li><Link href="/products" className="text-sm text-white/70 hover:text-primary-orange transition-colors">Products</Link></li>
              <li><Link href="/contact" className="text-sm text-white/70 hover:text-primary-orange transition-colors">Custom Development</Link></li>
              <li><Link href="/contact" className="text-sm text-white/70 hover:text-primary-orange transition-colors">Dedicated Teams</Link></li>
              <li><Link href="/contact" className="text-sm text-white/70 hover:text-primary-orange transition-colors">Implementation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold leading-6 text-white mb-5 uppercase tracking-wider">Contact Info</h3>
            <div className="space-y-3 text-sm text-white/70">
              <p className="flex items-center gap-2.5">
                <span className="text-primary-orange text-xs">✉</span> sales@jebitech.com
              </p>
              <p className="flex items-start gap-2.5">
                <span className="text-primary-orange text-xs mt-0.5">📍</span> 
                <span>12, Sweet Watervilla, Amanora<br />Pune, India</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-7 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/50">
              &copy; {new Date().getFullYear()} JebiTech Solutions Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-5 text-xs text-white/50">
              <Link href="/privacy" className="hover:text-primary-orange transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-orange transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}