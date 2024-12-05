/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '450': '450px'
      },
      margin: {
      '76' : '76px',
      '193': '193px'
      },
      borderRadius: {
        '23' : '23px'
      },
      borderWidth: {
        '40':'40px',
        '794': '794px'
      },
      colors: {
        color1: '#EC8305',
        color2: '#024CAA',
        color3: '#091057'
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}

