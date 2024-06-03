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
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadein: 'fadein 3s ease-in-out',
        'pop-up': 'pop-up  ease-in-out',
        'rotate': 'rotate 1s infinite',
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

