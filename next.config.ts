import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/portfolio",
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
  // Remove distDir as it's handled automatically with output: 'export'
};

export default nextConfig;
