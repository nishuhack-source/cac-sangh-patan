/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f7f9fc',
          100: '#e1e6f0',
          200: '#c8d2e8',
          300: '#a9bbdd',
          400: '#8a9ed2',
          500: '#1a2036',
          600: '#1a2036',
          700: '#1a2036',
          800: '#1a2036',
          900: '#1a2036',
          950: '#0e1220',
        },
        gold: {
          50: '#fff9f0',
          100: '#fff2db',
          200: '#ffe7b9',
          300: '#ffd88b',
          400: '#ffca5a',
          500: '#ffb71d',
          600: '#cc9315',
          700: '#a7720c',
          800: '#7a5200',
          900: '#552e00',
        },
      },
      fontFamily: {
        hindi: ['Noto Sans Devanagari', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
