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

export default function Home() {
  const { title, description, infoData } = useSiteMetadata()
  return (
    <Layout page="home">
      <SignUpHero />

      <ProjectList />

      <BlogList />

      <CallOutBanner />

      <section id="skills" className="w-screen bg-queen-blue text-seashell">
        <div className="flex items-start justify-evenly p-10 text-center">
          <div className="flex-1 p-2">
            <div className="text-5xl">
              <FontAwesomeIcon icon={faGem} />
            </div>
            <div className="text-2xl">Ruby</div>
            <p>Ruby, Ruby on Rails, Sinatra, API Creation</p>
          </div>
          <div className="flex-1 p-2">
            <div className="text-5xl">
              <FontAwesomeIcon icon={faJs} />
            </div>
            <div className="text-2xl">Javascript</div>
            <p>ES6, React, Redux, Gatsby, API use</p>
          </div>
          <div className="flex-1 p-2">
            <div className="text-5xl">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="text-2xl">HTML</div>
            <p>Wordpress, HTML5</p>
          </div>
          <div className="flex-1 p-2">
            <div className="text-5xl">
              <FontAwesomeIcon icon={faCss3Alt} />
            </div>
            <div className="text-2xl">CSS</div>
            <p>CSS3, Tailwind, Bulma, Bootstrap</p>
          </div>
          <div className="flex-1 p-2">
            <div className="text-5xl">
              <FontAwesomeIcon icon={faSwift} />
            </div>
            <div className="text-2xl">Swift</div>
          </div>
        </div>
      </section>

      <footer className="bg-morning-blue h-100">Test</footer>
    </Layout>
  )
}
