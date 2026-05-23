
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        coral: { DEFAULT: '#FF6B6B', deep: '#E85A5A' },
        sunshine: { DEFAULT: '#FFD93D', deep: '#F4C430' },
        mint: { DEFAULT: '#4ECDC4', deep: '#2BB5AB' },
        sky: { DEFAULT: '#74C0FC', deep: '#4A9EE0' },
        grape: { DEFAULT: '#A78BFA', deep: '#8B6FE8' },
        bubblegum: { DEFAULT: '#FF8FAB' },
        leaf: { DEFAULT: '#95D5B2' },
        cream: { DEFAULT: '#FFF8E7', deep: '#FFEEB8' },
        ink: { DEFAULT: '#2D2A26', soft: '#5C5751' },
        paper: { DEFAULT: '#FFFFFF' }
      },
      fontFamily: {
        display: ['Fredoka', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'elevated': '0 20px 60px -15px rgba(0, 0, 0, 0.1)',
        'glow-coral': '0 20px 50px -12px rgba(255, 107, 107, 0.4)',
        'glow-mint': '0 20px 50px -12px rgba(78, 205, 196, 0.4)',
        'glow-sunshine': '0 20px 50px -12px rgba(255, 217, 61, 0.4)',
        'glow-sky': '0 20px 50px -12px rgba(116, 192, 252, 0.4)',
        'glow-grape': '0 20px 50px -12px rgba(167, 139, 250, 0.4)',
        'glow-bubblegum': '0 20px 50px -12px rgba(255, 143, 171, 0.4)',
      }
    },
  },
  plugins: [],
}
