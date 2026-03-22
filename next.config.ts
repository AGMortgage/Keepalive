import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://agmbkeep.runasp.net/api/:path*",
      },
    ];
  },
};


export default nextConfig;
