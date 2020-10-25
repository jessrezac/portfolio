/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const config = require("./config.json")
const infoData = require("./content/data/info.json")
const aboutData = require("./content/data/about.json")
const blogData = require("./content/data/blog.json")
const projectsData = require("./content/data/projects.json")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: config.title,
    siteUrl: `https://www.rezac.dev`,
    description: config.description,
    about: config.about,
    contact: config.contact,
    infoData: infoData,
    aboutData: aboutData,
    blogData: blogData,
    projectsData: projectsData,
  },
  //  Map Markdown
  mapping: {
    "MarkdownRemark.frontmatter.skills": `SkillYaml`,
  },
  plugins: [
    `gatsby-theme-tailwindcss`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
      },
    },
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
        name: "projects",
        path: `${__dirname}/content/projects`,
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

    // Transform images
    `gatsby-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Create rss feed
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Rezac.dev's RSS Feed",
          },
        ],
      },
    },
    // Transform Markdown
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-normalize-paths",
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: "Monokai Dimmed", // Or install your favorite theme from GitHub
              inlineCode: {
                marker: "•",
              },
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
            },
          },

          {
            resolve: `gatsby-remark-image-attributes`,
            options: {
              styleAttributes: [
                "width",
                "height",
                "margin-left",
                "margin-right",
                "margin-top",
                "margin-bottom",
                "float",
                "max-width",
              ],
            },
          },
        ],
      },
    },

    // Transform YAML
    `gatsby-transformer-yaml`,

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
    //Mailchimp Plugin
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
        timeout: 3500,
      },
    },
  ],
}
