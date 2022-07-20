/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,md}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
