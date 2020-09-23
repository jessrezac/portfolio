import { graphql, useStaticQuery } from "gatsby"

export default function useProjectData() {
  const data = useStaticQuery(graphql`
    query getProjectData {
      allMarkdownRemark {
        edges {
          node {
            id
            excerpt
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
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges
}
