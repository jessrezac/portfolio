import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query getMetadata {
      site {
        siteMetadata {
          title
          description
          infoData {
            contact {
              email
              github_handle
              twitter_handle
              linkedin_handle
              devto_handle
              kofi_handle
            }
            bio
          }
          aboutData {
            title
            subtitle
            intro
            page_body
            colors
          }
        }
      }
    }
  `)
  return data.site.siteMetadata
}
