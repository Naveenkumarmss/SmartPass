/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bus-bg': "url('/assets/img/bus_bg.webp')",
        'profile-bg': "url('/assets/img/profile.jpg')",
      },
      screens: {
        'sm': { 'raw': '(max-width: 767px)' },
        'md': { 'raw': '(min-width: 768px)' },
      }
    },
  },
  plugins: [],
  
}