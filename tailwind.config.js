/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#E8D48B',
          400: '#D4AF37',
          500: '#C5A55A',
          600: '#B8962E',
          700: '#9A7B1F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
