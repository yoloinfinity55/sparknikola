/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './templates/**/*.tmpl',      // Scans your theme's template files
    '../../posts/**/*.rst',       // Scans your site's posts
    '../../pages/**/*.rst',       // Scans your site's pages
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
}
