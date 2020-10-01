import React, { useState } from "react"
import useProjectData from "../static_queries/useProjectData"
import Project from "./Project"

export default function ProjectList(props) {
  let projects = useProjectData()

  const [count, setCount] = useState(0)

  return (
    <section className="py-12">
      <h2 className="font-display text-center text-4xl">Projects</h2>
      <div className="flex flex-wrap justify-between items-start p-10">
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </section>
  )
}
