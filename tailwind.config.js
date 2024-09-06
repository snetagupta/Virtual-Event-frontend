const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0C172F',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
});
