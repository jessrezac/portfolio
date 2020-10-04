import React, { useState } from "react"
// import useBlogData from "../static_queries/useBlogData"
import BlogPreview from "./BlogPreview"

export default function BlogList(props) {
  // let posts = useBlogData()
  // console.log(posts[0])

  return (
    <section className="bg-morning-blue text-seashell bg-cover w-screen py-20">
      <h2 className="font-display text-center text-4xl py-5">Blog</h2>
      <div className="text-center px-10 bg-cover">
        {/* {visibleProjects.map(projectIndex => (
          <Project project={projects[projectIndex]} key={projectIndex} />
        ))} */}
        <BlogPreview />
      </div>
    </section>
  )
}