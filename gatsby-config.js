/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const config = require("./config.json")
const infoData = require("./content/data/info.json")

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: config.title,
    siteUrl: `https://www.rezac.dev`,
    description: config.description,
    about: config.about,
    contact: config.contact,
    infoData: infoData,
  },
  plugins: [
    `gatsby-theme-tailwindcss`,
    `gatsby-source-fontawesome`,
    `gatsby-plugin-react-helmet`,
    /* Define filesystem */
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/content/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/content/images`,
      },
    },
    // Transform Markdown
    `gatsby-transformer-remark`,

    // Prefetch Google Fonts
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Trocchi`,
            variants: [`400`],
          },
          { family: `Open Sans`, variants: [`300`, `400`] },
          { family: `Merriweather`, variants: [`300`] },
        ],
      },
    },
  ],
}
