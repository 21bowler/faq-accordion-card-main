/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      // Text colors
      VeryDarkBlue: "hsl(238, 29%, 16%)",
      SoftRed: "hsl(14, 88%, 65%)",
      // gradient
      softViolet: "hsl(273, 75%, 66%)",
      softBlue: "hsl(240, 73%, 65%)",
      // neutral colors
      veryGrayishBlue: "hsl(237, 12%, 33%)",
      darkGrayishBlue: "hsl(240, 6%, 50%)",
      //Dividers
      lightGrayishBlue: "hsl(240, 5%, 91%)",
    },
    fontFamily: {
      kumbh: ["Kumbh Sans"],
    },
    extend: {
      backgroundImage: {
        "desktop-img": "url('/images/bg-pattern-desktop.svg')",
        "mobile-img": "url('/images/bg-pattern-mobile.svg')",
      },
    },
  },
  plugins: [],
};
