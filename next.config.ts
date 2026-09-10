import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Explicitly disable source maps in production to prevent source code reconstruction
  productionBrowserSourceMaps: false,
};

export default nextConfig;
