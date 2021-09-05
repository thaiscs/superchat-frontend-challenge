module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        225: "225px",
        350: "350px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
