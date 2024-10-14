/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        slider: {
          "0%": { transform: "translateX(100%)" },
          "10%": { transform: "translateX(0)" },
          "90%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        slider: "slider 3500ms linear forwards",
      },
    },
    plugins: [],
  },
};
