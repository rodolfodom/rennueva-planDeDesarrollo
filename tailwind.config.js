/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "green": {
          100: "#A2CC07",
          200: "#90C92A",
          300: "#239326",
        },
        "blue": "#203569",
        "black":"#262626",
        "white":"#EAE6E3",
        "grey": "#737373" 	
      },
      fontFamily: {
        "title": ["Poppins", "sans-serif"],
        "body": ["Montserrat", "serif"],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '32px',
        '6': '48px',
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '64px',
      },
    },
  },
  plugins: [],
}

