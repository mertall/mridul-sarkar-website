import type { NextConfig } from "next";

// Static export so the site hosts free on Vercel / GitHub Pages on mridul-sarkar.com.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
