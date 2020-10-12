import React from "react"
import Layout from "./../components/Layout"
import BlogList from "./../components/BlogList"
import PageMast from "./../components/PageMast"

function Blog(props) {
  return (
    <Layout
      page="blog"
      title="Blog"
      bgColor="morning-blue"
      textColor="seashell"
    >
      <section className="bg-morning-blue text-seashell">
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
