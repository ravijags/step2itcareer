import type { NextConfig } from "next";
import { LEGACY_SLUGS } from "./src/lib/courses";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  // Course links already shared on WhatsApp keep working after the catalogue rename.
  async redirects() {
    return Object.entries(LEGACY_SLUGS).map(([from, to]) => ({
      source: `/courses/${from}`,
      destination: to ? `/courses/${to}` : "/courses",
      permanent: true,
    }));
  },
};

export default nextConfig;
