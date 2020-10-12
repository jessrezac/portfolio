import React from "react"
import { Link } from "gatsby"

import Socials from "./Socials"
import logo from "./../../content/images/rezac.png"

function Footer(props) {
  const { siteTitle, siteDescription } = props
  return (
    <footer className="bg-gray-800 text-baby-pink-300 p-10 xl:px-0">
      <div className="flex flex-wrap md:flex-no-wrap justify-around items-center max-w-screen-xl mx-auto">
        <div className="pb-10 md:py-0 text-center md:text-left">
          <img src={logo} alt={siteTitle} className="w-2/5 mx-auto md:mx-0" />
          <p className="font-display text-lg">{siteDescription}</p>
          <p>
            <a href="mailto:hello@rezac.dev" className="underline">
              hello@rezac.dev
            </a>{" "}
            &bull; (816) 775-0084‬ &bull; Kansas City, Mo.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center space-x-12 mx-auto text-6xl">
            <Socials />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto text-center text-xs pt-10">
        <p>
          &copy; Jess Rezac, 2020 &bull;{" "}
          <a
            href="https://www.privacypolicyonline.com/live.php?token=1JJMUaEpCPRv1YgdD64VrfuMVvWKCcvf"
            className="underline"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
