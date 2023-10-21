/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    // Light & dark themes are added by default (it switches automatically based on OS settings)
    // You can add another theme among the list of 30+
    // Add "data-theme='theme_name" to any HTML tag to enable the 'theme_name' theme.
    // https://daisyui.com/
    themes: ['light']
  }
}
