import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { productsData } from "@/data/products";
import { industriesData } from "@/data/industries";
import { projectsData } from "@/data/projects";
import { newsArticles } from "@/data/news";
import { jobOpeningsData } from "@/data/careers";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yateesteel.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/about/company-overview",
    "/about/vision-mission-values",
    "/about/why-choose-us",
    "/about/manufacturing-infrastructure",
    "/about/quality-certifications",
    "/services",
    "/products",
    "/industries",
    "/projects",
    "/projects/completed",
    "/projects/ongoing",
    "/news",
    "/careers",
    "/contact",
    "/get-a-quote",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic services
  const serviceRoutes = servicesData.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dynamic products
  const productRoutes = productsData.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dynamic industries
  const industryRoutes = industriesData.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Dynamic projects
  const projectRoutes = projectsData.map((proj) => ({
    url: `${baseUrl}/projects/${proj.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic news
  const newsRoutes = newsArticles.map((n) => ({
    url: `${baseUrl}/news/${n.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic careers
  const careerRoutes = jobOpeningsData.map((c) => ({
    url: `${baseUrl}/careers/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...productRoutes,
    ...industryRoutes,
    ...projectRoutes,
    ...newsRoutes,
    ...careerRoutes,
  ];
}
