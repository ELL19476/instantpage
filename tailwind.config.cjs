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
    fontFamily: {
      'sans': ['Roboto', 'system-ui'],
      'display': ['Roboto', 'sans-serif'],
      'body': ['Roboto', 'sans-serif'],
    },
    extend: {
      properties: {
        'background-gradient': 'linear-gradient(180deg, #0F2D8A 0%, #001E68 100%)'
      }
    },
  },
  plugins: [],
}
