const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      xs: '300px',
      ...defaultTheme.screens,
    },

    extend: {
      backgroundImage: theme => ({
      //Photo by Leio McLaren on Unsplash
       'worker1': "url('./images/worker1.jpg')",
       //Photo by AJ Gallagher on Unsplash
       'worker2': "url('./images/worker2.jpg')",
       //Photo by Alex Suprun on Unsplash
       'worker3': "url('./images/worker3.jpg')",
       //Photo by Julian Wan on Unsplash
       'worker4': "url('./images/worker4.jpg')",
       //Photo by Edward Cisneros on Unsplash
       'worker5': "url('./images/worker5.jpg')",
       //Photo by Foto Sushi on Unsplash
       'worker6': "url('./images/worker6.jpg')",
       //Photo by Proriat Hospitality on Unsplash
       'worker7': "url('./images/worker7.jpg')",
       'icon': "url('./images/blue.png')",
       'heroBck': "url('./images/back.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
