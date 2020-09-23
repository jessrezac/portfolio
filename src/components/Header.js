import React from "react"
import useSiteMetadata from "../static_queries/useSiteMetadata"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import Menu from "./../components/Menu"

export default function Header(props) {
  const { title, description } = useSiteMetadata()

  return (
    <header id="header">
      <div className="flex justify-between">
        <h1 className="text-4xl font-display p-6 pl-10" id="identity">
          {title} | {description}
        </h1>
        <div className="text-2xl p-8" id="hamburger-menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <Menu />
    </header>
  )
}
