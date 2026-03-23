/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50:  '#f6f7f0',
          100: '#e8ebd8',
          200: '#d1d7b2',
          300: '#b3bc82',
          400: '#96a15c',
          500: '#6B8040',
          600: '#5a6c35',
          700: '#4a5a2c',
          800: '#3d4a25',
          900: '#333e20',
        },
        charcoal: {
          DEFAULT: '#32373c',
          dark: '#1a1a1a',
          light: '#4a4a4a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'Merriweather', 'Georgia', 'serif'],
        cursive: ['var(--font-cursive)', 'Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}
