import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faLinkedinIn,
  faTwitter,
  faDev,
} from "@fortawesome/free-brands-svg-icons"

export default function Menu(props) {
  return (
    <div className="w-screen bg-baby-pink-300 flex items-center justify-around text-l uppercase font-sans-300">
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
        <a href="https://www.linkedin.com/in/jessrezac" className="m-2 text-l">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://dev.to/jessrezac" className="m-2 text-l">
          <FontAwesomeIcon icon={faDev} />
        </a>{" "}
        <a href="https://www.twitter.com/CheerUpEmoDev" className="m-2 text-l">
          <FontAwesomeIcon icon={faTwitter} />
        </a>{" "}
      </div>
    </div>
  )
}
