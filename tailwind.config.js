/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#080B10',
          800: '#0D1117',
        },
        accent: {
          green: '#00FFAA',
          blue: '#3B82F6',
        }
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
