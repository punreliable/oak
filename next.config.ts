import type { NextConfig } from 'next';
const path = require('path');

const nextConfig: NextConfig = {
	images: {
		unoptimized: true,
	},
	sassOptions: {
    	silenceDeprecations: ['color-functions', 'global-builtin'],
  	},
	turbopack: {
		root: path.join(__dirname, '..'),
	},
};

// export default nextConfig;
module.exports = nextConfig;
