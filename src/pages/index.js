import React from "react"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faGem } from "@fortawesome/free-solid-svg-icons"
import {
  faJs,
  faHtml5,
  faCss3Alt,
  faSwift,
} from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import ProjectList from "../components/ProjectList"
import SignUpHero from "./../components/SignUpHero"
import CallOutBanner from "./../components/CallOutBanner"
import SkillsList from "./../components/SkillsList"

export default function Home() {
  const { title, description, infoData } = useSiteMetadata()
  return (
    <Layout page="home">
      <SignUpHero />

      <ProjectList />

      <BlogList />

      <CallOutBanner />

      <SkillsList />

      <footer className="bg-morning-blue h-100">Test</footer>
    </Layout>
  )
}
