/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        secondary: "#666666",
        background: "#ffffff",
        surface: "#f7f7f7",
        accent: "#ff4c3b",
        border: "#eee",
      },
    },
  },
  plugins: [],
};
