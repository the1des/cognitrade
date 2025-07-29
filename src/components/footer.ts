export function renderFooter(): string {
  return `
    <footer class="border-t border-gray-800 pt-8 flex justify-between items-center">
      <a href="https://1des.com/" target="_blank" ><img alt="1DES logo" class="h-8 w-auto" src="/images/logo.png"/></a>
      <div class="flex space-x-4">
        <!-- YouTube -->
        <a class="text-gray-400 hover:text-vibrant-cyan transition-colors"
           href="https://www.youtube.com/@1des" target="_blank" rel="noopener">
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.391.566a2.994 2.994 0 0 0-2.107 2.12A31.62 31.62 0 0 0 0 11.998c0 1.808.201 3.607.502 5.812a2.994 2.994 0 0 0 2.107 2.12C4.495 20.498 12 20.498 12 20.498s7.505 0 9.391-.568a2.994 2.994 0 0 0 2.107-2.12c.301-2.205.502-4.004.502-5.812a31.62 31.62 0 0 0-.502-5.812zM9.75 15.02V8.978L15.5 12l-5.75 3.02z"/>
          </svg>
        </a>

        <!-- Telegram -->
        <a class="text-gray-400 hover:text-vibrant-cyan transition-colors"
           href="https://t.me/The1DES" target="_blank" rel="noopener">
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.999 15.17 9.938 19c.637 0 .913-.275 1.249-.603l2.991-2.86 6.2 4.514c1.137.627 1.948.3 2.256-1.053l3.703-17.413c.419-1.62-.585-2.254-1.693-1.858L1.426 9.735C-.243 10.392-.234 11.336.737 11.65l5.955 1.877 13.767-8.68L9.999 15.17z"/>
          </svg>
        </a>

        <!-- GitHub -->
        <a class="text-gray-400 hover:text-vibrant-cyan transition-colors"
           href="https://github.com/the1des" target="_blank" rel="noopener">
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 0 0 7.863 10.953c.575.106.787-.25.787-.556 0-.274-.01-1-.015-1.962-3.197.695-3.873-1.54-3.873-1.54-.523-1.327-1.276-1.68-1.276-1.68-1.043-.713.08-.698.08-.698 1.153.08 1.76 1.183 1.76 1.183 1.026 1.758 2.693 1.25 3.35.955.104-.743.402-1.25.732-1.538-2.552-.29-5.235-1.276-5.235-5.68 0-1.255.448-2.28 1.183-3.083-.118-.29-.512-1.46.112-3.044 0 0 .965-.31 3.162 1.177a11.1 11.1 0 0 1 2.878-.387c.975.005 1.957.132 2.878.387 2.197-1.487 3.162-1.177 3.162-1.177.624 1.584.23 2.754.112 3.044.735.803 1.183 1.828 1.183 3.083 0 4.415-2.688 5.385-5.252 5.67.41.353.776 1.047.776 2.11 0 1.525-.014 2.752-.014 3.125 0 .306.212.662.792.552A11.502 11.502 0 0 0 23.5 12c0-6.352-5.148-11.5-11.5-11.5z"/>
          </svg>
        </a>

        <!-- Medium -->
        <a
        class="text-gray-400 hover:text-vibrant-cyan transition-colors"
        href="https://medium.com/@1des"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="1DES on Medium"
        title="Follow 1DES on Medium"
        >
        <svg
        class="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795"/>
        </svg>
        </a>

        <!-- Twitter (X) -->
        <a class="text-gray-400 hover:text-vibrant-cyan transition-colors"
           href="https://x.com/the1des" target="_blank" rel="noopener">
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.498 11.24H17.05l-5.462-7.163L5.286 21.75H1.978l7.73-8.842L1.5 2.25h6.355l4.937 6.479 5.452-6.479zm-.578 17.55h1.833L7.155 4.54H5.194l12.472 15.26z"/>
          </svg>
        </a>

      </div>
    </footer>
  `
}
