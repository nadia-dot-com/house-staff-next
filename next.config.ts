import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "i.ibb.co" }],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  cacheComponents: true,
};

export default nextConfig;
