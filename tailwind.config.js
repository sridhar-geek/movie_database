/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        body: "#DDE6ED",
        primary: "#FC4100",
        footer: "#3652AD",
        glass: "rgba(214, 214, 214, 0.4)",
      },
      fontFamily: {
        urbanist: "Urbanist",
        monoton: ["Monoton"],
        Poppins: "Poppins",
        Tourney: "Tourney",
      },
    },
  },
  plugins: [],
};
