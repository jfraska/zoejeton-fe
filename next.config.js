/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { hostname: "api.zoejeton.com" },
      { hostname: "avatar.vercel.sh" },
      { hostname: "avatars.githubusercontent.com" },
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "flag.vercel.app" },
      { hostname: "dev.zoejeton.com" },
      { hostname: "api.zoejeton.com" },
    ],
  },
};

module.exports = nextConfig;
