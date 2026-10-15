import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages
  output: "export",
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // TypeScript configuration
  typescript: {
    // Don't ignore build errors in production
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
