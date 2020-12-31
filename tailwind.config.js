const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./**/*.html", "src/**/*.css", "src/**/*.ts", "src/**/*.tsx"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        body: [
          "YakuHanJP",
          "Lato",
          "Noto Sans JP",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        pink: {
          100: "#fef3f6",
          200: "#fde8ed",
          300: "#fbdce3",
          400: "#fad1da",
          500: "#f9c5d1",
          600: "#c79ea7",
          700: "#95767d",
          800: "#644f54",
          900: "#32272a",
        },
        violet: {
          100: "#eaeafc",
          200: "#d5d5f9",
          300: "#c1bff5",
          400: "#acaaf2",
          500: "#9795ef",
          600: "#7977bf",
          700: "#5b598f",
          800: "#3c3c60",
          900: "#1e1e30",
        },
        white: {
          border: "#ffffff09",
          background: "#ffffff33",
          background2: "#ffffff",
        },
      },
      skew: {
        m50: "-50deg",
        "50": "50deg",
      },
      translate: {
        m50: "-50%",
      },
      boxShadow: {
        md: "0 4px 6px -1px #3c3c6030, 0 2px 4px -1px #3c3c6008",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
