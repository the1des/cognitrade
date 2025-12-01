export function renderHead(
  title: string,
  seoDescription: string = '',
  seoKeywords: string = '',
  canonicalUrl: string = '',
  imageUrl: string = ''
): string {
  return `
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>${title}</title>
      ${seoDescription ? `<meta name="description" content="${seoDescription}"/><meta property="og:description" content="${seoDescription}" />` : ''}
      ${seoKeywords ? `<meta name="keywords" content="${seoKeywords}">` : ''}
      ${canonicalUrl ? `<link rel="canonical" href="${canonicalUrl}"/><meta property="og:url" content="${canonicalUrl}" />` : ''}
      ${imageUrl ? `<meta property="og:image" content="${imageUrl}" />` : ''}

      <meta property="og:title" content="${title}" />
      <meta property="og:type" content="Article" />

      <link rel="stylesheet" href="/styles.css">
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap" rel="stylesheet"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png">
      <link rel="manifest" href="/images/site.webmanifest">

      <style>
        body {
          font-family: 'Atkinson Hyperlegible', sans-serif;
          background-color: #0A0F1F;
        }
        .text-accent { color: #00FFD1; }
        .bg-main { background-color: #221869; }
        .border-accent { border-color: #00FFD1; }

        /* ✅ Fix for prose readability */
        .prose-invert p {
          margin-top: 1rem;
          margin-bottom: 1rem;
          line-height: 1.8;
        }
        .prose-invert a {
          color: #00FFD1;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .prose-invert a:hover {
          color: #00d1a3;
        }
        .prose-invert h2, .prose-invert h3, .prose-invert h4 {
          margin-top: 1.8rem;
          margin-bottom: 1rem;
          color: #fff;
        }
        .prose-invert ul, .prose-invert ol {
          padding-left: 1.5rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        .prose-invert li {
          margin-top: 0.5rem;
        }
      </style>
    </head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-922Y9XEYTX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-922Y9XEYTX');
    </script>
  `
}
