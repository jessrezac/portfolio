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

import ProjectList from "../components/ProjectList"
import Header from "./../components/Header"

import Menu from "./../components/Menu"

import headshot from "./../../content/images/jessrezac.jpg"

export default function Home() {
  const { title, description, infoData } = useSiteMetadata()
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <section className="bg-hero-collage bg-cover w-screen pb-20 flex flex-wrap-reverse items-center justify-center relative md:h-80vh">
        <div className="bg-seashell w-4/5 md:w-2/4 p-10 rounded font-serif lg:z-10 relative lg:absolute lg:bottom-1/5 lg:left-1/10">
          <h2 className="font-sans text-sans uppercase text-center">
            Say hello to
          </h2>
          <div className="text-3xl font-display m-2 text-center">
            Jess Rezac
          </div>
          <div className="font-sans bold text-s">
            <div dangerouslySetInnerHTML={{ __html: infoData.bio }}></div>
          </div>
        </div>
        <div className="w-4/5 md:w-1/3 text-center p-10 lg:z-0 relative lg:absolute lg:bottom-1/4 lg:right-15">
          <img src={headshot} alt="" className="rounded shadowed" />
        </div>
      </section>

      <ProjectList />

      <section className="bg-watercolor-texture bg-cover p-10 w-screen flex items-center justify-center">
        <div className="w-4/5 md:w-2/4 p-10 text-center text-5xl font-display">
          Take a<br />
          deep breath.
        </div>
      </section>

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
    </>
  )
}
