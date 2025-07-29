import { renderHead } from '../components/head'
import { renderFooter } from '../components/footer'
import { renderNavbar } from '../components/navbar'
import { posts } from './blogIndex'

export function renderPosts(): Response {
  const listHtml = posts
    .map((post) => {
      const categoriesHtml = post.meta.categories
        .map(
          (cat: string) => `
          <span class="inline-block text-xs font-semibold uppercase text-vibrant-cyan bg-vibrant-cyan bg-opacity-10 px-2 py-0.5 rounded-full m-1">
            ${cat}
          </span>
          `
        )
        .join('')

      return `
      <article class="break-inside-avoid mb-6">
        <div class="group relative bg-gray-900 bg-opacity-50 p-6 rounded-2xl border border-gray-700 transition-all duration-300 hover:border-vibrant-cyan hover:shadow-lg hover:-translate-y-1">

          <header class="mb-4">
            <h2 class="text-3xl font-extrabold leading-tight text-white">
              <a href="/posts/${post.slug}" class="block no-underline">
                ${post.meta.title}
              </a>
            </h2>
          </header>

          <figure class="overflow-hidden rounded-xl mb-4">
            <a href="/posts/${post.slug}" class="block">
              <img
                src="${post.meta.image}"
                alt="${post.meta.title}"
                class="w-full h-auto transform transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </figure>

          <div class="flex flex-wrap gap-2 mb-4" aria-label="Categories">
            ${categoriesHtml}
          </div>

          <p class="text-gray-400 mb-6 leading-relaxed">
            ${post.meta.summary}
          </p>

          <a
            href="/posts/${post.slug}"
            class="inline-flex items-center font-semibold text-vibrant-cyan hover:text-cyan-300 focus:outline-none focus:ring-vibrant-cyan focus:ring-offset-2"
          >
            Read more
            <span class="material-icons ml-1 text-base transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
        </div>
      </article>
      `
    })
    .join('')


  const html = `
    <!DOCTYPE html>
    <html lang="en">
      ${renderHead(
        'Cognitrade - 1DES Blog',
        'Explore the intersection of machine learning and crypto trading with 1DES. Insights, strategies, and real-world experiments.',
        'https://1des.com/blog'
      )}
      <body class="text-white">
        <div class="container mx-auto px-6 py-8">
          ${renderNavbar()}

          <section class="mb-24">
            <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              ${listHtml}
            </div>
          </section>

          ${renderFooter()}
        </div>
      </body>
    </html>
  `
  return new Response(html, { headers: { 'Content-Type': 'text/html' } })
}
