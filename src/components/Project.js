import React from "react"
import Img from "gatsby-image"
import SkillTag from "./SkillTag"

export default function Project(props) {
  const { project } = props
  const { frontmatter, fields } = project.node
  const {
    title,
    github_url,
    demo_url,
    hero_image,
    kicker,
    skills,
  } = frontmatter
  return (
    <div className="bg-azure-x-100 sm:w-screen lg:w-30 rounded overflow-hidden shadow-lg m-4 lg:mb-10">
      <div className="w-full bg-queen-blue">
        <Img fluid={hero_image.childImageSharp.fluid} alt={title} />
      </div>
      <div className="px-6 py-4">
        <div className="font-sans uppercase font-bold text-xl mb-2 text-center">
          <a href={`projects${fields.slug}`}>{title}</a>
        </div>
        <div className="font-sans text-center mb-2">
          <a href={github_url} className="shadowed">
            Github
          </a>
          &nbsp;&bull;&nbsp;
          <a href={demo_url} className="shadowed">
            Demo
          </a>
        </div>
        <div className="text-gray-700 text-base leading-7">
          {kicker}{" "}
          <a
            href={`projects${fields.slug}`}
            className="underline text-blue-yonder"
          >
            Read More &raquo;
          </a>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {skills &&
          skills.map(skill => <SkillTag skill={skill} key={skill.id} />)}
      </div>
    </div>
  )
}
