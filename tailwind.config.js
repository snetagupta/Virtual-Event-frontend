const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f05537',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
});
