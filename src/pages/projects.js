import React from "react"
import Layout from "../components/Layout"
import PageMast from "../components/PageMast"
import ProjectCardList from "../components/ProjectCardList"
import useSiteMetadata from "../static_queries/useSiteMetadata"

function Projects(props) {
  const { projectsData } = useSiteMetadata()
  const { title, subtitle, intro, colors } = projectsData
  return (
    <Layout page="projects" title={title} colorClasses={colors}>
      <section className={colors}>
        <PageMast title={title} subtitle={subtitle} intro={intro} />
      </section>
      <section>
        <ProjectCardList />
      </section>
    </Layout>
  )
}

export default Projects
