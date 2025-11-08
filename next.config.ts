import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
     return [
      {
        source: '/products/deleted_forever',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/products/deleted_temp',
        destination: '/products',
        permanent: false,
      },
     ]
  },
  async rewrites() {
     return [
      {
        source: '/sejun',
        destination: '/about/me/sejun',
      },
      {
        source: '/items/:slug',
        destination: '/products/:slug',
      },
     ]
  },
};

export default nextConfig;
