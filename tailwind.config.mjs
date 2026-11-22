/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--color-primary, #1e40af)',
          hover: 'var(--color-primary-hover, #1d4ed8)',
          accent: 'var(--color-accent, #f59e0b)',
          light: 'var(--color-primary-light, rgba(30, 64, 175, 0.08))',
          border: 'var(--color-primary-border, rgba(30, 64, 175, 0.2))',
          dark: '#0c1e28',
          sand: '#fafaf7',
          surface: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      }
    },
  },
  plugins: [typography],
};
