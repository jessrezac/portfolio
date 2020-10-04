import { graphql, useStaticQuery } from "gatsby"

export default function useBlogData() {
  const data = useStaticQuery(graphql`
    query getBlogData {
      allMarkdownRemark(
        filter: { frontmatter: { posttype: { in: ["post"] } } }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 200)
            frontmatter {
              author
              date(formatString: "MMMM Do, YYYY")
              title
              hero_image {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }

            html
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges
}
