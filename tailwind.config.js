/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'i-green': '#00875F',
        'i-green-light': '#00B37E',
        'i-gray-900': '#121214',
        'i-gray-800': '#202024',
        'i-gray-500': '#323238',
        'i-gray-400': '#7C7C8A',
        'i-gray-300': '#8D8D99',
        'i-gray-200': '#C4C4CC',
        'i-gray-100': '#E1E1E6',
        'i-red-500': '#F75A68',
      },
    },
  },
  plugins: [],
}

