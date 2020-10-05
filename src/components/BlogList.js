import React, { useState } from "react"
import useBlogData from "../static_queries/useBlogData"
import BlogPreview from "./BlogPreview"

export default function BlogList(props) {
  let posts = useBlogData()
  console.log(posts[0].node.id)

  return (
    <section className="bg-morning-blue text-seashell bg-cover w-screen py-20">
      <h2 className="font-display text-center text-4xl py-5">Articles</h2>
      <div className="text-center px-10 bg-cover">
        {posts.map(post => (
          <BlogPreview post={post} key={post.node.id} />
        ))}
      </div>
    </section>
  )
}
