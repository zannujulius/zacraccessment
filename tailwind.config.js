const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B150F",
        secondary: "#96EF76",
        lightPrimary: "#96EF7636",
      },
      backgroundImage: {
        "section-pattern":
          "url('/src/assests/svg/line_art.svg/hero-pattern.svg')",
      },
      fontFamily: {
        Sora: ["Sora", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
