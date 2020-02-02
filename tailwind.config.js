const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      spacing: {
        '9': '2.25rem',
        '11': '2.75rem',
        '14': '3.5rem',
        '18': '4.5rem',
        '54': '13.5rem',
        '80': '20rem'
      },
      fontSize: {
        xxs: '0.625rem'
      },
      stroke: {
        ...colors
      }
    }
  },
  variants: {},
  plugins: []
}
