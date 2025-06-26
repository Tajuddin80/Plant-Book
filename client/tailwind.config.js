// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      screens: {
        'max1590': { 'max': '1590px' },
        'max-[1200px]': { raw: "(max-width: 1200px)" }, 
      },
    },
  },



  
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.input-style': {
          '@apply w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white dark:border-gray-600': {},
        },
      });
    },
  ],
};
