import React, { useState } from "react"

import Socials from "./Socials"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faBars } from "@fortawesome/free-solid-svg-icons"
import logo from "./../../content/images/rezac.png"

export default function Menu(props) {
  const [isOpen, setIsOpen] = useState(false)
  const { siteTitle } = props

  return (
    <div className="flex items-start justify-between max-w-screen-xl mx-auto">
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
      <button className="z-10 p-2 md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} className="" />
      </button>
      <div
        className={`flex text-l uppercase font-sans-300 space-x-10 ${
          isOpen
            ? "flex-col justify-around items-right fixed text-right top-0 right-0 z-0 pt-20 pr-20 bg-light-coral text-seashell h-screen w-full"
            : "hidden md:block md:items-center md:justify-around md:flex-no-wrap md:relative"
        }`}
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
        <div className="text-xl flex justify-right space-x-6 pr-5">
          <Socials />
        </div>
      </div>
    </div>
  )
}
