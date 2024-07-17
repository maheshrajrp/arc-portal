/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--nextra-primary-hue) 100% 45% / <alpha-value>)',
      }
    },
  },
  plugins: [],
}