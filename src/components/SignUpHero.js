import React from "react"
import SignUpForm from "./SignUpForm"
import headshot from "./../../content/images/jessrezac.jpg"

function SignUpHero(props) {
  return (
    <section className="bg-hero-collage bg-cover w-screen">
     <div className="max-w-screen-xl mx-auto pb-20 flex flex-wrap-reverse items-center justify-center relative md:h-80vh">
        <div className="bg-seashell w-4/5 md:w-2/4 p-10 rounded font-serif lg:z-10 relative lg:absolute lg:bottom-1/5 lg:left-1/10">
          <SignUpForm />
        </div>
        <div className="w-4/5 md:w-1/3 text-center p-10 lg:z-0 relative lg:absolute lg:bottom-1/4 lg:right-15">
          <img src={headshot} alt="" className="rounded shadowed" />
        </div>
      </div>
    </section>
  )
}

export default SignUpHero
