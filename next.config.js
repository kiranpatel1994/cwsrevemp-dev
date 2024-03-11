/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  optimizeFonts: false,
  images: {
    domains: ["cms.cwsio.com", "cms-cdn.cwsio.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.cwsio.com",
        port: "",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "cms-cdn.cwsio.com",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

module.exports = nextConfig;
