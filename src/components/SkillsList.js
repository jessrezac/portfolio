import React from "react"

import useSkillData from "../static_queries/useSkillData"
import Skill from "./Skill"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGem } from "@fortawesome/free-solid-svg-icons"
import {
  faJs,
  faHtml5,
  faCss3Alt,
  faSwift,
} from "@fortawesome/free-brands-svg-icons"

function SkillsList(props) {
  let skills = useSkillData()
  console.log(skills)
  return (
    <section id="skills" className="w-screen bg-queen-blue text-seashell">
      <div className="flex flex-wrap items-start justify-evenly p-10 text-center">
        {skills.map(skill => {
          return <Skill skill={skill.node} key={skill.node.id} />
        })}
      </div>
    </section>
  )
}

export default SkillsList
