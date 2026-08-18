import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found | JebiTech',
  description: 'The page you are looking for does not exist. Navigate back to JebiTech homepage, products, or contact us for assistance.',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-24">
      <h1 className="text-6xl font-bold text-primary-purple mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Page Not Found</h2>
      <p className="text-gray-600 text-center max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <nav className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="px-6 py-3 bg-primary-purple text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/products"
          className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-primary-purple hover:text-primary-purple transition-colors"
        >
          Products
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-primary-purple hover:text-primary-purple transition-colors"
        >
          Contact
        </Link>
      </nav>
    </div>
  )
}
