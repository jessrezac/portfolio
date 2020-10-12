import React from "react"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import { Helmet } from "react-helmet"
import Header from "./Header"
import Footer from "./Footer"

function Layout(props) {
  const { title, description, bgColor, textColor } = props
  const siteTitle = useSiteMetadata().title
  const siteDescription = useSiteMetadata().description

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>
          {props.page === "home" ? title : `${title} | ${siteTitle}`}
        </title>
        <meta name="description" content={description} />
      </Helmet>
      <Header
        siteTitle={siteTitle}
        identity={props.page === "home" ? "large" : "small"}
        className={`bg-${bgColor} text-${textColor}`}
      />
      {props.children}
      <Footer siteTitle={siteTitle} siteDescription={siteDescription} />
    </>
  )
}

export default Layout
