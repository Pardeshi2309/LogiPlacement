/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl":"1536",
    },
    extend: {
      keyframes: {
        width: {
          "0%, 100%": { width: "0px" },
          "50%": { width: "100%" },
        },
      },
      animation: {
        width: "width 4s ease-in-out infinite",
      },
    },

    fontFamily: {
      logo: ["Oswald"],
    }
     },
  
  plugins: [],
}

