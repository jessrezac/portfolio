import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faTwitter,
  faDev,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

import useSiteMetadata from "../static_queries/useSiteMetadata"

function Socials(props) {
  const {
    github_handle,
    linkedin_handle,
    devto_handle,
    twitter_handle,
  } = useSiteMetadata().infoData.contact
  return (
    <>
      {" "}
      <Link to={`https://www.github.com/${github_handle}`} className="p-4">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link to={`https://linkedin.com/in/${linkedin_handle}`} className="p-4">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Link>
      <Link to={`https://twitter.com/${twitter_handle}`} className="p-4">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
      <Link to={`https://dev.to/${devto_handle}`} className="p-4">
        <FontAwesomeIcon icon={faDev} />
      </Link>
    </>
  )
}

export default Socials
