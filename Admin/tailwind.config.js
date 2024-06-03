/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        outfit:["Outfit"],
        Noto:["Noto Sans"],
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'pop-up': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        fadein: 'fadein 3s ease-in-out',
        'pop-up': 'pop-up  ease-in-out',
      },
      screens: {
        'custom': {'max': '1050px'},
        'custom2':{'max':'900px'},
        'custom3':{'max':'750px'},
      },
    },
  },
  plugins: [],
}

