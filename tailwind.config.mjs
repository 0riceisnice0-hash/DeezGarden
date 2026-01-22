/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'deep-green': '#2f6b3f',
        'fresh-green': '#4caf50',
        'light-green': '#8bc34a',
        'bg-light': '#f7f9f6',
        'text-dark': '#1f1f1f',
        'accent-yellow': '#f4c430',
      },
    },
  },
  plugins: [],
}
