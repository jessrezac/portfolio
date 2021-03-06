const plugin = require("tailwindcss/plugin")

module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx",
    "./src/**/*.js",
  ],
  theme: {
    inset: {
      "1/10": "10%",
      "15": "15%",
      "1/5": "20%",
      "1/4": "25%",
      "1/3": "33%",
      "1/2": "50%",
    },
    extend: {
      backgroundImage: theme => ({
        "hero-collage": "url('../../content/images/collage.png')",
        "watercolor-texture": "url('../../content/images/wctexture.png')",
        bluepaint: "url('../../content/images/bluepaint.png')",
      }),
      spacing: {
        "90vh": "90vh",
        "80vh": "80vh",
      },
      width: {
        "10": "10%",
        "20": "20%",
        "30": "30%",
        "40": "40%",
        "50": "50%",
        "60": "60%",
      },
      colors: {
        seashell: "#FAF2EB",
        "max-yellow-red": "#F6BD60",
        "morning-blue": "#84A59D",
        "light-coral": "#F28482",
        silver: "#C7C7C7",
        "powder-blue": "#C0E8EC",
        "blue-yonder": "#5C7AA2",
        "queen-blue": "#5D718B",
        "baby-pink": { "100": "#fcefee", "300": "#F5CAC3" },
        "azure-x": { "100": "#F1F7F8", "200": "#DDEAEE" },
      },
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
        ".blue-shadowed": {
          boxShadow: "inset 0 -0.50em #5d718b",
        },
        ".coral-shadowed": {
          boxShadow: "inset 0 -0.50em #f28482",
        },
      }

      const posts = {
        "#postHtml p, #projectHtml p": {
          display: "block",
          "margin-top": "1em",
          "margin-bottom": "1em",
          "margin-left": "0",
          "margin-right": "0",
        },

        "#postHtml .footnotes p, #projectHtml .footnotes p": {
          display: "inline-block",
        },

        "#postHtml h1, #projectHtml h1": {
          display: "block",
          "font-size": "2em",
          "margin-top": "0.67em",
          "margin-bottom": "0.67em",
          "margin-left": "0",
          "margin-right": "0",
          "font-weight": "bold",
          "font-family": "Trocchi, serif",
        },

        "#postHtml h2, #projectHtml h2": {
          display: "block",
          "font-size": "1.5em",
          "margin-top": "0.83em",
          "margin-bottom": "0.83em",
          "margin-left": "0",
          "margin-right": "0",
          "font-weight": "bold",
          "font-family": "Trocchi, serif",
        },

        "#postHtml h3, #projectHtml h3": {
          display: "block",
          "font-size": "1.17em",
          "margin-top": "1em",
          "margin-bottom": "1em",
          "margin-left": "0",
          "margin-right": "0",
          "font-weight": "bold",
          "font-family": "Trocchi, serif",
        },

        "#postHtml h4, #projectHtml h4": {
          display: "block",
          "font-size": "1.33em",
          "margin-top": "1.33em",
          "margin-bottom": "1.33em",
          "margin-left": "0",
          "margin-right": "0",
          "font-weight": "bold",
          "font-family": "Trocchi, serif",
        },

        "#postHtml h5, #projectHtml h5": {
          display: "block",
          "font-size": "0.83em",
          "margin-top": "1.67em",
          "margin-bottom": "1.67em",
          "margin-left": "0",
          "margin-right": "0",
          "font-weight": "bold",
          "font-family": "Trocchi, serif",
        },

        "#postHtml h6, #projectHtml h6": {
          display: "block",
          "font-size": "0.67em",
          "margin-top": "2.33em",
          "margin-bottom": "2.33em",
          "margin-left": "0",
          "margin-right": "0",
          "font-weight": "bold",
          "font-family": "Trocchi, serif",
        },

        "#postHtml ol, #projectHtml ol": {
          display: "block",
          "list-style-type": "decimal",
          "margin-top": "1em",
          "margin-bottom": "1em",
          "margin-left": "0",
          "margin-right": "0",
          "padding-left": "40px",
        },

        "#postHtml ul, #projectHtml ul": {
          display: "block",
          "list-style-type": "disc",
          "margin-top": "1em",
          "margin-bottom": "1em",
          "margin-left": "0",
          "margin-right": "0",
          "padding-left": "40px",
        },

        "#postHtml li, #projectHtml li": {
          display: "list-item",
        },

        "#postHtml hr, #projectHtml hr": {
          "border-color": "#84A59D",
          "border-width": "1px",
          width: "60%",
          "margin-left": "auto",
          "margin-right": "auto",
        },

        "#postHtml a, #projectHtml a": {
          color: "#84A59D",
          "text-decoration": "underline",
        },

        "#postHtml blockquote, #projectHtml blockquote": {
          display: "block",
          "margin-top": "1em",
          "margin-bottom": "1em",
          "margin-left": "auto",
          "margin-right": "auto",
          "font-weight": "800",
          "font-size": "2rem",
          padding: "30px 0",
          "max-width": "500px",
          "align-self": "center",
          "border-top": "solid 2px #84A59D",
          "border-bottom": "solid 2px #84A59D",
        },

        code: {
          padding: "4px",
          "border-radius": ".25rem",
        },

        pre: {
          "max-width": "80%",
          "margin-left": "auto",
          "margin-right": "auto",
        },
      }

      addComponents([highlights, posts])
    }),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
