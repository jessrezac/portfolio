import { graphql, useStaticQuery } from "gatsby"

export default function useSkillData() {
  const data = useStaticQuery(graphql`
    query getSkillData {
      allSkillYaml {
        edges {
          node {
            id
            icon
            icon_prefix
            frameworks {
              id
              icon
              icon_prefix
            }
          }
        }
      }
    }
  `)
  return data.allSkillYaml.edges
}
