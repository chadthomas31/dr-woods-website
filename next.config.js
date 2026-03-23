/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/a-journey-of-passion', destination: '/about', permanent: true },
      { source: '/dance-career', destination: '/about', permanent: true },
      { source: '/computerbooks', destination: '/about', permanent: true },
      { source: '/accolades-and-testimonials', destination: '/about', permanent: true },
      { source: '/health-insurance', destination: '/services', permanent: true },
      { source: '/contact-and-support', destination: '/contact', permanent: true },
      { source: '/data-privacy', destination: '/policies', permanent: true },
    ]
  },
}

module.exports = nextConfig
