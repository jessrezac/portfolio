import React from "react"
import paint from "./../../content/images/bluepaint.png"

function CallOutBanner(props) {
  return (
    <section className="bg-baby-pink-100 bg-cover p-10 w-screen flex items-center justify-center">
      <div className="bg-bluepaint bg-contain bg-center bg-no-repeat w-4/5 md:w-2/4 p-10 text-center text-5xl font-display">
        Take a<br />
        deep breath.
      </div>
    </section>
  )
}

export default CallOutBanner
