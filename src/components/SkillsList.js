import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGem } from "@fortawesome/free-solid-svg-icons"

import {
  faJs,
  faHtml5,
  faCss3Alt,
  faSwift,
} from "@fortawesome/free-brands-svg-icons"

function SkillsList(props) {
  return (
    <section id="skills" className="w-screen bg-queen-blue text-seashell">
      <div className="flex flex-wrap items-start justify-evenly p-10 text-center">
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
  )
}

export default SkillsList
