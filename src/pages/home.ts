// src/pages/home.ts
import { renderHead }   from '../components/head'
import { renderFooter } from '../components/footer'
import { renderNavbar } from '../components/navbar'
import { posts }        from './blogIndex'

export function renderHomePage(): Response {
  // 1) Pick off the most recent post…
  const [latest, ...rest] = posts
  // 2) …then the next three
  const nextThree = rest.slice(0, 3)

  // Helper to render categories badges
  const renderCategories = (categories: string[]) =>
    categories
      .map(
        (cat) =>
          `<span class="inline-block text-xs font-semibold uppercase text-vibrant-cyan bg-vibrant-cyan bg-opacity-10 px-2 py-0.5 rounded-full m-1">${cat}</span>`
      )
      .join('')

  // Hero markup for the very latest post
  const heroHtml = `
    <section class="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <figure class="overflow-hidden rounded-2xl shadow-2xl">
        <img
          src="${latest.meta.image}"
          alt="${latest.meta.title}"
          class="w-full h-auto transition-transform duration-300 hover:scale-105"
        />
      </figure>
      <div>
        <h1 class="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
          ${latest.meta.title}
        </h1>
        <div class="flex flex-wrap mb-4" aria-label="Categories">
          ${renderCategories(latest.meta.categories)}
        </div>
        <p class="text-lg text-gray-300 mb-8 leading-relaxed">
          ${latest.meta.summary}
        </p>
        <a
          href="/posts/${latest.slug}"
          class="inline-block bg-vibrant-cyan text-deep-indigo font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Read the full story
        </a>
      </div>
    </section>
  `

  // Grid of the next three posts
  const gridHtml = nextThree
    .map((post) => {
      const cats = renderCategories(post.meta.categories)
      return `
        <div class="bg-gray-900 bg-opacity-50 p-6 rounded-2xl border border-gray-700 transition-all duration-300 hover:border-vibrant-cyan hover:shadow-lg hover:-translate-y-1">
          <a href="/posts/${post.slug}" class="block overflow-hidden rounded-xl mb-4">
            <img src="${post.meta.image}" alt="${post.meta.title}" class="w-full h-auto transform transition-transform duration-300 group-hover:scale-105" />
          </a>
          <h3 class="text-2xl font-bold mb-4 text-white">
            <a href="/posts/${post.slug}" class="block no-underline">
              ${post.meta.title}
            </a>
          </h3>
          <div class="flex flex-wrap gap-2 mb-4" aria-label="Categories">
            ${cats}
          </div>
          <p class="text-gray-400 mb-6 leading-relaxed">${post.meta.summary}</p>
          <a href="/posts/${post.slug}" class="inline-flex items-center font-semibold text-vibrant-cyan hover:text-cyan-300 focus:outline-none focus:ring-vibrant-cyan focus:ring-offset-2">
            Read more
            <span class="material-icons ml-1 text-base transition-transform duration-300 hover:translate-x-1">arrow_forward</span>
          </a>
        </div>
      `
    })
    .join('')


  const html = `
    <!DOCTYPE html>
    <html lang="en">
      ${renderHead(
        'Cognitrade – 1DES Blog',
        'Explore the intersection of machine learning and crypto trading with 1DES. Insights, strategies, and real-world experiments.',
        'https://cognitrade.1des.com/',
        'https://cognitrade.1des.com/images/logo.png',
      )}
      <body class="text-white">
        <div class="container mx-auto px-6 py-8">
          ${renderNavbar()}

          ${heroHtml}

          <section class="mb-8">
            <h2 class="text-4xl font-bold mb-6 text-center">Latest Posts</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              ${gridHtml}
            </div>

            <!-- Mobile-only "Read all posts" link -->
            <div class="mt-6 text-center sm:hidden">
              <a
                href="/posts"
                class="inline-flex items-center font-semibold text-vibrant-cyan hover:text-cyan-300 focus:outline-none focus:ring-vibrant-cyan focus:ring-offset-2"
              >
                Read all posts
                <span class="material-icons ml-1 transition-transform duration-300 hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </div>
          </section>

          <section class="bg-gradient-to-r from-deep-indigo to-vibrant-cyan rounded-2xl p-12 text-center mb-24">
            <h3 class="text-4xl font-extrabold text-white mb-6">Dive into Cognitrade 🚀</h3>
            <p class="max-w-3xl mx-auto text-gray-200 text-lg leading-relaxed mb-4">
              We’re all about fusing cutting-edge machine learning with real-world crypto trading. From training your first predictive model and building robust backtests, to automating live trading bots—Cognitrade is your hands-on playground.
            </p>
            <p class="max-w-3xl mx-auto text-gray-200 text-lg leading-relaxed">
              Pull up a terminal, fire up your favorite IDE, and join us as we explore feature engineering, strategy optimization, and production-ready pipelines. Ready to level up your algorithms and ride the next market wave? 🌊🔍
            </p>
          </section>

          ${renderFooter()}
        </div>
      </body>
    </html>
  `
  return new Response(html, { headers: { 'Content-Type': 'text/html' } })
}
