module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: "iran",
    },
    extend: {
      colors: {
        maincolor: {
          50: "#568ee40d",
          100: "#568ee41a",
          200: "#568ee433",
          300: "#568ee44d",
          400: "#568ee466",
          500: "#568ee480",
          600: "#568ee499",
          700: "#568ee4b3",
          800: "#568ee4cc",
          900: "#568ee4e6",
          999: "#568ee4",
        },
        whitetransparent: {
          500: "#ffffff80",
          600: "#ffffff99",
          700: "#ffffffb3",
        },
        lightblue: "#c9d6ff80",
        coupongreen: {
          999: "#24be64",
          300: "#24be644d",
          700: "#24be64b3",
        },
        tableth: "#6799e7",
      },
      transitionProperty: {
        width: "width",
        spacing: "margin, padding",
      },
      boxShadow: {
        nav: "-5px 1px 13px -12px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
