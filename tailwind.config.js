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
        /* Archival dance gallery (legacy site) */
        gold: {
          400: '#e8d48b',
          500: '#D4AF37',
          600: '#b8962e',
          700: '#9a7b1f',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'Merriweather', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
