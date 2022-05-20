module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}', './public/build/*.{html,js}'],
  theme: {
    colors: {
      'background': '#01257D',
      'background-bright': '#102E8A',

      'panel': '#5037BA',

      'text-1': '#F9A504',
      'text-2': '#7E93FF',
      'text-3': '#5179F9',

      'primary': '#F9A504',
      'primary-bright': '#FFC979',

      'accent-1': '#667CF2',
      'accent-2': '#F83999'
    },
    extend: {
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
  plugins: [],
}
