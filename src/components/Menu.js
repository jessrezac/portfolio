import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useSiteMetadata from "../static_queries/useSiteMetadata"

import {
  faLinkedinIn,
  faTwitter,
  faDev,
} from "@fortawesome/free-brands-svg-icons"

import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function Menu(props) {
  const { title } = useSiteMetadata()

  return (
    <div className="flex items-center justify-between">
      <div>
        <a
          href="#"
          className={`p-4 font-display align-left capitalize text-xl transition-all duration-500 ease-in-out ${
            props.logoVisibility === "none" ? "invisible" : "visible"
          }`}
        >
          {title}
        </a>
      </div>
      <div className="flex items-center justify-around text-l uppercase font-sans-300 space-x-10">
        <a href="#" className="p-4">
          About
        </a>
        <a href="#" className="p-4">
          Projects
        </a>
        <a href="#" className="p-4">
          Blog
        </a>
        <a href="#" className="p-4">
          Contact
        </a>
        <div className="text-xl">
          <a
            href="https://www.linkedin.com/in/jessrezac"
            className="m-2 text-l"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://dev.to/jessrezac" className="m-2 text-l">
            <FontAwesomeIcon icon={faDev} />
          </a>{" "}
          <a
            href="https://www.twitter.com/CheerUpEmoDev"
            className="m-2 text-l"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>{" "}
          <a href="#" className="text-2xl p-6" id="hamburger-menu">
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>
      </div>
    </div>
  )
}
