import type { NextConfig } from "next";
import { courseRedirects } from "./src/lib/courses";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  // Course links already shared on WhatsApp keep working after the catalogue rename.
  async redirects() {
    return [
      // Course links already shared on WhatsApp keep working after each catalogue change.
      ...courseRedirects().map(({ from, to }) => ({
        source: `/courses/${from}`,
        destination: to ? `/courses/${to}` : "/courses",
        permanent: true,
      })),
      // Pay After Placement was withdrawn in v4.1 — old links land on the internship hub instead of a 404.
      { source: "/resources/pay-after-placement", destination: "/internship", permanent: false },
      // v4.3: the old "coming soon" resource pages now point at the real Resources hub.
      { source: "/resources/blogs", destination: "/resources/guides", permanent: true },
      { source: "/resources/career", destination: "/resources/roadmaps", permanent: true },
      { source: "/resources/tutorials", destination: "/resources/cheat-sheets", permanent: true },
      { source: "/resources/tech-trends", destination: "/resources", permanent: true },
      { source: "/resources/success-stories", destination: "/#stories", permanent: false },
    ];
  },
};

export default nextConfig;
