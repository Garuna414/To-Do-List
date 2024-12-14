/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Space Grotesk", "serif"],
        body: ["Inter", "serif"],
      },
      fontWeight: {
        heading: 400,
        body: 400,
      },
      fontStyle: {
        heading: "normal",
        body: "normal",
      },
    },
  },
  plugins: [],
};
