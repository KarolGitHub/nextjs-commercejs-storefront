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
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'active'],
    spinner: ['responsive'],
  },
  plugins: [],
};
