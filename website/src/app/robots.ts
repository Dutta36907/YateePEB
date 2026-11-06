import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/superadmin_2026/"],
    },
    sitemap: "https://yateesteel.com/sitemap.xml",
  };
}
