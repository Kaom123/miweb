/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,md}", "./**/*.html"],
  theme: {
    extend: {
   
      animation:{

        'aparecer': 'aparecer 1s ease-in-out',
        'aparecerTwo':'aparecerTwo 1.2s ease-in-out'
      },
      keyframes:{

        aparecer:{
          '0%':{width: '4.2ch' },
          '100%':{width: '100%'}
        },

        aparecerTwo:{
          '0%':{opacity: '0'},
          '100%':{opacity: '1'}

        }

      },

      fontFamily:{

        'josefin':['Josefin Slab', 'serif']

      },

    },
  },
  plugins: [],
}

