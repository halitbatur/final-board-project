/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  daisyui: {
    themes: [
      {
        mytheme: {
          "background": "#EFEFEF",
          "primary": "#DC944C",
          "secondary": "#263F40",
          "accent": "#11596F",
          "neutral": "#120C12",
          "base-100": "#211720",
          "info": "#8CCAC1",
          "success": "#9CB686",
          "warning": "#FFD261",
          "error": "#FC9783",
        },
      },
    ],
  },
  theme: {
    extend: {},
    fontFamily: {

      poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: [require("daisyui")],
};
