import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		unoptimized: true,
	},
	sassOptions: {
		silenceDeprecations: ['color-functions', 'global-builtin'],
	},
	turbopack: {
		root: __dirname,
	},
};

// export default nextConfig;
module.exports = nextConfig;
