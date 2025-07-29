// src/pages/sitemap.ts
import { posts } from './blogIndex'

/**
 * Turn any date-like string into an ISO date (YYYY-MM-DD).
 * Falls back to today if parsing fails.
 */
function toIsoDate(dateStr: string): string {
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) {
    return new Date().toISOString().slice(0, 10)
  }
  return d.toISOString().slice(0, 10)
}

export function renderSitemap(): Response {
  const baseUrl = 'https://cognitrade.1des.com'

  // Top‐level routes
  const urls: Array<{
    loc: string
    lastmod?: string
    changefreq: string
    priority: string
  }> = [
    { loc: `${baseUrl}/`,           changefreq: 'daily',   priority: '1.0' },
    { loc: `${baseUrl}/posts`,      changefreq: 'weekly',  priority: '0.8' },
    // one entry per post
    ...posts.map(post => ({
      loc:      `${baseUrl}/posts/${post.slug}`,
      lastmod:  toIsoDate(post.meta.date),
      changefreq: 'monthly',
      priority:   '0.7',
    }))
  ]

  const urlEntries = urls.map(u => `
    <url>
      <loc>${u.loc}</loc>
      ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}
      <changefreq>${u.changefreq}</changefreq>
      <priority>${u.priority}</priority>
    </url>
  `.trim()).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, must-revalidate'
    }
  })
}
