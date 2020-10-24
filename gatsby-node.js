const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              posttype
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug
    if (edge.node.frontmatter.posttype === "project") {
      createPage({
        path: `/projects${slug}`,
        component: require.resolve(`./src/templates/project.js`),
        context: { slug: slug },
      })
    } else {
      const category = edge.node.frontmatter.category
      //blog post
      createPage({
        path: slug,
        component: require.resolve(`./src/templates/post.js`),
        context: { slug: slug },
      })
    }
  })
}
