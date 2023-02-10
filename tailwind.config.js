/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      'footer': '#232323',
      'white': '#FFF',
      'link': '#EF2C2C',
      'input': '#dadada',
      'black' : '#000'
    },
    screens: {
      xs: "300px",
      sm: "1002px",
      md: "1022px",
      lg: "1092px",
      xl: "1280px",
    },
    
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
