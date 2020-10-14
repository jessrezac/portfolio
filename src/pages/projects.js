import React from "react"
import Layout from "../components/Layout"
import PageMast from "../components/PageMast"
import ProjectCardList from "../components/ProjectCardList"

function Projects(props) {
  const colorClasses = "bg-max-yellow-red text-inherit"
  return (
    <Layout page="projects" title="Projects" colorClasses={colorClasses}>
      <section className="bg-max-yellow-red">
        <PageMast
          title="Projects"
          subtitle="TK whatever he could not withstand"
          intro="TK intro intro"
        />
      </section>
      <section>
        <ProjectCardList />
      </section>
    </Layout>
  )
}

export default Projects
