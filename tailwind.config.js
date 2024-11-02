/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0a192f',
        'navy-light': '#112240',
        'slate': '#8892b0',
        'slate-light': '#ccd6f6',
        'teal': '#64ffda',
      },
    },
  },
  plugins: [],
}