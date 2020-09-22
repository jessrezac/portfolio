import React from "react"

export default function Project(props) {
  return (
    <div className="bg-azure-x-100 max-w-sm rounded overflow-hidden shadow-lg mb-10  md:mb-0">
      <div className="w-full bg-queen-blue">eventually a photo</div>
      <div className="px-6 py-4">
        <div className="font-sans uppercase font-bold text-xl mb-2 text-center">
          Bout Manager
        </div>
        <div className="font-sans text-center mb-2">
          <a href="#" className="shadowed">
            Github
          </a>
          &nbsp;&bull;&nbsp;
          <a href="#" className="shadowed">
            Demo
          </a>
        </div>
        <p className="text-gray-700 text-base leading-7">
          A React application with a Rails API for managing slam poetry bouts
          designed for Louder Than A Bomb.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-light-coral text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-light-coral text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-light-coral text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  )
}
