import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faJs,
  faHtml5,
  faCss3Alt,
  faSwift,
} from "@fortawesome/free-brands-svg-icons"

function Skill(props) {
  const { skill } = props
  const { id, icon, icon_prefix, frameworks } = skill
  return (
    <div className="flex-1 p-2">
      <div className="text-5xl">
        <FontAwesomeIcon icon={[icon_prefix, icon]} />
      </div>
      <div className="text-2xl">{id}</div>
      <p>
        {frameworks.map((framework, index) => {
          if (frameworks.length - 1 !== index) {
            return framework.id + ", "
          }
          return framework.id
        })}
      </p>
    </div>
  )
}

export default Skill
