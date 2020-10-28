import React from "react"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import { Helmet } from "react-helmet"
import Header from "./Header"
import Footer from "./Footer"

function Layout(props) {
  const { title, description, colorClasses, oGraphUrl, slug } = props
  const siteMetadata = useSiteMetadata()
  const siteTitle = siteMetadata.title
  const siteDescription = siteMetadata.description
  const siteUrl = siteMetadata.siteUrl

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>
          {props.page === "home" ? title : `${title} | ${siteTitle}`}
        </title>
        <meta name="description" content={description} />
        <meta
          property="og:title"
          content={props.page === "home" ? title : `${title} | ${siteTitle}`}
        />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={
            !oGraphUrl || oGraphUrl === ""
              ? `${siteUrl}/rezacdev.png`
              : `${siteUrl}${oGraphUrl}`
          }
        />
        <meta
          property="og:url"
          content={
            props.page === "project"
              ? `${siteUrl}/projects${slug}`
              : `${siteUrl}${slug}`
          }
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={
            !oGraphUrl || oGraphUrl === ""
              ? `${siteUrl}/rezacdev.png`
              : `${siteUrl}${oGraphUrl}`
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header
        siteTitle={siteTitle}
        identity={props.page === "home" ? "large" : "small"}
        colorClasses={colorClasses}
      />
      {props.children}
      <Footer siteTitle={siteTitle} siteDescription={siteDescription} />
    </>
  )
}

export default Layout
