/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', 'monospace']
      }
    },
  },
  safelist: [
    {
      pattern: /(bg|text|border)-(red|orange)*/,
      variants: ['hover'],
    },
    {
      pattern: /backdrop-blur-(sm|none|md|lg|xl|2xl|3xl)/,
    },
  ],
  plugins: [],
}

