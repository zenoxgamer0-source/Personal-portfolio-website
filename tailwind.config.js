export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: '#06b6d4',
          50: '#cffafe',
          100: '#a5f3fc',
          200: '#67e8f9',
          300: '#22d3ee',
          400: '#06b6d4',
          500: '#0891b2',
          600: '#0e7490',
          700: '#155e75',
          800: '#164e63',
          900: '#083344',
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'sans-serif'],
      },
      backdropFilter: {
        'blur-12': 'blur(12px)',
      }
    },
  },
  plugins: [],
}
