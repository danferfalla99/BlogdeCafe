/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "media", // or 'class'
  theme: {
    extend: {
      colors: {
        primario: "#784d3c",
        blanco: "#ffffff",
        negro: "#000000",
        gris: "#e1e1e1",
      },
      fontFamily: {
        heading: ['"PT Sans"', "sans-serif"],
        parrafos: ['"Open Sans"', "sans-serif"],
      },
      fontSize: {
        // Base size is 1.6rem from body, but Tailwind uses rems based on 16px usually.
        // style.css has html { font-size: 62.5%; } which makes 1rem = 10px.
        // Tailwind defaults to 1rem = 16px.
        // We might need to adjust or just use arbitrary values/overrides if we keep the 62.5% hack,
        // OR we can just stick to Tailwind's default sizing and approximate.
        // Given the request to "no css", removing the 62.5% hack is probably best to be "pure" Tailwind,
        // but it changes all rem values.
        // Let's try to keep it simple first.
      },
    },
  },
  plugins: [],
};
