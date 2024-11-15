/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-in-out',
      },
    },
    fontFamily: {
      Signika: ["Signika Negative", "sans-serif"],
    },
    fontWeight: {
      "extra-light": 200,
      light: 300,
      normal: 400,
      medium: 500,
      "semi-bold": 600,
      bold: 700,
      "extra-bold": 800,
    },
  },
  plugins: [],
}

