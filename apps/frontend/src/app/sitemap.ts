import { MetadataRoute } from "next";
import { articles } from "./constants/articles";
import { allServices } from "./constants/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      url: "https://najoomi.in/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://najoomi.in/privacy-policy",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://najoomi.in/terms-of-service",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://najoomi.in/practitioners",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://najoomi.in/practitioners/najoomis",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://najoomi.in/practitioners/therapists",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://najoomi.in/about",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://najoomi.in/contact",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://najoomi.in/services",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://najoomi.in/resources",
      lastModified: new Date().toISOString(),
    },
  ];

  const resourceRoutes = articles.map((article) => ({
    url: `https://najoomi.in/resources/${article.id}`,
    lastModified: article.date ? new Date(article.date).toISOString() : new Date().toISOString(),
  }));

  // const bookingRoutes = practitioners.map((pract) => ({
  //   url: `https://najoomi.in/booking/${pract.id}`,
  //   lastModified: new Date().toISOString(),
  // }));

  // Service detail routes
  const serviceRoutes = allServices.map((service) => ({
    url: `https://najoomi.in/services/${service.href}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes, ...resourceRoutes, ...serviceRoutes];
}
