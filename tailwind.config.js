/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {},
    theme: {
      extend: {
        screens: {
          '2xl': '1440px'
        }
      }
    },
    colors: {

      'soft-red': '#FE7867',
      'yellow': '#FAD400',
      'dark-desatured-cyan': '#25564B',
      'dark-blue': '#19536B',
      'dark-moderate-cyan': '#458C7E',

      'very-dark-desaturated-blue': '#23303E',
      'very-dark-grayish-blue': '#5A636C',
      'dark-grayish-blue': '#818498',
      'grayish-blue': '#A7ABAE',
      'white': '#FFFFFF'
    },
    fontFamily: {
      sans: ['Barlow','sans-serif'],
      serif: ['Fraunces','serif']
    }
  },
  plugins: [],
}

