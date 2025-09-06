module.exports = {
	module: {
		rules: [
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
			// other rules...
		],
	},
	// other configurations...
};
