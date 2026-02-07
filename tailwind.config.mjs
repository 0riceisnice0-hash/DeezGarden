/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'deep-green': '#1e5631',
        'fresh-green': '#3da349',
        'light-green': '#7cb342',
        'bg-light': '#f8faf7',
        'bg-cream': '#fdfcf8',
        'bg-sage': '#f0f5ee',
        'text-dark': '#1a1a1a',
        'accent-yellow': '#f4c430',
        'warm-white': '#fcfcfa',
      },
    },
  },
  plugins: [],
}
