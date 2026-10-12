/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050507',
          900: '#08070A',
          850: '#0B0A0E',
          800: '#101015',
          700: '#17171E',
          600: '#22222B',
        },
        gold: {
          50: '#fff9e8',
          100: '#fef0c4',
          200: '#fde08a',
          300: '#fcd050',
          400: '#f9c62e',
          500: '#F6B620',
          600: '#d99a10',
          700: '#a9770a',
          800: '#7a550a',
          900: '#4d3607',
        },
        tik: {
          cyan: '#25F4EE',
          pink: '#FE2C55',
        },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(246,182,32,.45)',
        'glow-sm': '0 0 30px -8px rgba(246,182,32,.4)',
        card: '0 20px 50px -20px rgba(0,0,0,.8)',
        cyan: '0 0 40px -10px rgba(37,244,238,.35)',
        pink: '0 0 40px -10px rgba(254,44,85,.35)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #fde08a 0%, #F6B620 45%, #a9770a 100%)',
        'gold-text': 'linear-gradient(120deg, #fde08a 0%, #F6B620 40%, #fff1c9 70%, #d99a10 100%)',
        'hero-radial': 'radial-gradient(ellipse 80% 55% at 50% -10%, rgba(246,182,32,.16), transparent 60%)',
        'cta-radial': 'radial-gradient(ellipse 90% 80% at 50% 120%, rgba(246,182,32,.2), transparent 65%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-24px) rotate(3deg)' },
        },
        'pulse-glow': {
          '0%,100%': { opacity: '.55' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'ticker-vertical': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'marquee-slow': 'marquee 55s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 11s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3.4s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
        'tick-v': 'ticker-vertical 4s ease-in-out infinite',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(.34,1.56,.64,1)',
      },
    },
  },
  plugins: [],
}
