/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'

export default {
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
    './blog/**/*.{ts,tsx,js,jsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-indigo': '#221869',
        'vibrant-cyan': '#00FFD1',
        'dark-navy': '#0A0F1F',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              backgroundColor: theme('colors.gray.100'),
              color: theme('colors.gray.900'),
              padding: '0.2em 0.35em',
              borderRadius: '0.35rem',
              fontWeight: '600',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
        invert: {
          css: {
            code: {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.vibrant-cyan'),
              padding: '0.2em 0.35em',
              borderRadius: '0.35rem',
              fontWeight: '600',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      }),
    },
  },
  plugins: [typography],
}
