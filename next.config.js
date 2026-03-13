/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Commented out - API routes need server-side rendering
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig