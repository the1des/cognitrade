import { renderHead } from '../components/head'
import { renderFooter } from '../components/footer'
import { renderNavbar } from '../components/navbar'
import { posts } from './blogIndex'
import { marked } from 'marked'

export function renderPost(post): Response {
  // console.log(post)
  const htmlContent = marked.parse(post.md)

  const categoriesHtml = post.meta.categories
    .map((cat: string) => `
      <span class="text-vibrant-cyan text-sm font-bold tracking-widest bg-vibrant-cyan bg-opacity-10 py-1 px-3 rounded-full mr-2 mt-2">
        ${cat.toUpperCase()}
      </span>
    `)
    .join('')

  const html = `
  <!DOCTYPE html>
  <html lang="en">
    ${renderHead(
      post.meta.seo_title,
      post.meta.seo_description,
      post.meta.seo_keywords,
      'https://cognitrade.1des.com/posts/' + post.slug,
      'https://cognitrade.1des.com' + post.meta.image
    )}
    <body class="text-white bg-black">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        ${renderNavbar()}

        <div class="flex justify-center py-5">
          <div class="layout-content-container flex flex-col w-full max-w-screen-lg">
            <div class="@container">
              <div class="px-0 sm:px-2 mb-4">
                <div
                  class="w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[480px] bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-md sm:rounded-xl"
                  style='background-image: url("${post.meta.image}");'
                ></div>
              </div>
            </div>

            <h1 class="text-white text-3xl sm:text-4xl font-bold leading-tight px-2 sm:px-4 pb-3 pt-6">
              ${post.meta.title}
            </h1>

            <div class="flex items-center gap-4 bg-[#151320] px-2 sm:px-4 py-3 rounded-md mb-6">
              <div
                class="bg-center bg-no-repeat bg-cover rounded-full w-14 h-14 shrink-0"
                style='background-image: url("/images/authors/${post.meta.author}.jpg");'
              ></div>
              <div class="flex flex-col justify-center overflow-hidden">
                <p class="text-white text-base font-medium leading-snug truncate">
                  ${post.meta.author}
                </p>
                <p class="text-[#a099c2] text-sm font-normal leading-snug truncate">
                  Published on ${post.meta.date}
                </p>
              </div>
            </div>

            <div class="prose prose-invert max-w-none px-2 sm:px-4">
              ${htmlContent}
              ${categoriesHtml}
            </div>
          </div>
        </div>

        ${renderFooter()}
      </div>
    </body>
  </html>

  `
  return new Response(html, { headers: { 'Content-Type': 'text/html' } })
}
