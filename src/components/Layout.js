import React from "react"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import { Helmet } from "react-helmet"
import Header from "./Header"

function Layout(props) {
  const { title, description } = props

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header identity={props.page === "home" ? "large" : "small"} />
      {props.children}
    </>
  )
}

export default Layout
