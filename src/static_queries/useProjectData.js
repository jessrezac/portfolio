import { graphql, useStaticQuery } from "gatsby"

export default function useProjectData() {
  const data = useStaticQuery(graphql`
    query getProjectData {
      allMarkdownRemark(
        filter: { frontmatter: { posttype: { in: ["project"] } } }
      ) {
        edges {
          node {
            id
            excerpt
            frontmatter {
              author
              date(formatString: "MMMM Do, YYYY")
              title
              github_url
              demo_url
              skills {
                id
                icon
                icon_prefix
              }
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
