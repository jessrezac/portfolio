import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faTwitter,
  faDev,
} from "@fortawesome/free-brands-svg-icons"

import logo from "./../../content/images/rezac.png"

function Footer(props) {
  const { siteTitle, siteDescription } = props
  return (
    <footer className="bg-baby-pink-100">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto py-20">
        <div>
          <p>
            <a href="#" className="font-display capitalize text-xl">
              <img src={logo} alt="" className="w-1/5" />
            </a>
          </p>
          <p>{siteDescription}</p>
          <p>
            <a href="jess@rezac.dev" className="underline">
              Email Me
            </a>
          </p>
        </div>
        <div className="flex items-center justify-right space-x-12 text-blue-yonder">
          <div className="text-5xl">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>

          <div className="text-5xl">
            <FontAwesomeIcon icon={faTwitter} />
          </div>

          <div className="text-5xl">
            <FontAwesomeIcon icon={faDev} />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto text-center pb-10">
        <p>
          &copy; Jess Rezac, 2020 /{" "}
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
