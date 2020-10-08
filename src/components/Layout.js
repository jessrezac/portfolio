import React from "react"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import { Helmet } from "react-helmet"
import Header from "./Header"

function Layout(props) {
  const { title, description } = props
  const siteTitle = useSiteMetadata().title

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>
          {props.page === "home" ? title : `${title} | ${siteTitle}`}
        </title>
        <meta name="description" content={description} />
      </Helmet>
      <Header identity={props.page === "home" ? "large" : "small"} />
      {props.children}
    </>
  )
}

export default Layout
