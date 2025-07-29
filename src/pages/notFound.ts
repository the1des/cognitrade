// src/pages/notFound.ts
import { renderHead }   from '../components/head'
import { renderNavbar } from '../components/navbar'
import { renderFooter } from '../components/footer'

export function renderNotFound(): Response {
  const imageUrl = '/images/404.png'   // <-- put your artwork here

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      ${renderHead(
        '404 – Page Not Found',
        'Sorry, we couldn’t find that page on Cognitrade – 1DES Blog.',
        '404, not found, Cognitrade, 1DES',
        'https://cognitrade.1des.com/404',
        'https://cognitrade.1des.com/images/404.png'
      )}
      <body class="text-white bg-deep-indigo">
        <div class="container mx-auto px-6 py-16 flex flex-col items-center justify-center min-h-screen">

          ${renderNavbar()}

          <figure class="mb-8">
            <img
              src="${imageUrl}"
              alt="404 – Page Not Found"
              class="w-full max-w-sm h-auto rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
            />
          </figure>

          <h1 class="text-6xl font-extrabold mb-4">404</h1>
          <p class="text-xl text-gray-300 mb-6">Oops! The page you’re looking for doesn’t exist.</p>
          <a
            href="/"
            class="inline-block bg-vibrant-cyan text-deep-indigo font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Go back home
          </a>

          ${renderFooter()}
        </div>
      </body>
    </html>
  `
  return new Response(html, {
    status: 404,
    headers: { 'Content-Type': 'text/html' }
  })
}
