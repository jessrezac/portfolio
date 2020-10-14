import React from "react"

import useSkillData from "../static_queries/useSkillData"
import Skill from "./Skill"

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
