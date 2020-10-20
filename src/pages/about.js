import React from "react"
import Layout from "../components/Layout"
import PageMast from "../components/PageMast"
import useSiteMetadata from "../static_queries/useSiteMetadata"

function About(props) {
  const { aboutData } = useSiteMetadata()
  const { title, subtitle, intro, page_body, colors } = aboutData
  return (
    <Layout page="about" title="About" colorClasses={colors}>
      <section className={colors}>
        <PageMast title={title} subtitle={subtitle} intro={intro} />
      </section>

      <section
        className="max-w-screen-xl py-20 px-10 xl:px-0 xl:mx-auto"
        dangerouslySetInnerHTML={{ __html: page_body }}
      />
    </Layout>
  )
}

export default About
