/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove output: 'export' for Vercel deployment
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig
