/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  images: {
    domains: ["locksmith.unlock-protocol.com","gateway.ipfscdn.io"],
  },
};

module.exports = nextConfig;
