import type { NextConfig } from 'next';
const path = require('path');

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.join(__dirname, '..'),
  },
};

// export default nextConfig;
module.exports = nextConfig;
