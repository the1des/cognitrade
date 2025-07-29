export function renderNavbar(): string {
  return `
  <header class="
    flex flex-wrap justify-between items-center
    mb-16 px-4
  ">
    <div class="flex items-center space-x-3">
      <a href="/" class="flex-shrink-0">
        <img src="/images/logo.png" alt="1DES logo" class="h-8" />
      </a>
      <div>
        <a
          href="/"
          class="
            text-xl sm:text-2xl font-bold tracking-wider
            text-white
          "
        >
          Cognitrade
        </a>
        <!-- hide the tagline on xs -->
        <span class="hidden sm:inline-block text-sm text-gray-400 italic">
          Navigating crypto markets with AI insights
        </span>
      </div>
    </div>

    <a
      href="/posts"
      class="
        mt-2 sm:mt-0 flex items-center font-semibold
        text-vibrant-cyan transition-colors
      "
      aria-label="Read the latest insights"
    >
      <!-- hide the label on xs -->
      <span class="hidden sm:inline">Read the latest insights</span>
      <span class="material-icons ml-1">arrow_forward_ios</span>
    </a>
  </header>
  `
}
