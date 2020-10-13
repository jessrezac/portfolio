import React from "react"
import Layout from "../components/Layout"
import PageMast from "../components/PageMast"

function Projects(props) {
  return (
    <Layout
      page="projects"
      title="Projects"
      bgColor="max-yellow-red"
      textColor="inherit"
    >
      <section className="bg-max-yellow-red">
        <PageMast
          title="Projects"
          subtitle="TK whatever he could not withstand"
          intro="TK intro intro"
        />
      </section>
      <section>Hi</section>
    </Layout>
  )
}

export default Projects
