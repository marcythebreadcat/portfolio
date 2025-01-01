import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/portfolio",
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
  distDir: 'out',
};

export default nextConfig;
