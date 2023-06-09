/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html-templates/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "brand-color": "var(--brand-primary-color)",
      },
      screens: {
        "500px": "500px",
      },
      backgroundImage: {
        "hero-bannar-1":
          "url('https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/slider-2-min.png')",
      },
      fontFamily: {
        geologica: "var(--font-family-geologica)",
        poppins: "var(--font-family-poppins)",
        manrope: "var(--font-family-manrope)",
      },
    },
  },
  plugins: [],
};
