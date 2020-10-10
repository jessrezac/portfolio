import React from "react"
import useSiteMetadata from "../static_queries/useSiteMetadata"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Menu from "./../components/Menu"

export default function Header(props) {
  const { title, infoData } = useSiteMetadata()

  return (
    <header
      id="header"
      className={`w-screen ${
        props.identity !== "large"
          ? "bg-gray-800 text-baby-pink-300"
          : "bg-baby-pink-300"
      }`}
    >
      <Menu
        siteTitle={title}
        logoVisibility={props.identity === "large" ? "none" : "visible"}
      />
      {props.identity === "large" && (
        <div className="flex">
          <div className="px-10 py-20">
            <div className="font-sans text-sans uppercase">Say hello to</div>
            <h1 className="text-6xl font-display" id="identity">
              {title}
            </h1>

            <div
              className="font-sans text-xl w-3/5"
              dangerouslySetInnerHTML={{ __html: infoData.bio }}
            ></div>
          </div>
        </div>
      )}
    </header>
  )
}
