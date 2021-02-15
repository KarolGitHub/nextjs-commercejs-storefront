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
    scale: ['hover', 'active'],
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
    minWidth: {
      0: '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh',
      full: '100vh',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg:
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inset: 'inset 0px 0px 0px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0px 0px 15px rgba(0, 0, 0, 0.3)',
      none: 'none',
    },
    gridTemplateColumns: {
      '2/12-24': 'repeat(2, minmax(12rem, 24rem))',
      '4/12-24': 'repeat(4, minmax(12rem, 24rem))',
    },
  },
};
