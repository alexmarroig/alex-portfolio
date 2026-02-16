import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/contact",
  "/game",
  "/project/ai-ops-assistant",
  "/case/cryptoalert",
  "/case/ethos"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `https://alexmarroig.com${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7
  }));
}
