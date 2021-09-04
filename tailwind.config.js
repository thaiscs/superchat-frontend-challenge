module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
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
