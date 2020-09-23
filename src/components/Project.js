import React from "react"
import useProjectData from "../static_queries/useProjectData"
import Img from "gatsby-image"

export default function Project(props) {
  let projects = useProjectData()

  // stub with just one project
  let project = projects[0]
  console.log(project)

  return (
    <div className="bg-azure-x-100 max-w-sm rounded overflow-hidden shadow-lg mb-10  md:mb-0">
      <div className="w-full bg-queen-blue">
        <Img
          fluid={project.node.frontmatter.hero_image.childImageSharp.fluid}
          alt={project.node.frontmatter.title}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-sans uppercase font-bold text-xl mb-2 text-center">
          {project.node.frontmatter.title}
        </div>
        <div className="font-sans text-center mb-2">
          <a href={project.node.frontmatter.githubUrl} className="shadowed">
            Github
          </a>
          &nbsp;&bull;&nbsp;
          <a href={project.node.frontmatter.demoUrl} className="shadowed">
            Demo
          </a>
        </div>
        <div
          className="text-gray-700 text-base leading-7"
          dangerouslySetInnerHTML={{ __html: project.node.html }}
        ></div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-light-coral text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-light-coral text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-light-coral text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  )
}
