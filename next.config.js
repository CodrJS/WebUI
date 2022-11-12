/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  compiler: {
    // removeConsole: {
    //   exclude: ["error", "warn"],
    // },
  },
  env: {
    ORG_NAME: process.env.ORG_NAME,
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
