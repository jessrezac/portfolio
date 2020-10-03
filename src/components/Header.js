import React from "react"
import useSiteMetadata from "../static_queries/useSiteMetadata"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Menu from "./../components/Menu"

export default function Header(props) {
  const { title, infoData } = useSiteMetadata()

  return (
    <header id="header" className="w-screen bg-baby-pink-300">
      <Menu />
      <div className="px-10 pb-20">
        <h1 className="text-6xl font-display pt-20" id="identity">
          {title}
        </h1>
        <div
          className="font-sans text-l"
          dangerouslySetInnerHTML={{ __html: infoData.bio }}
        ></div>
      </div>
    </header>
  )
}
