import React, { useState } from "react"

import Socials from "./Socials"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faBars } from "@fortawesome/free-solid-svg-icons"
import logo from "./../../content/images/rezac.png"

export default function Menu(props) {
  const [isOpen, setIsOpen] = useState(false)
  const { siteTitle } = props

  return (
    <div className="flex items-start md:items-center justify-between max-w-screen-xl mx-auto">
      <div>
        <a
          href="#"
          className={`p-4 font-display align-left capitalize text-xl ${
            props.logoVisibility === "none" ? "invisible" : "visible"
          }`}
        >
          <img
            src={logo}
            alt={`${siteTitle} logo`}
            title={siteTitle}
            className="h-6 px-5"
          />
        </a>
      </div>
      <button className="z-20 p-6 md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} className="" />
      </button>
      <div
        className={`flex flex-col fixed font-black md:font-normal top-0 md:top-auto right-0 md:right-auto md:relative md:flex-row justify-around items-center px-4 py-20 md:p-4 text-xl md:text-l uppercase font-sans-300 md:space-x-4 lg:space-x-10 bg-light-coral md:bg-transparent text-seashell md:text-baby-pink-300 h-screen md:h-auto w-screen md:w-auto
        ${isOpen ? "z-10" : "hidden md:flex"}`}
      >
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
        <div className="text-4xl md:text-xl flex justify-around space-x-6 pr-5">
          <Socials />
        </div>
      </div>
    </div>
  )
}
