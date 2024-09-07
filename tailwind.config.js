/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
     './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

