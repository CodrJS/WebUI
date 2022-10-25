/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // removeConsole: {
    //   exclude: ["error", "warn"],
    // },
  },
  env: {
    ORG_NAME: process.env.ORG_NAME,
  },
};

module.exports = nextConfig;
