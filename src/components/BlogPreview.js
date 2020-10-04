import React from "react"

export default function BlogPreview(props) {
  return (
    <article className=" w-3/5 mx-auto text-left">
      <div className="font-display font-bold text-2xl py-1">
        Title of article
      </div>
      <div className="font-serif text-m">test of serif</div>
      <div className="py-2">
        <a href="#" className="font-serif underline">
          Read More
        </a>
      </div>
      <div className="font-sans uppercase text-xs">Oct. 22, 2020</div>
    </article>
  )
}
