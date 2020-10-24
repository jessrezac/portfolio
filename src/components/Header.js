import React from "react"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import PageMast from "./PageMast"

import Menu from "./../components/Menu"

export default function Header(props) {
  const { title, infoData } = useSiteMetadata()

  return (
    <header
      id="header"
      className={`w-screen ${
        props.identity !== "large"
          ? props.colorClasses || "bg-gray-800 text-baby-pink-300"
          : "bg-baby-pink-300"
      }`}
    >
      <Menu
        siteTitle={title}
        logoVisibility={props.identity === "large" ? "none" : "visible"}
      />
      {props.identity === "large" && (
        <PageMast title={title} intro={infoData.bio} subtitle="Say hello to" />
      )}
    </header>
  )
}
