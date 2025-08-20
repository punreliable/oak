import type { NextConfig } from 'next';
const path = require('path');

const nextConfig: NextConfig = {
  distDir: 'dist',
  output: undefined,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.join(__dirname, '..'),
  },
};

// export default nextConfig;
module.exports = nextConfig;
