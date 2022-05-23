module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}', './public/build/*.{html,js}'],
  theme: {
    colors: {
      'background': '#001E68',
      'background-bright': '#102E8A',

      'panel': '#5037BA',
      
      'text-1': '#FDA33A',
      'text-2': '#7E93FF',
      'text-3': '#5179F9',

      'primary': '#F9A504',
      'primary-bright': '#FFC979',

      'accent-1': '#667CF2',
      'accent-2': '#F83999'
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
      dropShadow: {
        'text': '0px 2px 1px rgba(0, 0, 0, 0.3)',
        'text-lg': '0px 8px 11px rgba(0, 0, 0, 0.3)'
      },
      boxShadow: {
        'glow': [
            '0px -1.6px 6.3px rgba(0, 0, 0, 0.4)'
        ]
      },  
      fontFamily: {
        'sans': ['Roboto', 'system-ui'],
        'display': ['Roboto', 'sans-serif'],
        'body': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
