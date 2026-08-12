import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.y2kexim.com";
  const currentDate = new Date();

  return [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
      images: [`${baseUrl}/img/y2k-logo.jpg`],
    },
    {
      url: `${baseUrl}/dgft-consultants`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/img/y2k-logo.jpg`],
    },
    {
      url: `${baseUrl}/Customs-House-Agent-Services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/img/y2k-logo.jpg`],
    },
    {
      url: `${baseUrl}/Taxation`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/img/y2k-logo.jpg`],
    },
    {
      url: `${baseUrl}/customs-port-codes`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/img/y2k-logo.jpg`],
    },
    {
      url: `${baseUrl}/industrial-subsidies`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/img/y2k-logo.jpg`],
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/img/y2k-logo.jpg`],
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/img/y2k-logo.jpg`],
    },
    {
      url: `${baseUrl}/policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
