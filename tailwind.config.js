/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'farm-green': '#2d6a4f',
        'farm-light': '#52b788',
        'farm-dark': '#1b4332',
        'soil': '#8d6e63',
        'warning': '#f4a261',
        'danger': '#e63946',
      },
    },
  },
  plugins: [],
};
