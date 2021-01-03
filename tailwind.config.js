module.exports = {
  // tailwind.cssのガイド (https://tailwindcss.com/docs/guides/nextjs)を参照
  // purge: [],
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
