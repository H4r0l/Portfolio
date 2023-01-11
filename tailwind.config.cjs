/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'specialgreen': '#97E8C0',
        'specialyellow': '#D0EAC1'
      },
      fontFamily: {
        'Alata': ['"Alata"','sans-serif'],
        'Press': ['"Press Start 2P"', 'cursive']
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    }
  }
  ,plugins: []
}

