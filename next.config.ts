import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true }, // if you use <Image>
  // Optional: Set basePath if your repo is not a user/organization page
  // basePath: '/your-repo-name',
};

export default nextConfig;
