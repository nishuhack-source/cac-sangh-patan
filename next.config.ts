import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove static export for server-side features
  // output: "export",
  
  // Server external packages for Prisma
  serverExternalPackages: ['@prisma/client', 'prisma'],
  
  // TypeScript configuration
  typescript: {
    // Don't ignore build errors in production
    // ignoreBuildErrors: true,
  },
  
  // Images configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
