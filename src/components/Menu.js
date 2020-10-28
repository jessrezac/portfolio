import React, { useState } from "react"
import { Link } from "gatsby"

import Socials from "./Socials"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import logo from "./../../content/images/rezac-outline.png"

export default function Menu(props) {
  const [isOpen, setIsOpen] = useState(false)
  const { siteTitle } = props

  return (
    <nav className="flex items-start md:items-center justify-between max-w-screen-xl mx-auto">
      <div>
        <Link
          to="/"
          className={`p-4 font-display align-left capitalize text-xl ${
            props.logoVisibility === "none" ? "invisible" : "visible"
          }`}
        >
          <img
            src={logo}
            alt={`${siteTitle} logo`}
            title={siteTitle}
            className="h-8 px-5"
          />
        </Link>
      </div>
      <button className="z-20 p-6 md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon="bars" className="" />
      </button>
      <div
        className={`flex flex-col fixed md:font-normal top-0 md:top-auto right-0 md:right-auto md:relative md:flex-row justify-around items-center px-4 py-20 md:p-4 text-xl md:text-l uppercase font-sans-300 md:space-x-4 lg:space-x-8 bg-light-coral md:bg-transparent h-screen md:h-auto w-screen md:w-auto
        ${isOpen ? "z-10" : "hidden md:flex"}`}
      >
        <Link to="/about" className="p-4">
          About
        </Link>
        <Link to="/projects" className="p-4">
          Projects
        </Link>
        <Link to="/blog" className="p-4">
          Blog
        </Link>
        <a href="https://www.learn.co/jessrezac/resume" className="p-4 whitespace-no-wrap">
          Resume <FontAwesomeIcon icon="download" className="" />
        </a>
        <div className="text-2xl md:text-xl flex justify-between space-x-2 md:space-x-6 pr-5">
          <Socials />
        </div>
      </div>
    </nav>
  )
}
