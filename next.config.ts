import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/portfolio',
        destination: '/',
      },
    ];
  },
  devIndicators: false,
};

export default nextConfig;
