import React from "react"
import Layout from "./../components/Layout"
import BlogList from "./../components/BlogList"
import PageMast from "./../components/PageMast"
import useSiteMetadata from "../static_queries/useSiteMetadata"

function Blog(props) {
  const { blogData } = useSiteMetadata()
  const { title, subtitle, intro, colors } = blogData
  return (
    <Layout page="blog" title={title} colorClasses={colors}>
      <section className={colors}>
        <PageMast title={title} subtitle={subtitle} intro={intro} />
      </section>
      <section>
        <BlogList bgColor="seashell" />
      </section>
    </Layout>
  )
}

export default Blog
