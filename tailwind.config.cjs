/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        viio: {
          blue: '#3cbdff',
          'light-blue': '#d0e9fb',
          dark: '#000000',
          gray: {
            DEFAULT: '#8e8e8e',
            text: '#4b4b4b',
            border: '#e1e1e1',
          }
        }
      },
      fontFamily: {
        sans: ['"Work Sans"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'headline-desktop': '-6.5px',
        'headline-mobile': '-3.5px',
        'navbar': '-0.3px',
      },
      boxShadow: {
        'button': '0px 25px 50px -12px rgba(0,0,0,0.2)',
        'input': '0px 1.319px 3.167px 0px rgba(0,0,0,0.03), 0px 5.542px 5.542px 0px rgba(0,0,0,0.03), 0px 12.402px 7.389px 0px rgba(0,0,0,0.02), 0px 22.166px 8.972px 0px rgba(0,0,0,0.01)',
      }
    },
  },
  plugins: [],
}
