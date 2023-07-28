/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.myfitnesspal.com"],
  },
};

module.exports = nextConfig;
