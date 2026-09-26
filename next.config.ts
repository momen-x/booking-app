import type { NextConfig } from "next";
import { getApiUrl } from "./utils/api-url";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Add this if you use Cloudinary later
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${getApiUrl()}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
