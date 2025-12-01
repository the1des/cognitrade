// src/index.ts
import { renderHomePage } from './pages/home'
import { renderPosts }    from './pages/posts'
import { renderPost }     from './pages/post'
import { renderSitemap }  from './pages/sitemap'
import { posts }          from './pages/blogIndex'
import { renderNotFound } from './pages/notFound'

const addSecurityHeaders = (res: Response): Response => {
  const headers = new Headers(res.headers)

  headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: https://i.ytimg.com",
      "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net",
      "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
    ].join('; ')
  )
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  headers.set('X-Frame-Options', 'DENY')
  headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()')
  headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  headers.set('X-Content-Type-Options', 'nosniff')

  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers,
  })
}

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url)

    // Home page
    if (url.pathname === '/') {
      return addSecurityHeaders(renderHomePage())
    }

    // Posts list
    if (url.pathname === '/posts') {
      return addSecurityHeaders(renderPosts())
    }

    // Sitemap
    if (url.pathname === '/sitemap.xml') {
      return addSecurityHeaders(renderSitemap())
    }

    // Single post
    const match = url.pathname.match(/^\/posts\/(.+)$/)
    if (match) {
      const slug = match[1]
      const post = posts.find(p => p.slug === slug)

      if (!post) {
        return addSecurityHeaders(renderNotFound())
      }
      return addSecurityHeaders(renderPost(post))
    }

    // Fallback 404
    return addSecurityHeaders(renderNotFound())
  }
}
