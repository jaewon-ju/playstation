/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    fontFamily: {
      Tomorrow: ["Tomorrow"],
      TomorrowThin: ["TomorrowThin"],
      TomorrowMedium: ["TomorrowMedium"],
      TomorrowBold: ["TomorrowBold"],
    },
  },
  plugins: [],
};
