import React from "react"

import Socials from "./Socials"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function Menu(props) {
  const { siteTitle } = props

  return (
    <div className="flex items-center justify-between">
      <div>
        <a
          href="#"
          className={`p-4 font-display align-left capitalize text-xl ${
            props.logoVisibility === "none" ? "invisible" : "visible"
          }`}
        >
          {siteTitle}
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
        <div className="text-xl flex justify-right space-x-6 pr-5">
          <Socials />
        </div>
      </div>
    </div>
  )
}
