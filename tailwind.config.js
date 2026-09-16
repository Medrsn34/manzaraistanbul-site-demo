/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.php", "./js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
          sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
          gold: '#cba774',
      }
    },
  },
  plugins: [],
}
