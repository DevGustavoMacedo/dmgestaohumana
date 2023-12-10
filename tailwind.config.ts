import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFEB6E',
          gray: '#3B4250',
          darkGray: '#272c36',
          white: '#fffddd',
        },
      },
      fontFamily: {
        title: ['var(--font-changa)'],
        text: ['var(--font-arimo)'],
      },
      screens: {
        sm: '576px',
        '2xl': '1600px',
        '3xl': '2000px',
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        'close-menu': {
          '100%': { transform: 'scaleY(0)' },
          '0%': { transform: 'scaleY(1)' },
        },
        shake: {
          '0%': { 'margin-left': '0' },
          '25%': { 'margin-left': '0.75rem' },
          '50%': { 'margin-left': '0' },
          '75%': { 'margin-left': '-0.75rem' },
          '100%': { 'margin-left': '0' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.75s ease-in-out',
        'close-menu': 'close-menu 0.75s ease-in-out',
        shake: 'shake 0.5s infinite ease-in-out',
        progress: 'progress 10s ease-in-out',
      },
      backgroundImage: {
        mobile: 'url(/mobile.webp)',
        desktop: 'url(/desktop.webp)',
      },
    },
  },
  plugins: [],
}

export default config
