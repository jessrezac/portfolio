import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedinIn,
  faTwitter,
  faDev,
} from "@fortawesome/free-brands-svg-icons"

export default function Home() {
  return (
    <>
      <header id="header">
        <div className="flex justify-between">
          <h1 className="text-4xl font-display p-6 pl-10" id="identity">
            Jess Rezac
          </h1>
          <div className="text-2xl p-8" id="hamburger-menu">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <div className="w-screen bg-baby-pink flex items-center justify-around text-l uppercase font-sans-300">
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
          <div className="font-sans bold uppercase text-xs text-center">
            Take a deep breath
          </div>
          Jess Rezac definitely knows who she is. Absolutely is not making it up
          on the fly and copying from other people!
        </div>
      </section>

      <section className="flex justify-center items-center">
        <div className="bg-azure-x rounded">Test</div>
      </section>

      <section className="bg-watercolor-texture bg-cover p-10 w-screen flex items-center justify-center">
        <div className="w-4/5 md:w-2/4 p-10 text-center text-5xl font-display">
          Take a<br />
          deep breath.
        </div>
      </section>

      <footer className="bg-morning-blue h-100">Test</footer>
    </>
  )
}
