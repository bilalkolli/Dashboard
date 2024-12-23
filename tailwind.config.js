/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'dark-purple': '#2B2945',
      'deep-teal': '#034B5E',
      'customPink': '#FF385C',
      'light-gray': '#F3F5FA',
      'light-blue': '#7C8DA6',
      'white': '#ffffff'
    }
  },
  plugins: []
}