const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,css}', './public/build/*.{html,js}'],
  theme: {
    colors: {
      'background': '#DFDFDF',
      'background-dark': '#2B2B2B',

      'primary': '#161617',
      'bright-1': '#FFFFFF',
      'bright-2': '#F1F8F8',
      'bright-3': '#FAFAFA',
      'bright-4': '#DFDFDF',
      
      'text-1': '#161617',
      'text-2': '#454545',
      'text-3': '#FFFFFF',
      'current': 'currentColor',

      'action-color': '#7CD59A',
    },
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'system-ui'],
        'display': ['RobotoCondensed', 'sans-serif'],
        'body': ['Roboto', 'sans-serif'],
      },
      dropShadow: {
        'cmd': [
            '2px 3px 4px rgba(0, 0, 0, 0.3)',
            '4px 7px 12px rgba(0, 0, 0, 0.18)'
        ],
        'clg': [
          '2px 2px 5px rgba(0, 0, 0, 0.3)',
          '5px 10px 20px rgba(0, 0, 0, 0.25)'
        ]
      },
      boxShadow: {
        'vertical': [
          '0px 5px 15px 3px rgba(0, 0, 0, 0.1)',
          '0px 2px 8px -4px rgba(0, 0, 0, 0.08)'
        ]
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    plugin(function({ addVariant }) {
      addVariant('hocus', ['&:hover:focus']),
      addVariant('anoh', ['&:active:not(:hover)']),
      addVariant('hactive', ['&:hover:active'])
    })

  ],
}
