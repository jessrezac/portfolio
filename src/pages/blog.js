import React from "react"
import Layout from "./../components/Layout"
import BlogList from "./../components/BlogList"
import PageMast from "./../components/PageMast"

function Blog(props) {
  const colorClasses = "bg-morning-blue text-seashell"
  return (
    <Layout page="blog" title="Blog" colorClasses={colorClasses}>
      <section className={colorClasses}>
        <PageMast
          title="Blog"
          subtitle="TK whatever he could not withstand"
          intro="TK intro intro"
        />
      </section>
      <section>
        <BlogList bgColor="seashell" />
      </section>
    </Layout>
  )
}

export default Blog
