/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          // Define a custom font
          sans: ['Roboto', 'sans-serif'],
        },
      },
    },
    plugins: [],
}