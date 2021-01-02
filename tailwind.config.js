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
          100: "#fee3e9",
          200: "#fdc7d2",
          300: "#fbacbc",
          400: "#fa90a5",
          500: "#f9748f",
          600: "#c75d72",
          700: "#954656",
          800: "#642e39",
          900: "#32171d",
        },
        red: {
          100: "#f5cccc",
          200: "#eb9999",
          300: "#e06666",
          400: "#d63333",
          500: "#cc0000",
          600: "#a30000",
          700: "#7a0000",
          800: "#520000",
          900: "#290000",
        },
        white: {
          "0": "#ffffff09",
          "1": "#ffffff33",
          "2": "#ffffffe3",
          "3": "#ffffff",
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
