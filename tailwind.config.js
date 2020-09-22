const plugin = require("tailwindcss/plugin")

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "hero-collage": "url('../../content/images/collage.png')",
        "watercolor-texture": "url('../../content/images/wctexture.png')",
      }),
    },
    colors: {
      seashell: "#FAF2EB",
      "max-yellow-red": "#F6BD60",
      "baby-pink": { "100": "#fcefee", "300": "#F5CAC3" },
      "morning-blue": "#84A59D",
      "light-coral": "#F28482",
      "azure-x": { "100": "#F1F7F8", "200": "#DDEAEE" },
      silver: "#C7C7C7",
      "powder-blue": "#C0E8EC",
      "blue-yonder": "#5C7AA2",
      "queen-blue": "#5D718B",
    },
    fontFamily: {
      sans: [`Open Sans`],
      serif: [`Merriweather`],
      display: [`Trocchi`],
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addComponents }) {
      const highlights = {
        ".shadowed": {
          boxShadow: "inset 0 -0.50em #F6BD60",
        },
      }

      addComponents(highlights)
    }),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
