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
          400: "#deefbf"
        },
        "blue": "#203569",
        "black":"#262626",
        "white": {
          100: "#EAE6E3",
          200: "#FFFFFF",
        },
        "grey": "#737373",

      },
      fontFamily: {
        "body": ["Poppins", "sans-serif"],
        "title": ["Montserrat", "serif"],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '32px',
        '6': '48px',
        '7': '64px',
        '8': '80px',
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '40px',
        '3xl': '48px',
        '4xl': '56px',
        '5xl': '64px',
      },
    },

  },
  plugins: [],
}

