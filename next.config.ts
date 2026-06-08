import type { NextConfig } from "next";

const isExport = process.env.NEXT_EXPORT === "1";

const nextConfig: NextConfig = isExport
  ? {
      // Static export so the site can be hosted anywhere (Netlify / GitHub Pages / any static host)
      output: "export",
      images: {
        // Required for static hosting when using next/image
        unoptimized: true,
      },
    }
  : {};

export default nextConfig;
