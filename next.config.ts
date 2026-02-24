import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    productionBrowserSourceMaps: false,
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com"
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com"
      },
    ]
  }
}


export default nextConfig;
