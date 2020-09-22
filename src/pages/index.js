import React from "react"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faGem } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedinIn,
  faTwitter,
  faDev,
  faJs,
  faHtml5,
  faCss3Alt,
  faSwift,
} from "@fortawesome/free-brands-svg-icons"

import Project from "../components/Project"

import headshot from "./../../content/images/jessrezac.jpg"

export default function Home() {
  const { title, description } = useSiteMetadata()
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <header id="header">
        <div className="flex justify-between">
          <h1 className="text-4xl font-display p-6 pl-10" id="identity">
            {title}
          </h1>
          <div className="text-2xl p-8" id="hamburger-menu">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <div className="w-screen bg-baby-pink-300 flex items-center justify-around text-l uppercase font-sans-300">
          <a href="#" className="p-4">
            About
          </a>
          <a href="#" className="p-4">
            Projects
          </a>
          <a href="#" className="p-4">
            Blog
          </a>
          <a href="#" className="p-4">
            Contact
          </a>
          <div className="text-xl">
            <a
              href="https://www.linkedin.com/in/jessrezac"
              className="m-2 text-l"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://dev.to/jessrezac" className="m-2 text-l">
              <FontAwesomeIcon icon={faDev} />
            </a>{" "}
            <a
              href="https://www.twitter.com/CheerUpEmoDev"
              className="m-2 text-l"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>{" "}
          </div>
        </div>
      </header>

      <section
        className="bg-hero-collage bg-cover w-screen flex items-center justify-center"
        style={{ height: "80vh" }}
      >
        <div className="bg-seashell w-4/5 md:w-2/4 p-10 rounded font-serif">
          <h2 className="font-sans text-sans uppercase text-center">
            Say hello to
          </h2>
          <div className="text-3xl font-display m-2 text-center">
            Jess Rezac
          </div>
          <div className="font-sans bold text-s">
            I'm a full stack <strong>software engineer</strong> who started
            coding as a teenager who needed her online diary to have a certain
            aesthetic. My career brought me back to web development when I
            started asking <em>"How do you experience a museum digitally?"</em>{" "}
            as Director of Digital Engagement at the American Jazz Museum in
            Kansas City, Mo. See{" "}
            <a href="#" className="shadowed">
              how I got here
            </a>{" "}
            and then what I have to say about{" "}
            <a href="#" className="shadowed">
              coding
            </a>
            ,{" "}
            <a href="#" className="shadowed">
              anti-racism
            </a>
            ,{" "}
            <a href="#" className="shadowed">
              accessible design
            </a>
            ,{" "}
            <a href="#" className="shadowed">
              productivity
            </a>
            ,{" "}
            <a href="#" className="shadowed">
              digital wellness
            </a>{" "}
            and more.
          </div>
        </div>
      </section>

      <section className="flex flex-wrap-reverse md:flex-wrap items-center justify-center p-10">
        <div className="w-full md:w-2/3 text-center p-10">
          <h2 className="font-sans text-sans uppercase">Say Hello To</h2>
          <div className="text-3xl font-display m-2">Jess Rezac</div>
          <p className="leading-7 mb-2">
            I’m a full-stack web developer with experience in Ruby and
            Javascript and a background in digital communication strategy and
            technology solutions for museums and schools. I possess strong
            skills in systems thinking and project management helping
            small-to-midsize businesses identify and implement smart, efficient
            solutions.
          </p>
          <a className="rounded bg-morning-blue p-2 m-4" href="#">
            About Me
          </a>
        </div>
        <div className="w-full md:w-1/3 text-center p-10">
          <img src={headshot} alt="" className="rounded shadowed" />
        </div>
      </section>

      <section className="py-12">
        <h2 className="font-display text-center text-4xl">Projects</h2>
        <div className="flex flex-wrap justify-between items-center p-10">
          <Project />
        </div>
      </section>

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
