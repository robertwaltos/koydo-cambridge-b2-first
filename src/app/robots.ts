import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://cambridge-b2-first.koydo.app/sitemap.xml",
    host: "https://cambridge-b2-first.koydo.app",
  };
}
