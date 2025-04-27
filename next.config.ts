import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'personal-site.s3.ap-southeast-2.amazonaws.com'
      }
    ]
  }
}

export default nextConfig
