/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: ({ theme }) => ({
        'tw': 'radial-gradient(ellipse , #5776E5 0%, #271A45 100%)',
        'gradient-radial': `radial-gradient(circle at left top,  #5776E5 19px, transparent 0), radial-gradient(circle at left bottom,  #5776E5 19px, transparent 0), radial-gradient(circle at right top,  #5776E5 19px, transparent 0), radial-gradient(circle at right bottom,  #5776E5 19px, transparent 0)`,
        'card-top': 'radial-gradient(circle at left bottom, lightblue 19px, transparent 0), radial-gradient(circle at right bottom, lightblue 19px, transparent 0)',
        'card-bottom': 'radial-gradient(circle at left top, lightblue 19px, transparent 0), radial-gradient(circle at right top, lightblue 19px, transparent 0)'
      }),
      colors: {
       'background': '#8257E5',
       'to': '#ffffff',
      }
    },
  },
  plugins: [],
}