import Link from 'next/link'

const navigation = {
  main: [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
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
        <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
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
        <div className="xl:grid xl:grid-cols-3 xl:gap-12">
          <div className="space-y-6 xl:col-span-1">
            <div>
              <span className="text-4xl font-heading font-bold">
                <span className="text-white">JEBI</span>
                <span className="text-primary-orange">TECH</span>
              </span>
            </div>
            <p className="text-base leading-7 text-white/80">
              Built by hospitality technology experts, we solve real operational challenges and empower the future of hospitality.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-primary-orange hover:scale-110 transition-all duration-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-bold leading-6 text-white mb-6">Quick Links</h3>
                <ul role="list" className="space-y-3">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm leading-6 text-white/80 hover:text-primary-orange transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 bg-primary-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-base font-bold leading-6 text-white mb-6">Contact Info</h3>
                <div className="space-y-3 text-sm text-white/80">
                  <p className="flex items-center gap-2">
                    <span className="text-primary-orange">✉</span> sales@jebitech.com
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary-orange">�</span> 
                    <span>12, Sweet Watervilla, Amanora<br />Pune, India</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} JebiTech. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
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