/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = {
	env: {
		NEXT_API_URL: process.env.NEXT_API_URL,
	},
};
