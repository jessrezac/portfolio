import React, { useState } from "react"
import useProjectData from "../static_queries/useProjectData"
import Project from "./Project"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons"

export default function ProjectList(props) {
  let projects = useProjectData()
  const [visibleProjects, setVisibleProjects] = useState([0, 1, 2])

  function handleLeftArrowClick() {
    let adjustedProjects = [...visibleProjects]
    let nextProject = visibleProjects[visibleProjects.length - 1] + 1

    if (!projects[nextProject]) {
      nextProject = 0
    }

    adjustedProjects.shift()
    adjustedProjects.push(nextProject)
    setVisibleProjects(adjustedProjects)
  }

  function handleRightArrowClick() {
    let adjustedProjects = [...visibleProjects]
    let lastProject = visibleProjects[0] - 1

    if (!projects[lastProject]) {
      lastProject = projects.length - 1
    }

    adjustedProjects.unshift(lastProject)
    adjustedProjects.pop()
    setVisibleProjects(adjustedProjects)
  }

  return (
    <section className="py-12">
      <h2 className="font-display text-center text-4xl">Projects</h2>
      <div className="flex flex-wrap justify-between items-stretch p-10">
        {visibleProjects.map(projectIndex => (
          <Project project={projects[projectIndex]} key={projectIndex} />
        ))}
      </div>
      <div className="flex flex-wrap justify-center p-10">
        <div className="w-1/12 align-middle">
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            onClick={handleLeftArrowClick}
            size="3x"
          />
        </div>

        <div className="w-1/12">
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            onClick={handleRightArrowClick}
            size="3x"
            className="align-middle"
          />
        </div>
      </div>
    </section>
  )
}
