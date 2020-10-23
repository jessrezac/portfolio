import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import useSiteMetadata from "../static_queries/useSiteMetadata"

function Socials(props) {
  const {
    github_handle,
    linkedin_handle,
    devto_handle,
    twitter_handle,
    kofi_handle,
  } = useSiteMetadata().infoData.contact
  return (
    <>
      {" "}
      <a href={`https://www.github.com/${github_handle}`} className="p-4">
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
      <a href={`https://linkedin.com/in/${linkedin_handle}`} className="p-4">
        <FontAwesomeIcon icon={["fab", "linkedin"]} />
      </a>
      <a href={`https://twitter.com/${twitter_handle}`} className="p-4">
        <FontAwesomeIcon icon={["fab", "twitter"]} />
      </a>
      <a href={`https://dev.to/${devto_handle}`} className="p-4">
        <FontAwesomeIcon icon={["fab", "dev"]} />
      </a>
      <a href={`https://www.ko-fi.com/${kofi_handle}`} className="p-4">
        <FontAwesomeIcon icon="coffee" />
      </a>
    </>
  )
}

export default Socials
