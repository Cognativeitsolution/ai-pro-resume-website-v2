import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backend.aiproresume.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
