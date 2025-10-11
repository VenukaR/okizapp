import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'ui.aceternity.com','deifkwefumgah.cloudfront.net'],
  },
    output: 'export', // Add this if using static export
  trailingSlash: true, // Add this for better hosting compatibility
  basePath: '', // Add your subdirectory if not deploying to root
};

export default nextConfig;
