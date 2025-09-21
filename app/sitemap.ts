import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sacred.computer';
  const lastModified = new Date();
  return [
    { url: base, lastModified },
    { url: `${base}/portfolio`, lastModified },
    { url: `${base}/portfolio/projects`, lastModified },
    { url: `${base}/portfolio/tech-stack`, lastModified },
    { url: `${base}/portfolio/contact`, lastModified },
  ];
}
