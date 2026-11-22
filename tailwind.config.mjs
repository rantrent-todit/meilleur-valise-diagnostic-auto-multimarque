/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--color-primary, #ea580c)',
          hover: 'var(--color-primary-hover, #c2410c)',
          accent: 'var(--color-accent, #ea580c)',
          dark: '#0c1e28',
          sand: '#fafaf7',
          surface: '#ffffff',
          border: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      }
    },
  },
  plugins: [typography],
};
