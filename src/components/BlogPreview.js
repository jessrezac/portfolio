import React from "react"

export default function BlogPreview(props) {
  const {
    frontmatter,
    excerpt,
    timeToRead,
    wordCount,
    fields,
  } = props.post.node
  return (
    <article className="max-w-screen md:w-3/5 mx-auto text-left pb-10">
      <div className="font-display font-bold text-2xl">
        <a href={`.${fields.slug}`}>{frontmatter.title}</a>
      </div>
      <div className="font-sans uppercase text-xs py-2">
        {frontmatter.date} &bull; {timeToRead} minutes to read &bull;{" "}
        {wordCount.words} words
      </div>
      <div className="font-serif text-m">{excerpt}</div>
      <div>
        <a href={`.${fields.slug}`} className="font-serif underline">
          Read More
        </a>
      </div>
    </article>
  )
}
