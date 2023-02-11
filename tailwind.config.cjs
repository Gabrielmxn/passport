/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      cursor:{
        'corte': 'url(./src/assets/scissors.png), auto',
      },
      backgroundImage: ({ theme }) => ({
        'tw': 'linear-gradient(167.96deg, #5776E5 0%, #271A45 100%)',
        'gradient-radial': `radial-gradient(circle at left top, #4554a9 14px, transparent 0), radial-gradient(circle at left bottom,  #404a99 14px, transparent 0), radial-gradient(circle at right top,  #414b9b 14px, transparent 0), radial-gradient(circle at right bottom,  #3d448f 14px, transparent 0)`,
        'card-top': 'radial-gradient(circle at left bottom, #4554a9 14px, transparent 0), radial-gradient(circle at right bottom, #424d9d 14px, transparent 0)',
        'card-bottom': 'radial-gradient(circle at left top, #404a99 14px, transparent 0), radial-gradient(circle at right top, #3d448f 14px, transparent 0)'
      }),
      colors: {
       'background': '#8257E5',
       'to': '#ffffff',
      }
    },
  },
  plugins: [],
}