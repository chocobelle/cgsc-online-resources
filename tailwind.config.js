/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/comps/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{scss,css}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#EAE9E4',
        mainText: '#5B5B59',
        oliveGreen: '#80885F',
      },
      fontFamily: {
        fraunces: ['var(--font-fraunces)', 'serif'],
        zalando: ['var(--font-zalando-sans-semi-expanded)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
