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
  let initialVisibleProjects = [0, 1, 2]

  // // get window size to determine number of visible projects to show
  // if (window.innerWidth > 640) {
  //   initialVisibleProjects = [0, 1, 2]
  // }

  const [visibleProjects, setVisibleProjects] = useState(initialVisibleProjects)

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
    <section className="bg-max-yellow-red bg-cover w-screen py-20 flex flex-wrap items-center justify-center relative">
      <h2 className="font-display text-center text-4xl py-5">Projects</h2>
      <div className="flex flex-wrap justify-between items-stretch p-10 bg-cover">
        {visibleProjects.map(projectIndex => (
          <Project project={projects[projectIndex]} key={projectIndex} />
        ))}
      </div>
      <div className="flex flex-wrap justify-center p-10 space-x-20">
        <div className="max-w-1/2 align-middle cursor-pointer">
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            onClick={handleLeftArrowClick}
            size="3x"
          />
        </div>

        <div className="max-w-1/2 cursor-pointer">
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
