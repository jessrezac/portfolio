import React from "react"
import useSiteMetadata from "../static_queries/useSiteMetadata"

import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import ProjectList from "../components/ProjectList"
import SignUpHero from "./../components/SignUpHero"
import CallOutBanner from "./../components/CallOutBanner"
import SkillsList from "./../components/SkillsList"

export default function Home() {
  const { title, description, infoData } = useSiteMetadata()
  return (
    <Layout page="home" title={title} description={description}>
      <SignUpHero />

      <ProjectList />

      <BlogList />

      <SkillsList />

      <CallOutBanner />
    </Layout>
  )
}
