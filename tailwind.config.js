module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        darker: '#040309',
        dark: '#0E2128',
        light: '#59899D',
        lighter: '#ADBECC',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
    fontFamily: {
      body: ['Open Sans', 'Helvetica'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
}
