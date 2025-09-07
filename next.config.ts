import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable Turbopack for faster builds
  turbopack: {
    // Enable Turbopack features
  },

  // Enable experimental features for better optimization
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
