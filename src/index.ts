// src/index.ts
import { renderHomePage } from './pages/home'
import { renderPosts }    from './pages/posts'
import { renderPost }     from './pages/post'
import { renderSitemap }  from './pages/sitemap'
import { posts }          from './pages/blogIndex'
import { renderNotFound } from './pages/notFound'

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url)

    // Home page
    if (url.pathname === '/') {
      return renderHomePage()
    }

    // Posts list
    if (url.pathname === '/posts') {
      return renderPosts()
    }

    // Sitemap
    if (url.pathname === '/sitemap.xml') {
      return renderSitemap()
    }

    // Single post
    const match = url.pathname.match(/^\/posts\/(.+)$/)
    if (match) {
      const slug = match[1]
      const post = posts.find(p => p.slug === slug)

      if (!post) {
        return renderNotFound()
      }
      return renderPost(post)
    }

    // Fallback 404
    return renderNotFound()
  }
}
