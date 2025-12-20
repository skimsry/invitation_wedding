/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {        
        bubble: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0" },
          "10%": { opacity: "0.6" },
          "100%": { transform: "translateY(-120vh) scale(1.3)", opacity: "0" },
        },
        fadeOutTop: {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-40px)",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        bubble: "bubble 12s linear infinite",
        bubbleSlow: "bubble 18s linear infinite",
        bubbleFast: "bubble 8s linear infinite",
        "fade-out-top": "fadeOutTop 1.2s ease-in-out forwards",
        "fade-in-up": "fadeInUp 1.2s ease-out forwards",
      },
      
    },
  },
  plugins: [],
}