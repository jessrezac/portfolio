import React from "react"
import useProjectData from "../static_queries/useProjectData"
import Project from "./Project"

function ProjectCardList(props) {
  let projects = useProjectData()

  return (
    <div className="flex flex-wrap justify-start items-stretch max-w-screen-xl mx-auto my-10">
      {projects.map(project => (
        <Project project={project} key={project.id} />
      ))}
    </div>
  )
}

export default ProjectCardList
