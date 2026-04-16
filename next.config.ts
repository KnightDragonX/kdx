import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kdx",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
