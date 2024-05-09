/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        body: "#F1F0E8",
        primary: "#FC4100",
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
