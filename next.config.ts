import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        pathname: '/static/**',
      },
      {
        protocol: 'https',
        hostname: 'rd4c5wht-8080.asse.devtunnels.ms',
        port: '',
        pathname: '/**',
      },
    ],
  }
};

export default nextConfig;
