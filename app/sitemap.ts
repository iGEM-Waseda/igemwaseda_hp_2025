import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://igem-waseda.netlify.app/';

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/projects`, lastModified: new Date() },
    { url: `${baseUrl}/team`, lastModified: new Date() },
    { url: `${baseUrl}/members`, lastModified: new Date() },
    { url: `${baseUrl}/recruitment`, lastModified: new Date() },
    { url: `${baseUrl}/donation`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/en`, lastModified: new Date() },
    { url: `${baseUrl}/en/about`, lastModified: new Date() },
    { url: `${baseUrl}/en/projects`, lastModified: new Date() },
    { url: `${baseUrl}/en/team`, lastModified: new Date() },
    { url: `${baseUrl}/en/members`, lastModified: new Date() },
    { url: `${baseUrl}/en/recruitment`, lastModified: new Date() },
    { url: `${baseUrl}/en/donation`, lastModified: new Date() },
    { url: `${baseUrl}/en/contact`, lastModified: new Date() }
  ];
}