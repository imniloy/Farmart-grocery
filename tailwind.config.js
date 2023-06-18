/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html-templates/*.{html,js}"],
  theme: {
    extend: {
      borderColor: {
        "brand-color": "var(--brand-primary-color)",
      },
      textColor: {
        "brand-color": "var(--brand-primary-color)",
        "color-black": "var(--color-black)",
      },
      backgroundColor: {
        "brand-color": "var(--brand-primary-color)",
        "secondary-white": "var(--color-secondary-white)",
      },
      screens: {
        "500px": "500px",
        "980px": "980px",
      },
      backgroundImage: {
        "hero-bannar-1":
          "url('https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/slider-2-min.png')",
      },
      fontFamily: {
        poppins: "var(--font-family-poppins)",
        inter: "var(--font-family-inter)",
      },
    },
  },
  plugins: [],
};
