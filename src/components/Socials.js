import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faTwitter,
  faDev,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

function Socials(props) {
  return (
    <>
      {" "}
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faLinkedinIn} />
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faDev} />
    </>
  )
}

export default Socials
