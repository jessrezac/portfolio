import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faTwitter,
  faDev,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

import logo from "./../../content/images/rezac.png"

function Footer(props) {
  const { siteTitle, siteDescription } = props
  return (
    <footer className="bg-baby-pink-300 py-10">
      <div className="flex justify-around align-center max-w-screen-xl mx-auto">
        <div>
          <img src={logo} alt={siteTitle} className="w-2/5" />
          <p className="font-display text-lg">{siteDescription}</p>
          <p>
            <a href="jess@rezac.dev" className="underline">
              hello@rezac.dev
            </a>{" "}
            &#9642; (816) 775-0084‬ &#9642; Kansas City, Mo.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center space-x-12 py-5 text-blue-yonder mx-auto text-6xl">
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faDev} />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto text-center">
        <p>
          &copy; Jess Rezac, 2020 &#9642;{" "}
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
