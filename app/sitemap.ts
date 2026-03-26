import type { MetadataRoute } from "next";

const baseUrl = "https://agce.tg";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["fr", "en", "ee"];

  return locales.map((locale) => ({
    url: locale === "fr" ? baseUrl : `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  }));
}
