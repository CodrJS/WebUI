/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    removeConsole: {
      exclude: ["error", "warn"],
    },
  },
  env: {
    NEXT_PUBLIC_ORG_NAME: process.env.NEXT_PUBLIC_ORG_NAME, // try this???
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
