import React from "react"
import Layout from "../components/Layout"
import PageMast from "../components/PageMast"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import headshot from "./../../content/images/jessrezac-illustration-sq.jpg"

function About(props) {
  const { aboutData } = useSiteMetadata()
  const { title, subtitle, intro, page_body, colors } = aboutData
  return (
    <Layout page="about" title="About" colorClasses={colors}>
      <section className={colors}>
        <PageMast title={title} subtitle={subtitle} intro={intro} />
      </section>

      <section className="flex flex-wrap justify-start items-stretch md:space-x-10 max-w-screen-xl py-20 px-10 xl:px-0 xl:mx-auto">
        <div className="md:flex-1">
          <img
            src={headshot}
            alt="stylized illustrated portrait of Jess Rezac"
          />
        </div>
        <div className="md:flex-1">
          <h2 className="font-display text-center text-4xl pb-5">Why I Code</h2>

          <div id="postHtml" dangerouslySetInnerHTML={{ __html: page_body }} />
        </div>
      </section>
    </Layout>
  )
}

export default About
