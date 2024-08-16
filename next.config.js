/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
    serverActions: {
      allowedOrigins: ["dashboard.localhost:3000"],
    },
  },
  images: {
    remotePatterns: [
      // { hostname: "public.blob.vercel-storage.com" },
      // { hostname: "res.cloudinary.com" },
      // { hostname: "abs.twimg.com" },
      // { hostname: "pbs.twimg.com" },
      { hostname: "api.zoejeton.com" },
      { hostname: "avatar.vercel.sh" },
      { hostname: "avatars.githubusercontent.com" },
      { hostname: "www.google.com" },
      { hostname: "flag.vercel.app" },
      // { hostname: "illustrations.popsy.co" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Adjust the path as necessary
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups", // This allows the window to close
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp", // Adjust COEP if necessary
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
