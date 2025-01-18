import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  distDir: 'dist',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

// export default nextConfig;
module.exports = nextConfig;
