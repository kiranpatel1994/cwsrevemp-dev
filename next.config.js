/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  optimizeFonts: false,
  images: {
    domains: ["cms.cwsio.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.cwsio.com",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

module.exports = nextConfig;
