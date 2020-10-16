import React from "react"

function PageMast(props) {
  const { title, subtitle, intro } = props
  return (
    <div className="flex">
      <div className="px-10 py-20">
        <div className="font-sans text-sans uppercase">{subtitle}</div>
        <h1 className="text-6xl font-display" id="identity">
          {title}
        </h1>

        <div
          className="font-sans text-xl w-3/5"
          dangerouslySetInnerHTML={{ __html: intro }}
        ></div>
      </div>
    </div>
  )
}

export default PageMast
