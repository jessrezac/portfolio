import React from "react"
import { Link } from "gatsby"
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
      <Link to="https://www.github.com/jessrezac" className="p-4">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link to="https://linkedin.com/in/jessrezac" className="p-4">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Link>
      <Link to="https://twitter.com/cheerupemodev" className="p-4">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
      <Link to="https://dev.to/cheerupemodev" className="p-4">
        <FontAwesomeIcon icon={faDev} />
      </Link>
    </>
  )
}

export default Socials
