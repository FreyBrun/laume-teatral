import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (no server runtime).
  output: "export",
  // next/image runtime optimization isn't available on a static host;
  // images are already pre-optimized in /public/img.
  images: { unoptimized: true },
  // Emit /route/index.html so GitHub Pages serves clean URLs.
  trailingSlash: true,
};

export default nextConfig;
