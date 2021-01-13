const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: [
    './src/pages/**/*.tsx',
    './src/pages/**/*.js',
    './src/components/**/*.tsx',
    './src/components/**/*.js',
    './public/index.html',
    './src/global/tailwind.css',
  ],
  darkMode: 'media',
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['active', 'hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'active'],
    spinner: ['responsive'],
  },
  plugins: [require('tailwindcss-debug-screens')],
  theme: {
    fontFamily: {
      regular: ['Quicksand', ...defaultTheme.fontFamily.sans],
      header: ['Luckiest Guy', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    spinner: () => ({
      default: {
        color: '#ffffff',
        size: '1em',
        border: '2px',
        speed: '500ms',
      },
    }),
    minHeight: {
      0: '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh',
      full: '100vh',
    },
    boxShadow: {
      '3xl': '13px 7px 20px 15px rgba(88, 83, 83, 0.75)',
    },
  },
};
