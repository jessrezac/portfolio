import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function SkillTag(props) {
  let { skill } = props
  let { icon, icon_prefix, id } = skill
  return (
    <span className="inline-block bg-light-coral text-seashell rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {"#" && <FontAwesomeIcon icon={[icon_prefix, icon]} />} {id}
    </span>
  )
}

export default SkillTag
